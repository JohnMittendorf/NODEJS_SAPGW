/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.model.odata.ODataListBinding
jQuery.sap.declare("sap.ui.model.odata.ODataListBinding");
jQuery.sap.require("sap.ui.model.ListBinding");
jQuery.sap.require("sap.ui.core.format.DateFormat");

/*global OData *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 *
 * @class
 * List binding implementation for oData format
 *
 * @param sPath
 * @param [oModel]
 */
sap.ui.model.odata.ODataListBinding = function(oModel, sPath, oContext, oSorter, aFilters) {
	sap.ui.model.ListBinding.apply(this, arguments);
	this.sFilterParams = null;
	this.sSortParams = null;
	this.sRangeParams = null;
	this.aPredefinedFilters = aFilters;
	this.iStartIndex = -1;
	this.bPendingChange = false;
	this.aKeys = [];
	this.bInitialized = false; 
	
	this.oDateTimeFormat = sap.ui.core.format.DateFormat.getDateInstance({
		pattern: "'datetime'''yyyy-MM-dd'T'HH:mm:ss''"
	});
	this.oDateTimeOffsetFormat = sap.ui.core.format.DateFormat.getDateInstance({
		pattern: "'datetimeoffset'''yyyy-MM-dd'T'HH:mm:ss'Z'''"
	});

	this.createSortParams(oSorter);
	this.createFilterParams(aFilters);

	// get length after creating filter parameters
	this.iLength = 0;
	this.bLengthFinal = false;
	if (this.oModel.isCountSupported()) {
		this._getLength();
	}

};
sap.ui.model.odata.ODataListBinding.prototype = jQuery.sap.newObject(sap.ui.model.ListBinding.prototype);

/**
 * Return contexts for the list
 *
 * @param {int} [iStartIndex=0] the start index of the requested contexts
 * @param {int} [iLength] the requested amount of contexts
 *
 * @return {Array} the contexts array
 * @protected
 */
sap.ui.model.odata.ODataListBinding.prototype.getContexts = function(iStartIndex, iLength, iThreshold) {
	this.bInitialized = true; 
	// Set default values if startindex or length are not defined
	if (!iStartIndex) {
		iStartIndex = 0;
	}
	if (!iLength) {
		iLength = this.oModel.iSizeLimit;
	}

	// If we already know the length of the data set, make sure not to request more than exists
	if (this.bLengthFinal) {
		if (iStartIndex + iLength > this.iLength) {
			iLength = this.iLength - iStartIndex;
		}
		if (iLength < 0) {
			iLength = 0;
		}
	}

	// Loop through known data and check whether we already have all rows loaded
	var aContexts = [],
		oContext;
	for (var i = iStartIndex; i < iStartIndex + iLength; i++) {
		oContext = this.aKeys[i];
		if (!oContext) {
			break;
		}
		aContexts.push(oContext);
	}

	// TODO: thresholding
	if (iThreshold && (iThreshold <= iLength || aContexts.length === iLength )) {
		iThreshold = undefined;
	}
	var iSectionStart = iStartIndex;
	var iSectionLength = iLength;
	if (iThreshold) {
		var iSection = Math.floor(iStartIndex / (iThreshold / 2));
		var iSectionStart = Math.floor(iSection * (iThreshold / 2));
		var iSectionLength = this.bLengthFinal ? Math.min(this.iLength - iSectionStart, iThreshold) : Math.max(iLength, iThreshold);
		//jQuery.sap.log.warning("getContexts (threshold): " + iSectionStart + " - " + iSectionLength);
		if (!this.bPendingRequest && iSectionLength > 0) { //&& this.aKeys.length < iSectionStart + iSectionLength) {   // this.aKeys.length returns a length even if some value are undefined
			this.loadData(iSectionStart, iSectionLength);
		}
	} else {
		// If rows are missing send a request for the complete set of rows again
		if (!this.bPendingRequest && iLength > 0 && aContexts.length != iLength) {
			this.loadData(iStartIndex, iLength);
		}
	}

	return aContexts;
};

/**
 * Setter for context
 * @param {Object} oContext the new context object
 */
