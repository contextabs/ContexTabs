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
const STOP = new Set([
    "the",
    "and",
    "for",
    "with",
    "from",
    "this",
    "that",
    "best",
    "review",
    "guide",
    "how",
    "what",
    "new",
    "your",
    "official",
    "www",
    "com"
]);
const tokens = (value)=>[
        ...new Set((value.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []).filter((word)=>!STOP.has(word)))
    ];
const classificationKey = (tab)=>{
    try {
        const url = new URL(tab.url);
        url.hash = "";
        url.search = "";
        return `${url.toString().replace(/\/$/, "")}|${tab.title.toLowerCase().replace(/\s+/g, " ").trim()}`;
    } catch  {
        return `${tab.url}|${tab.title.toLowerCase().replace(/\s+/g, " ").trim()}`;
    }
};
function tabCategory(domain, title) {
    const text = `${domain} ${title}`.toLowerCase();
    if (/hotel|booking|expedia|airbnb|flight|airline|travel/.test(text)) return "travel";
    if (/amazon|bestbuy|walmart|shop|price|headphone|airpods|product/.test(text)) return "shopping";
    if (/arxiv|scholar|paper|journal|doi|distributed systems|lecture|course/.test(text)) return "study";
    if (/gmail|outlook|mail|calendar/.test(text)) return "work";
    return "research";
}
async function getClusters() {
    const { "semantic-clusters": items = [] } = await chrome.storage.local.get("semantic-clusters");
    return items.map((item)=>(0, _contracts.SemanticTabClusterSchema).parse(item));
}
async function saveClusters(items) {
    await chrome.storage.local.set({
        "semantic-clusters": items
    });
}
let clusterTimer;
let classificationTimer;
const API_URL = undefined ?? "http://127.0.0.1:8787";
function scheduleClustering() {
    if (clusterTimer) clearTimeout(clusterTimer);
    clusterTimer = setTimeout(()=>void rebuildClusters(), 700);
}
async function rebuildClusters(windowId) {
    const tabs = await chrome.tabs.query(windowId === undefined ? {} : {
        windowId
    });
    const now = Date.now();
    const { "tab-metadata": priorMetadata = [] } = await chrome.storage.local.get("tab-metadata");
    const metadata = tabs.filter((tab)=>tab.id !== undefined && tab.windowId !== undefined && tab.url && /^https?:\/\//.test(tab.url)).map((tab)=>{
        const domain = (()=>{
            try {
                return new URL(tab.url).hostname.replace(/^www\./, "");
            } catch  {
                return "";
            }
        })();
        const previous = priorMetadata.find((item)=>item.tabId === tab.id && item.url === tab.url);
        return {
            tabId: tab.id,
            windowId: tab.windowId,
            url: tab.url,
            title: tab.title ?? domain,
            domain,
            groupId: tab.groupId >= 0 ? tab.groupId : undefined,
            createdAt: previous?.createdAt ?? now,
            updatedAt: now,
            lastActiveAt: tab.active ? now : previous?.lastActiveAt ?? tab.lastAccessed ?? now
        };
    });
    await chrome.storage.local.set({
        "tab-metadata": metadata.slice(-500)
    });
    const { "tab-classification-cache": classificationCache = {} } = await chrome.storage.local.get("tab-classification-cache");
    const old = await getClusters();
    const clusters = old.filter((cluster)=>windowId !== undefined && cluster.windowId !== windowId);
    const byWindow = new Map();
    for (const tab of metadata){
        const list = byWindow.get(tab.windowId) ?? [];
        list.push(tab);
        byWindow.set(tab.windowId, list);
    }
    for (const [currentWindowId, windowTabs] of byWindow){
        const usedClusterIds = new Set();
        const topicGroups = [];
        for (const tab of windowTabs){
            const cached = classificationCache[classificationKey(tab)];
            const tabTokens = new Set(tokens(`${tab.title} ${tab.domain} ${cached?.topic ?? ""}`));
            const candidates = topicGroups.map((group)=>{
                const otherTokens = new Set(group.flatMap((member)=>tokens(`${member.title} ${member.domain} ${classificationCache[classificationKey(member)]?.topic ?? ""}`)));
                const overlap = [
                    ...tabTokens
                ].filter((word)=>otherTokens.has(word));
                const sameChromeGroup = tab.groupId !== undefined && group.some((member)=>member.groupId === tab.groupId);
                const cachedTopic = cached?.topic.trim().toLowerCase();
                const sameCachedTopic = Boolean(cachedTopic && group.some((member)=>classificationCache[classificationKey(member)]?.topic.trim().toLowerCase() === cachedTopic));
                const categoryMatch = group.some((member)=>(classificationCache[classificationKey(member)]?.category ?? tabCategory(member.domain, member.title)) === (cached?.category ?? tabCategory(tab.domain, tab.title)));
                return {
                    group,
                    score: (sameChromeGroup ? 8 : 0) + (sameCachedTopic ? 5 : 0) + overlap.reduce((sum, word)=>sum + (word.length >= 5 ? 2 : 1), 0) + (categoryMatch ? 0.5 : 0)
                };
            }).sort((a, b)=>b.score - a.score);
            const best = candidates[0];
            if (best && best.score >= 2) best.group.push(tab);
            else topicGroups.push([
                tab
            ]);
        }
        for (const members of topicGroups){
            if (members.length < 2) continue;
            const words = members.flatMap((tab)=>tokens(`${tab.title} ${tab.domain} ${classificationCache[classificationKey(tab)]?.topic ?? ""}`));
            const counts = new Map();
            words.forEach((word)=>counts.set(word, (counts.get(word) ?? 0) + 1));
            const common = [
                ...counts
            ].filter(([, count])=>count >= Math.max(2, Math.ceil(members.length * 0.4))).sort((a, b)=>b[1] - a[1]).map(([word])=>word).slice(0, 8);
            const category = classificationCache[`${members[0].url}|${members[0].title}`]?.category ?? tabCategory(members[0].domain, members.map((tab)=>tab.title).join(" "));
            const cachedName = members.map((tab)=>classificationCache[classificationKey(tab)]?.topic).find(Boolean);
            const name = cachedName || common.slice(0, 3).map((word)=>word[0].toUpperCase() + word.slice(1)).join(" ") || `${category[0].toUpperCase()}${category.slice(1)} research`;
            const prior = old.filter((cluster)=>cluster.windowId === currentWindowId && !usedClusterIds.has(cluster.id)).map((cluster)=>({
                    cluster,
                    overlap: cluster.tabIds.filter((id)=>members.some((tab)=>tab.tabId === id)).length
                })).sort((a, b)=>b.overlap - a.overlap)[0];
            const id = prior && prior.overlap ? prior.cluster.id : `cluster-${currentWindowId}-${crypto.randomUUID()}`;
            usedClusterIds.add(id);
            const confidence = Math.min(0.98, 0.45 + members.length * 0.08 + (members.every((tab)=>tab.groupId !== undefined) ? 0.15 : 0) + Math.min(common.length, 4) * 0.04);
            const status = prior?.cluster.status === "confirmed" ? "confirmed" : members.length >= 2 ? "suggested" : "tentative";
            const updated = {
                id,
                windowId: currentWindowId,
                name: prior?.cluster.name ?? name,
                category,
                tabIds: members.map((tab)=>tab.tabId),
                members: members.map((tab)=>({
                        tabId: tab.tabId,
                        title: tab.title.slice(0, 300),
                        url: tab.url
                    })),
                confidence,
                tokens: common,
                summary: `${members.length} related tabs: ${members.map((tab)=>tab.title).slice(0, 4).join(" \xb7 ")}`.slice(0, 1000),
                lastActiveAt: new Date(Math.max(...members.map((tab)=>tab.lastActiveAt))).toISOString(),
                status,
                dismissedUntil: prior?.cluster.dismissedUntil,
                chromeGroupId: members.every((tab)=>tab.groupId === members[0].groupId) ? members[0].groupId : undefined
            };
            clusters.push(updated);
            if (members.length >= 2 && status !== "confirmed" && (!prior?.cluster.dismissedUntil || Date.parse(prior.cluster.dismissedUntil) < now)) {
                const [suppress, disabled] = await Promise.all([
                    chrome.storage.local.get("suggested-cluster"),
                    chrome.storage.local.get("disabled-suggestion-category")
                ]);
                if (!suppress["suggested-cluster"] && disabled["disabled-suggestion-category"] !== category) await chrome.storage.local.set({
                    "suggested-cluster": id
                });
            }
        }
    }
    await saveClusters(clusters.slice(-100));
    const uncertain = metadata.filter((tab)=>tab.title && !clusters.some((cluster)=>cluster.windowId === tab.windowId && cluster.tabIds.includes(tab.tabId)));
    if (uncertain.length >= 3) scheduleClassification(uncertain.slice(0, 20), clusters.filter((cluster)=>windowId === undefined || cluster.windowId === windowId));
}
function scheduleClassification(tabs, clusters) {
    if (classificationTimer) clearTimeout(classificationTimer);
    classificationTimer = setTimeout(()=>void classifyMetadataBatch(tabs, clusters), 8000);
}
async function classifyMetadataBatch(tabs, clusters) {
    const { "tab-classification-cache": cache = {} } = await chrome.storage.local.get("tab-classification-cache");
    const uncached = tabs.filter((tab)=>!cache[classificationKey(tab)]);
    if (!uncached.length) return;
    try {
        const response = await fetch(`${API_URL}/api/classify-tabs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tabs: uncached.map(({ tabId, title, url, domain })=>({
                        tabId,
                        title: title.slice(0, 300),
                        url,
                        domain
                    })),
                clusters: clusters.slice(0, 20).map(({ id, name, category, summary })=>({
                        id,
                        name,
                        category,
                        summary: summary.slice(0, 500)
                    }))
            })
        });
        if (!response.ok) return;
        const result = await response.json();
        for (const assignment of result.assignments ?? []){
            const tab = uncached.find((item)=>item.tabId === assignment.tabId);
            if (tab) cache[classificationKey(tab)] = {
                topic: assignment.topic,
                category: assignment.category,
                confidence: assignment.confidence
            };
        }
        await chrome.storage.local.set({
            "tab-classification-cache": cache
        });
        await rebuildClusters();
    } catch  {}
}
chrome.tabs.onCreated.addListener((tab)=>{
    if (tab.id !== undefined && tab.windowId !== undefined) {
        chrome.storage.local.get("tab-metadata").then(({ "tab-metadata": items = [] })=>chrome.storage.local.set({
                "tab-metadata": [
                    ...items.filter((item)=>item.tabId !== tab.id),
                    {
                        tabId: tab.id,
                        windowId: tab.windowId,
                        url: tab.url ?? "",
                        title: tab.title ?? "",
                        domain: "",
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        lastActiveAt: Date.now()
                    }
                ].slice(-500)
            }));
        scheduleClustering();
    }
});
chrome.tabs.onUpdated.addListener((tabId, change, tab)=>{
    if (change.status === "complete" || change.title || change.url) {
        chrome.storage.local.get("tab-metadata").then(({ "tab-metadata": items = [] })=>{
            const domain = (()=>{
                try {
                    return new URL(tab.url ?? "").hostname.replace(/^www\./, "");
                } catch  {
                    return "";
                }
            })();
            const item = items.find((entry)=>entry.tabId === tabId);
            const next = {
                tabId,
                windowId: tab.windowId ?? item?.windowId ?? -1,
                url: tab.url ?? item?.url ?? "",
                title: tab.title ?? item?.title ?? "",
                domain,
                groupId: tab.groupId >= 0 ? tab.groupId : undefined,
                createdAt: item?.createdAt ?? Date.now(),
                updatedAt: Date.now(),
                lastActiveAt: item?.lastActiveAt ?? Date.now()
            };
            return chrome.storage.local.set({
                "tab-metadata": [
                    ...items.filter((entry)=>entry.tabId !== tabId),
                    next
                ].slice(-500)
            });
        });
        scheduleClustering();
    }
});
chrome.tabs.onActivated.addListener(async ({ tabId })=>{
    await chrome.storage.local.set({
        "last-active-tab-id": tabId
    });
    const { "tab-metadata": items = [] } = await chrome.storage.local.get("tab-metadata");
    await chrome.storage.local.set({
        "tab-metadata": items.map((item)=>item.tabId === tabId ? {
                ...item,
                lastActiveAt: Date.now()
            } : item)
    });
    scheduleClustering();
});
chrome.tabs.onRemoved.addListener(async (tabId)=>{
    const clusters = await getClusters();
    await saveClusters(clusters.map((cluster)=>({
            ...cluster,
            tabIds: cluster.tabIds.filter((id)=>id !== tabId)
        })).filter((cluster)=>cluster.tabIds.length >= 2));
    const { "tab-metadata": items = [] } = await chrome.storage.local.get("tab-metadata");
    await chrome.storage.local.set({
        "tab-metadata": items.filter((item)=>item.tabId !== tabId)
    });
    scheduleClustering();
});
chrome.windows.onRemoved.addListener(async (windowId)=>{
    const clusters = await getClusters();
    await saveClusters(clusters.filter((cluster)=>cluster.windowId !== windowId));
    const { "tab-metadata": items = [] } = await chrome.storage.local.get("tab-metadata");
    await chrome.storage.local.set({
        "tab-metadata": items.filter((item)=>item.windowId !== windowId)
    });
});
chrome.tabGroups?.onUpdated.addListener(scheduleClustering);
chrome.tabGroups?.onCreated.addListener(scheduleClustering);
chrome.tabGroups?.onRemoved.addListener(scheduleClustering);
chrome.runtime.onStartup.addListener(scheduleClustering);
chrome.runtime.onInstalled.addListener(scheduleClustering);
rebuildClusters();
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
            case "OPEN_AMBIENT_POPUP":
                if (chrome.action?.openPopup) return await chrome.action.openPopup();
                return false;
            case "GET_CLUSTER_SUGGESTION":
                {
                    const { "suggested-cluster": id } = await chrome.storage.local.get("suggested-cluster");
                    const cluster = id ? (await getClusters()).find((item)=>item.id === id) : undefined;
                    return cluster && (!cluster.dismissedUntil || Date.parse(cluster.dismissedUntil) < Date.now()) ? cluster : undefined;
                }
            case "LIST_CLUSTERS":
                {
                    const windowId = Number(message.windowId);
                    return (await getClusters()).filter((cluster)=>cluster.windowId === windowId);
                }
            case "ORGANIZE_WINDOW":
                {
                    const windowId = Number(message.windowId);
                    await rebuildClusters(windowId);
                    let clusters = (await getClusters()).filter((cluster)=>cluster.windowId === windowId);
                    const tabs = await chrome.tabs.query({
                        windowId
                    });
                    const known = new Set(clusters.flatMap((cluster)=>cluster.tabIds));
                    const uncached = tabs.filter((tab)=>tab.id !== undefined && tab.url && /^https?:\/\//.test(tab.url) && !known.has(tab.id));
                    if (uncached.length >= 1) {
                        const metadata = uncached.map((tab)=>{
                            const url = tab.url;
                            const domain = new URL(url).hostname;
                            return {
                                tabId: tab.id,
                                title: tab.title ?? domain,
                                url,
                                domain
                            };
                        });
                        await classifyMetadataBatch(metadata, clusters);
                        await rebuildClusters(windowId);
                        clusters = (await getClusters()).filter((cluster)=>cluster.windowId === windowId);
                    }
                    const response = (0, _contracts.OrganizeWindowResponseSchema).parse({
                        windowId,
                        clusters
                    });
                    await chrome.storage.local.set({
                        "organize-preview": response
                    });
                    return response;
                }
            case "GET_RELEVANT_CLUSTERS":
                {
                    const query = tokens(String(message.query ?? "")).concat(tokens(String(message.conversationText ?? "")));
                    return (await getClusters()).map((cluster)=>({
                            cluster,
                            score: cluster.tokens.reduce((sum, word)=>sum + (query.includes(word) ? 2 : 0), 0) + cluster.confidence + (cluster.status === "confirmed" ? 3 : 0)
                        })).filter((item)=>item.score > 0).sort((a, b)=>b.score - a.score).slice(0, 2).map((item)=>item.cluster);
                }
            case "CLUSTER_ACTION":
                {
                    const clusters = await getClusters();
                    const cluster = clusters.find((item)=>item.id === String(message.id));
                    if (!cluster) throw new Error("Cluster no longer exists");
                    if (message.action === "accept") {
                        if (!message.permissionGranted || !await chrome.permissions.contains({
                            permissions: [
                                "tabGroups"
                            ]
                        })) throw new Error("Tab group permission was not granted");
                        await chrome.storage.local.set({
                            "tab-group-permission": true
                        });
                        const openTabs = await chrome.tabs.query({
                            windowId: cluster.windowId
                        });
                        const ids = cluster.tabIds.filter((id)=>openTabs.some((tab)=>tab.id === id));
                        if (ids.length < 2) throw new Error("Not enough open tabs remain to group");
                        const existingGroupId = cluster.chromeGroupId === undefined ? undefined : (await chrome.tabGroups.query({})).some((group)=>group.id === cluster.chromeGroupId) ? cluster.chromeGroupId : undefined;
                        const groupId = await chrome.tabs.group({
                            tabIds: ids,
                            ...existingGroupId === undefined ? {} : {
                                groupId: existingGroupId
                            }
                        });
                        await chrome.tabGroups.update(groupId, {
                            title: cluster.name.slice(0, 80),
                            color: cluster.category === "travel" ? "blue" : cluster.category === "shopping" ? "orange" : "purple"
                        });
                        cluster.status = "confirmed";
                        cluster.chromeGroupId = groupId;
                    } else if (message.action === "internal") cluster.status = "confirmed";
                    else if (message.action === "dismiss") cluster.dismissedUntil = new Date(Date.now() + 86400000).toISOString();
                    else if (message.action === "never") {
                        await chrome.storage.local.set({
                            "disabled-suggestion-category": cluster.category
                        });
                        cluster.dismissedUntil = new Date(Date.now() + 31536000000).toISOString();
                    } else if (message.action === "rename") cluster.name = String(message.name ?? cluster.name).slice(0, 80);
                    else if (message.action === "create-session") {
                        const openTabs = await chrome.tabs.query({
                            windowId: cluster.windowId
                        });
                        const db = await dbPromise;
                        const now = new Date().toISOString();
                        const session = (0, _contracts.ResearchSessionSchema).parse({
                            id: `research-${cluster.id}`,
                            title: cluster.name,
                            goal: `Research ${cluster.name}`,
                            createdAt: now,
                            updatedAt: now,
                            clusterId: cluster.id,
                            summary: cluster.summary,
                            entities: cluster.tokens,
                            constraints: [],
                            confirmed: true,
                            sources: openTabs.filter((tab)=>cluster.tabIds.includes(tab.id)).map((tab)=>({
                                    title: tab.title,
                                    url: tab.url,
                                    tabId: tab.id
                                })),
                            findings: [],
                            contradictions: [],
                            unknowns: [],
                            nextSteps: []
                        });
                        await db.put("sessions", session);
                    }
                    await saveClusters(clusters);
                    await chrome.storage.local.remove("suggested-cluster");
                    scheduleClustering();
                    return true;
                }
            case "GET_CONVERSATION_SUMMARY":
                return (await chrome.storage.local.get(String(message.key)))[String(message.key)];
            case "SAVE_CONVERSATION_SUMMARY":
                await chrome.storage.local.set({
                    [String(message.key)]: message.summary
                });
                return true;
            case "CLEAR_CONTEXT_DATA":
                if (clusterTimer) clearTimeout(clusterTimer);
                if (classificationTimer) clearTimeout(classificationTimer);
                await chrome.storage.local.remove([
                    "semantic-clusters",
                    "suggested-cluster",
                    "tab-metadata",
                    "tab-classification-cache",
                    "organize-preview"
                ]);
                for (const key of (await chrome.storage.local.get(null).then((data)=>Object.keys(data).filter((item)=>item.startsWith("conversation:")))))await chrome.storage.local.remove(key);
                return true;
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
parcelHelpers.export(exports, "ConversationMessageSchema", ()=>ConversationMessageSchema);
parcelHelpers.export(exports, "ConversationSummarySchema", ()=>ConversationSummarySchema);
parcelHelpers.export(exports, "SemanticTabClusterSchema", ()=>SemanticTabClusterSchema);
parcelHelpers.export(exports, "TabClassificationRequestSchema", ()=>TabClassificationRequestSchema);
parcelHelpers.export(exports, "TabClassificationResponseSchema", ()=>TabClassificationResponseSchema);
parcelHelpers.export(exports, "OrganizeWindowResponseSchema", ()=>OrganizeWindowResponseSchema);
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
const ConversationMessageSchema = (0, _zod.z).object({
    role: (0, _zod.z).enum([
        "user",
        "assistant"
    ]),
    text: (0, _zod.z).string().max(4000),
    capturedAt: (0, _zod.z).string().optional()
});
const ConversationSummarySchema = (0, _zod.z).object({
    id: (0, _zod.z).string(),
    platform: (0, _zod.z).enum([
        "chatgpt",
        "claude",
        "gemini"
    ]),
    title: (0, _zod.z).string().max(300).optional(),
    url: (0, _zod.z).string().url(),
    goal: (0, _zod.z).string().max(1000).optional(),
    decisions: (0, _zod.z).array((0, _zod.z).string().max(300)).max(8),
    constraints: (0, _zod.z).array((0, _zod.z).string().max(300)).max(8),
    openQuestions: (0, _zod.z).array((0, _zod.z).string().max(300)).max(8),
    entities: (0, _zod.z).array((0, _zod.z).string().max(120)).max(20),
    updatedAt: (0, _zod.z).string()
});
const SemanticTabClusterSchema = (0, _zod.z).object({
    id: (0, _zod.z).string(),
    windowId: (0, _zod.z).number(),
    name: (0, _zod.z).string().max(120),
    category: (0, _zod.z).string().max(60),
    tabIds: (0, _zod.z).array((0, _zod.z).number()).max(100),
    members: (0, _zod.z).array((0, _zod.z).object({
        tabId: (0, _zod.z).number(),
        title: (0, _zod.z).string().max(300),
        url: (0, _zod.z).string().url()
    })).max(100).optional(),
    confidence: (0, _zod.z).number().min(0).max(1),
    tokens: (0, _zod.z).array((0, _zod.z).string().max(80)).max(40),
    summary: (0, _zod.z).string().max(1000),
    lastActiveAt: (0, _zod.z).string(),
    status: (0, _zod.z).enum([
        "tentative",
        "suggested",
        "confirmed"
    ]),
    dismissedUntil: (0, _zod.z).string().optional(),
    chromeGroupId: (0, _zod.z).number().optional()
});
const TabClassificationRequestSchema = (0, _zod.z).object({
    tabs: (0, _zod.z).array((0, _zod.z).object({
        tabId: (0, _zod.z).number(),
        title: (0, _zod.z).string().max(300),
        url: (0, _zod.z).string().url(),
        domain: (0, _zod.z).string().max(200)
    })).max(20),
    clusters: (0, _zod.z).array((0, _zod.z).object({
        id: (0, _zod.z).string(),
        name: (0, _zod.z).string().max(120),
        category: (0, _zod.z).string().max(60),
        summary: (0, _zod.z).string().max(500)
    })).max(20)
});
const TabClassificationResponseSchema = (0, _zod.z).object({
    assignments: (0, _zod.z).array((0, _zod.z).object({
        tabId: (0, _zod.z).number(),
        clusterId: (0, _zod.z).string().nullable(),
        topic: (0, _zod.z).string().max(120),
        category: (0, _zod.z).string().max(60),
        confidence: (0, _zod.z).number().min(0).max(1)
    })).max(20)
});
const OrganizeWindowResponseSchema = (0, _zod.z).object({
    windowId: (0, _zod.z).number(),
    clusters: (0, _zod.z).array(SemanticTabClusterSchema).max(100)
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
        "session",
        "cluster"
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
    preferences: (0, _zod.z).array(MemoryItemSchema).max(20),
    conversation: (0, _zod.z).object({
        platform: (0, _zod.z).enum([
            "chatgpt",
            "claude",
            "gemini"
        ]),
        title: (0, _zod.z).string().max(300).optional(),
        url: (0, _zod.z).string().url(),
        extractedAt: (0, _zod.z).string(),
        messages: (0, _zod.z).array(ConversationMessageSchema).max(12),
        summary: ConversationSummarySchema.optional(),
        continuation: (0, _zod.z).boolean().optional()
    }).optional()
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
    clusterId: (0, _zod.z).string().optional(),
    summary: (0, _zod.z).string().max(1000).optional(),
    entities: (0, _zod.z).array((0, _zod.z).string()).optional(),
    constraints: (0, _zod.z).array((0, _zod.z).string()).optional(),
    confirmed: (0, _zod.z).boolean().optional(),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksYUFBYTtRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFFBQVE7UUFDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFdBQVc7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksU0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxJ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UztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLE1BQU07SUFDTixJQUFJLHlCQUF5QjtRQUFFLE9BQU87SUFBdUI7SUFDN0QsUUFBUTtJQUNSLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixRQUFRO0lBQ1IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsTUFBTTtJQUNOLFNBQVM7SUFDVCxLQUFLO0lBQ0wsS0FBSztJQUNMLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsS0FBSztJQUNMLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLGFBQWE7SUFDYixPQUFPO0lBQ1AsYUFBYTtJQUNiLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNTVkZjI0ZDNjYTBjZDAxNS5qcyIsImFwcHMvZXh0ZW5zaW9uLy5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJhcHBzL2V4dGVuc2lvbi9iYWNrZ3JvdW5kLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2lkYkA4LjAuMy9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwicGFja2FnZXMvY29udHJhY3RzL3NyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS96b2RAMy4yNC4yL25vZGVfbW9kdWxlcy96b2QvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcb2xpdmVcXFxcRG9jdW1lbnRzXFxcXENvZGV4XFxcXGNvbnRleHRhYnNcXFxcYXBwc1xcXFxleHRlbnNpb25cXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImQ3YjliMmY4MWY4MThmMGJcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJleHBvcnQge307XHJcblxyXG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tIFwiaWRiXCI7XHJcbmltcG9ydCB7IE9yZ2FuaXplV2luZG93UmVzcG9uc2VTY2hlbWEsIFJlc2VhcmNoU2Vzc2lvblNjaGVtYSwgU2VtYW50aWNUYWJDbHVzdGVyU2NoZW1hLCB0eXBlIFNlbWFudGljVGFiQ2x1c3RlciB9IGZyb20gXCJAYW1iaWVudC9jb250cmFjdHNcIjtcclxuXHJcbmNvbnN0IGRiUHJvbWlzZSA9IG9wZW5EQihcImFtYmllbnQtY29udGV4dFwiLCAxLCB7XHJcbiAgdXBncmFkZShkYikgeyBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJzZXNzaW9uc1wiKSkgZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJzZXNzaW9uc1wiLCB7IGtleVBhdGg6IFwiaWRcIiB9KTsgfVxyXG59KTtcclxuXHJcbnR5cGUgVGFiTWV0YSA9IHsgdGFiSWQ6IG51bWJlcjsgd2luZG93SWQ6IG51bWJlcjsgdXJsOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGRvbWFpbjogc3RyaW5nOyBncm91cElkPzogbnVtYmVyOyBjcmVhdGVkQXQ6IG51bWJlcjsgdXBkYXRlZEF0OiBudW1iZXI7IGxhc3RBY3RpdmVBdDogbnVtYmVyIH07XHJcbmNvbnN0IFNUT1AgPSBuZXcgU2V0KFtcInRoZVwiLCBcImFuZFwiLCBcImZvclwiLCBcIndpdGhcIiwgXCJmcm9tXCIsIFwidGhpc1wiLCBcInRoYXRcIiwgXCJiZXN0XCIsIFwicmV2aWV3XCIsIFwiZ3VpZGVcIiwgXCJob3dcIiwgXCJ3aGF0XCIsIFwibmV3XCIsIFwieW91clwiLCBcIm9mZmljaWFsXCIsIFwid3d3XCIsIFwiY29tXCJdKTtcclxuY29uc3QgdG9rZW5zID0gKHZhbHVlOiBzdHJpbmcpID0+IFsuLi5uZXcgU2V0KCh2YWx1ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9bYS16MC05XXszLH0vZykgPz8gW10pLmZpbHRlcigod29yZCkgPT4gIVNUT1AuaGFzKHdvcmQpKSldO1xyXG5jb25zdCBjbGFzc2lmaWNhdGlvbktleSA9ICh0YWI6IFBpY2s8VGFiTWV0YSwgXCJ1cmxcIiB8IFwidGl0bGVcIj4pID0+IHtcclxuICB0cnkgeyBjb25zdCB1cmwgPSBuZXcgVVJMKHRhYi51cmwpOyB1cmwuaGFzaCA9IFwiXCI7IHVybC5zZWFyY2ggPSBcIlwiOyByZXR1cm4gYCR7dXJsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwvJC8sIFwiXCIpfXwke3RhYi50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKX1gOyB9XHJcbiAgY2F0Y2ggeyByZXR1cm4gYCR7dGFiLnVybH18JHt0YWIudGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCl9YDsgfVxyXG59O1xyXG5mdW5jdGlvbiB0YWJDYXRlZ29yeShkb21haW46IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xyXG4gIGNvbnN0IHRleHQgPSBgJHtkb21haW59ICR7dGl0bGV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICgvaG90ZWx8Ym9va2luZ3xleHBlZGlhfGFpcmJuYnxmbGlnaHR8YWlybGluZXx0cmF2ZWwvLnRlc3QodGV4dCkpIHJldHVybiBcInRyYXZlbFwiO1xyXG4gIGlmICgvYW1hem9ufGJlc3RidXl8d2FsbWFydHxzaG9wfHByaWNlfGhlYWRwaG9uZXxhaXJwb2RzfHByb2R1Y3QvLnRlc3QodGV4dCkpIHJldHVybiBcInNob3BwaW5nXCI7XHJcbiAgaWYgKC9hcnhpdnxzY2hvbGFyfHBhcGVyfGpvdXJuYWx8ZG9pfGRpc3RyaWJ1dGVkIHN5c3RlbXN8bGVjdHVyZXxjb3Vyc2UvLnRlc3QodGV4dCkpIHJldHVybiBcInN0dWR5XCI7XHJcbiAgaWYgKC9nbWFpbHxvdXRsb29rfG1haWx8Y2FsZW5kYXIvLnRlc3QodGV4dCkpIHJldHVybiBcIndvcmtcIjtcclxuICByZXR1cm4gXCJyZXNlYXJjaFwiO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldENsdXN0ZXJzKCk6IFByb21pc2U8U2VtYW50aWNUYWJDbHVzdGVyW10+IHtcclxuICBjb25zdCB7IFwic2VtYW50aWMtY2x1c3RlcnNcIjogaXRlbXMgPSBbXSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJzZW1hbnRpYy1jbHVzdGVyc1wiPzogU2VtYW50aWNUYWJDbHVzdGVyW10gfT4oXCJzZW1hbnRpYy1jbHVzdGVyc1wiKTtcclxuICByZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiBTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWEucGFyc2UoaXRlbSkpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVDbHVzdGVycyhpdGVtczogU2VtYW50aWNUYWJDbHVzdGVyW10pIHsgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJzZW1hbnRpYy1jbHVzdGVyc1wiOiBpdGVtcyB9KTsgfVxyXG5sZXQgY2x1c3RlclRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcclxubGV0IGNsYXNzaWZpY2F0aW9uVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19BUElfVVJMID8/IFwiaHR0cDovLzEyNy4wLjAuMTo4Nzg3XCI7XHJcbmZ1bmN0aW9uIHNjaGVkdWxlQ2x1c3RlcmluZygpIHsgaWYgKGNsdXN0ZXJUaW1lcikgY2xlYXJUaW1lb3V0KGNsdXN0ZXJUaW1lcik7IGNsdXN0ZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdm9pZCByZWJ1aWxkQ2x1c3RlcnMoKSwgNzAwKTsgfVxyXG5hc3luYyBmdW5jdGlvbiByZWJ1aWxkQ2x1c3RlcnMod2luZG93SWQ/OiBudW1iZXIpIHtcclxuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkod2luZG93SWQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyB3aW5kb3dJZCB9KTtcclxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHsgXCJ0YWItbWV0YWRhdGFcIjogcHJpb3JNZXRhZGF0YSA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpO1xyXG4gIGNvbnN0IG1ldGFkYXRhOiBUYWJNZXRhW10gPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuaWQgIT09IHVuZGVmaW5lZCAmJiB0YWIud2luZG93SWQgIT09IHVuZGVmaW5lZCAmJiB0YWIudXJsICYmIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0YWIudXJsKSkubWFwKCh0YWIpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbiA9ICgoKSA9PiB7IHRyeSB7IHJldHVybiBuZXcgVVJMKHRhYi51cmwhKS5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgXCJcIik7IH0gY2F0Y2ggeyByZXR1cm4gXCJcIjsgfSB9KSgpO1xyXG4gICAgY29uc3QgcHJldmlvdXMgPSBwcmlvck1ldGFkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0udGFiSWQgPT09IHRhYi5pZCAmJiBpdGVtLnVybCA9PT0gdGFiLnVybCk7XHJcbiAgICByZXR1cm4geyB0YWJJZDogdGFiLmlkISwgd2luZG93SWQ6IHRhYi53aW5kb3dJZCEsIHVybDogdGFiLnVybCEsIHRpdGxlOiB0YWIudGl0bGUgPz8gZG9tYWluLCBkb21haW4sIGdyb3VwSWQ6IHRhYi5ncm91cElkID49IDAgPyB0YWIuZ3JvdXBJZCA6IHVuZGVmaW5lZCwgY3JlYXRlZEF0OiBwcmV2aW91cz8uY3JlYXRlZEF0ID8/IG5vdywgdXBkYXRlZEF0OiBub3csIGxhc3RBY3RpdmVBdDogdGFiLmFjdGl2ZSA/IG5vdyA6IHByZXZpb3VzPy5sYXN0QWN0aXZlQXQgPz8gdGFiLmxhc3RBY2Nlc3NlZCA/PyBub3cgfTtcclxuICB9KTtcclxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBtZXRhZGF0YS5zbGljZSgtNTAwKSB9KTtcclxuICBjb25zdCB7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNsYXNzaWZpY2F0aW9uQ2FjaGUgPSB7fSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItY2xhc3NpZmljYXRpb24tY2FjaGVcIj86IFJlY29yZDxzdHJpbmcsIHsgdG9waWM6IHN0cmluZzsgY2F0ZWdvcnk6IHN0cmluZzsgY29uZmlkZW5jZTogbnVtYmVyIH0+IH0+KFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCIpO1xyXG4gIGNvbnN0IG9sZCA9IGF3YWl0IGdldENsdXN0ZXJzKCk7XHJcbiAgY29uc3QgY2x1c3RlcnM6IFNlbWFudGljVGFiQ2x1c3RlcltdID0gb2xkLmZpbHRlcigoY2x1c3RlcikgPT4gd2luZG93SWQgIT09IHVuZGVmaW5lZCAmJiBjbHVzdGVyLndpbmRvd0lkICE9PSB3aW5kb3dJZCk7XHJcbiAgY29uc3QgYnlXaW5kb3cgPSBuZXcgTWFwPG51bWJlciwgVGFiTWV0YVtdPigpO1xyXG4gIGZvciAoY29uc3QgdGFiIG9mIG1ldGFkYXRhKSB7IGNvbnN0IGxpc3QgPSBieVdpbmRvdy5nZXQodGFiLndpbmRvd0lkKSA/PyBbXTsgbGlzdC5wdXNoKHRhYik7IGJ5V2luZG93LnNldCh0YWIud2luZG93SWQsIGxpc3QpOyB9XHJcbiAgZm9yIChjb25zdCBbY3VycmVudFdpbmRvd0lkLCB3aW5kb3dUYWJzXSBvZiBieVdpbmRvdykge1xyXG4gICAgY29uc3QgdXNlZENsdXN0ZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IHRvcGljR3JvdXBzOiBUYWJNZXRhW11bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB0YWIgb2Ygd2luZG93VGFicykge1xyXG4gICAgICBjb25zdCBjYWNoZWQgPSBjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KHRhYildO1xyXG4gICAgICBjb25zdCB0YWJUb2tlbnMgPSBuZXcgU2V0KHRva2VucyhgJHt0YWIudGl0bGV9ICR7dGFiLmRvbWFpbn0gJHtjYWNoZWQ/LnRvcGljID8/IFwiXCJ9YCkpO1xyXG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gdG9waWNHcm91cHMubWFwKChncm91cCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG90aGVyVG9rZW5zID0gbmV3IFNldChncm91cC5mbGF0TWFwKChtZW1iZXIpID0+IHRva2VucyhgJHttZW1iZXIudGl0bGV9ICR7bWVtYmVyLmRvbWFpbn0gJHtjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KG1lbWJlcildPy50b3BpYyA/PyBcIlwifWApKSk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IFsuLi50YWJUb2tlbnNdLmZpbHRlcigod29yZCkgPT4gb3RoZXJUb2tlbnMuaGFzKHdvcmQpKTtcclxuICAgICAgICBjb25zdCBzYW1lQ2hyb21lR3JvdXAgPSB0YWIuZ3JvdXBJZCAhPT0gdW5kZWZpbmVkICYmIGdyb3VwLnNvbWUoKG1lbWJlcikgPT4gbWVtYmVyLmdyb3VwSWQgPT09IHRhYi5ncm91cElkKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRUb3BpYyA9IGNhY2hlZD8udG9waWMudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3Qgc2FtZUNhY2hlZFRvcGljID0gQm9vbGVhbihjYWNoZWRUb3BpYyAmJiBncm91cC5zb21lKChtZW1iZXIpID0+IGNsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkobWVtYmVyKV0/LnRvcGljLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBjYWNoZWRUb3BpYykpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWF0Y2ggPSBncm91cC5zb21lKChtZW1iZXIpID0+IChjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KG1lbWJlcildPy5jYXRlZ29yeSA/PyB0YWJDYXRlZ29yeShtZW1iZXIuZG9tYWluLCBtZW1iZXIudGl0bGUpKSA9PT0gKGNhY2hlZD8uY2F0ZWdvcnkgPz8gdGFiQ2F0ZWdvcnkodGFiLmRvbWFpbiwgdGFiLnRpdGxlKSkpO1xyXG4gICAgICAgIHJldHVybiB7IGdyb3VwLCBzY29yZTogKHNhbWVDaHJvbWVHcm91cCA/IDggOiAwKSArIChzYW1lQ2FjaGVkVG9waWMgPyA1IDogMCkgKyBvdmVybGFwLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAod29yZC5sZW5ndGggPj0gNSA/IDIgOiAxKSwgMCkgKyAoY2F0ZWdvcnlNYXRjaCA/IDAuNSA6IDApIH07XHJcbiAgICAgIH0pLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuICAgICAgY29uc3QgYmVzdCA9IGNhbmRpZGF0ZXNbMF07XHJcbiAgICAgIGlmIChiZXN0ICYmIGJlc3Quc2NvcmUgPj0gMikgYmVzdC5ncm91cC5wdXNoKHRhYik7IGVsc2UgdG9waWNHcm91cHMucHVzaChbdGFiXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IG1lbWJlcnMgb2YgdG9waWNHcm91cHMpIHtcclxuICAgIGlmIChtZW1iZXJzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG4gICAgY29uc3Qgd29yZHMgPSBtZW1iZXJzLmZsYXRNYXAoKHRhYikgPT4gdG9rZW5zKGAke3RhYi50aXRsZX0gJHt0YWIuZG9tYWlufSAke2NsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0/LnRvcGljID8/IFwiXCJ9YCkpO1xyXG4gICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgd29yZHMuZm9yRWFjaCgod29yZCkgPT4gY291bnRzLnNldCh3b3JkLCAoY291bnRzLmdldCh3b3JkKSA/PyAwKSArIDEpKTtcclxuICAgIGNvbnN0IGNvbW1vbiA9IFsuLi5jb3VudHNdLmZpbHRlcigoWywgY291bnRdKSA9PiBjb3VudCA+PSBNYXRoLm1heCgyLCBNYXRoLmNlaWwobWVtYmVycy5sZW5ndGggKiAwLjQpKSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pLm1hcCgoW3dvcmRdKSA9PiB3b3JkKS5zbGljZSgwLCA4KTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2xhc3NpZmljYXRpb25DYWNoZVtgJHttZW1iZXJzWzBdLnVybH18JHttZW1iZXJzWzBdLnRpdGxlfWBdPy5jYXRlZ29yeSA/PyB0YWJDYXRlZ29yeShtZW1iZXJzWzBdLmRvbWFpbiwgbWVtYmVycy5tYXAoKHRhYikgPT4gdGFiLnRpdGxlKS5qb2luKFwiIFwiKSk7XHJcbiAgICBjb25zdCBjYWNoZWROYW1lID0gbWVtYmVycy5tYXAoKHRhYikgPT4gY2xhc3NpZmljYXRpb25DYWNoZVtjbGFzc2lmaWNhdGlvbktleSh0YWIpXT8udG9waWMpLmZpbmQoQm9vbGVhbik7XHJcbiAgICBjb25zdCBuYW1lID0gY2FjaGVkTmFtZSB8fCBjb21tb24uc2xpY2UoMCwgMykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKSB8fCBgJHtjYXRlZ29yeVswXS50b1VwcGVyQ2FzZSgpfSR7Y2F0ZWdvcnkuc2xpY2UoMSl9IHJlc2VhcmNoYDtcclxuICAgIGNvbnN0IHByaW9yID0gb2xkLmZpbHRlcigoY2x1c3RlcikgPT4gY2x1c3Rlci53aW5kb3dJZCA9PT0gY3VycmVudFdpbmRvd0lkICYmICF1c2VkQ2x1c3Rlcklkcy5oYXMoY2x1c3Rlci5pZCkpLm1hcCgoY2x1c3RlcikgPT4gKHsgY2x1c3Rlciwgb3ZlcmxhcDogY2x1c3Rlci50YWJJZHMuZmlsdGVyKChpZCkgPT4gbWVtYmVycy5zb21lKCh0YWIpID0+IHRhYi50YWJJZCA9PT0gaWQpKS5sZW5ndGggfSkpLnNvcnQoKGEsIGIpID0+IGIub3ZlcmxhcCAtIGEub3ZlcmxhcClbMF07XHJcbiAgICBjb25zdCBpZCA9IHByaW9yICYmIHByaW9yLm92ZXJsYXAgPyBwcmlvci5jbHVzdGVyLmlkIDogYGNsdXN0ZXItJHtjdXJyZW50V2luZG93SWR9LSR7Y3J5cHRvLnJhbmRvbVVVSUQoKX1gO1xyXG4gICAgdXNlZENsdXN0ZXJJZHMuYWRkKGlkKTtcclxuICAgIGNvbnN0IGNvbmZpZGVuY2UgPSBNYXRoLm1pbigwLjk4LCAwLjQ1ICsgbWVtYmVycy5sZW5ndGggKiAwLjA4ICsgKG1lbWJlcnMuZXZlcnkoKHRhYikgPT4gdGFiLmdyb3VwSWQgIT09IHVuZGVmaW5lZCkgPyAwLjE1IDogMCkgKyBNYXRoLm1pbihjb21tb24ubGVuZ3RoLCA0KSAqIDAuMDQpO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gcHJpb3I/LmNsdXN0ZXIuc3RhdHVzID09PSBcImNvbmZpcm1lZFwiID8gXCJjb25maXJtZWRcIiA6IG1lbWJlcnMubGVuZ3RoID49IDIgPyBcInN1Z2dlc3RlZFwiIDogXCJ0ZW50YXRpdmVcIjtcclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFNlbWFudGljVGFiQ2x1c3RlciA9IHsgaWQsIHdpbmRvd0lkOiBjdXJyZW50V2luZG93SWQsIG5hbWU6IHByaW9yPy5jbHVzdGVyLm5hbWUgPz8gbmFtZSwgY2F0ZWdvcnksIHRhYklkczogbWVtYmVycy5tYXAoKHRhYikgPT4gdGFiLnRhYklkKSwgbWVtYmVyczogbWVtYmVycy5tYXAoKHRhYikgPT4gKHsgdGFiSWQ6IHRhYi50YWJJZCwgdGl0bGU6IHRhYi50aXRsZS5zbGljZSgwLCAzMDApLCB1cmw6IHRhYi51cmwgfSkpLCBjb25maWRlbmNlLCB0b2tlbnM6IGNvbW1vbiwgc3VtbWFyeTogYCR7bWVtYmVycy5sZW5ndGh9IHJlbGF0ZWQgdGFiczogJHttZW1iZXJzLm1hcCgodGFiKSA9PiB0YWIudGl0bGUpLnNsaWNlKDAsIDQpLmpvaW4oXCIgwrcgXCIpfWAuc2xpY2UoMCwgMV8wMDApLCBsYXN0QWN0aXZlQXQ6IG5ldyBEYXRlKE1hdGgubWF4KC4uLm1lbWJlcnMubWFwKCh0YWIpID0+IHRhYi5sYXN0QWN0aXZlQXQpKSkudG9JU09TdHJpbmcoKSwgc3RhdHVzLCBkaXNtaXNzZWRVbnRpbDogcHJpb3I/LmNsdXN0ZXIuZGlzbWlzc2VkVW50aWwsIGNocm9tZUdyb3VwSWQ6IG1lbWJlcnMuZXZlcnkoKHRhYikgPT4gdGFiLmdyb3VwSWQgPT09IG1lbWJlcnNbMF0uZ3JvdXBJZCkgPyBtZW1iZXJzWzBdLmdyb3VwSWQgOiB1bmRlZmluZWQgfTtcclxuICAgIGNsdXN0ZXJzLnB1c2godXBkYXRlZCk7XHJcbiAgICBpZiAobWVtYmVycy5sZW5ndGggPj0gMiAmJiBzdGF0dXMgIT09IFwiY29uZmlybWVkXCIgJiYgKCFwcmlvcj8uY2x1c3Rlci5kaXNtaXNzZWRVbnRpbCB8fCBEYXRlLnBhcnNlKHByaW9yLmNsdXN0ZXIuZGlzbWlzc2VkVW50aWwpIDwgbm93KSkge1xyXG4gICAgICBjb25zdCBbc3VwcHJlc3MsIGRpc2FibGVkXSA9IGF3YWl0IFByb21pc2UuYWxsKFtjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInN1Z2dlc3RlZC1jbHVzdGVyXCI/OiBzdHJpbmcgfT4oXCJzdWdnZXN0ZWQtY2x1c3RlclwiKSwgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJkaXNhYmxlZC1zdWdnZXN0aW9uLWNhdGVnb3J5XCI/OiBzdHJpbmcgfT4oXCJkaXNhYmxlZC1zdWdnZXN0aW9uLWNhdGVnb3J5XCIpXSk7XHJcbiAgICAgIGlmICghc3VwcHJlc3NbXCJzdWdnZXN0ZWQtY2x1c3RlclwiXSAmJiBkaXNhYmxlZFtcImRpc2FibGVkLXN1Z2dlc3Rpb24tY2F0ZWdvcnlcIl0gIT09IGNhdGVnb3J5KSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInN1Z2dlc3RlZC1jbHVzdGVyXCI6IGlkIH0pO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMuc2xpY2UoLTEwMCkpO1xyXG4gIGNvbnN0IHVuY2VydGFpbiA9IG1ldGFkYXRhLmZpbHRlcigodGFiKSA9PiB0YWIudGl0bGUgJiYgIWNsdXN0ZXJzLnNvbWUoKGNsdXN0ZXIpID0+IGNsdXN0ZXIud2luZG93SWQgPT09IHRhYi53aW5kb3dJZCAmJiBjbHVzdGVyLnRhYklkcy5pbmNsdWRlcyh0YWIudGFiSWQpKSk7XHJcbiAgaWYgKHVuY2VydGFpbi5sZW5ndGggPj0gMykgc2NoZWR1bGVDbGFzc2lmaWNhdGlvbih1bmNlcnRhaW4uc2xpY2UoMCwgMjApLCBjbHVzdGVycy5maWx0ZXIoKGNsdXN0ZXIpID0+IHdpbmRvd0lkID09PSB1bmRlZmluZWQgfHwgY2x1c3Rlci53aW5kb3dJZCA9PT0gd2luZG93SWQpKTtcclxufVxyXG5mdW5jdGlvbiBzY2hlZHVsZUNsYXNzaWZpY2F0aW9uKHRhYnM6IFRhYk1ldGFbXSwgY2x1c3RlcnM6IFNlbWFudGljVGFiQ2x1c3RlcltdKSB7XHJcbiAgaWYgKGNsYXNzaWZpY2F0aW9uVGltZXIpIGNsZWFyVGltZW91dChjbGFzc2lmaWNhdGlvblRpbWVyKTtcclxuICBjbGFzc2lmaWNhdGlvblRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB2b2lkIGNsYXNzaWZ5TWV0YWRhdGFCYXRjaCh0YWJzLCBjbHVzdGVycyksIDhfMDAwKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjbGFzc2lmeU1ldGFkYXRhQmF0Y2godGFiczogVGFiTWV0YVtdLCBjbHVzdGVyczogU2VtYW50aWNUYWJDbHVzdGVyW10pIHtcclxuICBjb25zdCB7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNhY2hlID0ge30gfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldDx7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI/OiBSZWNvcmQ8c3RyaW5nLCB7IHRvcGljOiBzdHJpbmc7IGNhdGVnb3J5OiBzdHJpbmc7IGNvbmZpZGVuY2U6IG51bWJlciB9PiB9PihcInRhYi1jbGFzc2lmaWNhdGlvbi1jYWNoZVwiKTtcclxuICBjb25zdCB1bmNhY2hlZCA9IHRhYnMuZmlsdGVyKCh0YWIpID0+ICFjYWNoZVtjbGFzc2lmaWNhdGlvbktleSh0YWIpXSk7XHJcbiAgaWYgKCF1bmNhY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvY2xhc3NpZnktdGFic2AsIHsgbWV0aG9kOiBcIlBPU1RcIiwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhYnM6IHVuY2FjaGVkLm1hcCgoeyB0YWJJZCwgdGl0bGUsIHVybCwgZG9tYWluIH0pID0+ICh7IHRhYklkLCB0aXRsZTogdGl0bGUuc2xpY2UoMCwgMzAwKSwgdXJsLCBkb21haW4gfSkpLCBjbHVzdGVyczogY2x1c3RlcnMuc2xpY2UoMCwgMjApLm1hcCgoeyBpZCwgbmFtZSwgY2F0ZWdvcnksIHN1bW1hcnkgfSkgPT4gKHsgaWQsIG5hbWUsIGNhdGVnb3J5LCBzdW1tYXJ5OiBzdW1tYXJ5LnNsaWNlKDAsIDUwMCkgfSkpIH0pIH0pO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgZm9yIChjb25zdCBhc3NpZ25tZW50IG9mIHJlc3VsdC5hc3NpZ25tZW50cyA/PyBbXSkgeyBjb25zdCB0YWIgPSB1bmNhY2hlZC5maW5kKChpdGVtKSA9PiBpdGVtLnRhYklkID09PSBhc3NpZ25tZW50LnRhYklkKTsgaWYgKHRhYikgY2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0gPSB7IHRvcGljOiBhc3NpZ25tZW50LnRvcGljLCBjYXRlZ29yeTogYXNzaWdubWVudC5jYXRlZ29yeSwgY29uZmlkZW5jZTogYXNzaWdubWVudC5jb25maWRlbmNlIH07IH1cclxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNhY2hlIH0pO1xyXG4gICAgYXdhaXQgcmVidWlsZENsdXN0ZXJzKCk7XHJcbiAgfSBjYXRjaCB7IC8qIGNsYXNzaWZpY2F0aW9uIGlzIG9wdGlvbmFsOyBsb2NhbCBjbHVzdGVycyByZW1haW4gYXZhaWxhYmxlICovIH1cclxufVxyXG5cclxuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHsgaWYgKHRhYi5pZCAhPT0gdW5kZWZpbmVkICYmIHRhYi53aW5kb3dJZCAhPT0gdW5kZWZpbmVkKSB7IHZvaWQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKS50aGVuKCh7IFwidGFiLW1ldGFkYXRhXCI6IGl0ZW1zID0gW10gfSkgPT4gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJ0YWItbWV0YWRhdGFcIjogWy4uLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50YWJJZCAhPT0gdGFiLmlkKSwgeyB0YWJJZDogdGFiLmlkISwgd2luZG93SWQ6IHRhYi53aW5kb3dJZCEsIHVybDogdGFiLnVybCA/PyBcIlwiLCB0aXRsZTogdGFiLnRpdGxlID8/IFwiXCIsIGRvbWFpbjogXCJcIiwgY3JlYXRlZEF0OiBEYXRlLm5vdygpLCB1cGRhdGVkQXQ6IERhdGUubm93KCksIGxhc3RBY3RpdmVBdDogRGF0ZS5ub3coKSB9XS5zbGljZSgtNTAwKSB9KSk7IHNjaGVkdWxlQ2x1c3RlcmluZygpOyB9IH0pO1xyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2UsIHRhYikgPT4geyBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJjb21wbGV0ZVwiIHx8IGNoYW5nZS50aXRsZSB8fCBjaGFuZ2UudXJsKSB7IHZvaWQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKS50aGVuKCh7IFwidGFiLW1ldGFkYXRhXCI6IGl0ZW1zID0gW10gfSkgPT4geyBjb25zdCBkb21haW4gPSAoKCkgPT4geyB0cnkgeyByZXR1cm4gbmV3IFVSTCh0YWIudXJsID8/IFwiXCIpLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCBcIlwiKTsgfSBjYXRjaCB7IHJldHVybiBcIlwiOyB9IH0pKCk7IGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChlbnRyeSkgPT4gZW50cnkudGFiSWQgPT09IHRhYklkKTsgY29uc3QgbmV4dCA9IHsgdGFiSWQsIHdpbmRvd0lkOiB0YWIud2luZG93SWQgPz8gaXRlbT8ud2luZG93SWQgPz8gLTEsIHVybDogdGFiLnVybCA/PyBpdGVtPy51cmwgPz8gXCJcIiwgdGl0bGU6IHRhYi50aXRsZSA/PyBpdGVtPy50aXRsZSA/PyBcIlwiLCBkb21haW4sIGdyb3VwSWQ6IHRhYi5ncm91cElkID49IDAgPyB0YWIuZ3JvdXBJZCA6IHVuZGVmaW5lZCwgY3JlYXRlZEF0OiBpdGVtPy5jcmVhdGVkQXQgPz8gRGF0ZS5ub3coKSwgdXBkYXRlZEF0OiBEYXRlLm5vdygpLCBsYXN0QWN0aXZlQXQ6IGl0ZW0/Lmxhc3RBY3RpdmVBdCA/PyBEYXRlLm5vdygpIH07IHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBbLi4uaXRlbXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkudGFiSWQgIT09IHRhYklkKSwgbmV4dF0uc2xpY2UoLTUwMCkgfSk7IH0pOyBzY2hlZHVsZUNsdXN0ZXJpbmcoKTsgfSB9KTtcclxuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHsgdGFiSWQgfSkgPT4geyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcImxhc3QtYWN0aXZlLXRhYi1pZFwiOiB0YWJJZCB9KTsgY29uc3QgeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcyA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpOyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0udGFiSWQgPT09IHRhYklkID8geyAuLi5pdGVtLCBsYXN0QWN0aXZlQXQ6IERhdGUubm93KCkgfSA6IGl0ZW0pIH0pOyBzY2hlZHVsZUNsdXN0ZXJpbmcoKTsgfSk7XHJcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiSWQpID0+IHsgY29uc3QgY2x1c3RlcnMgPSBhd2FpdCBnZXRDbHVzdGVycygpOyBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMubWFwKChjbHVzdGVyKSA9PiAoeyAuLi5jbHVzdGVyLCB0YWJJZHM6IGNsdXN0ZXIudGFiSWRzLmZpbHRlcigoaWQpID0+IGlkICE9PSB0YWJJZCkgfSkpLmZpbHRlcigoY2x1c3RlcikgPT4gY2x1c3Rlci50YWJJZHMubGVuZ3RoID49IDIpKTsgY29uc3QgeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcyA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpOyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGFiSWQgIT09IHRhYklkKSB9KTsgc2NoZWR1bGVDbHVzdGVyaW5nKCk7IH0pO1xyXG5jaHJvbWUud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHdpbmRvd0lkKSA9PiB7XHJcbiAgY29uc3QgY2x1c3RlcnMgPSBhd2FpdCBnZXRDbHVzdGVycygpOyBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMuZmlsdGVyKChjbHVzdGVyKSA9PiBjbHVzdGVyLndpbmRvd0lkICE9PSB3aW5kb3dJZCkpO1xyXG4gIGNvbnN0IHsgXCJ0YWItbWV0YWRhdGFcIjogaXRlbXMgPSBbXSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKTtcclxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ud2luZG93SWQgIT09IHdpbmRvd0lkKSB9KTtcclxufSk7XHJcbmNocm9tZS50YWJHcm91cHM/Lm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG5jaHJvbWUudGFiR3JvdXBzPy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoc2NoZWR1bGVDbHVzdGVyaW5nKTtcclxuY2hyb21lLnRhYkdyb3Vwcz8ub25SZW1vdmVkLmFkZExpc3RlbmVyKHNjaGVkdWxlQ2x1c3RlcmluZyk7XHJcbmNocm9tZS5ydW50aW1lLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG52b2lkIHJlYnVpbGRDbHVzdGVycygpO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwib25ib2FyZGluZy1zZWVuXCIpO1xyXG4gIGlmICghZXhpc3RpbmdbXCJvbmJvYXJkaW5nLXNlZW5cIl0pIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwib25ib2FyZGluZy1zZWVuXCI6IHRydWUgfSk7XHJcbn0pO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIHZvaWQgKGFzeW5jICgpID0+IHtcclxuICAgIHN3aXRjaCAobWVzc2FnZT8udHlwZSkge1xyXG4gICAgICBjYXNlIFwiTElTVF9UQUJTXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcclxuICAgICAgY2FzZSBcIk9QRU5fQU1CSUVOVF9QT1BVUFwiOlxyXG4gICAgICAgIGlmIChjaHJvbWUuYWN0aW9uPy5vcGVuUG9wdXApIHJldHVybiBhd2FpdCBjaHJvbWUuYWN0aW9uLm9wZW5Qb3B1cCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgY2FzZSBcIkdFVF9DTFVTVEVSX1NVR0dFU1RJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHsgXCJzdWdnZXN0ZWQtY2x1c3RlclwiOiBpZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJzdWdnZXN0ZWQtY2x1c3RlclwiPzogc3RyaW5nIH0+KFwic3VnZ2VzdGVkLWNsdXN0ZXJcIik7XHJcbiAgICAgICAgY29uc3QgY2x1c3RlciA9IGlkID8gKGF3YWl0IGdldENsdXN0ZXJzKCkpLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gY2x1c3RlciAmJiAoIWNsdXN0ZXIuZGlzbWlzc2VkVW50aWwgfHwgRGF0ZS5wYXJzZShjbHVzdGVyLmRpc21pc3NlZFVudGlsKSA8IERhdGUubm93KCkpID8gY2x1c3RlciA6IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiTElTVF9DTFVTVEVSU1wiOiB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93SWQgPSBOdW1iZXIobWVzc2FnZS53aW5kb3dJZCk7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBnZXRDbHVzdGVycygpKS5maWx0ZXIoKGNsdXN0ZXIpID0+IGNsdXN0ZXIud2luZG93SWQgPT09IHdpbmRvd0lkKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiT1JHQU5JWkVfV0lORE9XXCI6IHtcclxuICAgICAgICBjb25zdCB3aW5kb3dJZCA9IE51bWJlcihtZXNzYWdlLndpbmRvd0lkKTtcclxuICAgICAgICBhd2FpdCByZWJ1aWxkQ2x1c3RlcnMod2luZG93SWQpO1xyXG4gICAgICAgIGxldCBjbHVzdGVycyA9IChhd2FpdCBnZXRDbHVzdGVycygpKS5maWx0ZXIoKGNsdXN0ZXIpID0+IGNsdXN0ZXIud2luZG93SWQgPT09IHdpbmRvd0lkKTtcclxuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZCB9KTtcclxuICAgICAgICBjb25zdCBrbm93biA9IG5ldyBTZXQoY2x1c3RlcnMuZmxhdE1hcCgoY2x1c3RlcikgPT4gY2x1c3Rlci50YWJJZHMpKTtcclxuICAgICAgICBjb25zdCB1bmNhY2hlZCA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHRhYi5pZCAhPT0gdW5kZWZpbmVkICYmIHRhYi51cmwgJiYgL15odHRwcz86XFwvXFwvLy50ZXN0KHRhYi51cmwpICYmICFrbm93bi5oYXModGFiLmlkKSk7XHJcbiAgICAgICAgaWYgKHVuY2FjaGVkLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHVuY2FjaGVkLm1hcCgodGFiKSA9PiB7IGNvbnN0IHVybCA9IHRhYi51cmwhOyBjb25zdCBkb21haW4gPSBuZXcgVVJMKHVybCkuaG9zdG5hbWU7IHJldHVybiB7IHRhYklkOiB0YWIuaWQhLCB0aXRsZTogdGFiLnRpdGxlID8/IGRvbWFpbiwgdXJsLCBkb21haW4gfTsgfSk7XHJcbiAgICAgICAgICBhd2FpdCBjbGFzc2lmeU1ldGFkYXRhQmF0Y2gobWV0YWRhdGEgYXMgVGFiTWV0YVtdLCBjbHVzdGVycyk7XHJcbiAgICAgICAgICBhd2FpdCByZWJ1aWxkQ2x1c3RlcnMod2luZG93SWQpO1xyXG4gICAgICAgICAgY2x1c3RlcnMgPSAoYXdhaXQgZ2V0Q2x1c3RlcnMoKSkuZmlsdGVyKChjbHVzdGVyKSA9PiBjbHVzdGVyLndpbmRvd0lkID09PSB3aW5kb3dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gT3JnYW5pemVXaW5kb3dSZXNwb25zZVNjaGVtYS5wYXJzZSh7IHdpbmRvd0lkLCBjbHVzdGVycyB9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcIm9yZ2FuaXplLXByZXZpZXdcIjogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJHRVRfUkVMRVZBTlRfQ0xVU1RFUlNcIjoge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdG9rZW5zKFN0cmluZyhtZXNzYWdlLnF1ZXJ5ID8/IFwiXCIpKS5jb25jYXQodG9rZW5zKFN0cmluZyhtZXNzYWdlLmNvbnZlcnNhdGlvblRleHQgPz8gXCJcIikpKTtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IGdldENsdXN0ZXJzKCkpLm1hcCgoY2x1c3RlcikgPT4gKHsgY2x1c3Rlciwgc2NvcmU6IGNsdXN0ZXIudG9rZW5zLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAocXVlcnkuaW5jbHVkZXMod29yZCkgPyAyIDogMCksIDApICsgY2x1c3Rlci5jb25maWRlbmNlICsgKGNsdXN0ZXIuc3RhdHVzID09PSBcImNvbmZpcm1lZFwiID8gMyA6IDApIH0pKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2NvcmUgPiAwKS5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSkuc2xpY2UoMCwgMikubWFwKChpdGVtKSA9PiBpdGVtLmNsdXN0ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJDTFVTVEVSX0FDVElPTlwiOiB7XHJcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBhd2FpdCBnZXRDbHVzdGVycygpO1xyXG4gICAgICAgIGNvbnN0IGNsdXN0ZXIgPSBjbHVzdGVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBTdHJpbmcobWVzc2FnZS5pZCkpO1xyXG4gICAgICAgIGlmICghY2x1c3RlcikgdGhyb3cgbmV3IEVycm9yKFwiQ2x1c3RlciBubyBsb25nZXIgZXhpc3RzXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJhY2NlcHRcIikge1xyXG4gICAgICAgICAgaWYgKCFtZXNzYWdlLnBlcm1pc3Npb25HcmFudGVkIHx8ICEoYXdhaXQgY2hyb21lLnBlcm1pc3Npb25zLmNvbnRhaW5zKHsgcGVybWlzc2lvbnM6IFtcInRhYkdyb3Vwc1wiXSB9KSkpIHRocm93IG5ldyBFcnJvcihcIlRhYiBncm91cCBwZXJtaXNzaW9uIHdhcyBub3QgZ3JhbnRlZFwiKTtcclxuICAgICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwidGFiLWdyb3VwLXBlcm1pc3Npb25cIjogdHJ1ZSB9KTtcclxuICAgICAgICAgIGNvbnN0IG9wZW5UYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZDogY2x1c3Rlci53aW5kb3dJZCB9KTtcclxuICAgICAgICAgIGNvbnN0IGlkcyA9IGNsdXN0ZXIudGFiSWRzLmZpbHRlcigoaWQpID0+IG9wZW5UYWJzLnNvbWUoKHRhYikgPT4gdGFiLmlkID09PSBpZCkpO1xyXG4gICAgICAgICAgaWYgKGlkcy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgZW5vdWdoIG9wZW4gdGFicyByZW1haW4gdG8gZ3JvdXBcIik7XHJcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwSWQgPSBjbHVzdGVyLmNocm9tZUdyb3VwSWQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChhd2FpdCBjaHJvbWUudGFiR3JvdXBzLnF1ZXJ5KHt9KSkuc29tZSgoZ3JvdXApID0+IGdyb3VwLmlkID09PSBjbHVzdGVyLmNocm9tZUdyb3VwSWQpID8gY2x1c3Rlci5jaHJvbWVHcm91cElkIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBJZCA9IGF3YWl0IGNocm9tZS50YWJzLmdyb3VwKHsgdGFiSWRzOiBpZHMsIC4uLihleGlzdGluZ0dyb3VwSWQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBncm91cElkOiBleGlzdGluZ0dyb3VwSWQgfSkgfSk7XHJcbiAgICAgICAgICBhd2FpdCBjaHJvbWUudGFiR3JvdXBzLnVwZGF0ZShncm91cElkLCB7IHRpdGxlOiBjbHVzdGVyLm5hbWUuc2xpY2UoMCwgODApLCBjb2xvcjogY2x1c3Rlci5jYXRlZ29yeSA9PT0gXCJ0cmF2ZWxcIiA/IFwiYmx1ZVwiIDogY2x1c3Rlci5jYXRlZ29yeSA9PT0gXCJzaG9wcGluZ1wiID8gXCJvcmFuZ2VcIiA6IFwicHVycGxlXCIgfSk7XHJcbiAgICAgICAgICBjbHVzdGVyLnN0YXR1cyA9IFwiY29uZmlybWVkXCI7IGNsdXN0ZXIuY2hyb21lR3JvdXBJZCA9IGdyb3VwSWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJpbnRlcm5hbFwiKSBjbHVzdGVyLnN0YXR1cyA9IFwiY29uZmlybWVkXCI7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiZGlzbWlzc1wiKSBjbHVzdGVyLmRpc21pc3NlZFVudGlsID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI0ICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwibmV2ZXJcIikgeyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcImRpc2FibGVkLXN1Z2dlc3Rpb24tY2F0ZWdvcnlcIjogY2x1c3Rlci5jYXRlZ29yeSB9KTsgY2x1c3Rlci5kaXNtaXNzZWRVbnRpbCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpOyB9XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwicmVuYW1lXCIpIGNsdXN0ZXIubmFtZSA9IFN0cmluZyhtZXNzYWdlLm5hbWUgPz8gY2x1c3Rlci5uYW1lKS5zbGljZSgwLCA4MCk7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiY3JlYXRlLXNlc3Npb25cIikge1xyXG4gICAgICAgICAgY29uc3Qgb3BlblRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IHdpbmRvd0lkOiBjbHVzdGVyLndpbmRvd0lkIH0pO1xyXG4gICAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBkYlByb21pc2U7IGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBSZXNlYXJjaFNlc3Npb25TY2hlbWEucGFyc2UoeyBpZDogYHJlc2VhcmNoLSR7Y2x1c3Rlci5pZH1gLCB0aXRsZTogY2x1c3Rlci5uYW1lLCBnb2FsOiBgUmVzZWFyY2ggJHtjbHVzdGVyLm5hbWV9YCwgY3JlYXRlZEF0OiBub3csIHVwZGF0ZWRBdDogbm93LCBjbHVzdGVySWQ6IGNsdXN0ZXIuaWQsIHN1bW1hcnk6IGNsdXN0ZXIuc3VtbWFyeSwgZW50aXRpZXM6IGNsdXN0ZXIudG9rZW5zLCBjb25zdHJhaW50czogW10sIGNvbmZpcm1lZDogdHJ1ZSwgc291cmNlczogb3BlblRhYnMuZmlsdGVyKCh0YWIpID0+IGNsdXN0ZXIudGFiSWRzLmluY2x1ZGVzKHRhYi5pZCEpKS5tYXAoKHRhYikgPT4gKHsgdGl0bGU6IHRhYi50aXRsZSwgdXJsOiB0YWIudXJsISwgdGFiSWQ6IHRhYi5pZCB9KSksIGZpbmRpbmdzOiBbXSwgY29udHJhZGljdGlvbnM6IFtdLCB1bmtub3duczogW10sIG5leHRTdGVwczogW10gfSk7XHJcbiAgICAgICAgICBhd2FpdCBkYi5wdXQoXCJzZXNzaW9uc1wiLCBzZXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgc2F2ZUNsdXN0ZXJzKGNsdXN0ZXJzKTsgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFwic3VnZ2VzdGVkLWNsdXN0ZXJcIik7IHNjaGVkdWxlQ2x1c3RlcmluZygpOyByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR0VUX0NPTlZFUlNBVElPTl9TVU1NQVJZXCI6XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KFN0cmluZyhtZXNzYWdlLmtleSkpKVtTdHJpbmcobWVzc2FnZS5rZXkpXTtcclxuICAgICAgY2FzZSBcIlNBVkVfQ09OVkVSU0FUSU9OX1NVTU1BUllcIjpcclxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU3RyaW5nKG1lc3NhZ2Uua2V5KV06IG1lc3NhZ2Uuc3VtbWFyeSB9KTsgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgXCJDTEVBUl9DT05URVhUX0RBVEFcIjpcclxuICAgICAgICBpZiAoY2x1c3RlclRpbWVyKSBjbGVhclRpbWVvdXQoY2x1c3RlclRpbWVyKTtcclxuICAgICAgICBpZiAoY2xhc3NpZmljYXRpb25UaW1lcikgY2xlYXJUaW1lb3V0KGNsYXNzaWZpY2F0aW9uVGltZXIpO1xyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXCJzZW1hbnRpYy1jbHVzdGVyc1wiLCBcInN1Z2dlc3RlZC1jbHVzdGVyXCIsIFwidGFiLW1ldGFkYXRhXCIsIFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCIsIFwib3JnYW5pemUtcHJldmlld1wiXSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwpLnRoZW4oKGRhdGEpID0+IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGFydHNXaXRoKFwiY29udmVyc2F0aW9uOlwiKSkpKSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBcIkNPTExFQ1RfVEFCX0NPTlRFWFRcIjoge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShzZW5kZXIudGFiPy53aW5kb3dJZCA9PT0gdW5kZWZpbmVkID8geyBjdXJyZW50V2luZG93OiB0cnVlIH0gOiB7IHdpbmRvd0lkOiBzZW5kZXIudGFiLndpbmRvd0lkIH0pO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIuaWQgPT09IHNlbmRlci50YWI/LmlkKSA/PyB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLmFjdGl2ZSk7XHJcbiAgICAgICAgbGV0IGdyb3VwcyA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGJyb3dzZXJHcm91cHMgPSBhd2FpdCBjaHJvbWUudGFiR3JvdXBzLnF1ZXJ5KHt9KTtcclxuICAgICAgICAgIGdyb3VwcyA9IG5ldyBNYXAoYnJvd3Nlckdyb3Vwcy5tYXAoKGdyb3VwKSA9PiBbZ3JvdXAuaWQsIGdyb3VwLnRpdGxlIHx8IFwiVW5uYW1lZCBncm91cFwiXSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggeyAvKiB0YWJHcm91cHMgcGVybWlzc2lvbiBpcyBvcHRpb25hbCAqLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gU3RyaW5nKG1lc3NhZ2UucXVlcnkgPz8gXCJcIikudG9Mb3dlckNhc2UoKS5tYXRjaCgvW2EtejAtOV17Myx9L2cpID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuaWQgIT09IGFjdGl2ZVRhYj8uaWQgJiYgdGFiLmlkICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIHRhYi51cmwgJiYgL15odHRwcz86XFwvXFwvLy50ZXN0KHRhYi51cmwpICYmICEvXihjaHJvbWV8ZWRnZXxhYm91dHxkZXZ0b29scyk6Ly50ZXN0KHRhYi51cmwpKTtcclxuICAgICAgICBjYW5kaWRhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNjb3JlID0gKHRhYjogY2hyb21lLnRhYnMuVGFiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gYCR7dGFiLnRpdGxlID8/IFwiXCJ9ICR7dGFiLnVybCA/PyBcIlwifSAke2dyb3Vwcy5nZXQodGFiLmdyb3VwSWQpID8/IFwiXCJ9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBsZXhpY2FsID0gd29yZHMucmVkdWNlKChzdW0sIHdvcmQpID0+IHN1bSArIChoYXlzdGFjay5pbmNsdWRlcyh3b3JkKSA/IDIgOiAwKSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbWVHcm91cCA9IGFjdGl2ZVRhYj8uZ3JvdXBJZCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZVRhYi5ncm91cElkID49IDAgJiYgdGFiLmdyb3VwSWQgPT09IGFjdGl2ZVRhYi5ncm91cElkID8gNSA6IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBsZXhpY2FsICsgc2FtZUdyb3VwO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBzY29yZShiKSAtIHNjb3JlKGEpIHx8IChiLmxhc3RBY2Nlc3NlZCA/PyAwKSAtIChhLmxhc3RBY2Nlc3NlZCA/PyAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGhlYWRpbmdzIGZyb20gdGhlIGFjdGl2ZSBwYWdlIHRvIGltcHJvdmUgc2hvcnRsaXN0aW5nIHJlbGV2YW5jZVxyXG4gICAgICAgIGxldCBhY3RpdmVIZWFkaW5nc1RleHQgPSBcIlwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoYWN0aXZlVGFiPy5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZEFjdGl2ZSA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiBhY3RpdmVUYWIuaWQgfSxcclxuICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLGgyLGgzXCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtcy5tYXAoKGUpID0+IChlIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQgPz8gXCJcIikuam9pbihcIiBcIikucmVwbGFjZSgvXFxuezMsfS9nLCBcIiBcIikuc2xpY2UoMCwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWN0aXZlSGVhZGluZ3NUZXh0ID0gU3RyaW5nKGV4dHJhY3RlZEFjdGl2ZVswXT8ucmVzdWx0ID8/IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSBmYWlsdXJlcyByZWFkaW5nIGFjdGl2ZSBwYWdlIGhlYWRpbmdzICovIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGluZ1dvcmRzID0gYWN0aXZlSGVhZGluZ3NUZXh0Lm1hdGNoKC9bYS16MC05XXszLH0vZykgPz8gW107XHJcblxyXG4gICAgICAgIC8vIGNvbXB1dGUgYSByZWxldmFuY2Ugc2NvcmUgYW5kIHJlcXVpcmUgYXQgbGVhc3Qgb25lIHNpZ25hbCAocHJvbXB0IHdvcmRzLCBhY3RpdmUgaGVhZGluZ3MsIG9yIHNhbWUgZ3JvdXApXHJcbiAgICAgICAgY29uc3Qgc2NvcmVGb3IgPSAodGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gYCR7dGFiLnRpdGxlID8/IFwiXCJ9ICR7dGFiLnVybCA/PyBcIlwifSAke2dyb3Vwcy5nZXQodGFiLmdyb3VwSWQpID8/IFwiXCJ9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgY29uc3QgbGV4aWNhbCA9IHdvcmRzLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAoaGF5c3RhY2suaW5jbHVkZXMod29yZCkgPyAyIDogMCksIDApO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGluZ3NNYXRjaCA9IGhlYWRpbmdXb3Jkcy5yZWR1Y2UoKHN1bSwgdykgPT4gc3VtICsgKGhheXN0YWNrLmluY2x1ZGVzKHcpID8gMSA6IDApLCAwKTtcclxuICAgICAgICAgIGNvbnN0IHNhbWVHcm91cCA9IGFjdGl2ZVRhYj8uZ3JvdXBJZCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZVRhYi5ncm91cElkID49IDAgJiYgdGFiLmdyb3VwSWQgPT09IGFjdGl2ZVRhYi5ncm91cElkID8gNSA6IDA7XHJcbiAgICAgICAgICByZXR1cm4gbGV4aWNhbCArIGhlYWRpbmdzTWF0Y2ggKyBzYW1lR3JvdXA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRsaXN0ZWQgPSBjYW5kaWRhdGVzXHJcbiAgICAgICAgICAuZmlsdGVyKCh0YWIpID0+IHNjb3JlRm9yKHRhYikgPiAwKSAvLyBkcm9wIHRhYnMgd2l0aCBubyByZWxldmFuY2Ugc2lnbmFsXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gc2NvcmVGb3IoYikgLSBzY29yZUZvcihhKSB8fCAoYi5sYXN0QWNjZXNzZWQgPz8gMCkgLSAoYS5sYXN0QWNjZXNzZWQgPz8gMCkpXHJcbiAgICAgICAgICAuc2xpY2UoMCwgMik7IC8vIGNhcCB0byBhdCBtb3N0IHR3byB0YWJzIGZvciBsb3ctbGF0ZW5jeSBzY3JhcGluZ1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2hvcnRsaXN0ZWQubWFwKGFzeW5jICh0YWIpID0+IHtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQhIH0sXHJcbiAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluLCBhcnRpY2xlLCBbcm9sZT1tYWluXVwiKSA/PyBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgocm9vdCBhcyBIVE1MRWxlbWVudCB8IG51bGwpPy5pbm5lclRleHQgPz8gXCJcIikucmVwbGFjZSgvXFxuezMsfS9nLCBcIlxcblxcblwiKS5zbGljZSgwLCAzXzUwMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGV4dCA9IFN0cmluZyhleHRyYWN0ZWRbMF0/LnJlc3VsdCA/PyBcIlwiKTtcclxuICAgICAgICAgIH0gY2F0Y2ggeyAvKiByZXN0cmljdGVkIHBhZ2VzLCBkaXNjYXJkZWQgdGFicywgYW5kIHByb3RlY3RlZCBmcmFtZXMgYXJlIHNraXBwZWQgKi8gfVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4udGFiLCBjb250ZXh0VGV4dDogdGV4dCwgY29udGV4dEdyb3VwVGl0bGU6IHRhYi5ncm91cElkID49IDAgPyBncm91cHMuZ2V0KHRhYi5ncm91cElkKSA6IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiTElTVF9TRVNTSU9OU1wiOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5nZXRBbGwoXCJzZXNzaW9uc1wiKTtcclxuICAgICAgY2FzZSBcIkdFVF9TRVNTSU9OXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IChhd2FpdCBkYlByb21pc2UpLmdldChcInNlc3Npb25zXCIsIFN0cmluZyhtZXNzYWdlLmlkKSk7XHJcbiAgICAgIGNhc2UgXCJTQVZFX1NFU1NJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBSZXNlYXJjaFNlc3Npb25TY2hlbWEucGFyc2UobWVzc2FnZS5zZXNzaW9uKTtcclxuICAgICAgICBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5wdXQoXCJzZXNzaW9uc1wiLCBzZXNzaW9uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR1JPVVBfVEFCU1wiOiB7XHJcbiAgICAgICAgY29uc3QgdGFiSWRzID0gQXJyYXkuaXNBcnJheShtZXNzYWdlLnRhYklkcykgPyBtZXNzYWdlLnRhYklkcy5maWx0ZXIoKGlkOiB1bmtub3duKSA9PiBOdW1iZXIuaXNJbnRlZ2VyKGlkKSkgOiBbXTtcclxuICAgICAgICBpZiAoIXRhYklkcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIk5vIHRhYiBJRHMgd2VyZSBzdXBwbGllZFwiKTtcclxuICAgICAgICBjb25zdCBncm91cElkID0gYXdhaXQgY2hyb21lLnRhYnMuZ3JvdXAoeyB0YWJJZHMgfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUoZ3JvdXBJZCwgeyB0aXRsZTogU3RyaW5nKG1lc3NhZ2UudGl0bGUgPz8gXCJSZXNlYXJjaCBzZXNzaW9uXCIpLnNsaWNlKDAsIDgwKSwgY29sb3I6IFwicHVycGxlXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwSWQ7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pKCkudGhlbihzZW5kUmVzcG9uc2UpLmNhdGNoKChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJFeHRlbnNpb24gcmVxdWVzdCBmYWlsZWRcIiB9KSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0aGlzLnJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuY29uc3QgYWR2YW5jZU1ldGhvZFByb3BzID0gWydjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknLCAnYWR2YW5jZSddO1xuY29uc3QgbWV0aG9kTWFwID0ge307XG5jb25zdCBhZHZhbmNlUmVzdWx0cyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjdXJzb3JJdGVyYXRvclRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKCFhZHZhbmNlTWV0aG9kUHJvcHMuaW5jbHVkZXMocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBsZXQgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wXTtcbiAgICAgICAgaWYgKCFjYWNoZWRGdW5jKSB7XG4gICAgICAgICAgICBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3BdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBhZHZhbmNlUmVzdWx0cy5zZXQodGhpcywgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuZ2V0KHRoaXMpW3Byb3BdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlZEZ1bmM7XG4gICAgfSxcbn07XG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZSguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIGxldCBjdXJzb3IgPSB0aGlzO1xuICAgIGlmICghKGN1cnNvciBpbnN0YW5jZW9mIElEQkN1cnNvcikpIHtcbiAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLm9wZW5DdXJzb3IoLi4uYXJncyk7XG4gICAgfVxuICAgIGlmICghY3Vyc29yKVxuICAgICAgICByZXR1cm47XG4gICAgY3Vyc29yID0gY3Vyc29yO1xuICAgIGNvbnN0IHByb3hpZWRDdXJzb3IgPSBuZXcgUHJveHkoY3Vyc29yLCBjdXJzb3JJdGVyYXRvclRyYXBzKTtcbiAgICBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5zZXQocHJveGllZEN1cnNvciwgY3Vyc29yKTtcbiAgICAvLyBNYXAgdGhpcyBkb3VibGUtcHJveHkgYmFjayB0byB0aGUgb3JpZ2luYWwsIHNvIG90aGVyIGN1cnNvciBtZXRob2RzIHdvcmsuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm94aWVkQ3Vyc29yLCB1bndyYXAoY3Vyc29yKSk7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgICB5aWVsZCBwcm94aWVkQ3Vyc29yO1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGFkdmFuY2luZyBtZXRob2RzIHdhcyBub3QgY2FsbGVkLCBjYWxsIGNvbnRpbnVlKCkuXG4gICAgICAgIGN1cnNvciA9IGF3YWl0IChhZHZhbmNlUmVzdWx0cy5nZXQocHJveGllZEN1cnNvcikgfHwgY3Vyc29yLmNvbnRpbnVlKCkpO1xuICAgICAgICBhZHZhbmNlUmVzdWx0cy5kZWxldGUocHJveGllZEN1cnNvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuICgocHJvcCA9PT0gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiZcbiAgICAgICAgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmUsIElEQkN1cnNvcl0pKSB8fFxuICAgICAgICAocHJvcCA9PT0gJ2l0ZXJhdGUnICYmIGluc3RhbmNlT2ZBbnkodGFyZ2V0LCBbSURCSW5kZXgsIElEQk9iamVjdFN0b3JlXSkpKTtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0ZTtcbiAgICAgICAgcmV0dXJuIG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiwgdW53cmFwLCB3cmFwIH07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbW9yeUl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIGtpbmQ6IHouZW51bShbXCJwcmVmZXJlbmNlXCIsIFwiZmFjdFwiXSksIHRleHQ6IHouc3RyaW5nKCkubWF4KDUwMCksXHJcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLCBjcmVhdGVkQXQ6IHouc3RyaW5nKCksIGxhc3RVc2VkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBzb3VyY2VSZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHN0YXR1czogei5lbnVtKFtcInByb3Bvc2VkXCIsIFwiYXBwcm92ZWRcIiwgXCJkaXNtaXNzZWRcIl0pXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBNZW1vcnlJdGVtID0gei5pbmZlcjx0eXBlb2YgTWVtb3J5SXRlbVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29udmVyc2F0aW9uTWVzc2FnZVNjaGVtYSA9IHoub2JqZWN0KHsgcm9sZTogei5lbnVtKFtcInVzZXJcIiwgXCJhc3Npc3RhbnRcIl0pLCB0ZXh0OiB6LnN0cmluZygpLm1heCg0XzAwMCksIGNhcHR1cmVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSB9KTtcclxuZXhwb3J0IGNvbnN0IENvbnZlcnNhdGlvblN1bW1hcnlTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIHBsYXRmb3JtOiB6LmVudW0oW1wiY2hhdGdwdFwiLCBcImNsYXVkZVwiLCBcImdlbWluaVwiXSksIHRpdGxlOiB6LnN0cmluZygpLm1heCgzMDApLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKSxcclxuICBnb2FsOiB6LnN0cmluZygpLm1heCgxXzAwMCkub3B0aW9uYWwoKSwgZGVjaXNpb25zOiB6LmFycmF5KHouc3RyaW5nKCkubWF4KDMwMCkpLm1heCg4KSwgY29uc3RyYWludHM6IHouYXJyYXkoei5zdHJpbmcoKS5tYXgoMzAwKSkubWF4KDgpLFxyXG4gIG9wZW5RdWVzdGlvbnM6IHouYXJyYXkoei5zdHJpbmcoKS5tYXgoMzAwKSkubWF4KDgpLCBlbnRpdGllczogei5hcnJheSh6LnN0cmluZygpLm1heCgxMjApKS5tYXgoMjApLCB1cGRhdGVkQXQ6IHouc3RyaW5nKClcclxufSk7XHJcbmV4cG9ydCB0eXBlIENvbnZlcnNhdGlvblN1bW1hcnkgPSB6LmluZmVyPHR5cGVvZiBDb252ZXJzYXRpb25TdW1tYXJ5U2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIHdpbmRvd0lkOiB6Lm51bWJlcigpLCBuYW1lOiB6LnN0cmluZygpLm1heCgxMjApLCBjYXRlZ29yeTogei5zdHJpbmcoKS5tYXgoNjApLCB0YWJJZHM6IHouYXJyYXkoei5udW1iZXIoKSkubWF4KDEwMCksXHJcbiAgbWVtYmVyczogei5hcnJheSh6Lm9iamVjdCh7IHRhYklkOiB6Lm51bWJlcigpLCB0aXRsZTogei5zdHJpbmcoKS5tYXgoMzAwKSwgdXJsOiB6LnN0cmluZygpLnVybCgpIH0pKS5tYXgoMTAwKS5vcHRpb25hbCgpLFxyXG4gIGNvbmZpZGVuY2U6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSwgdG9rZW5zOiB6LmFycmF5KHouc3RyaW5nKCkubWF4KDgwKSkubWF4KDQwKSwgc3VtbWFyeTogei5zdHJpbmcoKS5tYXgoMV8wMDApLFxyXG4gIGxhc3RBY3RpdmVBdDogei5zdHJpbmcoKSwgc3RhdHVzOiB6LmVudW0oW1widGVudGF0aXZlXCIsIFwic3VnZ2VzdGVkXCIsIFwiY29uZmlybWVkXCJdKSwgZGlzbWlzc2VkVW50aWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgY2hyb21lR3JvdXBJZDogei5udW1iZXIoKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBTZW1hbnRpY1RhYkNsdXN0ZXIgPSB6LmluZmVyPHR5cGVvZiBTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYkNsYXNzaWZpY2F0aW9uUmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICB0YWJzOiB6LmFycmF5KHoub2JqZWN0KHsgdGFiSWQ6IHoubnVtYmVyKCksIHRpdGxlOiB6LnN0cmluZygpLm1heCgzMDApLCB1cmw6IHouc3RyaW5nKCkudXJsKCksIGRvbWFpbjogei5zdHJpbmcoKS5tYXgoMjAwKSB9KSkubWF4KDIwKSxcclxuICBjbHVzdGVyczogei5hcnJheSh6Lm9iamVjdCh7IGlkOiB6LnN0cmluZygpLCBuYW1lOiB6LnN0cmluZygpLm1heCgxMjApLCBjYXRlZ29yeTogei5zdHJpbmcoKS5tYXgoNjApLCBzdW1tYXJ5OiB6LnN0cmluZygpLm1heCg1MDApIH0pKS5tYXgoMjApXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgVGFiQ2xhc3NpZmljYXRpb25SZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHsgYXNzaWdubWVudHM6IHouYXJyYXkoei5vYmplY3QoeyB0YWJJZDogei5udW1iZXIoKSwgY2x1c3RlcklkOiB6LnN0cmluZygpLm51bGxhYmxlKCksIHRvcGljOiB6LnN0cmluZygpLm1heCgxMjApLCBjYXRlZ29yeTogei5zdHJpbmcoKS5tYXgoNjApLCBjb25maWRlbmNlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSkgfSkpLm1heCgyMCkgfSk7XHJcbmV4cG9ydCBjb25zdCBPcmdhbml6ZVdpbmRvd1Jlc3BvbnNlU2NoZW1hID0gei5vYmplY3QoeyB3aW5kb3dJZDogei5udW1iZXIoKSwgY2x1c3RlcnM6IHouYXJyYXkoU2VtYW50aWNUYWJDbHVzdGVyU2NoZW1hKS5tYXgoMTAwKSB9KTtcclxuZXhwb3J0IHR5cGUgVGFiQ2xhc3NpZmljYXRpb25SZXF1ZXN0ID0gei5pbmZlcjx0eXBlb2YgVGFiQ2xhc3NpZmljYXRpb25SZXF1ZXN0U2NoZW1hPjtcclxuZXhwb3J0IHR5cGUgVGFiQ2xhc3NpZmljYXRpb25SZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFRhYkNsYXNzaWZpY2F0aW9uUmVzcG9uc2VTY2hlbWE+O1xyXG5leHBvcnQgdHlwZSBPcmdhbml6ZVdpbmRvd1Jlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgT3JnYW5pemVXaW5kb3dSZXNwb25zZVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFNvdXJjZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwga2luZDogei5lbnVtKFtcInNlbGVjdGlvblwiLCBcImZpZWxkXCIsIFwicGFnZVwiLCBcInRhYlwiLCBcIm1lbW9yeVwiLCBcImNsYXJpZmljYXRpb25cIiwgXCJzZXNzaW9uXCIsIFwiY2x1c3RlclwiXSksXHJcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCksIHRleHQ6IHouc3RyaW5nKCkubWF4KDQwXzAwMCkub3B0aW9uYWwoKSxcclxuICB0YWJHcm91cElkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksIHRhYkdyb3VwVGl0bGU6IHouc3RyaW5nKCkubWF4KDIwMCkub3B0aW9uYWwoKSwgdGFiSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgY2FwdHVyZWRBdDogei5zdHJpbmcoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UGF5bG9hZFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpLCBxdWVyeTogei5zdHJpbmcoKS5taW4oMSkubWF4KDhfMDAwKSxcclxuICBmaWVsZFRleHQ6IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLCBzZWxlY3Rpb246IHouc3RyaW5nKCkubWF4KDhfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoQ29udGV4dFNvdXJjZVNjaGVtYSkubWF4KDI1KSwgcHJlZmVyZW5jZXM6IHouYXJyYXkoTWVtb3J5SXRlbVNjaGVtYSkubWF4KDIwKSxcclxuICBjb252ZXJzYXRpb246IHoub2JqZWN0KHsgcGxhdGZvcm06IHouZW51bShbXCJjaGF0Z3B0XCIsIFwiY2xhdWRlXCIsIFwiZ2VtaW5pXCJdKSwgdGl0bGU6IHouc3RyaW5nKCkubWF4KDMwMCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLCBleHRyYWN0ZWRBdDogei5zdHJpbmcoKSwgbWVzc2FnZXM6IHouYXJyYXkoQ29udmVyc2F0aW9uTWVzc2FnZVNjaGVtYSkubWF4KDEyKSwgc3VtbWFyeTogQ29udmVyc2F0aW9uU3VtbWFyeVNjaGVtYS5vcHRpb25hbCgpLCBjb250aW51YXRpb246IHouYm9vbGVhbigpLm9wdGlvbmFsKCkgfSkub3B0aW9uYWwoKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgQ29udGV4dFBheWxvYWQgPSB6LmluZmVyPHR5cGVvZiBDb250ZXh0UGF5bG9hZFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBpbnRlbnQ6IHouc3RyaW5nKCksIG9wdGltaXplZFByb21wdDogei5zdHJpbmcoKSwgc2VsZWN0ZWRTb3VyY2VJZHM6IHouYXJyYXkoei5zdHJpbmcoKSksXHJcbiAgZmlsdGVyZWRDb250ZXh0OiB6LnN0cmluZygpLCBjb25mbGljdHM6IHouYXJyYXkoei5vYmplY3QoeyBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSwgc291cmNlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpIH0pKSxcclxuICBpc0FtYmlndW91czogei5ib29sZWFuKCksIGNsYXJpZnlpbmdRdWVzdGlvbjogei5zdHJpbmcoKS5udWxsYWJsZSgpLCBtaXNzaW5nSW5mb3JtYXRpb246IHouYXJyYXkoei5zdHJpbmcoKSksXHJcbiAgc3VnZ2VzdGlvblVzZWZ1bDogei5ib29sZWFuKClcclxufSk7XHJcbmV4cG9ydCB0eXBlIEZpbHRlclJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgRmlsdGVyUmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4ZWN1dGlvblJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCBvcHRpbWl6ZWRQcm9tcHQ6IHouc3RyaW5nKCkubWluKDEpLm1heCg4XzAwMCksIGZpbHRlcmVkQ29udGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKSxcclxuICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpIH0pKSxcclxuICBwcmVmZXJlbmNlczogei5hcnJheShNZW1vcnlJdGVtU2NoZW1hKSwgY2xhcmlmaWNhdGlvbkFuc3dlcjogei5zdHJpbmcoKS5tYXgoNF8wMDApLm9wdGlvbmFsKCksXHJcbiAgY29ycmVjdGlvbkZlZWRiYWNrOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgRXhlY3V0aW9uUmVxdWVzdCA9IHouaW5mZXI8dHlwZW9mIEV4ZWN1dGlvblJlcXVlc3RTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmaWNhdGlvblJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIHBhc3NlZDogei5ib29sZWFuKCksIHNjb3JlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSksXHJcbiAgaXNzdWVzOiB6LmFycmF5KHoub2JqZWN0KHsga2luZDogei5lbnVtKFtcImludGVudF9nYXBcIiwgXCJ1bnN1cHBvcnRlZF9jbGFpbVwiLCBcImZvcm1hdFwiLCBcImluY29tcGxldGVcIl0pLCBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSB9KSksXHJcbiAgY29ycmVjdGlvblByb21wdDogei5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBWZXJpZmljYXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBWZXJpZmljYXRpb25SZXN1bHRTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7IGNvbnRleHQ6IENvbnRleHRQYXlsb2FkU2NoZW1hLCBjbGFyaWZpY2F0aW9uQW5zd2VyOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKSwgc2tpcENsYXJpZmljYXRpb246IHouYm9vbGVhbigpLm9wdGlvbmFsKCkgfSk7XHJcbmV4cG9ydCBjb25zdCBBc3Npc3RSZXNwb25zZVNjaGVtYSA9IHouZGlzY3JpbWluYXRlZFVuaW9uKFwic3RhdHVzXCIsIFtcclxuICB6Lm9iamVjdCh7IHN0YXR1czogei5saXRlcmFsKFwiY2xhcmlmaWNhdGlvbl9yZXF1aXJlZFwiKSwgZmlsdGVyOiBGaWx0ZXJSZXNwb25zZVNjaGVtYSB9KSxcclxuICB6Lm9iamVjdCh7IHN0YXR1czogei5saXRlcmFsKFwibm9fc3VnZ2VzdGlvblwiKSwgZmlsdGVyOiBGaWx0ZXJSZXNwb25zZVNjaGVtYSB9KSxcclxuICB6Lm9iamVjdCh7XHJcbiAgICBzdGF0dXM6IHoubGl0ZXJhbChcImNvbXBsZXRlXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hLCByZWZpbmVkUHJvbXB0OiB6LnN0cmluZygpLFxyXG4gICAgc291cmNlczogei5hcnJheSh6Lm9iamVjdCh7IGlkOiB6LnN0cmluZygpLCB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSwgdGFiSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSB9KSksXHJcbiAgICBtZW1vcnlTdWdnZXN0aW9uczogei5hcnJheSh6LnN0cmluZygpKS5tYXgoMikub3B0aW9uYWwoKVxyXG4gIH0pXHJcbl0pO1xyXG5leHBvcnQgdHlwZSBBc3Npc3RSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIEFzc2lzdFJlc3BvbnNlU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXNlYXJjaFNlc3Npb25TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLCBnb2FsOiB6LnN0cmluZygpLCBjcmVhdGVkQXQ6IHouc3RyaW5nKCksIHVwZGF0ZWRBdDogei5zdHJpbmcoKSwgY2x1c3RlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHN1bW1hcnk6IHouc3RyaW5nKCkubWF4KDFfMDAwKS5vcHRpb25hbCgpLCBlbnRpdGllczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLCBjb25zdHJhaW50czogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLCBjb25maXJtZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXHJcbiAgc291cmNlczogei5hcnJheSh6Lm9iamVjdCh7IHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKSwgdGFiSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgZmluZGluZzogei5zdHJpbmcoKS5vcHRpb25hbCgpIH0pKSxcclxuICBmaW5kaW5nczogei5hcnJheSh6LnN0cmluZygpKSwgY29udHJhZGljdGlvbnM6IHouYXJyYXkoei5zdHJpbmcoKSksIHVua25vd25zOiB6LmFycmF5KHouc3RyaW5nKCkpLCBuZXh0U3RlcHM6IHouYXJyYXkoei5zdHJpbmcoKSlcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJlc2VhcmNoU2Vzc2lvbiA9IHouaW5mZXI8dHlwZW9mIFJlc2VhcmNoU2Vzc2lvblNjaGVtYT47XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbnZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5jb25zdCBab2RQYXJzZWRUeXBlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJzdHJpbmdcIixcbiAgICBcIm5hblwiLFxuICAgIFwibnVtYmVyXCIsXG4gICAgXCJpbnRlZ2VyXCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwiYmlnaW50XCIsXG4gICAgXCJzeW1ib2xcIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJ1bmRlZmluZWRcIixcbiAgICBcIm51bGxcIixcbiAgICBcImFycmF5XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcInVua25vd25cIixcbiAgICBcInByb21pc2VcIixcbiAgICBcInZvaWRcIixcbiAgICBcIm5ldmVyXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInNldFwiLFxuXSk7XG5jb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gaXNOYU4oZGF0YSkgPyBab2RQYXJzZWRUeXBlLm5hbiA6IFpvZFBhcnNlZFR5cGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYm9vbGVhbjtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYmlnaW50O1xuICAgICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zeW1ib2w7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50aGVuICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEudGhlbiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgZGF0YS5jYXRjaCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmNhdGNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIERhdGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUub2JqZWN0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5rbm93bjtcbiAgICB9XG59O1xuXG5jb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5jb25zdCBxdW90ZWxlc3NKc29uID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDIpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoL1wiKFteXCJdKylcIjovZywgXCIkMTpcIik7XG59O1xuY2xhc3MgWm9kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZ2V0IGVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGZvcm1hdChfbWFwcGVyKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlciA9IF9tYXBwZXIgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc3N1ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgIGNvbnN0IHByb2Nlc3NFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpc3N1ZSBvZiBlcnJvci5pc3N1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3VuaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWUudW5pb25FcnJvcnMubWFwKHByb2Nlc3NFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5yZXR1cm5UeXBlRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfYXJndW1lbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLmFyZ3VtZW50c0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcnMuX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnIgPSBmaWVsZEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGlzc3VlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGlzc3VlLnBhdGhbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGkgPT09IGlzc3VlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgZXJyb3JBcnJheTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBlcnJvckFycmF5Ll9lcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgZXJyb3JBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXS5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyID0gY3VycltlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb2Nlc3NFcnJvcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzO1xuICAgIH1cbiAgICBzdGF0aWMgYXNzZXJ0KHZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgWm9kRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIFpvZEVycm9yOiAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaW5jbHVkZXNcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBpbmNsdWRlIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmluY2x1ZGVzfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gYXQgb25lIG9yIG1vcmUgcG9zaXRpb25zIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke2lzc3VlLnZhbGlkYXRpb24ucG9zaXRpb259YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcInN0YXJ0c1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBzdGFydCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLnN0YXJ0c1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcImVuZHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgZW5kIHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uZW5kc1dpdGh9XCJgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZS52YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS52YWxpZGF0aW9uICE9PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgJHtpc3N1ZS52YWxpZGF0aW9ufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX3NtYWxsOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG1vcmUgdGhhbmB9ICR7aXNzdWUubWluaW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gXCJleGFjdGx5XCIgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbGVhc3RgIDogYG92ZXJgfSAke2lzc3VlLm1pbmltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseSBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImJpZ2ludFwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmlnSW50IG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5cbmxldCBvdmVycmlkZUVycm9yTWFwID0gZXJyb3JNYXA7XG5mdW5jdGlvbiBzZXRFcnJvck1hcChtYXApIHtcbiAgICBvdmVycmlkZUVycm9yTWFwID0gbWFwO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNYXAoKSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlRXJyb3JNYXA7XG59XG5cbmNvbnN0IG1ha2VJc3N1ZSA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIHBhdGgsIGVycm9yTWFwcywgaXNzdWVEYXRhIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgZnVsbFBhdGggPSBbLi4ucGF0aCwgLi4uKGlzc3VlRGF0YS5wYXRoIHx8IFtdKV07XG4gICAgY29uc3QgZnVsbElzc3VlID0ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgIH07XG4gICAgaWYgKGlzc3VlRGF0YS5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgbWVzc2FnZTogaXNzdWVEYXRhLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IG92ZXJyaWRlTWFwID0gZ2V0RXJyb3JNYXAoKTtcbiAgICBjb25zdCBpc3N1ZSA9IG1ha2VJc3N1ZSh7XG4gICAgICAgIGlzc3VlRGF0YTogaXNzdWVEYXRhLFxuICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIC8vIGNvbnRleHR1YWwgZXJyb3IgbWFwIGlzIGZpcnN0IHByaW9yaXR5XG4gICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsIC8vIHRoZW4gc2NoZW1hLWJvdW5kIG1hcCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwLCAvLyB0aGVuIGdsb2JhbCBvdmVycmlkZSBtYXBcbiAgICAgICAgICAgIG92ZXJyaWRlTWFwID09PSBlcnJvck1hcCA/IHVuZGVmaW5lZCA6IGVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmNsYXNzIFBhcnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwidmFsaWRcIjtcbiAgICB9XG4gICAgZGlydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcInZhbGlkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJkaXJ0eVwiO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiYWJvcnRlZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgYXJyYXlWYWx1ZS5wdXNoKHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogYXJyYXlWYWx1ZSB9O1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAoa2V5LnZhbHVlICE9PSBcIl9fcHJvdG9fX1wiICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiB2YWx1ZS52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCBwYWlyLmFsd2F5c1NldCkpIHtcbiAgICAgICAgICAgICAgICBmaW5hbE9iamVjdFtrZXkudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE9iamVjdCB9O1xuICAgIH1cbn1cbmNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5jb25zdCBESVJUWSA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlIH0pO1xuY29uc3QgT0sgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZSB9KTtcbmNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5jb25zdCBpc0RpcnR5ID0gKHgpID0+IHguc3RhdHVzID09PSBcImRpcnR5XCI7XG5jb25zdCBpc1ZhbGlkID0gKHgpID0+IHguc3RhdHVzID09PSBcInZhbGlkXCI7XG5jb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxudmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcblxudmFyIF9ab2RFbnVtX2NhY2hlLCBfWm9kTmF0aXZlRW51bV9jYWNoZTtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2tleSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIC4uLnRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgdGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGF0aDtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmIChpc3MuY29kZSA9PT0gXCJpbnZhbGlkX2VudW1fdmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgPyBtZXNzYWdlIDogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IChfYSA9IG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwID8gbWVzc2FnZSA6IHJlcXVpcmVkX2Vycm9yKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAoX2IgPSBtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCA/IG1lc3NhZ2UgOiBpbnZhbGlkX3R5cGVfZXJyb3IpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IGVycm9yTWFwOiBjdXN0b21NYXAsIGRlc2NyaXB0aW9uIH07XG59XG5jbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5hc3luYykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuZXJyb3JNYXAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5wYXRoKSB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgXCJ+dmFsaWRhdGVcIihkYXRhKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6ICEhdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKChfYiA9IChfYSA9IGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci5tZXNzYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdClcbiAgICAgICAgICAgID8gbWF5YmVBc3luY1Jlc3VsdFxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eClcbiAgICAgICAgICAgICAgICAgICAgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAxLFxuICAgICAgICAgICAgdmVuZG9yOiBcInpvZFwiLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChkYXRhKSA9PiB0aGlzW1wifnZhbGlkYXRlXCJdKGRhdGEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gWm9kUHJvbWlzZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgb3Iob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBab2RVbmlvbi5jcmVhdGUoW3RoaXMsIG9wdGlvbl0sIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJyYW5kZWQoe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkLFxuICAgICAgICAgICAgdHlwZTogdGhpcyxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGRlZikge1xuICAgICAgICBjb25zdCBjYXRjaFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBjYXRjaFZhbHVlOiBjYXRjaFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBUaGlzID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBUaGlzKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFpvZFBpcGVsaW5lLmNyZWF0ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFJlYWRvbmx5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCBjdWlkMlJlZ2V4ID0gL15bMC05YS16XSskLztcbmNvbnN0IHVsaWRSZWdleCA9IC9eWzAtOUEtSEpLTU5QLVRWLVpdezI2fSQvaTtcbi8vIGNvbnN0IHV1aWRSZWdleCA9XG4vLyAgIC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvaTtcbmNvbnN0IG5hbm9pZFJlZ2V4ID0gL15bYS16MC05Xy1dezIxfSQvaTtcbmNvbnN0IGp3dFJlZ2V4ID0gL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLztcbmNvbnN0IGR1cmF0aW9uUmVnZXggPSAvXlstK10/UCg/ISQpKD86KD86Wy0rXT9cXGQrWSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtZJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzooPzpbLStdP1xcZCtXKXwoPzpbLStdP1xcZCtbLixdXFxkK1ckKSk/KD86KD86Wy0rXT9cXGQrRCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtEJCkpPyg/OlQoPz1bXFxkKy1dKSg/Oig/OlstK10/XFxkK0gpfCg/OlstK10/XFxkK1suLF1cXGQrSCQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86Wy0rXT9cXGQrKD86Wy4sXVxcZCspP1MpPyk/PyQvO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy9vbGQgZW1haWwgcmVnZXhcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKD8hLSkoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezEsfSlbXi08PigpW1xcXS4sOzpcXHNAXCJdJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbKCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFxdKXwoXFxbSVB2NjooKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpXFxdKXwoW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dKltBLVphLXowLTldKSooXFwuW0EtWmEtel17Mix9KSspKSQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtekEtWjAtOVxcLlxcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcL1xcPVxcP1xcXlxcX1xcYFxce1xcfFxcfVxcflxcLV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXig/IVxcLikoPyEuKlxcLlxcLikoW0EtWjAtOV8nK1xcLVxcLl0qKVtBLVowLTlfKy1dQChbQS1aMC05XVtBLVowLTlcXC1dKlxcLikrW0EtWl17Mix9JC9pO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtejAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16MC05LV0rKD86XFwuW2EtejAtOVxcLV0rKSokL2k7XG4vLyBmcm9tIGh0dHBzOi8vdGhla2V2aW5zY290dC5jb20vZW1vamlzLWluLWphdmFzY3JpcHQvI3dyaXRpbmctYS1yZWd1bGFyLWV4cHJlc3Npb25cbmNvbnN0IF9lbW9qaVJlZ2V4ID0gYF4oXFxcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfXxcXFxccHtFbW9qaV9Db21wb25lbnR9KSskYDtcbmxldCBlbW9qaVJlZ2V4O1xuLy8gZmFzdGVyLCBzaW1wbGVyLCBzYWZlclxuY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkkLztcbmNvbnN0IGlwdjRDaWRyUmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLygzWzAtMl18WzEyXT9bMC05XSkkLztcbi8vIGNvbnN0IGlwdjZSZWdleCA9XG4vLyAvXigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSkkLztcbmNvbnN0IGlwdjZSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKSQvO1xuY29uc3QgaXB2NkNpZHJSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKVxcLygxMlswLThdfDFbMDFdWzAtOV18WzEtOV0/WzAtOV0pJC87XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODYwMzkyL2RldGVybWluZS1pZi1zdHJpbmctaXMtaW4tYmFzZTY0LXVzaW5nLWphdmFzY3JpcHRcbmNvbnN0IGJhc2U2NFJlZ2V4ID0gL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvO1xuLy8gaHR0cHM6Ly9iYXNlNjQuZ3VydS9zdGFuZGFyZHMvYmFzZTY0dXJsXG5jb25zdCBiYXNlNjR1cmxSZWdleCA9IC9eKFswLTlhLXpBLVotX117NH0pKigoWzAtOWEtekEtWi1fXXsyfSg9PSk/KXwoWzAtOWEtekEtWi1fXXszfSg9KT8pKT8kLztcbi8vIHNpbXBsZVxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9YDtcbi8vIG5vIGxlYXAgeWVhciB2YWxpZGF0aW9uXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tKCgwWzEzNTc4XXwxMHwxMiktMzF8KDBbMTMtOV18MVswLTJdKS0zMHwoMFsxLTldfDFbMC0yXSktKDBbMS05XXwxXFxcXGR8MlxcXFxkKSlgO1xuLy8gd2l0aCBsZWFwIHllYXIgdmFsaWRhdGlvblxuY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYCgoXFxcXGRcXFxcZFsyNDY4XVswNDhdfFxcXFxkXFxcXGRbMTM1NzldWzI2XXxcXFxcZFxcXFxkMFs0OF18WzAyNDY4XVswNDhdMDB8WzEzNTc5XVsyNl0wMCktMDItMjl8XFxcXGR7NH0tKCgwWzEzNTc4XXwxWzAyXSktKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pfCgwWzQ2OV18MTEpLSgwWzEtOV18WzEyXVxcXFxkfDMwKXwoMDIpLSgwWzEtOV18MVxcXFxkfDJbMC04XSkpKWA7XG5jb25zdCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtkYXRlUmVnZXhTb3VyY2V9JGApO1xuZnVuY3Rpb24gdGltZVJlZ2V4U291cmNlKGFyZ3MpIHtcbiAgICAvLyBsZXQgcmVnZXggPSBgXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1gO1xuICAgIGxldCByZWdleCA9IGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZDpbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgcmVnZXggPSBgJHtyZWdleH1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3MucHJlY2lzaW9uID09IG51bGwpIHtcbiAgICAgICAgcmVnZXggPSBgJHtyZWdleH0oXFxcXC5cXFxcZCspP2A7XG4gICAgfVxuICAgIHJldHVybiByZWdleDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmZ1bmN0aW9uIGRhdGV0aW1lUmVnZXgoYXJncykge1xuICAgIGxldCByZWdleCA9IGAke2RhdGVSZWdleFNvdXJjZX1UJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9YDtcbiAgICBjb25zdCBvcHRzID0gW107XG4gICAgb3B0cy5wdXNoKGFyZ3MubG9jYWwgPyBgWj9gIDogYFpgKTtcbiAgICBpZiAoYXJncy5vZmZzZXQpXG4gICAgICAgIG9wdHMucHVzaChgKFsrLV1cXFxcZHsyfTo/XFxcXGR7Mn0pYCk7XG4gICAgcmVnZXggPSBgJHtyZWdleH0oJHtvcHRzLmpvaW4oXCJ8XCIpfSlgO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVAoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NFJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NlJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSldUKGp3dCwgYWxnKSB7XG4gICAgaWYgKCFqd3RSZWdleC50ZXN0KGp3dCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbaGVhZGVyXSA9IGp3dC5zcGxpdChcIi5cIik7XG4gICAgICAgIC8vIENvbnZlcnQgYmFzZTY0dXJsIHRvIGJhc2U2NFxuICAgICAgICBjb25zdCBiYXNlNjQgPSBoZWFkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csIFwiK1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgXCIvXCIpXG4gICAgICAgICAgICAucGFkRW5kKGhlYWRlci5sZW5ndGggKyAoKDQgLSAoaGVhZGVyLmxlbmd0aCAlIDQpKSAlIDQpLCBcIj1cIik7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBKU09OLnBhcnNlKGF0b2IoYmFzZTY0KSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjb2RlZCAhPT0gXCJvYmplY3RcIiB8fCBkZWNvZGVkID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWRlY29kZWQudHlwIHx8ICFkZWNvZGVkLmFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGFsZyAmJiBkZWNvZGVkLmFsZyAhPT0gYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ2lkcihpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NkNpZHJSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzdWx0ID0gY2hlY2sucmVnZXgudGVzdChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidHJpbVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpbmNsdWRlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmluY2x1ZGVzKGNoZWNrLnZhbHVlLCBjaGVjay5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBpbmNsdWRlczogY2hlY2sudmFsdWUsIHBvc2l0aW9uOiBjaGVjay5wb3NpdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9Mb3dlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvVXBwZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJzdGFydHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuc3RhcnRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBzdGFydHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW5kc1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5lbmRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBlbmRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGV0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGVSZWdleDtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZHVyYXRpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICghZHVyYXRpb25SZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImlwXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRJUChpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJqd3RcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEpXVChpbnB1dC5kYXRhLCBjaGVjay5hbGcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiand0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjaWRyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDaWRyKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY2lkclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NHVybFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjR1cmxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9yZWdleChyZWdleCwgdmFsaWRhdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmVtZW50KChkYXRhKSA9PiByZWdleC50ZXN0KGRhdGEpLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLFxuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtYWlsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbWFpbFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVybChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXJsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgZW1vamkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtb2ppXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXVpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXVpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIG5hbm9pZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwibmFub2lkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQyKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkMlwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVsaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVsaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImJhc2U2NFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NHVybChtZXNzYWdlKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgand0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJqd3RcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBpcChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiaXBcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBjaWRyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjaWRyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgZGF0ZXRpbWUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uKSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub2Zmc2V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsOiAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImRhdGVcIiwgbWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uKSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGR1cmF0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkdXJhdGlvblwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbmNsdWRlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcG9zaXRpb246IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFcXVpdmFsZW50IHRvIGAubWluKDEpYFxuICAgICAqL1xuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSk7XG4gICAgfVxuICAgIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0cmltXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b0xvd2VyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvTG93ZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1VwcGVyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvVXBwZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRlXCIpO1xuICAgIH1cbiAgICBnZXQgaXNUaW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0R1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImR1cmF0aW9uXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbWFpbFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVJMKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVybFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1vamkoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1vamlcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzTkFOT0lEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcIm5hbm9pZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEMigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkMlwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVUxJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1bGlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNJUCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpcFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ0lEUigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjaWRyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0XCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjR1cmwoKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IHBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IHBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYWZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBnZXQgaXNJbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaW50XCIgfHxcbiAgICAgICAgICAgIChjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIiAmJiB1dGlsLmlzSW50ZWdlcihjaC52YWx1ZSkpKTtcbiAgICB9XG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbCwgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJmaW5pdGVcIiB8fFxuICAgICAgICAgICAgICAgIGNoLmtpbmQgPT09IFwiaW50XCIgfHxcbiAgICAgICAgICAgICAgICBjaC5raW5kID09PSBcIm11bHRpcGxlT2ZcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobWluKSAmJiBOdW1iZXIuaXNGaW5pdGUobWF4KTtcbiAgICB9XG59XG5ab2ROdW1iZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXIsXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQmlnSW50IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gQmlnSW50KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5iaWdpbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEgJSBjaGVjay52YWx1ZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2dldEludmFsaWRJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJpZ2ludCxcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RCaWdJbnQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQmlnSW50LFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQm9vbGVhbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJvb2xlYW4oaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5ib29sZWFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQm9vbGVhbi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCb29sZWFuKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZERhdGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBuZXcgRGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZGF0ZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihpbnB1dC5kYXRhLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoaW5wdXQuZGF0YS5nZXRUaW1lKCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5EYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heERhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4RGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluRGF0ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluICE9IG51bGwgPyBuZXcgRGF0ZShtaW4pIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0IG1heERhdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heCAhPSBudWxsID8gbmV3IERhdGUobWF4KSA6IG51bGw7XG4gICAgfVxufVxuWm9kRGF0ZS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGF0ZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFN5bWJvbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN5bWJvbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kU3ltYm9sLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN5bWJvbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3ltYm9sLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5kZWZpbmVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmRlZmluZWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5kZWZpbmVkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udWxsLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZE51bGwuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEFueSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyB0byBwcmV2ZW50IGluc3RhbmNlcyBvZiBvdGhlciBjbGFzc2VzIGZyb20gZXh0ZW5kaW5nIFpvZEFueS4gdGhpcyBjYXVzZXMgaXNzdWVzIHdpdGggY2F0Y2hhbGwgaW4gWm9kT2JqZWN0LlxuICAgICAgICB0aGlzLl9hbnkgPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEFueS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBbnkoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFueSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVua25vd24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcmVxdWlyZWRcbiAgICAgICAgdGhpcy5fdW5rbm93biA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5rbm93bi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmtub3duKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmtub3duLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTmV2ZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uZXZlcixcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbn1cblpvZE5ldmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5ldmVyKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFZvaWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudm9pZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RWb2lkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFZvaWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFZvaWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBcnJheSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCwgc3RhdHVzIH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYuZXhhY3RMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvb1NtYWxsID0gY3R4LmRhdGEubGVuZ3RoIDwgZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0b29CaWcgPyBab2RJc3N1ZUNvZGUudG9vX2JpZyA6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06ICh0b29TbWFsbCA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06ICh0b29CaWcgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWluTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgZGVmLm1pbkxlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhMZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPiBkZWYubWF4TGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4TGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VBc3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgICAgIH0pKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbLi4uY3R4LmRhdGFdLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgdHlwZTogZGVlcFBhcnRpYWxpZnkoc2NoZW1hLmVsZW1lbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZShkZWVwUGFydGlhbGlmeShzY2hlbWEudW53cmFwKCkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kVHVwbGUpIHtcbiAgICAgICAgcmV0dXJuIFpvZFR1cGxlLmNyZWF0ZShzY2hlbWEuaXRlbXMubWFwKChpdGVtKSA9PiBkZWVwUGFydGlhbGlmeShpdGVtKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5jbGFzcyBab2RPYmplY3QgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIEluIG1vc3QgY2FzZXMsIHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIHVua25vd24gcHJvcGVydGllcyBhcmUgbm93IHNpbGVudGx5IHN0cmlwcGVkLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBwYXNzIHRocm91Z2ggdW5rbm93biBwcm9wZXJ0aWVzLCB1c2UgYC5wYXNzdGhyb3VnaCgpYCBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub25zdHJpY3QgPSB0aGlzLnBhc3N0aHJvdWdoO1xuICAgICAgICAvLyBleHRlbmQ8XG4gICAgICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGUsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgICAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+LFxuICAgICAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgICAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT5cbiAgICAgICAgLy8gPihcbiAgICAgICAgLy8gICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgICAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgQXVnbWVudGF0aW9uPixcbiAgICAgICAgLy8gICBVbmtub3duS2V5cyxcbiAgICAgICAgLy8gICBDYXRjaGFsbCxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQsXG4gICAgICAgIC8vICAgTmV3SW5wdXRcbiAgICAgICAgLy8gPiB7XG4gICAgICAgIC8vICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAvLyAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAvLyAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgIC8vICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICB9KSBhcyBhbnk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9jYWNoZWQgPSB7IHNoYXBlLCBrZXlzIH0pO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmXG4gICAgICAgICAgICB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3luY1BhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IHBhaXIuYWx3YXlzU2V0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNQYWlycztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN5bmNQYWlycykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgIH1cbiAgICBzdHJpY3QobWVzc2FnZSkge1xuICAgICAgICBlcnJvclV0aWwuZXJyVG9PYmo7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcDogKGlzc3VlLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFcnJvciA9IChfYyA9IChfYiA9IChfYSA9IHRoaXMuX2RlZikuZXJyb3JNYXApID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBpc3N1ZSwgY3R4KS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBjdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwidW5yZWNvZ25pemVkX2tleXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAoX2QgPSBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkubWVzc2FnZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RyaXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXNzdGhyb3VnaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwicGFzc3Rocm91Z2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IEF1Z21lbnRGYWN0b3J5ID1cbiAgICAvLyAgIDxEZWYgZXh0ZW5kcyBab2RPYmplY3REZWY+KGRlZjogRGVmKSA9PlxuICAgIC8vICAgPEF1Z21lbnRhdGlvbiBleHRlbmRzIFpvZFJhd1NoYXBlPihcbiAgICAvLyAgICAgYXVnbWVudGF0aW9uOiBBdWdtZW50YXRpb25cbiAgICAvLyAgICk6IFpvZE9iamVjdDxcbiAgICAvLyAgICAgZXh0ZW5kU2hhcGU8UmV0dXJuVHlwZTxEZWZbXCJzaGFwZVwiXT4sIEF1Z21lbnRhdGlvbj4sXG4gICAgLy8gICAgIERlZltcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgICBEZWZbXCJjYXRjaGFsbFwiXVxuICAgIC8vICAgPiA9PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgICAuLi5kZWYsXG4gICAgLy8gICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgLy8gICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAvLyAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSkgYXMgYW55O1xuICAgIC8vICAgfTtcbiAgICBleHRlbmQoYXVnbWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpb3IgdG8gem9kQDEuMC4xMiB0aGVyZSB3YXMgYSBidWcgaW4gdGhlXG4gICAgICogaW5mZXJyZWQgdHlwZSBvZiBtZXJnZWQgb2JqZWN0cy4gUGxlYXNlXG4gICAgICogdXBncmFkZSBpZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBpc3N1ZXMuXG4gICAgICovXG4gICAgbWVyZ2UobWVyZ2luZykge1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4ubWVyZ2luZy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgLy8gbWVyZ2U8XG4gICAgLy8gICBJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdCxcbiAgICAvLyAgIEF1Z21lbnRhdGlvbiBleHRlbmRzIEluY29taW5nW1wic2hhcGVcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBPdXRwdXRcbiAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9LFxuICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB7XG4gICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgSW5wdXRcbiAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH1cbiAgICAvLyA+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0LFxuICAgIC8vICAgTmV3SW5wdXRcbiAgICAvLyA+IHtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKG1hc2spLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hc2tba2V5XSAmJiB0aGlzLnNoYXBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZGVlcFBhcnRpYWwoKSB7XG4gICAgICAgIHJldHVybiBkZWVwUGFydGlhbGlmeSh0aGlzKTtcbiAgICB9XG4gICAgcGFydGlhbChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWlyZWQobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGtleW9mKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlWm9kRW51bSh1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpO1xuICAgIH1cbn1cblpvZE9iamVjdC5jcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LnN0cmljdENyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmljdFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kT2JqZWN0LmxhenljcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2RlZi5vcHRpb25zO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBmaXJzdCBpc3N1ZS1mcmVlIHZhbGlkYXRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpc3N1ZXMgZnJvbSBkaXJ0eSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5yZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiBuZXcgWm9kRXJyb3IocmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLm1hcChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhd2FpdCBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjdHg6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiICYmICFkaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eSA9IHsgcmVzdWx0LCBjdHg6IGNoaWxkQ3R4IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXMucHVzaChjaGlsZEN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLmRpcnR5LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlydHkucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSBpc3N1ZXMubWFwKChpc3N1ZXMpID0+IG5ldyBab2RFcnJvcihpc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbn1cblpvZFVuaW9uLmNyZWF0ZSA9ICh0eXBlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmlvbih7XG4gICAgICAgIG9wdGlvbnM6IHR5cGVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGdldERpc2NyaW1pbmF0b3IgPSAodHlwZSkgPT4ge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGF6eSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNjaGVtYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFZmZlY3RzKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuaW5uZXJUeXBlKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gW3R5cGUudmFsdWVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRW51bSkge1xuICAgICAgICByZXR1cm4gdHlwZS5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTmF0aXZlRW51bSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXModHlwZS5lbnVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZERlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWRdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbCkge1xuICAgICAgICByZXR1cm4gW251bGxdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEJyYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RSZWFkb25seSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZENhdGNoKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGRpc2NyaW1pbmF0b3IgdmFsdWUgZm9yIGtleSBcXGAke2Rpc2NyaW1pbmF0b3J9XFxgIGNvdWxkIG5vdCBiZSBleHRyYWN0ZWQgZnJvbSBhbGwgc2NoZW1hIG9wdGlvbnNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGlzY3JpbWluYXRvclZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXNjcmltaW5hdG9yIHByb3BlcnR5ICR7U3RyaW5nKGRpc2NyaW1pbmF0b3IpfSBoYXMgZHVwbGljYXRlIHZhbHVlICR7U3RyaW5nKHZhbHVlKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc01hcC5zZXQodmFsdWUsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGlzY3JpbWluYXRlZFVuaW9uKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgICAgICAgICAgZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zTWFwLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtZXJnZVZhbHVlcyhhLCBiKSB7XG4gICAgY29uc3QgYVR5cGUgPSBnZXRQYXJzZWRUeXBlKGEpO1xuICAgIGNvbnN0IGJUeXBlID0gZ2V0UGFyc2VkVHlwZShiKTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGJLZXlzID0gdXRpbC5vYmplY3RLZXlzKGIpO1xuICAgICAgICBjb25zdCBzaGFyZWRLZXlzID0gdXRpbFxuICAgICAgICAgICAgLm9iamVjdEtleXMoYSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gYktleXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHsgLi4uYSwgLi4uYiB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFyZWRLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gc2hhcmVkVmFsdWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3T2JqIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUEgPSBhW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CID0gYltpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGl0ZW1BLCBpdGVtQik7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNoYXJlZFZhbHVlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdBcnJheSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmXG4gICAgICAgIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgK2EgPT09ICtiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICB9XG59XG5jbGFzcyBab2RJbnRlcnNlY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgaGFuZGxlUGFyc2VkID0gKHBhcnNlZExlZnQsIHBhcnNlZFJpZ2h0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBYm9ydGVkKHBhcnNlZExlZnQpIHx8IGlzQWJvcnRlZChwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlVmFsdWVzKHBhcnNlZExlZnQudmFsdWUsIHBhcnNlZFJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghbWVyZ2VkLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RpcnR5KHBhcnNlZExlZnQpIHx8IGlzRGlydHkocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IG1lcmdlZC5kYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYucmlnaHQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSkudGhlbigoW2xlZnQsIHJpZ2h0XSkgPT4gaGFuZGxlUGFyc2VkKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUGFyc2VkKHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSksIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZEludGVyc2VjdGlvbi5jcmVhdGUgPSAobGVmdCwgcmlnaHQsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEludGVyc2VjdGlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFR1cGxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3QgPSB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgaWYgKCFyZXN0ICYmIGN0eC5kYXRhLmxlbmd0aCA+IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLmN0eC5kYXRhXVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFNldCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc2V0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnNldCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGRlZi5taW5TaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA8IGRlZi5taW5TaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5TaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pblNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heFNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplID4gZGVmLm1heFNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhTaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heFNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZVNldChlbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNldC5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHBhcnNlZFNldCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmN0eC5kYXRhLnZhbHVlcygpXS5tYXAoKGl0ZW0sIGkpID0+IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSkpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGVsZW1lbnRzKS50aGVuKChlbGVtZW50cykgPT4gZmluYWxpemVTZXQoZWxlbWVudHMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZVNldChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWluKG1pblNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogbWluU2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4U2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhTaXplOiB7IHZhbHVlOiBtYXhTaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpemUoc2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oc2l6ZSwgbWVzc2FnZSkubWF4KHNpemUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RTZXQuY3JlYXRlID0gKHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1pblNpemU6IG51bGwsXG4gICAgICAgIG1heFNpemU6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU2V0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c0Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZVJldHVybnNJc3N1ZShyZXR1cm5zLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmV0dXJucyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXJyb3JNYXAoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IG1lLl9kZWYuYXJnc1xuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IG1lLl9kZWYucmV0dXJucy5fZGVmLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQXN5bmMocmVzdWx0LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IG1lLl9kZWYuYXJncy5zYWZlUGFyc2UoYXJncywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZEFyZ3Muc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VBcmdzSXNzdWUoYXJncywgcGFyc2VkQXJncy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gbWUuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzXG4gICAgICAgICAgICAgICAgPyBhcmdzXG4gICAgICAgICAgICAgICAgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB0aGlzLl9kZWYudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWU7XG4gICAgfVxufVxuWm9kTGl0ZXJhbC5jcmVhdGUgPSAodmFsdWUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGl0ZXJhbCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMaXRlcmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlWm9kRW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kRW51bSh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5jbGFzcyBab2RFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9ab2RFbnVtX2NhY2hlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ab2RFbnVtX2NhY2hlLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1pvZEVudW1fY2FjaGUsIG5ldyBTZXQodGhpcy5fZGVmLnZhbHVlcyksIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZEVudW1fY2FjaGUsIFwiZlwiKS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IEVudW0oKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBleHRyYWN0KHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV4Y2x1ZGUodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhvcHQpKSwge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5fWm9kRW51bV9jYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5jbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9ab2ROYXRpdmVFbnVtX2NhY2hlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRW51bVZhbHVlcyA9IHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcgJiZcbiAgICAgICAgICAgIGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZE5hdGl2ZUVudW1fY2FjaGUsIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWm9kTmF0aXZlRW51bV9jYWNoZSwgbmV3IFNldCh1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKSksIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZE5hdGl2ZUVudW1fY2FjaGUsIFwiZlwiKS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxufVxuX1pvZE5hdGl2ZUVudW1fY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuWm9kTmF0aXZlRW51bS5jcmVhdGUgPSAodmFsdWVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hdGl2ZUVudW0oe1xuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYXRpdmVFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicHJlcHJvY2Vzc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBlZmZlY3QudHJhbnNmb3JtKGN0eC5kYXRhLCBjaGVja0N0eCk7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2Vzc2VkKS50aGVuKGFzeW5jIChwcm9jZXNzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInJlZmluZW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZVJlZmluZW1lbnQgPSAoYWNjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnJlZmluZW1lbnQoYWNjLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyByZWZpbmVtZW50IGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoaW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzeW5jaHJvbm91cyB0cmFuc2Zvcm0gZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChiYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpKS50aGVuKChyZXN1bHQpID0+ICh7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGVmZmVjdCk7XG4gICAgfVxufVxuWm9kRWZmZWN0cy5jcmVhdGUgPSAoc2NoZW1hLCBlZmZlY3QsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzID0gKHByZXByb2Nlc3MsIHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJwcmVwcm9jZXNzXCIsIHRyYW5zZm9ybTogcHJlcHJvY2VzcyB9LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RPcHRpb25hbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RPcHRpb25hbC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPcHRpb25hbCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE51bGxhYmxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kTnVsbGFibGUuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbGFibGUoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbGFibGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REZWZhdWx0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBsZXQgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZERlZmF1bHQuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiBwYXJhbXMuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHBhcmFtcy5kZWZhdWx0XG4gICAgICAgICAgICA6ICgpID0+IHBhcmFtcy5kZWZhdWx0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQ2F0Y2ggZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIC8vIG5ld0N0eCBpcyB1c2VkIHRvIG5vdCBjb2xsZWN0IGlzc3VlcyBmcm9tIGlubmVyIHR5cGVzIGluIGN0eFxuICAgICAgICBjb25zdCBuZXdDdHggPSB7XG4gICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IG5ld0N0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgICAgLi4ubmV3Q3R4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RDYXRjaC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgY2F0Y2hWYWx1ZTogdHlwZW9mIHBhcmFtcy5jYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmNhdGNoIDogKCkgPT4gcGFyYW1zLmNhdGNoLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuY2xhc3MgWm9kQnJhbmRlZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxufVxuY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFpvZFJlYWRvbmx5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgY29uc3QgZnJlZXplID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IE9iamVjdC5mcmVlemUoZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzQXN5bmMocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQudGhlbigoZGF0YSkgPT4gZnJlZXplKGRhdGEpKVxuICAgICAgICAgICAgOiBmcmVlemUocmVzdWx0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RSZWFkb25seS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RSZWFkb25seSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWFkb25seSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICB6LmN1c3RvbSAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIGNsZWFuUGFyYW1zKHBhcmFtcywgZGF0YSkge1xuICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBwYXJhbXMoZGF0YSlcbiAgICAgICAgOiB0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHsgbWVzc2FnZTogcGFyYW1zIH1cbiAgICAgICAgICAgIDogcGFyYW1zO1xuICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgcmV0dXJuIHAyO1xufVxuZnVuY3Rpb24gY3VzdG9tKGNoZWNrLCBfcGFyYW1zID0ge30sIFxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFBhc3MgYGZhdGFsYCBpbnRvIHRoZSBwYXJhbXMgb2JqZWN0IGluc3RlYWQ6XG4gKlxuICogYGBgdHNcbiAqIHouc3RyaW5nKCkuY3VzdG9tKCh2YWwpID0+IHZhbC5sZW5ndGggPiA1LCB7IGZhdGFsOiBmYWxzZSB9KVxuICogYGBgXG4gKlxuICovXG5mYXRhbCkge1xuICAgIGlmIChjaGVjaylcbiAgICAgICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKS5zdXBlclJlZmluZSgoZGF0YSwgY3R4KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgciA9IGNoZWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNsZWFuUGFyYW1zKF9wYXJhbXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gKF9iID0gKF9hID0gcGFyYW1zLmZhdGFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYXRhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gKF9iID0gKF9hID0gcGFyYW1zLmZhdGFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYXRhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59XG5jb25zdCBsYXRlID0ge1xuICAgIG9iamVjdDogWm9kT2JqZWN0LmxhenljcmVhdGUsXG59O1xudmFyIFpvZEZpcnN0UGFydHlUeXBlS2luZDtcbihmdW5jdGlvbiAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kKSB7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3RyaW5nXCJdID0gXCJab2RTdHJpbmdcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdW1iZXJcIl0gPSBcIlpvZE51bWJlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hTlwiXSA9IFwiWm9kTmFOXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQmlnSW50XCJdID0gXCJab2RCaWdJbnRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCb29sZWFuXCJdID0gXCJab2RCb29sZWFuXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGF0ZVwiXSA9IFwiWm9kRGF0ZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN5bWJvbFwiXSA9IFwiWm9kU3ltYm9sXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5kZWZpbmVkXCJdID0gXCJab2RVbmRlZmluZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsXCJdID0gXCJab2ROdWxsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQW55XCJdID0gXCJab2RBbnlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmtub3duXCJdID0gXCJab2RVbmtub3duXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmV2ZXJcIl0gPSBcIlpvZE5ldmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVm9pZFwiXSA9IFwiWm9kVm9pZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFycmF5XCJdID0gXCJab2RBcnJheVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9iamVjdFwiXSA9IFwiWm9kT2JqZWN0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5pb25cIl0gPSBcIlpvZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCJdID0gXCJab2REaXNjcmltaW5hdGVkVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RJbnRlcnNlY3Rpb25cIl0gPSBcIlpvZEludGVyc2VjdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFR1cGxlXCJdID0gXCJab2RUdXBsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlY29yZFwiXSA9IFwiWm9kUmVjb3JkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTWFwXCJdID0gXCJab2RNYXBcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTZXRcIl0gPSBcIlpvZFNldFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEZ1bmN0aW9uXCJdID0gXCJab2RGdW5jdGlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExhenlcIl0gPSBcIlpvZExhenlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMaXRlcmFsXCJdID0gXCJab2RMaXRlcmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRW51bVwiXSA9IFwiWm9kRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVmZmVjdHNcIl0gPSBcIlpvZEVmZmVjdHNcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYXRpdmVFbnVtXCJdID0gXCJab2ROYXRpdmVFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT3B0aW9uYWxcIl0gPSBcIlpvZE9wdGlvbmFsXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbGFibGVcIl0gPSBcIlpvZE51bGxhYmxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRGVmYXVsdFwiXSA9IFwiWm9kRGVmYXVsdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZENhdGNoXCJdID0gXCJab2RDYXRjaFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFByb21pc2VcIl0gPSBcIlpvZFByb21pc2VcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCcmFuZGVkXCJdID0gXCJab2RCcmFuZGVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUGlwZWxpbmVcIl0gPSBcIlpvZFBpcGVsaW5lXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVhZG9ubHlcIl0gPSBcIlpvZFJlYWRvbmx5XCI7XG59KShab2RGaXJzdFBhcnR5VHlwZUtpbmQgfHwgKFpvZEZpcnN0UGFydHlUeXBlS2luZCA9IHt9KSk7XG5jb25zdCBpbnN0YW5jZU9mVHlwZSA9IChcbi8vIGNvbnN0IGluc3RhbmNlT2ZUeXBlID0gPFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuY2xzLCBwYXJhbXMgPSB7XG4gICAgbWVzc2FnZTogYElucHV0IG5vdCBpbnN0YW5jZSBvZiAke2Nscy5uYW1lfWAsXG59KSA9PiBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG5jb25zdCBzdHJpbmdUeXBlID0gWm9kU3RyaW5nLmNyZWF0ZTtcbmNvbnN0IG51bWJlclR5cGUgPSBab2ROdW1iZXIuY3JlYXRlO1xuY29uc3QgbmFuVHlwZSA9IFpvZE5hTi5jcmVhdGU7XG5jb25zdCBiaWdJbnRUeXBlID0gWm9kQmlnSW50LmNyZWF0ZTtcbmNvbnN0IGJvb2xlYW5UeXBlID0gWm9kQm9vbGVhbi5jcmVhdGU7XG5jb25zdCBkYXRlVHlwZSA9IFpvZERhdGUuY3JlYXRlO1xuY29uc3Qgc3ltYm9sVHlwZSA9IFpvZFN5bWJvbC5jcmVhdGU7XG5jb25zdCB1bmRlZmluZWRUeXBlID0gWm9kVW5kZWZpbmVkLmNyZWF0ZTtcbmNvbnN0IG51bGxUeXBlID0gWm9kTnVsbC5jcmVhdGU7XG5jb25zdCBhbnlUeXBlID0gWm9kQW55LmNyZWF0ZTtcbmNvbnN0IHVua25vd25UeXBlID0gWm9kVW5rbm93bi5jcmVhdGU7XG5jb25zdCBuZXZlclR5cGUgPSBab2ROZXZlci5jcmVhdGU7XG5jb25zdCB2b2lkVHlwZSA9IFpvZFZvaWQuY3JlYXRlO1xuY29uc3QgYXJyYXlUeXBlID0gWm9kQXJyYXkuY3JlYXRlO1xuY29uc3Qgb2JqZWN0VHlwZSA9IFpvZE9iamVjdC5jcmVhdGU7XG5jb25zdCBzdHJpY3RPYmplY3RUeXBlID0gWm9kT2JqZWN0LnN0cmljdENyZWF0ZTtcbmNvbnN0IHVuaW9uVHlwZSA9IFpvZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgPSBab2REaXNjcmltaW5hdGVkVW5pb24uY3JlYXRlO1xuY29uc3QgaW50ZXJzZWN0aW9uVHlwZSA9IFpvZEludGVyc2VjdGlvbi5jcmVhdGU7XG5jb25zdCB0dXBsZVR5cGUgPSBab2RUdXBsZS5jcmVhdGU7XG5jb25zdCByZWNvcmRUeXBlID0gWm9kUmVjb3JkLmNyZWF0ZTtcbmNvbnN0IG1hcFR5cGUgPSBab2RNYXAuY3JlYXRlO1xuY29uc3Qgc2V0VHlwZSA9IFpvZFNldC5jcmVhdGU7XG5jb25zdCBmdW5jdGlvblR5cGUgPSBab2RGdW5jdGlvbi5jcmVhdGU7XG5jb25zdCBsYXp5VHlwZSA9IFpvZExhenkuY3JlYXRlO1xuY29uc3QgbGl0ZXJhbFR5cGUgPSBab2RMaXRlcmFsLmNyZWF0ZTtcbmNvbnN0IGVudW1UeXBlID0gWm9kRW51bS5jcmVhdGU7XG5jb25zdCBuYXRpdmVFbnVtVHlwZSA9IFpvZE5hdGl2ZUVudW0uY3JlYXRlO1xuY29uc3QgcHJvbWlzZVR5cGUgPSBab2RQcm9taXNlLmNyZWF0ZTtcbmNvbnN0IGVmZmVjdHNUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGU7XG5jb25zdCBvcHRpb25hbFR5cGUgPSBab2RPcHRpb25hbC5jcmVhdGU7XG5jb25zdCBudWxsYWJsZVR5cGUgPSBab2ROdWxsYWJsZS5jcmVhdGU7XG5jb25zdCBwcmVwcm9jZXNzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3M7XG5jb25zdCBwaXBlbGluZVR5cGUgPSBab2RQaXBlbGluZS5jcmVhdGU7XG5jb25zdCBvc3RyaW5nID0gKCkgPT4gc3RyaW5nVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvbnVtYmVyID0gKCkgPT4gbnVtYmVyVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBvYm9vbGVhbiA9ICgpID0+IGJvb2xlYW5UeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IGNvZXJjZSA9IHtcbiAgICBzdHJpbmc6ICgoYXJnKSA9PiBab2RTdHJpbmcuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIG51bWJlcjogKChhcmcpID0+IFpvZE51bWJlci5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgYm9vbGVhbjogKChhcmcpID0+IFpvZEJvb2xlYW4uY3JlYXRlKHtcbiAgICAgICAgLi4uYXJnLFxuICAgICAgICBjb2VyY2U6IHRydWUsXG4gICAgfSkpLFxuICAgIGJpZ2ludDogKChhcmcpID0+IFpvZEJpZ0ludC5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgZGF0ZTogKChhcmcpID0+IFpvZERhdGUuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxufTtcbmNvbnN0IE5FVkVSID0gSU5WQUxJRDtcblxudmFyIHogPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGRlZmF1bHRFcnJvck1hcDogZXJyb3JNYXAsXG4gICAgc2V0RXJyb3JNYXA6IHNldEVycm9yTWFwLFxuICAgIGdldEVycm9yTWFwOiBnZXRFcnJvck1hcCxcbiAgICBtYWtlSXNzdWU6IG1ha2VJc3N1ZSxcbiAgICBFTVBUWV9QQVRIOiBFTVBUWV9QQVRILFxuICAgIGFkZElzc3VlVG9Db250ZXh0OiBhZGRJc3N1ZVRvQ29udGV4dCxcbiAgICBQYXJzZVN0YXR1czogUGFyc2VTdGF0dXMsXG4gICAgSU5WQUxJRDogSU5WQUxJRCxcbiAgICBESVJUWTogRElSVFksXG4gICAgT0s6IE9LLFxuICAgIGlzQWJvcnRlZDogaXNBYm9ydGVkLFxuICAgIGlzRGlydHk6IGlzRGlydHksXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0FzeW5jOiBpc0FzeW5jLFxuICAgIGdldCB1dGlsICgpIHsgcmV0dXJuIHV0aWw7IH0sXG4gICAgZ2V0IG9iamVjdFV0aWwgKCkgeyByZXR1cm4gb2JqZWN0VXRpbDsgfSxcbiAgICBab2RQYXJzZWRUeXBlOiBab2RQYXJzZWRUeXBlLFxuICAgIGdldFBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUsXG4gICAgWm9kVHlwZTogWm9kVHlwZSxcbiAgICBkYXRldGltZVJlZ2V4OiBkYXRldGltZVJlZ2V4LFxuICAgIFpvZFN0cmluZzogWm9kU3RyaW5nLFxuICAgIFpvZE51bWJlcjogWm9kTnVtYmVyLFxuICAgIFpvZEJpZ0ludDogWm9kQmlnSW50LFxuICAgIFpvZEJvb2xlYW46IFpvZEJvb2xlYW4sXG4gICAgWm9kRGF0ZTogWm9kRGF0ZSxcbiAgICBab2RTeW1ib2w6IFpvZFN5bWJvbCxcbiAgICBab2RVbmRlZmluZWQ6IFpvZFVuZGVmaW5lZCxcbiAgICBab2ROdWxsOiBab2ROdWxsLFxuICAgIFpvZEFueTogWm9kQW55LFxuICAgIFpvZFVua25vd246IFpvZFVua25vd24sXG4gICAgWm9kTmV2ZXI6IFpvZE5ldmVyLFxuICAgIFpvZFZvaWQ6IFpvZFZvaWQsXG4gICAgWm9kQXJyYXk6IFpvZEFycmF5LFxuICAgIFpvZE9iamVjdDogWm9kT2JqZWN0LFxuICAgIFpvZFVuaW9uOiBab2RVbmlvbixcbiAgICBab2REaXNjcmltaW5hdGVkVW5pb246IFpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICBab2RJbnRlcnNlY3Rpb246IFpvZEludGVyc2VjdGlvbixcbiAgICBab2RUdXBsZTogWm9kVHVwbGUsXG4gICAgWm9kUmVjb3JkOiBab2RSZWNvcmQsXG4gICAgWm9kTWFwOiBab2RNYXAsXG4gICAgWm9kU2V0OiBab2RTZXQsXG4gICAgWm9kRnVuY3Rpb246IFpvZEZ1bmN0aW9uLFxuICAgIFpvZExhenk6IFpvZExhenksXG4gICAgWm9kTGl0ZXJhbDogWm9kTGl0ZXJhbCxcbiAgICBab2RFbnVtOiBab2RFbnVtLFxuICAgIFpvZE5hdGl2ZUVudW06IFpvZE5hdGl2ZUVudW0sXG4gICAgWm9kUHJvbWlzZTogWm9kUHJvbWlzZSxcbiAgICBab2RFZmZlY3RzOiBab2RFZmZlY3RzLFxuICAgIFpvZFRyYW5zZm9ybWVyOiBab2RFZmZlY3RzLFxuICAgIFpvZE9wdGlvbmFsOiBab2RPcHRpb25hbCxcbiAgICBab2ROdWxsYWJsZTogWm9kTnVsbGFibGUsXG4gICAgWm9kRGVmYXVsdDogWm9kRGVmYXVsdCxcbiAgICBab2RDYXRjaDogWm9kQ2F0Y2gsXG4gICAgWm9kTmFOOiBab2ROYU4sXG4gICAgQlJBTkQ6IEJSQU5ELFxuICAgIFpvZEJyYW5kZWQ6IFpvZEJyYW5kZWQsXG4gICAgWm9kUGlwZWxpbmU6IFpvZFBpcGVsaW5lLFxuICAgIFpvZFJlYWRvbmx5OiBab2RSZWFkb25seSxcbiAgICBjdXN0b206IGN1c3RvbSxcbiAgICBTY2hlbWE6IFpvZFR5cGUsXG4gICAgWm9kU2NoZW1hOiBab2RUeXBlLFxuICAgIGxhdGU6IGxhdGUsXG4gICAgZ2V0IFpvZEZpcnN0UGFydHlUeXBlS2luZCAoKSB7IHJldHVybiBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7IH0sXG4gICAgY29lcmNlOiBjb2VyY2UsXG4gICAgYW55OiBhbnlUeXBlLFxuICAgIGFycmF5OiBhcnJheVR5cGUsXG4gICAgYmlnaW50OiBiaWdJbnRUeXBlLFxuICAgIGJvb2xlYW46IGJvb2xlYW5UeXBlLFxuICAgIGRhdGU6IGRhdGVUeXBlLFxuICAgIGRpc2NyaW1pbmF0ZWRVbmlvbjogZGlzY3JpbWluYXRlZFVuaW9uVHlwZSxcbiAgICBlZmZlY3Q6IGVmZmVjdHNUeXBlLFxuICAgICdlbnVtJzogZW51bVR5cGUsXG4gICAgJ2Z1bmN0aW9uJzogZnVuY3Rpb25UeXBlLFxuICAgICdpbnN0YW5jZW9mJzogaW5zdGFuY2VPZlR5cGUsXG4gICAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25UeXBlLFxuICAgIGxhenk6IGxhenlUeXBlLFxuICAgIGxpdGVyYWw6IGxpdGVyYWxUeXBlLFxuICAgIG1hcDogbWFwVHlwZSxcbiAgICBuYW46IG5hblR5cGUsXG4gICAgbmF0aXZlRW51bTogbmF0aXZlRW51bVR5cGUsXG4gICAgbmV2ZXI6IG5ldmVyVHlwZSxcbiAgICAnbnVsbCc6IG51bGxUeXBlLFxuICAgIG51bGxhYmxlOiBudWxsYWJsZVR5cGUsXG4gICAgbnVtYmVyOiBudW1iZXJUeXBlLFxuICAgIG9iamVjdDogb2JqZWN0VHlwZSxcbiAgICBvYm9vbGVhbjogb2Jvb2xlYW4sXG4gICAgb251bWJlcjogb251bWJlcixcbiAgICBvcHRpb25hbDogb3B0aW9uYWxUeXBlLFxuICAgIG9zdHJpbmc6IG9zdHJpbmcsXG4gICAgcGlwZWxpbmU6IHBpcGVsaW5lVHlwZSxcbiAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzVHlwZSxcbiAgICBwcm9taXNlOiBwcm9taXNlVHlwZSxcbiAgICByZWNvcmQ6IHJlY29yZFR5cGUsXG4gICAgc2V0OiBzZXRUeXBlLFxuICAgIHN0cmljdE9iamVjdDogc3RyaWN0T2JqZWN0VHlwZSxcbiAgICBzdHJpbmc6IHN0cmluZ1R5cGUsXG4gICAgc3ltYm9sOiBzeW1ib2xUeXBlLFxuICAgIHRyYW5zZm9ybWVyOiBlZmZlY3RzVHlwZSxcbiAgICB0dXBsZTogdHVwbGVUeXBlLFxuICAgICd1bmRlZmluZWQnOiB1bmRlZmluZWRUeXBlLFxuICAgIHVuaW9uOiB1bmlvblR5cGUsXG4gICAgdW5rbm93bjogdW5rbm93blR5cGUsXG4gICAgJ3ZvaWQnOiB2b2lkVHlwZSxcbiAgICBORVZFUjogTkVWRVIsXG4gICAgWm9kSXNzdWVDb2RlOiBab2RJc3N1ZUNvZGUsXG4gICAgcXVvdGVsZXNzSnNvbjogcXVvdGVsZXNzSnNvbixcbiAgICBab2RFcnJvcjogWm9kRXJyb3Jcbn0pO1xuXG5leHBvcnQgeyBCUkFORCwgRElSVFksIEVNUFRZX1BBVEgsIElOVkFMSUQsIE5FVkVSLCBPSywgUGFyc2VTdGF0dXMsIFpvZFR5cGUgYXMgU2NoZW1hLCBab2RBbnksIFpvZEFycmF5LCBab2RCaWdJbnQsIFpvZEJvb2xlYW4sIFpvZEJyYW5kZWQsIFpvZENhdGNoLCBab2REYXRlLCBab2REZWZhdWx0LCBab2REaXNjcmltaW5hdGVkVW5pb24sIFpvZEVmZmVjdHMsIFpvZEVudW0sIFpvZEVycm9yLCBab2RGaXJzdFBhcnR5VHlwZUtpbmQsIFpvZEZ1bmN0aW9uLCBab2RJbnRlcnNlY3Rpb24sIFpvZElzc3VlQ29kZSwgWm9kTGF6eSwgWm9kTGl0ZXJhbCwgWm9kTWFwLCBab2ROYU4sIFpvZE5hdGl2ZUVudW0sIFpvZE5ldmVyLCBab2ROdWxsLCBab2ROdWxsYWJsZSwgWm9kTnVtYmVyLCBab2RPYmplY3QsIFpvZE9wdGlvbmFsLCBab2RQYXJzZWRUeXBlLCBab2RQaXBlbGluZSwgWm9kUHJvbWlzZSwgWm9kUmVhZG9ubHksIFpvZFJlY29yZCwgWm9kVHlwZSBhcyBab2RTY2hlbWEsIFpvZFNldCwgWm9kU3RyaW5nLCBab2RTeW1ib2wsIFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIsIFpvZFR1cGxlLCBab2RUeXBlLCBab2RVbmRlZmluZWQsIFpvZFVuaW9uLCBab2RVbmtub3duLCBab2RWb2lkLCBhZGRJc3N1ZVRvQ29udGV4dCwgYW55VHlwZSBhcyBhbnksIGFycmF5VHlwZSBhcyBhcnJheSwgYmlnSW50VHlwZSBhcyBiaWdpbnQsIGJvb2xlYW5UeXBlIGFzIGJvb2xlYW4sIGNvZXJjZSwgY3VzdG9tLCBkYXRlVHlwZSBhcyBkYXRlLCBkYXRldGltZVJlZ2V4LCB6IGFzIGRlZmF1bHQsIGVycm9yTWFwIGFzIGRlZmF1bHRFcnJvck1hcCwgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSBhcyBkaXNjcmltaW5hdGVkVW5pb24sIGVmZmVjdHNUeXBlIGFzIGVmZmVjdCwgZW51bVR5cGUgYXMgZW51bSwgZnVuY3Rpb25UeXBlIGFzIGZ1bmN0aW9uLCBnZXRFcnJvck1hcCwgZ2V0UGFyc2VkVHlwZSwgaW5zdGFuY2VPZlR5cGUgYXMgaW5zdGFuY2VvZiwgaW50ZXJzZWN0aW9uVHlwZSBhcyBpbnRlcnNlY3Rpb24sIGlzQWJvcnRlZCwgaXNBc3luYywgaXNEaXJ0eSwgaXNWYWxpZCwgbGF0ZSwgbGF6eVR5cGUgYXMgbGF6eSwgbGl0ZXJhbFR5cGUgYXMgbGl0ZXJhbCwgbWFrZUlzc3VlLCBtYXBUeXBlIGFzIG1hcCwgbmFuVHlwZSBhcyBuYW4sIG5hdGl2ZUVudW1UeXBlIGFzIG5hdGl2ZUVudW0sIG5ldmVyVHlwZSBhcyBuZXZlciwgbnVsbFR5cGUgYXMgbnVsbCwgbnVsbGFibGVUeXBlIGFzIG51bGxhYmxlLCBudW1iZXJUeXBlIGFzIG51bWJlciwgb2JqZWN0VHlwZSBhcyBvYmplY3QsIG9iamVjdFV0aWwsIG9ib29sZWFuLCBvbnVtYmVyLCBvcHRpb25hbFR5cGUgYXMgb3B0aW9uYWwsIG9zdHJpbmcsIHBpcGVsaW5lVHlwZSBhcyBwaXBlbGluZSwgcHJlcHJvY2Vzc1R5cGUgYXMgcHJlcHJvY2VzcywgcHJvbWlzZVR5cGUgYXMgcHJvbWlzZSwgcXVvdGVsZXNzSnNvbiwgcmVjb3JkVHlwZSBhcyByZWNvcmQsIHNldFR5cGUgYXMgc2V0LCBzZXRFcnJvck1hcCwgc3RyaWN0T2JqZWN0VHlwZSBhcyBzdHJpY3RPYmplY3QsIHN0cmluZ1R5cGUgYXMgc3RyaW5nLCBzeW1ib2xUeXBlIGFzIHN5bWJvbCwgZWZmZWN0c1R5cGUgYXMgdHJhbnNmb3JtZXIsIHR1cGxlVHlwZSBhcyB0dXBsZSwgdW5kZWZpbmVkVHlwZSBhcyB1bmRlZmluZWQsIHVuaW9uVHlwZSBhcyB1bmlvbiwgdW5rbm93blR5cGUgYXMgdW5rbm93biwgdXRpbCwgdm9pZFR5cGUgYXMgdm9pZCwgeiB9O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);