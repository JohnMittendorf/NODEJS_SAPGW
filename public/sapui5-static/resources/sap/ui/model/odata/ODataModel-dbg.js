/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/**
 * OData-based DataBinding
 *
 * @namespace
 * @name sap.ui.model.odata
 * @public
 */

// Provides class sap.ui.model.odata.ODataModel
jQuery.sap.declare("sap.ui.model.odata.ODataModel");
jQuery.sap.require("sap.ui.model.odata.datajs");
jQuery.sap.require("sap.ui.model.Model");
jQuery.sap.require("sap.ui.model.odata.ODataPropertyBinding");
jQuery.sap.require("sap.ui.model.odata.ODataListBinding");

/*global OData *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 * Constructor for a new ODataModel.
 *
 * @param {string} sServiceUrl required - base uri of the service to request data from
 * @param {string} [bJSON] (optional) true to request data as JSON
 * @param {string} [sUser] (optional) user
 * @param {string} [sPassword] (optional) password
 *
 * @class
 * Model implementation for oData format
 *
 * @extends sap.ui.model.Model
 *
 * @author SAP AG
 * @version 1.4.3
 *
 * @constructor
 * @public
 */
sap.ui.model.odata.ODataModel = function(sServiceUrl, bJSON, sUser, sPassword) {
	sap.ui.model.Model.apply(this, arguments);

	this.sDefaultBindingMode = sap.ui.model.BindingMode.OneWay;
	this.mSupportedBindingModes = {"OneWay": true, "OneTime": true, "TwoWay":true};
	this.bCountSupported = true;
	this.oRequestQueue = [];

	// prepare variables for request headers, data and metadata
	// TODO: metadata should be an separate object furthermore
	this.oHeaders = {};
	this.oData = {};
	this.oMetadata = {};

	// determine the service base url and the url parameters
	if (sServiceUrl.indexOf("?") == -1) {
		this.sServiceUrl = sServiceUrl;
	} else {
		var aUrlParts = sServiceUrl.split("?");
		this.sServiceUrl = aUrlParts[0];
		this.sUrlParams = aUrlParts[1];
	}

	// Remove trailing slash (if any)
	this.sServiceUrl = this.sServiceUrl.replace(/\/$/, "");

	// store user and password
	this.sUser = sUser;
	this.sPassword = sPassword;
	
	this.oHeaders["x-csrf-token"] = "Fetch";

	// load the metadata before setting accept headers because metadata is only available as XML
	this._loadMetadata();

	// set the the header for the accepted content types
	if (bJSON) {
		this.oHeaders["Accept"] = "application/json";
	} else {
		this.oHeaders["Accept"] = "application/atom+xml,application/atomsvc+xml,application/xml";
	}
	// set version to 2.0 because 1.0 does not support e.g. skip/top
	//this.oHeaders["DataServiceVersion"] = "1.0";
	this.oHeaders["MaxDataServiceVersion"] = "2.0";
};

// chain the prototypes
sap.ui.model.odata.ODataModel.prototype = jQuery.sap.newObject(sap.ui.model.Model.prototype);

/*
 * Describe the sap.ui.model.odata.ODataModel. Resulting metadata can be obtained via
 * sap.ui.model.odata.ODataModel.getMetadata();
 */
sap.ui.base.Object.defineClass("sap.ui.model.odata.ODataModel", {

	// ---- object ----
	baseType : "sap.ui.model.Model",
	publicMethods : []
});

sap.ui.model.odata.ODataModel.M_EVENTS = {
		RejectChange: "rejectChange"
};

sap.ui.model.odata.ODataModel.prototype.fireRejectChange = function(mArguments) {
	this.fireEvent("rejectChange", mArguments);
	return this;
};

sap.ui.model.odata.ODataModel.prototype.attachRejectChange = function(oData, fnFunction, oListener) {
	this.attachEvent("rejectChange", oData, fnFunction, oListener);
	return this;
};

sap.ui.model.odata.ODataModel.prototype.detachRejectChange = function(fnFunction, oListener) {
	this.detachEvent("rejectChange", fnFunction, oListener);
	return this;
};

