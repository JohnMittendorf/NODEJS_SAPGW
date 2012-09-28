/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSet.
jQuery.sap.declare("sap.ui.ux3.DataSet");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataSet.
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
 * <li>{@link #getSelectedView selectedView} : int (default: 0)</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getEnableSorting enableSorting} : boolean (default: true)</li>
 * <li>{@link #getEnableFiltering enableFiltering} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.DataSetItem[]</li>
 * <li>{@link #getViews views} : sap.ui.ux3.DataSetView[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.DataSet#event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.DataSet#event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.DataSet#event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * DataSet
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.DataSet
 */
sap.ui.core.Control.extend("sap.ui.ux3.DataSet", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setLeadSelection", "getLeadSelection"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"selectedView" : {type : "int", group : "Misc", defaultValue : 0},
		"filterValue" : {type : "string", group : "Misc", defaultValue : null},
		"enableSorting" : {type : "boolean", group : "Misc", defaultValue : true},
		"enableFiltering" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.ui.ux3.DataSetItem", multiple : true, singularName : "item", bindable : "bindable"}, 
    	"views" : {type : "sap.ui.ux3.DataSetView", multiple : true, singularName : "view"}
	},
	events : {
		"selectionChanged" : {}, 
		"filter" : {}, 
		"sort" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.DataSet with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.DataSet.extend
 * @function
 */

sap.ui.ux3.DataSet.M_EVENTS = {'selectionChanged':'selectionChanged','filter':'filter','sort':'sort'};


/**
 * Getter for property <code>selectedView</code>.
 * Index of the selected view
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>selectedView</code>
 * @public
 * @name sap.ui.ux3.DataSet#getSelectedView
 * @function
 */


/**
 * Setter for property <code>selectedView</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iSelectedView  new value for property <code>selectedView</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setSelectedView
 * @function
 */

/**
 * Getter for property <code>filterValue</code>.
 * Filter Value for the DataSet
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * @name sap.ui.ux3.DataSet#getFilterValue
 * @function
 */


/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setFilterValue
 * @function
 */

/**
 * Getter for property <code>enableSorting</code>.
 * Enable sorting
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableSorting</code>
 * @public
 * @name sap.ui.ux3.DataSet#getEnableSorting
 * @function
 */


/**
 * Setter for property <code>enableSorting</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableSorting  new value for property <code>enableSorting</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setEnableSorting
 * @function
 */

/**
 * Getter for property <code>enableFiltering</code>.
 * Enable filtering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableFiltering</code>
 * @public
 * @name sap.ui.ux3.DataSet#getEnableFiltering
 * @function
 */


/**
 * Setter for property <code>enableFiltering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableFiltering  new value for property <code>enableFiltering</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setEnableFiltering
 * @function
 */
	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of DataSetItems
 * 
 * @return {sap.ui.ux3.DataSetItem[]}
 * @public
 * @name sap.ui.ux3.DataSet#getItems
 * @function
 */

/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#insertItem
 * @function
 */


/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.DataSet#addItem
 * @function
 */


/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.DataSetItem} the removed item or null
 * @public
 * @name sap.ui.ux3.DataSet#removeItem
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.DataSet#removeAllItems
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.DataSet#indexOfItem
 * @function
 */


/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#destroyItems
 * @function
 */

/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#bindItems
 * @function
 */


/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#unbindItems
 * @function
 */
	
/**
 * Getter for aggregation <code>views</code>.<br/>
 * views
 * 
 * @return {sap.ui.ux3.DataSetView[]}
 * @public
 * @name sap.ui.ux3.DataSet#getViews
 * @function
 */

/**
 * Inserts a view into the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#insertView
 * @function
 */


/**
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.DataSet#addView
 * @function
 */


/**
 * Removes an view from the aggregation named <code>views</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetView} vView the view to remove or its index or id
 * @return {sap.ui.ux3.DataSetView} the removed view or null
 * @public
 * @name sap.ui.ux3.DataSet#removeView
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetView[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.DataSet#removeAllViews
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.DataSet#indexOfView
 * @function
 */


/**
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#destroyViews
 * @function
 */

/**
 * selection Changed 
 *
 * @name sap.ui.ux3.DataSet#selectionChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.oldLeadSelectedIndex Old lead selected index
 * @param {int} oControlEvent.getParameters.newLeadSelectedIndex New lead selected index
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 *  
 * selection Changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#attachSelectionChanged
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#detachSelectionChanged
 * @function
 */


/**
 * Fire event selectionChanged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oldLeadSelectedIndex' of type <code>int</code> Old lead selected index</li>
 * <li>'newLeadSelectedIndex' of type <code>int</code> New lead selected index</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSet#fireSelectionChanged
 * @function
 */

/**
 * Event fired when filtering is triggered. 
 *
 * @name sap.ui.ux3.DataSet#filter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.filterValue Filter string 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 *  
 * Event fired when filtering is triggered. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#attachFilter
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#detachFilter
 * @function
 */


/**
 * Fire event filter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filterValue' of type <code>string</code> Filter string </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSet#fireFilter
 * @function
 */

/**
 * Event fired when sorting is triggered. 
 *
 * @name sap.ui.ux3.DataSet#sort
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 *  
 * Event fired when sorting is triggered. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#attachSort
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#detachSort
 * @function
 */


/**
 * Fire event sort to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSet#fireSort
 * @function
 */

/**
 * Set LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.setLeadSelection
 * @function
 * @param {int} 
 *         iIIndex
 *         

 * @type void
 * @public
 */


/**
 * Get LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.getLeadSelection
 * @function

 * @type int
 * @public
 */


// Start of sap/ui/ux3/DataSet.js
///**
//* This file defines behavior for the DataSet control,
//*/

//Provide information for validation for used undeclared aggregations
sap.ui.ux3.DataSet.getMetadata()._mHiddenAggregations = {"_viewSwitches": {multiple: true, type: "sap.ui.core.Control"}};

sap.ui.ux3.DataSet.prototype.init = function() {
	//each DS needs a selectionModel for its items
	jQuery.sap.require("sap.ui.model.SelectionModel");
	this.selectionModel = new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	this.prepareToolbar();
};

sap.ui.ux3.DataSet.prototype.exit = function() {
	this._oFilterButton.destroy();
	this._oFilterString.destroy();
	this._oSortButton.destroy();
};

sap.ui.ux3.DataSet.prototype.prepareToolbar = function() {
	// create some filter button + some sort button for testing
	var that = this;
	this._oFilterButton = new sap.ui.commons.Button({
		id : this.getId()+"-filter",
		text : "filter"
	});
	this._oSortButton = new sap.ui.commons.Button({
		id : this.getId()+"-sort",
		text : "sort"
	});
	this._oFilterButton.attachPress(this.filter, this);
	this._oSortButton.attachPress(this.sort, this);
	this._oFilterString = new sap.ui.commons.TextField({id : this.getId()+"-filterValue"});
	this._oFilterString.attachChange(function(oEvent)
			{
		that.setFilterValue(oEvent.getParameters().newValue);
			});
};

/**
 * Press handler for the view selection buttons
 *
 * @param {sap.ui.base.Event} oEvent Press event
 * @private
*/
sap.ui.ux3.DataSet.prototype.press = function(oEvent,iSelectedViewIndex) {
	var but = oEvent.oSource,
		viewIndex = but._viewIndex;
	this._oldRendering = this.getViews()[this.getSelectedView()];
	this._oldRendering.exitView();
	this.setSelectedView(viewIndex);
};

/**
 * Fire filter event
 *
 * @private
*/
sap.ui.ux3.DataSet.prototype.filter = function() {
	this.fireFilter({
					filterValue : this.getFilterValue()
				});
};
/**
 * Fire sort event
 *
 * @private
*/
sap.ui.ux3.DataSet.prototype.sort = function() {
	this.fireSort();
};

/**
 * Selection handler for the DataSetItem selection event.
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @private
*/
sap.ui.ux3.DataSet.prototype.selectItem = function(oEvent) {
	var sItemId = oEvent.getParameters().itemId;
	var oItem = sap.ui.getCore().byId(sItemId);
	var oldSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	if (oldSelectedIndex == oItem._index) {
		this.selectionModel.setLeadSelectedIndex(-1);
	} else {
		this.selectionModel.setLeadSelectedIndex(oItem._index);
	}
	var newSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	this.fireSelectionChanged({
				oldLeadSelectedIndex: oldSelectedIndex,
				newLeadSelectedIndex: newSelectedIndex});
};

/**
 * Prepare rendering: Calls init end exit hooks on the selected view instance. Necessary to keep the view
 * consistent to the DataSet state.
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @private
*/
sap.ui.ux3.DataSet.prototype.prepareRendering = function() {
	if (this.getViews().length == 0) {
		return;
	}
	if (this.getViews()[this.getSelectedView()].exitView) {
		this.getViews()[this.getSelectedView()].exitView();
	}
	if (this.getViews()[this.getSelectedView()].initView) {
		this.getViews()[this.getSelectedView()].initView(this.getItems());
	}
};

/*** Selection Model methods ***/

/**
 * Returns the LeadSelection index
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @return {int} selected index
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getLeadSelection = function() {
	return this.selectionModel.getLeadSelectedIndex();
};

/**
 * Set the LeadSelection index
 *
 * @param {int} iIndex set LeadSelection index
 * @protected
*/
sap.ui.ux3.DataSet.prototype.setLeadSelection = function(iIndex) {
	this.selectionModel.setLeadSelectedIndex(iIndex);
};

/**
 * Returns true if iIndex is selected
 *
 * @param {int} iIndex index of selection
 * @return {boolean} index selected true/false
 * @protected
*/
sap.ui.ux3.DataSet.prototype.isSelectedIndex = function(iIndex) {
	return (this.selectionModel.getLeadSelectedIndex() == iIndex);
};

/**
 * Returns id of selected Item from given index
 *
 * @param {int} iIndex index of selection
 * @return {string} id of selected item
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getSelectedItemId = function(iIndex) {
	 return this.getItems()[iIndex].getId();
};

/**
 * Creates a view switch button
 *
 * @param {object} oView View
 * @param {int} iIndex Index of view
 * @return {object} viewSwitch instance
 * @protected
*/
sap.ui.ux3.DataSet.prototype.createViewSwitch = function(oView, iIndex) {
	 var that = this, oViewSwitch;

	 if (oView.getIcon()) {
		 oViewSwitch = new sap.ui.commons.Image({
			 id : this.getId()+"-view"+oView.getId(),
			 src:oView.getIcon()
		 });
	 } else if (oView.getName()) {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view"+oView.getId(),
			 text : oView.getName()
		 });
	 } else {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view"+oView.getId(),
			 text : oView.getId()
		 });
	 }
	 oViewSwitch._viewIndex = iIndex;
	 oViewSwitch.attachPress(function(oEvent){that.press(oEvent,iIndex);}, that);
	 return oViewSwitch;
};

