/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Table.
jQuery.sap.declare("sap.ui.table.Table");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Table.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getRowHeight rowHeight} : int (default: 22)</li>
 * <li>{@link #getColumnHeaderHeight columnHeaderHeight} : int (default: 22)</li>
 * <li>{@link #getVisibleRowCount visibleRowCount} : int (default: 10)</li>
 * <li>{@link #getFirstVisibleRow firstVisibleRow} : int (default: 0)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: sap.ui.table.SelectionMode.Multi)</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: -1)</li>
 * <li>{@link #getAllowColumnReordering allowColumnReordering} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.commons.Toolbar</li>
 * <li>{@link #getColumns columns} : sap.ui.table.Column[]</li>
 * <li>{@link #getRows rows} : sap.ui.table.Row[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.Table#event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnSelect columnSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Table Control.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.table.Table
 */
sap.ui.core.Control.extend("sap.ui.table.Table", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedIndices", "addSelectionInterval", "setSelectionInterval", "removeSelectionInterval", "isIndexSelected", "clearSelection", "selectAll", "getContextByIndex"
	],

	// ---- control specific ----
	library : "sap.ui.table",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "", defaultValue : 'auto'},
		"rowHeight" : {type : "int", group : "", defaultValue : 22},
		"columnHeaderHeight" : {type : "int", group : "", defaultValue : 22},
		"visibleRowCount" : {type : "int", group : "", defaultValue : 10},
		"firstVisibleRow" : {type : "int", group : "", defaultValue : 0},
		"selectionMode" : {type : "sap.ui.table.SelectionMode", group : "", defaultValue : sap.ui.table.SelectionMode.Multi},
		"selectedIndex" : {type : "int", group : "", defaultValue : -1},
		"allowColumnReordering" : {type : "boolean", group : "", defaultValue : true}
	},
	defaultAggregation : "columns",
	aggregations : {
    	"title" : {type : "sap.ui.core.Control", multiple : false}, 
    	"footer" : {type : "sap.ui.core.Control", multiple : false}, 
    	"toolbar" : {type : "sap.ui.commons.Toolbar", multiple : false}, 
    	"columns" : {type : "sap.ui.table.Column", multiple : true, singularName : "column", bindable : "bindable"}, 
    	"rows" : {type : "sap.ui.table.Row", multiple : true, singularName : "row", bindable : "bindable"}
	},
	events : {
		"rowSelectionChange" : {}, 
		"columnSelect" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code> 
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
 * @name sap.ui.table.Table.extend
 * @function
 */

sap.ui.table.Table.M_EVENTS = {'rowSelectionChange':'rowSelectionChange','columnSelect':'columnSelect'};


/**
 * Getter for property <code>width</code>.
 * Width of the Table.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.table.Table#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setWidth
 * @function
 */

/**
 * Getter for property <code>rowHeight</code>.
 * Height of a row of the Table in pixel.
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>rowHeight</code>
 * @public
 * @name sap.ui.table.Table#getRowHeight
 * @function
 */


/**
 * Setter for property <code>rowHeight</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iRowHeight  new value for property <code>rowHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setRowHeight
 * @function
 */

/**
 * Getter for property <code>columnHeaderHeight</code>.
 * Height of the column header of the Table in pixel.
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>columnHeaderHeight</code>
 * @public
 * @name sap.ui.table.Table#getColumnHeaderHeight
 * @function
 */


/**
 * Setter for property <code>columnHeaderHeight</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iColumnHeaderHeight  new value for property <code>columnHeaderHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setColumnHeaderHeight
 * @function
 */

/**
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows (will overwrite the height property).
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * @name sap.ui.table.Table#getVisibleRowCount
 * @function
 */


/**
 * Setter for property <code>visibleRowCount</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iVisibleRowCount  new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setVisibleRowCount
 * @function
 */

/**
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * @name sap.ui.table.Table#getFirstVisibleRow
 * @function
 */


/**
 * Setter for property <code>firstVisibleRow</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleRow  new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFirstVisibleRow
 * @function
 */

/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table.
 *
 * Default value is <code>Multi</code>
 *
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * @name sap.ui.table.Table#getSelectionMode
 * @function
 */


/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multi</code> 
 *
 * @param {sap.ui.table.SelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setSelectionMode
 * @function
 */

/**
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the first selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * @name sap.ui.table.Table#getSelectedIndex
 * @function
 */


/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setSelectedIndex
 * @function
 */

/**
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @public
 * @name sap.ui.table.Table#getAllowColumnReordering
 * @function
 */


/**
 * Setter for property <code>allowColumnReordering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowColumnReordering  new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setAllowColumnReordering
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Control or text of title section of the Table (if not set/empty) the title will be hidden)
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Table#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.core.Control}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyTitle
 * @function
 */
	
/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control or text of footer section of the Table (if not set/empty) the footer will be hidden)
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Table#getFooter
 * @function
 */

/**
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFooter
 * @function
 */


/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyFooter
 * @function
 */
	
/**
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.commons.Toolbar}
 * @public
 * @name sap.ui.table.Table#getToolbar
 * @function
 */

/**
 * Setter for the aggregated <code>toolbar</code>.
 * @param oToolbar {sap.ui.commons.Toolbar}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setToolbar
 * @function
 */


/**
 * Destroys the toolbar in the aggregation 
 * named <code>toolbar</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyToolbar
 * @function
 */
	
/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * 
 * @return {sap.ui.table.Column[]}
 * @public
 * @name sap.ui.table.Table#getColumns
 * @function
 */

/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#insertColumn
 * @function
 */


/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.table.Table#addColumn
 * @function
 */


/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.ui.table.Column} vColumn the column to remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 * @name sap.ui.table.Table#removeColumn
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Table#removeAllColumns
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Table#indexOfColumn
 * @function
 */


/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyColumns
 * @function
 */

/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#bindColumns
 * @function
 */


/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#unbindColumns
 * @function
 */
	
/**
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows of the Table
 * 
 * @return {sap.ui.table.Row[]}
 * @public
 * @name sap.ui.table.Table#getRows
 * @function
 */

/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#insertRow
 * @function
 */


/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.table.Table#addRow
 * @function
 */


/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.ui.table.Row} vRow the row to remove or its index or id
 * @return {sap.ui.table.Row} the removed row or null
 * @public
 * @name sap.ui.table.Table#removeRow
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Row[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Table#removeAllRows
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Table#indexOfRow
 * @function
 */


/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyRows
 * @function
 */

/**
 * Binder for aggregation <code>rows</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#bindRows
 * @function
 */


/**
 * Unbinder for aggregation <code>rows</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#unbindRows
 * @function
 */

/**
 * fired when the row selection of the table has been changed 
 *
 * @name sap.ui.table.Table#rowSelectionChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex index of the lead selected row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the lead selected row
 * @param {int[]} oControlEvent.getParameters.rowIndices indices of other selected rows
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the row selection of the table has been changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachRowSelectionChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachRowSelectionChange
 * @function
 */


/**
 * Fire event rowSelectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> index of the lead selected row</li>
 * <li>'rowContext' of type <code>object</code> binding context of the lead selected row</li>
 * <li>'rowIndices' of type <code>int[]</code> indices of other selected rows</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.table.Table#fireRowSelectionChange
 * @function
 */

/**
 * fired when a column of the table has been selected 
 *
 * @name sap.ui.table.Table#columnSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when a column of the table has been selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachColumnSelect
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachColumnSelect
 * @function
 */


/**
 * Fire event columnSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> reference to the selected column</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.table.Table#fireColumnSelect
 * @function
 */

/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.table.Table.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.addSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.setSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
 *
 * @name sap.ui.table.Table.prototype.removeSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.table.Table.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.table.Table.prototype.clearSelection
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Add all rows to the selection.
 *
 * @name sap.ui.table.Table.prototype.selectAll
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns the context of a row by its index.
 *
 * @name sap.ui.table.Table.prototype.getContextByIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index of the row to return the context from.

 * @type object
 * @public
 */


// Start of sap/ui/table/Table.js
jQuery.sap.require("sap.ui.model.SelectionModel");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.ScrollBar");
jQuery.sap.require("sap.ui.commons.TextView");
jQuery.sap.require("sap.ui.table.Row");

/*

Things to consider:
  - what happens when changing/adding/removing a column? Recreate?
    -> call rerender(true);

Open Points:
  - Tests
  - Hierarchical Table (separate control?)

*/

// =============================================================================
// BASIC CONTROL API
// =============================================================================

/**
 * Initialization of the Table control
 * @private
 */
sap.ui.table.Table.prototype.init = function() {

	// flag indicating if the table is rendered or not
	this._bRendered = false;

	// create an information object which contains always required infos
	this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");
	this._bAccMode = sap.ui.getCore().getConfiguration().getAccessibility();
	this._bRtlMode = sap.ui.getCore().getConfiguration().getRTL();

	// basic selection model
	this._oSelection = new sap.ui.model.SelectionModel();
	this._oSelection.attachSelectionChanged(this._onSelectionChange, this);

	// minimum width of a table column in pixel:
	// should at least be larger than the paddings for cols and cells!
	this._iColMinWidth = 20;

	// custom heights
	this._bCustomRowHeight = false;
	this._bCustomColHdrHeight = false;

	// read the row height from CSS
	this.onThemeChanged();

	// first & last visible columns
	this._iFirstCol = undefined;
	this._iLastCol = undefined;

	// scrollbars (configure by default for the pixel mode)
	this._oVSb = new sap.ui.core.ScrollBar(this.getId() + "-vsb", {size: "100%"});
	this._oVSb.attachScroll(this.onvscroll, this);
	this._oHSb = new sap.ui.core.ScrollBar(this.getId() + "-hsb", {size: "100%", contentSize: "0px", vertical: false});
	this._oHSb.attachScroll(this.onhscroll, this);

	// action mode flag (for keyboard navigation)
	this._bActionMode = false;
	
	// use thresholding for getContexts from model
	this._bThreshold = true;

};


/**
 * Termination of the DataTable control
 * @private
 */
sap.ui.table.Table.prototype.exit = function() {
	// destroy the child controls
	this._oVSb.destroy();
	this._oHSb.destroy();
	// destroy helpers
	this._destroyItemNavigation();
	// cleanup
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onThemeChanged = function() {

	if (!this._bCustomRowHeight) {
		// read the value of the row height parameter
		var sRowHeightParamName = "sap.ui.table.Table:sapUiTableRowHeight";
		this.setProperty("rowHeight", parseInt(sap.ui.core.theming.Parameters.get(sRowHeightParamName), 10), false);
	}
	if (!this._bCustomColHdrHeight) {
		// read the value of the column header height parameter
		var sColHdrHeightParamName = "sap.ui.table.Table:sapUiTableColHdrHeight";
		this.setProperty("columnHeaderHeight", parseInt(sap.ui.core.theming.Parameters.get(sColHdrHeightParamName), 10), false);
	}

	if (this._bRendered) {
		this.invalidate();
	}

};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onBeforeRendering = function() {
	this._bRendered = false;
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onAfterRendering = function() {
	this._bRendered = true;

	this._bOnAfterRendering = true;

	var $this = this.$();

	this._updateVSb();
	this._updateSelection();

	this._handleResize();

	this._attachEvents();

	// restore the column icons
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		aCols[i]._restoreIcons();
	}

	this._bOnAfterRendering = false;

	this._initItemNavigation();

};


// =============================================================================
// ITEMNAVIGATION
// =============================================================================


/**
 * initialize ItemNavigation. Transfer relevant controls to ItemNavigation.
 * TabIndexes are set by ItemNavigation
 * @private
*/
sap.ui.table.Table.prototype._initItemNavigation = function() {

	var $this = this.$();

	// initialization of item navigation for the Column Headers
	if (!this._oColHdrItemNav) {
		this._oColHdrItemNav = new sap.ui.core.delegate.ItemNavigation();
		this._oColHdrItemNav.setCycling(false);
		this.addDelegate(this._oColHdrItemNav);
	}

	// configure the item navigation
	this._oColHdrItemNav.setRootDomRef($this.find(".sapUiTableColHdrScr").get(0));
	this._oColHdrItemNav.setItemDomRefs($this.find(".sapUiTableCol").get());

	// initialization of item navigation for the Row Headers
	if (!this._oRowHdrItemNav) {
		this._oRowHdrItemNav = new sap.ui.core.delegate.ItemNavigation();
		this._oRowHdrItemNav.setTableMode(true);
		this._oRowHdrItemNav.setColumns(1);
		this.addDelegate(this._oRowHdrItemNav);
	}

	// configure the item navigation
	this._oRowHdrItemNav.setRootDomRef($this.find(".sapUiTableRowHdrScr").get(0));
	this._oRowHdrItemNav.setItemDomRefs($this.find(".sapUiTableRowHdr td").get());

	// initialization of item navigation for the Table control
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setTableMode(true);
		this._oItemNavigation.setColumns(this.getColumns().length);
		this._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, function(oEvent) {
			this._repaintForWebkit();
		}, this);
		this.addDelegate(this._oItemNavigation);
	}

	// configure the item navigation
	this._oItemNavigation.setRootDomRef($this.find(".sapUiTableCtrlScr").get(0));
	this._oItemNavigation.setItemDomRefs($this.find(".sapUiTableCtrl td").get());

};

/**
 * destroys ItemNavigation
 * @private
*/
sap.ui.table.Table.prototype._destroyItemNavigation = function() {

	// destroy of item navigation for the Column Headers
	if (this._oColHdrItemNav) {
		this._oColHdrItemNav.destroy();
		this._oColHdrItemNav = undefined;
	}

	// destroy of item navigation for the Row Headers
	if (this._oRowHdrItemNav) {
		this._oRowHdrItemNav.destroy();
		this._oRowHdrItemNav = undefined;
	}

	// destroy of item navigation for the Table control
	if (this._oItemNavigation) {
		this._oItemNavigation.destroy();
		this._oItemNavigation = undefined;
	}

};



// =============================================================================
// PUBLIC TABLE API
// =============================================================================


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.rerender = function(bRecreateColumns) {
	if (bRecreateColumns) {
		this._createRows();
	}
	sap.ui.core.Control.prototype.rerender.apply(this, arguments);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setTitle = function(vTitle) {
	var oTitle = vTitle;
	if (typeof (vTitle) === "string" || vTitle instanceof String) {
		oTitle = new sap.ui.commons.TextView({
			text: vTitle
		}).addStyleClass("sapUiTableHdrTitle");
	}
	this.setAggregation("title", oTitle);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFooter = function(vFooter) {
	var oFooter = vFooter;
	if (typeof (vFooter) === "string" || vFooter instanceof String) {
		oFooter = new sap.ui.commons.TextView({
			text: vFooter
		});
	}
	this.setAggregation("footer", oFooter);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionMode = function(oSelectionMode) {
	this._oSelection.clearSelection();
	if (oSelectionMode === sap.ui.table.SelectionMode.Single) {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	} else {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.MULTI_SELECTION);
	}
	this.setProperty("selectionMode", oSelectionMode);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setRowHeight = function(iHeight) {
	this._bCustomRowHeight = true;
	this.setProperty("rowHeight", iHeight);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iHeight) {
	this._bCustomColHdrHeight = true;
	this.setProperty("columnHeaderHeight", iHeight);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iRowIndex, bOnScroll) {
	// check for being bound
	var bRowsBound = this.isBound("rows");
	// calculate the boundaries (at least 0 - max the row count - visible row count)
	iRowIndex = Math.max(iRowIndex, 0);
	if (bRowsBound) {
		iRowIndex = Math.min(iRowIndex, Math.max(this._getRowCount() - this.getVisibleRowCount(), 0));
	}
	// when not scrolling we update also the scroll position of the scrollbar
	if (!bOnScroll) {
		this._oVSb.setScrollPosition(iRowIndex);
	}
	// update the property
	this.setProperty("firstVisibleRow", iRowIndex, true);
	// update the bindings
	if (bRowsBound) {
		this.updateAggregation("rows");
	}
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iRowCount) {
	this.setProperty("visibleRowCount", iRowCount);
	if (this._bRendered && this.getFirstVisibleRow() + iRowCount >= this._getRowCount()) {
		// when we have more visible rows than rows we reset the first
		// visible row to the first one!
		this.setProperty("firstVisibleRow", Math.max(0, iRowCount - this.getFirstVisibleRow()));
	}
	this._createRows();
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.bindRows = function(sPath, oTemplate, oSorter, aFilters) {
	// bind the aggregation and return (we ignore the template!!)
	return this.bindAggregation("rows", sPath, {}, oSorter, aFilters);
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype._bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	sap.ui.core.Element.prototype._bindAggregation.apply(this, arguments);
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		oBinding.attachSort(this._onBindingSort, this);
		oBinding.attachFilter(this._onBindingFilter, this);
	}
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.unbindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		oBinding.detachSort(this._onBindingSort);
		oBinding.detachFilter(this._onBindingFilter);
	}
	return sap.ui.core.Element.prototype.unbindAggregation.apply(this, arguments);
};

/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
sap.ui.table.Table.prototype.updateRows = function(oBindingInfo, iStartIndex, iLength) {

	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? this.getFirstVisibleRow() : iStartIndex;

	// in case of the table is not being rendered (or in case of recreation)
	// it will create the rows for the rows aggregation based on the columns
	if (!this._bRendered) {
		this._createRows(iStartIndex);
	} else {
		// update the bindings
		this.updateRowsAfterOutput(oBindingInfo, iStartIndex, iLength);
	}

};


/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
sap.ui.table.Table.prototype.updateRowsAfterOutput = function(oBindingInfo, iStartIndex, iLength) {

	// update the bindings by using a delayed mechanism to avoid to many update
	// requests: by using the mechanism below it will trigger an update each
	// 50ms
	var that = this,
		$this = this.$(),
		oBinding = oBindingInfo.binding;

	// delayed update mechanism
	this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() {

		this._updateVSb();
		this._determineVisibleCols();
		this._updateBindingContexts();
		this._updateSelection();
		this._sBindingTimer = undefined;

	});

};

sap.ui.table.Table.prototype._onBindingSort = function(oEvent) {
	this.clearSelection();
	this.setFirstVisibleRow(0);
};

sap.ui.table.Table.prototype._onBindingFilter = function(oEvent) {
	this.clearSelection();
	this.setFirstVisibleRow(0);
};


sap.ui.table.Table.prototype.getFocusInfo = function() {
	var sId = this.$().find(":focus").attr("id");
	if (sId) {
		return {customId: sId};
	} else {
		return sap.ui.core.Element.prototype.getFocusInfo.apply(this, arguments);
	}
};

sap.ui.table.Table.prototype.applyFocusInfo = function(mFocusInfo) {
	if (mFocusInfo && mFocusInfo.customId) {
		jQuery.sap.log.warning(mFocusInfo.customId);
		this.$().find("#" + mFocusInfo.customId).focus();
	} else {
		sap.ui.core.Element.prototype.getFocusInfo.apply(this, arguments);
	}
	return this;
};


// =============================================================================
// EVENT HANDLING & CLEANUP
// =============================================================================

/**
 * attaches the required native event handlers
 * @private
 */
sap.ui.table.Table.prototype._attachEvents = function() {

	var $this = this.$();

	// listen to the scroll events of the containers (for keyboard navigation)
	$this.find(".sapUiTableColHdrScr").scroll(jQuery.proxy(this._oncolscroll, this));
	$this.find(".sapUiTableCtrlScr").scroll(jQuery.proxy(this._oncntscroll, this));

	// sync row header > content (hover effect)
	$this.find(".sapUiTableRowHdr > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = jQuery(".sapUiTableRowHdr > tbody > tr").index(this) + 2;
		jQuery(".sapUiTableCtrl > tbody > tr").filter(":nth-child(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		jQuery(".sapUiTableCtrl > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// sync content > row header (hover effect)
	$this.find(".sapUiTableCtrl > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = jQuery(".sapUiTableCtrl > tbody > tr").index(this);
		jQuery(".sapUiTableRowHdr > tbody > tr").filter(":nth-child(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		jQuery(".sapUiTableRowHdr > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// listen to the resize handlers
	$this.find(".sapUiTableColRsz").mousedown(jQuery.proxy(this._onColumnResizeStart, this));

	// listen to resize events of the browser (or surrounding DOM elements)
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));

	// the vertical scrollbar listens to the mousewheel on the content section
	this._oVSb.bind($this.find(".sapUiTableCtrlScr").get(0));

};

/**
 * detaches the required native event handlers
 * @private
 */
sap.ui.table.Table.prototype._detachEvents = function() {

	var $this = this.$();

	$this.find(".sapUiTableRowHdrScr").unbind();
	$this.find(".sapUiTableColHdrScr").unbind();

	$this.find(".sapUiTableCtrl > tbody > tr").unbind();
	$this.find(".sapUiTableRowHdr > tbody > tr").unbind();

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	$this.find(".sapUiTableColRsz").unbind();

	this._oVSb.unbind($this.find(".sapUiTableCtrlScr").get(0));

};

/**
 * cleanup the timers when not required anymore
 * @private
 */
sap.ui.table.Table.prototype._cleanUpTimers = function() {

	if (this._sBindingTimer) {
		jQuery.sap.clearDelayedCall(this._sBindingTimer);
		this._sBindingTimer = undefined;
	}

	if (this._sRenderingTimer) {
		jQuery.sap.clearDelayedCall(this._sRenderingTimer);
		this._sRenderingTimer = undefined;
	}

	if (this._sDelayedActionTimer) {
		jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
		this._sDelayedActionTimer = undefined;
	}

	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
		this._sColHdrPosTimer = undefined;
	}

};


// =============================================================================
// PRIVATE TABLE STUFF
// =============================================================================

/**
 * returns the height of the inner table control
 * @private
 */
sap.ui.table.Table.prototype._getHeight = function() {
	var iHeight = this.getRowHeight() * this.getVisibleRowCount();
	return iHeight;
};

/**
 * creates the rows for the rows aggregation
 * @private
 */
sap.ui.table.Table.prototype._createRows = function(iStartIndex) {

	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? this.getFirstVisibleRow() : iStartIndex;

	// create the new template
	var oTemplate = new sap.ui.table.Row();
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		oTemplate.addCell(aCols[i].getTemplate().clone("col" + i));
	}

	// initially called without iStartIndex and iLength
	this.destroyRows();
	var aRows = [];
	var aContexts = undefined;
	if (this.isBound("rows")) {
		aContexts = this.getBinding("rows").getContexts(iStartIndex, iStartIndex + this.getVisibleRowCount(), this._bThreshold ? this.getVisibleRowCount() * 2 : undefined);
	}
	for (var i = 0; i < this.getVisibleRowCount(); i++) {
		var oClone = oTemplate.clone("row" + i + "-" + this.getId());
		if (aContexts && aContexts[i]) {
			oClone.setBindingContext(aContexts[i]);
			oClone._bHidden = false;
		} else {
			oClone._bHidden = true;
		}
		this.addRow(oClone);
	}

	// destroy the template
	oTemplate.destroy();

};


/**
 * updates the horizontal scrollbar
 * @private
 */
sap.ui.table.Table.prototype._updateHSb = function() {

	// get the width of the container
	var $this = this.$();

	// apply the new content size
	var iColsWidth = $this.find(".sapUiTableCtrl").width();
	this._oHSb.setContentSize(iColsWidth + "px");

	// add the horizontal scrollbar
	if (iColsWidth > $this.find(".sapUiTableCtrlScr").width()) {
		// show the scrollbar
		$this.addClass("sapUiTableHScr");
	} else {
		// hide the scrollbar
		$this.removeClass("sapUiTableHScr");
	}

};


/**
 * updates the vertical scrollbar
 * @private
 */
sap.ui.table.Table.prototype._updateVSb = function() {
	var $this = this.$();
	var bDoResize = false;
	if (this.isBound("rows")) {
		var iSteps = Math.max(0, this.getBinding("rows").getLength() - this.getVisibleRowCount());
		if (iSteps) {
			if (!$this.hasClass("sapUiTableVScr")) {
				$this.addClass("sapUiTableVScr");
				bDoResize = true;
			}
		} else {
			if ($this.hasClass("sapUiTableVScr")) {
				$this.removeClass("sapUiTableVScr");
				bDoResize = true;
			}
		}
		// update the scrollbar only if it is required
		if (iSteps !== this._oVSb.getSteps() || this.getFirstVisibleRow() !== this._oVSb.getScrollPosition()) {
			this._oVSb.setSteps(iSteps);
			this._oVSb.rerender();
			this._oVSb.setScrollPosition(this.getFirstVisibleRow());
		}
	}
	if (bDoResize && !this._bOnAfterRendering) {
		this._handleResize();
	}
};


/**
 * updates the binding contexts of the currently visible controls
 * @private
 */
sap.ui.table.Table.prototype._updateBindingContexts = function(aContexts) {

	var aRows = this.getRows();
	var aContexts = this.getBinding("rows").getContexts(this.getFirstVisibleRow(), aRows.length, this._bThreshold ? aRows.length * 2 : undefined);

	// update the binding contexts only for the visible columns
	for (var iIndex = 0, iLength = this.getRows().length; iIndex < iLength; iIndex++) {
	//for (var iIndex = aRows.length - 1; iIndex >= 0; iIndex--) {
		var oContext = aContexts[iIndex];
		var oRow = aRows[iIndex];
		if (oRow) {
			var aCells = oRow.getCells();
			var $row = aCells[0].$().parents("tr").first();
			if (oContext) {
				for (var col = this._iFirstCol, l = this._iLastCol + 1; col < l; col++) {
					aCells[col].setBindingContext(oContext);
					//if (col == 0) jQuery.sap.log.warning(aCells[col].getId() + "  => " + aCells[col].getDomRef().innerHTML);
				}
				if ($row.hasClass("sapUiTableRowHidden")) {
					$row.removeClass("sapUiTableRowHidden");
				}
				oRow._bHidden = false;
			} else {
				if (!$row.hasClass("sapUiTableRowHidden")) {
					$row.addClass("sapUiTableRowHidden");
				}
				oRow._bHidden = true;
			}
		}
	}

	this._repaintForWebkit();

};


/**
 * determines the currently visible columns (used for simply updating only the
 * controls of the visible columns instead of the complete row!)
 * @private
 */
sap.ui.table.Table.prototype._determineVisibleCols = function() {

	// determine the visible colums
	var $this = this.$();

	if ($this.hasClass("sapUiTableHScr")) {

		// calculate the view port
		var iScrollLeft = this._getScrollLeft();
		var iScrollRight = iScrollLeft + this._getScrollWidth();

		// has the view port changed?
		if (this._iOldScrollLeft !== iScrollLeft || this._iOldScrollRight !== iScrollRight) {

			// calculate the first and last visible column
			var bRtl = this._bRtlMode;
			var iLeft = bRtl ? $this.find(".sapUiTableCtrl").width() : 0;
			this._iFirstCol = undefined;
			this._iLastCol = undefined;
			var that = this;
			$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
				var iWidth = jQuery(oElement).width();
				if (bRtl) {
					iLeft -= iWidth;
				}
				if (iLeft + iWidth >= iScrollLeft && iLeft <= iScrollRight) {
					if (that._iFirstCol === undefined) {
						that._iFirstCol = iIndex;
					}
					that._iLastCol = iIndex;
				}
				if (!bRtl) {
					iLeft += iWidth;
				}
			});
			this._iLastCol = Math.min(this._iLastCol, this.getColumns().length);

			// keep the view port information (performance!!)
			this._iOldScrollLeft = iScrollLeft;
			this._iOldScrollRight = iScrollRight;

		}

	} else {

		this._iFirstCol = 0;
		this._iLastCol = this.getColumns().length - 1;

	}

};

/**
 * since webkit browsers have an optimized painting mechanism we need to force
 * the rerendering of the complete element (reconsider if this would be ok)
 * Google for: "Force-redraw DOM technique for WebKit-based browsers" to find the page!
 * @private
 */
sap.ui.table.Table.prototype._repaintForWebkit = function() {
	var $this = this.$();
	if (jQuery.browser.webkit && $this.css("-webkit-transform") === "none") {
		var sOutline = $this.css("outline");
		$this.css("outline", "none").css("-webkit-transform", "scale(1)");
		// since the line above will draw a strange focus rect we set this
		// option back to none transform
		jQuery.sap.delayedCall(0, $this, function() {
			this.css("-webkit-transform", "none").css("outline", sOutline);
		});
	}
};

/**
 * returns the count of rows when bound or 0
 * @private
 */
sap.ui.table.Table.prototype._getRowCount = function() {
	if (this.isBound("rows")) {
		return this.getBinding("rows").getLength();
	} else {
		return 0;
	}
};


/**
 * returns the current scroll left position of the horizontal scrollbar
 * @private
 */
sap.ui.table.Table.prototype._getScrollLeft = function() {
	if (this.$().hasClass("sapUiTableHScr")) {
		var iScrollPos = this._oHSb.getScrollPosition() || 0;
		if (jQuery.browser.mozilla && this._bRtlMode) {
			iScrollPos = iScrollPos * -1;
		}
		return iScrollPos;
	} else {
		return 0;
	}
};

/**
 * sets the current scroll left position of the horizontal scrollbar
 * @private
 */
sap.ui.table.Table.prototype._setScrollLeft = function(iLeft) {
	if (jQuery.browser.mozilla && this._bRtlMode) {
		iLeft = iLeft * -1;
	}
	this._oHSb.setScrollPosition(iLeft);
};

/**
 * returns the current top scroll position of the scrollbar (row number)
 * @private
 */
sap.ui.table.Table.prototype._getScrollTop = function() {
	if (this.$().hasClass("sapUiTableVScr")) {
		return this._oVSb.getScrollPosition() || 0;
	} else {
		return 0;
	}
};

/**
 * returns the width of the table scroll container
 * @private
 */
sap.ui.table.Table.prototype._getScrollWidth = function() {
	return this.$().find(".sapUiTableCtrlScr").width();
};

/**
 * returns the height of the table scroll container
 * @private
 */
sap.ui.table.Table.prototype._getScrollHeight = function() {
	return this.$().find(".sapUiTableCtrlScr").height();
};


/**
 * calculates the width of the columns by using the browsers calculation
 * mechanism and setting a fix width to the columns
 * @private
 */
sap.ui.table.Table.prototype._handleResize = function() {

	//var millis = new Date();
	var $this = this.$();

	// reset the table width to the maximal width without scrollbar
	var iTableWidth = $this.find(".sapUiTableCtrl").width();

	// first calculate the min width of the table for all columns
	var aCols = this.getColumns();
	var iColsWidth = 0;
	for (var i = 0, l = aCols.length; i < l; i++) {
		var sWidth = aCols[i].getWidth();
		var fWidth = parseFloat(sWidth);
		if (jQuery.sap.endsWith(sWidth, "px")) {
			iColsWidth += fWidth;
		} else if (jQuery.sap.endsWith(sWidth, "%")) {
			iColsWidth += fWidth * iTableWidth / 100;
		} else {
			// for unknown width we use the min width
			iColsWidth += /* aCols[i].getMinWidth() || */ this._iColMinWidth;
		}
	}

	// performance optimization! when the screen is smaller than the columns
	// total width we do not recalculate the width anymore!! not needed!!
	if (!this._bOnAfterRendering && iColsWidth > window.screen.width) {
		return;
	}

	// reset the table width to the maximal width without scrollbar
	iTableWidth = $this.find(".sapUiTableCtrlScr").width();

	// FYI: table-layout: fixed => allows overflow: hidden for TD's!
	//      but for the determination of the width we need table-layout: auto!

	// we have two options now (columns are wider than the possible table width)
	if (iColsWidth > iTableWidth) {

		// HORIZONTAL SCROLLING:
		// if the columns are wider the table control will get this width
		$this.find(".sapUiTableCtrl").width(iColsWidth);

		// set the width of the columns in the first invisible row of the table
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			jQuery(oElement).width(aCols[iIndex].getWidth() || /* aCols[iIndex].getMinWidth() || */ "auto");
		});

		// calculate and apply the real width
		iColsWidth = 0;
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			iColsWidth += jQuery(oElement).width();
		});

	} else {

		// "NO" HORIZONTAL SCROLLING:
		// if the table is wider than the columns - the cells will define the length
		$this.find(".sapUiTableCtrl").width(iTableWidth);

		// set the width of the columns in the first invisible row of the table
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			// columns with a fixed with and beeing flexible will also get the auto size
			// to expand dynamically their width!
			if (aCols[iIndex].getWidth() && !aCols[iIndex].getFlexible()) {
				jQuery(oElement).width(aCols[iIndex].getWidth());
			} else {
				jQuery(oElement).width("auto");
			}
		});

		// we set the width of the columns to guarantee pixel perfect alignment
		// of the columns - especially for IE this is important!!
		iColsWidth = 0;
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			iColsWidth += jQuery(oElement).width();
			jQuery(oElement).width(jQuery(oElement).width());
		});
	}

	// apply the total width of all columns to the table again
	$this.find(".sapUiTableCtrl").width(iColsWidth);

	// update the horizontal scrollbar
	this._updateHSb();

	// finally we take the width of the columns and apply them to the column headers
	var iNewTableWidth = Math.max(iColsWidth, iTableWidth) + $this.find(".sapUiTableVSb").width();
	$this.find(".sapUiTableColHdr").width(iNewTableWidth);

	// update the positions of the resize handlers
	this._updateColumnHeader();
	//jQuery.sap.log.warning("_handleResize: " + (new Date() - millis) + "ms");

};