/**
 * creates a request object
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._createRequest = function(sPath, aUrlParams, bAsync) {

	// create the url for the service
	var sUrl = this.sServiceUrl;
	if (sPath) {
		if (!jQuery.sap.startsWith(sPath, "/")) {
			sUrl += "/";
		}
		sUrl += sPath;
	}
	if (!aUrlParams) {
		aUrlParams = [];
	}
	if (this.sUrlParams) {
		aUrlParams.push(this.sUrlParams);
	}
	if (aUrlParams.length > 0) {
		sUrl += "?" + aUrlParams.join("&");
	}

	// create a request object for the url, url params and async option
	return {
		requestUri: sUrl,
		headers: this.oHeaders,
		async: bAsync,
		user: this.sUser,
		password: this.sPassword
	};

};

/**
 * Loads the metadata for the service
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._loadMetadata = function() {

	// create a sychronous request object for the metadata request
	var oRequest = this._createRequest("$metadata", null, false);

	// request the metadata of the service (currently this is done synchronously)
	var that = this;

	function _handleSuccess(oMetadata, oResponse) {
		if (oResponse) {
			that.oHeaders["x-csrf-token"] = oResponse.headers["x-csrf-token"];
		}
		that.oMetadata = oMetadata;
	}

	function _handleError(oError) {
		var sErrorMsg = "The following problem occurred: " + oError.message;
		if (oError.response){
			sErrorMsg += oError.response.statusCode + "," +
						 oError.response.statusText + "," +
						 oError.response.body;
		}
		jQuery.sap.log.fatal(sErrorMsg);
	}

	// execute the request
	OData.read(oRequest, _handleSuccess, _handleError, OData.metadataHandler);

};

/**
 * Does a request using the provided sServiceUrl and config
 * parameters in the model's constructor and sets the response data into the
 * model. This request is performed asynchronously.
 *
 * @param {string}
 *            sPath Path A string containing the path to the data which should
 *            be retrieved. The path is concatenated to the sServiceUrl
 *            which was specified in the model constructor.
 * @param {function}
 *            fnSuccess a callback function which is called when the data has
 *            been successfully retrieved and stored in the model
 * @param {function}
 *            fnError a callback function which is called when the request
 *            failed
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._loadData = function(sPath, aParams, fnSuccess, fnError, oContext){

	 /*
	  * TODO: Johannes, Malte: check whether this is OK or not?
	  *
	  * We added a 5th parameter to support loading data within a context scope.
	  * In case of the ExactBrowser this led to the issue, that fn: checkUpdate
	  * updated all the bindings and also the root binding, which finally reset
	  * the ExactBrowser and the nested levels will not show up. By adding the
	  * context to this function it is possible now to update only the relevant
	  * bindings!
	  *
	  * To reproduce the issue just avoid to pass the binding context to the
	  * checkUpdate function and use the following Snippix sample: #3867
	  *
	  * Other change is in the ODataModel where this function is called when
	  * loading additional contexts.
	  */

	// create a request object for the data request
	var oRequest = this._createRequest(sPath, aParams, true);

	// request the data of the service for the given path
	var that = this;

	function _handleSuccess(oData, oResponse) {

		// no data available
		if (!oData) {
			jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: " + oResponse.requestUri);
		}

		aResults = aResults.concat(oData.results);
		// check if not all requested data was loaded
		if (oData.__next){
			// replace request uri with next uri to retrieve additional data
			oRequest.requestUri = oData.__next;
			readRequestedData(oRequest);
		}else{
			// all data is read so merge all data
			jQuery.extend(oData.results, aResults);
			// broken implementations need this
			if (oData.results && !jQuery.isArray(oData.results)) {
				oData = oData.results;
			}

			// adding the result data to the data object
			if (oData.results) {
				jQuery.each(oData.results, function(i, entry) {
					that.oData[that._getKey(entry)] = entry;
				});
			} else {
				that.oData[that._getKey(oData)] = oData;
			}

			if (fnSuccess) {
				fnSuccess(oData);
			}
			that.sChangeKey = null;
			that.checkUpdate(oContext); /* TODO: Johannes, Malte: check whether this is OK or not? */
			that.fireRequestCompleted({url : oRequest.requestUri, type : "GET", async : oRequest.async, info: "Accept headers:" + that.oHeaders["Accept"]});
		}
	}

	function _handleError(oError) {
		if (fnError) {
			fnError();
		}
		that.sChangeKey = null;
		that.checkUpdate(oContext); /* TODO: Johannes, Malte: check whether this is OK or not? */
		var mParameters = {},
		sErrorMsg = "The following problem occurred: " + oError.message;

		mParameters.message = oError.message;
		if (oError.response){
			sErrorMsg += oError.response.statusCode + "," +
			oError.response.statusText + "," +
			oError.response.body;
			mParameters.statusCode = oError.response.statusCode;
			mParameters.statusText = oError.response.statusText;
			mParameters.responseText = oError.response.body;
		}
		jQuery.sap.log.fatal(sErrorMsg);
		that.fireRequestCompleted({url : oRequest.requestUri, type : "GET", async : oRequest.async, info: "Accept headers:" + that.oHeaders["Accept"]});
		that.fireRequestFailed(mParameters);

	}

	/**
	 * this method is used to retrieve all desired data. It triggers additional read requests if the server paging size
	 * permits to return all the requested data. This could only happen for servers with support for oData > 2.0.
	 */
	function readRequestedData(request){
		// execute the request and use the metadata if available
		OData.read(oRequest, _handleSuccess, _handleError, undefined, undefined, that.oMetadata);
	}

	// execute request
	var aResults = [];
	this.fireRequestSent({url : oRequest.requestUri, type : "GET", async : oRequest.async, info: "Accept headers:" + this.oHeaders["Accept"]});
	readRequestedData(oRequest);
};

