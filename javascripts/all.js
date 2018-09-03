!function(){if("ontouchstart"in window){var t,e,i,n,o,s,r={};t=function(t,e){return Math.abs(t[0]-e[0])>5||Math.abs(t[1]-e[1])>5},e=function(t){this.startXY=[t.touches[0].clientX,t.touches[0].clientY],this.threshold=!1},i=function(e){return this.threshold?!1:void(this.threshold=t(this.startXY,[e.touches[0].clientX,e.touches[0].clientY]))},n=function(e){if(!this.threshold&&!t(this.startXY,[e.changedTouches[0].clientX,e.changedTouches[0].clientY])){var i=e.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.simulated=!0,e.target.dispatchEvent(n)}},o=function(t){var e=Date.now(),i=e-r.time,n=t.clientX,o=t.clientY,a=[Math.abs(r.x-n),Math.abs(r.y-o)],l=s(t.target,"A")||t.target,c=l.nodeName,h="A"===c,u=window.navigator.standalone&&h&&t.target.getAttribute("href");return r.time=e,r.x=n,r.y=o,(!t.simulated&&(500>i||1500>i&&a[0]<50&&a[1]<50)||u)&&(t.preventDefault(),t.stopPropagation(),!u)?!1:(u&&(window.location=l.getAttribute("href")),void(l&&l.classList&&(l.classList.add("energize-focus"),window.setTimeout(function(){l.classList.remove("energize-focus")},150))))},s=function(t,e){for(var i=t;i!==document.body;){if(!i||i.nodeName===e)return i;i=i.parentNode}return null},document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",i,!1),document.addEventListener("touchend",n,!1),document.addEventListener("click",o,!0)}}(),/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(t,e,i,n){if(3===t.nodeType){var o=t.data.match(e);if(o){var s=document.createElement(i||"span");s.className=n||"highlight";var r=t.splitText(o.index);r.splitText(o[0].length);var a=r.cloneNode(!0);return s.appendChild(a),r.parentNode.replaceChild(s,r),1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName)&&(t.tagName!==i.toUpperCase()||t.className!==n))for(var l=0;l<t.childNodes.length;l++)l+=jQuery.highlight(t.childNodes[l],e,i,n);return 0}}),jQuery.fn.unhighlight=function(t){var e={className:"highlight",element:"span"};return jQuery.extend(e,t),this.find(e.element+"."+e.className).each(function(){var t=this.parentNode;t.replaceChild(this.firstChild,this),t.normalize()}).end()},jQuery.fn.highlight=function(t,e){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(i,e),t.constructor===String&&(t=[t]),t=jQuery.grep(t,function(t){return""!=t}),t=jQuery.map(t,function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==t.length)return this;var n=i.caseSensitive?"":"i",o="("+t.join("|")+")";i.wordsOnly&&(o="\\b"+o+"\\b");var s=new RegExp(o,n);return this.each(function(){jQuery.highlight(this,s,i.element,i.className)})},/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(t,e){var i=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(s){}o(e)},t.widget=function(i,n,o){var s,r,a,l,c={},h=i.split(".")[0];i=i.split(".")[1],s=h+"-"+i,o||(o=n,n=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[h]=t[h]||{},r=t[h][i],a=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new a(t,i)},t.extend(a,r,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),l=new n,l.options=t.widget.extend({},l.options),t.each(o,function(i,o){return t.isFunction(o)?(c[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,s=this._superApply;return this._super=t,this._superApply=e,i=o.apply(this,arguments),this._super=n,this._superApply=s,i}}(),e):(c[i]=o,e)}),a.prototype=t.widget.extend(l,{widgetEventPrefix:r?l.widgetEventPrefix:i},c,{constructor:a,namespace:h,widgetName:i,widgetFullName:s}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete r._childConstructors):n._childConstructors.push(a),t.widget.bridge(i,a)},t.widget.extend=function(i){for(var o,s,r=n.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])s=r[a][o],r[a].hasOwnProperty(o)&&s!==e&&(i[o]=t.isPlainObject(s)?t.isPlainObject(i[o])?t.widget.extend({},i[o],s):t.widget.extend({},s):s);return i},t.widget.bridge=function(i,o){var s=o.prototype.widgetFullName||i;t.fn[i]=function(r){var a="string"==typeof r,l=n.call(arguments,1),c=this;return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){var n,o=t.data(this,s);return o?t.isFunction(o[r])&&"_"!==r.charAt(0)?(n=o[r].apply(o,l),n!==o&&n!==e?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):e):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var e=t.data(this,s);e?e.option(r||{})._init():t.data(this,s,new o(r,this))}),c}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var o,s,r,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(s=a[i]=t.widget.extend({},this.options[i]),r=0;o.length-1>r;r++)s[o[r]]=s[o[r]]||{},s=s[o[r]];if(i=o.pop(),n===e)return s[i]===e?null:s[i];s[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var s,r=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=s=t(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,s=this.widget()),t.each(o,function(o,a){function l(){return i||r.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?r[a]:a).apply(r,arguments):e}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||t.guid++);var c=o.match(/^(\w+)\s*(.*)$/),h=c[1]+r.eventNamespace,u=c[2];u?s.delegate(u,h,l):n.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i,n){"use strict";var o="tocify",s="tocify-focus",r="tocify-hover",a="tocify-hide",l="tocify-header",c="."+l,h="tocify-subheader",u="."+h,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,n=this,s=n.options.ignoreSelector;return e=t(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),e.length?(n.element.addClass(o),void e.each(function(e){t(this).is(s)||(i=t("<ul/>",{id:l+e,"class":l}).append(n._nestElements(t(this),e)),n.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(n.options.selectors).length?t(this).filter(n.options.selectors).each(function(){t(this).is(s)||n._appendSubheaders.call(this,n,i)}):t(this).find(n.options.selectors).each(function(){t(this).is(s)||n._appendSubheaders.call(this,n,i)})}))})):void n.element.addClass(a)},_setActiveElement:function(t){var i=this,n=e.location.hash.substring(1),o=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),o.addClass(i.focusClass),i.options.showAndHide&&o.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&t&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var n,o,s;return n=t.grep(this.items,function(t){return t===e.text()}),this.items.push(n.length?e.text()+i:e.text()),s=this._generateHashValue(n,e,i),o=t("<li/>",{"class":d,"data-unique":s}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:s,"data-unique":s})),o},_generateHashValue:function(t,e,i){var n="",o=this.options.hashGenerator;if("pretty"===o){for(n=e.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof o?o(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(n+=""+i),n},_appendSubheaders:function(e,i){var n=t(this).index(e.options.selectors),o=t(e.options.selectors).eq(n-1),s=+t(this).prop("tagName").charAt(1),r=+o.prop("tagName").charAt(1);r>s?e.element.find(u+"[data-tag="+s+"]").last().append(e._nestElements(t(this),n)):s===r?i.find(f).last().after(e._nestElements(t(this),n)):i.find(f).last().after(t("<ul/>",{"class":h,"data-tag":s})).next(u).append(e._nestElements(t(this),n))},_setEventHandlers:function(){var o=this;this.element.on("click.tocify","li",function(){if(o.options.history&&(e.location.hash=t(this).attr("data-unique")),o.element.find("."+o.focusClass).removeClass(o.focusClass),t(this).addClass(o.focusClass),o.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');o._triggerShow(i)}o._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(o.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==o.options.theme&&t(this).removeClass(o.hoverClass)}}),t(e).on("resize",function(){o.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var s,r,a,l,c=t(e).scrollTop(),h=t(e).height(),u=t(i).height(),d=t("body")[0].scrollHeight;if(o.options.extendPage&&(o.webkit&&c>=d-h-o.options.extendPageOffset||!o.webkit&&h+c>u-o.options.extendPageOffset)&&!t(g).length){if(r=t('div[data-unique="'+t(f).last().attr("data-unique")+'"]'),!r.length)return;a=r.offset().top,t(o.options.context).append(t("<div />",{"class":p,height:Math.abs(a-c)+"px","data-unique":p})),o.extendPageScroll&&(l=o.element.find("li.active"),o._scrollTo(t("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var r,a=null;0==o.cachedHeights.length&&o.calculateHeights();var l=t(e).scrollTop();if(o.cachedAnchors.each(function(t){return o.cachedHeights[t]-l<0?void(a=t):!1}),r=t(o.cachedAnchors[a]).attr("data-unique"),s=t('li[data-unique="'+r+'"]'),o.options.highlightOnScroll&&s.length&&!s.hasClass(o.focusClass)){o.element.find("."+o.focusClass).removeClass(o.focusClass),s.addClass(o.focusClass);var c=o.tocifyWrapper,h=t(s).closest(".tocify-header"),u=h.offset().top,d=c.offset().top,f=u-d;if(f>=t(e).height()){var p=f+c.scrollTop();c.scrollTop(p)}else 0>f&&c.scrollTop(0)}o.options.scrollHistory&&e.location.hash!=="#"+r&&r!==n&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+r,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),o.options.showAndHideOnScroll&&o.options.showAndHide&&o._triggerShow(s,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var n=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=n}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(u).length||e.parent().is(c)||e.parent().is(":visible")?e.children(u).length||e.parent().is(c)||(e=e.closest(u)):e=e.parents(u).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return i.hide(t(u).not(e.parent().is(c)?e:e.closest(c).find(u).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(c)||t.next().is(u)?i.show(t.next(u),e):t.parent().is(u)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(c+","+u).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=s,this.hoverClass=r),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,n=i.options.smoothScroll||0,o=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(o)?o.call():o)+"px"},{duration:n})}),i}})}),/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.2
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
function(){var t=function(e){var i=new t.Index;return i.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),e&&e.call(i,i),i};t.version="0.5.2",/*!
 * lunr.utils
 * Copyright (C) 2014 Oliver Nightingale
 */
