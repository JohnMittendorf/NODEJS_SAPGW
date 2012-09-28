/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingInspector.
jQuery.sap.declare("sap.ui.ux3.ThingInspector");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");

/**
 * Constructor for a new ThingInspector.
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
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingInspector#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Thing Inspector
 * @extends sap.ui.ux3.Overlay
 *
 * @author  
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ThingInspector
 */
sap.ui.ux3.Overlay.extend("sap.ui.ux3.ThingInspector", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"firstTitle" : {type : "string", group : "Misc", defaultValue : null},
		"type" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"secondTitle" : {type : "string", group : "Misc", defaultValue : null},
		"followState" : {type : "sap.ui.ux3.FollowActionState", group : "Misc", defaultValue : sap.ui.ux3.FollowActionState.Default},
		"flagState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"updateActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"followActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"flagActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"actions" : {type : "sap.ui.ux3.ThingAction", multiple : true, singularName : "action"}, 
    	"headerContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "headerContent"}, 
    	"facets" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "facet"}, 
    	"facetContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "facetContent"}
	},
	associations : {
		"selectedFacet" : {type : "sap.ui.ux3.NavigationItem", multiple : false}
	},
	events : {
		"actionSelected" : {}, 
		"facetSelected" : {allowPreventDefault : true}, 
		"feedSubmit" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ThingInspector with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ThingInspector.extend
 * @function
 */

sap.ui.ux3.ThingInspector.M_EVENTS = {'actionSelected':'actionSelected','facetSelected':'facetSelected','feedSubmit':'feedSubmit'};


/**
 * Getter for property <code>firstTitle</code>.
 * First Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFirstTitle
 * @function
 */


/**
 * Setter for property <code>firstTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFirstTitle
 * @function
 */

/**
 * Getter for property <code>type</code>.
 * Thing type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getType
 * @function
 */


/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setType
 * @function
 */

/**
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getIcon
 * @function
 */


/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setIcon
 * @function
 */

/**
 * Getter for property <code>secondTitle</code>.
 * Second Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getSecondTitle
 * @function
 */


/**
 * Setter for property <code>secondTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setSecondTitle
 * @function
 */

/**
 * Getter for property <code>followState</code>.
 * Follow State of a Thing
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFollowState
 * @function
 */


/**
 * Setter for property <code>followState</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFollowState
 * @function
 */

/**
 * Getter for property <code>flagState</code>.
 * State of Flag Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFlagState
 * @function
 */


/**
 * Setter for property <code>flagState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFlagState
 * @function
 */

/**
 * Getter for property <code>favoriteState</code>.
 * State Of favorite Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFavoriteState
 * @function
 */


/**
 * Setter for property <code>favoriteState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFavoriteState
 * @function
 */

/**
 * Getter for property <code>favoriteActionEnabled</code>.
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>favoriteActionEnabled</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFavoriteActionEnabled
 * @function
 */


/**
 * Setter for property <code>favoriteActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFavoriteActionEnabled
 * @function
 */

/**
 * Getter for property <code>updateActionEnabled</code>.
 * Update action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>updateActionEnabled</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getUpdateActionEnabled
 * @function
 */


/**
 * Setter for property <code>updateActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setUpdateActionEnabled
 * @function
 */

/**
 * Getter for property <code>followActionEnabled</code>.
 * Follow action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>followActionEnabled</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFollowActionEnabled
 * @function
 */


/**
 * Setter for property <code>followActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFollowActionEnabled
 * @function
 */

/**
 * Getter for property <code>flagActionEnabled</code>.
 * Flag action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>flagActionEnabled</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFlagActionEnabled
 * @function
 */


/**
 * Setter for property <code>flagActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFlagActionEnabled
 * @function
 */
	
/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * 
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getActions
 * @function
 */

/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertAction
 * @function
 */


/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ThingInspector#addAction
 * @function
 */


/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAction
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllActions
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfAction
 * @function
 */


/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyActions
 * @function
 */
	
/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getHeaderContent
 * @function
 */

/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertHeaderContent
 * @function
 */


/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ThingInspector#addHeaderContent
 * @function
 */


/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeHeaderContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllHeaderContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfHeaderContent
 * @function
 */


/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyHeaderContent
 * @function
 */
	
/**
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getFacets
 * @function
 */

/**
 * Inserts a facet into the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertFacet
 * @function
 */


/**
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ThingInspector#addFacet
 * @function
 */


/**
 * Removes an facet from the aggregation named <code>facets</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeFacet
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllFacets
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfFacet
 * @function
 */


/**
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyFacets
 * @function
 */
	
/**
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getFacetContent
 * @function
 */

/**
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertFacetContent
 * @function
 */


/**
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ThingInspector#addFacetContent
 * @function
 */


/**
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeFacetContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllFacetContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfFacetContent
 * @function
 */


/**
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyFacetContent
 * @function
 */

/**
 * The Facet that is currently selected.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 * @name sap.ui.ux3.ThingInspector#getSelectedFacet
 * @function
 */


/**
 * The Facet that is currently selected.
 * 
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setSelectedFacet
 * @function
 */

/**
 * Further thing related Action selected 
 *
 * @name sap.ui.ux3.ThingInspector#actionSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Further thing related Action selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachActionSelected
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachActionSelected
 * @function
 */


/**
 * Fire event actionSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireActionSelected
 * @function
 */

/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @name sap.ui.ux3.ThingInspector#facetSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachFacetSelected
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachFacetSelected
 * @function
 */


/**
 * Fire event facetSelected to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireFacetSelected
 * @function
 */

/**
 * Fired when a new feed entry is submitted. 
 *
 * @name sap.ui.ux3.ThingInspector#feedSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Fired when a new feed entry is submitted. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachFeedSubmit
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachFeedSubmit
 * @function
 */


/**
 * Fire event feedSubmit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireFeedSubmit
 * @function
 */

// Start of sap/ui/ux3/ThingInspector.js
jQuery.sap.require("sap.ui.ux3.Overlay");
jQuery.sap.require("sap.ui.ux3.Feeder");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

//Provide information for validation for used undeclared aggregations
sap.ui.ux3.ThingInspector.getMetadata()._mHiddenAggregations = {
	"_genericActions": {multiple: true, type: "sap.ui.ux3.ThingAction"},
	"_actionButtons": {multiple: true, type: "sap.ui.commons.Button"}
};

/**
 * Initialization hook for the Thinginspector. It creates the instance of the
 * Popup helper service and does some basic configuration for it.
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype.init = function() {
	sap.ui.ux3.Overlay.prototype.init.apply(this);
	this._oNavBar = new sap.ui.ux3.NavigationBar();
	// attach NavBar selection
	var that = this;
	this._oNavBar.attachSelect(function(oControlEvent) {
		var item = oControlEvent.getParameters().item;
		if(that.fireFacetSelected({id:item.getId(), key:item.getKey(),item:item})) {
			that.setSelectedFacet(item);
		} else {
			 oControlEvent.preventDefault();
		}
	});
	// Initialize the ItemNavigation if required
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this._oItemNavigation);
	}
	this._prepareGenericActions();
	this._prepareActionMenus();
	this._prepareUpdateActionPopup();
	this._CollectionVisible = false;
};

/*
 * Set size of TI after rendering: If running in Shell we sync with shell
 * canvas. The size will then be set by the shell.
 */
sap.ui.ux3.ThingInspector.prototype.onAfterRendering = function() {
	var $content, facetGroups, minWidth,
		oShell = jQuery(".sapUiUx3Shell").control();
		
	if (oShell.length) {
		oShell[0].syncWithCanvasSize(this.getDomRef());
	} else {
		// set to fullscreen
		jQuery.sap.byId(this.getId()).css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
		// hide border and open/close button
		jQuery(".sapUiUx3TIContent").css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
		this.setOpenButtonVisible(false);
		this.setCloseButtonVisible(false);
	}
	jQuery.sap.byId(this.getId()).css("position", "fixed");

	this._setItemNavigation();
	// register resize handler
	this._resize = false;
	this._resizeListenerId = sap.ui.core.ResizeHandler.register(jQuery(".sapUiUx3TIFacetContent")[0], jQuery.proxy(this._onresize, this));
	
	// initial resize handling
	this._setTriggerValue();
	this._onresize();
};

/**
 * Resize handler listening to the facet content area. If the area will be
 * resized and the blocks will be rearranged to one column the width will be set
 * to 100%. After resize to a width greater than two times the minimum width of
 * a single block the size will be set back to 50%
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._onresize = function(oEvent) {
	var width;
	if (oEvent) {
		width = jQuery(oEvent.target).width();
	}
	if (!width) {
		width = jQuery(jQuery(".sapUiUx3TIFacetContent")[0]).width();
	}
	if (width < this._triggerValue && this._resize == false) {
		var facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		for ( var i = 0; i < facetGroups.length; i++) {
			jQuery(facetGroups[i]).animate({
				width : "100%"
			}, "fast");
		}
		this._resize = true;
	} else if (width > this._triggerValue && this._resize == true) {
		var facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		for ( var i = 0; i < facetGroups.length; i++) {
			jQuery(facetGroups[i]).animate({
				width : "50%"
			}, "fast");
		}
		this._resize = false;
	}
};

sap.ui.ux3.ThingInspector.prototype.onclick = function(oEvent) {
	if (oEvent.target.id === this.getId() + '-toggle-collection') {
		if (!this._CollectionVisible) {
			var TIContent = jQuery(".sapUiUx3TIContent");
			jQuery(TIContent[0]).animate({
				left : "229px"
			}, "200");
			jQuery.sap.byId(this.getId() + '-toggle-collection').text('>>');
			this._CollectionVisible = true;
		} else {
			var TIContent = jQuery(".sapUiUx3TIContent");
			jQuery(TIContent[0]).animate({
				left : "29px"
			}, "200");
			jQuery.sap.byId(this.getId() + '-toggle-collection').text('<<');
			this._CollectionVisible = false;
		}
	} else {
		sap.ui.ux3.Overlay.prototype.onclick.apply(this,arguments);
	}
};

sap.ui.ux3.ThingInspector.prototype._hasScrollbar = function(oElem) {
	return (oElem.get(0).scrollHeight > oElem.height());
};

/**
 * Override Popup Events
 *
 * @private
 */
/*
 * sap.ui.ux3.ThingInspector.prototype._overridePopupEventing = function() { var
 * that = this; // don't bring Thing Inspector to the front on mouse down.
 * Existing // Toolpopups should allways be in front this._oPopup.onmousedown =
 * function(oEvent) { return; } }
 */
/**
 * Destroys this instance of ThingInspector, called by Element#destroy()
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype.exit = function() {
	this.close();
	this.destroyAggregation("_genericActions");
	this._oNavBar.destroy();
	this._oNavBar = null;
	this._oUpdatePopup.destroy();
	this._oUpdatePopup = null;
	this._oMenu.destroy();
	this._oMenu = null;
};

/**
 * Opens this instance of ThingIspector
 *
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.open = function(initialFocusId) {
	if (this.getDomRef()) {
		this.rerender();
	}
	sap.ui.ux3.Overlay.prototype.open.apply(this,arguments);
	this._selectDefault();
};

/**
 * get button aggregation for the actions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getActionButtons = function() {
	return this.getAggregation("_actionButtons", []);
};

/**
 * get Navigation Bar control
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getNavBar = function() {
	return this._oNavBar;
};

/**
 * attach to select event of the aggregated thing actions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._attachThingAction = function(oAction) {
	var that = this;
	var action = oAction;
	oAction.attachSelect(function(oControlEvent) {
		that._genericActionSelected(oControlEvent, action);
	});
};

/**
 * Handle selection of generic actions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._genericActionSelected = function(oEvent, oAction) {
	var sId = oAction.getId();
	sId = sId.substr(sId.indexOf("-") + 1);

	if (oAction.getId() == this.getId() + "-follow") {
		if (this.getFollowState() == sap.ui.ux3.FollowActionState.Default) {
			this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
			this._prepareActionMenus();
			this.fireActionSelected({
				id : sId,
				action : oAction
			});
		} else {
			var eDock = sap.ui.core.Popup.Dock;
			this._oMenu.open(false, oAction.getFocusDomRef(), eDock.BeginTop, eDock.BeginBottom, oAction.getDomRef());
		}
	} else if (oAction.getId() == this.getId() + "-favorite") {
		this._favoriteActionSelected(oEvent, sId);
	} else if (oAction.getId() == this.getId() + "-flag") {
		this._flagActionSelected(oEvent, sId);
	} else if (oAction.getId() == this.getId() + "-update") {
		this._updateActionSelected(oEvent, sId);
	} else {
		this.fireActionSelected({
			id : sId,
			action : oAction
		});
	}

};

/**
 * setDefault NavBar selection and fire SelectedItem Event
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._selectDefault = function() {
	var navBarItems = this._oNavBar.getItems();
	if (navBarItems.length && !this._oNavBar.getSelectedItem()) {
		if (!this.getSelectedFacet()) {
			this.setSelectedFacet(navBarItems[0])
		}
		;
		var itemID = this._oNavBar.getSelectedItem();
		var item = sap.ui.getCore().byId(itemID);
		this.fireFacetSelected({
			id : item.getId(),
			key : item.getKey(),
			item : item
		});
	}
};

/**
 * create Generic Actions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareGenericActions = function() {
	/*
	 * instantiate generic actions and add them to an aggregation, for the
	 * action eventing
	 */
	this._oUpdateAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-update"
	});
	this._oUpdateAction.setTooltip(this._getText("TI_UPDATE_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oUpdateAction);
	this._attachThingAction(this._oUpdateAction);

	this._oFollowAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-follow"
	});
	this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_FOLLOW"));
	this.addAggregation("_genericActions", this._oFollowAction);
	this._attachThingAction(this._oFollowAction);

	this._oFavoriteAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-favorite"
	});
	this._oFavoriteAction.setTooltip(this._getText("TI_FAVORITE_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oFavoriteAction);
	this._attachThingAction(this._oFavoriteAction);

	this._oFlagAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-flag"
	});
	this._oFlagAction.setTooltip(this._getText("TI_FLAG_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oFlagAction);
	this._attachThingAction(this._oFlagAction);
};

/**
 * prepare Menus for Follow action
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareActionMenus = function() {
	var imagePath = sap.ui.resource("sap.ui.ux3", "themes/" + sap.ui.getCore().getConfiguration().getTheme());

	if (!this._oUnFollowItem) {
		this._oUnFollowItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-unfollowState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_UNFOLLOW"),
			icon : imagePath + "/img/menu_unlisten.png"
		});
	}
	if (!this._oHoldItem) {
		this._oHoldItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-holdState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_HOLD"),
			icon : imagePath + "/img/menu_hold.png"
		});
	}
	if (!this._oUnHoldItem) {
		this._oUnHoldItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-unholdState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_UNHOLD"),
			icon : imagePath + "/img/menu_hold.png"
		});
	}
	if (!this._oMenu) {
		this._oMenu = new sap.ui.commons.Menu({
			id : this.getId() + "-followActionMenu"
		});
		var that = this;
		this._oMenu.attachItemSelect(function(oControlEvent) {
			that._followMenuSelected(oControlEvent);
		});
		this._oMenu.addItem(this._oHoldItem);
		this._oMenu.addItem(this._oUnHoldItem);
		this._oMenu.addItem(this._oUnFollowItem);
	}
	if (this.getFollowState() == sap.ui.ux3.FollowActionState.Default) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_FOLLOW"));
		this._oHoldItem.setVisible(false);
		this._oUnFollowItem.setVisible(false);
		this._oUnHoldItem.setVisible(false);
	} else if (this.getFollowState() == sap.ui.ux3.FollowActionState.Follow) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_STOPPAUSE_FOLLOW"));
		this._oHoldItem.setVisible(true);
		this._oUnFollowItem.setVisible(true);
		this._oUnHoldItem.setVisible(false);
	} else if (this.getFollowState() == sap.ui.ux3.FollowActionState.Hold) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_STOPCONTINUE_FOLLOW"));
		this._oHoldItem.setVisible(false);
		this._oUnFollowItem.setVisible(true);
		this._oUnHoldItem.setVisible(true);
	}
	this._rerenderGenericThingActions();
};

/**
 * equal Columns
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._equalColumns = function() {
	var headerColumn = jQuery(".sapUiUx3TIHeader");
	var facetsColumn = jQuery(".sapUiUx3TIFacets");
	var scrollContainer = jQuery(".sapUiUx3TIContentScrollContainer");
	facetsColumn.height(scrollContainer.get(0).scrollHeight);
	headerColumn.height(scrollContainer.get(0).scrollHeight);
};

/**
 * Get Menu for generic Follow Action
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getFollowActionMenu = function() {
	return this._oMenu;
};

/**
 * Follow Action Menu Eventhandler
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._followMenuSelected = function(oEvent) {
	if (oEvent.getParameters().item.getId() == this.getId() + "-followState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-unfollowState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Default);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-holdState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Hold);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-unholdState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
	}
	this._prepareActionMenus();
	var sId = this._oFollowAction.getId();
	sId = sId.substr(sId.indexOf("-") + 1);
	this.fireActionSelected({
		id : sId,
		action : this._oFollowAction
	});
};

/**
 * Handle Flag Action selection
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._flagActionSelected = function(oEvent, sId) {
	if (this.getFlagState() == true) {
		this.setFlagState(false);
	} else {
		this.setFlagState(true);
	}
	this.fireActionSelected({
		id : sId,
		action : this._oFlagAction
	});
};

/**
 * Handle Favorite Action selection
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._favoriteActionSelected = function(oEvent, sId) {
	if (this.getFavoriteState() == true) {
		this.setFavoriteState(false);
	} else {
		this.setFavoriteState(true);
	}
	this.fireActionSelected({
		id : sId,
		action : this._oFavoriteAction
	});
};

/**
 * Handle Update Action selection
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._updateActionSelected = function(oEvent) {
	if (this._oUpdatePopup.isOpen()) {
		this._oUpdatePopup.close()
	} else {
		this._oUpdatePopup.setPosition(sap.ui.core.Popup.Dock.BeginBottom, sap.ui.core.Popup.Dock.BeginTop, oEvent.getSource().getDomRef(), "-8 -13", "none");
		this._oUpdatePopup.open();
	}
};

/**
 * Handle Update Action selection
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareUpdateActionPopup = function(oEvent) {
	this._oUpdatePopup = new sap.ui.ux3.ToolPopup({
		id : this.getId() + "-UpdateActionPopup"
	}).addStyleClass("sapUiUx3TIUpdatePopup");
	var that = this;
	this._feeder = new sap.ui.ux3.Feeder({
		id: this.getId() + "-Feeder",
		type: sap.ui.ux3.FeederType.Comment,
		thumbnailSrc : this.getIcon(),
		text: "",
		submit : function(oEvent) {
			var text = oEvent.getParameter("text");
			that.fireFeedSubmit({
				text : text
			});
			that._oUpdatePopup.close();
		}
	});
	this._oUpdatePopup.addContent(this._feeder);
};

/**
 * Rerender Header Content
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderHeaderContent = function() {
	var $content = jQuery.sap.byId(this.getId() + "-headerContent");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderHeaderContent(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};

/**
 * Rerender ThingActions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderGenericThingActions = function() {
	var content = jQuery.sap.byId(this.getId() + "-genericThingActions");
	if (content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderGenericActions(rm, this);
		rm.flush(content[0]);
		rm.destroy();
	}
};

/**
 * Rerender Facet Content
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderFacetContent = function() {
	var $content = jQuery.sap.byId(this.getId() + "-facetContent");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderFacetContent(rm, this);
		rm.flush($content[0]);
		rm.destroy();
		this._resize = false;
		this._setTriggerValue();
		this._onresize();
	}
};

/**
 * set trigger value for resize handler
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._setTriggerValue = function() {
	var facetGroups, minWidth,
		$content = jQuery.sap.byId(this.getId() + "-facetContent");
	
	// get triggerValue for facet content resize handler
	if ($content.length > 0) {
		facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		minWidth = jQuery(facetGroups[0]).css("min-width");
		this._triggerValue = parseInt(minWidth, 10) * 2;
	}
};


/**
 * Update ThingAction Button
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._updateThingActionButton = function(oThingAction) {
	var aButtons = this.getAggregation("_actionButtons");
	if (!aButtons) {
		return;
	}
	for (var i = 0; i < aButtons.length ; i++) {
		if (aButtons[i].getId() == (this.getId() + "-" + oThingAction.getId() + "Button")) {
			aButtons[i].setText(oThingAction.getText());
			aButtons[i].setEnabled(oThingAction.getEnabled());
			break;
		}
	}
};

/**
 * Rerender Thing Actions
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderThingActions = function() {
	var content = jQuery.sap.byId(this.getId() + "-thingActions");
	if (content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderThingActions(rm, this);
		rm.flush(content[0]);
		rm.destroy();
	}
};

/**
 * Add Thing Actions ti ItemNavigation
 *
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._setItemNavigation = function() {

	if (this.getDomRef()) {
		this._oItemNavigation.setRootDomRef(jQuery(this.getDomRef()).find(".sapUiUx3TIToolbar").get(0));
		// only if already rendered, otherwise not DOM elements exists
		var aItemDomRefs = [];
		var oActions = this.getAggregation("_genericActions", []);
		for ( var i = 0; i < oActions.length; i++) {
			aItemDomRefs.push(oActions[i].getDomRef());
		}
		oActions = this.getAggregation("_actionButtons", []);
		for ( var i = 0; i < oActions.length; i++) {
			aItemDomRefs.push(oActions[i].getDomRef());
		}
		this._oItemNavigation.setItemDomRefs(aItemDomRefs);
	}
};

/* Redefinition of generated API methods */

// Implementation of API method insertAction
sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction, iIndex) {

	this.insertAggregation("actions", oAction, iIndex, true);
	var oButton = new sap.ui.commons.Button({
		id : this.getId() + "-" + oAction.getId() + "Button",
		text : oAction.getText(),
		enabled : oAction.getEnabled()
	});
	var that = this;
	var action = oAction;
	oButton.attachPress(function(oControlEvent) {
		var itemId = oControlEvent.getSource().getId();
		var actionId = itemId.substr((itemId.indexOf("-") + 1));
		actionId = actionId.substr(0, actionId.indexOf("Button"));
		that.fireActionSelected({
			id : actionId,
			action : oAction
		});
	});
	this.addAggregation("_actionButtons", oButton, iIndex, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};

// Implementation of API method addAction
sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) {

	this.addAggregation("actions", oAction, true);

	var oButton = new sap.ui.commons.Button({
		id : this.getId() + "-" + oAction.getId() + "Button",
		text : oAction.getText(),
		enabled : oAction.getEnabled()
	});
	var that = this;
	var action = oAction;
	oButton.attachPress(function(oControlEvent) {
		var itemId = oControlEvent.getSource().getId();
		var actionId = itemId.substr((itemId.indexOf("-") + 1));
		actionId = actionId.substr(0, actionId.indexOf("Button"));
		that.fireActionSelected({
			id : actionId,
			action : oAction
		});
	});
	this.addAggregation("_actionButtons", oButton, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};

// Implementation of API method removeAction
sap.ui.ux3.ThingInspector.prototype.removeAction = function(vElement) {
	var oButton = sap.ui.getCore().byId(this.getId() + "-" + vElement.getId() + "Button");
	this.removeAggregation("_actionButtons", oButton, true);
	oButton.destroy();
	var result = this.removeAggregation("actions", vElement, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return result;
};

// Implementation of API method removeAllActions
sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() {
	this.destroyAggregation("_actionButtons", true);
	var result = this.removeAllAggregation("actions", true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return result;
};

// Implementation of API method destroyActions
sap.ui.ux3.ThingInspector.prototype.destroyActions = function() {
	this.destroyAggregation("_actionButtons", true);
	this.destroyAggregation("actions", true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.getFacets = function() {
	return this._oNavBar.getItems();
};

// Implementation of API method insertFacet
sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet, iIndex) {
	this._oNavBar.insertItem(oFacet, iIndex);
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) {
	this._oNavBar.addItem(oFacet);
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vElement) {
	return this._oNavBar.removeItem(vElement);
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() {
	return this._oNavBar.removeAllItems();
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() {
	this._oNavBar.destroyItems();
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFollowState = function(oFollowState) {
	// set icon according to state
	var folloActionElem = jQuery.sap.byId(this.getId() + "-follow");
	folloActionElem.removeClass(this.getFollowState()).addClass(oFollowState);
	if (oFollowState == sap.ui.ux3.FollowActionState.Default) {
		folloActionElem.attr("aria-haspopup", "false");
	} else {
		folloActionElem.attr("aria-haspopup", "true");
	}
	// supress rerendering of TI
	this.setProperty("followState", oFollowState, true);
	this._prepareActionMenus();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFlagState = function(oFlagState) {
	// set icon according to state
	jQuery.sap.byId(this.getId() + "-flag").toggleClass("Selected", oFlagState);
	// supress rerendering of TI
	this.setProperty("flagState", oFlagState, true);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(oFavoriteState) {
	// set icon according to state
	jQuery.sap.byId(this.getId() + "-favorite").toggleClass("Selected", oFavoriteState);
	// supress rerendering of TI
	this.setProperty("favoriteState", oFavoriteState, true);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setIcon = function(oIcon) {
	this.setProperty("icon", oIcon);
	this._feeder.setThumbnailSrc(oIcon);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent, iIndex) {
	this.insertAggregation("facetContent", oFacetContent, iIndex, true);
	this._rerenderFacetContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) {
	this.addAggregation("facetContent", oFacetContent, true);
	this._rerenderFacetContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) {
	var result = this.removeAggregation("facetContent", vFacetContent, true);
	this._rerenderFacetContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() {
	var result = this.removeAllAggregation("facetContent", true);
	this._rerenderFacetContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() {
	this.destroyAggregation("facetContent", true);
	this._rerenderFacetContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent, iIndex) {
	this.insertAggregation("headerContent", oHeaderContent, iIndex, true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) {
	this.addAggregation("headerContent", oHeaderContent, true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) {
	var result = this.removeAggregation("headerContent", vHeaderContent, true);
	this._rerenderHeaderContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() {
	var result = this.removeAllAggregation("headerContent", true);
	this._rerenderHeaderContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() {
	this.destroyAggregation("headerContent", true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(selectedFacet) {
	var oldSelectedFacet = this.getSelectedFacet();
	this.setAssociation("selectedFacet", selectedFacet, true);
	var newSelectedFacet = this.getSelectedFacet();

	if (oldSelectedFacet != newSelectedFacet) {
		this._oNavBar.setSelectedItem(newSelectedFacet);
	}
};
sap.ui.ux3.ThingInspector.prototype.invalidate = function(oOrigin) {
	if (oOrigin instanceof sap.ui.ux3.ThingAction) {
		this._updateThingActionButton(oOrigin);
		this._rerenderGenericThingActions();
	} else {
		sap.ui.core.Control.prototype.invalidate.apply(this,arguments);
	}
};