/**
 * updates the column headers (width and position of the resize handles)
 * @private
 */
sap.ui.table.Table.prototype._updateColumnHeader = function(bUpdateResizeHandlers) {
	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
	}
	var bRtl = this._bRtlMode;
	var iLeftAway = this._bRtlMode ? "99000px" : "-99000px";
	this._sColHdrPosTimer = jQuery.sap.delayedCall(this._bOnAfterRendering ? 0 : 250, this, function() {
		var that = this, $this = this.$();
		var $cols = $this.find(".sapUiTableColHdrScr .sapUiTableCol");
		var iTableWidth = $this.width();
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			// apply the width of the column
			var iWidth = jQuery(oElement).width();
			var $col = jQuery($cols.get(iIndex));
			if ($col.length > 0) {
				if (!bUpdateResizeHandlers) {
					$col.width(iWidth);
				}
				// the left position is calculated from the sapUiTableCnt element (therefore we need the offset!)
				var iLeft = $col.position().left + (bRtl ? -2 : iWidth - 3);
				// PERF-OPT: only positon the visible resize handlers
				var $colrsz = jQuery.sap.byId($col.attr("id") + "-rsz");
				if (iLeft >= 0 && iLeft <= iTableWidth) {
					$colrsz.css({
						"left": iLeft
					});
				} else if ($colrsz.css("left") !== iLeftAway) {
					$colrsz.css({
						"left": iLeftAway
					});
				}
			}
		});
		this._sColHdrPosTimer = undefined;
	});
};

