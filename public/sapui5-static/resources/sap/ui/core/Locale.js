/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Locale");jQuery.sap.require("sap.ui.base.Object");
sap.ui.core.Locale=function(l){sap.ui.base.Object.apply(this);var r=sap.ui.core.Locale.rLocale.exec(l.replace(/_/g,"-"));this.sLocaleId=l;this.sLanguage=r[1]||null;this.sScript=r[2]||null;this.sRegion=r[3]||null;this.sVariant=(r[4]&&r[4].slice(1))||null;this.sExtension=r[5]||null;this.sPrivateUse=r[6]||null;if(this.sLanguage){this.sLanguage=this.sLanguage.toLowerCase();}if(this.sScript){this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,function($){return $.toUpperCase();});}if(this.sRegion){this.sRegion=this.sRegion.toUpperCase();}};
sap.ui.core.Locale.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);sap.ui.base.Object.defineClass("sap.ui.core.Locale",{baseType:"sap.ui.base.Object",publicMethods:["getLanguage","getScript","getRegion","getVariant","getExtension","getPrivateUse","hasPrivateUseSubtag","toString"]});sap.ui.core.Locale.rLocale=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?(-[0-9A-Z]{5,8}|(?:[0-9][0-9A-Z]{3}))*(?:-([0-9A-WYZ](?:-[0-9A-Z]{2,8})+))*(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
sap.ui.core.Locale.prototype.getLanguage=function(){return this.sLanguage;};
sap.ui.core.Locale.prototype.getScript=function(){return this.sScript;};
sap.ui.core.Locale.prototype.getRegion=function(){return this.sRegion;};
sap.ui.core.Locale.prototype.getVariant=function(){return this.sVariant;};
sap.ui.core.Locale.prototype.getVariantSubtags=function(){return this.sVariant?this.sVariant.split('-'):[];};
sap.ui.core.Locale.prototype.getExtension=function(){return this.sExtension;};
sap.ui.core.Locale.prototype.getExtensionSubtags=function(){return this.sExtension?this.sExtension.slice(2).split('-'):[];};
sap.ui.core.Locale.prototype.getPrivateUse=function(){return this.sPrivateUse;};
sap.ui.core.Locale.prototype.getPrivateUseSubtags=function(){return this.sPrivateUse?this.sPrivateUse.slice(2).split('-'):[];};
sap.ui.core.Locale.prototype.hasPrivateUseSubtag=function(s){return jQuery.inArray(s,this.getPrivateUseSubtags())>=0;};
sap.ui.core.Locale.prototype.toString=function(){var r=[this.sLanguage];if(this.sScript){r.push(this.sScript);}if(this.sRegion){r.push(this.sRegion);}if(this.sVariant){r.push(this.sVariant);}if(this.sExtension){r.push(this.sExtension);}if(this.sPrivateUse){r.push(this.sPrivateUse);}return r.join("-");};
