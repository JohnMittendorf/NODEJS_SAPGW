/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Configuration");jQuery.sap.require("sap.ui.base.Object");
sap.ui.core.Configuration=function(){var M={"theme":{type:"string",defaultValue:"base"},"language":{type:"string",defaultValue:navigator.language||navigator.browserLanguage||navigator.userLanguage},"formatLocale":{type:"string",defaultValue:null},"accessibility":{type:"boolean",defaultValue:true},"animation":{type:"boolean",defaultValue:true},"rtl":{type:"boolean",defaultValue:false},"debug":{type:"boolean",defaultValue:false},"inspect":{type:"boolean",defaultValue:false},"originInfo":{type:"boolean",defaultValue:false},"noConflict":{type:"boolean",defaultValue:false,noUrl:true},"noDuplicateIds":{type:"boolean",defaultValue:true},"trace":{type:"boolean",defaultValue:false,noUrl:true},"modules":{type:"string[]",defaultValue:[],noUrl:true},"areas":{type:"string[]",defaultValue:null,noUrl:true},"onInit":{type:"code",defaultValue:undefined,noUrl:true},"uidPrefix":{type:"string",defaultValue:"__",noUrl:true},"ignoreUrlParams":{type:"boolean",defaultValue:false,noUrl:true},"weinreServer":{type:"string",defaultValue:"",noUrl:true},"weinreId":{type:"string",defaultValue:""},"xx-loadAllMode":{type:"boolean",defaultValue:false,noUrl:true},"xx-preload":{type:"string",defaultValue:'',noUrl:true},"xx-test-mobile":{type:"boolean",defaultValue:false}};this.oFormatSettings=new sap.ui.core.Configuration.FormatSettings(this);var c=this;function s(b,v){if(typeof v==="undefined"||v===null){return;}switch(M[b].type){case"boolean":if(typeof v==="string"){if(M[b].defaultValue){c[b]=v.toLowerCase()!="false";}else{c[b]=v.toLowerCase()==="true"||v.toLowerCase()==="x";}}else{c[b]=!!v;}break;case"string":c[b]=""+v;break;case"code":c[b]=typeof v==="function"?v:""+v;break;case"string[]":if(jQuery.isArray(v)){c[b]=v;}else if(typeof v==="string"){c[b]=jQuery.map(v.split(/[ ,;]/),function($){return jQuery.trim($);});}else{throw new Error("unsupported value");}break;default:throw new Error("illegal state");}}for(var n in M){c[n]=M[n].defaultValue;}var o=window["sap-ui-config"]||{};o.oninit=o.oninit||o["evt-oninit"];for(var n in M){s(n,o[n.toLowerCase()]);}if(o.libs){c.modules=jQuery.map(o.libs.split(","),function($){return jQuery.trim($)+".library";}).concat(c.modules);}if(!c.ignoreUrlParams){var u="sap-ui-";var a=jQuery.sap.getUriParameters();for(var n in M){if(M[n].noUrl){continue;}var v=a.get(u+n);if(v===""){c[n]=M[n].defaultValue;}else{s(n,v);}}}for(var n in M){if(c[n]!==M[n].defaultValue){jQuery.sap.log.info("  "+n+" = "+c[n]);}}};
sap.ui.core.Configuration.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);sap.ui.base.Object.defineClass("sap.ui.core.Configuration",{baseType:"sap.ui.base.Object",publicMethods:["getTheme","getLanguage","getFormatLocale","getAccessibility","getAnimation","getApplication","getRTL","getDebug","getInspect","getOriginInfo","getNoDuplicateIds","getUIDPrefix","getWeinreServer","getWeinreId","getFormatSettings"]});
sap.ui.core.Configuration.prototype.getTheme=function(){return this.theme;};
sap.ui.core.Configuration.prototype.setTheme=function(t){this.theme=t;return this;};
sap.ui.core.Configuration.prototype.getLanguage=function(){return this.language;};
sap.ui.core.Configuration.prototype.getFormatLocale=function(){return this.formatLocale||this.language;};
sap.ui.core.Configuration.prototype.getAccessibility=function(){return this.accessibility;};
sap.ui.core.Configuration.prototype.getAnimation=function(){return this.animation;};
sap.ui.core.Configuration.prototype.getRTL=function(){return this.rtl;};
sap.ui.core.Configuration.prototype.getDebug=function(){return this.debug;};
sap.ui.core.Configuration.prototype.getInspect=function(){return this.inspect;};
sap.ui.core.Configuration.prototype.getOriginInfo=function(){return this.originInfo;};
sap.ui.core.Configuration.prototype.getNoDuplicateIds=function(){return this.noDuplicateIds;};
sap.ui.core.Configuration.prototype.getTrace=function(){return this.trace;};
sap.ui.core.Configuration.prototype.getUIDPrefix=function(){return this.uidPrefix;};
sap.ui.core.Configuration.prototype.getWeinreServer=function(){var w=this.weinreServer;if(!w){w=window.location.protocol+"//"+window.location.hostname+":";w+=(parseInt(window.location.port,10)||8080)+1;}return w;};
sap.ui.core.Configuration.prototype.getWeinreId=function(){return this.weinreId;};
(function(){var M={"":{pattern:null},"1":{pattern:"dd.MM.yyyy"},"2":{pattern:"MM/dd/yyyy"},"3":{pattern:"MM-dd-yyyy"},"4":{pattern:"yyyy.MM.dd"},"5":{pattern:"yyyy/MM/dd"},"6":{pattern:"yyyy-MM-dd"}},a={"":{pattern:null,dayPeriods:null},"0":{pattern:"HH:mm:ss",dayPeriods:null},"1":{pattern:"hh:mm:ss a",dayPeriods:["AM","PM"]},"2":{pattern:"hh:mm:ss a",dayPeriods:["am","pm"]},"3":{pattern:"KK:mm:ss a",dayPeriods:["AM","PM"]},"4":{pattern:"KK:mm:ss a",dayPeriods:["am","pm"]}},b={"":{groupingSeparator:null,decimalSeparator:null}," ":{groupingSeparator:".",decimalSeparator:","},"X":{groupingSeparator:",",decimalSeparator:"."},"Y":{groupingSeparator:" ",decimalSeparator:","}};function c(d,m){if(!d){throw new Error(m);}}sap.ui.base.Object.extend("sap.ui.core.Configuration.FormatSettings",{constructor:function(o){this.oConfiguration=o;this.mSettings={};this.sLegacyDateFormat=undefined;this.sLegacyTimeFormat=undefined;this.sLegacyNumberFormatSymbolSet=undefined;},metadata:{publicMethods:[]},getFormatLocale:function(){function f(t){var l=t.oConfiguration.language;if(!jQuery.isEmptyObject(t.mSettings)){if(l.indexOf("-x-")<0){l=l+"-x-sapufmt";}else if(l.indexOf("-sapufmt")<=l.indexOf("-x-")){l=l+"-sapufmt";}}return l;}return new sap.ui.core.Locale(this.oConfiguration.formatLocale||f(this));},_set:function(k,v){if(v!=null){this.mSettings[k]=v;}else{delete this.mSettings[k];}},getDatePattern:function(s){return this.mSettings["dateFormat-"+s];},setDatePattern:function(s,p){c(s=="short"||s=="medium"||s=="long"||s=="full","sStyle must be short, medium, long or full");this._set("dateFormat-"+s,p);return this;},getTimePattern:function(s){return this.mSettings["timeFormat-"+s];},setTimePattern:function(s,p){c(s=="short"||s=="medium"||s=="long"||s=="full","sStyle must be short, medium, long or full");this._set("timeFormat-"+s,p);return this;},getNumberSymbol:function(t){return this.mSettings["symbols-latn-"+t];},setNumberSymbol:function(t,s){c(t=="decimal"||t=="group"||t=="plusSign"||t=="minusSign","sType must be decimal, group, plusSign or minusSign");this._set("symbols-latn-"+t,s);return this;},_setDayPeriods:function(w,t){this._set("dayPeriods-format-"+w,t);return this;},getLegacyDateFormat:function(){return this.sLegacyDateFormat||undefined;},setLegacyDateFormat:function(f){c(!f||M.hasOwnProperty(f),"sFormatId must be one of ['1','2','3','4','5','6'] or empty");this.sLegacyDateFormat=f=f||"";this.setDatePattern("short",M[f].pattern);this.setDatePattern("medium",M[f].pattern);return this;},getLegacyTimeFormat:function(){return this.sLegacyTimeFormat||undefined;},setLegacyTimeFormat:function(f){c(!f||a.hasOwnProperty(f),"sFormatId must be one of ['0','1','2','3','4'] or empty");this.sLegacyTimeFormat=f=f||"";this.setTimePattern("short",a[f].pattern);this.setTimePattern("medium",a[f].pattern);this._setDayPeriods("abbreviated",a[f].dayPeriods);return this;},getLegacyNumberFormat:function(){return this.sLegacyNumberFormat||undefined;},setLegacyNumberFormat:function(f){f=f?f.toUpperCase():"";c(!f||b.hasOwnProperty(f),"sFormatId must be one of [' ','X','Y'] or empty");this.sLegacyNumberFormat=f;this.setNumberSymbol("group",b[f].groupingSeparator);this.setNumberSymbol("decimal",b[f].decimalSeparator);},getCustomLocaleData:function(){return this.mSettings;}});sap.ui.core.Configuration.prototype.getFormatSettings=function(){return this.oFormatSettings;};}());