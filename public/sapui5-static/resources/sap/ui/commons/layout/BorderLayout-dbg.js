/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.BorderLayout.
jQuery.sap.declare("sap.ui.commons.layout.BorderLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new layout/BorderLayout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getRtl rtl} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTop top} : sap.ui.core.Element</li>
 * <li>{@link #getBegin begin} : sap.ui.core.Element</li>
 * <li>{@link #getCenter center} : sap.ui.core.Element</li>
 * <li>{@link #getEnd end} : sap.ui.core.Element</li>
 * <li>{@link #getBottom bottom} : sap.ui.core.Element</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Based upon the border layout as it comes with the Java standard. Using this layout, you are able to divide your available UI space
 * into five areas whose sizes can be defined. These areas are: Top: Header; Bottom: Footer; Begin: Left/right-hand side panel; Center: Content area
 * in the middle; End: Right/left-hand side panel.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.BorderLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.layout.BorderLayout", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"createArea", "setAreaData", "addContent", "insertContent", "removeContent", "removeAllContent", "getContent", "indexOfContent", "destroyContent", "getAreaData", "getAreaById"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"rtl" : {type : "boolean", group : "Appearance", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	},
	aggregations : {
    	"top" : {type : "sap.ui.core.Element", multiple : false}, 
    	"begin" : {type : "sap.ui.core.Element", multiple : false}, 
    	"center" : {type : "sap.ui.core.Element", multiple : false}, 
    	"end" : {type : "sap.ui.core.Element", multiple : false}, 
    	"bottom" : {type : "sap.ui.core.Element", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.BorderLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.layout.BorderLayout.extend
 * @function
 */


/**
 * Getter for property <code>rtl</code>.
 * 
 * The RTL setting rotates the areas Begin and End.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>rtl</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getRtl
 * @function
 */


/**
 * Setter for property <code>rtl</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRtl  new value for property <code>rtl</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setRtl
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * Defines the overall width of the layout
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setWidth
 * @function
 */

/**
 * Getter for property <code>height</code>.
 * Defines the overall height of the layout
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getHeight
 * @function
 */


/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setHeight
 * @function
 */
	
/**
 * Getter for aggregation <code>top</code>.<br/>
 * Represents the Top area
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getTop
 * @function
 */

/**
 * Setter for the aggregated <code>top</code>.
 * @param oTop {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setTop
 * @function
 */


/**
 * Destroys the top in the aggregation 
 * named <code>top</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#destroyTop
 * @function
 */
	
/**
 * Getter for aggregation <code>begin</code>.<br/>
 * Represents the Begin area
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getBegin
 * @function
 */

/**
 * Setter for the aggregated <code>begin</code>.
 * @param oBegin {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setBegin
 * @function
 */


/**
 * Destroys the begin in the aggregation 
 * named <code>begin</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#destroyBegin
 * @function
 */
	
/**
 * Getter for aggregation <code>center</code>.<br/>
 * Represents the Center area
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getCenter
 * @function
 */

/**
 * Setter for the aggregated <code>center</code>.
 * @param oCenter {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setCenter
 * @function
 */


/**
 * Destroys the center in the aggregation 
 * named <code>center</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#destroyCenter
 * @function
 */
	
/**
 * Getter for aggregation <code>end</code>.<br/>
 * Represents the End area
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getEnd
 * @function
 */

/**
 * Setter for the aggregated <code>end</code>.
 * @param oEnd {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setEnd
 * @function
 */


/**
 * Destroys the end in the aggregation 
 * named <code>end</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#destroyEnd
 * @function
 */
	
/**
 * Getter for aggregation <code>bottom</code>.<br/>
 * Represents the Bottom area
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.commons.layout.BorderLayout#getBottom
 * @function
 */

/**
 * Setter for the aggregated <code>bottom</code>.
 * @param oBottom {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#setBottom
 * @function
 */


/**
 * Destroys the bottom in the aggregation 
 * named <code>bottom</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayout#destroyBottom
 * @function
 */

/**
 * Creates the specified area and adds the given controls to it. Returns the created area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.createArea
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies which area will be created. If the area is already available, the method call is ignored.
 * @param {sap.ui.core.Control} 
 *         oControls
 *         Any number of controls can be submitted to be added to the newly created area; where each control is submitted as one argument.

 * @type sap.ui.core.Element
 * @public
 */


/**
 * Sets the properties of the specified area with the given values
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.setAreaData
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose properties will be set
 * @param {object} 
 *         sData
 *         JSON-like object that contains the values to be set

 * @type void
 * @public
 */


/**
 * Adds controls to the specified area
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.addContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area where controls will be added
 * @param {sap.ui.core.Control} 
 *         oControls
 *         N controls can be submitted to be added. Each control is submitted as one argument.

 * @type void
 * @public
 */


/**
 * Inserts controls to an area at a given index.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.insertContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area where the controls shall be inserted.
 * @param {int} 
 *         iIndex
 *         Specifies the index where the controls shall be added. For a negative value of iIndex, the content is inserted at
 * position '0'; for a value greater than the current size of the aggregation, the content is inserted at the last position.
 * @param {sap.ui.core.Control} 
 *         oControl
 *         N controls can be submitted to be added. Each control is submitted as one argument.

 * @type void
 * @public
 */


/**
 * Removes the content with the given index from an area
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.removeContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content shall be removed
 * @param {int} 
 *         iIndex
 *         Specifies the index of the control that shall be removed

 * @type void
 * @public
 */


/**
 * Removes all content from an area
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.removeAllContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content shall be removed

 * @type void
 * @public
 */


/**
 * Returns all controls inside the specified area inside an array
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content controls shall be returned.

 * @type object
 * @public
 */


/**
 * Determines the index of a given content control
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.indexOfContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area that will be searched
 * @param {sap.ui.core.Control} 
 *         oContent
 *         Specifies the control whose index will be searched

 * @type int
 * @public
 */


/**
 * Destroys the content of the specified area
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.destroyContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content will be destroyed

 * @type void
 * @public
 */


/**
 * Returns a JSON-like object that contains all property values of the requested area
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getAreaData
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose data will be returned

 * @type object
 * @public
 */


/**
 * Returns the object of the specified area. If the area does not exist, the area will be created and returned.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getAreaById
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose object will be returned.

 * @type sap.ui.core.Element
 * @public
 */


// Start of sap/ui/commons/layout/BorderLayout.js
/**
 * This file defines behavior for the control,
 */
sap.ui.commons.layout.BorderLayout.prototype.init = function(){
   // do something for initialization...

};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.createArea = function()
{
	// FIXME getAreaById() down below assumes that this method returns the created area, but it doesn't
	var top = sap.ui.commons.layout.BorderLayoutAreaTypes.top;
	var begin = sap.ui.commons.layout.BorderLayoutAreaTypes.begin;
	var center = sap.ui.commons.layout.BorderLayoutAreaTypes.center;
	var end = sap.ui.commons.layout.BorderLayoutAreaTypes.end;
	var bottom = sap.ui.commons.layout.BorderLayoutAreaTypes.bottom;

	if(arguments[0] != top && arguments[0] != begin && arguments[0] != center && arguments[0] != end && arguments[0] != bottom ){
		return;
	}


	/*if(arguments[0] != "top" && arguments[0] != "begin" && arguments[0] != "center" && arguments[0] != "end" && arguments[0] != "bottom" ){
		return;
	}*/

	var oArea = new sap.ui.commons.layout.BorderLayoutArea(this.getId()+arguments[0]);
	oArea.setAreaId(arguments[0]);

//if the expected area has already been created, nothing is done
	switch(arguments[0])
	{
	case top:		if(this.getTop()){
						return
					}
					this.setTop(oArea);
					break;
	case begin:	if(this.getBegin()){
						return;
					}
					this.setBegin(oArea);
					break;
	case center:	if(this.getCenter()){
						return;
					}
					this.setCenter(oArea);
					break;
	case end:		if(this.getEnd()){
						return;
					}
					this.setEnd(oArea);
					break;
	case bottom:	if(this.getBottom()){
						return;
					}
					this.setBottom(oArea);
					break;
	}



	for( var i = 1 ; i < arguments.length ; i++){
		var oContent = arguments[i];
		oArea.addContent(oContent);
	}

	return oArea;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.setAreaData = function(sAreaId, oData)
{
	var oArea = this.getAreaById(sAreaId);

	if(!oArea){
		return this;
	}

	if(oArea){
		if(oData.size != null)
		{
			oArea.setSize(oData.size);
		}
		if(oData.visible != null)
		{
			oArea.setVisible(oData.visible);
		}
		if(oData.overflowX != null)
		{
			oArea.setOverflowX(oData.overflowX);
		}
		if(oData.overflowY != null)
		{
			oArea.setOverflowY(oData.overflowY);
		}
		if(oData.contentAlign != null)
		{
			oArea.setContentAlign(oData.contentAlign);
		}
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.addContent = function()
{
	//arguments[0] -> areaID
	//arguments[>0] -> controls
	var oArea = this.getAreaById(arguments[0]);

	/*if(!oArea){
		this.createArea(arguments[0]);
		oArea = this.getAreaById(arguments[0]);
	}*/

	for(var i=1;i<=arguments.length-1;i++){
		oArea.addContent(arguments[i]);
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.insertContent = function()//obsolete
{
	//arguments[0] -> areaID
	//arguments[1] -> index
	//arguments[>1] -> controls
	var oArea = this.getAreaById(arguments[0]);
	var indexCnt = arguments[1];

	for(var i=2;i<=arguments.length-1;i++){
		oArea.insertContent(arguments[i], indexCnt);
		indexCnt++;
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.removeContent = function(sAreaId, vElement)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.removeContent(vElement);
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.removeAllContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.removeAllContent();
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);

	return oArea.getContent();
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.indexOfContent = function(sAreaId, oContent)
{
	var oArea = this.getAreaById(sAreaId);
	return oArea.indexOfContent(oContent);
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.destroyContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.destroyContent();
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getAreaData = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);

	if(!oArea){
		return;
	}

	var oData = {};
	oData.size			= oArea.getSize();
	oData.visible		= oArea.getVisible();
	oData.overflowX		= oArea.getOverflowX();
	oData.overflowY		= oArea.getOverflowY();
	oData.contentAlign	= oArea.getContentAlign();
	return oData;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getAreaById = function(sAreaId)
{
	var oArea;

	switch(sAreaId)
	{
	case sap.ui.commons.layout.BorderLayoutAreaTypes.top	:	oArea = this.getTop();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.begin	:	oArea = this.getBegin();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.center	:	oArea = this.getCenter();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.end	:	oArea = this.getEnd();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.bottom	:	oArea = this.getBottom();
																break;
	}

	if(!oArea){
		oArea = this.createArea(arguments[0]);
	}

	return oArea;
};
// -------------------------------------------------------------------------------------------------------------