/**
 * disables text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.table.Table.prototype._disableTextSelection = function () {
	jQuery(document.body).
		attr("unselectable", "on").
		css({
			"cursor": "col-resize",
			"-moz-user-select": "none",
			"-webkit-user-select": "none",
			"user-select": "none"
        }).
		bind("selectstart", function() {
			return false;
		});
};

/**
 * enables text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.table.Table.prototype._enableTextSelection = function () {
	jQuery(document.body).
		attr("unselectable", "off").
		css({
			"cursor": "",
			"-moz-user-select": "",
			"-webkit-user-select": "",
			"user-select": ""
        }).
		unbind("selectstart");
};


// =============================================================================
// CONTROL EVENT HANDLING
// =============================================================================

/**
 * will be called by the ResizeHandler listening to size changes of the table
 * control depending on the DOM element or window size changes.
 * @private
 */
sap.ui.table.Table.prototype.onresize = function(oEvent) {
	this._handleResize();
	if (this.isBound("rows")) {
		this.updateAggregation("rows");
	}
};

/**
 * will be called by the vertical scrollbar. updates the visualized data by
 * applying the first visible (scrollpos) row from the vertical scrollbar
 * @private
 */
sap.ui.table.Table.prototype.onvscroll = function(oEvent) {
	// do not scroll in action mode!
	this._leaveActionMode();
	// set the first visible row
	this.setFirstVisibleRow(this._getScrollTop(), true);
};

