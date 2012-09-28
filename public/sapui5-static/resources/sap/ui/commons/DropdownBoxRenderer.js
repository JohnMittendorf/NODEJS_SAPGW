/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.DropdownBoxRenderer");jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");sap.ui.commons.DropdownBoxRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);
sap.ui.commons.DropdownBoxRenderer.renderComboARIAInfo=function(r,d){};
sap.ui.commons.DropdownBoxRenderer.renderARIAInfo=function(r,d){if(sap.ui.getCore().getConfiguration().getAccessibility()){r.writeAttribute("role","combobox");var a={owns:d._getListBox().getId(),autocomplete:"list",live:"polite",describedby:d.getId()};if(d.getValueState()==sap.ui.core.ValueState.Error){jQuery.extend(a,{invalid:true});}r.writeAccessibilityState(d,a);}};
