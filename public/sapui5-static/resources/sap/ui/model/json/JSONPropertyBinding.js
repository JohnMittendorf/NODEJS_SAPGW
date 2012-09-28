/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.json.JSONPropertyBinding");jQuery.sap.require("sap.ui.model.PropertyBinding");
sap.ui.model.json.JSONPropertyBinding=function(m,p,c){sap.ui.model.PropertyBinding.apply(this,arguments);this.oValue=this._getValue();};
sap.ui.model.json.JSONPropertyBinding.prototype=jQuery.sap.newObject(sap.ui.model.PropertyBinding.prototype);sap.ui.base.Object.defineClass("sap.ui.model.json.JSONPropertyBinding",{baseType:"sap.ui.model.PropertyBinding",publicMethods:[]});
sap.ui.model.json.JSONPropertyBinding.prototype.getValue=function(){return this.oValue;};
sap.ui.model.json.JSONPropertyBinding.prototype._getValue=function(){var p=this.sPath.substr(this.sPath.lastIndexOf("/")+1);if(p=="__name__"){var a=this.oContext.split("/");return a[a.length-1];}return this.oModel._getObject(this.sPath,this.oContext);};
sap.ui.model.json.JSONPropertyBinding.prototype.setValue=function(v){if(this.oValue!=v){this.oValue=v;this.oModel.setProperty(this.sPath,v,this.oContext);}};
sap.ui.model.json.JSONPropertyBinding.prototype.setContext=function(c){this.oContext=c;this.checkUpdate();};
sap.ui.model.json.JSONPropertyBinding.prototype.checkUpdate=function(){var v=this._getValue();if(v!==this.oValue){this.oValue=v;this._fireChange();}};