/**
 * will be called when the horizontal scrollbar is used. since the table does
 * not render/update the data of all columns (only the visible ones) in case
 * of scrolling horizontally we need to update the content of the columns which
 * became visible.
 * @private
 */
sap.ui.table.Table.prototype.onhscroll = function(oEvent) {

	if (!this._bOnAfterRendering) {

		var $this = this.$();

		// synchronize the scroll areas
		var iScrollLeft = this._getScrollLeft();
		this._bSyncScrollLeft = true;
		$this.find(".sapUiTableColHdrScr").scrollLeft(iScrollLeft);
		$this.find(".sapUiTableCtrlScr").scrollLeft(iScrollLeft);
		this._bSyncScrollLeft = false;

		// update the column headers (resize handles)
		this._updateColumnHeader(true);

		// update the bindings
		if (this.isBound("rows")) {
			this.updateAggregation("rows");
		}

	}

};

/**
 * when navigating within the column header we need to synchronize the content
 * area with the position (scrollLeft) of the column header.
 * @private
 */
sap.ui.table.Table.prototype._oncolscroll = function(oEvent) {
	if (!this._bSyncScrollLeft) {
		var $cnt = this.$().find(".sapUiTableColHdrScr");
		this._setScrollLeft($cnt.scrollLeft());
	}
};

