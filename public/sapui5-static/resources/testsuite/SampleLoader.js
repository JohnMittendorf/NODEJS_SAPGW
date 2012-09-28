/*!
 * @copyright@
 */
jQuery.sap.declare("sap.ui.legacy.SampleLoader");
sap.ui.legacy.SampleLoader=function(){};
sap.ui.legacy.SampleLoader.load=function(sUrl,oUiArea){this.iControlIndex=0;this.sRootControlId="";var oResponse=jQuery.sap.syncGetText(sUrl);if(oResponse.success&&oResponse.data){var oXML=sap.ui.util.Script.parseXMLDocument(oResponse.data);var oStringBuilder=new sap.ui.util.StringBuilder();var oNodes=oXML.getElementsByTagName("page")[0].childNodes;for(var i=0;i<oNodes.length;i++){var oNode=oNodes[i];if((oNode.nodeType==1)&&oNode.getAttribute("method")=="setContent"){oStringBuilder.append("var controls = [];\n");this.buildObjectTree(oNode,"",oStringBuilder);oStringBuilder.append("oUiArea.setRootControl(controls['"+this.sRootControlId+"'])");var sControlTree=oStringBuilder.toString();oUiArea.getRootNode().innerHTML="";this.sRootControlId=null;eval(sControlTree);break;}}}else{alert("File Not found or no valid XML returned.")}};
sap.ui.legacy.SampleLoader.buildObjectTree=function(x,p,s,o){var S=sap.ui.util.Strings;var c=x.tagName;if(!c){return;}c=S.charToUpperCase(c,0);var a=sap.ui.legacy[c];if(!a){return;}new a();var a=sap.ui.legacy[c];var m=a.getMetadata();s.append("\n");var b=x.getAttribute("id");if(!b){b="i"+(this.iControlIndex++);}if(!this.sRootControlId){this.sRootControlId=b;}s.append("controls[\""+b+"\"] = new sap.ui.legacy."+c+"(\""+b+"\");");for(var i=0;i<x.attributes.length;i++){var d=x.attributes[i].nodeName;var e=x.attributes[i].nodeValue;if(d=="id"){continue;}if(d.indexOf("Info")>-1){continue;}if(d=="method"){if(p){var f=e,g=f.substr(0,2),h=f.substr(3),j=h,k=S.endsWith(h,"s");if(k){if(S.endsWith(h,"ies")){j=h.substr(0,h.length-3)+"y";}else{j=h.substr(0,h.length-1);}}if(g=="add"||k){g="add";}else{g="set";}if(h=="Control"&&!this.getTypeFromMetadata(o,"Control")){h="Content";j=h;}else if(h=="Content"&&!this.getTypeFromMetadata(o,"Content")){h="Control";j=h;}if(this.getTypeFromMetadata(o,h)){s.append(p+"."+g+j+"(controls[\""+b+"\"]);");}}continue;}d=d.substr(0,1).toUpperCase()+d.substr(1);var t=this.getTypeFromMetadata(m,d);if(t=="int"||t=="boolean"||t=="float"){s.append("controls[\""+b+"\"].set"+d+"("+e+");");}else if(t){s.append("controls[\""+b+"\"].set"+d+"(\""+e+"\");");}}var l=m.getEvents();for(var n in l){var q="attach"+S.charToUpperCase(n,0);s.append("controls[\""+b+"\"]."+q+"(function(oEvent) {jQuery.sap.log.info(\"Legacy Control fired \" + oEvent.sId + \" on \" + oEvent.target.id + \" instance of \" + jQuery(oEvent.target).control()[0].getMetadata().getName(),\"\",\"sap.ui.core.Core\");});");}var r=b;for(var i=0;i<x.childNodes.length;i++){this.buildObjectTree(x.childNodes[i],"controls[\""+r+"\"]",s,m);}};
sap.ui.legacy.SampleLoader.getTypeFromMetadata=function(m,s){var c=m.getAllProperties();for(n in c){var o=c[n];if(o.name==s){return o.type;}}var c=m.getAllAggregations();for(n in c){var o=c[n];if(o.name==s){return o.type;}}var c=m.getAllAssociations();for(n in c){var o=c[n];if(o.name==s){return o.type;}}return undefined;};