/**
 * removes all existing data from the model and removes all bindings
 */
sap.ui.model.odata.ODataModel.prototype.removeData = function(){
	this.oData = {};
	this.aBindings = [];
};

/**
 * Private method iterating the registered bindings of this model instance and initiating their check for update
 *
 * @param {object}
 *          oUpdateInfo
 * @param {string}
 *          oUpdateInfo.path
 *
 * @private
 */
sap.ui.model.odata.ODataModel.prototype.checkUpdate = function(oContext) {
	var aBindings = this.aBindings.slice(0);
	jQuery.each(aBindings, function(iIndex, oBinding) {
		if (!oContext || oBinding.getContext() == oContext) {
			oBinding.checkUpdate();
		}
	});
};

/**
 * @see sap.ui.model.Model.prototype.bindProperty
 */
sap.ui.model.odata.ODataModel.prototype.bindProperty = function(sPath, oContext) {
	var oBinding = new sap.ui.model.odata.ODataPropertyBinding(this, sPath, oContext);
	return oBinding;
};

/**
 * @see sap.ui.model.Model.prototype.bindList
 */
sap.ui.model.odata.ODataModel.prototype.bindList = function(sPath, oContext, oSorter, aFilters) {
	var oBinding = new sap.ui.model.odata.ODataListBinding(this, sPath, oContext, oSorter, aFilters);
	return oBinding;
};

/**
 * @see sap.ui.model.Model.prototype.createBindingContext
 */
sap.ui.model.odata.ODataModel.prototype.createBindingContext = function(sPath, oContext, fCallBack) {
	var oData = this._getObject(sPath, oContext),
		that = this;
	if (oData) {
		fCallBack(this._getKey(oData));
	}
	else {
		var bIsRelative = !jQuery.sap.startsWith(sPath, "/");
		var sFullPath = (bIsRelative && oContext ? oContext + "/" : "") + sPath;
		this._loadData(sFullPath, null, function(oData) {
			var sKey = oData ? that._getKey(oData) : undefined;
			if (sKey && oContext && bIsRelative) {
				that.oData[oContext][sPath] = {__ref: sKey};
			}
			fCallBack(sKey);
		}, function() {
			fCallBack(); // error - notify to recreate contexts
		});
	}
};

/**
 * @see sap.ui.model.Model.prototype.destroyBindingContext
 */
sap.ui.model.odata.ODataModel.prototype.destroyBindingContext = function(oContext) {
};

/**
 * Sets whether this OData service supports $count on its collections
 *
 * @param {boolean} bCountSupported
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setCountSupported = function(bCountSupported) {
	this.bCountSupported = bCountSupported;
};

/**
 * Returns whether this model supports the $count on its collections
 *
 * @returns {boolean}
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.isCountSupported = function() {
	return this.bCountSupported;
};

/**
 * Returns the key part from the complete entry URI
 */
sap.ui.model.odata.ODataModel.prototype._getKey = function(oEntry) {
	var sURI = oEntry.__metadata.uri;
	return sURI.substr(sURI.lastIndexOf("/") + 1);
};


