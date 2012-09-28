/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.SearchProvider");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.SearchProvider",{metadata:{library:"sap.ui.commons",properties:{"suggestUrl":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"suggestType":{type:"string",group:"Misc",defaultValue:'json'},"icon":{type:"string",group:"Misc",defaultValue:null}}}});jQuery.sap.require("jquery.sap.encoder");
sap.ui.commons.SearchProvider.prototype._doSuggest=function(s,a){var u=this.getSuggestUrl();if(!u){return;}u=u.replace("{searchTerms}",jQuery.sap.encodeURL(a));var t=this.getSuggestType();var f;if(t&&t.toLowerCase()==="xml"){t="xml";f=function(d){var x=jQuery(d);var i=x.find("Text");var b=[];i.each(function(){b.push(jQuery(this).text());});s.suggest(a,b);};}else{t="json";f=function(d){s.suggest(a,d[1]);};}jQuery.ajax({url:u,dataType:t,success:f,error:function(X,b,e){jQuery.sap.log.fatal("The following problem occurred: "+b,X.responseText+","+X.status);}});};
