/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.table.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.commons.library");sap.ui.getCore().initLibrary({name:"sap.ui.table",dependencies:["sap.ui.core","sap.ui.commons"],types:["sap.ui.table.SelectionMode"],interfaces:[],controls:["sap.ui.table.DataTable","sap.ui.table.Table"],elements:["sap.ui.table.Column","sap.ui.table.Row"],version:"1.4.3"});jQuery.sap.declare("sap.ui.table.SelectionMode");sap.ui.table.SelectionMode={Multi:"Multi",MultiToggle:"MultiToggle",Single:"Single",None:"None"};sap.ui.table.ColumnHeader=sap.ui.table.Column;sap.ui.table.SelectionMode.All=sap.ui.table.SelectionMode.MultiToggle;
