/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides the locale object sap.ui.core.LocaleData
jQuery.sap.declare("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ui.core.Locale");
jQuery.sap.require("sap.ui.core.Configuration");

/**
 * Creates an instance of the Data.
 *
 * @class Data provides access to locale-specific data, like date formats, number formats, currencies, etc.
 *
 * @param {sap.ui.core.Locale} oLocale the locale
 *
 * @extends sap.ui.base.Object
 * @author SAP AG
 * @version 1.4.3
 * @constructor
 * @public
 */
sap.ui.core.LocaleData = function(oLocale) {
	sap.ui.base.Object.apply(this);
	this.mData = sap.ui.core.LocaleData._getData(oLocale);
};
sap.ui.core.LocaleData.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);
sap.ui.base.Object.defineClass("sap.ui.core.LocaleData", {
	baseType : "sap.ui.base.Object",
	publicMethods : ["getOrientation", "getLanguages", "getScripts", "getTerritories", "getMonths", "getDays", "getQuarters", "getDayPeriods", "getDatePattern", "getTimePattern", "getDateTimePattern", "getNumberSymbol"]
});

/**
 * Locale data cache
 *
 * @private
 */
sap.ui.core.LocaleData.mLocaleData = {};

/**
 * Default data, in case neither the region specific, nor the longuage specific fallback can be found
 *
 * @private
 */
sap.ui.core.LocaleData.mDefaultData = {
	"orientation":"left-to-right",
	"languages":{},
	"scripts":{},
	"territories":{},
	"dateFormat-full":"EEEE, MMMM d, y",
	"dateFormat-long":"MMMM d, y",
	"dateFormat-medium":"MMM d, y",
	"dateFormat-short":"M/d/yy",
	"timeFormat-full":"h:mm:ss a zzzz",
	"timeFormat-long":"h:mm:ss a z",
	"timeFormat-medium":"h:mm:ss a",
	"timeFormat-short":"h:mm a",
	"dateTimeFormat-full":"{1} {0}",
	"dateTimeFormat-long":"{1} {0}",
	"dateTimeFormat-medium":"{1} {0}",
	"dateTimeFormat-short":"{1} {0}",
	"months-format-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
	"months-format-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],
	"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],
	"days-format-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
	"days-format-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	"days-format-narrow":["S","M","T","W","T","F","S"],
	"quarters-format-narrow":["1","2","3","4"],
	"quarters-format-abbreviated":["Q1","Q2","Q3","Q4"],
	"quarters-format-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],
	"quarters-standAlone-narrow":["1","2","3","4"],
	"symbols-latn-decimal":".",
	"symbols-latn-group":",",
	"symbols-latn-plusSign":"+",
	"symbols-latn-minusSign":"-",
	"dayPeriods-format-narrow":["AM","PM"],
	"dayPeriods-format-wide":["AM","PM"],
	"dayPeriods-format-abbreviated":["AM","PM"]
};

/**
 * Load LocaleData data from the CLDR generated files
 */
sap.ui.core.LocaleData._getData = function(oLocale) {

	var M_ISO639_OLD_TO_NEW = {
			"iw" : "he",
			"ji" : "yi",
			"in" : "id", 
			"sh" : "sr"
		},
		mDatas = sap.ui.core.LocaleData.mLocaleData,
		sLanguage = oLocale.getLanguage() || "",
		sRegion = oLocale.getRegion() || "",
		mData;

	function getOrLoad(sId) {
		var sUrl, oResponse;
		if ( !mDatas[sId] ) {
			sUrl = sap.ui.resource("sap.ui.core.cldr", sId + ".json");
			oResponse = jQuery.sap.sjax({url: sUrl, dataType:"json"});
			if (oResponse.success) {
				mDatas[sId] = oResponse.data;
			}
		}
		return mDatas[sId];
	}

	sLanguage = (sLanguage && M_ISO639_OLD_TO_NEW[sLanguage]) || sLanguage;
	
	if ( sLanguage && sRegion ) {
		mData = getOrLoad(sLanguage + "_" + sRegion);
	}
	if ( !mData && sLanguage ) {
		mData = getOrLoad(sLanguage);
	}

	return mData || sap.ui.core.LocaleData.mDefaultData;
};

sap.ui.core.LocaleData.prototype._get = function(sKey) {
	return this.mData[sKey];
};

