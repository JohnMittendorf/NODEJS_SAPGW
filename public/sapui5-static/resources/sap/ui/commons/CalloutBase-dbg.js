/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.CalloutBase.
jQuery.sap.declare("sap.ui.commons.CalloutBase");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.TooltipBase");

/**
 * Constructor for a new CalloutBase.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.CalloutBase#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.CalloutBase#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.TooltipBase#constructor sap.ui.core.TooltipBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * CalloutBase is a building block for Callout. Do not use it directly. Use the Callout control instead
 * @extends sap.ui.core.TooltipBase
 *
 * @author SAP AG 
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.CalloutBase
 */
sap.ui.core.TooltipBase.extend("sap.ui.commons.CalloutBase", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"adjustPosition", "close"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	events : {
		"open" : {}, 
		"close" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.CalloutBase with name <code>sClassName</code> 
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
 * @name sap.ui.commons.CalloutBase.extend
 * @function
 */

sap.ui.commons.CalloutBase.M_EVENTS = {'open':'open','close':'close'};


/**
 * The event is fired before the popup is opened. 
 *
 * @name sap.ui.commons.CalloutBase#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.parent Parent control that has this Callout as a tooltip
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * The event is fired before the popup is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#attachOpen
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#detachOpen
 * @function
 */


/**
 * Fire event open to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'parent' of type <code>sap.ui.core.Control</code> Parent control that has this Callout as a tooltip</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.CalloutBase#fireOpen
 * @function
 */

/**
 * Event is fired when the Callout window is closed. 
 *
 * @name sap.ui.commons.CalloutBase#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * Event is fired when the Callout window is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#attachClose
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#detachClose
 * @function
 */


/**
 * Fire event close to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.CalloutBase#fireClose
 * @function
 */

/**
 * Adjust position of the already opened Callout window.
 * Call this method each time when the size of the opened
 * Callout window may be changed due to new or changed
 * contents.
 *
 * @name sap.ui.commons.CalloutBase.prototype.adjustPosition
 * @function

 * @type void
 * @public
 */


/**
 * Closes Callout
 *
 * @name sap.ui.commons.CalloutBase.prototype.close
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/CalloutBase.js
///**
// * This file defines behavior for the Callout control
// */

/**
 * Initializes a new callout base.
 * Overrides default popup placement and offset of the TooltipBase control
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.init = function() {
	this.oPopup = new sap.ui.core.Popup();
	this.oPopup.setShadow(true);
	// resource bundle
	this.oRb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	// override the default position and offset of TooltipBase:
	this.setMyPosition("begin bottom");
	this.setAtPosition("begin top");
	this.setOffset("0 -10");
};

/**
 * Destroys this instance of the callout, called by Element#destroy()
 * @private
 */
sap.ui.commons.CalloutBase.prototype.exit = function() {
	this.oPopup.close();
	this.oPopup.destroy();
	this.oPopup = null;
	this.oRb = null;
};

/**
 * Return the popup to use. Each callout has own popup.
 * (Allow multiple call-outs taking into account pin-up functionality in the next version).
 * Overrides {sap.ui.core.TooltipBase} that has a single common popup for all instances.
 * @type sap.ui.commons.Popup
 * @return The popup to use
 * @private
 */
sap.ui.commons.CalloutBase.prototype._getPopup = function(){
	return this.oPopup;
};

/**
 * Check if the mouse pointer is over of the Callout window
 * @param {jQuery.EventObject}
 * oEvent The mouse event
 * @private
 */
sap.ui.commons.CalloutBase.prototype.isMouseOver = function(oEvent) {
	// sap.ui.util.Rect.contains cannot be used here due to different logic
	var
		oDom = this.getDomRef(),
		x = oEvent.pageX,
		y = oEvent.pageY,
		bIsOver = false;
	if(oDom){
		bIsOver = x > oDom.offsetLeft && x < oDom.offsetLeft + oDom.offsetWidth
				&& y > oDom.offsetTop && y < oDom.offsetTop + oDom.offsetHeight;
	}
	return bIsOver;
};

/**
 * Adjust the callout window position on the screen, if opened and visible. This
 * may be needed after the contents of the Callout has changed after data loading
 */
sap.ui.commons.CalloutBase.prototype.adjustPosition = function() {

	// adjust popup position (different to Rich Tooltip which is shown below the reference)
	if (!this.oPopup.isOpen()) {
		return;
	}

	var oParentDomRef = this.oParent.getDomRef();

	this.oPopup.setPosition(this.getMyPosition(), this.getAtPosition(), oParentDomRef, this.getOffset(), this.getCollision());

	// if bAbove is true, set the tip above, else below the Callout window
	var oOThis = jQuery(this.getDomRef());
	var oORefs = jQuery(oParentDomRef);
	var bAbove = oOThis.offset().top > oORefs.offset().top;

	// find out where to place the tip: left or right side
	var tW = oOThis.outerWidth() || 0;
	var rW = oORefs.outerWidth() || 0;
	var tL = oOThis.offset().left;
	var rL = oORefs.offset().left;

	var bRightArrow = Math.abs(rL - tL) > Math.abs(rL + rW - tL - tW);

	// CSS Styles are mirrored in RTL mode.
	// Though it is a nice automatic feature, we need
	// to tweak it to the default behavior back:
	if (sap.ui.getCore().getConfiguration().getRTL()) {
		bRightArrow = !bRightArrow;
	}

	// put the tip to a correct position: top/bottom, left/right
	var oArrow = jQuery.sap.byId(this.getId() +"-arrow");
	oArrow
		.toggleClass("sapUiCltBaseArrT", bAbove)
		.toggleClass("sapUiCltBaseArrB", !bAbove)
		.toggleClass("sapUiCltBaseArrR", bRightArrow);

	// hide the tip if the popup is placed outside of the parent control horizontally
	var aL = oArrow.offset().left;
	oArrow.toggleClass("sapUiCltBaseArrN", aL < rL || aL > rL + rW);
};

/**
 * @see sap.ui.core.Element.prototype.focus As the callout itself is just a
 *      frame, focus the first focusable content
 * @private
 */
sap.ui.commons.CalloutBase.prototype.focus = function() {
	if(this.oPopup.isOpen()){
		jQuery.sap.focus(jQuery.sap.byId(this.getId() + "-cont").firstFocusableDomRef());
	}
};

/**
 * Open the callout window.
 *
 * @param {sap.ui.core.Control}
 *       parent control that contains the callout
 * @private
 */
sap.ui.commons.CalloutBase.prototype.openPopup = function(oSC) {

	// save parent and focus info to be restored after close
	this.oParentControl = oSC;
	this.oParentFocusInfo = oSC.getFocusInfo();

	this.oPopup.attachEvent("opened", this.handleOpened, this);

	// use TooltipBase to open the pop-up
	sap.ui.core.TooltipBase.prototype.openPopup.call(this, oSC);

	this.adjustPosition();

	this.fireOpen({ parent : this._parentControl });
};

/**
 * Close the Callout popup.
 *
 * @public
 */
sap.ui.commons.CalloutBase.prototype.close = function() {

	if(this.oPopup.isOpen() && !this.sCloseNowTimeout){
		if (this.sOpenTimeout) {
			jQuery.sap.clearDelayedCall(this.sOpenTimeout);
			this.sOpenTimeout = null;
		}
		this.closePopup();
	}
};

/**
 * Close CalloutBase. Fire the close event.
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.closePopup = function() {

	jQuery("body").unbind("mouseover.callout");

	sap.ui.core.TooltipBase.prototype.closePopup.call(this);

	// Set focus to the parent control.
	// Accessibility requirement: a focused Callout should set focus to its parent after close,
	// and not to a control where it could be found originally (In the scenario when a Callout
	// is opened on hover and a control inside it was clicked on with the mouse. This would
	// implicitly mean that a user has moved focus to the parent control intentionally)
	if (this.oParentControl && this.bFocused) {
		this.oParentControl.applyFocusInfo(this.oParentControl.getFocusInfo);
		this.bFocused = false;
	}

	// inform the application
	this.fireClose({});
};

/**
 * Handle the key down event for ESCAPE and Ctrl-I.
 *
 * @param {jQuery.Event}
 *            oEvent - the event that occurred on the Parent of the Callout.
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onkeydown = function(oEvent) {

	var bCtrlI = oEvent.ctrlKey && oEvent.which == jQuery.sap.KeyCodes.I;
	var bEsc = oEvent.which == jQuery.sap.KeyCodes.ESCAPE;

	if(!bCtrlI && !bEsc){
		return;
	}

	// do not try to open the same callout twice
	if (bCtrlI) {
		if (this.oPopup.isOpen()){
			jQuery.sap.log.debug("Callout: CtrlI. Me already opened" );
			return; // this is already opened
		}
		this.bDoFocus = true; // accessibility: request focus
	}

	// let the TooltipBase remove/set standard tooltips and open/close the popup
	sap.ui.core.TooltipBase.prototype.onkeydown.call(this, oEvent);
};

/**
 * If the callout has been opened with a keyboard command, the mouse
 * pointer is most probably outside: the callout does not receive any
 * mouseover and mouseout events. Arrange a global mousemove listener
 * temporarily.
 * Use case: accessibility testing; advanced users that prefer to work with
 * keyboard instead of mouse.
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.handleOpened = function() {
	this.oPopup.detachEvent("opened", this.handleOpened, this);

	// The following is needed only of the callout was opened with the keyboard:
	// - request focus (accessibility requirement)
	// - listen to mouse moves outside of the callout
	if (this.bDoFocus) {
		this.focus();
		this.bDoFocus = false;
		this.bFocused = true; // Remember to set focus to parent on close

		// find out if mouse is moved outside of the control:
		var fBodyMove = jQuery.proxy(function(oEvent){
			if(!this.oPopup || !this.oPopup.isOpen()){
				// make sure that the global mouse listener is removed in any case
				jQuery("body").unbind("mouseover.callout");
				return;
			}
			var bInside = this.isMouseOver(oEvent);
			if(!bInside && !this.sCloseNowTimeout && !this.sOpenTimeout){
				// schedule close if mouse moved outside of the Popup
				this.sCloseNowTimeout = jQuery.sap.delayedCall(400, this, "closePopup");
			}
			if (bInside && this.sCloseNowTimeout) {
				// do not close when inside
				jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
				this.sCloseNowTimeout = null;
			}
		}, this);
		// Because the Callout is opened with the keyboard, the mouse pointer probably
		// lies outside and the control newer gets mouseout events. As a workaround,
		// listen to mouse movements OUTSIDE of the control to know when it should be closed
		jQuery("body").bind("mouseover.callout", fBodyMove);
	}
};

/**
 * Event handler for the focusin event.
 * Organize a local tab chain inside of a callout.
 * If it occurs on the focus handler elements at the beginning of the callout,
 * the focus is set to the end, and vice versa.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onfocusin = function(oEvent){

	jQuery.sap.log.debug("Callout: onfocusin event");

	// Some element has been focused inside of the popup.
	// Focus will be set to the parent after popup close.
	this.bFocused = true;

	var oSourceDomRef = oEvent.target;

	// The same logic as in the Dialog.control:
	if (oSourceDomRef.id === this.getId() + "-fhfe") {
		// the FocusHandlingFirstElement was focused and thus the focus should move to the last element.
		jQuery.sap.focus(jQuery.sap.byId(this.getId() + "-cont").lastFocusableDomRef());
	} else if (oSourceDomRef.id === this.getId() + "-fhee") {
		// the FocusHandlingEndElement was focused and thus the focus should move to the first element.
		jQuery.sap.focus(jQuery.sap.byId(this.getId() + "-cont").firstFocusableDomRef());
	}
};

/**
 * When a control that has a Callout looses the focus to the Callout contents,
 * do not close it. Override the onfocusout event handler of TooltipBalse.
 * @param {jQuery.EventObject} the event indication that the focus is lost
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onfocusout = function(oEvent) {
	return;
};
