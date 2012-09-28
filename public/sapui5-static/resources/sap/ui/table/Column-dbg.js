/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Column.
jQuery.sap.declare("sap.ui.table.Column");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Column.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getFlexible flexible} : boolean</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.commons.layout.HAlign (default: sap.ui.commons.layout.HAlign.Begin)</li>
 * <li>{@link #getSortProperty sortProperty} : string</li>
 * <li>{@link #getFilterProperty filterProperty} : string</li>
 * <li>{@link #getFilterOperator filterOperator} : string (default: 'Contains')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Control</li>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li></ul>
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
 * The column allows to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.table.Column
 */
sap.ui.core.Element.extend("sap.ui.table.Column", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"sort", "toggleSort"
	],

	// ---- control specific ----
	library : "sap.ui.table",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "", defaultValue : null},
		"flexible" : {type : "boolean", group : "", defaultValue : null},
		"resizable" : {type : "boolean", group : "", defaultValue : true},
		"hAlign" : {type : "sap.ui.commons.layout.HAlign", group : "", defaultValue : sap.ui.commons.layout.HAlign.Begin},
		"sortProperty" : {type : "string", group : "", defaultValue : null},
		"filterProperty" : {type : "string", group : "", defaultValue : null},
		"filterOperator" : {type : "string", group : "", defaultValue : 'Contains'}
	},
	defaultAggregation : "label",
	aggregations : {
    	"label" : {type : "sap.ui.core.Control", multiple : false}, 
    	"template" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code> 
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
 * @name sap.ui.table.Column.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the column.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.table.Column#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setWidth
 * @function
 */

/**
 * Getter for property <code>flexible</code>.
 * Is the width of the column flexible (grows on resize)?
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>flexible</code>
 * @public
 * @name sap.ui.table.Column#getFlexible
 * @function
 */


/**
 * Setter for property <code>flexible</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bFlexible  new value for property <code>flexible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFlexible
 * @function
 */

/**
 * Getter for property <code>resizable</code>.
 * Is the column resizable or not?
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * @name sap.ui.table.Column#getResizable
 * @function
 */


/**
 * Setter for property <code>resizable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setResizable
 * @function
 */

/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * @name sap.ui.table.Column#getHAlign
 * @function
 */


/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setHAlign
 * @function
 */

/**
 * Getter for property <code>sortProperty</code>.
 * Specifies the binding property on which the column will sort.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sortProperty</code>
 * @public
 * @name sap.ui.table.Column#getSortProperty
 * @function
 */


/**
 * Setter for property <code>sortProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSortProperty  new value for property <code>sortProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setSortProperty
 * @function
 */

/**
 * Getter for property <code>filterProperty</code>.
 * Specifies the binding property on which the column will filter.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterProperty</code>
 * @public
 * @name sap.ui.table.Column#getFilterProperty
 * @function
 */


/**
 * Setter for property <code>filterProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterProperty  new value for property <code>filterProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFilterProperty
 * @function
 */

/**
 * Getter for property <code>filterOperator</code>.
 * @see sap.ui.model.FilterOperator (default value: "Contains")
 *
 * Default value is <code>Contains</code>
 *
 * @return {string} the value of property <code>filterOperator</code>
 * @public
 * @name sap.ui.table.Column#getFilterOperator
 * @function
 */


/**
 * Setter for property <code>filterOperator</code>.
 *
 * Default value is <code>Contains</code> 
 *
 * @param {string} sFilterOperator  new value for property <code>filterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFilterOperator
 * @function
 */
	
/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label (header renderer) of the column which is displayed in the column header.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Column#getLabel
 * @function
 */

/**
 * Setter for the aggregated <code>label</code>.
 * @param oLabel {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setLabel
 * @function
 */


/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#destroyLabel
 * @function
 */
	
/**
 * Getter for aggregation <code>template</code>.<br/>
 * Template (cell renderer) of this column. The default is: sap.ui.commons.TextView.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Column#getTemplate
 * @function
 */

/**
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setTemplate
 * @function
 */


/**
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#destroyTemplate
 * @function
 */

/**
 * sorts the current column ascending or descending
 *
 * @name sap.ui.table.Column.prototype.sort
 * @function
 * @param {boolean} 
 *         bDescending
 *         true, if sorting should be descending

 * @type sap.ui.table.Column
 * @public
 */


/**
 * toggles the sort order of the column
 *
 * @name sap.ui.table.Column.prototype.toggleSort
 * @function

 * @type sap.ui.table.Column
 * @public
 */


// Start of sap/ui/table/Column.js
jQuery.sap.require("sap.ui.core.RenderManager");
jQuery.sap.require("sap.ui.model.Filter");
jQuery.sap.require("sap.ui.model.Sorter");
jQuery.sap.require("sap.ui.commons.Image");
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.MenuItem");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * This file defines behavior for the control,
 */
sap.ui.table.Column.prototype.init = function() {

	this.oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");

};

sap.ui.table.Column.prototype.exit = function() {

	if (this.oMenu) {
		this.oMenu.destroy();
	}

};

sap.ui.table.Column.prototype.onThemeChanged = function() {
	if (this.oMenu) {
		var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
		var oControl = sap.ui.getCore().byId(this.getId() + "_asc");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"));
		}
		var oControl = sap.ui.getCore().byId(this.getId() + "_desc");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"));
		}
		var oControl = sap.ui.getCore().byId(this.getId() + "_filter");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"));
		}
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setLabel = function(vLabel) {
	var oLabel = vLabel;
	if (typeof (vLabel) === "string") {
		oLabel = new sap.ui.commons.Label({
			text : vLabel
		});
	}
	this.setAggregation("label", oLabel);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextView().bindText(vTemplate);
	}
	this.setAggregation("template", oTemplate);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
sap.ui.table.Column.prototype.setEditorTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextField().bindValue(vTemplate);
	}
	this.setAggregation("editorTemplate", oTemplate);
	return this;
};
 */

