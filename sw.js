"use strict";var precacheConfig=[["/404.html","0282a7d7eb69149c8f83adc83fa76d62"],["/about/index.html","1b6cf7f83452b9eb6317f45bd288b4eb"],["/archives/2021/08/index.html","32047571ca33aa94e6a527330a337a40"],["/archives/2021/index.html","a0444f9f64635bf944693e18b1cebb98"],["/archives/2022/05/index.html","5d0a317c7114ff5ce26ce18eeaf7ae22"],["/archives/2022/12/index.html","2fd6d6a265b0fa71a04af1e37bd5b736"],["/archives/2022/index.html","de55776d8c32c16a197e89d07bf109d3"],["/archives/index.html","4cbe91081c6ab2f3823b92ec26ee5a6f"],["/atom.xml","02a972e37afb18ac3f3522498c47a307"],["/categories/index.html","597275515b885d9986e609053630fcc6"],["/categories/学习笔记/index.html","1bc7d870ba30355eaae291b813827a28"],["/categories/杂文/index.html","ea8c09d47c0d7a066b909025855890cb"],["/css/codeBlock.css","8920903bc4f9f2e39f2f428643249d62"],["/css/fluid-extention.css","83dabe227a6c3d3092f254f30351be2b"],["/css/font-awesome.min.css","87329abb9a5b089c4d7610be794c8ae7"],["/css/gitalk.css","c6483e3f0e3de8f4e67b08bf96e1260f"],["/css/highlight-dark.css","76f57208d68f32f4d299ad6c2e5ad75c"],["/css/highlight.css","04e5a6e071b3fb713e91f11199150ebb"],["/css/indeximg-hover.css","1753cdb19ab566a5efa25fc13aa04302"],["/css/main.css","39358381402f4f514fa4c5ccdfe9de91"],["/img/alipay.png","ae9c261fe546bf89183f1ab217d88700"],["/img/avatar.png","d00af7a4a9be2556e02ee14bc606df60"],["/img/fluid.png","b103c6e10c1231632614254f3dce79a3"],["/img/loading.gif","9883bbde368c78068baf656b37d41d71"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/wechat.png","3e86d09d789dec8a1940d1e724ce82ea"],["/img/文章/default.jpg","343ded5879e948d494f7457338722cc0"],["/img/文章/dockerinstall.jpg","364d9bfc852c787cc81b8f108761f058"],["/img/文章/软件工程随笔.png","f5c933be415d17b8d17437ef4cc0f477"],["/index.html","8805d9db7219c43b726508fc0448f4a2"],["/js/backgroundize.js","05efeede75220da08775d6b1ae813ba1"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/duration.js","a8fb8acceae96ca534aa715248ee3fde"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/injector.js","c083d33a0639ce62e280c9bdf1598868"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ab39f3ec9037f639b66133b2037ad5e8"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","16f40aa4873facee7a27f5ad4521fab2"],["/local-search.xml","e177c9ff39a23cc39f53875cd88d3530"],["/posts/13858/index.html","56f77b572bd79affa2a4558d24c8843f"],["/posts/14402/index.html","5eb841ba01a901b0a54e0dd6b75ccf55"],["/posts/42142/index.html","6b353718ecd8baeba64256900da3c2fc"],["/sitemap.xml","a7ed8ef3a3ee087eed2b510a7e3c7f17"],["/styles/backgroundize.css","2a2d5beaf653696eca4cfc17df169537"],["/sw-register.js","a2be3cabe098df96efbc9af210181fc9"],["/tags/index.html","ec4dd6f90c1199a714055b2dce95ef90"],["/tags/容器技术/index.html","2e29e7a05e2f89e7e159e9294298c2f5"],["/tags/测试/index.html","2550baf8b9e0ad1dcf2af9e5eecd31a3"],["/tags/随笔/index.html","169f597030f75053319d99c2ec3efbdb"],["/xml/local-search.xml","9c7599888d566ee27ce54d66f3b58d83"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}})),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}((function(){return function e(t,n,r){function a(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,(function(e){var n=t[c][1][e];return a(n||e)}),f,f.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function o(e,t,n){var a=e.url,o=n.maxAgeSeconds,c=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),u.getDb(s).then((function(e){return u.setTimestampForUrl(e,a,i)})).then((function(e){return u.expireEntries(e,c,o,i)})).then((function(e){r("Successfully updated IDB.");var n=e.map((function(e){return t.delete(e)}));return Promise.all(n).then((function(){r("Done with cache cleanup.")}))})).catch((function(e){r(e)}))}function c(e){var t=Array.isArray(e);if(t&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(t=!1)})),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then((function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then((function(n){n.put(e,r).then((function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=o.bind(null,e,t,n);s=s?s.then(r):r()}(e,n,r)}))})),r.clone()}))},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then((function(){return Promise.all([caches.open(e),caches.open(t)]).then((function(t){var n=t[0],r=t[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(t){return r.put(e,t)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,t){return a(t).then((function(t){return t.add(e)}))},uncache:function(e,t){return a(t).then((function(t){return t.delete(e)}))},precache:function(e){e instanceof Promise||c(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",a=1,o="store",c="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise((function(t,n){var i=indexedDB.open(r+e,a);i.onupgradeneeded=function(){i.result.createObjectStore(o,{keyPath:c}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}}))}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise((function(r,a){var c=e.transaction(o,"readwrite");c.objectStore(o).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){a(c.error)}}))},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise((function(r,a){var i=1e3*t,u=[],f=e.transaction(o,"readwrite"),h=f.objectStore(o);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=a})):Promise.resolve([])}(e,n,r).then((function(n){return function(e,t){return t?new Promise((function(n,r){var a=[],i=e.transaction(o,"readwrite"),u=i.objectStore(o),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[c];a.push(o),u.delete(o),e-a.length>t&&r.continue()}})},i.oncomplete=function(){n(a)},i.onabort=r})):Promise.resolve([])}(e,t).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,t,n){function r(e){return e.reduce((function(e,t){return e.concat(t)}),[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then((function(e){return Promise.all(c.preCacheItems).then(r).then(a.validatePrecacheInput).then((function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach((function(e,r){t[e.name]=n[r+1]}))}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),a=e("./helpers"),o=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}})),c.prototype.add=function(e,t,n,o){var c;o=o||{},t instanceof RegExp?c=RegExp:c=(c=o.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var s=new r(e,t,n,o);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,o(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var s=o(c,n);if(s.length>0)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then((function(t){return t.match(e).then((function(t){var o=n.cache||r.cache,c=Date.now();return a.isResponseFresh(t,o.maxAgeSeconds,c)?t:a.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then((function(t){return t.match(e).then((function(e){var t=n.cache||r.cache,o=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,o))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(o,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then((function(t){var s,i,u=[];if(c){var f=new Promise((function(o){s=setTimeout((function(){t.match(e).then((function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;a.isResponseFresh(e,s,c)&&o(e)}))}),1e3*c)}));u.push(f)}var h=a.fetchAndCache(e,n).then((function(e){if(s&&clearTimeout(s),o.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")})).catch((function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then((function(e){if(e)return e;if(i)return i;throw r}))}));return u.push(h),Promise.race(u)}))}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),s=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,c="",u=t&&t.delimiter||"/";null!=(n=p.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(o,l),o=l+f.length,h)c+=h[1];else{var d=e[o],m=n[2],g=n[3],b=n[4],v=n[5],x=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=m&&null!=d&&d!==m,R="+"===x||"*"===x,E="?"===x||"*"===x,k=n[2]||u,C=b||v;r.push({name:g||a++,prefix:m||"",delimiter:k,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:C?i(C):w?".*":"[^"+s(k)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function o(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",s=n||{},i=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=s[f.name];if(null==l){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(d(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=i(l[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){d(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)o+=s(i);else{var h=s(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),o+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var p=s(n.delimiter||"/"),m=o.slice(-p.length)===p;return r||(o=(m?o.slice(0,-p.length):o)+"(?:"+p+"(?=$))?"),o+=a?"$":r&&m?"":"(?="+p+"|$)",u(new RegExp("^"+o,f(n)),t)}function l(e,t,n){return d(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):d(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(l(e[a],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var d=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())})))})).then((function(r){if(r.some((function(e){return!e.ok})))throw new t("Incorrect response status");return Promise.all(r.map((function(t,r){return n.put(e[r],t)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"});