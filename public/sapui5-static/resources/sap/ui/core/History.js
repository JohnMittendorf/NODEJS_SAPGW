/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.History");jQuery.sap.require("sap.ui.base.Object");
sap.ui.core.History=function(i,s){sap.ui.base.Object.apply(this);if(!s){s={};}var h=s.prefix?s.prefix:document.location.pathname;this._iMaxHistory=s.max?s.max:100;this._sHistoryId=h+i;var t=this;jQuery.sap.require("jquery.sap.storage");this._oStorage=jQuery.sap.storage(jQuery.sap.storage.Type.local);this._fFilter=s.filter?s.filter:function(a,v){return a&&(!v||(v&&jQuery.sap.startsWithIgnoreCase(a,v)));};this._fCheckHistory=s.checkHistory?s.checkHistory:function(a){return a;};};
sap.ui.core.History.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);sap.ui.base.Object.defineClass("sap.ui.core.History",{baseType:"sap.ui.base.Object",publicMethods:["get","add","clear"]});
sap.ui.core.History.prototype._initHistory=function(){if(!this._aHistory){var h=this._oStorage.get(this._sHistoryId);if(typeof(h)==="string"){h=h.split(",");}else if(!h){h=[];}this._aHistory=this._fCheckHistory(h);}return this._aHistory;};
sap.ui.core.History.prototype.get=function(v){var h=this._initHistory();var r=[];for(var i=0;i<h.length;i++){if(this._fFilter(h[i],v)){r.push(h[i]);}}return r;};
sap.ui.core.History.prototype.remove=function(v){var h=this._initHistory();var r=[];for(var i=0;i<h.length;i++){if(h[i]==v){h.splice(i,1);break;}}};
sap.ui.core.History.prototype.add=function(v){var h=this._initHistory();for(var i=0;i<h.length;i++){if(h[i]===v){h.splice(i,1);break;}}h.unshift(v);if(h.length>this._iMaxHistory){h.splice(this._iMaxHistory);}this._oStorage.put(this._sHistoryId,h);};
sap.ui.core.History.prototype.clear=function(){this._oStorage.remove(this._sHistoryId);this._aHistory=null;};
