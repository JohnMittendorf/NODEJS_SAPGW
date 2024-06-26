/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Button");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Button",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],publicMethods:["focus"],library:"sap.ui.commons",properties:{"text":{type:"string",group:"Appearance",defaultValue:''},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"helpId":{type:"string",group:"Behavior",defaultValue:''},"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:''},"iconFirst":{type:"boolean",group:"Appearance",defaultValue:true},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"styled":{type:"boolean",group:"Appearance",defaultValue:true},"lite":{type:"boolean",group:"Appearance",defaultValue:false},"style":{type:"sap.ui.commons.ButtonStyle",group:"Appearance",defaultValue:sap.ui.commons.ButtonStyle.Default}},events:{"press":{}}}});sap.ui.commons.Button.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Button.prototype,[true]);
sap.ui.commons.Button.prototype.onclick=function(e){if(this.getEnabled()){this.firePress({});}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Button.prototype.onsapenter=function(e){e.stopPropagation();};
sap.ui.commons.Button.prototype.onmousedown=function(e){if(this.getEnabled()&&this.getRenderer().onactive){this.getRenderer().onactive(this);}};
sap.ui.commons.Button.prototype.onmouseup=function(e){if(this.getEnabled()&&this.getRenderer().ondeactive){this.getRenderer().ondeactive(this);}if(jQuery.browser.webkit){this.focus();}};
sap.ui.commons.Button.prototype.onmouseout=function(e){if(this.getEnabled()&&this.getRenderer().onmouseout){this.getRenderer().onmouseout(this);}};
sap.ui.commons.Button.prototype.onfocusout=function(e){if(this.getEnabled()&&this.getRenderer().onblur){this.getRenderer().onblur(this);}};