t.utils={},t.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),/*!
 * lunr.EventEmitter
 * Copyright (C) 2014 Oliver Nightingale
 */
t.EventEmitter=function(){this.events={}},t.EventEmitter.prototype.addListener=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),i=t;if("function"!=typeof e)throw new TypeError("last argument must be a function");i.forEach(function(t){this.hasHandler(t)||(this.events[t]=[]),this.events[t].push(e)},this)},t.EventEmitter.prototype.removeListener=function(t,e){if(this.hasHandler(t)){var i=this.events[t].indexOf(e);this.events[t].splice(i,1),this.events[t].length||delete this.events[t]}},t.EventEmitter.prototype.emit=function(t){if(this.hasHandler(t)){var e=Array.prototype.slice.call(arguments,1);this.events[t].forEach(function(t){t.apply(void 0,e)})}},t.EventEmitter.prototype.hasHandler=function(t){return t in this.events},/*!
 * lunr.tokenizer
 * Copyright (C) 2014 Oliver Nightingale
 */
t.tokenizer=function(t){if(!arguments.length||null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return t.toLowerCase()});for(var e=t.toString().replace(/^\s+/,""),i=e.length-1;i>=0;i--)if(/\S/.test(e.charAt(i))){e=e.substring(0,i+1);break}return e.split(/\s+/).map(function(t){return t.toLowerCase()})},/*!
 * lunr.Pipeline
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions={},t.Pipeline.registerFunction=function(e,i){i in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+i),e.label=i,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){var i=e.label&&e.label in this.registeredFunctions;i||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var i=new t.Pipeline;return e.forEach(function(e){var n=t.Pipeline.registeredFunctions[e];if(!n)throw new Error("Cannot load un-registered function: "+e);i.add(n)}),i},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){t.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},t.Pipeline.prototype.after=function(e,i){t.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(e)+1;this._stack.splice(n,0,i)},t.Pipeline.prototype.before=function(e,i){t.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(e);this._stack.splice(n,0,i)},t.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);this._stack.splice(e,1)},t.Pipeline.prototype.run=function(t){for(var e=[],i=t.length,n=this._stack.length,o=0;i>o;o++){for(var s=t[o],r=0;n>r&&(s=this._stack[r](s,o,t),void 0!==s);r++);void 0!==s&&e.push(s)}return e},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},/*!
 * lunr.Vector
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},t.Vector.Node=function(t,e,i){this.idx=t,this.val=e,this.next=i},t.Vector.prototype.insert=function(e,i){var n=this.list;if(!n)return this.list=new t.Vector.Node(e,i,n),this.length++;for(var o=n,s=n.next;void 0!=s;){if(e<s.idx)return o.next=new t.Vector.Node(e,i,s),this.length++;o=s,s=s.next}return o.next=new t.Vector.Node(e,i,s),this.length++},t.Vector.prototype.magnitude=function(){if(this._magniture)return this._magnitude;for(var t,e=this.list,i=0;e;)t=e.val,i+=t*t,e=e.next;return this._magnitude=Math.sqrt(i)},t.Vector.prototype.dot=function(t){for(var e=this.list,i=t.list,n=0;e&&i;)e.idx<i.idx?e=e.next:e.idx>i.idx?i=i.next:(n+=e.val*i.val,e=e.next,i=i.next);return n},t.Vector.prototype.similarity=function(t){return this.dot(t)/(this.magnitude()*t.magnitude())},/*!
 * lunr.SortedSet
 * Copyright (C) 2014 Oliver Nightingale
 */
