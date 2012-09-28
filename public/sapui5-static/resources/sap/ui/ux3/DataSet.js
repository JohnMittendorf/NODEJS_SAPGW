/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSet");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.DataSet",{metadata:{publicMethods:["setLeadSelection","getLeadSelection"],library:"sap.ui.ux3",properties:{"selectedView":{type:"int",group:"Misc",defaultValue:0},"filterValue":{type:"string",group:"Misc",defaultValue:null},"enableSorting":{type:"boolean",group:"Misc",defaultValue:true},"enableFiltering":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"items":{type:"sap.ui.ux3.DataSetItem",multiple:true,singularName:"item",bindable:"bindable"},"views":{type:"sap.ui.ux3.DataSetView",multiple:true,singularName:"view"}},events:{"selectionChanged":{},"filter":{},"sort":{}}}});sap.ui.ux3.DataSet.M_EVENTS={'selectionChanged':'selectionChanged','filter':'filter','sort':'sort'};sap.ui.ux3.DataSet.getMetadata()._mHiddenAggregations={"_viewSwitches":{multiple:true,type:"sap.ui.core.Control"}};
sap.ui.ux3.DataSet.prototype.init=function(){jQuery.sap.require("sap.ui.model.SelectionModel");this.selectionModel=new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION);this.prepareToolbar();};
sap.ui.ux3.DataSet.prototype.exit=function(){this._oFilterButton.destroy();this._oFilterString.destroy();this._oSortButton.destroy();};
sap.ui.ux3.DataSet.prototype.prepareToolbar=function(){var t=this;this._oFilterButton=new sap.ui.commons.Button({id:this.getId()+"-filter",text:"filter"});this._oSortButton=new sap.ui.commons.Button({id:this.getId()+"-sort",text:"sort"});this._oFilterButton.attachPress(this.filter,this);this._oSortButton.attachPress(this.sort,this);this._oFilterString=new sap.ui.commons.TextField({id:this.getId()+"-filterValue"});this._oFilterString.attachChange(function(e){t.setFilterValue(e.getParameters().newValue);});};
sap.ui.ux3.DataSet.prototype.press=function(e,s){var b=e.oSource,v=b._viewIndex;this._oldRendering=this.getViews()[this.getSelectedView()];this._oldRendering.exitView();this.setSelectedView(v);};
sap.ui.ux3.DataSet.prototype.filter=function(){this.fireFilter({filterValue:this.getFilterValue()});};
sap.ui.ux3.DataSet.prototype.sort=function(){this.fireSort();};
sap.ui.ux3.DataSet.prototype.selectItem=function(e){var i=e.getParameters().itemId;var o=sap.ui.getCore().byId(i);var a=this.selectionModel.getLeadSelectedIndex();if(a==o._index){this.selectionModel.setLeadSelectedIndex(-1);}else{this.selectionModel.setLeadSelectedIndex(o._index);}var n=this.selectionModel.getLeadSelectedIndex();this.fireSelectionChanged({oldLeadSelectedIndex:a,newLeadSelectedIndex:n});};
sap.ui.ux3.DataSet.prototype.prepareRendering=function(){if(this.getViews().length==0){return;}if(this.getViews()[this.getSelectedView()].exitView){this.getViews()[this.getSelectedView()].exitView();}if(this.getViews()[this.getSelectedView()].initView){this.getViews()[this.getSelectedView()].initView(this.getItems());}};
sap.ui.ux3.DataSet.prototype.getLeadSelection=function(){return this.selectionModel.getLeadSelectedIndex();};
sap.ui.ux3.DataSet.prototype.setLeadSelection=function(i){this.selectionModel.setLeadSelectedIndex(i);};
sap.ui.ux3.DataSet.prototype.isSelectedIndex=function(i){return(this.selectionModel.getLeadSelectedIndex()==i);};
sap.ui.ux3.DataSet.prototype.getSelectedItemId=function(i){return this.getItems()[i].getId();};
sap.ui.ux3.DataSet.prototype.createViewSwitch=function(v,i){var t=this,o;if(v.getIcon()){o=new sap.ui.commons.Image({id:this.getId()+"-view"+v.getId(),src:v.getIcon()});}else if(v.getName()){o=new sap.ui.commons.Button({id:this.getId()+"-view"+v.getId(),text:v.getName()});}else{o=new sap.ui.commons.Button({id:this.getId()+"-view"+v.getId(),text:v.getId()});}o._viewIndex=i;o.attachPress(function(e){t.press(e,i);},t);return o;};
sap.ui.ux3.DataSet.prototype._rerenderToolbar=function(){var $=jQuery.sap.byId(this.getId()+"-toolbar");if($.length>0){var r=sap.ui.getCore().createRenderManager();sap.ui.ux3.DataSetRenderer.renderToolbar(r,this);r.flush($[0]);r.destroy();}};
sap.ui.ux3.DataSet.prototype.removeItem=function(i){var r=this.removeAggregation("items",i);i.detachSelected(this.selectItem,this);return r;};
sap.ui.ux3.DataSet.prototype.addItem=function(i){this.addAggregation("items",i);i.attachSelected(this.selectItem,this);i._index=this.getItems().length-1;return this;};
sap.ui.ux3.DataSet.prototype.insertItem=function(i,a){this.insertAggregation("items",i,a);i.attachSelected(this.selectItem,this);i._index=a;return this;};
sap.ui.ux3.DataSet.prototype.setFilterValue=function(f){this.setProperty("filterValue",f,true);return this;};
sap.ui.ux3.DataSet.prototype.getFilterValue=function(){return this.getProperty("filterValue");};
sap.ui.ux3.DataSet.prototype.insertView=function(v,i){var o=this.createViewSwitch(v,i);this.insertAggregation("views",v,i);this.insertAggregation("_viewSwitches",o,i,true);return this;};
sap.ui.ux3.DataSet.prototype.addView=function(v){var i=this.getViews().length,o=this.createViewSwitch(v,i);this.addAggregation("views",v);this.addAggregation("_viewSwitches",o,true);return this;};
sap.ui.ux3.DataSet.prototype.removeView=function(v){var o;if(typeof(v)=="string"){o=this.getId()+"-view"+v;this.removeAggregation("_viewSwitches",o,true).destroy();}else if(typeof(v)=="object"){o=this.getId()+"-view"+v.getId();this.removeAggregation("_viewSwitches",o,true).destroy();}else if(typeof(v)=="number"){this.removeAggregation("_viewSwitches",v,true).destroy();}return this.removeAggregation("views",v);};
sap.ui.ux3.DataSet.prototype.destroyViews=function(){this.destroyAggregation("_viewSwitches");this.destroyAggregation("views");return this;};
sap.ui.ux3.DataSet.prototype.removeAllViews=function(){this.removeAllAggregation("_viewSwitches");return this.removeAllAggregation("views");};
sap.ui.ux3.DataSet.prototype.setEnableSorting=function(e){this.setProperty("enableSorting",e,true);this._rerenderToolbar();return this;};
sap.ui.ux3.DataSet.prototype.setEnableFiltering=function(e){this.setProperty("enableFiltering",e,true);this._rerenderToolbar();return this;};
