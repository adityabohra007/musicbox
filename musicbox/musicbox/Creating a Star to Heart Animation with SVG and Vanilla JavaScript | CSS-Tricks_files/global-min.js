"use strict";
/*!
 * jQuery & Zepto Lazy - v1.7.4
 * http://jquery.eisbehr.de/lazy/
 *
 * Copyright 2012 - 2016, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * $("img.lazy").lazy();
 */function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
/*
jquery-resizable
Version 0.20 - 3/10/2017
© 2015-2017 Rick Strahl, West Wind Technologies
www.west-wind.com
Licensed under MIT License
*/function __CodePenIFrameAddedToPage(){csstricks.makeCodePenEmbedsResizeable()}function BSACallback(){$(".single-ad").each(function(e,t){-1!=t.innerHTML.indexOf("\x3c!-- no ad --\x3e")&&$(t).remove()}),csstricks.hotjarInit()}// This has to be a global function, because of JSONP
function CSSTRICKSAdsinsertAd(e){var t=e.ads[0];if(t.statlink){var a=t.text?t.text:t.description,n=$("<a />",{class:"launchbit-in-article",href:t.statlink,target:"_blank",text:t.description});if(t.pixel&&"http"==t.pixel.substring(0,4))for(var r=t.pixel.split("||"),i=0|Math.round(Date.now()/1e4),s=0;s<r.length;s++){var o=document.createElement("img");o.src=r[s].replace("[timestamp]",i),o.border="0",o.height="1",o.width="1",o.style.display="none",n.append(o)}if(t.image){var l=$("<img />",{src:t.image,alt:"",class:"launchbit-img"});n.prepend(l)}// Put it in!
$("#bsa-ad-1").append(n)}}
//# sourceMappingURL=global-min.js.map
!function(u,T){
/**
   * contains all logic and the whole element handling
   * is packed in a private function outside class to reduce memory usage, because it will not be created on every plugin instance
   * @access private
   * @type {function}
   * @param {LazyPlugin} instance
   * @param {object} config
   * @param {object|Array} items
   * @param {object} events
   * @param {string} namespace
   * @return void
   */
function s(p,h,m,e,t){
/**
     * initialize plugin
     * bind loading to events or set delay time to load all items at once
     * @access private
     * @return void
     */
function a(){
// detect actual device pixel ratio
// noinspection JSUnresolvedVariable
P=1<u.devicePixelRatio,// prepare all initial items
n(m),// if delay time is set load all items at once after delay time
0<=h.delay&&setTimeout(function(){r(!0)},h.delay),// if no delay is set or combine usage is active bind events
(h.delay<0||h.combined)&&(
// create unique event function
e.e=i(h.throttle,function(e){
// reset detected window size on resize event
"resize"===e.type&&(l=c=-1),// execute 'lazy magic'
r(e.all)}),// create function to add new items to instance
e.a=function(e){n(e),m.push.apply(m,e)},// create function to get all instance items left
e.g=function(){
// filter loaded items before return in case internal filter was not running until now
return m=E(m).filter(function(){return!E(this).data(h.loadedName)})},// create function to force loading elements
e.f=function(e){for(var t=0;t<e.length;t++){
// only handle item if available in current instance
var a=m.filter(e[t]);a.length&&r(!1,a)}},// load initial items
r(),// bind lazy load functions to scroll and resize event
// noinspection JSUnresolvedVariable
E(h.appendScroll).on("scroll."+t+" resize."+t,e.e))}
/**
     * prepare items before handle them
     * @access private
     * @param {Array|object|jQuery} items
     * @return void
     */function n(e){for(
// fetch used configurations before loops
var t=h.defaultImage,a=h.placeholder,n=h.imageBase,r=h.srcsetAttribute,i=h.loaderAttribute,s=h._f||{},o=0,l=(// filter items and only add those who not handled yet and got needed attributes available
e=E(e).filter(function(){var e=E(this),t=v(this);return!e.data(h.handledName)&&(e.attr(h.attribute)||e.attr(r)||e.attr(i)||s[t]!==T)}).data("plugin_"+h.name,p)).length;o<l;o++){var c=E(e[o]),u=v(e[o]),d=c.attr(h.imageBaseAttribute)||n;// generate and update source set if an image base is set
u==x&&d&&c.attr(r)&&c.attr(r,g(c.attr(r),d)),// add loader to forced element types
s[u]===T||c.attr(i)||c.attr(i,s[u]),// set default image on every element without source
u==x&&t&&!c.attr($)?c.attr($,t):u==x||!a||c.css(_)&&"none"!=c.css(_)||c.css(_,"url('"+a+"')")}}
/**
     * the 'lazy magic' - check all items
     * @access private
     * @param {boolean} [allItems]
     * @param {object} [forced]
     * @return void
     */function r(e,t){
// skip if no items where left
if(m.length){// loop all available items
for(var a=t||m,n=!1,r=h.imageBase||"",i=h.srcsetAttribute,s=h.handledName,o=0;o<a.length;o++)
// item is at least in loadable area
if(e||t||b(a[o])){var l=E(a[o]),c=v(a[o]),u=l.attr(h.attribute),d=l.attr(h.imageBaseAttribute)||r,g=l.attr(h.loaderAttribute);// is not already handled 
l.data(s)||// and is visible or visibility doesn't matter
h.visibleOnly&&!l.is(":visible")||// and image source or source set attribute is available
!((u||l.attr(i))&&(// and is image tag where attribute is not equal source or source set
c==x&&(d+u!=l.attr($)||l.attr(i)!=l.attr(j))||// or is non image tag where attribute is not equal background
c!=x&&d+u!=l.css(_))||// or custom loader is available
g)||(
// mark element always as handled as this point to prevent double handling
n=!0,l.data(s,!0),// load item
f(l,c,d,g))}// when something was loaded remove them from remaining items
n&&(m=E(m).filter(function(){return!E(this).data(s)}))}else
// destroy instance if option is enabled
h.autoDestroy&&// noinspection JSUnresolvedFunction
p.destroy()}
/**
     * load the given element the lazy way
     * @access private
     * @param {object} element
     * @param {string} tag
     * @param {string} imageBase
     * @param {function} [customLoader]
     * @return void
     */function f(t,e,a,n){
// increment count of items waiting for after load
++k;// extended error callback for correct 'onFinishedAll' handling
var r=function e(){w("onError",t),y(),// prevent further callback calls
r=E.noop};// trigger function before loading image
w("beforeLoad",t);// fetch all double used data here for better code minimization
var i=h.attribute,s=h.srcsetAttribute,o=h.sizesAttribute,l=h.retinaAttribute,c=h.removeAttribute,u=h.loadedName,d=t.attr(l);// handle custom loader
if(n){
// on load callback
var g=function e(){
// remove attribute from element
c&&t.removeAttr(h.loaderAttribute),// mark element as loaded
t.data(u,!0),// call after load event
w(A,t),// remove item from waiting queue and possibly trigger finished event
// it's needed to be asynchronous to run after filter was in _lazyLoadItems
setTimeout(y,1),// prevent further callback calls
g=E.noop};// bind error event to trigger callback and reduce waiting amount
t.off(S).one(S,r).one(C,g),// trigger custom loader and handle response
w(n,t,function(e){e?(t.off(C),g()):(t.off(S),r())})||t.trigger(S)}// handle images
else{
// create image object
var p=E(new Image);// bind error event to trigger callback and reduce waiting amount
p.one(S,r).one(C,function(){
// remove element from view
t.hide(),// set image back to element
// do it as single 'attr' calls, to be sure 'src' is set after 'srcset'
e==x?t.attr(z,p.attr(z)).attr(j,p.attr(j)).attr($,p.attr($)):t.css(_,"url('"+p.attr($)+"')"),// bring it back with some effect!
t[h.effect](h.effectTime),// remove attribute from element
c&&(t.removeAttr(i+" "+s+" "+l+" "+h.imageBaseAttribute),// only remove 'sizes' attribute, if it was a custom one
o!==z&&t.removeAttr(o)),// mark element as loaded
t.data(u,!0),// call after load event
w(A,t),// cleanup image object
p.remove(),// remove item from waiting queue and possibly trigger finished event
y()});// set sources
// do it as single 'attr' calls, to be sure 'src' is set after 'srcset'
var m=(P&&d?d:t.attr(i))||"";p.attr(z,t.attr(o)).attr(j,t.attr(s)).attr($,m?a+m:null),// call after load even on cached image
p.complete&&p.trigger(C)}}
/**
     * check if the given element is inside the current viewport or threshold
     * @access private
     * @param {object} element
     * @return {boolean}
     */function b(e){var t=e.getBoundingClientRect(),a=h.scrollDirection,n=h.threshold,r=// check if element is in loadable area from top
o()+n>t.top&&// check if element is even in loadable are from bottom
-n<t.bottom,i=// check if element is in loadable area from left
s()+n>t.left&&// check if element is even in loadable area from right
-n<t.right;return"vertical"==a?r:"horizontal"==a?i:r&&i}
/**
     * receive the current viewed width of the browser
     * @access private
     * @return {number}
     */function s(){return 0<=l?l:l=E(u).width()}
/**
     * receive the current viewed height of the browser
     * @access private
     * @return {number}
     */function o(){return 0<=c?c:c=E(u).height()}
/**
     * get lowercase tag name of an element
     * @access private
     * @param {object} element
     * @returns {string}
     */function v(e){return e.tagName.toLowerCase()}
/**
     * prepend image base to all srcset entries
     * @access private
     * @param {string} srcset
     * @param {string} imageBase
     * @returns {string}
     */function g(e,t){if(t){
// trim, remove unnecessary spaces and split entries
var a=e.split(",");e="";for(var n=0,r=a.length;n<r;n++)e+=t+a[n].trim()+(n!==r-1?",":"")}return e}
/**
     * helper function to throttle down event triggering
     * @access private
     * @param {number} delay
     * @param {function} callback
     * @return {function}
     */function i(r,i){var s,o=0;return function(e,t){function a(){o=+new Date,i.call(p,e)}var n=+new Date-o;s&&clearTimeout(s),// jshint ignore : line
r<n||!h.enableThrottle||t?a():s=setTimeout(a,r-n)}}
/**
     * reduce count of awaiting elements to 'afterLoad' event and fire 'onFinishedAll' if reached zero
     * @access private
     * @return void
     */function y(){--k,// if no items were left trigger finished event
m.length||k||w("onFinishedAll")}
/**
     * single implementation to handle callbacks, pass element and set 'this' to current instance
     * @access private
     * @param {string|function} callback
     * @param {object} [element]
     * @param {*} [args]
     * @return {boolean}
     */function w(e,t,a){return!!(e=h[e])&&(
// jQuery's internal '$(arguments).slice(1)' are causing problems at least on old iPads
// below is shorthand of 'Array.prototype.slice.call(arguments, 1)'
e.apply(p,[].slice.call(arguments,1)),!0)}// if event driven or window is already loaded don't wait for page loading
/**
     * a helper to trigger the 'onFinishedAll' callback after all other events
     * @access private
     * @type {number}
     */
var k=0,
/**
     * visible content width
     * @access private
     * @type {number}
     */
l=-1,
/**
     * visible content height
     * @access private
     * @type {number}
     */
c=-1,
/**
     * determine possibly detected high pixel density
     * @access private
     * @type {boolean}
     */
P=!1,
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
A="afterLoad",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
C="load",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
S="error",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
x="img",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
$="src",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
j="srcset",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
z="sizes",
/**
     * dictionary entry for better minimization
     * @access private
     * @type {string}
     */
_="background-image";"event"==h.bind||d?a():// noinspection JSUnresolvedVariable
E(u).on(C+"."+t,a)}
/**
   * lazy plugin class constructor
   * @constructor
   * @access private
   * @param {object} elements
   * @param {object} settings
   * @return {object|LazyPlugin}
   */function c(e,t){
/**
     * this lazy plugin instance
     * @access private
     * @type {object|LazyPlugin|LazyPlugin.prototype}
     */
var a=this,
/**
     * this lazy plugin instance configuration
     * @access private
     * @type {object}
     */
n=E.extend({},a.config,t),
/**
     * instance generated event executed on container scroll or resize
     * packed in an object to be referenceable and short named because properties will not be minified
     * @access private
     * @type {object}
     */
r={},
/**
     * unique namespace for instance related events
     * @access private
     * @type {string}
     */
i=n.name+"-"+ ++o;// noinspection JSUndefinedPropertyAssignment
/**
     * wrapper to get or set an entry from plugin instance configuration
     * much smaller on minify as direct access
     * @access public
     * @type {function}
     * @param {string} entryName
     * @param {*} [value]
     * @return {LazyPlugin|*}
     */return a.config=function(e,t){return t===T?n[e]:(n[e]=t,a)},// noinspection JSUndefinedPropertyAssignment
/**
     * add additional items to current instance
     * @access public
     * @param {Array|object|string} items
     * @return {LazyPlugin}
     */
a.addItems=function(e){// jshint ignore : line
return r.a&&r.a("string"===E.type(e)?E(e):e),a},// noinspection JSUndefinedPropertyAssignment
/**
     * get all left items of this instance
     * @access public
     * @returns {object}
     */
a.getItems=function(){return r.g?r.g():{}},// noinspection JSUndefinedPropertyAssignment
/**
     * force lazy to load all items in loadable area right now
     * by default without throttle
     * @access public
     * @type {function}
     * @param {boolean} [useThrottle]
     * @return {LazyPlugin}
     */
a.update=function(e){// jshint ignore : line
return r.e&&r.e({},!e),a},// noinspection JSUndefinedPropertyAssignment
/**
     * force element(s) to load directly, ignoring the viewport
     * @access public
     * @param {Array|object|string} items
     * @return {LazyPlugin}
     */
a.force=function(e){// jshint ignore : line
return r.f&&r.f("string"===E.type(e)?E(e):e),a},// noinspection JSUndefinedPropertyAssignment
/**
     * force lazy to load all available items right now
     * this call ignores throttling
     * @access public
     * @type {function}
     * @return {LazyPlugin}
     */
a.loadAll=function(){// jshint ignore : line
return r.e&&r.e({all:!0},!0),a},// noinspection JSUndefinedPropertyAssignment
/**
     * destroy this plugin instance
     * @access public
     * @type {function}
     * @return undefined
     */
a.destroy=function(){
// unbind instance generated events
// noinspection JSUnresolvedFunction, JSUnresolvedVariable
return E(n.appendScroll).off("."+i,r.e),// noinspection JSUnresolvedVariable
E(u).off("."+i),// clear events
r={},T},// start using lazy and return all elements to be chainable or instance for further use
// noinspection JSUnresolvedVariable
s(a,n,e,r,i),n.chainable?e:a}
/**
   * settings and configuration data
   * @access public
   * @type {object}
   */ // noinspection JSUnresolvedVariable
/**
   * library instance - here and not in construct to be shorter in minimization
   * @return void
   */
var E=u.jQuery||u.Zepto,
/**
   * unique plugin instance id counter
   * @type {number}
   */
o=0,
/**
   * helper to register window load for jQuery 3
   * @type {boolean}
   */
d=!1;
/**
   * make lazy available to jquery - and make it a bit more case-insensitive :)
   * @access public
   * @type {function}
   * @param {object} settings
   * @return void
   */E.fn.Lazy=E.fn.lazy=function(e){return new c(this,e)},
/**
   * helper to add plugins to lazy prototype configuration
   * @access public
   * @type {function}
   * @param {string|Array} names
   * @param {string|Array} [elements]
   * @param {function} loader
   * @return void
   */
E.Lazy=E.lazy=function(e,t,a){// exit here if parameter is not a callable function
if(
// make second parameter optional
E.isFunction(t)&&(a=t,t=[]),E.isFunction(a)){// make parameters an array of names to be sure
e=E.isArray(e)?e:[e],t=E.isArray(t)?t:[t];// add the loader plugin for every name
for(var n=c.prototype.config,r=n._f||(n._f={}),i=0,s=e.length;i<s;i++)(n[e[i]]===T||E.isFunction(n[e[i]]))&&(n[e[i]]=a);// add forced elements loader
for(var o=0,l=t.length;o<l;o++)r[t[o]]=e[0]}},c.prototype.config={
// general
name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:u,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,
// attributes
attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",
// effect
effect:"show",effectTime:0,
// throttle
enableThrottle:!0,throttle:250,
// callbacks
beforeLoad:T,afterLoad:T,onError:T,onFinishedAll:T},// register window load event globally to prevent not loading elements
// since jQuery 3.X ready state is fully async and may be executed after 'load' 
E(u).on("load",function(){d=!0})}(window),function(s){s.fn.fitVids=function(e){var a={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){
// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
var t=document.head||document.getElementsByTagName("head")[0],n=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed, .fluid-width-video-wrapper video {position:absolute;top:0;left:0;width:100%;height:100%;}",r=document.createElement("div");r.innerHTML='<p>x</p><style id="fit-vids-style">'+n+"</style>",t.appendChild(r.childNodes[1])}return e&&s.extend(a,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];a.customSelector&&e.push(a.customSelector);var i=".fitvidsignore";a.ignore&&(i=i+", "+a.ignore);var t=s(this).find(e.join(","));// Disable FitVids on this video.
(// SwfObj conflict patch
t=(t=t.not("object object")).not(i)).each(function(){var e=s(this);if(!(0<e.parents(i).length||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t,a,n=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var r="fitvid"+s.fn.fitVids._count;e.attr("name",r),s.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),e.removeAttr("height").removeAttr("width")}})})},// Internal counter for unique video names.
s.fn.fitVids._count=0}(window.jQuery||window.Zepto),
/*
jquery-resizable
Version 0.20 - 3/10/2017
© 2015-2017 Rick Strahl, West Wind Technologies
www.west-wind.com
Licensed under MIT License
*/
function(e,t){"function"==typeof define&&define.amd?
// AMD
define(["jquery"],e):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?
// CommonJS
module.exports=e(require("jquery")):
// Global jQuery
e(jQuery)}(function(u,e){function d(e,t){return e&&">"===e.trim()[0]?(e=e.trim().replace(/^>\s*/,""),t.find(e)):e?u(e):t}u.fn.resizable||(u.fn.resizable=function e(t){var c={
// selector for handle that starts dragging
handleSelector:null,
// resize the width
resizeWidth:!0,
// resize the height
resizeHeight:!0,
// the side that the width resizing is relative to
resizeWidthFrom:"right",
// the side that the height resizing is relative to
resizeHeightFrom:"bottom",
// hook into start drag operation (event passed)
onDragStart:null,
// hook into stop drag operation (event passed)
onDragEnd:null,
// hook into each drag operation (event passed)
onDrag:null,
// disable touch-action on $handle
// prevents browser level actions like forward back gestures
touchActionNone:!0};return"object"==_typeof(t)&&(c=u.extend(c,t)),this.each(function(){function t(e){e.stopPropagation(),e.preventDefault()}function e(e){
// Prevent dragging a ghost image in HTML5 / Firefox and maybe others
e.preventDefault&&e.preventDefault(),(i=r(e)).width=parseInt(o.width(),10),i.height=parseInt(o.height(),10),s=o.css("transition"),o.css("transition","none"),c.onDragStart&&!1===c.onDragStart(e,o,c)||(c.dragFunc=a,u(document).bind("mousemove.rsz",c.dragFunc),u(document).bind("mouseup.rsz",n),(window.Touch||navigator.maxTouchPoints)&&(u(document).bind("touchmove.rsz",c.dragFunc),u(document).bind("touchend.rsz",n)),u(document).bind("selectstart.rsz",t))}function a(e){var t=r(e),a,n;a="left"===c.resizeWidthFrom?i.width-t.x+i.x:i.width+t.x-i.x,n="top"===c.resizeHeightFrom?i.height-t.y+i.y:i.height+t.y-i.y,c.onDrag&&!1===c.onDrag(e,o,a,n,c)||(c.resizeHeight&&o.height(n),c.resizeWidth&&o.width(a))}function n(e){return e.stopPropagation(),e.preventDefault(),u(document).unbind("mousemove.rsz",c.dragFunc),u(document).unbind("mouseup.rsz",n),(window.Touch||navigator.maxTouchPoints)&&(u(document).unbind("touchmove.rsz",c.dragFunc),u(document).unbind("touchend.rsz",n)),u(document).unbind("selectstart.rsz",t),// reset changed values
o.css("transition",s),c.onDragEnd&&c.onDragEnd(e,o,c),!1}function r(e){var t={x:0,y:0,width:0,height:0};if("number"==typeof e.clientX)t.x=e.clientX,t.y=e.clientY;else{if(!e.originalEvent.touches)return null;t.x=e.originalEvent.touches[0].clientX,t.y=e.originalEvent.touches[0].clientY}return t}var i,s,o=u(this),l=d(c.handleSelector,o);c.touchActionNone&&l.css("touch-action","none"),o.addClass("resizable"),l.bind("mousedown.rsz touchstart.rsz",e)})})}),
// Code highlighting stuff
$("pre.lang-html, pre[rel=HTML]").find("code").addClass("language-markup"),$("code.html, code.lang-html").removeClass().addClass("language-markup").parent().attr("rel","HTML"),$("code.javascript").removeClass().addClass("language-javascript").attr("rel","JavaScript"),$("pre[rel=JavaScript], pre.lang-js, pre.JavaScript").attr("rel","JavaScript").find("code").removeClass().addClass("language-javascript"),$("pre[rel=jQuery]").find("code").removeClass().addClass("language-javascript"),$("pre[rel='CSS'], pre[rel='LESS']").find("code").removeClass().addClass("language-css"),$("code.css, code.lang-css").removeClass().addClass("language-css").parent().attr("rel","CSS"),$("pre[rel='Sass'], pre[rel='SASS'], pre[rel='SCSS']").removeClass().addClass("language-scss"),$("pre[rel=PHP]").attr("rel","PHP").find("code").removeClass().addClass("language-javascript"),$("code.php").removeClass().addClass("language-javascript").parent().attr("rel","PHP");
// @codekit-prepend "libs/jquery.lazy.js"
// @codekit-prepend "libs/jquery.fitvids.js"
// @codekit-prepend "libs/jquery.resizable.js"
// @codekit-prepend "highlighting-fixes.js"
// @codekit-append "libs/prism.js"
// @codekit-append "bsa.js"
var csstricks={el:{videoWrappers:$("article, .photo-grid, .single-video-wrapper, .gallery-grid .grid-5-6"),body:$("body")},searchOpen:!1,init:function e(){csstricks.getAds(),csstricks.bindUIActions(),csstricks.makeVideosFluidWidth(),csstricks.linkHeaders(),csstricks.mobilizeBrowserSupportTables(),csstricks.commentTogggle()},bindUIActions:function e(){$("#comments").on("click",".comment.buried",csstricks.revealComment),$("#search-opener").on("click",csstricks.searchOpener),$("#mobile-menu-toggle").on("click",csstricks.mobileMenuToggle)},mobileMenuToggle:function e(){$("#main-nav").toggleClass("open")},searchOpener:function e(t){csstricks.searchOpen=!csstricks.searchOpen,$("body").toggleClass("search-is-open"),csstricks.searchOpen&&setTimeout(function(){$("#q").focus()},1)},makeVideosFluidWidth:function e(){csstricks.el.videoWrappers.fitVids({customSelector:'video, iframe[src^="https://noti.st/"]'})},
// Fires when __CodePenIFrameAddedToPage() fires.
makeCodePenEmbedsResizeable:function e(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(625<window.innerWidth&&!t){var s=1e3,o=320,l=150,r=$(".page-wrap");// calculated below
$(".cp_embed_wrapper").each(function(){var e=$(this),t=e.find("iframe");// $wrapper.css({
//     left: -articleContent[0].offsetLeft - 100 + 4rem + 'px',
//     width: pageWrap[0].offsetWidth + 'px'
// });
e.append("<div class='win-size-grip'></div>");var a=t.outerHeight();e.css("height",a),// Can't set this in CSS, otherwise height measurement will be wrong
t.css("height","100%"),e.resizable({handleSelector:"> .win-size-grip",onDragStart:function e(t,a,n){a.addClass("dragging"),s=r.width()},onDragEnd:function e(t,a,n){a.removeClass("dragging")},onDrag:function e(t,a,n,r,i){return s<n&&(n=s),n<o&&(n=o),r<l&&(r=l),a.width(n),a.height(r),!1}})})}},revealComment:function e(t){$(t.currentTarget).removeClass("buried")},linkHeaders:function e(){var t;$("article h3, article h4").each(function(e){var t=$(this);// Probably a flexbox layout style page
if(0==t.has("a").length){var a="";void 0===t.attr("id")?(
// give it ID
a="article-header-id-"+e,t.attr("id",a)):
// already has ID
a=t.attr("id");var n=$("<a />",{html:"#",class:"article-headline-link",href:"#"+a});t.addClass("has-header-link").prepend(n)}})},mobilizeBrowserSupportTables:function e(){$(".browser-support-table").each(function(){var a=[];$(this).find("th").each(function(){a.push($(this).text())}).end().find("td").each(function(e,t){$(t).attr("data-browser-name",a[e])})})},getAds:function e(){var s=$("#all-ads");if(s.length)$.ajax({url:"/wp-content/themes/CSS-Tricks-16/ads/ads.php",cache:!1}).done(function(e){var t,a=$(e).find(".single-ad"),n=function e(t){return Math.floor(Math.random()*t)},r=$.map(a,function(){var e=n(a.length),t=$(a[e]).clone(!0).addClass("ad-"+a.length)[0];return a.splice(e,1),t});s.html(r);var i=document.createElement("script");i.async=!0,i.src="//s3.buysellads.com/ac/bsa.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(i)});else{
// Still kick off BSA even if no sidebar
var t=document.createElement("script");t.async=!0,t.src="//s3.buysellads.com/ac/bsa.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}},commentTogggle:function e(){($("body").hasClass("single")||$("body").hasClass("page"))&&(__should_toggle_comments?($("#show-comments-wrap").removeClass("hide"),$("#commentlist").addClass("hide"),$("#show-comments-button").on("click",function(){$("#commentlist").removeClass("hide"),$("#show-comments-wrap").addClass("hide"),$("img.lazyload-gravatar").each(function(){$(this).attr("src",$(this).data("src"))})})):$("img.lazyload-gravatar").Lazy())},hotjarInit:function e(){var t=document.getElementById("module-hotjar"),a=document.getElementById("moving-heatmap-area");t.addEventListener("mousemove",function(e){console.log(e),a.style.setProperty("--mouse-x",e.pageX-t.offsetLeft+"px"),a.style.setProperty("--mouse-y",e.pageY-t.offsetTop+"px")})}};csstricks.init();
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+css-extras+json+php+jsx+scss&plugins=line-highlight */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){
// Private helper vars
var u=/\blang(?:uage)?-(\w+)\b/i,a=0,z=_self.Prism={util:{encode:function e(t){return t instanceof o?new o(t.type,z.util.encode(t.content),t.alias):"Array"===z.util.type(t)?t.map(z.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function e(t){return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]},objId:function e(t){return t.__id||Object.defineProperty(t,"__id",{value:++a}),t.__id},
// Deep clone a language definition (e.g. to extend it)
clone:function e(t){var a;switch(z.util.type(t)){case"Object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=z.util.clone(t[n]));return e;case"Array":
// Check for existence for IE8
return t.map&&t.map(function(e){return z.util.clone(e)})}return t}},languages:{extend:function e(t,a){var n=z.util.clone(z.languages[t]);for(var r in a)n[r]=a[r];return n},
/**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
insertBefore:function e(a,t,n,r){var i=(r=r||z.languages)[a];if(2==arguments.length){for(var s in n=t)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=i[l]}// Update references in other language definitions
return z.languages.DFS(z.languages,function(e,t){t===r[a]&&e!=a&&(this[e]=o)}),r[a]=o},
// Traverse a language definition with Depth First Search
DFS:function e(t,a,n,r){for(var i in r=r||{},t)t.hasOwnProperty(i)&&(a.call(t,i,t[i],n||i),"Object"!==z.util.type(t[i])||r[z.util.objId(t[i])]?"Array"!==z.util.type(t[i])||r[z.util.objId(t[i])]||(r[z.util.objId(t[i])]=!0,z.languages.DFS(t[i],a,i,r)):(r[z.util.objId(t[i])]=!0,z.languages.DFS(t[i],a,null,r)))}},plugins:{},highlightAll:function e(t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};z.hooks.run("before-highlightall",n);for(var r=n.elements||document.querySelectorAll(n.selector),i=0,s;s=r[i++];)z.highlightElement(s,!0===t,n.callback)},highlightElement:function e(t,a,n){for(
// Find language
var r,i,s=t;s&&!u.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(u)||[,""])[1],i=z.languages[r]),// Set language on the element, if not present
t.className=t.className.replace(u,"").replace(/\s+/g," ")+" language-"+r,// Set language on the parent, for styling
s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(u,"").replace(/\s+/g," ")+" language-"+r);var o=t.textContent,l={element:t,language:r,grammar:i,code:o};if(o&&i)if(z.hooks.run("before-highlight",l),a&&_self.Worker){var c=new Worker(z.filename);c.onmessage=function(e){l.highlightedCode=e.data,z.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,n&&n.call(l.element),z.hooks.run("after-highlight",l),z.hooks.run("complete",l)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else l.highlightedCode=z.highlight(l.code,l.grammar,l.language),z.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,n&&n.call(t),z.hooks.run("after-highlight",l),z.hooks.run("complete",l);else z.hooks.run("complete",l)},highlight:function e(t,a,n){var r=z.tokenize(t,a);return o.stringify(z.util.encode(r),n)},tokenize:function e(t,a,n){var r=z.Token,i=[t],s=a.rest;if(s){for(var o in s)a[o]=s[o];delete a.rest}e:for(var o in a)if(a.hasOwnProperty(o)&&a[o]){var l=a[o];l="Array"===z.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],d=u.inside,g=!!u.lookbehind,p=!!u.greedy,m=0,h=u.alias;u=u.pattern||u;for(var f=0;f<i.length;f++){
// Don’t cache length as it changes during the loop
var b=i[f];if(i.length>t.length)
// Something went terribly wrong, ABORT, ABORT!
break e;if(!(b instanceof r)){u.lastIndex=0;var v,y=1;// Greedy patterns can override/remove up to two previously matched tokens
if(!(v=u.exec(b))&&p&&f!=i.length-1){
// Reconstruct the original text using the next two tokens
var w=i[f+1].matchedStr||i[f+1],k=b+w,P;if(f<i.length-2&&(k+=i[f+2].matchedStr||i[f+2]),// Try the pattern again on the reconstructed text
u.lastIndex=0,!(v=u.exec(k)))continue;// To be a valid candidate, the new match has to start inside of str
if((P=v.index+(g?v[1].length:0))>=b.length)continue;var A=v.index+v[0].length,C=b.length+w.length;// Number of tokens to delete and replace with the new match
if(y=3,A<=C){if(i[f+1].greedy)continue;y=2,k=k.slice(0,C)}b=k}if(v){g&&(m=v[1].length);var P,v,A=(P=v.index+m)+(v=v[0].slice(m)).length,S=b.slice(0,P),x=b.slice(A),$=[f,y];S&&$.push(S);var j=new r(o,d?z.tokenize(v,d):v,h,v,p);$.push(j),x&&$.push(x),Array.prototype.splice.apply(i,$)}}}}}return i},hooks:{all:{},add:function e(t,a){var n=z.hooks.all;n[t]=n[t]||[],n[t].push(a)},run:function e(t,a){var n=z.hooks.all[t];if(n&&n.length)for(var r=0,i;i=n[r++];)i(a)}}},o=z.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,// Copy of the full string this token was created from
this.matchedStr=n||null,this.greedy=!!r};if(o.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===z.util.type(t))return t.map(function(e){return o.stringify(e,a,t)}).join("");var n={type:t.type,content:o.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if("comment"==n.type&&(n.attributes.spellcheck="true"),t.alias){var r="Array"===z.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,r)}z.hooks.run("wrap",n);var i="";for(var s in n.attributes)i+=(i?" ":"")+s+'="'+(n.attributes[s]||"")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'" '+i+">"+n.content+"</"+n.tag+">"},!_self.document)return _self.addEventListener&&// In worker
_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;_self.postMessage(z.highlight(n,z.languages[a],a)),r&&_self.close()},!1),_self.Prism;//Get current script and highlight
var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(z.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",z.highlightAll)),_self.Prism}();
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */"undefined"!=typeof module&&module.exports&&(module.exports=Prism),// hack for components to work correctly in node.js
"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,class:/\.[-:\.\w]+/,id:/#[-:\.\w]+/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/}),Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,
/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 *    - Extends clike syntax
 *    - Support for PHP 5.3+ (namespaces, traits, generators, etc)
 *    - Smarter constant and function matching
 *
 * Adds the following new token classes:
 *    constant, delimiter, variable, function, package
 */
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),// Shell-like comments are matched after strings, because they are less
// common than strings containing hashes...
Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),// Must be defined after the function pattern
Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),// Add HTML support of the markup language exists
Prism.languages.markup&&(
// Tokenize all inline PHP blocks that are wrapped in <?php ?>
// This allows for easy PHP + markup highlighting
Prism.hooks.add("before-highlight",function(t){"php"===t.language&&(t.tokenStack=[],t.backupCode=t.code,t.code=t.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(e){return t.tokenStack.push(e),"{{{PHP"+t.tokenStack.length+"}}}"}))}),// Restore env.code for other plugins (e.g. line-numbers)
Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),// Re-insert the tokens after highlighting
Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t=0,a;a=e.tokenStack[t];t++)
// The replace prevents $$, $&, $`, $', $n, $nn from being interpreted as special patterns
e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(t+1)+"}}}",Prism.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),// Wrap tokens in classes that are missing them
Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),// Add the rules before all others
Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var a=e.util.clone(e.languages.jsx);delete a.punctuation,a=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:a}),e.languages.insertBefore("inside","attr-value",{script:{
// Allow for one level of nesting
pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:a,alias:"language-javascript"}},e.languages.jsx.tag)}(Prism),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},
// url, compassified
url:/(?:[-a-z]+-)*url(?=\()/i,
// CSS selector regex is not appropriate for Sass
// since there can be lot more things (var, @ directive, nesting..)
// a selector must start at the end of a property or after a brace (end of other rules or nesting)
// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
// can "pass" as a selector- e.g: proper#{$erty})
// this one was hard to do, so please be careful if you edit this one :)
selector:{
// Initial look-ahead is used to prevent matching of blank selectors
pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","property",{
// var and interpolated vars
variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss),function(){function r(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function g(e,t){return t=" "+t+" ",-1<(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)}// Some browsers round the line-height, others don't.
// We need to test for it to position the elements properly.
function i(e,t,a){for(var n=t.replace(/\s+/g,"").split(","),r=+e.getAttribute("data-line-offset")||0,i,s=(p()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),o=0,l;l=n[o++];){var c=+(l=l.split("-"))[0],u=+l[1]||c,d=document.createElement("div");d.textContent=Array(u-c+2).join(" \n"),d.className=(a||"")+" line-highlight",//if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
g(e,"line-numbers")||(d.setAttribute("data-start",c),c<u&&d.setAttribute("data-end",u)),d.style.top=(c-r-1)*s+"px",//allow this to play nicely with the line-numbers plugin
g(e,"line-numbers")?
//need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
e.appendChild(d):(e.querySelector("code")||e).appendChild(d)}}function n(){var e=location.hash.slice(1);// Remove pre-existing temporary lines
r(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var a=e.slice(0,e.lastIndexOf(".")),n=document.getElementById(a);n&&(n.hasAttribute("data-line")||n.setAttribute("data-line",""),i(n,t,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var p=function(){if(void 0===t){var e=document.createElement("div");e.style.fontSize="13px",e.style.lineHeight="1.5",e.style.padding=0,e.style.border=0,e.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(e),// Browsers that round the line-height should have offsetHeight === 38
// The others should have 39.
t=38===e.offsetHeight,document.body.removeChild(e)}return t},t,s=0;// Hack to limit the number of times applyHash() runs
Prism.hooks.add("complete",function(e){var t=e.element.parentNode,a=t&&t.getAttribute("data-line");t&&a&&/pre/i.test(t.nodeName)&&(clearTimeout(s),r(".line-highlight",t).forEach(function(e){e.parentNode.removeChild(e)}),i(t,a),s=setTimeout(n,1))}),window.addEventListener&&window.addEventListener("hashchange",n)}}(),
/* globals __remote_addr */
function(){function e(){t()}function t(){$.ajax({url:"//srv.buysellads.com/ads/CVAITKQ7.json?callback=CSSTRICKSAdsinsertAd&forcenads=1",dataType:"jsonp"})}e()}();
//# sourceMappingURL=global-min.js.map