/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.base.Metadata");jQuery.sap.require("jquery.sap.script");
sap.ui.base.Metadata=function(c,o){if(!o||typeof o.metadata!=="object"){o={metadata:o||{},constructor:jQuery.sap.getObject(c)};o.metadata.__version=1.0;}o.metadata.__version=o.metadata.__version||2.0;if(typeof o.constructor!=="function"){throw Error("constructor for class "+c+" must have been declared before creating metadata for it");}this._sClassName=c;this._oClass=o.constructor;this.extend(o);};
sap.ui.base.Metadata.prototype.extend=function(c){this.applySettings(c);this.afterApplySettings();};
sap.ui.base.Metadata.prototype.applySettings=function(c){var s=c.metadata,p,n;if(s.baseType){var o=jQuery.sap.getObject(s.baseType);if(typeof o!=="function"){jQuery.sap.log.fatal("base class '"+s.baseType+"' does not exist");}if(o.getMetadata){this._oParent=o.getMetadata();}else{this._oParent=new sap.ui.base.Metadata(s.baseType,{});}}else{this._oParent=undefined;}this._bAbstract=!!s["abstract"];this._bFinal=!!s["final"];this._aInterfaces=jQuery.sap.unique(s.interfaces||[]);this._aPublicMethods=jQuery.sap.unique(s.publicMethods||[]);p=this._oClass.prototype;for(n in c){if(n!=="metadata"&&n!=="constructor"){p[n]=c[n];if(!n.match(/^_|^on|^init$|^exit$/)){this._aPublicMethods.push(n);}}}};
sap.ui.base.Metadata.prototype.afterApplySettings=function(){if(this._oParent){this._aAllPublicMethods=jQuery.sap.unique(this._oParent._aAllPublicMethods.concat(this._aPublicMethods));}else{this._aAllPublicMethods=this._aPublicMethods;}};
sap.ui.base.Metadata.prototype.getName=function(){return this._sClassName;};
sap.ui.base.Metadata.prototype.getClass=function(){return this._oClass;};
sap.ui.base.Metadata.prototype.getParent=function(){return this._oParent;};
sap.ui.base.Metadata.prototype.getPublicMethods=function(){return this._aPublicMethods;};
sap.ui.base.Metadata.prototype.getAllPublicMethods=function(){return this._aAllPublicMethods;};
sap.ui.base.Metadata.prototype.getInterfaces=function(){return this._aInterfaces;};
sap.ui.base.Metadata.prototype.isInstanceOf=function(s){if(this._oParent){if(this._oParent.isInstanceOf(s)){return true;}};var a=this._aInterfaces;for(var i=0,l=a.length;i<l;i++){if(a[i]===s){return true;}}return false;};
sap.ui.base.Metadata.prototype.isFinal=function(){return this._bFinal;};
sap.ui.base.Metadata.prototype.addPublicMethods=function(m){var n=(m instanceof Array)?m:arguments;function u(a,v){Array.prototype.push.apply(a,v);jQuery.sap.unique(a);}u(this._aPublicMethods,n);u(this._aAllPublicMethods,n);};
sap.ui.base.Metadata.createClass=function(b,c,o,F){if(typeof b==="string"){F=o;o=c;c=b;b=null;}o=o||{};o.metadata=o.metadata||{};if(!o.hasOwnProperty('constructor')){o.constructor=undefined;}F=F||sap.ui.base.Metadata;var f=o.constructor;if(b){f=f||function(){b.apply(this,arguments);};f.prototype=jQuery.sap.newObject(b.prototype);f.prototype.constructor=f;o.metadata.baseType=b.getMetadata().getName();}else{f=f||function(){};delete o.metadata.baseType;}o.constructor=f;jQuery.sap.setObject(c,f);var m=new F(c,o);f.getMetadata=f.prototype.getMetadata=jQuery.sap.getter(m);if(!f.getMetadata().isFinal()){f.extend=function(s,a,d){return sap.ui.base.Metadata.createClass(f,s,a,d||F);};}return f;};
