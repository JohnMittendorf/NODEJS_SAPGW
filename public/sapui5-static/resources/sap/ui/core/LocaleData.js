/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.LocaleData");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("sap.ui.core.Locale");jQuery.sap.require("sap.ui.core.Configuration");
sap.ui.core.LocaleData=function(l){sap.ui.base.Object.apply(this);this.mData=sap.ui.core.LocaleData._getData(l);};
sap.ui.core.LocaleData.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);sap.ui.base.Object.defineClass("sap.ui.core.LocaleData",{baseType:"sap.ui.base.Object",publicMethods:["getOrientation","getLanguages","getScripts","getTerritories","getMonths","getDays","getQuarters","getDayPeriods","getDatePattern","getTimePattern","getDateTimePattern","getNumberSymbol"]});sap.ui.core.LocaleData.mLocaleData={};sap.ui.core.LocaleData.mDefaultData={"orientation":"left-to-right","languages":{},"scripts":{},"territories":{},"dateFormat-full":"EEEE, MMMM d, y","dateFormat-long":"MMMM d, y","dateFormat-medium":"MMM d, y","dateFormat-short":"M/d/yy","timeFormat-full":"h:mm:ss a zzzz","timeFormat-long":"h:mm:ss a z","timeFormat-medium":"h:mm:ss a","timeFormat-short":"h:mm a","dateTimeFormat-full":"{1} {0}","dateTimeFormat-long":"{1} {0}","dateTimeFormat-medium":"{1} {0}","dateTimeFormat-short":"{1} {0}","months-format-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"months-format-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"days-format-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"days-format-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"days-format-narrow":["S","M","T","W","T","F","S"],"quarters-format-narrow":["1","2","3","4"],"quarters-format-abbreviated":["Q1","Q2","Q3","Q4"],"quarters-format-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],"quarters-standAlone-narrow":["1","2","3","4"],"symbols-latn-decimal":".","symbols-latn-group":",","symbols-latn-plusSign":"+","symbols-latn-minusSign":"-","dayPeriods-format-narrow":["AM","PM"],"dayPeriods-format-wide":["AM","PM"],"dayPeriods-format-abbreviated":["AM","PM"]};
sap.ui.core.LocaleData._getData=function(l){var M={"iw":"he","ji":"yi","in":"id","sh":"sr"},d=sap.ui.core.LocaleData.mLocaleData,s=l.getLanguage()||"",r=l.getRegion()||"",m;function g(i){var u,o;if(!d[i]){u=sap.ui.resource("sap.ui.core.cldr",i+".json");o=jQuery.sap.sjax({url:u,dataType:"json"});if(o.success){d[i]=o.data;}}return d[i];}s=(s&&M[s])||s;if(s&&r){m=g(s+"_"+r);}if(!m&&s){m=g(s);}return m||sap.ui.core.LocaleData.mDefaultData;};
sap.ui.core.LocaleData.prototype._get=function(k){return this.mData[k];};
sap.ui.core.LocaleData.prototype.getOrientation=function(){return this._get("orientation");};
sap.ui.core.LocaleData.prototype.getLanguages=function(){return this._get("languages");};
sap.ui.core.LocaleData.prototype.getScripts=function(){return this._get("scripts");};
sap.ui.core.LocaleData.prototype.getTerritories=function(){return this._get("territories");};
sap.ui.core.LocaleData.prototype.getMonths=function(w){return this._get("months-format-"+w);};
sap.ui.core.LocaleData.prototype.getDays=function(w){return this._get("days-format-"+w);};
sap.ui.core.LocaleData.prototype.getQuarters=function(w){return this._get("quarters-format-"+w);};
sap.ui.core.LocaleData.prototype.getDayPeriods=function(w){return this._get("dayPeriods-format-"+w);};
sap.ui.core.LocaleData.prototype.getDatePattern=function(s){return this._get("dateFormat-"+s);};
sap.ui.core.LocaleData.prototype.getTimePattern=function(s){return this._get("timeFormat-"+s);};
sap.ui.core.LocaleData.prototype.getDateTimePattern=function(s){return this._get("dateTimeFormat-"+s);};
sap.ui.core.LocaleData.prototype.getNumberSymbol=function(t){return this._get("symbols-latn-"+t);};
(function(){sap.ui.core.LocaleData.extend("sap.ui.core.CustomLocaleData",{constructor:function(l){sap.ui.core.LocaleData.apply(this,arguments);this.mCustomData=sap.ui.getCore().getConfiguration().getFormatSettings().getCustomLocaleData();},_get:function(i){return this.mCustomData[i]||this.mData[i];}});sap.ui.core.LocaleData.getInstance=function(l){return l.hasPrivateUseSubtag("sapufmt")?new sap.ui.core.CustomLocaleData(l):new sap.ui.core.LocaleData(l);};}());