sap.ui.model.odata.ODataListBinding.prototype.setContext = function(oContext) {
	if (this.oContext != oContext) {
		this.oContext = oContext;
		
		if (this.bInitialized) {
			this.aKeys = [];
			this.loadData();			
		}
	}
};

/**
 * Load list data from the server
 */
sap.ui.model.odata.ODataListBinding.prototype.loadData = function(iStartIndex, iLength, bSync) {

	var that = this;

	this.bPendingRequest = true;

	// determine the callback handler (only used internally to support events for sort/filter)
	// TODO: @JW: please rework - because you don't like currying
	var fnCallback = undefined;
	if (arguments.length === 1 && typeof iStartIndex === "function") {
		fnCallback = iStartIndex;
		iStartIndex = undefined;
	}

	// create range parameters and store start index for sort/filter requests
	if (iStartIndex || iLength) {
		this.sRangeParams = "$skip=" + iStartIndex + "&$top=" + iLength;
		this.iStartIndex = iStartIndex;
	}
	else {
		iStartIndex = this.iStartIndex;
	}

	// create the request url
	var aParams = [];
	if (this.sRangeParams) { 
		aParams.push(this.sRangeParams);
	}
	if (this.sSortParams) {
		aParams.push(this.sSortParams);
	}
	if (this.sFilterParams) {
		aParams.push(this.sFilterParams);
	}
	aParams.push("$inlinecount=allpages");


	function _processResult(oData) {

		// Collecting contexts
		jQuery.each(oData.results, function(i, entry) {
			that.aKeys[iStartIndex + i] = that.oModel._getKey(entry);
		});

		// update iLength (only when the inline count is available)
		if (oData.__count) {
			that.iLength = parseInt(oData.__count, 10);
			that.bLengthFinal = true;
		}

		// if we got data and the results + startindex is larger than the
		// length we just apply this value to the length
		if (that.iLength < iStartIndex + oData.results.length) {
			that.iLength = iStartIndex + oData.results.length;
			that.bLengthFinal = false;
		}

		// if less entries are returned than have been requested
		// set length accordingly
		if (oData.results.length < iLength) {
			that.iLength = iStartIndex + oData.results.length;
			that.bLengthFinal = true;
		}

		// check if there are any results at all...
		if (oData.results.length == 0) {
			that.iLength = 0;
			that.bLengthFinal = true;
		}

		that.bPendingRequest = false;

		// notifiy the callback handler
		if (fnCallback) {
			fnCallback.call(that);
		}

	}

	var oContext = this.oContext || "",
		sPath = this.sPath.indexOf("/") != 0 ? oContext + "/" + this.sPath : this.sPath;

	// execute the request and use the metadata if available
	this.oModel._loadData(sPath, aParams, _processResult, function() {
		// notifiy the callback handler
		if (fnCallback) {
			fnCallback.call(that);
		}
	}, this.getContext());

};

/**
 * Return the length of the list
 *
 * @return {number} the length
 * @protected
 */
sap.ui.model.odata.ODataListBinding.prototype.getLength = function() {
	return this.iLength;
};

/**
 * Return the length of the list
 *
 * @return {number} the length
 */
sap.ui.model.odata.ODataListBinding.prototype._getLength = function() {

	var that = this;

	// create a request object for the data request
	var aParams = [];
	if (this.sFilterParams) {
		aParams.push(this.sFilterParams);
	}
	var oRequest = this.oModel._createRequest(this.sPath + "/$count", aParams, false);

	function _handleSuccess(oData) {
		that.iLength = parseInt(oData, 10);
		that.bLengthFinal = true;
	}

	function _handleError(oXHR, sError, oError) {
		jQuery.sap.log.warning("Request for $count failed: " +
				sError,
				oXHR.responseText + "," +
				  oXHR.status + "," +
				  oXHR.statusText);
	}

	// execute the request and use the metadata if available
	jQuery.ajax({
		url: oRequest.requestUri,
		async: oRequest.async,
		username: oRequest.user,
		password: oRequest.password,
		success: _handleSuccess,
		error: _handleError
	});

};

/**
 * Check whether this Binding would provide new values and in case it changed,
 * inform interested parties about this.
 *
 * @param {object} oUpdateInfo
 */
