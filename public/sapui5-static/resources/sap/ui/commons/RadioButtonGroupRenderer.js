/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RadioButtonGroupRenderer");sap.ui.commons.RadioButtonGroupRenderer={};
sap.ui.commons.RadioButtonGroupRenderer.render=function(r,o){var a=r;if(!o.getVisible()||!o.aRBs){return;}var b=o.getColumns();a.write("<DIV");a.writeControlData(o);a.addClass("sapUiRbG");if(b>1){if(b==o.aRBs.length){a.addClass("sapUiRbG1Row");}else{a.addClass("sapUiRbGTab");}}if(o.getWidth()&&o.getWidth()!=''){a.addStyle("width",o.getWidth());}if(o.getTooltip_AsString()){a.writeAttributeEscaped("title",o.getTooltip_AsString());}if(o.getEditable()){a.writeAttribute('tabindex','0');}else{a.writeAttribute('tabindex','-1');}a.writeAttribute("role","radiogroup");a.writeAccessibilityState(o,{invalid:o.getValueState()==sap.ui.core.ValueState.Error,disabled:!o.getEditable()});a.writeClasses();a.writeStyles();a.write(">");for(var c=0;c<b;c++){if(b>1&&b!=o.aRBs.length){a.write("<DIV");a.addClass("sapUiRbGCol");a.writeClasses();a.write(">");}for(var i=c;i<o.aRBs.length;i=i+b){a.renderControl(o.aRBs[i]);}if(b>1&&b!=o.aRBs.length){a.write("</DIV>");}}if(b>1&&b!=o.aRBs.length){a.write('<DIV class="sapUiRbGDummy"> </DIV>');}a.write("</DIV>");};
