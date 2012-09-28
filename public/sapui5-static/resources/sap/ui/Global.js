/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
if(window.OpenAjax&&window.OpenAjax.hub){OpenAjax.hub.registerLibrary("sap","http://www.sap.com/","0.1",{});}jQuery.sap.declare("sap.ui.Global");jQuery.sap.require("jquery.sap.dom");if(typeof window.sap!=="object"&&typeof window.sap!=="function"){window.sap={};}if(typeof window.sap.ui!=="object"){window.sap.ui={};}sap.ui=jQuery.extend(sap.ui,{version:"1.4.3",buildinfo:{lastchange:"192683",buildtime:"201206291039"}});
sap.ui.namespace=function(n){return jQuery.sap.getObject(n,0);};
sap.ui.lazyRequire=function(c,m,s){var f=c.replace(/\//gi,"\."),l=f.lastIndexOf("."),p=f.substr(0,l),a=f.substr(l+1),o=jQuery.sap.getObject(p,0),b=o[a],d=(m||"new").split(" "),e=jQuery.inArray("new",d);s=s||f;if(!b){if(e>=0){b=function(){jQuery.sap.log.debug("lazy stub for '"+f+"' (constructor) called.");jQuery.sap.require(s);var r=o[a];if(r._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+f+"'has not been replaced by module '"+s+"'");}var i=jQuery.sap.newObject(r.prototype);var g=r.apply(i,arguments);if(g&&(typeof g==="function"||typeof g==="object")){i=g;}return i;};b._sapUiLazyLoader=true;d.splice(e,1);}else{b={};}o[a]=b;}jQuery.each(d,function(i,g){if(!b[g]){b[g]=function(){jQuery.sap.log.debug("lazy stub for '"+f+"."+g+"' called.");jQuery.sap.require(s);var r=o[a];if(r[g]._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+f+"."+g+"' has not been replaced by loaded module '"+s+"'");}return r[g].apply(r,arguments);};b[g]._sapUiLazyLoader=true;}});};
sap.ui.resource=function(l,r){var m=r.match(/^themes\/([^\/]+)\//);if(m){l+=".themes."+m[1];r=r.substr(m[0].length);}return jQuery.sap.getModulePath(l,'/')+r;};
sap.ui.localResources=function(n){jQuery.sap.registerModulePath(n,"./"+n.replace(/\./g,"/"));};