/**
 * when navigating within the content area we need to synchronize the column
 * header with the position (scrollLeft) of the content area.
 * @private
 */
sap.ui.table.Table.prototype._oncntscroll = function(oEvent) {
	if (!this._bSyncScrollLeft) {
		var $cnt = this.$().find(".sapUiTableCtrlScr");
		this._setScrollLeft($cnt.scrollLeft());
	}
};


/**
 * listens to the mousedown events for starting column drag & drop. therefore
 * we wait 200ms to make sure it is no click on the column to open the menu.
 * @private
 */
sap.ui.table.Table.prototype.onmousedown = function(oEvent) {

	this._bShowMenu = true;

	if (this.getAllowColumnReordering()) {
		var $target = jQuery(oEvent.target);
		var $col = $target.closest(".sapUiTableCol");
		if ($col.length === 1) {

			var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
			var oColumn = this.getColumns()[iIndex];

			this._sDelayedActionTimer = jQuery.sap.delayedCall(200, this, function() {

				this._bShowMenu = false;

				this._onColumnMoveStart(oColumn);

			});

		}
	}

};

/**
 * controls the action mode when clicking into the table control
 * @private
 */
sap.ui.table.Table.prototype.onmouseup = function(oEvent) {
	if (this.$().find(".sapUiTableCtrl td :focus").length > 0) {
		// when clicking into a focusable control we enter the action mode!
		this._enterActionMode(this.$().find(".sapUiTableCtrl td :focus").get(0));
	} else {
		// when clicking anywhere else in the table we leave the action mode!
		this._leaveActionMode(oEvent);
	}
};

