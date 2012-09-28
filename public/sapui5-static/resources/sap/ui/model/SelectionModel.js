/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.SelectionModel");jQuery.sap.require("sap.ui.base.EventProvider");
sap.ui.model.SelectionModel=function(s){sap.ui.base.EventProvider.apply(this);this.iSelectionMode=s||sap.ui.model.SelectionModel.SINGLE_SELECTION;this.aSelectedIndices=[];this.iLeadIndex=-1;};
sap.ui.model.SelectionModel.prototype=jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);sap.ui.base.Object.defineClass("sap.ui.model.SelectionModel",{baseType:"sap.ui.base.EventProvider"});sap.ui.model.SelectionModel.M_EVENTS={SelectionChanged:"selectionChanged"};sap.ui.model.SelectionModel.SINGLE_SELECTION=0;sap.ui.model.SelectionModel.MULTI_SELECTION=1;
sap.ui.model.SelectionModel.prototype.getSelectionMode=function(){return this.iSelectionMode;};
sap.ui.model.SelectionModel.prototype.setSelectionMode=function(s){this.iSelectionMode=s||sap.ui.model.SelectionModel.SINGLE_SELECTION;};
sap.ui.model.SelectionModel.prototype.isSelectedIndex=function(i){return jQuery.inArray(i,this.aSelectedIndices)!==-1;};
sap.ui.model.SelectionModel.prototype.getLeadSelectedIndex=function(){return this.iLeadIndex;};
sap.ui.model.SelectionModel.prototype.setLeadSelectedIndex=function(l){this.iLeadIndex=l;this.fireSelectionChanged();};
sap.ui.model.SelectionModel.prototype.getMinSelectionIndex=function(){if(this.aSelectedIndices.length>0){var i=this.aSelectedIndices.sort(function(a,b){return a-b;});return i[0];}else{return-1;}};
sap.ui.model.SelectionModel.prototype.getMaxSelectionIndex=function(){if(this.aSelectedIndices.length>0){var i=this.aSelectedIndices.sort(function(a,b){return b-a;});return i[0];}else{return-1;}};
sap.ui.model.SelectionModel.prototype.getSelectedIndices=function(){var i=this.aSelectedIndices.sort(function(a,b){return a-b;});return i;};
sap.ui.model.SelectionModel.prototype.setSelectionInterval=function(f,t){if(this.iSelectionMode===sap.ui.model.SelectionModel.SINGLE_SELECTION){this.aSelectedIndices=[];this.addSelectionInterval(t,t);}else{this.aSelectedIndices=[];this.addSelectionInterval(f,t);}};
sap.ui.model.SelectionModel.prototype.addSelectionInterval=function(f,t){if(this.iSelectionMode===sap.ui.model.SelectionModel.SINGLE_SELECTION){f=t;}var i=Math.min(f,t);var a=Math.max(f,t);for(var b=i;b<=a;b++){if(jQuery.inArray(b,this.aSelectedIndices)===-1){this.aSelectedIndices.push(b);}}this.iLeadIndex=a;this.fireSelectionChanged();};
sap.ui.model.SelectionModel.prototype.removeSelectionInterval=function(f,t){if(this.iSelectionMode===sap.ui.model.SelectionModel.SINGLE_SELECTION){f=t;}var i=Math.min(f,t);var a=Math.max(f,t);for(var b=i;b<=a;b++){var c=jQuery.inArray(b,this.aSelectedIndices);if(c>-1){this.aSelectedIndices.splice(c,1);}if(b===this.iLeadIndex){this.iLeadIndex=-1;}}this.fireSelectionChanged();};
sap.ui.model.SelectionModel.prototype.clearSelection=function(){this.aSelectedIndices=[];this.iLeadIndex=-1;this.fireSelectionChanged();};
sap.ui.model.SelectionModel.prototype.attachSelectionChanged=function(d,f,l){this.attachEvent("selectionChanged",d,f,l);return this;};
sap.ui.model.SelectionModel.prototype.detachSelectionChanged=function(f,l){this.detachEvent("selectionChanged",f,l);return this;};
sap.ui.model.SelectionModel.prototype.fireSelectionChanged=function(a){this.fireEvent("selectionChanged",a);return this;};
