/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.core.Core");(function(){sap.ui.core.theming.Parameters={};var p=null;sap.ui.getCore().attachThemeChanged(function(e){p=null;});var g=function(){if(!p){var j=[];jQuery("link[id^=sap-ui-theme-]").each(function(){j.push(this.href.replace(".css",".json").replace("/library","/library-parameters"));});p={};for(var i=0;i<j.length;i++){var u=j[i];var r=jQuery.sap.sjax({url:u,dataType:'json'});if(r.success){var o=(typeof r.data=="string")?jQuery.parseJSON(r.data):r.data;p=jQuery.extend(p,o);}else{p={};throw new Error("Could not load theme parameters from: "+u);}}}return p;};sap.ui.core.theming.Parameters.get=function(n){if(arguments.length==1){return g()[n];}else if(arguments.length==0){var c={};return jQuery.extend(c,g());}else{return undefined;}};}());