/**
 * handles the selection when clicking on the table
 * @private
 */
sap.ui.table.Table.prototype.onclick = function(oEvent) {
	// clean up the timer
	jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
	// forward the event
	this._onSelect(oEvent);
};

/**
 * handles the focus in to reposition the focus or prevent default handling for
 * column resizing
 * @private
 */
sap.ui.table.Table.prototype.onfocusin = function(oEvent) {
	var $target = jQuery(oEvent.target);
	// KEYBOARD HANDLING (_bIgnoreFocusIn is set in onsaptabXXX)
	if (!this._bIgnoreFocusIn && ($target.hasClass("sapUiTableCtrlBefore") || $target.hasClass("sapUiTableCtrlAfter"))) {
		// when entering the before or after helper DOM elements we put the
		// focus on the current focus element of the item navigation and we
		// leave the action mode!
		this._leaveActionMode();
		// set the focus on the last focused dom ref of the item navigation or
		// in case if not set yet (tab previous into item nav) then we set the
		// focus to the root domref
		jQuery(this._oItemNavigation.getFocusedDomRef() || this._oItemNavigation.getRootDomRef()).focus();
	} else if (jQuery.sap.endsWith(oEvent.target.id, "-rsz")) {
		// prevent that the ItemNavigation grabs the focus!
		// only for the column resizing
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};


// =============================================================================
// SELECTION HANDLING
// =============================================================================

/**
 * handles the row selection and the column header menu
 * @private
 */
sap.ui.table.Table.prototype._onSelect = function(oEvent) {

	var $this = this.$();

	// trigger column menu
	var $target = jQuery(oEvent.target);

	// column header?
	var $col = $target.closest(".sapUiTableCol");
	if (this._bShowMenu && $col.length === 1) {
		var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
		var oColumn = this.getColumns()[iIndex];
		this._onColumnSelect(oColumn);
		return;
	}

	// row header?
	var $row = $target.closest(".sapUiTableRowHdr tr");
	if ($row.length === 1) {
		var iIndex = parseInt($row.attr("data-sap-ui-rowindex"), 10);
		this._onRowSelect(this.getFirstVisibleRow() + iIndex);
		return;
	}

	// table control?
//	var $row = $target.closest(".sapUiTableCtrl tr");
//	if ($row.length === 1) {
//		var iIndex = parseInt($row.attr("data-sap-ui-rowindex"), 10);
//		this._onRowSelect(this.getFirstVisibleRow() + iIndex);
//		return;
//	}

	// select all?
	if ($target.attr("id") === this.getId() + "-selall") {
		if (this._getRowCount() === this.getSelectedIndices().length) {
			this.clearSelection();
		} else {
			this.selectAll();
		}
		return;
	}

};


// =============================================================================
// ROW EVENT HANDLING
// =============================================================================

/**
 * handles the row selection (depending on the mode)
 * @private
 */
sap.ui.table.Table.prototype._onRowSelect = function(iRowIndex) {

	var oSelMode = this.getSelectionMode();
	if (oSelMode !== sap.ui.table.SelectionMode.None) {
		if (oSelMode === sap.ui.table.SelectionMode.Single) {
			if (!this.isIndexSelected(iRowIndex)) {
				this.setSelectedIndex(iRowIndex);
			} else {
				this.clearSelection();
			}
		} else {
			if (!this.isIndexSelected(iRowIndex)) {
				this.addSelectionInterval(iRowIndex, iRowIndex);
			} else {
				this.removeSelectionInterval(iRowIndex, iRowIndex);
			}
		}
	}

};


// =============================================================================
// COLUMN EVENT HANDLING
// =============================================================================

/**
 * column select event => opens the column menu
 * @private
 */
sap.ui.table.Table.prototype._onColumnSelect = function(oColumn) {

	// forward the event
	var bExecuteDefault = this.fireEvent("columnSelect", {
		column: oColumn
	}, true /* allow preventDefault() */);

	// if the default behavior should be prevented we suppress to open
	// the column menu!
	if (bExecuteDefault) {
		oColumn._openMenu();
	}

};

/**
 * start column moveing
 * @private
 */
sap.ui.table.Table.prototype._onColumnMoveStart = function(oColumn) {

	this._disableTextSelection();

	var $col = oColumn.$();

	this._$colGhost = $col.clone().removeAttr("id");

	$col.css({
		"backgroundColor": "white",
		"backgroundImage": "none",
		"opacity": ".5"
	});

	this._$colGhost.css({
		"position": "absolute",
		"width": "auto",
		"border": "1px solid red",
		"backgroundColor": "white",
		"left": -10000,
		"top": -10000,
		"cursor": "pointer"
	});

	this.$().find(".sapUiTableCol").each(function(iIndex, oElement) {

		var $col = jQuery(this);
		$col.css({position: "relative"});

		$col.data("pos", {
			left: $col.position().left,
			center: $col.position().left + $col.outerWidth() / 2,
			right:  $col.position().left + $col.outerWidth()
		});

	});

	this._$colGhost.appendTo(document.body);

	jQuery(document.body).
		mousemove(jQuery.proxy(this._onColumnMove, this)).
		mouseup(jQuery.proxy(this._onColumnMoved, this));

};

/**
 * move the column position the ghost
 * @private
 */
sap.ui.table.Table.prototype._onColumnMove = function(oEvent) {

	var $this = this.$();
	var bRtl = this._bRtlMode;
	var iRelX = oEvent.pageX - $this.offset().left;
	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var $DnDCol = this.getColumns()[iDnDColIndex].$();

	// find out the new col position
	var iOldColPos = this._iNewColPos;
	this._iNewColPos = iDnDColIndex;
	var that = this;
	$this.find(".sapUiTableCol").each(function(iIndex, oCol) {

		var $col = jQuery(oCol);
		var iColIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);

		if ($col.get(0) !== $DnDCol.get(0)) {

			var oPos = $col.data("pos");

			var bBefore = iRelX >= oPos.left && iRelX <= oPos.center;
			var bAfter = iRelX >= oPos.center && iRelX <= oPos.right;

			if (!bRtl) {
				that._iNewColPos = bBefore ? iColIndex : bAfter ? iColIndex + 1 : that._iNewColPos;
			} else {
				that._iNewColPos = bAfter ? iColIndex : bBefore ? iColIndex + 1 : that._iNewColPos;
			}

			if ((bBefore || bAfter) && iColIndex > iDnDColIndex) {
				that._iNewColPos--;
			}

		}

	});

	// position has been changed => reorder
	if (iOldColPos !== this._iNewColPos) {

		for (var i = Math.min(iOldColPos, this._iNewColPos), l = Math.max(iOldColPos, this._iNewColPos); i <= l; i++) {
			if (i !== iDnDColIndex) {
				this.getColumns()[i].$().stop(true, true).animate({left: "0px"});
			}
		}

		var iOffsetLeft = 0;
		if (this._iNewColPos < iDnDColIndex) {
			for (var i = this._iNewColPos; i < iDnDColIndex; i++) {
				var $col = this.getColumns()[i].$();
				iOffsetLeft -= $col.outerWidth();
				$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? -1 : 1) + "px"});
			}
		} else {
			for (var i = iDnDColIndex + 1, l = this._iNewColPos + 1; i < l; i++) {
				var $col = this.getColumns()[i].$();
				iOffsetLeft += $col.outerWidth();
				$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? 1 : -1) + "px"});
			}
		}
		$DnDCol.stop(true, true).animate({left: iOffsetLeft * (bRtl ? -1 : 1) + "px"});

	}

	this._$colGhost.css({
		"left": oEvent.pageX - 1,
		"top": oEvent.pageY - 1
	});

};

