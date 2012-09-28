/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.strings",false);(function(){jQuery.sap.endsWith=function e(f,g){if(typeof(g)!="string"||g==""){return false;}var i=f.lastIndexOf(g);return i>=0&&i==f.length-g.length;};jQuery.sap.endsWithIgnoreCase=function a(f,g){if(typeof(g)!="string"||g==""){return false;}f=f.toUpperCase();g=g.toUpperCase();return jQuery.sap.endsWith(f,g);};jQuery.sap.startsWith=function s(f,g){if(typeof(g)!="string"||g==""){return false;}if(f==g){return true;}return f.indexOf(g)==0;};jQuery.sap.startsWithIgnoreCase=function b(f,g){if(typeof(g)!="string"||g==""){return false;}f=f.toUpperCase();g=g.toUpperCase();return jQuery.sap.startsWith(f,g);};jQuery.sap.charToUpperCase=function c(f,i){if(!f){return f;}if(!i||isNaN(i)||i<=0||i>=f.length){i=0;}var g=f.charAt(i).toUpperCase();if(i>0){return f.substring(0,i)+g+f.substring(i+1);}return g+f.substring(i+1);};jQuery.sap.padLeft=function p(f,g,l){if(!f){f="";}while(f.length<l){f=g+f;}return f;};jQuery.sap.padRight=function d(f,g,l){if(!f){f="";}while(f.length<l){f=f+g;}return f;};}());
