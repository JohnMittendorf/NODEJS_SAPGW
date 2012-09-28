/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MessageRenderer");sap.ui.commons.MessageRenderer={};
sap.ui.commons.MessageRenderer.render=function(r,c){var a=r;a.write('<div class="sapUiMsg" tabindex="0">');a.write('<div class="sapUiMsgIcon sapUiMsgIcon'+c.getType()+'"></div>');if(typeof c.fnCallBack==="function"){a.write('<span class="sapUiMsgLnk">');if(!c.oLink){c.oLink=new sap.ui.commons.Link();var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");c.oLink.setText(b.getText("MSGLIST_DETAILS"));c.oLink.attachPress(function(){c.openDetails();});}a.renderControl(c.oLink);a.write(' - </span>');}a.write('<span class="sapUiMsgTxt">'+c.getText()+'</span>');a.write('</div>');};