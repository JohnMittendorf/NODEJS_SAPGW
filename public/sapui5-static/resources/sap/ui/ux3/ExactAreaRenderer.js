/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ExactAreaRenderer");sap.ui.ux3.ExactAreaRenderer={};
sap.ui.ux3.ExactAreaRenderer.render=function(r,c){var a=r;if(!c.getVisible()){return;}a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3ExactArea");a.writeClasses();a.write(">");if(c.getToolbarVisible()){a.write("<div id=\""+c.getId()+"-tb\" class=\"sapUiTb sapUiTbDesignFlat sapUiTbStandalone\" role=\"toolbar\">");a.write("<div class=\"sapUiTbCont\"><div class=\"sapUiTbInner\">");var t=c.getToolbarItems();for(var i=0;i<t.length;i++){var o=t[i];if(o instanceof sap.ui.commons.ToolbarSeparator){sap.ui.commons.ToolbarRenderer.renderSeparator(a,o);}else if(o instanceof sap.ui.ux3.ExactAreaToolbarTitle){a.write("<div class=\"sapUiUx3ExactAreaTbTitle\">"+jQuery.sap.escapeHTML(o.getText())+"</div>");}else{a.renderControl(o);}}a.write("</div></div></div>");}a.write("<div id=\""+c.getId()+"-ct\" class=\"sapUiUx3ExactAreaCont\">");var b=c.getContent();for(var i=0;i<b.length;i++){a.renderControl(b[i]);}a.write("</div>");a.write("</div>");};