/**
 * columns is moved => update!
 * @private
 */
sap.ui.table.Table.prototype._onColumnMoved = function(oEvent) {

	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var oDnDCol = this.getColumns()[iDnDColIndex];

	jQuery(document.body).
		unbind("mousemove", this._onColumnMove).
		unbind("mouseup", this._onColumnMoved);

	oDnDCol.focus(); // TODO: update ItemNavigation position

	this._$colGhost.remove();
	this._$colGhost = undefined;

	this._enableTextSelection();

	if (this._iNewColPos !== undefined && this._iNewColPos !== iDnDColIndex) {
		this.removeColumn(oDnDCol);
		this.insertColumn(oDnDCol, this._iNewColPos);
		this._iNewColPos = undefined;
		this._createRows();
	} else {
		oDnDCol.$().css({
			"backgroundColor": "",
			"backgroundImage": "",
			"opacity": ""
		});
	}

};

/**
 * start the column resize
 * @private
 */
sap.ui.table.Table.prototype._onColumnResizeStart = function(oEvent) {

	this._disableTextSelection();
	this._$colResize = jQuery(oEvent.target).addClass("sapUiTableColRszActive");

	jQuery(document.body).
		mousemove(jQuery.proxy(this._onColumnResize, this)).
		mouseup(jQuery.proxy(this._onColumnResized, this));

};

/**
 * resize the column
 * @private
 */
sap.ui.table.Table.prototype._onColumnResize = function(oEvent) {

	var $this = this.$();

	var bRtl = this._bRtlMode;
	var iColIndex = parseInt(this._$colResize.attr("data-sap-ui-colindex"), 10);
	var oColumn = this.getColumns()[iColIndex];
	var $col = oColumn.$();

	// find the total left offset from the document (required for pageX info)
	var iOffsetLeft = $this.find(".sapUiTableCnt").offset().left;

	// relative left position within the table scroll container
	var iRelLeft = oEvent.pageX - iOffsetLeft;

	// get the left position of the column to calculate the new width
	// relative to the parent container (sapUiTableCnt)!
	var iColLeft = $col.position().left;

	// calculate the new width
	var iPos = iRelLeft - iColLeft;

	// check the boundaries for the column width
	var iWidth = bRtl ? $col.outerWidth() - iPos : iPos;
	iWidth = Math.max(iWidth, /* oColumn.getMinWidth() || */ this._iColMinWidth);
	//iWidth = Math.min(iWidth, oColumn.getMaxWidth() || iWidth);

	// calculate and set the position of the resize handle
	var iRszLeft = iColLeft + (bRtl ? $col.outerWidth() - iWidth : iWidth);
	iRszLeft -= (this._$colResize.width() - 2) / 2;
	this._$colResize.css("left", iRszLeft);

	// store the width of the column
	oColumn.setProperty("width", iWidth + "px", true);

};

/**
 * column is resized => update!
 * @private
 */
sap.ui.table.Table.prototype._onColumnResized = function(oEvent) {

	this._onColumnResize(oEvent);

	jQuery(document.body).
		unbind("mousemove", this._onColumnResize).
		unbind("mouseup", this._onColumnResized);

	var iColIndex = parseInt(this._$colResize.attr("data-sap-ui-colindex"), 10);
	var oColumn = this.getColumns()[iColIndex];
	oColumn.focus(); // TODO: update ItemNavigation position

	this._$colResize.removeClass("sapUiTableColRszActive");
	this._$colResize = undefined;
	this._enableTextSelection();

	this.invalidate();


};


// =============================================================================
// SELECTION HANDLING
// =============================================================================

/**
 * updates the visual selection in the HTML markup
 */
sap.ui.table.Table.prototype._updateSelection = function() {
	var $this = this.$();
	var iFirstRow = this.getFirstVisibleRow();
	var that = this;
	var oResBundle = this._oResBundle;
	$this.find(".sapUiTableRowHdr tr").each(function(iIndex, oElement) {
		if (that.isIndexSelected(iFirstRow + iIndex)) {
			jQuery(this).addClass("sapUiTableRowSel").
				attr("title", oResBundle.getText("TBL_ROW_DESELECT")).
				attr("aria-selected", "true");
			jQuery($this.find(".sapUiTableCtrl tr").get(iIndex + 1)).addClass("sapUiTableRowSel").
				attr("aria-selected", "true");
		} else {
			jQuery(this).removeClass("sapUiTableRowSel").
				attr("title", oResBundle.getText("TBL_ROW_SELECT")).
				removeAttr("aria-selected");
			jQuery($this.find(".sapUiTableCtrl tr").get(iIndex + 1)).removeClass("sapUiTableRowSel").
				removeAttr("aria-selected");
		}
	});
};


/**
 * handles and delegates the selection events
 */
