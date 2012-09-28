/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetRenderer");sap.ui.ux3.DataSetRenderer={};
sap.ui.ux3.DataSetRenderer.render=function(r,c){var a=r,v=null,s,b;c.prepareRendering();a.write("<div");a.writeControlData(c);a.writeAttribute("class","sapUiUx3DS");a.write(">");a.write("<div id='"+c.getId()+"-toolbar'>");this.renderToolbar(a,c);a.write("</div>");a.write("<div id='"+c.getId()+"-items'>");v=c.getViews()[c.getSelectedView()];a.renderControl(v);a.write("</div>");a.write("</div>");};
sap.ui.ux3.DataSetRenderer.renderToolbar=function(r,c){var a=r,v;if(c.getViews().length>1){v=c.getAggregation("_viewSwitches");for(var i=0;i<v.length;i++){a.renderControl(v[i]);}}if(c.getEnableFiltering()){a.renderControl(c._oFilterString);a.renderControl(c._oFilterButton);}if(c.getEnableSorting()){a.renderControl(c._oSortButton);}};