t.SortedSet=function(){this.length=0,this.elements=[]},t.SortedSet.load=function(t){var e=new this;return e.elements=t,e.length=t.length,e},t.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t)},this),this.length=this.elements.length},t.SortedSet.prototype.toArray=function(){return this.elements.slice()},t.SortedSet.prototype.map=function(t,e){return this.elements.map(t,e)},t.SortedSet.prototype.forEach=function(t,e){return this.elements.forEach(t,e)},t.SortedSet.prototype.indexOf=function(t,e,i){var e=e||0,i=i||this.elements.length,n=i-e,o=e+Math.floor(n/2),s=this.elements[o];return 1>=n?s===t?o:-1:t>s?this.indexOf(t,o,i):s>t?this.indexOf(t,e,o):s===t?o:void 0},t.SortedSet.prototype.locationFor=function(t,e,i){var e=e||0,i=i||this.elements.length,n=i-e,o=e+Math.floor(n/2),s=this.elements[o];if(1>=n){if(s>t)return o;if(t>s)return o+1}return t>s?this.locationFor(t,o,i):s>t?this.locationFor(t,e,o):void 0},t.SortedSet.prototype.intersect=function(e){for(var i=new t.SortedSet,n=0,o=0,s=this.length,r=e.length,a=this.elements,l=e.elements;;){if(n>s-1||o>r-1)break;a[n]!==l[o]?a[n]<l[o]?n++:a[n]>l[o]&&o++:(i.add(a[n]),n++,o++)}return i},t.SortedSet.prototype.clone=function(){var e=new t.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},t.SortedSet.prototype.union=function(t){var e,i,n;return this.length>=t.length?(e=this,i=t):(e=t,i=this),n=e.clone(),n.add.apply(n,i.toArray()),n},t.SortedSet.prototype.toJSON=function(){return this.toArray()},/*!
 * lunr.Index
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Index=function(){this._fields=[],this._ref="id",this.pipeline=new t.Pipeline,this.documentStore=new t.Store,this.tokenStore=new t.TokenStore,this.corpusTokens=new t.SortedSet,this.eventEmitter=new t.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},t.Index.prototype.on=function(){var t=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,t)},t.Index.prototype.off=function(t,e){return this.eventEmitter.removeListener(t,e)},t.Index.load=function(e){e.version!==t.version&&t.utils.warn("version mismatch: current "+t.version+" importing "+e.version);var i=new this;return i._fields=e.fields,i._ref=e.ref,i.documentStore=t.Store.load(e.documentStore),i.tokenStore=t.TokenStore.load(e.tokenStore),i.corpusTokens=t.SortedSet.load(e.corpusTokens),i.pipeline=t.Pipeline.load(e.pipeline),i},t.Index.prototype.field=function(t,e){var e=e||{},i={name:t,boost:e.boost||1};return this._fields.push(i),this},t.Index.prototype.ref=function(t){return this._ref=t,this},t.Index.prototype.add=function(e,i){var n={},o=new t.SortedSet,s=e[this._ref],i=void 0===i?!0:i;this._fields.forEach(function(i){var s=this.pipeline.run(t.tokenizer(e[i.name]));n[i.name]=s,t.SortedSet.prototype.add.apply(o,s)},this),this.documentStore.set(s,o),t.SortedSet.prototype.add.apply(this.corpusTokens,o.toArray());for(var r=0;r<o.length;r++){var a=o.elements[r],l=this._fields.reduce(function(t,e){var i=n[e.name].length;if(!i)return t;var o=n[e.name].filter(function(t){return t===a}).length;return t+o/i*e.boost},0);this.tokenStore.add(a,{ref:s,tf:l})}i&&this.eventEmitter.emit("add",e,this)},t.Index.prototype.remove=function(t,e){var i=t[this._ref],e=void 0===e?!0:e;if(this.documentStore.has(i)){var n=this.documentStore.get(i);this.documentStore.remove(i),n.forEach(function(t){this.tokenStore.remove(t,i)},this),e&&this.eventEmitter.emit("remove",t,this)}},t.Index.prototype.update=function(t,e){var e=void 0===e?!0:e;this.remove(t,!1),this.add(t,!1),e&&this.eventEmitter.emit("update",t,this)},t.Index.prototype.idf=function(t){var e="@"+t;if(Object.prototype.hasOwnProperty.call(this._idfCache,e))return this._idfCache[e];var i=this.tokenStore.count(t),n=1;return i>0&&(n=1+Math.log(this.tokenStore.length/i)),this._idfCache[e]=n},t.Index.prototype.search=function(e){var i=this.pipeline.run(t.tokenizer(e)),n=new t.Vector,o=[],s=this._fields.reduce(function(t,e){return t+e.boost},0),r=i.some(function(t){return this.tokenStore.has(t)},this);if(!r)return[];i.forEach(function(e,i,r){var a=1/r.length*this._fields.length*s,l=this,c=this.tokenStore.expand(e).reduce(function(i,o){var s=l.corpusTokens.indexOf(o),r=l.idf(o),c=1,h=new t.SortedSet;if(o!==e){var u=Math.max(3,o.length-e.length);c=1/Math.log(u)}return s>-1&&n.insert(s,a*r*c),Object.keys(l.tokenStore.get(o)).forEach(function(t){h.add(t)}),i.union(h)},new t.SortedSet);o.push(c)},this);var a=o.reduce(function(t,e){return t.intersect(e)});return a.map(function(t){return{ref:t,score:n.similarity(this.documentVector(t))}},this).sort(function(t,e){return e.score-t.score})},t.Index.prototype.documentVector=function(e){for(var i=this.documentStore.get(e),n=i.length,o=new t.Vector,s=0;n>s;s++){var r=i.elements[s],a=this.tokenStore.get(r)[e].tf,l=this.idf(r);o.insert(this.corpusTokens.indexOf(r),a*l)}return o},t.Index.prototype.toJSON=function(){return{version:t.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},t.Index.prototype.use=function(t){var e=Array.prototype.slice.call(arguments,1);e.unshift(this),t.apply(this,e)},/*!
 * lunr.Store
 * Copyright (C) 2014 Oliver Nightingale
 */