sap.ui.table.Table.prototype._onSelectionChange = function(oEvent) {
	if (this._oSelection) {
		var iLeadIndex = this._oSelection.getLeadSelectedIndex();
		this.fireRowSelectionChange({
			rowIndex: iLeadIndex,
			rowContext: this.getContextByIndex(iLeadIndex),
			rowIndices: this._oSelection.getSelectedIndices()
		});
	}
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) {
	// TODO: ODataListBinding needs to make sure to prevent loading multiple times
	// index must not be smaller than 0! otherwise the ODataModel fails
	return iIndex >= 0 && this.isBound("rows") ? this.getBinding("rows").getContexts(iIndex, 1)[0] : undefined;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() {
	return this._oSelection.getLeadSelectedIndex();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iIndex) {
	this._oSelection.setSelectionInterval(iIndex, iIndex);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.clearSelection = function() {
	this._oSelection.clearSelection();
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.selectAll = function() {
	if (this.isBound("rows")) {
		this._oSelection.setSelectionInterval(0, this.getBinding("rows").getLength() - 1);
	}
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() {
	return this._oSelection.getSelectedIndices();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.addSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.setSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.removeSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) {
	return this._oSelection.isSelectedIndex(iIndex);
};


// =============================================================================
// KEYBOARD HANDLING HELPERS
// =============================================================================

/**
 * scrolls down a single row
 * @private
 */
sap.ui.table.Table.prototype._scrollNext = function() {
	// we are at the end => scroll one down if possible
	if (this.getFirstVisibleRow() < this._getRowCount() - this.getVisibleRowCount()) {
		this.setFirstVisibleRow(Math.min(this.getFirstVisibleRow() + 1, this._getRowCount() - this.getVisibleRowCount()));
	}
};

/**
 * scrolls up a single row
 * @private
 */
sap.ui.table.Table.prototype._scrollPrevious = function() {
	// we are at the beginning => scroll one up if possible
	if (this.getFirstVisibleRow() > 0) {
		this.setFirstVisibleRow(Math.max(this.getFirstVisibleRow() - 1, 0));
	}
};

/**
 * scrolls down a up page
 * @private
 */
sap.ui.table.Table.prototype._scrollPageUp = function() {
	this.setFirstVisibleRow(Math.max(this.getFirstVisibleRow() - this.getVisibleRowCount(), 0));
};

/**
 * scrolls down a complete page
 * @private
 */
sap.ui.table.Table.prototype._scrollPageDown = function() {
	this.setFirstVisibleRow(Math.min(this.getFirstVisibleRow() + this.getVisibleRowCount(), this._getRowCount() - this.getVisibleRowCount()));
};

/**
 * checks if the current target domref is in the first row of the table
 * @private
 */
sap.ui.table.Table.prototype._isTopRow = function(oEvent) {
	var $target = jQuery(oEvent.target);
	return ($target.parent().attr("data-sap-ui-rowindex") == 0);
};

/**
 * checks if the current target domref is in the last row of the table
 * @private
 */
sap.ui.table.Table.prototype._isBottomRow = function(oEvent) {
	var $target = jQuery(oEvent.target);
	return ($target.parent().attr("data-sap-ui-rowindex") == this.getVisibleRowCount() - 1);
};


/**
 * enters the action mode. in the action mode the user can navigate through the
 * interactive controls of the table by using the TAB & SHIFT-TAB. this table is
 * aligned with the official WAI-ARIA 1.0.
 * @private
 */
sap.ui.table.Table.prototype._enterActionMode = function(oDomRef) {
	// only enter the action mode when not already in action mode and:
	if (oDomRef && !this._bActionMode) {

		// in the action mode we need no item navigation
		this._bActionMode = true;
		this.removeDelegate(this._oItemNavigation);

		// remove the tab index from the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "-1");

		// set the focus to the active control
		jQuery(oDomRef).focus();

	}
};

/**
 * leaves the action mode and enters the navigation mode. in the navigation mode
 * the user can navigate through the cells of the table by using the arrow keys,
 * page up & down keys, home and end keys. this table is aligned with the
 * official WAI-ARIA 1.0.
 * @private
 */
sap.ui.table.Table.prototype._leaveActionMode = function(oEvent) {

 // TODO: update ItemNavigation position otherwise the position is strange!
 //        EDIT AN SCROLL!

	if (this._bActionMode) {

		// in the navigation mode we use the item navigation
		this._bActionMode = false;
		this.addDelegate(this._oItemNavigation);

		// reset the tabindex of the focused domref of the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "0");

		// when we have an event which is responsible to leave the action mode
		// we search for the closest
		if (oEvent) {
			if (jQuery(oEvent.target).closest("td[tabindex=-1]").length > 0) {
				// triggered when clicking into a cell, then we focus the cell
				var iIndex = jQuery(this._oItemNavigation.aItemDomRefs).index(jQuery(oEvent.target).closest("td[tabindex=-1]").get(0));
				this._oItemNavigation.focusItem(iIndex, null);
			} else {
				// somewhere else means whe check if the click happend inside
				// the container, then we focus the last focused element
				// (DON'T KNOW IF THIS IS OK - but we don't know where the focus was!)
				if (jQuery.sap.containsOrEquals(this.$().find(".sapUiTableCtrl").get(0), oEvent.target)) {
					this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
				}
			}
		} else {
			// when no event is given we just focus the last focused index
			this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
		}

	}
};


// =============================================================================
// KEYBOARD HANDLING EVENTS
// =============================================================================

// FYI: two more relevant things are handled in the onclick and onfocusin event

/**
 * handle the row selection via SPACE or ENTER key
 * @private
 */
sap.ui.table.Table.prototype.onsapselectmodifiers = 
sap.ui.table.Table.prototype.onsapselect = function(oEvent) {
	this._bShowMenu = true;
	this._onSelect(oEvent);
	this._bShowMenu = false;
};

/**
 * handle the row selection via SPACE or ENTER key
 * @private
 */
sap.ui.table.Table.prototype.onkeydown = function(oEvent) {
	var $this = this.$();
	if (!this._bActionMode &&
		oEvent.keyCode == jQuery.sap.KeyCodes.F2 ||
		oEvent.keyCode == jQuery.sap.KeyCodes.ENTER) {
		if ($this.find(".sapUiTableCtrl td:focus").length > 0) {
			this._enterActionMode($this.find(".sapUiTableCtrl td:focus :focusable").get(0));
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};

/**
 * handle the ESCAPE key to leave the action mode
 * @private
 */
sap.ui.table.Table.prototype.onsapescape = function(oEvent) {
	this._leaveActionMode(oEvent);
};

/**
 * handle the SHIFT-TAB key
 * <ul>
 *   <li>Navigation Mode: jump to the next focusable control before the table</li>
 *   <li>Action Mode: focus previous focusable control (wrap at the beginning)</li>
 * </ul>
 * @private
 */
sap.ui.table.Table.prototype.onsaptabprevious = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiTableCtrl").firstFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiTableCtrl").lastFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiTableCtrlBefore").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * handle the TAB key:
 * <ul>
 *   <li>Navigation Mode: jump to the next focusable control after the table</li>
 *   <li>Action Mode: focus next focusable control (wrap at the end)</li>
 * </ul>
 * @private
 */
sap.ui.table.Table.prototype.onsaptabnext = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiTableCtrl").lastFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiTableCtrl").firstFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiTableCtrlAfter").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * dynamic scrolling when reaching the bottom row with the ARROW DOWN key
 * @private
 */
sap.ui.table.Table.prototype.onsapdown = function(oEvent) {
	if (!this._bActionMode && this._isBottomRow(oEvent)) {
		this._scrollNext();
	}
};

/**
 * dynamic scrolling when reaching the top row with the ARROW UP key
 * @private
 */
sap.ui.table.Table.prototype.onsapup = function(oEvent) {
	if (!this._bActionMode && this._isTopRow(oEvent)) {
		this._scrollPrevious();
	}
};

/**
 * dynamic scrolling when reaching the bottom row with the PAGE DOWN key
 * @private
 */
sap.ui.table.Table.prototype.onsappagedown = function(oEvent) {
	if (!this._bActionMode && this._isBottomRow(oEvent)) {
		this._scrollPageDown();
	}
};

/**
 * dynamic scrolling when reaching the top row with the PAGE UP key
 * @private
 */
sap.ui.table.Table.prototype.onsappageup = function(oEvent) {
	if (!this._bActionMode && this._isTopRow(oEvent)) {
		this._scrollPageUp();
	}
};
