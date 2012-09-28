/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MenuBar");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.MenuBar",{metadata:{library:"sap.ui.commons",properties:{"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"design":{type:"sap.ui.commons.MenuBarDesign",group:"Appearance",defaultValue:sap.ui.commons.MenuBarDesign.Standard}},defaultAggregation:"items",aggregations:{"items":{type:"sap.ui.commons.MenuItem",multiple:true,singularName:"item"}}}});jQuery.sap.require("sap.ui.commons.Menu");jQuery.sap.require("sap.ui.commons.MenuItem");
sap.ui.commons._DelegatorMenuItem=function(a){sap.ui.commons.MenuItem.apply(this);this.oAlterEgoItm=a;};
sap.ui.commons._DelegatorMenuItem.prototype=jQuery.sap.newObject(sap.ui.commons.MenuItem.prototype);sap.ui.core.Element.defineClass("sap.ui.commons._DelegatorMenuItem",{baseType:"sap.ui.commons.MenuItem",publicMethods:[],library:"sap.ui.commons",properties:{},aggregations:{},associations:{},events:{}});
sap.ui.commons._DelegatorMenuItem.prototype.exit=function(){this.oAlterEgoItm=null;};
sap.ui.commons._DelegatorMenuItem.prototype.getText=function(){return this.oAlterEgoItm.getText();};
sap.ui.commons._DelegatorMenuItem.prototype.getIcon=function(){return this.oAlterEgoItm.getIcon();};
sap.ui.commons._DelegatorMenuItem.prototype.getEnabled=function(){return this.oAlterEgoItm.getEnabled();};
sap.ui.commons._DelegatorMenuItem.prototype.getVisible=function(){return this.oAlterEgoItm.getVisible();};
sap.ui.commons._DelegatorMenuItem.prototype.getSubmenu=function(){return this.oAlterEgoItm.getSubmenu();};
(function(){sap.ui.commons.MenuBar.prototype.init=function(){this.oOvrFlwMnu=null;this.sCurrentFocusedItemRefId=null;};sap.ui.commons.MenuBar.prototype.exit=function(){if(this.oOvrFlwMnu){this.oOvrFlwMnu.destroy();}this.oOvrFlwMnu=null;if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}};sap.ui.commons.MenuBar.prototype.doBeforeRendering=function(){var a=this.getItems();for(var i=0;i<a.length;i++){var m=a[i].getSubmenu();if(m){m.setRootMenuTopStyle(this.getDesign()==sap.ui.commons.MenuBarDesign.Header);}}if(this.oOvrFlwMnu){this.oOvrFlwMnu.setRootMenuTopStyle(this.getDesign()==sap.ui.commons.MenuBarDesign.Header);}if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}};sap.ui.commons.MenuBar.prototype.onAfterRendering=function(){this.sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef(),jQuery.proxy(this.onresize,this));this.onresize();};sap.ui.commons.MenuBar.prototype.onresize=function(e){u(this);};sap.ui.commons.MenuBar.prototype.onfocusin=function(e){var t=jQuery(e.target);var j=t.attr("id");if(!j||j==this.getId()||j==this.getId()+"-area"){var i=jQuery.sap.byId(this.getId()+"-area").children();this.sCurrentFocusedItemRefId=i.length==0?null:jQuery(i.get(0)).attr("id");if(this.sCurrentFocusedItemRefId){jQuery.sap.byId(this.sCurrentFocusedItemRefId).get(0).focus();}}jQuery.sap.byId(this.getId()).attr("tabindex","-1");};sap.ui.commons.MenuBar.prototype.onfocusout=function(e){jQuery.sap.byId(this.getId()).attr("tabindex","0");};sap.ui.commons.MenuBar.prototype.onclick=function(e){o(this,e,false);};sap.ui.commons.MenuBar.prototype.onsapselect=function(e){o(this,e,true);};sap.ui.commons.MenuBar.prototype.onsapdown=function(e){o(this,e,true);};sap.ui.commons.MenuBar.prototype.onsapdownmodifiers=function(e){if(e.altKey){o(this,e,true);}};sap.ui.commons.MenuBar.prototype.onsapprevious=function(e){if(e.keyCode!=jQuery.sap.KeyCodes.ARROW_UP){f(this,e,"prev");}};sap.ui.commons.MenuBar.prototype.onsapnext=function(e){if(e.keyCode!=jQuery.sap.KeyCodes.ARROW_DOWN){f(this,e,"next");}};sap.ui.commons.MenuBar.prototype.onsaphome=function(e){f(this,e,"first");};sap.ui.commons.MenuBar.prototype.onsapend=function(e){f(this,e,"last");};var o=function(t,e,w){e.preventDefault();e.stopPropagation();var r=jQuery(e.target);if(!r.attr("itemidx")){r=r.parent();}var i=r.attr("itemidx");if(!i||!t.getEnabled()){return;}if(i=="ovrflw"){if(t.oOvrFlwMnu){var a=sap.ui.core.Popup.Dock;t.oOvrFlwMnu.open(w,r.get(0),a.EndTop,a.EndBottom,r.get(0));}return;}var b=parseInt(i,10);var m=t.getItems()[b];if(!m||!m.getEnabled()){return;}var c=m.getSubmenu();if(c){var a=sap.ui.core.Popup.Dock;c.open(w,r.get(0),a.BeginTop,a.BeginBottom,r.get(0));}};var g=function(t){var v=0;var a=jQuery.sap.byId(t.getId()+"-area");var i=a.children();var r=sap.ui.getCore().getConfiguration().getRTL();var l=(r?100000:0);i.each(function(b){if(b==0){return true;}var c=this.offsetLeft;var d=(r?(c>=l):(c<=l));if(d){v=b;return false;}else if(jQuery(this).attr("id")==t.getId()+"-ovrflw"){v=b;return false;}else{l=c;return true;}});return v;};var u=function(t){var v=g(t);var _=v;var a=jQuery.sap.byId(t.getId()+"-area");var j=a.children();var b=jQuery.sap.byId(t.getId()+"-ovrflw");var c=false;if(v<j.length-1){b.attr("style","display:block;");if(!t.oOvrFlwMnu){t.oOvrFlwMnu=new sap.ui.commons.Menu(t.getId()+"-ovrflwmnu");t.oOvrFlwMnu.bUseTopStyle=t.getDesign()==sap.ui.commons.MenuBarDesign.Header;}t.oOvrFlwMnu.destroyItems();var d=t.getItems();for(var i=0;i<d.length;i++){var e=d[i];if(v!=0){if(e.getVisible()){v--;}if(v==0){t.sLastVisibleItemId=e.getId();}}else{t.oOvrFlwMnu.addItem(new sap.ui.commons._DelegatorMenuItem(e));if(e.getId()==t.sCurrentFocusedItemRefId){c=true;}}}if(sap.ui.getCore().getConfiguration().getAccessibility()){j.attr("aria-setsize",_+1);b.attr("aria-posinset",_+1);}}else{b.attr("style","display:none;");if(t.oOvrFlwMnu){t.oOvrFlwMnu.destroyItems();}t.sLastVisibleItemId=null;if(sap.ui.getCore().getConfiguration().getAccessibility()){j.attr("aria-setsize",_);b.attr("aria-posinset",0);}}a.scrollTop(0);if(c){t.sCurrentFocusedItemRefId=t.sLastVisibleItemId;jQuery.sap.byId(t.sLastVisibleItemId).get(0).focus();}};var f=function(t,e,d){e.stopPropagation();e.preventDefault();if(!t.sCurrentFocusedItemRefId){return;}var s=null;if(t.sLastVisibleItemId&&((t.sCurrentFocusedItemRefId==t.sLastVisibleItemId&&d=="next")||d=="last")){s=t.getId()+"-ovrflw";}else if(t.sLastVisibleItemId&&t.sCurrentFocusedItemRefId==t.getId()+"-ovrflw"&&d=="prev"){s=t.sLastVisibleItemId;}else{var a=d+"All";var i=false;if(d=="first"){a="prevAll";i=true;}else if(d=="last"){a="nextAll";i=true;}var c=jQuery.sap.byId(t.sCurrentFocusedItemRefId);var j=c[a](":visible");s=jQuery(j.get(i?j.length-1:0)).attr("id");}if(s){t.sCurrentFocusedItemRefId=s;jQuery.sap.byId(s).get(0).focus();}};}());