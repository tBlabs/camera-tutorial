// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9NwOH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kuM8f":[function(require,module,exports) {
var _truffle = require("@tblabs/truffle");
var _router = require("./Router");
var _slideFactory = require("./SlideFactory");
var _iPhone = require("./Slides/iPhone");
var _ms = require("./Slides/ms");
(0, _truffle.NumberInput).DefaultCssClasses = "uk-input uk-form-width-small";
(0, _truffle.TextInput).DefaultCssClasses = "uk-input";
(0, _truffle.Button).DefaultCssClasses = "uk-button uk-button-default";
(0, _truffle.Select).DefaultCssClasses = "uk-select";
(0, _truffle.ModalWindow).DefaultCssClasses = "tf-modal-window";
(0, _truffle.ModalWindow).Hook = (0, _truffle.Root).Hook;
(0, _truffle.MultilineInput).DefaultCssClasses = "uk-textarea";
const slides = [
    ...(0, _iPhone.iPhoneSlides),
    ...(0, _ms.msSlides),
    {
        Id: "start",
        Type: "choose",
        Title: `### Samouczek

Co chcesz uruchomi\u{107}?`,
        Options: [
            {
                Label: "Mikrokamere",
                ImageUrl: "tx.jpg",
                GoTo: "choose-phone"
            },
            {
                Label: "Mikros\u0142uchawke",
                ImageUrl: "ms.jpg",
                GoTo: "ms-start"
            }
        ]
    },
    {
        Id: "choose-phone",
        Type: "choose",
        Title: "Jaki masz telefon?",
        Options: [
            {
                Label: "iPhone",
                ImageUrl: "iphone/iphone.jpg",
                GoTo: "iPhone-settings"
            },
            {
                Label: "Android",
                ImageUrl: "android/android.jpg",
                GoTo: "android"
            }
        ]
    },
    {
        Id: "android",
        Type: "page",
        Content: `### Android
        
*\u{26A0}\u{FE0F} Ustawienie hotspota w systemie Android mo\u{17C}e wygl\u{105}da\u{107} inaczej w zale\u{17C}no\u{15B}ci od jego wersji i producenta telefonu. Kolejne kroki maj\u{105} charakter jedynie pogl\u{105}dowy*

Rozwi\u{144} menu g\xf3rne i znajd\u{17A} co\u{15B} co przypomina hotspot lub router osobisty (mo\u{17C}e nazywa\u{107} si\u{119} \`Hotspot\` lub \`Router\` lub jako\u{15B} inaczej).  
Przytrzymaj te opcje i wejd\u{17A} do ustawie\u{144}.
`,
        ImageUrl: "android/android-1.jpg",
        NextId: "android-hotspot"
    },
    {
        Id: "android-hotspot",
        Type: "page",
        Content: `W polu \`Nazwa hotspota\`, \`SSID\` lub podobnym wpisz *hotspot1*. Wielko\u{15B}\u{107} znak\xf3w ma znaczenie! Nie pomyl si\u{119}!  

W polu \`Has\u{142}o\` wpisz *hotspot1password*. Wielko\u{15B}\u{107} znak\xf3w ma znaczenie!

Pozosta\u{142}e opcje raczej nie maj\u{105} znaczenia, ale je\u{15B}li gdzie\u{15B} w menu zauwa\u{17C}ysz opcje *wstecznej kompatybilno\u{15B}ci* lub podone - w\u{142}\u{105}cz je.  
Szyfrowanie nale\u{17C}y ustawi\u{107} na *WPA2 PSK*. Warto te\u{17C} wy\u{142}\u{105}czy\u{107} takie opcje jak *automatyczny hotstpot* czy *automatyczne wy\u{142}\u{105}czanie*.
`,
        ImageUrl: "android/android-2.jpg",
        NextId: "led"
    },
    {
        Id: "camera-start",
        Type: "page",
        Content: "Hotspot jest ju\u017C gotowy. Te ustawienia wprowadza si\u0119 tylko raz.\n\nOd tej pory wystarczy w\u0142\u0105czy\u0107 hotspot przed uruchomieniem kamery (guzikiem `Dopuszczaj innych`).\n\nW kolejnym kroku w\u0142\u0105czymy kamere...",
        ImageUrl: "",
        NextId: "led"
    },
    {
        Id: "iPhone:end-x",
        Type: "page",
        Content: "Pod\u0142\u0105cz kamere do pr\u0105du i odczekaj minute.\nPrzy gniazdku zasilania kamery znajduje si\u0119 dioda, je\u015Bli miga na:\n\n\uD83D\uDFE2 zielono - wszystko jest ok\n\n\uD83D\uDD34 czerwono - hotspot nie dzia\u0142a (upewnij si\u0119, \u017Ce poprzednie kroki zosta\u0142y wykonane poprawnie)\n\n---\n\u26A0\uFE0F *Pami\u0119taj by pozostawi\u0107 telefon na tym ekranie hotspota na czas uruchamiania kamery*",
        ImageUrl: "iphone/hot.png",
        NextId: "led"
    },
    {
        Id: "led",
        Type: "choose",
        Title: `### Uruchomienie kamery
Pod\u{142}\u{105}cz kamere do powerabanka. Mo\u{17C}na u\u{17C}y\u{107} dowolnego kabla mini-USB.

![Po\u{142}\u{105}czenie](conn.jpeg)

Odczekaj minute a\u{17C} kamera si\u{119} uruchomi.  

Przy gniazdku zasilania kamery znajduje si\u{119} dioda.

Na jaki miga kolor?`,
        Options: [
            {
                Label: "\uD83D\uDFE2 Zielony",
                ImageUrl: "green.jpeg",
                GoTo: "led-green"
            },
            {
                Label: "\uD83D\uDD34 Czerwony",
                ImageUrl: "red.jpeg",
                GoTo: "red-led"
            },
            {
                Label: "\uD83D\uDFE2\uD83D\uDD34\u015Awiat\u0142o ci\u0105g\u0142e",
                ImageUrl: "red.jpeg",
                GoTo: "const-led"
            },
            {
                Label: "\u26AA Nic nie miga",
                ImageUrl: "noled.jpeg",
                GoTo: "no-led"
            }
        ]
    },
    {
        Id: "red-led",
        Type: "page",
        Content: `\u{1F534} Czerwona migaj\u{105}ca dioda oznacza, \u{17C}e kamera pracuje poprawnie, ale nie mo\u{17C}e si\u{119} po\u{142}\u{105}czy\u{107} z serwerem.  
Powod\xf3w mo\u{17C}e by\u{107} kilka:
- *Hotspot nie jest w\u{142}\u{105}czony lub nie dzia\u{142}a poprawnie* - upewnij si\u{119}, \u{17C}e dzia\u{142}a prawid\u{142}owo sprawdzaj\u{105}c czy dzia\u{142}a pod odpowiedni\u{105} nazw\u{105} oraz czy "widz\u{105} go" inne urz\u{105}dzenia, np. komputer,
- *Hotspot nie udost\u{119}pnia internetu* - upewnij si\u{119}, \u{17C}e transmisja danych w telefonie jest w\u{142}\u{105}czona oraz \u{17C}e rozmowa telefoniczna nie blokuje transmisji,
- *Hotspot jest poza zasi\u{119}giem* - kamera musi znajdowa\u{107} si\u{119} w odleg\u{142}o\u{15B}ci maksymalnie kilku metr\xf3w od telefonu`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "no-led",
        Type: "page",
        Content: `Kamera potrzebuje oko\u{142}o 50 sekund aby si\u{119} uruchomi\u{107}. Brak \u{15B}wiat\u{142}a mo\u{17C}e oznacza\u{107}, \u{17C}e:
- *Nie up\u{142}yne\u{142}o jeszcze do\u{15B}\u{107} czasu* - odczekaj co najmniej minute,
- *Brak zasilania* - sprawd\u{17A} czy powerbank dzia\u{142}a, powinna si\u{119} pali\u{107} na nim jaka\u{15B} dioda,
- *Uszkodzony przew\xf3d USB* - nale\u{17C}y wymieni\u{107} na dowolny inny

Je\u{15B}li to \u{17C}adna z powy\u{17C}szych przyczyn - skontaktuj si\u{119} z nasz\u{105} infolini\u{105}.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "const-led",
        Type: "page",
        Content: `W teorii \u{15B}wiat\u{142}o ci\u{105}g\u{142}e diody kontrolnej nie jest mo\u{17C}liwe. Upewnij si\u{119}, \u{17C}e patrzysz na w\u{142}a\u{15B}ciw\u{105} lampke - t\u{105} przy gnie\u{17A}dzie zasilania. Je\u{15B}li jeste\u{15B} absolutnie pewien, \u{17C}e to w\u{142}a\u{15B}ciwa dioda, pozostaje tylko jedna mo\u{17C}liwo\u{15B}\u{107} - kamera si\u{119} zawiesi\u{142}a. Od\u{142}\u{105}cz j\u{105} od pr\u{105}du i pod\u{142}\u{105}cz ponownie. Zg\u{142}o\u{15B} problem na infolinii poniewa\u{17C} nie powinien nigdy wyst\u{105}pi\u{107}.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "led-green",
        Type: "choose",
        Title: `\u{1F7E2} Zielona migaj\u{105}ca dioda oznacza, \u{17C}e kamera poprawnie nawi\u{105}za\u{142}a po\u{142}\u{105}czenie z serwerem.
        
Wejd\u{17A} na stron\u{119} odbiornika, kt\xf3rej adres znajdziesz w *SMS od nas* lub na *karcie do\u{142}\u{105}czonej do zestawu*.  
    
\u{260E}\u{FE0F} *Je\u{15B}li nie otrzyma\u{142}e\u{15B} hase\u{142} - zadzwo\u{144} i popro\u{15B} o ich wygenerowanie!*

Zaloguj si\u{119} i sprawd\u{17A} czy wszystko jest w porz\u{105}dku. Je\u{15B}li nie - wybierz kt\xf3r\u{105}\u{15B} z poni\u{17C}szych opcji:`,
        Options: [
            {
                Label: "Brak obrazu",
                ImageUrl: "\uD83D\uDEAB",
                GoTo: "kamera:brak-obrazu"
            },
            {
                Label: "Niewyra\u017Any obraz",
                ImageUrl: "\uD83D\uDC53",
                GoTo: "kamera:niewyrazny-obraz"
            },
            {
                Label: "Powolna transmisja",
                ImageUrl: "\uD83D\uDC22",
                GoTo: "kamera:powolna-transmisja"
            },
            {
                Label: "Za ma\u0142a rozdzielczo\u015B\u0107",
                ImageUrl: "\uD83D\uDCFA",
                GoTo: "kamera:mala-rozdzielczosc"
            }
        ]
    },
    {
        Id: "kamera:brak-obrazu",
        Type: "page",
        Content: `### Brak obrazu 

Je\u{17C}eli po zalogowaniu si\u{119} na stronie nie widzisz podgl\u{105}du z kamery sprawd\u{17A}:
- *Czy obiektyw nie jest zas\u{142}oni\u{119}ty?* - ods\u{142}o\u{144} go,
- *Czy trasnsmisja jest w\u{142}\u{105}czona?* - w prawym g\xf3rnym rogu jest wybierak rozdzielczo\u{15B}ci, sprawd\u{17A} czy nie jest w pozycji \`Nadawanie wstrzymane\`. Pod ramk\u{105} podgl\u{105}du znajduje si\u{119} czerwony guzik \`Przywr\xf3\u{107} nadawanie\`. Kliknij go aby kamera zacz\u{119}\u{142}a pracowa\u{107}.

Obserwuj diod\u{119} na kamerze. Je\u{15B}li zacz\u{119}\u{142}a miga\u{107} na czerwono oznacza to problem z hotspotem. Sprawd\u{17A} czy ten na pewno dzia\u{142}a.
`,
        NextId: "contact"
    },
    {
        Id: "kamera:niewyrazny-obraz",
        Type: "page",
        Content: `### Rozmazany obraz
        
Rozmazany obraz mo\u{17C}e oznacza\u{107} tylko jedno: obiektyw kamery zosta\u{142} przestawiony. Kamera ma sta\u{142}\u{105} ogniskow\u{105} i mo\u{17C}na j\u{105} zmienia\u{107} obracaj\u{105}c guziczkiem. Trzymaj\u{105}c kamer\u{119} 30-40cm od kartki, kr\u{119}\u{107} powoli guzikiem tak by tekst sta\u{142} si\u{119} dobrze widoczny. R\xf3b to ostro\u{17C}nie poniewa\u{17C} to delikatny element. Staraj si\u{119} nie wykr\u{119}ci\u{107} guzika zupe\u{142}nie jak i nie wkr\u{119}ci\u{107} go za mocno. Zalecamy ruchy po 2-3mm.

Zwr\xf3\u{107} r\xf3wnie\u{17C} uwag\u{119} na to by podczas monta\u{17C}u w odzie\u{17C}y guzik nie obr\xf3ci\u{142} si\u{119} samoistnie.
`,
        NextId: "contact"
    },
    {
        Id: "kamera:powolna-transmisja",
        Type: "page",
        Content: `### Powolna transmisja
        
Kamera wysy\u{142}a zdj\u{119}cia co maksymalnie 2-3 sekundy. Nie da si\u{119} szybciej. Taka forma transmisji gwarantuje te sam\u{105} jako\u{15B}\u{107} zdj\u{119}\u{107} za ka\u{17C}dym razem niezale\u{17C}nie od jako\u{15B}ci po\u{142}\u{105}czenia z internetem.  
Je\u{15B}li natomiast czas przes\u{142}ania zdj\u{119}cia przekracza 5 sekund mo\u{17C}e to oznacza\u{107}, \u{17C}e:
- *Hotspot jeszcze si\u{119} rozgrzewa* - dotyczy to g\u{142}\xf3wnie iPhone'\xf3w kt\xf3re cz\u{119}sto na pocz\u{105}tu dzia\u{142}aj\u{105} wolniej,
- *Internet dzia\u{142}a zbyt wolno* - i mo\u{17C}e to zale\u{17C}e\u{107} od miejsca, w kt\xf3rym jeste\u{15B}, 
- *Internet ko\u{144}czy si\u{119}* - sprawd\u{17A} czy masz wystarczaj\u{105}c\u{105} ilo\u{15B}\u{107} pakiet\xf3w danych,
- *Kiepski zasi\u{119}g danego operatora* - by\u{107} mo\u{17C}e inny operator b\u{119}dzie mia\u{142} lepszy zasi\u{119}g w tym miejscu,
- *Operator ogranicza internet na czas rozmowy* - niekt\xf3rzy operatorzy ograniczaj\u{105} transmisje danych podczas rozmowy telefonicznej. Roz\u{142}\u{105}cz sie i sprawd\u{17A} jak zareaguje kamera,
- *Ustawiona jest zbyt du\u{17C}a rozdzielczo\u{15B}\u{107}* - i wa\u{17C}\u{105}ce du\u{17C}o zdj\u{119}cia potrzebuj\u{105} wi\u{119}cej czasu na przes\u{142}anie, ich rozdzielczo\u{15B}\u{107} mo\u{17C}na zmieni\u{107} wybierakiem w prawym g\xf3rnym rogu aplikacji do podgl\u{105}du,
`,
        NextId: "contact"
    },
    {
        Id: "kamera:mala-rozdzielczosc",
        Type: "page",
        Content: `### Za ma\u{142}a rozdzielczo\u{15B}\u{107}
        
Rozdzielczo\u{15B}\u{107} zdj\u{119}\u{107} mo\u{17C}na ustawi\u{107} wybierakiem w prawym g\xf3rnym rogu aplikacji:
- \`Niska jako\u{15B}\u{107}\` - 400x300px, szybka transmisja w ma\u{142}ej rozdzielczo\u{15B}ci,
- \`Jako\u{15B}\u{107} optymalna\` - 1200x900px, idealna pod kartke papieru,
- \`Wysoka jako\u{15B}\u{107}\` - 1600x1200px, dobra pod ekran komputera,
- itd  

Im wi\u{119}ksze jest zdj\u{119}cie - tym d\u{142}u\u{17C}ej b\u{119}dzie przesy\u{142}ane.  

Je\u{15B}li mimo zwi\u{119}kszenia rozdzielczo\u{15B}ci obraz nadal jest niewyra\u{17A}ny oznacza to problem z ostro\u{15B}ci\u{105} kamery (opisany w rozdziale "Niewyra\u{17A}ny obraz" w menu wy\u{17C}ej).

`,
        NextId: "contact"
    },
    {
        Id: "contact",
        Type: "page",
        Content: `### Pomoc

Je\u{15B}li nie uda\u{142}o Ci si\u{119} samodzielnie poradzi\u{107} sobie z problemem skorzystaj z opcji poni\u{17C}ej:
        
\u{260E}\u{FE0F} Infolinia: *507-293-714*  

\u{1F310} Strona kontaktu: [www.specteam.pl](https://specteam.pl/Kontakt)`
    }
];
const root = new (0, _truffle.Root)().Class("root");
const _router1 = new (0, _router.Router)();
const _sf = new (0, _slideFactory.SlideFactory)(_router1);
root.Append(new (0, _truffle.DestroyingPatternContentSwitcher)(_router1.Hash).Class("PagesSwitcher").AddContent("slide/:id", ({ id })=>{
    console.log("slide", id);
    const slide = slides.find((x)=>x.Id == id);
    console.log(slide);
    slide && _sf.Create(slide);
})// .AddDefaultContent(() => _router.GoToStart())
.AddDefaultContent(()=>"hi"));

},{"@tblabs/truffle":"2JFzm","./Router":"iNWL2","./SlideFactory":"7CGrr","./Slides/iPhone":"1i8f7","./Slides/ms":"9a4XT"}],"2JFzm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectOption = exports.Select = exports.Range = exports.NumericRange = exports.NumberInput = exports.PasswordInput = exports.TextInput = exports.EditableLabel = exports.Label = exports.TextLabel = exports.ListItem = exports.UnorderedList = exports.Line = exports.NewLine = exports.ClickableImage = exports.Image = exports.Link = exports.Button = exports.TwoFloatingColumns = exports.TwinColumns = exports.AutoWidthTwoColumns = exports.Pre = exports.Span = exports.Div = exports.Root = exports.ValidationResult = exports.Validator = exports.PatternExtractor = exports.RegexExtractor = exports.HandlersCollection = exports.Filters = exports.CollectionTemplate = exports.ArrayTemplate = exports.RefSerializer = exports.RefReflector = exports.Sorter = exports.Dumper = exports.ComponentBase = exports.RefComponentBase = exports.CollectionView = exports.Collection = exports.HashRef = exports.RefObject = exports.RefNumber = exports.RefString = exports.RefBool = exports.RefDate = exports.RV = exports.Ref = exports.$ = void 0;
exports.Pie = exports.Spinner = exports.CollectionPaginatorOptions = exports.CollectionPaginator = exports.PaginatorBrainOptions = exports.PaginatorBrain = exports.SimplePaginator = exports.BasicPaginator = exports.Snack = exports.JsonViewer = exports.JsonViewerConfig = exports.TableColumn = exports.TableRow = exports.TableHeaderRow = exports.TableHeaderCell = exports.TableHeaderV2 = exports.TableHeader = exports.TableCell = exports.TableBody = exports.TableBuilder = exports.VerticalButtonTabs = exports.ButtonTabs = exports.HidingContentSwitcher = exports.DestroyingPatternContentSwitcher = exports.DestroyingContentSwitcher = exports.RadioSwitchesBuilder = exports.ModalWindow = exports.LabeledSelect = exports.LabeledNumberInput = exports.LabeledTextInput = exports.MultilineInput = exports.EditableTextarea = exports.EditableDateLabel = exports.DateTimeInput = exports.TimeInput = exports.DateInput = exports.Rate = exports.Radio = exports.Checkbox = void 0;
var _1 = require("fafc7640babdfb1");
Object.defineProperty(exports, "$", {
    enumerable: true,
    get: function() {
        return _1.$;
    }
});
var Ref_1 = require("c965032ebbb3dc5b");
Object.defineProperty(exports, "Ref", {
    enumerable: true,
    get: function() {
        return Ref_1.Ref;
    }
});
var RV_1 = require("219c46aee547495d");
Object.defineProperty(exports, "RV", {
    enumerable: true,
    get: function() {
        return RV_1.RV;
    }
});
var RefDate_1 = require("9c615a130b35c275");
Object.defineProperty(exports, "RefDate", {
    enumerable: true,
    get: function() {
        return RefDate_1.RefDate;
    }
});
var RefBool_1 = require("803511a1eb36ef40");
Object.defineProperty(exports, "RefBool", {
    enumerable: true,
    get: function() {
        return RefBool_1.RefBool;
    }
});
var RefString_1 = require("9f85a6871f7bb65e");
Object.defineProperty(exports, "RefString", {
    enumerable: true,
    get: function() {
        return RefString_1.RefString;
    }
});
var RefNumber_1 = require("8f0da402847bf825");
Object.defineProperty(exports, "RefNumber", {
    enumerable: true,
    get: function() {
        return RefNumber_1.RefNumber;
    }
});
var RefObject_1 = require("6bc4158b1ca62c53");
Object.defineProperty(exports, "RefObject", {
    enumerable: true,
    get: function() {
        return RefObject_1.RefObject;
    }
});
var HashRef_1 = require("16752dc6f56a602a");
Object.defineProperty(exports, "HashRef", {
    enumerable: true,
    get: function() {
        return HashRef_1.HashRef;
    }
});
var Collection_1 = require("655672ca2b5fc607");
Object.defineProperty(exports, "Collection", {
    enumerable: true,
    get: function() {
        return Collection_1.Collection;
    }
});
var CollectionView_1 = require("b86ed816c53f5a9b");
Object.defineProperty(exports, "CollectionView", {
    enumerable: true,
    get: function() {
        return CollectionView_1.CollectionView;
    }
});
var RefComponentBase_1 = require("ebb3c00ce4076f6b");
Object.defineProperty(exports, "RefComponentBase", {
    enumerable: true,
    get: function() {
        return RefComponentBase_1.RefComponentBase;
    }
});
var ComponentBase_1 = require("b2b40bd3328b1608");
Object.defineProperty(exports, "ComponentBase", {
    enumerable: true,
    get: function() {
        return ComponentBase_1.ComponentBase;
    }
});
var Dumper_1 = require("fd99489903ec3c1e");
Object.defineProperty(exports, "Dumper", {
    enumerable: true,
    get: function() {
        return Dumper_1.Dumper;
    }
});
var Sorter_1 = require("ec4efa9d8ec512d1");
Object.defineProperty(exports, "Sorter", {
    enumerable: true,
    get: function() {
        return Sorter_1.Sorter;
    }
});
var RefReflector_1 = require("e1931c933b4670e8");
Object.defineProperty(exports, "RefReflector", {
    enumerable: true,
    get: function() {
        return RefReflector_1.RefReflector;
    }
});
var RefSerializer_1 = require("e7489e214da5701e");
Object.defineProperty(exports, "RefSerializer", {
    enumerable: true,
    get: function() {
        return RefSerializer_1.RefSerializer;
    }
});
var ArrayTemplate_1 = require("98ca933c51efcb06");
Object.defineProperty(exports, "ArrayTemplate", {
    enumerable: true,
    get: function() {
        return ArrayTemplate_1.ArrayTemplate;
    }
});
var CollectionTemplate_1 = require("7337e60cc97c6234");
Object.defineProperty(exports, "CollectionTemplate", {
    enumerable: true,
    get: function() {
        return CollectionTemplate_1.CollectionTemplate;
    }
});
var Filters_1 = require("ab7377c9560c918");
Object.defineProperty(exports, "Filters", {
    enumerable: true,
    get: function() {
        return Filters_1.Filters;
    }
});
var HandlersCollection_1 = require("12e3e29268db9c8a");
Object.defineProperty(exports, "HandlersCollection", {
    enumerable: true,
    get: function() {
        return HandlersCollection_1.HandlersCollection;
    }
});
var RegexExtractor_1 = require("fe00d5de74abdf3d");
Object.defineProperty(exports, "RegexExtractor", {
    enumerable: true,
    get: function() {
        return RegexExtractor_1.RegexExtractor;
    }
});
var PatternExtractor_1 = require("fbbb0667886b4c3");
Object.defineProperty(exports, "PatternExtractor", {
    enumerable: true,
    get: function() {
        return PatternExtractor_1.PatternExtractor;
    }
});
var Validator_1 = require("a373440a0897184f");
Object.defineProperty(exports, "Validator", {
    enumerable: true,
    get: function() {
        return Validator_1.Validator;
    }
});
Object.defineProperty(exports, "ValidationResult", {
    enumerable: true,
    get: function() {
        return Validator_1.ValidationResult;
    }
});
var Root_1 = require("58389b0326c0960f");
Object.defineProperty(exports, "Root", {
    enumerable: true,
    get: function() {
        return Root_1.Root;
    }
});
var Div_1 = require("500972afa55832d8");
Object.defineProperty(exports, "Div", {
    enumerable: true,
    get: function() {
        return Div_1.Div;
    }
});
var Span_1 = require("546697149e657e43");
Object.defineProperty(exports, "Span", {
    enumerable: true,
    get: function() {
        return Span_1.Span;
    }
});
var Pre_1 = require("44c8ca4b254b2d2c");
Object.defineProperty(exports, "Pre", {
    enumerable: true,
    get: function() {
        return Pre_1.Pre;
    }
});
var AutoWidthTwoColumns_1 = require("864f06517d66f0fb");
Object.defineProperty(exports, "AutoWidthTwoColumns", {
    enumerable: true,
    get: function() {
        return AutoWidthTwoColumns_1.AutoWidthTwoColumns;
    }
});
var TwinColumns_1 = require("d8a50236f7b546f3");
Object.defineProperty(exports, "TwinColumns", {
    enumerable: true,
    get: function() {
        return TwinColumns_1.TwinColumns;
    }
});
var TwoFloatingColumns_1 = require("c4b3837ecb7afe53");
Object.defineProperty(exports, "TwoFloatingColumns", {
    enumerable: true,
    get: function() {
        return TwoFloatingColumns_1.TwoFloatingColumns;
    }
});
var Button_1 = require("67cd158c9c4842c3");
Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function() {
        return Button_1.Button;
    }
});
var Link_1 = require("6d28a90eaa8a2565");
Object.defineProperty(exports, "Link", {
    enumerable: true,
    get: function() {
        return Link_1.Link;
    }
});
var Image_1 = require("79149f605c4575e2");
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image_1.Image;
    }
});
var ClickableImage_1 = require("10792421b78fe869");
Object.defineProperty(exports, "ClickableImage", {
    enumerable: true,
    get: function() {
        return ClickableImage_1.ClickableImage;
    }
});
var NewLine_1 = require("b96f73309feeb63b");
Object.defineProperty(exports, "NewLine", {
    enumerable: true,
    get: function() {
        return NewLine_1.NewLine;
    }
});
var Line_1 = require("e215a4659561255");
Object.defineProperty(exports, "Line", {
    enumerable: true,
    get: function() {
        return Line_1.Line;
    }
});
var UnorderedList_1 = require("bd029abe008faeca");
Object.defineProperty(exports, "UnorderedList", {
    enumerable: true,
    get: function() {
        return UnorderedList_1.UnorderedList;
    }
});
var ListItem_1 = require("60822ae216d9788");
Object.defineProperty(exports, "ListItem", {
    enumerable: true,
    get: function() {
        return ListItem_1.ListItem;
    }
});
var TextLabel_1 = require("2e8a9eb3e7b7c8a5");
Object.defineProperty(exports, "TextLabel", {
    enumerable: true,
    get: function() {
        return TextLabel_1.TextLabel;
    }
});
var Label_1 = require("f4a95aa9ddbb780e");
Object.defineProperty(exports, "Label", {
    enumerable: true,
    get: function() {
        return Label_1.Label;
    }
});
var EditableLabel_1 = require("6c22d80ffd62f619");
Object.defineProperty(exports, "EditableLabel", {
    enumerable: true,
    get: function() {
        return EditableLabel_1.EditableLabel;
    }
});
var TextInput_1 = require("c0ef7b592363e53");
Object.defineProperty(exports, "TextInput", {
    enumerable: true,
    get: function() {
        return TextInput_1.TextInput;
    }
});
var PasswordInput_1 = require("48ad61299799af95");
Object.defineProperty(exports, "PasswordInput", {
    enumerable: true,
    get: function() {
        return PasswordInput_1.PasswordInput;
    }
});
var NumberInput_1 = require("1042dc33f46f86c1");
Object.defineProperty(exports, "NumberInput", {
    enumerable: true,
    get: function() {
        return NumberInput_1.NumberInput;
    }
});
var NumericRange_1 = require("c22a15b185062d3f");
Object.defineProperty(exports, "NumericRange", {
    enumerable: true,
    get: function() {
        return NumericRange_1.NumericRange;
    }
});
var Range_1 = require("528ff6e739906fb6");
Object.defineProperty(exports, "Range", {
    enumerable: true,
    get: function() {
        return Range_1.Range;
    }
});
var Select_1 = require("e301c4ed431ac3c8");
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function() {
        return Select_1.Select;
    }
});
var SelectOption_1 = require("2051e9ae789f1da8");
Object.defineProperty(exports, "SelectOption", {
    enumerable: true,
    get: function() {
        return SelectOption_1.SelectOption;
    }
});
var Checkbox_1 = require("802e7dfdc9542186");
Object.defineProperty(exports, "Checkbox", {
    enumerable: true,
    get: function() {
        return Checkbox_1.Checkbox;
    }
});
var Radio_1 = require("206a8e0480ee281c");
Object.defineProperty(exports, "Radio", {
    enumerable: true,
    get: function() {
        return Radio_1.Radio;
    }
});
var Rate_1 = require("9c3d19344312342b");
Object.defineProperty(exports, "Rate", {
    enumerable: true,
    get: function() {
        return Rate_1.Rate;
    }
});
var DateInput_1 = require("14a3bf04f8e7142c");
Object.defineProperty(exports, "DateInput", {
    enumerable: true,
    get: function() {
        return DateInput_1.DateInput;
    }
});
var TimeInput_1 = require("2cda1214e35b899");
Object.defineProperty(exports, "TimeInput", {
    enumerable: true,
    get: function() {
        return TimeInput_1.TimeInput;
    }
});
var DateTimeInput_1 = require("8f99fee1bf7507d7");
Object.defineProperty(exports, "DateTimeInput", {
    enumerable: true,
    get: function() {
        return DateTimeInput_1.DateTimeInput;
    }
});
var EditableDateLabel_1 = require("a13c283d9a738bf6");
Object.defineProperty(exports, "EditableDateLabel", {
    enumerable: true,
    get: function() {
        return EditableDateLabel_1.EditableDateLabel;
    }
});
var EditableTextarea_1 = require("39f8ad4f632dd8f9");
Object.defineProperty(exports, "EditableTextarea", {
    enumerable: true,
    get: function() {
        return EditableTextarea_1.EditableTextarea;
    }
});
var MultilineInput_1 = require("c04952f86ccea8eb");
Object.defineProperty(exports, "MultilineInput", {
    enumerable: true,
    get: function() {
        return MultilineInput_1.MultilineInput;
    }
});
var LabeledTextInput_1 = require("d31a31eab3d977d1");
Object.defineProperty(exports, "LabeledTextInput", {
    enumerable: true,
    get: function() {
        return LabeledTextInput_1.LabeledTextInput;
    }
});
var LabeledNumberInput_1 = require("f91a494a37ca9b61");
Object.defineProperty(exports, "LabeledNumberInput", {
    enumerable: true,
    get: function() {
        return LabeledNumberInput_1.LabeledNumberInput;
    }
});
var LabeledSelect_1 = require("199a95adea50c4a3");
Object.defineProperty(exports, "LabeledSelect", {
    enumerable: true,
    get: function() {
        return LabeledSelect_1.LabeledSelect;
    }
});
var ModalWindow_1 = require("1c0bcf03860a7f0a");
Object.defineProperty(exports, "ModalWindow", {
    enumerable: true,
    get: function() {
        return ModalWindow_1.ModalWindow;
    }
});
var RadioSwitchesBuilder_1 = require("8cfb374aa5218728");
Object.defineProperty(exports, "RadioSwitchesBuilder", {
    enumerable: true,
    get: function() {
        return RadioSwitchesBuilder_1.RadioSwitchesBuilder;
    }
});
var DestroyingContentSwitcher_1 = require("530e8409290bb939");
Object.defineProperty(exports, "DestroyingContentSwitcher", {
    enumerable: true,
    get: function() {
        return DestroyingContentSwitcher_1.DestroyingContentSwitcher;
    }
});
var DestroyingPatternContentSwitcher_1 = require("6003bd0aa7cec55");
Object.defineProperty(exports, "DestroyingPatternContentSwitcher", {
    enumerable: true,
    get: function() {
        return DestroyingPatternContentSwitcher_1.DestroyingPatternContentSwitcher;
    }
});
var HidingContentSwitcher_1 = require("78bd87af50ee94aa");
Object.defineProperty(exports, "HidingContentSwitcher", {
    enumerable: true,
    get: function() {
        return HidingContentSwitcher_1.HidingContentSwitcher;
    }
});
var ButtonTabs_1 = require("10afb402764a40e0");
Object.defineProperty(exports, "ButtonTabs", {
    enumerable: true,
    get: function() {
        return ButtonTabs_1.ButtonTabs;
    }
});
var VerticalButtonTabs_1 = require("c77dd67a76d9ca61");
Object.defineProperty(exports, "VerticalButtonTabs", {
    enumerable: true,
    get: function() {
        return VerticalButtonTabs_1.VerticalButtonTabs;
    }
});
var TableBuilder_1 = require("58646297b12cd6ca");
Object.defineProperty(exports, "TableBuilder", {
    enumerable: true,
    get: function() {
        return TableBuilder_1.TableBuilder;
    }
});
var TableBody_1 = require("263a07f402d3baba");
Object.defineProperty(exports, "TableBody", {
    enumerable: true,
    get: function() {
        return TableBody_1.TableBody;
    }
});
var TableCell_1 = require("2bba2c3ffae7b183");
Object.defineProperty(exports, "TableCell", {
    enumerable: true,
    get: function() {
        return TableCell_1.TableCell;
    }
});
var TableHeader_1 = require("23f43e2478f65bbf");
Object.defineProperty(exports, "TableHeader", {
    enumerable: true,
    get: function() {
        return TableHeader_1.TableHeader;
    }
});
var TableHeaderV2_1 = require("c4edd27ed54d71dd");
Object.defineProperty(exports, "TableHeaderV2", {
    enumerable: true,
    get: function() {
        return TableHeaderV2_1.TableHeaderV2;
    }
});
var TableHeaderCell_1 = require("30c14b7926fca585");
Object.defineProperty(exports, "TableHeaderCell", {
    enumerable: true,
    get: function() {
        return TableHeaderCell_1.TableHeaderCell;
    }
});
var TableHeaderRow_1 = require("363951946fe82787");
Object.defineProperty(exports, "TableHeaderRow", {
    enumerable: true,
    get: function() {
        return TableHeaderRow_1.TableHeaderRow;
    }
});
var TableRow_1 = require("d8e7362a0fdfc9b8");
Object.defineProperty(exports, "TableRow", {
    enumerable: true,
    get: function() {
        return TableRow_1.TableRow;
    }
});
var TableColumn_1 = require("b6a7b2aee8b146b7");
Object.defineProperty(exports, "TableColumn", {
    enumerable: true,
    get: function() {
        return TableColumn_1.TableColumn;
    }
});
var JsonViewerConfig_1 = require("76dc1aeb72ce458");
Object.defineProperty(exports, "JsonViewerConfig", {
    enumerable: true,
    get: function() {
        return JsonViewerConfig_1.JsonViewerConfig;
    }
});
var JsonViewer_1 = require("1cac27c13e6931d5");
Object.defineProperty(exports, "JsonViewer", {
    enumerable: true,
    get: function() {
        return JsonViewer_1.JsonViewer;
    }
});
var Snack_1 = require("7b077188f1bbed78");
Object.defineProperty(exports, "Snack", {
    enumerable: true,
    get: function() {
        return Snack_1.Snack;
    }
});
var BasicPaginator_1 = require("6b3b651f0b960a2c");
Object.defineProperty(exports, "BasicPaginator", {
    enumerable: true,
    get: function() {
        return BasicPaginator_1.BasicPaginator;
    }
});
var SimplePaginator_1 = require("9a27d21104ec03de");
Object.defineProperty(exports, "SimplePaginator", {
    enumerable: true,
    get: function() {
        return SimplePaginator_1.SimplePaginator;
    }
});
var PaginatorBrain_1 = require("224834239f18a1ff");
Object.defineProperty(exports, "PaginatorBrain", {
    enumerable: true,
    get: function() {
        return PaginatorBrain_1.PaginatorBrain;
    }
});
Object.defineProperty(exports, "PaginatorBrainOptions", {
    enumerable: true,
    get: function() {
        return PaginatorBrain_1.PaginatorBrainOptions;
    }
});
var CollectionPaginator_1 = require("24fa9a1d39c26a1c");
Object.defineProperty(exports, "CollectionPaginator", {
    enumerable: true,
    get: function() {
        return CollectionPaginator_1.CollectionPaginator;
    }
});
Object.defineProperty(exports, "CollectionPaginatorOptions", {
    enumerable: true,
    get: function() {
        return CollectionPaginator_1.CollectionPaginatorOptions;
    }
});
var Spinner_1 = require("f3820f1c4216b534");
Object.defineProperty(exports, "Spinner", {
    enumerable: true,
    get: function() {
        return Spinner_1.Spinner;
    }
});
var Pie_1 = require("b7394bab6cf64a46");
Object.defineProperty(exports, "Pie", {
    enumerable: true,
    get: function() {
        return Pie_1.Pie;
    }
});

},{"fafc7640babdfb1":"i3MOE","c965032ebbb3dc5b":"9pTSI","219c46aee547495d":"QB8AR","9c615a130b35c275":"7gc2P","803511a1eb36ef40":"hCxpL","9f85a6871f7bb65e":"8mYO5","8f0da402847bf825":"eb56X","6bc4158b1ca62c53":"5B4F5","16752dc6f56a602a":"4tJON","655672ca2b5fc607":"8bvD7","b86ed816c53f5a9b":"3ZCHv","ebb3c00ce4076f6b":"anBYP","b2b40bd3328b1608":"8SnDZ","fd99489903ec3c1e":"a2uO3","ec4efa9d8ec512d1":"hoBVU","e1931c933b4670e8":"gIpQQ","e7489e214da5701e":"cVjir","98ca933c51efcb06":"3WqoJ","7337e60cc97c6234":"aQFVH","ab7377c9560c918":"1CBj4","12e3e29268db9c8a":"3xTOB","fe00d5de74abdf3d":"3fkHK","fbbb0667886b4c3":"10sQt","a373440a0897184f":"kiRJV","58389b0326c0960f":"lviHf","500972afa55832d8":"6b4fV","546697149e657e43":"bbB3D","44c8ca4b254b2d2c":"cNVzS","864f06517d66f0fb":"4a1ud","d8a50236f7b546f3":"6YrkR","c4b3837ecb7afe53":"98XcF","67cd158c9c4842c3":"5iEcY","6d28a90eaa8a2565":"bDa7U","79149f605c4575e2":"5MFvM","10792421b78fe869":"iSAgd","b96f73309feeb63b":"is0UV","e215a4659561255":"302Ur","bd029abe008faeca":"8hD0K","60822ae216d9788":"a8rOS","2e8a9eb3e7b7c8a5":"7xglY","f4a95aa9ddbb780e":"3zAmj","6c22d80ffd62f619":"oMJQ2","c0ef7b592363e53":"cVGkV","48ad61299799af95":"l7Wh6","1042dc33f46f86c1":"knKKY","c22a15b185062d3f":"fzmsW","528ff6e739906fb6":"fFkco","e301c4ed431ac3c8":"dg9IT","2051e9ae789f1da8":"kHuTw","802e7dfdc9542186":"iK50G","206a8e0480ee281c":"1ZNJY","9c3d19344312342b":"lpUWX","14a3bf04f8e7142c":"6Ra6T","2cda1214e35b899":"21kD9","8f99fee1bf7507d7":"ln4UG","a13c283d9a738bf6":"2ZOfR","39f8ad4f632dd8f9":"7wEDh","c04952f86ccea8eb":"9juLW","d31a31eab3d977d1":"6SRlB","f91a494a37ca9b61":"7dad0","199a95adea50c4a3":"7EcpW","1c0bcf03860a7f0a":"g9P5K","8cfb374aa5218728":"edRFt","530e8409290bb939":"1n07n","6003bd0aa7cec55":"lm3Qd","78bd87af50ee94aa":"jbzEF","10afb402764a40e0":"5kGpW","c77dd67a76d9ca61":"39DBG","58646297b12cd6ca":"dx5uv","263a07f402d3baba":"f7L9s","2bba2c3ffae7b183":"cDRvC","23f43e2478f65bbf":"cB0tY","c4edd27ed54d71dd":"78CpK","30c14b7926fca585":"95eZp","363951946fe82787":"5j9P6","d8e7362a0fdfc9b8":"aNAwH","b6a7b2aee8b146b7":"krrdT","76dc1aeb72ce458":"6NwTc","1cac27c13e6931d5":"erOp2","7b077188f1bbed78":"hy7Qs","6b3b651f0b960a2c":"1vsdO","9a27d21104ec03de":"gcPLr","224834239f18a1ff":"WP4oi","24fa9a1d39c26a1c":"g3onY","f3820f1c4216b534":"d7Gai","b7394bab6cf64a46":"9WBys"}],"i3MOE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$ = void 0;
function $(query) {
    return document.querySelector(query);
}
exports.$ = $;
Object.prototype.Keys = function() {
    if (this === undefined) return [];
    return Object.keys(this);
};
Object.prototype.Values = function() {
    if (this === undefined) return [];
    return Object.values(this);
};
HTMLElement.prototype.Hide = function() {
    this.style.display = "none";
};
HTMLElement.prototype.Show = function(as) {
    if (as === void 0) as = "inline-block";
    this.style.display = as;
};
HTMLElement.prototype.Visability = function(show, as) {
    if (as === void 0) as = "inline-block";
    if (show) this.Show(as);
    else this.Hide();
};
HTMLElement.prototype.IsVisible = function() {
    // var element = document.getElementById("myElement");
    var bounding = this.getBoundingClientRect();
    return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= window.innerHeight && bounding.right <= window.innerWidth;
// console.log('IsVisible', getComputedStyle(this).display);
// if (!getComputedStyle(this).display) return false;
// if (getComputedStyle(this).display == "") return false;
// return getComputedStyle(this).display !== "none";
};
HTMLElement.prototype.Toggle = function() {
    this.IsVisible() ? this.Hide() : this.Show();
};
HTMLElement.prototype.Append = function(child) {
    this.appendChild(child);
    return this;
};
HTMLElement.prototype.Prepend = function(child) {
    this.prepend(child);
    return this;
};
// HTMLElement.prototype.Insert = function(child: HTMLElement) 
// {
//     this.innerHTML = child;
//     return this;
// }
HTMLElement.prototype.Exist = function(child) {
    var ch = Array.from(this.children);
    return !!ch.find(function(c) {
        return c === child;
    });
};
HTMLElement.prototype.Remove = function(child) {
    this.removeChild(child);
    return this;
};
HTMLElement.prototype.Clear = function() {
    this.innerHTML = "";
    return this;
};
HTMLInputElement.prototype.Enabled = function() {
    this.disabled = false;
    return this;
};
HTMLInputElement.prototype.Disabled = function() {
    this.disabled = true;
    return this;
};
HTMLButtonElement.prototype.Enabled = function() {
    this.disabled = false;
    return this;
};
HTMLButtonElement.prototype.Disabled = function() {
    this.disabled = true;
    return this;
};
HTMLElement.prototype.Text = function(text) {
    this.innerText = text;
    return this;
};
HTMLInputElement.prototype.Value = function(text) {
    this.value = text;
};
HTMLInputElement.prototype.Focus = function() {
    this.focus();
    // this.selectionStart = this.selectionEnd = this.value.length;
    return this;
};

},{}],"9pTSI":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ref = void 0;
require("b4238f17a96ec431");
var RefBase_1 = require("30afa468ddfbd616");
var Ref = /** @class */ function(_super) {
    __extends(Ref, _super);
    function Ref(_value, allowMasterEmit) {
        if (allowMasterEmit === void 0) allowMasterEmit = false;
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this.allowMasterEmit = allowMasterEmit;
        _this.initialValue = _value;
        return _this;
    }
    Ref.prototype.Storable = function(key, storage) {
        if (storage === void 0) storage = "local";
        if (!key) return this;
        var stor;
        switch(storage){
            case "local":
                stor = window.localStorage;
                break;
            case "session":
                stor = window.sessionStorage;
                break;
        }
        var value = stor.getItem(key);
        if (this._value instanceof Date) this.Set(new Date(value));
        else if (typeof this._value == "string") this.Set(value || this._value || "");
        else if (typeof this._value == "number") this.Set(+value || 0);
        else if (typeof this._value == "boolean") switch(value){
            case "":
            case "false":
                this.Set(false);
                break;
            default:
            case "true":
                this.Set(true);
                break;
        }
        this.OnChange(function(v) {
            return stor.setItem(key, v.toString());
        });
        return this;
    };
    Ref.prototype.Compare = function(ref, valueOrRef, op) {
        if (valueOrRef instanceof Ref) return op(ref.value, valueOrRef.value);
        return op(ref.value, valueOrRef);
    };
    Ref.prototype.Is = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a == b;
        });
    };
    Ref.prototype.IsNot = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a != b;
        });
    };
    Object.defineProperty(Ref.prototype, "IsSet", {
        get: function() {
            if (this._value instanceof Date) return +this._value !== +this.ZeroValue;
            return this._value !== this.ZeroValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ref.prototype, "IsNotSet", {
        get: function() {
            return !this.IsSet;
        },
        enumerable: false,
        configurable: true
    });
    Ref.prototype.IsInitial = function() {
        return this.value == this.initialValue;
    };
    Ref.prototype.IsNotInitial = function() {
        return this.value != this.initialValue;
    };
    Object.defineProperty(Ref.prototype, "HasChanged", {
        get: function() {
            return this._value !== this.initialValue;
        },
        enumerable: false,
        configurable: true
    });
    Ref.prototype.IsEqual = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a === b;
        });
    };
    Ref.prototype.IsIn = function(values) {
        return values.includes(this.value);
    };
    Ref.prototype.IsNotEqual = function(value) {
        return this.value !== value;
    };
    // public static masterEmitter = new EventEmitter(); // PROBLEMATIC DURING PUBLISH
    Ref.prototype.Set = function(val, excludeControlForRefresh) {
        if (this.value === val) return false;
        // this.prevVal = this._value;
        this._value = val;
        this.RefreshSubscribers(excludeControlForRefresh);
        this.emitter.CallHandlers(this._value);
        // if (this.allowMasterEmit)
        // Ref.masterEmitter.emit('set', this, this.prevVal, val)
        return true;
    };
    Ref.prototype.SetTo = function(valueOrRef) {
        if (valueOrRef instanceof Ref) this.value = valueOrRef.value;
        else this.value = valueOrRef;
        return this;
    };
    Ref.prototype.ForceOnChange = function() {
        this.RefreshSubscribers();
        this.emitter.CallHandlers(this._value);
        return this;
    };
    Object.defineProperty(Ref.prototype, "value", {
        // public SetValue(val: T, excludeControlForRefresh: any): boolean
        // {
        //     return this.Set(val, excludeControlForRefresh);
        // }
        get: function() {
            return this._value;
        },
        set: function(val) {
            this.Set(val);
        },
        enumerable: false,
        configurable: true
    });
    Ref.prototype.Reset = function() {
        this.value = this.initialValue;
        return this;
    };
    Ref.prototype.OverrideInitialValue = function(val) {
        this.initialValue = val;
        return this;
    };
    Ref.prototype.Initialize = function(val) {
        this.initialValue = val;
        this._value = val;
        return this;
    };
    Object.defineProperty(Ref.prototype, "ZeroValue", {
        get: function() {
            if (this._value instanceof Date) return new Date(0);
            else if (typeof this._value == "string") return "";
            else if (typeof this._value == "number") return 0; // TODO: 0? not infinity or something?
            else if (typeof this._value == "boolean") return false;
            throw new Error("No zero value for given type");
        },
        enumerable: false,
        configurable: true
    });
    Ref.prototype.Clear = function() {
        if (typeof this._value == "string") this.Set("");
        else if (typeof this._value == "number") this.Set(0);
        else if (typeof this._value == "boolean") this.Set(false);
        else if (this._value instanceof Date) this.Set(new Date(0));
        return this;
    };
    Ref.prototype.ToString = function() {
        var _a, _b, _c;
        // console.log('ttt');
        // return `${this._value?.toString()} [${this.watchers?.map(w=>w.Id)?.join(", ")}]`;
        // if (typeof this._value === "string")
        //     return `Ref<${typeof this._value}>#${this.Id}${this.Name ? ":" + this.Name : ""} = "${this._value}" [${this.watchers?.map(w => w.Id)?.join(", ")}]`;
        // else
        // if (typeof this._value === "Date")
        // return `Ref<${typeof this._value}> = "${this._value?.toString()}" [${this.watchers?.map(w => w.Id)?.join(", ")}]`;
        // else
        // if (typeof this._value === "boolean")
        //     return `Ref<${typeof this._value}> = ${this._value?.toString() ? "true" : "false"} [${this.watchers?.map(w => w.Id)?.join(", ")}]`;
        // else
        return "Ref<".concat(typeof this._value, ">#").concat(this.Id).concat(this.Name ? ":" + this.Name : "", " = ").concat((_a = this._value) === null || _a === void 0 ? void 0 : _a.toString(), " [watchers: ").concat(((_c = (_b = this.watchers) === null || _b === void 0 ? void 0 : _b.map(function(w) {
            return w.Id;
        })) === null || _c === void 0 ? void 0 : _c.join(", ")) || "none", "][").concat(this.emitter.Subs, " subs]");
    };
    Ref.prototype.Combine = function(anotherRef, operation) {
        var _this = this;
        var result = new Ref(operation(this.value, anotherRef.value));
        this.OnChange(function(v) {
            return result.value = operation(_this.value, anotherRef.value);
        });
        anotherRef.OnChange(function(v) {
            return result.value = operation(_this.value, anotherRef.value);
        });
        return result;
    };
    Ref.prototype.CombineValue = function(anotherValue, operation) {
        var result = new Ref(operation(this.value, anotherValue));
        this.OnChange(function(v) {
            return result.value = operation(v, anotherValue);
        }, true);
        return result;
    };
    Ref.prototype.Mix = function(x, operation) {
        if (x instanceof Ref) return this.Combine(x, operation);
        else return this.CombineValue(x, operation);
    };
    return Ref;
}(RefBase_1.RefBase);
exports.Ref = Ref;

},{"b4238f17a96ec431":"4hG07","30afa468ddfbd616":"bE8Ia"}],"4hG07":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Array.prototype.ToString = function() {
    var _a;
    return (_a = this.join(", ")) !== null && _a !== void 0 ? _a : "(empty)";
};
Array.prototype.Remove = function(item) {
    var index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        return true;
    }
    return false;
};

},{}],"bE8Ia":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefBase = void 0;
var SimpleEmitter_1 = require("15d9d0f0b765a0a");
var Ref_1 = require("50725d1a6f443472");
var RefBase = /** @class */ function() {
    function RefBase() {
        this.Name = "";
        this.Id = -1;
        // public watchers: RefComponentBase<any, any>[] = []; // TODO: Component type?
        this.watchers = []; // TODO: type? RefComponentBase<any, any> sie średnio nadaje bo takie rzeczy jak CollectionView też tu wpadają
        this.emitter = new SimpleEmitter_1.SimpleEmitter(); // TODO: zamienić na HandlersCollection
        Ref_1.Ref.Id += 1;
        this.Id = Ref_1.Ref.Id;
    }
    RefBase.prototype.NameIt = function(name) {
        this.Name = name;
        return this;
    };
    RefBase.prototype.AddSubscriber = function(control) {
        this.watchers.push(control);
    };
    RefBase.prototype.RemoveControl = function(control) {
        this.watchers.Remove(control);
    };
    RefBase.prototype.RefreshSubscribers = function(except) {
        this.watchers.filter(function(c) {
            return c !== except;
        }).forEach(function(c) {
            c.Refresh();
        });
    };
    RefBase.prototype.ClearHandlers = function() {
        this.emitter.Clear();
        return this;
    };
    RefBase.prototype.OnChange = function(handler, callThisCallbackRightAway) {
        if (callThisCallbackRightAway === void 0) callThisCallbackRightAway = false;
        this.emitter.AddHandler(handler);
        if (callThisCallbackRightAway == true) handler(this._value);
        return this;
    };
    RefBase.Id = 0;
    return RefBase;
}();
exports.RefBase = RefBase;

},{"15d9d0f0b765a0a":"hUVvm","50725d1a6f443472":"9pTSI"}],"hUVvm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleEmitter = void 0;
var SimpleEmitter = /** @class */ function() {
    function SimpleEmitter() {
        // private handlersNames: string[] = [];
        this.handlers = [];
    }
    Object.defineProperty(SimpleEmitter.prototype, "Subs", {
        // public AddNamedHandler(name: string, callback: (val: any) => void)
        // {
        //     if (!this.handlersNames.includes(name))
        //     {
        //         this.handlersNames.push(name);
        //         this.handlers.push(callback);
        //     }
        // }
        get: function() {
            return this.handlers.length;
        },
        enumerable: false,
        configurable: true
    });
    SimpleEmitter.prototype.Clear = function() {
        this.handlers = [];
    };
    SimpleEmitter.prototype.AddHandler = function(callback) {
        this.handlers.push(callback);
    };
    SimpleEmitter.prototype.CallHandlers = function() {
        var val = [];
        for(var _i = 0; _i < arguments.length; _i++)val[_i] = arguments[_i];
        this.handlers.forEach(function(h) {
            return h.apply(void 0, val);
        });
    };
    return SimpleEmitter;
}();
exports.SimpleEmitter = SimpleEmitter;

},{}],"QB8AR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RV = void 0;
var Ref_1 = require("39d0fbe4c736a760");
/*
    Ref or Value

    DLACZEGO TO NIE JEST ZASZYTE W KLASACH BAZOWYCH?????????????
*/ var RV = /** @class */ function() {
    function RV() {}
    RV.Use = function(valueOrRef, callback) {
        if (valueOrRef == undefined) // throw new Error("Value or Ref must be provided");
        return;
        if (!callback) throw new Error("Callback must be provided");
        if (valueOrRef instanceof Ref_1.Ref) valueOrRef.OnChange(function(v) {
            callback(v);
        }, true);
        else callback(valueOrRef);
    };
    return RV;
}();
exports.RV = RV;

},{"39d0fbe4c736a760":"9pTSI"}],"7gc2P":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefDate = void 0;
var Ref_1 = require("768cf0ff1c4f2a44");
var RefDate = /** @class */ function(_super) {
    __extends(RefDate, _super);
    function RefDate(initialDate) {
        if (initialDate === void 0) initialDate = new Date(0);
        var _this = this;
        if (initialDate instanceof Date) _this = _super.call(this, initialDate, false) || this;
        else if (typeof initialDate === "number") _this = _super.call(this, new Date(initialDate), false) || this;
        else if (typeof initialDate === "string") _this = _super.call(this, new Date(initialDate), false) || this;
        return _this;
    }
    return RefDate;
}(Ref_1.Ref);
exports.RefDate = RefDate;

},{"768cf0ff1c4f2a44":"9pTSI"}],"hCxpL":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefBool = void 0;
var Ref_1 = require("26cd7e09340d756a");
var RefBool = /** @class */ function(_super) {
    __extends(RefBool, _super);
    function RefBool(initialDate) {
        if (initialDate === void 0) initialDate = false;
        return _super.call(this, initialDate, false) || this;
    }
    RefBool.prototype.CombineRefBool = function(anotherRef, operation) {
        var _this = this;
        var result = new RefBool(operation(this.value, anotherRef.value));
        this.OnChange(function(v) {
            return result.value = operation(_this.value, anotherRef.value);
        });
        anotherRef.OnChange(function(v) {
            return result.value = operation(_this.value, anotherRef.value);
        });
        return result;
    };
    RefBool.prototype.CombineRefBoolValue = function(anotherValue, operation) {
        var result = new RefBool(operation(this.value, anotherValue));
        this.OnChange(function(v) {
            return result.value = operation(v, anotherValue);
        }, true);
        return result;
    };
    RefBool.prototype.MixRefBool = function(x, operation) {
        if (x instanceof Ref_1.Ref) return this.CombineRefBool(x, operation);
        else return this.CombineRefBoolValue(x, operation);
    };
    RefBool.prototype.And = function(anotherRef) {
        return this.MixRefBool(anotherRef, function(a, b) {
            return a && b;
        });
    };
    RefBool.prototype.Or = function(anotherRef) {
        return this.MixRefBool(anotherRef, function(a, b) {
            return a || b;
        });
    };
    RefBool.prototype.Toggle = function() {
        this.value = !this.value;
        return this;
    };
    RefBool.prototype.True = function() {
        this.value = true;
        return this;
    };
    RefBool.prototype.IsTrue = function() {
        return this.value == true;
    };
    RefBool.prototype.IsFalse = function() {
        return this.value == false;
    };
    RefBool.prototype.False = function() {
        this.value = false;
        return this;
    };
    return RefBool;
}(Ref_1.Ref);
exports.RefBool = RefBool;

},{"26cd7e09340d756a":"9pTSI"}],"8mYO5":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefString = void 0;
var Ref_1 = require("2a4f77e19bc1874e");
var RefString = /** @class */ function(_super) {
    __extends(RefString, _super);
    function RefString(initialDate) {
        if (initialDate === void 0) initialDate = "";
        return _super.call(this, initialDate, false) || this;
    }
    RefString.prototype.Includes = function(toCompare) {
        // return value.includes(this.value as string);
        return this.Compare(this, toCompare, function(a, b) {
            return a.includes(b);
        });
    };
    return RefString;
}(Ref_1.Ref);
exports.RefString = RefString;

},{"2a4f77e19bc1874e":"9pTSI"}],"eb56X":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefNumber = void 0;
var Ref_1 = require("951c986508091c2f");
var RefNumber = /** @class */ function(_super) {
    __extends(RefNumber, _super);
    function RefNumber(initialDate) {
        if (initialDate === void 0) initialDate = 0;
        return _super.call(this, initialDate, false) || this;
    }
    RefNumber.prototype.IsBigger = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a > b;
        });
    };
    RefNumber.prototype.IsBiggerOrEqual = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a >= b;
        });
    };
    RefNumber.prototype.IsSmaller = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a < b;
        });
    };
    RefNumber.prototype.IsSmallerrOrEqual = function(toCompare) {
        return this.Compare(this, toCompare, function(a, b) {
            return a <= b;
        });
    };
    RefNumber.prototype.Plus = function(x) {
        return this.Mix(x, function(a, b) {
            return a + b;
        });
    };
    RefNumber.prototype.Minus = function(x) {
        return this.Mix(x, function(a, b) {
            return a - b;
        });
    };
    RefNumber.prototype.Multiply = function(x) {
        return this.Mix(x, function(a, b) {
            return a * b;
        });
    };
    RefNumber.prototype.Divide = function(x) {
        return this.Mix(x, function(a, b) {
            return a / b;
        });
    };
    return RefNumber;
}(Ref_1.Ref);
exports.RefNumber = RefNumber;

},{"951c986508091c2f":"9pTSI"}],"5B4F5":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefObject = void 0;
var RefBase_1 = require("d8b0f30947fe94e0");
var RefObject = /** @class */ function(_super) {
    __extends(RefObject, _super);
    function RefObject(_obj) {
        var _this = _super.call(this) || this;
        _this._obj = _obj;
        return _this;
    }
    RefObject.prototype.Set = function(obj, excludeControlForRefresh) {
        // if (this.object === obj) return;
        this._obj = obj;
        this.RefreshSubscribers(excludeControlForRefresh);
        this.emitter.CallHandlers(this._obj);
    };
    RefObject.prototype.ForceOnChange = function() {
        this.RefreshSubscribers();
        this.emitter.CallHandlers(this._obj);
    };
    Object.defineProperty(RefObject.prototype, "object", {
        get: function() {
            return this._obj;
        },
        set: function(object) {
            this.Set(object);
        },
        enumerable: false,
        configurable: true
    });
    ///////////////// CZY TA FUNKCJAMA JAKIŚ SENS W OGÓLE????????????????
    // public Modify(fn: (obj: T) => T): this
    // {
    //     this._obj = fn(this._obj);
    //     this.emitter.CallHandlers(this._obj);
    //     this.RefreshSubscribers();
    //     return this;
    // }
    RefObject.prototype.Call = function(fn) {
        fn(this._obj);
        this.emitter.CallHandlers(this._obj);
        this.RefreshSubscribers();
        return this;
    };
    RefObject.prototype.OnChange = function(callback) {
        this.emitter.AddHandler(callback);
        return this;
    };
    RefObject.prototype.toString = function() {
        if (this.Name) return "RefObject named ".concat(this.Name);
        else return "RefObject";
    };
    return RefObject;
}(RefBase_1.RefBase);
exports.RefObject = RefObject;

},{"d8b0f30947fe94e0":"bE8Ia"}],"4tJON":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HashRef = void 0;
var Ref_1 = require("85d81f0a1e5ed592");
var HashRef = /** @class */ function(_super) {
    __extends(HashRef, _super);
    function HashRef() {
        var _this = _super.call(this, window.location.hash.slice(1)) || this;
        _this.preventOnChange = false;
        window.onhashchange = function(e) {
            _this.preventOnChange = true;
            var hash = e.newURL.split("#")[1];
            _this.Set(hash, _this);
            _this.preventOnChange = false;
        };
        _this.OnChange(function(v) {
            if (_this.preventOnChange) return;
            window.location.hash = v;
        });
        return _this;
    }
    return HashRef;
}(Ref_1.Ref);
exports.HashRef = HashRef;

},{"85d81f0a1e5ed592":"9pTSI"}],"8bvD7":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Collection = void 0;
var Ref_1 = require("fb8f88403ed07443");
var RefBase_1 = require("fa11192647dfc9a");
var Collection = /** @class */ function(_super) {
    __extends(Collection, _super);
    function Collection(items) {
        if (items === void 0) items = [];
        var _this = _super.call(this) || this;
        _this.items = items;
        _this.CountRef = new Ref_1.Ref(_this.items.length);
        return _this;
    }
    Object.defineProperty(Collection.prototype, "IsEmpty", {
        get: function() {
            return this.Count == 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "IsNotEmpty", {
        get: function() {
            return this.Count > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "Items", {
        get: function() {
            return this.items;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.Add = function() {
        var _this = this;
        var newItems = [];
        for(var _i = 0; _i < arguments.length; _i++)newItems[_i] = arguments[_i];
        newItems.forEach(function(x) {
            _this.items.push(x);
        });
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.Load = function() {
        // TODO: jeśli pierwszy argument jest tablicą to traktuj jak tablice, tylko co z tablicą tablic wtedy?
        var items = [];
        for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
        this.items = [];
        return this.Add.apply(this, items);
    };
    Collection.prototype.Remove = function(item) {
        if (item == undefined) return this;
        return this.Call(function(items) {
            return items.Remove(item);
        });
    };
    Collection.prototype.RemoveAll = function() {
        return this.Modify(function(items) {
            return [];
        });
    };
    Collection.prototype.Clear = function() {
        return this.RemoveAll();
    };
    Collection.prototype.Contains = function(item) {
        return this.items.includes(item);
    };
    Collection.prototype.Modify = function(fn) {
        this.items = fn(this.items);
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.ModifyOne = function(predicate, modify) {
        var found = this.items.find(predicate);
        if (!found) return this;
        modify(found);
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.Call = function(fn) {
        fn(this.items);
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.ForceOnChange = function() {
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.ForEach = function(callback) {
        this.items.forEach(function(x) {
            callback(x);
        });
        return this;
    };
    Collection.prototype.RemoveMany = function(items) {
        var _this = this;
        items.forEach(function(x) {
            _this.items.Remove(x);
        });
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Object.defineProperty(Collection.prototype, "Count", {
        get: function() {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.Take = function(start, count) {
        if (count > 0) return this.items.slice(start, start + count);
        else return this.items.slice(start);
    };
    Collection.prototype.Swap = function(a, b) {
        var _a;
        if (a < 0 || b >= this.items.length) return this;
        _a = [
            this.items[b],
            this.items[a]
        ], this.items[a] = _a[0], this.items[b] = _a[1];
        this.CountRef.value = this.items.length;
        this.emitter.CallHandlers(this.items);
        this.RefreshSubscribers();
        return this;
    };
    Collection.prototype.OnChange = function(callback, callThisCallbackRightAway) {
        if (callThisCallbackRightAway === void 0) callThisCallbackRightAway = false;
        this.emitter.AddHandler(callback);
        if (callThisCallbackRightAway == true) callback(this.items);
        return this;
    };
    Collection.prototype.toString = function() {
        if (this.Name) return "Collection of ".concat(this.Name, " (").concat(this.Count, ")");
        else return "Collection(".concat(this.Count, ")");
    };
    return Collection;
}(RefBase_1.RefBase);
exports.Collection = Collection;

},{"fb8f88403ed07443":"9pTSI","fa11192647dfc9a":"bE8Ia"}],"3ZCHv":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectionView = void 0;
var Ref_1 = require("22d3f529831f22be");
var RefBase_1 = require("6d87b43ee2f8dae1");
var CollectionView = /** @class */ function(_super) {
    __extends(CollectionView, _super);
    function CollectionView(collection) {
        var _this = _super.call(this) || this;
        _this.collection = collection;
        _this.Items = [];
        _this.filters = [];
        _this.FilteredCount = new Ref_1.Ref(0);
        collection.AddSubscriber(_this);
        return _this;
    }
    Object.defineProperty(CollectionView.prototype, "Collection", {
        get: function() {
            return this.collection;
        },
        enumerable: false,
        configurable: true
    });
    CollectionView.prototype.OnChange = function(handler) {
        this.emitter.AddHandler(handler);
        return this;
    };
    CollectionView.prototype.ForEach = function(fn) {
        this.onRefresh = fn;
        return this;
    };
    CollectionView.prototype.Refresh = function() {
        var _this = this;
        this.Items = this.collection.Items;
        this.filters.forEach(function(filterPredicate) {
            _this.Items = _this.Items.filter(function(item) {
                return filterPredicate(item);
            });
        });
        this.FilteredCount.value = this.Items.length;
        if (this.start && this.count) this.Items = this.Items.slice(this.start.value, this.start.value + this.count.value);
        if (this.onRefresh) this.Items.forEach(function(record) {
            return _this.onRefresh(record);
        });
        this.emitter.CallHandlers(this.Items);
        this.RefreshSubscribers();
        return this;
    };
    CollectionView.prototype.Filter = function(ref, predicate) {
        ref.AddSubscriber(this);
        this.filters.push(predicate);
        return this;
    };
    CollectionView.prototype.See = function(start, count) {
        start.AddSubscriber(this);
        count.AddSubscriber(this);
        this.start = start;
        this.count = count;
        return this;
    };
    return CollectionView;
}(RefBase_1.RefBase);
exports.CollectionView = CollectionView;

},{"22d3f529831f22be":"9pTSI","6d87b43ee2f8dae1":"bE8Ia"}],"anBYP":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefComponentBase = void 0;
var ComponentBase_1 = require("1ed8332caeeab091");
var RefComponentBase = /** @class */ function(_super) {
    __extends(RefComponentBase, _super);
    function RefComponentBase(baseElement, ref) {
        var _this = _super.call(this, baseElement) || this;
        _this.ref = ref;
        _this.showThatChanged = RefComponentBase.ShowThatChanged;
        _this.IsRefComponent = true;
        ref.AddSubscriber(_this);
        return _this;
    }
    Object.defineProperty(RefComponentBase.prototype, "Value", {
        get: function() {
            return this.ref.value;
        },
        set: function(value) {
            this.ref.value = value;
        },
        enumerable: false,
        configurable: true
    });
    RefComponentBase.prototype.SetValue = function(value) {
        if (!value) return this;
        this.ref.value = value;
        // this.Refresh()
        return this;
    };
    Object.defineProperty(RefComponentBase.prototype, "Ref", {
        get: function() {
            return this.ref;
        },
        enumerable: false,
        configurable: true
    });
    RefComponentBase.prototype.ShowThatChanged = function(showOrNot) {
        if (showOrNot === void 0) showOrNot = true;
        this.showThatChanged = showOrNot;
        return this;
    };
    RefComponentBase.prototype.Dispose = function() {
        // this.LOG(`💥 Disposing ${this.ID}...`);
        this.ref.RemoveControl(this);
    };
    RefComponentBase.ShowThatChanged = false;
    return RefComponentBase;
}(ComponentBase_1.ComponentBase);
exports.RefComponentBase = RefComponentBase;

},{"1ed8332caeeab091":"8SnDZ"}],"8SnDZ":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentBase = void 0;
require("c22023dfb2c3af65");
var ChildrenCollection_1 = require("b8b764bf2ee7317a");
var EventsContainer_1 = require("fdfc4e9822c909ed");
var RV_1 = require("3b6237c27fffc94a");
var ComponentBase = /** @class */ function() {
    function ComponentBase(baseElement) {
        this.baseElement = baseElement;
        this.id = -1;
        this.Name = "";
        this.IsRefComponent = false; // TODO: xxx
        this.Children = new ChildrenCollection_1.ChildrenCollection(this);
        this.isVisible = true;
        ComponentBase.Id += 1;
        this.id = ComponentBase.Id;
        this.element = ComponentBase.Create(baseElement);
        this.events = new EventsContainer_1.EventsContainer(this.element);
    }
    ComponentBase.prototype.toString = function() {
        var _a;
        return "".concat(this.ID, ": parent=").concat((_a = this.Parent) === null || _a === void 0 ? void 0 : _a.ID, ", children=").concat(this.Children.toString());
    };
    Object.defineProperty(ComponentBase.prototype, "ID", {
        get: function() {
            return "[#".concat(this.id, ":").concat(this.baseElement).concat(this.Name ? ":" + this.Name : "").concat(this.IsRefComponent ? "(REF)" : "", "]");
        },
        enumerable: false,
        configurable: true
    });
    ComponentBase.prototype.LOG = function(str) {
        if (ComponentBase.LogEn) console.log(str);
    };
    ComponentBase.prototype.NameIt = function(name) {
        this.Name = name;
        return this;
    };
    //#endregion
    //#region CORE
    ComponentBase.prototype.Clear = function() {
        var _this = this;
        this.Children.Clone.forEach(function(c) {
            _this.Remove(c);
        });
        return this;
    };
    ComponentBase.prototype.Dispose = function() {
    // this.LOG(`💥 Disposing ${this.ID}...`);
    };
    ComponentBase.prototype.Remove = function(component) {
        var _a;
        if (!component) throw new Error("Parameter is mandatory");
        // this.LOG(`➖ Removing ${component.ID} from ${this.ID} (children: ${this.Children.map(x=>"#"+x.Id)})...`);
        this.LOG("\u2796 ".concat(this.ID, " -= ").concat(component.ID));
        if (!this.Children.Has(component)) throw new Error("This is not your (".concat(this.ID, ") kid (").concat(component.ID, ")"));
        (_a = this.OnRemove) === null || _a === void 0 || _a.call(this); // czemu to jest jeszcze przed usunięciem a nie po?
        component.Children.Clone.forEach(function(c) {
            component.Remove(c);
        });
        if (this.Children.Remove(component)) {
            component.Dispose();
            this.element.Remove(component.element);
        }
        return this;
    };
    ComponentBase.prototype.AddComponent = function(component) {
        if (!component) throw new Error("[TRUFFLE] Parameter/component to add is mandatory (Forget return 'this' from your component method?)");
        if (component == this) throw new Error("[TRUFFLE] You can't be child of yourself");
        if (this.Children.Has(component)) throw new Error("[TRUFFLE] ".concat(component.ID, " was already added to ").concat(this.ID));
        component.Parent = this;
        // this.LOG(`➕ ${this.ID} += ${component.ID}`);
        this.Children.Add(component);
    };
    ComponentBase.prototype.Prepend = function() {
        var _this = this;
        var components = [];
        for(var _i = 0; _i < arguments.length; _i++)components[_i] = arguments[_i];
        components.forEach(function(component) {
            var _a;
            if (component == undefined || component == null) ;
            else if (typeof component == "boolean") ;
            else if (typeof component == "number") {
                var num = component;
                var span = new ComponentBase("span");
                span.Text(num.toString());
                _this.AddComponent(span);
                _this.element.Append(span.Element);
            } else if (typeof component == "string") {
                var str = component;
                var splitted_1 = str.split("\n");
                if (splitted_1.length > 1) splitted_1.forEach(function(s, i) {
                    // We can't use Span (<span>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                    var span = new ComponentBase("span");
                    span.Text(s);
                    _this.AddComponent(span);
                    _this.element.Prepend(span.Element);
                    // Put NewLine between strings except last one
                    if (i != splitted_1.length - 1) {
                        // We can't use NewLine (<br>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                        var br = new ComponentBase("br");
                        _this.AddComponent(br);
                        _this.element.Prepend(br.Element);
                    }
                });
                else {
                    // We can't use Span (<span>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                    var span = new ComponentBase("span");
                    span.Text(str);
                    _this.AddComponent(span);
                    _this.element.Prepend(span.Element);
                }
            } else {
                _this.AddComponent(component); // AddChild?
                _this.element.Prepend(component.Element);
                (_a = component.OnAppend) === null || _a === void 0 || _a.call(component);
            }
        });
        return this;
    };
    ComponentBase.prototype.Append = function() {
        var _this = this;
        var components = [];
        for(var _i = 0; _i < arguments.length; _i++)components[_i] = arguments[_i];
        components.forEach(function(component) {
            var _a;
            if (component == undefined || component == null) ;
            else if (typeof component == "boolean") ;
            else if (typeof component == "number") {
                var num = component;
                var span = new ComponentBase("span");
                span.Text(num.toString());
                _this.AddComponent(span);
                _this.element.Append(span.Element);
            } else if (typeof component == "string") {
                var str = component;
                var splitted_2 = str.split("\n");
                if (splitted_2.length > 1) splitted_2.forEach(function(s, i) {
                    // We can't use Span (<span>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                    var span = new ComponentBase("span");
                    span.Text(s);
                    _this.AddComponent(span);
                    _this.element.Append(span.Element);
                    // Put NewLine between strings except last one
                    if (i != splitted_2.length - 1) {
                        // We can't use NewLine (<br>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                        var br = new ComponentBase("br");
                        _this.AddComponent(br);
                        _this.element.Append(br.Element);
                    }
                });
                else {
                    // We can't use Span (<span>) component here (because it derives from this ComponentBase) so we need to create it on the fly
                    var span = new ComponentBase("span");
                    span.Text(str);
                    _this.AddComponent(span);
                    _this.element.Append(span.Element);
                }
            } else {
                _this.AddComponent(component);
                _this.element.Append(component.Element);
                (_a = component.OnAppend) === null || _a === void 0 || _a.call(component);
            }
        });
        return this;
    };
    ComponentBase.prototype.RemoveSelf = function() {
        var _a;
        // this.element.parentNode.Remove(this.element);
        (_a = this.Parent) === null || _a === void 0 || _a.Remove(this);
        return this;
    };
    ComponentBase.prototype.SearchUp = function(predicate) {
        var p = this.Parent;
        if (p == undefined) return undefined;
        while(!predicate(p)){
            p = p === null || p === void 0 ? void 0 : p.Parent;
            if (p == undefined) return undefined;
        }
        return p;
    };
    ComponentBase.prototype.SearchDown = function(predicate) {
        return this.Children.Search(predicate);
    };
    Object.defineProperty(ComponentBase.prototype, "Element", {
        get: function() {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    ComponentBase.Create = function(htmlElement) {
        return document.createElement(htmlElement);
    };
    //#endregion CORE
    //#region STYLING-ATTRIBUTES
    ComponentBase.prototype.Attribute = function(key, value) {
        var _this = this;
        if (!key) return this;
        if (!value) {
            this.element.setAttribute(key, "");
            return this;
        }
        RV_1.RV.Use(value, function(v) {
            return _this.element.setAttribute(key, v || "");
        });
        return this;
    };
    ComponentBase.prototype.GetAttribute = function(key) {
        return this.element.getAttribute(key);
    };
    ComponentBase.prototype.RemoveAttribute = function(key) {
        this.element.removeAttribute(key);
        return this;
    };
    ComponentBase.prototype.TestAttr = function(id) {
        return this.Attribute("data-test", id);
    };
    ComponentBase.prototype.SetStyle = function(property, value, postfix) {
        var _this = this;
        if (postfix === void 0) postfix = "";
        RV_1.RV.Use(value, function(v) {
            return _this.SetSingleStyle(property, v.toString() + postfix);
        });
        return this;
    };
    //#endregion
    //#region STYLING-CLASS
    ComponentBase.prototype.Class = function(cssClasses) {
        var _this = this;
        RV_1.RV.Use(cssClasses, function(v) {
            return v.split(" ").filter(function(x) {
                return x.length > 0;
            }).forEach(function(c) {
                return _this.element.classList.add(c);
            });
        });
        return this;
    };
    ComponentBase.prototype.RemoveAllClasses = function() {
        while(this.element.classList.length > 0)this.element.classList.remove(this.element.classList.item(0) || "");
    };
    ComponentBase.prototype.RemoveClass = function(klass) {
        if (klass) this.element.classList.remove(klass);
        return this;
    };
    // TODO: remove
    ComponentBase.prototype.AddClass = function(klass) {
        if (klass) this.element.classList.add(klass);
        return this;
    };
    ComponentBase.prototype.ToggleClasses = function(classA, classB) {
        if (this.element.classList.contains(classA)) {
            this.element.classList.remove(classA);
            this.element.classList.add(classB);
        } else {
            this.element.classList.remove(classB);
            this.element.classList.add(classA);
        }
        return this;
    };
    //#endregion
    //#region STYLING-UTILS
    ComponentBase.prototype.Style = function(propertyOrCss, val) {
        var _this = this;
        if (propertyOrCss.includes(";")) propertyOrCss.split(";").map(function(x) {
            return x.trim();
        }).forEach(function(x) {
            return _this.SetSingleStyle(x);
        });
        else this.SetSingleStyle(propertyOrCss, val);
        return this;
    };
    ComponentBase.prototype.SetSingleStyle = function(propertyOrCss, val) {
        if (val !== undefined) this.element.style[propertyOrCss] = val;
        else {
            var _a = propertyOrCss.split(":").map(function(x) {
                return x.trim();
            }), key = _a[0], value = _a[1];
            this.element.style[key] = value;
        }
        return this;
    };
    ComponentBase.prototype.ApplyStyle = function(val, is, property, value, elseValue) {
        var _this = this;
        val.OnChange(function(v) {
            v == is ? _this.Style(property, value) : _this.Style(property, elseValue);
        }, true);
        return this;
    };
    ComponentBase.prototype.When = function(ref, predicate, whenTrue, whenFalse) {
        var _this = this;
        ref.OnChange(function(v) {
            predicate(v, ref, _this) ? whenTrue(_this, ref) : whenFalse === null || whenFalse === void 0 || whenFalse(_this, ref);
        }, true);
        return this;
    };
    ComponentBase.prototype.ToggleStyle = function(prop, val, elseVal) {
        if (getComputedStyle(this.element)[prop] !== val) this.element.style[prop] = val;
        else this.element.style[prop] = elseVal;
        return this;
    };
    //#endregion
    //#region STYLING-MISC
    ComponentBase.prototype.Cursor = function(cursor) {
        this.element.style.cursor = cursor;
        return this;
    };
    ComponentBase.prototype.CursorPointer = function() {
        return this.Cursor("pointer");
    };
    ComponentBase.prototype.CursorDefault = function() {
        return this.Cursor("default");
    };
    ComponentBase.prototype.Focus = function() {
        this.element.Focus();
        return this;
    };
    ComponentBase.prototype.ScrollToBottom = function() {
        this.element.scrollTop = this.element.scrollHeight;
        return this;
    };
    //#endregion
    //#region STYLING-VISUAL
    ComponentBase.prototype.ZIndex = function(index) {
        return this.SetStyle("zIndex", index);
    };
    ComponentBase.prototype.Opacity = function(opacity) {
        return this.SetStyle("opacity", opacity);
    };
    ComponentBase.prototype.Blur = function(value, unit) {
        var _this = this;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(value, function(v) {
            return _this.SetSingleStyle("filter: blur(".concat(value).concat(unit, ")"));
        });
        return this;
    };
    //#endregion
    //#region STYLING-TEXT
    ComponentBase.prototype.Bold = function() {
        return this.SetSingleStyle("font-weight", "bold");
    };
    ComponentBase.prototype.FontBold = function() {
        return this.SetSingleStyle("font-weight", "bold");
    };
    ComponentBase.prototype.Normal = function() {
        return this.Style("font-weight: normal; font-style: normal");
    };
    ComponentBase.prototype.FontNormal = function() {
        return this.Style("font-weight: normal; font-style: normal");
    };
    ComponentBase.prototype.FontWeightNormal = function() {
        return this.Style("font-weight", "normal");
    };
    ComponentBase.prototype.FontWeightBold = function() {
        return this.Style("font-weight", "bold");
    };
    ComponentBase.prototype.Italic = function() {
        return this.SetSingleStyle("font-style", "italic");
    };
    ComponentBase.prototype.FontItalic = function() {
        return this.SetSingleStyle("font-style", "italic");
    };
    ComponentBase.prototype.FontSize = function(size, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("font-size", size, unit);
    };
    ComponentBase.prototype.TextAlign = function(align) {
        return this.SetStyle("text-align", align);
    };
    ComponentBase.prototype.TextAlignLeft = function() {
        this.element.style.textAlign = "left";
        return this;
    };
    ComponentBase.prototype.TextAlignRight = function() {
        this.element.style.textAlign = "right";
        return this;
    };
    ComponentBase.prototype.TextAlignCenter = function() {
        this.element.style.textAlign = "center";
        return this;
    };
    //#endregion STYLING-TEXT
    //#region STYLING-POSITION
    ComponentBase.prototype.Position = function(position) {
        this.element.style.position = position;
        return this;
    };
    ComponentBase.prototype.PositionAbsolute = function() {
        this.element.style.position = "absolute";
        return this;
    };
    ComponentBase.prototype.PositionRelative = function() {
        this.element.style.position = "relative";
        return this;
    };
    ComponentBase.prototype.PositionFixed = function() {
        this.element.style.position = "fixed";
        return this;
    };
    ComponentBase.prototype.Left = function(left, unit) {
        var _this = this;
        if (left === void 0) left = 0;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(left, function(v) {
            return _this.element.style.left = v + unit;
        });
        return this;
    };
    ComponentBase.prototype.LeftPercent = function(left) {
        var _this = this;
        if (left === void 0) left = 0;
        RV_1.RV.Use(left, function(v) {
            return _this.Left(v, "%");
        });
        return this;
    };
    ComponentBase.prototype.Right = function(right, unit) {
        var _this = this;
        if (right === void 0) right = 0;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(right, function(v) {
            return _this.element.style.right = v + unit;
        });
        return this;
    };
    ComponentBase.prototype.RightPercent = function(right) {
        var _this = this;
        if (right === void 0) right = 0;
        RV_1.RV.Use(right, function(v) {
            return _this.Right(v, "%");
        });
        return this;
    };
    ComponentBase.prototype.Top = function(top, unit) {
        var _this = this;
        if (top === void 0) top = 0;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(top, function(v) {
            return _this.element.style.top = v + unit;
        });
        return this;
    };
    ComponentBase.prototype.TopPercent = function(top) {
        var _this = this;
        if (top === void 0) top = 0;
        RV_1.RV.Use(top, function(v) {
            return _this.Top(v, "%");
        });
        return this;
    };
    ComponentBase.prototype.Bottom = function(bottom, unit) {
        var _this = this;
        if (bottom === void 0) bottom = 0;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(bottom, function(v) {
            return _this.element.style.bottom = v + unit;
        });
        return this;
    };
    ComponentBase.prototype.BottomPercent = function(bottom) {
        var _this = this;
        if (bottom === void 0) bottom = 0;
        RV_1.RV.Use(bottom, function(v) {
            return _this.Bottom(v, "%");
        });
        return this;
    };
    ComponentBase.prototype.FloatLeft = function() {
        this.element.style.float = "left";
        return this;
    };
    ComponentBase.prototype.FloatRight = function() {
        this.element.style.float = "right";
        return this;
    };
    ComponentBase.prototype.ClearBoth = function() {
        this.element.style.clear = "both";
        return this;
    };
    ComponentBase.prototype.ClearLeft = function() {
        this.element.style.clear = "left";
        return this;
    };
    ComponentBase.prototype.ClearRight = function() {
        this.element.style.clear = "right";
        return this;
    };
    //#endregion STYLING-POSITION
    //#region STYLING-DISPLAY
    ComponentBase.prototype.Display = function(as) {
        return this.SetSingleStyle("display: " + as);
    };
    ComponentBase.prototype.Inline = function() {
        return this.SetSingleStyle("display: inline");
    };
    ComponentBase.prototype.DisplayInline = function() {
        return this.SetSingleStyle("display: inline");
    };
    ComponentBase.prototype.Block = function() {
        return this.SetSingleStyle("display: block");
    };
    ComponentBase.prototype.DisplayBlock = function() {
        return this.SetSingleStyle("display: block");
    };
    ComponentBase.prototype.InlineBlock = function() {
        return this.SetSingleStyle("display: inline-block");
    };
    ComponentBase.prototype.DisplayInlineBlock = function() {
        return this.SetSingleStyle("display: inline-block");
    };
    //#endregion STYLING-DISPLAY
    //#region STYLING-BORDER
    ComponentBase.prototype.Border = function(width, color, radius) {
        if (width === void 0) width = 1;
        if (color === void 0) color = "#888";
        if (radius === void 0) radius = 0;
        this.Style("border: ".concat(width, "px solid ").concat(color, "; border-radius: ").concat(radius, "px"));
        return this;
    };
    ComponentBase.prototype.BorderNone = function() {
        this.Style("border: none");
        return this;
    };
    ComponentBase.prototype.BorderStyling = function(edge, width, color, radius, style) {
        if (radius === void 0) radius = 0;
        if (style === void 0) style = "solid";
        this.Style("border-".concat(edge, ": ").concat(width, "px ").concat(style, " ").concat(color, "; border-").concat(edge, "-radius: ").concat(radius, "px"));
        return this;
    };
    ComponentBase.prototype.BorderBottom = function(width, color, style, radius) {
        if (width === void 0) width = 1;
        if (color === void 0) color = "#888";
        if (style === void 0) style = "solid";
        if (radius === void 0) radius = 0;
        return this.BorderStyling("bottom", width, color, radius, style);
    };
    ComponentBase.prototype.BorderTop = function(width, color, style, radius) {
        if (width === void 0) width = 1;
        if (color === void 0) color = "#888";
        if (style === void 0) style = "solid";
        if (radius === void 0) radius = 0;
        return this.BorderStyling("top", width, color, radius, style);
    };
    ComponentBase.prototype.BorderLeft = function(width, color, style, radius) {
        if (width === void 0) width = 1;
        if (color === void 0) color = "#888";
        if (style === void 0) style = "solid";
        if (radius === void 0) radius = 0;
        return this.BorderStyling("left", width, color, radius, style);
    };
    ComponentBase.prototype.BorderRight = function(width, color, style, radius) {
        if (width === void 0) width = 1;
        if (color === void 0) color = "#888";
        if (style === void 0) style = "solid";
        if (radius === void 0) radius = 0;
        return this.BorderStyling("right", width, color, radius, style);
    };
    ComponentBase.prototype.BorderWidth = function(width, unit) {
        var _this = this;
        if (unit === void 0) unit = "px";
        RV_1.RV.Use(width, function(v) {
            return _this.Style("border-width: ".concat(v).concat(unit));
        });
        return this;
    };
    ComponentBase.prototype.BorderStyle = function(style) {
        var _this = this;
        RV_1.RV.Use(style, function(v) {
            return _this.Style("border-style: ".concat(v));
        });
        return this;
    };
    ComponentBase.prototype.BorderStyleSolid = function() {
        return this.BorderStyle("solid");
    };
    ComponentBase.prototype.BorderStyleDotted = function() {
        return this.BorderStyle("dotted");
    };
    ComponentBase.prototype.BorderStyleDashed = function() {
        return this.BorderStyle("dashed");
    };
    ComponentBase.prototype.BorderRadius = function(radius, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("borderRadius", radius, unit);
    };
    //#endregion STYLING-BORDER
    //#region STYLING-SIZE
    ComponentBase.prototype.Width = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("width", val, unit);
    };
    ComponentBase.prototype.WidthPercent = function(val) {
        return this.SetStyle("width", val, "%");
    };
    ComponentBase.prototype.WidthAuto = function() {
        this.element.style.width = "auto";
        return this;
    };
    ComponentBase.prototype.HalfWidth = function() {
        this.element.style.width = "50%";
        return this;
    };
    ComponentBase.prototype.FullWidth = function() {
        this.element.style.width = "100%";
        return this;
    };
    ComponentBase.prototype.Height = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("height", val, unit);
    };
    ComponentBase.prototype.HeightPercent = function(val) {
        return this.SetStyle("height", val, "%");
    };
    ComponentBase.prototype.HeightAuto = function() {
        this.element.style.height = "auto";
        return this;
    };
    ComponentBase.prototype.MaxWidth = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.maxWidth = val + unit;
        return this;
    };
    ComponentBase.prototype.MinWidth = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.minWidth = val + unit;
        return this;
    };
    ComponentBase.prototype.MaxHeight = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.maxHeight = val + unit;
        return this;
    };
    ComponentBase.prototype.MinHeight = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.minHeight = val + unit;
        return this;
    };
    //#endregion STYLING-SIZE
    //#region STYLING-MARGIN
    ComponentBase.prototype.Margin = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("margin", val, unit);
    };
    ComponentBase.prototype.MarginAuto = function() {
        this.element.style.margin = "auto";
        return this;
    };
    ComponentBase.prototype.MarginTop = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("marginTop", val, unit);
    };
    ComponentBase.prototype.MarginBottom = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("marginBottom", val, unit);
    };
    ComponentBase.prototype.MarginTopBottom = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.marginTop = val + unit;
        this.element.style.marginBottom = val + unit;
        return this;
    };
    ComponentBase.prototype.MarginLeft = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("marginLeft", val, unit);
    };
    ComponentBase.prototype.MarginRight = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("marginRight", val, unit);
    };
    ComponentBase.prototype.MarginLeftRight = function(val, unit) {
        if (unit === void 0) unit = "px";
        this.element.style.marginLeft = val + unit;
        this.element.style.marginRight = val + unit;
        return this;
    };
    //#endregion STYLING-MARGIN
    //#region STYLING-COLORS
    ComponentBase.prototype.Color = function(color) {
        return this.SetStyle("color", color);
    };
    ComponentBase.prototype.Background = function(color) {
        return this.SetStyle("background", color);
    };
    //#endregion STYLING-COLORS
    //#region STYLING-PADDING
    ComponentBase.prototype.Padding = function(val, secondVal) {
        if (!secondVal) this.SetStyle("padding", val, "px");
        else this.element.style.padding = "".concat(val, "px ").concat(secondVal, "px");
        return this;
    };
    ComponentBase.prototype.PaddingLeft = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("paddingLeft", val, unit);
    };
    ComponentBase.prototype.PaddingRight = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("paddingRight", val, unit);
    };
    ComponentBase.prototype.PaddingTop = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("paddingTop", val, unit);
    };
    ComponentBase.prototype.PaddingBottom = function(val, unit) {
        if (unit === void 0) unit = "px";
        return this.SetStyle("paddingBottom", val, unit);
    };
    //#endregion STYLING-PADDING
    //#region STYLING-OVERFLOW
    ComponentBase.prototype.OverflowX = function(val) {
        this.element.style.overflowX = val;
        return this;
    };
    ComponentBase.prototype.OverflowY = function(val) {
        this.element.style.overflowY = val;
        return this;
    };
    ComponentBase.prototype.OverflowYScroll = function() {
        return this.OverflowY("scroll");
    };
    //#endregion STYLING-OVERFLOW
    //#region PROPS
    ComponentBase.prototype.Id = function(id) {
        return this.Attribute("id", id);
    };
    ComponentBase.prototype.Text = function(text) {
        var _this = this;
        RV_1.RV.Use(text, function(v) {
            return _this.element.innerText = v;
        });
        return this;
    };
    ComponentBase.prototype.GetText = function() {
        return this.element.innerText;
    };
    ComponentBase.prototype.Html = function(html) {
        var _this = this;
        RV_1.RV.Use(html, function(v) {
            return _this.element.innerHTML = v;
        });
        return this;
    };
    ComponentBase.prototype.GetHtml = function() {
        return this.element.innerHTML;
    };
    ComponentBase.prototype.Enable = function(isEnabled) {
        var _this = this;
        RV_1.RV.Use(isEnabled, function(v) {
            return v ? _this.RemoveAttribute("disabled") : _this.Attribute("disabled");
        });
        return this;
    };
    ComponentBase.prototype.EnableWhen = function(watch, predicate) {
        var _this = this;
        if (predicate === void 0) predicate = function(value) {
            return !!value;
        };
        RV_1.RV.Use(watch, function(v) {
            return _this.Enable(predicate(v));
        });
        return this;
    };
    ComponentBase.prototype.DisableWhen = function(watch, predicate) {
        var _this = this;
        if (predicate === void 0) predicate = function(value) {
            return !!value;
        };
        RV_1.RV.Use(watch, function(v) {
            return _this.Disable(predicate(v));
        });
        return this;
    };
    ComponentBase.prototype.Disable = function(isDisabled) {
        var _this = this;
        RV_1.RV.Use(isDisabled, function(v) {
            return v ? _this.Attribute("disabled") : _this.RemoveAttribute("disabled");
        });
        return this;
    };
    ComponentBase.prototype.Enabled = function() {
        return this.Enable(true);
    };
    ComponentBase.prototype.Disabled = function() {
        return this.Enable(false);
    };
    Object.defineProperty(ComponentBase.prototype, "Events", {
        get: function() {
            return this.events;
        },
        enumerable: false,
        configurable: true
    });
    ComponentBase.prototype.On = function(event, handler) {
        this.events.Add(event, handler);
        return this;
    };
    ComponentBase.prototype.Off = function(event) {
        this.events.Off(event);
        return this;
    };
    ComponentBase.prototype.CallEvent = function(event) {
        this.events.Call(event);
        return this;
    };
    ComponentBase.prototype.OnClick = function(handler) {
        var _this = this;
        this.On("click", function(pe) {
            return handler(_this, pe);
        });
        return this;
    };
    ComponentBase.prototype.Click = function() {
        this.events.Call("click");
        return this;
    };
    ComponentBase.prototype.ClickAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.events.CallAsync("click")
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    ComponentBase.prototype.OnHover = function(handler) {
        var _this = this;
        return this.On("mouseover", function() {
            return handler(_this);
        });
    };
    ComponentBase.prototype.OnMouseOut = function(handler) {
        var _this = this;
        return this.On("mouseout", function() {
            return handler(_this);
        });
    };
    ComponentBase.prototype.OnRightClick = function(handler) {
        var _this = this;
        this.On("contextmenu", function(e) {
            e.preventDefault();
            handler(_this);
        });
        return this;
    };
    ComponentBase.prototype.OnFocus = function(handler) {
        var _this = this;
        return this.On("focus", function() {
            return handler(_this);
        });
    };
    ComponentBase.prototype.OnBlur = function(handler) {
        var _this = this;
        return this.On("blur", function() {
            return handler(_this);
        });
    };
    ComponentBase.prototype.OnEnterKeyPressed = function(handler) {
        var _this = this;
        return this.On("keyup", function(ke) {
            if (ke.key === "Enter") handler(_this, ke);
        });
    };
    ComponentBase.prototype.OnKeyUp = function(handler) {
        var _this = this;
        return this.On("keyup", function(ke) {
            return handler(_this, ke);
        });
    };
    ComponentBase.prototype.OnKeyDown = function(handler) {
        var _this = this;
        return this.On("keydown", function(ke) {
            return handler(_this, ke);
        });
    };
    ComponentBase.prototype.OnKeyPress = function(handler) {
        var _this = this;
        return this.On("keypress", function(ke) {
            return handler(_this, ke);
        });
    };
    //#endregion EVENTS
    //#region VISIBILITY
    ComponentBase.prototype.Exist = function(component) {
        return this.element.Exist(component.Element);
    };
    ComponentBase.prototype.Visible = function(show, as) {
        var _this = this;
        if (as === void 0) as = "inline-block";
        RV_1.RV.Use(show, function(v) {
            return v ? _this.Show(as) : _this.Hide();
        });
        return this;
    };
    ComponentBase.prototype.VisibleWhen = function(watch, predicate, as) {
        var _this = this;
        if (predicate === void 0) predicate = function(v) {
            return !!v;
        };
        if (as === void 0) as = "inline-block";
        RV_1.RV.Use(watch, function(v) {
            return predicate(v) ? _this.Show(as) : _this.Hide();
        });
        return this;
    };
    ComponentBase.prototype.Hide = function() {
        var _a;
        this.isVisible = false;
        (_a = this.OnHide) === null || _a === void 0 || _a.call(this);
        this.element.Hide();
        return this;
    };
    ComponentBase.prototype.IsVisible = function() {
        return this.isVisible;
    // return this.element.IsVisible();
    };
    ComponentBase.prototype.Show = function(as) {
        var _a;
        if (as === void 0) as = "inline-block";
        this.showAs = as;
        this.isVisible = true;
        this.element.Show(as);
        (_a = this.OnShow) === null || _a === void 0 || _a.call(this);
        return this;
    };
    ComponentBase.prototype.Toggle = function(as) {
        if (as) this.showAs = as;
        // this.isVisible = !this.isVisible;
        this.isVisible ? this.Hide() : this.Show(this.showAs);
        // this.element.Toggle();
        return this;
    };
    //#region LOGS
    ComponentBase.LogEn = false;
    ComponentBase.Id = 0;
    return ComponentBase;
}();
exports.ComponentBase = ComponentBase;

},{"c22023dfb2c3af65":"4hG07","b8b764bf2ee7317a":"9eMnE","fdfc4e9822c909ed":"aGJ04","3b6237c27fffc94a":"QB8AR"}],"9eMnE":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildrenCollection = void 0;
var ChildrenCollection = /** @class */ function() {
    function ChildrenCollection(Parent) {
        this.Parent = Parent;
        this.components = [];
        this.found = undefined;
        this.allFound = [];
    }
    ChildrenCollection.prototype.GetByTestAttr = function(id) {
        return this.All.find(function(x) {
            return x.GetAttribute("data-test") == id;
        });
    };
    ChildrenCollection.prototype.SearchByTestAttr = function(id) {
        var _this = this;
        this.found = undefined;
        this.components.forEach(function(c) {
            return _this.FindInComponentByTestAttr(c, id);
        });
        return this.found;
    };
    ChildrenCollection.prototype.SearchByPredicate = function(c, predicate) {
        var _this = this;
        if (predicate(c)) {
            this.found = c;
            return this.found;
        } else c.Children.All.forEach(function(c) {
            if (predicate(c)) {
                _this.found = c;
                return _this.found;
            } else _this.SearchByPredicate(c, predicate);
        });
    };
    ChildrenCollection.prototype.Search = function(predicate) {
        var _this = this;
        this.found = undefined;
        if (predicate(this.Parent)) return this.Parent;
        this.components.forEach(function(c) {
            return _this.SearchByPredicate(c, predicate);
        });
        return this.found;
    };
    ChildrenCollection.prototype.SearchByText = function(text, exact) {
        if (exact === void 0) exact = false;
        if (exact) return this.Search(function(x) {
            return x.GetText() == text;
        });
        else return this.Search(function(x) {
            var _a, _b;
            return (_b = (_a = x.GetText()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(text.toLowerCase());
        });
    };
    Object.defineProperty(ChildrenCollection.prototype, "All", {
        get: function() {
            return this.components;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildrenCollection.prototype, "Count", {
        get: function() {
            return this.components.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChildrenCollection.prototype, "Clone", {
        get: function() {
            return __spreadArray([], this.components, true);
        },
        enumerable: false,
        configurable: true
    });
    ChildrenCollection.prototype.Add = function(component) {
        this.components.push(component);
    };
    ChildrenCollection.prototype.Has = function(component) {
        return this.components.includes(component);
    };
    ChildrenCollection.prototype.Remove = function(component) {
        return this.components.Remove(component);
    };
    ChildrenCollection.prototype.FindInObj = function(component, type) {
        var _this = this;
        if (component instanceof type) {
            this.found = component;
            return this.found;
        } else component.Children.All.forEach(function(c) {
            if (c instanceof type) {
                _this.found = c;
                return _this.found;
            } else _this.FindInObj(c, type);
        });
    };
    ChildrenCollection.prototype.FindInComponentByTestAttr = function(component, id) {
        var _this = this;
        if (component.GetAttribute("data-test") == id) {
            this.found = component;
            return this.found;
        } else component.Children.All.forEach(function(c) {
            if (c.GetAttribute("data-test") == id) {
                _this.found = c;
                return _this.found;
            } else _this.FindInComponentByTestAttr(c, id);
        });
    };
    ChildrenCollection.prototype.FindFirstOfType = function(type) {
        var _this = this;
        this.found = undefined;
        this.components.forEach(function(c) {
            return _this.FindInObj(c, type);
        });
        return this.found;
    };
    ChildrenCollection.prototype.FindAllInObj = function(component, type) {
        var _this = this;
        if (component instanceof type) this.allFound.push(component);
        else component.Children.All.forEach(function(c) {
            if (c instanceof type) _this.allFound.push(c);
            else _this.FindAllInObj(c, type);
        });
    };
    ChildrenCollection.prototype.FindAllOfType = function(type) {
        var _this = this;
        this.allFound = [];
        this.components.forEach(function(c) {
            return _this.FindAllInObj(c, type);
        });
        return this.allFound;
    };
    ChildrenCollection.prototype.toString = function() {
        return this.components.map(function(x) {
            return "".concat(x.ID);
        });
    };
    return ChildrenCollection;
}();
exports.ChildrenCollection = ChildrenCollection;

},{}],"aGJ04":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventsContainer = void 0;
var HandlersCollection_1 = require("6923c83e9e088a6a");
var EventsContainer = /** @class */ function() {
    function EventsContainer(element) {
        this.element = element;
        this.events = {}; // string because TS does not allow GlobalEventHandlersEventMap as type
        this.listeners = {};
    }
    EventsContainer.prototype.Add = function(event, handler) {
        var _this = this;
        if (!handler) return;
        if (Array.isArray(event)) event.forEach(function(ev) {
            return _this.AddOne(ev, handler);
        });
        else this.AddOne(event, handler);
    };
    EventsContainer.prototype.AddOne = function(event, handler) {
        var _this = this;
        if (!this.events[event]) this.events[event] = new HandlersCollection_1.HandlersCollection();
        this.events[event].Add(handler);
        if (this.listeners[event]) return;
        this.listeners[event] = function(e) {
            // e.preventDefault();
            // console.log(e);
            // const copy = {};
            // for (let prop in e) {
            //   if (typeof event[prop] !== 'function') {
            //     copy[prop] = event[prop];
            //   }
            // }
            // // const copy = Object.assign({}, e)
            // console.log(copy);
            _this.Call(event, e);
        // console.log(event ,e.code);
        // return false;
        };
        this.element.addEventListener(event, function(e) {
            return _this.listeners[event](e);
        });
    };
    EventsContainer.prototype.Call = function(event) {
        var _a;
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        (_a = this.events[event]) === null || _a === void 0 || _a.Call.apply(_a, args);
    };
    EventsContainer.prototype.CallAsync = function(event) {
        var _a;
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (_a = this.events[event]) === null || _a === void 0 ? void 0 : _a.CallAsync.apply(_a, args)
                        ];
                    case 1:
                        _b.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    EventsContainer.prototype.Off = function(event) {
        var _a;
        if (!this.events.Keys().includes(event)) return;
        (_a = this.events[event]) === null || _a === void 0 || _a.Reset();
        this.element.addEventListener(event, this.listeners[event]);
    };
    Object.defineProperty(EventsContainer.prototype, "Info", {
        get: function() {
            var _this = this;
            var t = "";
            this.listeners.Keys().forEach(function(k) {
                t += "- " + k + ": " + _this.events[k].Count + " handlers\n";
            });
            return t;
        },
        enumerable: false,
        configurable: true
    });
    return EventsContainer;
}();
exports.EventsContainer = EventsContainer;

},{"6923c83e9e088a6a":"3xTOB"}],"3xTOB":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HandlersCollection = void 0;
var HandlersCollection = /** @class */ function() {
    function HandlersCollection() {
        this.handlers = [];
    }
    HandlersCollection.prototype.Reset = function() {
        this.handlers = [];
    };
    HandlersCollection.prototype.Add = function(handler) {
        if (handler) this.handlers.push(handler);
    };
    Object.defineProperty(HandlersCollection.prototype, "AreAny", {
        get: function() {
            return this.handlers.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HandlersCollection.prototype, "Count", {
        get: function() {
            return this.handlers.length;
        },
        enumerable: false,
        configurable: true
    });
    HandlersCollection.prototype.Call = function() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        this.handlers.forEach(function(h) {
            return h.apply(void 0, params);
        });
    };
    HandlersCollection.prototype.CallAsync = function() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
            var i, handler;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.handlers.length)) return [
                            3 /*break*/ ,
                            4
                        ];
                        handler = this.handlers[i];
                        return [
                            4 /*yield*/ ,
                            handler.apply(void 0, params)
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    HandlersCollection.prototype.CallAndGatherReturnValue = function() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        var returnValues = [];
        this.handlers.forEach(function(h) {
            var result = h.apply(void 0, params);
            returnValues.push(result);
        });
        return returnValues;
    };
    return HandlersCollection;
}();
exports.HandlersCollection = HandlersCollection;

},{}],"a2uO3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dumper = void 0;
var Collection_1 = require("d60df9a82a73c6b");
var Ref_1 = require("2e4935234044a7cd");
var Dumper = /** @class */ function() {
    function Dumper() {}
    Dumper.Dump = function(obj) {
        var out = "";
        // obj.forEach(o=>  DumpObj(obj, o));
        out = Dumper.DumpObj2(obj, out);
        // console.log(out);
        return out;
    };
    Dumper.DumpObj2 = function(obj, out, prefix) {
        // console.log('DumpObj2');
        // if (prefix)
        //     out += prefix
        // out += `\n[[[[[${typeof obj}]]]]]\n`
        switch(typeof obj){
            case "string":
                out += ":string";
                break;
            case "number":
                out += ":number";
                break;
            case "boolean":
                out += ":boolean";
                break;
            case "object":
                if (obj instanceof Ref_1.Ref) out += obj === null || obj === void 0 ? void 0 : obj.ToString();
                else if (obj instanceof Collection_1.Collection) {
                    out += obj === null || obj === void 0 ? void 0 : obj.toString();
                    obj.Items.forEach(function(e, i) {
                        out += "\n[".concat(i, "]\n");
                        var cc = "";
                        cc = Dumper.DumpObj2(e, cc);
                        out += cc;
                    });
                } else Object.keys(obj).forEach(function(k, i) {
                    out += "__ ".concat(k);
                    var v = obj[k];
                    // switch (typeof v)
                    // {
                    //     case "string": out += `:string = "${v}"`; break;
                    //     case "number": out += `:number = ${v}`; break;
                    //     case "boolean": out += `:boolean = ${v ? "true" : "false"}`; break;
                    // default: out += `:unknown-type = ${v}`; break;
                    // }
                    out += ": ".concat(v);
                    out += "\n";
                // out += DumpObj2(obj[k], out)
                });
                break;
            default:
                out += "unknown type: " + typeof obj;
        }
        // console.log('DumpObj2 end');
        return out;
    };
    Dumper.DumpObj = function(obj, out) {
        // console.log(obj);
        // if ((typeof obj === "string") || (typeof obj === "number")
        // || (typeof obj === "boolean"))
        // {
        //     out += `${k}: ${v || "(empty)"}\n`;
        // }
        // else
        // out+=typeof(obj) + ": "
        var _this = this;
        Object.keys(obj).forEach(function(k, i) {
            var v = obj[k];
            // console.log(k, typeof v);
            out += "\uD83D\uDD38 ";
            // console.log(`#${i} k=${k} v=${v}`, 'isarr', Array.isArray(v));
            if (typeof v === "string" || typeof v === "number") out += "".concat(k, ": ").concat(v || "(empty)", "\n");
            else if (v instanceof Ref_1.Ref) {
                // console.log(`REF ${k}: ${v.value}`);
                if (typeof v.value === "boolean") // console.log('V IS BOOL');
                out += "".concat(k, ":bool : ").concat(v.value ? "true" : "false", " ").concat(v.HasChanged ? "*" : "", " [").concat(_this.WatchersInfo(v), "]\n");
                else if (typeof v.value === "string") out += "".concat(k, ':string : "').concat(v.value, '" ').concat(v.HasChanged ? "*" : "", " [").concat(_this.WatchersInfo(v), "]\n");
                else if (typeof v.value === "number") out += "".concat(k, ":number : ").concat(v.value, " ").concat(v.HasChanged ? "*" : "", " [").concat(_this.WatchersInfo(v), "]\n");
                else // console.log('V IS NOT BOOL', typeof(v.value));
                out += "".concat(k, " (").concat(typeof v.value, "): ").concat(v.value || "(empty)", " ").concat(v.HasChanged ? "*" : "", " [").concat(_this.WatchersInfo(v), "]\n");
            } else if (v instanceof Ref_1.Ref) // console.log(`REF ${k}: ${v.value}`);
            out += "".concat(k, ": ").concat(v.value || "(empty)", " ").concat(v.HasChanged ? "*" : "", " [").concat(_this.WatchersInfo(v), "]\n");
            else if (v instanceof Collection_1.Collection) {
                // console.log('ARRAY');
                // out += "" + k + ": " + this.Dump(v)+"\n";
                out += "" + k + ":collection(" + v.Count + ")\n";
                out += "___" + _this.DumpObj(v.Items, out);
            } else if (Array.isArray(v)) {
                // console.log('ARRAY');
                // out += "" + k + ": " + this.Dump(v)+"\n";
                // out += "" + k + ": " + Dump(v);
                out += "" + k + ":array(" + v.length + ")\n";
                v.forEach(function(e, i) {
                    out += "___ [" + i + "]: " + _this.DumpObj(e, out);
                });
            } else if (Object.keys(v).length > 0) ;
            else // console.log('?????', k);  
            out += "" + k + ":" + typeof v + "\n";
        });
        out += "\n";
        // console.log(out);
        return out;
    };
    Dumper.WatchersInfo = function(v) {
        return v.watchers.map(function(c) {
            return c.Id;
        }).join(", ") || "no watchers";
    };
    return Dumper;
}();
exports.Dumper = Dumper;

},{"d60df9a82a73c6b":"8bvD7","2e4935234044a7cd":"9pTSI"}],"hoBVU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sorter = void 0;
var Ref_1 = require("f1d311d1b6f9b1a");
var Sorter = /** @class */ function() {
    function Sorter(collection) {
        this.collection = collection;
        this.sorts = [];
    }
    Object.defineProperty(Sorter.prototype, "Selected", {
        get: function() {
            return this.selected;
        },
        enumerable: false,
        configurable: true
    });
    Sorter.prototype.Add = function(label, fn) {
        var _this = this;
        this.sorts.push({
            label: label,
            fn: fn
        });
        if (!this.selected) {
            this.selected = new Ref_1.Ref(label);
            this.selected.value = label;
            this.Selected.OnChange(function(_) {
                _this.collection.Call(function(items) {
                    return _this.SortBySelectedFunction(items);
                });
            });
        }
        return this;
    };
    Sorter.prototype.Reset = function() {
        this.selected.value = this.sorts[0].label;
        return this;
    };
    Object.defineProperty(Sorter.prototype, "Labels", {
        get: function() {
            return this.sorts.map(function(x) {
                return x.label;
            });
        },
        enumerable: false,
        configurable: true
    });
    Sorter.prototype.SortBySelectedFunction = function(items) {
        var _this = this;
        var _a;
        var fn = (_a = this.sorts.find(function(x) {
            return x.label === _this.selected.value;
        })) === null || _a === void 0 ? void 0 : _a.fn;
        return items.sort(fn);
    };
    return Sorter;
}();
exports.Sorter = Sorter;

},{"f1d311d1b6f9b1a":"9pTSI"}],"gIpQQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefReflector = void 0;
var Ref_1 = require("d93823a8e2ccac43");
var RefReflector = /** @class */ function() {
    function RefReflector() {}
    RefReflector.FindAllRefs = function(record) {
        this.refs = [];
        this.FindAllRefsInObject(record);
        return this.refs;
    };
    RefReflector.FindAllRefsInObject = function(obj) {
        var _this = this;
        obj.Keys().forEach(function(k) {
            var v = obj[k];
            if (v instanceof Ref_1.Ref) _this.refs.push(v);
            else if (v instanceof Object) _this.FindAllRefsInObject(v);
        });
    };
    RefReflector.refs = [];
    return RefReflector;
}();
exports.RefReflector = RefReflector;

},{"d93823a8e2ccac43":"9pTSI"}],"cVjir":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefSerializer = void 0;
var RefDeflattener_1 = require("e3803a374206e9aa");
var RefFlattener_1 = require("f904298e1406599c");
var RefSerializer = /** @class */ function() {
    function RefSerializer() {}
    RefSerializer.Serialize = function(source) {
        var flat = RefFlattener_1.RefFlattener.Flat(source);
        return JSON.stringify(flat);
    };
    RefSerializer.Flatenize = function(source) {
        var flat = RefFlattener_1.RefFlattener.Flat(source);
        return flat;
    };
    RefSerializer.Deserialize = function(source, template) {
        var sourceAsObject = JSON.parse(source);
        var target = RefDeflattener_1.RefDeflattener.Deflat(sourceAsObject, template);
        return target;
    };
    RefSerializer.Deflatenize = function(source, template) {
        var target = RefDeflattener_1.RefDeflattener.Deflat(source, template);
        return target;
    };
    return RefSerializer;
}();
exports.RefSerializer = RefSerializer;

},{"e3803a374206e9aa":"eHlYU","f904298e1406599c":"4xOtV"}],"eHlYU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefDeflattener = void 0;
var Ref_1 = require("97c865f1c1220d36");
var Collection_1 = require("8564888fc7798e9f");
var CollectionTemplate_1 = require("6de08e597281a212");
var ArrayTemplate_1 = require("7dfedd4989bd0619");
var RefDeflattener = /** @class */ function() {
    function RefDeflattener() {}
    RefDeflattener.Deflat = function(source, target, options) {
        if (options === void 0) options = {
            throw: true
        };
        if (target instanceof Ref_1.Ref) {
            if (target.value instanceof Date) target.value = new Date(source);
            else target.value = source;
        } else if (target instanceof Date) target = new Date(source);
        else if (target instanceof ArrayTemplate_1.ArrayTemplate) target = source.map(function(x) {
            return RefDeflattener.Deflat(x, target.CreateFn(), options);
        });
        else if (target instanceof Array) {
            if (target.length != 1) {
                if (options === null || options === void 0 ? void 0 : options.throw) throw new Error("You need to define array type by putting one item into array template (otherwise it won't know to what type deserialize). You can disable this message by setting third parameter of this method to { options.throw: false }");
            }
            if (target[0] instanceof Date) target = source.map(function(x) {
                return new Date(x);
            });
            else if (target[0] instanceof Ref_1.Ref) {
                if (target[0].value instanceof Date) target = source.map(function(x) {
                    return new Ref_1.Ref(x);
                });
                else if (typeof target[0].value == "string") target = source.map(function(x) {
                    return new Ref_1.Ref(x);
                });
                else if (typeof target[0].value == "number") target = source.map(function(x) {
                    return new Ref_1.Ref(x);
                });
                else if (typeof target[0].value == "boolean") target = source.map(function(x) {
                    return new Ref_1.Ref(x);
                });
            } else if (target[0] instanceof Object) target = source.map(function(x) {
                return RefDeflattener.Deflat(x, target[0], options);
            });
            else target = source;
        } else if (target instanceof CollectionTemplate_1.CollectionTemplate) target = new Collection_1.Collection(source.map(function(x) {
            return RefDeflattener.Deflat(x, target.CreateFn(), options);
        }));
        else if (target instanceof Collection_1.Collection) {
            if (options === null || options === void 0 ? void 0 : options.throw) throw new Error("PLEASE USE CollectionTemplate INSTEAD! This approach will work only for Collection<Ref> or Collection<primitive>, not for Collection<Object>!");
            if (target.Items.length != 1) {
                if (options === null || options === void 0 ? void 0 : options.throw) throw new Error("You need to define collection type by putting one item into collection (otherwise it won't know to what type deserialize). You can disable this message by setting third parameter of this method to { options.throw: false }");
            }
            if (target.Items[0] instanceof Ref_1.Ref) {
                if (target.Items[0].value instanceof Date) {
                    var items = source.map(function(x) {
                        return new Ref_1.Ref(x);
                    });
                    target.Load.apply(target, items);
                } else if (typeof target.Items[0].value == "string") {
                    var items = source.map(function(x) {
                        return new Ref_1.Ref(x);
                    });
                    target.Load.apply(target, items);
                } else if (typeof target.Items[0].value == "number") {
                    var items = source.map(function(x) {
                        return new Ref_1.Ref(x);
                    });
                    target.Load.apply(target, items);
                } else if (typeof target.Items[0].value == "boolean") {
                    var items = source.map(function(x) {
                        return new Ref_1.Ref(x);
                    });
                    target.Load.apply(target, items);
                }
            } else if (target.Items[0] instanceof Object) {
                if (options === null || options === void 0 ? void 0 : options.throw) throw new Error("Sorry, but deserializing to Collection<Object> is not possible now. This is due to limitation of Javascript. Target like new Collection([new Foo()]) will always reference to the same Foo for every item of collection. You don't wanna this. You can disable this message by setting third parameter of this method to { options.throw: false }");
            } else {
                var items = source.map(function(x) {
                    if (x instanceof Ref_1.Ref) return x.value;
                    else return x;
                });
                target.Load.apply(target, items);
            }
        } else if (target instanceof Object) Object.keys(target).forEach(function(k) {
            if (target[k] instanceof Date) target[k] = new Date(source[k]);
            else if (target[k] instanceof Ref_1.Ref) {
                if (target[k].value instanceof Date) target[k].value = new Date(source[k]);
                else target[k].value = source[k];
            } else if (target[k] instanceof Object) target[k] = RefDeflattener.Deflat(source[k], target[k], options);
            else target[k] = source[k];
        });
        else target = source;
        return target;
    };
    return RefDeflattener;
}();
exports.RefDeflattener = RefDeflattener;

},{"97c865f1c1220d36":"9pTSI","8564888fc7798e9f":"8bvD7","6de08e597281a212":"aQFVH","7dfedd4989bd0619":"3WqoJ"}],"aQFVH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectionTemplate = void 0;
var CollectionTemplate = /** @class */ function() {
    function CollectionTemplate(CreateFn) {
        this.CreateFn = CreateFn;
    }
    return CollectionTemplate;
}();
exports.CollectionTemplate = CollectionTemplate;

},{}],"3WqoJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrayTemplate = void 0;
var ArrayTemplate = /** @class */ function() {
    function ArrayTemplate(CreateFn) {
        this.CreateFn = CreateFn;
    }
    return ArrayTemplate;
}();
exports.ArrayTemplate = ArrayTemplate;

},{}],"4xOtV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefFlattener = void 0;
var Collection_1 = require("2385761d95d7b2b3");
var Ref_1 = require("a41c08c8cf9798a9");
var RefObject_1 = require("8a59d67f3b7a227");
var RefFlattener = /** @class */ function() {
    function RefFlattener() {}
    RefFlattener.Flat = function(obj) {
        if (obj instanceof Collection_1.Collection) return this.FlatCollection(obj);
        else if (obj instanceof Array) return this.FlatArray(obj);
        else return this.FlatObject(obj);
    };
    RefFlattener.FlatArray = function(array) {
        var _this = this;
        var flat = [];
        if (array instanceof Array) flat = array.map(function(i) {
            return _this.FlatObject(i);
        });
        return flat;
    };
    RefFlattener.FlatCollection = function(collection) {
        var _this = this;
        var flat = [];
        if (collection instanceof Collection_1.Collection) flat = collection.Items.map(function(i) {
            return _this.FlatObject(i);
        });
        return flat;
    };
    RefFlattener.IsDateValid = function(date) {
        return !isNaN(date.getTime());
    };
    RefFlattener.FlatObject = function(obj) {
        var _this = this;
        if (obj instanceof Collection_1.Collection) return this.FlatCollection(obj);
        else if (obj instanceof Array) return this.FlatArray(obj);
        else if (obj instanceof Object) {
            var flat_1 = {};
            obj.Keys().forEach(function(k) {
                var v = obj[k];
                if (v.value instanceof Date) {
                    if (!_this.IsDateValid(v.value)) throw new Error('Date "'.concat(v.value, '" is invalid'));
                    flat_1[k] = v.value.toISOString();
                } else if (v instanceof Date) {
                    if (!_this.IsDateValid(v)) throw new Error('Date "'.concat(v, '" is invalid'));
                    flat_1[k] = v.toISOString();
                } else if (v instanceof Ref_1.Ref) flat_1[k] = v.value;
                else if (v instanceof Collection_1.Collection) flat_1[k] = v.Items.map(function(x) {
                    return _this.FlatObject(x);
                });
                else if (v instanceof RefObject_1.RefObject) flat_1[k] = v.object;
                else if (v instanceof Object) flat_1[k] = _this.FlatObject(v);
                else flat_1[k] = v;
            });
            return flat_1;
        } else return obj;
    };
    return RefFlattener;
}();
exports.RefFlattener = RefFlattener;

},{"2385761d95d7b2b3":"8bvD7","a41c08c8cf9798a9":"9pTSI","8a59d67f3b7a227":"5B4F5"}],"1CBj4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filters = void 0;
var Filters = /** @class */ function() {
    function Filters() {}
    Filters.TextContains = function(filter, field) {
        if (Array.isArray(field)) return filter.value ? field.some(function(f) {
            return f.toLowerCase().includes(filter.value.toLowerCase());
        }) : true;
        return filter.value ? field.toLowerCase().includes(filter.value.toLowerCase()) : true;
    };
    return Filters;
}();
exports.Filters = Filters;

},{}],"3fkHK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegexExtractor = void 0;
var RegexExtractor = /** @class */ function() {
    function RegexExtractor(regex) {
        this.regex = regex;
    }
    RegexExtractor.prototype.Extract = function(str) {
        try {
            var m = this.regex.exec(str);
            return (m === null || m === void 0 ? void 0 : m[1]) || "";
        } catch (error) {
            throw new Error(error);
        }
    };
    RegexExtractor.prototype.ExtractAll = function(str) {
        var m;
        var matches = [];
        while((m = this.regex.exec(str)) !== null){
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === this.regex.lastIndex) this.regex.lastIndex++;
            // The result can be accessed through the `m`-variable.
            m.forEach(function(match, groupIndex) {
                if (groupIndex === 1) matches.push(match);
            });
        }
        return matches;
    };
    return RegexExtractor;
}();
exports.RegexExtractor = RegexExtractor;

},{}],"10sQt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PatternExtractorV2 = exports.PatternExtractor = void 0;
var PatternExtractor = /** @class */ function() {
    function PatternExtractor(pattern) {
        this.pattern = pattern;
    }
    PatternExtractor.prototype.Extract = function(url) {
        var urlParts = url.split("/");
        var patternParts = this.pattern.split("/");
        var params = {};
        if (urlParts.length !== patternParts.length) return null;
        for(var i = 0; i < urlParts.length; i++){
            if (patternParts[i].startsWith(":")) {
                var paramName = patternParts[i].substring(1);
                params[paramName] = urlParts[i];
            } else if (urlParts[i] !== patternParts[i]) return null;
        }
        return params;
    };
    return PatternExtractor;
}();
exports.PatternExtractor = PatternExtractor;
/*
    TO JEST DO DUPY BO ZAWSZE COŚ ZAJDZIE WIĘC NIE NADAJE SIE DO CotentSwitchera!!!!!!!!!
*/ var PatternExtractorV2 = /** @class */ function() {
    function PatternExtractorV2(pattern) {
        this.pattern = pattern;
    }
    PatternExtractorV2.prototype.Extract = function(input) {
        var patternSegments = this.pattern.split("/");
        var inputSegments = input.split("/");
        var params = {};
        for(var i = 0; i < patternSegments.length; i++){
            var patternSegment = patternSegments[i];
            var inputSegment = inputSegments[i];
            if (patternSegment.startsWith(":?")) {
                var paramName = patternSegment.substring(2);
                if (paramName != "") params[paramName] = inputSegment || null;
            } else if (patternSegment.startsWith(":")) {
                var paramName = patternSegment.substring(1);
                if (paramName != "") params[paramName] = inputSegment || null;
            }
        }
        return params;
    };
    return PatternExtractorV2;
}();
exports.PatternExtractorV2 = PatternExtractorV2;

},{}],"kiRJV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validator = exports.ValidationResult = void 0;
var RV_1 = require("c8676ef068806110");
var Ref_1 = require("ff6eca2e00f4b4a0");
var RefBool_1 = require("ba29fc83a7932651");
var ValidationResult = /** @class */ function() {
    function ValidationResult(IsValid, IsNotValid, FirstError) {
        if (IsValid === void 0) IsValid = new RefBool_1.RefBool();
        if (IsNotValid === void 0) IsNotValid = new RefBool_1.RefBool(true);
        if (FirstError === void 0) FirstError = new Ref_1.Ref("");
        this.IsValid = IsValid;
        this.IsNotValid = IsNotValid;
        this.FirstError = FirstError;
    }
    return ValidationResult;
}();
exports.ValidationResult = ValidationResult;
var ValidationRule = /** @class */ function() {
    function ValidationRule(predicate, message) {
        this.predicate = predicate;
        this.message = message;
    }
    return ValidationRule;
}();
var Validator = /** @class */ function() {
    function Validator(valueToValidate, isEnabled) {
        var _this = this;
        if (isEnabled === void 0) isEnabled = true;
        this.valueToValidate = valueToValidate;
        this.isEnabled = isEnabled;
        this.isValid = new RefBool_1.RefBool();
        this.isNotValid = new Ref_1.Ref(true);
        this.firstErrorMessage = new Ref_1.Ref("");
        this.rules = [];
        this.wasInitiallyValidated = false;
        this.valueToValidate.OnChange(function(v) {
            if (_this.isEnabled) _this.Validate();
        });
    }
    Validator.prototype.Enable = function(enable) {
        var _this = this;
        if (enable === void 0) enable = true;
        RV_1.RV.Use(enable, function(v) {
            _this.isEnabled = v;
            if (_this.isEnabled) _this.Validate();
        });
        return this;
    };
    Validator.prototype.Enabled = function() {
        this.isEnabled = true;
        this.Validate();
        return this;
    };
    Validator.prototype.Disabled = function() {
        this.isEnabled = false;
        return this;
    };
    Validator.prototype.Validate = function() {
        for(var _i = 0, _a = this.rules; _i < _a.length; _i++){
            var rule = _a[_i];
            var isValid = rule.predicate(this.valueToValidate.value);
            if (isValid == false) {
                this.firstErrorMessage.value = rule.message;
                this.isValid.value = false;
                this.isNotValid.value = true;
                return this;
            }
        }
        this.firstErrorMessage.value = "";
        this.isValid.value = true;
        this.isNotValid.value = false;
        return this;
    };
    Validator.prototype.MustBeNotEmpty = function(message) {
        if (message === void 0) message = "Value can not be empty";
        this.AddRule(function(v) {
            return !!v;
        }, message);
        return this;
    };
    Validator.prototype.MustBeLowerThan = function(value, message) {
        if (message === void 0) message = "Value must be lower than " + value;
        this.AddRule(function(v) {
            return +v < value;
        }, message);
        return this;
    };
    Validator.prototype.MustBeLowerOrEqualThan = function(value, message) {
        if (message === void 0) message = "Value must be lower or equal to " + value;
        this.AddRule(function(v) {
            return +v <= value;
        }, message);
        return this;
    };
    Validator.prototype.MustBeGraterThan = function(value, message) {
        if (message === void 0) message = "Value must be greater than " + value;
        this.AddRule(function(v) {
            return +v > value;
        }, message);
        return this;
    };
    Validator.prototype.MustBeGraterOrEqualThan = function(value, message) {
        if (message === void 0) message = "Value must be greater or equal to " + value;
        this.AddRule(function(v) {
            return +v >= value;
        }, message);
        return this;
    };
    Validator.prototype.MustBeOneOf = function(options, message) {
        if (message === void 0) message = "Must be ".concat(options.join(" or "));
        this.AddRule(function(v) {
            return options.includes(v);
        }, message);
        return this;
    };
    Validator.prototype.AddRule = function(predicate, messageIfNotValid) {
        this.rules.push(new ValidationRule(predicate, messageIfNotValid));
        return this;
    };
    Object.defineProperty(Validator.prototype, "IsValid", {
        get: function() {
            return this.Result.IsValid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "IsNotValid", {
        get: function() {
            return this.Result.IsNotValid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "FirstError", {
        get: function() {
            return this.Result.FirstError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "Result", {
        get: function() {
            if (this.wasInitiallyValidated === false && this.isEnabled) {
                this.Validate();
                this.wasInitiallyValidated = true;
            }
            return new ValidationResult(this.isValid, this.isNotValid, this.firstErrorMessage);
        },
        enumerable: false,
        configurable: true
    });
    return Validator;
}();
exports.Validator = Validator;

},{"c8676ef068806110":"QB8AR","ff6eca2e00f4b4a0":"9pTSI","ba29fc83a7932651":"hCxpL"}],"lviHf":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Root = void 0;
var _1 = require("3bf024e3609d2487");
var Div_1 = require("8a9593e3dc183e7");
var Root = /** @class */ function(_super) {
    __extends(Root, _super);
    function Root(hook, divClass) {
        if (divClass === void 0) divClass = "";
        var _a;
        var _this = _super.call(this, divClass) || this;
        (_a = (0, _1.$)(hook !== null && hook !== void 0 ? hook : Root.Hook)) === null || _a === void 0 || _a.Append(_this.Element);
        return _this;
    }
    Root.Hook = "body";
    return Root;
}(Div_1.Div);
exports.Root = Root;

},{"3bf024e3609d2487":"i3MOE","8a9593e3dc183e7":"6b4fV"}],"6b4fV":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Div = void 0;
var ComponentBase_1 = require("2a8fbc45b21a805a");
var Div = /** @class */ function(_super) {
    __extends(Div, _super);
    function Div(classes) {
        var _this = _super.call(this, "div") || this;
        if (classes) _this.Class(classes);
        return _this;
    }
    Div.Name = "Div";
    return Div;
}(ComponentBase_1.ComponentBase);
exports.Div = Div;

},{"2a8fbc45b21a805a":"8SnDZ"}],"bbB3D":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Span = void 0;
var ComponentBase_1 = require("5036082d08dcd9cc");
var Span = /** @class */ function(_super) {
    __extends(Span, _super);
    function Span(text) {
        var _this = _super.call(this, "span") || this;
        if (text) _this.Text(text);
        return _this;
    }
    Span.Name = "Span";
    return Span;
}(ComponentBase_1.ComponentBase);
exports.Span = Span;

},{"5036082d08dcd9cc":"8SnDZ"}],"cNVzS":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pre = void 0;
var ComponentBase_1 = require("238f0827bab371e");
var Pre = /** @class */ function(_super) {
    __extends(Pre, _super);
    function Pre() {
        return _super.call(this, "pre") || this;
    }
    return Pre;
}(ComponentBase_1.ComponentBase);
exports.Pre = Pre;

},{"238f0827bab371e":"8SnDZ"}],"4a1ud":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoWidthTwoColumns = void 0;
var Div_1 = require("1538512f8c05276d");
var AutoWidthTwoColumns = /** @class */ function(_super) {
    __extends(AutoWidthTwoColumns, _super);
    function AutoWidthTwoColumns() {
        var _this = _super.call(this, "tf-stretch") || this;
        _this.LeftColumn = new Div_1.Div("tf-min-width-column");
        _this.RightColumn = new Div_1.Div("tf-wide-column");
        _this.Append(_this.LeftColumn);
        _this.Append(_this.RightColumn);
        return _this;
    }
    AutoWidthTwoColumns.prototype.Show = function() {
        _super.prototype.Show.call(this, "inline-flex");
        return this;
    };
    return AutoWidthTwoColumns;
}(Div_1.Div);
exports.AutoWidthTwoColumns = AutoWidthTwoColumns;

},{"1538512f8c05276d":"6b4fV"}],"6YrkR":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TwinColumns = void 0;
var Div_1 = require("ed659a10943b21e0");
var TwinColumns = /** @class */ function(_super) {
    __extends(TwinColumns, _super);
    function TwinColumns() {
        var _this = _super.call(this) || this;
        _this.LeftColumn = new Div_1.Div().HalfWidth().InlineBlock().Style("vertical-align: top");
        _this.RightColumn = new Div_1.Div().HalfWidth().InlineBlock().Style("vertical-align: top");
        _this.Append(_this.LeftColumn);
        _this.Append(_this.RightColumn);
        return _this;
    }
    TwinColumns.prototype.Show = function() {
        _super.prototype.Show.call(this);
        return this;
    };
    return TwinColumns;
}(Div_1.Div);
exports.TwinColumns = TwinColumns;

},{"ed659a10943b21e0":"6b4fV"}],"98XcF":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TwoFloatingColumns = void 0;
var Div_1 = require("4f9dc3f6c99badf2");
var TwoFloatingColumns = /** @class */ function(_super) {
    __extends(TwoFloatingColumns, _super);
    function TwoFloatingColumns() {
        var _this = _super.call(this) || this;
        _this.LeftColumn = new Div_1.Div() //.Style("border: 3px dotted green")
        .FloatLeft();
        _this.RightColumn = new Div_1.Div() //.Style("border: 3px dotted blue")
        .FloatLeft();
        _this.ClearBoth();
        _this.Append(_this.LeftColumn);
        _this.Append(_this.RightColumn);
        return _this;
    }
    TwoFloatingColumns.prototype.Show = function() {
        _super.prototype.Show.call(this);
        return this;
    };
    return TwoFloatingColumns;
}(Div_1.Div);
exports.TwoFloatingColumns = TwoFloatingColumns;

},{"4f9dc3f6c99badf2":"6b4fV"}],"5iEcY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = void 0;
var ComponentBase_1 = require("2a030d61f0093630");
var RV_1 = require("4b37e6b6cb1db0b");
var Ref_1 = require("fa29440532c9d2ee");
var Button = /** @class */ function(_super) {
    __extends(Button, _super);
    function Button(label, onClick) {
        if (label === void 0) label = "Button";
        var _this = _super.call(this, "button") || this;
        _this.label = label;
        _this.InitialLabel = "";
        if (label instanceof Ref_1.Ref) _this.InitialLabel = label.value;
        else _this.InitialLabel = label;
        _this.Class(Button.DefaultCssClasses);
        if (onClick) _this.OnClick(function() {
            return onClick(_this);
        });
        _this.Label(_this.label);
        return _this;
    }
    Button.prototype.Label = function(label, transform) {
        var _this = this;
        RV_1.RV.Use(label, function(v) {
            return _this.element.innerHTML = transform ? transform(v) : v.toString();
        });
        return this;
    };
    Button.prototype.RestoreInitialLabel = function() {
        return this.Label(this.InitialLabel);
    };
    Button.Name = "Button";
    Button.DefaultCssClasses = "";
    return Button;
}(ComponentBase_1.ComponentBase);
exports.Button = Button;

},{"2a030d61f0093630":"8SnDZ","4b37e6b6cb1db0b":"QB8AR","fa29440532c9d2ee":"9pTSI"}],"bDa7U":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Link = void 0;
var __1 = require("72e438403f3d7f7e");
var RV_1 = require("391e20fbeeb88b56");
var Link = /** @class */ function(_super) {
    __extends(Link, _super);
    function Link(label, url, openInNewCard) {
        if (openInNewCard === void 0) openInNewCard = false;
        var _this = _super.call(this, "a") || this;
        RV_1.RV.Use(label, function(v) {
            return _this.Label(v);
        });
        RV_1.RV.Use(url, function(v) {
            return _this.Url(v);
        });
        if (url === undefined && typeof label === "string" && label.startsWith("http")) _this.Url(label);
        if (openInNewCard) _this.OpenInNewCard();
        return _this;
    }
    Link.prototype.Label = function(label) {
        this.Text(label);
        return this;
    };
    Link.prototype.Url = function(url) {
        this.Attribute("href", url);
        return this;
    };
    Link.prototype.OpenInNewCard = function() {
        this.Attribute("target", "_blank");
        return this;
    };
    Link.prototype.DoNotOpenInNewCard = function() {
        this.RemoveAttribute("target");
        return this;
    };
    Link.prototype.NoDecorationOnHover = function() {
        this.Style("text-decoration: none");
        return this;
    };
    Link.Name = "Link";
    return Link;
}(__1.ComponentBase);
exports.Link = Link;

},{"72e438403f3d7f7e":"2JFzm","391e20fbeeb88b56":"QB8AR"}],"5MFvM":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Image = void 0;
var ComponentBase_1 = require("ffe74c93b9141212");
var RV_1 = require("adb3870c1f8a4925");
var Image = /** @class */ function(_super) {
    __extends(Image, _super);
    function Image(src, alt) {
        var _this = _super.call(this, "img") || this;
        RV_1.RV.Use(src, function(v) {
            return _this.Src(v);
        });
        RV_1.RV.Use(alt, function(v) {
            return _this.Alt(v);
        });
        return _this;
    }
    Image.prototype.Src = function(src) {
        this.Attribute("src", src);
        return this;
    };
    Image.prototype.AsBase64 = function(base64) {
        this.Attribute("src", "data:image/png;base64," + base64);
        return this;
    };
    Image.prototype.Alt = function(description) {
        if (description) this.Attribute("alt", description);
        return this;
    };
    Image.Name = "Image";
    return Image;
}(ComponentBase_1.ComponentBase);
exports.Image = Image;

},{"ffe74c93b9141212":"8SnDZ","adb3870c1f8a4925":"QB8AR"}],"iSAgd":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClickableImage = void 0;
var ComponentBase_1 = require("a9416ba4354d27e6");
var Image_1 = require("9159efa01da181d4");
var ClickableImage = /** @class */ function(_super) {
    __extends(ClickableImage, _super);
    function ClickableImage(src, url, alt) {
        var _this = _super.call(this, "a") || this;
        _this.CursorPointer();
        _this.image = new Image_1.Image(src);
        _this.Append(_this.image);
        if (url) _this.Url(url);
        if (alt) _this.Alt(alt);
        return _this;
    }
    ClickableImage.prototype.Src = function(src) {
        return this.Attribute("src", src);
    };
    ClickableImage.prototype.Url = function(url) {
        return this.Attribute("href", url);
    };
    ClickableImage.prototype.Alt = function(description) {
        return this.Attribute("alt", description);
    };
    ClickableImage.Name = "ClickableImage";
    return ClickableImage;
}(ComponentBase_1.ComponentBase);
exports.ClickableImage = ClickableImage;

},{"a9416ba4354d27e6":"8SnDZ","9159efa01da181d4":"5MFvM"}],"is0UV":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewLine = void 0;
var ComponentBase_1 = require("34eb2816786bee93");
var NewLine = /** @class */ function(_super) {
    __extends(NewLine, _super);
    function NewLine() {
        return _super.call(this, "br") || this;
    }
    return NewLine;
}(ComponentBase_1.ComponentBase);
exports.NewLine = NewLine;

},{"34eb2816786bee93":"8SnDZ"}],"302Ur":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Line = void 0;
var ComponentBase_1 = require("f0b1d641d49336ed");
var Line = /** @class */ function(_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super.call(this, "hr") || this;
        _this.ClearBoth();
        return _this;
    }
    return Line;
}(ComponentBase_1.ComponentBase);
exports.Line = Line;

},{"f0b1d641d49336ed":"8SnDZ"}],"8hD0K":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnorderedList = void 0;
var __1 = require("d4a2e50a89259d6e");
var ListItem_1 = require("4f4c4c3335035c0c");
var UnorderedList = /** @class */ function(_super) {
    __extends(UnorderedList, _super);
    function UnorderedList(initialItems) {
        var _this = _super.call(this, "ul") || this;
        initialItems === null || initialItems === void 0 || initialItems.forEach(function(x) {
            return _this.Add(x);
        });
        return _this;
    }
    UnorderedList.prototype.Add = function(item) {
        this.Append(new ListItem_1.ListItem(item));
        return this;
    };
    UnorderedList.prototype.Load = function(items) {
        var _this = this;
        this.Clear();
        items.forEach(function(i) {
            return _this.Add(i);
        });
        return this;
    };
    UnorderedList.Name = "UnorderedList";
    return UnorderedList;
}(__1.ComponentBase);
exports.UnorderedList = UnorderedList;

},{"d4a2e50a89259d6e":"2JFzm","4f4c4c3335035c0c":"a8rOS"}],"a8rOS":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItem = void 0;
var ComponentBase_1 = require("e1caf5dd60b76218");
var ListItem = /** @class */ function(_super) {
    __extends(ListItem, _super);
    function ListItem(item) {
        var _this = _super.call(this, "li") || this;
        if (typeof item == "string") _this.Text(item);
        else _this.Append(item);
        return _this;
    }
    return ListItem;
}(ComponentBase_1.ComponentBase);
exports.ListItem = ListItem;

},{"e1caf5dd60b76218":"8SnDZ"}],"7xglY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextLabel = void 0;
var ComponentBase_1 = require("ed157576a22a33d6");
var TextLabel = /** @class */ function(_super) {
    __extends(TextLabel, _super);
    function TextLabel(text) {
        var _this = _super.call(this, "span") || this;
        _this.Text(text);
        return _this;
    }
    TextLabel.Name = "TextLabel";
    return TextLabel;
}(ComponentBase_1.ComponentBase);
exports.TextLabel = TextLabel;

},{"ed157576a22a33d6":"8SnDZ"}],"3zAmj":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Label = void 0;
var RefComponentBase_1 = require("43826781f1a1848b");
var Ref_1 = require("96222ad6a9e55e35");
var Label = /** @class */ function(_super) {
    __extends(Label, _super);
    function Label(ref, transform) {
        if (ref === void 0) ref = new Ref_1.Ref("");
        var _this = _super.call(this, "span", ref) || this;
        _this.transform = transform;
        _this.defaultText = "";
        _this.Refresh();
        return _this;
    }
    Label.prototype.DefaultText = function(text) {
        this.defaultText = text;
        this.SetText();
        return this;
    };
    Label.prototype.SetText = function() {
        var _a, _b;
        var text = (_b = (_a = this.transform) === null || _a === void 0 ? void 0 : _a.call(this, this.ref.value)) !== null && _b !== void 0 ? _b : this.ref.value.toString();
        if (this.defaultText != "" && text === "") text = this.defaultText;
        this.Text(text);
    };
    Label.prototype.Refresh = function() {
        this.SetText();
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    Label.Name = "Label";
    return Label;
}(RefComponentBase_1.RefComponentBase);
exports.Label = Label;

},{"43826781f1a1848b":"anBYP","96222ad6a9e55e35":"9pTSI"}],"oMJQ2":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NonRefEditableLabel = exports.EditableLabel = void 0;
var ComponentBase_1 = require("4d994bf75bc0f0bc");
var Label_1 = require("7db8374ba0c7d1b");
var TextInput_1 = require("b85d02a317dcb2a0");
var TextLabel_1 = require("aaf80427d39a904f");
var EditableLabel = /** @class */ function(_super) {
    __extends(EditableLabel, _super);
    function EditableLabel(ref) {
        var _this = _super.call(this, "div") || this;
        _this.ref = ref;
        _this.valueBeforeEdit = "";
        _this.label = new Label_1.Label(ref).CursorPointer().Show().OnClick(function() {
            _this.EditMode();
        });
        _this.textInput = new TextInput_1.TextInput(ref);
        _this.textInput.OnBlur(function() {
            return _this.EndOfEdit();
        }).OnEnterKeyPressed(function() {
            return _this.EndOfEdit();
        }).Hide();
        _this.Append(_this.label);
        _this.Append(_this.textInput);
        return _this;
    }
    EditableLabel.prototype.EditMode = function() {
        this.valueBeforeEdit = this.ref.value;
        var labelWidth = getComputedStyle(this.label.Element).width;
        var w = +labelWidth.replace("px", "");
        if (w < 100) w += 32;
        this.label.Hide();
        this.textInput.Show().Width(w).Padding(2, 6).Focus();
    };
    Object.defineProperty(EditableLabel.prototype, "IsEditMode", {
        get: function() {
            return this.textInput.IsVisible();
        },
        enumerable: false,
        configurable: true
    });
    EditableLabel.prototype.ToggleEditMode = function() {
        if (this.IsEditMode) this.CloseEditMode();
        else this.EditMode();
        return this;
    };
    EditableLabel.prototype.OpenEditMode = function() {
        this.EditMode();
        return this;
    };
    EditableLabel.prototype.CloseEditMode = function() {
        this.EndOfEdit();
        return this;
    };
    EditableLabel.prototype.LabelConfig = function(config) {
        config(this.label);
        return this;
    };
    EditableLabel.prototype.TextInputConfig = function(config) {
        config(this.textInput);
        return this;
    };
    EditableLabel.prototype.OnEditEnd = function(callback) {
        this.editEnd = callback;
        return this;
    };
    EditableLabel.prototype.EndOfEdit = function() {
        var _a;
        if (!this.textInput.IsVisible()) return; // To prevent double call
        this.textInput.Hide();
        this.label.Show();
        (_a = this.editEnd) === null || _a === void 0 || _a.call(this, this.valueBeforeEdit, this.ref.value);
    };
    EditableLabel.prototype.DefaultText = function(text) {
        this.label.DefaultText(text);
        return this;
    };
    EditableLabel.prototype.Placeholder = function(placeholder) {
        this.textInput.Placeholder(placeholder);
        return this;
    };
    EditableLabel.prototype.Style = function(prop, val) {
        this.label.Style(prop, val);
        this.textInput.Style(prop, val);
        return this;
    };
    EditableLabel.Name = "EditableLabel";
    return EditableLabel;
}(ComponentBase_1.ComponentBase);
exports.EditableLabel = EditableLabel;
var NonRefEditableLabel = /** @class */ function(_super) {
    __extends(NonRefEditableLabel, _super);
    function NonRefEditableLabel(value, onChange) {
        var _this = _super.call(this, "div") || this;
        _this.value = "";
        _this.label = new TextLabel_1.TextLabel(value);
        _this.label.Show().OnClick(function() {
            var labelWidth = getComputedStyle(_this.label.Element).width;
            var w = +labelWidth.replace("px", "");
            if (w < 100) w += 20;
            _this.label.Hide();
            _this.textInput.Show().Width(w).Padding(2, 6).Focus();
        });
        _this.textInput = new TextInput_1.NonRefTextInput(value, function(v) {
            _this.value = v;
            onChange(v);
        });
        _this.textInput.OnBlur(function() {
            _this.textInput.Hide();
            _this.label.Show();
            _this.label.Text(_this.value);
        }).OnEnterKeyPressed(function() {
            _this.textInput.Hide();
            _this.label.Show();
            _this.label.Text(_this.value);
        }).Hide();
        _this.Append(_this.label);
        _this.Append(_this.textInput);
        return _this;
    }
    NonRefEditableLabel.prototype.Placeholder = function(placeholder) {
        this.textInput.Placeholder(placeholder);
        return this;
    };
    NonRefEditableLabel.prototype.Style = function(prop, val) {
        this.label.Style(prop, val);
        this.textInput.Style(prop, val);
        return this;
    };
    return NonRefEditableLabel;
}(ComponentBase_1.ComponentBase);
exports.NonRefEditableLabel = NonRefEditableLabel;

},{"4d994bf75bc0f0bc":"8SnDZ","7db8374ba0c7d1b":"3zAmj","b85d02a317dcb2a0":"cVGkV","aaf80427d39a904f":"7xglY"}],"cVGkV":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NonRefTextInput = exports.TextInput = void 0;
var ComponentBase_1 = require("3d6f6608da6b933c");
var RV_1 = require("8d3553a60b0c5407");
var Ref_1 = require("15dafe3cae588156");
var RefComponentBase_1 = require("7656b043c44c9da6");
var HandlersCollection_1 = require("bc01e909778dd139");
var TextInput = /** @class */ function(_super) {
    __extends(TextInput, _super);
    function TextInput(ref) {
        if (ref === void 0) ref = new Ref_1.Ref("");
        var _this = _super.call(this, "input", ref) || this;
        _this.onChange = new HandlersCollection_1.HandlersCollection();
        _this.Class(TextInput.DefaultCssClasses);
        _this.element.addEventListener("input", function(e) {
            _this.ref.value = e.target.value;
            _this.onChange.Call(_this.ref.value, e);
        });
        _this.Refresh();
        return _this;
    }
    TextInput.prototype.Placeholder = function(placeholderText) {
        var _this = this;
        RV_1.RV.Use(placeholderText, function(v) {
            return _this.element.setAttribute("placeholder", v);
        });
        return this;
    };
    TextInput.prototype.OnChange = function(handler) {
        this.onChange.Add(handler);
        return this;
    };
    TextInput.prototype.Refresh = function() {
        this.element.value = this.ref.value;
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    TextInput.Name = "TextInput";
    TextInput.DefaultCssClasses = "";
    return TextInput;
}(RefComponentBase_1.RefComponentBase);
exports.TextInput = TextInput;
var NonRefTextInput = /** @class */ function(_super) {
    __extends(NonRefTextInput, _super);
    function NonRefTextInput(value, onChange) {
        var _this = _super.call(this, "input") || this;
        _this.value = value;
        _this.Class(TextInput.DefaultCssClasses);
        _this.element.addEventListener("input", function(e) {
            // this.ref.SetValue(e.target.value, this);
            onChange(e.target.value);
        });
        _this.Refresh();
        return _this;
    }
    NonRefTextInput.prototype.Placeholder = function(placeholder) {
        this.element.setAttribute("placeholder", placeholder);
        return this;
    };
    NonRefTextInput.prototype.Refresh = function() {
        this.element.value = this.value;
    // if (this.showThatChanged)
    //     this.ref.HasChanged
    //         ? this.element.classList.add("tf-value-changed")
    //         : this.element.classList.remove("tf-value-changed");
    };
    NonRefTextInput.DefaultCssClasses = "";
    return NonRefTextInput;
}(ComponentBase_1.ComponentBase);
exports.NonRefTextInput = NonRefTextInput;

},{"3d6f6608da6b933c":"8SnDZ","8d3553a60b0c5407":"QB8AR","15dafe3cae588156":"9pTSI","7656b043c44c9da6":"anBYP","bc01e909778dd139":"3xTOB"}],"l7Wh6":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PasswordInput = void 0;
var RV_1 = require("eb7a81987f0e831f");
var Ref_1 = require("b5e76d606de8f1ba");
var Div_1 = require("d2567d85f57aa8cd");
var Span_1 = require("fefb4992804b27b4");
var TextInput_1 = require("ac108f131849ab0e");
var PasswordInput = /** @class */ function(_super) {
    __extends(PasswordInput, _super);
    function PasswordInput(passwordRef) {
        if (passwordRef === void 0) passwordRef = new Ref_1.Ref("");
        var _this = _super.call(this, "") || this;
        _this.passwordRef = passwordRef;
        _this.passwordInput = new TextInput_1.TextInput(_this.passwordRef).Class(TextInput_1.TextInput.DefaultCssClasses);
        _this.showPasswordBtn = new Span_1.Span("\uD83D\uDC40").PositionAbsolute().Top(8).Right(6).Opacity(0.5).CursorPointer();
        _this.PositionRelative();
        _this.showPasswordBtn.On([
            "mousedown",
            "touchstart"
        ], function() {
            _this.passwordInput.Attribute("type", "text");
            _this.showPasswordBtn.Opacity(1);
        }).On([
            "mouseup",
            "touchend"
        ], function() {
            _this.passwordInput.Attribute("type", "password");
            _this.showPasswordBtn.Opacity(0.5);
        });
        _this.passwordInput.Attribute("type", "password");
        _this.Append(_this.passwordInput, _this.showPasswordBtn);
        return _this;
    }
    PasswordInput.prototype.Placeholder = function(placeholder) {
        var _this = this;
        RV_1.RV.Use(placeholder, function(v) {
            return _this.passwordInput.Placeholder(v);
        });
        return this;
    };
    PasswordInput.Name = "PasswordInput";
    return PasswordInput;
}(Div_1.Div);
exports.PasswordInput = PasswordInput;

},{"eb7a81987f0e831f":"QB8AR","b5e76d606de8f1ba":"9pTSI","d2567d85f57aa8cd":"6b4fV","fefb4992804b27b4":"bbB3D","ac108f131849ab0e":"cVGkV"}],"knKKY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumberInput = void 0;
var RefComponentBase_1 = require("b105fac80297c23f");
var Ref_1 = require("e6b988cfdc7df6a3");
var RV_1 = require("75bb817f5313721a");
var NumberInput = /** @class */ function(_super) {
    __extends(NumberInput, _super);
    function NumberInput(ref) {
        if (ref === void 0) ref = new Ref_1.Ref(0);
        var _this = _super.call(this, "input", ref) || this;
        _this.min = undefined;
        _this.max = undefined;
        _this.Class(NumberInput.DefaultCssClasses);
        _this.element.setAttribute("type", "number");
        _this.element.setAttribute("value", _this.ref.value.toString());
        _this.element.addEventListener("input", function(e) {
            _this.ref.value = +e.target.value; // TODO: zwalidować czy to nie powoduje zapętlenia refreshy
        });
        _this.element.addEventListener("mousewheel", function(e) {
            _this.ref.value = +e.target.value;
        });
        return _this;
    }
    NumberInput.prototype.Step = function(step) {
        var _this = this;
        RV_1.RV.Use(step, function(v) {
            return _this.Attribute("step", v.toString());
        });
        return this;
    };
    NumberInput.prototype.Min = function(min) {
        var _this = this;
        RV_1.RV.Use(min, function(v) {
            return _this.Attribute("min", v.toString());
        });
        return this;
    };
    NumberInput.prototype.Max = function(max) {
        var _this = this;
        RV_1.RV.Use(max, function(v) {
            return _this.Attribute("max", v.toString());
        });
        return this;
    };
    NumberInput.prototype.Range = function(min, max) {
        this.Min(min);
        this.Max(max);
        return this;
    };
    NumberInput.prototype.Refresh = function() {
        this.element.value = this.ref.value.toString();
        if (this.min !== undefined && this.max !== undefined) {
            if (this.min !== this.max && this.ref.value >= this.min && this.ref.value <= this.max) this.Style("background", "");
            else this.Style("background", "pink");
        }
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    NumberInput.Name = "NumberInput";
    NumberInput.DefaultCssClasses = "";
    return NumberInput;
}(RefComponentBase_1.RefComponentBase);
exports.NumberInput = NumberInput;

},{"b105fac80297c23f":"anBYP","e6b988cfdc7df6a3":"9pTSI","75bb817f5313721a":"QB8AR"}],"fzmsW":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumericRange = void 0;
var __1 = require("9d683b8391f722a1");
var NumericRange = /** @class */ function(_super) {
    __extends(NumericRange, _super);
    function NumericRange(min, max, range) {
        var _this = _super.call(this) || this;
        _this.min = min;
        _this.max = max;
        _this.minInput = new __1.NumberInput(_this.min).HalfWidth();
        _this.maxInput = new __1.NumberInput(_this.max).HalfWidth();
        if (range) {
            _this.minInput.Min(range[0]);
            _this.maxInput.Max(range[1]);
        }
        _this.Append(_this.minInput, _this.maxInput);
        return _this;
    }
    NumericRange.prototype.ShowThatChanged = function(showOrNot) {
        this.minInput.ShowThatChanged(showOrNot);
        this.maxInput.ShowThatChanged(showOrNot);
        return this;
    };
    NumericRange.Name = "NumericRange";
    return NumericRange;
}(__1.Div);
exports.NumericRange = NumericRange;

},{"9d683b8391f722a1":"2JFzm"}],"fFkco":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Range = void 0;
var RefComponentBase_1 = require("f62d0d43186d4076");
var Ref_1 = require("17e88d0759ab7288");
var RV_1 = require("9ddaeed57cf71579");
var Range = /** @class */ function(_super) {
    __extends(Range, _super);
    function Range(ref, range) {
        if (ref === void 0) ref = new Ref_1.Ref(0);
        if (range === void 0) range = [
            0,
            100
        ];
        var _this = _super.call(this, "input", ref) || this;
        _this.min = undefined;
        _this.max = undefined;
        _this.Class(Range.DefaultCssClasses);
        if (range && range.length == 2) {
            _this.Min(range[0]);
            _this.Max(range[1]);
        }
        _this.Attribute("type", "range");
        _this.Attribute("value", _this.ref.value.toString());
        _this.element.addEventListener("input", function(e) {
            _this.ref.value = +e.target.value;
        });
        return _this;
    }
    Range.prototype.Min = function(min) {
        var _this = this;
        RV_1.RV.Use(min, function(v) {
            return _this.Attribute("min", min.toString());
        });
        return this;
    };
    Range.prototype.Max = function(max) {
        var _this = this;
        RV_1.RV.Use(max, function(v) {
            return _this.Attribute("max", max.toString());
        });
        return this;
    };
    Range.prototype.Refresh = function() {
        this.element.value = this.ref.value.toString();
    };
    Range.Name = "Range";
    Range.DefaultCssClasses = "";
    return Range;
}(RefComponentBase_1.RefComponentBase);
exports.Range = Range;

},{"f62d0d43186d4076":"anBYP","17e88d0759ab7288":"9pTSI","9ddaeed57cf71579":"QB8AR"}],"dg9IT":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = void 0;
var __1 = require("5463637a883acf08");
var RefComponentBase_1 = require("d7d7586a54a03fff");
var Select = /** @class */ function(_super) {
    __extends(Select, _super);
    function Select(ref, initialOptions) {
        if (ref === void 0) ref = new __1.Ref("");
        if (initialOptions === void 0) initialOptions = [];
        var _this = _super.call(this, "select", ref) || this;
        _this.options = [];
        _this.InitialOptions = [];
        _this.clickHandler = function() {
            // console.log('[RemoveDefaultOptionOnFirstClick]', this.ref.value);
            _this.RemoveDefaultOption();
            _this.element.removeEventListener("click", _this.clickHandler);
            _this.ref.value = _this.element.value; // BEZ TEGO PO KLIKNIĘCU KONTROLKA POKAZUJE PIERWSZĄ WARTOŚĆ ALE ref SIĘ NIE USTAWIA NA TE WARTOŚĆ
        };
        _this.modifyValueAfterChangeFn = function(t) {
            return t;
        };
        _this.DefaultValue = "__default__";
        _this.wasDefaultValueEverSet = false;
        _this.removeItOnFirstClick = false;
        _this.AddClass(Select.DefaultCssClasses);
        if (initialOptions[0] instanceof __1.SelectOption) initialOptions.forEach(function(opt) {
            return _this.AddOption(opt);
        });
        if (typeof initialOptions[0] == "string") initialOptions.forEach(function(opt) {
            return _this.AddOption(new __1.SelectOption(opt));
        });
        _this.InitialOptions = __spreadArray([], _this.options, true);
        _this.element.addEventListener("change", function(e) {
            var _a, _b;
            _this.ref.value = _this.modifyValueAfterChangeFn(e.target.value);
            var index = _this.options.findIndex(function(x) {
                return x.Value === e.target.value;
            });
            var key = ((_a = _this.options.find(function(x) {
                return x.Value === e.target.value;
            })) === null || _a === void 0 ? void 0 : _a.Text) || "";
            (_b = _this.onChangeCallback) === null || _b === void 0 || _b.call(_this, _this.ref.value, index, key);
        });
        _this.element.value = ref.value.toString();
        if (_this.removeItOnFirstClick) _this.RemoveDefaultOptionOnFirstClick();
        return _this;
    }
    Object.defineProperty(Select.prototype, "Index", {
        get: function() {
            var _this = this;
            return this.options.findIndex(function(x) {
                return x.Value === _this.ref.value;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "Key", {
        get: function() {
            var _this = this;
            var _a;
            return ((_a = this.options.find(function(x) {
                return x.Value === _this.ref.value;
            })) === null || _a === void 0 ? void 0 : _a.Text) || this.defaultOptionText;
        },
        enumerable: false,
        configurable: true
    });
    Select.prototype.SetValue = function(value) {
        var _this = this;
        var _a, _b;
        _super.prototype.SetValue.call(this, value);
        var index = this.options.findIndex(function(x) {
            return x.Value === _this.ref.value;
        });
        var key = ((_a = this.options.find(function(x) {
            return x.Value === _this.ref.value;
        })) === null || _a === void 0 ? void 0 : _a.Text) || "";
        (_b = this.onChangeCallback) === null || _b === void 0 || _b.call(this, this.ref.value, index, key);
        return this;
    };
    Select.prototype.RemoveDefaultOptionOnFirstClick = function() {
        /*
            UŻYCIE TEJ OPCJI SPOWODUJE USUNIĘCIE WARTOŚCI DOMYŚLNEJ Z LISTY OPCJI
            ALE RÓWNIEŻ USTAWI PIERWSZĄ OPCJĘ. DEFAULTOWA JUŻ SIĘ WIĘCEJ NIE POJAWI.
            NIE WIEM CZY NIE LEPIEJ BYŁO BY Z TEGO ZREZYGNOWAĆ.
        */ this.element.addEventListener("click", this.clickHandler);
        // this.OnClick(this.handler)
        return this;
    };
    Object.defineProperty(Select.prototype, "IsOpen", {
        get: function() {
            return document.activeElement === this.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "Options", {
        get: function() {
            return this.options;
        },
        enumerable: false,
        configurable: true
    });
    Select.prototype.ModifyAfterChange = function(fn) {
        this.modifyValueAfterChangeFn = fn;
        return this;
    };
    Select.prototype.CreateOption = function(option) {
        var _a;
        var optionElement = document.createElement("option");
        optionElement.text = option.Text;
        optionElement.value = ((_a = option.Value) === null || _a === void 0 ? void 0 : _a.toString()) || "";
        return optionElement;
    };
    Select.prototype.PrependOption = function(option) {
        this.options.unshift(option);
        var optionElement = this.CreateOption(option);
        this.element.Prepend(optionElement);
        this.Refresh();
        return this;
    };
    Select.prototype.AddOption = function(option) {
        this.options.push(option);
        var optionElement = this.CreateOption(option);
        this.element.Append(optionElement);
        this.Refresh();
        return this;
    };
    Object.defineProperty(Select.prototype, "IsDefault", {
        get: function() {
            return !this.IsValueInOptions();
        },
        enumerable: false,
        configurable: true
    });
    Select.prototype.AddDefaultOption = function(text, removeItOnFirstClick) {
        if (removeItOnFirstClick === void 0) removeItOnFirstClick = false;
        this.removeItOnFirstClick = removeItOnFirstClick;
        this.wasDefaultValueEverSet = true;
        this.defaultOptionText = text;
        this.defaultOptionElement = document.createElement("option");
        this.defaultOptionElement.text = text;
        this.defaultOptionElement.value = this.DefaultValue;
        this.element.Append(this.defaultOptionElement);
        this.Refresh();
        return this;
    };
    Select.prototype.RemoveDefaultOption = function() {
        if (this.defaultOptionElement) {
            this.element.removeChild(this.defaultOptionElement);
            this.defaultOptionElement = null;
        }
        return this;
    };
    Select.prototype.ClearOptions = function() {
        this.options = [];
        this.element.textContent = "";
        if (this.wasDefaultValueEverSet) this.AddDefaultOption(this.defaultOptionText);
        return this;
    };
    Select.prototype.AddOptions = function(options) {
        var _this = this;
        options.forEach(function(o) {
            return _this.AddOption(o);
        });
        return this;
    };
    Select.prototype.LoadOptions = function(options) {
        var _this = this;
        this.ClearOptions();
        if (options[0] instanceof __1.SelectOption) options.forEach(function(o) {
            return _this.AddOption(o);
        });
        else options.forEach(function(o) {
            return _this.AddOption(new __1.SelectOption(o));
        });
        this.Refresh();
        return this;
    };
    Select.prototype.ReplaceOption = function(predicate, replacement) {
        var optionsCopy = __spreadArray([], this.Options, true);
        var foundIndex = optionsCopy.findIndex(function(x) {
            return predicate(x);
        });
        optionsCopy[foundIndex] = replacement;
        this.LoadOptions(optionsCopy);
        return this;
    };
    Select.prototype.LoadInitialOptions = function() {
        return this.LoadOptions(this.InitialOptions);
    };
    Select.prototype.OnChange = function(callback, callRightaway) {
        var _this = this;
        var _a, _b;
        if (callRightaway === void 0) callRightaway = false;
        this.onChangeCallback = callback;
        if (callRightaway) {
            var index = this.options.findIndex(function(x) {
                return x.Value === _this.ref.value;
            });
            var key = ((_a = this.options.find(function(x) {
                return x.Value === _this.ref.value;
            })) === null || _a === void 0 ? void 0 : _a.Text) || "";
            (_b = this.onChangeCallback) === null || _b === void 0 || _b.call(this, this.ref.value, index, key);
        }
        return this;
    };
    Select.prototype.Refresh = function() {
        if (this.IsValueInOptions()) this.element.value = this.ref.value.toString();
        else this.element.value = this.DefaultValue;
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
        return this;
    };
    Select.prototype.IsValueInOptions = function() {
        var _a;
        var refValue = (_a = this.ref.value) === null || _a === void 0 ? void 0 : _a.toString();
        return this.options.map(function(x) {
            var _a;
            return (_a = x.Value) === null || _a === void 0 ? void 0 : _a.toString();
        }).includes(refValue);
    };
    Select.Name = "Select";
    Select.DefaultCssClasses = "";
    return Select;
}(RefComponentBase_1.RefComponentBase);
exports.Select = Select;

},{"5463637a883acf08":"2JFzm","d7d7586a54a03fff":"anBYP"}],"kHuTw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectOption = void 0;
var SelectOption = /** @class */ function() {
    function SelectOption(Text, Value) {
        this.Text = Text;
        this.Value = Value;
        if (this.Value === undefined) this.Value = this.Text;
    }
    return SelectOption;
}();
exports.SelectOption = SelectOption;

},{}],"iK50G":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NonRefCheckboxV2 = exports.NonRefCheckbox = exports.Checkbox = void 0;
var RefComponentBase_1 = require("e817d09bc2b392cc");
var GenericComponent_1 = require("68195afa91af563f");
var Ref_1 = require("48e9fd250f30cb0a");
var ComponentBase_1 = require("b047940b1e9f4d53");
var TextLabel_1 = require("363a86c599082f1f");
var Checkbox = /** @class */ function(_super) {
    __extends(Checkbox, _super);
    function Checkbox(ref, label) {
        if (ref === void 0) ref = new Ref_1.Ref(false);
        var _this = _super.call(this, "label", ref) || this;
        _this.ref = ref;
        _this.input = new GenericComponent_1.GenericComponent("input").AddClass("uk-checkbox").Attribute("type", "checkbox");
        if (ref.value) _this.input.Attribute("checked", ref.value ? "checked" : "");
        _this.element.addEventListener("click", function(e) {
            _this.ref.value = _this.input.element.checked;
        });
        _this.Append(_this.input);
        if (label) _this.Append(new TextLabel_1.TextLabel(" " + label));
        return _this;
    }
    Checkbox.prototype.Refresh = function() {
        this.input.element.checked = this.ref.value;
        if (this.showThatChanged) this.ref.HasChanged ? this.input.element.classList.add("tf-value-changed") : this.input.element.classList.remove("tf-value-changed");
    };
    Checkbox.prototype.Disabled = function() {
        this.input.Attribute("disabled", "disabled");
        return this;
    };
    Checkbox.Name = "Checkbox";
    return Checkbox;
}(RefComponentBase_1.RefComponentBase);
exports.Checkbox = Checkbox;
var NonRefCheckbox = /** @class */ function(_super) {
    __extends(NonRefCheckbox, _super);
    function NonRefCheckbox(value, onChange, label) {
        var _this = _super.call(this, "label") || this;
        _this.value = value;
        _this.input = new GenericComponent_1.GenericComponent("input").AddClass("uk-checkbox").Attribute("type", "checkbox");
        if (value()) _this.input.Attribute("checked");
        else _this.input.RemoveAttribute("checked");
        _this.element.addEventListener("click", function(e) {
            // console.log('!', this.input.element.checked);
            onChange(_this.input.element.checked);
        });
        _this.Append(_this.input);
        if (label) _this.Append(new TextLabel_1.TextLabel(" " + label));
        return _this;
    }
    NonRefCheckbox.prototype.Refresh = function() {
        this.input.element.checked = this.value();
    };
    return NonRefCheckbox;
}(ComponentBase_1.ComponentBase);
exports.NonRefCheckbox = NonRefCheckbox;
var NonRefCheckboxV2 = /** @class */ function(_super) {
    __extends(NonRefCheckboxV2, _super);
    function NonRefCheckboxV2(value, onChange, label) {
        var _this = _super.call(this, "label") || this;
        _this.value = value;
        _this.input = new GenericComponent_1.GenericComponent("input").AddClass("uk-checkbox").Attribute("type", "checkbox");
        if (value) _this.input.Attribute("checked");
        else _this.input.RemoveAttribute("checked");
        _this.element.addEventListener("click", function(e) {
            onChange(_this.input.element.checked);
        });
        _this.Append(_this.input);
        if (label) _this.Append(new TextLabel_1.TextLabel(" " + label));
        return _this;
    }
    NonRefCheckboxV2.prototype.Refresh = function() {
        this.input.element.checked = this.value;
    };
    return NonRefCheckboxV2;
}(ComponentBase_1.ComponentBase);
exports.NonRefCheckboxV2 = NonRefCheckboxV2;

},{"e817d09bc2b392cc":"anBYP","68195afa91af563f":"kP7Bh","48e9fd250f30cb0a":"9pTSI","b047940b1e9f4d53":"8SnDZ","363a86c599082f1f":"7xglY"}],"kP7Bh":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenericComponent = void 0;
var ComponentBase_1 = require("c9c9593bbf0460a0");
var GenericComponent = /** @class */ function(_super) {
    __extends(GenericComponent, _super);
    function GenericComponent(element) {
        return _super.call(this, element) || this;
    }
    return GenericComponent;
}(ComponentBase_1.ComponentBase);
exports.GenericComponent = GenericComponent;

},{"c9c9593bbf0460a0":"8SnDZ"}],"1ZNJY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = exports.LabeledRadioInput = exports.RadioInput = void 0;
var Ref_1 = require("20f06effe18bef7d");
var Div_1 = require("513b5e93ff0caca1");
var ComponentBase_1 = require("9aa48879c43d2396");
var RefComponentBase_1 = require("a3bca73c82a2d6d9");
var RadioInput = /** @class */ function(_super) {
    __extends(RadioInput, _super);
    function RadioInput(ref, value, uniqueId) {
        var _this = _super.call(this, "input", ref) || this;
        _this.ref = ref;
        _this.value = value;
        _this.uniqueId = uniqueId;
        _this.Attribute("type", "radio");
        _this.Attribute("name", uniqueId);
        _this.Attribute("value", value.toString());
        _this.Refresh();
        return _this;
    }
    RadioInput.prototype.Refresh = function() {
        this.element.checked = this.ref.value == this.value;
    };
    return RadioInput;
}(RefComponentBase_1.RefComponentBase);
exports.RadioInput = RadioInput;
var LabeledRadioInput = /** @class */ function(_super) {
    __extends(LabeledRadioInput, _super);
    function LabeledRadioInput(ref, value, label, uniqueId) {
        var _this = _super.call(this, "label") || this;
        _this.ref = ref;
        _this.Append(new RadioInput(ref, value, uniqueId), label);
        _this.OnClick(function() {
            return _this.ref.value = value;
        });
        return _this;
    }
    return LabeledRadioInput;
}(ComponentBase_1.ComponentBase);
exports.LabeledRadioInput = LabeledRadioInput;
var Radio = /** @class */ function(_super) {
    __extends(Radio, _super);
    function Radio(ref) {
        if (ref === void 0) ref = new Ref_1.Ref(0);
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.uniqueName = "radio-id-" + Math.random().toString().substring(2);
        return _this;
    }
    Radio.prototype.Add = function(value, label) {
        this.Append(new LabeledRadioInput(this.ref, value, label, this.uniqueName));
        return this;
    };
    Radio.Name = "Radio";
    return Radio;
}(Div_1.Div);
exports.Radio = Radio;

},{"20f06effe18bef7d":"9pTSI","513b5e93ff0caca1":"6b4fV","9aa48879c43d2396":"8SnDZ","a3bca73c82a2d6d9":"anBYP"}],"lpUWX":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rate = exports.Star = void 0;
var RefComponentBase_1 = require("a47110ff4a20aa5f");
var Div_1 = require("7c77e9acba24ca6f");
var Star = /** @class */ function(_super) {
    __extends(Star, _super);
    function Star(rating, showWhenLowerOrEqual) {
        var _this = _super.call(this, "span", rating) || this;
        _this.showWhenLowerOrEqual = showWhenLowerOrEqual;
        _this.Style("cursor", "pointer");
        _this.Style("opacity", "0.6");
        _this.Refresh();
        return _this;
    }
    Star.prototype.Refresh = function() {
        this.Text(this.ref.value >= this.showWhenLowerOrEqual ? "\u25FC" : "\u25FB");
    };
    return Star;
}(RefComponentBase_1.RefComponentBase);
exports.Star = Star;
var Rate = /** @class */ function(_super) {
    __extends(Rate, _super);
    function Rate(rating, count) {
        if (count === void 0) count = 5;
        var _this = _super.call(this) || this;
        var _loop_1 = function(i) {
            this_1.Append(new Star(rating, i).OnClick(function() {
                return rating.value = i;
            }));
        };
        var this_1 = this;
        for(var i = 1; i <= count; i++)_loop_1(i);
        return _this;
    }
    Rate.Name = "Rate";
    return Rate;
}(Div_1.Div);
exports.Rate = Rate;

},{"a47110ff4a20aa5f":"anBYP","7c77e9acba24ca6f":"6b4fV"}],"6Ra6T":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateInput = void 0;
var Ref_1 = require("d036ce242b5aeae8");
var RefComponentBase_1 = require("ce257b9da713d441");
var DateInput = /** @class */ function(_super) {
    __extends(DateInput, _super);
    function DateInput(ref) {
        var _this = this;
        if (ref instanceof Ref_1.Ref) _this = _super.call(this, "input", ref) || this;
        else if (ref instanceof Date) _this = _super.call(this, "input", new Ref_1.Ref(ref)) || this;
        else if (typeof ref === "number") _this = _super.call(this, "input", new Ref_1.Ref(new Date(ref))) || this;
        else _this = _super.call(this, "input", new Ref_1.Ref(new Date())) || this;
        _this.Class("uk-input");
        _this.Attribute("type", "date");
        _this.element.addEventListener("change", function(e) {
            var _a;
            var v = e.target.value;
            var _b = v.split("-"), year = _b[0], month = _b[1], day = _b[2];
            var m = month - 1;
            if (m < 0) m = 11;
            var d = day;
            if (d < 0) d = 1;
            var date = new Date(year, m, d);
            _this.ref.value = date;
            (_a = _this.onChange) === null || _a === void 0 || _a.call(_this, date);
        });
        _this.Refresh();
        return _this;
    }
    DateInput.prototype.OnChange = function(callback) {
        this.onChange = callback;
        return this;
    };
    DateInput.prototype.Refresh = function() {
        // this.element.value = this.FormatDate(this.ref.value);
        this.element.valueAsDate = this.ref.value;
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    DateInput.prototype.PadTo2Digits = function(num) {
        return num.toString().padStart(2, "0");
    };
    DateInput.prototype.FormatDate = function(date) {
        return [
            date.getFullYear(),
            this.PadTo2Digits(date.getMonth() + 1),
            this.PadTo2Digits(date.getDate())
        ].join("-");
    };
    DateInput.Name = "DateInput";
    return DateInput;
}(RefComponentBase_1.RefComponentBase);
exports.DateInput = DateInput;

},{"d036ce242b5aeae8":"9pTSI","ce257b9da713d441":"anBYP"}],"21kD9":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeInput = void 0;
var Ref_1 = require("6d87e8bd8380f55b");
var RefComponentBase_1 = require("b61651976a44c3e7");
var TimeInput = /** @class */ function(_super) {
    __extends(TimeInput, _super);
    function TimeInput(ref) {
        if (ref === void 0) ref = new Ref_1.Ref(TimeInput.DefaultTime);
        var _this = _super.call(this, "input", ref) || this;
        _this.Class("uk-input");
        _this.Attribute("type", "time");
        _this.element.addEventListener("change", function(e) {
            var _a;
            var v = e.target.value;
            var _b = v.split(":"), hour = _b[0], minute = _b[1];
            _this.ref.value = v;
            (_a = _this.onChange) === null || _a === void 0 || _a.call(_this, v, +hour, +minute);
        });
        _this.Refresh();
        return _this;
    }
    TimeInput.prototype.OnChange = function(callback) {
        this.onChange = callback;
        return this;
    };
    TimeInput.prototype.Refresh = function() {
        this.element.value = this.FormatTime(this.ref.value);
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    TimeInput.prototype.AddTime = function(hours, minutes) {
        var _a;
        if (minutes === void 0) minutes = 0;
        var _b = this.Value.split(":").map(function(x) {
            return +x;
        }), hh = _b[0], mm = _b[1];
        hh = (hh + hours) % 24;
        hh < 0 && (hh = 23);
        mm = (mm + minutes) % 60;
        mm < 0 && (mm = 59);
        var v = hh + ":" + mm;
        this.Value = v;
        (_a = this.onChange) === null || _a === void 0 || _a.call(this, v, hh, mm);
        return this;
    };
    TimeInput.prototype.SetTime = function(hours, minutes) {
        var _a;
        if (minutes === void 0) minutes = 0;
        var v = hours + ":" + minutes;
        this.Value = v;
        (_a = this.onChange) === null || _a === void 0 || _a.call(this, v, hours, minutes);
        return this;
    };
    TimeInput.prototype.PadTo2Digits = function(num) {
        return num.toString().padStart(2, "0");
    };
    TimeInput.prototype.FormatTime = function(time) {
        var _a = time.split(":"), hour = _a[0], minute = _a[1];
        return [
            this.PadTo2Digits(hour),
            this.PadTo2Digits(minute)
        ].join(":");
    };
    TimeInput.Name = "TimeInput";
    TimeInput.DefaultTime = "12:00";
    return TimeInput;
}(RefComponentBase_1.RefComponentBase);
exports.TimeInput = TimeInput;

},{"6d87e8bd8380f55b":"9pTSI","b61651976a44c3e7":"anBYP"}],"ln4UG":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateTimeInput = void 0;
var Ref_1 = require("5d70cd18191ec97f");
var RefComponentBase_1 = require("c1831968b54c21b8");
var DateTimeInput = /** @class */ function(_super) {
    __extends(DateTimeInput, _super);
    function DateTimeInput(ref) {
        var _this = this;
        if (ref instanceof Ref_1.Ref) _this = _super.call(this, "input", ref) || this;
        else if (ref instanceof Date) _this = _super.call(this, "input", new Ref_1.Ref(ref)) || this;
        else if (typeof ref === "number") _this = _super.call(this, "input", new Ref_1.Ref(new Date(ref))) || this;
        else _this = _super.call(this, "input", new Ref_1.Ref(new Date())) || this;
        _this.Class("uk-input");
        _this.Attribute("type", "datetime-local");
        _this.element.addEventListener("change", function(e) {
            var v = e.target.value;
            _this.ref.value = new Date(v);
        });
        _this.Refresh();
        return _this;
    }
    DateTimeInput.prototype.Refresh = function() {
        this.element.value = this.ref.value.toISOString().slice(0, 16);
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    DateTimeInput.Name = "DateTimeInput";
    return DateTimeInput;
}(RefComponentBase_1.RefComponentBase);
exports.DateTimeInput = DateTimeInput;

},{"5d70cd18191ec97f":"9pTSI","c1831968b54c21b8":"anBYP"}],"2ZOfR":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableDateLabel = void 0;
var Label_1 = require("163401156a7ba64b");
var TextLabel_1 = require("115827b2ca6a6391");
var DateInput_1 = require("9b91582628a7ef37");
var Div_1 = require("f499d0dc4060d375");
var EditableDateLabel = /** @class */ function(_super) {
    __extends(EditableDateLabel, _super);
    function EditableDateLabel(ref) {
        var _this = _super.call(this) || this;
        var dayAndMonth = function(value) {
            return value.getDate() + "." + (value.getMonth() + 1);
        };
        _this.Label = new Label_1.Label(ref, dayAndMonth).CursorPointer().OnClick(function() {
            _this.Label.Hide();
            _this.DateInput.Show();
            _this.OffButton.Show();
        });
        _this.DateInput = new DateInput_1.DateInput(ref).Inline().Hide().OnChange(function(date) {
            var _a;
            _this.DateInput.Hide();
            _this.OffButton.Hide();
            _this.Label.Show();
            (_a = _this.onChange) === null || _a === void 0 || _a.call(_this, date);
        }).OnBlur(function() {
            _this.DateInput.Hide();
            _this.OffButton.Hide();
            _this.Label.Show();
        });
        _this.OffButton = new TextLabel_1.TextLabel("\u2716").CursorPointer().Inline().Hide();
        _this.OffButton.OnClick(function() {
            _this.Label.Show();
            _this.DateInput.Hide();
            _this.OffButton.Hide();
        });
        _this.DateInput.Width(85, "%");
        _this.OffButton.MarginLeft(6);
        // NIE DA SIE KLIKNĄĆ W KONTROLKE BO ŁAPIE BLURA :(
        // this.SetAttribute("tabindex", "0");
        // this.OnBlur(() =>
        // {
        //     console.log('blsssssssur');
        //     this.DateInput.Hide();
        //     this.Label.Show();
        // });
        _this.Append(_this.Label, _this.DateInput, _this.OffButton);
        return _this;
    }
    EditableDateLabel.prototype.OnChange = function(callback) {
        this.onChange = callback;
        return this;
    };
    EditableDateLabel.prototype.DateInputConfig = function(config) {
        config(this.DateInput);
        return this;
    };
    EditableDateLabel.prototype.OffButtonConfig = function(config) {
        config(this.OffButton);
        return this;
    };
    EditableDateLabel.prototype.LabelConfig = function(config) {
        config(this.Label);
        return this;
    };
    EditableDateLabel.Name = "EditableDateLabel";
    return EditableDateLabel;
}(Div_1.Div);
exports.EditableDateLabel = EditableDateLabel;

},{"163401156a7ba64b":"3zAmj","115827b2ca6a6391":"7xglY","9b91582628a7ef37":"6Ra6T","f499d0dc4060d375":"6b4fV"}],"7wEDh":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableTextarea = void 0;
var ComponentBase_1 = require("561dae5749676912");
var Label_1 = require("edfc0545adb468e3");
var MultilineInput_1 = require("406ae50cda9cc85");
var EditableTextarea = /** @class */ function(_super) {
    __extends(EditableTextarea, _super);
    function EditableTextarea(ref) {
        var _this = _super.call(this, "div") || this;
        _this.ref = ref;
        _this.valueBeforeEdit = "";
        _this.label = new Label_1.Label(ref).CursorPointer().Show().OnClick(function() {
            _this.EditMode();
        });
        _this.textInput = new MultilineInput_1.MultilineInput(ref).OnBlur(function() {
            return _this.EndOfEdit();
        }).Hide();
        _this.Append(_this.label);
        _this.Append(_this.textInput);
        return _this;
    }
    EditableTextarea.prototype.EditMode = function() {
        var linesCount = this.ref.value.split("\n").length;
        this.textInput.Rows(linesCount);
        this.valueBeforeEdit = this.ref.value;
        var labelWidth = getComputedStyle(this.label.Element).width;
        var w = +labelWidth.replace("px", "");
        if (w < 100) w += 32;
        this.label.Hide();
        this.textInput.Show().Width(w).Padding(2, 6);
    // setTimeout(()=>        this.textInput.Focus(), 90)
    // .Focus()
    };
    Object.defineProperty(EditableTextarea.prototype, "IsEditMode", {
        get: function() {
            return this.textInput.IsVisible();
        },
        enumerable: false,
        configurable: true
    });
    EditableTextarea.prototype.ToggleEditMode = function() {
        if (this.IsEditMode) this.CloseEditMode();
        else this.EditMode();
        return this;
    };
    EditableTextarea.prototype.OpenEditMode = function() {
        this.EditMode();
        return this;
    };
    EditableTextarea.prototype.CloseEditMode = function() {
        this.EndOfEdit();
        return this;
    };
    EditableTextarea.prototype.LabelConfig = function(config) {
        config(this.label);
        return this;
    };
    EditableTextarea.prototype.TextInputConfig = function(config) {
        config(this.textInput);
        return this;
    };
    EditableTextarea.prototype.OnEditEnd = function(callback) {
        this.editEnd = callback;
        return this;
    };
    EditableTextarea.prototype.EndOfEdit = function() {
        var _a;
        if (!this.textInput.IsVisible()) return; // To prevent double call
        this.textInput.Hide();
        this.label.Show();
        (_a = this.editEnd) === null || _a === void 0 || _a.call(this, this.valueBeforeEdit, this.ref.value);
    };
    EditableTextarea.prototype.DefaultText = function(text) {
        this.label.DefaultText(text);
        return this;
    };
    EditableTextarea.prototype.Placeholder = function(placeholder) {
        this.textInput.Placeholder(placeholder);
        return this;
    };
    EditableTextarea.prototype.Style = function(prop, val) {
        this.label.Style(prop, val);
        this.textInput.Style(prop, val);
        return this;
    };
    EditableTextarea.Name = "EditableTextarea";
    return EditableTextarea;
}(ComponentBase_1.ComponentBase);
exports.EditableTextarea = EditableTextarea;

},{"561dae5749676912":"8SnDZ","edfc0545adb468e3":"3zAmj","406ae50cda9cc85":"9juLW"}],"9juLW":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MultilineInput = void 0;
var RefComponentBase_1 = require("2f1198fbd2b5ae59");
var Ref_1 = require("8e19e4631c6adbbd");
var RV_1 = require("52e3715ae9d06e11");
var MultilineInput = /** @class */ function(_super) {
    __extends(MultilineInput, _super);
    function MultilineInput(ref) {
        if (ref === void 0) ref = new Ref_1.Ref("");
        var _this = _super.call(this, "textarea", ref) || this;
        _this.Class(MultilineInput.DefaultCssClasses);
        _this.element.addEventListener("input", function(e) {
            _this.ref.value = e.target.value;
        });
        _this.Refresh();
        return _this;
    }
    MultilineInput.prototype.Placeholder = function(placeholder) {
        var _this = this;
        RV_1.RV.Use(placeholder, function(v) {
            return _this.Attribute("placeholder", v.toString());
        });
        return this;
    };
    MultilineInput.prototype.Readonly = function() {
        this.Attribute("readonly");
        return this;
    };
    MultilineInput.prototype.Rows = function(count) {
        var _this = this;
        RV_1.RV.Use(count, function(v) {
            return _this.Attribute("rows", v.toString());
        });
        return this;
    };
    MultilineInput.prototype.Refresh = function() {
        this.element.value = this.ref.value;
        if (this.showThatChanged) this.ref.HasChanged ? this.element.classList.add("tf-value-changed") : this.element.classList.remove("tf-value-changed");
    };
    MultilineInput.Name = "MultilineInput";
    MultilineInput.DefaultCssClasses = "";
    return MultilineInput;
}(RefComponentBase_1.RefComponentBase);
exports.MultilineInput = MultilineInput;

},{"2f1198fbd2b5ae59":"anBYP","8e19e4631c6adbbd":"9pTSI","52e3715ae9d06e11":"QB8AR"}],"6SRlB":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabeledTextInput2 = exports.LabeledTextInput = void 0;
var TextInput_1 = require("e9b11f8e7041def0");
var Ref_1 = require("eb1cc83dcefccfe8");
var Span_1 = require("6fd6d03a00863b48");
var Div_1 = require("fd966049c2952c37");
var LabeledTextInput = /** @class */ function(_super) {
    __extends(LabeledTextInput, _super);
    function LabeledTextInput(label, variable) {
        if (variable === void 0) variable = new Ref_1.Ref("");
        var _this = _super.call(this, "LabeledTextInput") || this;
        _this.Append(new Span_1.Span(label).Class("label"));
        _this.Append(new TextInput_1.TextInput(variable).Placeholder(label).Class("input"));
        return _this;
    }
    return LabeledTextInput;
}(Div_1.Div);
exports.LabeledTextInput = LabeledTextInput;
var LabeledTextInput2 = /** @class */ function(_super) {
    __extends(LabeledTextInput2, _super);
    function LabeledTextInput2(label, variable) {
        if (variable === void 0) variable = new Ref_1.Ref("");
        var _this = _super.call(this) || this;
        _this.Append(new Span_1.Span(label).Width(320).DisplayInlineBlock(), new TextInput_1.TextInput(variable).Placeholder(label).Width(200));
        return _this;
    }
    return LabeledTextInput2;
}(Div_1.Div);
exports.LabeledTextInput2 = LabeledTextInput2;

},{"e9b11f8e7041def0":"cVGkV","eb1cc83dcefccfe8":"9pTSI","6fd6d03a00863b48":"bbB3D","fd966049c2952c37":"6b4fV"}],"7dad0":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabeledNumberInput = void 0;
var Div_1 = require("fa04db2d2fa13199");
var NumberInput_1 = require("91d44b589e3b9fe2");
var TextLabel_1 = require("d4d74975a2e2a294");
var LabeledNumberInput = /** @class */ function(_super) {
    __extends(LabeledNumberInput, _super);
    function LabeledNumberInput(label, ref) {
        var _this = _super.call(this, "tf-form-labeled-number") || this;
        _this.label = label;
        _this.ref = ref;
        _this.labelCmp = new TextLabel_1.TextLabel(_this.label).Class("label");
        _this.numberInput = new NumberInput_1.NumberInput(_this.ref).Class("input");
        _this.Append(_this.labelCmp, _this.numberInput);
        return _this;
    }
    LabeledNumberInput.prototype.Min = function(min) {
        this.numberInput.Min(min);
        return this;
    };
    LabeledNumberInput.prototype.Max = function(max) {
        this.numberInput.Max(max);
        return this;
    };
    LabeledNumberInput.prototype.Step = function(step) {
        this.numberInput.Step(step);
        return this;
    };
    LabeledNumberInput.prototype.Edit = function(hook) {
        hook(this.labelCmp, this.numberInput);
        return this;
    };
    return LabeledNumberInput;
}(Div_1.Div);
exports.LabeledNumberInput = LabeledNumberInput;

},{"fa04db2d2fa13199":"6b4fV","91d44b589e3b9fe2":"knKKY","d4d74975a2e2a294":"7xglY"}],"7EcpW":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabeledSelect2 = exports.LabeledSelect = void 0;
var Div_1 = require("9cb189651ac27653");
var Select_1 = require("fd5aca2f07c03691");
var TextLabel_1 = require("21d1d718d7953d9d");
var LabeledSelect = /** @class */ function(_super) {
    __extends(LabeledSelect, _super);
    function LabeledSelect(label, ref, selectOptions) {
        if (selectOptions === void 0) selectOptions = [];
        var _this = _super.call(this, "tf-form-labeled-select") || this;
        _this.label = label;
        _this.ref = ref;
        _this.selectOptions = selectOptions;
        _this.labelCmp = new TextLabel_1.TextLabel(_this.label).Class("label");
        _this.input = new Select_1.Select(_this.ref, _this.selectOptions).Class("input");
        _this.Append(_this.labelCmp, _this.input);
        return _this;
    }
    LabeledSelect.prototype.Edit = function(hook) {
        hook(this.labelCmp, this.input);
        return this;
    };
    return LabeledSelect;
}(Div_1.Div);
exports.LabeledSelect = LabeledSelect;
var LabeledSelect2 = /** @class */ function(_super) {
    __extends(LabeledSelect2, _super);
    function LabeledSelect2(label, ref, selectOptions) {
        if (selectOptions === void 0) selectOptions = [];
        var _this = _super.call(this, "tf-form-labeled-select") || this;
        _this.label = label;
        _this.ref = ref;
        _this.selectOptions = selectOptions;
        _this.labelCmp = new TextLabel_1.TextLabel(_this.label).Class("label").Width(320).DisplayInlineBlock();
        _this.Select = new Select_1.Select(_this.ref, _this.selectOptions).Class("input").Width(200);
        _this.Append(_this.labelCmp, _this.Select);
        return _this;
    }
    LabeledSelect2.prototype.Edit = function(hook) {
        hook(this.labelCmp, this.Select);
        return this;
    };
    return LabeledSelect2;
}(Div_1.Div);
exports.LabeledSelect2 = LabeledSelect2;

},{"9cb189651ac27653":"6b4fV","fd5aca2f07c03691":"dg9IT","21d1d718d7953d9d":"7xglY"}],"g9P5K":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalWindow = void 0;
var _1 = require("cf334dc5a5963b0e");
var HandlersCollection_1 = require("226d4539ad2e5fac");
var Div_1 = require("67977fdda436f220");
var Span_1 = require("97fc6d5f930c1735");
var Link_1 = require("cf0de913937fffc9");
var Shutter_1 = require("918228f512b63e10");
var ModalWindow = /** @class */ function(_super) {
    __extends(ModalWindow, _super);
    function ModalWindow(title, blurBackground, lockScroll, closeOnClickAway) {
        if (blurBackground === void 0) blurBackground = true;
        if (lockScroll === void 0) lockScroll = false;
        if (closeOnClickAway === void 0) closeOnClickAway = false;
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.blurBackground = blurBackground;
        _this.lockScroll = lockScroll;
        _this.closeOnClickAway = closeOnClickAway;
        _this.shutter = new Shutter_1.Shutter();
        _this.headerTitle = new Span_1.Span().Text(_this.title).Class("tf-modal-window-header");
        _this.header = new Div_1.Div().Append(_this.headerTitle);
        _this.onBeforeCloseOrHideWindow = new HandlersCollection_1.HandlersCollection();
        _this.onCloseOrHideWindow = new HandlersCollection_1.HandlersCollection(); // close by pressing X or CloseWindow() call
        _this.onExitWindow = new HandlersCollection_1.HandlersCollection(); // close by calling ExitWindow()
        _this.CloseButtonAction = function() {
            return _this.CloseWindow();
        };
        _this.CloseButton = new Link_1.Link("\xd7").NoDecorationOnHover().Class("tf-modal-window-close").OnClick(function() {
            return _this.CloseButtonAction();
        });
        _this.content = new Div_1.Div().Class("tf-modal-window-content");
        _this.footer = new Div_1.Div().Class("tf-modal-window-footer");
        _this.wasEverOpen = false;
        _this.Class(ModalWindow.DefaultCssClasses);
        return _this;
    }
    Object.defineProperty(ModalWindow.prototype, "Shutter", {
        get: function() {
            return this.shutter;
        },
        enumerable: false,
        configurable: true
    });
    ModalWindow.prototype.NoCloseButton = function() {
        this.CloseButton = null;
        return this;
    };
    ModalWindow.prototype.SetCloseButtonAction = function(handler) {
        this.CloseButtonAction = handler;
        return this;
    };
    ModalWindow.prototype.FullScreen = function() {
        return this.WidthPercent(100).HeightPercent(100);
    };
    ModalWindow.prototype.HideOnClose = function() {
        var _this = this;
        this.CloseButtonAction = function() {
            return _this.HideWindow();
        };
        return this;
    };
    ModalWindow.prototype.OpenWindow = function() {
        var _this = this;
        var _a, _b;
        if (this.CloseButton) this.Append(this.CloseButton);
        this.Append(this.header, this.content, this.footer);
        if (this.blurBackground) (_a = (0, _1.$)(ModalWindow.Hook)) === null || _a === void 0 || _a.Append(this.shutter.Element);
        (_b = (0, _1.$)(ModalWindow.Hook)) === null || _b === void 0 || _b.Append(this.Element);
        if (this.lockScroll) this.LockPageScroll();
        if (this.closeOnClickAway) this.Shutter.OnClick(function() {
            return _this.CloseButtonAction();
        });
        return this;
    };
    ModalWindow.prototype.Title = function(title) {
        this.headerTitle.Text(title);
        return this;
    };
    ModalWindow.prototype.CloseWindow = function(onClosePayload) {
        if (this.onBeforeCloseOrHideWindow.AreAny) {
            var allowClose = this.onBeforeCloseOrHideWindow.CallAndGatherReturnValue();
            if (allowClose.some(function(x) {
                return x == false;
            })) return this;
        }
        this.RemoveWindow();
        this.onCloseOrHideWindow.Call(onClosePayload);
        return this;
    };
    ModalWindow.prototype.RemoveWindow = function() {
        var _a, _b;
        this.Clear();
        try {
            (_a = (0, _1.$)(ModalWindow.Hook)) === null || _a === void 0 || _a.removeChild(this.Element);
            if (this.blurBackground) (_b = (0, _1.$)(ModalWindow.Hook)) === null || _b === void 0 || _b.removeChild(this.shutter.Element);
        } catch (error) {
            throw new Error("[truffle] You are trying to remove element (that window) that is not a child of ".concat(ModalWindow.Hook, ". Make sure Root.Hook and ModalWindow.Root are the same. Remember to not attach ModalWindow to any other element with .Append()"));
        }
        if (this.lockScroll) this.UnlockPageScroll();
    };
    ModalWindow.prototype.ExitWindow = function(onExitPayload) {
        this.RemoveWindow();
        this.onExitWindow.Call(onExitPayload);
        return this;
    };
    ModalWindow.prototype.ShowWindow = function() {
        var _a;
        if (this.wasEverOpen == false) {
            this.OpenWindow();
            this.wasEverOpen = true;
        }
        (_a = (0, _1.$)(ModalWindow.Hook)) === null || _a === void 0 || _a.Append(this.shutter.Element);
        this.Show().ZIndex(100);
        return this;
    };
    ModalWindow.prototype.HideWindow = function() {
        var _a;
        if (this.blurBackground) (_a = (0, _1.$)(ModalWindow.Hook)) === null || _a === void 0 || _a.removeChild(this.shutter.Element);
        this.Hide();
        this.onCloseOrHideWindow.Call();
        if (this.lockScroll) this.UnlockPageScroll();
        return this;
    };
    ModalWindow.prototype.Header = function(cnt) {
        cnt(this.header);
        return this;
    };
    ModalWindow.prototype.Content = function(cnt) {
        cnt(this.content);
        return this;
    };
    ModalWindow.prototype.AddContent = function() {
        var _a;
        var elements = [];
        for(var _i = 0; _i < arguments.length; _i++)elements[_i] = arguments[_i];
        (_a = this.content).Append.apply(_a, elements);
        return this;
    };
    ModalWindow.prototype.PrependContent = function() {
        var _a;
        var elements = [];
        for(var _i = 0; _i < arguments.length; _i++)elements[_i] = arguments[_i];
        (_a = this.content).Prepend.apply(_a, elements);
        return this;
    };
    ModalWindow.prototype.TextContent = function(text) {
        this.content.Text(text);
        return this;
    };
    ModalWindow.prototype.Footer = function(callback) {
        callback(this.footer);
        return this;
    };
    ModalWindow.prototype.AddToFooter = function() {
        var _a;
        var elements = [];
        for(var _i = 0; _i < arguments.length; _i++)elements[_i] = arguments[_i];
        (_a = this.footer).Append.apply(_a, elements);
        return this;
    };
    ModalWindow.prototype.OnCloseWindow = function(handler) {
        this.onCloseOrHideWindow.Add(handler);
        return this;
    };
    ModalWindow.prototype.OnExitWindow = function(handler) {
        this.onExitWindow.Add(handler);
        return this;
    };
    ModalWindow.prototype.OnBeforeCloseWindow = function(handler) {
        this.onBeforeCloseOrHideWindow.Add(handler);
        return this;
    };
    ModalWindow.prototype.LockPageScroll = function() {
        document.body.classList.add("tf-stop-scrolling");
    };
    ModalWindow.prototype.UnlockPageScroll = function() {
        document.body.classList.remove("tf-stop-scrolling");
    };
    ModalWindow.Name = "ModalWindow";
    ModalWindow.DefaultCssClasses = "";
    ModalWindow.Hook = "body";
    return ModalWindow;
}(Div_1.Div);
exports.ModalWindow = ModalWindow;

},{"cf334dc5a5963b0e":"i3MOE","226d4539ad2e5fac":"3xTOB","67977fdda436f220":"6b4fV","97fc6d5f930c1735":"bbB3D","cf0de913937fffc9":"bDa7U","918228f512b63e10":"lEDLc"}],"lEDLc":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shutter = void 0;
var Div_1 = require("7f411cbb1629db2c");
var Shutter = /** @class */ function(_super) {
    __extends(Shutter, _super);
    function Shutter() {
        return _super.call(this, "tf-shutter") || this;
    }
    return Shutter;
}(Div_1.Div);
exports.Shutter = Shutter;

},{"7f411cbb1629db2c":"6b4fV"}],"edRFt":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RadioSwitchesBuilder = void 0;
var RefComponentBase_1 = require("5c6e8112f1450c1a");
var RadioSwitchesBuilder = /** @class */ function(_super) {
    __extends(RadioSwitchesBuilder, _super);
    function RadioSwitchesBuilder(ref) {
        var _this = _super.call(this, "div", ref) || this;
        _this.switches = {};
        _this.classWhenActive = {};
        return _this;
    }
    RadioSwitchesBuilder.prototype.Refresh = function() {
        var _this = this;
        this.switches.Keys().forEach(function(activator) {
            var cmp = _this.switches[activator];
            var classWhenActive = _this.classWhenActive[activator];
            if (_this.ref.value === activator) cmp.AddClass(classWhenActive);
            else cmp.RemoveClass(classWhenActive);
        });
    };
    RadioSwitchesBuilder.prototype.AddSwitch = function(activator, cmp, cssClassWhenActive) {
        var _this = this;
        this.switches[activator] = cmp;
        this.classWhenActive[activator] = cssClassWhenActive;
        cmp.OnClick(function() {
            return _this.ref.value = activator;
        });
        if (this.ref.value == activator) cmp.AddClass(cssClassWhenActive);
        if (this.ref.value == "") this.ref.value = activator;
        this.Append(cmp);
        return this;
    };
    return RadioSwitchesBuilder;
}(RefComponentBase_1.RefComponentBase);
exports.RadioSwitchesBuilder = RadioSwitchesBuilder;

},{"5c6e8112f1450c1a":"anBYP"}],"1n07n":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DestroyingContentSwitcher = void 0;
var RefComponentBase_1 = require("70c490d3b8924ca0");
var DestroyingContentSwitcher = /** @class */ function(_super) {
    __extends(DestroyingContentSwitcher, _super);
    function DestroyingContentSwitcher(ref) {
        var _this = _super.call(this, "div", ref) || this;
        _this.contents = {};
        return _this;
    }
    DestroyingContentSwitcher.prototype.AddContent = function(activator, cmp) {
        this.contents[activator.toString()] = cmp;
        if (activator === this.ref.value) this.Append(cmp());
        else if (this.defaultContent) this.Append(this.defaultContent());
        return this;
    };
    DestroyingContentSwitcher.prototype.AddDefaultContent = function(cmp) {
        this.defaultContent = cmp;
        if (!this.contents.Keys().includes(this.ref.value.toString())) this.Append(cmp());
        return this;
    };
    DestroyingContentSwitcher.prototype.Refresh = function() {
        var _a, _b;
        var c = (_b = (_a = this.contents)[this.ref.value.toString()]) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.Clear();
        if (c) this.Append(c);
        else if (this.defaultContent) this.Append(this.defaultContent());
    };
    DestroyingContentSwitcher.Name = "DestroyingContentSwitcher";
    return DestroyingContentSwitcher;
}(RefComponentBase_1.RefComponentBase);
exports.DestroyingContentSwitcher = DestroyingContentSwitcher;

},{"70c490d3b8924ca0":"anBYP"}],"lm3Qd":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DestroyingPatternContentSwitcher = void 0;
var RefComponentBase_1 = require("21d8924ba7662549");
var PatternExtractor_1 = require("28939b7eda7a9afd");
var DestroyingPatternContentSwitcher = /** @class */ function(_super) {
    __extends(DestroyingPatternContentSwitcher, _super);
    function DestroyingPatternContentSwitcher(ref) {
        var _this = _super.call(this, "div", ref) || this;
        _this.contents = {}; // TODO: to jest słabe, trzeba by to wynieść do jakiejś osobnej klasy
        return _this;
    }
    DestroyingPatternContentSwitcher.prototype.AddContent = function(pattern, cmp) {
        this.contents[pattern] = cmp;
        var extractor = new PatternExtractor_1.PatternExtractor(pattern);
        var params = extractor.Extract(this.ref.value);
        if (params == null) return this;
        this.Append(cmp(params));
        return this;
    };
    DestroyingPatternContentSwitcher.prototype.AddDefaultContent = function(defaultCmp) {
        this.defaultContent = defaultCmp;
        if (!this.IsRefOneOfPatterns()) this.Append(defaultCmp());
        return this;
    };
    DestroyingPatternContentSwitcher.prototype.IsRefOneOfPatterns = function() {
        for(var _i = 0, _a = this.contents.Keys(); _i < _a.length; _i++){
            var pattern = _a[_i];
            var extractor = new PatternExtractor_1.PatternExtractor(pattern);
            var params = extractor.Extract(this.ref.value);
            if (params != null) return true;
        }
        return false;
    };
    DestroyingPatternContentSwitcher.prototype.FindPatternAndParams = function() {
        for(var _i = 0, _a = this.contents.Keys(); _i < _a.length; _i++){
            var pattern = _a[_i];
            var extractor = new PatternExtractor_1.PatternExtractor(pattern);
            var params = extractor.Extract(this.ref.value);
            if (params != null) return {
                found: true,
                pattern: pattern,
                params: params
            };
        }
        return {
            found: false,
            pattern: null,
            params: null
        };
    };
    DestroyingPatternContentSwitcher.prototype.Refresh = function() {
        this.Clear();
        var searchResult = this.FindPatternAndParams();
        if (searchResult.found) this.Append(this.contents[searchResult.pattern](searchResult.params));
        else if (this.defaultContent) this.Append(this.defaultContent());
    };
    DestroyingPatternContentSwitcher.Name = "DestroyingPatternContentSwitcher";
    return DestroyingPatternContentSwitcher;
}(RefComponentBase_1.RefComponentBase);
exports.DestroyingPatternContentSwitcher = DestroyingPatternContentSwitcher;

},{"21d8924ba7662549":"anBYP","28939b7eda7a9afd":"10sQt"}],"jbzEF":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HidingContentSwitcher = void 0;
var RefComponentBase_1 = require("f68beacd4d9c934");
var HidingContentSwitcher = /** @class */ function(_super) {
    __extends(HidingContentSwitcher, _super);
    function HidingContentSwitcher(ref) {
        var _this = _super.call(this, "div", ref) || this;
        _this.contents = {};
        return _this;
    }
    HidingContentSwitcher.prototype.AddContent = function(activator, cmp) {
        this.contents[activator.toString()] = cmp();
        if (activator === this.ref.value) this.Append(this.contents[activator.toString()]);
        return this;
    };
    HidingContentSwitcher.prototype.AddDefaultContent = function(cmp) {
        this.defaultContent = cmp();
        if (!this.IsOneOfTheContents()) this.Append(this.defaultContent);
        return this;
    };
    HidingContentSwitcher.prototype.IsOneOfTheContents = function() {
        return this.contents.Keys().includes(this.ref.value.toString());
    };
    HidingContentSwitcher.prototype.Refresh = function() {
        var _a, _b;
        this.contents.Values().forEach(function(x) {
            return x.Hide();
        });
        var newContent = this.contents[this.ref.value.toString()];
        if (newContent) {
            (_a = this.defaultContent) === null || _a === void 0 || _a.Hide();
            if (!this.Exist(newContent)) this.Append(newContent);
            newContent.Show();
        } else {
            if (this.defaultContent && !this.Exist(this.defaultContent)) this.Append(this.defaultContent);
            (_b = this.defaultContent) === null || _b === void 0 || _b.Show();
        }
    };
    HidingContentSwitcher.Name = "HidingContentSwitcher";
    return HidingContentSwitcher;
}(RefComponentBase_1.RefComponentBase);
exports.HidingContentSwitcher = HidingContentSwitcher;

},{"f68beacd4d9c934":"anBYP"}],"5kGpW":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonTabs = void 0;
var Ref_1 = require("deda67b548190fb6");
var Div_1 = require("e2806e6c81c7b6ae");
var Button_1 = require("c3a6cac398b179c5");
var DestroyingContentSwitcher_1 = require("6bc1d81ad3893db7");
var RadioSwitchesBuilder_1 = require("5604d955a4f3ab0f");
var ButtonTabs = /** @class */ function(_super) {
    __extends(ButtonTabs, _super);
    function ButtonTabs(ref) {
        if (ref === void 0) ref = new Ref_1.Ref("");
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.switches = new RadioSwitchesBuilder_1.RadioSwitchesBuilder(_this.ref);
        _this.content = new DestroyingContentSwitcher_1.DestroyingContentSwitcher(_this.ref);
        _this.Append(_this.switches);
        _this.Append(_this.content);
        return _this;
    }
    ButtonTabs.prototype.Add = function(label, content) {
        this.switches.AddSwitch(label, new Button_1.Button(label), "uk-button-danger");
        this.content.AddContent(label, content);
        return this;
    };
    return ButtonTabs;
}(Div_1.Div);
exports.ButtonTabs = ButtonTabs;

},{"deda67b548190fb6":"9pTSI","e2806e6c81c7b6ae":"6b4fV","c3a6cac398b179c5":"5iEcY","6bc1d81ad3893db7":"1n07n","5604d955a4f3ab0f":"edRFt"}],"39DBG":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalButtonTabs = void 0;
var Button_1 = require("c2bd41423634260e");
var AutoWidthTwoColumns_1 = require("7d2f14a628e7295");
var DestroyingContentSwitcher_1 = require("c8852886509031bd");
var Ref_1 = require("1b32d19a4c530e51");
var RadioSwitchesBuilder_1 = require("a2f97390cfcc5605");
var VerticalButtonTabs = /** @class */ function(_super) {
    __extends(VerticalButtonTabs, _super);
    function VerticalButtonTabs(ref) {
        if (ref === void 0) ref = new Ref_1.Ref("");
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.switcher = new RadioSwitchesBuilder_1.RadioSwitchesBuilder(_this.ref);
        _this.contentSwitcher = new DestroyingContentSwitcher_1.DestroyingContentSwitcher(_this.ref);
        _this.useActivator = function(label) {
            return new Button_1.Button(label);
        };
        _this.LeftColumn.Append(_this.switcher);
        _this.RightColumn.Append(_this.contentSwitcher);
        return _this;
    }
    VerticalButtonTabs.prototype.Add = function(label, content) {
        this.switcher.AddSwitch(label, this.useActivator(label), "uk-button-danger");
        this.contentSwitcher.AddContent(label, content);
        return this;
    };
    VerticalButtonTabs.prototype.UseActivator = function(fn) {
        this.useActivator = fn;
        return this;
    };
    return VerticalButtonTabs;
}(AutoWidthTwoColumns_1.AutoWidthTwoColumns);
exports.VerticalButtonTabs = VerticalButtonTabs;

},{"c2bd41423634260e":"5iEcY","7d2f14a628e7295":"4a1ud","c8852886509031bd":"1n07n","1b32d19a4c530e51":"9pTSI","a2f97390cfcc5605":"edRFt"}],"dx5uv":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableBuilder = void 0;
var __1 = require("8cf8ba4736762bf");
var TableBody_1 = require("96a564b76c6ef447");
var TableCell_1 = require("14ed8064eba62aca");
var TableRow_1 = require("acb4d2b451b3fddb");
var Table_1 = require("ab249c5394c5a0b4");
var TableColumn_1 = require("3c0b993a534af927");
var TableHeaderV2_1 = require("4e56a9b0d5817341");
var TableBuilder = /** @class */ function(_super) {
    __extends(TableBuilder, _super);
    function TableBuilder(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.columns = [];
        _this.body = new TableBody_1.TableBody();
        _this.whenEmpty = new __1.TextLabel("No results").Style("display: block; margin: 48px 0; text-align: center; white-space: nowrap;");
        _this.Class("uk-table uk-table-small uk-table-divider uk-table-middle");
        _this.Margin(0);
        data.AddSubscriber(_this);
        return _this;
    }
    TableBuilder.prototype.Reset = function() {
        this.columns = [];
        this.Clear();
        return this;
    };
    TableBuilder.prototype.WhenEmpty = function(component) {
        this.whenEmpty = component;
        return this;
    };
    TableBuilder.prototype.Refresh = function() {
        var _this = this;
        this.body.Clear();
        if (this.data.Items.length === 0) this.body.Append(new TableRow_1.TableRow().Append(new TableCell_1.TableCell().Merge(this.columns.length).Append(this.whenEmpty)));
        else this.data.Items.forEach(function(record) {
            var row = new TableRow_1.TableRow();
            _this.columns.forEach(function(c) {
                var cell = new TableCell_1.TableCell();
                var elem = c.Mapping(record, row, cell, _this.body, _this);
                var m;
                if (!Array.isArray(elem)) m = [
                    elem
                ];
                else m = elem;
                m.forEach(function(e) {
                    cell.Append(e);
                });
                row.Append(cell);
            });
            _this.body.Append(row);
        });
    };
    TableBuilder.prototype.Build = function() {
        this.Append(new TableHeaderV2_1.TableHeaderV2(this.columns.map(function(x) {
            return x.Headers;
        })));
        this.Refresh();
        this.Append(this.body);
        return this;
    };
    TableBuilder.prototype.AddColumn = function(headers, mapping) {
        if (!Array.isArray(headers)) headers = [
            headers
        ];
        this.columns.push(new TableColumn_1.TableColumn(headers, mapping));
        return this;
    };
    TableBuilder.Name = "TableBuilder";
    return TableBuilder;
}(Table_1.Table);
exports.TableBuilder = TableBuilder;

},{"8cf8ba4736762bf":"2JFzm","96a564b76c6ef447":"f7L9s","14ed8064eba62aca":"cDRvC","acb4d2b451b3fddb":"aNAwH","ab249c5394c5a0b4":"lALCT","3c0b993a534af927":"krrdT","4e56a9b0d5817341":"78CpK"}],"f7L9s":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableBody = void 0;
var ComponentBase_1 = require("2eb0042bd1407a6d");
var TableBody = /** @class */ function(_super) {
    __extends(TableBody, _super); // TODO: no type for tbody?
    function TableBody() {
        return _super.call(this, "tbody") || this;
    }
    return TableBody;
}(ComponentBase_1.ComponentBase);
exports.TableBody = TableBody;

},{"2eb0042bd1407a6d":"8SnDZ"}],"cDRvC":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableCell = void 0;
var ComponentBase_1 = require("8db427adce3950e0");
var TableCell = /** @class */ function(_super) {
    __extends(TableCell, _super);
    function TableCell(str) {
        var _this = _super.call(this, "td") || this;
        if (str) _this.element.innerText = str;
        return _this;
    }
    TableCell.prototype.Merge = function(cellsOnRightCount) {
        this.Attribute("colspan", cellsOnRightCount.toString());
        return this;
    };
    return TableCell;
}(ComponentBase_1.ComponentBase);
exports.TableCell = TableCell;

},{"8db427adce3950e0":"8SnDZ"}],"aNAwH":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableRow = void 0;
var ComponentBase_1 = require("69ba81c459d8f2ae");
var TableCell_1 = require("66ef4e20efb84e7b");
var TableRow = /** @class */ function(_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super.call(this, "tr") || this;
    }
    TableRow.prototype.AddCells = function() {
        var _this = this;
        var cells = [];
        for(var _i = 0; _i < arguments.length; _i++)cells[_i] = arguments[_i];
        cells.forEach(function(c) {
            return _this.Append(new TableCell_1.TableCell(c));
        });
        return this;
    };
    return TableRow;
}(ComponentBase_1.ComponentBase);
exports.TableRow = TableRow;

},{"69ba81c459d8f2ae":"8SnDZ","66ef4e20efb84e7b":"cDRvC"}],"lALCT":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = void 0;
var __1 = require("86d1c1c9d7c19ac8");
var Table = /** @class */ function(_super) {
    __extends(Table, _super);
    function Table() {
        return _super.call(this, "table") || this;
    }
    Table.prototype.AddHeaders = function() {
        var headers = [];
        for(var _i = 0; _i < arguments.length; _i++)headers[_i] = arguments[_i];
        this.Append(new __1.TableHeader(headers));
        return this;
    };
    Table.prototype.AddRow = function() {
        var _a;
        var cells = [];
        for(var _i = 0; _i < arguments.length; _i++)cells[_i] = arguments[_i];
        this.Append((_a = new __1.TableRow()).AddCells.apply(_a, cells));
        return this;
    };
    return Table;
}(__1.ComponentBase);
exports.Table = Table;

},{"86d1c1c9d7c19ac8":"2JFzm"}],"krrdT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableColumn = void 0;
var TableColumn = /** @class */ function() {
    function TableColumn(Headers, Mapping) {
        this.Headers = Headers;
        this.Mapping = Mapping;
    }
    return TableColumn;
}();
exports.TableColumn = TableColumn;

},{}],"78CpK":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHeaderV2 = void 0;
var __1 = require("bf8e26fa7666db");
var TableHeaderV2 = /** @class */ function(_super) {
    __extends(TableHeaderV2, _super);
    function TableHeaderV2(columnsHeaders) {
        var _this = _super.call(this, "thead") || this;
        var maxRows = Math.max.apply(Math, columnsHeaders.map(function(hs) {
            return hs.length;
        }));
        var _loop_1 = function(rowIndex) {
            var cells = columnsHeaders.map(function(x) {
                return x[rowIndex];
            });
            this_1.Append(new __1.TableHeaderRow(cells));
        };
        var this_1 = this;
        for(var rowIndex = 0; rowIndex < maxRows; rowIndex++)_loop_1(rowIndex);
        return _this;
    }
    return TableHeaderV2;
}(__1.ComponentBase);
exports.TableHeaderV2 = TableHeaderV2;

},{"bf8e26fa7666db":"2JFzm"}],"cB0tY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHeader = void 0;
var ComponentBase_1 = require("18c598a248706813");
var TableHeaderRow_1 = require("ca066b96184a7bea");
var TableHeader = /** @class */ function(_super) {
    __extends(TableHeader, _super);
    function TableHeader(headers) {
        var _this = _super.call(this, "thead") || this;
        if (headers) _this.Append(new TableHeaderRow_1.TableHeaderRow(headers));
        return _this;
    }
    return TableHeader;
}(ComponentBase_1.ComponentBase);
exports.TableHeader = TableHeader;

},{"18c598a248706813":"8SnDZ","ca066b96184a7bea":"5j9P6"}],"5j9P6":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHeaderRow = void 0;
var ComponentBase_1 = require("21cac93eb6628104");
var TableHeaderCell_1 = require("1fe6e40cad70fadd");
var TableHeaderRow = /** @class */ function(_super) {
    __extends(TableHeaderRow, _super);
    function TableHeaderRow(strings) {
        var _this = _super.call(this, "tr") || this;
        strings.forEach(function(str) {
            _this.Append(new TableHeaderCell_1.TableHeaderCell(str));
        });
        return _this;
    }
    return TableHeaderRow;
}(ComponentBase_1.ComponentBase);
exports.TableHeaderRow = TableHeaderRow;

},{"21cac93eb6628104":"8SnDZ","1fe6e40cad70fadd":"95eZp"}],"95eZp":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHeaderCell = void 0;
var ComponentBase_1 = require("abfc4e5a03cd175c");
var TableHeaderCell = /** @class */ function(_super) {
    __extends(TableHeaderCell, _super);
    function TableHeaderCell(element) {
        var _this = _super.call(this, "th") || this;
        if (!element) return _this;
        if (typeof element == "string") _this.Text(element);
        else _this.Append(element);
        return _this;
    }
    return TableHeaderCell;
}(ComponentBase_1.ComponentBase);
exports.TableHeaderCell = TableHeaderCell;

},{"abfc4e5a03cd175c":"8SnDZ"}],"6NwTc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonViewerConfig = void 0;
var JsonViewerConfig = /** @class */ function() {
    function JsonViewerConfig() {
        this.foldAll = true;
        this.foldSymbol = "\u2795";
        this.unfoldSymbol = "\u2796";
        this.keyPrinter = function(key) {
            return "\u25FE " + key + ":";
        };
        this.keyStyle = "color: #222";
        this.stringStyle = "color: green";
        this.numberStyle = "color: blue";
        this.boolStyle = "color: violet";
        this.nullStyle = "color: pink;";
        this.typeInfoStyle = "color: #aaa";
    }
    return JsonViewerConfig;
}();
exports.JsonViewerConfig = JsonViewerConfig;

},{}],"erOp2":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonViewer = void 0;
var TwoFloatingColumns_1 = require("28232d9ded333d5e");
var Link_1 = require("e133a2d25bd3232a");
var Div_1 = require("da7f086d4e2a66ee");
var JsonViewerConfig_1 = require("b94ccfe1be15918f");
var Span_1 = require("74f6d5c25334980e");
var JsonViewer = /** @class */ function(_super) {
    __extends(JsonViewer, _super);
    function JsonViewer(obj, key, config) {
        if (key === void 0) key = "";
        if (config === void 0) config = new JsonViewerConfig_1.JsonViewerConfig();
        var _this = _super.call(this) || this;
        _this.config = config;
        var tk = new TwoFloatingColumns_1.TwoFloatingColumns();
        var objType = typeof obj;
        var isArray = Array.isArray(obj);
        if (key) tk.LeftColumn.Append(new Span_1.Span(_this.config.keyPrinter(key)).FloatLeft().MarginRight(6).Style(_this.config.keyStyle));
        if (obj === null) tk.RightColumn.Append(new Span_1.Span("null").Margin(8).MarginLeft(0).Style(_this.config.nullStyle));
        else if (objType === "string") {
            tk.RightColumn.Append(new Span_1.Span('"'.concat(obj, '"')).Margin(8).MarginLeft(0).MarginRight(4).Style(_this.config.stringStyle));
            tk.RightColumn.Append(new Span_1.Span("(".concat(obj.length, " chars)")).Style(_this.config.typeInfoStyle));
        } else if (objType === "number") tk.RightColumn.Append(new Span_1.Span(obj.toString()).Margin(8).MarginLeft(0).Style(_this.config.numberStyle));
        else if (objType === "boolean") tk.RightColumn.Append(new Span_1.Span(obj ? "true" : "false").Margin(8).MarginLeft(0).Style(_this.config.boolStyle));
        else if (isArray) {
            if (obj.length === 0) tk.RightColumn.Append(new Span_1.Span("(empty array)").Color("#aaa"));
            else {
                var folder_1 = new Link_1.Link(_this.config.foldSymbol).NoDecorationOnHover().FloatLeft().MarginLeft(4).CursorPointer();
                tk.LeftColumn.Append(new Span_1.Span("(array of ".concat(obj.length, " ").concat(_this.GetType(obj[0])).concat(obj.length > 1 ? "s" : "", ")")).FloatLeft().Style(_this.config.typeInfoStyle));
                tk.LeftColumn.Append(folder_1).OnClick(function() {
                    folder_1.Text(tk.RightColumn.IsVisible() ? _this.config.foldSymbol : _this.config.unfoldSymbol);
                    tk.RightColumn.Toggle();
                });
                if (_this.config.foldAll) tk.RightColumn.Hide();
                tk.RightColumn.MarginTop(23).MarginLeft(-16);
                obj.forEach(function(e, i) {
                    return tk.RightColumn.Append(new JsonViewer(e, i.toString(), _this.config));
                });
            }
        } else if (objType === "object") {
            var keys = Object.keys(obj);
            if (keys.length === 0) tk.RightColumn.Append(new Span_1.Span("(empty object)").Style(_this.config.typeInfoStyle));
            else {
                if (key) {
                    var folder_2 = new Link_1.Link(_this.config.foldSymbol).NoDecorationOnHover().FloatLeft().MarginLeft(4).CursorPointer();
                    tk.LeftColumn.Append(new Span_1.Span("(".concat(keys.length, " field").concat(keys.length > 1 ? "s" : "", " object)")).FloatLeft().Style(_this.config.typeInfoStyle));
                    tk.LeftColumn.Append(folder_2).OnClick(function() {
                        folder_2.Text(tk.RightColumn.IsVisible() ? _this.config.foldSymbol : _this.config.unfoldSymbol);
                        tk.RightColumn.Toggle();
                    });
                    tk.RightColumn.MarginTop(23).MarginLeft(-16);
                    if (_this.config.foldAll) tk.RightColumn.Hide();
                }
                keys.forEach(function(k) {
                    var v = obj[k];
                    tk.RightColumn.Append(new JsonViewer(v, k, _this.config));
                });
            }
        }
        _this.Append(tk);
        _this.Append(new Div_1.Div().ClearBoth());
        return _this;
    }
    JsonViewer.prototype.GetType = function(obj) {
        var objType = typeof obj;
        var isArray = Array.isArray(obj);
        if (isArray && obj.length > 0) return "array of ".concat(this.GetType(obj[0]), "s");
        else if (isArray) return "array";
        else return objType;
    };
    JsonViewer.Name = "JsonViewer";
    return JsonViewer;
}(Div_1.Div);
exports.JsonViewer = JsonViewer;

},{"28232d9ded333d5e":"98XcF","e133a2d25bd3232a":"bDa7U","da7f086d4e2a66ee":"6b4fV","b94ccfe1be15918f":"6NwTc","74f6d5c25334980e":"bbB3D"}],"hy7Qs":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snack = void 0;
var _1 = require("e878201847bd199e");
var Div_1 = require("2f86dc87656df1c9");
var Span_1 = require("7522045df2ebe7fa");
var Snack = /** @class */ function(_super) {
    __extends(Snack, _super);
    function Snack(header, content, _a) {
        if (content === void 0) content = "";
        var _b = _a === void 0 ? {} : _a, _c = _b.autoCloseTimeout, autoCloseTimeout = _c === void 0 ? 4500 : _c, _d = _b.showCloseButton, showCloseButton = _d === void 0 ? true : _d, _e = _b.clickAnywhereToClose, clickAnywhereToClose = _e === void 0 ? false : _e;
        var _f;
        var _this = _super.call(this) || this;
        _this.Class(Snack.DefaultCssClasses);
        _this.Append(new Div_1.Div().Append(header).Class("tf-snack-label"), new Div_1.Div().Append(content).Class("tf-snack-text"), showCloseButton && new Span_1.Span("x").Class("tf-snack-x").OnClick(function() {
            return _this.Close();
        }));
        if (clickAnywhereToClose) _this.OnClick(function() {
            _this.Close();
        });
        (_f = (0, _1.$)("body")) === null || _f === void 0 || _f.Append(_this.Element);
        if (autoCloseTimeout) setTimeout(function() {
            return _this.Close();
        }, autoCloseTimeout);
        return _this;
    }
    Snack.prototype.Close = function() {
        var _a;
        (_a = (0, _1.$)("body")) === null || _a === void 0 || _a.Remove(this.Element);
        return this;
    };
    Snack.Name = "Snack";
    Snack.DefaultCssClasses = "tf-snack";
    return Snack;
}(Div_1.Div);
exports.Snack = Snack;

},{"e878201847bd199e":"i3MOE","2f86dc87656df1c9":"6b4fV","7522045df2ebe7fa":"bbB3D"}],"1vsdO":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BasicPaginator = void 0;
var Label_1 = require("ab012d6037c61c33");
var __1 = require("8de23fa6640b84b0");
var PaginatorBrain_1 = require("fdccf30d30ecb360");
var BasicPaginator = /** @class */ function(_super) {
    __extends(BasicPaginator, _super);
    function BasicPaginator(_start, _count, _total, _filtered) {
        var _this = _super.call(this) || this;
        _this._start = _start;
        _this._count = _count;
        _this._total = _total;
        _this._filtered = _filtered;
        _this.Brain = new PaginatorBrain_1.PaginatorBrain(_this._start, _this._count, _this._total, _this._filtered);
        _this.goToFirstButton = new __1.Button("\xab").FontSize(18).Padding(0, 14).OnClick(function() {
            return _this.Brain.GoToFirst();
        });
        _this.gotoPreviousButton = new __1.Button("\u2039").FontSize(18).Padding(0, 14).OnClick(function() {
            return _this.Brain.GoToPreviousPage();
        });
        _this.display = new Label_1.Label(_this.Brain.display).Style("vertical-align: middle; margin: 0 16px");
        _this.gotoNextButton = new __1.Button("\u203A").FontSize(18).Padding(0, 14).OnClick(function() {
            return _this.Brain.GoToNextPage();
        });
        _this.gotoLastButton = new __1.Button("\xbb").FontSize(18).Padding(0, 14).OnClick(function() {
            return _this.Brain.GoToLast();
        });
        return _this;
    }
    BasicPaginator.prototype.AddGoToFirstButton = function() {
        this.Append(this.goToFirstButton);
        return this;
    };
    BasicPaginator.prototype.AddGoToPreviousButton = function() {
        this.Append(this.gotoPreviousButton);
        return this;
    };
    BasicPaginator.prototype.AddDisplay = function() {
        this.Append(this.display);
        return this;
    };
    BasicPaginator.prototype.AddGoToNextButton = function() {
        this.Append(this.gotoNextButton);
        return this;
    };
    BasicPaginator.prototype.AddGoToLastButton = function() {
        this.Append(this.gotoLastButton);
        return this;
    };
    BasicPaginator.prototype.AddPagesCountSwitch = function(pageSizes) {
        var _this = this;
        if (pageSizes === void 0) pageSizes = [
            5,
            10,
            20
        ];
        var pageSizesOptions = pageSizes.map(function(x) {
            return new __1.SelectOption("".concat(x, " ").concat(_this.Brain.options.PerPageTranslation), x);
        });
        var pagesCountSwitch = new __1.Select(this._count, pageSizesOptions).ModifyAfterChange(function(v) {
            return +v;
        }).WidthAuto();
        this.Append(pagesCountSwitch);
        return this;
    };
    return BasicPaginator;
}(__1.Div);
exports.BasicPaginator = BasicPaginator;

},{"ab012d6037c61c33":"3zAmj","8de23fa6640b84b0":"2JFzm","fdccf30d30ecb360":"WP4oi"}],"WP4oi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaginatorBrain = exports.PaginatorBrainOptions = void 0;
var Ref_1 = require("fe156738c7441cfb");
var PaginatorBrainOptions = /** @class */ function() {
    function PaginatorBrainOptions() {
        this.FilteredTranslation = "filtered";
        this.InTotalTranslation = "in total";
        this.NoResultsTranslation = "No results";
        this.PerPageTranslation = "per page";
    }
    return PaginatorBrainOptions;
}();
exports.PaginatorBrainOptions = PaginatorBrainOptions;
var PaginatorBrain = /** @class */ function() {
    function PaginatorBrain(start, count, total, filtered, options) {
        var _this = this;
        if (options === void 0) options = new PaginatorBrainOptions();
        this.start = start;
        this.count = count;
        this.total = total;
        this.filtered = filtered;
        this.options = options;
        this.display = new Ref_1.Ref("");
        this.start.OnChange(function(_) {
            return _this.Refresh();
        });
        this.count.OnChange(function(_) {
            return _this.Refresh();
        });
        this.total.OnChange(function(_) {
            return _this.Refresh();
        });
        this.filtered.OnChange(function(_) {
            return _this.Refresh();
        });
        this.Refresh();
    }
    PaginatorBrain.prototype.Refresh = function() {
        var _a = this.Calc(), start = _a[0], end = _a[1];
        var total = this.total.value;
        var filtered = this.filtered.value;
        if (filtered > 0 && total > 0) {
            start += 1;
            if (start > end) start = end;
        }
        if (start < 0) start = 0;
        if (filtered != total) this.display.value = "".concat(start, " - ").concat(end, " / ").concat(filtered, " ").concat(this.options.FilteredTranslation, " / ").concat(total, " ").concat(this.options.InTotalTranslation);
        else if (start == end && start == 0) this.display.value = this.options.NoResultsTranslation;
        else if (start == end) this.display.value = "".concat(start, " / ").concat(total);
        else this.display.value = "".concat(start, " - ").concat(end, " / ").concat(total);
    };
    PaginatorBrain.prototype.Calc = function() {
        var start = this.start.value;
        var count = this.count.value;
        var last = this.filtered.value;
        var end = 0;
        if (start < 0) start = 0;
        if (start >= last) start = last;
        end = start + count;
        if (end >= last) end = last;
        if (start == end && start > 0) start -= 1;
        this.start.value = start;
        return [
            start,
            end
        ];
    };
    PaginatorBrain.prototype.GoToNextPage = function() {
        this.start.value += this.count.value;
    };
    PaginatorBrain.prototype.GoToPreviousPage = function() {
        this.start.value -= this.count.value;
    };
    PaginatorBrain.prototype.GoToFirst = function() {
        this.start.value = 0;
    };
    PaginatorBrain.prototype.GoToLast = function() {
        this.start.value = this.total.value - 1;
    };
    return PaginatorBrain;
}();
exports.PaginatorBrain = PaginatorBrain;

},{"fe156738c7441cfb":"9pTSI"}],"gcPLr":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimplePaginator = void 0;
var BasicPaginator_1 = require("5ff60889808a84e9");
var SimplePaginator = /** @class */ function(_super) {
    __extends(SimplePaginator, _super);
    function SimplePaginator(start, count, total, filtered) {
        var _this = _super.call(this, start, count, total, filtered) || this;
        _this.start = start;
        _this.count = count;
        _this.total = total;
        _this.filtered = filtered;
        _this.AddGoToFirstButton();
        _this.AddGoToPreviousButton();
        _this.AddDisplay();
        _this.AddGoToNextButton();
        _this.AddGoToLastButton();
        _this.AddPagesCountSwitch([
            5,
            10,
            30
        ]);
        return _this;
    }
    return SimplePaginator;
}(BasicPaginator_1.BasicPaginator);
exports.SimplePaginator = SimplePaginator;

},{"5ff60889808a84e9":"1vsdO"}],"g3onY":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectionPaginator = exports.CollectionPaginatorOptions = void 0;
var RefNumber_1 = require("d18a0b7d100637fe");
var BasicPaginator_1 = require("a4f2e795e964138c");
var CollectionPaginatorOptions = /** @class */ function() {
    function CollectionPaginatorOptions() {
        this.PerPage = [
            10,
            30,
            100
        ];
        this.PerPageStorageKey = "";
    }
    return CollectionPaginatorOptions;
}();
exports.CollectionPaginatorOptions = CollectionPaginatorOptions;
var CollectionPaginator = /** @class */ function(_super) {
    __extends(CollectionPaginator, _super);
    function CollectionPaginator(collectionView, options) {
        var _this = this;
        if (options === void 0) options = new CollectionPaginatorOptions();
        var start = new RefNumber_1.RefNumber(0);
        var count = new RefNumber_1.RefNumber(options.PerPage[0] || 1).Storable(options === null || options === void 0 ? void 0 : options.PerPageStorageKey);
        var total = collectionView.Collection.CountRef;
        var filtered = collectionView.FilteredCount;
        collectionView.See(start, count).Refresh();
        _this = _super.call(this, start, count, total, filtered) || this;
        _this.AddGoToFirstButton();
        _this.AddGoToPreviousButton();
        _this.AddDisplay();
        _this.AddGoToNextButton();
        _this.AddGoToLastButton();
        _this.AddPagesCountSwitch(options.PerPage);
        return _this;
    }
    return CollectionPaginator;
}(BasicPaginator_1.BasicPaginator);
exports.CollectionPaginator = CollectionPaginator;

},{"d18a0b7d100637fe":"eb56X","a4f2e795e964138c":"1vsdO"}],"d7Gai":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = void 0;
var __1 = require("e166971ed5de9a8f");
var Spinner = /** @class */ function(_super) {
    __extends(Spinner, _super);
    function Spinner() {
        var _this = _super.call(this, "div") || this;
        _this.Attribute("uk-spinner").Style("margin-left", "8px");
        return _this;
    }
    return Spinner;
}(__1.ComponentBase);
exports.Spinner = Spinner;

},{"e166971ed5de9a8f":"2JFzm"}],"9WBys":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pie = void 0;
var RefComponentBase_1 = require("f6f5699c4048cdea");
// https://www.freecodecamp.org/news/css-only-pie-chart/
var Pie = /** @class */ function(_super) {
    __extends(Pie, _super);
    function Pie(value) {
        var _this = _super.call(this, "div", value) || this;
        _this.Refresh();
        return _this;
    // this.Style(`--p: ${value}; --b: 22px; --c: #1e87f0;`)
    // this.Text(value.toString() + "%")
    }
    Pie.prototype.Refresh = function() {
        this.Html('<div class="pie" style="--p:'.concat(this.ref.value, ';--b:18px;--c:lightblue;">').concat(this.ref.value, "%</div>"));
    };
    Pie.Name = "Pie";
    return Pie;
}(RefComponentBase_1.RefComponentBase);
exports.Pie = Pie;

},{"f6f5699c4048cdea":"anBYP"}],"iNWL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router);
var _truffle = require("@tblabs/truffle");
class Router {
    GoToHelp() {
        this.Hash.value = `slide/contact`;
    }
    GoToStart() {
        this.Hash.value = `slide/start`;
    }
    GoToSlide(id) {
        this.Hash.value = `slide/${id}`;
    }
    GoBack() {
        history.back();
    }
    constructor(){
        this.Hash = new (0, _truffle.HashRef)();
    }
}

},{"@tblabs/truffle":"2JFzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7CGrr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlideFactory", ()=>SlideFactory);
var _choosePage = require("./Pages/ChoosePage");
var _slidePage = require("./Pages/SlidePage");
class SlideFactory {
    constructor(_router){
        this._router = _router;
    }
    Create(slide) {
        switch(slide.Type){
            case "choose":
                return new (0, _choosePage.ChoosePage)(this._router, slide);
            case "page":
                return new (0, _slidePage.SlidePage)(this._router, slide);
            default:
                throw new Error("No slide for given type");
        }
    }
}

},{"./Pages/ChoosePage":"a34Dn","./Pages/SlidePage":"lK7Sg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a34Dn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChoosePage", ()=>ChoosePage);
var _truffle = require("@tblabs/truffle");
var _page = require("./Page");
var _markdown = require("../Components/Markdown");
var _chooseOption = require("../Components/ChooseOption");
var _center = require("../Components/Center");
class ChoosePage extends (0, _page.Page) {
    constructor(_router, slide){
        super(_router);
        this.middle.Append(new (0, _markdown.Markdown)(slide.Title), new (0, _center.Center)(...slide.Options.map((x)=>new (0, _chooseOption.ChooseOption)(_router, x))));
        this.bottom.Append(new (0, _truffle.Button)("Wr\xf3\u0107", ()=>_router.GoBack()).Color("#fff"));
    }
}

},{"@tblabs/truffle":"2JFzm","./Page":"bUNYJ","../Components/Markdown":"iFvdp","../Components/ChooseOption":"5YuDz","../Components/Center":"4NXbL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUNYJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Page", ()=>Page);
var _truffle = require("@tblabs/truffle");
class Page extends (0, _truffle.Div) {
    constructor(_router){
        super("SlidePage");
        this._router = _router;
        this.top = new (0, _truffle.Div)("top").TextAlignCenter().Append(new (0, _truffle.Link)("\uD83C\uDFE0 Start").OnClick(()=>this._router.GoToStart()).FloatLeft(), new (0, _truffle.Link)("Kontakt \u260E\uFE0F").OnClick(()=>this._router.GoToHelp()).FloatRight());
        this.middle = new (0, _truffle.Div)("middle");
        this.bottom = new (0, _truffle.Div)("bottom");
        this.Append(this.top, this.middle, this.bottom);
    }
    Clear() {
        this.top.Clear();
        this.middle.Clear();
        this.bottom.Clear();
        return this;
    }
}

},{"@tblabs/truffle":"2JFzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFvdp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//
// ADD
//
//      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css" />
//
// TO MAKE IT WORK
//
parcelHelpers.export(exports, "Markdown", ()=>Markdown);
var _truffle = require("@tblabs/truffle");
var _showdown = require("showdown");
var _showdownDefault = parcelHelpers.interopDefault(_showdown);
class Markdown extends (0, _truffle.Div) {
    static{
        this.Name = "Markdown";
    }
    constructor(markdown){
        super();
        this.options = {
            tables: true,
            tasklists: true,
            underline: true,
            strikethrough: true,
            backslashEscapesHTMLTags: true
        };
        this.converter = new (0, _showdownDefault.default).Converter(this.options);
        this.Style("padding: 0; margin: 0;");
        const html = this.converter.makeHtml(markdown);
        this.Html(html);
    }
}

},{"@tblabs/truffle":"2JFzm","showdown":"eYddV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYddV":[function(require,module,exports) {
(function() {
    /**
 * Created by Tivie on 13-07-2015.
 */ function getDefaultOpts(simple) {
        "use strict";
        var defaultOptions = {
            omitExtraWLInCodeBlocks: {
                defaultValue: false,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: false,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: false,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: false,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: false,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: false,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {
                defaultValue: false,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: false,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: false,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
                defaultValue: false,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: false,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: false,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: false,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: false,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: false,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: true,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: false,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: false,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: false,
                describe: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: false,
                describe: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: false,
                describe: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: false,
                describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {
                defaultValue: false,
                describe: "Enables github @mentions",
                type: "boolean"
            },
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: true,
                describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {
                defaultValue: false,
                describe: "Open all links in new windows",
                type: "boolean"
            },
            backslashEscapesHTMLTags: {
                defaultValue: false,
                describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: false,
                describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: false,
                describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            ellipsis: {
                defaultValue: true,
                describe: "Replaces three dots with the ellipsis unicode character",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: false,
                describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: false,
                describe: "Enable support for document metadata (defined at the top of the document between `\xab\xab\xab` and `\xbb\xbb\xbb` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: false,
                describe: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (simple === false) return JSON.parse(JSON.stringify(defaultOptions));
        var ret = {};
        for(var opt in defaultOptions)if (defaultOptions.hasOwnProperty(opt)) ret[opt] = defaultOptions[opt].defaultValue;
        return ret;
    }
    function allOptionsOn() {
        "use strict";
        var options = getDefaultOpts(true), ret = {};
        for(var opt in options)if (options.hasOwnProperty(opt)) ret[opt] = true;
        return ret;
    }
    /**
 * Created by Tivie on 06-01-2015.
 */ // Private properties
    var showdown = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
        },
        original: {
            noHeaderId: true,
            ghCodeBlocks: false
        },
        ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
    };
    /**
 * helper namespace
 * @type {{}}
 */ showdown.helper = {};
    /**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */ showdown.extensions = {};
    /**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */ showdown.setOption = function(key, value) {
        "use strict";
        globalOptions[key] = value;
        return this;
    };
    /**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */ showdown.getOption = function(key) {
        "use strict";
        return globalOptions[key];
    };
    /**
 * Get the global options
 * @static
 * @returns {{}}
 */ showdown.getOptions = function() {
        "use strict";
        return globalOptions;
    };
    /**
 * Reset global options to the default values
 * @static
 */ showdown.resetOptions = function() {
        "use strict";
        globalOptions = getDefaultOpts(true);
    };
    /**
 * Set the flavor showdown should use as default
 * @param {string} name
 */ showdown.setFlavor = function(name) {
        "use strict";
        if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for(var option in preset)if (preset.hasOwnProperty(option)) globalOptions[option] = preset[option];
    };
    /**
 * Get the currently set flavor
 * @returns {string}
 */ showdown.getFlavor = function() {
        "use strict";
        return setFlavor;
    };
    /**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */ showdown.getFlavorOptions = function(name) {
        "use strict";
        if (flavor.hasOwnProperty(name)) return flavor[name];
    };
    /**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */ showdown.getDefaultOptions = function(simple) {
        "use strict";
        return getDefaultOpts(simple);
    };
    /**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */ showdown.subParser = function(name, func) {
        "use strict";
        if (showdown.helper.isString(name)) {
            if (typeof func !== "undefined") parsers[name] = func;
            else {
                if (parsers.hasOwnProperty(name)) return parsers[name];
                else throw Error("SubParser named " + name + " not registered!");
            }
        }
    };
    /**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|object[]|function=} ext
 * @returns {*}
 */ showdown.extension = function(name, ext) {
        "use strict";
        if (!showdown.helper.isString(name)) throw Error("Extension 'name' must be a string");
        name = showdown.helper.stdExtName(name);
        // Getter
        if (showdown.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) throw Error("Extension named " + name + " is not registered!");
            return extensions[name];
        // Setter
        } else {
            // Expand extension if it's wrapped in a function
            if (typeof ext === "function") ext = ext();
            // Ensure extension is an array
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExtension = validate(ext, name);
            if (validExtension.valid) extensions[name] = ext;
            else throw Error(validExtension.error);
        }
    };
    /**
 * Gets all extensions registered
 * @returns {{}}
 */ showdown.getAllExtensions = function() {
        "use strict";
        return extensions;
    };
    /**
 * Remove an extension
 * @param {string} name
 */ showdown.removeExtension = function(name) {
        "use strict";
        delete extensions[name];
    };
    /**
 * Removes all extensions
 */ showdown.resetExtensions = function() {
        "use strict";
        extensions = {};
    };
    /**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */ function validate(extension, name) {
        "use strict";
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
            valid: true,
            error: ""
        };
        if (!showdown.helper.isArray(extension)) extension = [
            extension
        ];
        for(var i = 0; i < extension.length; ++i){
            var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
            if (typeof ext !== "object") {
                ret.valid = false;
                ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
                return ret;
            }
            if (!showdown.helper.isString(ext.type)) {
                ret.valid = false;
                ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
                return ret;
            }
            var type = ext.type = ext.type.toLowerCase();
            // normalize extension type
            if (type === "language") type = ext.type = "lang";
            if (type === "html") type = ext.type = "output";
            if (type !== "lang" && type !== "output" && type !== "listener") {
                ret.valid = false;
                ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
                return ret;
            }
            if (type === "listener") {
                if (showdown.helper.isUndefined(ext.listeners)) {
                    ret.valid = false;
                    ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                    return ret;
                }
            } else if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
            }
            if (ext.listeners) {
                if (typeof ext.listeners !== "object") {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
                    return ret;
                }
                for(var ln in ext.listeners){
                    if (ext.listeners.hasOwnProperty(ln)) {
                        if (typeof ext.listeners[ln] !== "function") {
                            ret.valid = false;
                            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                            return ret;
                        }
                    }
                }
            }
            if (ext.filter) {
                if (typeof ext.filter !== "function") {
                    ret.valid = false;
                    ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
                    return ret;
                }
            } else if (ext.regex) {
                if (showdown.helper.isString(ext.regex)) ext.regex = new RegExp(ext.regex, "g");
                if (!(ext.regex instanceof RegExp)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
                    return ret;
                }
                if (showdown.helper.isUndefined(ext.replace)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                    return ret;
                }
            }
        }
        return ret;
    }
    /**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */ showdown.validateExtension = function(ext) {
        "use strict";
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
        }
        return true;
    };
    /**
 * showdownjs helper functions
 */ if (!showdown.hasOwnProperty("helper")) showdown.helper = {};
    /**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */ showdown.helper.isString = function(a) {
        "use strict";
        return typeof a === "string" || a instanceof String;
    };
    /**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isFunction = function(a) {
        "use strict";
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
    };
    /**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isArray = function(a) {
        "use strict";
        return Array.isArray(a);
    };
    /**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */ showdown.helper.isUndefined = function(value) {
        "use strict";
        return typeof value === "undefined";
    };
    /**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */ showdown.helper.forEach = function(obj, callback) {
        "use strict";
        // check if obj is defined
        if (showdown.helper.isUndefined(obj)) throw new Error("obj param is required");
        if (showdown.helper.isUndefined(callback)) throw new Error("callback param is required");
        if (!showdown.helper.isFunction(callback)) throw new Error("callback param must be a function/closure");
        if (typeof obj.forEach === "function") obj.forEach(callback);
        else if (showdown.helper.isArray(obj)) for(var i = 0; i < obj.length; i++)callback(obj[i], i, obj);
        else if (typeof obj === "object") {
            for(var prop in obj)if (obj.hasOwnProperty(prop)) callback(obj[prop], prop, obj);
        } else throw new Error("obj does not seem to be an array or an iterable object");
    };
    /**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */ showdown.helper.stdExtName = function(s) {
        "use strict";
        return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function escapeCharactersCallback(wholeMatch, m1) {
        "use strict";
        var charCodeToEscape = m1.charCodeAt(0);
        return "\xa8E" + charCodeToEscape + "E";
    }
    /**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */ showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
    /**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */ showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        "use strict";
        // First we have to escape the escape characters so that
        // we can build a character class out of them
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) regexString = "\\\\" + regexString;
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
    };
    /**
 * Unescape HTML entities
 * @param txt
 * @returns {string}
 */ showdown.helper.unescapeHTMLEntities = function(txt) {
        "use strict";
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var rgxFindMatchPos = function(str, left, right, flags) {
        "use strict";
        var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
        do {
            t = 0;
            while(m = x.exec(str)){
                if (l.test(m[0])) {
                    if (!t++) {
                        s = x.lastIndex;
                        start = s - m[0].length;
                    }
                } else if (t) {
                    if (!--t) {
                        end = m.index + m[0].length;
                        var obj = {
                            left: {
                                start: start,
                                end: s
                            },
                            match: {
                                start: s,
                                end: m.index
                            },
                            right: {
                                start: m.index,
                                end: end
                            },
                            wholeMatch: {
                                start: start,
                                end: end
                            }
                        };
                        pos.push(obj);
                        if (!g) return pos;
                    }
                }
            }
        }while (t && (x.lastIndex = s));
        return pos;
    };
    /**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */ showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        "use strict";
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for(var i = 0; i < matchPos.length; ++i)results.push([
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
        ]);
        return results;
    };
    /**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */ showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        "use strict";
        if (!showdown.helper.isFunction(replacement)) {
            var repStr = replacement;
            replacement = function() {
                return repStr;
            };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
            var bits = [];
            if (matchPos[0].wholeMatch.start !== 0) bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            for(var i = 0; i < lng; ++i){
                bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
                if (i < lng - 1) bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
            if (matchPos[lng - 1].wholeMatch.end < str.length) bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            finalStr = bits.join("");
        }
        return finalStr;
    };
    /**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */ showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (regex instanceof RegExp === false) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
    };
    /**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */ showdown.helper.splitAtIndex = function(str, index) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [
            str.substring(0, index),
            str.substring(index)
        ];
    };
    /**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */ showdown.helper.encodeEmailAddress = function(mail) {
        "use strict";
        var encode = [
            function(ch) {
                return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
                return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function(ch) {
                return ch;
            }
        ];
        mail = mail.replace(/./g, function(ch) {
            if (ch === "@") // this *must* be encoded. I insist.
            ch = encode[Math.floor(Math.random() * 2)](ch);
            else {
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
            }
            return ch;
        });
        return mail;
    };
    /**
 *
 * @param str
 * @param targetLength
 * @param padString
 * @returns {string}
 */ showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        "use strict";
        /*jshint bitwise: false*/ // eslint-disable-next-line space-infix-ops
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        /*jshint bitwise: true*/ padString = String(padString || " ");
        if (str.length > targetLength) return String(str);
        else {
            targetLength = targetLength - str.length;
            if (targetLength > padString.length) padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            return String(str) + padString.slice(0, targetLength);
        }
    };
    /**
 * POLYFILLS
 */ // use this instead of builtin is undefined for IE8 compatibility
    if (typeof console === "undefined") console = {
        warn: function(msg) {
            "use strict";
            alert(msg);
        },
        log: function(msg) {
            "use strict";
            alert(msg);
        },
        error: function(msg) {
            "use strict";
            throw msg;
        }
    };
    /**
 * Common regexes.
 * We declare some common regexes to improve performance
 */ showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
    };
    /**
 * EMOJIS LIST
 */ showdown.helper.emojis = {
        "+1": "\ud83d\udc4d",
        "-1": "\ud83d\udc4e",
        "100": "\ud83d\udcaf",
        "1234": "\ud83d\udd22",
        "1st_place_medal": "\ud83e\udd47",
        "2nd_place_medal": "\ud83e\udd48",
        "3rd_place_medal": "\ud83e\udd49",
        "8ball": "\ud83c\udfb1",
        "a": "\ud83c\udd70\uFE0F",
        "ab": "\ud83c\udd8e",
        "abc": "\ud83d\udd24",
        "abcd": "\ud83d\udd21",
        "accept": "\ud83c\ude51",
        "aerial_tramway": "\ud83d\udea1",
        "airplane": "\u2708\uFE0F",
        "alarm_clock": "\u23F0",
        "alembic": "\u2697\uFE0F",
        "alien": "\ud83d\udc7d",
        "ambulance": "\ud83d\ude91",
        "amphora": "\ud83c\udffa",
        "anchor": "\u2693\uFE0F",
        "angel": "\ud83d\udc7c",
        "anger": "\ud83d\udca2",
        "angry": "\ud83d\ude20",
        "anguished": "\ud83d\ude27",
        "ant": "\ud83d\udc1c",
        "apple": "\ud83c\udf4e",
        "aquarius": "\u2652\uFE0F",
        "aries": "\u2648\uFE0F",
        "arrow_backward": "\u25C0\uFE0F",
        "arrow_double_down": "\u23EC",
        "arrow_double_up": "\u23EB",
        "arrow_down": "\u2B07\uFE0F",
        "arrow_down_small": "\ud83d\udd3d",
        "arrow_forward": "\u25B6\uFE0F",
        "arrow_heading_down": "\u2935\uFE0F",
        "arrow_heading_up": "\u2934\uFE0F",
        "arrow_left": "\u2B05\uFE0F",
        "arrow_lower_left": "\u2199\uFE0F",
        "arrow_lower_right": "\u2198\uFE0F",
        "arrow_right": "\u27A1\uFE0F",
        "arrow_right_hook": "\u21AA\uFE0F",
        "arrow_up": "\u2B06\uFE0F",
        "arrow_up_down": "\u2195\uFE0F",
        "arrow_up_small": "\ud83d\udd3c",
        "arrow_upper_left": "\u2196\uFE0F",
        "arrow_upper_right": "\u2197\uFE0F",
        "arrows_clockwise": "\ud83d\udd03",
        "arrows_counterclockwise": "\ud83d\udd04",
        "art": "\ud83c\udfa8",
        "articulated_lorry": "\ud83d\ude9b",
        "artificial_satellite": "\ud83d\udef0",
        "astonished": "\ud83d\ude32",
        "athletic_shoe": "\ud83d\udc5f",
        "atm": "\ud83c\udfe7",
        "atom_symbol": "\u269B\uFE0F",
        "avocado": "\ud83e\udd51",
        "b": "\ud83c\udd71\uFE0F",
        "baby": "\ud83d\udc76",
        "baby_bottle": "\ud83c\udf7c",
        "baby_chick": "\ud83d\udc24",
        "baby_symbol": "\ud83d\udebc",
        "back": "\ud83d\udd19",
        "bacon": "\ud83e\udd53",
        "badminton": "\ud83c\udff8",
        "baggage_claim": "\ud83d\udec4",
        "baguette_bread": "\ud83e\udd56",
        "balance_scale": "\u2696\uFE0F",
        "balloon": "\ud83c\udf88",
        "ballot_box": "\ud83d\uddf3",
        "ballot_box_with_check": "\u2611\uFE0F",
        "bamboo": "\ud83c\udf8d",
        "banana": "\ud83c\udf4c",
        "bangbang": "\u203C\uFE0F",
        "bank": "\ud83c\udfe6",
        "bar_chart": "\ud83d\udcca",
        "barber": "\ud83d\udc88",
        "baseball": "\u26BE\uFE0F",
        "basketball": "\ud83c\udfc0",
        "basketball_man": "\u26F9\uFE0F",
        "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
        "bat": "\ud83e\udd87",
        "bath": "\ud83d\udec0",
        "bathtub": "\ud83d\udec1",
        "battery": "\ud83d\udd0b",
        "beach_umbrella": "\ud83c\udfd6",
        "bear": "\ud83d\udc3b",
        "bed": "\ud83d\udecf",
        "bee": "\ud83d\udc1d",
        "beer": "\ud83c\udf7a",
        "beers": "\ud83c\udf7b",
        "beetle": "\ud83d\udc1e",
        "beginner": "\ud83d\udd30",
        "bell": "\ud83d\udd14",
        "bellhop_bell": "\ud83d\udece",
        "bento": "\ud83c\udf71",
        "biking_man": "\ud83d\udeb4",
        "bike": "\ud83d\udeb2",
        "biking_woman": "\ud83d\udeb4&zwj;\u2640\uFE0F",
        "bikini": "\ud83d\udc59",
        "biohazard": "\u2623\uFE0F",
        "bird": "\ud83d\udc26",
        "birthday": "\ud83c\udf82",
        "black_circle": "\u26AB\uFE0F",
        "black_flag": "\ud83c\udff4",
        "black_heart": "\ud83d\udda4",
        "black_joker": "\ud83c\udccf",
        "black_large_square": "\u2B1B\uFE0F",
        "black_medium_small_square": "\u25FE\uFE0F",
        "black_medium_square": "\u25FC\uFE0F",
        "black_nib": "\u2712\uFE0F",
        "black_small_square": "\u25AA\uFE0F",
        "black_square_button": "\ud83d\udd32",
        "blonde_man": "\ud83d\udc71",
        "blonde_woman": "\ud83d\udc71&zwj;\u2640\uFE0F",
        "blossom": "\ud83c\udf3c",
        "blowfish": "\ud83d\udc21",
        "blue_book": "\ud83d\udcd8",
        "blue_car": "\ud83d\ude99",
        "blue_heart": "\ud83d\udc99",
        "blush": "\ud83d\ude0a",
        "boar": "\ud83d\udc17",
        "boat": "\u26F5\uFE0F",
        "bomb": "\ud83d\udca3",
        "book": "\ud83d\udcd6",
        "bookmark": "\ud83d\udd16",
        "bookmark_tabs": "\ud83d\udcd1",
        "books": "\ud83d\udcda",
        "boom": "\ud83d\udca5",
        "boot": "\ud83d\udc62",
        "bouquet": "\ud83d\udc90",
        "bowing_man": "\ud83d\ude47",
        "bow_and_arrow": "\ud83c\udff9",
        "bowing_woman": "\ud83d\ude47&zwj;\u2640\uFE0F",
        "bowling": "\ud83c\udfb3",
        "boxing_glove": "\ud83e\udd4a",
        "boy": "\ud83d\udc66",
        "bread": "\ud83c\udf5e",
        "bride_with_veil": "\ud83d\udc70",
        "bridge_at_night": "\ud83c\udf09",
        "briefcase": "\ud83d\udcbc",
        "broken_heart": "\ud83d\udc94",
        "bug": "\ud83d\udc1b",
        "building_construction": "\ud83c\udfd7",
        "bulb": "\ud83d\udca1",
        "bullettrain_front": "\ud83d\ude85",
        "bullettrain_side": "\ud83d\ude84",
        "burrito": "\ud83c\udf2f",
        "bus": "\ud83d\ude8c",
        "business_suit_levitating": "\ud83d\udd74",
        "busstop": "\ud83d\ude8f",
        "bust_in_silhouette": "\ud83d\udc64",
        "busts_in_silhouette": "\ud83d\udc65",
        "butterfly": "\ud83e\udd8b",
        "cactus": "\ud83c\udf35",
        "cake": "\ud83c\udf70",
        "calendar": "\ud83d\udcc6",
        "call_me_hand": "\ud83e\udd19",
        "calling": "\ud83d\udcf2",
        "camel": "\ud83d\udc2b",
        "camera": "\ud83d\udcf7",
        "camera_flash": "\ud83d\udcf8",
        "camping": "\ud83c\udfd5",
        "cancer": "\u264B\uFE0F",
        "candle": "\ud83d\udd6f",
        "candy": "\ud83c\udf6c",
        "canoe": "\ud83d\udef6",
        "capital_abcd": "\ud83d\udd20",
        "capricorn": "\u2651\uFE0F",
        "car": "\ud83d\ude97",
        "card_file_box": "\ud83d\uddc3",
        "card_index": "\ud83d\udcc7",
        "card_index_dividers": "\ud83d\uddc2",
        "carousel_horse": "\ud83c\udfa0",
        "carrot": "\ud83e\udd55",
        "cat": "\ud83d\udc31",
        "cat2": "\ud83d\udc08",
        "cd": "\ud83d\udcbf",
        "chains": "\u26D3",
        "champagne": "\ud83c\udf7e",
        "chart": "\ud83d\udcb9",
        "chart_with_downwards_trend": "\ud83d\udcc9",
        "chart_with_upwards_trend": "\ud83d\udcc8",
        "checkered_flag": "\ud83c\udfc1",
        "cheese": "\ud83e\uddc0",
        "cherries": "\ud83c\udf52",
        "cherry_blossom": "\ud83c\udf38",
        "chestnut": "\ud83c\udf30",
        "chicken": "\ud83d\udc14",
        "children_crossing": "\ud83d\udeb8",
        "chipmunk": "\ud83d\udc3f",
        "chocolate_bar": "\ud83c\udf6b",
        "christmas_tree": "\ud83c\udf84",
        "church": "\u26EA\uFE0F",
        "cinema": "\ud83c\udfa6",
        "circus_tent": "\ud83c\udfaa",
        "city_sunrise": "\ud83c\udf07",
        "city_sunset": "\ud83c\udf06",
        "cityscape": "\ud83c\udfd9",
        "cl": "\ud83c\udd91",
        "clamp": "\ud83d\udddc",
        "clap": "\ud83d\udc4f",
        "clapper": "\ud83c\udfac",
        "classical_building": "\ud83c\udfdb",
        "clinking_glasses": "\ud83e\udd42",
        "clipboard": "\ud83d\udccb",
        "clock1": "\ud83d\udd50",
        "clock10": "\ud83d\udd59",
        "clock1030": "\ud83d\udd65",
        "clock11": "\ud83d\udd5a",
        "clock1130": "\ud83d\udd66",
        "clock12": "\ud83d\udd5b",
        "clock1230": "\ud83d\udd67",
        "clock130": "\ud83d\udd5c",
        "clock2": "\ud83d\udd51",
        "clock230": "\ud83d\udd5d",
        "clock3": "\ud83d\udd52",
        "clock330": "\ud83d\udd5e",
        "clock4": "\ud83d\udd53",
        "clock430": "\ud83d\udd5f",
        "clock5": "\ud83d\udd54",
        "clock530": "\ud83d\udd60",
        "clock6": "\ud83d\udd55",
        "clock630": "\ud83d\udd61",
        "clock7": "\ud83d\udd56",
        "clock730": "\ud83d\udd62",
        "clock8": "\ud83d\udd57",
        "clock830": "\ud83d\udd63",
        "clock9": "\ud83d\udd58",
        "clock930": "\ud83d\udd64",
        "closed_book": "\ud83d\udcd5",
        "closed_lock_with_key": "\ud83d\udd10",
        "closed_umbrella": "\ud83c\udf02",
        "cloud": "\u2601\uFE0F",
        "cloud_with_lightning": "\ud83c\udf29",
        "cloud_with_lightning_and_rain": "\u26C8",
        "cloud_with_rain": "\ud83c\udf27",
        "cloud_with_snow": "\ud83c\udf28",
        "clown_face": "\ud83e\udd21",
        "clubs": "\u2663\uFE0F",
        "cocktail": "\ud83c\udf78",
        "coffee": "\u2615\uFE0F",
        "coffin": "\u26B0\uFE0F",
        "cold_sweat": "\ud83d\ude30",
        "comet": "\u2604\uFE0F",
        "computer": "\ud83d\udcbb",
        "computer_mouse": "\ud83d\uddb1",
        "confetti_ball": "\ud83c\udf8a",
        "confounded": "\ud83d\ude16",
        "confused": "\ud83d\ude15",
        "congratulations": "\u3297\uFE0F",
        "construction": "\ud83d\udea7",
        "construction_worker_man": "\ud83d\udc77",
        "construction_worker_woman": "\ud83d\udc77&zwj;\u2640\uFE0F",
        "control_knobs": "\ud83c\udf9b",
        "convenience_store": "\ud83c\udfea",
        "cookie": "\ud83c\udf6a",
        "cool": "\ud83c\udd92",
        "policeman": "\ud83d\udc6e",
        "copyright": "\xa9\uFE0F",
        "corn": "\ud83c\udf3d",
        "couch_and_lamp": "\ud83d\udecb",
        "couple": "\ud83d\udc6b",
        "couple_with_heart_woman_man": "\ud83d\udc91",
        "couple_with_heart_man_man": "\ud83d\udc68&zwj;\u2764\uFE0F&zwj;\ud83d\udc68",
        "couple_with_heart_woman_woman": "\ud83d\udc69&zwj;\u2764\uFE0F&zwj;\ud83d\udc69",
        "couplekiss_man_man": "\ud83d\udc68&zwj;\u2764\uFE0F&zwj;\ud83d\udc8b&zwj;\ud83d\udc68",
        "couplekiss_man_woman": "\ud83d\udc8f",
        "couplekiss_woman_woman": "\ud83d\udc69&zwj;\u2764\uFE0F&zwj;\ud83d\udc8b&zwj;\ud83d\udc69",
        "cow": "\ud83d\udc2e",
        "cow2": "\ud83d\udc04",
        "cowboy_hat_face": "\ud83e\udd20",
        "crab": "\ud83e\udd80",
        "crayon": "\ud83d\udd8d",
        "credit_card": "\ud83d\udcb3",
        "crescent_moon": "\ud83c\udf19",
        "cricket": "\ud83c\udfcf",
        "crocodile": "\ud83d\udc0a",
        "croissant": "\ud83e\udd50",
        "crossed_fingers": "\ud83e\udd1e",
        "crossed_flags": "\ud83c\udf8c",
        "crossed_swords": "\u2694\uFE0F",
        "crown": "\ud83d\udc51",
        "cry": "\ud83d\ude22",
        "crying_cat_face": "\ud83d\ude3f",
        "crystal_ball": "\ud83d\udd2e",
        "cucumber": "\ud83e\udd52",
        "cupid": "\ud83d\udc98",
        "curly_loop": "\u27B0",
        "currency_exchange": "\ud83d\udcb1",
        "curry": "\ud83c\udf5b",
        "custard": "\ud83c\udf6e",
        "customs": "\ud83d\udec3",
        "cyclone": "\ud83c\udf00",
        "dagger": "\ud83d\udde1",
        "dancer": "\ud83d\udc83",
        "dancing_women": "\ud83d\udc6f",
        "dancing_men": "\ud83d\udc6f&zwj;\u2642\uFE0F",
        "dango": "\ud83c\udf61",
        "dark_sunglasses": "\ud83d\udd76",
        "dart": "\ud83c\udfaf",
        "dash": "\ud83d\udca8",
        "date": "\ud83d\udcc5",
        "deciduous_tree": "\ud83c\udf33",
        "deer": "\ud83e\udd8c",
        "department_store": "\ud83c\udfec",
        "derelict_house": "\ud83c\udfda",
        "desert": "\ud83c\udfdc",
        "desert_island": "\ud83c\udfdd",
        "desktop_computer": "\ud83d\udda5",
        "male_detective": "\ud83d\udd75\uFE0F",
        "diamond_shape_with_a_dot_inside": "\ud83d\udca0",
        "diamonds": "\u2666\uFE0F",
        "disappointed": "\ud83d\ude1e",
        "disappointed_relieved": "\ud83d\ude25",
        "dizzy": "\ud83d\udcab",
        "dizzy_face": "\ud83d\ude35",
        "do_not_litter": "\ud83d\udeaf",
        "dog": "\ud83d\udc36",
        "dog2": "\ud83d\udc15",
        "dollar": "\ud83d\udcb5",
        "dolls": "\ud83c\udf8e",
        "dolphin": "\ud83d\udc2c",
        "door": "\ud83d\udeaa",
        "doughnut": "\ud83c\udf69",
        "dove": "\ud83d\udd4a",
        "dragon": "\ud83d\udc09",
        "dragon_face": "\ud83d\udc32",
        "dress": "\ud83d\udc57",
        "dromedary_camel": "\ud83d\udc2a",
        "drooling_face": "\ud83e\udd24",
        "droplet": "\ud83d\udca7",
        "drum": "\ud83e\udd41",
        "duck": "\ud83e\udd86",
        "dvd": "\ud83d\udcc0",
        "e-mail": "\ud83d\udce7",
        "eagle": "\ud83e\udd85",
        "ear": "\ud83d\udc42",
        "ear_of_rice": "\ud83c\udf3e",
        "earth_africa": "\ud83c\udf0d",
        "earth_americas": "\ud83c\udf0e",
        "earth_asia": "\ud83c\udf0f",
        "egg": "\ud83e\udd5a",
        "eggplant": "\ud83c\udf46",
        "eight_pointed_black_star": "\u2734\uFE0F",
        "eight_spoked_asterisk": "\u2733\uFE0F",
        "electric_plug": "\ud83d\udd0c",
        "elephant": "\ud83d\udc18",
        "email": "\u2709\uFE0F",
        "end": "\ud83d\udd1a",
        "envelope_with_arrow": "\ud83d\udce9",
        "euro": "\ud83d\udcb6",
        "european_castle": "\ud83c\udff0",
        "european_post_office": "\ud83c\udfe4",
        "evergreen_tree": "\ud83c\udf32",
        "exclamation": "\u2757\uFE0F",
        "expressionless": "\ud83d\ude11",
        "eye": "\ud83d\udc41",
        "eye_speech_bubble": "\ud83d\udc41&zwj;\ud83d\udde8",
        "eyeglasses": "\ud83d\udc53",
        "eyes": "\ud83d\udc40",
        "face_with_head_bandage": "\ud83e\udd15",
        "face_with_thermometer": "\ud83e\udd12",
        "fist_oncoming": "\ud83d\udc4a",
        "factory": "\ud83c\udfed",
        "fallen_leaf": "\ud83c\udf42",
        "family_man_woman_boy": "\ud83d\udc6a",
        "family_man_boy": "\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_girl": "\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_man_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_man_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_woman_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_woman_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_man_woman_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_woman_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "fast_forward": "\u23E9",
        "fax": "\ud83d\udce0",
        "fearful": "\ud83d\ude28",
        "feet": "\ud83d\udc3e",
        "female_detective": "\ud83d\udd75\uFE0F&zwj;\u2640\uFE0F",
        "ferris_wheel": "\ud83c\udfa1",
        "ferry": "\u26F4",
        "field_hockey": "\ud83c\udfd1",
        "file_cabinet": "\ud83d\uddc4",
        "file_folder": "\ud83d\udcc1",
        "film_projector": "\ud83d\udcfd",
        "film_strip": "\ud83c\udf9e",
        "fire": "\ud83d\udd25",
        "fire_engine": "\ud83d\ude92",
        "fireworks": "\ud83c\udf86",
        "first_quarter_moon": "\ud83c\udf13",
        "first_quarter_moon_with_face": "\ud83c\udf1b",
        "fish": "\ud83d\udc1f",
        "fish_cake": "\ud83c\udf65",
        "fishing_pole_and_fish": "\ud83c\udfa3",
        "fist_raised": "\u270A",
        "fist_left": "\ud83e\udd1b",
        "fist_right": "\ud83e\udd1c",
        "flags": "\ud83c\udf8f",
        "flashlight": "\ud83d\udd26",
        "fleur_de_lis": "\u269C\uFE0F",
        "flight_arrival": "\ud83d\udeec",
        "flight_departure": "\ud83d\udeeb",
        "floppy_disk": "\ud83d\udcbe",
        "flower_playing_cards": "\ud83c\udfb4",
        "flushed": "\ud83d\ude33",
        "fog": "\ud83c\udf2b",
        "foggy": "\ud83c\udf01",
        "football": "\ud83c\udfc8",
        "footprints": "\ud83d\udc63",
        "fork_and_knife": "\ud83c\udf74",
        "fountain": "\u26F2\uFE0F",
        "fountain_pen": "\ud83d\udd8b",
        "four_leaf_clover": "\ud83c\udf40",
        "fox_face": "\ud83e\udd8a",
        "framed_picture": "\ud83d\uddbc",
        "free": "\ud83c\udd93",
        "fried_egg": "\ud83c\udf73",
        "fried_shrimp": "\ud83c\udf64",
        "fries": "\ud83c\udf5f",
        "frog": "\ud83d\udc38",
        "frowning": "\ud83d\ude26",
        "frowning_face": "\u2639\uFE0F",
        "frowning_man": "\ud83d\ude4d&zwj;\u2642\uFE0F",
        "frowning_woman": "\ud83d\ude4d",
        "middle_finger": "\ud83d\udd95",
        "fuelpump": "\u26FD\uFE0F",
        "full_moon": "\ud83c\udf15",
        "full_moon_with_face": "\ud83c\udf1d",
        "funeral_urn": "\u26B1\uFE0F",
        "game_die": "\ud83c\udfb2",
        "gear": "\u2699\uFE0F",
        "gem": "\ud83d\udc8e",
        "gemini": "\u264A\uFE0F",
        "ghost": "\ud83d\udc7b",
        "gift": "\ud83c\udf81",
        "gift_heart": "\ud83d\udc9d",
        "girl": "\ud83d\udc67",
        "globe_with_meridians": "\ud83c\udf10",
        "goal_net": "\ud83e\udd45",
        "goat": "\ud83d\udc10",
        "golf": "\u26F3\uFE0F",
        "golfing_man": "\ud83c\udfcc\uFE0F",
        "golfing_woman": "\ud83c\udfcc\uFE0F&zwj;\u2640\uFE0F",
        "gorilla": "\ud83e\udd8d",
        "grapes": "\ud83c\udf47",
        "green_apple": "\ud83c\udf4f",
        "green_book": "\ud83d\udcd7",
        "green_heart": "\ud83d\udc9a",
        "green_salad": "\ud83e\udd57",
        "grey_exclamation": "\u2755",
        "grey_question": "\u2754",
        "grimacing": "\ud83d\ude2c",
        "grin": "\ud83d\ude01",
        "grinning": "\ud83d\ude00",
        "guardsman": "\ud83d\udc82",
        "guardswoman": "\ud83d\udc82&zwj;\u2640\uFE0F",
        "guitar": "\ud83c\udfb8",
        "gun": "\ud83d\udd2b",
        "haircut_woman": "\ud83d\udc87",
        "haircut_man": "\ud83d\udc87&zwj;\u2642\uFE0F",
        "hamburger": "\ud83c\udf54",
        "hammer": "\ud83d\udd28",
        "hammer_and_pick": "\u2692",
        "hammer_and_wrench": "\ud83d\udee0",
        "hamster": "\ud83d\udc39",
        "hand": "\u270B",
        "handbag": "\ud83d\udc5c",
        "handshake": "\ud83e\udd1d",
        "hankey": "\ud83d\udca9",
        "hatched_chick": "\ud83d\udc25",
        "hatching_chick": "\ud83d\udc23",
        "headphones": "\ud83c\udfa7",
        "hear_no_evil": "\ud83d\ude49",
        "heart": "\u2764\uFE0F",
        "heart_decoration": "\ud83d\udc9f",
        "heart_eyes": "\ud83d\ude0d",
        "heart_eyes_cat": "\ud83d\ude3b",
        "heartbeat": "\ud83d\udc93",
        "heartpulse": "\ud83d\udc97",
        "hearts": "\u2665\uFE0F",
        "heavy_check_mark": "\u2714\uFE0F",
        "heavy_division_sign": "\u2797",
        "heavy_dollar_sign": "\ud83d\udcb2",
        "heavy_heart_exclamation": "\u2763\uFE0F",
        "heavy_minus_sign": "\u2796",
        "heavy_multiplication_x": "\u2716\uFE0F",
        "heavy_plus_sign": "\u2795",
        "helicopter": "\ud83d\ude81",
        "herb": "\ud83c\udf3f",
        "hibiscus": "\ud83c\udf3a",
        "high_brightness": "\ud83d\udd06",
        "high_heel": "\ud83d\udc60",
        "hocho": "\ud83d\udd2a",
        "hole": "\ud83d\udd73",
        "honey_pot": "\ud83c\udf6f",
        "horse": "\ud83d\udc34",
        "horse_racing": "\ud83c\udfc7",
        "hospital": "\ud83c\udfe5",
        "hot_pepper": "\ud83c\udf36",
        "hotdog": "\ud83c\udf2d",
        "hotel": "\ud83c\udfe8",
        "hotsprings": "\u2668\uFE0F",
        "hourglass": "\u231B\uFE0F",
        "hourglass_flowing_sand": "\u23F3",
        "house": "\ud83c\udfe0",
        "house_with_garden": "\ud83c\udfe1",
        "houses": "\ud83c\udfd8",
        "hugs": "\ud83e\udd17",
        "hushed": "\ud83d\ude2f",
        "ice_cream": "\ud83c\udf68",
        "ice_hockey": "\ud83c\udfd2",
        "ice_skate": "\u26F8",
        "icecream": "\ud83c\udf66",
        "id": "\ud83c\udd94",
        "ideograph_advantage": "\ud83c\ude50",
        "imp": "\ud83d\udc7f",
        "inbox_tray": "\ud83d\udce5",
        "incoming_envelope": "\ud83d\udce8",
        "tipping_hand_woman": "\ud83d\udc81",
        "information_source": "\u2139\uFE0F",
        "innocent": "\ud83d\ude07",
        "interrobang": "\u2049\uFE0F",
        "iphone": "\ud83d\udcf1",
        "izakaya_lantern": "\ud83c\udfee",
        "jack_o_lantern": "\ud83c\udf83",
        "japan": "\ud83d\uddfe",
        "japanese_castle": "\ud83c\udfef",
        "japanese_goblin": "\ud83d\udc7a",
        "japanese_ogre": "\ud83d\udc79",
        "jeans": "\ud83d\udc56",
        "joy": "\ud83d\ude02",
        "joy_cat": "\ud83d\ude39",
        "joystick": "\ud83d\udd79",
        "kaaba": "\ud83d\udd4b",
        "key": "\ud83d\udd11",
        "keyboard": "\u2328\uFE0F",
        "keycap_ten": "\ud83d\udd1f",
        "kick_scooter": "\ud83d\udef4",
        "kimono": "\ud83d\udc58",
        "kiss": "\ud83d\udc8b",
        "kissing": "\ud83d\ude17",
        "kissing_cat": "\ud83d\ude3d",
        "kissing_closed_eyes": "\ud83d\ude1a",
        "kissing_heart": "\ud83d\ude18",
        "kissing_smiling_eyes": "\ud83d\ude19",
        "kiwi_fruit": "\ud83e\udd5d",
        "koala": "\ud83d\udc28",
        "koko": "\ud83c\ude01",
        "label": "\ud83c\udff7",
        "large_blue_circle": "\ud83d\udd35",
        "large_blue_diamond": "\ud83d\udd37",
        "large_orange_diamond": "\ud83d\udd36",
        "last_quarter_moon": "\ud83c\udf17",
        "last_quarter_moon_with_face": "\ud83c\udf1c",
        "latin_cross": "\u271D\uFE0F",
        "laughing": "\ud83d\ude06",
        "leaves": "\ud83c\udf43",
        "ledger": "\ud83d\udcd2",
        "left_luggage": "\ud83d\udec5",
        "left_right_arrow": "\u2194\uFE0F",
        "leftwards_arrow_with_hook": "\u21A9\uFE0F",
        "lemon": "\ud83c\udf4b",
        "leo": "\u264C\uFE0F",
        "leopard": "\ud83d\udc06",
        "level_slider": "\ud83c\udf9a",
        "libra": "\u264E\uFE0F",
        "light_rail": "\ud83d\ude88",
        "link": "\ud83d\udd17",
        "lion": "\ud83e\udd81",
        "lips": "\ud83d\udc44",
        "lipstick": "\ud83d\udc84",
        "lizard": "\ud83e\udd8e",
        "lock": "\ud83d\udd12",
        "lock_with_ink_pen": "\ud83d\udd0f",
        "lollipop": "\ud83c\udf6d",
        "loop": "\u27BF",
        "loud_sound": "\ud83d\udd0a",
        "loudspeaker": "\ud83d\udce2",
        "love_hotel": "\ud83c\udfe9",
        "love_letter": "\ud83d\udc8c",
        "low_brightness": "\ud83d\udd05",
        "lying_face": "\ud83e\udd25",
        "m": "\u24C2\uFE0F",
        "mag": "\ud83d\udd0d",
        "mag_right": "\ud83d\udd0e",
        "mahjong": "\ud83c\udc04\uFE0F",
        "mailbox": "\ud83d\udceb",
        "mailbox_closed": "\ud83d\udcea",
        "mailbox_with_mail": "\ud83d\udcec",
        "mailbox_with_no_mail": "\ud83d\udced",
        "man": "\ud83d\udc68",
        "man_artist": "\ud83d\udc68&zwj;\ud83c\udfa8",
        "man_astronaut": "\ud83d\udc68&zwj;\ud83d\ude80",
        "man_cartwheeling": "\ud83e\udd38&zwj;\u2642\uFE0F",
        "man_cook": "\ud83d\udc68&zwj;\ud83c\udf73",
        "man_dancing": "\ud83d\udd7a",
        "man_facepalming": "\ud83e\udd26&zwj;\u2642\uFE0F",
        "man_factory_worker": "\ud83d\udc68&zwj;\ud83c\udfed",
        "man_farmer": "\ud83d\udc68&zwj;\ud83c\udf3e",
        "man_firefighter": "\ud83d\udc68&zwj;\ud83d\ude92",
        "man_health_worker": "\ud83d\udc68&zwj;\u2695\uFE0F",
        "man_in_tuxedo": "\ud83e\udd35",
        "man_judge": "\ud83d\udc68&zwj;\u2696\uFE0F",
        "man_juggling": "\ud83e\udd39&zwj;\u2642\uFE0F",
        "man_mechanic": "\ud83d\udc68&zwj;\ud83d\udd27",
        "man_office_worker": "\ud83d\udc68&zwj;\ud83d\udcbc",
        "man_pilot": "\ud83d\udc68&zwj;\u2708\uFE0F",
        "man_playing_handball": "\ud83e\udd3e&zwj;\u2642\uFE0F",
        "man_playing_water_polo": "\ud83e\udd3d&zwj;\u2642\uFE0F",
        "man_scientist": "\ud83d\udc68&zwj;\ud83d\udd2c",
        "man_shrugging": "\ud83e\udd37&zwj;\u2642\uFE0F",
        "man_singer": "\ud83d\udc68&zwj;\ud83c\udfa4",
        "man_student": "\ud83d\udc68&zwj;\ud83c\udf93",
        "man_teacher": "\ud83d\udc68&zwj;\ud83c\udfeb",
        "man_technologist": "\ud83d\udc68&zwj;\ud83d\udcbb",
        "man_with_gua_pi_mao": "\ud83d\udc72",
        "man_with_turban": "\ud83d\udc73",
        "tangerine": "\ud83c\udf4a",
        "mans_shoe": "\ud83d\udc5e",
        "mantelpiece_clock": "\ud83d\udd70",
        "maple_leaf": "\ud83c\udf41",
        "martial_arts_uniform": "\ud83e\udd4b",
        "mask": "\ud83d\ude37",
        "massage_woman": "\ud83d\udc86",
        "massage_man": "\ud83d\udc86&zwj;\u2642\uFE0F",
        "meat_on_bone": "\ud83c\udf56",
        "medal_military": "\ud83c\udf96",
        "medal_sports": "\ud83c\udfc5",
        "mega": "\ud83d\udce3",
        "melon": "\ud83c\udf48",
        "memo": "\ud83d\udcdd",
        "men_wrestling": "\ud83e\udd3c&zwj;\u2642\uFE0F",
        "menorah": "\ud83d\udd4e",
        "mens": "\ud83d\udeb9",
        "metal": "\ud83e\udd18",
        "metro": "\ud83d\ude87",
        "microphone": "\ud83c\udfa4",
        "microscope": "\ud83d\udd2c",
        "milk_glass": "\ud83e\udd5b",
        "milky_way": "\ud83c\udf0c",
        "minibus": "\ud83d\ude90",
        "minidisc": "\ud83d\udcbd",
        "mobile_phone_off": "\ud83d\udcf4",
        "money_mouth_face": "\ud83e\udd11",
        "money_with_wings": "\ud83d\udcb8",
        "moneybag": "\ud83d\udcb0",
        "monkey": "\ud83d\udc12",
        "monkey_face": "\ud83d\udc35",
        "monorail": "\ud83d\ude9d",
        "moon": "\ud83c\udf14",
        "mortar_board": "\ud83c\udf93",
        "mosque": "\ud83d\udd4c",
        "motor_boat": "\ud83d\udee5",
        "motor_scooter": "\ud83d\udef5",
        "motorcycle": "\ud83c\udfcd",
        "motorway": "\ud83d\udee3",
        "mount_fuji": "\ud83d\uddfb",
        "mountain": "\u26F0",
        "mountain_biking_man": "\ud83d\udeb5",
        "mountain_biking_woman": "\ud83d\udeb5&zwj;\u2640\uFE0F",
        "mountain_cableway": "\ud83d\udea0",
        "mountain_railway": "\ud83d\ude9e",
        "mountain_snow": "\ud83c\udfd4",
        "mouse": "\ud83d\udc2d",
        "mouse2": "\ud83d\udc01",
        "movie_camera": "\ud83c\udfa5",
        "moyai": "\ud83d\uddff",
        "mrs_claus": "\ud83e\udd36",
        "muscle": "\ud83d\udcaa",
        "mushroom": "\ud83c\udf44",
        "musical_keyboard": "\ud83c\udfb9",
        "musical_note": "\ud83c\udfb5",
        "musical_score": "\ud83c\udfbc",
        "mute": "\ud83d\udd07",
        "nail_care": "\ud83d\udc85",
        "name_badge": "\ud83d\udcdb",
        "national_park": "\ud83c\udfde",
        "nauseated_face": "\ud83e\udd22",
        "necktie": "\ud83d\udc54",
        "negative_squared_cross_mark": "\u274E",
        "nerd_face": "\ud83e\udd13",
        "neutral_face": "\ud83d\ude10",
        "new": "\ud83c\udd95",
        "new_moon": "\ud83c\udf11",
        "new_moon_with_face": "\ud83c\udf1a",
        "newspaper": "\ud83d\udcf0",
        "newspaper_roll": "\ud83d\uddde",
        "next_track_button": "\u23ED",
        "ng": "\ud83c\udd96",
        "no_good_man": "\ud83d\ude45&zwj;\u2642\uFE0F",
        "no_good_woman": "\ud83d\ude45",
        "night_with_stars": "\ud83c\udf03",
        "no_bell": "\ud83d\udd15",
        "no_bicycles": "\ud83d\udeb3",
        "no_entry": "\u26D4\uFE0F",
        "no_entry_sign": "\ud83d\udeab",
        "no_mobile_phones": "\ud83d\udcf5",
        "no_mouth": "\ud83d\ude36",
        "no_pedestrians": "\ud83d\udeb7",
        "no_smoking": "\ud83d\udead",
        "non-potable_water": "\ud83d\udeb1",
        "nose": "\ud83d\udc43",
        "notebook": "\ud83d\udcd3",
        "notebook_with_decorative_cover": "\ud83d\udcd4",
        "notes": "\ud83c\udfb6",
        "nut_and_bolt": "\ud83d\udd29",
        "o": "\u2B55\uFE0F",
        "o2": "\ud83c\udd7e\uFE0F",
        "ocean": "\ud83c\udf0a",
        "octopus": "\ud83d\udc19",
        "oden": "\ud83c\udf62",
        "office": "\ud83c\udfe2",
        "oil_drum": "\ud83d\udee2",
        "ok": "\ud83c\udd97",
        "ok_hand": "\ud83d\udc4c",
        "ok_man": "\ud83d\ude46&zwj;\u2642\uFE0F",
        "ok_woman": "\ud83d\ude46",
        "old_key": "\ud83d\udddd",
        "older_man": "\ud83d\udc74",
        "older_woman": "\ud83d\udc75",
        "om": "\ud83d\udd49",
        "on": "\ud83d\udd1b",
        "oncoming_automobile": "\ud83d\ude98",
        "oncoming_bus": "\ud83d\ude8d",
        "oncoming_police_car": "\ud83d\ude94",
        "oncoming_taxi": "\ud83d\ude96",
        "open_file_folder": "\ud83d\udcc2",
        "open_hands": "\ud83d\udc50",
        "open_mouth": "\ud83d\ude2e",
        "open_umbrella": "\u2602\uFE0F",
        "ophiuchus": "\u26CE",
        "orange_book": "\ud83d\udcd9",
        "orthodox_cross": "\u2626\uFE0F",
        "outbox_tray": "\ud83d\udce4",
        "owl": "\ud83e\udd89",
        "ox": "\ud83d\udc02",
        "package": "\ud83d\udce6",
        "page_facing_up": "\ud83d\udcc4",
        "page_with_curl": "\ud83d\udcc3",
        "pager": "\ud83d\udcdf",
        "paintbrush": "\ud83d\udd8c",
        "palm_tree": "\ud83c\udf34",
        "pancakes": "\ud83e\udd5e",
        "panda_face": "\ud83d\udc3c",
        "paperclip": "\ud83d\udcce",
        "paperclips": "\ud83d\udd87",
        "parasol_on_ground": "\u26F1",
        "parking": "\ud83c\udd7f\uFE0F",
        "part_alternation_mark": "\u303D\uFE0F",
        "partly_sunny": "\u26C5\uFE0F",
        "passenger_ship": "\ud83d\udef3",
        "passport_control": "\ud83d\udec2",
        "pause_button": "\u23F8",
        "peace_symbol": "\u262E\uFE0F",
        "peach": "\ud83c\udf51",
        "peanuts": "\ud83e\udd5c",
        "pear": "\ud83c\udf50",
        "pen": "\ud83d\udd8a",
        "pencil2": "\u270F\uFE0F",
        "penguin": "\ud83d\udc27",
        "pensive": "\ud83d\ude14",
        "performing_arts": "\ud83c\udfad",
        "persevere": "\ud83d\ude23",
        "person_fencing": "\ud83e\udd3a",
        "pouting_woman": "\ud83d\ude4e",
        "phone": "\u260E\uFE0F",
        "pick": "\u26CF",
        "pig": "\ud83d\udc37",
        "pig2": "\ud83d\udc16",
        "pig_nose": "\ud83d\udc3d",
        "pill": "\ud83d\udc8a",
        "pineapple": "\ud83c\udf4d",
        "ping_pong": "\ud83c\udfd3",
        "pisces": "\u2653\uFE0F",
        "pizza": "\ud83c\udf55",
        "place_of_worship": "\ud83d\uded0",
        "plate_with_cutlery": "\ud83c\udf7d",
        "play_or_pause_button": "\u23EF",
        "point_down": "\ud83d\udc47",
        "point_left": "\ud83d\udc48",
        "point_right": "\ud83d\udc49",
        "point_up": "\u261D\uFE0F",
        "point_up_2": "\ud83d\udc46",
        "police_car": "\ud83d\ude93",
        "policewoman": "\ud83d\udc6e&zwj;\u2640\uFE0F",
        "poodle": "\ud83d\udc29",
        "popcorn": "\ud83c\udf7f",
        "post_office": "\ud83c\udfe3",
        "postal_horn": "\ud83d\udcef",
        "postbox": "\ud83d\udcee",
        "potable_water": "\ud83d\udeb0",
        "potato": "\ud83e\udd54",
        "pouch": "\ud83d\udc5d",
        "poultry_leg": "\ud83c\udf57",
        "pound": "\ud83d\udcb7",
        "rage": "\ud83d\ude21",
        "pouting_cat": "\ud83d\ude3e",
        "pouting_man": "\ud83d\ude4e&zwj;\u2642\uFE0F",
        "pray": "\ud83d\ude4f",
        "prayer_beads": "\ud83d\udcff",
        "pregnant_woman": "\ud83e\udd30",
        "previous_track_button": "\u23EE",
        "prince": "\ud83e\udd34",
        "princess": "\ud83d\udc78",
        "printer": "\ud83d\udda8",
        "purple_heart": "\ud83d\udc9c",
        "purse": "\ud83d\udc5b",
        "pushpin": "\ud83d\udccc",
        "put_litter_in_its_place": "\ud83d\udeae",
        "question": "\u2753",
        "rabbit": "\ud83d\udc30",
        "rabbit2": "\ud83d\udc07",
        "racehorse": "\ud83d\udc0e",
        "racing_car": "\ud83c\udfce",
        "radio": "\ud83d\udcfb",
        "radio_button": "\ud83d\udd18",
        "radioactive": "\u2622\uFE0F",
        "railway_car": "\ud83d\ude83",
        "railway_track": "\ud83d\udee4",
        "rainbow": "\ud83c\udf08",
        "rainbow_flag": "\ud83c\udff3\uFE0F&zwj;\ud83c\udf08",
        "raised_back_of_hand": "\ud83e\udd1a",
        "raised_hand_with_fingers_splayed": "\ud83d\udd90",
        "raised_hands": "\ud83d\ude4c",
        "raising_hand_woman": "\ud83d\ude4b",
        "raising_hand_man": "\ud83d\ude4b&zwj;\u2642\uFE0F",
        "ram": "\ud83d\udc0f",
        "ramen": "\ud83c\udf5c",
        "rat": "\ud83d\udc00",
        "record_button": "\u23FA",
        "recycle": "\u267B\uFE0F",
        "red_circle": "\ud83d\udd34",
        "registered": "\xae\uFE0F",
        "relaxed": "\u263A\uFE0F",
        "relieved": "\ud83d\ude0c",
        "reminder_ribbon": "\ud83c\udf97",
        "repeat": "\ud83d\udd01",
        "repeat_one": "\ud83d\udd02",
        "rescue_worker_helmet": "\u26D1",
        "restroom": "\ud83d\udebb",
        "revolving_hearts": "\ud83d\udc9e",
        "rewind": "\u23EA",
        "rhinoceros": "\ud83e\udd8f",
        "ribbon": "\ud83c\udf80",
        "rice": "\ud83c\udf5a",
        "rice_ball": "\ud83c\udf59",
        "rice_cracker": "\ud83c\udf58",
        "rice_scene": "\ud83c\udf91",
        "right_anger_bubble": "\ud83d\uddef",
        "ring": "\ud83d\udc8d",
        "robot": "\ud83e\udd16",
        "rocket": "\ud83d\ude80",
        "rofl": "\ud83e\udd23",
        "roll_eyes": "\ud83d\ude44",
        "roller_coaster": "\ud83c\udfa2",
        "rooster": "\ud83d\udc13",
        "rose": "\ud83c\udf39",
        "rosette": "\ud83c\udff5",
        "rotating_light": "\ud83d\udea8",
        "round_pushpin": "\ud83d\udccd",
        "rowing_man": "\ud83d\udea3",
        "rowing_woman": "\ud83d\udea3&zwj;\u2640\uFE0F",
        "rugby_football": "\ud83c\udfc9",
        "running_man": "\ud83c\udfc3",
        "running_shirt_with_sash": "\ud83c\udfbd",
        "running_woman": "\ud83c\udfc3&zwj;\u2640\uFE0F",
        "sa": "\ud83c\ude02\uFE0F",
        "sagittarius": "\u2650\uFE0F",
        "sake": "\ud83c\udf76",
        "sandal": "\ud83d\udc61",
        "santa": "\ud83c\udf85",
        "satellite": "\ud83d\udce1",
        "saxophone": "\ud83c\udfb7",
        "school": "\ud83c\udfeb",
        "school_satchel": "\ud83c\udf92",
        "scissors": "\u2702\uFE0F",
        "scorpion": "\ud83e\udd82",
        "scorpius": "\u264F\uFE0F",
        "scream": "\ud83d\ude31",
        "scream_cat": "\ud83d\ude40",
        "scroll": "\ud83d\udcdc",
        "seat": "\ud83d\udcba",
        "secret": "\u3299\uFE0F",
        "see_no_evil": "\ud83d\ude48",
        "seedling": "\ud83c\udf31",
        "selfie": "\ud83e\udd33",
        "shallow_pan_of_food": "\ud83e\udd58",
        "shamrock": "\u2618\uFE0F",
        "shark": "\ud83e\udd88",
        "shaved_ice": "\ud83c\udf67",
        "sheep": "\ud83d\udc11",
        "shell": "\ud83d\udc1a",
        "shield": "\ud83d\udee1",
        "shinto_shrine": "\u26E9",
        "ship": "\ud83d\udea2",
        "shirt": "\ud83d\udc55",
        "shopping": "\ud83d\udecd",
        "shopping_cart": "\ud83d\uded2",
        "shower": "\ud83d\udebf",
        "shrimp": "\ud83e\udd90",
        "signal_strength": "\ud83d\udcf6",
        "six_pointed_star": "\ud83d\udd2f",
        "ski": "\ud83c\udfbf",
        "skier": "\u26F7",
        "skull": "\ud83d\udc80",
        "skull_and_crossbones": "\u2620\uFE0F",
        "sleeping": "\ud83d\ude34",
        "sleeping_bed": "\ud83d\udecc",
        "sleepy": "\ud83d\ude2a",
        "slightly_frowning_face": "\ud83d\ude41",
        "slightly_smiling_face": "\ud83d\ude42",
        "slot_machine": "\ud83c\udfb0",
        "small_airplane": "\ud83d\udee9",
        "small_blue_diamond": "\ud83d\udd39",
        "small_orange_diamond": "\ud83d\udd38",
        "small_red_triangle": "\ud83d\udd3a",
        "small_red_triangle_down": "\ud83d\udd3b",
        "smile": "\ud83d\ude04",
        "smile_cat": "\ud83d\ude38",
        "smiley": "\ud83d\ude03",
        "smiley_cat": "\ud83d\ude3a",
        "smiling_imp": "\ud83d\ude08",
        "smirk": "\ud83d\ude0f",
        "smirk_cat": "\ud83d\ude3c",
        "smoking": "\ud83d\udeac",
        "snail": "\ud83d\udc0c",
        "snake": "\ud83d\udc0d",
        "sneezing_face": "\ud83e\udd27",
        "snowboarder": "\ud83c\udfc2",
        "snowflake": "\u2744\uFE0F",
        "snowman": "\u26C4\uFE0F",
        "snowman_with_snow": "\u2603\uFE0F",
        "sob": "\ud83d\ude2d",
        "soccer": "\u26BD\uFE0F",
        "soon": "\ud83d\udd1c",
        "sos": "\ud83c\udd98",
        "sound": "\ud83d\udd09",
        "space_invader": "\ud83d\udc7e",
        "spades": "\u2660\uFE0F",
        "spaghetti": "\ud83c\udf5d",
        "sparkle": "\u2747\uFE0F",
        "sparkler": "\ud83c\udf87",
        "sparkles": "\u2728",
        "sparkling_heart": "\ud83d\udc96",
        "speak_no_evil": "\ud83d\ude4a",
        "speaker": "\ud83d\udd08",
        "speaking_head": "\ud83d\udde3",
        "speech_balloon": "\ud83d\udcac",
        "speedboat": "\ud83d\udea4",
        "spider": "\ud83d\udd77",
        "spider_web": "\ud83d\udd78",
        "spiral_calendar": "\ud83d\uddd3",
        "spiral_notepad": "\ud83d\uddd2",
        "spoon": "\ud83e\udd44",
        "squid": "\ud83e\udd91",
        "stadium": "\ud83c\udfdf",
        "star": "\u2B50\uFE0F",
        "star2": "\ud83c\udf1f",
        "star_and_crescent": "\u262A\uFE0F",
        "star_of_david": "\u2721\uFE0F",
        "stars": "\ud83c\udf20",
        "station": "\ud83d\ude89",
        "statue_of_liberty": "\ud83d\uddfd",
        "steam_locomotive": "\ud83d\ude82",
        "stew": "\ud83c\udf72",
        "stop_button": "\u23F9",
        "stop_sign": "\ud83d\uded1",
        "stopwatch": "\u23F1",
        "straight_ruler": "\ud83d\udccf",
        "strawberry": "\ud83c\udf53",
        "stuck_out_tongue": "\ud83d\ude1b",
        "stuck_out_tongue_closed_eyes": "\ud83d\ude1d",
        "stuck_out_tongue_winking_eye": "\ud83d\ude1c",
        "studio_microphone": "\ud83c\udf99",
        "stuffed_flatbread": "\ud83e\udd59",
        "sun_behind_large_cloud": "\ud83c\udf25",
        "sun_behind_rain_cloud": "\ud83c\udf26",
        "sun_behind_small_cloud": "\ud83c\udf24",
        "sun_with_face": "\ud83c\udf1e",
        "sunflower": "\ud83c\udf3b",
        "sunglasses": "\ud83d\ude0e",
        "sunny": "\u2600\uFE0F",
        "sunrise": "\ud83c\udf05",
        "sunrise_over_mountains": "\ud83c\udf04",
        "surfing_man": "\ud83c\udfc4",
        "surfing_woman": "\ud83c\udfc4&zwj;\u2640\uFE0F",
        "sushi": "\ud83c\udf63",
        "suspension_railway": "\ud83d\ude9f",
        "sweat": "\ud83d\ude13",
        "sweat_drops": "\ud83d\udca6",
        "sweat_smile": "\ud83d\ude05",
        "sweet_potato": "\ud83c\udf60",
        "swimming_man": "\ud83c\udfca",
        "swimming_woman": "\ud83c\udfca&zwj;\u2640\uFE0F",
        "symbols": "\ud83d\udd23",
        "synagogue": "\ud83d\udd4d",
        "syringe": "\ud83d\udc89",
        "taco": "\ud83c\udf2e",
        "tada": "\ud83c\udf89",
        "tanabata_tree": "\ud83c\udf8b",
        "taurus": "\u2649\uFE0F",
        "taxi": "\ud83d\ude95",
        "tea": "\ud83c\udf75",
        "telephone_receiver": "\ud83d\udcde",
        "telescope": "\ud83d\udd2d",
        "tennis": "\ud83c\udfbe",
        "tent": "\u26FA\uFE0F",
        "thermometer": "\ud83c\udf21",
        "thinking": "\ud83e\udd14",
        "thought_balloon": "\ud83d\udcad",
        "ticket": "\ud83c\udfab",
        "tickets": "\ud83c\udf9f",
        "tiger": "\ud83d\udc2f",
        "tiger2": "\ud83d\udc05",
        "timer_clock": "\u23F2",
        "tipping_hand_man": "\ud83d\udc81&zwj;\u2642\uFE0F",
        "tired_face": "\ud83d\ude2b",
        "tm": "\u2122\uFE0F",
        "toilet": "\ud83d\udebd",
        "tokyo_tower": "\ud83d\uddfc",
        "tomato": "\ud83c\udf45",
        "tongue": "\ud83d\udc45",
        "top": "\ud83d\udd1d",
        "tophat": "\ud83c\udfa9",
        "tornado": "\ud83c\udf2a",
        "trackball": "\ud83d\uddb2",
        "tractor": "\ud83d\ude9c",
        "traffic_light": "\ud83d\udea5",
        "train": "\ud83d\ude8b",
        "train2": "\ud83d\ude86",
        "tram": "\ud83d\ude8a",
        "triangular_flag_on_post": "\ud83d\udea9",
        "triangular_ruler": "\ud83d\udcd0",
        "trident": "\ud83d\udd31",
        "triumph": "\ud83d\ude24",
        "trolleybus": "\ud83d\ude8e",
        "trophy": "\ud83c\udfc6",
        "tropical_drink": "\ud83c\udf79",
        "tropical_fish": "\ud83d\udc20",
        "truck": "\ud83d\ude9a",
        "trumpet": "\ud83c\udfba",
        "tulip": "\ud83c\udf37",
        "tumbler_glass": "\ud83e\udd43",
        "turkey": "\ud83e\udd83",
        "turtle": "\ud83d\udc22",
        "tv": "\ud83d\udcfa",
        "twisted_rightwards_arrows": "\ud83d\udd00",
        "two_hearts": "\ud83d\udc95",
        "two_men_holding_hands": "\ud83d\udc6c",
        "two_women_holding_hands": "\ud83d\udc6d",
        "u5272": "\ud83c\ude39",
        "u5408": "\ud83c\ude34",
        "u55b6": "\ud83c\ude3a",
        "u6307": "\ud83c\ude2f\uFE0F",
        "u6708": "\ud83c\ude37\uFE0F",
        "u6709": "\ud83c\ude36",
        "u6e80": "\ud83c\ude35",
        "u7121": "\ud83c\ude1a\uFE0F",
        "u7533": "\ud83c\ude38",
        "u7981": "\ud83c\ude32",
        "u7a7a": "\ud83c\ude33",
        "umbrella": "\u2614\uFE0F",
        "unamused": "\ud83d\ude12",
        "underage": "\ud83d\udd1e",
        "unicorn": "\ud83e\udd84",
        "unlock": "\ud83d\udd13",
        "up": "\ud83c\udd99",
        "upside_down_face": "\ud83d\ude43",
        "v": "\u270C\uFE0F",
        "vertical_traffic_light": "\ud83d\udea6",
        "vhs": "\ud83d\udcfc",
        "vibration_mode": "\ud83d\udcf3",
        "video_camera": "\ud83d\udcf9",
        "video_game": "\ud83c\udfae",
        "violin": "\ud83c\udfbb",
        "virgo": "\u264D\uFE0F",
        "volcano": "\ud83c\udf0b",
        "volleyball": "\ud83c\udfd0",
        "vs": "\ud83c\udd9a",
        "vulcan_salute": "\ud83d\udd96",
        "walking_man": "\ud83d\udeb6",
        "walking_woman": "\ud83d\udeb6&zwj;\u2640\uFE0F",
        "waning_crescent_moon": "\ud83c\udf18",
        "waning_gibbous_moon": "\ud83c\udf16",
        "warning": "\u26A0\uFE0F",
        "wastebasket": "\ud83d\uddd1",
        "watch": "\u231A\uFE0F",
        "water_buffalo": "\ud83d\udc03",
        "watermelon": "\ud83c\udf49",
        "wave": "\ud83d\udc4b",
        "wavy_dash": "\u3030\uFE0F",
        "waxing_crescent_moon": "\ud83c\udf12",
        "wc": "\ud83d\udebe",
        "weary": "\ud83d\ude29",
        "wedding": "\ud83d\udc92",
        "weight_lifting_man": "\ud83c\udfcb\uFE0F",
        "weight_lifting_woman": "\ud83c\udfcb\uFE0F&zwj;\u2640\uFE0F",
        "whale": "\ud83d\udc33",
        "whale2": "\ud83d\udc0b",
        "wheel_of_dharma": "\u2638\uFE0F",
        "wheelchair": "\u267F\uFE0F",
        "white_check_mark": "\u2705",
        "white_circle": "\u26AA\uFE0F",
        "white_flag": "\ud83c\udff3\uFE0F",
        "white_flower": "\ud83d\udcae",
        "white_large_square": "\u2B1C\uFE0F",
        "white_medium_small_square": "\u25FD\uFE0F",
        "white_medium_square": "\u25FB\uFE0F",
        "white_small_square": "\u25AB\uFE0F",
        "white_square_button": "\ud83d\udd33",
        "wilted_flower": "\ud83e\udd40",
        "wind_chime": "\ud83c\udf90",
        "wind_face": "\ud83c\udf2c",
        "wine_glass": "\ud83c\udf77",
        "wink": "\ud83d\ude09",
        "wolf": "\ud83d\udc3a",
        "woman": "\ud83d\udc69",
        "woman_artist": "\ud83d\udc69&zwj;\ud83c\udfa8",
        "woman_astronaut": "\ud83d\udc69&zwj;\ud83d\ude80",
        "woman_cartwheeling": "\ud83e\udd38&zwj;\u2640\uFE0F",
        "woman_cook": "\ud83d\udc69&zwj;\ud83c\udf73",
        "woman_facepalming": "\ud83e\udd26&zwj;\u2640\uFE0F",
        "woman_factory_worker": "\ud83d\udc69&zwj;\ud83c\udfed",
        "woman_farmer": "\ud83d\udc69&zwj;\ud83c\udf3e",
        "woman_firefighter": "\ud83d\udc69&zwj;\ud83d\ude92",
        "woman_health_worker": "\ud83d\udc69&zwj;\u2695\uFE0F",
        "woman_judge": "\ud83d\udc69&zwj;\u2696\uFE0F",
        "woman_juggling": "\ud83e\udd39&zwj;\u2640\uFE0F",
        "woman_mechanic": "\ud83d\udc69&zwj;\ud83d\udd27",
        "woman_office_worker": "\ud83d\udc69&zwj;\ud83d\udcbc",
        "woman_pilot": "\ud83d\udc69&zwj;\u2708\uFE0F",
        "woman_playing_handball": "\ud83e\udd3e&zwj;\u2640\uFE0F",
        "woman_playing_water_polo": "\ud83e\udd3d&zwj;\u2640\uFE0F",
        "woman_scientist": "\ud83d\udc69&zwj;\ud83d\udd2c",
        "woman_shrugging": "\ud83e\udd37&zwj;\u2640\uFE0F",
        "woman_singer": "\ud83d\udc69&zwj;\ud83c\udfa4",
        "woman_student": "\ud83d\udc69&zwj;\ud83c\udf93",
        "woman_teacher": "\ud83d\udc69&zwj;\ud83c\udfeb",
        "woman_technologist": "\ud83d\udc69&zwj;\ud83d\udcbb",
        "woman_with_turban": "\ud83d\udc73&zwj;\u2640\uFE0F",
        "womans_clothes": "\ud83d\udc5a",
        "womans_hat": "\ud83d\udc52",
        "women_wrestling": "\ud83e\udd3c&zwj;\u2640\uFE0F",
        "womens": "\ud83d\udeba",
        "world_map": "\ud83d\uddfa",
        "worried": "\ud83d\ude1f",
        "wrench": "\ud83d\udd27",
        "writing_hand": "\u270D\uFE0F",
        "x": "\u274C",
        "yellow_heart": "\ud83d\udc9b",
        "yen": "\ud83d\udcb4",
        "yin_yang": "\u262F\uFE0F",
        "yum": "\ud83d\ude0b",
        "zap": "\u26A1\uFE0F",
        "zipper_mouth_face": "\ud83e\udd10",
        "zzz": "\ud83d\udca4",
        /* special emojis :P */ "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        "showdown": "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    };
    /**
 * Created by Estevao on 31-05-2015.
 */ /**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */ showdown.Converter = function(converterOptions) {
        "use strict";
        var /**
       * Options used by this converter
       * @private
       * @type {{}}
       */ options = {}, /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */ langExtensions = [], /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */ outputModifiers = [], /**
       * Event listeners
       * @private
       * @type {{}}
       */ listeners = {}, /**
       * The flavor set in this converter
       */ setConvFlavor = setFlavor, /**
       * Metadata of the document
       * @type {{parsed: {}, raw: string, format: string}}
       */ metadata = {
            parsed: {},
            raw: "",
            format: ""
        };
        _constructor();
        /**
   * Converter constructor
   * @private
   */ function _constructor() {
            converterOptions = converterOptions || {};
            for(var gOpt in globalOptions)if (globalOptions.hasOwnProperty(gOpt)) options[gOpt] = globalOptions[gOpt];
            // Merge options
            if (typeof converterOptions === "object") {
                for(var opt in converterOptions)if (converterOptions.hasOwnProperty(opt)) options[opt] = converterOptions[opt];
            } else throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
            if (options.extensions) showdown.helper.forEach(options.extensions, _parseExtension);
        }
        /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */ function _parseExtension(ext, name) {
            name = name || null;
            // If it's a string, the extension was previously loaded
            if (showdown.helper.isString(ext)) {
                ext = showdown.helper.stdExtName(ext);
                name = ext;
                // LEGACY_SUPPORT CODE
                if (showdown.extensions[ext]) {
                    console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method." + "Please inform the developer that the extension should be updated!");
                    legacyExtensionLoading(showdown.extensions[ext], ext);
                    return;
                // END LEGACY SUPPORT CODE
                } else if (!showdown.helper.isUndefined(extensions[ext])) ext = extensions[ext];
                else throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
            if (typeof ext === "function") ext = ext();
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExt = validate(ext, name);
            if (!validExt.valid) throw Error(validExt.error);
            for(var i = 0; i < ext.length; ++i){
                switch(ext[i].type){
                    case "lang":
                        langExtensions.push(ext[i]);
                        break;
                    case "output":
                        outputModifiers.push(ext[i]);
                        break;
                }
                if (ext[i].hasOwnProperty("listeners")) {
                    for(var ln in ext[i].listeners)if (ext[i].listeners.hasOwnProperty(ln)) listen(ln, ext[i].listeners[ln]);
                }
            }
        }
        /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */ function legacyExtensionLoading(ext, name) {
            if (typeof ext === "function") ext = ext(new showdown.Converter());
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var valid = validate(ext, name);
            if (!valid.valid) throw Error(valid.error);
            for(var i = 0; i < ext.length; ++i)switch(ext[i].type){
                case "lang":
                    langExtensions.push(ext[i]);
                    break;
                case "output":
                    outputModifiers.push(ext[i]);
                    break;
                default:
                    throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */ function listen(name, callback) {
            if (!showdown.helper.isString(name)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
            if (typeof callback !== "function") throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
            if (!listeners.hasOwnProperty(name)) listeners[name] = [];
            listeners[name].push(callback);
        }
        function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
            return text.replace(rgx, "");
        }
        /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */ this._dispatch = function dispatch(evtName, text, options, globals) {
            if (listeners.hasOwnProperty(evtName)) for(var ei = 0; ei < listeners[evtName].length; ++ei){
                var nText = listeners[evtName][ei](evtName, text, this, options, globals);
                if (nText && typeof nText !== "undefined") text = nText;
            }
            return text;
        };
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */ this.listen = function(name, callback) {
            listen(name, callback);
            return this;
        };
        /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */ this.makeHtml = function(text) {
            //check if text is not falsy
            if (!text) return text;
            var globals = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: langExtensions,
                outputModifiers: outputModifiers,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                    parsed: {},
                    raw: "",
                    format: ""
                }
            };
            // This lets us use ¨ trema as an escape char to avoid md5 hashes
            // The choice of character is arbitrary; anything that isn't
            // magic in Markdown will work.
            text = text.replace(/¨/g, "\xa8T");
            // Replace $ with ¨D
            // RegExp interprets $ as a special character
            // when it's in a replacement string
            text = text.replace(/\$/g, "\xa8D");
            // Standardize line endings
            text = text.replace(/\r\n/g, "\n"); // DOS to Unix
            text = text.replace(/\r/g, "\n"); // Mac to Unix
            // Stardardize line spaces
            text = text.replace(/\u00A0/g, "&nbsp;");
            if (options.smartIndentationFix) text = rTrimInputText(text);
            // Make sure text begins and ends with a couple of newlines:
            text = "\n\n" + text + "\n\n";
            // detab
            text = showdown.subParser("detab")(text, options, globals);
            /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */ text = text.replace(/^[ \t]+$/mg, "");
            //run languageExtensions
            showdown.helper.forEach(langExtensions, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // run the sub parsers
            text = showdown.subParser("metadata")(text, options, globals);
            text = showdown.subParser("hashPreCodeTags")(text, options, globals);
            text = showdown.subParser("githubCodeBlocks")(text, options, globals);
            text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown.subParser("hashCodeTags")(text, options, globals);
            text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
            text = showdown.subParser("blockGamut")(text, options, globals);
            text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
            text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
            // attacklab: Restore dollar signs
            text = text.replace(/¨D/g, "$$");
            // attacklab: Restore tremas
            text = text.replace(/¨T/g, "\xa8");
            // render a complete html document instead of a partial if the option is enabled
            text = showdown.subParser("completeHTMLDocument")(text, options, globals);
            // Run output modifiers
            showdown.helper.forEach(outputModifiers, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // update metadata
            metadata = globals.metadata;
            return text;
        };
        /**
   * Converts an HTML string into a markdown string
   * @param src
   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
   * @returns {string}
   */ this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
            // replace \r\n with \n
            src = src.replace(/\r\n/g, "\n");
            src = src.replace(/\r/g, "\n"); // old macs
            // due to an edge case, we need to find this: > <
            // to prevent removing of non silent white spaces
            // ex: <em>this is</em> <strong>sparta</strong>
            src = src.replace(/>[ \t]+</, ">\xa8NBSP;<");
            if (!HTMLParser) {
                if (window && window.document) HTMLParser = window.document;
                else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
            var doc = HTMLParser.createElement("div");
            doc.innerHTML = src;
            var globals = {
                preList: substitutePreCodeTags(doc)
            };
            // remove all newlines and collapse spaces
            clean(doc);
            // some stuff, like accidental reference links must now be escaped
            // TODO
            // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);
            var nodes = doc.childNodes, mdDoc = "";
            for(var i = 0; i < nodes.length; i++)mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
            function clean(node) {
                for(var n = 0; n < node.childNodes.length; ++n){
                    var child = node.childNodes[n];
                    if (child.nodeType === 3) {
                        if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                            node.removeChild(child);
                            --n;
                        } else {
                            child.nodeValue = child.nodeValue.split("\n").join(" ");
                            child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                        }
                    } else if (child.nodeType === 1) clean(child);
                }
            }
            // find all pre tags and replace contents with placeholder
            // we need this so that we can remove all indentation from html
            // to ease up parsing
            function substitutePreCodeTags(doc) {
                var pres = doc.querySelectorAll("pre"), presPH = [];
                for(var i = 0; i < pres.length; ++i)if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === "code") {
                    var content = pres[i].firstChild.innerHTML.trim(), language = pres[i].firstChild.getAttribute("data-language") || "";
                    // if data-language attribute is not defined, then we look for class language-*
                    if (language === "") {
                        var classes = pres[i].firstChild.className.split(" ");
                        for(var c = 0; c < classes.length; ++c){
                            var matches = classes[c].match(/^language-(.+)$/);
                            if (matches !== null) {
                                language = matches[1];
                                break;
                            }
                        }
                    }
                    // unescape html entities in content
                    content = showdown.helper.unescapeHTMLEntities(content);
                    presPH.push(content);
                    pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
                } else {
                    presPH.push(pres[i].innerHTML);
                    pres[i].innerHTML = "";
                    pres[i].setAttribute("prenum", i.toString());
                }
                return presPH;
            }
            return mdDoc;
        };
        /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */ this.setOption = function(key, value) {
            options[key] = value;
        };
        /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */ this.getOption = function(key) {
            return options[key];
        };
        /**
   * Get the options of this Converter instance
   * @returns {{}}
   */ this.getOptions = function() {
            return options;
        };
        /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */ this.addExtension = function(extension, name) {
            name = name || null;
            _parseExtension(extension, name);
        };
        /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */ this.useExtension = function(extensionName) {
            _parseExtension(extensionName);
        };
        /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */ this.setFlavor = function(name) {
            if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
            var preset = flavor[name];
            setConvFlavor = name;
            for(var option in preset)if (preset.hasOwnProperty(option)) options[option] = preset[option];
        };
        /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */ this.getFlavor = function() {
            return setConvFlavor;
        };
        /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */ this.removeExtension = function(extension) {
            if (!showdown.helper.isArray(extension)) extension = [
                extension
            ];
            for(var a = 0; a < extension.length; ++a){
                var ext = extension[a];
                for(var i = 0; i < langExtensions.length; ++i)if (langExtensions[i] === ext) langExtensions.splice(i, 1);
                for(var ii = 0; ii < outputModifiers.length; ++ii)if (outputModifiers[ii] === ext) outputModifiers.splice(ii, 1);
            }
        };
        /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */ this.getAllExtensions = function() {
            return {
                language: langExtensions,
                output: outputModifiers
            };
        };
        /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */ this.getMetadata = function(raw) {
            if (raw) return metadata.raw;
            else return metadata.parsed;
        };
        /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */ this.getMetadataFormat = function() {
            return metadata.format;
        };
        /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */ this._setMetadataPair = function(key, value) {
            metadata.parsed[key] = value;
        };
        /**
   * Private: set metadata format
   * @param {string} format
   */ this._setMetadataFormat = function(format) {
            metadata.format = format;
        };
        /**
   * Private: set metadata raw text
   * @param {string} raw
   */ this._setMetadataRaw = function(raw) {
            metadata.raw = raw;
        };
    };
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("anchors", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown.helper.isUndefined(title)) title = "";
            linkId = linkId.toLowerCase();
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (!url) {
                if (!linkId) // lower-case and turn embedded newlines into spaces
                linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                    url = globals.gUrls[linkId];
                    if (!showdown.helper.isUndefined(globals.gTitles[linkId])) title = globals.gTitles[linkId];
                } else return wholeMatch;
            }
            //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';
            if (title !== "" && title !== null) {
                title = title.replace(/"/g, "&quot;");
                //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
                title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            // optionLinksInNewWindow only applies
            // to external links. Hash links (#) open in same page
            if (options.openLinksInNewWindow && !/^#/.test(url)) // escaped _
            result += ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            result += ">" + linkText + "</a>";
            return result;
        };
        // First, handle reference-style links: [link text] [id]
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        // Next, inline-style links: [link text](url "optional title")
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // normal cases
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        // Lastly handle GithubMentions if option is enabled
        if (options.ghMentions) text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
            if (escape === "\\") return st + mentions;
            //check if options.ghMentionsLink is a string
            if (!showdown.helper.isString(options.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
        });
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
    });
    // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
    var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
        "use strict";
        return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) link = link.replace(/^www\./i, "http://www.");
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) append = trailingPunctuation;
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
        };
    }, replaceMail = function(options, globals) {
        "use strict";
        return function(wholeMatch, b, mail) {
            var href = "mailto:";
            b = b || "";
            mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
                href = showdown.helper.encodeEmailAddress(href + mail);
                mail = showdown.helper.encodeEmailAddress(mail);
            } else href = href + mail;
            return b + '<a href="' + href + '">' + mail + "</a>";
        };
    };
    showdown.subParser("autoLinks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
    });
    showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
        "use strict";
        if (!options.simplifiedAutoLink) return text;
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) text = text.replace(simpleURLRegex2, replaceLink(options));
        else text = text.replace(simpleURLRegex, replaceLink(options));
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
    });
    /**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("blockGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        // we parse blockquotes first so that we can have headings and hrs
        // inside blockquotes
        text = showdown.subParser("blockQuotes")(text, options, globals);
        text = showdown.subParser("headers")(text, options, globals);
        // Do Horizontal Rules:
        text = showdown.subParser("horizontalRule")(text, options, globals);
        text = showdown.subParser("lists")(text, options, globals);
        text = showdown.subParser("codeBlocks")(text, options, globals);
        text = showdown.subParser("tables")(text, options, globals);
        // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.
        text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("blockQuotes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        // add a couple extra lines after the text and endtext mark
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        text = text.replace(rgx, function(bq) {
            // attacklab: hack around Konqueror 3.5.4 bug:
            // "----------bug".replace(/^-/g,"") == "bug"
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, ""); // trim one level of quoting
            // attacklab: clean up hack
            bq = bq.replace(/¨0/g, "");
            bq = bq.replace(/^[ \t]+$/gm, ""); // trim whitespace-only lines
            bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
            bq = showdown.subParser("blockGamut")(bq, options, globals); // recurse
            bq = bq.replace(/(^|\n)/g, "$1  ");
            // These leading spaces screw with <pre> content, so we need to fix that:
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
                var pre = m1;
                // attacklab: hack around Konqueror 3.5.4 bug:
                pre = pre.replace(/^  /mg, "\xa80");
                pre = pre.replace(/¨0/g, "");
                return pre;
            });
            return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
    });
    /**
 * Process Markdown `<pre><code>` blocks.
 */ showdown.subParser("codeBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        // sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
            var codeblock = m1, nextChar = m2, end = "\n";
            codeblock = showdown.subParser("outdent")(codeblock, options, globals);
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing newlines
            if (options.omitExtraWLInCodeBlocks) end = "";
            codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
            return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
    });
    /**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */ showdown.subParser("codeSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") text = "";
        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
            c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
            c = showdown.subParser("encodeCode")(c, options, globals);
            c = m1 + "<code>" + c + "</code>";
            c = showdown.subParser("hashHTMLSpans")(c, options, globals);
            return c;
        });
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
    });
    /**
 * Create a full HTML document from the processed markdown
 */ showdown.subParser("completeHTMLDocument", function(text, options, globals) {
        "use strict";
        if (!options.completeHTMLDocument) return text;
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
            doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
            if (doctype === "html" || doctype === "html5") charset = '<meta charset="utf-8">';
        }
        for(var meta in globals.metadata.parsed)if (globals.metadata.parsed.hasOwnProperty(meta)) switch(meta.toLowerCase()){
            case "doctype":
                break;
            case "title":
                title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
            case "charset":
                if (doctype === "html" || doctype === "html5") charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                else charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                break;
            case "language":
            case "lang":
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
            default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
    });
    /**
 * Convert all tabs to spaces
 */ showdown.subParser("detab", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("detab.before", text, options, globals);
        // expand first n-1 tabs
        text = text.replace(/\t(?=\t)/g, "    "); // g_tab_width
        // replace the nth with two sentinels
        text = text.replace(/\t/g, "\xa8A\xa8B");
        // use the sentinel to anchor our regex so it doesn't explode
        text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
            var leadingText = m1, numSpaces = 4 - leadingText.length % 4; // g_tab_width
            // there *must* be a better way to do this:
            for(var i = 0; i < numSpaces; i++)leadingText += " ";
            return leadingText;
        });
        // clean up sentinels
        text = text.replace(/¨A/g, "    "); // g_tab_width
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
    });
    showdown.subParser("ellipsis", function(text, options, globals) {
        "use strict";
        if (!options.ellipsis) return text;
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "\u2026");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
    });
    /**
 * Turn emoji codes into emojis
 *
 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
 */ showdown.subParser("emoji", function(text, options, globals) {
        "use strict";
        if (!options.emoji) return text;
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
            if (showdown.helper.emojis.hasOwnProperty(emojiCode)) return showdown.helper.emojis[emojiCode];
            return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
    });
    /**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */ showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        // http://bumppo.net/projects/amputator/
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        // Encode naked <'s
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        // Encode <
        text = text.replace(/</g, "&lt;");
        // Encode >
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
    });
    /**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */ showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
    });
    /**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */ showdown.subParser("encodeCode", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.
        text = text.replace(/&/g, "&amp;")// Do the angle bracket song and dance:
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")// Now, escape characters that are magic in Markdown:
        .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
    });
    /**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */ showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        // Build a regex to find HTML tags.
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
    });
    /**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */ showdown.subParser("githubCodeBlocks", function(text, options, globals) {
        "use strict";
        // early exit if option is not enabled
        if (!options.ghCodeBlocks) return text;
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "\xa80";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
            // First parse the github code block
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace
            codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
            codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
            // Since GHCodeblocks can be false positives, we need to
            // store the primitive text and the parsed text in a global var,
            // and then return a token
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        });
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
    });
    showdown.subParser("hashBlock", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n\xa8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <code> elements that should not be parsed as markdown
 */ showdown.subParser("hashCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\xa8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        // Hash naked <code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("hashElement", function(text, options, globals) {
        "use strict";
        return function(wholeMatch, m1) {
            var blockText = m1;
            // Undo double lines
            blockText = blockText.replace(/\n\n/g, "\n");
            blockText = blockText.replace(/^\n/, "");
            // strip trailing blank lines
            blockText = blockText.replace(/\n+$/g, "");
            // Replace the element text with a marker ("¨KxK" where x is its key)
            blockText = "\n\n\xa8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
            return blockText;
        };
    });
    showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p"
        ], repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            // check if this html element is marked as markdown
            // if so, it's contents should be parsed as markdown
            if (left.search(/\bmarkdown\b/) !== -1) txt = left + globals.converter.makeHtml(match) + right;
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        };
        if (options.backslashEscapesHTMLTags) // encode backslash escaped HTML tags
        text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
        });
        // hash HTML Blocks
        for(var i = 0; i < blockTags.length; ++i){
            var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
            // 1. Look for the first position of the first opening HTML tag in the text
            while((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1){
                // if the HTML tag is \ escaped, we need to escape it and break
                //2. Split the text in that position
                var subTexts = showdown.helper.splitAtIndex(text, opTagPos), //3. Match recursively
                newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
                // prevent an infinite loop
                if (newSubText1 === subTexts[1]) break;
                text = subTexts[0].concat(newSubText1);
            }
        }
        // HR SPECIAL CASE
        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        // Special case for standalone HTML comments
        text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "^ {0,3}<!--", "-->", "gm");
        // PHP and ASP-style processor instructions (<?...?> and <%...%>)
        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
    });
    /**
 * Hash span elements that should not be parsed as markdown
 */ showdown.subParser("hashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
            return "\xa8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        // Hash Self Closing tags
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags without properties
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags with properties
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash self closing tags without />
        text = text.replace(/<[^>]+?>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/ text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Unhash HTML spans
 */ showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for(var i = 0; i < globals.gHtmlSpans.length; ++i){
            var repText = globals.gHtmlSpans[i], // limiter to prevent infinite loop (assume 10 as limit for recurse)
            limit = 0;
            while(/¨C(\d+)C/.test(repText)){
                var num = RegExp.$1;
                repText = repText.replace("\xa8C" + num + "C", globals.gHtmlSpans[num]);
                if (limit === 10) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break;
                }
                ++limit;
            }
            text = text.replace("\xa8C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */ showdown.subParser("hashPreCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            // encode html entities
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        };
        // Hash <pre><code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("headers", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), // Set text-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
            var hText = m2;
            if (options.customizedHeaderId) hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
            var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(header, options, globals);
        });
        function headerId(m) {
            var title, prefix;
            // It is separate from other options to allow combining prefix and customized
            if (options.customizedHeaderId) {
                var match = m.match(/\{([^{]+?)}\s*$/);
                if (match && match[1]) m = match[1];
            }
            title = m;
            // Prefix id to prevent causing inadvertent pre-existing style matches.
            if (showdown.helper.isString(options.prefixHeaderId)) prefix = options.prefixHeaderId;
            else if (options.prefixHeaderId === true) prefix = "section-";
            else prefix = "";
            if (!options.rawPrefixHeaderId) title = prefix + title;
            if (options.ghCompatibleHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "")// replace rest of the chars (&~$ are repeated as they might have been escaped)
            // borrowed from github's redcarpet (some they should produce similar results)
            .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
            else if (options.rawHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "&").replace(/¨T/g, "\xa8").replace(/¨D/g, "$")// replace " and '
            .replace(/["']/g, "-").toLowerCase();
            else title = title.replace(/[^\w]/g, "").toLowerCase();
            if (options.rawPrefixHeaderId) title = prefix + title;
            if (globals.hashLinkCounts[title]) title = title + "-" + globals.hashLinkCounts[title]++;
            else globals.hashLinkCounts[title] = 1;
            return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("horizontalRule", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown image shortcuts into <img> tags.
 */ showdown.subParser("images", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, "");
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();
            if (!title) title = "";
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (url === "" || url === null) {
                if (linkId === "" || linkId === null) // lower-case and turn embedded newlines into spaces
                linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(gUrls[linkId])) {
                    url = gUrls[linkId];
                    if (!showdown.helper.isUndefined(gTitles[linkId])) title = gTitles[linkId];
                    if (!showdown.helper.isUndefined(gDims[linkId])) {
                        width = gDims[linkId].width;
                        height = gDims[linkId].height;
                    }
                } else return wholeMatch;
            }
            altText = altText.replace(/"/g, "&quot;")//altText = showdown.helper.escapeCharacters(altText, '*_', false);
            .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            //url = showdown.helper.escapeCharacters(url, '*_', false);
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';
            if (title && showdown.helper.isString(title)) {
                title = title.replace(/"/g, "&quot;")//title = showdown.helper.escapeCharacters(title, '*_', false);
                .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            if (width && height) {
                width = width === "*" ? "auto" : width;
                height = height === "*" ? "auto" : height;
                result += ' width="' + width + '"';
                result += ' height="' + height + '"';
            }
            result += " />";
            return result;
        }
        // First, handle reference-style labeled images: ![alt text][id]
        text = text.replace(referenceRegExp, writeImageTag);
        // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
        // base64 encoded images
        text = text.replace(base64RegExp, writeImageTagBase64);
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(crazyRegExp, writeImageTag);
        // normal cases
        text = text.replace(inlineRegExp, writeImageTag);
        // handle reference-style shortcuts: ![img text]
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
    });
    showdown.subParser("italicsAndBold", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        // it's faster to have 3 separate regexes for each case than have just one
        // because of backtracing, in some cases, it could lead to an exponential effect
        // called "catastrophic backtrace". Ominous!
        function parseInside(txt, left, right) {
            /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */ return left + txt + right;
        }
        // Parse underscores
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return parseInside(txt, "<strong><em>", "</em></strong>");
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return parseInside(txt, "<strong>", "</strong>");
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
                return parseInside(txt, "<em>", "</em>");
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
                // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        // Now parse asterisks
        if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong><em>", "</em></strong>");
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong>", "</strong>");
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<em>", "</em>");
            });
        } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
                // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
    });
    /**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */ showdown.subParser("lists", function(text, options, globals) {
        "use strict";
        /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function processListItems(listStr, trimTrailing) {
            // The $g_list_level global keeps track of when we're inside a list.
            // Each time we enter a list, we increment it; when we leave a list,
            // we decrement. If it's zero, we're not in a list anymore.
            //
            // We do this because when we're not inside a list, we want to treat
            // something like this:
            //
            //    I recommend upgrading to version
            //    8. Oops, now this line is treated
            //    as a sub-list.
            //
            // As a single paragraph, despite the fact that the second line starts
            // with a digit-period-space sequence.
            //
            // Whereas when we're inside a list (or sub-list), that line will be
            // treated as the start of a sub-list. What a kludge, huh? This is
            // an aspect of Markdown's syntax that's hard to parse perfectly
            // without resorting to mind-reading. Perhaps the solution is to
            // change the syntax rules such that sub-lists must start with a
            // starting cardinal number; e.g. "1." or "a.".
            globals.gListLevel++;
            // trim trailing blank lines:
            listStr = listStr.replace(/\n{2,}$/, "\n");
            // attacklab: add sentinel to emulate \z
            listStr += "\xa80";
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
            // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
            // which is a syntax breaking change
            // activating this option reverts to old behavior
            if (options.disableForced4SpacesIndentedSublists) rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
                checked = checked && checked.trim() !== "";
                var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
                // Support for github tasklists
                if (taskbtn && options.tasklists) {
                    bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                    item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        if (checked) otp += " checked";
                        otp += ">";
                        return otp;
                    });
                }
                // ISSUE #312
                // This input: - - - a
                // causes trouble to the parser, since it interprets it as:
                // <ul><li><li><li>a</li></li></li></ul>
                // instead of:
                // <ul><li>- - a</li></ul>
                // So, to prevent it, we will put a marker (¨A)in the beginning of the line
                // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
                item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
                    return "\xa8A" + wm2;
                });
                // m1 - Leading line or
                // Has a double return (multi paragraph) or
                // Has sublist
                if (m1 || item.search(/\n{2,}/) > -1) {
                    item = showdown.subParser("githubCodeBlocks")(item, options, globals);
                    item = showdown.subParser("blockGamut")(item, options, globals);
                } else {
                    // Recursion for sub-lists:
                    item = showdown.subParser("lists")(item, options, globals);
                    item = item.replace(/\n$/, ""); // chomp(item)
                    item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
                    // Colapse double linebreaks
                    item = item.replace(/\n\n+/g, "\n\n");
                    if (isParagraphed) item = showdown.subParser("paragraphs")(item, options, globals);
                    else item = showdown.subParser("spanGamut")(item, options, globals);
                }
                // now we need to remove the marker (¨A)
                item = item.replace("\xa8A", "");
                // we can finally wrap the line in list item tags
                item = "<li" + bulletStyle + ">" + item + "</li>\n";
                return item;
            });
            // attacklab: strip sentinel
            listStr = listStr.replace(/¨0/g, "");
            globals.gListLevel--;
            if (trimTrailing) listStr = listStr.replace(/\s+$/, "");
            return listStr;
        }
        function styleStartNumber(list, listType) {
            // check if ol and starts by a number different than 1
            if (listType === "ol") {
                var res = list.match(/^ *(\d+)\./);
                if (res && res[1] !== "1") return ' start="' + res[1] + '"';
            }
            return "";
        }
        /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function parseConsecutiveLists(list, listType, trimTrailing) {
            // check if we caught 2 or more consecutive lists by mistake
            // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
            if (list.search(counterRxg) !== -1) (function parseCL(txt) {
                var pos = txt.search(counterRxg), style = styleStartNumber(list, listType);
                if (pos !== -1) {
                    // slice
                    result += "\n\n<" + listType + style + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                    // invert counterType and listType
                    listType = listType === "ul" ? "ol" : "ul";
                    counterRxg = listType === "ul" ? olRgx : ulRgx;
                    //recurse
                    parseCL(txt.slice(pos));
                } else result += "\n\n<" + listType + style + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
            })(list);
            else {
                var style = styleStartNumber(list, listType);
                result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
            }
            return result;
        }
        /** Start of list parsing **/ text = globals.converter._dispatch("lists.before", text, options, globals);
        // add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231
        text += "\xa80";
        if (globals.gListLevel) text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, true);
        });
        else text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, false);
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
    });
    /**
 * Parse metadata at the top of the document
 */ showdown.subParser("metadata", function(text, options, globals) {
        "use strict";
        if (!options.metadata) return text;
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
            // raw is raw so it's not changed in any way
            globals.metadata.raw = content;
            // escape chars forbidden in html attributes
            // double quotes
            content = content// ampersand first
            .replace(/&/g, "&amp;")// double quotes
            .replace(/"/g, "&quot;");
            content = content.replace(/\n {4}/g, " ");
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
                globals.metadata.parsed[key] = value;
                return "";
            });
        }
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
            if (format) globals.metadata.format = format;
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
    });
    /**
 * Remove one level of line-leading tabs or spaces
 */ showdown.subParser("outdent", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"
        text = text.replace(/^(\t|[ ]{1,4})/gm, "\xa80"); // attacklab: g_tab_width
        // attacklab: clean up hack
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
    });
    /**
 *
 */ showdown.subParser("paragraphs", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length; // Wrap <p> tags
        for(var i = 0; i < end; i++){
            var str = grafs[i];
            // if this is an HTML marker, copy it
            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) grafsOut.push(str);
            else if (str.search(/\S/) >= 0) {
                str = showdown.subParser("spanGamut")(str, options, globals);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>";
                grafsOut.push(str);
            }
        }
        /** Unhashify HTML blocks */ end = grafsOut.length;
        for(i = 0; i < end; i++){
            var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
            // if this is a marker for an html block...
            // use RegExp.test instead of string.search because of QML bug
            while(/¨(K|G)(\d+)\1/.test(grafsOutIt)){
                var delim = RegExp.$1, num = RegExp.$2;
                if (delim === "K") blockText = globals.gHtmlBlocks[num];
                else // we need to check if ghBlock is a false positive
                if (codeFlag) // use encoded version of all text
                blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
                else blockText = globals.ghCodeBlocks[num].codeblock;
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
                grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
                // Check if grafsOutIt is a pre->code
                if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) codeFlag = true;
            }
            grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
    });
    /**
 * Run extension
 */ showdown.subParser("runExtension", function(ext, text, options, globals) {
        "use strict";
        if (ext.filter) text = ext.filter(text, globals.converter, options);
        else if (ext.regex) {
            // TODO remove this when old extension loading mechanism is deprecated
            var re = ext.regex;
            if (!(re instanceof RegExp)) re = new RegExp(re, "g");
            text = text.replace(re, ext.replace);
        }
        return text;
    });
    /**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("spanGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown.subParser("codeSpans")(text, options, globals);
        text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
        // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.
        text = showdown.subParser("images")(text, options, globals);
        text = showdown.subParser("anchors")(text, options, globals);
        // Make links out of things like `<http://example.com/>`
        // Must come after anchors, because you can use < and >
        // delimiters in inline links like [this](<url>).
        text = showdown.subParser("autoLinks")(text, options, globals);
        text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown.subParser("emoji")(text, options, globals);
        text = showdown.subParser("underline")(text, options, globals);
        text = showdown.subParser("italicsAndBold")(text, options, globals);
        text = showdown.subParser("strikethrough")(text, options, globals);
        text = showdown.subParser("ellipsis")(text, options, globals);
        // we need to hash HTML tags inside spans
        text = showdown.subParser("hashHTMLSpans")(text, options, globals);
        // now we encode amps and angles
        text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
        // Do hard breaks
        if (options.simpleLineBreaks) // GFM style hard breaks
        // only add line breaks if the text does not contain a block (special case for lists)
        {
            if (!/\n\n¨K/.test(text)) text = text.replace(/\n+/g, "<br />\n");
        } else // Vanilla hard breaks
        text = text.replace(/  +\n/g, "<br />\n");
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("strikethrough", function(text, options, globals) {
        "use strict";
        function parseInside(txt) {
            if (options.simplifiedAutoLink) txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
            return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
            text = globals.converter._dispatch("strikethrough.before", text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
                return parseInside(txt);
            });
            text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
    });
    /**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */ showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
        "use strict";
        var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
            // if there aren't two instances of linkId it must not be a reference link so back out
            linkId = linkId.toLowerCase();
            if (text.toLowerCase().split(linkId).length - 1 < 2) return wholeMatch;
            if (url.match(/^data:.+?\/.+?;base64,/)) // remove newlines
            globals.gUrls[linkId] = url.replace(/\s/g, "");
            else globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals); // Link IDs are case-insensitive
            if (blankLines) // Oops, found blank lines, so it's not a title.
            // Put back the parenthetical statement we stole.
            return blankLines + title;
            else {
                if (title) globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
                if (options.parseImgDimensions && width && height) globals.gDimensions[linkId] = {
                    width: width,
                    height: height
                };
            }
            // Completely remove the definition from the text
            return "";
        };
        // first we try to find base64 link references
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return text;
    });
    showdown.subParser("tables", function(text, options, globals) {
        "use strict";
        if (!options.tables) return text;
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
        singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) return ' style="text-align:left;"';
            else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) return ' style="text-align:right;"';
            else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) return ' style="text-align:center;"';
            else return "";
        }
        function parseHeaders(header, style) {
            var id = "";
            header = header.trim();
            // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
            if (options.tablesHeaderId || options.tableHeaderId) id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
            header = showdown.subParser("spanGamut")(header, options, globals);
            return "<th" + id + style + ">" + header + "</th>\n";
        }
        function parseCells(cell, style) {
            var subText = showdown.subParser("spanGamut")(cell, options, globals);
            return "<td" + style + ">" + subText + "</td>\n";
        }
        function buildTable(headers, cells) {
            var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
            for(var i = 0; i < tblLgn; ++i)tb += headers[i];
            tb += "</tr>\n</thead>\n<tbody>\n";
            for(i = 0; i < cells.length; ++i){
                tb += "<tr>\n";
                for(var ii = 0; ii < tblLgn; ++ii)tb += cells[i][ii];
                tb += "</tr>\n";
            }
            tb += "</tbody>\n</table>\n";
            return tb;
        }
        function parseTable(rawTable) {
            var i, tableLines = rawTable.split("\n");
            for(i = 0; i < tableLines.length; ++i){
                // strip wrong first and last column if wrapped tables are used
                if (/^ {0,3}\|/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
                if (/\|[ \t]*$/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
                // parse code spans first, but we only support one line code spans
                tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
            }
            var rawHeaders = tableLines[0].split("|").map(function(s) {
                return s.trim();
            }), rawStyles = tableLines[1].split("|").map(function(s) {
                return s.trim();
            }), rawCells = [], headers = [], styles = [], cells = [];
            tableLines.shift();
            tableLines.shift();
            for(i = 0; i < tableLines.length; ++i){
                if (tableLines[i].trim() === "") continue;
                rawCells.push(tableLines[i].split("|").map(function(s) {
                    return s.trim();
                }));
            }
            if (rawHeaders.length < rawStyles.length) return rawTable;
            for(i = 0; i < rawStyles.length; ++i)styles.push(parseStyles(rawStyles[i]));
            for(i = 0; i < rawHeaders.length; ++i){
                if (showdown.helper.isUndefined(styles[i])) styles[i] = "";
                headers.push(parseHeaders(rawHeaders[i], styles[i]));
            }
            for(i = 0; i < rawCells.length; ++i){
                var row = [];
                for(var ii = 0; ii < headers.length; ++ii){
                    showdown.helper.isUndefined(rawCells[i][ii]);
                    row.push(parseCells(rawCells[i][ii], styles[ii]));
                }
                cells.push(row);
            }
            return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        // find escaped pipe characters
        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
        // parse multi column tables
        text = text.replace(tableRgx, parseTable);
        // parse one column tables
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
    });
    showdown.subParser("underline", function(text, options, globals) {
        "use strict";
        if (!options.underline) return text;
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
        }
        // escape remaining underscores to prevent them being parsed by italic and bold
        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
    });
    /**
 * Swap back in all the special characters we've hidden.
 */ showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
    });
    showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i){
                var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
                if (innerTxt === "") continue;
                txt += innerTxt;
            }
        }
        // cleanup
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
    });
    showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
        "use strict";
        var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
    });
    showdown.subParser("makeMarkdown.codeSpan", function(node) {
        "use strict";
        return "`" + node.innerHTML + "`";
    });
    showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "*";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "*";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
        "use strict";
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node.hasChildNodes()) {
            txt = headerMark + " ";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---";
    });
    showdown.subParser("makeMarkdown.image", function(node) {
        "use strict";
        var txt = "";
        if (node.hasAttribute("src")) {
            txt += "![" + node.getAttribute("alt") + "](";
            txt += "<" + node.getAttribute("src") + ">";
            if (node.hasAttribute("width") && node.hasAttribute("height")) txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.links", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
            var children = node.childNodes, childrenLength = children.length;
            txt = "[";
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "](";
            txt += "<" + node.getAttribute("href") + ">";
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.list", function(node, globals, type) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
        for(var i = 0; i < listItemsLenght; ++i){
            if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") continue;
            // define the bullet to use in list
            var bullet = "";
            if (type === "ol") bullet = listNum.toString() + ". ";
            else bullet = "- ";
            // parse list item
            txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
            ++listNum;
        }
        // add comment at the end to prevent consecutive lists to be parsed as one
        txt += "\n<!-- -->\n";
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.listItem", function(node, globals) {
        "use strict";
        var listItemTxt = "";
        var children = node.childNodes, childrenLenght = children.length;
        for(var i = 0; i < childrenLenght; ++i)listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        // if it's only one liner, we need to add a newline at the end
        if (!/\n$/.test(listItemTxt)) listItemTxt += "\n";
        else // it's multiparagraph, so we need to indent
        listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        return listItemTxt;
    });
    showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
        "use strict";
        spansOnly = spansOnly || false;
        var txt = "";
        // edge case of text without wrapper paragraph
        if (node.nodeType === 3) return showdown.subParser("makeMarkdown.txt")(node, globals);
        // HTML comment
        if (node.nodeType === 8) return "<!--" + node.data + "-->\n\n";
        // process only node elements
        if (node.nodeType !== 1) return "";
        var tagName = node.tagName.toLowerCase();
        switch(tagName){
            //
            // BLOCKS
            //
            case "h1":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
                break;
            case "h2":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
                break;
            case "h3":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
                break;
            case "h4":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
                break;
            case "h5":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
                break;
            case "h6":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
                break;
            case "p":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
                break;
            case "blockquote":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
                break;
            case "hr":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
                break;
            case "ol":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
                break;
            case "ul":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
                break;
            case "precode":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
                break;
            case "pre":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
                break;
            case "table":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
                break;
            //
            // SPANS
            //
            case "code":
                txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
                break;
            case "em":
            case "i":
                txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
                break;
            case "strong":
            case "b":
                txt = showdown.subParser("makeMarkdown.strong")(node, globals);
                break;
            case "del":
                txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
                break;
            case "a":
                txt = showdown.subParser("makeMarkdown.links")(node, globals);
                break;
            case "img":
                txt = showdown.subParser("makeMarkdown.image")(node, globals);
                break;
            default:
                txt = node.outerHTML + "\n\n";
        }
        // common normalization
        // TODO eventually
        return txt;
    });
    showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        // some text normalization
        txt = txt.trim();
        return txt;
    });
    showdown.subParser("makeMarkdown.pre", function(node, globals) {
        "use strict";
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
    });
    showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "~~";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "~~";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.strong", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "**";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "**";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.table", function(node, globals) {
        "use strict";
        var txt = "", tableArray = [
            [],
            []
        ], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
        for(i = 0; i < headings.length; ++i){
            var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
            if (headings[i].hasAttribute("style")) {
                var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
                switch(style){
                    case "text-align:left;":
                        allign = ":---";
                        break;
                    case "text-align:right;":
                        allign = "---:";
                        break;
                    case "text-align:center;":
                        allign = ":---:";
                        break;
                }
            }
            tableArray[0][i] = headContent.trim();
            tableArray[1][i] = allign;
        }
        for(i = 0; i < rows.length; ++i){
            var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
            for(ii = 0; ii < headings.length; ++ii){
                var cellContent = " ";
                if (typeof cols[ii] !== "undefined") cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
                tableArray[r].push(cellContent);
            }
        }
        var cellSpacesCount = 3;
        for(i = 0; i < tableArray.length; ++i)for(ii = 0; ii < tableArray[i].length; ++ii){
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) cellSpacesCount = strLen;
        }
        for(i = 0; i < tableArray.length; ++i){
            for(ii = 0; ii < tableArray[i].length; ++ii)if (i === 1) {
                if (tableArray[i][ii].slice(-1) === ":") tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
                else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
            } else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var children = node.childNodes, childrenLength = children.length;
        for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.txt", function(node) {
        "use strict";
        var txt = node.nodeValue;
        // multiple spaces are collapsed
        txt = txt.replace(/ +/g, " ");
        // replace the custom ¨NBSP; with a space
        txt = txt.replace(/¨NBSP;/g, " ");
        // ", <, > and & should replace escaped html entities
        txt = showdown.helper.unescapeHTMLEntities(txt);
        // escape markdown magic characters
        // emphasis, strong and strikethrough - can appear everywhere
        // we also escape pipe (|) because of tables
        // and escape ` because of code blocks and spans
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        // escape > because of blockquotes
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        // hash character, only troublesome at the beginning of a line because of headers
        txt = txt.replace(/^#/gm, "\\#");
        // horizontal rules
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        // images and links, ] followed by ( is problematic, so we escape it
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        // reference URIs must also be escaped
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
    });
    var root = this;
    // AMD Loader
    if (typeof define === "function" && define.amd) define(function() {
        "use strict";
        return showdown;
    });
    else if (0, module.exports) module.exports = showdown;
    else root.showdown = showdown;
}).call(this);

},{}],"5YuDz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChooseOption", ()=>ChooseOption);
var _truffle = require("@tblabs/truffle");
class ChooseOption extends (0, _truffle.Div) {
    constructor(_router, option){
        super();
        this.Border(1, "#888").Width(42, "%").DisplayInlineBlock().MarginRight(8).MarginTop(8).Background("#fff").CursorPointer();
        this.Append(option.ImageUrl.length < 4 && new (0, _truffle.Span)(option.ImageUrl).FontSize(48).WidthPercent(100), option.ImageUrl.length > 5 && new (0, _truffle.Image)(option.ImageUrl).Padding(0).WidthPercent(100), new (0, _truffle.Div)().Text(option.Label).TextAlignCenter().Padding(8).Background("#fff"));
        this.OnClick(()=>_router.GoToSlide(option.GoTo));
    }
}

},{"@tblabs/truffle":"2JFzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NXbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Center", ()=>Center);
var _truffle = require("@tblabs/truffle");
class Center extends (0, _truffle.Div) {
    constructor(...components){
        super();
        this.TextAlignCenter().FullWidth().Append(...components);
    }
}

},{"@tblabs/truffle":"2JFzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lK7Sg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlidePage", ()=>SlidePage);
var _truffle = require("@tblabs/truffle");
var _page = require("./Page");
var _markdown = require("../Components/Markdown");
class SlidePage extends (0, _page.Page) {
    constructor(_router, slide){
        super(_router);
        this.middle.Append(new (0, _markdown.Markdown)(slide.Content), slide.ImageUrl && new (0, _truffle.Div)().TextAlignCenter().Append(new (0, _truffle.Image)(slide.ImageUrl).WidthPercent(70).Border(5, "#fff")));
        this.bottom.Append(new (0, _truffle.Button)("Cofnij", ()=>_router.GoBack()).Color("#fff"), slide.NextId && new (0, _truffle.Button)("Dalej", ()=>_router.GoToSlide(slide.NextId)).Background("#ff7b0d").Color("#111").MarginLeft(8));
    }
}

},{"@tblabs/truffle":"2JFzm","./Page":"bUNYJ","../Components/Markdown":"iFvdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1i8f7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iPhoneSlides", ()=>iPhoneSlides);
const iPhoneSlides = [
    {
        Id: "iPhone-settings",
        Type: "page",
        Content: "Wejd\u017A w `Ustawienia`, a potem w `Og\xf3lne`",
        ImageUrl: "iphone/setts.png",
        NextId: "iPhone-general"
    },
    {
        Id: "iPhone-general",
        Type: "page",
        Content: "Wybierz `To urz\u0105dzenie...`",
        ImageUrl: "iphone/gen.png",
        NextId: "iPhone:this-device"
    },
    {
        Id: "iPhone:this-device",
        Type: "page",
        Content: "Kliknij `Nazwa`",
        ImageUrl: "iphone/thisdev.png",
        NextId: "iPhone:device-name"
    },
    {
        Id: "iPhone:device-name",
        Type: "page",
        Content: `Zmie\u{144} nazwe na *hotspot1*.
Wielko\u{15B}\u{107} znak\xf3w jest istotna! Nie pomyl si\u{119}!`,
        ImageUrl: "iphone/name.png",
        NextId: "iPhone:go-back"
    },
    {
        Id: "iPhone:go-back",
        Type: "page",
        Content: "Wr\xf3\u0107 do `Ustawie\u0144` i wejd\u017A w `Hotspot osobisty`",
        ImageUrl: "iphone/hot.png",
        NextId: "iPhone:hotspot-options"
    },
    {
        Id: "iPhone:hotspot-options",
        Type: "page",
        Content: "Zaznacz opcje `Maksymalna zgodno\u015B\u0107` o ile masz tak\u0105 na ekranie. Bez tego kamera nie zadzia\u0142a!",
        ImageUrl: "iphone/hot.png",
        NextId: "iPhone:hotspot-password"
    },
    {
        Id: "iPhone:hotspot-password",
        Type: "page",
        Content: "Zmie\u0144 `Has\u0142o Wi-Fi` na *hotspot1password*. Wielko\u015B\u0107 znak\xf3w ma znaczenie! Nie pomyl si\u0119!",
        ImageUrl: "iphone/pass.png",
        NextId: "iPhone:on-off"
    },
    {
        Id: "iPhone:on-off",
        Type: "page",
        Content: "Wy\u0142\u0105cz i w\u0142\u0105cz hotspota (Guzik `Dopuszczaj innych`).\n\n\u26A0\uFE0F *Pami\u0119taj by pozostawi\u0107 telefon na tym ekranie na czas uruchamiania kamery! Bez tego urz\u0105dzenie si\u0119 nie pod\u0142\u0105czy.*",
        ImageUrl: "iphone/hot.png",
        NextId: "camera-start"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9a4XT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "msSlides", ()=>msSlides);
const msSlides = [
    {
        Id: "ms-start",
        Type: "page",
        Content: `### Uruchomienie mikros\u{142}uchawki
        
\u{26A0}\u{FE0F} Przed przyst\u{105}pieniem do uruchomienia mikros\u{142}uchawki wyczy\u{15B}\u{107} porz\u{105}dnie ucho. Pami\u{119}taj by czy\u{15B}ci\u{107} je przed ka\u{17C}dym w\u{142}o\u{17C}eniem s\u{142}uchawki!

`,
        ImageUrl: "ms/ms.jpeg",
        NextId: "ms-open"
    },
    {
        Id: "ms-open",
        Type: "page",
        Content: `Odkr\u{119}\u{107} wieczko tak jak odkr\u{119}ca si\u{119} butelk\u{119}.
`,
        ImageUrl: "ms/open.jpeg",
        NextId: "ms-bat"
    },
    {
        Id: "ms-bat",
        Type: "page",
        Content: `W\u{142}\xf3\u{17C} baterie. P\u{142}ask\u{105} cz\u{119}\u{15B}ci\u{105} do g\xf3ry. K\xf3\u{142}eczkiem w strone spr\u{119}\u{17C}ynki.  

Zakr\u{119}\u{107} i w\u{142}\xf3\u{17C} s\u{142}uchawke do *czystego ucha*. Powinien by\u{107} s\u{142}yszalny szum.
`,
        ImageUrl: "ms/bat.jpeg",
        NextId: "ms-loop"
    },
    {
        Id: "ms-loop",
        Type: "choose",
        Title: `### P\u{119}tla indukcyjna 
        
P\u{119}tla \u{142}\u{105}czy telefon z mikros\u{142}uchawk\u{105}.   
Nale\u{17C}y j\u{105} umie\u{15B}ci\u{107} na szyji.  
Przed przyst\u{105}pieniem do u\u{17C}ytkowania nale\u{17C}y j\u{105} sparowa\u{107} z telefonem.
        
Jak\u{105} p\u{119}tle posiadasz?`,
        Options: [
            {
                Label: "Samsung",
                ImageUrl: "ms/samsung.jpeg",
                GoTo: "samsung"
            },
            {
                Label: "Jabra",
                ImageUrl: "ms/jabra.jpeg",
                GoTo: "jabra"
            }
        ]
    },
    {
        Id: "jabra",
        Type: "page",
        Content: `Aby sparowa\u{107} te p\u{119}tle z telefonem nale\u{17C}y przytrzyma\u{107} przycisk (ten pod\u{142}u\u{17C}ny odstaj\u{105}cy element) przez 5 sekund do momentu w kt\xf3rym dioda znajduj\u{105}ca si\u{119} w przycisku zacznie \u{15B}wieci\u{107} *\u{15B}wiat\u{142}em ci\u{105}g\u{142}ym* (nie b\u{119}dzie miga\u{107}).  
        
W telefonie nale\u{17C}y wej\u{15B}\u{107} w liste urz\u{105}dze\u{144} bluetooth i odnale\u{17A}\u{107} \`Jabra\` lub podobne na li\u{15B}cie nowo odnalezionych urz\u{105}dze\u{144}.`,
        ImageUrl: "ms/talk5.PNG",
        NextId: "jabra-onlist"
    },
    {
        Id: "samsung",
        Type: "page",
        Content: `Aby sparowa\u{107} te p\u{119}tle z telefonem nale\u{17C}y przesun\u{105}\u{107} suwak z boku obudowy a nast\u{119}pnie przytrzyma\u{107} okr\u{105}g\u{142}y przycisk na przednim panelu przez 5 sekund do momentu w kt\xf3rym dioda znajduj\u{105}ca si\u{119} obok w\u{142}\u{105}cznika zacznie *miga\u{107} na dwa kolory*.
        
W telefonie nale\u{17C}y wej\u{15B}\u{107} w liste urz\u{105}dze\u{144} bluetooth i odnale\u{17A}\u{107} \`Samsung\` lub podobne na li\u{15B}cie nowo odnalezionych urz\u{105}dze\u{144}.`,
        ImageUrl: "ms/sams.PNG",
        NextId: "samsung-onlist"
    },
    {
        Id: "jabra-onlist",
        Type: "page",
        Content: `Po sparowaniu urz\u{105}dzenie powinno pokaza\u{107} si\u{119} na li\u{15B}cie`,
        ImageUrl: "ms/talk5onlist.PNG",
        NextId: "call"
    },
    {
        Id: "samsung-onlist",
        Type: "page",
        Content: `Po sparowaniu urz\u{105}dzenie powinno pokaza\u{107} si\u{119} na li\u{15B}cie`,
        ImageUrl: "ms/samsonlist.PNG",
        NextId: "call"
    },
    {
        Id: "call",
        Type: "page",
        Content: `Gotowe!
        
Od teraz mo\u{17C}esz wykonywa\u{107} po\u{142}\u{105}czenia z u\u{17C}yciem mikros\u{142}uchawki.  
Za\u{142}\xf3\u{17C} p\u{119}tle na szyje i wybierz do kogo\u{15B} numer. Sprawd\u{17A} czy wszystko dzia\u{142}a.

Ka\u{17C}da p\u{119}tla ma kilka dodatkowych funkcji:
- *podw\xf3jne naci\u{15B}ni\u{119}cie przycisku* - wybierze ostatni number,
- *d\u{142}u\u{17C}sze przytrzymanie* - roz\u{142}\u{105}czenie rozmowy, 
- *kr\xf3tkie naci\u{15B}ni\u{119}cie* - odebranie po\u{142}\u{105}czenia

\u{1F50B} Pami\u{119}taj r\xf3wnie\u{17C} by \u{142}adowa\u{107} p\u{119}tle. Stan na\u{142}adowania jest sygnalizowany przez diod\u{119}.`,
        ImageUrl: "",
        NextId: ""
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9NwOH","kuM8f"], "kuM8f", "parcelRequire2d8a")

//# sourceMappingURL=index.6b815632.js.map