t.Store=function(){this.store={},this.length=0},t.Store.load=function(e){var i=new this;return i.length=e.length,i.store=Object.keys(e.store).reduce(function(i,n){return i[n]=t.SortedSet.load(e.store[n]),i},{}),i},t.Store.prototype.set=function(t,e){this.store[t]=e,this.length=Object.keys(this.store).length},t.Store.prototype.get=function(t){return this.store[t]},t.Store.prototype.has=function(t){return t in this.store},t.Store.prototype.remove=function(t){this.has(t)&&(delete this.store[t],this.length--)},t.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
t.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",n="[aeiouy]",o=i+"[^aeiouy]*",s=n+"[aeiou]*",r="^("+o+")?"+s+o,a="^("+o+")?"+s+o+"("+s+")?$",l="^("+o+")?"+s+o+s+o,c="^("+o+")?"+n;return function(i){var s,h,u,d,f,p,g;if(i.length<3)return i;if(u=i.substr(0,1),"y"==u&&(i=u.toUpperCase()+i.substr(1)),d=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,d.test(i)?i=i.replace(d,"$1$2"):f.test(i)&&(i=i.replace(f,"$1$2")),d=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,d.test(i)){var m=d.exec(i);d=new RegExp(r),d.test(m[1])&&(d=/.$/,i=i.replace(d,""))}else if(f.test(i)){var m=f.exec(i);s=m[1],f=new RegExp(c),f.test(s)&&(i=s,f=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),g=new RegExp("^"+o+n+"[^aeiouwxy]$"),f.test(i)?i+="e":p.test(i)?(d=/.$/,i=i.replace(d,"")):g.test(i)&&(i+="e"))}if(d=/^(.+?)y$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(c),d.test(s)&&(i=s+"i")}if(d=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,d.test(i)){var m=d.exec(i);s=m[1],h=m[2],d=new RegExp(r),d.test(s)&&(i=s+t[h])}if(d=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,d.test(i)){var m=d.exec(i);s=m[1],h=m[2],d=new RegExp(r),d.test(s)&&(i=s+e[h])}if(d=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(l),d.test(s)&&(i=s)}else if(f.test(i)){var m=f.exec(i);s=m[1]+m[2],f=new RegExp(l),f.test(s)&&(i=s)}if(d=/^(.+?)e$/,d.test(i)){var m=d.exec(i);s=m[1],d=new RegExp(l),f=new RegExp(a),p=new RegExp("^"+o+n+"[^aeiouwxy]$"),(d.test(s)||f.test(s)&&!p.test(s))&&(i=s)}return d=/ll$/,f=new RegExp(l),d.test(i)&&f.test(i)&&(d=/.$/,i=i.replace(d,"")),"y"==u&&(i=u.toLowerCase()+i.substr(1)),i}}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),/*!
 * lunr.stopWordFilter
 * Copyright (C) 2014 Oliver Nightingale
 */