/**
 * Returns the value for the property with the given <code>sPropertyName</code>
 *
 * @param {string}
 *          sPath the path/name of the property
 * @param {Object} [oContext] the context if available to access the property value
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getProperty = function(sPath, oContext) {
	return this._getObject(sPath, oContext);

};

/**
 * @param sPath
 * @param oContext
 * @returns
 */
sap.ui.model.odata.ODataModel.prototype._getObject = function(sPath, oContext) {
	var oNode = this.oData[oContext];
	if (oContext && !oNode) {
		return null;
	}
	if (!oContext) {
		oNode = this.oData;
	}
	if (!sPath) {
		return oNode;
	}
	var aParts = sPath.split("/"),
		iIndex = 0;
	if (!aParts[0]) {
		// absolute path starting with slash
		oNode = this.oData;
		iIndex++;
	}
	while(oNode && aParts[iIndex]) {
		oNode = oNode[aParts[iIndex]];
		if (oNode) {
			if (oNode.__ref) {
				oNode = this.oData[oNode.__ref];
			}
			else if (oNode.__deferred) {
				oNode = null;
			}
		}
		iIndex++;
	}
	return oNode;
};

/**
 * refresh XSRF token if necessary 
 * 
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._refreshXSRFToken = function() {
	if (this.oHeaders["x-csrf-token"] == "Required") {
		var oHeadersClone = { };
		jQuery.extend(oHeadersClone,this.oHeaders);
		this.oHeaders = {};
		this.oHeaders["x-csrf-token"] = "Fetch";
		this._loadMetadata();
		oHeadersClone["x-csrf-token"] = this.oHeaders["x-csrf-token"];
		jQuery.extend(this.oHeaders,oHeadersClone);
	}
};

/**
 * refresh all bindings and refresh XSRF token if necessary 
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.refresh = function(){
	this._refreshXSRFToken();

	var aBindings = this.aBindings.slice(0);
	jQuery.each(aBindings, function(iIndex, oBinding) {
		oBinding._refresh();
	});
};

/**
 * submit changes from the requestQueue (queue can currently have only one request) 
 * 
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._submitChange = function(oRequest, fnSuccess, fnError, oHandler){	
	var that = this;
	
	function _handleSuccess(oData, oResponse) {
		if (fnSuccess) {
			fnSuccess(oData, oResponse);
		}
		
		if (that._isDataStored(that.oRequestQueue[0]) || that.oRequestQueue[0].method == "POST"){
			that.sChangeKey = null;
			that.refresh();
		}
		that.oRequestQueue = [];
		//TODO: do we need to read the data from the server again?
	}

	function _handleError(oError) {
		var mParameters = {},
		sErrorMsg = "The following problem occurred: " + oError.message;
		
		mParameters.message = oError.message;
		if (oError.response){
			// if XSRFToken is not valid we get 403 with the x-csrf-token header : Required. 
			// a new token will be fetched in the refresh afterwards.
			if (oError.response.statusCode == '403' && oError.response.headers["x-csrf-token"]) {
				that.oHeaders["x-csrf-token"] = oError.response.headers["x-csrf-token"];
			}
			sErrorMsg += oError.response.statusCode + "," +
			oError.response.statusText + "," +
			oError.response.body;
			mParameters.statusCode = oError.response.statusCode;
			mParameters.statusText = oError.response.statusText;
			mParameters.responseText = oError.response.body;
		}
		jQuery.sap.log.fatal(sErrorMsg);
		
		if (that._isDataStored(that.oRequestQueue[0])){
			that.sChangeKey = null;
			that.refresh();
		}
		
		that.oRequestQueue = [];
		
		if (fnError) {
			fnError();
		}
	}
	
	OData.request(oRequest, _handleSuccess, _handleError, oHandler, undefined, this.oMetadata);
};

/**
 * reset changes
 * 
 * @private
 */
/*sap.ui.model.odata.ODataModel.prototype.resetChanges = function(fnSuccess, fnError) {
	var that = this, sPath;
	
	
};*/

