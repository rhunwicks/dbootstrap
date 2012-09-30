//>>built
define("xstyle/load-imports",[],function(){function n(i,a){if(!a||0<a.indexOf(":")||"/"==a.charAt(0))return a;for(var j,a=((i||location.toString()).replace(/[^\/]*$/,"")+a).replace(/\/\.\//g,"/");j!=a;)j=a,a=a.replace(/\/[^\/]+\/\.\.\//g,"/");return a}function k(){if("undefined"!==typeof XMLHttpRequest)k=function(){return new XMLHttpRequest};else for(var i=k=function(){throw Error("getXhr(): XMLHttpRequest not available");};0<(void 0).length&&k===i;)(function(a){try{new ActiveXObject(a),k=function(){return new ActiveXObject(a)}}catch(i){}})((void 0).shift());
return k()}function r(i,a,j){var d=k();d.open("GET",i,!0);d.onreadystatechange=function(){4===d.readyState&&(400>d.status?a(d.responseText):j(Error("fetchText() failed. status: "+d.statusText)))};d.send(null)}var o={},s={"dom-deep-import":!document.createStyleSheet};return function(i,a){function j(){--loadingCount||(d(p),a&&a(p))}function d(b){for(var g="",e=!b.disabled&&(b.imports||b.rules||b.cssRules),h=0;h<e.length;h++){var c=e[h];c.href&&(g+=d(c.styleSheet||c))}return b.source=g+b.localSource}
function k(b,g){var e=n(g,b.correctHref||b.href);if(!b.addRule)b.addRule=function(b,a,c){return this.insertRule(b+"{"+a+"}",0<=c?c:this.cssRules.length)};if(!b.deleteRule)b.deleteRule=b.removeRule;var h=e&&o[e];if(h){var c;if(h!=b){var a=b.parentStyleSheet,f=h.ownerElement;(f.compareDocumentPosition?2!=f.compareDocumentPosition(i):f.sourceIndex<=i.sourceIndex)?c=b:(c=h,h=o[e]=b);c.addRule=function(b,a,c){h.addRule(b,a,-1<c?c:-1)};c.deleteRule=function(b){h.deleteRule(b)};var d=c.ownerNode||!a&&c.owningElement;
if(d)d.parentNode.removeChild(d);else if(c.disabled=!0,"cssText"in c)c.cssText="";else if(d=c.ownerRule)try{for(var a=d.parentStyleSheet,l=a.cssRules,f=0;f<l.length;f++)if(l[f]==d){a.deleteRule(f);break}return!0}catch(m){}}}if(c!=b){if(e)o[e]=b,b.ownerElement=i,loadingCount++,r(e,function(a){b.localSource=a;j()});a=b.rules||b.cssRules;for(f=0;f<a.length;f++)if(l=a[f],l.selectorText&&"x-"==l.selectorText.substring(0,2))b.needsParsing=!0;c=b.imports||a;for(f=0;f<c.length;f++)if(l=c[f],l.href&&(a=b,
a=l.styleSheet||l,k(a,e)&&f--,a.needsParsing))b.needsParsing=!0}}var p=i.sheet||i.styleSheet;loadingCount=1;if(!s["dom-deep-import"]){var q=function(b,a){var e=[];b.cssText.replace(/@import url\( ([^ ]+) \)/g,function(b,c){e.push(n(a,c))});return e},m=function(){var a,g=i.styleSheet;if(!g.processed){var e=g.correctHref=n(location.toString(),g.href);if(!g.computedUrls)g.computedUrls=q(g,e);for(e=0;e<g.imports.length;e++){var h=g.imports[e];if(!h.cssText&&!h.imports.length){setTimeout(m,50);return}for(var c=
h.correctHref=g.computedUrls[e],c=q(h,c),d=0;d<h.imports.length;d++){var f=h.imports[d];if(!f.correctHref){a=!0;i.onload=m;var j=c[d]||h.href;g.computedUrls.splice(e,0,j);try{g.addImport(j,e++)}catch(l){}f.correctHref=j}}}a?setTimeout(m,50):(g.processed=!0,k(g))}};m();return j()}k(p);j()}});