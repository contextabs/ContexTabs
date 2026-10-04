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
                    const selected = candidates.slice(0, 8);
                    const results = await Promise.all(selected.map(async (tab)=>{
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
    clarificationAnswer: (0, _zod.z).string().max(4000).optional()
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxNQUFNO0lBQ04sSUFBSSx5QkFBeUI7UUFBRSxPQUFPO0lBQXVCO0lBQzdELFFBQVE7SUFDUixLQUFLO0lBQ0wsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLE1BQU07SUFDTixTQUFTO0lBQ1QsS0FBSztJQUNMLEtBQUs7SUFDTCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLEtBQUs7SUFDTCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7SUFDUixhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4yL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTU1ZGYyNGQzY2EwY2QwMTUuanMiLCJhcHBzL2V4dGVuc2lvbi8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYXBwcy9leHRlbnNpb24vYmFja2dyb3VuZC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9pZGJAOC4wLjMvbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInBhY2thZ2VzL2NvbnRyYWN0cy9zcmMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvLnBucG0vem9kQDMuMjQuMi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgaD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgYj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXG9saXZlXFxcXERvY3VtZW50c1xcXFxDb2RleFxcXFxjb250ZXh0YWJzXFxcXGFwcHNcXFxcZXh0ZW5zaW9uXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJkN2I5YjJmODFmODE4ZjBiXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwiZXhwb3J0IHt9O1xyXG5cclxuaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSBcImlkYlwiO1xyXG5pbXBvcnQgeyBSZXNlYXJjaFNlc3Npb25TY2hlbWEgfSBmcm9tIFwiQGFtYmllbnQvY29udHJhY3RzXCI7XHJcblxyXG5jb25zdCBkYlByb21pc2UgPSBvcGVuREIoXCJhbWJpZW50LWNvbnRleHRcIiwgMSwge1xyXG4gIHVwZ3JhZGUoZGIpIHsgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwic2Vzc2lvbnNcIikpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFwic2Vzc2lvbnNcIiwgeyBrZXlQYXRoOiBcImlkXCIgfSk7IH1cclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJvbmJvYXJkaW5nLXNlZW5cIik7XHJcbiAgaWYgKCFleGlzdGluZ1tcIm9uYm9hcmRpbmctc2VlblwiXSkgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJvbmJvYXJkaW5nLXNlZW5cIjogdHJ1ZSB9KTtcclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2U/LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJMSVNUX1RBQlNcIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgIGNhc2UgXCJDT0xMRUNUX1RBQl9DT05URVhUXCI6IHtcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHNlbmRlci50YWI/LndpbmRvd0lkID09PSB1bmRlZmluZWQgPyB7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSA6IHsgd2luZG93SWQ6IHNlbmRlci50YWIud2luZG93SWQgfSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIuaWQgPT09IHNlbmRlci50YWI/LmlkKSA/PyB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLmFjdGl2ZSk7XG4gICAgICAgIGxldCBncm91cHMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGJyb3dzZXJHcm91cHMgPSBhd2FpdCBjaHJvbWUudGFiR3JvdXBzLnF1ZXJ5KHt9KTtcbiAgICAgICAgICBncm91cHMgPSBuZXcgTWFwKGJyb3dzZXJHcm91cHMubWFwKChncm91cCkgPT4gW2dyb3VwLmlkLCBncm91cC50aXRsZSB8fCBcIlVubmFtZWQgZ3JvdXBcIl0pKTtcbiAgICAgICAgfSBjYXRjaCB7IC8qIHRhYkdyb3VwcyBwZXJtaXNzaW9uIGlzIG9wdGlvbmFsICovIH1cblxuICAgICAgICBjb25zdCB3b3JkcyA9IFN0cmluZyhtZXNzYWdlLnF1ZXJ5ID8/IFwiXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goL1thLXowLTldezMsfS9nKSA/PyBbXTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHRhYi5pZCAhPT0gYWN0aXZlVGFiPy5pZCAmJiB0YWIuaWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHRhYi51cmwgJiYgL15odHRwcz86XFwvXFwvLy50ZXN0KHRhYi51cmwpICYmICEvXihjaHJvbWV8ZWRnZXxhYm91dHxkZXZ0b29scyk6Ly50ZXN0KHRhYi51cmwpKTtcbiAgICAgICAgY2FuZGlkYXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2NvcmUgPSAodGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gYCR7dGFiLnRpdGxlID8/IFwiXCJ9ICR7dGFiLnVybCA/PyBcIlwifSAke2dyb3Vwcy5nZXQodGFiLmdyb3VwSWQpID8/IFwiXCJ9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgbGV4aWNhbCA9IHdvcmRzLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAoaGF5c3RhY2suaW5jbHVkZXMod29yZCkgPyAyIDogMCksIDApO1xuICAgICAgICAgICAgY29uc3Qgc2FtZUdyb3VwID0gYWN0aXZlVGFiPy5ncm91cElkICE9PSB1bmRlZmluZWQgJiYgYWN0aXZlVGFiLmdyb3VwSWQgPj0gMCAmJiB0YWIuZ3JvdXBJZCA9PT0gYWN0aXZlVGFiLmdyb3VwSWQgPyA1IDogMDtcbiAgICAgICAgICAgIHJldHVybiBsZXhpY2FsICsgc2FtZUdyb3VwO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHNjb3JlKGIpIC0gc2NvcmUoYSkgfHwgKGIubGFzdEFjY2Vzc2VkID8/IDApIC0gKGEubGFzdEFjY2Vzc2VkID8/IDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGNhbmRpZGF0ZXMuc2xpY2UoMCwgOCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChzZWxlY3RlZC5tYXAoYXN5bmMgKHRhYikgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQhIH0sXG4gICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4sIGFydGljbGUsIFtyb2xlPW1haW5dXCIpID8/IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyb290Py5pbm5lclRleHQgPz8gXCJcIikucmVwbGFjZSgvXFxuezMsfS9nLCBcIlxcblxcblwiKS5zbGljZSgwLCAzXzUwMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGV4dCA9IFN0cmluZyhleHRyYWN0ZWRbMF0/LnJlc3VsdCA/PyBcIlwiKTtcbiAgICAgICAgICB9IGNhdGNoIHsgLyogcmVzdHJpY3RlZCBwYWdlcywgZGlzY2FyZGVkIHRhYnMsIGFuZCBwcm90ZWN0ZWQgZnJhbWVzIGFyZSBza2lwcGVkICovIH1cbiAgICAgICAgICByZXR1cm4geyAuLi50YWIsIGNvbnRleHRUZXh0OiB0ZXh0LCBjb250ZXh0R3JvdXBUaXRsZTogdGFiLmdyb3VwSWQgPj0gMCA/IGdyb3Vwcy5nZXQodGFiLmdyb3VwSWQpIDogdW5kZWZpbmVkIH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgICBjYXNlIFwiTElTVF9TRVNTSU9OU1wiOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5nZXRBbGwoXCJzZXNzaW9uc1wiKTtcclxuICAgICAgY2FzZSBcIkdFVF9TRVNTSU9OXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IChhd2FpdCBkYlByb21pc2UpLmdldChcInNlc3Npb25zXCIsIFN0cmluZyhtZXNzYWdlLmlkKSk7XHJcbiAgICAgIGNhc2UgXCJTQVZFX1NFU1NJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBSZXNlYXJjaFNlc3Npb25TY2hlbWEucGFyc2UobWVzc2FnZS5zZXNzaW9uKTtcclxuICAgICAgICBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5wdXQoXCJzZXNzaW9uc1wiLCBzZXNzaW9uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR1JPVVBfVEFCU1wiOiB7XHJcbiAgICAgICAgY29uc3QgdGFiSWRzID0gQXJyYXkuaXNBcnJheShtZXNzYWdlLnRhYklkcykgPyBtZXNzYWdlLnRhYklkcy5maWx0ZXIoKGlkOiB1bmtub3duKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKGlkKSkgOiBbXTtcclxuICAgICAgICBpZiAoIXRhYklkcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIk5vIHRhYiBJRHMgd2VyZSBzdXBwbGllZFwiKTtcclxuICAgICAgICBjb25zdCBncm91cElkID0gYXdhaXQgY2hyb21lLnRhYnMuZ3JvdXAoeyB0YWJJZHMgfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUoZ3JvdXBJZCwgeyB0aXRsZTogU3RyaW5nKG1lc3NhZ2UudGl0bGUgPz8gXCJSZXNlYXJjaCBzZXNzaW9uXCIpLnNsaWNlKDAsIDgwKSwgY29sb3I6IFwicHVycGxlXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwSWQ7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pKCkudGhlbihzZW5kUmVzcG9uc2UpLmNhdGNoKChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJFeHRlbnNpb24gcmVxdWVzdCBmYWlsZWRcIiB9KSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0aGlzLnJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuY29uc3QgYWR2YW5jZU1ldGhvZFByb3BzID0gWydjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknLCAnYWR2YW5jZSddO1xuY29uc3QgbWV0aG9kTWFwID0ge307XG5jb25zdCBhZHZhbmNlUmVzdWx0cyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjdXJzb3JJdGVyYXRvclRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKCFhZHZhbmNlTWV0aG9kUHJvcHMuaW5jbHVkZXMocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBsZXQgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wXTtcbiAgICAgICAgaWYgKCFjYWNoZWRGdW5jKSB7XG4gICAgICAgICAgICBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3BdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBhZHZhbmNlUmVzdWx0cy5zZXQodGhpcywgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuZ2V0KHRoaXMpW3Byb3BdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlZEZ1bmM7XG4gICAgfSxcbn07XG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZSguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIGxldCBjdXJzb3IgPSB0aGlzO1xuICAgIGlmICghKGN1cnNvciBpbnN0YW5jZW9mIElEQkN1cnNvcikpIHtcbiAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLm9wZW5DdXJzb3IoLi4uYXJncyk7XG4gICAgfVxuICAgIGlmICghY3Vyc29yKVxuICAgICAgICByZXR1cm47XG4gICAgY3Vyc29yID0gY3Vyc29yO1xuICAgIGNvbnN0IHByb3hpZWRDdXJzb3IgPSBuZXcgUHJveHkoY3Vyc29yLCBjdXJzb3JJdGVyYXRvclRyYXBzKTtcbiAgICBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5zZXQocHJveGllZEN1cnNvciwgY3Vyc29yKTtcbiAgICAvLyBNYXAgdGhpcyBkb3VibGUtcHJveHkgYmFjayB0byB0aGUgb3JpZ2luYWwsIHNvIG90aGVyIGN1cnNvciBtZXRob2RzIHdvcmsuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm94aWVkQ3Vyc29yLCB1bndyYXAoY3Vyc29yKSk7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICB5aWVsZCBwcm94aWVkQ3Vyc29yO1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGFkdmFuY2luZyBtZXRob2RzIHdhcyBub3QgY2FsbGVkLCBjYWxsIGNvbnRpbnVlKCkuXG4gICAgICAgIGN1cnNvciA9IGF3YWl0IChhZHZhbmNlUmVzdWx0cy5nZXQocHJveGllZEN1cnNvcikgfHwgY3Vyc29yLmNvbnRpbnVlKCkpO1xuICAgICAgICBhZHZhbmNlUmVzdWx0cy5kZWxldGUocHJveGllZEN1cnNvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuICgocHJvcCA9PT0gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiZcbiAgICAgICAgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmUsIElEQkN1cnNvcl0pKSB8fFxuICAgICAgICAocHJvcCA9PT0gJ2l0ZXJhdGUnICYmIGluc3RhbmNlT2ZBbnkodGFyZ2V0LCBbSURCSW5kZXgsIElEQk9iamVjdFN0b3JlXSkpKTtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0ZTtcbiAgICAgICAgcmV0dXJuIG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiwgdW53cmFwLCB3cmFwIH07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbW9yeUl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIGtpbmQ6IHouZW51bShbXCJwcmVmZXJlbmNlXCIsIFwiZmFjdFwiXSksIHRleHQ6IHouc3RyaW5nKCkubWF4KDUwMCksXHJcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLCBjcmVhdGVkQXQ6IHouc3RyaW5nKCksIGxhc3RVc2VkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBzb3VyY2VSZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHN0YXR1czogei5lbnVtKFtcInByb3Bvc2VkXCIsIFwiYXBwcm92ZWRcIiwgXCJkaXNtaXNzZWRcIl0pXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBNZW1vcnlJdGVtID0gei5pbmZlcjx0eXBlb2YgTWVtb3J5SXRlbVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFNvdXJjZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwga2luZDogei5lbnVtKFtcInNlbGVjdGlvblwiLCBcImZpZWxkXCIsIFwicGFnZVwiLCBcInRhYlwiLCBcIm1lbW9yeVwiLCBcImNsYXJpZmljYXRpb25cIiwgXCJzZXNzaW9uXCJdKSxcclxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSwgdGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHRhYkdyb3VwSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgdGFiR3JvdXBUaXRsZTogei5zdHJpbmcoKS5tYXgoMjAwKS5vcHRpb25hbCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UGF5bG9hZFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpLCBxdWVyeTogei5zdHJpbmcoKS5taW4oMSkubWF4KDhfMDAwKSxcclxuICBmaWVsZFRleHQ6IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLCBzZWxlY3Rpb246IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoQ29udGV4dFNvdXJjZVNjaGVtYSkubWF4KDI1KSwgcHJlZmVyZW5jZXM6IHouYXJyYXkoTWVtb3J5SXRlbVNjaGVtYSkubWF4KDIwKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgQ29udGV4dFBheWxvYWQgPSB6LmluZmVyPHR5cGVvZiBDb250ZXh0UGF5bG9hZFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBpbnRlbnQ6IHouc3RyaW5nKCksIG9wdGltaXplZFByb21wdDogei5zdHJpbmcoKSwgc2VsZWN0ZWRTb3VyY2VJZHM6IHouYXJyYXkoei5zdHJpbmcoKSksXHJcbiAgZmlsdGVyZWRDb250ZXh0OiB6LnN0cmluZygpLCBjb25mbGljdHM6IHouYXJyYXkoei5vYmplY3QoeyBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSwgc291cmNlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpIH0pKSxcbiAgaXNBbWJpZ3VvdXM6IHouYm9vbGVhbigpLCBjbGFyaWZ5aW5nUXVlc3Rpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSwgbWlzc2luZ0luZm9ybWF0aW9uOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzdWdnZXN0aW9uVXNlZnVsOiB6LmJvb2xlYW4oKVxufSk7XHJcbmV4cG9ydCB0eXBlIEZpbHRlclJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgRmlsdGVyUmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4ZWN1dGlvblJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBvcHRpbWl6ZWRQcm9tcHQ6IHouc3RyaW5nKCkubWluKDEpLm1heCg4XzAwMCksIGZpbHRlcmVkQ29udGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKSxcclxuICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpIH0pKSxcclxuICBwcmVmZXJlbmNlczogei5hcnJheShNZW1vcnlJdGVtU2NoZW1hKSwgY2xhcmlmaWNhdGlvbkFuc3dlcjogei5zdHJpbmcoKS5tYXgoNF8wMDApLm9wdGlvbmFsKCksXHJcbiAgY29ycmVjdGlvbkZlZWRiYWNrOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgRXhlY3V0aW9uUmVxdWVzdCA9IHouaW5mZXI8dHlwZW9mIEV4ZWN1dGlvblJlcXVlc3RTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmaWNhdGlvblJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHBhc3NlZDogei5ib29sZWFuKCksIHNjb3JlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSksXHJcbiAgaXNzdWVzOiB6LmFycmF5KHoub2JqZWN0KHsga2luZDogei5lbnVtKFtcImludGVudF9nYXBcIiwgXCJ1bnN1cHBvcnRlZF9jbGFpbVwiLCBcImZvcm1hdFwiLCBcImluY29tcGxldGVcIl0pLCBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSB9KSksXHJcbiAgY29ycmVjdGlvblByb21wdDogei5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBWZXJpZmljYXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBWZXJpZmljYXRpb25SZXN1bHRTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7IGNvbnRleHQ6IENvbnRleHRQYXlsb2FkU2NoZW1hLCBjbGFyaWZpY2F0aW9uQW5zd2VyOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKSB9KTtcclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlc3BvbnNlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oXCJzdGF0dXNcIiwgW1xuICB6Lm9iamVjdCh7IHN0YXR1czogei5saXRlcmFsKFwiY2xhcmlmaWNhdGlvbl9yZXF1aXJlZFwiKSwgZmlsdGVyOiBGaWx0ZXJSZXNwb25zZVNjaGVtYSB9KSxcbiAgei5vYmplY3QoeyBzdGF0dXM6IHoubGl0ZXJhbChcIm5vX3N1Z2dlc3Rpb25cIiksIGZpbHRlcjogRmlsdGVyUmVzcG9uc2VTY2hlbWEgfSksXG4gIHoub2JqZWN0KHtcbiAgICBzdGF0dXM6IHoubGl0ZXJhbChcImNvbXBsZXRlXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hLCByZWZpbmVkUHJvbXB0OiB6LnN0cmluZygpLFxuICAgIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCksIHRhYklkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCkgfSkpLFxuICAgIG1lbW9yeVN1Z2dlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLm1heCgyKS5vcHRpb25hbCgpXG4gIH0pXG5dKTtcclxuZXhwb3J0IHR5cGUgQXNzaXN0UmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBBc3Npc3RSZXNwb25zZVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgUmVzZWFyY2hTZXNzaW9uU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6LnN0cmluZygpLCB0aXRsZTogei5zdHJpbmcoKSwgZ29hbDogei5zdHJpbmcoKSwgY3JlYXRlZEF0OiB6LnN0cmluZygpLCB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXHJcbiAgc291cmNlczogei5hcnJheSh6Lm9iamVjdCh7IHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKSwgdGFiSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgZmluZGluZzogei5zdHJpbmcoKS5vcHRpb25hbCgpIH0pKSxcclxuICBmaW5kaW5nczogei5hcnJheSh6LnN0cmluZygpKSwgY29udHJhZGljdGlvbnM6IHouYXJyYXkoei5zdHJpbmcoKSksIHVua25vd25zOiB6LmFycmF5KHouc3RyaW5nKCkpLCBuZXh0U3RlcHM6IHouYXJyYXkoei5zdHJpbmcoKSlcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJlc2VhcmNoU2Vzc2lvbiA9IHouaW5mZXI8dHlwZW9mIFJlc2VhcmNoU2Vzc2lvblNjaGVtYT47XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbnZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5jb25zdCBab2RQYXJzZWRUeXBlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJzdHJpbmdcIixcbiAgICBcIm5hblwiLFxuICAgIFwibnVtYmVyXCIsXG4gICAgXCJpbnRlZ2VyXCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwiYmlnaW50XCIsXG4gICAgXCJzeW1ib2xcIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJ1bmRlZmluZWRcIixcbiAgICBcIm51bGxcIixcbiAgICBcImFycmF5XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcInVua25vd25cIixcbiAgICBcInByb21pc2VcIixcbiAgICBcInZvaWRcIixcbiAgICBcIm5ldmVyXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInNldFwiLFxuXSk7XG5jb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gaXNOYU4oZGF0YSkgPyBab2RQYXJzZWRUeXBlLm5hbiA6IFpvZFBhcnNlZFR5cGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYm9vbGVhbjtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYmlnaW50O1xuICAgICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zeW1ib2w7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50aGVuICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEudGhlbiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgZGF0YS5jYXRjaCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmNhdGNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIERhdGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUub2JqZWN0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5rbm93bjtcbiAgICB9XG59O1xuXG5jb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5jb25zdCBxdW90ZWxlc3NKc29uID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDIpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoL1wiKFteXCJdKylcIjovZywgXCIkMTpcIik7XG59O1xuY2xhc3MgWm9kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZ2V0IGVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGZvcm1hdChfbWFwcGVyKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlciA9IF9tYXBwZXIgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc3N1ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgIGNvbnN0IHByb2Nlc3NFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpc3N1ZSBvZiBlcnJvci5pc3N1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3VuaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWUudW5pb25FcnJvcnMubWFwKHByb2Nlc3NFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5yZXR1cm5UeXBlRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfYXJndW1lbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLmFyZ3VtZW50c0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcnMuX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnIgPSBmaWVsZEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGlzc3VlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGlzc3VlLnBhdGhbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGkgPT09IGlzc3VlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgZXJyb3JBcnJheTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBlcnJvckFycmF5Ll9lcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgZXJyb3JBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXS5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyID0gY3VycltlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb2Nlc3NFcnJvcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzO1xuICAgIH1cbiAgICBzdGF0aWMgYXNzZXJ0KHZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgWm9kRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIFpvZEVycm9yOiAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW5jbHVkZXNcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBpbmNsdWRlIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmluY2x1ZGVzfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gYXQgb25lIG9yIG1vcmUgcG9zaXRpb25zIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke2lzc3VlLnZhbGlkYXRpb24ucG9zaXRpb259YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcInN0YXJ0c1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBzdGFydCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLnN0YXJ0c1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcImVuZHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgZW5kIHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uZW5kc1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZS52YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS52YWxpZGF0aW9uICE9PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgJHtpc3N1ZS52YWxpZGF0aW9ufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX3NtYWxsOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG1vcmUgdGhhbmB9ICR7aXNzdWUubWluaW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG92ZXJgfSAke2lzc3VlLm1pbmltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseSBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmlnSW50IG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5cbmxldCBvdmVycmlkZUVycm9yTWFwID0gZXJyb3JNYXA7XG5mdW5jdGlvbiBzZXRFcnJvck1hcChtYXApIHtcbiAgICBvdmVycmlkZUVycm9yTWFwID0gbWFwO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNYXAoKSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlRXJyb3JNYXA7XG59XG5cbmNvbnN0IG1ha2VJc3N1ZSA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIHBhdGgsIGVycm9yTWFwcywgaXNzdWVEYXRhIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgZnVsbFBhdGggPSBbLi4ucGF0aCwgLi4uKGlzc3VlRGF0YS5wYXRoIHx8IFtdKV07XG4gICAgY29uc3QgZnVsbElzc3VlID0ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgIH07XG4gICAgaWYgKGlzc3VlRGF0YS5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgbWVzc2FnZTogaXNzdWVEYXRhLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IG92ZXJyaWRlTWFwID0gZ2V0RXJyb3JNYXAoKTtcbiAgICBjb25zdCBpc3N1ZSA9IG1ha2VJc3N1ZSh7XG4gICAgICAgIGlzc3VlRGF0YTogaXNzdWVEYXRhLFxuICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIC8vIGNvbnRleHR1YWwgZXJyb3IgbWFwIGlzIGZpcnN0IHByaW9yaXR5XG4gICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsIC8vIHRoZW4gc2NoZW1hLWJvdW5kIG1hcCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwLCAvLyB0aGVuIGdsb2JhbCBvdmVycmlkZSBtYXBcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwID09PSBlcnJvck1hcCA/IHVuZGVmaW5lZCA6IGVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmNsYXNzIFBhcnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwidmFsaWRcIjtcbiAgICB9XG4gICAgZGlydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcInZhbGlkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJkaXJ0eVwiO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiYWJvcnRlZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgYXJyYXlWYWx1ZS5wdXNoKHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogYXJyYXlWYWx1ZSB9O1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAoa2V5LnZhbHVlICE9PSBcIl9fcHJvdG9fX1wiICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiB2YWx1ZS52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCBwYWlyLmFsd2F5c1NldCkpIHtcbiAgICAgICAgICAgICAgICBmaW5hbE9iamVjdFtrZXkudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE9iamVjdCB9O1xuICAgIH1cbn1cbmNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5jb25zdCBESVJUWSA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlIH0pO1xuY29uc3QgT0sgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZSB9KTtcbmNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5jb25zdCBpc0RpcnR5ID0gKHgpID0+IHguc3RhdHVzID09PSBcImRpcnR5XCI7XG5jb25zdCBpc1ZhbGlkID0gKHgpID0+IHguc3RhdHVzID09PSBcInZhbGlkXCI7XG5jb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxudmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcblxudmFyIF9ab2RFbnVtX2NhY2hlLCBfWm9kTmF0aXZlRW51bV9jYWNoZTtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2tleSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIC4uLnRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgdGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGF0aDtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmIChpc3MuY29kZSA9PT0gXCJpbnZhbGlkX2VudW1fdmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgPyBtZXNzYWdlIDogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IChfYSA9IG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwID8gbWVzc2FnZSA6IHJlcXVpcmVkX2Vycm9yKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAoX2IgPSBtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCA/IG1lc3NhZ2UgOiBpbnZhbGlkX3R5cGVfZXJyb3IpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IGVycm9yTWFwOiBjdXN0b21NYXAsIGRlc2NyaXB0aW9uIH07XG59XG5jbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5hc3luYykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuZXJyb3JNYXAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5wYXRoKSB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgXCJ+dmFsaWRhdGVcIihkYXRhKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6ICEhdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKChfYiA9IChfYSA9IGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci5tZXNzYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdClcbiAgICAgICAgICAgID8gbWF5YmVBc3luY1Jlc3VsdFxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eClcbiAgICAgICAgICAgICAgICAgICAgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAxLFxuICAgICAgICAgICAgdmVuZG9yOiBcInpvZFwiLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChkYXRhKSA9PiB0aGlzW1wifnZhbGlkYXRlXCJdKGRhdGEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gWm9kUHJvbWlzZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgb3Iob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBab2RVbmlvbi5jcmVhdGUoW3RoaXMsIG9wdGlvbl0sIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJyYW5kZWQoe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkLFxuICAgICAgICAgICAgdHlwZTogdGhpcyxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGRlZikge1xuICAgICAgICBjb25zdCBjYXRjaFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBjYXRjaFZhbHVlOiBjYXRjaFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBUaGlzID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBUaGlzKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFpvZFBpcGVsaW5lLmNyZWF0ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFJlYWRvbmx5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCBjdWlkMlJlZ2V4ID0gL15bMC05YS16XSskLztcbmNvbnN0IHVsaWRSZWdleCA9IC9eWzAtOUEtSEpLTU5QLVRWLVpdezI2fSQvaTtcbi8vIGNvbnN0IHV1aWRSZWdleCA9XG4vLyAgIC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvaTtcbmNvbnN0IG5hbm9pZFJlZ2V4ID0gL15bYS16MC05Xy1dezIxfSQvaTtcbmNvbnN0IGp3dFJlZ2V4ID0gL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLztcbmNvbnN0IGR1cmF0aW9uUmVnZXggPSAvXlstK10/UCg/ISQpKD86KD86Wy0rXT9cXGQrWSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtZJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzooPzpbLStdP1xcZCtXKXwoPzpbLStdP1xcZCtbLixdXFxkK1ckKSk/KD86KD86Wy0rXT9cXGQrRCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtEJCkpPyg/OlQoPz1bXFxkKy1dKSg/Oig/OlstK10/XFxkK0gpfCg/OlstK10/XFxkK1suLF1cXGQrSCQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86Wy0rXT9cXGQrKD86Wy4sXVxcZCspP1MpPyk/PyQvO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy9vbGQgZW1haWwgcmVnZXhcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKD8hLSkoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezEsfSlbXi08PigpW1xcXS4sOzpcXHNAXCJdJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbKCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFxdKXwoXFxbSVB2NjooKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpXFxdKXwoW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dKltBLVphLXowLTldKSooXFwuW0EtWmEtel17Mix9KSspKSQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtekEtWjAtOVxcLlxcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcL1xcPVxcP1xcXlxcX1xcYFxce1xcfFxcfVxcflxcLV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXig/IVxcLikoPyEuKlxcLlxcLikoW0EtWjAtOV8nK1xcLVxcLl0qKVtBLVowLTlfKy1dQChbQS1aMC05XVtBLVowLTlcXC1dKlxcLikrW0EtWl17Mix9JC9pO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtejAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16MC05LV0rKD86XFwuW2EtejAtOVxcLV0rKSokL2k7XG4vLyBmcm9tIGh0dHBzOi8vdGhla2V2aW5zY290dC5jb20vZW1vamlzLWluLWphdmFzY3JpcHQvI3dyaXRpbmctYS1yZWd1bGFyLWV4cHJlc3Npb25cbmNvbnN0IF9lbW9qaVJlZ2V4ID0gYF4oXFxcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfXxcXFxccHtFbW9qaV9Db21wb25lbnR9KSskYDtcbmxldCBlbW9qaVJlZ2V4O1xuLy8gZmFzdGVyLCBzaW1wbGVyLCBzYWZlclxuY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkkLztcbmNvbnN0IGlwdjRDaWRyUmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLygzWzAtMl18WzEyXT9bMC05XSkkLztcbi8vIGNvbnN0IGlwdjZSZWdleCA9XG4vLyAvXigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSkkLztcbmNvbnN0IGlwdjZSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKSQvO1xuY29uc3QgaXB2NkNpZHJSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKVxcLygxMlswLThdfDFbMDFdWzAtOV18WzEtOV0/WzAtOV0pJC87XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODYwMzkyL2RldGVybWluZS1pZi1zdHJpbmctaXMtaW4tYmFzZTY0LXVzaW5nLWphdmFzY3JpcHRcbmNvbnN0IGJhc2U2NFJlZ2V4ID0gL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvO1xuLy8gaHR0cHM6Ly9iYXNlNjQuZ3VydS9zdGFuZGFyZHMvYmFzZTY0dXJsXG5jb25zdCBiYXNlNjR1cmxSZWdleCA9IC9eKFswLTlhLXpBLVotX117NH0pKigoWzAtOWEtekEtWi1fXXsyfSg9PSk/KXwoWzAtOWEtekEtWi1fXXszfSg9KT8pKT8kLztcbi8vIHNpbXBsZVxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9YDtcbi8vIG5vIGxlYXAgeWVhciB2YWxpZGF0aW9uXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tKCgwWzEzNTc4XXwxMHwxMiktMzF8KDBbMTMtOV18MVswLTJdKS0zMHwoMFsxLTldfDFbMC0yXSktKDBbMS05XXwxXFxcXGR8MlxcXFxkKSlgO1xuLy8gd2l0aCBsZWFwIHllYXIgdmFsaWRhdGlvblxuY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYCgoXFxcXGRcXFxcZFsyNDY4XVswNDhdfFxcXFxkXFxcXGRbMTM1NzldWzI2XXxcXFxcZFxcXFxkMFs0OF18WzAyNDY4XVswNDhdMDB8WzEzNTc5XVsyNl0wMCktMDItMjl8XFxcXGR7NH0tKCgwWzEzNTc4XXwxWzAyXSktKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pfCgwWzQ2OV18MTEpLSgwWzEtOV18WzEyXVxcXFxkfDMwKXwoMDIpLSgwWzEtOV18MVxcXFxkfDJbMC04XSkpKWA7XG5jb25zdCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtkYXRlUmVnZXhTb3VyY2V9JGApO1xuZnVuY3Rpb24gdGltZVJlZ2V4U291cmNlKGFyZ3MpIHtcbiAgICAvLyBsZXQgcmVnZXggPSBgXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1gO1xuICAgIGxldCByZWdleCA9IGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZDpbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgcmVnZXggPSBgJHtyZWdleH1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3MucHJlY2lzaW9uID09IG51bGwpIHtcbiAgICAgICAgcmVnZXggPSBgJHtyZWdleH0oXFxcXC5cXFxcZCspP2A7XG4gICAgfVxuICAgIHJldHVybiByZWdleDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmZ1bmN0aW9uIGRhdGV0aW1lUmVnZXgoYXJncykge1xuICAgIGxldCByZWdleCA9IGAke2RhdGVSZWdleFNvdXJjZX1UJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9YDtcbiAgICBjb25zdCBvcHRzID0gW107XG4gICAgb3B0cy5wdXNoKGFyZ3MubG9jYWwgPyBgWj9gIDogYFpgKTtcbiAgICBpZiAoYXJncy5vZmZzZXQpXG4gICAgICAgIG9wdHMucHVzaChgKFsrLV1cXFxcZHsyfTo/XFxcXGR7Mn0pYCk7XG4gICAgcmVnZXggPSBgJHtyZWdleH0oJHtvcHRzLmpvaW4oXCJ8XCIpfSlgO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVAoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NFJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NlJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSldUKGp3dCwgYWxnKSB7XG4gICAgaWYgKCFqd3RSZWdleC50ZXN0KGp3dCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbaGVhZGVyXSA9IGp3dC5zcGxpdChcIi5cIik7XG4gICAgICAgIC8vIENvbnZlcnQgYmFzZTY0dXJsIHRvIGJhc2U2NFxuICAgICAgICBjb25zdCBiYXNlNjQgPSBoZWFkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csIFwiK1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgXCIvXCIpXG4gICAgICAgICAgICAucGFkRW5kKGhlYWRlci5sZW5ndGggKyAoKDQgLSAoaGVhZGVyLmxlbmd0aCAlIDQpKSAlIDQpLCBcIj1cIik7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBKU09OLnBhcnNlKGF0b2IoYmFzZTY0KSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjb2RlZCAhPT0gXCJvYmplY3RcIiB8fCBkZWNvZGVkID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWRlY29kZWQudHlwIHx8ICFkZWNvZGVkLmFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGFsZyAmJiBkZWNvZGVkLmFsZyAhPT0gYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ2lkcihpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NkNpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzdWx0ID0gY2hlY2sucmVnZXgudGVzdChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidHJpbVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpbmNsdWRlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmluY2x1ZGVzKGNoZWNrLnZhbHVlLCBjaGVjay5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBpbmNsdWRlczogY2hlY2sudmFsdWUsIHBvc2l0aW9uOiBjaGVjay5wb3NpdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9Mb3dlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvVXBwZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJzdGFydHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuc3RhcnRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBzdGFydHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW5kc1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5lbmRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBlbmRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGV0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGVSZWdleDtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZHVyYXRpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICghZHVyYXRpb25SZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImlwXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRJUChpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJqd3RcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEpXVChpbnB1dC5kYXRhLCBjaGVjay5hbGcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiand0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjaWRyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDaWRyKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY2lkclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NHVybFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjR1cmxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9yZWdleChyZWdleCwgdmFsaWRhdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmVtZW50KChkYXRhKSA9PiByZWdleC50ZXN0KGRhdGEpLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLFxuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtYWlsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbWFpbFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVybChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXJsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgZW1vamkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtb2ppXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXVpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXVpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIG5hbm9pZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwibmFub2lkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQyKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkMlwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVsaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVsaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImJhc2U2NFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NHVybChtZXNzYWdlKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgand0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJqd3RcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBpcChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiaXBcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBjaWRyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjaWRyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgZGF0ZXRpbWUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uKSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub2Zmc2V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsOiAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImRhdGVcIiwgbWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uKSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGR1cmF0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkdXJhdGlvblwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbmNsdWRlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcG9zaXRpb246IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFcXVpdmFsZW50IHRvIGAubWluKDEpYFxuICAgICAqL1xuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSk7XG4gICAgfVxuICAgIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0cmltXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b0xvd2VyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvTG93ZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1VwcGVyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvVXBwZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRlXCIpO1xuICAgIH1cbiAgICBnZXQgaXNUaW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0R1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImR1cmF0aW9uXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbWFpbFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVJMKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVybFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1vamkoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1vamlcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzTkFOT0lEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcIm5hbm9pZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEMigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkMlwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVUxJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1bGlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNJUCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpcFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ0lEUigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjaWRyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0XCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjR1cmwoKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IHBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IHBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYWZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBnZXQgaXNJbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaW50XCIgfHxcbiAgICAgICAgICAgIChjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIiAmJiB1dGlsLmlzSW50ZWdlcihjaC52YWx1ZSkpKTtcbiAgICB9XG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbCwgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJmaW5pdGVcIiB8fFxuICAgICAgICAgICAgICAgIGNoLmtpbmQgPT09IFwiaW50XCIgfHxcbiAgICAgICAgICAgICAgICBjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobWluKSAmJiBOdW1iZXIuaXNGaW5pdGUobWF4KTtcbiAgICB9XG59XG5ab2ROdW1iZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXIsXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQmlnSW50IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gQmlnSW50KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5iaWdpbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEgJSBjaGVjay52YWx1ZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2dldEludmFsaWRJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJpZ2ludCxcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RCaWdJbnQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQmlnSW50LFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQm9vbGVhbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJvb2xlYW4oaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5ib29sZWFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQm9vbGVhbi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCb29sZWFuKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZERhdGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBuZXcgRGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZGF0ZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihpbnB1dC5kYXRhLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoaW5wdXQuZGF0YS5nZXRUaW1lKCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5EYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heERhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4RGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluRGF0ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluICE9IG51bGwgPyBuZXcgRGF0ZShtaW4pIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0IG1heERhdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heCAhPSBudWxsID8gbmV3IERhdGUobWF4KSA6IG51bGw7XG4gICAgfVxufVxuWm9kRGF0ZS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGF0ZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFN5bWJvbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN5bWJvbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kU3ltYm9sLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN5bWJvbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3ltYm9sLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5kZWZpbmVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmRlZmluZWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5kZWZpbmVkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udWxsLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZE51bGwuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEFueSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyB0byBwcmV2ZW50IGluc3RhbmNlcyBvZiBvdGhlciBjbGFzc2VzIGZyb20gZXh0ZW5kaW5nIFpvZEFueS4gdGhpcyBjYXVzZXMgaXNzdWVzIHdpdGggY2F0Y2hhbGwgaW4gWm9kT2JqZWN0LlxuICAgICAgICB0aGlzLl9hbnkgPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEFueS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBbnkoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFueSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVua25vd24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcmVxdWlyZWRcbiAgICAgICAgdGhpcy5fdW5rbm93biA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5rbm93bi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmtub3duKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmtub3duLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTmV2ZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uZXZlcixcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbn1cblpvZE5ldmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5ldmVyKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFZvaWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudm9pZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RWb2lkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFZvaWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFZvaWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBcnJheSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCwgc3RhdHVzIH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYuZXhhY3RMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY3R4LmRhdGEubGVuZ3RoIDwgZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0b29CaWcgPyBab2RJc3N1ZUNvZGUudG9vX2JpZyA6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06ICh0b29TbWFsbCA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06ICh0b29CaWcgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWluTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgZGVmLm1pbkxlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPiBkZWYubWF4TGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4TGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VBc3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgICAgIH0pKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgdHlwZTogZGVlcFBhcnRpYWxpZnkoc2NoZW1hLmVsZW1lbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kVHVwbGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZFR1cGxlLmNyZWF0ZShzY2hlbWEuaXRlbXMubWFwKChpdGVtKSA9PiBkZWVwUGFydGlhbGlmeShpdGVtKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5jbGFzcyBab2RPYmplY3QgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIEluIG1vc3QgY2FzZXMsIHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIHVua25vd24gcHJvcGVydGllcyBhcmUgbm93IHNpbGVudGx5IHN0cmlwcGVkLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBwYXNzIHRocm91Z2ggdW5rbm93biBwcm9wZXJ0aWVzLCB1c2UgYC5wYXNzdGhyb3VnaCgpYCBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub25zdHJpY3QgPSB0aGlzLnBhc3N0aHJvdWdoO1xuICAgICAgICAvLyBleHRlbmQ8XG4gICAgICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGUsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgICAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+LFxuICAgICAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgICAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT5cbiAgICAgICAgLy8gPihcbiAgICAgICAgLy8gICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgICAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgQXVnbWVudGF0aW9uPixcbiAgICAgICAgLy8gICBVbmtub3duS2V5cyxcbiAgICAgICAgLy8gICBDYXRjaGFsbCxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQsXG4gICAgICAgIC8vICAgTmV3SW5wdXRcbiAgICAgICAgLy8gPiB7XG4gICAgICAgIC8vICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAvLyAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAvLyAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgIC8vICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICB9KSBhcyBhbnk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9jYWNoZWQgPSB7IHNoYXBlLCBrZXlzIH0pO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmXG4gICAgICAgICAgICB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IHBhaXIuYWx3YXlzU2V0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNQYWlycztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN5bmNQYWlycykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgIH1cbiAgICBzdHJpY3QobWVzc2FnZSkge1xuICAgICAgICBlcnJvclV0aWwuZXJyVG9PYmo7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDogKGlzc3VlLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFcnJvciA9IChfYyA9IChfYiA9IChfYSA9IHRoaXMuX2RlZikuZXJyb3JNYXApID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBpc3N1ZSwgY3R4KS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBjdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwidW5yZWNvZ25pemVkX2tleXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAoX2QgPSBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkubWVzc2FnZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RyaXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXNzdGhyb3VnaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwicGFzc3Rocm91Z2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IEF1Z21lbnRGYWN0b3J5ID1cbiAgICAvLyAgIDxEZWYgZXh0ZW5kcyBab2RPYmplY3REZWY+KGRlZjogRGVmKSA9PlxuICAgIC8vICAgPEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlPihcbiAgICAvLyAgICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAvLyAgICk6IFpvZE9iamVjdDxcbiAgICAvLyAgICAgZXh0ZW5kU2hhcGU8UmV0dXJuVHlwZTxEZWZbXCJzaGFwZVwiXT4sIEF1Z21lbnRhdGlvbj4sXG4gICAgLy8gICAgIERlZltcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgICBEZWZbXCJjYXRjaGFsbFwiXVxuICAgIC8vICAgPiA9PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgICAuLi5kZWYsXG4gICAgLy8gICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgLy8gICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAvLyAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSkgYXMgYW55O1xuICAgIC8vICAgfTtcbiAgICBleHRlbmQoYXVnbWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpb3IgdG8gem9kQDEuMC4xMiB0aGVyZSB3YXMgYSBidWcgaW4gdGhlXG4gICAgICogaW5mZXJyZWQgdHlwZSBvZiBtZXJnZWQgb2JqZWN0cy4gUGxlYXNlXG4gICAgICogdXBncmFkZSBpZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBpc3N1ZXMuXG4gICAgICovXG4gICAgbWVyZ2UobWVyZ2luZykge1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4ubWVyZ2luZy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgLy8gbWVyZ2U8XG4gICAgLy8gICBJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdCxcbiAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIEluY29taW5nW1wic2hhcGVcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9LFxuICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH1cbiAgICAvLyA+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0LFxuICAgIC8vICAgTmV3SW5wdXRcbiAgICAvLyA+IHtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKG1hc2spLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hc2tba2V5XSAmJiB0aGlzLnNoYXBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZGVlcFBhcnRpYWwoKSB7XG4gICAgICAgIHJldHVybiBkZWVwUGFydGlhbGlmeSh0aGlzKTtcbiAgICB9XG4gICAgcGFydGlhbChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWlyZWQobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGtleW9mKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlWm9kRW51bSh1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpO1xuICAgIH1cbn1cblpvZE9iamVjdC5jcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LnN0cmljdENyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LmxhenljcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2RlZi5vcHRpb25zO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBmaXJzdCBpc3N1ZS1mcmVlIHZhbGlkYXRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpc3N1ZXMgZnJvbSBkaXJ0eSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5yZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiBuZXcgWm9kRXJyb3IocmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLm1hcChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhd2FpdCBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjdHg6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiICYmICFkaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eSA9IHsgcmVzdWx0LCBjdHg6IGNoaWxkQ3R4IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXMucHVzaChjaGlsZEN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLmRpcnR5LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlydHkucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSBpc3N1ZXMubWFwKChpc3N1ZXMpID0+IG5ldyBab2RFcnJvcihpc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbn1cblpvZFVuaW9uLmNyZWF0ZSA9ICh0eXBlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmlvbih7XG4gICAgICAgIG9wdGlvbnM6IHR5cGVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGdldERpc2NyaW1pbmF0b3IgPSAodHlwZSkgPT4ge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGF6eSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNjaGVtYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFZmZlY3RzKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuaW5uZXJUeXBlKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gW3R5cGUudmFsdWVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRW51bSkge1xuICAgICAgICByZXR1cm4gdHlwZS5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTmF0aXZlRW51bSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXModHlwZS5lbnVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZERlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWRdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbCkge1xuICAgICAgICByZXR1cm4gW251bGxdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEJyYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RSZWFkb25seSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZENhdGNoKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGRpc2NyaW1pbmF0b3IgdmFsdWUgZm9yIGtleSBcXGAke2Rpc2NyaW1pbmF0b3J9XFxgIGNvdWxkIG5vdCBiZSBleHRyYWN0ZWQgZnJvbSBhbGwgc2NoZW1hIG9wdGlvbnNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGlzY3JpbWluYXRvclZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXNjcmltaW5hdG9yIHByb3BlcnR5ICR7U3RyaW5nKGRpc2NyaW1pbmF0b3IpfSBoYXMgZHVwbGljYXRlIHZhbHVlICR7U3RyaW5nKHZhbHVlKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc01hcC5zZXQodmFsdWUsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGlzY3JpbWluYXRlZFVuaW9uKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgICAgICAgICAgZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zTWFwLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtZXJnZVZhbHVlcyhhLCBiKSB7XG4gICAgY29uc3QgYVR5cGUgPSBnZXRQYXJzZWRUeXBlKGEpO1xuICAgIGNvbnN0IGJUeXBlID0gZ2V0UGFyc2VkVHlwZShiKTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGJLZXlzID0gdXRpbC5vYmplY3RLZXlzKGIpO1xuICAgICAgICBjb25zdCBzaGFyZWRLZXlzID0gdXRpbFxuICAgICAgICAgICAgLm9iamVjdEtleXMoYSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gYktleXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHsgLi4uYSwgLi4uYiB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFyZWRLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gc2hhcmVkVmFsdWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3T2JqIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUEgPSBhW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CID0gYltpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGl0ZW1BLCBpdGVtQik7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNoYXJlZFZhbHVlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdBcnJheSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmXG4gICAgICAgIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgK2EgPT09ICtiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICB9XG59XG5jbGFzcyBab2RJbnRlcnNlY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgaGFuZGxlUGFyc2VkID0gKHBhcnNlZExlZnQsIHBhcnNlZFJpZ2h0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBYm9ydGVkKHBhcnNlZExlZnQpIHx8IGlzQWJvcnRlZChwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlVmFsdWVzKHBhcnNlZExlZnQudmFsdWUsIHBhcnNlZFJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghbWVyZ2VkLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RpcnR5KHBhcnNlZExlZnQpIHx8IGlzRGlydHkocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IG1lcmdlZC5kYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYucmlnaHQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSkudGhlbigoW2xlZnQsIHJpZ2h0XSkgPT4gaGFuZGxlUGFyc2VkKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUGFyc2VkKHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSksIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZEludGVyc2VjdGlvbi5jcmVhdGUgPSAobGVmdCwgcmlnaHQsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEludGVyc2VjdGlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFR1cGxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3QgPSB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgaWYgKCFyZXN0ICYmIGN0eC5kYXRhLmxlbmd0aCA+IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLmN0eC5kYXRhXVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFNldCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc2V0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnNldCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGRlZi5taW5TaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA8IGRlZi5taW5TaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5TaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pblNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heFNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplID4gZGVmLm1heFNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhTaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heFNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZVNldChlbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNldC5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHBhcnNlZFNldCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmN0eC5kYXRhLnZhbHVlcygpXS5tYXAoKGl0ZW0sIGkpID0+IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSkpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGVsZW1lbnRzKS50aGVuKChlbGVtZW50cykgPT4gZmluYWxpemVTZXQoZWxlbWVudHMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZVNldChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWluKG1pblNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogbWluU2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4U2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhTaXplOiB7IHZhbHVlOiBtYXhTaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpemUoc2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oc2l6ZSwgbWVzc2FnZSkubWF4KHNpemUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RTZXQuY3JlYXRlID0gKHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1pblNpemU6IG51bGwsXG4gICAgICAgIG1heFNpemU6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU2V0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c0Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZVJldHVybnNJc3N1ZShyZXR1cm5zLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmV0dXJucyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXJyb3JNYXAoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IG1lLl9kZWYuYXJnc1xuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IG1lLl9kZWYucmV0dXJucy5fZGVmLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQXN5bmMocmVzdWx0LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IG1lLl9kZWYuYXJncy5zYWZlUGFyc2UoYXJncywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZEFyZ3Muc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VBcmdzSXNzdWUoYXJncywgcGFyc2VkQXJncy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gbWUuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzXG4gICAgICAgICAgICAgICAgPyBhcmdzXG4gICAgICAgICAgICAgICAgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB0aGlzLl9kZWYudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWU7XG4gICAgfVxufVxuWm9kTGl0ZXJhbC5jcmVhdGUgPSAodmFsdWUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGl0ZXJhbCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMaXRlcmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlWm9kRW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kRW51bSh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5jbGFzcyBab2RFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9ab2RFbnVtX2NhY2hlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ab2RFbnVtX2NhY2hlLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1pvZEVudW1fY2FjaGUsIG5ldyBTZXQodGhpcy5fZGVmLnZhbHVlcyksIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZEVudW1fY2FjaGUsIFwiZlwiKS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IEVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBleHRyYWN0KHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV4Y2x1ZGUodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhvcHQpKSwge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5fWm9kRW51bV9jYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5jbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9ab2ROYXRpdmVFbnVtX2NhY2hlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRW51bVZhbHVlcyA9IHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcgJiZcbiAgICAgICAgICAgIGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZE5hdGl2ZUVudW1fY2FjaGUsIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWm9kTmF0aXZlRW51bV9jYWNoZSwgbmV3IFNldCh1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKSksIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZE5hdGl2ZUVudW1fY2FjaGUsIFwiZlwiKS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxufVxuX1pvZE5hdGl2ZUVudW1fY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuWm9kTmF0aXZlRW51bS5jcmVhdGUgPSAodmFsdWVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hdGl2ZUVudW0oe1xuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYXRpdmVFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicHJlcHJvY2Vzc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBlZmZlY3QudHJhbnNmb3JtKGN0eC5kYXRhLCBjaGVja0N0eCk7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2Vzc2VkKS50aGVuKGFzeW5jIChwcm9jZXNzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInJlZmluZW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZVJlZmluZW1lbnQgPSAoYWNjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnJlZmluZW1lbnQoYWNjLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyByZWZpbmVtZW50IGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoaW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzeW5jaHJvbm91cyB0cmFuc2Zvcm0gZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChiYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpKS50aGVuKChyZXN1bHQpID0+ICh7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGVmZmVjdCk7XG4gICAgfVxufVxuWm9kRWZmZWN0cy5jcmVhdGUgPSAoc2NoZW1hLCBlZmZlY3QsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzID0gKHByZXByb2Nlc3MsIHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJwcmVwcm9jZXNzXCIsIHRyYW5zZm9ybTogcHJlcHJvY2VzcyB9LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RPcHRpb25hbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RPcHRpb25hbC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPcHRpb25hbCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE51bGxhYmxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kTnVsbGFibGUuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbGFibGUoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbGFibGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REZWZhdWx0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBsZXQgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZERlZmF1bHQuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiBwYXJhbXMuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHBhcmFtcy5kZWZhdWx0XG4gICAgICAgICAgICA6ICgpID0+IHBhcmFtcy5kZWZhdWx0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQ2F0Y2ggZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIC8vIG5ld0N0eCBpcyB1c2VkIHRvIG5vdCBjb2xsZWN0IGlzc3VlcyBmcm9tIGlubmVyIHR5cGVzIGluIGN0eFxuICAgICAgICBjb25zdCBuZXdDdHggPSB7XG4gICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IG5ld0N0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgICAgLi4ubmV3Q3R4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RDYXRjaC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgY2F0Y2hWYWx1ZTogdHlwZW9mIHBhcmFtcy5jYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmNhdGNoIDogKCkgPT4gcGFyYW1zLmNhdGNoLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuY2xhc3MgWm9kQnJhbmRlZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxufVxuY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFpvZFJlYWRvbmx5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgY29uc3QgZnJlZXplID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IE9iamVjdC5mcmVlemUoZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzQXN5bmMocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQudGhlbigoZGF0YSkgPT4gZnJlZXplKGRhdGEpKVxuICAgICAgICAgICAgOiBmcmVlemUocmVzdWx0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RSZWFkb25seS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RSZWFkb25seSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWFkb25seSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICB6LmN1c3RvbSAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIGNsZWFuUGFyYW1zKHBhcmFtcywgZGF0YSkge1xuICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBwYXJhbXMoZGF0YSlcbiAgICAgICAgOiB0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHsgbWVzc2FnZTogcGFyYW1zIH1cbiAgICAgICAgICAgIDogcGFyYW1zO1xuICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgcmV0dXJuIHAyO1xufVxuZnVuY3Rpb24gY3VzdG9tKGNoZWNrLCBfcGFyYW1zID0ge30sIFxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFBhc3MgYGZhdGFsYCBpbnRvIHRoZSBwYXJhbXMgb2JqZWN0IGluc3RlYWQ6XG4gKlxuICogYGBgdHNcbiAqIHouc3RyaW5nKCkuY3VzdG9tKCh2YWwpID0+IHZhbC5sZW5ndGggPiA1LCB7IGZhdGFsOiBmYWxzZSB9KVxuICogYGBgXG4gKlxuICovXG5mYXRhbCkge1xuICAgIGlmIChjaGVjaylcbiAgICAgICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKS5zdXBlclJlZmluZSgoZGF0YSwgY3R4KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgciA9IGNoZWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gKF9iID0gKF9hID0gcGFyYW1zLmZhdGFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYXRhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gKF9iID0gKF9hID0gcGFyYW1zLmZhdGFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYXRhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59XG5jb25zdCBsYXRlID0ge1xuICAgIG9iamVjdDogWm9kT2JqZWN0LmxhenljcmVhdGUsXG59O1xudmFyIFpvZEZpcnN0UGFydHlUeXBlS2luZDtcbihmdW5jdGlvbiAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kKSB7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3RyaW5nXCJdID0gXCJab2RTdHJpbmdcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdW1iZXJcIl0gPSBcIlpvZE51bWJlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hTlwiXSA9IFwiWm9kTmFOXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQmlnSW50XCJdID0gXCJab2RCaWdJbnRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCb29sZWFuXCJdID0gXCJab2RCb29sZWFuXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGF0ZVwiXSA9IFwiWm9kRGF0ZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN5bWJvbFwiXSA9IFwiWm9kU3ltYm9sXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5kZWZpbmVkXCJdID0gXCJab2RVbmRlZmluZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsXCJdID0gXCJab2ROdWxsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQW55XCJdID0gXCJab2RBbnlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmtub3duXCJdID0gXCJab2RVbmtub3duXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmV2ZXJcIl0gPSBcIlpvZE5ldmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVm9pZFwiXSA9IFwiWm9kVm9pZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFycmF5XCJdID0gXCJab2RBcnJheVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9iamVjdFwiXSA9IFwiWm9kT2JqZWN0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5pb25cIl0gPSBcIlpvZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCJdID0gXCJab2REaXNjcmltaW5hdGVkVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RJbnRlcnNlY3Rpb25cIl0gPSBcIlpvZEludGVyc2VjdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFR1cGxlXCJdID0gXCJab2RUdXBsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlY29yZFwiXSA9IFwiWm9kUmVjb3JkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTWFwXCJdID0gXCJab2RNYXBcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTZXRcIl0gPSBcIlpvZFNldFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEZ1bmN0aW9uXCJdID0gXCJab2RGdW5jdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExhenlcIl0gPSBcIlpvZExhenlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMaXRlcmFsXCJdID0gXCJab2RMaXRlcmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRW51bVwiXSA9IFwiWm9kRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVmZmVjdHNcIl0gPSBcIlpvZEVmZmVjdHNcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYXRpdmVFbnVtXCJdID0gXCJab2ROYXRpdmVFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT3B0aW9uYWxcIl0gPSBcIlpvZE9wdGlvbmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbGFibGVcIl0gPSBcIlpvZE51bGxhYmxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGVmYXVsdFwiXSA9IFwiWm9kRGVmYXVsdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZENhdGNoXCJdID0gXCJab2RDYXRjaFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFByb21pc2VcIl0gPSBcIlpvZFByb21pc2VcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCcmFuZGVkXCJdID0gXCJab2RCcmFuZGVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUGlwZWxpbmVcIl0gPSBcIlpvZFBpcGVsaW5lXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVhZG9ubHlcIl0gPSBcIlpvZFJlYWRvbmx5XCI7XG59KShab2RGaXJzdFBhcnR5VHlwZUtpbmQgfHwgKFpvZEZpcnN0UGFydHlUeXBlS2luZCA9IHt9KSk7XG5jb25zdCBpbnN0YW5jZU9mVHlwZSA9IChcbi8vIGNvbnN0IGluc3RhbmNlT2ZUeXBlID0gPFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuY2xzLCBwYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogYElucHV0IG5vdCBpbnN0YW5jZSBvZiAke2Nscy5uYW1lfWAsXG59KSA9PiBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG5jb25zdCBzdHJpbmdUeXBlID0gWm9kU3RyaW5nLmNyZWF0ZTtcbmNvbnN0IG51bWJlclR5cGUgPSBab2ROdW1iZXIuY3JlYXRlO1xuY29uc3QgbmFuVHlwZSA9IFpvZE5hTi5jcmVhdGU7XG5jb25zdCBiaWdJbnRUeXBlID0gWm9kQmlnSW50LmNyZWF0ZTtcbmNvbnN0IGJvb2xlYW5UeXBlID0gWm9kQm9vbGVhbi5jcmVhdGU7XG5jb25zdCBkYXRlVHlwZSA9IFpvZERhdGUuY3JlYXRlO1xuY29uc3Qgc3ltYm9sVHlwZSA9IFpvZFN5bWJvbC5jcmVhdGU7XG5jb25zdCB1bmRlZmluZWRUeXBlID0gWm9kVW5kZWZpbmVkLmNyZWF0ZTtcbmNvbnN0IG51bGxUeXBlID0gWm9kTnVsbC5jcmVhdGU7XG5jb25zdCBhbnlUeXBlID0gWm9kQW55LmNyZWF0ZTtcbmNvbnN0IHVua25vd25UeXBlID0gWm9kVW5rbm93bi5jcmVhdGU7XG5jb25zdCBuZXZlclR5cGUgPSBab2ROZXZlci5jcmVhdGU7XG5jb25zdCB2b2lkVHlwZSA9IFpvZFZvaWQuY3JlYXRlO1xuY29uc3QgYXJyYXlUeXBlID0gWm9kQXJyYXkuY3JlYXRlO1xuY29uc3Qgb2JqZWN0VHlwZSA9IFpvZE9iamVjdC5jcmVhdGU7XG5jb25zdCBzdHJpY3RPYmplY3RUeXBlID0gWm9kT2JqZWN0LnN0cmljdENyZWF0ZTtcbmNvbnN0IHVuaW9uVHlwZSA9IFpvZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgPSBab2REaXNjcmltaW5hdGVkVW5pb24uY3JlYXRlO1xuY29uc3QgaW50ZXJzZWN0aW9uVHlwZSA9IFpvZEludGVyc2VjdGlvbi5jcmVhdGU7XG5jb25zdCB0dXBsZVR5cGUgPSBab2RUdXBsZS5jcmVhdGU7XG5jb25zdCByZWNvcmRUeXBlID0gWm9kUmVjb3JkLmNyZWF0ZTtcbmNvbnN0IG1hcFR5cGUgPSBab2RNYXAuY3JlYXRlO1xuY29uc3Qgc2V0VHlwZSA9IFpvZFNldC5jcmVhdGU7XG5jb25zdCBmdW5jdGlvblR5cGUgPSBab2RGdW5jdGlvbi5jcmVhdGU7XG5jb25zdCBsYXp5VHlwZSA9IFpvZExhenkuY3JlYXRlO1xuY29uc3QgbGl0ZXJhbFR5cGUgPSBab2RMaXRlcmFsLmNyZWF0ZTtcbmNvbnN0IGVudW1UeXBlID0gWm9kRW51bS5jcmVhdGU7XG5jb25zdCBuYXRpdmVFbnVtVHlwZSA9IFpvZE5hdGl2ZUVudW0uY3JlYXRlO1xuY29uc3QgcHJvbWlzZVR5cGUgPSBab2RQcm9taXNlLmNyZWF0ZTtcbmNvbnN0IGVmZmVjdHNUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGU7XG5jb25zdCBvcHRpb25hbFR5cGUgPSBab2RPcHRpb25hbC5jcmVhdGU7XG5jb25zdCBudWxsYWJsZVR5cGUgPSBab2ROdWxsYWJsZS5jcmVhdGU7XG5jb25zdCBwcmVwcm9jZXNzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3M7XG5jb25zdCBwaXBlbGluZVR5cGUgPSBab2RQaXBlbGluZS5jcmVhdGU7XG5jb25zdCBvc3RyaW5nID0gKCkgPT4gc3RyaW5nVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvbnVtYmVyID0gKCkgPT4gbnVtYmVyVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvYm9vbGVhbiA9ICgpID0+IGJvb2xlYW5UeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IGNvZXJjZSA9IHtcbiAgICBzdHJpbmc6ICgoYXJnKSA9PiBab2RTdHJpbmcuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIG51bWJlcjogKChhcmcpID0+IFpvZE51bWJlci5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgYm9vbGVhbjogKChhcmcpID0+IFpvZEJvb2xlYW4uY3JlYXRlKHtcbiAgICAgICAgLi4uYXJnLFxuICAgICAgICBjb2VyY2U6IHRydWUsXG4gICAgfSkpLFxuICAgIGJpZ2ludDogKChhcmcpID0+IFpvZEJpZ0ludC5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgZGF0ZTogKChhcmcpID0+IFpvZERhdGUuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxufTtcbmNvbnN0IE5FVkVSID0gSU5WQUxJRDtcblxudmFyIHogPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGRlZmF1bHRFcnJvck1hcDogZXJyb3JNYXAsXG4gICAgc2V0RXJyb3JNYXA6IHNldEVycm9yTWFwLFxuICAgIGdldEVycm9yTWFwOiBnZXRFcnJvck1hcCxcbiAgICBtYWtlSXNzdWU6IG1ha2VJc3N1ZSxcbiAgICBFTVBUWV9QQVRIOiBFTVBUWV9QQVRILFxuICAgIGFkZElzc3VlVG9Db250ZXh0OiBhZGRJc3N1ZVRvQ29udGV4dCxcbiAgICBQYXJzZVN0YXR1czogUGFyc2VTdGF0dXMsXG4gICAgSU5WQUxJRDogSU5WQUxJRCxcbiAgICBESVJUWTogRElSVFksXG4gICAgT0s6IE9LLFxuICAgIGlzQWJvcnRlZDogaXNBYm9ydGVkLFxuICAgIGlzRGlydHk6IGlzRGlydHksXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0FzeW5jOiBpc0FzeW5jLFxuICAgIGdldCB1dGlsICgpIHsgcmV0dXJuIHV0aWw7IH0sXG4gICAgZ2V0IG9iamVjdFV0aWwgKCkgeyByZXR1cm4gb2JqZWN0VXRpbDsgfSxcbiAgICBab2RQYXJzZWRUeXBlOiBab2RQYXJzZWRUeXBlLFxuICAgIGdldFBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUsXG4gICAgWm9kVHlwZTogWm9kVHlwZSxcbiAgICBkYXRldGltZVJlZ2V4OiBkYXRldGltZVJlZ2V4LFxuICAgIFpvZFN0cmluZzogWm9kU3RyaW5nLFxuICAgIFpvZE51bWJlcjogWm9kTnVtYmVyLFxuICAgIFpvZEJpZ0ludDogWm9kQmlnSW50LFxuICAgIFpvZEJvb2xlYW46IFpvZEJvb2xlYW4sXG4gICAgWm9kRGF0ZTogWm9kRGF0ZSxcbiAgICBab2RTeW1ib2w6IFpvZFN5bWJvbCxcbiAgICBab2RVbmRlZmluZWQ6IFpvZFVuZGVmaW5lZCxcbiAgICBab2ROdWxsOiBab2ROdWxsLFxuICAgIFpvZEFueTogWm9kQW55LFxuICAgIFpvZFVua25vd246IFpvZFVua25vd24sXG4gICAgWm9kTmV2ZXI6IFpvZE5ldmVyLFxuICAgIFpvZFZvaWQ6IFpvZFZvaWQsXG4gICAgWm9kQXJyYXk6IFpvZEFycmF5LFxuICAgIFpvZE9iamVjdDogWm9kT2JqZWN0LFxuICAgIFpvZFVuaW9uOiBab2RVbmlvbixcbiAgICBab2REaXNjcmltaW5hdGVkVW5pb246IFpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICBab2RJbnRlcnNlY3Rpb246IFpvZEludGVyc2VjdGlvbixcbiAgICBab2RUdXBsZTogWm9kVHVwbGUsXG4gICAgWm9kUmVjb3JkOiBab2RSZWNvcmQsXG4gICAgWm9kTWFwOiBab2RNYXAsXG4gICAgWm9kU2V0OiBab2RTZXQsXG4gICAgWm9kRnVuY3Rpb246IFpvZEZ1bmN0aW9uLFxuICAgIFpvZExhenk6IFpvZExhenksXG4gICAgWm9kTGl0ZXJhbDogWm9kTGl0ZXJhbCxcbiAgICBab2RFbnVtOiBab2RFbnVtLFxuICAgIFpvZE5hdGl2ZUVudW06IFpvZE5hdGl2ZUVudW0sXG4gICAgWm9kUHJvbWlzZTogWm9kUHJvbWlzZSxcbiAgICBab2RFZmZlY3RzOiBab2RFZmZlY3RzLFxuICAgIFpvZFRyYW5zZm9ybWVyOiBab2RFZmZlY3RzLFxuICAgIFpvZE9wdGlvbmFsOiBab2RPcHRpb25hbCxcbiAgICBab2ROdWxsYWJsZTogWm9kTnVsbGFibGUsXG4gICAgWm9kRGVmYXVsdDogWm9kRGVmYXVsdCxcbiAgICBab2RDYXRjaDogWm9kQ2F0Y2gsXG4gICAgWm9kTmFOOiBab2ROYU4sXG4gICAgQlJBTkQ6IEJSQU5ELFxuICAgIFpvZEJyYW5kZWQ6IFpvZEJyYW5kZWQsXG4gICAgWm9kUGlwZWxpbmU6IFpvZFBpcGVsaW5lLFxuICAgIFpvZFJlYWRvbmx5OiBab2RSZWFkb25seSxcbiAgICBjdXN0b206IGN1c3RvbSxcbiAgICBTY2hlbWE6IFpvZFR5cGUsXG4gICAgWm9kU2NoZW1hOiBab2RUeXBlLFxuICAgIGxhdGU6IGxhdGUsXG4gICAgZ2V0IFpvZEZpcnN0UGFydHlUeXBlS2luZCAoKSB7IHJldHVybiBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7IH0sXG4gICAgY29lcmNlOiBjb2VyY2UsXG4gICAgYW55OiBhbnlUeXBlLFxuICAgIGFycmF5OiBhcnJheVR5cGUsXG4gICAgYmlnaW50OiBiaWdJbnRUeXBlLFxuICAgIGJvb2xlYW46IGJvb2xlYW5UeXBlLFxuICAgIGRhdGU6IGRhdGVUeXBlLFxuICAgIGRpc2NyaW1pbmF0ZWRVbmlvbjogZGlzY3JpbWluYXRlZFVuaW9uVHlwZSxcbiAgICBlZmZlY3Q6IGVmZmVjdHNUeXBlLFxuICAgICdlbnVtJzogZW51bVR5cGUsXG4gICAgJ2Z1bmN0aW9uJzogZnVuY3Rpb25UeXBlLFxuICAgICdpbnN0YW5jZW9mJzogaW5zdGFuY2VPZlR5cGUsXG4gICAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25UeXBlLFxuICAgIGxhenk6IGxhenlUeXBlLFxuICAgIGxpdGVyYWw6IGxpdGVyYWxUeXBlLFxuICAgIG1hcDogbWFwVHlwZSxcbiAgICBuYW46IG5hblR5cGUsXG4gICAgbmF0aXZlRW51bTogbmF0aXZlRW51bVR5cGUsXG4gICAgbmV2ZXI6IG5ldmVyVHlwZSxcbiAgICAnbnVsbCc6IG51bGxUeXBlLFxuICAgIG51bGxhYmxlOiBudWxsYWJsZVR5cGUsXG4gICAgbnVtYmVyOiBudW1iZXJUeXBlLFxuICAgIG9iamVjdDogb2JqZWN0VHlwZSxcbiAgICBvYm9vbGVhbjogb2Jvb2xlYW4sXG4gICAgb251bWJlcjogb251bWJlcixcbiAgICBvcHRpb25hbDogb3B0aW9uYWxUeXBlLFxuICAgIG9zdHJpbmc6IG9zdHJpbmcsXG4gICAgcGlwZWxpbmU6IHBpcGVsaW5lVHlwZSxcbiAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzVHlwZSxcbiAgICBwcm9taXNlOiBwcm9taXNlVHlwZSxcbiAgICByZWNvcmQ6IHJlY29yZFR5cGUsXG4gICAgc2V0OiBzZXRUeXBlLFxuICAgIHN0cmljdE9iamVjdDogc3RyaWN0T2JqZWN0VHlwZSxcbiAgICBzdHJpbmc6IHN0cmluZ1R5cGUsXG4gICAgc3ltYm9sOiBzeW1ib2xUeXBlLFxuICAgIHRyYW5zZm9ybWVyOiBlZmZlY3RzVHlwZSxcbiAgICB0dXBsZTogdHVwbGVUeXBlLFxuICAgICd1bmRlZmluZWQnOiB1bmRlZmluZWRUeXBlLFxuICAgIHVuaW9uOiB1bmlvblR5cGUsXG4gICAgdW5rbm93bjogdW5rbm93blR5cGUsXG4gICAgJ3ZvaWQnOiB2b2lkVHlwZSxcbiAgICBORVZFUjogTkVWRVIsXG4gICAgWm9kSXNzdWVDb2RlOiBab2RJc3N1ZUNvZGUsXG4gICAgcXVvdGVsZXNzSnNvbjogcXVvdGVsZXNzSnNvbixcbiAgICBab2RFcnJvcjogWm9kRXJyb3Jcbn0pO1xuXG5leHBvcnQgeyBCUkFORCwgRElSVFksIEVNUFRZX1BBVEgsIElOVkFMSUQsIE5FVkVSLCBPSywgUGFyc2VTdGF0dXMsIFpvZFR5cGUgYXMgU2NoZW1hLCBab2RBbnksIFpvZEFycmF5LCBab2RCaWdJbnQsIFpvZEJvb2xlYW4sIFpvZEJyYW5kZWQsIFpvZENhdGNoLCBab2REYXRlLCBab2REZWZhdWx0LCBab2REaXNjcmltaW5hdGVkVW5pb24sIFpvZEVmZmVjdHMsIFpvZEVudW0sIFpvZEVycm9yLCBab2RGaXJzdFBhcnR5VHlwZUtpbmQsIFpvZEZ1bmN0aW9uLCBab2RJbnRlcnNlY3Rpb24sIFpvZElzc3VlQ29kZSwgWm9kTGF6eSwgWm9kTGl0ZXJhbCwgWm9kTWFwLCBab2ROYU4sIFpvZE5hdGl2ZUVudW0sIFpvZE5ldmVyLCBab2ROdWxsLCBab2ROdWxsYWJsZSwgWm9kTnVtYmVyLCBab2RPYmplY3QsIFpvZE9wdGlvbmFsLCBab2RQYXJzZWRUeXBlLCBab2RQaXBlbGluZSwgWm9kUHJvbWlzZSwgWm9kUmVhZG9ubHksIFpvZFJlY29yZCwgWm9kVHlwZSBhcyBab2RTY2hlbWEsIFpvZFNldCwgWm9kU3RyaW5nLCBab2RTeW1ib2wsIFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIsIFpvZFR1cGxlLCBab2RUeXBlLCBab2RVbmRlZmluZWQsIFpvZFVuaW9uLCBab2RVbmtub3duLCBab2RWb2lkLCBhZGRJc3N1ZVRvQ29udGV4dCwgYW55VHlwZSBhcyBhbnksIGFycmF5VHlwZSBhcyBhcnJheSwgYmlnSW50VHlwZSBhcyBiaWdpbnQsIGJvb2xlYW5UeXBlIGFzIGJvb2xlYW4sIGNvZXJjZSwgY3VzdG9tLCBkYXRlVHlwZSBhcyBkYXRlLCBkYXRldGltZVJlZ2V4LCB6IGFzIGRlZmF1bHQsIGVycm9yTWFwIGFzIGRlZmF1bHRFcnJvck1hcCwgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSBhcyBkaXNjcmltaW5hdGVkVW5pb24sIGVmZmVjdHNUeXBlIGFzIGVmZmVjdCwgZW51bVR5cGUgYXMgZW51bSwgZnVuY3Rpb25UeXBlIGFzIGZ1bmN0aW9uLCBnZXRFcnJvck1hcCwgZ2V0UGFyc2VkVHlwZSwgaW5zdGFuY2VPZlR5cGUgYXMgaW5zdGFuY2VvZiwgaW50ZXJzZWN0aW9uVHlwZSBhcyBpbnRlcnNlY3Rpb24sIGlzQWJvcnRlZCwgaXNBc3luYywgaXNEaXJ0eSwgaXNWYWxpZCwgbGF0ZSwgbGF6eVR5cGUgYXMgbGF6eSwgbGl0ZXJhbFR5cGUgYXMgbGl0ZXJhbCwgbWFrZUlzc3VlLCBtYXBUeXBlIGFzIG1hcCwgbmFuVHlwZSBhcyBuYW4sIG5hdGl2ZUVudW1UeXBlIGFzIG5hdGl2ZUVudW0sIG5ldmVyVHlwZSBhcyBuZXZlciwgbnVsbFR5cGUgYXMgbnVsbCwgbnVsbGFibGVUeXBlIGFzIG51bGxhYmxlLCBudW1iZXJUeXBlIGFzIG51bWJlciwgb2JqZWN0VHlwZSBhcyBvYmplY3QsIG9iamVjdFV0aWwsIG9ib29sZWFuLCBvbnVtYmVyLCBvcHRpb25hbFR5cGUgYXMgb3B0aW9uYWwsIG9zdHJpbmcsIHBpcGVsaW5lVHlwZSBhcyBwaXBlbGluZSwgcHJlcHJvY2Vzc1R5cGUgYXMgcHJlcHJvY2VzcywgcHJvbWlzZVR5cGUgYXMgcHJvbWlzZSwgcXVvdGVsZXNzSnNvbiwgcmVjb3JkVHlwZSBhcyByZWNvcmQsIHNldFR5cGUgYXMgc2V0LCBzZXRFcnJvck1hcCwgc3RyaWN0T2JqZWN0VHlwZSBhcyBzdHJpY3RPYmplY3QsIHN0cmluZ1R5cGUgYXMgc3RyaW5nLCBzeW1ib2xUeXBlIGFzIHN5bWJvbCwgZWZmZWN0c1R5cGUgYXMgdHJhbnNmb3JtZXIsIHR1cGxlVHlwZSBhcyB0dXBsZSwgdW5kZWZpbmVkVHlwZSBhcyB1bmRlZmluZWQsIHVuaW9uVHlwZSBhcyB1bmlvbiwgdW5rbm93blR5cGUgYXMgdW5rbm93biwgdXRpbCwgdm9pZFR5cGUgYXMgdm9pZCwgeiB9O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);