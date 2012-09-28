/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Toolbar");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Toolbar",{metadata:{library:"sap.ui.commons",properties:{"visible":{type:"boolean",group:"Behavior",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'auto'},"design":{type:"sap.ui.commons.ToolbarDesign",group:"Appearance",defaultValue:sap.ui.commons.ToolbarDesign.Flat},"standalone":{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"items",aggregations:{"items":{type:"sap.ui.commons.ToolbarItem",multiple:true,singularName:"item"}}}});jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");jQuery.sap.require("sap.ui.core.Popup");
sap.ui.commons.Toolbar.prototype.init=function(){this.bOpen=false;this.oDomRef=null;this.oInnerRef=null;this.oOverflowDomRef=null;this.bRtl=sap.ui.getCore().getConfiguration().getRTL();this._detectVisibleItemCountChangeTimer=null;var t=this;this.oItemDelegate={onAfterRendering:jQuery.proxy(t._itemRendered,t)};};
sap.ui.commons.Toolbar.prototype.onBeforeRendering=function(){if(this._detectVisibleItemCountChangeTimer){jQuery.sap.clearIntervalCall(this._detectVisibleItemCountChangeTimer);this._detectVisibleItemCountChangeTimer=null;}jQuery.sap.byId(this.getId()+"-mn").unbind("keyup",this._handleKeyUp);if(this.sUpdateItemNavigationTimer){jQuery.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);this.sUpdateItemNavigationTimer=null;}};
sap.ui.commons.Toolbar.prototype.onAfterRendering=function(){this.oDomRef=this.getDomRef();this.oInnerRef=this.oDomRef.firstChild.firstChild;var o=this.getId()+"-mn";this.oOverflowDomRef=jQuery.sap.domById(o);if(!this.oItemNavigation){this.oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this.addDelegate(this.oItemNavigation);}jQuery.sap.byId(this.getId()+"-mn").bind("keyup",jQuery.proxy(this._handleKeyUp,this));this.updateAfterResize(true);this._detectVisibleItemCountChangeTimer=jQuery.sap.intervalCall(350,this,"_detectVisibleItemCountChange");};
sap.ui.commons.Toolbar.prototype._handleKeyUp=function(e){if((e.keyCode==jQuery.sap.KeyCodes.SPACE)&&(e.target.id===this.getId()+"-mn")){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}};
sap.ui.commons.Toolbar.prototype.exit=function(){if(this._detectVisibleItemCountChangeTimer){jQuery.sap.clearIntervalCall(this._detectVisibleItemCountChangeTimer);this._detectVisibleItemCountChangeTimer=null;}if(this.oItemNavigation){this.removeDelegate(this.oItemNavigation);this.oItemNavigation.destroy();}if(this.sUpdateItemNavigationTimer){jQuery.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);this.sUpdateItemNavigationTimer=null;}this.oItemDelegate=undefined;};
sap.ui.commons.Toolbar.prototype.updateAfterResize=function(c){var v=this.getVisibleItemInfo();this._oLastVisibleItem=v.oLastVisibleItem;this._oFirstInvisibleItem=v.oFirstInvisibleItem;this._iLastVisibleItemTop=v.iLastVisibleItemTop;this.updateItemNavigation(v.count,c);this.updateOverflowIcon(v.bOverflow);if(this.sUpdateItemNavigationTimer){jQuery.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);this.sUpdateItemNavigationTimer=null;}};
sap.ui.commons.Toolbar.prototype._detectVisibleItemCountChange=function(){if(!this.getDomRef()){if(this._detectVisibleItemCountChangeTimer){jQuery.sap.clearIntervalCall(this._detectVisibleItemCountChangeTimer);this._detectVisibleItemCountChangeTimer=null;}return;}if(this._oLastVisibleItem&&this._oFirstInvisibleItem){var l=this._oLastVisibleItem.offsetLeft;var f=this._oFirstInvisibleItem.offsetLeft;var a=this._oLastVisibleItem.offsetTop;var i=this.bRtl?(f<l):(f>l);if((a!=this._iLastVisibleItemTop)||(!this.bOpen&&i)){if(this.bOpen){this.closePopup(true);}this.updateAfterResize(false);}}else if(this._oLastVisibleItem&&!this._oFirstInvisibleItem){if(this._oLastVisibleItem.offsetTop!=this._iLastVisibleItemTop){this.updateAfterResize(false);}}else if(!this._oLastVisibleItem&&!this._oFirstInvisibleItem){}else{}};
sap.ui.commons.Toolbar.prototype.updateItemNavigation=function(v,c){this.oItemNavigation.setRootDomRef(this.oDomRef);var a=[];var b=this.getItems();for(var i=0;i<v;i++){var d=b[i].getFocusDomRef();if(d){a.push(d);}}a.push(this.oOverflowDomRef);this.oItemNavigation.setItemDomRefs(a);this.iItemDomRefCount=a.length;if(c){var e=b.length;for(var i=v;i<e;i++){var d=b[i].getFocusDomRef();if(d){d.tabIndex=-1;}}}};
sap.ui.commons.Toolbar.prototype.getVisibleItemInfo=function(){var v=0;if(this.oInnerRef){var e=this.oInnerRef.childNodes;this.bRtl=sap.ui.getCore().getConfiguration().getRTL();var o=this.getId()+"-mn";var l,a,c=0,b,d,f=0,g=null,h=null,j,k=false;for(var i=1,m=e.length;i<m;i++){a=e[i];b=a.offsetLeft;if(i==1){d=e[0].offsetWidth;f=e[0].offsetLeft;}if(this.bRtl){c=a.offsetWidth;l=(b+c>=f+d);}else{l=(b<=f);}if(l){v=i;g=e[i-1];h=a;j=g.offsetTop;k=true;break;}else if(a.id==o){v=i;g=e[i-1];h=null;j=g.offsetTop;k=false;break;}else{f=b;d=c;}}}return{"count":v,"oLastVisibleItem":g,"oFirstInvisibleItem":h,"iLastVisibleItemTop":j,"bOverflow":k};};
sap.ui.commons.Toolbar.prototype.updateOverflowIcon=function(o){this.oOverflowDomRef.style.display=o?"block":"none";};
sap.ui.commons.Toolbar.prototype.onclick=function(e){if(e.target.id===this.getId()+"-mn"){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}};
sap.ui.commons.Toolbar.prototype.onsapdown=function(e){if(e.target.id===this.getId()+"-mn"){if(!this.bOpen){this.handleOverflowButtonTriggered();e.preventDefault();e.stopImmediatePropagation();}}};
sap.ui.commons.Toolbar.prototype.onsapup=function(e){if(e.target.id===this.getId()+"-mn"){if(this.bOpen){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}}};
sap.ui.commons.Toolbar.prototype.handleOverflowButtonTriggered=function(){if(!this.bPopupInitialized){this.popup=new sap.ui.core.Popup(new sap.ui.commons.ToolbarOverflowPopup(this),false,true,true);this.bPopupInitialized=true;}if(this.bOpen){this.closePopup(false);}else{this.openPopup();}};
sap.ui.commons.Toolbar.prototype.openPopup=function(){this.getRenderer().setActive(this);sap.ui.commons.ToolbarRenderer.fillOverflowPopup(this);this.popup.attachEvent("opened",this.handlePopupOpened,this);this.popup.attachEvent("closed",this.handlePopupClosed,this);var d=jQuery.browser.msie&&(jQuery.browser.version=="7.0"||jQuery.browser.version=="8.0")?1:0;this.popup.open(d,sap.ui.core.Popup.Dock.EndTop,sap.ui.core.Popup.Dock.EndBottom,this.oDomRef);this.bOpen=true;};
sap.ui.commons.Toolbar.prototype.handlePopupOpened=function(){var a=this.getItems();var b=a.length;var v=this.getVisibleItemInfo().count;var n=[];for(var i=v;i<b;i++){var d=a[i].getFocusDomRef();if(d){n.push(d);}}this.popup.getContent().initItemNavigation(n);};
sap.ui.commons.Toolbar.prototype.closePopup=function(r){this._bResetFocus=r;this.popup.close();};
sap.ui.commons.Toolbar.prototype.handlePopupClosed=function(){this.getRenderer().unsetActive(this);var v=this.getVisibleItemInfo().count;this.updateItemNavigation(v,true);this.bOpen=false;sap.ui.commons.ToolbarRenderer.emptyOverflowPopup(this);if(this._bResetFocus){this.oItemNavigation.focusItem(this.iItemDomRefCount-1);}this._bResetFocus=false;};
sap.ui.commons.Toolbar.prototype.prepareFocusInfoRedirect=function(c){if(c){var i=this.getId();var g=function(){return{id:i,childInfo:this._orig_getFocusInfo()};};c._orig_getFocusInfo=c.getFocusInfo;c.getFocusInfo=g;var a=function(f){return this._orig_applyFocusInfo(f.childInfo);};c._orig_applyFocusInfo=c.applyFocusInfo;c.applyFocusInfo=a;}return c;};
sap.ui.commons.Toolbar.prototype.cleanupFocusInfoRedirect=function(c){if(c){c.getFocusInfo=c._orig_getFocusInfo;delete c._orig_getFocusInfo;delete c._orig_applyFocusInfo;}return c;};
sap.ui.commons.Toolbar.prototype.insertItem=function(i,a){this.insertAggregation("items",this.prepareFocusInfoRedirect(i),a);i.addDelegate(this.oItemDelegate);};
sap.ui.commons.Toolbar.prototype.addItem=function(i){this.addAggregation("items",this.prepareFocusInfoRedirect(i));i.addDelegate(this.oItemDelegate);};
sap.ui.commons.Toolbar.prototype.removeItem=function(e){var t=this.removeAggregation("items",e);t.removeDelegate(this.oItemDelegate);return this.cleanupFocusInfoRedirect(t);};
sap.ui.commons.Toolbar.prototype.removeAllItems=function(){var t=this.removeAllAggregation("items");for(var i=0,l=t.length;i<l;i++){t[i]=this.cleanupFocusInfoRedirect(t[i]);t[i].removeDelegate(this.oItemDelegate);}return t;};
sap.ui.commons.Toolbar.prototype.getFocusInfo=function(){var i=this.getId();if(this.bOpen){return{id:i,childId:i};}else{return{id:i};}};
sap.ui.commons.Toolbar.prototype.applyFocusInfo=function(f){if(f){var c=f.childId;if(this.bOpen&&c){if(c===this.getId()){return;}var o=sap.ui.getCore().getControl(c);var a;if(o&&this.popup&&(a=this.popup.getContent())&&jQuery.sap.containsOrEquals(a.getDomRef(),o.getDomRef())){a.applyFocusInfo(f.childInfo);return;}}}this.focus();};
sap.ui.commons.ToolbarOverflowPopup=function(t){this.oToolbar=t;var i=t.getId()+"-pu";sap.ui.core.Element.call(this,i);};
sap.ui.commons.ToolbarOverflowPopup.prototype=jQuery.sap.newObject(sap.ui.core.Element.prototype);sap.ui.core.Element.defineClass("sap.ui.commons.ToolbarOverflowPopup",{baseType:"sap.ui.core.Element",publicMethods:[],library:"sap.ui.commons",properties:{},aggregations:{},associations:{},events:{}});
sap.ui.commons.ToolbarOverflowPopup.prototype.initItemNavigation=function(n){if(!this.oItemNavigation){this.oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this.addDelegate(this.oItemNavigation);}this.oItemNavigation.setRootDomRef(sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar));this.oItemNavigation.setItemDomRefs(n);this.oItemNavigation.focusItem(0);};
sap.ui.commons.ToolbarOverflowPopup.prototype.getDomRef=function(){var p=sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar);if(p){return p.parentNode;}else{return null;}};
sap.ui.commons.ToolbarOverflowPopup.prototype.isActive=function(){return sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar)!=null;};
sap.ui.commons.ToolbarOverflowPopup.prototype.onsapescape=function(e){this.oToolbar.closePopup(true);};
sap.ui.commons.ToolbarOverflowPopup.prototype.onsaptabnext=function(e){this.oToolbar.closePopup(true);e.preventDefault();e.stopPropagation();};
sap.ui.commons.ToolbarOverflowPopup.prototype.onsaptabprevious=function(e){this.oToolbar.closePopup(true);e.preventDefault();e.stopPropagation();};
sap.ui.commons.Toolbar.prototype._itemRendered=function(){if(!this.sUpdateItemNavigationTimer){this.sUpdateItemNavigationTimer=jQuery.sap.delayedCall(0,this,"updateAfterResize",[true])}};