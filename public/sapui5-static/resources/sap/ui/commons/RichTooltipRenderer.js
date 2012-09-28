/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RichTooltipRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.RichTooltipRenderer={};
sap.ui.commons.RichTooltipRenderer.render=function(r,o){var a=r;var t=o.getText();a.write("<div ");a.writeControlData(o);a.write(" class='sapUiRtt'><div><div>");a.write("<div class='sapUiRttTopL'></div><div class='sapUiRttTopR'></div>");a.write("<div class='sapUiRttCL'>");a.write("<div class='sapUiRttCR'>");a.write("<div class='sapUiRttContent'");var i=o.getImageSrc();if(i&&t){a.write(" style=\"min-width:355px \"");}a.write(" >");var s=o.getTitle();if(s){a.write("<div id='"+o.getId()+"-title' role='tooltip' class='sapUiRttTitle'>");a.writeEscaped(s);a.write("</div>");a.write("<div class='sapUiRttSep'></div>");}if(i){a.write("<img class='sapUiRttImage' src='");a.writeEscaped(i);a.write("'/>");}a.write("<div id='"+o.getId()+"-txt' role='tooltip' class='sapUiRttText'>");a.writeEscaped(t,true);var v=sap.ui.core.ValueStateSupport.getAdditionalText(o.getParent());if(v){a.write("<br> <br>");a.writeEscaped(v);}a.write("</div>");a.write("</div></div></div>");a.write("<div class='sapUiRttBotL'></div>");a.write("<div class='sapUiRttBotR'></div>");a.write("</div></div></div>");};
