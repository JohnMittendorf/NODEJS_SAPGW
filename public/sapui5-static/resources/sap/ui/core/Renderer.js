/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Renderer");sap.ui.core.Renderer={};
sap.ui.core.Renderer.extend=function(p){var c={_super:p};for(var f in p){if(typeof(p[f])=="function"){c[f]=(function(){var m=f,t=c;return function(){return t._super[m].apply(this,arguments);};}());}}return c;};
sap.ui.core.Renderer.getTextAlign=function(t,o){var s="";var c=sap.ui.getCore().getConfiguration();switch(t){case sap.ui.core.TextAlign.End:switch(o){case"LTR":s="right";break;case"RTL":s="left";break;default:if(c.getRTL()){s="left";}else{s="right";}break;}break;case sap.ui.core.TextAlign.Begin:switch(o){case"LTR":s="left";break;case"RTL":s="right";break;default:if(c.getRTL()){s="right";}else{s="left";}break;}break;case sap.ui.core.TextAlign.Right:if(c.getRTL()){if(o=="LTR"){s="right";}}else{s="right";}break;case sap.ui.core.TextAlign.Center:s="center";break;case sap.ui.core.TextAlign.Left:if(c.getRTL()){s="left";}else{if(o=="RTL"){s="left";}}break;}return s;};
