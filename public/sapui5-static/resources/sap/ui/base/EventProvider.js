/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.base.EventProvider");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("sap.ui.base.Event");jQuery.sap.require("sap.ui.base.ObjectPool");sap.ui.base.Object.extend("sap.ui.base.EventProvider",{constructor:function(){sap.ui.base.Object.apply(this);this.mEventRegistry={};}});sap.ui.base.EventProvider.M_EVENTS={EventHandlerChange:"EventHandlerChange"};sap.ui.base.EventProvider.prototype.oEventPool=new sap.ui.base.ObjectPool(sap.ui.base.Event);
sap.ui.base.EventProvider.prototype.attachEvent=function(e,d,f,l){if(typeof(d)==="function"){l=f;f=d;d=undefined;}if(!this.mEventRegistry[e]){this.mEventRegistry[e]=[];}this.mEventRegistry[e].push({oListener:l,fFunction:f,oData:d});this.fireEvent(sap.ui.base.EventProvider.M_EVENTS.EventHandlerChange,{EventId:e,type:'listenerAttached'});return this;};
sap.ui.base.EventProvider.prototype.detachEvent=function(e,f,l){var a=this.mEventRegistry[e];if(!a){return this;}for(var i=0,b=a.length;i<b;i++){if(a[i].fFunction===f&&a[i].oListener===l){a.splice(i,1);break;}}if(a.length==0){delete this.mEventRegistry[e];}this.fireEvent(sap.ui.base.EventProvider.M_EVENTS.EventHandlerChange,{EventId:e,type:'listenerDetached'});return this;};
sap.ui.base.EventProvider.prototype.fireEvent=function(e,p,a,b){if(typeof p=="boolean"){b=a;a=p;}var c=this.mEventRegistry[e],d=false,o,f,g;if(c&&jQuery.isArray(c)){c=c.slice();o=this.oEventPool.borrowObject(e,this,p);for(var i=0,l=c.length;i<l;i++){g=c[i];g.fFunction.call(g.oListener||this,o,g.oData);}if(b){f=this.getEventingParent();while(f&&!o.bCancelBubble){c=f.mEventRegistry[e];if(c&&c instanceof Array){c=c.slice();for(var i=0,l=c.length;i<l;i++){g=c[i];g.fFunction.call(g.oListener||f,o,g.oData);}}f=f.getEventingParent();}}d=o.bPreventDefault;this.oEventPool.returnObject(o);}if(a){return!d;}else{return this;}};
sap.ui.base.EventProvider.prototype.hasListeners=function(e){return!!this.mEventRegistry[e];};
sap.ui.base.EventProvider.getEventList=function(e){return e.mEventRegistry;};
sap.ui.base.EventProvider.prototype.getEventingParent=function(){return null;};
sap.ui.base.EventProvider.prototype.toString=function(){if(this.getMetadata){return"EventProvider "+this.getMetadata().getName();}else{return"EventProvider";}};