/**
 * Rerendering of the Toolbar
 *
 * @protected
*/
sap.ui.ux3.DataSet.prototype._rerenderToolbar = function() {
	var $content = jQuery.sap.byId(this.getId() + "-toolbar");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.DataSetRenderer.renderToolbar(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};

/*** override API methods ***/

sap.ui.ux3.DataSet.prototype.removeItem = function(oItem) {
	var result = this.removeAggregation("items", oItem);
	oItem.detachSelected(this.selectItem,this);
	return result;
};

sap.ui.ux3.DataSet.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = this.getItems().length - 1;
	return this;
};

sap.ui.ux3.DataSet.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = iIndex;
	return this;
};

sap.ui.ux3.DataSet.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue",sFilterValue, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.getFilterValue = function() {
	return this.getProperty("filterValue");
};

sap.ui.ux3.DataSet.prototype.insertView = function(oView, iIndex) {
	var oViewSwitch = this.createViewSwitch(oView,iIndex);
	this.insertAggregation("views", oView, iIndex);
	this.insertAggregation("_viewSwitches", oViewSwitch, iIndex, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.addView = function(oView) {
	var iIndex = this.getViews().length,
		oViewSwitch = this.createViewSwitch(oView,iIndex);
	this.addAggregation("views", oView);
	this.addAggregation("_viewSwitches", oViewSwitch, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.removeView = function(vView) {
	var oViewId;
	if (typeof(vView) == "string") { // ID of the element is given
		oViewId = this.getId()+"-view"+vView;
		this.removeAggregation("_viewSwitches", oViewId, true).destroy();
	}
	else if (typeof(vView) == "object") { // the element itself is given or has just been retrieved
		oViewId = this.getId()+"-view"+vView.getId();
		this.removeAggregation("_viewSwitches", oViewId, true).destroy();
	}
	else if (typeof(vView) == "number") { // "vElement" is the index now
		this.removeAggregation("_viewSwitches", vView, true).destroy();
	}
	return this.removeAggregation("views", vView);
};

sap.ui.ux3.DataSet.prototype.destroyViews = function() {
	this.destroyAggregation("_viewSwitches");
	this.destroyAggregation("views");
	return this;
};

sap.ui.ux3.DataSet.prototype.removeAllViews = function() {
	this.removeAllAggregation("_viewSwitches");
	return this.removeAllAggregation("views");
};

sap.ui.ux3.DataSet.prototype.setEnableSorting = function(bEnableSorting) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableSorting", bEnableSorting, true);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.setEnableFiltering = function(bEnableFiltering) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableFiltering", bEnableFiltering, true);
	this._rerenderToolbar();
	return this;
};
