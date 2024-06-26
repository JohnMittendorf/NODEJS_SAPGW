// This file has been generated by the SAPUI5 CreateModule Ant-Task
jQuery.sap.declare('sap-ui-testenv');
if ( !jQuery.sap.isDeclared('sap.ui.test.TestEnv') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides a bridge between the SAPUI5 runtime and the SAPUI5 Eclipse Tooling.
jQuery.sap.declare("sap.ui.test.TestEnv");
if ( !jQuery.sap.isDeclared('sap.ui.test.ControlTree') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides a control tree to be used in the Eclipse preview editor
jQuery.sap.declare("sap.ui.test.ControlTree");

if ( !jQuery.sap.isDeclared('jquery.sap.strings') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides useful string operations not available in pure JavaScript.
jQuery.sap.declare("jquery.sap.strings", false);

(function(){


	/**
	 * Checks whether a given sString ends with sEndString
	 * respecting the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sEndString The end string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.endsWithIgnoreCase
	 * @public
	 */
	jQuery.sap.endsWith = function endsWith(sString, sEndString) {
		if (typeof(sEndString)!="string" || sEndString=="") {
			return false;
		}
		var iPos = sString.lastIndexOf(sEndString);
		return iPos >= 0 && iPos == sString.length - sEndString.length;
	};

	/**
	 * Checks whether a given sString ends with sEndString
	 * ignoring the case of the strings.
	 *
	 * @param {string} sString the string to be checked
	 * @param {string} sEndString the end string to be searched
	 * @return true if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.endsWith
	 * @public
	 */
	jQuery.sap.endsWithIgnoreCase = function endsWithIgnoreCase(sString, sEndString) {
		if (typeof(sEndString)!="string" || sEndString=="") {
			return false;
		}
		sString = sString.toUpperCase();
		sEndString = sEndString.toUpperCase();
		return jQuery.sap.endsWith(sString,sEndString);
	};

	/**
	 * Checks whether a given sString starts with sStartString
	 * respecting the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sStartString The start string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.startsWithIgnoreCase
	 * @public
	 */
	jQuery.sap.startsWith = function startsWith(sString, sStartString) {
		if (typeof(sStartString)!="string" || sStartString=="") {
			return false;
		}
		if (sString == sStartString) {
			return true;
		}
		return sString.indexOf(sStartString) == 0;
	};

	/**
	 * Checks whether a given sString starts with sStartString
	 * ignoring the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sStartString The start string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.startsWith
	 * @public
	 */
	jQuery.sap.startsWithIgnoreCase = function startsWithIgnoreCase(sString, sStartString) {
		if (typeof(sStartString)!="string" || sStartString=="") {
			return false;
		}
		sString = sString.toUpperCase();
		sStartString = sStartString.toUpperCase();
		return jQuery.sap.startsWith(sString,sStartString);
	};

	/**
	 * Converts a character of the string to upper case.<br/>
	 * If no pos is defined as second parameter or pos is negative or greater than sString the first character will be
	 * converted into upper case. the first char position is 0.
	 *
	 * @param {string} sString The string to be checked
	 * @param {integer} iPos the position of the character that will be uppercase
	 * @return The string with the firstletter in upper case
	 * @type {string}
	 * @public
	 * @SecPassthrough {0|return}
	 */
	jQuery.sap.charToUpperCase = function charToUpperCase(sString,iPos) {
		if (!sString) {
			return sString;
		}
		if (!iPos || isNaN(iPos) || iPos <= 0 || iPos >= sString.length) {
			iPos = 0;
		}
		var sChar = sString.charAt(iPos).toUpperCase();
		if (iPos>0) {
			return sString.substring(0,iPos) + sChar + sString.substring(iPos+1);
		}
		return sChar + sString.substring(iPos+1);
	};

	/**
	 * Pads a string on the left side until is has the given length.<br/>
	 *
	 * @param {string} sString The string to be padded
	 * @param {string} sPadChar The char to use for the padding
	 * @param {integer} iLength the target length of the string
	 * @return The padded string
	 * @type {string}
	 * @public
	 * @SecPassthrough {0 1|return}
	 */
	jQuery.sap.padLeft = function padLeft(sString, sPadChar, iLength) {
		if (!sString) {
			sString = "";
		}
		while (sString.length < iLength) {
			sString = sPadChar + sString;
		}
		return sString;
	};

	/**
	 * Pads a string on the right side until is has the given length.<br/>
	 *
	 * @param {string} sString The string to be padded
	 * @param {string} sPadChar The char to use for the padding
	 * @param {integer} iLength the target length of the string
	 * @return The padded string
	 * @type {string}
	 * @public
	 * @SecPassthrough {0 1|return}
	 */
	jQuery.sap.padRight = function padRight(sString, sPadChar, iLength) {
		if (!sString) {
			sString = "";
		}
		while (sString.length < iLength) {
			sString = sString + sPadChar;
		}
		return sString;
	};



}());
}; // end of jquery.sap.strings

jQuery.sap.require('sap.ui.core.Element'); // unlisted dependency retained


/*global addProperty, callback, restoreLockState, restoreTreeCallback,supplySelectedTheme, *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 * Constructs the class <code>sap.ui.test.ControlTree</code> and registers
 * to the <code>sap.ui.core.Core</code> for UI change events.
 *
 * @class Control Tree used for the Test Environment
 * @author SAPUI5 Designtime
 * @version 1.4.3
 *
 * @param {sap.ui.core.Core}
 *            oCore the core instance to use for analysis
 * @param {window}
 *            oWindow reference to the window object
 *
 * @constructor
 * @private
 */
sap.ui.test.ControlTree = function(oCore, oWindow) {
	this.oWindow = oWindow;
	this.oCore = oCore;
	this.oCore.attachUIUpdated(this.renderDelayed, this);
	this.renderDelayed(); // additionally necessary due to first UI update
};

/**
 * TODO: missing internal JSDoc... @author please update
 * @private
 */
sap.ui.test.ControlTree.prototype.renderDelayed = function() {
	if (this.oTimer) {
		this.oWindow.jQuery.sap.clearDelayedCall(this.oTimer);
	}
	this.oTimer = this.oWindow.jQuery.sap.delayedCall(500,this,"initDT");
	//Provide a callback when the UI is updated
	restoreLockState(this);
	supplySelectedTheme(this.oCore.getConfiguration().getTheme());
};

/**
 * TODO: missing internal JSDoc... @author please update
 * @private
 */
sap.ui.test.ControlTree.prototype.initDT = function() {
	//Make a Callback to reset the Outline Tree
	restoreTreeCallback();

	var oUIArea = null,
		oUIAreas = this.oCore.mUIAreas;
		//alert("initcontrol tree");
	for (var i in oUIAreas) {
		var oUIArea = oUIAreas[i],
			oDomNode = this.createTreeNodeDT(oUIArea.getId(),0,"UIArea");

		var aRootControls = oUIArea.getContent();
		for(var i = 0, l = aRootControls.length; i < l; i++) {
			this.renderNodeDT(aRootControls[i],0);
		}
	}
};

/**
 * TODO: missing internal JSDoc... @author please update
 * @private
 */
sap.ui.test.ControlTree.prototype.createTreeNodeDT = function(sId,iLevel,sType) {
	callback(sId,iLevel,sType);
};

sap.ui.test.ControlTree.prototype.createAssocTreeNodeDT = function(sId,iLevel,sType,srcCntrlId,trgtCntrlId) {
	callback(sId,iLevel,sType,srcCntrlId,trgtCntrlId);
};

/**
 * TODO: missing internal JSDoc... @author please update
 * @private
 */
sap.ui.test.ControlTree.prototype.renderNodeDT = function(oControl,iLevel) {

	if (!oControl) {
		return;
	}

	var oMetadata = oControl.getMetadata();

	var oDomNode = this.createTreeNodeDT(oControl.getId(),iLevel+1, oMetadata.getName());

	var mProperties = oMetadata.getAllProperties();
	for (var sPropertyName in mProperties) {
		var oMethod =  oControl["get" + sPropertyName];
		var sName = sPropertyName;
		if (!oMethod) {
			sName = jQuery.sap.charToUpperCase(sName,0);
		}
		var oValue = oControl["get" + sName]();
		addProperty(oControl.getId(), sPropertyName, mProperties[sPropertyName].type, oValue!=null?oValue:"");
	}

	var mAggregations = oMetadata.getAllAggregations();
	for (var n in mAggregations) {
		// Ensure to analyze the actual element/control instance, not just its metadata!
		var oAggregation = oControl.getAggregation(mAggregations[n].name);
		if (oAggregation && oAggregation.length) {
			for (var i=0;i<oAggregation.length;i++) {
				var o = oAggregation[i];
				if (o instanceof sap.ui.core.Element) {
					this.renderNodeDT(oAggregation[i],iLevel+1);
				}
			}
		} else if (oAggregation instanceof sap.ui.core.Element) {
			this.renderNodeDT(oAggregation,iLevel+1);
		}
	}


	//Get all the associations
	var mAssociations = oMetadata.getAllAssociations();
	for (var m in mAssociations) {
		var oAssociation = oControl.getAssociation(mAssociations[m].name);//Returns the association Name

		if(null!=oAssociation) {
			//Construct the Association Name
			var assocId = mAssociations[m].name+oAssociation;
			this.createAssocTreeNodeDT(assocId,iLevel+2,"Association",oControl.getId(),oAssociation);
			//Add the properties of the association here
			addProperty(assocId,mAssociations[m].name,"assoc_type",oAssociation);
			addProperty(assocId, "Name", "string", mAssociations[m].name);

		}
	}
};
}; // end of sap.ui.test.ControlTree

if ( !jQuery.sap.isDeclared('sap.ui.debug.Highlighter') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides a helper that can highlight a given control
jQuery.sap.declare("sap.ui.debug.Highlighter");
jQuery.sap.require('jquery.sap.dom'); // unlisted dependency retained

jQuery.sap.require('jquery.sap.script'); // unlisted dependency retained


/**
 * Creates a new highlighter object without displaying it.
 *
 * The DOM node is not created until the first call to method {@link #highlight}.
 *
 * @param {string} [sId] id that is used by the new highlighter
 * @param {boolean} [bFilled] whether the box of the highlighter is partially opaque (20%), defaults to false
 * @param {string} [sColor] the CSS color of the border and the box (defaults to blue)
 * @param {int} [iBorderWidth] the width of the border
 *
 * @class Helper class to display a colored rectangle around and above a given DOM node
 * @author Frank Weigel
 * @since 0.8.7
 * @public
 */
sap.ui.debug.Highlighter = function(sId, bFilled, sColor, iBorderWidth) {
	this.sId = sId || jQuery.sap.uid();
	this.bFilled = (bFilled == true);
	this.sColor = sColor || 'blue';
	if ( isNaN(iBorderWidth ) ) {
		this.iBorderWidth = 2;
	} else if ( iBorderWidth <= 0 ) {
		this.iBorderWidth = 0;
	} else {
		this.iBorderWidth = iBorderWidth;
	}
};

/**
 * Shows a rectangle/box that surrounds the given DomRef.
 *
 * If this is the first call to {@link #highlight} for this instance, then
 * a DOM node for the highlighter is created in the same document as the given <code>oDomRef</code>.
 *
 * <b>Note:</b> As the DOM node is reused across multiple calls, the highlighter must only be used
 * within a single document.
 */
sap.ui.debug.Highlighter.prototype.highlight = function(oDomRef) {
	if (!oDomRef || !oDomRef.parentNode) {
		return;
	}

	var oHighlightRect = jQuery.sap.domById(this.sId);
	if (!oHighlightRect) {
		oHighlightRect = oDomRef.ownerDocument.createElement("DIV");
		oHighlightRect.setAttribute("id", this.sId);
		oHighlightRect.style.position = "absolute";
		oHighlightRect.style.border = this.iBorderWidth + "px solid " + this.sColor;
		oHighlightRect.style.display = "none";
		oHighlightRect.style.margin = "0px";
		oHighlightRect.style.padding = "0px";
		if ( this.bFilled ) {
			oHighlightRect.innerHTML = "<div style='background-color:" + this.sColor + ";opacity:0.2;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=20);height:100%;width:100%'>&nbsp;</div>";
		}
		oDomRef.ownerDocument.body.appendChild(oHighlightRect);
	}
	var oRect = jQuery(oDomRef).rect();
	oHighlightRect.style.top = (oRect.top-this.iBorderWidth) + "px";
	oHighlightRect.style.left = (oRect.left-this.iBorderWidth) + "px";
	oHighlightRect.style.width = (oRect.width) + "px";
	oHighlightRect.style.height = (oRect.height) + "px";
	oHighlightRect.style.display = "block";
};

/**
 * Hides the rectangle/box if it is currently shown.
 */
sap.ui.debug.Highlighter.prototype.hide = function() {
	var oHighlightRect = jQuery.sap.domById(this.sId);
	if (!oHighlightRect) {
		return;
	}
	oHighlightRect.style.display = "none";
};
}; // end of sap.ui.debug.Highlighter


/*global selectControl *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 * Creates an instance of the class <code>sap.ui.debug.TestEnv</code>
 *
 * @class Central Class for the Test Environment
 *
 * @author SAPUI5 Designtime
 * @version 1.4.3
 * @constructor
 * @private
 */
sap.ui.test.TestEnv = function() {
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @public
 */
sap.ui.test.TestEnv.prototype.startPlugin = function(oCore) {
	this.oCoreOther = oCore;
	this.oCore = oCore;
	this.oCore.attachControlEvent(this.onControlEvent, this);
	this.oWindow = window;
	this.oControlTree = new sap.ui.test.ControlTree(this.oCore, window);
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @public
 */
sap.ui.test.TestEnv.prototype.stopPlugin = function() {
	this.oCore.detachControlEvent(this.onControlEvent, this);
	this.oCore = null;
};


/**
 * Callback method for listening to any event
 * @param {sap.ui.base.Event} oEvent event object
 * @private
 */
sap.ui.test.TestEnv.prototype.onControlEvent = function(oEvent) {

	// logging for testing!
//	jQuery.sap.log.info(oEvent.getParameter("browserEvent").getName() + " - " + this.oCore.isLocked());

	// special handling only if the Core is locked
	if (this.oCore.isLocked()) {

		// get the ref to the browser event
		var oBrowserEvent = oEvent.getParameter("browserEvent");

		// only act for click events
		if (oBrowserEvent.type == "click") {

			// determine the clicked element
			var oElement = oBrowserEvent.srcControl;
			if (oElement) {

//				// show the dimension rect and select the control
				var oSelectionHighlighter = new sap.ui.debug.Highlighter('sap-ui-testsuite-SelectionHighlighter');
				oSelectionHighlighter.highlight(oElement.getDomRef());

				// (TODO: function selectControl needs to be implemented by DesignTime!)
				if (selectControl) {
					selectControl(oElement.getId());
				}

			}

		}

	}

};

/**
 * Create the <code>sap.ui.test.TestEnv</code> plugin and register
 * it within the <code>sap.ui.core.Core</code>.
 */
(function(){
	var oThis = new sap.ui.test.TestEnv();
	sap.ui.getCore().registerPlugin(oThis);
}());
}; // end of sap.ui.test.TestEnv