sap.ui.table.Column.prototype._openMenu = function() {

	if (!this.oMenu) {
		this.oMenu = new sap.ui.commons.Menu();
		var that = this;
		if (jQuery.browser.msie && jQuery.browser.version < 9) {
			// special handling for old IE's because strangewise
			// the focus is lost after closing the popup
			this.oMenu.getPopup().attachClosed(function(oEvent) {
				setTimeout(function() {
					that.focus();
				}, 0);
			});
		}
		var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
		if (this.getSortProperty()) {
			this.oMenu.addItem(new sap.ui.commons.MenuItem(this.getId() + "_asc", {
				text: this.oResBundle.getText("TBL_SORT_ASC"),
				icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"),
				select: function(oEvent) { that._onSort(oEvent) }
			}));
			this.oMenu.addItem(new sap.ui.commons.MenuItem(this.getId() + "_desc", {
				text: this.oResBundle.getText("TBL_SORT_DESC"),
				icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"),
				select: function(oEvent) { that._onSort(oEvent) }
			}));
		}
		if (this.getFilterProperty()) {
			// TODO: move MenuInputItem to commons or table and require correctly!!
			try {
				jQuery.sap.require("sap.ui.dev.MenuInputItem");
				if (sap.ui.dev && sap.ui.dev.MenuInputItem) {
					this.oMenu.addItem(new sap.ui.dev.MenuInputItem(this.getId() + "_filter", {
						text: this.oResBundle.getText("TBL_FILTER"),
						icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"),
						select: function(oEvent) { that._onFilter(oEvent) }
					}));
				}
			} catch (ex) {
				jQuery.sap.log.warning("The filter feature is not working since sap.ui.dev library is not available.");
			}
		}
	}
	if (this.oMenu.getItems().length > 0) {
		var eDock = sap.ui.core.Popup.Dock;
		this.oMenu.open(false, this.getFocusDomRef(), eDock.BeginTop, eDock.BeginBottom, this.getDomRef());
	}

};

sap.ui.table.Column.prototype._onSort = function(oEvent) {
	var oItem = oEvent.getParameter("item");
	var bDescending = (oItem.getId().indexOf('_asc') == -1);
	this.sort(bDescending);
};

