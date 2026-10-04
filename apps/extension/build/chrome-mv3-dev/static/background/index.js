(function(define){var __define; typeof define === "function" && (__define=define,define=null);
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
})({"ajcBp":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\olive\\Documents\\Codex\\contextabs\\apps\\extension\\.plasmo\\static\\background\\index.ts",
    "bundleId": "d7b9b2f81f818f0b",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"2w7px":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"3lZMc"}],"3lZMc":[function(require,module,exports) {
var _idb = require("idb");
var _contracts = require("@ambient/contracts");
const dbPromise = (0, _idb.openDB)("ambient-context", 1, {
    upgrade (db) {
        if (!db.objectStoreNames.contains("sessions")) db.createObjectStore("sessions", {
            keyPath: "id"
        });
    }
});
chrome.runtime.onInstalled.addListener(async ()=>{
    const existing = await chrome.storage.local.get("onboarding-seen");
    if (!existing["onboarding-seen"]) await chrome.storage.local.set({
        "onboarding-seen": true
    });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    (async ()=>{
        switch(message?.type){
            case "LIST_TABS":
                return await chrome.tabs.query({
                    currentWindow: true
                });
            case "COLLECT_TAB_CONTEXT":
                {
                    const tabs = await chrome.tabs.query(sender.tab?.windowId === undefined ? {
                        currentWindow: true
                    } : {
                        windowId: sender.tab.windowId
                    });
                    const activeTab = tabs.find((tab)=>tab.id === sender.tab?.id) ?? tabs.find((tab)=>tab.active);
                    let groups = new Map();
                    try {
                        const browserGroups = await chrome.tabGroups.query({});
                        groups = new Map(browserGroups.map((group)=>[
                                group.id,
                                group.title || "Unnamed group"
                            ]));
                    } catch  {}
                    const words = String(message.query ?? "").toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
                    const candidates = tabs.filter((tab)=>tab.id !== activeTab?.id && tab.id !== undefined && tab.url && /^https?:\/\//.test(tab.url) && !/^(chrome|edge|about|devtools):/.test(tab.url));
                    candidates.sort((a, b)=>{
                        const score = (tab)=>{
                            const haystack = `${tab.title ?? ""} ${tab.url ?? ""} ${groups.get(tab.groupId) ?? ""}`.toLowerCase();
                            const lexical = words.reduce((sum, word)=>sum + (haystack.includes(word) ? 2 : 0), 0);
                            const sameGroup = activeTab?.groupId !== undefined && activeTab.groupId >= 0 && tab.groupId === activeTab.groupId ? 5 : 0;
                            return lexical + sameGroup;
                        };
                        return score(b) - score(a) || (b.lastAccessed ?? 0) - (a.lastAccessed ?? 0);
                    });
                    // gather headings from the active page to improve shortlisting relevance
                    let activeHeadingsText = "";
                    try {
                        if (activeTab?.id !== undefined) {
                            const extractedActive = await chrome.scripting.executeScript({
                                target: {
                                    tabId: activeTab.id
                                },
                                func: ()=>{
                                    const elems = Array.from(document.querySelectorAll("h1,h2,h3"));
                                    return elems.map((e)=>e.innerText ?? "").join(" ").replace(/\n{3,}/g, " ").slice(0, 2000);
                                }
                            });
                            activeHeadingsText = String(extractedActive[0]?.result ?? "").toLowerCase();
                        }
                    } catch  {}
                    const headingWords = activeHeadingsText.match(/[a-z0-9]{3,}/g) ?? [];
                    // compute a relevance score and require at least one signal (prompt words, active headings, or same group)
                    const scoreFor = (tab)=>{
                        const haystack = `${tab.title ?? ""} ${tab.url ?? ""} ${groups.get(tab.groupId) ?? ""}`.toLowerCase();
                        const lexical = words.reduce((sum, word)=>sum + (haystack.includes(word) ? 2 : 0), 0);
                        const headingsMatch = headingWords.reduce((sum, w)=>sum + (haystack.includes(w) ? 1 : 0), 0);
                        const sameGroup = activeTab?.groupId !== undefined && activeTab.groupId >= 0 && tab.groupId === activeTab.groupId ? 5 : 0;
                        return lexical + headingsMatch + sameGroup;
                    };
                    const shortlisted = candidates.filter((tab)=>scoreFor(tab) > 0) // drop tabs with no relevance signal
                    .sort((a, b)=>scoreFor(b) - scoreFor(a) || (b.lastAccessed ?? 0) - (a.lastAccessed ?? 0)).slice(0, 2); // cap to at most two tabs for low-latency scraping
                    const results = await Promise.all(shortlisted.map(async (tab)=>{
                        let text = "";
                        try {
                            const extracted = await chrome.scripting.executeScript({
                                target: {
                                    tabId: tab.id
                                },
                                func: ()=>{
                                    const root = document.querySelector("main, article, [role=main]") ?? document.body;
                                    return (root?.innerText ?? "").replace(/\n{3,}/g, "\n\n").slice(0, 3500);
                                }
                            });
                            text = String(extracted[0]?.result ?? "");
                        } catch  {}
                        return {
                            ...tab,
                            contextText: text,
                            contextGroupTitle: tab.groupId >= 0 ? groups.get(tab.groupId) : undefined
                        };
                    }));
                    return results;
                }
            case "LIST_SESSIONS":
                return await (await dbPromise).getAll("sessions");
            case "GET_SESSION":
                return await (await dbPromise).get("sessions", String(message.id));
            case "SAVE_SESSION":
                {
                    const session = (0, _contracts.ResearchSessionSchema).parse(message.session);
                    await (await dbPromise).put("sessions", session);
                    return true;
                }
            case "GROUP_TABS":
                {
                    const tabIds = Array.isArray(message.tabIds) ? message.tabIds.filter((id)=>Number.isInteger(id)) : [];
                    if (!tabIds.length) throw new Error("No tab IDs were supplied");
                    const groupId = await chrome.tabs.group({
                        tabIds
                    });
                    await chrome.tabGroups.update(groupId, {
                        title: String(message.title ?? "Research session").slice(0, 80),
                        color: "purple"
                    });
                    return groupId;
                }
            default:
                return undefined;
        }
    })().then(sendResponse).catch((error)=>sendResponse({
            error: error instanceof Error ? error.message : "Extension request failed"
        }));
    return true;
});

},{"idb":"1872l","@ambient/contracts":"9Ryfn"}],"1872l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteDB", ()=>deleteDB);
parcelHelpers.export(exports, "openDB", ()=>openDB);
parcelHelpers.export(exports, "unwrap", ()=>unwrap);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const transactionDoneMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener("success", success);
            request.removeEventListener("error", error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
    });
    // This mapping exists in reverseTransformCache but doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener("complete", complete);
            tx.removeEventListener("error", error);
            tx.removeEventListener("abort", error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException("AbortError", "AbortError"));
            unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === "done") return transactionDoneMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === "store") return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap(this.request);
    };
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === "function") return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) request.addEventListener("upgradeneeded", (event)=>{
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    openPromise.then((db)=>{
        if (terminated) db.addEventListener("close", ()=>terminated());
        if (blocking) db.addEventListener("versionchange", (event)=>blocking(event.oldVersion, event.newVersion, event));
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    return wrap(request).then(()=>undefined);
}
const readMethods = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count"
];
const writeMethods = [
    "put",
    "add",
    "delete",
    "clear"
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
const advanceMethodProps = [
    "continue",
    "continuePrimaryKey",
    "advance"
];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get (target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) cachedFunc = methodMap[prop] = function(...args) {
            advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
        return cachedFunc;
    }
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) cursor = await cursor.openCursor(...args);
    if (!cursor) return;
    cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while(cursor){
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore,
        IDBCursor
    ]) || prop === "iterate" && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore
    ]);
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get (target, prop, receiver) {
            if (isIteratorProp(target, prop)) return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has (target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
    }));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"9Ryfn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryItemSchema", ()=>MemoryItemSchema);
