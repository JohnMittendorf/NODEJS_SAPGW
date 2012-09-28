/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ToolbarRenderer");sap.ui.commons.ToolbarRenderer={};
sap.ui.commons.ToolbarRenderer.render=function(r,t){var a=r;var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");if(!t.getVisible()){return;}a.write("<div role='toolbar' tabindex='0'");a.writeControlData(t);if(t.getWidth()){a.addStyle("width",t.getWidth());}var s=t.getTooltip_AsString();if(s){a.writeAttributeEscaped("title",s);}a.addClass("sapUiTb");a.addClass("sapUiTbDesign"+t.getDesign());if(t.getStandalone()){a.addClass("sapUiTbStandalone");}a.writeStyles();a.writeClasses();a.write("><div class='sapUiTbCont'><div class='sapUiTbInner'>");var c=t.getItems();var l=c.length;for(var i=0;i<l;i++){var o=c[i];if(o){if(o instanceof sap.ui.commons.ToolbarSeparator){sap.ui.commons.ToolbarRenderer.renderSeparator(a,o);}else{a.renderControl(o);}}}a.write("<div id='");a.write(t.getId());a.write("-mn'");a.write(" class='sapUiTbOB' role='button' title='"+b.getText("TOOLBAR_OVERFLOW")+"'></div></div></div></div>");};
sap.ui.commons.ToolbarRenderer.renderSeparator=function(r,t){if(t.getDisplayVisualSeparator()){r.write("<span ");r.writeElementData(t);r.write(" class='sapUiTbSeparator' role='separator'></span>");}else{r.write("<span ");r.writeElementData(t);r.write(" class='sapUiTbSpacer' role='separator'></span>");}};
sap.ui.commons.ToolbarRenderer.fillOverflowPopup=function(t){var p=jQuery.sap.domById(t.getId()+"-pu");if(!p){p=sap.ui.commons.ToolbarRenderer.initOverflowPopup(t).firstChild;}var v=t.getVisibleItemInfo().count;var o=t.getDomRef().firstChild.firstChild;var i=0;var c=o.firstChild;var s=t.getId()+"-mn";while(c){var n=c.nextSibling;if(i>=v){if(c.id==s){break;}p.appendChild(c);}c=n;i++;}};
sap.ui.commons.ToolbarRenderer.initOverflowPopup=function(t){var s=sap.ui.getCore().getStaticAreaRef();var p=document.createElement("div");p.className="sapUiTbDD sapUiTbDesignFlat";p.innerHTML="<div id='"+t.getId()+"-pu' data-sap-ui="+t.getId()+" tabindex='0'></div>";s.appendChild(p);return p;};
sap.ui.commons.ToolbarRenderer.emptyOverflowPopup=function(t){var p=jQuery.sap.domById(t.getId()+"-pu");var o=jQuery.sap.domById(t.getId()+"-mn");var a=t.getDomRef().firstChild.firstChild;while(p.hasChildNodes()){a.insertBefore(p.firstChild,o);}};
sap.ui.commons.ToolbarRenderer.getPopupArea=function(t){return jQuery.sap.domById(t.getId()+"-pu");};
sap.ui.commons.ToolbarRenderer.setActive=function(t){jQuery.sap.byId(t.getId()+"-mn").addClass("sapUiTbOBAct");};
sap.ui.commons.ToolbarRenderer.unsetActive=function(t){jQuery.sap.byId(t.getId()+"-mn").removeClass("sapUiTbOBAct");};