sap.ui.table.Column.prototype.toggleSort = function(bDescending) {
	if (this.oSorter) {
		this.sort(!this.oSorter.bDescending);
	} else {
		this.sort();
	}
};

sap.ui.table.Column.prototype.sort = function(bDescending) {
	var aCols = this.getParent().getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		aCols[i].oSorter = undefined;
	}
	this.oSorter = new sap.ui.model.Sorter(this.getSortProperty(), bDescending);
	this.getParent().getBinding("rows").sort(this.oSorter);
	this._renderSortIcon(bDescending);
	return this;
};

sap.ui.table.Column.prototype._renderSortIcon = function(bDescending) {
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	var oImage = sap.ui.getCore().byId(this.getId() + "-sortIcon") || new sap.ui.commons.Image(this.getId() + "-sortIcon");
	oImage.addStyleClass("sapUiTblColIconsOrder");
	if (!bDescending) {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"));
	} else {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"));
	}
	var oRenderManager = new sap.ui.core.RenderManager();
	var htmlImage = oRenderManager.getHTML(oImage);
	jQuery.sap.byId(this.getParent().getId()).find(".sapUiTblColIconsOrder").remove();
	jQuery.sap.byId(this.getParent().getId()).find("th").removeAttr("aria-sort");
	jQuery(htmlImage).prependTo(jQuery.sap.domById(this.getParent().getId() + "_icons_" + this.getId()));
	this.$().attr("aria-sort", bDescending ? "descending" : "ascending");
};

sap.ui.table.Column.prototype._onFilter = function(oEvent) {
	var oItem = oEvent.getParameter("item");
	this.filter(oItem.getValue());
};

sap.ui.table.Column.prototype.filter = function(sValue) {
	if (sValue) {
		var oFilterOperator = sap.ui.model.FilterOperator[this.getFilterOperator()] || sap.ui.model.FilterOperator.Contains;
		// determine the data type (to convert the value into )
		// TODO: remove the hack when databinding supports datatypes
		var vFilterValue = sValue;
		if (this.getParent().isBound()) {
			var oTable = this.getParent();
			var sType = typeof oTable.getModel().getProperty(this.getFilterProperty(), oTable.getContextByIndex(oTable.getFirstVisibleRow()));
			if (sType === "boolean") {
				vFilterValue = vFilterValue == "true";
			} else if (sType === "int") {
				vFilterValue = parseInt(vFilterValue, 10);
			} else if (sType === "float") {
				vFilterValue = parseFloat(vFilterValue);
			}
		}
		this.oFilter = new sap.ui.model.Filter(this.getFilterProperty(), oFilterOperator, vFilterValue);
	} else {
		this.oFilter = undefined;
	}
	var aFilters = [];
	var aCols = this.getParent().getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].oFilter) {
			aFilters.push(aCols[i].oFilter);
		}
	}
	this.getParent().getBinding("rows").filter(aFilters);
	this._renderFilterIcon(sValue);
	return this;
};

sap.ui.table.Column.prototype._renderFilterIcon = function(bHasFilter) {
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	var oImage = sap.ui.getCore().byId(this.getId() + "-filterIcon") || new sap.ui.commons.Image(this.getId() + "-filterIcon");
	jQuery.sap.byId(oImage.getId()).remove();
	oImage.addStyleClass("sapUiTblColIconsFilter");
	if (bHasFilter) {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"));
		var oRenderManager = new sap.ui.core.RenderManager();
		var htmlImage = oRenderManager.getHTML(oImage);
		jQuery(htmlImage).prependTo(jQuery.sap.domById(this.getParent().getId() + "_icons_" + this.getId()));
	}
};

sap.ui.table.Column.prototype._restoreIcons = function() {

	if (this.oSorter) {
		this._renderSortIcon(this.oSorter.bDescending);
	}

	if (this.oFilter) {
		this._renderFilterIcon(true);
	}

};

sap.ui.table.Column.prototype.setResizable = function(bFlag) {
	this.setProperty("resizable", bFlag, true); // no re-rendering!
	if (bFlag) {
		this.$().find(".sapUiTblColResize").css("cursor", "");
	} else {
		this.$().find(".sapUiTblColResize").css("cursor", "auto");
	}
	return this;
};
