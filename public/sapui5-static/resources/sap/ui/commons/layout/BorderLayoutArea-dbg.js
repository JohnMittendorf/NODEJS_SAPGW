/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.BorderLayoutArea.
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutArea");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new layout/BorderLayoutArea.
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
 * <li>{@link #getAreaId areaId} : sap.ui.commons.layout.BorderLayoutAreaTypes (default: sap.ui.commons.layout.BorderLayoutAreaTypes.top)</li>
 * <li>{@link #getOverflowX overflowX} : string (default: 'auto')</li>
 * <li>{@link #getOverflowY overflowY} : string (default: 'auto')</li>
 * <li>{@link #getContentAlign contentAlign} : string (default: 'left')</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize (default: '100px')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The BorderLayoutArea represents one area of a BorderLayout
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea
 */
sap.ui.core.Element.extend("sap.ui.commons.layout.BorderLayoutArea", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setVisible"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"areaId" : {type : "sap.ui.commons.layout.BorderLayoutAreaTypes", group : "Identification", defaultValue : sap.ui.commons.layout.BorderLayoutAreaTypes.top},
		"overflowX" : {type : "string", group : "Misc", defaultValue : 'auto'},
		"overflowY" : {type : "string", group : "Misc", defaultValue : 'auto'},
		"contentAlign" : {type : "string", group : "Misc", defaultValue : 'left'},
		"size" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100px'},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.BorderLayoutArea with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.BorderLayoutArea.extend
 * @function
 */


/**
 * Getter for property <code>areaId</code>.
 * Defines which area the element represents: top, begin, center, end, bottom
 *
 * Default value is <code>top</code>
 *
 * @return {sap.ui.commons.layout.BorderLayoutAreaTypes} the value of property <code>areaId</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getAreaId
 * @function
 */


/**
 * Setter for property <code>areaId</code>.
 *
 * Default value is <code>top</code> 
 *
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId  new value for property <code>areaId</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setAreaId
 * @function
 */

/**
 * Getter for property <code>overflowX</code>.
 * The overflow mode of the area in horizontal direction as CSS value
 *
 * Default value is <code>auto</code>
 *
 * @return {string} the value of property <code>overflowX</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getOverflowX
 * @function
 */


/**
 * Setter for property <code>overflowX</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {string} sOverflowX  new value for property <code>overflowX</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setOverflowX
 * @function
 */

/**
 * Getter for property <code>overflowY</code>.
 * The overflow mode of the area in vertical direction as CSS value
 *
 * Default value is <code>auto</code>
 *
 * @return {string} the value of property <code>overflowY</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getOverflowY
 * @function
 */


/**
 * Setter for property <code>overflowY</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {string} sOverflowY  new value for property <code>overflowY</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setOverflowY
 * @function
 */

/**
 * Getter for property <code>contentAlign</code>.
 * The content alignment as CSS value
 *
 * Default value is <code>left</code>
 *
 * @return {string} the value of property <code>contentAlign</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getContentAlign
 * @function
 */


/**
 * Setter for property <code>contentAlign</code>.
 *
 * Default value is <code>left</code> 
 *
 * @param {string} sContentAlign  new value for property <code>contentAlign</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setContentAlign
 * @function
 */

/**
 * Getter for property <code>size</code>.
 * Defines the height or the width. Is not used when the area element is in Center.
 *
 * Default value is <code>100px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getSize
 * @function
 */


/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>100px</code> 
 *
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setSize
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#setVisible
 * @function
 */
	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls within the area
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#getContent
 * @function
 */

/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#insertContent
 * @function
 */


/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.commons.layout.BorderLayoutArea#addContent
 * @function
 */


/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#removeContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#removeAllContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#indexOfContent
 * @function
 */


/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.BorderLayoutArea#destroyContent
 * @function
 */

/**
 * An optional setter for property 'visible'; as a result, an animation is displayed that appears and disappears.
 *
 * @name sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible
 * @function
 * @param {boolean} 
 *         bVisible
 *         The new value for the 'visible' property
 * @param {sap.ui.core.Control} 
 *         oBorderLayout
 *         OPTIONAL. When the corresponding BorderLayout control of the area is submitted a slide animation will be shown

 * @type void
 * @public
 */


// Start of sap/ui/commons/layout/BorderLayoutArea.js
sap.ui.commons.layout.BorderLayoutArea.prototype.init = function(){
   // do something for initialization...
	// set default values depending on areaId
	switch(this.getAreaId())
	{
		case "center":	this.setSize("");
						break;
	}
};

sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible = function(bVisible) {
	// FIXME derived IDs should be created with a "-" as separator, case conversion not necessary?
	var sAreaId = this.getAreaId();
	var oBorderLayout = arguments[1];

	//if the current area is the center or if no BorderLayout is submitted no animation will be shown
	if(sAreaId=="center" || !oBorderLayout){
		this.setProperty("visible", bVisible);
		return this;
	}
	this.setProperty("visible", bVisible, true);


	if(oBorderLayout){
		var oBorderLayoutId = oBorderLayout.getId();
		var bRtl = oBorderLayout.getRtl();
		var jTop;
		var jBegin;
		var jCenter;
		var jEnd;
		var jBottom;
		var end = "0";
		if (bVisible) {
			end = this.getSize();
		}

		switch(sAreaId)
		{
			case "top":		jTop = jQuery.sap.byId(oBorderLayoutId+"top".toUpperCase());
							jBegin = jQuery.sap.byId(oBorderLayoutId+"begin".toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());
							jEnd = jQuery.sap.byId(oBorderLayoutId+"end".toUpperCase());

							jTop.animate({height: end});
							jBegin.animate({top: end});
							jCenter.animate({top: end});
							jEnd.animate({top: end});
							break;
			case "begin":	jBegin = jQuery.sap.byId(oBorderLayoutId+sAreaId.toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());

							jBegin.animate({width: end});
							if(bRtl){
								jCenter.animate({right: end});
							}else{
								jCenter.animate({left: end});
							}
							break;
			case "end":		jEnd = jQuery.sap.byId(oBorderLayoutId+sAreaId.toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());

							jEnd.animate({width: end});
							if(!bRtl){
								jCenter.animate({right: end});
							}else{
								jCenter.animate({left: end});
							}
							break;
			case "bottom":	jBottom = jQuery.sap.byId(oBorderLayoutId+"bottom".toUpperCase());
							jBegin = jQuery.sap.byId(oBorderLayoutId+"begin".toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());
							jEnd = jQuery.sap.byId(oBorderLayoutId+"end".toUpperCase());

							jBottom.animate({height: end});
							jBegin.animate({bottom: end});
							jCenter.animate({bottom: end});
							jEnd.animate({bottom: end});
							break;
		}
	}

	return this;
};