/**
 * Return requested data as object if the data has already been loaded and stored in the model. 
 * 
 * @param {String} sPath A string containing the path to the data object that should be returned.
 * @param {Object} [oContext] the optional context which is used with the sPath to retrieve the requested data.
 * 		
 * return {object} oData Object containing the requested data if the path is valid. 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getData = function(sPath, oContext) {
	return this._getObject(sPath, oContext);
};

/**
 * get change url: the url which can be used to easily trigger your change without "nachdenken".
 * 
 * @return {string} change url
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._getChangeUrl = function(sPath, oContext){
	var sUrl;
	
	if (oContext) {
		oContext = oContext.replace(/^\/|\/$/g, "");
	}
	
	sPath = sPath.replace(/^\/|\/$/g, "");
	
	if(oContext && sPath) {
		sUrl = this.sServiceUrl + '/' + oContext + '/' + sPath;
	} else if (!oContext && sPath){
		sUrl = this.sServiceUrl + '/' + sPath;
	} else {
		sUrl = this.sServiceUrl + '/' + oContext;
	}
	return sUrl;
};

/**
 * creation of a request object for changes
 * 
 * @return {Object} request object
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._createChangeRequest = function(sUrl, oPayload, sMethod, bAsync) {	
	var oChangeHeader = {};
	jQuery.extend(oChangeHeader,this.oHeaders);
	return { 
		    headers : oChangeHeader, 
		    requestUri : sUrl, 
		    method : sMethod,
		    data : oPayload,
		    user: this.sUser,
		    password: this.sPassword,
		    async: bAsync
	};
};

/**
 * Checks if the data provided by the sPath and oContext is stored in the model.
 * This is needed to trigger a refresh only for the data which is stored in the model and so bound to the UI.
 * 
 * @return {boolean} 
 * @private
 */
sap.ui.model.odata.ODataModel.prototype._isDataStored = function(oRequest) {	
	var sPath, oData;
	
	sPath = oRequest.requestUri.replace(this.sServiceUrl,'');
	oData = this._getObject(sPath);
	if (oData) {
		return true;
	}
	return false;
};

/**
 * Trigger a PUT request to the odata service that was specified in the model constructor. 
 * 
 * @param {String} sPath A string containing the path to the data that should be updated.
 * 							The path is concatenated to the sServiceUrl which was specified 
 * 							in the model constructor.
 * @param {Object} [oContext] If specified the sPath has to be is relative to the path given with the context.
 * @param {object} oData data of the entry that should be updated.
 *            					 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully updated.
 *            
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.update = function(sPath, oData, oContext, fnSuccess, fnError) {
	var oRequest, sUrl;
	
	sUrl = this._getChangeUrl(sPath, oContext);
	
	oRequest = this._createChangeRequest(sUrl, oData, "PUT", false);
	
	this.oRequestQueue.push(oRequest);

	this._submitChange(oRequest, fnSuccess, fnError);
};

/**
 * Trigger a POST request to the odata service that was specified in the model constructor. 
 * 
 * @param {String} sPath A string containing the path to the collection where an entry 
 * 							should be created. The path is concatenated to the sServiceUrl
 *            				which was specified in the model constructor.
 * @param {Object} [oContext] If specified the sPath has to be is relative to the path given with the context. 
 * @param {object} oData data of the entry that should be created.
 *            					 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully retrieved. The handler can have the 
 *            	                 following parameters: oData and response.
 *            						
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.create = function(sPath, oData, oContext, fnSuccess, fnError) {
	var oRequest, sUrl;
	
	sUrl = this._getChangeUrl(sPath, oContext);
	
	oRequest = this._createChangeRequest(sUrl, oData, "POST", false);
	
	this.oRequestQueue.push(oRequest);
	
	this._submitChange(oRequest, fnSuccess, fnError);
};

/**
 * Trigger a DELETE request to the odata service that was specified in the model constructor. 
 *
 * @param {String} sPath A string containing the path to the data that should
 *            				be removed. The path is concatenated to the sServiceUrl
 *            				which was specified in the model constructor.
 * @param {Object} [oContext] If specified the sPath has to be is relative to the path given with the context.
 * @param {function} [fnSuccess]  a callback function which is called when the data has
 *            					 been successfully retrieved. The handler can have the 
 *            	                 following parameters: oData and response.
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.remove = function(sPath, oContext, fnSuccess, fnError) {
	var oRequest, sUrl;
	
	sUrl = this._getChangeUrl(sPath, oContext);
	
	oRequest = this._createChangeRequest(sUrl, null, "DELETE", false);
	
	this.oRequestQueue.push(oRequest);
	
	this._submitChange(oRequest, fnSuccess, fnError);
};

/**
 * Trigger a GET request to the odata service that was specified in the model constructor. 
 * The data will not be stored in the model. The requested data is returned with the response.
 *
 * @param {String} sPath A string containing the path to the data which should
 *            				be retrieved. The path is concatenated to the sServiceUrl
 *            				which was specified in the model constructor.
 * @param {Object} [oContext] If specified the sPath has to be is relative to the path given with the context. 
 * @param {Array} [aParams] An Array of url parameters which will be concatenated to the read url
 *
 * @param {boolean} [bAsync] true for asynchronous requests. Default is true.
 * 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully retrieved. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.read = function(sPath, oContext, aParams, bAsync, fnSuccess, fnError) {
	var oRequest, sUrl;
	
	sUrl = this._getChangeUrl(sPath, oContext);
	
	oRequest = this._createRequest(sUrl.replace(this.sServiceUrl,''), aParams, bAsync);
	
	OData.read(oRequest, fnSuccess, fnError, null, null, this.oMetadata);
};

/**
 * Return the metadata object
 *
 * @return {Object} metdata object
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getServiceMetadata = function() {
	return this.oMetadata;
};


/**
 * Submits the collected changes which were collected by the setProperty method. 
 * 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully updated. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.submitChanges = function(fnSuccess, fnError) {
		
	var oRequest, oPayload, that = this, sPath;
	
	if (this.sChangeKey) {	
		
		sPath = this.sChangeKey.replace(this.sServiceUrl,'');
		
		oPayload = this._getObject(sPath);
		
		oRequest = this._createChangeRequest(this.sChangeKey, oPayload, "PUT", true);
		
		this.oRequestQueue.push(oRequest);

		function _handleSuccess(oData, oResponse) {
			if (fnSuccess) {
				fnSuccess(oData, oResponse);
			}
			that.sChangeKey = null;
		}
		function _handleError(oError) {
			if (fnError) {
				fnError(oError);
			} 
			that.sChangeKey = null;
		}
		
		this._submitChange(oRequest, _handleSuccess, _handleError);
	}
};

/**
 * 
 * Resets the collected changes by the setProperty method and reloads the data from the server.
 * 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully resetted. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed
 * 
 * @public
 */ 