parcelHelpers.export(exports, "ContextSourceSchema", ()=>ContextSourceSchema);
parcelHelpers.export(exports, "ContextPayloadSchema", ()=>ContextPayloadSchema);
parcelHelpers.export(exports, "FilterResponseSchema", ()=>FilterResponseSchema);
parcelHelpers.export(exports, "ExecutionRequestSchema", ()=>ExecutionRequestSchema);
parcelHelpers.export(exports, "VerificationResultSchema", ()=>VerificationResultSchema);
parcelHelpers.export(exports, "AssistRequestSchema", ()=>AssistRequestSchema);
parcelHelpers.export(exports, "AssistResponseSchema", ()=>AssistResponseSchema);
parcelHelpers.export(exports, "ResearchSessionSchema", ()=>ResearchSessionSchema);
var _zod = require("zod");
const MemoryItemSchema = (0, _zod.z).object({
    id: (0, _zod.z).string(),
    kind: (0, _zod.z).enum([
        "preference",
        "fact"
    ]),
    text: (0, _zod.z).string().max(500),
    confidence: (0, _zod.z).number().min(0).max(1),
    createdAt: (0, _zod.z).string(),
    lastUsedAt: (0, _zod.z).string().optional(),
    sourceRequestId: (0, _zod.z).string(),
    status: (0, _zod.z).enum([
        "proposed",
        "approved",
        "dismissed"
    ])
});
const ContextSourceSchema = (0, _zod.z).object({
    id: (0, _zod.z).string(),
    kind: (0, _zod.z).enum([
        "selection",
        "field",
        "page",
        "tab",
        "memory",
        "clarification",
        "session"
    ]),
    title: (0, _zod.z).string().optional(),
    url: (0, _zod.z).string().url().optional(),
    text: (0, _zod.z).string().max(40000).optional(),
    tabGroupId: (0, _zod.z).number().optional(),
    tabGroupTitle: (0, _zod.z).string().max(200).optional(),
    tabId: (0, _zod.z).number().optional(),
    capturedAt: (0, _zod.z).string()
});
const ContextPayloadSchema = (0, _zod.z).object({
    requestId: (0, _zod.z).string().min(1).max(100),
    capturedAt: (0, _zod.z).string(),
    query: (0, _zod.z).string().min(1).max(8000),
    fieldText: (0, _zod.z).string().max(8000).optional(),
    selection: (0, _zod.z).string().max(8000).optional(),
    sources: (0, _zod.z).array(ContextSourceSchema).max(25),
    preferences: (0, _zod.z).array(MemoryItemSchema).max(20)
});
const FilterResponseSchema = (0, _zod.z).object({
    requestId: (0, _zod.z).string(),
    intent: (0, _zod.z).string(),
    optimizedPrompt: (0, _zod.z).string(),
    selectedSourceIds: (0, _zod.z).array((0, _zod.z).string()),
    filteredContext: (0, _zod.z).string(),
    conflicts: (0, _zod.z).array((0, _zod.z).object({
        description: (0, _zod.z).string(),
        sourceIds: (0, _zod.z).array((0, _zod.z).string())
    })),
    isAmbiguous: (0, _zod.z).boolean(),
    clarifyingQuestion: (0, _zod.z).string().nullable(),
    missingInformation: (0, _zod.z).array((0, _zod.z).string()),
    suggestionUseful: (0, _zod.z).boolean()
});
const ExecutionRequestSchema = (0, _zod.z).object({
    requestId: (0, _zod.z).string(),
    optimizedPrompt: (0, _zod.z).string().min(1).max(8000),
    filteredContext: (0, _zod.z).string().max(40000),
    sources: (0, _zod.z).array((0, _zod.z).object({
        id: (0, _zod.z).string(),
        title: (0, _zod.z).string().optional(),
        url: (0, _zod.z).string().url().optional()
    })),
    preferences: (0, _zod.z).array(MemoryItemSchema),
    clarificationAnswer: (0, _zod.z).string().max(4000).optional(),
    correctionFeedback: (0, _zod.z).string().max(4000).optional()
});
const VerificationResultSchema = (0, _zod.z).object({
    requestId: (0, _zod.z).string(),
    passed: (0, _zod.z).boolean(),
    score: (0, _zod.z).number().min(0).max(1),
    issues: (0, _zod.z).array((0, _zod.z).object({
        kind: (0, _zod.z).enum([
            "intent_gap",
            "unsupported_claim",
            "format",
            "incomplete"
        ]),
        description: (0, _zod.z).string()
    })),
    correctionPrompt: (0, _zod.z).string().optional()
});
const AssistRequestSchema = (0, _zod.z).object({
    context: ContextPayloadSchema,
    clarificationAnswer: (0, _zod.z).string().max(4000).optional(),
    skipClarification: (0, _zod.z).boolean().optional()
});
const AssistResponseSchema = (0, _zod.z).discriminatedUnion("status", [
    (0, _zod.z).object({
        status: (0, _zod.z).literal("clarification_required"),
        filter: FilterResponseSchema
    }),
    (0, _zod.z).object({
        status: (0, _zod.z).literal("no_suggestion"),
        filter: FilterResponseSchema
    }),
    (0, _zod.z).object({
        status: (0, _zod.z).literal("complete"),
        filter: FilterResponseSchema,
        refinedPrompt: (0, _zod.z).string(),
        sources: (0, _zod.z).array((0, _zod.z).object({
            id: (0, _zod.z).string(),
            title: (0, _zod.z).string().optional(),
            url: (0, _zod.z).string().url().optional(),
            tabId: (0, _zod.z).number().optional()
        })),
        memorySuggestions: (0, _zod.z).array((0, _zod.z).string()).max(2).optional()
    })
]);
const ResearchSessionSchema = (0, _zod.z).object({
    id: (0, _zod.z).string(),
    title: (0, _zod.z).string(),
    goal: (0, _zod.z).string(),
    createdAt: (0, _zod.z).string(),
    updatedAt: (0, _zod.z).string(),
    sources: (0, _zod.z).array((0, _zod.z).object({
        title: (0, _zod.z).string().optional(),
        url: (0, _zod.z).string().url(),
        tabId: (0, _zod.z).number().optional(),
        finding: (0, _zod.z).string().optional()
    })),
    findings: (0, _zod.z).array((0, _zod.z).string()),
    contradictions: (0, _zod.z).array((0, _zod.z).string()),
    unknowns: (0, _zod.z).array((0, _zod.z).string()),
    nextSteps: (0, _zod.z).array((0, _zod.z).string())
});

},{"zod":"lkVtX","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"lkVtX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BRAND", ()=>BRAND);
parcelHelpers.export(exports, "DIRTY", ()=>DIRTY);
parcelHelpers.export(exports, "EMPTY_PATH", ()=>EMPTY_PATH);
parcelHelpers.export(exports, "INVALID", ()=>INVALID);
parcelHelpers.export(exports, "NEVER", ()=>NEVER);
parcelHelpers.export(exports, "OK", ()=>OK);
parcelHelpers.export(exports, "ParseStatus", ()=>ParseStatus);
parcelHelpers.export(exports, "Schema", ()=>ZodType);
parcelHelpers.export(exports, "ZodAny", ()=>ZodAny);
parcelHelpers.export(exports, "ZodArray", ()=>ZodArray);
parcelHelpers.export(exports, "ZodBigInt", ()=>ZodBigInt);
parcelHelpers.export(exports, "ZodBoolean", ()=>ZodBoolean);
parcelHelpers.export(exports, "ZodBranded", ()=>ZodBranded);
parcelHelpers.export(exports, "ZodCatch", ()=>ZodCatch);
parcelHelpers.export(exports, "ZodDate", ()=>ZodDate);
parcelHelpers.export(exports, "ZodDefault", ()=>ZodDefault);
parcelHelpers.export(exports, "ZodDiscriminatedUnion", ()=>ZodDiscriminatedUnion);
parcelHelpers.export(exports, "ZodEffects", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodEnum", ()=>ZodEnum);
parcelHelpers.export(exports, "ZodError", ()=>ZodError);
parcelHelpers.export(exports, "ZodFirstPartyTypeKind", ()=>ZodFirstPartyTypeKind);
parcelHelpers.export(exports, "ZodFunction", ()=>ZodFunction);
parcelHelpers.export(exports, "ZodIntersection", ()=>ZodIntersection);
parcelHelpers.export(exports, "ZodIssueCode", ()=>ZodIssueCode);
parcelHelpers.export(exports, "ZodLazy", ()=>ZodLazy);
parcelHelpers.export(exports, "ZodLiteral", ()=>ZodLiteral);
parcelHelpers.export(exports, "ZodMap", ()=>ZodMap);
parcelHelpers.export(exports, "ZodNaN", ()=>ZodNaN);
parcelHelpers.export(exports, "ZodNativeEnum", ()=>ZodNativeEnum);
parcelHelpers.export(exports, "ZodNever", ()=>ZodNever);
parcelHelpers.export(exports, "ZodNull", ()=>ZodNull);
parcelHelpers.export(exports, "ZodNullable", ()=>ZodNullable);
parcelHelpers.export(exports, "ZodNumber", ()=>ZodNumber);
parcelHelpers.export(exports, "ZodObject", ()=>ZodObject);
parcelHelpers.export(exports, "ZodOptional", ()=>ZodOptional);
parcelHelpers.export(exports, "ZodParsedType", ()=>ZodParsedType);
parcelHelpers.export(exports, "ZodPipeline", ()=>ZodPipeline);
parcelHelpers.export(exports, "ZodPromise", ()=>ZodPromise);
parcelHelpers.export(exports, "ZodReadonly", ()=>ZodReadonly);
parcelHelpers.export(exports, "ZodRecord", ()=>ZodRecord);
parcelHelpers.export(exports, "ZodSchema", ()=>ZodType);
parcelHelpers.export(exports, "ZodSet", ()=>ZodSet);
parcelHelpers.export(exports, "ZodString", ()=>ZodString);
parcelHelpers.export(exports, "ZodSymbol", ()=>ZodSymbol);
parcelHelpers.export(exports, "ZodTransformer", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodTuple", ()=>ZodTuple);
parcelHelpers.export(exports, "ZodType", ()=>ZodType);
parcelHelpers.export(exports, "ZodUndefined", ()=>ZodUndefined);
parcelHelpers.export(exports, "ZodUnion", ()=>ZodUnion);
parcelHelpers.export(exports, "ZodUnknown", ()=>ZodUnknown);
parcelHelpers.export(exports, "ZodVoid", ()=>ZodVoid);
parcelHelpers.export(exports, "addIssueToContext", ()=>addIssueToContext);
parcelHelpers.export(exports, "any", ()=>anyType);
parcelHelpers.export(exports, "array", ()=>arrayType);
parcelHelpers.export(exports, "bigint", ()=>bigIntType);
parcelHelpers.export(exports, "boolean", ()=>booleanType);
parcelHelpers.export(exports, "coerce", ()=>coerce);
parcelHelpers.export(exports, "custom", ()=>custom);
parcelHelpers.export(exports, "date", ()=>dateType);
parcelHelpers.export(exports, "datetimeRegex", ()=>datetimeRegex);
parcelHelpers.export(exports, "default", ()=>z);
parcelHelpers.export(exports, "defaultErrorMap", ()=>errorMap);
parcelHelpers.export(exports, "discriminatedUnion", ()=>discriminatedUnionType);
parcelHelpers.export(exports, "effect", ()=>effectsType);
parcelHelpers.export(exports, "enum", ()=>enumType);
parcelHelpers.export(exports, "function", ()=>functionType);
parcelHelpers.export(exports, "getErrorMap", ()=>getErrorMap);
parcelHelpers.export(exports, "getParsedType", ()=>getParsedType);
parcelHelpers.export(exports, "instanceof", ()=>instanceOfType);
parcelHelpers.export(exports, "intersection", ()=>intersectionType);
parcelHelpers.export(exports, "isAborted", ()=>isAborted);
parcelHelpers.export(exports, "isAsync", ()=>isAsync);
parcelHelpers.export(exports, "isDirty", ()=>isDirty);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "late", ()=>late);
parcelHelpers.export(exports, "lazy", ()=>lazyType);
parcelHelpers.export(exports, "literal", ()=>literalType);
parcelHelpers.export(exports, "makeIssue", ()=>makeIssue);
parcelHelpers.export(exports, "map", ()=>mapType);
parcelHelpers.export(exports, "nan", ()=>nanType);
parcelHelpers.export(exports, "nativeEnum", ()=>nativeEnumType);
parcelHelpers.export(exports, "never", ()=>neverType);
parcelHelpers.export(exports, "null", ()=>nullType);
parcelHelpers.export(exports, "nullable", ()=>nullableType);
parcelHelpers.export(exports, "number", ()=>numberType);
parcelHelpers.export(exports, "object", ()=>objectType);
parcelHelpers.export(exports, "objectUtil", ()=>objectUtil);
parcelHelpers.export(exports, "oboolean", ()=>oboolean);
parcelHelpers.export(exports, "onumber", ()=>onumber);
parcelHelpers.export(exports, "optional", ()=>optionalType);
parcelHelpers.export(exports, "ostring", ()=>ostring);
parcelHelpers.export(exports, "pipeline", ()=>pipelineType);
parcelHelpers.export(exports, "preprocess", ()=>preprocessType);
parcelHelpers.export(exports, "promise", ()=>promiseType);
parcelHelpers.export(exports, "quotelessJson", ()=>quotelessJson);
parcelHelpers.export(exports, "record", ()=>recordType);
parcelHelpers.export(exports, "set", ()=>setType);
parcelHelpers.export(exports, "setErrorMap", ()=>setErrorMap);
parcelHelpers.export(exports, "strictObject", ()=>strictObjectType);
parcelHelpers.export(exports, "string", ()=>stringType);
parcelHelpers.export(exports, "symbol", ()=>symbolType);
parcelHelpers.export(exports, "transformer", ()=>effectsType);
parcelHelpers.export(exports, "tuple", ()=>tupleType);
parcelHelpers.export(exports, "undefined", ()=>undefinedType);
parcelHelpers.export(exports, "union", ()=>unionType);
parcelHelpers.export(exports, "unknown", ()=>unknownType);
parcelHelpers.export(exports, "util", ()=>util);
parcelHelpers.export(exports, "void", ()=>voidType);
parcelHelpers.export(exports, "z", ()=>z);
var util;
(function(util) {
    util.assertEqual = (val)=>val;
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items)obj[item] = item;
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys)filtered[k] = obj[k];
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object)if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") return value.toString();
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) return ZodParsedType.array;
            if (data === null) return ZodParsedType.null;
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
            if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
            if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
            if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) // eslint-disable-next-line ban/ban
        Object.setPrototypeOf(this, actualProto);
        else this.__proto__ = actualProto;
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") issue.unionErrors.map(processError);
                else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
                else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
                else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) curr[el] = curr[el] || {
                            _errors: []
                        };
                        else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues)if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else formErrors.push(mapper(sub));
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) message = "Required";
            else message = `Expected ${issue.expected}, received ${issue.received}`;
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                } else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                else util.assertNever(issue.validation);
            } else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
            else message = "Invalid";
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return {
        message
    };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) return {
        ...issueData,
        path: fullPath,
        message: issueData.message
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps)errorMessage = map(fullIssue, {
        data,
        defaultError: errorMessage
    }).message;
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === errorMap ? undefined : errorMap
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" && SuppressedError;
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    errorUtil.toString = (message)=>typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) this._cachedPath.push(...this._path, ...this._key);
            else this._cachedPath.push(...this._path, this._key);
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if (isValid(result)) return {
        success: true,
        data: result.value
    };
    else {
        if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") return {
            message: message !== null && message !== void 0 ? message : ctx.defaultError
        };
        if (typeof ctx.data === "undefined") return {
            message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError
        };
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        var _a, _b;
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) try {
            const result = this._parseSync({
                data,
                path: [],
                parent: ctx
            });
            return isValid(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            };
        } catch (err) {
            if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) this["~standard"].async = true;
            ctx.common = {
                issues: [],
                async: true
            };
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>isValid(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") return {
                message
            };
            else if (typeof message === "function") return message(val);
            else return message;
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: ZodIssueCode.custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data)=>{
                if (!data) {
                    setError();
                    return false;
                } else return true;
            });
            if (!result) {
                setError();
                return false;
            } else return true;
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else return true;
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) regex = `${regex}\\.\\d{${args.precision}}`;
    else if (args.precision == null) regex = `${regex}(\\.\\d+)?`;
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if (!decoded.typ || !decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch (_a) {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = String(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    else if (tooSmall) addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") try {
                new URL(input.data);
            } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                    validation: "url",
                    code: ZodIssueCode.invalid_string,
                    message: check.message
                });
                status.dirty();
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") input.data = input.data.trim();
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
            else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "jwt",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cidr",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...errorUtil.errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...errorUtil.errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...errorUtil.errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...errorUtil.errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...errorUtil.errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...errorUtil.errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...errorUtil.errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...errorUtil.errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...errorUtil.errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...errorUtil.errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...errorUtil.errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...errorUtil.errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...errorUtil.errToObj(options)
        });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
        });
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "time",
            precision: null,
            message: options
        });
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...errorUtil.errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) input.data = Number(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
            else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) try {
            input.data = BigInt(input.data);
        } catch (_a) {
            return this._getInvalidInput(input);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) return this._getInvalidInput(input);
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType
        });
        return INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = Boolean(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = new Date(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType
        });
        return INVALID;
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) return Promise.all([
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result)=>{
            return ParseStatus.mergeArray(status, result);
        });
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: errorUtil.toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: errorUtil.toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
    });
    else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    else return schema;
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return this._cached = {
            shape,
            keys
        };
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data)if (!shapeKeys.includes(key)) extraKeys.push(key);
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") for (const key of extraKeys)pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: {
                    status: "valid",
                    value: ctx.data[key]
                }
            });
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) return Promise.resolve().then(async ()=>{
            const syncPairs = [];
            for (const pair of pairs){
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                    key,
                    value,
                    alwaysSet: pair.alwaysSet
                });
            }
            return syncPairs;
        }).then((syncPairs)=>{
            return ParseStatus.mergeObjectSync(status, syncPairs);
        });
        else return ParseStatus.mergeObjectSync(status, pairs);
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    var _a, _b, _c, _d;
                    const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key)=>{
            if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            if (!mask[key]) shape[key] = this.shape[key];
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) newShape[key] = fieldSchema;
            else newShape[key] = fieldSchema.optional();
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            if (mask && !mask[key]) newShape[key] = this.shape[key];
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof ZodOptional)newField = newField._def.innerType;
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") return result.result;
            }
            for (const result of results)if (result.result.status === "dirty") {
                // add issues from dirty option
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
            }
            // return invalid
            const unionErrors = results.map((result)=>new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
        if (ctx.common.async) return Promise.all(options.map(async (option)=>{
            const childCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                }),
                ctx: childCtx
            };
        })).then(handleResults);
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") return result;
                else if (result.status === "dirty" && !dirty) dirty = {
                    result,
                    ctx: childCtx
                };
                if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) return getDiscriminator(type.schema);
    else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
    else if (type instanceof ZodLiteral) return [
        type.value
    ];
    else if (type instanceof ZodEnum) return type.options;
    else if (type instanceof ZodNativeEnum) // eslint-disable-next-line ban/ban
    return util.objectValues(type.enum);
    else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
    else if (type instanceof ZodUndefined) return [
        undefined
    ];
    else if (type instanceof ZodNull) return [
        null
    ];
    else if (type instanceof ZodOptional) return [
        undefined,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodNullable) return [
        null,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
    else return [];
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return INVALID;
        }
        if (ctx.common.async) return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
        else return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) return {
        valid: true,
        data: a
    };
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util.objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) return {
                valid: false
            };
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) return {
            valid: false
        };
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) return {
                valid: false
            };
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
        valid: true,
        data: a
    };
    else return {
        valid: false
    };
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) return Promise.all([
            this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }),
            this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            })
        ]).then(([left, right])=>handleParsed(left, right));
        else return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }));
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) return Promise.all(items).then((results)=>{
            return ParseStatus.mergeArray(status, results);
        });
        else return ParseStatus.mergeArray(status, items);
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data)pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
        });
        if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
        else return ParseStatus.mergeObjectSync(status, pairs);
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) return new ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
        });
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") return INVALID;
                    if (key.status === "dirty" || value.status === "dirty") status.dirty();
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") return INVALID;
                if (key.status === "dirty" || value.status === "dirty") status.dirty();
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return INVALID;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) return Promise.all(elements).then((elements)=>finalizeSet(elements));
        else return finalizeSet(elements);
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: errorUtil.toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function(...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) throw new ZodError([
                    makeArgsIssue(args, parsedArgs.error)
                ]);
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) throw new ZodError([
                    makeReturnsIssue(result, parsedReturns.error)
                ]);
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    constructor(){
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor(){
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                addIssueToContext(ctx, arg);
                if (arg.fatal) status.abort();
                else status.dirty();
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) return Promise.resolve(processed).then(async (processed)=>{
                if (status.value === "aborted") return INVALID;
                const result = await this._def.schema._parseAsync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return INVALID;
                if (result.status === "dirty") return DIRTY(result.value);
                if (status.value === "dirty") return DIRTY(result.value);
                return result;
            });
            else {
                if (status.value === "aborted") return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return INVALID;
                if (result.status === "dirty") return DIRTY(result.value);
                if (status.value === "dirty") return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) return Promise.resolve(result);
                if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return INVALID;
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((inner)=>{
                if (inner.status === "aborted") return INVALID;
                if (inner.status === "dirty") status.dirty();
                return executeRefinement(inner.value).then(()=>{
                    return {
                        status: status.value,
                        value: inner.value
                    };
                });
            });
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!isValid(base)) return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: status.value,
                    value: result
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((base)=>{
                if (!isValid(base)) return base;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                        status: status.value,
                        value: result
                    }));
            });
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) return OK(undefined);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) return OK(null);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if (isAsync(result)) return result.then((result)=>{
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new ZodError(newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        });
        else return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
                get error () {
                    return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                } else return this._def.out._parseAsync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if (isValid(data)) data.value = Object.freeze(data.value);
            return data;
        };
        return isAsync(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        var _a, _b;
        const r = check(data);
        if (r instanceof Promise) return r.then((r)=>{
            var _a, _b;
            if (!r) {
                const params = cleanParams(_params, data);
                const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                ctx.addIssue({
                    code: "custom",
                    ...params,
                    fatal: _fatal
                });
            }
        });
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
const NEVER = INVALID;
var z = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () {
        return util;
    },
    get objectUtil () {
        return objectUtil;
    },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () {
        return ZodFirstPartyTypeKind;
    },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["ajcBp","2w7px"], "2w7px", "parcelRequired36b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxNQUFNO0lBQ04sSUFBSSx5QkFBeUI7UUFBRSxPQUFPO0lBQXVCO0lBQzdELFFBQVE7SUFDUixLQUFLO0lBQ0wsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLE1BQU07SUFDTixTQUFTO0lBQ1QsS0FBSztJQUNMLEtBQUs7SUFDTCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLEtBQUs7SUFDTCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7SUFDUixhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4yL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTU1ZGYyNGQzY2EwY2QwMTUuanMiLCJhcHBzL2V4dGVuc2lvbi8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYXBwcy9leHRlbnNpb24vYmFja2dyb3VuZC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9pZGJAOC4wLjMvbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInBhY2thZ2VzL2NvbnRyYWN0cy9zcmMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvLnBucG0vem9kQDMuMjQuMi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgaD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgYj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXG9saXZlXFxcXERvY3VtZW50c1xcXFxDb2RleFxcXFxjb250ZXh0YWJzXFxcXGFwcHNcXFxcZXh0ZW5zaW9uXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJkN2I5YjJmODFmODE4ZjBiXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwiZXhwb3J0IHt9O1xyXG5cclxuaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSBcImlkYlwiO1xyXG5pbXBvcnQgeyBSZXNlYXJjaFNlc3Npb25TY2hlbWEgfSBmcm9tIFwiQGFtYmllbnQvY29udHJhY3RzXCI7XHJcblxyXG5jb25zdCBkYlByb21pc2UgPSBvcGVuREIoXCJhbWJpZW50LWNvbnRleHRcIiwgMSwge1xyXG4gIHVwZ3JhZGUoZGIpIHsgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwic2Vzc2lvbnNcIikpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFwic2Vzc2lvbnNcIiwgeyBrZXlQYXRoOiBcImlkXCIgfSk7IH1cclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJvbmJvYXJkaW5nLXNlZW5cIik7XHJcbiAgaWYgKCFleGlzdGluZ1tcIm9uYm9hcmRpbmctc2VlblwiXSkgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJvbmJvYXJkaW5nLXNlZW5cIjogdHJ1ZSB9KTtcclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgdm9pZCAoYXN5bmMgKCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlPy50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJMSVNUX1RBQlNcIjpcclxuICAgICAgICByZXR1cm4gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xyXG4gICAgICBjYXNlIFwiQ09MTEVDVF9UQUJfQ09OVEVYVFwiOiB7XHJcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHNlbmRlci50YWI/LndpbmRvd0lkID09PSB1bmRlZmluZWQgPyB7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSA6IHsgd2luZG93SWQ6IHNlbmRlci50YWIud2luZG93SWQgfSk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi5pZCA9PT0gc2VuZGVyLnRhYj8uaWQpID8/IHRhYnMuZmluZCgodGFiKSA9PiB0YWIuYWN0aXZlKTtcclxuICAgICAgICBsZXQgZ3JvdXBzID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgYnJvd3Nlckdyb3VwcyA9IGF3YWl0IGNocm9tZS50YWJHcm91cHMucXVlcnkoe30pO1xyXG4gICAgICAgICAgZ3JvdXBzID0gbmV3IE1hcChicm93c2VyR3JvdXBzLm1hcCgoZ3JvdXApID0+IFtncm91cC5pZCwgZ3JvdXAudGl0bGUgfHwgXCJVbm5hbWVkIGdyb3VwXCJdKSk7XHJcbiAgICAgICAgfSBjYXRjaCB7IC8qIHRhYkdyb3VwcyBwZXJtaXNzaW9uIGlzIG9wdGlvbmFsICovIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd29yZHMgPSBTdHJpbmcobWVzc2FnZS5xdWVyeSA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9bYS16MC05XXszLH0vZykgPz8gW107XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHRhYi5pZCAhPT0gYWN0aXZlVGFiPy5pZCAmJiB0YWIuaWQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgdGFiLnVybCAmJiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodGFiLnVybCkgJiYgIS9eKGNocm9tZXxlZGdlfGFib3V0fGRldnRvb2xzKTovLnRlc3QodGFiLnVybCkpO1xyXG4gICAgICAgIGNhbmRpZGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2NvcmUgPSAodGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGF5c3RhY2sgPSBgJHt0YWIudGl0bGUgPz8gXCJcIn0gJHt0YWIudXJsID8/IFwiXCJ9ICR7Z3JvdXBzLmdldCh0YWIuZ3JvdXBJZCkgPz8gXCJcIn1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxleGljYWwgPSB3b3Jkcy5yZWR1Y2UoKHN1bSwgd29yZCkgPT4gc3VtICsgKGhheXN0YWNrLmluY2x1ZGVzKHdvcmQpID8gMiA6IDApLCAwKTtcclxuICAgICAgICAgICAgY29uc3Qgc2FtZUdyb3VwID0gYWN0aXZlVGFiPy5ncm91cElkICE9PSB1bmRlZmluZWQgJiYgYWN0aXZlVGFiLmdyb3VwSWQgPj0gMCAmJiB0YWIuZ3JvdXBJZCA9PT0gYWN0aXZlVGFiLmdyb3VwSWQgPyA1IDogMDtcclxuICAgICAgICAgICAgcmV0dXJuIGxleGljYWwgKyBzYW1lR3JvdXA7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIHNjb3JlKGIpIC0gc2NvcmUoYSkgfHwgKGIubGFzdEFjY2Vzc2VkID8/IDApIC0gKGEubGFzdEFjY2Vzc2VkID8/IDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBnYXRoZXIgaGVhZGluZ3MgZnJvbSB0aGUgYWN0aXZlIHBhZ2UgdG8gaW1wcm92ZSBzaG9ydGxpc3RpbmcgcmVsZXZhbmNlXHJcbiAgICAgICAgbGV0IGFjdGl2ZUhlYWRpbmdzVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChhY3RpdmVUYWI/LmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkQWN0aXZlID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGFjdGl2ZVRhYi5pZCB9LFxyXG4gICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsaDIsaDNcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1zLm1hcCgoZSkgPT4gZS5pbm5lclRleHQgPz8gXCJcIikuam9pbihcIiBcIikucmVwbGFjZSgvXFxuezMsfS9nLCBcIiBcIikuc2xpY2UoMCwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWN0aXZlSGVhZGluZ3NUZXh0ID0gU3RyaW5nKGV4dHJhY3RlZEFjdGl2ZVswXT8ucmVzdWx0ID8/IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSBmYWlsdXJlcyByZWFkaW5nIGFjdGl2ZSBwYWdlIGhlYWRpbmdzICovIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGluZ1dvcmRzID0gYWN0aXZlSGVhZGluZ3NUZXh0Lm1hdGNoKC9bYS16MC05XXszLH0vZykgPz8gW107XHJcblxyXG4gICAgICAgIC8vIGNvbXB1dGUgYSByZWxldmFuY2Ugc2NvcmUgYW5kIHJlcXVpcmUgYXQgbGVhc3Qgb25lIHNpZ25hbCAocHJvbXB0IHdvcmRzLCBhY3RpdmUgaGVhZGluZ3MsIG9yIHNhbWUgZ3JvdXApXHJcbiAgICAgICAgY29uc3Qgc2NvcmVGb3IgPSAodGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gYCR7dGFiLnRpdGxlID8/IFwiXCJ9ICR7dGFiLnVybCA/PyBcIlwifSAke2dyb3Vwcy5nZXQodGFiLmdyb3VwSWQpID8/IFwiXCJ9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgY29uc3QgbGV4aWNhbCA9IHdvcmRzLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAoaGF5c3RhY2suaW5jbHVkZXMod29yZCkgPyAyIDogMCksIDApO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGluZ3NNYXRjaCA9IGhlYWRpbmdXb3Jkcy5yZWR1Y2UoKHN1bSwgdykgPT4gc3VtICsgKGhheXN0YWNrLmluY2x1ZGVzKHcpID8gMSA6IDApLCAwKTtcclxuICAgICAgICAgIGNvbnN0IHNhbWVHcm91cCA9IGFjdGl2ZVRhYj8uZ3JvdXBJZCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZVRhYi5ncm91cElkID49IDAgJiYgdGFiLmdyb3VwSWQgPT09IGFjdGl2ZVRhYi5ncm91cElkID8gNSA6IDA7XHJcbiAgICAgICAgICByZXR1cm4gbGV4aWNhbCArIGhlYWRpbmdzTWF0Y2ggKyBzYW1lR3JvdXA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRsaXN0ZWQgPSBjYW5kaWRhdGVzXHJcbiAgICAgICAgICAuZmlsdGVyKCh0YWIpID0+IHNjb3JlRm9yKHRhYikgPiAwKSAvLyBkcm9wIHRhYnMgd2l0aCBubyByZWxldmFuY2Ugc2lnbmFsXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gc2NvcmVGb3IoYikgLSBzY29yZUZvcihhKSB8fCAoYi5sYXN0QWNjZXNzZWQgPz8gMCkgLSAoYS5sYXN0QWNjZXNzZWQgPz8gMCkpXHJcbiAgICAgICAgICAuc2xpY2UoMCwgMik7IC8vIGNhcCB0byBhdCBtb3N0IHR3byB0YWJzIGZvciBsb3ctbGF0ZW5jeSBzY3JhcGluZ1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2hvcnRsaXN0ZWQubWFwKGFzeW5jICh0YWIpID0+IHtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQhIH0sXHJcbiAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluLCBhcnRpY2xlLCBbcm9sZT1tYWluXVwiKSA/PyBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyb290Py5pbm5lclRleHQgPz8gXCJcIikucmVwbGFjZSgvXFxuezMsfS9nLCBcIlxcblxcblwiKS5zbGljZSgwLCAzXzUwMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGV4dCA9IFN0cmluZyhleHRyYWN0ZWRbMF0/LnJlc3VsdCA/PyBcIlwiKTtcclxuICAgICAgICAgIH0gY2F0Y2ggeyAvKiByZXN0cmljdGVkIHBhZ2VzLCBkaXNjYXJkZWQgdGFicywgYW5kIHByb3RlY3RlZCBmcmFtZXMgYXJlIHNraXBwZWQgKi8gfVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4udGFiLCBjb250ZXh0VGV4dDogdGV4dCwgY29udGV4dEdyb3VwVGl0bGU6IHRhYi5ncm91cElkID49IDAgPyBncm91cHMuZ2V0KHRhYi5ncm91cElkKSA6IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiTElTVF9TRVNTSU9OU1wiOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5nZXRBbGwoXCJzZXNzaW9uc1wiKTtcclxuICAgICAgY2FzZSBcIkdFVF9TRVNTSU9OXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IChhd2FpdCBkYlByb21pc2UpLmdldChcInNlc3Npb25zXCIsIFN0cmluZyhtZXNzYWdlLmlkKSk7XHJcbiAgICAgIGNhc2UgXCJTQVZFX1NFU1NJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBSZXNlYXJjaFNlc3Npb25TY2hlbWEucGFyc2UobWVzc2FnZS5zZXNzaW9uKTtcclxuICAgICAgICBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5wdXQoXCJzZXNzaW9uc1wiLCBzZXNzaW9uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR1JPVVBfVEFCU1wiOiB7XHJcbiAgICAgICAgY29uc3QgdGFiSWRzID0gQXJyYXkuaXNBcnJheShtZXNzYWdlLnRhYklkcykgPyBtZXNzYWdlLnRhYklkcy5maWx0ZXIoKGlkOiB1bmtub3duKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKGlkKSkgOiBbXTtcclxuICAgICAgICBpZiAoIXRhYklkcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIk5vIHRhYiBJRHMgd2VyZSBzdXBwbGllZFwiKTtcclxuICAgICAgICBjb25zdCBncm91cElkID0gYXdhaXQgY2hyb21lLnRhYnMuZ3JvdXAoeyB0YWJJZHMgfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUoZ3JvdXBJZCwgeyB0aXRsZTogU3RyaW5nKG1lc3NhZ2UudGl0bGUgPz8gXCJSZXNlYXJjaCBzZXNzaW9uXCIpLnNsaWNlKDAsIDgwKSwgY29sb3I6IFwicHVycGxlXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwSWQ7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pKCkudGhlbihzZW5kUmVzcG9uc2UpLmNhdGNoKChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJFeHRlbnNpb24gcmVxdWVzdCBmYWlsZWRcIiB9KSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0aGlzLnJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuY29uc3QgYWR2YW5jZU1ldGhvZFByb3BzID0gWydjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknLCAnYWR2YW5jZSddO1xuY29uc3QgbWV0aG9kTWFwID0ge307XG5jb25zdCBhZHZhbmNlUmVzdWx0cyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjdXJzb3JJdGVyYXRvclRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKCFhZHZhbmNlTWV0aG9kUHJvcHMuaW5jbHVkZXMocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBsZXQgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wXTtcbiAgICAgICAgaWYgKCFjYWNoZWRGdW5jKSB7XG4gICAgICAgICAgICBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3BdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBhZHZhbmNlUmVzdWx0cy5zZXQodGhpcywgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuZ2V0KHRoaXMpW3Byb3BdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlZEZ1bmM7XG4gICAgfSxcbn07XG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZSguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIGxldCBjdXJzb3IgPSB0aGlzO1xuICAgIGlmICghKGN1cnNvciBpbnN0YW5jZW9mIElEQkN1cnNvcikpIHtcbiAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLm9wZW5DdXJzb3IoLi4uYXJncyk7XG4gICAgfVxuICAgIGlmICghY3Vyc29yKVxuICAgICAgICByZXR1cm47XG4gICAgY3Vyc29yID0gY3Vyc29yO1xuICAgIGNvbnN0IHByb3hpZWRDdXJzb3IgPSBuZXcgUHJveHkoY3Vyc29yLCBjdXJzb3JJdGVyYXRvclRyYXBzKTtcbiAgICBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5zZXQocHJveGllZEN1cnNvciwgY3Vyc29yKTtcbiAgICAvLyBNYXAgdGhpcyBkb3VibGUtcHJveHkgYmFjayB0byB0aGUgb3JpZ2luYWwsIHNvIG90aGVyIGN1cnNvciBtZXRob2RzIHdvcmsuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm94aWVkQ3Vyc29yLCB1bndyYXAoY3Vyc29yKSk7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICB5aWVsZCBwcm94aWVkQ3Vyc29yO1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGFkdmFuY2luZyBtZXRob2RzIHdhcyBub3QgY2FsbGVkLCBjYWxsIGNvbnRpbnVlKCkuXG4gICAgICAgIGN1cnNvciA9IGF3YWl0IChhZHZhbmNlUmVzdWx0cy5nZXQocHJveGllZEN1cnNvcikgfHwgY3Vyc29yLmNvbnRpbnVlKCkpO1xuICAgICAgICBhZHZhbmNlUmVzdWx0cy5kZWxldGUocHJveGllZEN1cnNvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuICgocHJvcCA9PT0gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiZcbiAgICAgICAgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmUsIElEQkN1cnNvcl0pKSB8fFxuICAgICAgICAocHJvcCA9PT0gJ2l0ZXJhdGUnICYmIGluc3RhbmNlT2ZBbnkodGFyZ2V0LCBbSURCSW5kZXgsIElEQk9iamVjdFN0b3JlXSkpKTtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0ZTtcbiAgICAgICAgcmV0dXJuIG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiwgdW53cmFwLCB3cmFwIH07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbW9yeUl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIGtpbmQ6IHouZW51bShbXCJwcmVmZXJlbmNlXCIsIFwiZmFjdFwiXSksIHRleHQ6IHouc3RyaW5nKCkubWF4KDUwMCksXHJcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLCBjcmVhdGVkQXQ6IHouc3RyaW5nKCksIGxhc3RVc2VkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBzb3VyY2VSZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHN0YXR1czogei5lbnVtKFtcInByb3Bvc2VkXCIsIFwiYXBwcm92ZWRcIiwgXCJkaXNtaXNzZWRcIl0pXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBNZW1vcnlJdGVtID0gei5pbmZlcjx0eXBlb2YgTWVtb3J5SXRlbVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFNvdXJjZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwga2luZDogei5lbnVtKFtcInNlbGVjdGlvblwiLCBcImZpZWxkXCIsIFwicGFnZVwiLCBcInRhYlwiLCBcIm1lbW9yeVwiLCBcImNsYXJpZmljYXRpb25cIiwgXCJzZXNzaW9uXCJdKSxcclxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSwgdGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHRhYkdyb3VwSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgdGFiR3JvdXBUaXRsZTogei5zdHJpbmcoKS5tYXgoMjAwKS5vcHRpb25hbCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRQYXlsb2FkU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHJlcXVlc3RJZDogei5zdHJpbmcoKS5taW4oMSkubWF4KDEwMCksIGNhcHR1cmVkQXQ6IHouc3RyaW5nKCksIHF1ZXJ5OiB6LnN0cmluZygpLm1pbigxKS5tYXgoOF8wMDApLFxyXG4gIGZpZWxkVGV4dDogei5zdHJpbmcoKS5tYXgoOF8wMDApLm9wdGlvbmFsKCksIHNlbGVjdGlvbjogei5zdHJpbmcoKS5tYXgoOF8wMDApLm9wdGlvbmFsKCksXHJcbiAgc291cmNlczogei5hcnJheShDb250ZXh0U291cmNlU2NoZW1hKS5tYXgoMjUpLCBwcmVmZXJlbmNlczogei5hcnJheShNZW1vcnlJdGVtU2NoZW1hKS5tYXgoMjApXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBDb250ZXh0UGF5bG9hZCA9IHouaW5mZXI8dHlwZW9mIENvbnRleHRQYXlsb2FkU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIGludGVudDogei5zdHJpbmcoKSwgb3B0aW1pemVkUHJvbXB0OiB6LnN0cmluZygpLCBzZWxlY3RlZFNvdXJjZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcclxuICBmaWx0ZXJlZENvbnRleHQ6IHouc3RyaW5nKCksIGNvbmZsaWN0czogei5hcnJheSh6Lm9iamVjdCh7IGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLCBzb3VyY2VJZHM6IHouYXJyYXkoei5zdHJpbmcoKSkgfSkpLFxyXG4gIGlzQW1iaWd1b3VzOiB6LmJvb2xlYW4oKSwgY2xhcmlmeWluZ1F1ZXN0aW9uOiB6LnN0cmluZygpLm51bGxhYmxlKCksIG1pc3NpbmdJbmZvcm1hdGlvbjogei5hcnJheSh6LnN0cmluZygpKSxcclxuICBzdWdnZXN0aW9uVXNlZnVsOiB6LmJvb2xlYW4oKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgRmlsdGVyUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBGaWx0ZXJSZXNwb25zZVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgRXhlY3V0aW9uUmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIG9wdGltaXplZFByb21wdDogei5zdHJpbmcoKS5taW4oMSkubWF4KDhfMDAwKSwgZmlsdGVyZWRDb250ZXh0OiB6LnN0cmluZygpLm1heCg0MF8wMDApLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCkgfSkpLFxyXG4gIHByZWZlcmVuY2VzOiB6LmFycmF5KE1lbW9yeUl0ZW1TY2hlbWEpLCBjbGFyaWZpY2F0aW9uQW5zd2VyOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKSxcclxuICBjb3JyZWN0aW9uRmVlZGJhY2s6IHouc3RyaW5nKCkubWF4KDRfMDAwKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBFeGVjdXRpb25SZXF1ZXN0ID0gei5pbmZlcjx0eXBlb2YgRXhlY3V0aW9uUmVxdWVzdFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgVmVyaWZpY2F0aW9uUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHJlcXVlc3RJZDogei5zdHJpbmcoKSwgcGFzc2VkOiB6LmJvb2xlYW4oKSwgc2NvcmU6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSxcclxuICBpc3N1ZXM6IHouYXJyYXkoei5vYmplY3QoeyBraW5kOiB6LmVudW0oW1wiaW50ZW50X2dhcFwiLCBcInVuc3VwcG9ydGVkX2NsYWltXCIsIFwiZm9ybWF0XCIsIFwiaW5jb21wbGV0ZVwiXSksIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpIH0pKSxcclxuICBjb3JyZWN0aW9uUHJvbXB0OiB6LnN0cmluZygpLm9wdGlvbmFsKClcclxufSk7XHJcbmV4cG9ydCB0eXBlIFZlcmlmaWNhdGlvblJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFZlcmlmaWNhdGlvblJlc3VsdFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaXN0UmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHsgY29udGV4dDogQ29udGV4dFBheWxvYWRTY2hlbWEsIGNsYXJpZmljYXRpb25BbnN3ZXI6IHouc3RyaW5nKCkubWF4KDRfMDAwKS5vcHRpb25hbCgpLCBza2lwQ2xhcmlmaWNhdGlvbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSB9KTtcclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlc3BvbnNlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oXCJzdGF0dXNcIiwgW1xyXG4gIHoub2JqZWN0KHsgc3RhdHVzOiB6LmxpdGVyYWwoXCJjbGFyaWZpY2F0aW9uX3JlcXVpcmVkXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hIH0pLFxyXG4gIHoub2JqZWN0KHsgc3RhdHVzOiB6LmxpdGVyYWwoXCJub19zdWdnZXN0aW9uXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hIH0pLFxyXG4gIHoub2JqZWN0KHtcclxuICAgIHN0YXR1czogei5saXRlcmFsKFwiY29tcGxldGVcIiksIGZpbHRlcjogRmlsdGVyUmVzcG9uc2VTY2hlbWEsIHJlZmluZWRQcm9tcHQ6IHouc3RyaW5nKCksXHJcbiAgICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpIH0pKSxcclxuICAgIG1lbW9yeVN1Z2dlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLm1heCgyKS5vcHRpb25hbCgpXHJcbiAgfSlcclxuXSk7XHJcbmV4cG9ydCB0eXBlIEFzc2lzdFJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgQXNzaXN0UmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2VhcmNoU2Vzc2lvblNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCksIGdvYWw6IHouc3RyaW5nKCksIGNyZWF0ZWRBdDogei5zdHJpbmcoKSwgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCksIHRhYklkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksIGZpbmRpbmc6IHouc3RyaW5nKCkub3B0aW9uYWwoKSB9KSksXHJcbiAgZmluZGluZ3M6IHouYXJyYXkoei5zdHJpbmcoKSksIGNvbnRyYWRpY3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLCB1bmtub3duczogei5hcnJheSh6LnN0cmluZygpKSwgbmV4dFN0ZXBzOiB6LmFycmF5KHouc3RyaW5nKCkpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBSZXNlYXJjaFNlc3Npb24gPSB6LmluZmVyPHR5cGVvZiBSZXNlYXJjaFNlc3Npb25TY2hlbWE+O1xyXG4iLCJ2YXIgdXRpbDtcbihmdW5jdGlvbiAodXRpbCkge1xuICAgIHV0aWwuYXNzZXJ0RXF1YWwgPSAodmFsKSA9PiB2YWw7XG4gICAgZnVuY3Rpb24gYXNzZXJ0SXMoX2FyZykgeyB9XG4gICAgdXRpbC5hc3NlcnRJcyA9IGFzc2VydElzO1xuICAgIGZ1bmN0aW9uIGFzc2VydE5ldmVyKF94KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICB1dGlsLmFzc2VydE5ldmVyID0gYXNzZXJ0TmV2ZXI7XG4gICAgdXRpbC5hcnJheVRvRW51bSA9IChpdGVtcykgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBvYmpbaXRlbV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRLZXlzID0gdXRpbC5vYmplY3RLZXlzKG9iaikuZmlsdGVyKChrKSA9PiB0eXBlb2Ygb2JqW29ialtrXV0gIT09IFwibnVtYmVyXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgdmFsaWRLZXlzKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXMoZmlsdGVyZWQpO1xuICAgIH07XG4gICAgdXRpbC5vYmplY3RWYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdEtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbZV07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXRpbC5vYmplY3RLZXlzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSBcImZ1bmN0aW9uXCIgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgID8gKG9iaikgPT4gT2JqZWN0LmtleXMob2JqKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfTtcbiAgICB1dGlsLmZpbmQgPSAoYXJyLCBjaGVja2VyKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VyKGl0ZW0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICB1dGlsLmlzSW50ZWdlciA9IHR5cGVvZiBOdW1iZXIuaXNJbnRlZ2VyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyAodmFsKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWwpICYmIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xuICAgIGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwiIHwgXCIpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAubWFwKCh2YWwpID0+ICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gYCcke3ZhbH0nYCA6IHZhbCkpXG4gICAgICAgICAgICAuam9pbihzZXBhcmF0b3IpO1xuICAgIH1cbiAgICB1dGlsLmpvaW5WYWx1ZXMgPSBqb2luVmFsdWVzO1xuICAgIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyID0gKF8sIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xufSkodXRpbCB8fCAodXRpbCA9IHt9KSk7XG52YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuY29uc3QgWm9kUGFyc2VkVHlwZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwic3RyaW5nXCIsXG4gICAgXCJuYW5cIixcbiAgICBcIm51bWJlclwiLFxuICAgIFwiaW50ZWdlclwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcImRhdGVcIixcbiAgICBcImJpZ2ludFwiLFxuICAgIFwic3ltYm9sXCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwidW5kZWZpbmVkXCIsXG4gICAgXCJudWxsXCIsXG4gICAgXCJhcnJheVwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJ1bmtub3duXCIsXG4gICAgXCJwcm9taXNlXCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJzZXRcIixcbl0pO1xuY29uc3QgZ2V0UGFyc2VkVHlwZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiBkYXRhO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQ7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN0cmluZztcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKGRhdGEpID8gWm9kUGFyc2VkVHlwZS5uYW4gOiBab2RQYXJzZWRUeXBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJvb2xlYW47XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZnVuY3Rpb247XG4gICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJpZ2ludDtcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3ltYm9sO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5udWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGhlbiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLnRoZW4gPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGRhdGEuY2F0Y2ggJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5jYXRjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUucHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5tYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBEYXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm9iamVjdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVua25vd247XG4gICAgfVxufTtcblxuY29uc3QgWm9kSXNzdWVDb2RlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJpbnZhbGlkX3R5cGVcIixcbiAgICBcImludmFsaWRfbGl0ZXJhbFwiLFxuICAgIFwiY3VzdG9tXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3JcIixcbiAgICBcImludmFsaWRfZW51bV92YWx1ZVwiLFxuICAgIFwidW5yZWNvZ25pemVkX2tleXNcIixcbiAgICBcImludmFsaWRfYXJndW1lbnRzXCIsXG4gICAgXCJpbnZhbGlkX3JldHVybl90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2RhdGVcIixcbiAgICBcImludmFsaWRfc3RyaW5nXCIsXG4gICAgXCJ0b29fc21hbGxcIixcbiAgICBcInRvb19iaWdcIixcbiAgICBcImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzXCIsXG4gICAgXCJub3RfbXVsdGlwbGVfb2ZcIixcbiAgICBcIm5vdF9maW5pdGVcIixcbl0pO1xuY29uc3QgcXVvdGVsZXNzSnNvbiA9IChvYmopID0+IHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC9cIihbXlwiXSspXCI6L2csIFwiJDE6XCIpO1xufTtcbmNsYXNzIFpvZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgY29uc3RydWN0b3IoaXNzdWVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkSXNzdWUgPSAoc3ViKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3Vlcywgc3ViXTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZXMgPSAoc3VicyA9IFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzc3VlcyA9IFsuLi50aGlzLmlzc3VlcywgLi4uc3Vic107XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFjdHVhbFByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgYWN0dWFsUHJvdG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX3Byb3RvX18gPSBhY3R1YWxQcm90bztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBcIlpvZEVycm9yXCI7XG4gICAgICAgIHRoaXMuaXNzdWVzID0gaXNzdWVzO1xuICAgIH1cbiAgICBmb3JtYXQoX21hcHBlcikge1xuICAgICAgICBjb25zdCBtYXBwZXIgPSBfbWFwcGVyIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoaXNzdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNzdWUubWVzc2FnZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0geyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICBjb25zdCBwcm9jZXNzRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXNzdWUgb2YgZXJyb3IuaXNzdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF91bmlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlLnVuaW9uRXJyb3JzLm1hcChwcm9jZXNzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfcmV0dXJuX3R5cGVcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUucmV0dXJuVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX2FyZ3VtZW50c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5hcmd1bWVudHNFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyID0gZmllbGRFcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBpc3N1ZS5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBpc3N1ZS5wYXRoW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWwgPSBpID09PSBpc3N1ZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRlcm1pbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGVycm9yQXJyYXk6IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZXJyb3JBcnJheS5fZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IGVycm9yQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0uX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyciA9IGN1cnJbZWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcm9jZXNzRXJyb3IodGhpcyk7XG4gICAgICAgIHJldHVybiBmaWVsZEVycm9ycztcbiAgICB9XG4gICAgc3RhdGljIGFzc2VydCh2YWx1ZSkge1xuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFpvZEVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgYSBab2RFcnJvcjogJHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gICAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmlzc3VlcywgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIsIDIpO1xuICAgIH1cbiAgICBnZXQgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZmxhdHRlbihtYXBwZXIgPSAoaXNzdWUpID0+IGlzc3VlLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7fTtcbiAgICAgICAgY29uc3QgZm9ybUVycm9ycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLmlzc3Vlcykge1xuICAgICAgICAgICAgaWYgKHN1Yi5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0gPSBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbc3ViLnBhdGhbMF1dLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybUVycm9ycy5wdXNoKG1hcHBlcihzdWIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBmb3JtRXJyb3JzLCBmaWVsZEVycm9ycyB9O1xuICAgIH1cbiAgICBnZXQgZm9ybUVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbigpO1xuICAgIH1cbn1cblpvZEVycm9yLmNyZWF0ZSA9IChpc3N1ZXMpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihpc3N1ZXMpO1xuICAgIHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGVycm9yTWFwID0gKGlzc3VlLCBfY3R4KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgc3dpdGNoIChpc3N1ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZTpcbiAgICAgICAgICAgIGlmIChpc3N1ZS5yZWNlaXZlZCA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBFeHBlY3RlZCAke2lzc3VlLmV4cGVjdGVkfSwgcmVjZWl2ZWQgJHtpc3N1ZS5yZWNlaXZlZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBsaXRlcmFsIHZhbHVlLCBleHBlY3RlZCAke0pTT04uc3RyaW5naWZ5KGlzc3VlLmV4cGVjdGVkLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlcil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5yZWNvZ25pemVkIGtleShzKSBpbiBvYmplY3Q6ICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLmtleXMsIFwiLCBcIil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3I6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZW51bSB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9LCByZWNlaXZlZCAnJHtpc3N1ZS5yZWNlaXZlZH0nYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gcmV0dXJuIHR5cGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkYXRlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChcImluY2x1ZGVzXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgaW5jbHVkZSBcIiR7aXNzdWUudmFsaWRhdGlvbi5pbmNsdWRlc31cImA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IGF0IG9uZSBvciBtb3JlIHBvc2l0aW9ucyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHtpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdGFydHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3Qgc3RhcnQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5zdGFydHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJlbmRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGVuZCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmVuZHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUudmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudmFsaWRhdGlvbiAhPT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkICR7aXNzdWUudmFsaWRhdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19zbWFsbDpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBtb3JlIHRoYW5gfSAke2lzc3VlLm1pbmltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBvdmVyYH0gJHtpc3N1ZS5taW5pbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseSBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgZ3JlYXRlciB0aGFuIGB9JHtpc3N1ZS5taW5pbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1pbmltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fYmlnOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYHVuZGVyYH0gJHtpc3N1ZS5tYXhpbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseWBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2BcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJpZ0ludCBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseWBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2BcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgc21hbGxlciB0aGFuYH0gJHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWF4aW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuXG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGVycm9yTWFwO1xuZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuXG5jb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGlmIChpc3N1ZURhdGEubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzc3VlRGF0YS5tZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBtYXBzID0gZXJyb3JNYXBzXG4gICAgICAgIC5maWx0ZXIoKG0pID0+ICEhbSlcbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IG1hcCBvZiBtYXBzKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IG1hcChmdWxsSXNzdWUsIHsgZGF0YSwgZGVmYXVsdEVycm9yOiBlcnJvck1lc3NhZ2UgfSkubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgIH07XG59O1xuY29uc3QgRU1QVFlfUEFUSCA9IFtdO1xuZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZXJyb3JNYXAgPyB1bmRlZmluZWQgOiBlcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5jbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJlxuICAgICAgICAgICAgICAgICh0eXBlb2YgdmFsdWUudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgcGFpci5hbHdheXNTZXQpKSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5jb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5jb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB4IGluc3RhbmNlb2YgUHJvbWlzZTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxudHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XG5cbnZhciBlcnJvclV0aWw7XG4oZnVuY3Rpb24gKGVycm9yVXRpbCkge1xuICAgIGVycm9yVXRpbC5lcnJUb09iaiA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZSB9IDogbWVzc2FnZSB8fCB7fTtcbiAgICBlcnJvclV0aWwudG9TdHJpbmcgPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogbWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlLm1lc3NhZ2U7XG59KShlcnJvclV0aWwgfHwgKGVycm9yVXRpbCA9IHt9KSk7XG5cbnZhciBfWm9kRW51bV9jYWNoZSwgX1pvZE5hdGl2ZUVudW1fY2FjaGU7XG5jbGFzcyBQYXJzZUlucHV0TGF6eVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdmFsdWUsIHBhdGgsIGtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRQYXRoID0gW107XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcbiAgICB9XG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVkUGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9rZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCAuLi50aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIHRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhdGg7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgZXJyb3JNYXAsIGludmFsaWRfdHlwZV9lcnJvciwgcmVxdWlyZWRfZXJyb3IsIGRlc2NyaXB0aW9uIH0gPSBwYXJhbXM7XG4gICAgaWYgKGVycm9yTWFwICYmIChpbnZhbGlkX3R5cGVfZXJyb3IgfHwgcmVxdWlyZWRfZXJyb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIFwiaW52YWxpZF90eXBlX2Vycm9yXCIgb3IgXCJyZXF1aXJlZF9lcnJvclwiIGluIGNvbmp1bmN0aW9uIHdpdGggY3VzdG9tIGVycm9yIG1hcC5gKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTWFwKVxuICAgICAgICByZXR1cm4geyBlcnJvck1hcDogZXJyb3JNYXAsIGRlc2NyaXB0aW9uIH07XG4gICAgY29uc3QgY3VzdG9tTWFwID0gKGlzcywgY3R4KSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAoaXNzLmNvZGUgPT09IFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwID8gbWVzc2FnZSA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGN0eC5kYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAoX2EgPSBtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCA/IG1lc3NhZ2UgOiByZXF1aXJlZF9lcnJvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc3MuY29kZSAhPT0gXCJpbnZhbGlkX3R5cGVcIilcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogKF9iID0gbWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgPyBtZXNzYWdlIDogaW52YWxpZF90eXBlX2Vycm9yKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuY2xhc3MgWm9kVHlwZSB7XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBfZ2V0VHlwZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIChjdHggfHwge1xuICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBuZXcgUGFyc2VTdGF0dXMoKSxcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3BhcnNlU3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bmNocm9ub3VzIHBhcnNlIGVuY291bnRlcmVkIHByb21pc2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9wYXJzZUFzeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cbiAgICBwYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zYWZlUGFyc2UoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIHNhZmVQYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuYXN5bmMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIFwifnZhbGlkYXRlXCIoZGF0YSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAhIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmICgoX2IgPSAoX2EgPSBlcnIgPT09IG51bGwgfHwgZXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnIubWVzc2FnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvTG93ZXJDYXNlKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcyhcImVuY291bnRlcmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguY29tbW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZUFzeW5jKHsgZGF0YSwgcGF0aDogW10sIHBhcmVudDogY3R4IH0pLnRoZW4oKHJlc3VsdCkgPT4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBjdHguY29tbW9uLmlzc3VlcyxcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBwYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBhc3luYyBzYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnBhdGgpIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXliZUFzeW5jUmVzdWx0ID0gdGhpcy5fcGFyc2UoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IChpc0FzeW5jKG1heWJlQXN5bmNSZXN1bHQpXG4gICAgICAgICAgICA/IG1heWJlQXN5bmNSZXN1bHRcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpXG4gICAgICAgICAgICAgICAgICAgIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWYpIHtcbiAgICAgICAgLyoqIEFsaWFzIG9mIHNhZmVQYXJzZUFzeW5jICovXG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zYWZlUGFyc2VBc3luYztcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xuICAgICAgICB0aGlzLnBhcnNlID0gdGhpcy5wYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZSA9IHRoaXMuc2FmZVBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyc2VBc3luYyA9IHRoaXMucGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZUFzeW5jID0gdGhpcy5zYWZlUGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc3BhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lID0gdGhpcy5yZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmVtZW50ID0gdGhpcy5yZWZpbmVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VwZXJSZWZpbmUgPSB0aGlzLnN1cGVyUmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGFibGUgPSB0aGlzLm51bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGlzaCA9IHRoaXMubnVsbGlzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vciA9IHRoaXMub3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmQgPSB0aGlzLmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhdGNoID0gdGhpcy5jYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gdGhpcy5kZXNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBpcGUgPSB0aGlzLnBpcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bGxhYmxlID0gdGhpcy5pc051bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNPcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIHZlbmRvcjogXCJ6b2RcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoZGF0YSkgPT4gdGhpc1tcIn52YWxpZGF0ZVwiXShkYXRhKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVsbGFibGUoKS5vcHRpb25hbCgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG9yKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gWm9kVW5pb24uY3JlYXRlKFt0aGlzLCBvcHRpb25dLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBhbmQoaW5jb21pbmcpIHtcbiAgICAgICAgcmV0dXJuIFpvZEludGVyc2VjdGlvbi5jcmVhdGUodGhpcywgaW5jb21pbmcsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgY2F0Y2hWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgY2F0Y2hWYWx1ZTogY2F0Y2hWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiBab2RSZWFkb25seS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eWzAtOWEtel0rJC87XG5jb25zdCB1bGlkUmVnZXggPSAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kL2k7XG4vLyBjb25zdCB1dWlkUmVnZXggPVxuLy8gICAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mQS1GXXs4fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXsxMn0kL2k7XG5jb25zdCBuYW5vaWRSZWdleCA9IC9eW2EtejAtOV8tXXsyMX0kL2k7XG5jb25zdCBqd3RSZWdleCA9IC9eW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10qJC87XG5jb25zdCBkdXJhdGlvblJlZ2V4ID0gL15bLStdP1AoPyEkKSg/Oig/OlstK10/XFxkK1kpfCg/OlstK10/XFxkK1suLF1cXGQrWSQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86KD86Wy0rXT9cXGQrVyl8KD86Wy0rXT9cXGQrWy4sXVxcZCtXJCkpPyg/Oig/OlstK10/XFxkK0QpfCg/OlstK10/XFxkK1suLF1cXGQrRCQpKT8oPzpUKD89W1xcZCstXSkoPzooPzpbLStdP1xcZCtIKXwoPzpbLStdP1xcZCtbLixdXFxkK0gkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/OlstK10/XFxkKyg/OlsuLF1cXGQrKT9TKT8pPz8kLztcbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MTgxLzE1NTAxNTVcbi8vIG9sZCB2ZXJzaW9uOiB0b28gc2xvdywgZGlkbid0IHN1cHBvcnQgdW5pY29kZVxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQvaTtcbi8vb2xkIGVtYWlsIHJlZ2V4XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKCg/IS0pKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsxLH0pW14tPD4oKVtcXF0uLDs6XFxzQFwiXSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcWygoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcXSl8KFxcW0lQdjY6KChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKVxcXSl8KFtBLVphLXowLTldKFtBLVphLXowLTktXSpbQS1aYS16MC05XSkqKFxcLltBLVphLXpdezIsfSkrKSkkLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXpBLVowLTlcXC5cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC9cXD1cXD9cXF5cXF9cXGBcXHtcXHxcXH1cXH5cXC1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oPyFcXC4pKD8hLipcXC5cXC4pKFtBLVowLTlfJytcXC1cXC5dKilbQS1aMC05XystXUAoW0EtWjAtOV1bQS1aMC05XFwtXSpcXC4pK1tBLVpdezIsfSQvaTtcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtejAtOS1dKyg/OlxcLlthLXowLTlcXC1dKykqJC9pO1xuLy8gZnJvbSBodHRwczovL3RoZWtldmluc2NvdHQuY29tL2Vtb2ppcy1pbi1qYXZhc2NyaXB0LyN3cml0aW5nLWEtcmVndWxhci1leHByZXNzaW9uXG5jb25zdCBfZW1vamlSZWdleCA9IGBeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJGA7XG5sZXQgZW1vamlSZWdleDtcbi8vIGZhc3Rlciwgc2ltcGxlciwgc2FmZXJcbmNvbnN0IGlwdjRSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC87XG5jb25zdCBpcHY0Q2lkclJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC8oM1swLTJdfFsxMl0/WzAtOV0pJC87XG4vLyBjb25zdCBpcHY2UmVnZXggPVxuLy8gL14oKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpJC87XG5jb25zdCBpcHY2UmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSkkLztcbmNvbnN0IGlwdjZDaWRyUmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvO1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg2MDM5Mi9kZXRlcm1pbmUtaWYtc3RyaW5nLWlzLWluLWJhc2U2NC11c2luZy1qYXZhc2NyaXB0XG5jb25zdCBiYXNlNjRSZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbi8vIGh0dHBzOi8vYmFzZTY0Lmd1cnUvc3RhbmRhcmRzL2Jhc2U2NHVybFxuY29uc3QgYmFzZTY0dXJsUmVnZXggPSAvXihbMC05YS16QS1aLV9dezR9KSooKFswLTlhLXpBLVotX117Mn0oPT0pPyl8KFswLTlhLXpBLVotX117M30oPSk/KSk/JC87XG4vLyBzaW1wbGVcbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfWA7XG4vLyBubyBsZWFwIHllYXIgdmFsaWRhdGlvblxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LSgoMFsxMzU3OF18MTB8MTIpLTMxfCgwWzEzLTldfDFbMC0yXSktMzB8KDBbMS05XXwxWzAtMl0pLSgwWzEtOV18MVxcXFxkfDJcXFxcZCkpYDtcbi8vIHdpdGggbGVhcCB5ZWFyIHZhbGlkYXRpb25cbmNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGAoKFxcXFxkXFxcXGRbMjQ2OF1bMDQ4XXxcXFxcZFxcXFxkWzEzNTc5XVsyNl18XFxcXGRcXFxcZDBbNDhdfFswMjQ2OF1bMDQ4XTAwfFsxMzU3OV1bMjZdMDApLTAyLTI5fFxcXFxkezR9LSgoMFsxMzU3OF18MVswMl0pLSgwWzEtOV18WzEyXVxcXFxkfDNbMDFdKXwoMFs0NjldfDExKS0oMFsxLTldfFsxMl1cXFxcZHwzMCl8KDAyKS0oMFsxLTldfDFcXFxcZHwyWzAtOF0pKSlgO1xuY29uc3QgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7ZGF0ZVJlZ2V4U291cmNlfSRgKTtcbmZ1bmN0aW9uIHRpbWVSZWdleFNvdXJjZShhcmdzKSB7XG4gICAgLy8gbGV0IHJlZ2V4ID0gYFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9YDtcbiAgICBsZXQgcmVnZXggPSBgKFswMV1cXFxcZHwyWzAtM10pOlswLTVdXFxcXGQ6WzAtNV1cXFxcZGA7XG4gICAgaWYgKGFyZ3MucHJlY2lzaW9uKSB7XG4gICAgICAgIHJlZ2V4ID0gYCR7cmVnZXh9XFxcXC5cXFxcZHske2FyZ3MucHJlY2lzaW9ufX1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmdzLnByZWNpc2lvbiA9PSBudWxsKSB7XG4gICAgICAgIHJlZ2V4ID0gYCR7cmVnZXh9KFxcXFwuXFxcXGQrKT9gO1xuICAgIH1cbiAgICByZXR1cm4gcmVnZXg7XG59XG5mdW5jdGlvbiB0aW1lUmVnZXgoYXJncykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9JGApO1xufVxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTQzMjMxXG5mdW5jdGlvbiBkYXRldGltZVJlZ2V4KGFyZ3MpIHtcbiAgICBsZXQgcmVnZXggPSBgJHtkYXRlUmVnZXhTb3VyY2V9VCR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfWA7XG4gICAgY29uc3Qgb3B0cyA9IFtdO1xuICAgIG9wdHMucHVzaChhcmdzLmxvY2FsID8gYFo/YCA6IGBaYCk7XG4gICAgaWYgKGFyZ3Mub2Zmc2V0KVxuICAgICAgICBvcHRzLnB1c2goYChbKy1dXFxcXGR7Mn06P1xcXFxkezJ9KWApO1xuICAgIHJlZ2V4ID0gYCR7cmVnZXh9KCR7b3B0cy5qb2luKFwifFwiKX0pYDtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApO1xufVxuZnVuY3Rpb24gaXNWYWxpZElQKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNWYWxpZEpXVChqd3QsIGFsZykge1xuICAgIGlmICghand0UmVnZXgudGVzdChqd3QpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2hlYWRlcl0gPSBqd3Quc3BsaXQoXCIuXCIpO1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NHVybCB0byBiYXNlNjRcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gaGVhZGVyXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCBcIitcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKVxuICAgICAgICAgICAgLnBhZEVuZChoZWFkZXIubGVuZ3RoICsgKCg0IC0gKGhlYWRlci5sZW5ndGggJSA0KSkgJSA0KSwgXCI9XCIpO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gSlNPTi5wYXJzZShhdG9iKGJhc2U2NCkpO1xuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQgIT09IFwib2JqZWN0XCIgfHwgZGVjb2RlZCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFkZWNvZGVkLnR5cCB8fCAhZGVjb2RlZC5hbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhbGcgJiYgZGVjb2RlZC5hbGcgIT09IGFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNWYWxpZENpZHIoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NENpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmNsYXNzIFpvZFN0cmluZyBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IFN0cmluZyhpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBpbnB1dC5kYXRhLmxlbmd0aCA+IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtb2ppXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1vamlSZWdleCA9IG5ldyBSZWdFeHAoX2Vtb2ppUmVnZXgsIFwidVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm5hbm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW5vaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwibmFub2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZDJcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZDJSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY3VpZDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVsaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdWxpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1bGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW5jbHVkZXNcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5pbmNsdWRlcyhjaGVjay52YWx1ZSwgY2hlY2sucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgaW5jbHVkZXM6IGNoZWNrLnZhbHVlLCBwb3NpdGlvbjogY2hlY2sucG9zaXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvTG93ZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b1VwcGVyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRlUmVnZXg7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpcFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSVAoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiand0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRKV1QoaW5wdXQuZGF0YSwgY2hlY2suYWxnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImp3dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY2lkclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ2lkcihpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImNpZHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjR1cmxcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0dXJsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfcmVnZXgocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWFpbChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1haWxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1cmwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVybFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGVtb2ppKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbW9qaVwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHV1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInV1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBuYW5vaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcIm5hbm9pZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkMihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZDJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1bGlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1bGlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJiYXNlNjRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjR1cmwobWVzc2FnZSkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGp3dChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiand0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgaXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImlwXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgY2lkcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY2lkclwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZWNpc2lvbikgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZWNpc2lvbixcbiAgICAgICAgICAgIG9mZnNldDogKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9mZnNldCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgICAgICBsb2NhbDogKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkYXRlXCIsIG1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZWNpc2lvbikgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZWNpc2lvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkdXJhdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZHVyYXRpb25cIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICByZWdleChyZWdleCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJyZWdleFwiLFxuICAgICAgICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5jbHVkZXModmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW5jbHVkZXNcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucG9zaXRpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJzdGFydHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJlbmRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5MZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heExlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibGVuZ3RoXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXF1aXZhbGVudCB0byBgLm1pbigxKWBcbiAgICAgKi9cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkpO1xuICAgIH1cbiAgICB0cmltKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9Mb3dlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b0xvd2VyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9VcHBlckNhc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0b1VwcGVyQ2FzZVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZXRpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0RhdGUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkdXJhdGlvblwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtb2ppXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInV1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc05BTk9JRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJuYW5vaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRDIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZDJcIik7XG4gICAgfVxuICAgIGdldCBpc1VMSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidWxpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzSVAoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaXBcIik7XG4gICAgfVxuICAgIGdldCBpc0NJRFIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY2lkclwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQmFzZTY0dXJsKCkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImJhc2U2NHVybFwiKTtcbiAgICB9XG4gICAgZ2V0IG1pbkxlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4TGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kU3RyaW5nLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZyxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NjY0ODQvd2h5LWRvZXMtbW9kdWx1cy1vcGVyYXRvci1yZXR1cm4tZnJhY3Rpb25hbC1udW1iZXItaW4tamF2YXNjcmlwdC8zMTcxMTAzNCMzMTcxMTAzNFxuZnVuY3Rpb24gZmxvYXRTYWZlUmVtYWluZGVyKHZhbCwgc3RlcCkge1xuICAgIGNvbnN0IHZhbERlY0NvdW50ID0gKHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3Qgc3RlcERlY0NvdW50ID0gKHN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IGRlY0NvdW50ID0gdmFsRGVjQ291bnQgPiBzdGVwRGVjQ291bnQgPyB2YWxEZWNDb3VudCA6IHN0ZXBEZWNDb3VudDtcbiAgICBjb25zdCB2YWxJbnQgPSBwYXJzZUludCh2YWwudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIGNvbnN0IHN0ZXBJbnQgPSBwYXJzZUludChzdGVwLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICByZXR1cm4gKHZhbEludCAlIHN0ZXBJbnQpIC8gTWF0aC5wb3coMTAsIGRlY0NvdW50KTtcbn1cbmNsYXNzIFpvZE51bWJlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLm11bHRpcGxlT2Y7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IE51bWJlcihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJpbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbC5pc0ludGVnZXIoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBcImludGVnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChmbG9hdFNhZmVSZW1haW5kZXIoaW5wdXQuZGF0YSwgY2hlY2sudmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImZpbml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImludFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbml0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImZpbml0ZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2FmZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KS5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgZ2V0IGlzSW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImludFwiIHx8XG4gICAgICAgICAgICAoY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIgJiYgdXRpbC5pc0ludGVnZXIoY2gudmFsdWUpKSk7XG4gICAgfVxuICAgIGdldCBpc0Zpbml0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGwsIG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwiZmluaXRlXCIgfHxcbiAgICAgICAgICAgICAgICBjaC5raW5kID09PSBcImludFwiIHx8XG4gICAgICAgICAgICAgICAgY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG1pbikgJiYgTnVtYmVyLmlzRmluaXRlKG1heCk7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYmlnaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY2hlY2suaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQuZGF0YSA8IGNoZWNrLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogaW5wdXQuZGF0YSA8PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhID4gY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhID49IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhICUgY2hlY2sudmFsdWUgIT09IEJpZ0ludCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25uZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlQXN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgICAgICB9KSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VTeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBtaW5MZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbWF4TGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBleGFjdExlbmd0aDogeyB2YWx1ZTogbGVuLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZEFycmF5LmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIG1pbkxlbmd0aDogbnVsbCxcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxuICAgICAgICBleGFjdExlbmd0aDogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBcnJheSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hLnNoYXBlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHNjaGVtYS5zaGFwZVtrZXldO1xuICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShmaWVsZFNjaGVtYSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHR5cGU6IGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgLy8gZXh0ZW5kPFxuICAgICAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlLFxuICAgICAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAgICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PixcbiAgICAgICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHV0aWwuZmxhdHRlbjx7XG4gICAgICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAgICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+XG4gICAgICAgIC8vID4oXG4gICAgICAgIC8vICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gKTogWm9kT2JqZWN0PFxuICAgICAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIEF1Z21lbnRhdGlvbj4sXG4gICAgICAgIC8vICAgVW5rbm93bktleXMsXG4gICAgICAgIC8vICAgQ2F0Y2hhbGwsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0LFxuICAgICAgICAvLyAgIE5ld0lucHV0XG4gICAgICAgIC8vID4ge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgLy8gICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgLy8gICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAvLyAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgfSkgYXMgYW55O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYC5leHRlbmRgIGluc3RlYWRcbiAgICAgICAgICogICovXG4gICAgICAgIHRoaXMuYXVnbWVudCA9IHRoaXMuZXh0ZW5kO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHJldHVybiAodGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJlxuICAgICAgICAgICAgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBwYWlyLmFsd2F5c1NldCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jUGFpcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChzeW5jUGFpcnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICB9XG4gICAgc3RyaWN0KG1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3JVdGlsLmVyclRvT2JqO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgICAgIC4uLihtZXNzYWdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXA6IChpc3N1ZSwgY3R4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RXJyb3IgPSAoX2MgPSAoX2IgPSAoX2EgPSB0aGlzLl9kZWYpLmVycm9yTWFwKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgaXNzdWUsIGN0eCkubWVzc2FnZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcInVucmVjb2duaXplZF9rZXlzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKF9kID0gZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0cmlwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFzc3Rocm91Z2goKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInBhc3N0aHJvdWdoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zdCBBdWdtZW50RmFjdG9yeSA9XG4gICAgLy8gICA8RGVmIGV4dGVuZHMgWm9kT2JqZWN0RGVmPihkZWY6IERlZikgPT5cbiAgICAvLyAgIDxBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZT4oXG4gICAgLy8gICAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgLy8gICApOiBab2RPYmplY3Q8XG4gICAgLy8gICAgIGV4dGVuZFNoYXBlPFJldHVyblR5cGU8RGVmW1wic2hhcGVcIl0+LCBBdWdtZW50YXRpb24+LFxuICAgIC8vICAgICBEZWZbXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgICAgRGVmW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyAgID4gPT4ge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgICAgLi4uZGVmLFxuICAgIC8vICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgIC8vICAgICAgICAgLi4uZGVmLnNoYXBlKCksXG4gICAgLy8gICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgIH0pIGFzIGFueTtcbiAgICAvLyAgIH07XG4gICAgZXh0ZW5kKGF1Z21lbnRhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW9yIHRvIHpvZEAxLjAuMTIgdGhlcmUgd2FzIGEgYnVnIGluIHRoZVxuICAgICAqIGluZmVycmVkIHR5cGUgb2YgbWVyZ2VkIG9iamVjdHMuIFBsZWFzZVxuICAgICAqIHVwZ3JhZGUgaWYgeW91IGFyZSBleHBlcmllbmNpbmcgaXNzdWVzLlxuICAgICAqL1xuICAgIG1lcmdlKG1lcmdpbmcpIHtcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLm1lcmdpbmcuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuICAgIC8vIG1lcmdlPFxuICAgIC8vICAgSW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3QsXG4gICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBJbmNvbWluZ1tcInNoYXBlXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9XG4gICAgLy8gPihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXSxcbiAgICAvLyAgIE5ld091dHB1dCxcbiAgICAvLyAgIE5ld0lucHV0XG4gICAgLy8gPiB7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvLyBtZXJnZTxJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdD4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IC8vWm9kT2JqZWN0PFQgJiBJbmNvbWluZ1tcIl9zaGFwZVwiXSwgVW5rbm93bktleXMsIENhdGNoYWxsPiA9IChtZXJnaW5nKSA9PiB7XG4gICAgLy8gWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXVxuICAgIC8vID4ge1xuICAgIC8vICAgLy8gY29uc3QgbWVyZ2VkU2hhcGUgPSBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKFxuICAgIC8vICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAvLyAgIC8vICAgbWVyZ2luZy5fZGVmLnNoYXBlKClcbiAgICAvLyAgIC8vICk7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyhtYXNrKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChtYXNrW2tleV0gJiYgdGhpcy5zaGFwZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGRlZXBQYXJ0aWFsKCkge1xuICAgICAgICByZXR1cm4gZGVlcFBhcnRpYWxpZnkodGhpcyk7XG4gICAgfVxuICAgIHBhcnRpYWwobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVpcmVkKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3RmllbGQgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZCA9IG5ld0ZpZWxkLl9kZWYuaW5uZXJUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gbmV3RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RCcmFuZGVkKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kUmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RDYXRjaCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59O1xuY2xhc3MgWm9kRGlzY3JpbWluYXRlZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3IgPSB0aGlzLmRpc2NyaW1pbmF0b3I7XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZSA9IGN0eC5kYXRhW2Rpc2NyaW1pbmF0b3JdO1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNNYXAuZ2V0KGRpc2NyaW1pbmF0b3JWYWx1ZSk7XG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20odGhpcy5vcHRpb25zTWFwLmtleXMoKSksXG4gICAgICAgICAgICAgICAgcGF0aDogW2Rpc2NyaW1pbmF0b3JdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZGlzY3JpbWluYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kaXNjcmltaW5hdG9yO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uc01hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zTWFwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGRpc2NyaW1pbmF0ZWQgdW5pb24gc2NoZW1hLiBJdHMgYmVoYXZpb3VyIGlzIHZlcnkgc2ltaWxhciB0byB0aGF0IG9mIHRoZSBub3JtYWwgei51bmlvbigpIGNvbnN0cnVjdG9yLlxuICAgICAqIEhvd2V2ZXIsIGl0IG9ubHkgYWxsb3dzIGEgdW5pb24gb2Ygb2JqZWN0cywgYWxsIG9mIHdoaWNoIG5lZWQgdG8gc2hhcmUgYSBkaXNjcmltaW5hdG9yIHByb3BlcnR5LiBUaGlzIHByb3BlcnR5IG11c3RcbiAgICAgKiBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIGZvciBlYWNoIG9iamVjdCBpbiB0aGUgdW5pb24uXG4gICAgICogQHBhcmFtIGRpc2NyaW1pbmF0b3IgdGhlIG5hbWUgb2YgdGhlIGRpc2NyaW1pbmF0b3IgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gdHlwZXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHNjaGVtYXNcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShkaXNjcmltaW5hdG9yLCBvcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgICAgLy8gR2V0IGFsbCB0aGUgdmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZXNcbiAgICAgICAgY29uc3Qgb3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZXMgPSBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2hhcGVbZGlzY3JpbWluYXRvcl0pO1xuICAgICAgICAgICAgaWYgKCFkaXNjcmltaW5hdG9yVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBkaXNjcmltaW5hdG9yIHZhbHVlIGZvciBrZXkgXFxgJHtkaXNjcmltaW5hdG9yfVxcYCBjb3VsZCBub3QgYmUgZXh0cmFjdGVkIGZyb20gYWxsIHNjaGVtYSBvcHRpb25zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc01hcC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlzY3JpbWluYXRvciBwcm9wZXJ0eSAke1N0cmluZyhkaXNjcmltaW5hdG9yKX0gaGFzIGR1cGxpY2F0ZSB2YWx1ZSAke1N0cmluZyh2YWx1ZSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnNNYXAuc2V0KHZhbHVlLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZERpc2NyaW1pbmF0ZWRVbmlvbih7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uc01hcCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWVyZ2VWYWx1ZXMoYSwgYikge1xuICAgIGNvbnN0IGFUeXBlID0gZ2V0UGFyc2VkVHlwZShhKTtcbiAgICBjb25zdCBiVHlwZSA9IGdldFBhcnNlZFR5cGUoYik7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICBjb25zdCBiS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhiKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkS2V5cyA9IHV0aWxcbiAgICAgICAgICAgIC5vYmplY3RLZXlzKGEpXG4gICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGJLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgICAgICBjb25zdCBuZXdPYmogPSB7IC4uLmEsIC4uLmIgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcmVkS2V5cykge1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhhW2tleV0sIGJba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHNoYXJlZFZhbHVlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld09iaiB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BID0gYVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBpdGVtQiA9IGJbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFsdWUgPSBtZXJnZVZhbHVlcyhpdGVtQSwgaXRlbUIpO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzaGFyZWRWYWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3QXJyYXkgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmXG4gICAgICAgICthID09PSArYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgfVxufVxuY2xhc3MgWm9kSW50ZXJzZWN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVBhcnNlZCA9IChwYXJzZWRMZWZ0LCBwYXJzZWRSaWdodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWJvcnRlZChwYXJzZWRMZWZ0KSB8fCBpc0Fib3J0ZWQocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZVZhbHVlcyhwYXJzZWRMZWZ0LnZhbHVlLCBwYXJzZWRSaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIW1lcmdlZC52YWxpZCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEaXJ0eShwYXJzZWRMZWZ0KSB8fCBpc0RpcnR5KHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBtZXJnZWQuZGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYubGVmdC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLnRoZW4oKFtsZWZ0LCByaWdodF0pID0+IGhhbmRsZVBhcnNlZChsZWZ0LCByaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVBhcnNlZCh0aGlzLl9kZWYubGVmdC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pLCB0aGlzLl9kZWYucmlnaHQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RJbnRlcnNlY3Rpb24uY3JlYXRlID0gKGxlZnQsIHJpZ2h0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEludGVyc2VjdGlvbih7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RJbnRlcnNlY3Rpb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RUdXBsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN0ID0gdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgIGlmICghcmVzdCAmJiBjdHguZGF0YS5sZW5ndGggPiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFsuLi5jdHguZGF0YV1cbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5fZGVmLml0ZW1zW2l0ZW1JbmRleF0gfHwgdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWEuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaXRlbUluZGV4KSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiAhIXgpOyAvLyBmaWx0ZXIgbnVsbHNcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChpdGVtcykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pdGVtcztcbiAgICB9XG4gICAgcmVzdChyZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kVHVwbGUuY3JlYXRlID0gKHNjaGVtYXMsIHBhcmFtcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWFzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIHNjaGVtYXMgdG8gei50dXBsZShbIC4uLiBdKVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgIGl0ZW1zOiBzY2hlbWFzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFR1cGxlLFxuICAgICAgICByZXN0OiBudWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kUmVjb3JkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgY3R4LmRhdGFba2V5XSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdEFzeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoZmlyc3QsIHNlY29uZCwgdGhpcmQpIHtcbiAgICAgICAgaWYgKHNlY29uZCBpbnN0YW5jZW9mIFpvZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgICAgICBrZXlUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgICAgICB2YWx1ZVR5cGU6IHNlY29uZCxcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXJkKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgIGtleVR5cGU6IFpvZFN0cmluZy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZmlyc3QsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMoc2Vjb25kKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTWFwIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBnZXRFcnJvck1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcCxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCBtZS5fZGVmLmFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQXN5bmMoYXJncywgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZUFyZ3NJc3N1ZShhcmdzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBhd2FpdCBtZS5fZGVmLnJldHVybnMuX2RlZi50eXBlXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKHJlc3VsdCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBtZS5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IG1lLl9kZWYucmV0dXJucy5zYWZlUGFyc2UocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUmV0dXJucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIHBhcnNlZFJldHVybnMuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJhbWV0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmFyZ3M7XG4gICAgfVxuICAgIHJldHVyblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYucmV0dXJucztcbiAgICB9XG4gICAgYXJncyguLi5pdGVtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGFyZ3M6IFpvZFR1cGxlLmNyZWF0ZShpdGVtcykucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybnMocmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVyblR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0cmljdEltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhcmdzLCByZXR1cm5zLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICBhcmdzOiAoYXJnc1xuICAgICAgICAgICAgICAgID8gYXJnc1xuICAgICAgICAgICAgICAgIDogWm9kVHVwbGUuY3JlYXRlKFtdKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpKSxcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVybnMgfHwgWm9kVW5rbm93bi5jcmVhdGUoKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRnVuY3Rpb24sXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFpvZExhenkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGxhenlTY2hlbWEgPSB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgICAgIHJldHVybiBsYXp5U2NoZW1hLl9wYXJzZSh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgfVxufVxuWm9kTGF6eS5jcmVhdGUgPSAoZ2V0dGVyLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExhenkoe1xuICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMYXp5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTGl0ZXJhbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQuZGF0YSAhPT0gdGhpcy5fZGVmLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbCxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdGhpcy5fZGVmLnZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlO1xuICAgIH1cbn1cblpvZExpdGVyYWwuY3JlYXRlID0gKHZhbHVlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExpdGVyYWwoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGl0ZXJhbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZVpvZEVudW0odmFsdWVzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZEVudW0oe1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfWm9kRW51bV9jYWNoZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWm9kRW51bV9jYWNoZSwgXCJmXCIpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ab2RFbnVtX2NhY2hlLCBuZXcgU2V0KHRoaXMuX2RlZi52YWx1ZXMpLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ab2RFbnVtX2NhY2hlLCBcImZcIikuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IFZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBFbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZXh0cmFjdCh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodmFsdWVzLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBleGNsdWRlKHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+ICF2YWx1ZXMuaW5jbHVkZXMob3B0KSksIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1pvZEVudW1fY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfWm9kTmF0aXZlRW51bV9jYWNoZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVudW1WYWx1ZXMgPSB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nICYmXG4gICAgICAgICAgICBjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ab2ROYXRpdmVFbnVtX2NhY2hlLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1pvZE5hdGl2ZUVudW1fY2FjaGUsIG5ldyBTZXQodXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcykpLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ab2ROYXRpdmVFbnVtX2NhY2hlLCBcImZcIikuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cbl9ab2ROYXRpdmVFbnVtX2NhY2hlID0gbmV3IFdlYWtNYXAoKTtcblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSAmJlxuICAgICAgICAgICAgY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUucHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2lmaWVkID0gY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZVxuICAgICAgICAgICAgPyBjdHguZGF0YVxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoY3R4LmRhdGEpO1xuICAgICAgICByZXR1cm4gT0socHJvbWlzaWZpZWQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLnBhcnNlQXN5bmMoZGF0YSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuWm9kUHJvbWlzZS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFByb21pc2Uoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUHJvbWlzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEVmZmVjdHMgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBpbm5lclR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBzb3VyY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fZGVmLnR5cGVOYW1lID09PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0c1xuICAgICAgICAgICAgPyB0aGlzLl9kZWYuc2NoZW1hLnNvdXJjZVR5cGUoKVxuICAgICAgICAgICAgOiB0aGlzLl9kZWYuc2NoZW1hO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fZGVmLmVmZmVjdCB8fCBudWxsO1xuICAgICAgICBjb25zdCBjaGVja0N0eCA9IHtcbiAgICAgICAgICAgIGFkZElzc3VlOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBhcmcpO1xuICAgICAgICAgICAgICAgIGlmIChhcmcuZmF0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5wYXRoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tDdHguYWRkSXNzdWUgPSBjaGVja0N0eC5hZGRJc3N1ZS5iaW5kKGNoZWNrQ3R4KTtcbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInByZXByb2Nlc3NcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gZWZmZWN0LnRyYW5zZm9ybShjdHguZGF0YSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbihhc3luYyAocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJyZWZpbmVtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVSZWZpbmVtZW50ID0gKGFjYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC5yZWZpbmVtZW50KGFjYywgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXN5bmMgcmVmaW5lbWVudCBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB2YWx1ZSBpcyBpZ25vcmVkXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIC5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGlubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoeyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBwYXJhbXMuZGVmYXVsdFxuICAgICAgICAgICAgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICAvLyBuZXdDdHggaXMgdXNlZCB0byBub3QgY29sbGVjdCBpc3N1ZXMgZnJvbSBpbm5lciB0eXBlcyBpbiBjdHhcbiAgICAgICAgY29uc3QgbmV3Q3R4ID0ge1xuICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YTogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICBwYXRoOiBuZXdDdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgIC4uLm5ld0N0eCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGNhdGNoVmFsdWU6IHR5cGVvZiBwYXJhbXMuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5jYXRjaCA6ICgpID0+IHBhcmFtcy5jYXRjaCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5hTiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm5hbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG59XG5ab2ROYU4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmFOKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYU4sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jb25zdCBCUkFORCA9IFN5bWJvbChcInpvZF9icmFuZFwiKTtcbmNsYXNzIFpvZEJyYW5kZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbn1cbmNsYXNzIFpvZFBpcGVsaW5lIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5pbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKGluUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVBc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSB0aGlzLl9kZWYuaW4uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImRpcnR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kUGlwZWxpbmUoe1xuICAgICAgICAgICAgaW46IGEsXG4gICAgICAgICAgICBvdXQ6IGIsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFBpcGVsaW5lLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RSZWFkb25seSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGNvbnN0IGZyZWV6ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBPYmplY3QuZnJlZXplKGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpc0FzeW5jKHJlc3VsdClcbiAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oKGRhdGEpID0+IGZyZWV6ZShkYXRhKSlcbiAgICAgICAgICAgIDogZnJlZXplKHJlc3VsdCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kUmVhZG9ubHkuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUmVhZG9ubHkoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVhZG9ubHksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgei5jdXN0b20gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBjbGVhblBhcmFtcyhwYXJhbXMsIGRhdGEpIHtcbiAgICBjb25zdCBwID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gcGFyYW1zKGRhdGEpXG4gICAgICAgIDogdHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB7IG1lc3NhZ2U6IHBhcmFtcyB9XG4gICAgICAgICAgICA6IHBhcmFtcztcbiAgICBjb25zdCBwMiA9IHR5cGVvZiBwID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlOiBwIH0gOiBwO1xuICAgIHJldHVybiBwMjtcbn1cbmZ1bmN0aW9uIGN1c3RvbShjaGVjaywgX3BhcmFtcyA9IHt9LCBcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqXG4gKiBQYXNzIGBmYXRhbGAgaW50byB0aGUgcGFyYW1zIG9iamVjdCBpbnN0ZWFkOlxuICpcbiAqIGBgYHRzXG4gKiB6LnN0cmluZygpLmN1c3RvbSgodmFsKSA9PiB2YWwubGVuZ3RoID4gNSwgeyBmYXRhbDogZmFsc2UgfSlcbiAqIGBgYFxuICpcbiAqL1xuZmF0YWwpIHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBjaGVjayhkYXRhKTtcbiAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IChfYiA9IChfYSA9IHBhcmFtcy5mYXRhbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmF0YWwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IChfYiA9IChfYSA9IHBhcmFtcy5mYXRhbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmF0YWwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRydWU7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpO1xufVxuY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbnZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlYWRvbmx5XCJdID0gXCJab2RSZWFkb25seVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY29lcmNlOiB0cnVlLFxuICAgIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5jb25zdCBORVZFUiA9IElOVkFMSUQ7XG5cbnZhciB6ID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBkZWZhdWx0RXJyb3JNYXA6IGVycm9yTWFwLFxuICAgIHNldEVycm9yTWFwOiBzZXRFcnJvck1hcCxcbiAgICBnZXRFcnJvck1hcDogZ2V0RXJyb3JNYXAsXG4gICAgbWFrZUlzc3VlOiBtYWtlSXNzdWUsXG4gICAgRU1QVFlfUEFUSDogRU1QVFlfUEFUSCxcbiAgICBhZGRJc3N1ZVRvQ29udGV4dDogYWRkSXNzdWVUb0NvbnRleHQsXG4gICAgUGFyc2VTdGF0dXM6IFBhcnNlU3RhdHVzLFxuICAgIElOVkFMSUQ6IElOVkFMSUQsXG4gICAgRElSVFk6IERJUlRZLFxuICAgIE9LOiBPSyxcbiAgICBpc0Fib3J0ZWQ6IGlzQWJvcnRlZCxcbiAgICBpc0RpcnR5OiBpc0RpcnR5LFxuICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgaXNBc3luYzogaXNBc3luYyxcbiAgICBnZXQgdXRpbCAoKSB7IHJldHVybiB1dGlsOyB9LFxuICAgIGdldCBvYmplY3RVdGlsICgpIHsgcmV0dXJuIG9iamVjdFV0aWw7IH0sXG4gICAgWm9kUGFyc2VkVHlwZTogWm9kUGFyc2VkVHlwZSxcbiAgICBnZXRQYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlLFxuICAgIFpvZFR5cGU6IFpvZFR5cGUsXG4gICAgZGF0ZXRpbWVSZWdleDogZGF0ZXRpbWVSZWdleCxcbiAgICBab2RTdHJpbmc6IFpvZFN0cmluZyxcbiAgICBab2ROdW1iZXI6IFpvZE51bWJlcixcbiAgICBab2RCaWdJbnQ6IFpvZEJpZ0ludCxcbiAgICBab2RCb29sZWFuOiBab2RCb29sZWFuLFxuICAgIFpvZERhdGU6IFpvZERhdGUsXG4gICAgWm9kU3ltYm9sOiBab2RTeW1ib2wsXG4gICAgWm9kVW5kZWZpbmVkOiBab2RVbmRlZmluZWQsXG4gICAgWm9kTnVsbDogWm9kTnVsbCxcbiAgICBab2RBbnk6IFpvZEFueSxcbiAgICBab2RVbmtub3duOiBab2RVbmtub3duLFxuICAgIFpvZE5ldmVyOiBab2ROZXZlcixcbiAgICBab2RWb2lkOiBab2RWb2lkLFxuICAgIFpvZEFycmF5OiBab2RBcnJheSxcbiAgICBab2RPYmplY3Q6IFpvZE9iamVjdCxcbiAgICBab2RVbmlvbjogWm9kVW5pb24sXG4gICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uOiBab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgWm9kSW50ZXJzZWN0aW9uOiBab2RJbnRlcnNlY3Rpb24sXG4gICAgWm9kVHVwbGU6IFpvZFR1cGxlLFxuICAgIFpvZFJlY29yZDogWm9kUmVjb3JkLFxuICAgIFpvZE1hcDogWm9kTWFwLFxuICAgIFpvZFNldDogWm9kU2V0LFxuICAgIFpvZEZ1bmN0aW9uOiBab2RGdW5jdGlvbixcbiAgICBab2RMYXp5OiBab2RMYXp5LFxuICAgIFpvZExpdGVyYWw6IFpvZExpdGVyYWwsXG4gICAgWm9kRW51bTogWm9kRW51bSxcbiAgICBab2ROYXRpdmVFbnVtOiBab2ROYXRpdmVFbnVtLFxuICAgIFpvZFByb21pc2U6IFpvZFByb21pc2UsXG4gICAgWm9kRWZmZWN0czogWm9kRWZmZWN0cyxcbiAgICBab2RUcmFuc2Zvcm1lcjogWm9kRWZmZWN0cyxcbiAgICBab2RPcHRpb25hbDogWm9kT3B0aW9uYWwsXG4gICAgWm9kTnVsbGFibGU6IFpvZE51bGxhYmxlLFxuICAgIFpvZERlZmF1bHQ6IFpvZERlZmF1bHQsXG4gICAgWm9kQ2F0Y2g6IFpvZENhdGNoLFxuICAgIFpvZE5hTjogWm9kTmFOLFxuICAgIEJSQU5EOiBCUkFORCxcbiAgICBab2RCcmFuZGVkOiBab2RCcmFuZGVkLFxuICAgIFpvZFBpcGVsaW5lOiBab2RQaXBlbGluZSxcbiAgICBab2RSZWFkb25seTogWm9kUmVhZG9ubHksXG4gICAgY3VzdG9tOiBjdXN0b20sXG4gICAgU2NoZW1hOiBab2RUeXBlLFxuICAgIFpvZFNjaGVtYTogWm9kVHlwZSxcbiAgICBsYXRlOiBsYXRlLFxuICAgIGdldCBab2RGaXJzdFBhcnR5VHlwZUtpbmQgKCkgeyByZXR1cm4gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kOyB9LFxuICAgIGNvZXJjZTogY29lcmNlLFxuICAgIGFueTogYW55VHlwZSxcbiAgICBhcnJheTogYXJyYXlUeXBlLFxuICAgIGJpZ2ludDogYmlnSW50VHlwZSxcbiAgICBib29sZWFuOiBib29sZWFuVHlwZSxcbiAgICBkYXRlOiBkYXRlVHlwZSxcbiAgICBkaXNjcmltaW5hdGVkVW5pb246IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUsXG4gICAgZWZmZWN0OiBlZmZlY3RzVHlwZSxcbiAgICAnZW51bSc6IGVudW1UeXBlLFxuICAgICdmdW5jdGlvbic6IGZ1bmN0aW9uVHlwZSxcbiAgICAnaW5zdGFuY2VvZic6IGluc3RhbmNlT2ZUeXBlLFxuICAgIGludGVyc2VjdGlvbjogaW50ZXJzZWN0aW9uVHlwZSxcbiAgICBsYXp5OiBsYXp5VHlwZSxcbiAgICBsaXRlcmFsOiBsaXRlcmFsVHlwZSxcbiAgICBtYXA6IG1hcFR5cGUsXG4gICAgbmFuOiBuYW5UeXBlLFxuICAgIG5hdGl2ZUVudW06IG5hdGl2ZUVudW1UeXBlLFxuICAgIG5ldmVyOiBuZXZlclR5cGUsXG4gICAgJ251bGwnOiBudWxsVHlwZSxcbiAgICBudWxsYWJsZTogbnVsbGFibGVUeXBlLFxuICAgIG51bWJlcjogbnVtYmVyVHlwZSxcbiAgICBvYmplY3Q6IG9iamVjdFR5cGUsXG4gICAgb2Jvb2xlYW46IG9ib29sZWFuLFxuICAgIG9udW1iZXI6IG9udW1iZXIsXG4gICAgb3B0aW9uYWw6IG9wdGlvbmFsVHlwZSxcbiAgICBvc3RyaW5nOiBvc3RyaW5nLFxuICAgIHBpcGVsaW5lOiBwaXBlbGluZVR5cGUsXG4gICAgcHJlcHJvY2VzczogcHJlcHJvY2Vzc1R5cGUsXG4gICAgcHJvbWlzZTogcHJvbWlzZVR5cGUsXG4gICAgcmVjb3JkOiByZWNvcmRUeXBlLFxuICAgIHNldDogc2V0VHlwZSxcbiAgICBzdHJpY3RPYmplY3Q6IHN0cmljdE9iamVjdFR5cGUsXG4gICAgc3RyaW5nOiBzdHJpbmdUeXBlLFxuICAgIHN5bWJvbDogc3ltYm9sVHlwZSxcbiAgICB0cmFuc2Zvcm1lcjogZWZmZWN0c1R5cGUsXG4gICAgdHVwbGU6IHR1cGxlVHlwZSxcbiAgICAndW5kZWZpbmVkJzogdW5kZWZpbmVkVHlwZSxcbiAgICB1bmlvbjogdW5pb25UeXBlLFxuICAgIHVua25vd246IHVua25vd25UeXBlLFxuICAgICd2b2lkJzogdm9pZFR5cGUsXG4gICAgTkVWRVI6IE5FVkVSLFxuICAgIFpvZElzc3VlQ29kZTogWm9kSXNzdWVDb2RlLFxuICAgIHF1b3RlbGVzc0pzb246IHF1b3RlbGVzc0pzb24sXG4gICAgWm9kRXJyb3I6IFpvZEVycm9yXG59KTtcblxuZXhwb3J0IHsgQlJBTkQsIERJUlRZLCBFTVBUWV9QQVRILCBJTlZBTElELCBORVZFUiwgT0ssIFBhcnNlU3RhdHVzLCBab2RUeXBlIGFzIFNjaGVtYSwgWm9kQW55LCBab2RBcnJheSwgWm9kQmlnSW50LCBab2RCb29sZWFuLCBab2RCcmFuZGVkLCBab2RDYXRjaCwgWm9kRGF0ZSwgWm9kRGVmYXVsdCwgWm9kRGlzY3JpbWluYXRlZFVuaW9uLCBab2RFZmZlY3RzLCBab2RFbnVtLCBab2RFcnJvciwgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLCBab2RGdW5jdGlvbiwgWm9kSW50ZXJzZWN0aW9uLCBab2RJc3N1ZUNvZGUsIFpvZExhenksIFpvZExpdGVyYWwsIFpvZE1hcCwgWm9kTmFOLCBab2ROYXRpdmVFbnVtLCBab2ROZXZlciwgWm9kTnVsbCwgWm9kTnVsbGFibGUsIFpvZE51bWJlciwgWm9kT2JqZWN0LCBab2RPcHRpb25hbCwgWm9kUGFyc2VkVHlwZSwgWm9kUGlwZWxpbmUsIFpvZFByb21pc2UsIFpvZFJlYWRvbmx5LCBab2RSZWNvcmQsIFpvZFR5cGUgYXMgWm9kU2NoZW1hLCBab2RTZXQsIFpvZFN0cmluZywgWm9kU3ltYm9sLCBab2RFZmZlY3RzIGFzIFpvZFRyYW5zZm9ybWVyLCBab2RUdXBsZSwgWm9kVHlwZSwgWm9kVW5kZWZpbmVkLCBab2RVbmlvbiwgWm9kVW5rbm93biwgWm9kVm9pZCwgYWRkSXNzdWVUb0NvbnRleHQsIGFueVR5cGUgYXMgYW55LCBhcnJheVR5cGUgYXMgYXJyYXksIGJpZ0ludFR5cGUgYXMgYmlnaW50LCBib29sZWFuVHlwZSBhcyBib29sZWFuLCBjb2VyY2UsIGN1c3RvbSwgZGF0ZVR5cGUgYXMgZGF0ZSwgZGF0ZXRpbWVSZWdleCwgeiBhcyBkZWZhdWx0LCBlcnJvck1hcCBhcyBkZWZhdWx0RXJyb3JNYXAsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgZ2V0RXJyb3JNYXAsIGdldFBhcnNlZFR5cGUsIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIGxhdGUsIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1ha2VJc3N1ZSwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYmplY3RVdGlsLCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHF1b3RlbGVzc0pzb24sIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc2V0RXJyb3JNYXAsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHV0aWwsIHZvaWRUeXBlIGFzIHZvaWQsIHogfTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);