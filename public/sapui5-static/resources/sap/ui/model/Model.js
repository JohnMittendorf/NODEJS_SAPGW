/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.Model");jQuery.sap.require("sap.ui.base.EventProvider");jQuery.sap.require("sap.ui.model.BindingMode");
sap.ui.model.Model=function(){sap.ui.base.EventProvider.apply(this,arguments);this.oData={};this.aBindings=[];this.iSizeLimit=100;this.sDefaultBindingMode=sap.ui.model.BindingMode.TwoWay;this.mSupportedBindingModes={"OneWay":true,"TwoWay":true,"OneTime":true};};
sap.ui.model.Model.prototype=jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);sap.ui.base.Object.defineClass("sap.ui.model.Model",{baseType:"sap.ui.base.Object",publicMethods:["bindProperty","bindList","bindTree","createBindingContext","destroyBindingContext","getProperty","getDefaultBindingMode","setDefaultBindingMode","isBindingModeSupported","attachParseError","detachParseError","attachRequestCompleted","detachRequestCompleted","attachRequestFailed","detachRequestFailed","attachRequestSent","detachRequestSent","setSizeLimit"]});sap.ui.model.Model.M_EVENTS={ParseError:"parseError",RequestFailed:"requestFailed",RequestSent:"requestSent",RequestCompleted:"requestCompleted"};
sap.ui.model.Model.prototype.attachRequestFailed=function(d,f,l){this.attachEvent("requestFailed",d,f,l);return this;};
sap.ui.model.Model.prototype.detachRequestFailed=function(f,l){this.detachEvent("requestFailed",f,l);return this;};
sap.ui.model.Model.prototype.fireRequestFailed=function(a){this.fireEvent("requestFailed",a);return this;};
sap.ui.model.Model.prototype.attachParseError=function(d,f,l){this.attachEvent("parseError",d,f,l);return this;};
sap.ui.model.Model.prototype.detachParseError=function(f,l){this.detachEvent("parseError",f,l);return this;};
sap.ui.model.Model.prototype.fireParseError=function(a){this.fireEvent("parseError",a);return this;};
sap.ui.model.Model.prototype.attachRequestSent=function(d,f,l){this.attachEvent("requestSent",d,f,l);return this;};
sap.ui.model.Model.prototype.detachRequestSent=function(f,l){this.detachEvent("requestSent",f,l);return this;};
sap.ui.model.Model.prototype.fireRequestSent=function(a){this.fireEvent("requestSent",a);return this;};
sap.ui.model.Model.prototype.attachRequestCompleted=function(d,f,l){this.attachEvent("requestCompleted",d,f,l);return this;};
sap.ui.model.Model.prototype.detachRequestCompleted=function(f,l){this.detachEvent("requestCompleted",f,l);return this;};
sap.ui.model.Model.prototype.fireRequestCompleted=function(a){this.fireEvent("requestCompleted",a);return this;};
sap.ui.model.Model.prototype.addBinding=function(b){this.aBindings.push(b);};
sap.ui.model.Model.prototype.removeBinding=function(b){for(var i=0;i<this.aBindings.length;i++){if(this.aBindings[i]==b){this.aBindings.splice(i,1);break;}}};
sap.ui.model.Model.prototype.getDefaultBindingMode=function(){return this.sDefaultBindingMode;};
sap.ui.model.Model.prototype.setDefaultBindingMode=function(m){if(this.isBindingModeSupported(m)){this.sDefaultBindingMode=m;}else{throw new Error("Binding mode "+m+" is not supported by this model.");}};
sap.ui.model.Model.prototype.isBindingModeSupported=function(m){return(m in this.mSupportedBindingModes);};
sap.ui.model.Model.prototype.setSizeLimit=function(s){this.iSizeLimit=s;};
