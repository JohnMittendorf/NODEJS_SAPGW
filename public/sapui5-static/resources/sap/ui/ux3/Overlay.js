/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.Overlay");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Overlay",{metadata:{publicMethods:["open","close","isOpen"],library:"sap.ui.ux3",properties:{"openButtonVisible":{type:"boolean",group:"Misc",defaultValue:true},"closeButtonVisible":{type:"boolean",group:"Misc",defaultValue:true}},events:{"close":{allowPreventDefault:true},"openNew":{},"open":{}}}});sap.ui.ux3.Overlay.M_EVENTS={'close':'close','openNew':'openNew','open':'open'};jQuery.sap.require("sap.ui.core.Popup");
sap.ui.ux3.Overlay.prototype.init=function(){var t=this;this._oPopup=new sap.ui.core.Popup(this,false,true);this._oPopup.attachOpened(function(e){var i=sap.ui.getCore().byId(t._initialFocusId);var d=(i)?i.getDomRef():jQuery(t.getDomRef()).firstFocusableDomRef();if(d){jQuery.sap.focus(d);}});this._overridePopupEventing();};
sap.ui.ux3.Overlay.prototype.onAfterRendering=function(){jQuery.sap.byId(this.getId()).css("position","fixed");var s=jQuery(".sapUiUx3Shell").control();if(s.length){s[0].syncWithCanvasSize(this.getDomRef());}else{jQuery.sap.byId(this.getId()).css("bottom","0px").css("top","0px").css("left","0px").css("right","0px");}};
sap.ui.ux3.Overlay.prototype.exit=function(){this.close();this._oPopup.destroy();this._oPopup=null;};
sap.ui.ux3.Overlay.prototype.open=function(i){this._initialFocusId=i;if(this._oPopup.isOpen()){return;}if(i){this._oPopup.setInitialFocusId(i)}this._oPopup.open(400);jQuery.sap.byId(this.getId()).css("position","fixed");var s=jQuery(".sapUiUx3Shell").control();if(s.length){s[0].syncWithCanvasSize(this.getDomRef());}else{jQuery.sap.byId(this.getId()).css("bottom","0px").css("top","0px").css("left","0px").css("right","0px");}this.fireOpen({id:this.getId()});};
sap.ui.ux3.Overlay.prototype.close=function(){if(!this._oPopup.isOpen()){return;}this._oPopup.close(400);var s=jQuery(".sapUiUx3Shell").control();if(s.length){s[0].syncWithCanvasSize(null);}};
sap.ui.ux3.Overlay.prototype.onclick=function(e){this._handleButtonEvent(e);};
sap.ui.ux3.Overlay.prototype.onsapselect=function(e){this._handleButtonEvent(e);};
sap.ui.ux3.Overlay.prototype._handleButtonEvent=function(e){var a=e.target.id;if(a.indexOf("close")!=-1){if(this.fireClose({id:this.getId()})){this.close();}}else if(a.indexOf("open")!=-1){this.fireOpenNew({id:this.getId()});}};
sap.ui.ux3.Overlay.prototype._getText=function(k,a){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");var t=undefined;if(r){t=r.getText(k);}if(t&&a){for(var i=0;i<a.length;i++){t=t.replace("{"+i+"}",a[i]);}}return t?t:k;};
sap.ui.ux3.Overlay.prototype._overridePopupEventing=function(){var t=this;this._oPopup.onmousedown=function(e){return;}};
sap.ui.ux3.Overlay.prototype.isOpen=function(){return this._oPopup.isOpen();};
