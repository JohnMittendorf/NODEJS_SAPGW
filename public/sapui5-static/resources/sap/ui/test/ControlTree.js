/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.test.ControlTree");jQuery.sap.require("jquery.sap.strings");jQuery.sap.require("sap.ui.core.Element");
sap.ui.test.ControlTree=function(c,w){this.oWindow=w;this.oCore=c;this.oCore.attachUIUpdated(this.renderDelayed,this);this.renderDelayed();};
sap.ui.test.ControlTree.prototype.renderDelayed=function(){if(this.oTimer){this.oWindow.jQuery.sap.clearDelayedCall(this.oTimer);}this.oTimer=this.oWindow.jQuery.sap.delayedCall(500,this,"initDT");restoreLockState(this);supplySelectedTheme(this.oCore.getConfiguration().getTheme());};
sap.ui.test.ControlTree.prototype.initDT=function(){restoreTreeCallback();var u=null,o=this.oCore.mUIAreas;for(var i in o){var u=o[i],d=this.createTreeNodeDT(u.getId(),0,"UIArea");var r=u.getContent();for(var i=0,l=r.length;i<l;i++){this.renderNodeDT(r[i],0);}}};
sap.ui.test.ControlTree.prototype.createTreeNodeDT=function(i,l,t){callback(i,l,t);};
sap.ui.test.ControlTree.prototype.createAssocTreeNodeDT=function(i,l,t,s,a){callback(i,l,t,s,a);};
sap.ui.test.ControlTree.prototype.renderNodeDT=function(c,l){if(!c){return;}var a=c.getMetadata();var d=this.createTreeNodeDT(c.getId(),l+1,a.getName());var p=a.getAllProperties();for(var s in p){var b=c["get"+s];var e=s;if(!b){e=jQuery.sap.charToUpperCase(e,0);}var v=c["get"+e]();addProperty(c.getId(),s,p[s].type,v!=null?v:"");}var f=a.getAllAggregations();for(var n in f){var g=c.getAggregation(f[n].name);if(g&&g.length){for(var i=0;i<g.length;i++){var o=g[i];if(o instanceof sap.ui.core.Element){this.renderNodeDT(g[i],l+1);}}}else if(g instanceof sap.ui.core.Element){this.renderNodeDT(g,l+1);}}var h=a.getAllAssociations();for(var m in h){var j=c.getAssociation(h[m].name);if(null!=j){var k=h[m].name+j;this.createAssocTreeNodeDT(k,l+2,"Association",c.getId(),j);addProperty(k,h[m].name,"assoc_type",j);addProperty(k,"Name","string",h[m].name);}}};
