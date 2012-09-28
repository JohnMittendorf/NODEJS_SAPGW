/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.base.Interface");
sap.ui.base.Interface=function(o,m){if(!o){return o;}function c(o,s){return function(){var t=o[s].apply(o,arguments);return(!(t instanceof sap.ui.core.Element)&&(t instanceof sap.ui.base.Object))?t.getInterface():t;};}if(!m){return{};}var s;for(var i=0,a=m.length;i<a;i++){s=m[i];this[s]=c(o,s);}};
