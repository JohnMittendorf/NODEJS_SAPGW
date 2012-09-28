/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.type.Integer");jQuery.sap.require("sap.ui.model.SimpleType");jQuery.sap.require("sap.ui.core.format.NumberFormat");
sap.ui.model.type.Integer=function(){sap.ui.model.SimpleType.apply(this,arguments);this.sName="Integer";};
sap.ui.model.type.Integer.prototype=jQuery.sap.newObject(sap.ui.model.SimpleType.prototype);sap.ui.base.Object.defineClass("sap.ui.model.type.Integer",{baseType:"sap.ui.model.SimpleType",publicMethods:[]});
sap.ui.model.type.Integer.prototype.formatValue=function(v,i){if(v==undefined||v==null){return null;}switch(i){case"string":return this.oFormat.format(v);case"int":case"float":return v;default:throw new sap.ui.model.FormatException("Don't know how to format Integer to "+i);}};
sap.ui.model.type.Integer.prototype.parseValue=function(v,i){var r;switch(i){case"string":r=this.oFormat.parse(v);if(isNaN(r)){throw new sap.ui.model.ParseException(v+" is not a valid Integer value");}return r;case"int":return v;case"float":return Math.floor(v);default:throw new sap.ui.model.ParseException("Don't know how to parse Integer from "+i);}};
sap.ui.model.type.Integer.prototype.validateValue=function(v){if(this.oConstraints){var a=[];jQuery.each(this.oConstraints,function(n,c){switch(n){case"minimum":if(v<c){a.push("minimum");}break;case"maximum":if(v>c){a.push("maximum");}}});if(a.length>0){throw new sap.ui.model.ValidateException("Validation of type constraints failed",a);}}};
sap.ui.model.type.Integer.prototype.setFormatOptions=function(f){this.oFormatOptions=f;this.oFormat=sap.ui.core.format.NumberFormat.getIntegerInstance(this.oFormatOptions);};
