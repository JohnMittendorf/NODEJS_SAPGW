/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport=function(){if(!(this instanceof sap.ui.core.Element)){return;}var o=this.clone;this.clone=function(){var c=o.apply(this,arguments);if(this.aCustomStyleClasses){c.aCustomStyleClasses=this.aCustomStyleClasses.slice();}return c;};this.addStyleClass=function(s,b){if(!this.aCustomStyleClasses){this.aCustomStyleClasses=[];}if(s){if(s.indexOf("\"")>-1){return this;}if(s.indexOf("'")>-1){return this;}for(var i=this.aCustomStyleClasses.length-1;i>=0;i--){if(this.aCustomStyleClasses[i]==s){return this;}}this.aCustomStyleClasses.push(s);var r=this.getDomRef();if(r){jQuery(r).addClass(s);}else if(!b){this.invalidate();}}return this;};this.removeStyleClass=function(s,b){if(s&&this.aCustomStyleClasses){for(var i=this.aCustomStyleClasses.length-1;i>=0;i--){if(this.aCustomStyleClasses[i]==s){this.aCustomStyleClasses.splice(i,1);var r=this.getDomRef();if(r){jQuery(r).removeClass(s);}else if(!b){this.invalidate();}}}}return this;};this.hasStyleClass=function(s){if(s&&this.aCustomStyleClasses){for(var i=this.aCustomStyleClasses.length-1;i>=0;i--){if(this.aCustomStyleClasses[i]==s){return true;}}}return false;};this.getMetadata().addPublicMethods(["addStyleClass","removeStyleClass","hasStyleClass"]);};
jQuery.sap.require("sap.ui.core.Element");
