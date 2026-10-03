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
})({"4pFQo":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\mrina\\Documents\\SFU\\Fall'26\\Hackathons\\Stormhacks\\ContexTabs\\apps\\extension\\.plasmo\\static\\background\\index.ts",
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
chrome.runtime.onMessage.addListener((message, _sender, sendResponse)=>{
    (async ()=>{
        switch(message?.type){
            case "LIST_TABS":
                return await chrome.tabs.query({
                    currentWindow: true
                });
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
    missingInformation: (0, _zod.z).array((0, _zod.z).string())
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
        status: (0, _zod.z).literal("complete"),
        filter: FilterResponseSchema,
        answer: (0, _zod.z).string(),
        sources: (0, _zod.z).array((0, _zod.z).object({
            id: (0, _zod.z).string(),
            title: (0, _zod.z).string().optional(),
            url: (0, _zod.z).string().url().optional(),
            tabId: (0, _zod.z).number().optional()
        })),
        verification: VerificationResultSchema,
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

},{"zod":"hP52C","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"hP52C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "z", ()=>_externalJs);
var _externalJs = require("./v3/external.js");
parcelHelpers.exportAll(_externalJs, exports);
exports.default = _externalJs;

},{"./v3/external.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["4pFQo","2w7px"], "2w7px", "parcelRequired36b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDekksY0FBYztRQUEwQixtQkFBbUIsQ0FBQSxHQUFBLE1BQUEsRUFBRSxNQUFNLENBQUEsR0FBQSxNQUFBLEVBQUUsVUFBVSxJQUFJLEdBQUc7SUFDeEY7Q0FDRDtBQUdNLE1BQU0sd0JBQXdCLENBQUEsR0FBQSxNQUFBLEVBQUUsT0FBTztJQUM1QyxJQUFJLENBQUEsR0FBQSxNQUFBLEVBQUU7SUFBVSxPQUFPLENBQUEsR0FBQSxNQUFBLEVBQUU7SUFBVSxNQUFNLENBQUEsR0FBQSxNQUFBLEVBQUU7SUFBVSxXQUFXLENBQUEsR0FBQSxNQUFBLEVBQUU7SUFBVSxXQUFXLENBQUEsR0FBQSxNQUFBLEVBQUU7SUFDekYsU0FBUyxDQUFBLEdBQUEsTUFBQSxFQUFFLE1BQU0sQ0FBQSxHQUFBLE1BQUEsRUFBRSxPQUFPO1FBQUUsT0FBTyxDQUFBLEdBQUEsTUFBQSxFQUFFLFNBQVM7UUFBWSxLQUFLLENBQUEsR0FBQSxNQUFBLEVBQUUsU0FBUztRQUFPLE9BQU8sQ0FBQSxHQUFBLE1BQUEsRUFBRSxTQUFTO1FBQVksU0FBUyxDQUFBLEdBQUEsTUFBQSxFQUFFLFNBQVM7SUFBVztJQUM5SSxVQUFVLENBQUEsR0FBQSxNQUFBLEVBQUUsTUFBTSxDQUFBLEdBQUEsTUFBQSxFQUFFO0lBQVcsZ0JBQWdCLENBQUEsR0FBQSxNQUFBLEVBQUUsTUFBTSxDQUFBLEdBQUEsTUFBQSxFQUFFO0lBQVcsVUFBVSxDQUFBLEdBQUEsTUFBQSxFQUFFLE1BQU0sQ0FBQSxHQUFBLE1BQUEsRUFBRTtJQUFXLFdBQVcsQ0FBQSxHQUFBLE1BQUEsRUFBRSxNQUFNLENBQUEsR0FBQSxNQUFBLEVBQUU7QUFDMUg7Ozs7O0FDekRBLHVDQUFTO0FBRlQ7QUFDQSx3QkFBQTtrQkFFZSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZTFlNDg4NWFlM2MzODU3ZS5qcyIsImFwcHMvZXh0ZW5zaW9uLy5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJhcHBzL2V4dGVuc2lvbi9iYWNrZ3JvdW5kLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2lkYkA4LjAuMy9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwicGFja2FnZXMvY29udHJhY3RzL3NyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS96b2RAMy4yNS43Ni9ub2RlX21vZHVsZXMvem9kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxtcmluYVxcXFxEb2N1bWVudHNcXFxcU0ZVXFxcXEZhbGwnMjZcXFxcSGFja2F0aG9uc1xcXFxTdG9ybWhhY2tzXFxcXENvbnRleFRhYnNcXFxcYXBwc1xcXFxleHRlbnNpb25cXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImQ3YjliMmY4MWY4MThmMGJcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJleHBvcnQge307XHJcblxyXG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tIFwiaWRiXCI7XHJcbmltcG9ydCB7IFJlc2VhcmNoU2Vzc2lvblNjaGVtYSB9IGZyb20gXCJAYW1iaWVudC9jb250cmFjdHNcIjtcclxuXHJcbmNvbnN0IGRiUHJvbWlzZSA9IG9wZW5EQihcImFtYmllbnQtY29udGV4dFwiLCAxLCB7XHJcbiAgdXBncmFkZShkYikgeyBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJzZXNzaW9uc1wiKSkgZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJzZXNzaW9uc1wiLCB7IGtleVBhdGg6IFwiaWRcIiB9KTsgfVxyXG59KTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcIm9uYm9hcmRpbmctc2VlblwiKTtcclxuICBpZiAoIWV4aXN0aW5nW1wib25ib2FyZGluZy1zZWVuXCJdKSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcIm9uYm9hcmRpbmctc2VlblwiOiB0cnVlIH0pO1xyXG59KTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgdm9pZCAoYXN5bmMgKCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlPy50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJMSVNUX1RBQlNcIjpcclxuICAgICAgICByZXR1cm4gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xyXG4gICAgICBjYXNlIFwiTElTVF9TRVNTSU9OU1wiOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5nZXRBbGwoXCJzZXNzaW9uc1wiKTtcclxuICAgICAgY2FzZSBcIkdFVF9TRVNTSU9OXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IChhd2FpdCBkYlByb21pc2UpLmdldChcInNlc3Npb25zXCIsIFN0cmluZyhtZXNzYWdlLmlkKSk7XHJcbiAgICAgIGNhc2UgXCJTQVZFX1NFU1NJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBSZXNlYXJjaFNlc3Npb25TY2hlbWEucGFyc2UobWVzc2FnZS5zZXNzaW9uKTtcclxuICAgICAgICBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5wdXQoXCJzZXNzaW9uc1wiLCBzZXNzaW9uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR1JPVVBfVEFCU1wiOiB7XHJcbiAgICAgICAgY29uc3QgdGFiSWRzID0gQXJyYXkuaXNBcnJheShtZXNzYWdlLnRhYklkcykgPyBtZXNzYWdlLnRhYklkcy5maWx0ZXIoKGlkOiB1bmtub3duKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKGlkKSkgOiBbXTtcclxuICAgICAgICBpZiAoIXRhYklkcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIk5vIHRhYiBJRHMgd2VyZSBzdXBwbGllZFwiKTtcclxuICAgICAgICBjb25zdCBncm91cElkID0gYXdhaXQgY2hyb21lLnRhYnMuZ3JvdXAoeyB0YWJJZHMgfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUoZ3JvdXBJZCwgeyB0aXRsZTogU3RyaW5nKG1lc3NhZ2UudGl0bGUgPz8gXCJSZXNlYXJjaCBzZXNzaW9uXCIpLnNsaWNlKDAsIDgwKSwgY29sb3I6IFwicHVycGxlXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwSWQ7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pKCkudGhlbihzZW5kUmVzcG9uc2UpLmNhdGNoKChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJFeHRlbnNpb24gcmVxdWVzdCBmYWlsZWRcIiB9KSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0aGlzLnJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuY29uc3QgYWR2YW5jZU1ldGhvZFByb3BzID0gWydjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknLCAnYWR2YW5jZSddO1xuY29uc3QgbWV0aG9kTWFwID0ge307XG5jb25zdCBhZHZhbmNlUmVzdWx0cyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjdXJzb3JJdGVyYXRvclRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKCFhZHZhbmNlTWV0aG9kUHJvcHMuaW5jbHVkZXMocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBsZXQgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wXTtcbiAgICAgICAgaWYgKCFjYWNoZWRGdW5jKSB7XG4gICAgICAgICAgICBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3BdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBhZHZhbmNlUmVzdWx0cy5zZXQodGhpcywgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuZ2V0KHRoaXMpW3Byb3BdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlZEZ1bmM7XG4gICAgfSxcbn07XG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZSguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIGxldCBjdXJzb3IgPSB0aGlzO1xuICAgIGlmICghKGN1cnNvciBpbnN0YW5jZW9mIElEQkN1cnNvcikpIHtcbiAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLm9wZW5DdXJzb3IoLi4uYXJncyk7XG4gICAgfVxuICAgIGlmICghY3Vyc29yKVxuICAgICAgICByZXR1cm47XG4gICAgY3Vyc29yID0gY3Vyc29yO1xuICAgIGNvbnN0IHByb3hpZWRDdXJzb3IgPSBuZXcgUHJveHkoY3Vyc29yLCBjdXJzb3JJdGVyYXRvclRyYXBzKTtcbiAgICBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5zZXQocHJveGllZEN1cnNvciwgY3Vyc29yKTtcbiAgICAvLyBNYXAgdGhpcyBkb3VibGUtcHJveHkgYmFjayB0byB0aGUgb3JpZ2luYWwsIHNvIG90aGVyIGN1cnNvciBtZXRob2RzIHdvcmsuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm94aWVkQ3Vyc29yLCB1bndyYXAoY3Vyc29yKSk7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICB5aWVsZCBwcm94aWVkQ3Vyc29yO1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGFkdmFuY2luZyBtZXRob2RzIHdhcyBub3QgY2FsbGVkLCBjYWxsIGNvbnRpbnVlKCkuXG4gICAgICAgIGN1cnNvciA9IGF3YWl0IChhZHZhbmNlUmVzdWx0cy5nZXQocHJveGllZEN1cnNvcikgfHwgY3Vyc29yLmNvbnRpbnVlKCkpO1xuICAgICAgICBhZHZhbmNlUmVzdWx0cy5kZWxldGUocHJveGllZEN1cnNvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuICgocHJvcCA9PT0gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiZcbiAgICAgICAgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmUsIElEQkN1cnNvcl0pKSB8fFxuICAgICAgICAocHJvcCA9PT0gJ2l0ZXJhdGUnICYmIGluc3RhbmNlT2ZBbnkodGFyZ2V0LCBbSURCSW5kZXgsIElEQk9iamVjdFN0b3JlXSkpKTtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0ZTtcbiAgICAgICAgcmV0dXJuIG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiwgdW53cmFwLCB3cmFwIH07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbW9yeUl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIGtpbmQ6IHouZW51bShbXCJwcmVmZXJlbmNlXCIsIFwiZmFjdFwiXSksIHRleHQ6IHouc3RyaW5nKCkubWF4KDUwMCksXHJcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLCBjcmVhdGVkQXQ6IHouc3RyaW5nKCksIGxhc3RVc2VkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBzb3VyY2VSZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHN0YXR1czogei5lbnVtKFtcInByb3Bvc2VkXCIsIFwiYXBwcm92ZWRcIiwgXCJkaXNtaXNzZWRcIl0pXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBNZW1vcnlJdGVtID0gei5pbmZlcjx0eXBlb2YgTWVtb3J5SXRlbVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFNvdXJjZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwga2luZDogei5lbnVtKFtcInNlbGVjdGlvblwiLCBcImZpZWxkXCIsIFwicGFnZVwiLCBcInRhYlwiLCBcIm1lbW9yeVwiLCBcImNsYXJpZmljYXRpb25cIiwgXCJzZXNzaW9uXCJdKSxcclxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSwgdGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHRhYkdyb3VwSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgdGFiSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgY2FwdHVyZWRBdDogei5zdHJpbmcoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UGF5bG9hZFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpLCBxdWVyeTogei5zdHJpbmcoKS5taW4oMSkubWF4KDhfMDAwKSxcclxuICBmaWVsZFRleHQ6IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLCBzZWxlY3Rpb246IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoQ29udGV4dFNvdXJjZVNjaGVtYSkubWF4KDI1KSwgcHJlZmVyZW5jZXM6IHouYXJyYXkoTWVtb3J5SXRlbVNjaGVtYSkubWF4KDIwKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgQ29udGV4dFBheWxvYWQgPSB6LmluZmVyPHR5cGVvZiBDb250ZXh0UGF5bG9hZFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBpbnRlbnQ6IHouc3RyaW5nKCksIG9wdGltaXplZFByb21wdDogei5zdHJpbmcoKSwgc2VsZWN0ZWRTb3VyY2VJZHM6IHouYXJyYXkoei5zdHJpbmcoKSksXHJcbiAgZmlsdGVyZWRDb250ZXh0OiB6LnN0cmluZygpLCBjb25mbGljdHM6IHouYXJyYXkoei5vYmplY3QoeyBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSwgc291cmNlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpIH0pKSxcclxuICBpc0FtYmlndW91czogei5ib29sZWFuKCksIGNsYXJpZnlpbmdRdWVzdGlvbjogei5zdHJpbmcoKS5udWxsYWJsZSgpLCBtaXNzaW5nSW5mb3JtYXRpb246IHouYXJyYXkoei5zdHJpbmcoKSlcclxufSk7XHJcbmV4cG9ydCB0eXBlIEZpbHRlclJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgRmlsdGVyUmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4ZWN1dGlvblJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBvcHRpbWl6ZWRQcm9tcHQ6IHouc3RyaW5nKCkubWluKDEpLm1heCg4XzAwMCksIGZpbHRlcmVkQ29udGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKSxcclxuICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpIH0pKSxcclxuICBwcmVmZXJlbmNlczogei5hcnJheShNZW1vcnlJdGVtU2NoZW1hKSwgY2xhcmlmaWNhdGlvbkFuc3dlcjogei5zdHJpbmcoKS5tYXgoNF8wMDApLm9wdGlvbmFsKCksXHJcbiAgY29ycmVjdGlvbkZlZWRiYWNrOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgRXhlY3V0aW9uUmVxdWVzdCA9IHouaW5mZXI8dHlwZW9mIEV4ZWN1dGlvblJlcXVlc3RTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmaWNhdGlvblJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHBhc3NlZDogei5ib29sZWFuKCksIHNjb3JlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSksXHJcbiAgaXNzdWVzOiB6LmFycmF5KHoub2JqZWN0KHsga2luZDogei5lbnVtKFtcImludGVudF9nYXBcIiwgXCJ1bnN1cHBvcnRlZF9jbGFpbVwiLCBcImZvcm1hdFwiLCBcImluY29tcGxldGVcIl0pLCBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSB9KSksXHJcbiAgY29ycmVjdGlvblByb21wdDogei5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBWZXJpZmljYXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBWZXJpZmljYXRpb25SZXN1bHRTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7IGNvbnRleHQ6IENvbnRleHRQYXlsb2FkU2NoZW1hLCBjbGFyaWZpY2F0aW9uQW5zd2VyOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKSB9KTtcclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlc3BvbnNlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oXCJzdGF0dXNcIiwgW1xyXG4gIHoub2JqZWN0KHsgc3RhdHVzOiB6LmxpdGVyYWwoXCJjbGFyaWZpY2F0aW9uX3JlcXVpcmVkXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hIH0pLFxyXG4gIHoub2JqZWN0KHtcclxuICAgIHN0YXR1czogei5saXRlcmFsKFwiY29tcGxldGVcIiksIGZpbHRlcjogRmlsdGVyUmVzcG9uc2VTY2hlbWEsIGFuc3dlcjogei5zdHJpbmcoKSxcclxuICAgIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCksIHRhYklkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCkgfSkpLFxyXG4gICAgdmVyaWZpY2F0aW9uOiBWZXJpZmljYXRpb25SZXN1bHRTY2hlbWEsIG1lbW9yeVN1Z2dlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLm1heCgyKS5vcHRpb25hbCgpXHJcbiAgfSlcclxuXSk7XHJcbmV4cG9ydCB0eXBlIEFzc2lzdFJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgQXNzaXN0UmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2VhcmNoU2Vzc2lvblNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCksIGdvYWw6IHouc3RyaW5nKCksIGNyZWF0ZWRBdDogei5zdHJpbmcoKSwgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCksIHRhYklkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksIGZpbmRpbmc6IHouc3RyaW5nKCkub3B0aW9uYWwoKSB9KSksXHJcbiAgZmluZGluZ3M6IHouYXJyYXkoei5zdHJpbmcoKSksIGNvbnRyYWRpY3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLCB1bmtub3duczogei5hcnJheSh6LnN0cmluZygpKSwgbmV4dFN0ZXBzOiB6LmFycmF5KHouc3RyaW5nKCkpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBSZXNlYXJjaFNlc3Npb24gPSB6LmluZmVyPHR5cGVvZiBSZXNlYXJjaFNlc3Npb25TY2hlbWE+O1xyXG4iLCJpbXBvcnQgKiBhcyB6IGZyb20gXCIuL3YzL2V4dGVybmFsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi92My9leHRlcm5hbC5qc1wiO1xuZXhwb3J0IHsgeiB9O1xuZXhwb3J0IGRlZmF1bHQgejtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);