/**
 * Get orientation (left-to-right or right-to-left)
 *
 * @returns {string} character orientation for this locale
 * @public
 */
sap.ui.core.LocaleData.prototype.getOrientation = function() {
	return this._get("orientation");
};

/**
 * Get locale specific language names
 *
 * @returns {object} map of locale specific language names
 * @public
 */
sap.ui.core.LocaleData.prototype.getLanguages = function() {
	return this._get("languages");
};

/**
 * Get locale specific script names
 *
 * @returns {object} map of locale specific script names
 * @public
 */
sap.ui.core.LocaleData.prototype.getScripts = function() {
	return this._get("scripts");
};

/**
 * Get locale specific territory names
 *
 * @returns {object} map of locale specific territory names
 * @public
 */
sap.ui.core.LocaleData.prototype.getTerritories = function() {
	return this._get("territories");
};

/**
 * Get month names in width "narrow", "abbreviated" or "wide"
 *
 * @param {string} sWidth the required width for the month names
 * @returns {array} array of month names (starting with January)
 * @public
 */
sap.ui.core.LocaleData.prototype.getMonths = function(sWidth) {
	jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
	return this._get("months-format-" + sWidth);
};

/**
 * Get day names in width "narrow", "abbreviated" or "wide"
 *
 * @param {string} sWidth the required width for the day names
 * @returns {array} array of day names (starting with Sunday)
 * @public
 */
sap.ui.core.LocaleData.prototype.getDays = function(sWidth) {
	jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
	return this._get("days-format-" + sWidth);
};

/**
 * Get quarter names in width "narrow", "abbreviated" or "wide"
 *
 * @param {string} sWidth the required width for the quarter names
 * @returns {array} array of quarters
 * @public
 */
sap.ui.core.LocaleData.prototype.getQuarters = function(sWidth) {
	jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
	return this._get("quarters-format-" + sWidth);
};

/**
 * Get day periods in width "narrow", "abbreviated" or "wide"
 *
 * @param {string} sWidth the required width for the day period names
 * @returns {array} array of day periods (AM, PM)
 * @public
 */
sap.ui.core.LocaleData.prototype.getDayPeriods = function(sWidth) {
	jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
	return this._get("dayPeriods-format-" + sWidth);
};

/**
 * Get date pattern in style "short", "medium", "long" or "full"
 *
 * @param {string} sStyle the required style for the date pattern
 * @returns {string} the selected date pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getDatePattern = function(sStyle) {
	jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
	return this._get("dateFormat-" + sStyle);
};

/**
 * Get time pattern in style "short", "medium", "long" or "full"
 *
 * @param {string} sStyle the required style for the date pattern
 * @returns {string} the selected time pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getTimePattern = function(sStyle) {
	jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
	return this._get("timeFormat-" + sStyle);
};

/**
 * Get datetime pattern in style "short", "medium", "long" or "full"
 *
 * @param {string} sStyle the required style for the datetime pattern
 * @returns {string} the selected datetime pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getDateTimePattern = function(sStyle) {
	jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
	return this._get("dateTimeFormat-" + sStyle);
};

/**
 * Get number symbol "decimal", "group", "plusSign", "minusSign"
 *
 * @param {string} sType the required type of symbol
 * @returns {string} the selected number symbol
 * @public
 */
sap.ui.core.LocaleData.prototype.getNumberSymbol = function(sType) {
	jQuery.sap.assert(sType == "decimal" || sType == "group" || sType == "plusSign" || sType == "minusSign", "sType must be decimal, group, plusSign or minusSign");
	return this._get("symbols-latn-" + sType);
};


(function() {
	
	/**
	 * A specialized subclass of LocaleData that merges custom settings.
	 * @private
	 */
	sap.ui.core.LocaleData.extend("sap.ui.core.CustomLocaleData", {
		constructor : function(oLocale) {
			sap.ui.core.LocaleData.apply(this, arguments);
			this.mCustomData = sap.ui.getCore().getConfiguration().getFormatSettings().getCustomLocaleData();
		},
		_get : function(sId) {
			return this.mCustomData[sId] || this.mData[sId];
		}
	});

	/**
	 * 
	 */
	sap.ui.core.LocaleData.getInstance = function(oLocale) {
		return oLocale.hasPrivateUseSubtag("sapufmt") ? new sap.ui.core.CustomLocaleData(oLocale) : new sap.ui.core.LocaleData(oLocale);
	};

}());
