/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ToggleButton");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.Button");sap.ui.commons.Button.extend("sap.ui.commons.ToggleButton",{metadata:{library:"sap.ui.commons",properties:{"pressed":{type:"boolean",group:"Data",defaultValue:false}}}});
sap.ui.commons.ToggleButton.prototype.onclick=function(e){if(this.getEnabled()){this.setPressed(!this.getPressed());this.firePress({pressed:this.getPressed()});}e.preventDefault();e.stopPropagation();};
sap.ui.commons.ToggleButton.prototype.setPressed=function(p){if(!p){this.getRenderer().ondeactivePressed(this);}else{this.getRenderer().onactivePressed(this);}this.setProperty("pressed",p,true);return this;};