sap.ui.model.odata.ODataModel.prototype.resetChanges = function(fnSuccess, fnError) {
	
	var sPath;
	if (this.sChangeKey) {
		sPath = this.sChangeKey.replace(this.sServiceUrl,'');
		this._loadData(sPath, null, fnSuccess, fnError);
	}
};

/**
 * Sets a new value for the given property <code>sPropertyName</code> in the model without triggering a server request.
 *  This can be done by the submitChanges method.
 *  
 *  Note: Only one entry of one collection can be updated at once. Otherwise a fireRejectChange event is fired.
 *  
 *  Before updating a different entry the existing changes of the current entry have to be submitted or resetted by the
 *  corresponding methods: submitChanges, resetChanges.
 *  
 *  IMPORTANT: All pending changes are resetted in the model if the application triggeres any kind of requests 
 *  which change the model data e.g. sorting, filtering, refresh, create, remove, update. Make sure to
 *  submit the pending changes first. To determine if there are any pending changes call the hasPendingChanges method.
 * 
 * @param {string}  sPath path of the property to set
 * @param {any}     oValue value to set the property to
 * @param {object} [oContext=null] the context which will be used to set the property
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setProperty = function(sPath, oValue, oContext) {
		
	var sProperty, oEntry = { }, 
		sChangeKey = this._getChangeUrl(sPath, oContext),
		sChangeKey = sChangeKey.substring(0, sChangeKey.lastIndexOf("/")),
		sObjectPath = sPath.substring(0, sPath.lastIndexOf("/")),
		success = false;
	
	sProperty = sPath.substr(sPath.lastIndexOf("/")+1);
	oEntry = this._getObject(sObjectPath, oContext);
	
	if (!this.sChangeKey) {
		this.sChangeKey = sChangeKey;
	} 
	
	if (this.sChangeKey == sChangeKey) {
		oEntry[sProperty] = oValue;
		success = true;
	} else {
		this.fireRejectChange(
				{rejectedValue : oValue,
				oldValue: oEntry[sProperty]}
		);
	}
	 return success;
	
};


/**
 * Checks if there exist pending changes in the model created by the setProperty method.
 * @return {boolean} true/false  
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.hasPendingChanges = function() {
	return this.sChangeKey != null;
};
