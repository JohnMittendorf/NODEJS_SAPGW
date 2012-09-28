/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 *
 * (c) Copyright 2009-2011 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ToggleButtonRenderer");jQuery.sap.require("sap.ui.commons.ButtonRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.commons.ToggleButtonRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.ButtonRenderer);
sap.ui.commons.ToggleButtonRenderer.renderButtonAttributes=function(r,t){r.addClass("sapUiToggleBtn");if(t.getPressed()){r.addClass("sapUiToggleBtnPressed");r.writeAttribute('aria-pressed',true);}else{r.writeAttribute('aria-pressed',false);}};
sap.ui.commons.ToggleButtonRenderer.onactivePressed=function(t){jQuery.sap.byId(t.getId()).addClass("sapUiToggleBtnPressed").attr('aria-pressed',true);};
sap.ui.commons.ToggleButtonRenderer.ondeactivePressed=function(t){jQuery.sap.byId(t.getId()).removeClass("sapUiToggleBtnPressed").attr('aria-pressed',false);};
