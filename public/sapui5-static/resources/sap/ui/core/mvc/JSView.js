/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.JSView");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.mvc.View");sap.ui.core.mvc.View.extend("sap.ui.core.mvc.JSView",{metadata:{library:"sap.ui.core"}});(function(){var r={};sap.ui.jsview=function(i,v){var s={};if(v&&typeof(v)=="string"){s.viewName=v;s.controller=arguments[2];var o=new sap.ui.core.mvc.JSView(i,s);return o;}else if(v&&typeof(v)=="object"){r[i]=v;jQuery.sap.declare({modName:i,type:"view"},false);}else if(arguments.length==1&&typeof(arguments[0])=="string"){s.viewName=i;s.controller=arguments[1];var o=s.id?new sap.ui.core.mvc.JSView(s.id,s):new sap.ui.core.mvc.JSView(s);return o;}else{throw new Error("Wrong arguments! Either call sap.ui.jsview([sId,] sViewName) to instantiate a View or sap.ui.jsview(sViewName, oViewImpl) to define a View type.");}};sap.ui.core.mvc.JSView.prototype.initViewSettings=function(s){if(!r[s.viewName]){jQuery.sap.require({modName:s.viewName,type:"view"});}jQuery.extend(this,r[s.viewName]);};sap.ui.core.mvc.JSView.prototype.onControllerConnected=function(c){var t=this;sap.ui.core.Element.runWithPreprocessors(function(){t.applySettings({content:t.createContent(c)});});};}());