sap.ui.model.odata.ODataListBinding.prototype.checkUpdate = function(oUpdateInfo) {
	this._fireChange();
};

/**
 * Sorts the list
 *
 * @public
 */
sap.ui.model.odata.ODataListBinding.prototype.sort = function(oSorter) {

	this.createSortParams(oSorter);
	this.aKeys = [];

	this.loadData(function() {
		this._fireSort({sorter: oSorter});
	});

};

/**
 * Create URL parameters for sorting
 */
sap.ui.model.odata.ODataListBinding.prototype.createSortParams = function(oSorter) {

	if(oSorter){
		this.sSortParams = "$orderby=" + oSorter.sPath;
		this.sSortParams += oSorter.bDescending ? "%20desc" : "%20asc";
	}else{
		this.sSortParams = null;
	}

};


/**
 * Filters the list
 *
 * @public
 */
sap.ui.model.odata.ODataListBinding.prototype.filter = function(aFilters) {

	if (!aFilters) {
		aFilters = [];
	}
	if (this.aPredefinedFilters) {
		aFilters = aFilters.concat(this.aPredefinedFilters);
	}
	this.createFilterParams(aFilters);
	this.aKeys = [];
	this.iLength = 0;
	this.bLengthFinal = false;

	this.loadData(function() {
		this._fireFilter({filters: aFilters});
	});

};

/**
 * Create URL parameters for filtering
 */
sap.ui.model.odata.ODataListBinding.prototype.createFilterParams = function(aFilters) {

	if(aFilters && aFilters.length > 0){
		var sFilterParam = "$filter=((",
			sValue,
			sValue2,
			sLastPath = "";
		aFilters.sort(function(a, b) {
			if (a.sPath < b.sPath) {
				return -1;
			}
			else if (b.sPath < a.sPath) {
				return 1;
			}
			else {
				return 0;
			}
		});
		var that = this;
		jQuery.each(aFilters, function(i, oFilter){
			if (i > 0) {
				if (sLastPath != oFilter.sPath) {
					sFilterParam += "))%20and%20((";
				} else {
					sFilterParam += ")%20or%20(";
				}
			}
			sValue = oFilter.oValue1;
			if (isNaN(sValue)) {
				// date check
				if (!isNaN(Date.parse(sValue))) {
					sValue = that.oDateTimeFormat.format(new Date(sValue));
				}else {
					sValue = "\'" + sValue + "\'";
				}
			}
			sValue2 = oFilter.oValue2;
			if (sValue2) {
				if (isNaN(sValue2)) {
					// date check
					if (!isNaN(Date.parse(sValue2))) {
						sValue2 = that.oDateTimeFormat.format(new Date(sValue2));
					}else {
						sValue2 = "\'" + sValue2 + "\'";
					}
				}
			}
			// TODO embed 2nd value
			switch(oFilter.sOperator) {
				case "EQ":
				case "NE":
				case "GT":
				case "GE":
				case "LT":
				case "LE":
					sFilterParam += oFilter.sPath + "%20" + oFilter.sOperator.toLowerCase() + "%20" + sValue;
					break;
				case "BT":
					sFilterParam += oFilter.sPath + "%20gt%20" + sValue + "%20and%20" + oFilter.sPath + "%20lt%20" + sValue2;
					break;
				case "Contains":
					sFilterParam += "indexof(" + oFilter.sPath + "," + sValue + ")%20ne%20-1";
					break;
				case "StartsWith":
					sFilterParam += "startswith(" + oFilter.sPath + "," + sValue + ")%20eq%20true";
					break;
				case "EndsWith":
					sFilterParam += "endswith(" + oFilter.sPath + "," + sValue + ")%20eq%20true";
					break;
				default:
					sFilterParam += "true";
			}
			sLastPath = oFilter.sPath;
		});
		sFilterParam += "))";
		this.sFilterParams = sFilterParam;
	}else{
		this.sFilterParams = null;
	}

};

sap.ui.model.odata.ODataListBinding.prototype._refresh = function(){
	this.aKeys = [];
	this.bLengthFinal = false;
	this.checkUpdate();
};
