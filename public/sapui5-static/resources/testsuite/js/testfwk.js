/*!
 * SAP UI HTML5 Rendering Library ('SAPUI5')
 *
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("js.testfwk",false);
function setCookie(n,v,d){if(d){var a=new Date();a.setTime(a.getTime()+(d*24*60*60*1000));var e="; expires="+a.toGMTString();}else{var e="";}document.cookie=n+"="+v+e+"; path=/";}
function readCookie(n){var a=n+"=";var b=document.cookie.split(';');for(var i=0;i<b.length;i++){var c=b[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}if(c.indexOf(a)==0){return c.substring(a.length,c.length);}}return null;}
function eraseCookie(n){setCookie(n,"",-1);}
if(!window.sap){sap={};}if(!sap.ui){sap.ui={};}if(!sap.ui.testfwk){sap.ui.testfwk={};}sap.ui.testfwk.TestFWK={sLanguage:navigator.language||navigator.userLanguage,sTheme:"sap_goldreflection",bRTL:false,bAccessibilityMode:true,bDuplicateIdMode:false,sJQueryVersion:"1.7.1"};sap.ui.testfwk.TestFWK.LANGUAGES={"en_US":"English (US)","de":"Deutsch"};sap.ui.testfwk.TestFWK.THEMES={"base":"Base","sap_platinum":"Platinum","sap_goldreflection":"Gold Reflection","sap_hcb":"High Contrast Black","sap_ux":"Ux Target Design","edding":"Edding (EXPERIMENTAL!)","sap_mvi":"Mobile Visual Identity (only for Mobile)"};sap.ui.testfwk.TestFWK.JQUERY_VERSIONS={"1.4.4":"jQuery 1.4.4","1.5.2":"jQuery 1.5.2","1.6.4":"jQuery 1.6.4","1.7.1":"jQuery 1.7.1"};
sap.ui.testfwk.TestFWK.init=function(c){this.oContentWindow=c;this.updateContent();};
sap.ui.testfwk.TestFWK.getContentURL=function(){return this.sContentURL;};
sap.ui.testfwk.TestFWK.setContentURL=function(u,b){this.sContentURL=u;this.updateContent(b);};
sap.ui.testfwk.TestFWK.updateContent=function(u){if(!this.oContentWindow||!this.sContentURL){return;}this.fireContentWillChange();var s=this.addSettingsToURL(this.sContentURL);if(u){this.oContentWindow.document.location.replace(s);}else{this.oContentWindow.document.location.href=s;}};
sap.ui.testfwk.TestFWK.getLanguage=function(){return this.sLanguage;};
sap.ui.testfwk.TestFWK.setLanguage=function(l){if(this.sLanguage!==l){this.sLanguage=l;this.applySettings();}};
sap.ui.testfwk.TestFWK.getTheme=function(){return this.sTheme;};
sap.ui.testfwk.TestFWK.setTheme=function(t){if(this.sTheme!==t){this.sTheme=t;if(this.oContentWindow&&this.oContentWindow.sap&&this.oContentWindow.sap.ui&&this.oContentWindow.sap.ui.getCore){this.oContentWindow.sap.ui.getCore().applyTheme(t);return;}this.applySettings();}};
sap.ui.testfwk.TestFWK.getRTL=function(){return this.bRTL;};
sap.ui.testfwk.TestFWK.setRTL=function(r){if(this.bRTL!==r){this.bRTL=r;this.applySettings();}};
sap.ui.testfwk.TestFWK.getAccessibilityMode=function(){return this.bAccessibilityMode;};
sap.ui.testfwk.TestFWK.setAccessibilityMode=function(a){if(this.bAccessibilityMode!==a){this.bAccessibilityMode=a;this.applySettings();}};
sap.ui.testfwk.TestFWK.getDuplicateIdMode=function(){return this.bDuplicateIdMode;};
sap.ui.testfwk.TestFWK.setDuplicateIdMode=function(d){if(this.bDuplicateIdMode!==d){this.bDuplicateIdMode=d;this.applySettings();}};
sap.ui.testfwk.TestFWK.getJQueryVersion=function(){return this.sJQueryVersion;};
sap.ui.testfwk.TestFWK.setJQueryVersion=function(j){if(this.sJQueryVersion!==j){this.sJQueryVersion=j;this.applySettings();}};
sap.ui.testfwk.TestFWK.applySettings=function(){this.fireSettingsChanged();this.updateContent();};
sap.ui.testfwk.TestFWK.addSettingsToURL=function(u){if(!jQuery.browser.webkit){top.window.location.hash=u.replace(/\?/g,"_");}function a(p,v){if(u.indexOf("?")!=-1){u+="&";}else{u+="?";}u+=p+"="+v;}a("sap-ui-debug",true);if(this.sLanguage){a("sap-ui-language",this.sLanguage);}if(this.sTheme){a("sap-ui-theme",this.sTheme);}if(this.bRTL){a("sap-ui-rtl",this.bRTL);}if(this.bDuplicateIdMode){a("sap-ui-noDuplicateIds",this.bDuplicateIdMode);}a("sap-ui-accessibility",this.bAccessibilityMode);if(this.sJQueryVersion){a("sap-ui-jqueryversion",this.sJQueryVersion);}return u;};
sap.ui.testfwk.TestFWK.onContentLoad=function(){};
sap.ui.testfwk.TestFWK.mSettingsListeners=[];
sap.ui.testfwk.TestFWK.attachSettingsChanged=function(c){this.mSettingsListeners.push(c);};
sap.ui.testfwk.TestFWK.detachSettingsChanged=function(c){for(var i=0;i<this.mSettingsListeners.length;){if(this.mSettingsListeners[i]===c){this.mSettingsListeners.splice(i,1);}else{i++;};}};
sap.ui.testfwk.TestFWK.fireSettingsChanged=function(){for(var i=0;i<this.mSettingsListeners.length;i++){this.mSettingsListeners[i]();}};
sap.ui.testfwk.TestFWK.mContentListeners=[];
sap.ui.testfwk.TestFWK.attachContentWillChange=function(c){this.mContentListeners.push(c);};
sap.ui.testfwk.TestFWK.detachContentWillChange=function(c){for(var i=0;i<this.mContentListeners.length;){if(this.mContentListeners[i]===c){this.mContentListeners.splice(i,1);}else{i++;};}};
sap.ui.testfwk.TestFWK.fireContentWillChange=function(){for(var i=0;i<this.mContentListeners.length;i++){try{this.mContentListeners[i](this.getContentURL());}catch(e){}}};