t.stopWordFilter=function(e){return-1===t.stopWordFilter.stopWords.indexOf(e)?e:void 0},t.stopWordFilter.stopWords=new t.SortedSet,t.stopWordFilter.stopWords.length=119,t.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),/*!
 * lunr.trimmer
 * Copyright (C) 2014 Oliver Nightingale
 */
t.trimmer=function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")},t.Pipeline.registerFunction(t.trimmer,"trimmer"),/*!
 * lunr.stemmer
 * Copyright (C) 2014 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
t.TokenStore=function(){this.root={docs:{}},this.length=0},t.TokenStore.load=function(t){var e=new this;return e.root=t.root,e.length=t.length,e},t.TokenStore.prototype.add=function(t,e,i){var i=i||this.root,n=t[0],o=t.slice(1);return n in i||(i[n]={docs:{}}),0===o.length?(i[n].docs[e.ref]=e,void(this.length+=1)):this.add(o,e,i[n])},t.TokenStore.prototype.has=function(t){if(!t)return!1;for(var e=this.root,i=0;i<t.length;i++){if(!e[t[i]])return!1;e=e[t[i]]}return!0},t.TokenStore.prototype.getNode=function(t){if(!t)return{};for(var e=this.root,i=0;i<t.length;i++){if(!e[t[i]])return{};e=e[t[i]]}return e},t.TokenStore.prototype.get=function(t,e){return this.getNode(t,e).docs||{}},t.TokenStore.prototype.count=function(t,e){return Object.keys(this.get(t,e)).length},t.TokenStore.prototype.remove=function(t,e){if(t){for(var i=this.root,n=0;n<t.length;n++){if(!(t[n]in i))return;i=i[t[n]]}delete i.docs[e]}},t.TokenStore.prototype.expand=function(t,e){var i=this.getNode(t),n=i.docs||{},e=e||[];return Object.keys(n).length&&e.push(t),Object.keys(i).forEach(function(i){"docs"!==i&&e.concat(this.expand(t+i,e))},this),e},t.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.lunr=e()}(this,function(){return t})}(),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(t){function e(e){if(e&&""!==e){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+e+"']").addClass("active");for(var i=0;i<o.length;i++)$(".highlight."+o[i]).parent().hide();$(".highlight."+e).parent().show(),t.toc.calculateHeights(),$(window.location.hash).get(0).scrollIntoView(!0)}}function i(t){if(history){var e=window.location.hash;e&&(e=e.replace(/^#+/,"")),history.pushState({},"","?"+t+"#"+e),localStorage.setItem("language",t)}}function n(t){var i=(t[0],localStorage.getItem("language"));o=t,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),o)?(e(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):e(null!==i&&-1!=jQuery.inArray(i,o)?i:o[0])}var o=[];t.setupLanguages=n,t.activateLanguage=e,$(function(){$(".lang-selector a").on("click",function(){var t=$(this).data("language-name");return i(t),e(t),!1}),window.onpopstate=function(){e(window.location.search.substr(1))}})}(window),function(t){function e(){$("h1, h2").each(function(){var t=$(this),e=t.nextUntil("h1, h2");h.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function i(){r=$(".content"),a=$(".dark-box"),l=$(".search-results"),$("#input-search").on("keyup",n)}function n(t){if(s(),l.addClass("visible"),27===t.keyCode&&(this.value=""),this.value){var e=h.search(this.value).filter(function(t){return t.score>1e-4});e.length?(l.empty(),$.each(e,function(t,e){l.append("<li><a href='#"+e.ref+"'>"+$("#"+e.ref).text()+"</a></li>")}),o.call(this)):(l.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else s(),l.removeClass("visible")}function o(){this.value&&r.highlight(this.value,c)}function s(){r.unhighlight(c)}var r,a,l,c=($(t),{element:"span",className:"search-highlight"}),h=new lunr.Index;h.ref("id"),h.field("title",{boost:10}),h.field("body"),h.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(i)}(window),function(t){function e(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var i=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},n=function(){t.toc=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(t,e){return e.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(i),$(".tocify-item").click(i)};$(n),$(e)}(window);