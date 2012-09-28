/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ValueStateSupport");(function(){sap.ui.core.ValueStateSupport={};var t=null;var e=function(){if(!t){t={};var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core");t[sap.ui.core.ValueState.Error]=r.getText("VALUE_STATE_ERROR");t[sap.ui.core.ValueState.Warning]=r.getText("VALUE_STATE_WARNING");t[sap.ui.core.ValueState.Success]=r.getText("VALUE_STATE_SUCCESS");}};sap.ui.core.ValueStateSupport.enrichTooltip=function(o,s){if(!s&&o.getTooltip()){return undefined;}if(o.getValueState){var a=o.getValueState();if(a&&(a!=sap.ui.core.ValueState.None)){e();return(s?s+" - ":"")+t[a];}}return s;};sap.ui.core.ValueStateSupport.getAdditionalText=function(o){var r=null;if(o.getValueState){var s=o.getValueState();if(s&&(s!=sap.ui.core.ValueState.None)){e();r=t[s];}}return r;};})();
