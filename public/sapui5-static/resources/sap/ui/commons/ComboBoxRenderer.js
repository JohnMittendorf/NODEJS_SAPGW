/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ComboBoxRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");sap.ui.commons.ComboBoxRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.ComboBoxRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfCombo");this.renderComboARIAInfo(r,c);};
sap.ui.commons.ComboBoxRenderer.renderOuterContent=function(r,c){var a=r;a.write("<div");a.writeAttributeEscaped('id',c.getId()+'-icon');a.writeAttribute('unselectable','on');if(sap.ui.getCore().getConfiguration().getAccessibility()){a.writeAttribute("role","presentation");}a.addClass("sapUiTfComboIcon");a.writeClasses();a.write(">&#9660;</div>");};
sap.ui.commons.ComboBoxRenderer.renderComboARIAInfo=function(r,c){if(sap.ui.getCore().getConfiguration().getAccessibility()){r.writeAttribute("role","combobox");var a={owns:c.getId()+"-input "+c._getListBox().getId()};r.writeAccessibilityState(c,a);}};
sap.ui.commons.ComboBoxRenderer.renderARIAInfo=function(r,c){if(sap.ui.getCore().getConfiguration().getAccessibility()){var a={"autocomplete":"inline","live":"polite"};if(c.getValueState()==sap.ui.core.ValueState.Error){jQuery.extend(a,{invalid:true});}r.writeAccessibilityState(c,a);}};
