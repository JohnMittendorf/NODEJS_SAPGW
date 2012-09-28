/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.DatePickerRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");(function($){var r=$.datepicker.regional;function d(l,s){r[l]=jQuery.extend(r[l]||{},s);}d('en',{dateFormat:'dd/mm/yy',firstDay:0,showMonthAfterYear:false,yearSuffix:''});d('de',{dateFormat:'dd.mm.yy',firstDay:1,showMonthAfterYear:false,yearSuffix:''});d('fr',{dateFormat:'dd/mm/yy',firstDay:1,showMonthAfterYear:false,yearSuffix:''});d('he',{dateFormat:'dd/mm/yy',firstDay:0,showMonthAfterYear:false,yearSuffix:''});}(jQuery));sap.ui.commons.DatePickerRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.DatePickerRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfCombo");this.renderARIAInfo(r,c);};
sap.ui.commons.DatePickerRenderer.renderOuterContent=function(r,c){var a=r;a.write("<div");a.writeAttribute('id',c.getId()+'-icon');a.addClass("sapUiTfDateIcon");a.writeClasses();a.write("></div>");};
sap.ui.commons.DatePickerRenderer.renderARIAInfo=function(r,c){if(sap.ui.getCore().getConfiguration().getAccessibility()){r.writeAttribute('role','widget');r.writeAttribute('aria-haspopup','true');}};
