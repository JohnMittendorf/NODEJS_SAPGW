/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.util.Rect");jQuery.sap.require("sap.ui.base.Object");
sap.ui.util.Rect=function(t,l,w,h){this.top=t||0;this.left=l||0;this.width=w||0;this.height=h||0;};
sap.ui.util.Rect.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);
sap.ui.util.Rect.prototype.contains=function(p,i){return p>=this.left&&p<=this.left+this.width&&i>=this.top&&i<=this.top+this.height;};
