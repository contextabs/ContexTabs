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
var _clusterUtils = require("./lib/cluster-utils");
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
            const cachedTopicNames = members.map((tab)=>classificationCache[classificationKey(tab)]?.topic).filter((topic)=>Boolean(topic && topic.trim()));
            const generatedName = (0, _clusterUtils.inferClusterName)(members.map((tab)=>({
                    title: tab.title,
                    url: tab.url,
                    domain: tab.domain,
                    topic: classificationCache[classificationKey(tab)]?.topic,
                    summary: classificationCache[classificationKey(tab)]?.topic
                })), `${category[0].toUpperCase()}${category.slice(1)} research`);
            const name = cachedTopicNames[0] ? cachedTopicNames[0] : generatedName;
            const prior = old.filter((cluster)=>cluster.windowId === currentWindowId && !usedClusterIds.has(cluster.id)).map((cluster)=>({
                    cluster,
                    overlap: cluster.tabIds.filter((id)=>members.some((tab)=>tab.tabId === id)).length
                })).sort((a, b)=>b.overlap - a.overlap)[0];
            const match = (0, _clusterUtils.pickBestClusterMatch)(old.filter((cluster)=>cluster.windowId === currentWindowId && !usedClusterIds.has(cluster.id)), members.map((tab)=>({
                    title: tab.title,
                    url: tab.url,
                    domain: tab.domain,
                    topic: classificationCache[classificationKey(tab)]?.topic
                })));
            const id = match && match.score >= 2 ? match.cluster.id : prior && prior.overlap ? prior.cluster.id : `cluster-${currentWindowId}-${crypto.randomUUID()}`;
            usedClusterIds.add(id);
            const confidence = Math.min(0.98, 0.45 + members.length * 0.08 + (members.every((tab)=>tab.groupId !== undefined) ? 0.15 : 0) + Math.min(common.length, 4) * 0.04);
            const status = (match?.cluster.status ?? prior?.cluster.status) === "confirmed" ? "confirmed" : members.length >= 2 ? "suggested" : "tentative";
            const summary = (0, _clusterUtils.buildClusterSummary)(members.map((tab)=>({
                    title: tab.title,
                    url: tab.url,
                    domain: tab.domain,
                    topic: classificationCache[classificationKey(tab)]?.topic
                })), match?.cluster.name ?? name);
            const updated = {
                id,
                windowId: currentWindowId,
                name: match?.cluster.name ?? prior?.cluster.name ?? name,
                category,
                tabIds: members.map((tab)=>tab.tabId),
                members: members.map((tab)=>({
                        tabId: tab.tabId,
                        title: tab.title.slice(0, 300),
                        url: tab.url
                    })),
                confidence,
                tokens: common,
                summary: summary.slice(0, 1000),
                lastActiveAt: new Date(Math.max(...members.map((tab)=>tab.lastActiveAt))).toISOString(),
                status,
                dismissedUntil: match?.cluster.dismissedUntil ?? prior?.cluster.dismissedUntil,
                chromeGroupId: members.every((tab)=>tab.groupId === members[0].groupId) ? members[0].groupId : undefined
            };
            clusters.push(updated);
            if (members.length >= 2 && confidence >= 0.58 && (0, _clusterUtils.shouldSurfaceClusterSuggestion)({
                id,
                name,
                status,
                confidence,
                tabIds: members.map((tab)=>tab.tabId),
                tokens: common
            }) && (!prior?.cluster.dismissedUntil || Date.parse(prior.cluster.dismissedUntil) < now)) {
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
                    return cluster && (0, _clusterUtils.shouldSurfaceClusterSuggestion)({
                        id: cluster.id,
                        name: cluster.name,
                        status: cluster.status,
                        confidence: cluster.confidence,
                        tabIds: cluster.tabIds,
                        tokens: cluster.tokens
                    }) && (!cluster.dismissedUntil || Date.parse(cluster.dismissedUntil) < Date.now()) ? cluster : undefined;
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
                        const sessionGoal = cluster.summary ? `Research ${cluster.name}: ${cluster.summary}` : `Research ${cluster.name}`;
                        const strongTokens = cluster.tokens.slice(0, 3);
                        const findings = cluster.summary ? [
                            cluster.summary
                        ] : [
                            `The topic cluster is centered on ${cluster.name}.`,
                            `Review the related tabs to confirm the most relevant sources.`
                        ];
                        const nextSteps = [
                            `Compare the strongest source pages in ${cluster.name}.`,
                            strongTokens.length ? `Validate whether ${strongTokens.join(", ")} is the right framing for this research question.` : `Capture a final decision or conclusion about this research topic.`
                        ];
                        const session = (0, _contracts.ResearchSessionSchema).parse({
                            id: `research-${cluster.id}`,
                            title: cluster.name,
                            goal: sessionGoal,
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
                            findings,
                            contradictions: [],
                            unknowns: strongTokens.length ? strongTokens.map((token)=>`Need to confirm whether "${token}" is the right framing for this topic.`) : [
                                "Need to confirm the core question this research topic is answering."
                            ],
                            nextSteps
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
            case "DELETE_SESSION":
                {
                    const id = String(message.id ?? "");
                    if (!id) throw new Error("No session ID was supplied");
                    await (await dbPromise).delete("sessions", id);
                    const { "active-session": activeId } = await chrome.storage.local.get("active-session");
                    if (activeId === id) await chrome.storage.local.remove("active-session");
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

},{"idb":"1872l","@ambient/contracts":"9Ryfn","./lib/cluster-utils":"9NMZT"}],"1872l":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"9NMZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pickBestClusterMatch", ()=>pickBestClusterMatch);
parcelHelpers.export(exports, "shouldSurfaceClusterSuggestion", ()=>shouldSurfaceClusterSuggestion);
parcelHelpers.export(exports, "inferClusterName", ()=>inferClusterName);
parcelHelpers.export(exports, "buildClusterSummary", ()=>buildClusterSummary);
const STOP_WORDS = new Set([
    "the",
    "and",
    "for",
    "with",
    "from",
    "this",
    "that",
    "into",
    "your",
    "about",
    "docs",
    "guide",
    "overview",
    "using",
    "how",
    "what",
    "when",
    "where",
    "page",
    "site",
    "official",
    "best",
    "new",
    "review",
    "search",
    "view",
    "docs",
    "learn",
    "guide",
    "project",
    "work",
    "team",
    "research",
    "topic",
    "ideas",
    "notes"
]);
function toTitleCase(value) {
    return value.split(/\s+/).filter(Boolean).map((part)=>part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
function tokenize(value) {
    return (value.toLowerCase().match(/[a-z0-9]+/g) ?? []).map((part)=>part.replace(/^(www|docs|app|dev|io|com|org|net)$/, "")).filter((part)=>part.length >= 3 && !STOP_WORDS.has(part));
}
function cleanHost(domain) {
    if (!domain) return "";
    try {
        const host = new URL(`https://${domain}`).hostname.replace(/^www\./, "").replace(/\.[a-z]{2,}$/i, "");
        return host.replace(/[-_]/g, " ");
    } catch  {
        return domain.replace(/^www\./, "").replace(/\.[a-z]{2,}$/i, "");
    }
}
function pickBestClusterMatch(existingClusters, members) {
    const memberText = members.map((member)=>`${member.title ?? ""} ${member.url ?? ""} ${member.domain ?? ""} ${member.topic ?? ""}`).join(" ");
    const memberTokens = new Set(tokenize(memberText));
    const scored = existingClusters.map((cluster)=>{
        const clusterText = [
            cluster.name,
            cluster.summary ?? "",
            ...cluster.tokens ?? []
        ].join(" ");
        const clusterTokens = new Set(tokenize(clusterText));
        const shared = [
            ...memberTokens
        ].filter((token)=>clusterTokens.has(token));
        const nameShared = [
            ...new Set(tokenize(cluster.name))
        ].filter((token)=>memberTokens.has(token));
        const summaryShared = [
            ...new Set(tokenize(cluster.summary ?? ""))
        ].filter((token)=>memberTokens.has(token));
        const score = shared.length * 6 + nameShared.length * 4 + summaryShared.length * 3;
        return {
            cluster,
            score
        };
    }).filter((entry)=>entry.score > 0).sort((a, b)=>b.score - a.score)[0];
    return scored;
}
function shouldSurfaceClusterSuggestion(cluster) {
    if (!cluster || cluster.status === "confirmed" || cluster.status === "dismissed") return false;
    const confidence = typeof cluster.confidence === "number" ? cluster.confidence : 0;
    const tabs = Array.isArray(cluster.tabIds) ? cluster.tabIds.length : 0;
    const tokenCount = Array.isArray(cluster.tokens) ? cluster.tokens.length : 0;
    const nameTokens = typeof cluster.name === "string" ? tokenize(cluster.name).length : 0;
    if (tabs < 2) return false;
    if (confidence < 0.58) return false;
    if (tokenCount < 2 && nameTokens < 2) return false;
    return true;
}
function inferClusterName(items, fallback = "Research") {
    const topicLabel = items.map((item)=>item.topic).filter((topic)=>typeof topic === "string" && topic.trim().length > 0).find((topic)=>tokenize(topic).length >= 2);
    if (topicLabel) return toTitleCase(topicLabel.trim());
    const scores = new Map();
    for (const item of items){
        if (item.topic) for (const token of tokenize(item.topic))scores.set(token, (scores.get(token) ?? 0) + 4);
        const titleText = item.title ?? "";
        const titleTokens = tokenize(titleText).filter((token)=>!/^(api|guide|docs|overview|model|analysis|research|project)$/i.test(token));
        for (const token of titleTokens)scores.set(token, (scores.get(token) ?? 0) + 3);
        const hostSource = cleanHost(item.domain ?? "") || (item.url ?? "");
        const hostTokens = tokenize(hostSource);
        for (const token of hostTokens)scores.set(token, (scores.get(token) ?? 0) + 2);
    }
    const topTokens = [
        ...scores.entries()
    ].sort((a, b)=>b[1] - a[1]).map(([token])=>token).filter((token, index, list)=>list.indexOf(token) === index).slice(0, 3);
    if (topTokens.length > 0) {
        const phrase = topTokens.map((token)=>token.replace(/\b[a-z]/g, (match)=>match.toUpperCase())).join(" ");
        return phrase.length > 40 ? phrase.slice(0, 40).trim() : phrase;
    }
    return fallback;
}
function buildClusterSummary(items, name) {
    const leadingTitles = items.map((item)=>(item.title ?? cleanHost(item.domain)) || "Tab").filter(Boolean).slice(0, 3).map((part)=>part.replace(/\s+/g, " ").trim()).filter((part)=>part.length > 0);
    if (!leadingTitles.length) return `${name} cluster`;
    return `${name}: ${leadingTitles.join(" \u2022 ")}`.slice(0, 500);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["ajcBp","2w7px"], "2w7px", "parcelRequired36b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFFBQVE7UUFDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFdBQVc7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksU0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksT0FBTztRQUNQLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFdBQVc7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksY0FBYztRQUNkLCtGQUErRjtRQUMvRixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksWUFBWTtRQUNaLElBQUksTUFBTTtRQUNWLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDL0IsSUFBSSxHQUFHLFNBQVMsT0FDWjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPO0lBQ1g7SUFDQSxJQUFJLFlBQVk7UUFDWixJQUFJLE1BQU07UUFDVixLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFRO1lBQy9CLElBQUksR0FBRyxTQUFTLE9BQ1o7Z0JBQUEsSUFBSSxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQzNCLE1BQU0sR0FBRztZQUFLO1FBRTFCO1FBQ0EsT0FBTztJQUNYO0FBQ0o7QUFDQSxVQUFVLFNBQVMsQ0FBQztJQUNoQixJQUFJO0lBQ0osT0FBTyxJQUFJLFVBQVU7UUFDakIsUUFBUSxFQUFFO1FBQ1YsVUFBVSxzQkFBc0I7UUFDaEMsUUFBUSxBQUFDLENBQUEsS0FBSyxXQUFXLFFBQVEsV0FBVyxLQUFLLElBQUksS0FBSyxJQUFJLE9BQU8sTUFBSyxNQUFPLFFBQVEsT0FBTyxLQUFLLElBQUksS0FBSztRQUM5RyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxpSUFBaUk7QUFDakksU0FBUyxtQkFBbUIsR0FBRyxFQUFFLElBQUk7SUFDakMsTUFBTSxjQUFjLEFBQUMsQ0FBQSxJQUFJLFdBQVcsTUFBTSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUMsRUFBRztJQUN6RCxNQUFNLGVBQWUsQUFBQyxDQUFBLEtBQUssV0FBVyxNQUFNLElBQUksQ0FBQyxFQUFFLElBQUksRUFBQyxFQUFHO0lBQzNELE1BQU0sV0FBVyxjQUFjLGVBQWUsY0FBYztJQUM1RCxNQUFNLFNBQVMsU0FBUyxJQUFJLFFBQVEsVUFBVSxRQUFRLEtBQUs7SUFDM0QsTUFBTSxVQUFVLFNBQVMsS0FBSyxRQUFRLFVBQVUsUUFBUSxLQUFLO0lBQzdELE9BQU8sQUFBQyxTQUFTLFVBQVcsS0FBSyxJQUFJLElBQUk7QUFDN0M7QUFDQSxNQUFNLGtCQUFrQjtJQUNwQixhQUFjO1FBQ1YsS0FBSyxJQUFJO1FBQ1QsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7SUFDckI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssUUFDVixNQUFNLE9BQU8sT0FBTyxNQUFNO1FBRTlCLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsY0FBYyxRQUFRO1lBQ3JDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLGtCQUFrQixLQUFLO2dCQUNuQixNQUFNLGFBQWE7Z0JBQ25CLFVBQVUsY0FBYztnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTztRQUNYO1FBQ0EsSUFBSSxNQUFNO1FBQ1YsTUFBTSxTQUFTLElBQUk7UUFDbkIsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssT0FBUTtZQUNsQyxJQUFJLE1BQU0sU0FBUyxPQUNmO2dCQUFBLElBQUksQ0FBQyxLQUFLLFVBQVUsTUFBTSxPQUFPO29CQUM3QixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsa0JBQWtCLEtBQUs7d0JBQ25CLE1BQU0sYUFBYTt3QkFDbkIsVUFBVTt3QkFDVixVQUFVO3dCQUNWLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsT0FBTztnQkFDM0IsTUFBTSxXQUFXLE1BQU0sWUFDakIsTUFBTSxPQUFPLE1BQU0sUUFDbkIsTUFBTSxRQUFRLE1BQU07Z0JBQzFCLElBQUksVUFBVTtvQkFDVixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsa0JBQWtCLEtBQUs7d0JBQ25CLE1BQU0sYUFBYTt3QkFDbkIsU0FBUyxNQUFNO3dCQUNmLE1BQU07d0JBQ04sV0FBVyxNQUFNO3dCQUNqQixPQUFPO3dCQUNQLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUNKLE9BQ0ssSUFBSSxNQUFNLFNBQVMsT0FBTztnQkFDM0IsTUFBTSxTQUFTLE1BQU0sWUFDZixNQUFNLE9BQU8sTUFBTSxRQUNuQixNQUFNLFFBQVEsTUFBTTtnQkFDMUIsSUFBSSxRQUFRO29CQUNSLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxrQkFBa0IsS0FBSzt3QkFDbkIsTUFBTSxhQUFhO3dCQUNuQixTQUFTLE1BQU07d0JBQ2YsTUFBTTt3QkFDTixXQUFXLE1BQU07d0JBQ2pCLE9BQU87d0JBQ1AsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxjQUNwQjtnQkFBQSxJQUFJLG1CQUFtQixNQUFNLE1BQU0sTUFBTSxXQUFXLEdBQUc7b0JBQ25ELE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxrQkFBa0IsS0FBSzt3QkFDbkIsTUFBTSxhQUFhO3dCQUNuQixZQUFZLE1BQU07d0JBQ2xCLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsVUFDcEI7Z0JBQUEsSUFBSSxDQUFDLE9BQU8sU0FBUyxNQUFNLE9BQU87b0JBQzlCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxrQkFBa0IsS0FBSzt3QkFDbkIsTUFBTSxhQUFhO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUdBLEtBQUssWUFBWTtRQUV6QjtRQUNBLE9BQU87WUFBRSxRQUFRLE9BQU87WUFBTyxPQUFPLE1BQU07UUFBSztJQUNyRDtJQUNBLElBQUksS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUztJQUNoRTtJQUNBLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTO0lBQ2pFO0lBQ0EsSUFBSSxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FBTyxPQUFPLE1BQU0sVUFBVSxTQUFTO0lBQ2hFO0lBQ0EsR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVM7SUFDakU7SUFDQSxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUN0QyxPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osUUFBUTttQkFDRCxJQUFJLENBQUMsS0FBSztnQkFDYjtvQkFDSTtvQkFDQTtvQkFDQTtvQkFDQSxTQUFTLFVBQVUsU0FBUztnQkFDaEM7YUFDSDtRQUNMO0lBQ0o7SUFDQSxVQUFVLEtBQUssRUFBRTtRQUNiLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixRQUFRO21CQUFJLElBQUksQ0FBQyxLQUFLO2dCQUFRO2FBQU07UUFDeEM7SUFDSjtJQUNBLElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sU0FBUyxVQUFVLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTLFVBQVUsU0FBUztRQUNoQztJQUNKO0lBQ0EsU0FBUyxPQUFPLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxZQUFZLE9BQU8sRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxZQUFZLE9BQU8sRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxXQUFXLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxPQUFPLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxLQUFLLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLFdBQVc7WUFDWCxPQUFPLE9BQU87WUFDZCxTQUFTLFVBQVUsU0FBUztRQUNoQyxHQUFHLFVBQVU7WUFDVCxNQUFNO1lBQ04sV0FBVztZQUNYLE9BQU8sT0FBTztZQUNkLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxJQUFJLFdBQVc7UUFDWCxJQUFJLE1BQU07UUFDVixLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFRO1lBQy9CLElBQUksR0FBRyxTQUFTLE9BQ1o7Z0JBQUEsSUFBSSxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQzNCLE1BQU0sR0FBRztZQUFLO1FBRTFCO1FBQ0EsT0FBTztJQUNYO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU87SUFDWDtJQUNBLElBQUksUUFBUTtRQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTLFNBQzlDLEdBQUcsU0FBUyxnQkFBZ0IsS0FBSyxVQUFVLEdBQUc7SUFDdkQ7SUFDQSxJQUFJLFdBQVc7UUFDWCxJQUFJLE1BQU0sTUFBTSxNQUFNO1FBQ3RCLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDL0IsSUFBSSxHQUFHLFNBQVMsWUFDWixHQUFHLFNBQVMsU0FDWixHQUFHLFNBQVMsY0FDWixPQUFPO2lCQUVOLElBQUksR0FBRyxTQUFTLE9BQ2pCO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSyxPQUVqQixJQUFJLEdBQUcsU0FBUyxPQUNqQjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPLE9BQU8sU0FBUyxRQUFRLE9BQU8sU0FBUztJQUNuRDtBQUNKO0FBQ0EsVUFBVSxTQUFTLENBQUM7SUFDaEIsT0FBTyxJQUFJLFVBQVU7UUFDakIsUUFBUSxFQUFFO1FBQ1YsVUFBVSxzQkFBc0I7UUFDaEMsUUFBUSxBQUFDLENBQUEsV0FBVyxRQUFRLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLE1BQUssS0FBTTtRQUMzRSxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGtCQUFrQjtJQUNwQixhQUFjO1FBQ1YsS0FBSyxJQUFJO1FBQ1QsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztJQUNwQjtJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUNWLElBQUk7WUFDQSxNQUFNLE9BQU8sT0FBTyxNQUFNO1FBQzlCLEVBQ0EsT0FBTyxJQUFJO1lBQ1AsT0FBTyxJQUFJLENBQUMsaUJBQWlCO1FBQ2pDO1FBRUosTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxjQUFjLFFBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtRQUVqQyxJQUFJLE1BQU07UUFDVixNQUFNLFNBQVMsSUFBSTtRQUNuQixLQUFLLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxPQUFRO1lBQ2xDLElBQUksTUFBTSxTQUFTLE9BQU87Z0JBQ3RCLE1BQU0sV0FBVyxNQUFNLFlBQ2pCLE1BQU0sT0FBTyxNQUFNLFFBQ25CLE1BQU0sUUFBUSxNQUFNO2dCQUMxQixJQUFJLFVBQVU7b0JBQ1YsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLGtCQUFrQixLQUFLO3dCQUNuQixNQUFNLGFBQWE7d0JBQ25CLE1BQU07d0JBQ04sU0FBUyxNQUFNO3dCQUNmLFdBQVcsTUFBTTt3QkFDakIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxPQUFPO2dCQUMzQixNQUFNLFNBQVMsTUFBTSxZQUNmLE1BQU0sT0FBTyxNQUFNLFFBQ25CLE1BQU0sUUFBUSxNQUFNO2dCQUMxQixJQUFJLFFBQVE7b0JBQ1IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLGtCQUFrQixLQUFLO3dCQUNuQixNQUFNLGFBQWE7d0JBQ25CLE1BQU07d0JBQ04sU0FBUyxNQUFNO3dCQUNmLFdBQVcsTUFBTTt3QkFDakIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxjQUNwQjtnQkFBQSxJQUFJLE1BQU0sT0FBTyxNQUFNLFVBQVUsT0FBTyxJQUFJO29CQUN4QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsa0JBQWtCLEtBQUs7d0JBQ25CLE1BQU0sYUFBYTt3QkFDbkIsWUFBWSxNQUFNO3dCQUNsQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUdBLEtBQUssWUFBWTtRQUV6QjtRQUNBLE9BQU87WUFBRSxRQUFRLE9BQU87WUFBTyxPQUFPLE1BQU07UUFBSztJQUNyRDtJQUNBLGlCQUFpQixLQUFLLEVBQUU7UUFDcEIsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7UUFDakMsa0JBQWtCLEtBQUs7WUFDbkIsTUFBTSxhQUFhO1lBQ25CLFVBQVUsY0FBYztZQUN4QixVQUFVLElBQUk7UUFDbEI7UUFDQSxPQUFPO0lBQ1g7SUFDQSxJQUFJLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sTUFBTSxVQUFVLFNBQVM7SUFDaEU7SUFDQSxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxPQUFPLFVBQVUsU0FBUztJQUNqRTtJQUNBLElBQUksS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUztJQUNoRTtJQUNBLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FBTyxPQUFPLE9BQU8sVUFBVSxTQUFTO0lBQ2pFO0lBQ0EsU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDdEMsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQ0QsSUFBSSxDQUFDLEtBQUs7Z0JBQ2I7b0JBQ0k7b0JBQ0E7b0JBQ0E7b0JBQ0EsU0FBUyxVQUFVLFNBQVM7Z0JBQ2hDO2FBQ0g7UUFDTDtJQUNKO0lBQ0EsVUFBVSxLQUFLLEVBQUU7UUFDYixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osUUFBUTttQkFBSSxJQUFJLENBQUMsS0FBSztnQkFBUTthQUFNO1FBQ3hDO0lBQ0o7SUFDQSxTQUFTLE9BQU8sRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sT0FBTztZQUNkLFdBQVc7WUFDWCxTQUFTLFVBQVUsU0FBUztRQUNoQztJQUNKO0lBQ0EsU0FBUyxPQUFPLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPLE9BQU87WUFDZCxXQUFXO1lBQ1gsU0FBUyxVQUFVLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFlBQVksT0FBTyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sT0FBTztZQUNkLFdBQVc7WUFDWCxTQUFTLFVBQVUsU0FBUztRQUNoQztJQUNKO0lBQ0EsWUFBWSxPQUFPLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTyxPQUFPO1lBQ2QsV0FBVztZQUNYLFNBQVMsVUFBVSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxXQUFXLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ047WUFDQSxTQUFTLFVBQVUsU0FBUztRQUNoQztJQUNKO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU87SUFDWDtJQUNBLElBQUksV0FBVztRQUNYLElBQUksTUFBTTtRQUNWLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDL0IsSUFBSSxHQUFHLFNBQVMsT0FDWjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPO0lBQ1g7QUFDSjtBQUNBLFVBQVUsU0FBUyxDQUFDO0lBQ2hCLElBQUk7SUFDSixPQUFPLElBQUksVUFBVTtRQUNqQixRQUFRLEVBQUU7UUFDVixVQUFVLHNCQUFzQjtRQUNoQyxRQUFRLEFBQUMsQ0FBQSxLQUFLLFdBQVcsUUFBUSxXQUFXLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTyxNQUFLLE1BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLO1FBQzlHLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0sbUJBQW1CO0lBQ3JCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUNWLE1BQU0sT0FBTyxRQUFRLE1BQU07UUFFL0IsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxjQUFjLFNBQVM7WUFDdEMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxPQUFPLEdBQUcsTUFBTTtJQUNwQjtBQUNKO0FBQ0EsV0FBVyxTQUFTLENBQUM7SUFDakIsT0FBTyxJQUFJLFdBQVc7UUFDbEIsVUFBVSxzQkFBc0I7UUFDaEMsUUFBUSxBQUFDLENBQUEsV0FBVyxRQUFRLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLE1BQUssS0FBTTtRQUMzRSxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGdCQUFnQjtJQUNsQixPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssUUFDVixNQUFNLE9BQU8sSUFBSSxLQUFLLE1BQU07UUFFaEMsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxjQUFjLE1BQU07WUFDbkMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxJQUFJLE1BQU0sTUFBTSxLQUFLLFlBQVk7WUFDN0IsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtZQUN2QjtZQUNBLE9BQU87UUFDWDtRQUNBLE1BQU0sU0FBUyxJQUFJO1FBQ25CLElBQUksTUFBTTtRQUNWLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDbEMsSUFBSSxNQUFNLFNBQVMsT0FDZjtnQkFBQSxJQUFJLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTztvQkFDcEMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLGtCQUFrQixLQUFLO3dCQUNuQixNQUFNLGFBQWE7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixXQUFXO3dCQUNYLE9BQU87d0JBQ1AsU0FBUyxNQUFNO3dCQUNmLE1BQU07b0JBQ1Y7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsT0FDcEI7Z0JBQUEsSUFBSSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU87b0JBQ3BDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxrQkFBa0IsS0FBSzt3QkFDbkIsTUFBTSxhQUFhO3dCQUNuQixTQUFTLE1BQU07d0JBQ2YsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLFNBQVMsTUFBTTt3QkFDZixNQUFNO29CQUNWO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUdBLEtBQUssWUFBWTtRQUV6QjtRQUNBLE9BQU87WUFDSCxRQUFRLE9BQU87WUFDZixPQUFPLElBQUksS0FBSyxNQUFNLEtBQUs7UUFDL0I7SUFDSjtJQUNBLFVBQVUsS0FBSyxFQUFFO1FBQ2IsT0FBTyxJQUFJLFFBQVE7WUFDZixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osUUFBUTttQkFBSSxJQUFJLENBQUMsS0FBSztnQkFBUTthQUFNO1FBQ3hDO0lBQ0o7SUFDQSxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTyxRQUFRO1lBQ2YsU0FBUyxVQUFVLFNBQVM7UUFDaEM7SUFDSjtJQUNBLElBQUksT0FBTyxFQUFFLE9BQU8sRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPLFFBQVE7WUFDZixTQUFTLFVBQVUsU0FBUztRQUNoQztJQUNKO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU8sT0FBTyxPQUFPLElBQUksS0FBSyxPQUFPO0lBQ3pDO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU8sT0FBTyxPQUFPLElBQUksS0FBSyxPQUFPO0lBQ3pDO0FBQ0o7QUFDQSxRQUFRLFNBQVMsQ0FBQztJQUNkLE9BQU8sSUFBSSxRQUFRO1FBQ2YsUUFBUSxFQUFFO1FBQ1YsUUFBUSxBQUFDLENBQUEsV0FBVyxRQUFRLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLE1BQUssS0FBTTtRQUMzRSxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGtCQUFrQjtJQUNwQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsY0FBYyxRQUFRO1lBQ3JDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLGtCQUFrQixLQUFLO2dCQUNuQixNQUFNLGFBQWE7Z0JBQ25CLFVBQVUsY0FBYztnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTztRQUNYO1FBQ0EsT0FBTyxHQUFHLE1BQU07SUFDcEI7QUFDSjtBQUNBLFVBQVUsU0FBUyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxVQUFVO1FBQ2pCLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0scUJBQXFCO0lBQ3ZCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxjQUFjLFdBQVc7WUFDeEMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxPQUFPLEdBQUcsTUFBTTtJQUNwQjtBQUNKO0FBQ0EsYUFBYSxTQUFTLENBQUM7SUFDbkIsT0FBTyxJQUFJLGFBQWE7UUFDcEIsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxnQkFBZ0I7SUFDbEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLGNBQWMsTUFBTTtZQUNuQyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixVQUFVLGNBQWM7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU87UUFDWDtRQUNBLE9BQU8sR0FBRyxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxRQUFRLFNBQVMsQ0FBQztJQUNkLE9BQU8sSUFBSSxRQUFRO1FBQ2YsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxlQUFlO0lBQ2pCLGFBQWM7UUFDVixLQUFLLElBQUk7UUFDVCw4R0FBOEc7UUFDOUcsSUFBSSxDQUFDLE9BQU87SUFDaEI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE9BQU8sR0FBRyxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxPQUFPLFNBQVMsQ0FBQztJQUNiLE9BQU8sSUFBSSxPQUFPO1FBQ2QsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxtQkFBbUI7SUFDckIsYUFBYztRQUNWLEtBQUssSUFBSTtRQUNULFdBQVc7UUFDWCxJQUFJLENBQUMsV0FBVztJQUNwQjtJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsT0FBTyxHQUFHLE1BQU07SUFDcEI7QUFDSjtBQUNBLFdBQVcsU0FBUyxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxXQUFXO1FBQ2xCLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0saUJBQWlCO0lBQ25CLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7UUFDakMsa0JBQWtCLEtBQUs7WUFDbkIsTUFBTSxhQUFhO1lBQ25CLFVBQVUsY0FBYztZQUN4QixVQUFVLElBQUk7UUFDbEI7UUFDQSxPQUFPO0lBQ1g7QUFDSjtBQUNBLFNBQVMsU0FBUyxDQUFDO0lBQ2YsT0FBTyxJQUFJLFNBQVM7UUFDaEIsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxnQkFBZ0I7SUFDbEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLGNBQWMsV0FBVztZQUN4QyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixVQUFVLGNBQWM7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU87UUFDWDtRQUNBLE9BQU8sR0FBRyxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxRQUFRLFNBQVMsQ0FBQztJQUNkLE9BQU8sSUFBSSxRQUFRO1FBQ2YsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxpQkFBaUI7SUFDbkIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsTUFBTSxNQUFNLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksZUFBZSxjQUFjLE9BQU87WUFDeEMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxJQUFJLElBQUksZ0JBQWdCLE1BQU07WUFDMUIsTUFBTSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksWUFBWTtZQUNqRCxNQUFNLFdBQVcsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZO1lBQ25ELElBQUksVUFBVSxVQUFVO2dCQUNwQixrQkFBa0IsS0FBSztvQkFDbkIsTUFBTSxTQUFTLGFBQWEsVUFBVSxhQUFhO29CQUNuRCxTQUFVLFdBQVcsSUFBSSxZQUFZLFFBQVE7b0JBQzdDLFNBQVUsU0FBUyxJQUFJLFlBQVksUUFBUTtvQkFDM0MsTUFBTTtvQkFDTixXQUFXO29CQUNYLE9BQU87b0JBQ1AsU0FBUyxJQUFJLFlBQVk7Z0JBQzdCO2dCQUNBLE9BQU87WUFDWDtRQUNKO1FBQ0EsSUFBSSxJQUFJLGNBQWMsTUFDbEI7WUFBQSxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxPQUFPO2dCQUN2QyxrQkFBa0IsS0FBSztvQkFDbkIsTUFBTSxhQUFhO29CQUNuQixTQUFTLElBQUksVUFBVTtvQkFDdkIsTUFBTTtvQkFDTixXQUFXO29CQUNYLE9BQU87b0JBQ1AsU0FBUyxJQUFJLFVBQVU7Z0JBQzNCO2dCQUNBLE9BQU87WUFDWDtRQUFBO1FBRUosSUFBSSxJQUFJLGNBQWMsTUFDbEI7WUFBQSxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxPQUFPO2dCQUN2QyxrQkFBa0IsS0FBSztvQkFDbkIsTUFBTSxhQUFhO29CQUNuQixTQUFTLElBQUksVUFBVTtvQkFDdkIsTUFBTTtvQkFDTixXQUFXO29CQUNYLE9BQU87b0JBQ1AsU0FBUyxJQUFJLFVBQVU7Z0JBQzNCO2dCQUNBLE9BQU87WUFDWDtRQUFBO1FBRUosSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsSUFBSTtlQUFJLElBQUk7U0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3hDLE9BQU8sSUFBSSxLQUFLLFlBQVksSUFBSSxtQkFBbUIsS0FBSyxNQUFNLElBQUksTUFBTTtRQUM1RSxJQUFJLEtBQUssQ0FBQztZQUNOLE9BQU8sWUFBWSxXQUFXLFFBQVE7UUFDMUM7UUFFSixNQUFNLFNBQVM7ZUFBSSxJQUFJO1NBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU07UUFDM0U7UUFDQSxPQUFPLFlBQVksV0FBVyxRQUFRO0lBQzFDO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLElBQUksU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUNwQixPQUFPLElBQUksU0FBUztZQUNoQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osV0FBVztnQkFBRSxPQUFPO2dCQUFXLFNBQVMsVUFBVSxTQUFTO1lBQVM7UUFDeEU7SUFDSjtJQUNBLElBQUksU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUNwQixPQUFPLElBQUksU0FBUztZQUNoQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osV0FBVztnQkFBRSxPQUFPO2dCQUFXLFNBQVMsVUFBVSxTQUFTO1lBQVM7UUFDeEU7SUFDSjtJQUNBLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRTtRQUNqQixPQUFPLElBQUksU0FBUztZQUNoQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osYUFBYTtnQkFBRSxPQUFPO2dCQUFLLFNBQVMsVUFBVSxTQUFTO1lBQVM7UUFDcEU7SUFDSjtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHO0lBQ3ZCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQyxRQUFRO0lBQ3ZCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLE1BQU07UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxTQUFTLGVBQWUsTUFBTTtJQUMxQixJQUFJLGtCQUFrQixXQUFXO1FBQzdCLE1BQU0sV0FBVyxDQUFDO1FBQ2xCLElBQUssTUFBTSxPQUFPLE9BQU8sTUFBTztZQUM1QixNQUFNLGNBQWMsT0FBTyxLQUFLLENBQUMsSUFBSTtZQUNyQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksT0FBTyxlQUFlO1FBQ3REO1FBQ0EsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxPQUFPLElBQUk7WUFDZCxPQUFPLElBQU07UUFDakI7SUFDSixPQUNLLElBQUksa0JBQWtCLFVBQ3ZCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLEdBQUcsT0FBTyxJQUFJO1FBQ2QsTUFBTSxlQUFlLE9BQU87SUFDaEM7U0FFQyxJQUFJLGtCQUFrQixhQUN2QixPQUFPLFlBQVksT0FBTyxlQUFlLE9BQU87U0FFL0MsSUFBSSxrQkFBa0IsYUFDdkIsT0FBTyxZQUFZLE9BQU8sZUFBZSxPQUFPO1NBRS9DLElBQUksa0JBQWtCLFVBQ3ZCLE9BQU8sU0FBUyxPQUFPLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBUyxlQUFlO1NBR2pFLE9BQU87QUFFZjtBQUNBLE1BQU0sa0JBQWtCO0lBQ3BCLGFBQWM7UUFDVixLQUFLLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVTtRQUNmOzs7U0FHQyxHQUNELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQztRQUN0QixVQUFVO1FBQ1Ysc0NBQXNDO1FBQ3RDLHFDQUFxQztRQUNyQyw2RUFBNkU7UUFDN0UscUNBQXFDO1FBQ3JDLGlDQUFpQztRQUNqQyxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixvQ0FBb0M7UUFDcEMsNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsS0FBSztRQUNMLCtCQUErQjtRQUMvQixnQkFBZ0I7UUFDaEIsa0NBQWtDO1FBQ2xDLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixNQUFNO1FBQ04sMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsZUFBZTtRQUNmLElBQUk7UUFDSjs7WUFFSSxHQUNKLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztJQUN4QjtJQUNBLGFBQWE7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLE1BQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSztRQUN4QixNQUFNLE9BQU8sS0FBSyxXQUFXO1FBQzdCLE9BQVEsSUFBSSxDQUFDLFVBQVU7WUFBRTtZQUFPO1FBQUs7SUFDekM7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsY0FBYyxRQUFRO1lBQ3JDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLGtCQUFrQixLQUFLO2dCQUNuQixNQUFNLGFBQWE7Z0JBQ25CLFVBQVUsY0FBYztnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTztRQUNYO1FBQ0EsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsTUFBTSxZQUFZLEVBQUU7UUFDcEIsSUFBSSxDQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssb0JBQW9CLFlBQ2hDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixPQUFNLEdBQUk7WUFDcEMsSUFBSyxNQUFNLE9BQU8sSUFBSSxLQUNsQixJQUFJLENBQUMsVUFBVSxTQUFTLE1BQ3BCLFVBQVUsS0FBSztRQUczQjtRQUNBLE1BQU0sUUFBUSxFQUFFO1FBQ2hCLEtBQUssTUFBTSxPQUFPLFVBQVc7WUFDekIsTUFBTSxlQUFlLEtBQUssQ0FBQyxJQUFJO1lBQy9CLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQzNCLE1BQU0sS0FBSztnQkFDUCxLQUFLO29CQUFFLFFBQVE7b0JBQVMsT0FBTztnQkFBSTtnQkFDbkMsT0FBTyxhQUFhLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTTtnQkFDeEUsV0FBVyxPQUFPLElBQUk7WUFDMUI7UUFDSjtRQUNBLElBQUksSUFBSSxDQUFDLEtBQUssb0JBQW9CLFVBQVU7WUFDeEMsTUFBTSxjQUFjLElBQUksQ0FBQyxLQUFLO1lBQzlCLElBQUksZ0JBQWdCLGVBQ2hCLEtBQUssTUFBTSxPQUFPLFVBQ2QsTUFBTSxLQUFLO2dCQUNQLEtBQUs7b0JBQUUsUUFBUTtvQkFBUyxPQUFPO2dCQUFJO2dCQUNuQyxPQUFPO29CQUFFLFFBQVE7b0JBQVMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJO2dCQUFDO1lBQ25EO2lCQUdILElBQUksZ0JBQWdCLFVBQ3JCO2dCQUFBLElBQUksVUFBVSxTQUFTLEdBQUc7b0JBQ3RCLGtCQUFrQixLQUFLO3dCQUNuQixNQUFNLGFBQWE7d0JBQ25CLE1BQU07b0JBQ1Y7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxnQkFBZ0I7aUJBRXJCLE1BQU0sSUFBSSxNQUFNLENBQUMsb0RBQW9ELENBQUM7UUFFOUUsT0FDSztZQUNELDBCQUEwQjtZQUMxQixNQUFNLFdBQVcsSUFBSSxDQUFDLEtBQUs7WUFDM0IsS0FBSyxNQUFNLE9BQU8sVUFBVztnQkFDekIsTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUk7Z0JBQzNCLE1BQU0sS0FBSztvQkFDUCxLQUFLO3dCQUFFLFFBQVE7d0JBQVMsT0FBTztvQkFBSTtvQkFDbkMsT0FBTyxTQUFTLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLCtDQUErQzs7b0JBRXhILFdBQVcsT0FBTyxJQUFJO2dCQUMxQjtZQUNKO1FBQ0o7UUFDQSxJQUFJLElBQUksT0FBTyxPQUNYLE9BQU8sUUFBUSxVQUNWLEtBQUs7WUFDTixNQUFNLFlBQVksRUFBRTtZQUNwQixLQUFLLE1BQU0sUUFBUSxNQUFPO2dCQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO2dCQUN2QixNQUFNLFFBQVEsTUFBTSxLQUFLO2dCQUN6QixVQUFVLEtBQUs7b0JBQ1g7b0JBQ0E7b0JBQ0EsV0FBVyxLQUFLO2dCQUNwQjtZQUNKO1lBQ0EsT0FBTztRQUNYLEdBQ0ssS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFZLGdCQUFnQixRQUFRO1FBQy9DO2FBR0EsT0FBTyxZQUFZLGdCQUFnQixRQUFRO0lBRW5EO0lBQ0EsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLE9BQU8sT0FBTyxFQUFFO1FBQ1osVUFBVTtRQUNWLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixhQUFhO1lBQ2IsR0FBSSxZQUFZLFlBQ1Y7Z0JBQ0UsVUFBVSxDQUFDLE9BQU87b0JBQ2QsSUFBSSxJQUFJLElBQUksSUFBSTtvQkFDaEIsTUFBTSxlQUFlLEFBQUMsQ0FBQSxLQUFLLEFBQUMsQ0FBQSxLQUFLLEFBQUMsQ0FBQSxLQUFLLElBQUksQ0FBQyxJQUFHLEVBQUcsUUFBTyxNQUFPLFFBQVEsT0FBTyxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLE9BQU8sS0FBSyxPQUFNLE1BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLLElBQUk7b0JBQ3ZLLElBQUksTUFBTSxTQUFTLHFCQUNmLE9BQU87d0JBQ0gsU0FBUyxBQUFDLENBQUEsS0FBSyxVQUFVLFNBQVMsU0FBUyxPQUFNLE1BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLO29CQUN6RjtvQkFDSixPQUFPO3dCQUNILFNBQVM7b0JBQ2I7Z0JBQ0o7WUFDSixJQUNFLENBQUMsQ0FBQztRQUNaO0lBQ0o7SUFDQSxRQUFRO1FBQ0osT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLGFBQWE7UUFDakI7SUFDSjtJQUNBLGNBQWM7UUFDVixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osYUFBYTtRQUNqQjtJQUNKO0lBQ0EseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxPQUFPLFlBQVksRUFBRTtRQUNqQixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osT0FBTyxJQUFPLENBQUE7b0JBQ1YsR0FBRyxJQUFJLENBQUMsS0FBSyxPQUFPO29CQUNwQixHQUFHLFlBQVk7Z0JBQ25CLENBQUE7UUFDSjtJQUNKO0lBQ0E7Ozs7S0FJQyxHQUNELE1BQU0sT0FBTyxFQUFFO1FBQ1gsTUFBTSxTQUFTLElBQUksVUFBVTtZQUN6QixhQUFhLFFBQVEsS0FBSztZQUMxQixVQUFVLFFBQVEsS0FBSztZQUN2QixPQUFPLElBQU8sQ0FBQTtvQkFDVixHQUFHLElBQUksQ0FBQyxLQUFLLE9BQU87b0JBQ3BCLEdBQUcsUUFBUSxLQUFLLE9BQU87Z0JBQzNCLENBQUE7WUFDQSxVQUFVLHNCQUFzQjtRQUNwQztRQUNBLE9BQU87SUFDWDtJQUNBLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsNENBQTRDO0lBQzVDLHdCQUF3QjtJQUN4Qiw2RUFBNkU7SUFDN0UscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsNEVBQTRFO0lBQzVFLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sS0FBSztJQUNMLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMkRBQTJEO0lBQzNELHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGFBQWE7SUFDYixNQUFNO0lBQ04sd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFBRSxDQUFDLElBQUksRUFBRTtRQUFPO0lBQ3hDO0lBQ0Esd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixpRkFBaUY7SUFDakYsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osU0FBUyxLQUFLLEVBQUU7UUFDWixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osVUFBVTtRQUNkO0lBQ0o7SUFDQSxLQUFLLElBQUksRUFBRTtRQUNQLE1BQU0sUUFBUSxDQUFDO1FBQ2YsS0FBSyxXQUFXLE1BQU0sUUFBUSxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFFcEM7UUFDQSxPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osT0FBTyxJQUFNO1FBQ2pCO0lBQ0o7SUFDQSxLQUFLLElBQUksRUFBRTtRQUNQLE1BQU0sUUFBUSxDQUFDO1FBQ2YsS0FBSyxXQUFXLElBQUksQ0FBQyxPQUFPLFFBQVEsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUVwQztRQUNBLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixPQUFPLElBQU07UUFDakI7SUFDSjtJQUNBOztLQUVDLEdBQ0QsY0FBYztRQUNWLE9BQU8sZUFBZSxJQUFJO0lBQzlCO0lBQ0EsUUFBUSxJQUFJLEVBQUU7UUFDVixNQUFNLFdBQVcsQ0FBQztRQUNsQixLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sUUFBUSxDQUFDO1lBQ2pDLE1BQU0sY0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDbkMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFDbEIsUUFBUSxDQUFDLElBQUksR0FBRztpQkFHaEIsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZO1FBRXBDO1FBQ0EsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLE9BQU8sSUFBTTtRQUNqQjtJQUNKO0lBQ0EsU0FBUyxJQUFJLEVBQUU7UUFDWCxNQUFNLFdBQVcsQ0FBQztRQUNsQixLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sUUFBUSxDQUFDO1lBQ2pDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2xCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2lCQUU5QjtnQkFDRCxNQUFNLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNuQyxJQUFJLFdBQVc7Z0JBQ2YsTUFBTyxvQkFBb0IsWUFDdkIsV0FBVyxTQUFTLEtBQUs7Z0JBRTdCLFFBQVEsQ0FBQyxJQUFJLEdBQUc7WUFDcEI7UUFDSjtRQUNBLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixPQUFPLElBQU07UUFDakI7SUFDSjtJQUNBLFFBQVE7UUFDSixPQUFPLGNBQWMsS0FBSyxXQUFXLElBQUksQ0FBQztJQUM5QztBQUNKO0FBQ0EsVUFBVSxTQUFTLENBQUMsT0FBTztJQUN2QixPQUFPLElBQUksVUFBVTtRQUNqQixPQUFPLElBQU07UUFDYixhQUFhO1FBQ2IsVUFBVSxTQUFTO1FBQ25CLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLFVBQVUsZUFBZSxDQUFDLE9BQU87SUFDN0IsT0FBTyxJQUFJLFVBQVU7UUFDakIsT0FBTyxJQUFNO1FBQ2IsYUFBYTtRQUNiLFVBQVUsU0FBUztRQUNuQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxVQUFVLGFBQWEsQ0FBQyxPQUFPO0lBQzNCLE9BQU8sSUFBSSxVQUFVO1FBQ2pCO1FBQ0EsYUFBYTtRQUNiLFVBQVUsU0FBUztRQUNuQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGlCQUFpQjtJQUNuQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBSztRQUMxQixTQUFTLGNBQWMsT0FBTztZQUMxQixrREFBa0Q7WUFDbEQsS0FBSyxNQUFNLFVBQVUsUUFBUztnQkFDMUIsSUFBSSxPQUFPLE9BQU8sV0FBVyxTQUN6QixPQUFPLE9BQU87WUFFdEI7WUFDQSxLQUFLLE1BQU0sVUFBVSxRQUNqQixJQUFJLE9BQU8sT0FBTyxXQUFXLFNBQVM7Z0JBQ2xDLCtCQUErQjtnQkFDL0IsSUFBSSxPQUFPLE9BQU8sUUFBUSxPQUFPLElBQUksT0FBTztnQkFDNUMsT0FBTyxPQUFPO1lBQ2xCO1lBRUosaUJBQWlCO1lBQ2pCLE1BQU0sY0FBYyxRQUFRLElBQUksQ0FBQyxTQUFXLElBQUksU0FBUyxPQUFPLElBQUksT0FBTztZQUMzRSxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQjtZQUNKO1lBQ0EsT0FBTztRQUNYO1FBQ0EsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsSUFBSSxRQUFRLElBQUksT0FBTztZQUNsQyxNQUFNLFdBQVc7Z0JBQ2IsR0FBRyxHQUFHO2dCQUNOLFFBQVE7b0JBQ0osR0FBRyxJQUFJLE1BQU07b0JBQ2IsUUFBUSxFQUFFO2dCQUNkO2dCQUNBLFFBQVE7WUFDWjtZQUNBLE9BQU87Z0JBQ0gsUUFBUSxNQUFNLE9BQU8sWUFBWTtvQkFDN0IsTUFBTSxJQUFJO29CQUNWLE1BQU0sSUFBSTtvQkFDVixRQUFRO2dCQUNaO2dCQUNBLEtBQUs7WUFDVDtRQUNKLElBQUksS0FBSzthQUVSO1lBQ0QsSUFBSSxRQUFRO1lBQ1osTUFBTSxTQUFTLEVBQUU7WUFDakIsS0FBSyxNQUFNLFVBQVUsUUFBUztnQkFDMUIsTUFBTSxXQUFXO29CQUNiLEdBQUcsR0FBRztvQkFDTixRQUFRO3dCQUNKLEdBQUcsSUFBSSxNQUFNO3dCQUNiLFFBQVEsRUFBRTtvQkFDZDtvQkFDQSxRQUFRO2dCQUNaO2dCQUNBLE1BQU0sU0FBUyxPQUFPLFdBQVc7b0JBQzdCLE1BQU0sSUFBSTtvQkFDVixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLE9BQU8sV0FBVyxTQUNsQixPQUFPO3FCQUVOLElBQUksT0FBTyxXQUFXLFdBQVcsQ0FBQyxPQUNuQyxRQUFRO29CQUFFO29CQUFRLEtBQUs7Z0JBQVM7Z0JBRXBDLElBQUksU0FBUyxPQUFPLE9BQU8sUUFDdkIsT0FBTyxLQUFLLFNBQVMsT0FBTztZQUVwQztZQUNBLElBQUksT0FBTztnQkFDUCxJQUFJLE9BQU8sT0FBTyxRQUFRLE1BQU0sSUFBSSxPQUFPO2dCQUMzQyxPQUFPLE1BQU07WUFDakI7WUFDQSxNQUFNLGNBQWMsT0FBTyxJQUFJLENBQUMsU0FBVyxJQUFJLFNBQVM7WUFDeEQsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkI7WUFDSjtZQUNBLE9BQU87UUFDWDtJQUNKO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsU0FBUyxTQUFTLENBQUMsT0FBTztJQUN0QixPQUFPLElBQUksU0FBUztRQUNoQixTQUFTO1FBQ1QsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELE1BQU0sbUJBQW1CLENBQUM7SUFDdEIsSUFBSSxnQkFBZ0IsU0FDaEIsT0FBTyxpQkFBaUIsS0FBSztTQUU1QixJQUFJLGdCQUFnQixZQUNyQixPQUFPLGlCQUFpQixLQUFLO1NBRTVCLElBQUksZ0JBQWdCLFlBQ3JCLE9BQU87UUFBQyxLQUFLO0tBQU07U0FFbEIsSUFBSSxnQkFBZ0IsU0FDckIsT0FBTyxLQUFLO1NBRVgsSUFBSSxnQkFBZ0IsZUFDckIsbUNBQW1DO0lBQ25DLE9BQU8sS0FBSyxhQUFhLEtBQUs7U0FFN0IsSUFBSSxnQkFBZ0IsWUFDckIsT0FBTyxpQkFBaUIsS0FBSyxLQUFLO1NBRWpDLElBQUksZ0JBQWdCLGNBQ3JCLE9BQU87UUFBQztLQUFVO1NBRWpCLElBQUksZ0JBQWdCLFNBQ3JCLE9BQU87UUFBQztLQUFLO1NBRVosSUFBSSxnQkFBZ0IsYUFDckIsT0FBTztRQUFDO1dBQWMsaUJBQWlCLEtBQUs7S0FBVTtTQUVyRCxJQUFJLGdCQUFnQixhQUNyQixPQUFPO1FBQUM7V0FBUyxpQkFBaUIsS0FBSztLQUFVO1NBRWhELElBQUksZ0JBQWdCLFlBQ3JCLE9BQU8saUJBQWlCLEtBQUs7U0FFNUIsSUFBSSxnQkFBZ0IsYUFDckIsT0FBTyxpQkFBaUIsS0FBSztTQUU1QixJQUFJLGdCQUFnQixVQUNyQixPQUFPLGlCQUFpQixLQUFLLEtBQUs7U0FHbEMsT0FBTyxFQUFFO0FBRWpCO0FBQ0EsTUFBTSw4QkFBOEI7SUFDaEMsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxJQUFJLElBQUksZUFBZSxjQUFjLFFBQVE7WUFDekMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxNQUFNLGdCQUFnQixJQUFJLENBQUM7UUFDM0IsTUFBTSxxQkFBcUIsSUFBSSxJQUFJLENBQUMsY0FBYztRQUNsRCxNQUFNLFNBQVMsSUFBSSxDQUFDLFdBQVcsSUFBSTtRQUNuQyxJQUFJLENBQUMsUUFBUTtZQUNULGtCQUFrQixLQUFLO2dCQUNuQixNQUFNLGFBQWE7Z0JBQ25CLFNBQVMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXO2dCQUNwQyxNQUFNO29CQUFDO2lCQUFjO1lBQ3pCO1lBQ0EsT0FBTztRQUNYO1FBQ0EsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLE9BQU8sWUFBWTtZQUN0QixNQUFNLElBQUk7WUFDVixNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1o7YUFHQSxPQUFPLE9BQU8sV0FBVztZQUNyQixNQUFNLElBQUk7WUFDVixNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1o7SUFFUjtJQUNBLElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBOzs7Ozs7O0tBT0MsR0FDRCxPQUFPLE9BQU8sYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDMUMseUNBQXlDO1FBQ3pDLE1BQU0sYUFBYSxJQUFJO1FBQ3ZCLFFBQVE7UUFDUixLQUFLLE1BQU0sUUFBUSxRQUFTO1lBQ3hCLE1BQU0sc0JBQXNCLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxjQUFjO1lBQ3RFLElBQUksQ0FBQyxvQkFBb0IsUUFDckIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRSxjQUFjLGlEQUFpRCxDQUFDO1lBRXZILEtBQUssTUFBTSxTQUFTLG9CQUFxQjtnQkFDckMsSUFBSSxXQUFXLElBQUksUUFDZixNQUFNLElBQUksTUFBTSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sZUFBZSxxQkFBcUIsRUFBRSxPQUFPLE9BQU8sQ0FBQztnQkFFMUcsV0FBVyxJQUFJLE9BQU87WUFDMUI7UUFDSjtRQUNBLE9BQU8sSUFBSSxzQkFBc0I7WUFDN0IsVUFBVSxzQkFBc0I7WUFDaEM7WUFDQTtZQUNBO1lBQ0EsR0FBRyxvQkFBb0IsT0FBTztRQUNsQztJQUNKO0FBQ0o7QUFDQSxTQUFTLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDckIsTUFBTSxRQUFRLGNBQWM7SUFDNUIsTUFBTSxRQUFRLGNBQWM7SUFDNUIsSUFBSSxNQUFNLEdBQ04sT0FBTztRQUFFLE9BQU87UUFBTSxNQUFNO0lBQUU7U0FFN0IsSUFBSSxVQUFVLGNBQWMsVUFBVSxVQUFVLGNBQWMsUUFBUTtRQUN2RSxNQUFNLFFBQVEsS0FBSyxXQUFXO1FBQzlCLE1BQU0sYUFBYSxLQUNkLFdBQVcsR0FDWCxPQUFPLENBQUMsTUFBUSxNQUFNLFFBQVEsU0FBUztRQUM1QyxNQUFNLFNBQVM7WUFBRSxHQUFHLENBQUM7WUFBRSxHQUFHLENBQUM7UUFBQztRQUM1QixLQUFLLE1BQU0sT0FBTyxXQUFZO1lBQzFCLE1BQU0sY0FBYyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDOUMsSUFBSSxDQUFDLFlBQVksT0FDYixPQUFPO2dCQUFFLE9BQU87WUFBTTtZQUUxQixNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVk7UUFDOUI7UUFDQSxPQUFPO1lBQUUsT0FBTztZQUFNLE1BQU07UUFBTztJQUN2QyxPQUNLLElBQUksVUFBVSxjQUFjLFNBQVMsVUFBVSxjQUFjLE9BQU87UUFDckUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUNmLE9BQU87WUFBRSxPQUFPO1FBQU07UUFFMUIsTUFBTSxXQUFXLEVBQUU7UUFDbkIsSUFBSyxJQUFJLFFBQVEsR0FBRyxRQUFRLEVBQUUsUUFBUSxRQUFTO1lBQzNDLE1BQU0sUUFBUSxDQUFDLENBQUMsTUFBTTtZQUN0QixNQUFNLFFBQVEsQ0FBQyxDQUFDLE1BQU07WUFDdEIsTUFBTSxjQUFjLFlBQVksT0FBTztZQUN2QyxJQUFJLENBQUMsWUFBWSxPQUNiLE9BQU87Z0JBQUUsT0FBTztZQUFNO1lBRTFCLFNBQVMsS0FBSyxZQUFZO1FBQzlCO1FBQ0EsT0FBTztZQUFFLE9BQU87WUFBTSxNQUFNO1FBQVM7SUFDekMsT0FDSyxJQUFJLFVBQVUsY0FBYyxRQUM3QixVQUFVLGNBQWMsUUFDeEIsQ0FBQyxNQUFNLENBQUMsR0FDUixPQUFPO1FBQUUsT0FBTztRQUFNLE1BQU07SUFBRTtTQUc5QixPQUFPO1FBQUUsT0FBTztJQUFNO0FBRTlCO0FBQ0EsTUFBTSx3QkFBd0I7SUFDMUIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsTUFBTSxlQUFlLENBQUMsWUFBWTtZQUM5QixJQUFJLFVBQVUsZUFBZSxVQUFVLGNBQ25DLE9BQU87WUFFWCxNQUFNLFNBQVMsWUFBWSxXQUFXLE9BQU8sWUFBWTtZQUN6RCxJQUFJLENBQUMsT0FBTyxPQUFPO2dCQUNmLGtCQUFrQixLQUFLO29CQUNuQixNQUFNLGFBQWE7Z0JBQ3ZCO2dCQUNBLE9BQU87WUFDWDtZQUNBLElBQUksUUFBUSxlQUFlLFFBQVEsY0FDL0IsT0FBTztZQUVYLE9BQU87Z0JBQUUsUUFBUSxPQUFPO2dCQUFPLE9BQU8sT0FBTztZQUFLO1FBQ3REO1FBQ0EsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsSUFBSTtZQUNmLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWTtnQkFDdkIsTUFBTSxJQUFJO2dCQUNWLE1BQU0sSUFBSTtnQkFDVixRQUFRO1lBQ1o7WUFDQSxJQUFJLENBQUMsS0FBSyxNQUFNLFlBQVk7Z0JBQ3hCLE1BQU0sSUFBSTtnQkFDVixNQUFNLElBQUk7Z0JBQ1YsUUFBUTtZQUNaO1NBQ0gsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLE1BQU0sR0FBSyxhQUFhLE1BQU07YUFHOUMsT0FBTyxhQUFhLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVztZQUMxQyxNQUFNLElBQUk7WUFDVixNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxNQUFNLFdBQVc7WUFDM0IsTUFBTSxJQUFJO1lBQ1YsTUFBTSxJQUFJO1lBQ1YsUUFBUTtRQUNaO0lBRVI7QUFDSjtBQUNBLGdCQUFnQixTQUFTLENBQUMsTUFBTSxPQUFPO0lBQ25DLE9BQU8sSUFBSSxnQkFBZ0I7UUFDdkIsTUFBTTtRQUNOLE9BQU87UUFDUCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGlCQUFpQjtJQUNuQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRCxJQUFJLElBQUksZUFBZSxjQUFjLE9BQU87WUFDeEMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLE1BQU0sUUFBUTtZQUMxQyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixTQUFTLElBQUksQ0FBQyxLQUFLLE1BQU07Z0JBQ3pCLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxNQUFNO1lBQ1Y7WUFDQSxPQUFPO1FBQ1g7UUFDQSxNQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUssTUFBTSxRQUFRO1lBQ25ELGtCQUFrQixLQUFLO2dCQUNuQixNQUFNLGFBQWE7Z0JBQ25CLFNBQVMsSUFBSSxDQUFDLEtBQUssTUFBTTtnQkFDekIsV0FBVztnQkFDWCxPQUFPO2dCQUNQLE1BQU07WUFDVjtZQUNBLE9BQU87UUFDWDtRQUNBLE1BQU0sUUFBUTtlQUFJLElBQUk7U0FBSyxDQUN0QixJQUFJLENBQUMsTUFBTTtZQUNaLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQ3ZELElBQUksQ0FBQyxRQUNELE9BQU87WUFDWCxPQUFPLE9BQU8sT0FBTyxJQUFJLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxNQUFNO1FBQ3JFLEdBQ0ssT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDLElBQUksZUFBZTtRQUN4QyxJQUFJLElBQUksT0FBTyxPQUNYLE9BQU8sUUFBUSxJQUFJLE9BQU8sS0FBSyxDQUFDO1lBQzVCLE9BQU8sWUFBWSxXQUFXLFFBQVE7UUFDMUM7YUFHQSxPQUFPLFlBQVksV0FBVyxRQUFRO0lBRTlDO0lBQ0EsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLEtBQUssSUFBSSxFQUFFO1FBQ1AsT0FBTyxJQUFJLFNBQVM7WUFDaEIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaO1FBQ0o7SUFDSjtBQUNKO0FBQ0EsU0FBUyxTQUFTLENBQUMsU0FBUztJQUN4QixJQUFJLENBQUMsTUFBTSxRQUFRLFVBQ2YsTUFBTSxJQUFJLE1BQU07SUFFcEIsT0FBTyxJQUFJLFNBQVM7UUFDaEIsT0FBTztRQUNQLFVBQVUsc0JBQXNCO1FBQ2hDLE1BQU07UUFDTixHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGtCQUFrQjtJQUNwQixJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELElBQUksSUFBSSxlQUFlLGNBQWMsUUFBUTtZQUN6QyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixVQUFVLGNBQWM7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU87UUFDWDtRQUNBLE1BQU0sUUFBUSxFQUFFO1FBQ2hCLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBSztRQUMxQixNQUFNLFlBQVksSUFBSSxDQUFDLEtBQUs7UUFDNUIsSUFBSyxNQUFNLE9BQU8sSUFBSSxLQUNsQixNQUFNLEtBQUs7WUFDUCxLQUFLLFFBQVEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLEtBQUssSUFBSSxNQUFNO1lBQy9ELE9BQU8sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksTUFBTTtZQUM3RSxXQUFXLE9BQU8sSUFBSTtRQUMxQjtRQUVKLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxZQUFZLGlCQUFpQixRQUFRO2FBRzVDLE9BQU8sWUFBWSxnQkFBZ0IsUUFBUTtJQUVuRDtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxPQUFPLE9BQU8sS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7UUFDaEMsSUFBSSxrQkFBa0IsU0FDbEIsT0FBTyxJQUFJLFVBQVU7WUFDakIsU0FBUztZQUNULFdBQVc7WUFDWCxVQUFVLHNCQUFzQjtZQUNoQyxHQUFHLG9CQUFvQixNQUFNO1FBQ2pDO1FBRUosT0FBTyxJQUFJLFVBQVU7WUFDakIsU0FBUyxVQUFVO1lBQ25CLFdBQVc7WUFDWCxVQUFVLHNCQUFzQjtZQUNoQyxHQUFHLG9CQUFvQixPQUFPO1FBQ2xDO0lBQ0o7QUFDSjtBQUNBLE1BQU0sZUFBZTtJQUNqQixJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELElBQUksSUFBSSxlQUFlLGNBQWMsS0FBSztZQUN0QyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixVQUFVLGNBQWM7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU87UUFDWDtRQUNBLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBSztRQUMxQixNQUFNLFlBQVksSUFBSSxDQUFDLEtBQUs7UUFDNUIsTUFBTSxRQUFRO2VBQUksSUFBSSxLQUFLO1NBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNyRCxPQUFPO2dCQUNILEtBQUssUUFBUSxPQUFPLElBQUksbUJBQW1CLEtBQUssS0FBSyxJQUFJLE1BQU07b0JBQUM7b0JBQU87aUJBQU07Z0JBQzdFLE9BQU8sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssT0FBTyxJQUFJLE1BQU07b0JBQUM7b0JBQU87aUJBQVE7WUFDekY7UUFDSjtRQUNBLElBQUksSUFBSSxPQUFPLE9BQU87WUFDbEIsTUFBTSxXQUFXLElBQUk7WUFDckIsT0FBTyxRQUFRLFVBQVUsS0FBSztnQkFDMUIsS0FBSyxNQUFNLFFBQVEsTUFBTztvQkFDdEIsTUFBTSxNQUFNLE1BQU0sS0FBSztvQkFDdkIsTUFBTSxRQUFRLE1BQU0sS0FBSztvQkFDekIsSUFBSSxJQUFJLFdBQVcsYUFBYSxNQUFNLFdBQVcsV0FDN0MsT0FBTztvQkFFWCxJQUFJLElBQUksV0FBVyxXQUFXLE1BQU0sV0FBVyxTQUMzQyxPQUFPO29CQUVYLFNBQVMsSUFBSSxJQUFJLE9BQU8sTUFBTTtnQkFDbEM7Z0JBQ0EsT0FBTztvQkFBRSxRQUFRLE9BQU87b0JBQU8sT0FBTztnQkFBUztZQUNuRDtRQUNKLE9BQ0s7WUFDRCxNQUFNLFdBQVcsSUFBSTtZQUNyQixLQUFLLE1BQU0sUUFBUSxNQUFPO2dCQUN0QixNQUFNLE1BQU0sS0FBSztnQkFDakIsTUFBTSxRQUFRLEtBQUs7Z0JBQ25CLElBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFdBQzdDLE9BQU87Z0JBRVgsSUFBSSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsU0FDM0MsT0FBTztnQkFFWCxTQUFTLElBQUksSUFBSSxPQUFPLE1BQU07WUFDbEM7WUFDQSxPQUFPO2dCQUFFLFFBQVEsT0FBTztnQkFBTyxPQUFPO1lBQVM7UUFDbkQ7SUFDSjtBQUNKO0FBQ0EsT0FBTyxTQUFTLENBQUMsU0FBUyxXQUFXO0lBQ2pDLE9BQU8sSUFBSSxPQUFPO1FBQ2Q7UUFDQTtRQUNBLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0sZUFBZTtJQUNqQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRCxJQUFJLElBQUksZUFBZSxjQUFjLEtBQUs7WUFDdEMsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxNQUFNLE1BQU0sSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxZQUFZLE1BQ2hCO1lBQUEsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTztnQkFDbkMsa0JBQWtCLEtBQUs7b0JBQ25CLE1BQU0sYUFBYTtvQkFDbkIsU0FBUyxJQUFJLFFBQVE7b0JBQ3JCLE1BQU07b0JBQ04sV0FBVztvQkFDWCxPQUFPO29CQUNQLFNBQVMsSUFBSSxRQUFRO2dCQUN6QjtnQkFDQSxPQUFPO1lBQ1g7UUFBQTtRQUVKLElBQUksSUFBSSxZQUFZLE1BQ2hCO1lBQUEsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTztnQkFDbkMsa0JBQWtCLEtBQUs7b0JBQ25CLE1BQU0sYUFBYTtvQkFDbkIsU0FBUyxJQUFJLFFBQVE7b0JBQ3JCLE1BQU07b0JBQ04sV0FBVztvQkFDWCxPQUFPO29CQUNQLFNBQVMsSUFBSSxRQUFRO2dCQUN6QjtnQkFDQSxPQUFPO1lBQ1g7UUFBQTtRQUVKLE1BQU0sWUFBWSxJQUFJLENBQUMsS0FBSztRQUM1QixTQUFTLFlBQVksUUFBUTtZQUN6QixNQUFNLFlBQVksSUFBSTtZQUN0QixLQUFLLE1BQU0sV0FBVyxTQUFVO2dCQUM1QixJQUFJLFFBQVEsV0FBVyxXQUNuQixPQUFPO2dCQUNYLElBQUksUUFBUSxXQUFXLFNBQ25CLE9BQU87Z0JBQ1gsVUFBVSxJQUFJLFFBQVE7WUFDMUI7WUFDQSxPQUFPO2dCQUFFLFFBQVEsT0FBTztnQkFBTyxPQUFPO1lBQVU7UUFDcEQ7UUFDQSxNQUFNLFdBQVc7ZUFBSSxJQUFJLEtBQUs7U0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQU0sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU07UUFDdEgsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsSUFBSSxVQUFVLEtBQUssQ0FBQyxXQUFhLFlBQVk7YUFHNUQsT0FBTyxZQUFZO0lBRTNCO0lBQ0EsSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxPQUFPO1lBQ2QsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFNBQVM7Z0JBQUUsT0FBTztnQkFBUyxTQUFTLFVBQVUsU0FBUztZQUFTO1FBQ3BFO0lBQ0o7SUFDQSxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDbEIsT0FBTyxJQUFJLE9BQU87WUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osU0FBUztnQkFBRSxPQUFPO2dCQUFTLFNBQVMsVUFBVSxTQUFTO1lBQVM7UUFDcEU7SUFDSjtJQUNBLEtBQUssSUFBSSxFQUFFLE9BQU8sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLE1BQU0sU0FBUyxJQUFJLE1BQU07SUFDN0M7SUFDQSxTQUFTLE9BQU8sRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRztJQUN2QjtBQUNKO0FBQ0EsT0FBTyxTQUFTLENBQUMsV0FBVztJQUN4QixPQUFPLElBQUksT0FBTztRQUNkO1FBQ0EsU0FBUztRQUNULFNBQVM7UUFDVCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLG9CQUFvQjtJQUN0QixhQUFjO1FBQ1YsS0FBSyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDO0lBQ3pCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxJQUFJLElBQUksZUFBZSxjQUFjLFVBQVU7WUFDM0Msa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxTQUFTLGNBQWMsSUFBSSxFQUFFLEtBQUs7WUFDOUIsT0FBTyxVQUFVO2dCQUNiLE1BQU07Z0JBQ04sTUFBTSxJQUFJO2dCQUNWLFdBQVc7b0JBQ1AsSUFBSSxPQUFPO29CQUNYLElBQUk7b0JBQ0o7b0JBQ0E7aUJBQ0gsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQ2xCLFdBQVc7b0JBQ1AsTUFBTSxhQUFhO29CQUNuQixnQkFBZ0I7Z0JBQ3BCO1lBQ0o7UUFDSjtRQUNBLFNBQVMsaUJBQWlCLE9BQU8sRUFBRSxLQUFLO1lBQ3BDLE9BQU8sVUFBVTtnQkFDYixNQUFNO2dCQUNOLE1BQU0sSUFBSTtnQkFDVixXQUFXO29CQUNQLElBQUksT0FBTztvQkFDWCxJQUFJO29CQUNKO29CQUNBO2lCQUNILENBQUMsT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO2dCQUNsQixXQUFXO29CQUNQLE1BQU0sYUFBYTtvQkFDbkIsaUJBQWlCO2dCQUNyQjtZQUNKO1FBQ0o7UUFDQSxNQUFNLFNBQVM7WUFBRSxVQUFVLElBQUksT0FBTztRQUFtQjtRQUN6RCxNQUFNLEtBQUssSUFBSTtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssbUJBQW1CLFlBQVk7WUFDekMsNkRBQTZEO1lBQzdELDJEQUEyRDtZQUMzRCw0REFBNEQ7WUFDNUQsTUFBTSxLQUFLLElBQUk7WUFDZixPQUFPLEdBQUcsZUFBZ0IsR0FBRyxJQUFJO2dCQUM3QixNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7Z0JBQzdCLE1BQU0sYUFBYSxNQUFNLEdBQUcsS0FBSyxLQUM1QixXQUFXLE1BQU0sUUFDakIsTUFBTSxDQUFDO29CQUNSLE1BQU0sU0FBUyxjQUFjLE1BQU07b0JBQ25DLE1BQU07Z0JBQ1Y7Z0JBQ0EsTUFBTSxTQUFTLE1BQU0sUUFBUSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUM3QyxNQUFNLGdCQUFnQixNQUFNLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FDNUMsV0FBVyxRQUFRLFFBQ25CLE1BQU0sQ0FBQztvQkFDUixNQUFNLFNBQVMsaUJBQWlCLFFBQVE7b0JBQ3hDLE1BQU07Z0JBQ1Y7Z0JBQ0EsT0FBTztZQUNYO1FBQ0osT0FDSztZQUNELDZEQUE2RDtZQUM3RCwyREFBMkQ7WUFDM0QsNERBQTREO1lBQzVELE1BQU0sS0FBSyxJQUFJO1lBQ2YsT0FBTyxHQUFHLFNBQVUsR0FBRyxJQUFJO2dCQUN2QixNQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssVUFBVSxNQUFNO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxTQUNaLE1BQU0sSUFBSSxTQUFTO29CQUFDLGNBQWMsTUFBTSxXQUFXO2lCQUFPO2dCQUU5RCxNQUFNLFNBQVMsUUFBUSxNQUFNLElBQUksSUFBSSxFQUFFLFdBQVc7Z0JBQ2xELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxRQUFRLFVBQVUsUUFBUTtnQkFDeEQsSUFBSSxDQUFDLGNBQWMsU0FDZixNQUFNLElBQUksU0FBUztvQkFBQyxpQkFBaUIsUUFBUSxjQUFjO2lCQUFPO2dCQUV0RSxPQUFPLGNBQWM7WUFDekI7UUFDSjtJQUNKO0lBQ0EsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLEtBQUssR0FBRyxLQUFLLEVBQUU7UUFDWCxPQUFPLElBQUksWUFBWTtZQUNuQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osTUFBTSxTQUFTLE9BQU8sT0FBTyxLQUFLLFdBQVc7UUFDakQ7SUFDSjtJQUNBLFFBQVEsVUFBVSxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxZQUFZO1lBQ25CLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixTQUFTO1FBQ2I7SUFDSjtJQUNBLFVBQVUsSUFBSSxFQUFFO1FBQ1osTUFBTSxnQkFBZ0IsSUFBSSxDQUFDLE1BQU07UUFDakMsT0FBTztJQUNYO0lBQ0EsZ0JBQWdCLElBQUksRUFBRTtRQUNsQixNQUFNLGdCQUFnQixJQUFJLENBQUMsTUFBTTtRQUNqQyxPQUFPO0lBQ1g7SUFDQSxPQUFPLE9BQU8sSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDakMsT0FBTyxJQUFJLFlBQVk7WUFDbkIsTUFBTyxPQUNELE9BQ0EsU0FBUyxPQUFPLEVBQUUsRUFBRSxLQUFLLFdBQVc7WUFDMUMsU0FBUyxXQUFXLFdBQVc7WUFDL0IsVUFBVSxzQkFBc0I7WUFDaEMsR0FBRyxvQkFBb0IsT0FBTztRQUNsQztJQUNKO0FBQ0o7QUFDQSxNQUFNLGdCQUFnQjtJQUNsQixJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxNQUFNLGFBQWEsSUFBSSxDQUFDLEtBQUs7UUFDN0IsT0FBTyxXQUFXLE9BQU87WUFBRSxNQUFNLElBQUk7WUFBTSxNQUFNLElBQUk7WUFBTSxRQUFRO1FBQUk7SUFDM0U7QUFDSjtBQUNBLFFBQVEsU0FBUyxDQUFDLFFBQVE7SUFDdEIsT0FBTyxJQUFJLFFBQVE7UUFDZixRQUFRO1FBQ1IsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxtQkFBbUI7SUFDckIsT0FBTyxLQUFLLEVBQUU7UUFDVixJQUFJLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxPQUFPO1lBQ2hDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLGtCQUFrQixLQUFLO2dCQUNuQixVQUFVLElBQUk7Z0JBQ2QsTUFBTSxhQUFhO2dCQUNuQixVQUFVLElBQUksQ0FBQyxLQUFLO1lBQ3hCO1lBQ0EsT0FBTztRQUNYO1FBQ0EsT0FBTztZQUFFLFFBQVE7WUFBUyxPQUFPLE1BQU07UUFBSztJQUNoRDtJQUNBLElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7QUFDSjtBQUNBLFdBQVcsU0FBUyxDQUFDLE9BQU87SUFDeEIsT0FBTyxJQUFJLFdBQVc7UUFDbEIsT0FBTztRQUNQLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLFNBQVMsY0FBYyxNQUFNLEVBQUUsTUFBTTtJQUNqQyxPQUFPLElBQUksUUFBUTtRQUNmO1FBQ0EsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxnQkFBZ0I7SUFDbEIsYUFBYztRQUNWLEtBQUssSUFBSTtRQUNULGVBQWUsSUFBSSxJQUFJLEVBQUUsS0FBSztJQUNsQztJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsSUFBSSxPQUFPLE1BQU0sU0FBUyxVQUFVO1lBQ2hDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLE1BQU0saUJBQWlCLElBQUksQ0FBQyxLQUFLO1lBQ2pDLGtCQUFrQixLQUFLO2dCQUNuQixVQUFVLEtBQUssV0FBVztnQkFDMUIsVUFBVSxJQUFJO2dCQUNkLE1BQU0sYUFBYTtZQUN2QjtZQUNBLE9BQU87UUFDWDtRQUNBLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLGdCQUFnQixNQUM5Qyx1QkFBdUIsSUFBSSxFQUFFLGdCQUFnQixJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUztRQUU1RSxJQUFJLENBQUMsdUJBQXVCLElBQUksRUFBRSxnQkFBZ0IsS0FBSyxJQUFJLE1BQU0sT0FBTztZQUNwRSxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxNQUFNLGlCQUFpQixJQUFJLENBQUMsS0FBSztZQUNqQyxrQkFBa0IsS0FBSztnQkFDbkIsVUFBVSxJQUFJO2dCQUNkLE1BQU0sYUFBYTtnQkFDbkIsU0FBUztZQUNiO1lBQ0EsT0FBTztRQUNYO1FBQ0EsT0FBTyxHQUFHLE1BQU07SUFDcEI7SUFDQSxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxPQUFPO1FBQ1AsTUFBTSxhQUFhLENBQUM7UUFDcEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssT0FDeEIsVUFBVSxDQUFDLElBQUksR0FBRztRQUV0QixPQUFPO0lBQ1g7SUFDQSxJQUFJLFNBQVM7UUFDVCxNQUFNLGFBQWEsQ0FBQztRQUNwQixLQUFLLE1BQU0sT0FBTyxJQUFJLENBQUMsS0FBSyxPQUN4QixVQUFVLENBQUMsSUFBSSxHQUFHO1FBRXRCLE9BQU87SUFDWDtJQUNBLElBQUksT0FBTztRQUNQLE1BQU0sYUFBYSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQ3hCLFVBQVUsQ0FBQyxJQUFJLEdBQUc7UUFFdEIsT0FBTztJQUNYO0lBQ0EsUUFBUSxNQUFNLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2hDLE9BQU8sUUFBUSxPQUFPLFFBQVE7WUFDMUIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLEdBQUcsTUFBTTtRQUNiO0lBQ0o7SUFDQSxRQUFRLE1BQU0sRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDaEMsT0FBTyxRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLE1BQVEsQ0FBQyxPQUFPLFNBQVMsT0FBTztZQUN2RSxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osR0FBRyxNQUFNO1FBQ2I7SUFDSjtBQUNKO0FBQ0EsaUJBQWlCLElBQUk7QUFDckIsUUFBUSxTQUFTO0FBQ2pCLE1BQU0sc0JBQXNCO0lBQ3hCLGFBQWM7UUFDVixLQUFLLElBQUk7UUFDVCxxQkFBcUIsSUFBSSxJQUFJLEVBQUUsS0FBSztJQUN4QztJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxtQkFBbUIsS0FBSyxtQkFBbUIsSUFBSSxDQUFDLEtBQUs7UUFDM0QsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7UUFDakMsSUFBSSxJQUFJLGVBQWUsY0FBYyxVQUNqQyxJQUFJLGVBQWUsY0FBYyxRQUFRO1lBQ3pDLE1BQU0saUJBQWlCLEtBQUssYUFBYTtZQUN6QyxrQkFBa0IsS0FBSztnQkFDbkIsVUFBVSxLQUFLLFdBQVc7Z0JBQzFCLFVBQVUsSUFBSTtnQkFDZCxNQUFNLGFBQWE7WUFDdkI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxJQUFJLENBQUMsdUJBQXVCLElBQUksRUFBRSxzQkFBc0IsTUFDcEQsdUJBQXVCLElBQUksRUFBRSxzQkFBc0IsSUFBSSxJQUFJLEtBQUssbUJBQW1CLElBQUksQ0FBQyxLQUFLLFVBQVU7UUFFM0csSUFBSSxDQUFDLHVCQUF1QixJQUFJLEVBQUUsc0JBQXNCLEtBQUssSUFBSSxNQUFNLE9BQU87WUFDMUUsTUFBTSxpQkFBaUIsS0FBSyxhQUFhO1lBQ3pDLGtCQUFrQixLQUFLO2dCQUNuQixVQUFVLElBQUk7Z0JBQ2QsTUFBTSxhQUFhO2dCQUNuQixTQUFTO1lBQ2I7WUFDQSxPQUFPO1FBQ1g7UUFDQSxPQUFPLEdBQUcsTUFBTTtJQUNwQjtJQUNBLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7QUFDSjtBQUNBLHVCQUF1QixJQUFJO0FBQzNCLGNBQWMsU0FBUyxDQUFDLFFBQVE7SUFDNUIsT0FBTyxJQUFJLGNBQWM7UUFDckIsUUFBUTtRQUNSLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0sbUJBQW1CO0lBQ3JCLFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxJQUFJLElBQUksZUFBZSxjQUFjLFdBQ2pDLElBQUksT0FBTyxVQUFVLE9BQU87WUFDNUIsa0JBQWtCLEtBQUs7Z0JBQ25CLE1BQU0sYUFBYTtnQkFDbkIsVUFBVSxjQUFjO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPO1FBQ1g7UUFDQSxNQUFNLGNBQWMsSUFBSSxlQUFlLGNBQWMsVUFDL0MsSUFBSSxPQUNKLFFBQVEsUUFBUSxJQUFJO1FBQzFCLE9BQU8sR0FBRyxZQUFZLEtBQUssQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxNQUFNO2dCQUNuQyxNQUFNLElBQUk7Z0JBQ1YsVUFBVSxJQUFJLE9BQU87WUFDekI7UUFDSjtJQUNKO0FBQ0o7QUFDQSxXQUFXLFNBQVMsQ0FBQyxRQUFRO0lBQ3pCLE9BQU8sSUFBSSxXQUFXO1FBQ2xCLE1BQU07UUFDTixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLG1CQUFtQjtJQUNyQixZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxhQUFhLHNCQUFzQixhQUMxRCxJQUFJLENBQUMsS0FBSyxPQUFPLGVBQ2pCLElBQUksQ0FBQyxLQUFLO0lBQ3BCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLFVBQVU7UUFDbkMsTUFBTSxXQUFXO1lBQ2IsVUFBVSxDQUFDO2dCQUNQLGtCQUFrQixLQUFLO2dCQUN2QixJQUFJLElBQUksT0FDSixPQUFPO3FCQUdQLE9BQU87WUFFZjtZQUNBLElBQUksUUFBTztnQkFDUCxPQUFPLElBQUk7WUFDZjtRQUNKO1FBQ0EsU0FBUyxXQUFXLFNBQVMsU0FBUyxLQUFLO1FBQzNDLElBQUksT0FBTyxTQUFTLGNBQWM7WUFDOUIsTUFBTSxZQUFZLE9BQU8sVUFBVSxJQUFJLE1BQU07WUFDN0MsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsUUFBUSxXQUFXLEtBQUssT0FBTztnQkFDMUMsSUFBSSxPQUFPLFVBQVUsV0FDakIsT0FBTztnQkFDWCxNQUFNLFNBQVMsTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFPLFlBQVk7b0JBQzlDLE1BQU07b0JBQ04sTUFBTSxJQUFJO29CQUNWLFFBQVE7Z0JBQ1o7Z0JBQ0EsSUFBSSxPQUFPLFdBQVcsV0FDbEIsT0FBTztnQkFDWCxJQUFJLE9BQU8sV0FBVyxTQUNsQixPQUFPLE1BQU0sT0FBTztnQkFDeEIsSUFBSSxPQUFPLFVBQVUsU0FDakIsT0FBTyxNQUFNLE9BQU87Z0JBQ3hCLE9BQU87WUFDWDtpQkFFQztnQkFDRCxJQUFJLE9BQU8sVUFBVSxXQUNqQixPQUFPO2dCQUNYLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxPQUFPLFdBQVc7b0JBQ3ZDLE1BQU07b0JBQ04sTUFBTSxJQUFJO29CQUNWLFFBQVE7Z0JBQ1o7Z0JBQ0EsSUFBSSxPQUFPLFdBQVcsV0FDbEIsT0FBTztnQkFDWCxJQUFJLE9BQU8sV0FBVyxTQUNsQixPQUFPLE1BQU0sT0FBTztnQkFDeEIsSUFBSSxPQUFPLFVBQVUsU0FDakIsT0FBTyxNQUFNLE9BQU87Z0JBQ3hCLE9BQU87WUFDWDtRQUNKO1FBQ0EsSUFBSSxPQUFPLFNBQVMsY0FBYztZQUM5QixNQUFNLG9CQUFvQixDQUFDO2dCQUN2QixNQUFNLFNBQVMsT0FBTyxXQUFXLEtBQUs7Z0JBQ3RDLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxRQUFRLFFBQVE7Z0JBRTNCLElBQUksa0JBQWtCLFNBQ2xCLE1BQU0sSUFBSSxNQUFNO2dCQUVwQixPQUFPO1lBQ1g7WUFDQSxJQUFJLElBQUksT0FBTyxVQUFVLE9BQU87Z0JBQzVCLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSyxPQUFPLFdBQVc7b0JBQ3RDLE1BQU0sSUFBSTtvQkFDVixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLE1BQU0sV0FBVyxXQUNqQixPQUFPO2dCQUNYLElBQUksTUFBTSxXQUFXLFNBQ2pCLE9BQU87Z0JBQ1gsMEJBQTBCO2dCQUMxQixrQkFBa0IsTUFBTTtnQkFDeEIsT0FBTztvQkFBRSxRQUFRLE9BQU87b0JBQU8sT0FBTyxNQUFNO2dCQUFNO1lBQ3RELE9BRUksT0FBTyxJQUFJLENBQUMsS0FBSyxPQUNaLFlBQVk7Z0JBQUUsTUFBTSxJQUFJO2dCQUFNLE1BQU0sSUFBSTtnQkFBTSxRQUFRO1lBQUksR0FDMUQsS0FBSyxDQUFDO2dCQUNQLElBQUksTUFBTSxXQUFXLFdBQ2pCLE9BQU87Z0JBQ1gsSUFBSSxNQUFNLFdBQVcsU0FDakIsT0FBTztnQkFDWCxPQUFPLGtCQUFrQixNQUFNLE9BQU8sS0FBSztvQkFDdkMsT0FBTzt3QkFBRSxRQUFRLE9BQU87d0JBQU8sT0FBTyxNQUFNO29CQUFNO2dCQUN0RDtZQUNKO1FBRVI7UUFDQSxJQUFJLE9BQU8sU0FBUyxhQUFhO1lBQzdCLElBQUksSUFBSSxPQUFPLFVBQVUsT0FBTztnQkFDNUIsTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sV0FBVztvQkFDckMsTUFBTSxJQUFJO29CQUNWLE1BQU0sSUFBSTtvQkFDVixRQUFRO2dCQUNaO2dCQUNBLElBQUksQ0FBQyxRQUFRLE9BQ1QsT0FBTztnQkFDWCxNQUFNLFNBQVMsT0FBTyxVQUFVLEtBQUssT0FBTztnQkFDNUMsSUFBSSxrQkFBa0IsU0FDbEIsTUFBTSxJQUFJLE1BQU0sQ0FBQywrRkFBK0YsQ0FBQztnQkFFckgsT0FBTztvQkFBRSxRQUFRLE9BQU87b0JBQU8sT0FBTztnQkFBTztZQUNqRCxPQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssT0FDWixZQUFZO2dCQUFFLE1BQU0sSUFBSTtnQkFBTSxNQUFNLElBQUk7Z0JBQU0sUUFBUTtZQUFJLEdBQzFELEtBQUssQ0FBQztnQkFDUCxJQUFJLENBQUMsUUFBUSxPQUNULE9BQU87Z0JBQ1gsT0FBTyxRQUFRLFFBQVEsT0FBTyxVQUFVLEtBQUssT0FBTyxXQUFXLEtBQUssQ0FBQyxTQUFZLENBQUE7d0JBQUUsUUFBUSxPQUFPO3dCQUFPLE9BQU87b0JBQU8sQ0FBQTtZQUMzSDtRQUVSO1FBQ0EsS0FBSyxZQUFZO0lBQ3JCO0FBQ0o7QUFDQSxXQUFXLFNBQVMsQ0FBQyxRQUFRLFFBQVE7SUFDakMsT0FBTyxJQUFJLFdBQVc7UUFDbEI7UUFDQSxVQUFVLHNCQUFzQjtRQUNoQztRQUNBLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLFdBQVcsdUJBQXVCLENBQUMsWUFBWSxRQUFRO0lBQ25ELE9BQU8sSUFBSSxXQUFXO1FBQ2xCO1FBQ0EsUUFBUTtZQUFFLE1BQU07WUFBYyxXQUFXO1FBQVc7UUFDcEQsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxvQkFBb0I7SUFDdEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLGNBQWMsV0FDN0IsT0FBTyxHQUFHO1FBRWQsT0FBTyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87SUFDdEM7SUFDQSxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsWUFBWSxTQUFTLENBQUMsTUFBTTtJQUN4QixPQUFPLElBQUksWUFBWTtRQUNuQixXQUFXO1FBQ1gsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxvQkFBb0I7SUFDdEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLGNBQWMsTUFDN0IsT0FBTyxHQUFHO1FBRWQsT0FBTyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87SUFDdEM7SUFDQSxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsWUFBWSxTQUFTLENBQUMsTUFBTTtJQUN4QixPQUFPLElBQUksWUFBWTtRQUNuQixXQUFXO1FBQ1gsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsTUFBTSxtQkFBbUI7SUFDckIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxJQUFJLE9BQU8sSUFBSTtRQUNmLElBQUksSUFBSSxlQUFlLGNBQWMsV0FDakMsT0FBTyxJQUFJLENBQUMsS0FBSztRQUVyQixPQUFPLElBQUksQ0FBQyxLQUFLLFVBQVUsT0FBTztZQUM5QjtZQUNBLE1BQU0sSUFBSTtZQUNWLFFBQVE7UUFDWjtJQUNKO0lBQ0EsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsV0FBVyxTQUFTLENBQUMsTUFBTTtJQUN2QixPQUFPLElBQUksV0FBVztRQUNsQixXQUFXO1FBQ1gsVUFBVSxzQkFBc0I7UUFDaEMsY0FBYyxPQUFPLE9BQU8sWUFBWSxhQUNsQyxPQUFPLFVBQ1AsSUFBTSxPQUFPO1FBQ25CLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLE1BQU0saUJBQWlCO0lBQ25CLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDekMsK0RBQStEO1FBQy9ELE1BQU0sU0FBUztZQUNYLEdBQUcsR0FBRztZQUNOLFFBQVE7Z0JBQ0osR0FBRyxJQUFJLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO1lBQ2Q7UUFDSjtRQUNBLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87WUFDdEMsTUFBTSxPQUFPO1lBQ2IsTUFBTSxPQUFPO1lBQ2IsUUFBUTtnQkFDSixHQUFHLE1BQU07WUFDYjtRQUNKO1FBQ0EsSUFBSSxRQUFRLFNBQ1IsT0FBTyxPQUFPLEtBQUssQ0FBQztZQUNoQixPQUFPO2dCQUNILFFBQVE7Z0JBQ1IsT0FBTyxPQUFPLFdBQVcsVUFDbkIsT0FBTyxRQUNQLElBQUksQ0FBQyxLQUFLLFdBQVc7b0JBQ25CLElBQUksU0FBUTt3QkFDUixPQUFPLElBQUksU0FBUyxPQUFPLE9BQU87b0JBQ3RDO29CQUNBLE9BQU8sT0FBTztnQkFDbEI7WUFDUjtRQUNKO2FBR0EsT0FBTztZQUNILFFBQVE7WUFDUixPQUFPLE9BQU8sV0FBVyxVQUNuQixPQUFPLFFBQ1AsSUFBSSxDQUFDLEtBQUssV0FBVztnQkFDbkIsSUFBSSxTQUFRO29CQUNSLE9BQU8sSUFBSSxTQUFTLE9BQU8sT0FBTztnQkFDdEM7Z0JBQ0EsT0FBTyxPQUFPO1lBQ2xCO1FBQ1I7SUFFUjtJQUNBLGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQyxNQUFNO0lBQ3JCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLFdBQVc7UUFDWCxVQUFVLHNCQUFzQjtRQUNoQyxZQUFZLE9BQU8sT0FBTyxVQUFVLGFBQWEsT0FBTyxRQUFRLElBQU0sT0FBTztRQUM3RSxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLGVBQWU7SUFDakIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLGNBQWMsS0FBSztZQUNsQyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxrQkFBa0IsS0FBSztnQkFDbkIsTUFBTSxhQUFhO2dCQUNuQixVQUFVLGNBQWM7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU87UUFDWDtRQUNBLE9BQU87WUFBRSxRQUFRO1lBQVMsT0FBTyxNQUFNO1FBQUs7SUFDaEQ7QUFDSjtBQUNBLE9BQU8sU0FBUyxDQUFDO0lBQ2IsT0FBTyxJQUFJLE9BQU87UUFDZCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxNQUFNLFFBQVEsT0FBTztBQUNyQixNQUFNLG1CQUFtQjtJQUNyQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLE1BQU0sT0FBTyxJQUFJO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPO1lBQ3pCO1lBQ0EsTUFBTSxJQUFJO1lBQ1YsUUFBUTtRQUNaO0lBQ0o7SUFDQSxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsTUFBTSxvQkFBb0I7SUFDdEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsSUFBSSxJQUFJLE9BQU8sT0FBTztZQUNsQixNQUFNLGNBQWM7Z0JBQ2hCLE1BQU0sV0FBVyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWTtvQkFDNUMsTUFBTSxJQUFJO29CQUNWLE1BQU0sSUFBSTtvQkFDVixRQUFRO2dCQUNaO2dCQUNBLElBQUksU0FBUyxXQUFXLFdBQ3BCLE9BQU87Z0JBQ1gsSUFBSSxTQUFTLFdBQVcsU0FBUztvQkFDN0IsT0FBTztvQkFDUCxPQUFPLE1BQU0sU0FBUztnQkFDMUIsT0FFSSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksWUFBWTtvQkFDN0IsTUFBTSxTQUFTO29CQUNmLE1BQU0sSUFBSTtvQkFDVixRQUFRO2dCQUNaO1lBRVI7WUFDQSxPQUFPO1FBQ1gsT0FDSztZQUNELE1BQU0sV0FBVyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVc7Z0JBQ3JDLE1BQU0sSUFBSTtnQkFDVixNQUFNLElBQUk7Z0JBQ1YsUUFBUTtZQUNaO1lBQ0EsSUFBSSxTQUFTLFdBQVcsV0FDcEIsT0FBTztZQUNYLElBQUksU0FBUyxXQUFXLFNBQVM7Z0JBQzdCLE9BQU87Z0JBQ1AsT0FBTztvQkFDSCxRQUFRO29CQUNSLE9BQU8sU0FBUztnQkFDcEI7WUFDSixPQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXO2dCQUM1QixNQUFNLFNBQVM7Z0JBQ2YsTUFBTSxJQUFJO2dCQUNWLFFBQVE7WUFDWjtRQUVSO0lBQ0o7SUFDQSxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNoQixPQUFPLElBQUksWUFBWTtZQUNuQixJQUFJO1lBQ0osS0FBSztZQUNMLFVBQVUsc0JBQXNCO1FBQ3BDO0lBQ0o7QUFDSjtBQUNBLE1BQU0sb0JBQW9CO0lBQ3RCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLFVBQVUsT0FBTztRQUMxQyxNQUFNLFNBQVMsQ0FBQztZQUNaLElBQUksUUFBUSxPQUNSLEtBQUssUUFBUSxPQUFPLE9BQU8sS0FBSztZQUVwQyxPQUFPO1FBQ1g7UUFDQSxPQUFPLFFBQVEsVUFDVCxPQUFPLEtBQUssQ0FBQyxPQUFTLE9BQU8sU0FDN0IsT0FBTztJQUNqQjtJQUNBLFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDQSxZQUFZLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLE9BQU8sSUFBSSxZQUFZO1FBQ25CLFdBQVc7UUFDWCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsU0FBUyxZQUFZLE1BQU0sRUFBRSxJQUFJO0lBQzdCLE1BQU0sSUFBSSxPQUFPLFdBQVcsYUFDdEIsT0FBTyxRQUNQLE9BQU8sV0FBVyxXQUNkO1FBQUUsU0FBUztJQUFPLElBQ2xCO0lBQ1YsTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXO1FBQUUsU0FBUztJQUFFLElBQUk7SUFDcEQsT0FBTztBQUNYO0FBQ0EsU0FBUyxPQUFPLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUNuQzs7Ozs7Ozs7O0NBU0MsR0FDRCxLQUFLO0lBQ0QsSUFBSSxPQUNBLE9BQU8sT0FBTyxTQUFTLFlBQVksQ0FBQyxNQUFNO1FBQ3RDLElBQUksSUFBSTtRQUNSLE1BQU0sSUFBSSxNQUFNO1FBQ2hCLElBQUksYUFBYSxTQUNiLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDWCxJQUFJLElBQUk7WUFDUixJQUFJLENBQUMsR0FBRztnQkFDSixNQUFNLFNBQVMsWUFBWSxTQUFTO2dCQUNwQyxNQUFNLFNBQVMsQUFBQyxDQUFBLEtBQUssQUFBQyxDQUFBLEtBQUssT0FBTyxLQUFJLE1BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLLEtBQUksTUFBTyxRQUFRLE9BQU8sS0FBSyxJQUFJLEtBQUs7Z0JBQ2xILElBQUksU0FBUztvQkFBRSxNQUFNO29CQUFVLEdBQUcsTUFBTTtvQkFBRSxPQUFPO2dCQUFPO1lBQzVEO1FBQ0o7UUFFSixJQUFJLENBQUMsR0FBRztZQUNKLE1BQU0sU0FBUyxZQUFZLFNBQVM7WUFDcEMsTUFBTSxTQUFTLEFBQUMsQ0FBQSxLQUFLLEFBQUMsQ0FBQSxLQUFLLE9BQU8sS0FBSSxNQUFPLFFBQVEsT0FBTyxLQUFLLElBQUksS0FBSyxLQUFJLE1BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLO1lBQ2xILElBQUksU0FBUztnQkFBRSxNQUFNO2dCQUFVLEdBQUcsTUFBTTtnQkFBRSxPQUFPO1lBQU87UUFDNUQ7UUFDQTtJQUNKO0lBQ0osT0FBTyxPQUFPO0FBQ2xCO0FBQ0EsTUFBTSxPQUFPO0lBQ1QsUUFBUSxVQUFVO0FBQ3RCO0FBQ0EsSUFBSTtBQUNILENBQUEsU0FBVSxxQkFBcUI7SUFDNUIscUJBQXFCLENBQUMsWUFBWSxHQUFHO0lBQ3JDLHFCQUFxQixDQUFDLFlBQVksR0FBRztJQUNyQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7SUFDbEMscUJBQXFCLENBQUMsWUFBWSxHQUFHO0lBQ3JDLHFCQUFxQixDQUFDLGFBQWEsR0FBRztJQUN0QyxxQkFBcUIsQ0FBQyxVQUFVLEdBQUc7SUFDbkMscUJBQXFCLENBQUMsWUFBWSxHQUFHO0lBQ3JDLHFCQUFxQixDQUFDLGVBQWUsR0FBRztJQUN4QyxxQkFBcUIsQ0FBQyxVQUFVLEdBQUc7SUFDbkMscUJBQXFCLENBQUMsU0FBUyxHQUFHO0lBQ2xDLHFCQUFxQixDQUFDLGFBQWEsR0FBRztJQUN0QyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUc7SUFDcEMscUJBQXFCLENBQUMsVUFBVSxHQUFHO0lBQ25DLHFCQUFxQixDQUFDLFdBQVcsR0FBRztJQUNwQyxxQkFBcUIsQ0FBQyxZQUFZLEdBQUc7SUFDckMscUJBQXFCLENBQUMsV0FBVyxHQUFHO0lBQ3BDLHFCQUFxQixDQUFDLHdCQUF3QixHQUFHO0lBQ2pELHFCQUFxQixDQUFDLGtCQUFrQixHQUFHO0lBQzNDLHFCQUFxQixDQUFDLFdBQVcsR0FBRztJQUNwQyxxQkFBcUIsQ0FBQyxZQUFZLEdBQUc7SUFDckMscUJBQXFCLENBQUMsU0FBUyxHQUFHO0lBQ2xDLHFCQUFxQixDQUFDLFNBQVMsR0FBRztJQUNsQyxxQkFBcUIsQ0FBQyxjQUFjLEdBQUc7SUFDdkMscUJBQXFCLENBQUMsVUFBVSxHQUFHO0lBQ25DLHFCQUFxQixDQUFDLGFBQWEsR0FBRztJQUN0QyxxQkFBcUIsQ0FBQyxVQUFVLEdBQUc7SUFDbkMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLGdCQUFnQixHQUFHO0lBQ3pDLHFCQUFxQixDQUFDLGNBQWMsR0FBRztJQUN2QyxxQkFBcUIsQ0FBQyxjQUFjLEdBQUc7SUFDdkMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLFdBQVcsR0FBRztJQUNwQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUc7SUFDdEMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLGNBQWMsR0FBRztJQUN2QyxxQkFBcUIsQ0FBQyxjQUFjLEdBQUc7QUFDM0MsQ0FBQSxFQUFHLHlCQUEwQixDQUFBLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsTUFBTSxpQkFBaUIsQ0FDdkIsa0VBQWtFO0FBQ2xFLEtBQUssU0FBUztJQUNWLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEtBQUssQ0FBQztBQUNoRCxDQUFDLEdBQUssT0FBTyxDQUFDLE9BQVMsZ0JBQWdCLEtBQUs7QUFDNUMsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxVQUFVLE9BQU87QUFDdkIsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxjQUFjLFdBQVc7QUFDL0IsTUFBTSxXQUFXLFFBQVE7QUFDekIsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxnQkFBZ0IsYUFBYTtBQUNuQyxNQUFNLFdBQVcsUUFBUTtBQUN6QixNQUFNLFVBQVUsT0FBTztBQUN2QixNQUFNLGNBQWMsV0FBVztBQUMvQixNQUFNLFlBQVksU0FBUztBQUMzQixNQUFNLFdBQVcsUUFBUTtBQUN6QixNQUFNLFlBQVksU0FBUztBQUMzQixNQUFNLGFBQWEsVUFBVTtBQUM3QixNQUFNLG1CQUFtQixVQUFVO0FBQ25DLE1BQU0sWUFBWSxTQUFTO0FBQzNCLE1BQU0seUJBQXlCLHNCQUFzQjtBQUNyRCxNQUFNLG1CQUFtQixnQkFBZ0I7QUFDekMsTUFBTSxZQUFZLFNBQVM7QUFDM0IsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxVQUFVLE9BQU87QUFDdkIsTUFBTSxVQUFVLE9BQU87QUFDdkIsTUFBTSxlQUFlLFlBQVk7QUFDakMsTUFBTSxXQUFXLFFBQVE7QUFDekIsTUFBTSxjQUFjLFdBQVc7QUFDL0IsTUFBTSxXQUFXLFFBQVE7QUFDekIsTUFBTSxpQkFBaUIsY0FBYztBQUNyQyxNQUFNLGNBQWMsV0FBVztBQUMvQixNQUFNLGNBQWMsV0FBVztBQUMvQixNQUFNLGVBQWUsWUFBWTtBQUNqQyxNQUFNLGVBQWUsWUFBWTtBQUNqQyxNQUFNLGlCQUFpQixXQUFXO0FBQ2xDLE1BQU0sZUFBZSxZQUFZO0FBQ2pDLE1BQU0sVUFBVSxJQUFNLGFBQWE7QUFDbkMsTUFBTSxVQUFVLElBQU0sYUFBYTtBQUNuQyxNQUFNLFdBQVcsSUFBTSxjQUFjO0FBQ3JDLE1BQU0sU0FBUztJQUNYLFFBQVMsQ0FBQyxNQUFRLFVBQVUsT0FBTztZQUFFLEdBQUcsR0FBRztZQUFFLFFBQVE7UUFBSztJQUMxRCxRQUFTLENBQUMsTUFBUSxVQUFVLE9BQU87WUFBRSxHQUFHLEdBQUc7WUFBRSxRQUFRO1FBQUs7SUFDMUQsU0FBVSxDQUFDLE1BQVEsV0FBVyxPQUFPO1lBQ2pDLEdBQUcsR0FBRztZQUNOLFFBQVE7UUFDWjtJQUNBLFFBQVMsQ0FBQyxNQUFRLFVBQVUsT0FBTztZQUFFLEdBQUcsR0FBRztZQUFFLFFBQVE7UUFBSztJQUMxRCxNQUFPLENBQUMsTUFBUSxRQUFRLE9BQU87WUFBRSxHQUFHLEdBQUc7WUFBRSxRQUFRO1FBQUs7QUFDMUQ7QUFDQSxNQUFNLFFBQVE7QUFFZCxJQUFJLElBQUksV0FBVyxHQUFFLE9BQU8sT0FBTztJQUMvQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsSUFBSTtJQUNKLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxJQUFJLFFBQVE7UUFBRSxPQUFPO0lBQU07SUFDM0IsSUFBSSxjQUFjO1FBQUUsT0FBTztJQUFZO0lBQ3ZDLGVBQWU7SUFDZixlQUFlO0lBQ2YsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLFFBQVE7SUFDUixhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLE1BQU07SUFDTixJQUFJLHlCQUF5QjtRQUFFLE9BQU87SUFBdUI7SUFDN0QsUUFBUTtJQUNSLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixRQUFRO0lBQ1IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsTUFBTTtJQUNOLFNBQVM7SUFDVCxLQUFLO0lBQ0wsS0FBSztJQUNMLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsS0FBSztJQUNMLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLGFBQWE7SUFDYixPQUFPO0lBQ1AsYUFBYTtJQUNiLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZDs7Ozs7QUMzdUlBLDBEQUFnQjtBQXVCaEIsb0VBQWdCO0FBWWhCLHNEQUFnQjtBQTJDaEIseURBQWdCO0FBN0loQixNQUFNLGFBQWEsSUFBSSxJQUFJO0lBQ3pCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsU0FBUyxZQUFZLEtBQWE7SUFDaEMsT0FBTyxNQUNKLE1BQU0sT0FDTixPQUFPLFNBQ1AsSUFBSSxDQUFDLE9BQVMsS0FBSyxPQUFPLEdBQUcsZ0JBQWdCLEtBQUssTUFBTSxJQUN4RCxLQUFLO0FBQ1Y7QUFFQSxTQUFTLFNBQVMsS0FBYTtJQUM3QixPQUFPLEFBQUMsQ0FBQSxNQUFNLGNBQWMsTUFBTSxpQkFBaUIsRUFBRSxBQUFELEVBQ2pELElBQUksQ0FBQyxPQUFTLEtBQUssUUFBUSx1Q0FBdUMsS0FDbEUsT0FBTyxDQUFDLE9BQVMsS0FBSyxVQUFVLEtBQUssQ0FBQyxXQUFXLElBQUk7QUFDMUQ7QUFFQSxTQUFTLFVBQVUsTUFBZTtJQUNoQyxJQUFJLENBQUMsUUFBUSxPQUFPO0lBQ3BCLElBQUk7UUFDRixNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQVMsUUFBUSxVQUFVLElBQUksUUFBUSxpQkFBaUI7UUFDbEcsT0FBTyxLQUFLLFFBQVEsU0FBUztJQUMvQixFQUFFLE9BQU07UUFDTixPQUFPLE9BQU8sUUFBUSxVQUFVLElBQUksUUFBUSxpQkFBaUI7SUFDL0Q7QUFDRjtBQUVPLFNBQVMscUJBQ2QsZ0JBQTZKLEVBQzdKLE9BQXNCO0lBRXRCLE1BQU0sYUFBYSxRQUFRLElBQUksQ0FBQyxTQUFXLENBQUMsRUFBRSxPQUFPLFNBQVMsR0FBRyxDQUFDLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSztJQUMxSSxNQUFNLGVBQWUsSUFBSSxJQUFJLFNBQVM7SUFFdEMsTUFBTSxTQUFTLGlCQUNaLElBQUksQ0FBQztRQUNKLE1BQU0sY0FBYztZQUFDLFFBQVE7WUFBTSxRQUFRLFdBQVc7ZUFBUSxRQUFRLFVBQVUsRUFBRTtTQUFFLENBQUMsS0FBSztRQUMxRixNQUFNLGdCQUFnQixJQUFJLElBQUksU0FBUztRQUN2QyxNQUFNLFNBQVM7ZUFBSTtTQUFhLENBQUMsT0FBTyxDQUFDLFFBQVUsY0FBYyxJQUFJO1FBQ3JFLE1BQU0sYUFBYTtlQUFJLElBQUksSUFBSSxTQUFTLFFBQVE7U0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFVLGFBQWEsSUFBSTtRQUMzRixNQUFNLGdCQUFnQjtlQUFJLElBQUksSUFBSSxTQUFTLFFBQVEsV0FBVztTQUFLLENBQUMsT0FBTyxDQUFDLFFBQVUsYUFBYSxJQUFJO1FBQ3ZHLE1BQU0sUUFBUSxPQUFPLFNBQVMsSUFBSSxXQUFXLFNBQVMsSUFBSSxjQUFjLFNBQVM7UUFDakYsT0FBTztZQUFFO1lBQVM7UUFBTTtJQUMxQixHQUNDLE9BQU8sQ0FBQyxRQUFVLE1BQU0sUUFBUSxHQUNoQyxLQUFLLENBQUMsR0FBRyxJQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0lBRXZDLE9BQU87QUFDVDtBQUVPLFNBQVMsK0JBQStCLE9BQXNHO0lBQ25KLElBQUksQ0FBQyxXQUFXLFFBQVEsV0FBVyxlQUFlLFFBQVEsV0FBVyxhQUFhLE9BQU87SUFDekYsTUFBTSxhQUFhLE9BQU8sUUFBUSxlQUFlLFdBQVcsUUFBUSxhQUFhO0lBQ2pGLE1BQU0sT0FBTyxNQUFNLFFBQVEsUUFBUSxVQUFVLFFBQVEsT0FBTyxTQUFTO0lBQ3JFLE1BQU0sYUFBYSxNQUFNLFFBQVEsUUFBUSxVQUFVLFFBQVEsT0FBTyxTQUFTO0lBQzNFLE1BQU0sYUFBYSxPQUFPLFFBQVEsU0FBUyxXQUFXLFNBQVMsUUFBUSxNQUFNLFNBQVM7SUFDdEYsSUFBSSxPQUFPLEdBQUcsT0FBTztJQUNyQixJQUFJLGFBQWEsTUFBTSxPQUFPO0lBQzlCLElBQUksYUFBYSxLQUFLLGFBQWEsR0FBRyxPQUFPO0lBQzdDLE9BQU87QUFDVDtBQUVPLFNBQVMsaUJBQWlCLEtBQW9CLEVBQUUsV0FBVyxVQUFVO0lBQzFFLE1BQU0sYUFBYSxNQUNoQixJQUFJLENBQUMsT0FBUyxLQUFLLE9BQ25CLE9BQU8sQ0FBQyxRQUEyQixPQUFPLFVBQVUsWUFBWSxNQUFNLE9BQU8sU0FBUyxHQUN0RixLQUFLLENBQUMsUUFBVSxTQUFTLE9BQU8sVUFBVTtJQUU3QyxJQUFJLFlBQVksT0FBTyxZQUFZLFdBQVc7SUFFOUMsTUFBTSxTQUFTLElBQUk7SUFFbkIsS0FBSyxNQUFNLFFBQVEsTUFBTztRQUN4QixJQUFJLEtBQUssT0FDUCxLQUFLLE1BQU0sU0FBUyxTQUFTLEtBQUssT0FDaEMsT0FBTyxJQUFJLE9BQU8sQUFBQyxDQUFBLE9BQU8sSUFBSSxVQUFVLENBQUEsSUFBSztRQUlqRCxNQUFNLFlBQVksS0FBSyxTQUFTO1FBQ2hDLE1BQU0sY0FBYyxTQUFTLFdBQzFCLE9BQU8sQ0FBQyxRQUFVLENBQUMsK0RBQStELEtBQUs7UUFDMUYsS0FBSyxNQUFNLFNBQVMsWUFBYSxPQUFPLElBQUksT0FBTyxBQUFDLENBQUEsT0FBTyxJQUFJLFVBQVUsQ0FBQSxJQUFLO1FBRTlFLE1BQU0sYUFBYSxVQUFVLEtBQUssVUFBVSxPQUFRLENBQUEsS0FBSyxPQUFPLEVBQUM7UUFDakUsTUFBTSxhQUFhLFNBQVM7UUFDNUIsS0FBSyxNQUFNLFNBQVMsV0FBWSxPQUFPLElBQUksT0FBTyxBQUFDLENBQUEsT0FBTyxJQUFJLFVBQVUsQ0FBQSxJQUFLO0lBQy9FO0lBRUEsTUFBTSxZQUFZO1dBQUksT0FBTztLQUFVLENBQ3BDLEtBQUssQ0FBQyxHQUFHLElBQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUMxQixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUssT0FDakIsT0FBTyxDQUFDLE9BQU8sT0FBTyxPQUFTLEtBQUssUUFBUSxXQUFXLE9BQ3ZELE1BQU0sR0FBRztJQUVaLElBQUksVUFBVSxTQUFTLEdBQUc7UUFDeEIsTUFBTSxTQUFTLFVBQ1osSUFBSSxDQUFDLFFBQVUsTUFBTSxRQUFRLFlBQVksQ0FBQyxRQUFVLE1BQU0sZ0JBQzFELEtBQUs7UUFDUixPQUFPLE9BQU8sU0FBUyxLQUFLLE9BQU8sTUFBTSxHQUFHLElBQUksU0FBUztJQUMzRDtJQUVBLE9BQU87QUFDVDtBQUVPLFNBQVMsb0JBQW9CLEtBQW9CLEVBQUUsSUFBWTtJQUNwRSxNQUFNLGdCQUFnQixNQUNuQixJQUFJLENBQUMsT0FBUyxBQUFDLENBQUEsS0FBSyxTQUFTLFVBQVUsS0FBSyxPQUFNLEtBQU0sT0FDeEQsT0FBTyxTQUNQLE1BQU0sR0FBRyxHQUNULElBQUksQ0FBQyxPQUFTLEtBQUssUUFBUSxRQUFRLEtBQUssUUFDeEMsT0FBTyxDQUFDLE9BQVMsS0FBSyxTQUFTO0lBRWxDLElBQUksQ0FBQyxjQUFjLFFBQVEsT0FBTyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUM7SUFDbkQsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsY0FBYyxLQUFLLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRztBQUMxRCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNTVkZjI0ZDNjYTBjZDAxNS5qcyIsImFwcHMvZXh0ZW5zaW9uLy5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJhcHBzL2V4dGVuc2lvbi9iYWNrZ3JvdW5kLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2lkYkA4LjAuMy9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwicGFja2FnZXMvY29udHJhY3RzL3NyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS96b2RAMy4yNC4yL25vZGVfbW9kdWxlcy96b2QvbGliL2luZGV4Lm1qcyIsImFwcHMvZXh0ZW5zaW9uL2xpYi9jbHVzdGVyLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxvbGl2ZVxcXFxEb2N1bWVudHNcXFxcQ29kZXhcXFxcY29udGV4dGFic1xcXFxhcHBzXFxcXGV4dGVuc2lvblxcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiZDdiOWIyZjgxZjgxOGYwYlwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBMKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7YigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmRcIiIsImV4cG9ydCB7fTtcclxuXHJcbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gXCJpZGJcIjtcclxuaW1wb3J0IHsgT3JnYW5pemVXaW5kb3dSZXNwb25zZVNjaGVtYSwgUmVzZWFyY2hTZXNzaW9uU2NoZW1hLCBTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWEsIHR5cGUgU2VtYW50aWNUYWJDbHVzdGVyIH0gZnJvbSBcIkBhbWJpZW50L2NvbnRyYWN0c1wiO1xyXG5pbXBvcnQgeyBidWlsZENsdXN0ZXJTdW1tYXJ5LCBpbmZlckNsdXN0ZXJOYW1lLCBwaWNrQmVzdENsdXN0ZXJNYXRjaCwgc2hvdWxkU3VyZmFjZUNsdXN0ZXJTdWdnZXN0aW9uIH0gZnJvbSBcIi4vbGliL2NsdXN0ZXItdXRpbHNcIjtcclxuXHJcbmNvbnN0IGRiUHJvbWlzZSA9IG9wZW5EQihcImFtYmllbnQtY29udGV4dFwiLCAxLCB7XHJcbiAgdXBncmFkZShkYikgeyBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJzZXNzaW9uc1wiKSkgZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJzZXNzaW9uc1wiLCB7IGtleVBhdGg6IFwiaWRcIiB9KTsgfVxyXG59KTtcclxuXHJcbnR5cGUgVGFiTWV0YSA9IHsgdGFiSWQ6IG51bWJlcjsgd2luZG93SWQ6IG51bWJlcjsgdXJsOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGRvbWFpbjogc3RyaW5nOyBncm91cElkPzogbnVtYmVyOyBjcmVhdGVkQXQ6IG51bWJlcjsgdXBkYXRlZEF0OiBudW1iZXI7IGxhc3RBY3RpdmVBdDogbnVtYmVyIH07XHJcbmNvbnN0IFNUT1AgPSBuZXcgU2V0KFtcInRoZVwiLCBcImFuZFwiLCBcImZvclwiLCBcIndpdGhcIiwgXCJmcm9tXCIsIFwidGhpc1wiLCBcInRoYXRcIiwgXCJiZXN0XCIsIFwicmV2aWV3XCIsIFwiZ3VpZGVcIiwgXCJob3dcIiwgXCJ3aGF0XCIsIFwibmV3XCIsIFwieW91clwiLCBcIm9mZmljaWFsXCIsIFwid3d3XCIsIFwiY29tXCJdKTtcclxuY29uc3QgdG9rZW5zID0gKHZhbHVlOiBzdHJpbmcpID0+IFsuLi5uZXcgU2V0KCh2YWx1ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9bYS16MC05XXszLH0vZykgPz8gW10pLmZpbHRlcigod29yZCkgPT4gIVNUT1AuaGFzKHdvcmQpKSldO1xyXG5jb25zdCBjbGFzc2lmaWNhdGlvbktleSA9ICh0YWI6IFBpY2s8VGFiTWV0YSwgXCJ1cmxcIiB8IFwidGl0bGVcIj4pID0+IHtcclxuICB0cnkgeyBjb25zdCB1cmwgPSBuZXcgVVJMKHRhYi51cmwpOyB1cmwuaGFzaCA9IFwiXCI7IHVybC5zZWFyY2ggPSBcIlwiOyByZXR1cm4gYCR7dXJsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwvJC8sIFwiXCIpfXwke3RhYi50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKX1gOyB9XHJcbiAgY2F0Y2ggeyByZXR1cm4gYCR7dGFiLnVybH18JHt0YWIudGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCl9YDsgfVxyXG59O1xyXG5mdW5jdGlvbiB0YWJDYXRlZ29yeShkb21haW46IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xyXG4gIGNvbnN0IHRleHQgPSBgJHtkb21haW59ICR7dGl0bGV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICgvaG90ZWx8Ym9va2luZ3xleHBlZGlhfGFpcmJuYnxmbGlnaHR8YWlybGluZXx0cmF2ZWwvLnRlc3QodGV4dCkpIHJldHVybiBcInRyYXZlbFwiO1xyXG4gIGlmICgvYW1hem9ufGJlc3RidXl8d2FsbWFydHxzaG9wfHByaWNlfGhlYWRwaG9uZXxhaXJwb2RzfHByb2R1Y3QvLnRlc3QodGV4dCkpIHJldHVybiBcInNob3BwaW5nXCI7XHJcbiAgaWYgKC9hcnhpdnxzY2hvbGFyfHBhcGVyfGpvdXJuYWx8ZG9pfGRpc3RyaWJ1dGVkIHN5c3RlbXN8bGVjdHVyZXxjb3Vyc2UvLnRlc3QodGV4dCkpIHJldHVybiBcInN0dWR5XCI7XHJcbiAgaWYgKC9nbWFpbHxvdXRsb29rfG1haWx8Y2FsZW5kYXIvLnRlc3QodGV4dCkpIHJldHVybiBcIndvcmtcIjtcclxuICByZXR1cm4gXCJyZXNlYXJjaFwiO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldENsdXN0ZXJzKCk6IFByb21pc2U8U2VtYW50aWNUYWJDbHVzdGVyW10+IHtcclxuICBjb25zdCB7IFwic2VtYW50aWMtY2x1c3RlcnNcIjogaXRlbXMgPSBbXSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJzZW1hbnRpYy1jbHVzdGVyc1wiPzogU2VtYW50aWNUYWJDbHVzdGVyW10gfT4oXCJzZW1hbnRpYy1jbHVzdGVyc1wiKTtcclxuICByZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiBTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWEucGFyc2UoaXRlbSkpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVDbHVzdGVycyhpdGVtczogU2VtYW50aWNUYWJDbHVzdGVyW10pIHsgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJzZW1hbnRpYy1jbHVzdGVyc1wiOiBpdGVtcyB9KTsgfVxyXG5sZXQgY2x1c3RlclRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcclxubGV0IGNsYXNzaWZpY2F0aW9uVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19BUElfVVJMID8/IFwiaHR0cDovLzEyNy4wLjAuMTo4Nzg3XCI7XHJcbmZ1bmN0aW9uIHNjaGVkdWxlQ2x1c3RlcmluZygpIHsgaWYgKGNsdXN0ZXJUaW1lcikgY2xlYXJUaW1lb3V0KGNsdXN0ZXJUaW1lcik7IGNsdXN0ZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdm9pZCByZWJ1aWxkQ2x1c3RlcnMoKSwgNzAwKTsgfVxyXG5hc3luYyBmdW5jdGlvbiByZWJ1aWxkQ2x1c3RlcnMod2luZG93SWQ/OiBudW1iZXIpIHtcclxuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkod2luZG93SWQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyB3aW5kb3dJZCB9KTtcclxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHsgXCJ0YWItbWV0YWRhdGFcIjogcHJpb3JNZXRhZGF0YSA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpO1xyXG4gIGNvbnN0IG1ldGFkYXRhOiBUYWJNZXRhW10gPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuaWQgIT09IHVuZGVmaW5lZCAmJiB0YWIud2luZG93SWQgIT09IHVuZGVmaW5lZCAmJiB0YWIudXJsICYmIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0YWIudXJsKSkubWFwKCh0YWIpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbiA9ICgoKSA9PiB7IHRyeSB7IHJldHVybiBuZXcgVVJMKHRhYi51cmwhKS5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgXCJcIik7IH0gY2F0Y2ggeyByZXR1cm4gXCJcIjsgfSB9KSgpO1xyXG4gICAgY29uc3QgcHJldmlvdXMgPSBwcmlvck1ldGFkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0udGFiSWQgPT09IHRhYi5pZCAmJiBpdGVtLnVybCA9PT0gdGFiLnVybCk7XHJcbiAgICByZXR1cm4geyB0YWJJZDogdGFiLmlkISwgd2luZG93SWQ6IHRhYi53aW5kb3dJZCEsIHVybDogdGFiLnVybCEsIHRpdGxlOiB0YWIudGl0bGUgPz8gZG9tYWluLCBkb21haW4sIGdyb3VwSWQ6IHRhYi5ncm91cElkID49IDAgPyB0YWIuZ3JvdXBJZCA6IHVuZGVmaW5lZCwgY3JlYXRlZEF0OiBwcmV2aW91cz8uY3JlYXRlZEF0ID8/IG5vdywgdXBkYXRlZEF0OiBub3csIGxhc3RBY3RpdmVBdDogdGFiLmFjdGl2ZSA/IG5vdyA6IHByZXZpb3VzPy5sYXN0QWN0aXZlQXQgPz8gdGFiLmxhc3RBY2Nlc3NlZCA/PyBub3cgfTtcclxuICB9KTtcclxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBtZXRhZGF0YS5zbGljZSgtNTAwKSB9KTtcclxuICBjb25zdCB7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNsYXNzaWZpY2F0aW9uQ2FjaGUgPSB7fSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItY2xhc3NpZmljYXRpb24tY2FjaGVcIj86IFJlY29yZDxzdHJpbmcsIHsgdG9waWM6IHN0cmluZzsgY2F0ZWdvcnk6IHN0cmluZzsgY29uZmlkZW5jZTogbnVtYmVyIH0+IH0+KFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCIpO1xyXG4gIGNvbnN0IG9sZCA9IGF3YWl0IGdldENsdXN0ZXJzKCk7XHJcbiAgY29uc3QgY2x1c3RlcnM6IFNlbWFudGljVGFiQ2x1c3RlcltdID0gb2xkLmZpbHRlcigoY2x1c3RlcikgPT4gd2luZG93SWQgIT09IHVuZGVmaW5lZCAmJiBjbHVzdGVyLndpbmRvd0lkICE9PSB3aW5kb3dJZCk7XHJcbiAgY29uc3QgYnlXaW5kb3cgPSBuZXcgTWFwPG51bWJlciwgVGFiTWV0YVtdPigpO1xyXG4gIGZvciAoY29uc3QgdGFiIG9mIG1ldGFkYXRhKSB7IGNvbnN0IGxpc3QgPSBieVdpbmRvdy5nZXQodGFiLndpbmRvd0lkKSA/PyBbXTsgbGlzdC5wdXNoKHRhYik7IGJ5V2luZG93LnNldCh0YWIud2luZG93SWQsIGxpc3QpOyB9XHJcbiAgZm9yIChjb25zdCBbY3VycmVudFdpbmRvd0lkLCB3aW5kb3dUYWJzXSBvZiBieVdpbmRvdykge1xyXG4gICAgY29uc3QgdXNlZENsdXN0ZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IHRvcGljR3JvdXBzOiBUYWJNZXRhW11bXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB0YWIgb2Ygd2luZG93VGFicykge1xyXG4gICAgICBjb25zdCBjYWNoZWQgPSBjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KHRhYildO1xyXG4gICAgICBjb25zdCB0YWJUb2tlbnMgPSBuZXcgU2V0KHRva2VucyhgJHt0YWIudGl0bGV9ICR7dGFiLmRvbWFpbn0gJHtjYWNoZWQ/LnRvcGljID8/IFwiXCJ9YCkpO1xyXG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gdG9waWNHcm91cHMubWFwKChncm91cCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG90aGVyVG9rZW5zID0gbmV3IFNldChncm91cC5mbGF0TWFwKChtZW1iZXIpID0+IHRva2VucyhgJHttZW1iZXIudGl0bGV9ICR7bWVtYmVyLmRvbWFpbn0gJHtjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KG1lbWJlcildPy50b3BpYyA/PyBcIlwifWApKSk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IFsuLi50YWJUb2tlbnNdLmZpbHRlcigod29yZCkgPT4gb3RoZXJUb2tlbnMuaGFzKHdvcmQpKTtcclxuICAgICAgICBjb25zdCBzYW1lQ2hyb21lR3JvdXAgPSB0YWIuZ3JvdXBJZCAhPT0gdW5kZWZpbmVkICYmIGdyb3VwLnNvbWUoKG1lbWJlcikgPT4gbWVtYmVyLmdyb3VwSWQgPT09IHRhYi5ncm91cElkKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRUb3BpYyA9IGNhY2hlZD8udG9waWMudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3Qgc2FtZUNhY2hlZFRvcGljID0gQm9vbGVhbihjYWNoZWRUb3BpYyAmJiBncm91cC5zb21lKChtZW1iZXIpID0+IGNsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkobWVtYmVyKV0/LnRvcGljLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBjYWNoZWRUb3BpYykpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWF0Y2ggPSBncm91cC5zb21lKChtZW1iZXIpID0+IChjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KG1lbWJlcildPy5jYXRlZ29yeSA/PyB0YWJDYXRlZ29yeShtZW1iZXIuZG9tYWluLCBtZW1iZXIudGl0bGUpKSA9PT0gKGNhY2hlZD8uY2F0ZWdvcnkgPz8gdGFiQ2F0ZWdvcnkodGFiLmRvbWFpbiwgdGFiLnRpdGxlKSkpO1xyXG4gICAgICAgIHJldHVybiB7IGdyb3VwLCBzY29yZTogKHNhbWVDaHJvbWVHcm91cCA/IDggOiAwKSArIChzYW1lQ2FjaGVkVG9waWMgPyA1IDogMCkgKyBvdmVybGFwLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAod29yZC5sZW5ndGggPj0gNSA/IDIgOiAxKSwgMCkgKyAoY2F0ZWdvcnlNYXRjaCA/IDAuNSA6IDApIH07XHJcbiAgICAgIH0pLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuICAgICAgY29uc3QgYmVzdCA9IGNhbmRpZGF0ZXNbMF07XHJcbiAgICAgIGlmIChiZXN0ICYmIGJlc3Quc2NvcmUgPj0gMikgYmVzdC5ncm91cC5wdXNoKHRhYik7IGVsc2UgdG9waWNHcm91cHMucHVzaChbdGFiXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IG1lbWJlcnMgb2YgdG9waWNHcm91cHMpIHtcclxuICAgIGlmIChtZW1iZXJzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG4gICAgY29uc3Qgd29yZHMgPSBtZW1iZXJzLmZsYXRNYXAoKHRhYikgPT4gdG9rZW5zKGAke3RhYi50aXRsZX0gJHt0YWIuZG9tYWlufSAke2NsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0/LnRvcGljID8/IFwiXCJ9YCkpO1xyXG4gICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgd29yZHMuZm9yRWFjaCgod29yZCkgPT4gY291bnRzLnNldCh3b3JkLCAoY291bnRzLmdldCh3b3JkKSA/PyAwKSArIDEpKTtcclxuICAgIGNvbnN0IGNvbW1vbiA9IFsuLi5jb3VudHNdLmZpbHRlcigoWywgY291bnRdKSA9PiBjb3VudCA+PSBNYXRoLm1heCgyLCBNYXRoLmNlaWwobWVtYmVycy5sZW5ndGggKiAwLjQpKSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pLm1hcCgoW3dvcmRdKSA9PiB3b3JkKS5zbGljZSgwLCA4KTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2xhc3NpZmljYXRpb25DYWNoZVtgJHttZW1iZXJzWzBdLnVybH18JHttZW1iZXJzWzBdLnRpdGxlfWBdPy5jYXRlZ29yeSA/PyB0YWJDYXRlZ29yeShtZW1iZXJzWzBdLmRvbWFpbiwgbWVtYmVycy5tYXAoKHRhYikgPT4gdGFiLnRpdGxlKS5qb2luKFwiIFwiKSk7XHJcbiAgICBjb25zdCBjYWNoZWRUb3BpY05hbWVzID0gbWVtYmVycy5tYXAoKHRhYikgPT4gY2xhc3NpZmljYXRpb25DYWNoZVtjbGFzc2lmaWNhdGlvbktleSh0YWIpXT8udG9waWMpLmZpbHRlcigodG9waWMpOiB0b3BpYyBpcyBzdHJpbmcgPT4gQm9vbGVhbih0b3BpYyAmJiB0b3BpYy50cmltKCkpKTtcclxuICAgIGNvbnN0IGdlbmVyYXRlZE5hbWUgPSBpbmZlckNsdXN0ZXJOYW1lKG1lbWJlcnMubWFwKCh0YWIpID0+ICh7XHJcbiAgICAgIHRpdGxlOiB0YWIudGl0bGUsXHJcbiAgICAgIHVybDogdGFiLnVybCxcclxuICAgICAgZG9tYWluOiB0YWIuZG9tYWluLFxyXG4gICAgICB0b3BpYzogY2xhc3NpZmljYXRpb25DYWNoZVtjbGFzc2lmaWNhdGlvbktleSh0YWIpXT8udG9waWMsXHJcbiAgICAgIHN1bW1hcnk6IGNsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0/LnRvcGljXHJcbiAgICB9KSksIGAke2NhdGVnb3J5WzBdLnRvVXBwZXJDYXNlKCl9JHtjYXRlZ29yeS5zbGljZSgxKX0gcmVzZWFyY2hgKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjYWNoZWRUb3BpY05hbWVzWzBdID8gY2FjaGVkVG9waWNOYW1lc1swXSA6IGdlbmVyYXRlZE5hbWU7XHJcbiAgICBjb25zdCBwcmlvciA9IG9sZC5maWx0ZXIoKGNsdXN0ZXIpID0+IGNsdXN0ZXIud2luZG93SWQgPT09IGN1cnJlbnRXaW5kb3dJZCAmJiAhdXNlZENsdXN0ZXJJZHMuaGFzKGNsdXN0ZXIuaWQpKS5tYXAoKGNsdXN0ZXIpID0+ICh7IGNsdXN0ZXIsIG92ZXJsYXA6IGNsdXN0ZXIudGFiSWRzLmZpbHRlcigoaWQpID0+IG1lbWJlcnMuc29tZSgodGFiKSA9PiB0YWIudGFiSWQgPT09IGlkKSkubGVuZ3RoIH0pKS5zb3J0KChhLCBiKSA9PiBiLm92ZXJsYXAgLSBhLm92ZXJsYXApWzBdO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBwaWNrQmVzdENsdXN0ZXJNYXRjaChcclxuICAgICAgb2xkLmZpbHRlcigoY2x1c3RlcikgPT4gY2x1c3Rlci53aW5kb3dJZCA9PT0gY3VycmVudFdpbmRvd0lkICYmICF1c2VkQ2x1c3Rlcklkcy5oYXMoY2x1c3Rlci5pZCkpLFxyXG4gICAgICBtZW1iZXJzLm1hcCgodGFiKSA9PiAoeyB0aXRsZTogdGFiLnRpdGxlLCB1cmw6IHRhYi51cmwsIGRvbWFpbjogdGFiLmRvbWFpbiwgdG9waWM6IGNsYXNzaWZpY2F0aW9uQ2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0/LnRvcGljIH0pKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGlkID0gKG1hdGNoICYmIG1hdGNoLnNjb3JlID49IDIpID8gbWF0Y2guY2x1c3Rlci5pZCA6IChwcmlvciAmJiBwcmlvci5vdmVybGFwID8gcHJpb3IuY2x1c3Rlci5pZCA6IGBjbHVzdGVyLSR7Y3VycmVudFdpbmRvd0lkfS0ke2NyeXB0by5yYW5kb21VVUlEKCl9YCk7XHJcbiAgICB1c2VkQ2x1c3Rlcklkcy5hZGQoaWQpO1xyXG4gICAgY29uc3QgY29uZmlkZW5jZSA9IE1hdGgubWluKDAuOTgsIDAuNDUgKyBtZW1iZXJzLmxlbmd0aCAqIDAuMDggKyAobWVtYmVycy5ldmVyeSgodGFiKSA9PiB0YWIuZ3JvdXBJZCAhPT0gdW5kZWZpbmVkKSA/IDAuMTUgOiAwKSArIE1hdGgubWluKGNvbW1vbi5sZW5ndGgsIDQpICogMC4wNCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSAobWF0Y2g/LmNsdXN0ZXIuc3RhdHVzID8/IHByaW9yPy5jbHVzdGVyLnN0YXR1cykgPT09IFwiY29uZmlybWVkXCIgPyBcImNvbmZpcm1lZFwiIDogbWVtYmVycy5sZW5ndGggPj0gMiA/IFwic3VnZ2VzdGVkXCIgOiBcInRlbnRhdGl2ZVwiO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGJ1aWxkQ2x1c3RlclN1bW1hcnkobWVtYmVycy5tYXAoKHRhYikgPT4gKHtcclxuICAgICAgdGl0bGU6IHRhYi50aXRsZSxcclxuICAgICAgdXJsOiB0YWIudXJsLFxyXG4gICAgICBkb21haW46IHRhYi5kb21haW4sXHJcbiAgICAgIHRvcGljOiBjbGFzc2lmaWNhdGlvbkNhY2hlW2NsYXNzaWZpY2F0aW9uS2V5KHRhYildPy50b3BpY1xyXG4gICAgfSkpLCBtYXRjaD8uY2x1c3Rlci5uYW1lID8/IG5hbWUpOyBcclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFNlbWFudGljVGFiQ2x1c3RlciA9IHsgaWQsIHdpbmRvd0lkOiBjdXJyZW50V2luZG93SWQsIG5hbWU6IG1hdGNoPy5jbHVzdGVyLm5hbWUgPz8gcHJpb3I/LmNsdXN0ZXIubmFtZSA/PyBuYW1lLCBjYXRlZ29yeSwgdGFiSWRzOiBtZW1iZXJzLm1hcCgodGFiKSA9PiB0YWIudGFiSWQpLCBtZW1iZXJzOiBtZW1iZXJzLm1hcCgodGFiKSA9PiAoeyB0YWJJZDogdGFiLnRhYklkLCB0aXRsZTogdGFiLnRpdGxlLnNsaWNlKDAsIDMwMCksIHVybDogdGFiLnVybCB9KSksIGNvbmZpZGVuY2UsIHRva2VuczogY29tbW9uLCBzdW1tYXJ5OiBzdW1tYXJ5LnNsaWNlKDAsIDFfMDAwKSwgbGFzdEFjdGl2ZUF0OiBuZXcgRGF0ZShNYXRoLm1heCguLi5tZW1iZXJzLm1hcCgodGFiKSA9PiB0YWIubGFzdEFjdGl2ZUF0KSkpLnRvSVNPU3RyaW5nKCksIHN0YXR1cywgZGlzbWlzc2VkVW50aWw6IG1hdGNoPy5jbHVzdGVyLmRpc21pc3NlZFVudGlsID8/IHByaW9yPy5jbHVzdGVyLmRpc21pc3NlZFVudGlsLCBjaHJvbWVHcm91cElkOiBtZW1iZXJzLmV2ZXJ5KCh0YWIpID0+IHRhYi5ncm91cElkID09PSBtZW1iZXJzWzBdLmdyb3VwSWQpID8gbWVtYmVyc1swXS5ncm91cElkIDogdW5kZWZpbmVkIH07XHJcbiAgICBjbHVzdGVycy5wdXNoKHVwZGF0ZWQpO1xyXG4gICAgaWYgKG1lbWJlcnMubGVuZ3RoID49IDIgJiYgY29uZmlkZW5jZSA+PSAwLjU4ICYmIHNob3VsZFN1cmZhY2VDbHVzdGVyU3VnZ2VzdGlvbih7IGlkLCBuYW1lLCBzdGF0dXMsIGNvbmZpZGVuY2UsIHRhYklkczogbWVtYmVycy5tYXAoKHRhYikgPT4gdGFiLnRhYklkKSwgdG9rZW5zOiBjb21tb24gfSkgJiYgKCFwcmlvcj8uY2x1c3Rlci5kaXNtaXNzZWRVbnRpbCB8fCBEYXRlLnBhcnNlKHByaW9yLmNsdXN0ZXIuZGlzbWlzc2VkVW50aWwpIDwgbm93KSkge1xyXG4gICAgICBjb25zdCBbc3VwcHJlc3MsIGRpc2FibGVkXSA9IGF3YWl0IFByb21pc2UuYWxsKFtjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInN1Z2dlc3RlZC1jbHVzdGVyXCI/OiBzdHJpbmcgfT4oXCJzdWdnZXN0ZWQtY2x1c3RlclwiKSwgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJkaXNhYmxlZC1zdWdnZXN0aW9uLWNhdGVnb3J5XCI/OiBzdHJpbmcgfT4oXCJkaXNhYmxlZC1zdWdnZXN0aW9uLWNhdGVnb3J5XCIpXSk7XHJcbiAgICAgIGlmICghc3VwcHJlc3NbXCJzdWdnZXN0ZWQtY2x1c3RlclwiXSAmJiBkaXNhYmxlZFtcImRpc2FibGVkLXN1Z2dlc3Rpb24tY2F0ZWdvcnlcIl0gIT09IGNhdGVnb3J5KSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInN1Z2dlc3RlZC1jbHVzdGVyXCI6IGlkIH0pO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMuc2xpY2UoLTEwMCkpO1xyXG4gIGNvbnN0IHVuY2VydGFpbiA9IG1ldGFkYXRhLmZpbHRlcigodGFiKSA9PiB0YWIudGl0bGUgJiYgIWNsdXN0ZXJzLnNvbWUoKGNsdXN0ZXIpID0+IGNsdXN0ZXIud2luZG93SWQgPT09IHRhYi53aW5kb3dJZCAmJiBjbHVzdGVyLnRhYklkcy5pbmNsdWRlcyh0YWIudGFiSWQpKSk7XHJcbiAgaWYgKHVuY2VydGFpbi5sZW5ndGggPj0gMykgc2NoZWR1bGVDbGFzc2lmaWNhdGlvbih1bmNlcnRhaW4uc2xpY2UoMCwgMjApLCBjbHVzdGVycy5maWx0ZXIoKGNsdXN0ZXIpID0+IHdpbmRvd0lkID09PSB1bmRlZmluZWQgfHwgY2x1c3Rlci53aW5kb3dJZCA9PT0gd2luZG93SWQpKTtcclxufVxyXG5mdW5jdGlvbiBzY2hlZHVsZUNsYXNzaWZpY2F0aW9uKHRhYnM6IFRhYk1ldGFbXSwgY2x1c3RlcnM6IFNlbWFudGljVGFiQ2x1c3RlcltdKSB7XHJcbiAgaWYgKGNsYXNzaWZpY2F0aW9uVGltZXIpIGNsZWFyVGltZW91dChjbGFzc2lmaWNhdGlvblRpbWVyKTtcclxuICBjbGFzc2lmaWNhdGlvblRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB2b2lkIGNsYXNzaWZ5TWV0YWRhdGFCYXRjaCh0YWJzLCBjbHVzdGVycyksIDhfMDAwKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjbGFzc2lmeU1ldGFkYXRhQmF0Y2godGFiczogVGFiTWV0YVtdLCBjbHVzdGVyczogU2VtYW50aWNUYWJDbHVzdGVyW10pIHtcclxuICBjb25zdCB7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNhY2hlID0ge30gfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldDx7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI/OiBSZWNvcmQ8c3RyaW5nLCB7IHRvcGljOiBzdHJpbmc7IGNhdGVnb3J5OiBzdHJpbmc7IGNvbmZpZGVuY2U6IG51bWJlciB9PiB9PihcInRhYi1jbGFzc2lmaWNhdGlvbi1jYWNoZVwiKTtcclxuICBjb25zdCB1bmNhY2hlZCA9IHRhYnMuZmlsdGVyKCh0YWIpID0+ICFjYWNoZVtjbGFzc2lmaWNhdGlvbktleSh0YWIpXSk7XHJcbiAgaWYgKCF1bmNhY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvY2xhc3NpZnktdGFic2AsIHsgbWV0aG9kOiBcIlBPU1RcIiwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhYnM6IHVuY2FjaGVkLm1hcCgoeyB0YWJJZCwgdGl0bGUsIHVybCwgZG9tYWluIH0pID0+ICh7IHRhYklkLCB0aXRsZTogdGl0bGUuc2xpY2UoMCwgMzAwKSwgdXJsLCBkb21haW4gfSkpLCBjbHVzdGVyczogY2x1c3RlcnMuc2xpY2UoMCwgMjApLm1hcCgoeyBpZCwgbmFtZSwgY2F0ZWdvcnksIHN1bW1hcnkgfSkgPT4gKHsgaWQsIG5hbWUsIGNhdGVnb3J5LCBzdW1tYXJ5OiBzdW1tYXJ5LnNsaWNlKDAsIDUwMCkgfSkpIH0pIH0pO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgZm9yIChjb25zdCBhc3NpZ25tZW50IG9mIHJlc3VsdC5hc3NpZ25tZW50cyA/PyBbXSkgeyBjb25zdCB0YWIgPSB1bmNhY2hlZC5maW5kKChpdGVtKSA9PiBpdGVtLnRhYklkID09PSBhc3NpZ25tZW50LnRhYklkKTsgaWYgKHRhYikgY2FjaGVbY2xhc3NpZmljYXRpb25LZXkodGFiKV0gPSB7IHRvcGljOiBhc3NpZ25tZW50LnRvcGljLCBjYXRlZ29yeTogYXNzaWdubWVudC5jYXRlZ29yeSwgY29uZmlkZW5jZTogYXNzaWdubWVudC5jb25maWRlbmNlIH07IH1cclxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwidGFiLWNsYXNzaWZpY2F0aW9uLWNhY2hlXCI6IGNhY2hlIH0pO1xyXG4gICAgYXdhaXQgcmVidWlsZENsdXN0ZXJzKCk7XHJcbiAgfSBjYXRjaCB7IC8qIGNsYXNzaWZpY2F0aW9uIGlzIG9wdGlvbmFsOyBsb2NhbCBjbHVzdGVycyByZW1haW4gYXZhaWxhYmxlICovIH1cclxufVxyXG5cclxuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHsgaWYgKHRhYi5pZCAhPT0gdW5kZWZpbmVkICYmIHRhYi53aW5kb3dJZCAhPT0gdW5kZWZpbmVkKSB7IHZvaWQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKS50aGVuKCh7IFwidGFiLW1ldGFkYXRhXCI6IGl0ZW1zID0gW10gfSkgPT4gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJ0YWItbWV0YWRhdGFcIjogWy4uLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50YWJJZCAhPT0gdGFiLmlkKSwgeyB0YWJJZDogdGFiLmlkISwgd2luZG93SWQ6IHRhYi53aW5kb3dJZCEsIHVybDogdGFiLnVybCA/PyBcIlwiLCB0aXRsZTogdGFiLnRpdGxlID8/IFwiXCIsIGRvbWFpbjogXCJcIiwgY3JlYXRlZEF0OiBEYXRlLm5vdygpLCB1cGRhdGVkQXQ6IERhdGUubm93KCksIGxhc3RBY3RpdmVBdDogRGF0ZS5ub3coKSB9XS5zbGljZSgtNTAwKSB9KSk7IHNjaGVkdWxlQ2x1c3RlcmluZygpOyB9IH0pO1xyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2UsIHRhYikgPT4geyBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJjb21wbGV0ZVwiIHx8IGNoYW5nZS50aXRsZSB8fCBjaGFuZ2UudXJsKSB7IHZvaWQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKS50aGVuKCh7IFwidGFiLW1ldGFkYXRhXCI6IGl0ZW1zID0gW10gfSkgPT4geyBjb25zdCBkb21haW4gPSAoKCkgPT4geyB0cnkgeyByZXR1cm4gbmV3IFVSTCh0YWIudXJsID8/IFwiXCIpLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCBcIlwiKTsgfSBjYXRjaCB7IHJldHVybiBcIlwiOyB9IH0pKCk7IGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChlbnRyeSkgPT4gZW50cnkudGFiSWQgPT09IHRhYklkKTsgY29uc3QgbmV4dCA9IHsgdGFiSWQsIHdpbmRvd0lkOiB0YWIud2luZG93SWQgPz8gaXRlbT8ud2luZG93SWQgPz8gLTEsIHVybDogdGFiLnVybCA/PyBpdGVtPy51cmwgPz8gXCJcIiwgdGl0bGU6IHRhYi50aXRsZSA/PyBpdGVtPy50aXRsZSA/PyBcIlwiLCBkb21haW4sIGdyb3VwSWQ6IHRhYi5ncm91cElkID49IDAgPyB0YWIuZ3JvdXBJZCA6IHVuZGVmaW5lZCwgY3JlYXRlZEF0OiBpdGVtPy5jcmVhdGVkQXQgPz8gRGF0ZS5ub3coKSwgdXBkYXRlZEF0OiBEYXRlLm5vdygpLCBsYXN0QWN0aXZlQXQ6IGl0ZW0/Lmxhc3RBY3RpdmVBdCA/PyBEYXRlLm5vdygpIH07IHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBbLi4uaXRlbXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkudGFiSWQgIT09IHRhYklkKSwgbmV4dF0uc2xpY2UoLTUwMCkgfSk7IH0pOyBzY2hlZHVsZUNsdXN0ZXJpbmcoKTsgfSB9KTtcclxuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHsgdGFiSWQgfSkgPT4geyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcImxhc3QtYWN0aXZlLXRhYi1pZFwiOiB0YWJJZCB9KTsgY29uc3QgeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcyA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpOyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0udGFiSWQgPT09IHRhYklkID8geyAuLi5pdGVtLCBsYXN0QWN0aXZlQXQ6IERhdGUubm93KCkgfSA6IGl0ZW0pIH0pOyBzY2hlZHVsZUNsdXN0ZXJpbmcoKTsgfSk7XHJcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiSWQpID0+IHsgY29uc3QgY2x1c3RlcnMgPSBhd2FpdCBnZXRDbHVzdGVycygpOyBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMubWFwKChjbHVzdGVyKSA9PiAoeyAuLi5jbHVzdGVyLCB0YWJJZHM6IGNsdXN0ZXIudGFiSWRzLmZpbHRlcigoaWQpID0+IGlkICE9PSB0YWJJZCkgfSkpLmZpbHRlcigoY2x1c3RlcikgPT4gY2x1c3Rlci50YWJJZHMubGVuZ3RoID49IDIpKTsgY29uc3QgeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcyA9IFtdIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQ8eyBcInRhYi1tZXRhZGF0YVwiPzogVGFiTWV0YVtdIH0+KFwidGFiLW1ldGFkYXRhXCIpOyBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGFiSWQgIT09IHRhYklkKSB9KTsgc2NoZWR1bGVDbHVzdGVyaW5nKCk7IH0pO1xyXG5jaHJvbWUud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHdpbmRvd0lkKSA9PiB7XHJcbiAgY29uc3QgY2x1c3RlcnMgPSBhd2FpdCBnZXRDbHVzdGVycygpOyBhd2FpdCBzYXZlQ2x1c3RlcnMoY2x1c3RlcnMuZmlsdGVyKChjbHVzdGVyKSA9PiBjbHVzdGVyLndpbmRvd0lkICE9PSB3aW5kb3dJZCkpO1xyXG4gIGNvbnN0IHsgXCJ0YWItbWV0YWRhdGFcIjogaXRlbXMgPSBbXSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJ0YWItbWV0YWRhdGFcIj86IFRhYk1ldGFbXSB9PihcInRhYi1tZXRhZGF0YVwiKTtcclxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1tZXRhZGF0YVwiOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ud2luZG93SWQgIT09IHdpbmRvd0lkKSB9KTtcclxufSk7XHJcbmNocm9tZS50YWJHcm91cHM/Lm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG5jaHJvbWUudGFiR3JvdXBzPy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoc2NoZWR1bGVDbHVzdGVyaW5nKTtcclxuY2hyb21lLnRhYkdyb3Vwcz8ub25SZW1vdmVkLmFkZExpc3RlbmVyKHNjaGVkdWxlQ2x1c3RlcmluZyk7XHJcbmNocm9tZS5ydW50aW1lLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihzY2hlZHVsZUNsdXN0ZXJpbmcpO1xyXG52b2lkIHJlYnVpbGRDbHVzdGVycygpO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwib25ib2FyZGluZy1zZWVuXCIpO1xyXG4gIGlmICghZXhpc3RpbmdbXCJvbmJvYXJkaW5nLXNlZW5cIl0pIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwib25ib2FyZGluZy1zZWVuXCI6IHRydWUgfSk7XHJcbn0pO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIHZvaWQgKGFzeW5jICgpID0+IHtcclxuICAgIHN3aXRjaCAobWVzc2FnZT8udHlwZSkge1xyXG4gICAgICBjYXNlIFwiTElTVF9UQUJTXCI6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcclxuICAgICAgY2FzZSBcIk9QRU5fQU1CSUVOVF9QT1BVUFwiOlxyXG4gICAgICAgIGlmIChjaHJvbWUuYWN0aW9uPy5vcGVuUG9wdXApIHJldHVybiBhd2FpdCBjaHJvbWUuYWN0aW9uLm9wZW5Qb3B1cCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgY2FzZSBcIkdFVF9DTFVTVEVSX1NVR0dFU1RJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IHsgXCJzdWdnZXN0ZWQtY2x1c3RlclwiOiBpZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PHsgXCJzdWdnZXN0ZWQtY2x1c3RlclwiPzogc3RyaW5nIH0+KFwic3VnZ2VzdGVkLWNsdXN0ZXJcIik7XHJcbiAgICAgICAgY29uc3QgY2x1c3RlciA9IGlkID8gKGF3YWl0IGdldENsdXN0ZXJzKCkpLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gY2x1c3RlciAmJiBzaG91bGRTdXJmYWNlQ2x1c3RlclN1Z2dlc3Rpb24oeyBpZDogY2x1c3Rlci5pZCwgbmFtZTogY2x1c3Rlci5uYW1lLCBzdGF0dXM6IGNsdXN0ZXIuc3RhdHVzLCBjb25maWRlbmNlOiBjbHVzdGVyLmNvbmZpZGVuY2UsIHRhYklkczogY2x1c3Rlci50YWJJZHMsIHRva2VuczogY2x1c3Rlci50b2tlbnMgfSkgJiYgKCFjbHVzdGVyLmRpc21pc3NlZFVudGlsIHx8IERhdGUucGFyc2UoY2x1c3Rlci5kaXNtaXNzZWRVbnRpbCkgPCBEYXRlLm5vdygpKSA/IGNsdXN0ZXIgOiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkxJU1RfQ0xVU1RFUlNcIjoge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd0lkID0gTnVtYmVyKG1lc3NhZ2Uud2luZG93SWQpO1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgZ2V0Q2x1c3RlcnMoKSkuZmlsdGVyKChjbHVzdGVyKSA9PiBjbHVzdGVyLndpbmRvd0lkID09PSB3aW5kb3dJZCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIk9SR0FOSVpFX1dJTkRPV1wiOiB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93SWQgPSBOdW1iZXIobWVzc2FnZS53aW5kb3dJZCk7XHJcbiAgICAgICAgYXdhaXQgcmVidWlsZENsdXN0ZXJzKHdpbmRvd0lkKTtcclxuICAgICAgICBsZXQgY2x1c3RlcnMgPSAoYXdhaXQgZ2V0Q2x1c3RlcnMoKSkuZmlsdGVyKChjbHVzdGVyKSA9PiBjbHVzdGVyLndpbmRvd0lkID09PSB3aW5kb3dJZCk7XHJcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgd2luZG93SWQgfSk7XHJcbiAgICAgICAgY29uc3Qga25vd24gPSBuZXcgU2V0KGNsdXN0ZXJzLmZsYXRNYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIudGFiSWRzKSk7XHJcbiAgICAgICAgY29uc3QgdW5jYWNoZWQgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuaWQgIT09IHVuZGVmaW5lZCAmJiB0YWIudXJsICYmIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0YWIudXJsKSAmJiAha25vd24uaGFzKHRhYi5pZCkpO1xyXG4gICAgICAgIGlmICh1bmNhY2hlZC5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB1bmNhY2hlZC5tYXAoKHRhYikgPT4geyBjb25zdCB1cmwgPSB0YWIudXJsITsgY29uc3QgZG9tYWluID0gbmV3IFVSTCh1cmwpLmhvc3RuYW1lOyByZXR1cm4geyB0YWJJZDogdGFiLmlkISwgdGl0bGU6IHRhYi50aXRsZSA/PyBkb21haW4sIHVybCwgZG9tYWluIH07IH0pO1xyXG4gICAgICAgICAgYXdhaXQgY2xhc3NpZnlNZXRhZGF0YUJhdGNoKG1ldGFkYXRhIGFzIFRhYk1ldGFbXSwgY2x1c3RlcnMpO1xyXG4gICAgICAgICAgYXdhaXQgcmVidWlsZENsdXN0ZXJzKHdpbmRvd0lkKTtcclxuICAgICAgICAgIGNsdXN0ZXJzID0gKGF3YWl0IGdldENsdXN0ZXJzKCkpLmZpbHRlcigoY2x1c3RlcikgPT4gY2x1c3Rlci53aW5kb3dJZCA9PT0gd2luZG93SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IE9yZ2FuaXplV2luZG93UmVzcG9uc2VTY2hlbWEucGFyc2UoeyB3aW5kb3dJZCwgY2x1c3RlcnMgfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJvcmdhbml6ZS1wcmV2aWV3XCI6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiR0VUX1JFTEVWQU5UX0NMVVNURVJTXCI6IHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHRva2VucyhTdHJpbmcobWVzc2FnZS5xdWVyeSA/PyBcIlwiKSkuY29uY2F0KHRva2VucyhTdHJpbmcobWVzc2FnZS5jb252ZXJzYXRpb25UZXh0ID8/IFwiXCIpKSk7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBnZXRDbHVzdGVycygpKS5tYXAoKGNsdXN0ZXIpID0+ICh7IGNsdXN0ZXIsIHNjb3JlOiBjbHVzdGVyLnRva2Vucy5yZWR1Y2UoKHN1bSwgd29yZCkgPT4gc3VtICsgKHF1ZXJ5LmluY2x1ZGVzKHdvcmQpID8gMiA6IDApLCAwKSArIGNsdXN0ZXIuY29uZmlkZW5jZSArIChjbHVzdGVyLnN0YXR1cyA9PT0gXCJjb25maXJtZWRcIiA/IDMgOiAwKSB9KSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNjb3JlID4gMCkuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpLnNsaWNlKDAsIDIpLm1hcCgoaXRlbSkgPT4gaXRlbS5jbHVzdGVyKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiQ0xVU1RFUl9BQ1RJT05cIjoge1xyXG4gICAgICAgIGNvbnN0IGNsdXN0ZXJzID0gYXdhaXQgZ2V0Q2x1c3RlcnMoKTtcclxuICAgICAgICBjb25zdCBjbHVzdGVyID0gY2x1c3RlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gU3RyaW5nKG1lc3NhZ2UuaWQpKTtcclxuICAgICAgICBpZiAoIWNsdXN0ZXIpIHRocm93IG5ldyBFcnJvcihcIkNsdXN0ZXIgbm8gbG9uZ2VyIGV4aXN0c1wiKTtcclxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiYWNjZXB0XCIpIHtcclxuICAgICAgICAgIGlmICghbWVzc2FnZS5wZXJtaXNzaW9uR3JhbnRlZCB8fCAhKGF3YWl0IGNocm9tZS5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zOiBbXCJ0YWJHcm91cHNcIl0gfSkpKSB0aHJvdyBuZXcgRXJyb3IoXCJUYWIgZ3JvdXAgcGVybWlzc2lvbiB3YXMgbm90IGdyYW50ZWRcIik7XHJcbiAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInRhYi1ncm91cC1wZXJtaXNzaW9uXCI6IHRydWUgfSk7XHJcbiAgICAgICAgICBjb25zdCBvcGVuVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgd2luZG93SWQ6IGNsdXN0ZXIud2luZG93SWQgfSk7XHJcbiAgICAgICAgICBjb25zdCBpZHMgPSBjbHVzdGVyLnRhYklkcy5maWx0ZXIoKGlkKSA9PiBvcGVuVGFicy5zb21lKCh0YWIpID0+IHRhYi5pZCA9PT0gaWQpKTtcclxuICAgICAgICAgIGlmIChpZHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBvcGVuIHRhYnMgcmVtYWluIHRvIGdyb3VwXCIpO1xyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cElkID0gY2x1c3Rlci5jaHJvbWVHcm91cElkID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy5xdWVyeSh7fSkpLnNvbWUoKGdyb3VwKSA9PiBncm91cC5pZCA9PT0gY2x1c3Rlci5jaHJvbWVHcm91cElkKSA/IGNsdXN0ZXIuY2hyb21lR3JvdXBJZCA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwSWQgPSBhd2FpdCBjaHJvbWUudGFicy5ncm91cCh7IHRhYklkczogaWRzLCAuLi4oZXhpc3RpbmdHcm91cElkID09PSB1bmRlZmluZWQgPyB7fSA6IHsgZ3JvdXBJZDogZXhpc3RpbmdHcm91cElkIH0pIH0pO1xyXG4gICAgICAgICAgYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy51cGRhdGUoZ3JvdXBJZCwgeyB0aXRsZTogY2x1c3Rlci5uYW1lLnNsaWNlKDAsIDgwKSwgY29sb3I6IGNsdXN0ZXIuY2F0ZWdvcnkgPT09IFwidHJhdmVsXCIgPyBcImJsdWVcIiA6IGNsdXN0ZXIuY2F0ZWdvcnkgPT09IFwic2hvcHBpbmdcIiA/IFwib3JhbmdlXCIgOiBcInB1cnBsZVwiIH0pO1xyXG4gICAgICAgICAgY2x1c3Rlci5zdGF0dXMgPSBcImNvbmZpcm1lZFwiOyBjbHVzdGVyLmNocm9tZUdyb3VwSWQgPSBncm91cElkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiaW50ZXJuYWxcIikgY2x1c3Rlci5zdGF0dXMgPSBcImNvbmZpcm1lZFwiO1xyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcImRpc21pc3NcIikgY2x1c3Rlci5kaXNtaXNzZWRVbnRpbCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcIm5ldmVyXCIpIHsgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJkaXNhYmxlZC1zdWdnZXN0aW9uLWNhdGVnb3J5XCI6IGNsdXN0ZXIuY2F0ZWdvcnkgfSk7IGNsdXN0ZXIuZGlzbWlzc2VkVW50aWwgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcInJlbmFtZVwiKSBjbHVzdGVyLm5hbWUgPSBTdHJpbmcobWVzc2FnZS5uYW1lID8/IGNsdXN0ZXIubmFtZSkuc2xpY2UoMCwgODApO1xyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcImNyZWF0ZS1zZXNzaW9uXCIpIHtcclxuICAgICAgICAgIGNvbnN0IG9wZW5UYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZDogY2x1c3Rlci53aW5kb3dJZCB9KTtcclxuICAgICAgICAgIGNvbnN0IGRiID0gYXdhaXQgZGJQcm9taXNlOyBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICBjb25zdCBzZXNzaW9uR29hbCA9IGNsdXN0ZXIuc3VtbWFyeSA/IGBSZXNlYXJjaCAke2NsdXN0ZXIubmFtZX06ICR7Y2x1c3Rlci5zdW1tYXJ5fWAgOiBgUmVzZWFyY2ggJHtjbHVzdGVyLm5hbWV9YDtcclxuICAgICAgICAgIGNvbnN0IHN0cm9uZ1Rva2VucyA9IGNsdXN0ZXIudG9rZW5zLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgY29uc3QgZmluZGluZ3MgPSBjbHVzdGVyLnN1bW1hcnkgPyBbY2x1c3Rlci5zdW1tYXJ5XSA6IFtcclxuICAgICAgICAgICAgYFRoZSB0b3BpYyBjbHVzdGVyIGlzIGNlbnRlcmVkIG9uICR7Y2x1c3Rlci5uYW1lfS5gLFxyXG4gICAgICAgICAgICBgUmV2aWV3IHRoZSByZWxhdGVkIHRhYnMgdG8gY29uZmlybSB0aGUgbW9zdCByZWxldmFudCBzb3VyY2VzLmAsXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgICAgY29uc3QgbmV4dFN0ZXBzID0gW1xyXG4gICAgICAgICAgICBgQ29tcGFyZSB0aGUgc3Ryb25nZXN0IHNvdXJjZSBwYWdlcyBpbiAke2NsdXN0ZXIubmFtZX0uYCxcclxuICAgICAgICAgICAgc3Ryb25nVG9rZW5zLmxlbmd0aCA/IGBWYWxpZGF0ZSB3aGV0aGVyICR7c3Ryb25nVG9rZW5zLmpvaW4oXCIsIFwiKX0gaXMgdGhlIHJpZ2h0IGZyYW1pbmcgZm9yIHRoaXMgcmVzZWFyY2ggcXVlc3Rpb24uYCA6IGBDYXB0dXJlIGEgZmluYWwgZGVjaXNpb24gb3IgY29uY2x1c2lvbiBhYm91dCB0aGlzIHJlc2VhcmNoIHRvcGljLmBcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBjb25zdCBzZXNzaW9uID0gUmVzZWFyY2hTZXNzaW9uU2NoZW1hLnBhcnNlKHsgaWQ6IGByZXNlYXJjaC0ke2NsdXN0ZXIuaWR9YCwgdGl0bGU6IGNsdXN0ZXIubmFtZSwgZ29hbDogc2Vzc2lvbkdvYWwsIGNyZWF0ZWRBdDogbm93LCB1cGRhdGVkQXQ6IG5vdywgY2x1c3RlcklkOiBjbHVzdGVyLmlkLCBzdW1tYXJ5OiBjbHVzdGVyLnN1bW1hcnksIGVudGl0aWVzOiBjbHVzdGVyLnRva2VucywgY29uc3RyYWludHM6IFtdLCBjb25maXJtZWQ6IHRydWUsIHNvdXJjZXM6IG9wZW5UYWJzLmZpbHRlcigodGFiKSA9PiBjbHVzdGVyLnRhYklkcy5pbmNsdWRlcyh0YWIuaWQhKSkubWFwKCh0YWIpID0+ICh7IHRpdGxlOiB0YWIudGl0bGUsIHVybDogdGFiLnVybCEsIHRhYklkOiB0YWIuaWQgfSkpLCBmaW5kaW5ncywgY29udHJhZGljdGlvbnM6IFtdLCB1bmtub3duczogc3Ryb25nVG9rZW5zLmxlbmd0aCA/IHN0cm9uZ1Rva2Vucy5tYXAoKHRva2VuKSA9PiBgTmVlZCB0byBjb25maXJtIHdoZXRoZXIgXCIke3Rva2VufVwiIGlzIHRoZSByaWdodCBmcmFtaW5nIGZvciB0aGlzIHRvcGljLmApIDogW1wiTmVlZCB0byBjb25maXJtIHRoZSBjb3JlIHF1ZXN0aW9uIHRoaXMgcmVzZWFyY2ggdG9waWMgaXMgYW5zd2VyaW5nLlwiXSwgbmV4dFN0ZXBzIH0pO1xyXG4gICAgICAgICAgYXdhaXQgZGIucHV0KFwic2Vzc2lvbnNcIiwgc2Vzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHNhdmVDbHVzdGVycyhjbHVzdGVycyk7IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShcInN1Z2dlc3RlZC1jbHVzdGVyXCIpOyBzY2hlZHVsZUNsdXN0ZXJpbmcoKTsgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkdFVF9DT05WRVJTQVRJT05fU1VNTUFSWVwiOlxyXG4gICAgICAgIHJldHVybiAoYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0PFJlY29yZDxzdHJpbmcsIHVua25vd24+PihTdHJpbmcobWVzc2FnZS5rZXkpKSlbU3RyaW5nKG1lc3NhZ2Uua2V5KV07XHJcbiAgICAgIGNhc2UgXCJTQVZFX0NPTlZFUlNBVElPTl9TVU1NQVJZXCI6XHJcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1N0cmluZyhtZXNzYWdlLmtleSldOiBtZXNzYWdlLnN1bW1hcnkgfSk7IHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIFwiQ0xFQVJfQ09OVEVYVF9EQVRBXCI6XHJcbiAgICAgICAgaWYgKGNsdXN0ZXJUaW1lcikgY2xlYXJUaW1lb3V0KGNsdXN0ZXJUaW1lcik7XHJcbiAgICAgICAgaWYgKGNsYXNzaWZpY2F0aW9uVGltZXIpIGNsZWFyVGltZW91dChjbGFzc2lmaWNhdGlvblRpbWVyKTtcclxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1wic2VtYW50aWMtY2x1c3RlcnNcIiwgXCJzdWdnZXN0ZWQtY2x1c3RlclwiLCBcInRhYi1tZXRhZGF0YVwiLCBcInRhYi1jbGFzc2lmaWNhdGlvbi1jYWNoZVwiLCBcIm9yZ2FuaXplLXByZXZpZXdcIl0pO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsKS50aGVuKChkYXRhKSA9PiBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhcnRzV2l0aChcImNvbnZlcnNhdGlvbjpcIikpKSkgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgXCJDT0xMRUNUX1RBQl9DT05URVhUXCI6IHtcclxuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoc2VuZGVyLnRhYj8ud2luZG93SWQgPT09IHVuZGVmaW5lZCA/IHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9IDogeyB3aW5kb3dJZDogc2VuZGVyLnRhYi53aW5kb3dJZCB9KTtcclxuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLmlkID09PSBzZW5kZXIudGFiPy5pZCkgPz8gdGFicy5maW5kKCh0YWIpID0+IHRhYi5hY3RpdmUpO1xyXG4gICAgICAgIGxldCBncm91cHMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBicm93c2VyR3JvdXBzID0gYXdhaXQgY2hyb21lLnRhYkdyb3Vwcy5xdWVyeSh7fSk7XHJcbiAgICAgICAgICBncm91cHMgPSBuZXcgTWFwKGJyb3dzZXJHcm91cHMubWFwKChncm91cCkgPT4gW2dyb3VwLmlkLCBncm91cC50aXRsZSB8fCBcIlVubmFtZWQgZ3JvdXBcIl0pKTtcclxuICAgICAgICB9IGNhdGNoIHsgLyogdGFiR3JvdXBzIHBlcm1pc3Npb24gaXMgb3B0aW9uYWwgKi8gfVxyXG5cclxuICAgICAgICBjb25zdCB3b3JkcyA9IFN0cmluZyhtZXNzYWdlLnF1ZXJ5ID8/IFwiXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goL1thLXowLTldezMsfS9nKSA/PyBbXTtcclxuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gdGFicy5maWx0ZXIoKHRhYikgPT4gdGFiLmlkICE9PSBhY3RpdmVUYWI/LmlkICYmIHRhYi5pZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICB0YWIudXJsICYmIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0YWIudXJsKSAmJiAhL14oY2hyb21lfGVkZ2V8YWJvdXR8ZGV2dG9vbHMpOi8udGVzdCh0YWIudXJsKSk7XHJcbiAgICAgICAgY2FuZGlkYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzY29yZSA9ICh0YWI6IGNocm9tZS50YWJzLlRhYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9IGAke3RhYi50aXRsZSA/PyBcIlwifSAke3RhYi51cmwgPz8gXCJcIn0gJHtncm91cHMuZ2V0KHRhYi5ncm91cElkKSA/PyBcIlwifWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgbGV4aWNhbCA9IHdvcmRzLnJlZHVjZSgoc3VtLCB3b3JkKSA9PiBzdW0gKyAoaGF5c3RhY2suaW5jbHVkZXMod29yZCkgPyAyIDogMCksIDApO1xyXG4gICAgICAgICAgICBjb25zdCBzYW1lR3JvdXAgPSBhY3RpdmVUYWI/Lmdyb3VwSWQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmVUYWIuZ3JvdXBJZCA+PSAwICYmIHRhYi5ncm91cElkID09PSBhY3RpdmVUYWIuZ3JvdXBJZCA/IDUgOiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gbGV4aWNhbCArIHNhbWVHcm91cDtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gc2NvcmUoYikgLSBzY29yZShhKSB8fCAoYi5sYXN0QWNjZXNzZWQgPz8gMCkgLSAoYS5sYXN0QWNjZXNzZWQgPz8gMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGdhdGhlciBoZWFkaW5ncyBmcm9tIHRoZSBhY3RpdmUgcGFnZSB0byBpbXByb3ZlIHNob3J0bGlzdGluZyByZWxldmFuY2VcclxuICAgICAgICBsZXQgYWN0aXZlSGVhZGluZ3NUZXh0ID0gXCJcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKGFjdGl2ZVRhYj8uaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRBY3RpdmUgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogYWN0aXZlVGFiLmlkIH0sXHJcbiAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSxoMixoM1wiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbXMubWFwKChlKSA9PiAoZSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0ID8/IFwiXCIpLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xcbnszLH0vZywgXCIgXCIpLnNsaWNlKDAsIDIwMDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFjdGl2ZUhlYWRpbmdzVGV4dCA9IFN0cmluZyhleHRyYWN0ZWRBY3RpdmVbMF0/LnJlc3VsdCA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggeyAvKiBpZ25vcmUgZmFpbHVyZXMgcmVhZGluZyBhY3RpdmUgcGFnZSBoZWFkaW5ncyAqLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmdXb3JkcyA9IGFjdGl2ZUhlYWRpbmdzVGV4dC5tYXRjaCgvW2EtejAtOV17Myx9L2cpID8/IFtdO1xyXG5cclxuICAgICAgICAvLyBjb21wdXRlIGEgcmVsZXZhbmNlIHNjb3JlIGFuZCByZXF1aXJlIGF0IGxlYXN0IG9uZSBzaWduYWwgKHByb21wdCB3b3JkcywgYWN0aXZlIGhlYWRpbmdzLCBvciBzYW1lIGdyb3VwKVxyXG4gICAgICAgIGNvbnN0IHNjb3JlRm9yID0gKHRhYjogY2hyb21lLnRhYnMuVGFiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoYXlzdGFjayA9IGAke3RhYi50aXRsZSA/PyBcIlwifSAke3RhYi51cmwgPz8gXCJcIn0gJHtncm91cHMuZ2V0KHRhYi5ncm91cElkKSA/PyBcIlwifWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGNvbnN0IGxleGljYWwgPSB3b3Jkcy5yZWR1Y2UoKHN1bSwgd29yZCkgPT4gc3VtICsgKGhheXN0YWNrLmluY2x1ZGVzKHdvcmQpID8gMiA6IDApLCAwKTtcclxuICAgICAgICAgIGNvbnN0IGhlYWRpbmdzTWF0Y2ggPSBoZWFkaW5nV29yZHMucmVkdWNlKChzdW0sIHcpID0+IHN1bSArIChoYXlzdGFjay5pbmNsdWRlcyh3KSA/IDEgOiAwKSwgMCk7XHJcbiAgICAgICAgICBjb25zdCBzYW1lR3JvdXAgPSBhY3RpdmVUYWI/Lmdyb3VwSWQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmVUYWIuZ3JvdXBJZCA+PSAwICYmIHRhYi5ncm91cElkID09PSBhY3RpdmVUYWIuZ3JvdXBJZCA/IDUgOiAwO1xyXG4gICAgICAgICAgcmV0dXJuIGxleGljYWwgKyBoZWFkaW5nc01hdGNoICsgc2FtZUdyb3VwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3J0bGlzdGVkID0gY2FuZGlkYXRlc1xyXG4gICAgICAgICAgLmZpbHRlcigodGFiKSA9PiBzY29yZUZvcih0YWIpID4gMCkgLy8gZHJvcCB0YWJzIHdpdGggbm8gcmVsZXZhbmNlIHNpZ25hbFxyXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHNjb3JlRm9yKGIpIC0gc2NvcmVGb3IoYSkgfHwgKGIubGFzdEFjY2Vzc2VkID8/IDApIC0gKGEubGFzdEFjY2Vzc2VkID8/IDApKVxyXG4gICAgICAgICAgLnNsaWNlKDAsIDIpOyAvLyBjYXAgdG8gYXQgbW9zdCB0d28gdGFicyBmb3IgbG93LWxhdGVuY3kgc2NyYXBpbmdcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHNob3J0bGlzdGVkLm1hcChhc3luYyAodGFiKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkISB9LFxyXG4gICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiwgYXJ0aWNsZSwgW3JvbGU9bWFpbl1cIikgPz8gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKHJvb3QgYXMgSFRNTEVsZW1lbnQgfCBudWxsKT8uaW5uZXJUZXh0ID8/IFwiXCIpLnJlcGxhY2UoL1xcbnszLH0vZywgXCJcXG5cXG5cIikuc2xpY2UoMCwgM181MDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcoZXh0cmFjdGVkWzBdPy5yZXN1bHQgPz8gXCJcIik7XHJcbiAgICAgICAgICB9IGNhdGNoIHsgLyogcmVzdHJpY3RlZCBwYWdlcywgZGlzY2FyZGVkIHRhYnMsIGFuZCBwcm90ZWN0ZWQgZnJhbWVzIGFyZSBza2lwcGVkICovIH1cclxuICAgICAgICAgIHJldHVybiB7IC4uLnRhYiwgY29udGV4dFRleHQ6IHRleHQsIGNvbnRleHRHcm91cFRpdGxlOiB0YWIuZ3JvdXBJZCA+PSAwID8gZ3JvdXBzLmdldCh0YWIuZ3JvdXBJZCkgOiB1bmRlZmluZWQgfTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkxJU1RfU0VTU0lPTlNcIjpcclxuICAgICAgICByZXR1cm4gYXdhaXQgKGF3YWl0IGRiUHJvbWlzZSkuZ2V0QWxsKFwic2Vzc2lvbnNcIik7XHJcbiAgICAgIGNhc2UgXCJHRVRfU0VTU0lPTlwiOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZGJQcm9taXNlKS5nZXQoXCJzZXNzaW9uc1wiLCBTdHJpbmcobWVzc2FnZS5pZCkpO1xyXG4gICAgICBjYXNlIFwiU0FWRV9TRVNTSU9OXCI6IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gUmVzZWFyY2hTZXNzaW9uU2NoZW1hLnBhcnNlKG1lc3NhZ2Uuc2Vzc2lvbik7XHJcbiAgICAgICAgYXdhaXQgKGF3YWl0IGRiUHJvbWlzZSkucHV0KFwic2Vzc2lvbnNcIiwgc2Vzc2lvbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkRFTEVURV9TRVNTSU9OXCI6IHtcclxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhtZXNzYWdlLmlkID8/IFwiXCIpO1xyXG4gICAgICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlc3Npb24gSUQgd2FzIHN1cHBsaWVkXCIpO1xyXG4gICAgICAgIGF3YWl0IChhd2FpdCBkYlByb21pc2UpLmRlbGV0ZShcInNlc3Npb25zXCIsIGlkKTtcclxuICAgICAgICBjb25zdCB7IFwiYWN0aXZlLXNlc3Npb25cIjogYWN0aXZlSWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldDx7IFwiYWN0aXZlLXNlc3Npb25cIj86IHN0cmluZyB9PihcImFjdGl2ZS1zZXNzaW9uXCIpO1xyXG4gICAgICAgIGlmIChhY3RpdmVJZCA9PT0gaWQpIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShcImFjdGl2ZS1zZXNzaW9uXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJHUk9VUF9UQUJTXCI6IHtcclxuICAgICAgICBjb25zdCB0YWJJZHMgPSBBcnJheS5pc0FycmF5KG1lc3NhZ2UudGFiSWRzKSA/IG1lc3NhZ2UudGFiSWRzLmZpbHRlcigoaWQ6IHVua25vd24pID0+IE51bWJlci5pc0ludGVnZXIoaWQpKSA6IFtdO1xyXG4gICAgICAgIGlmICghdGFiSWRzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gdGFiIElEcyB3ZXJlIHN1cHBsaWVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBhd2FpdCBjaHJvbWUudGFicy5ncm91cCh7IHRhYklkcyB9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbWUudGFiR3JvdXBzLnVwZGF0ZShncm91cElkLCB7IHRpdGxlOiBTdHJpbmcobWVzc2FnZS50aXRsZSA/PyBcIlJlc2VhcmNoIHNlc3Npb25cIikuc2xpY2UoMCwgODApLCBjb2xvcjogXCJwdXJwbGVcIiB9KTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBJZDtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfSkoKS50aGVuKHNlbmRSZXNwb25zZSkuY2F0Y2goKGVycm9yKSA9PiBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkV4dGVuc2lvbiByZXF1ZXN0IGZhaWxlZFwiIH0pKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcbiIsImNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzO1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpIHtcbiAgICByZXR1cm4gKGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgICAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICAgICAgICBJREJJbmRleCxcbiAgICAgICAgICAgIElEQkN1cnNvcixcbiAgICAgICAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgICAgICBdKSk7XG59XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICAgIHJldHVybiAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAgICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgICAgICBdKSk7XG59XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0KSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhjYWxsYmFjaykge1xuICAgIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG4gICAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAgIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gICAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gICAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICAgIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKHRoaXMucmVxdWVzdCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5jb25zdCBhZHZhbmNlTWV0aG9kUHJvcHMgPSBbJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleScsICdhZHZhbmNlJ107XG5jb25zdCBtZXRob2RNYXAgPSB7fTtcbmNvbnN0IGFkdmFuY2VSZXN1bHRzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGl0dHJQcm94aWVkQ3Vyc29yVG9PcmlnaW5hbFByb3h5ID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGN1cnNvckl0ZXJhdG9yVHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAoIWFkdmFuY2VNZXRob2RQcm9wcy5pbmNsdWRlcyhwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgIGxldCBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3BdO1xuICAgICAgICBpZiAoIWNhY2hlZEZ1bmMpIHtcbiAgICAgICAgICAgIGNhY2hlZEZ1bmMgPSBtZXRob2RNYXBbcHJvcF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGFkdmFuY2VSZXN1bHRzLnNldCh0aGlzLCBpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5nZXQodGhpcylbcHJvcF0oLi4uYXJncykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVkRnVuYztcbiAgICB9LFxufTtcbmFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRlKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgbGV0IGN1cnNvciA9IHRoaXM7XG4gICAgaWYgKCEoY3Vyc29yIGluc3RhbmNlb2YgSURCQ3Vyc29yKSkge1xuICAgICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3Iub3BlbkN1cnNvciguLi5hcmdzKTtcbiAgICB9XG4gICAgaWYgKCFjdXJzb3IpXG4gICAgICAgIHJldHVybjtcbiAgICBjdXJzb3IgPSBjdXJzb3I7XG4gICAgY29uc3QgcHJveGllZEN1cnNvciA9IG5ldyBQcm94eShjdXJzb3IsIGN1cnNvckl0ZXJhdG9yVHJhcHMpO1xuICAgIGl0dHJQcm94aWVkQ3Vyc29yVG9PcmlnaW5hbFByb3h5LnNldChwcm94aWVkQ3Vyc29yLCBjdXJzb3IpO1xuICAgIC8vIE1hcCB0aGlzIGRvdWJsZS1wcm94eSBiYWNrIHRvIHRoZSBvcmlnaW5hbCwgc28gb3RoZXIgY3Vyc29yIG1ldGhvZHMgd29yay5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb3hpZWRDdXJzb3IsIHVud3JhcChjdXJzb3IpKTtcbiAgICB3aGlsZSAoY3Vyc29yKSB7XG4gICAgICAgIHlpZWxkIHByb3hpZWRDdXJzb3I7XG4gICAgICAgIC8vIElmIG9uZSBvZiB0aGUgYWR2YW5jaW5nIG1ldGhvZHMgd2FzIG5vdCBjYWxsZWQsIGNhbGwgY29udGludWUoKS5cbiAgICAgICAgY3Vyc29yID0gYXdhaXQgKGFkdmFuY2VSZXN1bHRzLmdldChwcm94aWVkQ3Vyc29yKSB8fCBjdXJzb3IuY29udGludWUoKSk7XG4gICAgICAgIGFkdmFuY2VSZXN1bHRzLmRlbGV0ZShwcm94aWVkQ3Vyc29yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc0l0ZXJhdG9yUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgICByZXR1cm4gKChwcm9wID09PSBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJlxuICAgICAgICBpbnN0YW5jZU9mQW55KHRhcmdldCwgW0lEQkluZGV4LCBJREJPYmplY3RTdG9yZSwgSURCQ3Vyc29yXSkpIHx8XG4gICAgICAgIChwcm9wID09PSAnaXRlcmF0ZScgJiYgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmVdKSkpO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAoaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRlO1xuICAgICAgICByZXR1cm4gb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCLCB1bndyYXAsIHdyYXAgfTtcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVtb3J5SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwga2luZDogei5lbnVtKFtcInByZWZlcmVuY2VcIiwgXCJmYWN0XCJdKSwgdGV4dDogei5zdHJpbmcoKS5tYXgoNTAwKSxcclxuICBjb25maWRlbmNlOiB6Lm51bWJlcigpLm1pbigwKS5tYXgoMSksIGNyZWF0ZWRBdDogei5zdHJpbmcoKSwgbGFzdFVzZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIHNvdXJjZVJlcXVlc3RJZDogei5zdHJpbmcoKSwgc3RhdHVzOiB6LmVudW0oW1wicHJvcG9zZWRcIiwgXCJhcHByb3ZlZFwiLCBcImRpc21pc3NlZFwiXSlcclxufSk7XHJcbmV4cG9ydCB0eXBlIE1lbW9yeUl0ZW0gPSB6LmluZmVyPHR5cGVvZiBNZW1vcnlJdGVtU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb252ZXJzYXRpb25NZXNzYWdlU2NoZW1hID0gei5vYmplY3QoeyByb2xlOiB6LmVudW0oW1widXNlclwiLCBcImFzc2lzdGFudFwiXSksIHRleHQ6IHouc3RyaW5nKCkubWF4KDRfMDAwKSwgY2FwdHVyZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpIH0pO1xyXG5leHBvcnQgY29uc3QgQ29udmVyc2F0aW9uU3VtbWFyeVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwgcGxhdGZvcm06IHouZW51bShbXCJjaGF0Z3B0XCIsIFwiY2xhdWRlXCIsIFwiZ2VtaW5pXCJdKSwgdGl0bGU6IHouc3RyaW5nKCkubWF4KDMwMCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLFxyXG4gIGdvYWw6IHouc3RyaW5nKCkubWF4KDFfMDAwKS5vcHRpb25hbCgpLCBkZWNpc2lvbnM6IHouYXJyYXkoei5zdHJpbmcoKS5tYXgoMzAwKSkubWF4KDgpLCBjb25zdHJhaW50czogei5hcnJheSh6LnN0cmluZygpLm1heCgzMDApKS5tYXgoOCksXHJcbiAgb3BlblF1ZXN0aW9uczogei5hcnJheSh6LnN0cmluZygpLm1heCgzMDApKS5tYXgoOCksIGVudGl0aWVzOiB6LmFycmF5KHouc3RyaW5nKCkubWF4KDEyMCkpLm1heCgyMCksIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgQ29udmVyc2F0aW9uU3VtbWFyeSA9IHouaW5mZXI8dHlwZW9mIENvbnZlcnNhdGlvblN1bW1hcnlTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbWFudGljVGFiQ2x1c3RlclNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwgd2luZG93SWQ6IHoubnVtYmVyKCksIG5hbWU6IHouc3RyaW5nKCkubWF4KDEyMCksIGNhdGVnb3J5OiB6LnN0cmluZygpLm1heCg2MCksIHRhYklkczogei5hcnJheSh6Lm51bWJlcigpKS5tYXgoMTAwKSxcclxuICBtZW1iZXJzOiB6LmFycmF5KHoub2JqZWN0KHsgdGFiSWQ6IHoubnVtYmVyKCksIHRpdGxlOiB6LnN0cmluZygpLm1heCgzMDApLCB1cmw6IHouc3RyaW5nKCkudXJsKCkgfSkpLm1heCgxMDApLm9wdGlvbmFsKCksXHJcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLCB0b2tlbnM6IHouYXJyYXkoei5zdHJpbmcoKS5tYXgoODApKS5tYXgoNDApLCBzdW1tYXJ5OiB6LnN0cmluZygpLm1heCgxXzAwMCksXHJcbiAgbGFzdEFjdGl2ZUF0OiB6LnN0cmluZygpLCBzdGF0dXM6IHouZW51bShbXCJ0ZW50YXRpdmVcIiwgXCJzdWdnZXN0ZWRcIiwgXCJjb25maXJtZWRcIl0pLCBkaXNtaXNzZWRVbnRpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLCBjaHJvbWVHcm91cElkOiB6Lm51bWJlcigpLm9wdGlvbmFsKClcclxufSk7XHJcbmV4cG9ydCB0eXBlIFNlbWFudGljVGFiQ2x1c3RlciA9IHouaW5mZXI8dHlwZW9mIFNlbWFudGljVGFiQ2x1c3RlclNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgVGFiQ2xhc3NpZmljYXRpb25SZXF1ZXN0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHRhYnM6IHouYXJyYXkoei5vYmplY3QoeyB0YWJJZDogei5udW1iZXIoKSwgdGl0bGU6IHouc3RyaW5nKCkubWF4KDMwMCksIHVybDogei5zdHJpbmcoKS51cmwoKSwgZG9tYWluOiB6LnN0cmluZygpLm1heCgyMDApIH0pKS5tYXgoMjApLFxyXG4gIGNsdXN0ZXJzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIG5hbWU6IHouc3RyaW5nKCkubWF4KDEyMCksIGNhdGVnb3J5OiB6LnN0cmluZygpLm1heCg2MCksIHN1bW1hcnk6IHouc3RyaW5nKCkubWF4KDUwMCkgfSkpLm1heCgyMClcclxufSk7XHJcbmV4cG9ydCBjb25zdCBUYWJDbGFzc2lmaWNhdGlvblJlc3BvbnNlU2NoZW1hID0gei5vYmplY3QoeyBhc3NpZ25tZW50czogei5hcnJheSh6Lm9iamVjdCh7IHRhYklkOiB6Lm51bWJlcigpLCBjbHVzdGVySWQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSwgdG9waWM6IHouc3RyaW5nKCkubWF4KDEyMCksIGNhdGVnb3J5OiB6LnN0cmluZygpLm1heCg2MCksIGNvbmZpZGVuY2U6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSB9KSkubWF4KDIwKSB9KTtcclxuZXhwb3J0IGNvbnN0IE9yZ2FuaXplV2luZG93UmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7IHdpbmRvd0lkOiB6Lm51bWJlcigpLCBjbHVzdGVyczogei5hcnJheShTZW1hbnRpY1RhYkNsdXN0ZXJTY2hlbWEpLm1heCgxMDApIH0pO1xyXG5leHBvcnQgdHlwZSBUYWJDbGFzc2lmaWNhdGlvblJlcXVlc3QgPSB6LmluZmVyPHR5cGVvZiBUYWJDbGFzc2lmaWNhdGlvblJlcXVlc3RTY2hlbWE+O1xyXG5leHBvcnQgdHlwZSBUYWJDbGFzc2lmaWNhdGlvblJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgVGFiQ2xhc3NpZmljYXRpb25SZXNwb25zZVNjaGVtYT47XHJcbmV4cG9ydCB0eXBlIE9yZ2FuaXplV2luZG93UmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBPcmdhbml6ZVdpbmRvd1Jlc3BvbnNlU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0U291cmNlU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6LnN0cmluZygpLCBraW5kOiB6LmVudW0oW1wic2VsZWN0aW9uXCIsIFwiZmllbGRcIiwgXCJwYWdlXCIsIFwidGFiXCIsIFwibWVtb3J5XCIsIFwiY2xhcmlmaWNhdGlvblwiLCBcInNlc3Npb25cIiwgXCJjbHVzdGVyXCJdKSxcclxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCkub3B0aW9uYWwoKSwgdGV4dDogei5zdHJpbmcoKS5tYXgoNDBfMDAwKS5vcHRpb25hbCgpLFxyXG4gIHRhYkdyb3VwSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSwgdGFiR3JvdXBUaXRsZTogei5zdHJpbmcoKS5tYXgoMjAwKS5vcHRpb25hbCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpLCBjYXB0dXJlZEF0OiB6LnN0cmluZygpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRQYXlsb2FkU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHJlcXVlc3RJZDogei5zdHJpbmcoKS5taW4oMSkubWF4KDEwMCksIGNhcHR1cmVkQXQ6IHouc3RyaW5nKCksIHF1ZXJ5OiB6LnN0cmluZygpLm1pbigxKS5tYXgoOF8wMDApLFxyXG4gIGZpZWxkVGV4dDogei5zdHJpbmcoKS5tYXgoOF8wMDApLm9wdGlvbmFsKCksIHNlbGVjdGlvbjogei5zdHJpbmcoKS5tYXgoOF8wMDApLm9wdGlvbmFsKCksXHJcbiAgc291cmNlczogei5hcnJheShDb250ZXh0U291cmNlU2NoZW1hKS5tYXgoMjUpLCBwcmVmZXJlbmNlczogei5hcnJheShNZW1vcnlJdGVtU2NoZW1hKS5tYXgoMjApLFxyXG4gIGNvbnZlcnNhdGlvbjogei5vYmplY3QoeyBwbGF0Zm9ybTogei5lbnVtKFtcImNoYXRncHRcIiwgXCJjbGF1ZGVcIiwgXCJnZW1pbmlcIl0pLCB0aXRsZTogei5zdHJpbmcoKS5tYXgoMzAwKS5vcHRpb25hbCgpLCB1cmw6IHouc3RyaW5nKCkudXJsKCksIGV4dHJhY3RlZEF0OiB6LnN0cmluZygpLCBtZXNzYWdlczogei5hcnJheShDb252ZXJzYXRpb25NZXNzYWdlU2NoZW1hKS5tYXgoMTIpLCBzdW1tYXJ5OiBDb252ZXJzYXRpb25TdW1tYXJ5U2NoZW1hLm9wdGlvbmFsKCksIGNvbnRpbnVhdGlvbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSB9KS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBDb250ZXh0UGF5bG9hZCA9IHouaW5mZXI8dHlwZW9mIENvbnRleHRQYXlsb2FkU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIGludGVudDogei5zdHJpbmcoKSwgb3B0aW1pemVkUHJvbXB0OiB6LnN0cmluZygpLCBzZWxlY3RlZFNvdXJjZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcclxuICBmaWx0ZXJlZENvbnRleHQ6IHouc3RyaW5nKCksIGNvbmZsaWN0czogei5hcnJheSh6Lm9iamVjdCh7IGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLCBzb3VyY2VJZHM6IHouYXJyYXkoei5zdHJpbmcoKSkgfSkpLFxyXG4gIGlzQW1iaWd1b3VzOiB6LmJvb2xlYW4oKSwgY2xhcmlmeWluZ1F1ZXN0aW9uOiB6LnN0cmluZygpLm51bGxhYmxlKCksIG1pc3NpbmdJbmZvcm1hdGlvbjogei5hcnJheSh6LnN0cmluZygpKSxcclxuICBzdWdnZXN0aW9uVXNlZnVsOiB6LmJvb2xlYW4oKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgRmlsdGVyUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBGaWx0ZXJSZXNwb25zZVNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgRXhlY3V0aW9uUmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksIG9wdGltaXplZFByb21wdDogei5zdHJpbmcoKS5taW4oMSkubWF4KDhfMDAwKSwgZmlsdGVyZWRDb250ZXh0OiB6LnN0cmluZygpLm1heCg0MF8wMDApLFxyXG4gIHNvdXJjZXM6IHouYXJyYXkoei5vYmplY3QoeyBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLm9wdGlvbmFsKCkgfSkpLFxyXG4gIHByZWZlcmVuY2VzOiB6LmFycmF5KE1lbW9yeUl0ZW1TY2hlbWEpLCBjbGFyaWZpY2F0aW9uQW5zd2VyOiB6LnN0cmluZygpLm1heCg0XzAwMCkub3B0aW9uYWwoKSxcclxuICBjb3JyZWN0aW9uRmVlZGJhY2s6IHouc3RyaW5nKCkubWF4KDRfMDAwKS5vcHRpb25hbCgpXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBFeGVjdXRpb25SZXF1ZXN0ID0gei5pbmZlcjx0eXBlb2YgRXhlY3V0aW9uUmVxdWVzdFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgVmVyaWZpY2F0aW9uUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHJlcXVlc3RJZDogei5zdHJpbmcoKSwgcGFzc2VkOiB6LmJvb2xlYW4oKSwgc2NvcmU6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSxcclxuICBpc3N1ZXM6IHouYXJyYXkoei5vYmplY3QoeyBraW5kOiB6LmVudW0oW1wiaW50ZW50X2dhcFwiLCBcInVuc3VwcG9ydGVkX2NsYWltXCIsIFwiZm9ybWF0XCIsIFwiaW5jb21wbGV0ZVwiXSksIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpIH0pKSxcclxuICBjb3JyZWN0aW9uUHJvbXB0OiB6LnN0cmluZygpLm9wdGlvbmFsKClcclxufSk7XHJcbmV4cG9ydCB0eXBlIFZlcmlmaWNhdGlvblJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFZlcmlmaWNhdGlvblJlc3VsdFNjaGVtYT47XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaXN0UmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHsgY29udGV4dDogQ29udGV4dFBheWxvYWRTY2hlbWEsIGNsYXJpZmljYXRpb25BbnN3ZXI6IHouc3RyaW5nKCkubWF4KDRfMDAwKS5vcHRpb25hbCgpLCBza2lwQ2xhcmlmaWNhdGlvbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSB9KTtcclxuZXhwb3J0IGNvbnN0IEFzc2lzdFJlc3BvbnNlU2NoZW1hID0gei5kaXNjcmltaW5hdGVkVW5pb24oXCJzdGF0dXNcIiwgW1xyXG4gIHoub2JqZWN0KHsgc3RhdHVzOiB6LmxpdGVyYWwoXCJjbGFyaWZpY2F0aW9uX3JlcXVpcmVkXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hIH0pLFxyXG4gIHoub2JqZWN0KHsgc3RhdHVzOiB6LmxpdGVyYWwoXCJub19zdWdnZXN0aW9uXCIpLCBmaWx0ZXI6IEZpbHRlclJlc3BvbnNlU2NoZW1hIH0pLFxyXG4gIHoub2JqZWN0KHtcclxuICAgIHN0YXR1czogei5saXRlcmFsKFwiY29tcGxldGVcIiksIGZpbHRlcjogRmlsdGVyUmVzcG9uc2VTY2hlbWEsIHJlZmluZWRQcm9tcHQ6IHouc3RyaW5nKCksXHJcbiAgICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgaWQ6IHouc3RyaW5nKCksIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksIHVybDogei5zdHJpbmcoKS51cmwoKS5vcHRpb25hbCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpIH0pKSxcclxuICAgIG1lbW9yeVN1Z2dlc3Rpb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLm1heCgyKS5vcHRpb25hbCgpXHJcbiAgfSlcclxuXSk7XHJcbmV4cG9ydCB0eXBlIEFzc2lzdFJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgQXNzaXN0UmVzcG9uc2VTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2VhcmNoU2Vzc2lvblNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5zdHJpbmcoKSwgdGl0bGU6IHouc3RyaW5nKCksIGdvYWw6IHouc3RyaW5nKCksIGNyZWF0ZWRBdDogei5zdHJpbmcoKSwgdXBkYXRlZEF0OiB6LnN0cmluZygpLCBjbHVzdGVySWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgc3VtbWFyeTogei5zdHJpbmcoKS5tYXgoMV8wMDApLm9wdGlvbmFsKCksIGVudGl0aWVzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksIGNvbnN0cmFpbnRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksIGNvbmZpcm1lZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcclxuICBzb3VyY2VzOiB6LmFycmF5KHoub2JqZWN0KHsgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgdXJsOiB6LnN0cmluZygpLnVybCgpLCB0YWJJZDogei5udW1iZXIoKS5vcHRpb25hbCgpLCBmaW5kaW5nOiB6LnN0cmluZygpLm9wdGlvbmFsKCkgfSkpLFxyXG4gIGZpbmRpbmdzOiB6LmFycmF5KHouc3RyaW5nKCkpLCBjb250cmFkaWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSwgdW5rbm93bnM6IHouYXJyYXkoei5zdHJpbmcoKSksIG5leHRTdGVwczogei5hcnJheSh6LnN0cmluZygpKVxyXG59KTtcclxuZXhwb3J0IHR5cGUgUmVzZWFyY2hTZXNzaW9uID0gei5pbmZlcjx0eXBlb2YgUmVzZWFyY2hTZXNzaW9uU2NoZW1hPjtcclxuIiwidmFyIHV0aWw7XG4oZnVuY3Rpb24gKHV0aWwpIHtcbiAgICB1dGlsLmFzc2VydEVxdWFsID0gKHZhbCkgPT4gdmFsO1xuICAgIGZ1bmN0aW9uIGFzc2VydElzKF9hcmcpIHsgfVxuICAgIHV0aWwuYXNzZXJ0SXMgPSBhc3NlcnRJcztcbiAgICBmdW5jdGlvbiBhc3NlcnROZXZlcihfeCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdXRpbC5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuICAgIHV0aWwuYXJyYXlUb0VudW0gPSAoaXRlbXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgb2JqW2l0ZW1dID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhvYmopLmZpbHRlcigoaykgPT4gdHlwZW9mIG9ialtvYmpba11dICE9PSBcIm51bWJlclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIHZhbGlkS2V5cykge1xuICAgICAgICAgICAgZmlsdGVyZWRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0VmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RLZXlzKG9iaikubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2VdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0S2V5cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gXCJmdW5jdGlvblwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA/IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH07XG4gICAgdXRpbC5maW5kID0gKGFyciwgY2hlY2tlcikgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlcihpdGVtKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgdXRpbC5pc0ludGVnZXIgPSB0eXBlb2YgTnVtYmVyLmlzSW50ZWdlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gKHZhbCkgPT4gTnVtYmVyLmlzSW50ZWdlcih2YWwpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUodmFsKSAmJiBNYXRoLmZsb29yKHZhbCkgPT09IHZhbDtcbiAgICBmdW5jdGlvbiBqb2luVmFsdWVzKGFycmF5LCBzZXBhcmF0b3IgPSBcIiB8IFwiKSB7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLm1hcCgodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IGAnJHt2YWx9J2AgOiB2YWwpKVxuICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgdXRpbC5qb2luVmFsdWVzID0gam9pblZhbHVlcztcbiAgICB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciA9IChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn0pKHV0aWwgfHwgKHV0aWwgPSB7fSkpO1xudmFyIG9iamVjdFV0aWw7XG4oZnVuY3Rpb24gKG9iamVjdFV0aWwpIHtcbiAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzID0gKGZpcnN0LCBzZWNvbmQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmZpcnN0LFxuICAgICAgICAgICAgLi4uc2Vjb25kLCAvLyBzZWNvbmQgb3ZlcndyaXRlcyBmaXJzdFxuICAgICAgICB9O1xuICAgIH07XG59KShvYmplY3RVdGlsIHx8IChvYmplY3RVdGlsID0ge30pKTtcbmNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG5cbmNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5jbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBnZXQgZXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGlzc3Vlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZElzc3VlID0gKHN1YikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIHN1Yl07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkSXNzdWVzID0gKHN1YnMgPSBbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIC4uLnN1YnNdO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhY3R1YWxQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIGFjdHVhbFByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gYWN0dWFsUHJvdG87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IGlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3NlcnQodmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBab2RFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgWm9kRXJyb3I6ICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pc3N1ZXMsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZsYXR0ZW4obWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge307XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbc3ViLnBhdGhbMF1dID0gZmllbGRFcnJvcnNbc3ViLnBhdGhbMF1dIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXS5wdXNoKG1hcHBlcihzdWIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1FcnJvcnMucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZm9ybUVycm9ycywgZmllbGRFcnJvcnMgfTtcbiAgICB9XG4gICAgZ2V0IGZvcm1FcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW4oKTtcbiAgICB9XG59XG5ab2RFcnJvci5jcmVhdGUgPSAoaXNzdWVzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoaXNzdWVzKTtcbiAgICByZXR1cm4gZXJyb3I7XG59O1xuXG5jb25zdCBlcnJvck1hcCA9IChpc3N1ZSwgX2N0eCkgPT4ge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIHN3aXRjaCAoaXNzdWUuY29kZSkge1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGU6XG4gICAgICAgICAgICBpZiAoaXNzdWUucmVjZWl2ZWQgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiUmVxdWlyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRXhwZWN0ZWQgJHtpc3N1ZS5leHBlY3RlZH0sIHJlY2VpdmVkICR7aXNzdWUucmVjZWl2ZWR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWw6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgbGl0ZXJhbCB2YWx1ZSwgZXhwZWN0ZWQgJHtKU09OLnN0cmluZ2lmeShpc3N1ZS5leHBlY3RlZCwgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYFVucmVjb2duaXplZCBrZXkocykgaW4gb2JqZWN0OiAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5rZXlzLCBcIiwgXCIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGVudW0gdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfSwgcmVjZWl2ZWQgJyR7aXNzdWUucmVjZWl2ZWR9J2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gYXJndW1lbnRzYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIHJldHVybiB0eXBlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGF0ZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJpbmNsdWRlc1wiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGluY2x1ZGUgXCIke2lzc3VlLnZhbGlkYXRpb24uaW5jbHVkZXN9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24ucG9zaXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgJHttZXNzYWdlfSBhdCBvbmUgb3IgbW9yZSBwb3NpdGlvbnMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7aXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbn1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKE51bWJlcihpc3N1ZS5taW5pbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudG9vX2JpZzpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBtb3N0YCA6IGB1bmRlcmB9ICR7aXNzdWUubWF4aW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBCaWdJbnQgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgPyBgZXhhY3RseWBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0b2BcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYHNtYWxsZXIgdGhhbmB9ICR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1heGltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5jdXN0b206XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnRlcnNlY3Rpb24gcmVzdWx0cyBjb3VsZCBub3QgYmUgbWVyZ2VkYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2Y6XG4gICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtpc3N1ZS5tdWx0aXBsZU9mfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk51bWJlciBtdXN0IGJlIGZpbml0ZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtZXNzYWdlID0gX2N0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xufTtcblxubGV0IG92ZXJyaWRlRXJyb3JNYXAgPSBlcnJvck1hcDtcbmZ1bmN0aW9uIHNldEVycm9yTWFwKG1hcCkge1xuICAgIG92ZXJyaWRlRXJyb3JNYXAgPSBtYXA7XG59XG5mdW5jdGlvbiBnZXRFcnJvck1hcCgpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVFcnJvck1hcDtcbn1cblxuY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmNvbnN0IEVNUFRZX1BBVEggPSBbXTtcbmZ1bmN0aW9uIGFkZElzc3VlVG9Db250ZXh0KGN0eCwgaXNzdWVEYXRhKSB7XG4gICAgY29uc3Qgb3ZlcnJpZGVNYXAgPSBnZXRFcnJvck1hcCgpO1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgLy8gY29udGV4dHVhbCBlcnJvciBtYXAgaXMgZmlyc3QgcHJpb3JpdHlcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCwgLy8gdGhlbiBzY2hlbWEtYm91bmQgbWFwIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgb3ZlcnJpZGVNYXAsIC8vIHRoZW4gZ2xvYmFsIG92ZXJyaWRlIG1hcFxuICAgICAgICAgICAgb3ZlcnJpZGVNYXAgPT09IGVycm9yTWFwID8gdW5kZWZpbmVkIDogZXJyb3JNYXAsIC8vIHRoZW4gZ2xvYmFsIGRlZmF1bHQgbWFwXG4gICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgIH0pO1xuICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goaXNzdWUpO1xufVxuY2xhc3MgUGFyc2VTdGF0dXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJ2YWxpZFwiO1xuICAgIH1cbiAgICBkaXJ0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IFwidmFsaWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImRpcnR5XCI7XG4gICAgfVxuICAgIGFib3J0KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJhYm9ydGVkXCI7XG4gICAgfVxuICAgIHN0YXRpYyBtZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cykge1xuICAgICAgICBjb25zdCBhcnJheVZhbHVlID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBhcnJheVZhbHVlLnB1c2gocy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBhcnJheVZhbHVlIH07XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBtZXJnZU9iamVjdEFzeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgfVxuICAgIHN0YXRpYyBtZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBmaW5hbE9iamVjdCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gcGFpcjtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGlmIChrZXkudmFsdWUgIT09IFwiX19wcm90b19fXCIgJiZcbiAgICAgICAgICAgICAgICAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuY29uc3QgSU5WQUxJRCA9IE9iamVjdC5mcmVlemUoe1xuICAgIHN0YXR1czogXCJhYm9ydGVkXCIsXG59KTtcbmNvbnN0IERJUlRZID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwiZGlydHlcIiwgdmFsdWUgfSk7XG5jb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuY29uc3QgaXNBYm9ydGVkID0gKHgpID0+IHguc3RhdHVzID09PSBcImFib3J0ZWRcIjtcbmNvbnN0IGlzRGlydHkgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiZGlydHlcIjtcbmNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmNvbnN0IGlzQXN5bmMgPSAoeCkgPT4gdHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgeCBpbnN0YW5jZW9mIFByb21pc2U7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbnR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xyXG59O1xuXG52YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuXG52YXIgX1pvZEVudW1fY2FjaGUsIF9ab2ROYXRpdmVFbnVtX2NhY2hlO1xuY2xhc3MgUGFyc2VJbnB1dExhenlQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZhbHVlLCBwYXRoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVkUGF0aCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgLi4udGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCB0aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRQYXRoO1xuICAgIH1cbn1cbmNvbnN0IGhhbmRsZVJlc3VsdCA9IChjdHgsIHJlc3VsdCkgPT4ge1xuICAgIGlmIChpc1ZhbGlkKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LnZhbHVlIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBmYWlsZWQgYnV0IG5vIGlzc3VlcyBkZXRlY3RlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCB7IGVycm9yTWFwLCBpbnZhbGlkX3R5cGVfZXJyb3IsIHJlcXVpcmVkX2Vycm9yLCBkZXNjcmlwdGlvbiB9ID0gcGFyYW1zO1xuICAgIGlmIChlcnJvck1hcCAmJiAoaW52YWxpZF90eXBlX2Vycm9yIHx8IHJlcXVpcmVkX2Vycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBcImludmFsaWRfdHlwZV9lcnJvclwiIG9yIFwicmVxdWlyZWRfZXJyb3JcIiBpbiBjb25qdW5jdGlvbiB3aXRoIGN1c3RvbSBlcnJvciBtYXAuYCk7XG4gICAgfVxuICAgIGlmIChlcnJvck1hcClcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JNYXA6IGVycm9yTWFwLCBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGN1c3RvbU1hcCA9IChpc3MsIGN0eCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHBhcmFtcztcbiAgICAgICAgaWYgKGlzcy5jb2RlID09PSBcImludmFsaWRfZW51bV92YWx1ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCA/IG1lc3NhZ2UgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjdHguZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogKF9hID0gbWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgPyBtZXNzYWdlIDogcmVxdWlyZWRfZXJyb3IpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNzLmNvZGUgIT09IFwiaW52YWxpZF90eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IChfYiA9IG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwID8gbWVzc2FnZSA6IGludmFsaWRfdHlwZV9lcnJvcikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmNsYXNzIFpvZFR5cGUge1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgX2dldFR5cGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIF9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4IHx8IHtcbiAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3IFBhcnNlU3RhdHVzKCksXG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9wYXJzZVN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBwYXJzZSBlbmNvdW50ZXJlZCBwcm9taXNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfcGFyc2VBc3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG4gICAgcGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2FmZVBhcnNlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBzYWZlUGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBhc3luYzogKF9hID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmFzeW5jKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnBhdGgpIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXN1bHQoY3R4LCByZXN1bHQpO1xuICAgIH1cbiAgICBcIn52YWxpZGF0ZVwiKGRhdGEpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBhc3luYzogISF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogW10sIHBhcmVudDogY3R4IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBjdHguY29tbW9uLmlzc3VlcyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoKF9iID0gKF9hID0gZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLm1lc3NhZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5jbHVkZXMoXCJlbmNvdW50ZXJlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBc3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChyZXN1bHQpID0+IGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgYXN5bmMgc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5wYXRoKSB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF5YmVBc3luY1Jlc3VsdCA9IHRoaXMuX3BhcnNlKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoaXNBc3luYyhtYXliZUFzeW5jUmVzdWx0KVxuICAgICAgICAgICAgPyBtYXliZUFzeW5jUmVzdWx0XG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShtYXliZUFzeW5jUmVzdWx0KSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXN1bHQoY3R4LCByZXN1bHQpO1xuICAgIH1cbiAgICByZWZpbmUoY2hlY2ssIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZ2V0SXNzdWVQcm9wZXJ0aWVzID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBtZXNzYWdlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVjayh2YWwpO1xuICAgICAgICAgICAgY29uc3Qgc2V0RXJyb3IgPSAoKSA9PiBjdHguYWRkSXNzdWUoe1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5jdXN0b20sXG4gICAgICAgICAgICAgICAgLi4uZ2V0SXNzdWVQcm9wZXJ0aWVzKHZhbCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZpbmVtZW50KGNoZWNrLCByZWZpbmVtZW50RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hlY2sodmFsKSkge1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh0eXBlb2YgcmVmaW5lbWVudERhdGEgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlZmluZW1lbnREYXRhKHZhbCwgY3R4KVxuICAgICAgICAgICAgICAgICAgICA6IHJlZmluZW1lbnREYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZWZpbmVtZW50KHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInJlZmluZW1lbnRcIiwgcmVmaW5lbWVudCB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3VwZXJSZWZpbmUocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudChyZWZpbmVtZW50KTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoZGVmKSB7XG4gICAgICAgIC8qKiBBbGlhcyBvZiBzYWZlUGFyc2VBc3luYyAqL1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc2FmZVBhcnNlQXN5bmM7XG4gICAgICAgIHRoaXMuX2RlZiA9IGRlZjtcbiAgICAgICAgdGhpcy5wYXJzZSA9IHRoaXMucGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2UgPSB0aGlzLnNhZmVQYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnNlQXN5bmMgPSB0aGlzLnBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2VBc3luYyA9IHRoaXMuc2FmZVBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNwYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZSA9IHRoaXMucmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lbWVudCA9IHRoaXMucmVmaW5lbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1cGVyUmVmaW5lID0gdGhpcy5zdXBlclJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5vcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxhYmxlID0gdGhpcy5udWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxpc2ggPSB0aGlzLm51bGxpc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3IgPSB0aGlzLm9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5kID0gdGhpcy5hbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuY2F0Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuZGVzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waXBlID0gdGhpcy5waXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOdWxsYWJsZSA9IHRoaXMuaXNOdWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzT3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXSA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IDEsXG4gICAgICAgICAgICB2ZW5kb3I6IFwiem9kXCIsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGRhdGEpID0+IHRoaXNbXCJ+dmFsaWRhdGVcIl0oZGF0YSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG51bGxhYmxlKCkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG51bGxpc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bGxhYmxlKCkub3B0aW9uYWwoKTtcbiAgICB9XG4gICAgYXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBab2RBcnJheS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiBab2RQcm9taXNlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSwgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgYW5kKGluY29taW5nKSB7XG4gICAgICAgIHJldHVybiBab2RJbnRlcnNlY3Rpb24uY3JlYXRlKHRoaXMsIGluY29taW5nLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWZhdWx0KGRlZikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnJhbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQnJhbmRlZCh7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJyYW5kZWQsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZGVmKSB7XG4gICAgICAgIGNvbnN0IGNhdGNoVmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGNhdGNoVmFsdWU6IGNhdGNoVmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc2NyaWJlKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IFRoaXMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IFRoaXMoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaXBlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gWm9kUGlwZWxpbmUuY3JlYXRlKHRoaXMsIHRhcmdldCk7XG4gICAgfVxuICAgIHJlYWRvbmx5KCkge1xuICAgICAgICByZXR1cm4gWm9kUmVhZG9ubHkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBpc09wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlUGFyc2UodW5kZWZpbmVkKS5zdWNjZXNzO1xuICAgIH1cbiAgICBpc051bGxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlUGFyc2UobnVsbCkuc3VjY2VzcztcbiAgICB9XG59XG5jb25zdCBjdWlkUmVnZXggPSAvXmNbXlxccy1dezgsfSQvaTtcbmNvbnN0IGN1aWQyUmVnZXggPSAvXlswLTlhLXpdKyQvO1xuY29uc3QgdWxpZFJlZ2V4ID0gL15bMC05QS1ISktNTlAtVFYtWl17MjZ9JC9pO1xuLy8gY29uc3QgdXVpZFJlZ2V4ID1cbi8vICAgL14oW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tWzEtNV1bYS1mMC05XXszfS1bYS1mMC05XXs0fS1bYS1mMC05XXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcbmNvbnN0IHV1aWRSZWdleCA9IC9eWzAtOWEtZkEtRl17OH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17NH1cXGItWzAtOWEtZkEtRl17MTJ9JC9pO1xuY29uc3QgbmFub2lkUmVnZXggPSAvXlthLXowLTlfLV17MjF9JC9pO1xuY29uc3Qgand0UmVnZXggPSAvXltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dKiQvO1xuY29uc3QgZHVyYXRpb25SZWdleCA9IC9eWy0rXT9QKD8hJCkoPzooPzpbLStdP1xcZCtZKXwoPzpbLStdP1xcZCtbLixdXFxkK1kkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/Oig/OlstK10/XFxkK1cpfCg/OlstK10/XFxkK1suLF1cXGQrVyQpKT8oPzooPzpbLStdP1xcZCtEKXwoPzpbLStdP1xcZCtbLixdXFxkK0QkKSk/KD86VCg/PVtcXGQrLV0pKD86KD86Wy0rXT9cXGQrSCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtIJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzpbLStdP1xcZCsoPzpbLixdXFxkKyk/Uyk/KT8/JC87XG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjE4MS8xNTUwMTU1XG4vLyBvbGQgdmVyc2lvbjogdG9vIHNsb3csIGRpZG4ndCBzdXBwb3J0IHVuaWNvZGVcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkkL2k7XG4vL29sZCBlbWFpbCByZWdleFxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF0uLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoPyEtKShbXjw+KClbXFxdLiw7Olxcc0BcIl0rXFwuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17MSx9KVteLTw+KClbXFxdLiw7Olxcc0BcIl0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFsoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXF0pfChcXFtJUHY2OigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSlcXF0pfChbQS1aYS16MC05XShbQS1aYS16MC05LV0qW0EtWmEtejAtOV0pKihcXC5bQS1aYS16XXsyLH0pKykpJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL15bYS16QS1aMC05XFwuXFwhXFwjXFwkXFwlXFwmXFwnXFwqXFwrXFwvXFw9XFw/XFxeXFxfXFxgXFx7XFx8XFx9XFx+XFwtXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXig/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuY29uc3QgZW1haWxSZWdleCA9IC9eKD8hXFwuKSg/IS4qXFwuXFwuKShbQS1aMC05XycrXFwtXFwuXSopW0EtWjAtOV8rLV1AKFtBLVowLTldW0EtWjAtOVxcLV0qXFwuKStbQS1aXXsyLH0kL2k7XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL15bYS16MC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXowLTktXSsoPzpcXC5bYS16MC05XFwtXSspKiQvaTtcbi8vIGZyb20gaHR0cHM6Ly90aGVrZXZpbnNjb3R0LmNvbS9lbW9qaXMtaW4tamF2YXNjcmlwdC8jd3JpdGluZy1hLXJlZ3VsYXItZXhwcmVzc2lvblxuY29uc3QgX2Vtb2ppUmVnZXggPSBgXihcXFxccHtFeHRlbmRlZF9QaWN0b2dyYXBoaWN9fFxcXFxwe0Vtb2ppX0NvbXBvbmVudH0pKyRgO1xubGV0IGVtb2ppUmVnZXg7XG4vLyBmYXN0ZXIsIHNpbXBsZXIsIHNhZmVyXG5jb25zdCBpcHY0UmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKSQvO1xuY29uc3QgaXB2NENpZHJSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwvKDNbMC0yXXxbMTJdP1swLTldKSQvO1xuLy8gY29uc3QgaXB2NlJlZ2V4ID1cbi8vIC9eKChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKSQvO1xuY29uc3QgaXB2NlJlZ2V4ID0gL14oKFswLTlhLWZBLUZdezEsNH06KXs3LDd9WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsN306fChbMC05YS1mQS1GXXsxLDR9Oil7MSw2fTpbMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw1fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwyfXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH0oOlswLTlhLWZBLUZdezEsNH0pezEsM318KFswLTlhLWZBLUZdezEsNH06KXsxLDN9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwyfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw1fXxbMC05YS1mQS1GXXsxLDR9OigoOlswLTlhLWZBLUZdezEsNH0pezEsNn0pfDooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDd9fDopfGZlODA6KDpbMC05YS1mQS1GXXswLDR9KXswLDR9JVswLTlhLXpBLVpdezEsfXw6OihmZmZmKDowezEsNH0pezAsMX06KXswLDF9KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pfChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fTooKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSkpJC87XG5jb25zdCBpcHY2Q2lkclJlZ2V4ID0gL14oKFswLTlhLWZBLUZdezEsNH06KXs3LDd9WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsN306fChbMC05YS1mQS1GXXsxLDR9Oil7MSw2fTpbMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw1fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwyfXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH0oOlswLTlhLWZBLUZdezEsNH0pezEsM318KFswLTlhLWZBLUZdezEsNH06KXsxLDN9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwyfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw1fXxbMC05YS1mQS1GXXsxLDR9OigoOlswLTlhLWZBLUZdezEsNH0pezEsNn0pfDooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDd9fDopfGZlODA6KDpbMC05YS1mQS1GXXswLDR9KXswLDR9JVswLTlhLXpBLVpdezEsfXw6OihmZmZmKDowezEsNH0pezAsMX06KXswLDF9KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pfChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fTooKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSkpXFwvKDEyWzAtOF18MVswMV1bMC05XXxbMS05XT9bMC05XSkkLztcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc4NjAzOTIvZGV0ZXJtaW5lLWlmLXN0cmluZy1pcy1pbi1iYXNlNjQtdXNpbmctamF2YXNjcmlwdFxuY29uc3QgYmFzZTY0UmVnZXggPSAvXihbMC05YS16QS1aKy9dezR9KSooKFswLTlhLXpBLVorL117Mn09PSl8KFswLTlhLXpBLVorL117M309KSk/JC87XG4vLyBodHRwczovL2Jhc2U2NC5ndXJ1L3N0YW5kYXJkcy9iYXNlNjR1cmxcbmNvbnN0IGJhc2U2NHVybFJlZ2V4ID0gL14oWzAtOWEtekEtWi1fXXs0fSkqKChbMC05YS16QS1aLV9dezJ9KD09KT8pfChbMC05YS16QS1aLV9dezN9KD0pPykpPyQvO1xuLy8gc2ltcGxlXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1gO1xuLy8gbm8gbGVhcCB5ZWFyIHZhbGlkYXRpb25cbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS0oKDBbMTM1NzhdfDEwfDEyKS0zMXwoMFsxMy05XXwxWzAtMl0pLTMwfCgwWzEtOV18MVswLTJdKS0oMFsxLTldfDFcXFxcZHwyXFxcXGQpKWA7XG4vLyB3aXRoIGxlYXAgeWVhciB2YWxpZGF0aW9uXG5jb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgKChcXFxcZFxcXFxkWzI0NjhdWzA0OF18XFxcXGRcXFxcZFsxMzU3OV1bMjZdfFxcXFxkXFxcXGQwWzQ4XXxbMDI0NjhdWzA0OF0wMHxbMTM1NzldWzI2XTAwKS0wMi0yOXxcXFxcZHs0fS0oKDBbMTM1NzhdfDFbMDJdKS0oMFsxLTldfFsxMl1cXFxcZHwzWzAxXSl8KDBbNDY5XXwxMSktKDBbMS05XXxbMTJdXFxcXGR8MzApfCgwMiktKDBbMS05XXwxXFxcXGR8MlswLThdKSkpYDtcbmNvbnN0IGRhdGVSZWdleCA9IG5ldyBSZWdFeHAoYF4ke2RhdGVSZWdleFNvdXJjZX0kYCk7XG5mdW5jdGlvbiB0aW1lUmVnZXhTb3VyY2UoYXJncykge1xuICAgIC8vIGxldCByZWdleCA9IGBcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfWA7XG4gICAgbGV0IHJlZ2V4ID0gYChbMDFdXFxcXGR8MlswLTNdKTpbMC01XVxcXFxkOlswLTVdXFxcXGRgO1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICByZWdleCA9IGAke3JlZ2V4fVxcXFwuXFxcXGR7JHthcmdzLnByZWNpc2lvbn19YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT0gbnVsbCkge1xuICAgICAgICByZWdleCA9IGAke3JlZ2V4fShcXFxcLlxcXFxkKyk/YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2V4O1xufVxuZnVuY3Rpb24gdGltZVJlZ2V4KGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfSRgKTtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzE0MzIzMVxuZnVuY3Rpb24gZGF0ZXRpbWVSZWdleChhcmdzKSB7XG4gICAgbGV0IHJlZ2V4ID0gYCR7ZGF0ZVJlZ2V4U291cmNlfVQke3RpbWVSZWdleFNvdXJjZShhcmdzKX1gO1xuICAgIGNvbnN0IG9wdHMgPSBbXTtcbiAgICBvcHRzLnB1c2goYXJncy5sb2NhbCA/IGBaP2AgOiBgWmApO1xuICAgIGlmIChhcmdzLm9mZnNldClcbiAgICAgICAgb3B0cy5wdXNoKGAoWystXVxcXFxkezJ9Oj9cXFxcZHsyfSlgKTtcbiAgICByZWdleCA9IGAke3JlZ2V4fSgke29wdHMuam9pbihcInxcIil9KWA7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3JlZ2V4fSRgKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRJUChpcCwgdmVyc2lvbikge1xuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NFwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY0UmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2UmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRKV1Qoand0LCBhbGcpIHtcbiAgICBpZiAoIWp3dFJlZ2V4LnRlc3Qoand0KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFtoZWFkZXJdID0gand0LnNwbGl0KFwiLlwiKTtcbiAgICAgICAgLy8gQ29udmVydCBiYXNlNjR1cmwgdG8gYmFzZTY0XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGhlYWRlclxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgXCIrXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIilcbiAgICAgICAgICAgIC5wYWRFbmQoaGVhZGVyLmxlbmd0aCArICgoNCAtIChoZWFkZXIubGVuZ3RoICUgNCkpICUgNCksIFwiPVwiKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IEpTT04ucGFyc2UoYXRvYihiYXNlNjQpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWNvZGVkICE9PSBcIm9iamVjdFwiIHx8IGRlY29kZWQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghZGVjb2RlZC50eXAgfHwgIWRlY29kZWQuYWxnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYWxnICYmIGRlY29kZWQuYWxnICE9PSBhbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRDaWRyKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5jbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBTdHJpbmcoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5sZW5ndGggPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5sZW5ndGggPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImxlbmd0aFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gaW5wdXQuZGF0YS5sZW5ndGggPiBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZyB8fCB0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbW9qaVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbW9qaVJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppUmVnZXggPSBuZXcgUmVnRXhwKF9lbW9qaVJlZ2V4LCBcInVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInV1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1dWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJuYW5vaWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghbmFub2lkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcIm5hbm9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY3VpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImN1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWQyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1aWQyUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImN1aWQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1bGlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVsaWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXJsXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMKGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBjaGVjay5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBjaGVjay5yZWdleC50ZXN0KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0cmltXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImluY2x1ZGVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuaW5jbHVkZXMoY2hlY2sudmFsdWUsIGNoZWNrLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGluY2x1ZGVzOiBjaGVjay52YWx1ZSwgcG9zaXRpb246IGNoZWNrLnBvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b0xvd2VyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9VcHBlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInN0YXJ0c1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5zdGFydHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IHN0YXJ0c1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbmRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmVuZHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGVuZHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZXRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZVJlZ2V4O1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvblJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaXBcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZElQKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImp3dFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSldUKGlucHV0LmRhdGEsIGNoZWNrLmFsZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJqd3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImNpZHJcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENpZHIoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjaWRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0UmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NHVybFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX3JlZ2V4KHJlZ2V4LCB2YWxpZGF0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmluZW1lbnQoKGRhdGEpID0+IHJlZ2V4LnRlc3QoZGF0YSksIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24sXG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBlbW9qaShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1vamlcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgbmFub2lkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJuYW5vaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZDIobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWQyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdWxpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidWxpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiYmFzZTY0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0dXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBqd3Qob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImp3dFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGlwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJpcFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGNpZHIob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImNpZHJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBkYXRldGltZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG9mZnNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9jYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24pID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vZmZzZXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWw6IChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZGF0ZVwiLCBtZXNzYWdlIH0pO1xuICAgIH1cbiAgICB0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwidGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24pID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHVyYXRpb24obWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImR1cmF0aW9uXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgcmVnZXgocmVnZXgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwicmVnZXhcIixcbiAgICAgICAgICAgIHJlZ2V4OiByZWdleCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVzKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImluY2x1ZGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnBvc2l0aW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0c1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwic3RhcnRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW5kc1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZW5kc1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluTGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImxlbmd0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IGxlbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVxdWl2YWxlbnQgdG8gYC5taW4oMSlgXG4gICAgICovXG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgdHJpbSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRyaW1cIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvTG93ZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9Mb3dlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvVXBwZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9VcHBlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBpc0RhdGV0aW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGV0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEYXRlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGVcIik7XG4gICAgfVxuICAgIGdldCBpc1RpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZHVyYXRpb25cIik7XG4gICAgfVxuICAgIGdldCBpc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtYWlsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVUkwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXJsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbW9qaSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbW9qaVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVVJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1dWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNOQU5PSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwibmFub2lkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQyKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWQyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVTElEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVsaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0lQKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImlwXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDSURSKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImNpZHJcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjRcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NHVybCgpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjR1cmxcIik7XG4gICAgfVxuICAgIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heExlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZFN0cmluZy5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTdHJpbmcsXG4gICAgICAgIGNvZXJjZTogKF9hID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY2NDg0L3doeS1kb2VzLW1vZHVsdXMtb3BlcmF0b3ItcmV0dXJuLWZyYWN0aW9uYWwtbnVtYmVyLWluLWphdmFzY3JpcHQvMzE3MTEwMzQjMzE3MTEwMzRcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgICBjb25zdCB2YWxEZWNDb3VudCA9ICh2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBkZWNDb3VudCA9IHZhbERlY0NvdW50ID4gc3RlcERlY0NvdW50ID8gdmFsRGVjQ291bnQgOiBzdGVwRGVjQ291bnQ7XG4gICAgY29uc3QgdmFsSW50ID0gcGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICBjb25zdCBzdGVwSW50ID0gcGFyc2VJbnQoc3RlcC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgcmV0dXJuICh2YWxJbnQgJSBzdGVwSW50KSAvIE1hdGgucG93KDEwLCBkZWNDb3VudCk7XG59XG5jbGFzcyBab2ROdW1iZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5tdWx0aXBsZU9mO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBOdW1iZXIoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWwuaXNJbnRlZ2VyKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlZDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRTYWZlUmVtYWluZGVyKGlucHV0LmRhdGEsIGNoZWNrLnZhbHVlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJmaW5pdGVcIikge1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5pdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJmaW5pdGVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNhZmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSkuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIiB8fFxuICAgICAgICAgICAgKGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiICYmIHV0aWwuaXNJbnRlZ2VyKGNoLnZhbHVlKSkpO1xuICAgIH1cbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsLCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcImZpbml0ZVwiIHx8XG4gICAgICAgICAgICAgICAgY2gua2luZCA9PT0gXCJpbnRcIiB8fFxuICAgICAgICAgICAgICAgIGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShtaW4pICYmIE51bWJlci5pc0Zpbml0ZShtYXgpO1xuICAgIH1cbn1cblpvZE51bWJlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bWJlcixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RCaWdJbnQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCaWdJbnQoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YSAlIGNoZWNrLnZhbHVlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfZ2V0SW52YWxpZElucHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYmlnaW50LFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZEJpZ0ludC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCaWdJbnQsXG4gICAgICAgIGNvZXJjZTogKF9hID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RCb29sZWFuIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gQm9vbGVhbihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYm9vbGVhbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RCb29sZWFuLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJvb2xlYW4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJvb2xlYW4sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGF0ZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IG5ldyBEYXRlKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5kYXRlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKGlucHV0LmRhdGEuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPCBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShpbnB1dC5kYXRhLmdldFRpbWUoKSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkRhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluRGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4RGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhEYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5EYXRlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW4gIT0gbnVsbCA/IG5ldyBEYXRlKG1pbikgOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbWF4RGF0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4ICE9IG51bGwgPyBuZXcgRGF0ZShtYXgpIDogbnVsbDtcbiAgICB9XG59XG5ab2REYXRlLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERhdGUoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REYXRlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kU3ltYm9sIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3ltYm9sKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RTeW1ib2wuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3ltYm9sKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTeW1ib2wsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmRlZmluZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVuZGVmaW5lZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmRlZmluZWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuZGVmaW5lZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE51bGwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bGwsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kTnVsbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQW55IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHRvIHByZXZlbnQgaW5zdGFuY2VzIG9mIG90aGVyIGNsYXNzZXMgZnJvbSBleHRlbmRpbmcgWm9kQW55LiB0aGlzIGNhdXNlcyBpc3N1ZXMgd2l0aCBjYXRjaGFsbCBpbiBab2RPYmplY3QuXG4gICAgICAgIHRoaXMuX2FueSA9IHRydWU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQW55LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFueSh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQW55LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5rbm93biBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyByZXF1aXJlZFxuICAgICAgICB0aGlzLl91bmtub3duID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmtub3duLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVua25vd24oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVua25vd24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROZXZlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5ldmVyLFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxufVxuWm9kTmV2ZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmV2ZXIoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5ldmVyLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVm9pZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS52b2lkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFZvaWQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVm9pZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVm9pZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEFycmF5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4LCBzdGF0dXMgfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5leGFjdExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY3R4LmRhdGEubGVuZ3RoID4gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjdHguZGF0YS5sZW5ndGggPCBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRvb0JpZyA/IFpvZElzc3VlQ29kZS50b29fYmlnIDogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogKHRvb1NtYWxsID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogKHRvb0JpZyA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLmV4YWN0TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5taW5MZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCBkZWYubWluTGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5MZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5MZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5tYXhMZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlU3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogbWluTGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHsgdmFsdWU6IG1heExlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZXhhY3RMZW5ndGg6IHsgdmFsdWU6IGxlbiwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RBcnJheS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICBtaW5MZW5ndGg6IG51bGwsXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcbiAgICAgICAgZXhhY3RMZW5ndGg6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQXJyYXksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBkZWVwUGFydGlhbGlmeShzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjaGVtYS5zaGFwZSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBzY2hlbWEuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoZmllbGRTY2hlbWEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZEFycmF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICB0eXBlOiBkZWVwUGFydGlhbGlmeShzY2hlbWEuZWxlbWVudCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RUdXBsZSkge1xuICAgICAgICByZXR1cm4gWm9kVHVwbGUuY3JlYXRlKHNjaGVtYS5pdGVtcy5tYXAoKGl0ZW0pID0+IGRlZXBQYXJ0aWFsaWZ5KGl0ZW0pKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbmNsYXNzIFpvZE9iamVjdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9jYWNoZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgSW4gbW9zdCBjYXNlcywgdGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIC0gdW5rbm93biBwcm9wZXJ0aWVzIGFyZSBub3cgc2lsZW50bHkgc3RyaXBwZWQuXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIHBhc3MgdGhyb3VnaCB1bmtub3duIHByb3BlcnRpZXMsIHVzZSBgLnBhc3N0aHJvdWdoKClgIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5vbnN0cmljdCA9IHRoaXMucGFzc3Rocm91Z2g7XG4gICAgICAgIC8vIGV4dGVuZDxcbiAgICAgICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZSxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT4sXG4gICAgICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PlxuICAgICAgICAvLyA+KFxuICAgICAgICAvLyAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAgICAgLy8gICBleHRlbmRTaGFwZTxULCBBdWdtZW50YXRpb24+LFxuICAgICAgICAvLyAgIFVua25vd25LZXlzLFxuICAgICAgICAvLyAgIENhdGNoYWxsLFxuICAgICAgICAvLyAgIE5ld091dHB1dCxcbiAgICAgICAgLy8gICBOZXdJbnB1dFxuICAgICAgICAvLyA+IHtcbiAgICAgICAgLy8gICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC8vICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgIC8vICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgLy8gICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgIC8vICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgVXNlIGAuZXh0ZW5kYCBpbnN0ZWFkXG4gICAgICAgICAqICAqL1xuICAgICAgICB0aGlzLmF1Z21lbnQgPSB0aGlzLmV4dGVuZDtcbiAgICB9XG4gICAgX2dldENhY2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlZCAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgICAgIGNvbnN0IGtleXMgPSB1dGlsLm9iamVjdEtleXMoc2hhcGUpO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2NhY2hlZCA9IHsgc2hhcGUsIGtleXMgfSk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBrZXlzOiBzaGFwZUtleXMgfSA9IHRoaXMuX2dldENhY2hlZCgpO1xuICAgICAgICBjb25zdCBleHRyYUtleXMgPSBbXTtcbiAgICAgICAgaWYgKCEodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIgJiZcbiAgICAgICAgICAgIHRoaXMuX2RlZi51bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNoYXBlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXBlS2V5cykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsaWRhdG9yID0gc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlWYWxpZGF0b3IuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyKSB7XG4gICAgICAgICAgICBjb25zdCB1bmtub3duS2V5cyA9IHRoaXMuX2RlZi51bmtub3duS2V5cztcbiAgICAgICAgICAgIGlmICh1bmtub3duS2V5cyA9PT0gXCJwYXNzdGhyb3VnaFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGN0eC5kYXRhW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBleHRyYUtleXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIFpvZE9iamVjdCBlcnJvcjogaW52YWxpZCB1bmtub3duS2V5cyB2YWx1ZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJ1biBjYXRjaGFsbCB2YWxpZGF0aW9uXG4gICAgICAgICAgICBjb25zdCBjYXRjaGFsbCA9IHRoaXMuX2RlZi5jYXRjaGFsbDtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRjaGFsbC5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSAvLywgY3R4LmNoaWxkKGtleSksIHZhbHVlLCBnZXRQYXJzZWRUeXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gKF9jID0gKF9iID0gKF9hID0gdGhpcy5fZGVmKS5lcnJvck1hcCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGlzc3VlLCBjdHgpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChfZCA9IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgQXVnbWVudEZhY3RvcnkgPVxuICAgIC8vICAgPERlZiBleHRlbmRzIFpvZE9iamVjdERlZj4oZGVmOiBEZWYpID0+XG4gICAgLy8gICA8QXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGU+KFxuICAgIC8vICAgICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgIC8vICAgKTogWm9kT2JqZWN0PFxuICAgIC8vICAgICBleHRlbmRTaGFwZTxSZXR1cm5UeXBlPERlZltcInNoYXBlXCJdPiwgQXVnbWVudGF0aW9uPixcbiAgICAvLyAgICAgRGVmW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICAgIERlZltcImNhdGNoYWxsXCJdXG4gICAgLy8gICA+ID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICAgIC4uLmRlZixcbiAgICAvLyAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAvLyAgICAgICAgIC4uLmRlZi5zaGFwZSgpLFxuICAgIC8vICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgIC8vICAgICAgIH0pLFxuICAgIC8vICAgICB9KSBhcyBhbnk7XG4gICAgLy8gICB9O1xuICAgIGV4dGVuZChhdWdtZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAgICAgICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5tZXJnaW5nLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICAvLyBtZXJnZTxcbiAgICAvLyAgIEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0LFxuICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgSW5jb21pbmdbXCJzaGFwZVwiXSxcbiAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfVxuICAgIC8vID4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQsXG4gICAgLy8gICBOZXdJbnB1dFxuICAgIC8vID4ge1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIHNldEtleShrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWdtZW50KHsgW2tleV06IHNjaGVtYSB9KTtcbiAgICB9XG4gICAgLy8gbWVyZ2U8SW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3Q+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiAvL1pvZE9iamVjdDxUICYgSW5jb21pbmdbXCJfc2hhcGVcIl0sIFVua25vd25LZXlzLCBDYXRjaGFsbD4gPSAobWVyZ2luZykgPT4ge1xuICAgIC8vIFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyA+IHtcbiAgICAvLyAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAvLyAgIC8vICAgdGhpcy5fZGVmLnNoYXBlKCksXG4gICAgLy8gICAvLyAgIG1lcmdpbmcuX2RlZi5zaGFwZSgpXG4gICAgLy8gICAvLyApO1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIGNhdGNoYWxsKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNhdGNoYWxsOiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpY2sobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXMobWFzaykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFza1trZXldICYmIHRoaXMuc2hhcGVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbWl0KG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IGZpZWxkU2NoZW1hLm9wdGlvbmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZpZWxkID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGQgPSBuZXdGaWVsZC5fZGVmLmlubmVyVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAga2V5b2YoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVab2RFbnVtKHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSk7XG4gICAgfVxufVxuWm9kT2JqZWN0LmNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3Quc3RyaWN0Q3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3QubGF6eWNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3VsdHMocmVzdWx0cykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZpcnN0IGlzc3VlLWZyZWUgdmFsaWRhdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGlzc3VlcyBmcm9tIGRpcnR5IG9wdGlvblxuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLnJlc3VsdC5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiBpbnZhbGlkXG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IHJlc3VsdHMubWFwKChyZXN1bHQpID0+IG5ldyBab2RFcnJvcihyZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wdGlvbnMubWFwKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGF3YWl0IG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGN0eDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKS50aGVuKGhhbmRsZVJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXNzdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIgJiYgIWRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcnR5ID0geyByZXN1bHQsIGN0eDogY2hpbGRDdHggfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3Vlcy5wdXNoKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4uZGlydHkuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJ0eS5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IGlzc3Vlcy5tYXAoKGlzc3VlcykgPT4gbmV3IFpvZEVycm9yKGlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxufVxuWm9kVW5pb24uY3JlYXRlID0gKHR5cGVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuaW9uKHtcbiAgICAgICAgb3B0aW9uczogdHlwZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5pb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgZ2V0RGlzY3JpbWluYXRvciA9ICh0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMYXp5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2NoZW1hKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVmZmVjdHMpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5pbm5lclR5cGUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBbdHlwZS52YWx1ZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFbnVtKSB7XG4gICAgICAgIHJldHVybiB0eXBlLm9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROYXRpdmVFbnVtKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyh0eXBlLmVudW0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsKSB7XG4gICAgICAgIHJldHVybiBbbnVsbF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gW251bGwsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQnJhbmRlZCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQ2F0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufTtcbmNsYXNzIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yID0gdGhpcy5kaXNjcmltaW5hdG9yO1xuICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWUgPSBjdHguZGF0YVtkaXNjcmltaW5hdG9yXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5vcHRpb25zTWFwLmdldChkaXNjcmltaW5hdG9yVmFsdWUpO1xuICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBBcnJheS5mcm9tKHRoaXMub3B0aW9uc01hcC5rZXlzKCkpLFxuICAgICAgICAgICAgICAgIHBhdGg6IFtkaXNjcmltaW5hdG9yXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGRpc2NyaW1pbmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGlzY3JpbWluYXRvcjtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnNNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9uc01hcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIHNjaGVtYS4gSXRzIGJlaGF2aW91ciBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhhdCBvZiB0aGUgbm9ybWFsIHoudW5pb24oKSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBIb3dldmVyLCBpdCBvbmx5IGFsbG93cyBhIHVuaW9uIG9mIG9iamVjdHMsIGFsbCBvZiB3aGljaCBuZWVkIHRvIHNoYXJlIGEgZGlzY3JpbWluYXRvciBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBtdXN0XG4gICAgICogaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgZWFjaCBvYmplY3QgaW4gdGhlIHVuaW9uLlxuICAgICAqIEBwYXJhbSBkaXNjcmltaW5hdG9yIHRoZSBuYW1lIG9mIHRoZSBkaXNjcmltaW5hdG9yIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHR5cGVzIGFuIGFycmF5IG9mIG9iamVjdCBzY2hlbWFzXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoZGlzY3JpbWluYXRvciwgb3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICAgIC8vIEdldCBhbGwgdGhlIHZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWVzXG4gICAgICAgIGNvbnN0IG9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNjcmltaW5hdG9yVmFsdWVzID0gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNoYXBlW2Rpc2NyaW1pbmF0b3JdKTtcbiAgICAgICAgICAgIGlmICghZGlzY3JpbWluYXRvclZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsXG4gICAgICAgICAgICAub2JqZWN0S2V5cyhhKVxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4uY3R4LmRhdGFdXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuX2RlZi5pdGVtc1tpdGVtSW5kZXhdIHx8IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGl0ZW1JbmRleCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gISF4KTsgLy8gZmlsdGVyIG51bGxzXG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIGl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaXRlbXM7XG4gICAgfVxuICAgIHJlc3QocmVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJlc3QsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZFR1cGxlLmNyZWF0ZSA9IChzY2hlbWFzLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiBzY2hlbWFzIHRvIHoudHVwbGUoWyAuLi4gXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICBpdGVtczogc2NoZW1hcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RUdXBsZSxcbiAgICAgICAgcmVzdDogbnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFJlY29yZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGN0eC5kYXRhW2tleV0sIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgICAgIGlmIChzZWNvbmQgaW5zdGFuY2VvZiBab2RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICAgICAga2V5VHlwZTogZmlyc3QsXG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBzZWNvbmQsXG4gICAgICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlyZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICBrZXlUeXBlOiBab2RTdHJpbmcuY3JlYXRlKCksXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHNlY29uZCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFpvZE1hcCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5tYXApIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubWFwLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBjb25zdCBwYWlycyA9IFsuLi5jdHguZGF0YS5lbnRyaWVzKCldLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBbaW5kZXgsIFwia2V5XCJdKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwgW2luZGV4LCBcInZhbHVlXCJdKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RNYXAuY3JlYXRlID0gKGtleVR5cGUsIHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RNYXAoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIGtleVR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTWFwLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kU2V0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zZXQpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc2V0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoZGVmLm1pblNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplIDwgZGVmLm1pblNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pblNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWluU2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4U2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPiBkZWYubWF4U2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heFNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYubWF4U2l6ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmFsaXplU2V0KGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcGFyc2VkU2V0LmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcGFyc2VkU2V0IH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbLi4uY3R4LmRhdGEudmFsdWVzKCldLm1hcCgoaXRlbSwgaSkgPT4gdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZWxlbWVudHMpLnRoZW4oKGVsZW1lbnRzKSA9PiBmaW5hbGl6ZVNldChlbGVtZW50cykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsaXplU2V0KGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtaW4obWluU2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5TaXplOiB7IHZhbHVlOiBtaW5TaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhTaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heFNpemU6IHsgdmFsdWU6IG1heFNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2l6ZShzaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbihzaXplLCBtZXNzYWdlKS5tYXgoc2l6ZSwgbWVzc2FnZSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZFNldC5jcmVhdGUgPSAodmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAgbWluU2l6ZTogbnVsbCxcbiAgICAgICAgbWF4U2l6ZTogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTZXQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RGdW5jdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy5pbXBsZW1lbnQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZUFyZ3NJc3N1ZShhcmdzLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXJyb3JNYXAoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlUmV0dXJuc0lzc3VlKHJldHVybnMsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXR1cm5zLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBnZXRFcnJvck1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcCxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblR5cGVFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwIH07XG4gICAgICAgIGNvbnN0IGZuID0gY3R4LmRhdGE7XG4gICAgICAgIGlmICh0aGlzLl9kZWYucmV0dXJucyBpbnN0YW5jZW9mIFpvZFByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhhc3luYyBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKFtdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gYXdhaXQgbWUuX2RlZi5hcmdzXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKGFyZ3MsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VBcmdzSXNzdWUoYXJncywgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gYXdhaXQgbWUuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gbWUuX2RlZi5hcmdzLnNhZmVQYXJzZShhcmdzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkQXJncy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZUFyZ3NJc3N1ZShhcmdzLCBwYXJzZWRBcmdzLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmFwcGx5KGZuLCB0aGlzLCBwYXJzZWRBcmdzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBtZS5fZGVmLnJldHVybnMuc2FmZVBhcnNlKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJldHVybnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBwYXJzZWRSZXR1cm5zLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5hcmdzO1xuICAgIH1cbiAgICByZXR1cm5UeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnJldHVybnM7XG4gICAgfVxuICAgIGFyZ3MoLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBhcmdzOiBab2RUdXBsZS5jcmVhdGUoaXRlbXMpLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm5zKHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5UeXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdHJpY3RJbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYXJncywgcmV0dXJucywgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgYXJnczogKGFyZ3NcbiAgICAgICAgICAgICAgICA/IGFyZ3NcbiAgICAgICAgICAgICAgICA6IFpvZFR1cGxlLmNyZWF0ZShbXSkucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSksXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5zIHx8IFpvZFVua25vd24uY3JlYXRlKCksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEZ1bmN0aW9uLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RMYXp5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBsYXp5U2NoZW1hID0gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgICAgICByZXR1cm4gbGF6eVNjaGVtYS5fcGFyc2UoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgIH1cbn1cblpvZExhenkuY3JlYXRlID0gKGdldHRlciwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMYXp5KHtcbiAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZExpdGVyYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEgIT09IHRoaXMuX2RlZi52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmNsYXNzIFpvZEVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1pvZEVudW1fY2FjaGUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1pvZEVudW1fY2FjaGUsIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWm9kRW51bV9jYWNoZSwgbmV3IFNldCh0aGlzLl9kZWYudmFsdWVzKSwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWm9kRW51bV9jYWNoZSwgXCJmXCIpLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGV4dHJhY3QodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHZhbHVlcywge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXhjbHVkZSh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiAhdmFsdWVzLmluY2x1ZGVzKG9wdCkpLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9ab2RFbnVtX2NhY2hlID0gbmV3IFdlYWtNYXAoKTtcblpvZEVudW0uY3JlYXRlID0gY3JlYXRlWm9kRW51bTtcbmNsYXNzIFpvZE5hdGl2ZUVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1pvZE5hdGl2ZUVudW1fY2FjaGUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJlxuICAgICAgICAgICAgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWm9kTmF0aXZlRW51bV9jYWNoZSwgXCJmXCIpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ab2ROYXRpdmVFbnVtX2NhY2hlLCBuZXcgU2V0KHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpKSwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWm9kTmF0aXZlRW51bV9jYWNoZSwgXCJmXCIpLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGV4cGVjdGVkVmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlcztcbiAgICB9XG59XG5fWm9kTmF0aXZlRW51bV9jYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5ab2ROYXRpdmVFbnVtLmNyZWF0ZSA9ICh2YWx1ZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmF0aXZlRW51bSh7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hdGl2ZUVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RQcm9taXNlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnByb21pc2UgJiZcbiAgICAgICAgICAgIGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNpZmllZCA9IGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnByb21pc2VcbiAgICAgICAgICAgID8gY3R4LmRhdGFcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKGN0eC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIE9LKHByb21pc2lmaWVkLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5wYXJzZUFzeW5jKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblpvZFByb21pc2UuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RQcm9taXNlKHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFByb21pc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RFZmZlY3RzIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgaW5uZXJUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgc291cmNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHNcbiAgICAgICAgICAgID8gdGhpcy5fZGVmLnNjaGVtYS5zb3VyY2VUeXBlKClcbiAgICAgICAgICAgIDogdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IHRoaXMuX2RlZi5lZmZlY3QgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgY2hlY2tDdHggPSB7XG4gICAgICAgICAgICBhZGRJc3N1ZTogKGFyZykgPT4ge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwgYXJnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLmZhdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldCBwYXRoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHgucGF0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrQ3R4LmFkZElzc3VlID0gY2hlY2tDdHguYWRkSXNzdWUuYmluZChjaGVja0N0eCk7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9jZXNzZWQpLnRoZW4oYXN5bmMgKHByb2Nlc3NlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVmZmVjdC50cmFuc2Zvcm0oYmFzZS52YWx1ZSwgY2hlY2tDdHgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXN5bmNocm9ub3VzIHRyYW5zZm9ybSBlbmNvdW50ZXJlZCBkdXJpbmcgc3luY2hyb25vdXMgcGFyc2Ugb3BlcmF0aW9uLiBVc2UgLnBhcnNlQXN5bmMgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiByZXN1bHQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIC5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCkpLnRoZW4oKHJlc3VsdCkgPT4gKHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiByZXN1bHQgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoZWZmZWN0KTtcbiAgICB9XG59XG5ab2RFZmZlY3RzLmNyZWF0ZSA9IChzY2hlbWEsIGVmZmVjdCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIGVmZmVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3MgPSAocHJlcHJvY2Vzcywgc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInByZXByb2Nlc3NcIiwgdHJhbnNmb3JtOiBwcmVwcm9jZXNzIH0sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE9wdGlvbmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE9wdGlvbmFsLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9wdGlvbmFsKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9wdGlvbmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbGFibGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2ROdWxsYWJsZS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsYWJsZSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsYWJsZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZERlZmF1bHQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGxldCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9kZWYuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kRGVmYXVsdC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gcGFyYW1zLmRlZmF1bHRcbiAgICAgICAgICAgIDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RDYXRjaCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgLy8gbmV3Q3R4IGlzIHVzZWQgdG8gbm90IGNvbGxlY3QgaXNzdWVzIGZyb20gaW5uZXIgdHlwZXMgaW4gY3R4XG4gICAgICAgIGNvbnN0IG5ld0N0eCA9IHtcbiAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGE6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgcGF0aDogbmV3Q3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAuLi5uZXdDdHgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RFcnJvcihuZXdDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZENhdGNoLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICBjYXRjaFZhbHVlOiB0eXBlb2YgcGFyYW1zLmNhdGNoID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuY2F0Y2ggOiAoKSA9PiBwYXJhbXMuY2F0Y2gsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5jbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5jbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kUmVhZG9ubHkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBjb25zdCBmcmVlemUgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gT2JqZWN0LmZyZWV6ZShkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXNBc3luYyhyZXN1bHQpXG4gICAgICAgICAgICA/IHJlc3VsdC50aGVuKChkYXRhKSA9PiBmcmVlemUoZGF0YSkpXG4gICAgICAgICAgICA6IGZyZWV6ZShyZXN1bHQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZFJlYWRvbmx5LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFJlYWRvbmx5KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlYWRvbmx5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIHouY3VzdG9tICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gY2xlYW5QYXJhbXMocGFyYW1zLCBkYXRhKSB7XG4gICAgY29uc3QgcCA9IHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IHBhcmFtcyhkYXRhKVxuICAgICAgICA6IHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8geyBtZXNzYWdlOiBwYXJhbXMgfVxuICAgICAgICAgICAgOiBwYXJhbXM7XG4gICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICByZXR1cm4gcDI7XG59XG5mdW5jdGlvbiBjdXN0b20oY2hlY2ssIF9wYXJhbXMgPSB7fSwgXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogUGFzcyBgZmF0YWxgIGludG8gdGhlIHBhcmFtcyBvYmplY3QgaW5zdGVhZDpcbiAqXG4gKiBgYGB0c1xuICogei5zdHJpbmcoKS5jdXN0b20oKHZhbCkgPT4gdmFsLmxlbmd0aCA+IDUsIHsgZmF0YWw6IGZhbHNlIH0pXG4gKiBgYGBcbiAqXG4gKi9cbmZhdGFsKSB7XG4gICAgaWYgKGNoZWNrKVxuICAgICAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpLnN1cGVyUmVmaW5lKChkYXRhLCBjdHgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjb25zdCByID0gY2hlY2soZGF0YSk7XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSAoX2IgPSAoX2EgPSBwYXJhbXMuZmF0YWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhdGFsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSAoX2IgPSAoX2EgPSBwYXJhbXMuZmF0YWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhdGFsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKTtcbn1cbmNvbnN0IGxhdGUgPSB7XG4gICAgb2JqZWN0OiBab2RPYmplY3QubGF6eWNyZWF0ZSxcbn07XG52YXIgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kO1xuKGZ1bmN0aW9uIChab2RGaXJzdFBhcnR5VHlwZUtpbmQpIHtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTdHJpbmdcIl0gPSBcIlpvZFN0cmluZ1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bWJlclwiXSA9IFwiWm9kTnVtYmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmFOXCJdID0gXCJab2ROYU5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCaWdJbnRcIl0gPSBcIlpvZEJpZ0ludFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJvb2xlYW5cIl0gPSBcIlpvZEJvb2xlYW5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REYXRlXCJdID0gXCJab2REYXRlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3ltYm9sXCJdID0gXCJab2RTeW1ib2xcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmRlZmluZWRcIl0gPSBcIlpvZFVuZGVmaW5lZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxcIl0gPSBcIlpvZE51bGxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBbnlcIl0gPSBcIlpvZEFueVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVua25vd25cIl0gPSBcIlpvZFVua25vd25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROZXZlclwiXSA9IFwiWm9kTmV2ZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RWb2lkXCJdID0gXCJab2RWb2lkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQXJyYXlcIl0gPSBcIlpvZEFycmF5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT2JqZWN0XCJdID0gXCJab2RPYmplY3RcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmlvblwiXSA9IFwiWm9kVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REaXNjcmltaW5hdGVkVW5pb25cIl0gPSBcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEludGVyc2VjdGlvblwiXSA9IFwiWm9kSW50ZXJzZWN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVHVwbGVcIl0gPSBcIlpvZFR1cGxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVjb3JkXCJdID0gXCJab2RSZWNvcmRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RNYXBcIl0gPSBcIlpvZE1hcFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFNldFwiXSA9IFwiWm9kU2V0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRnVuY3Rpb25cIl0gPSBcIlpvZEZ1bmN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGF6eVwiXSA9IFwiWm9kTGF6eVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExpdGVyYWxcIl0gPSBcIlpvZExpdGVyYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFbnVtXCJdID0gXCJab2RFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRWZmZWN0c1wiXSA9IFwiWm9kRWZmZWN0c1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hdGl2ZUVudW1cIl0gPSBcIlpvZE5hdGl2ZUVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPcHRpb25hbFwiXSA9IFwiWm9kT3B0aW9uYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsYWJsZVwiXSA9IFwiWm9kTnVsbGFibGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REZWZhdWx0XCJdID0gXCJab2REZWZhdWx0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQ2F0Y2hcIl0gPSBcIlpvZENhdGNoXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUHJvbWlzZVwiXSA9IFwiWm9kUHJvbWlzZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJyYW5kZWRcIl0gPSBcIlpvZEJyYW5kZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQaXBlbGluZVwiXSA9IFwiWm9kUGlwZWxpbmVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWFkb25seVwiXSA9IFwiWm9kUmVhZG9ubHlcIjtcbn0pKFpvZEZpcnN0UGFydHlUeXBlS2luZCB8fCAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kID0ge30pKTtcbmNvbnN0IGluc3RhbmNlT2ZUeXBlID0gKFxuLy8gY29uc3QgaW5zdGFuY2VPZlR5cGUgPSA8VCBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG5jbHMsIHBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBgSW5wdXQgbm90IGluc3RhbmNlIG9mICR7Y2xzLm5hbWV9YCxcbn0pID0+IGN1c3RvbSgoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIGNscywgcGFyYW1zKTtcbmNvbnN0IHN0cmluZ1R5cGUgPSBab2RTdHJpbmcuY3JlYXRlO1xuY29uc3QgbnVtYmVyVHlwZSA9IFpvZE51bWJlci5jcmVhdGU7XG5jb25zdCBuYW5UeXBlID0gWm9kTmFOLmNyZWF0ZTtcbmNvbnN0IGJpZ0ludFR5cGUgPSBab2RCaWdJbnQuY3JlYXRlO1xuY29uc3QgYm9vbGVhblR5cGUgPSBab2RCb29sZWFuLmNyZWF0ZTtcbmNvbnN0IGRhdGVUeXBlID0gWm9kRGF0ZS5jcmVhdGU7XG5jb25zdCBzeW1ib2xUeXBlID0gWm9kU3ltYm9sLmNyZWF0ZTtcbmNvbnN0IHVuZGVmaW5lZFR5cGUgPSBab2RVbmRlZmluZWQuY3JlYXRlO1xuY29uc3QgbnVsbFR5cGUgPSBab2ROdWxsLmNyZWF0ZTtcbmNvbnN0IGFueVR5cGUgPSBab2RBbnkuY3JlYXRlO1xuY29uc3QgdW5rbm93blR5cGUgPSBab2RVbmtub3duLmNyZWF0ZTtcbmNvbnN0IG5ldmVyVHlwZSA9IFpvZE5ldmVyLmNyZWF0ZTtcbmNvbnN0IHZvaWRUeXBlID0gWm9kVm9pZC5jcmVhdGU7XG5jb25zdCBhcnJheVR5cGUgPSBab2RBcnJheS5jcmVhdGU7XG5jb25zdCBvYmplY3RUeXBlID0gWm9kT2JqZWN0LmNyZWF0ZTtcbmNvbnN0IHN0cmljdE9iamVjdFR5cGUgPSBab2RPYmplY3Quc3RyaWN0Q3JlYXRlO1xuY29uc3QgdW5pb25UeXBlID0gWm9kVW5pb24uY3JlYXRlO1xuY29uc3QgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSA9IFpvZERpc2NyaW1pbmF0ZWRVbmlvbi5jcmVhdGU7XG5jb25zdCBpbnRlcnNlY3Rpb25UeXBlID0gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZTtcbmNvbnN0IHR1cGxlVHlwZSA9IFpvZFR1cGxlLmNyZWF0ZTtcbmNvbnN0IHJlY29yZFR5cGUgPSBab2RSZWNvcmQuY3JlYXRlO1xuY29uc3QgbWFwVHlwZSA9IFpvZE1hcC5jcmVhdGU7XG5jb25zdCBzZXRUeXBlID0gWm9kU2V0LmNyZWF0ZTtcbmNvbnN0IGZ1bmN0aW9uVHlwZSA9IFpvZEZ1bmN0aW9uLmNyZWF0ZTtcbmNvbnN0IGxhenlUeXBlID0gWm9kTGF6eS5jcmVhdGU7XG5jb25zdCBsaXRlcmFsVHlwZSA9IFpvZExpdGVyYWwuY3JlYXRlO1xuY29uc3QgZW51bVR5cGUgPSBab2RFbnVtLmNyZWF0ZTtcbmNvbnN0IG5hdGl2ZUVudW1UeXBlID0gWm9kTmF0aXZlRW51bS5jcmVhdGU7XG5jb25zdCBwcm9taXNlVHlwZSA9IFpvZFByb21pc2UuY3JlYXRlO1xuY29uc3QgZWZmZWN0c1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZTtcbmNvbnN0IG9wdGlvbmFsVHlwZSA9IFpvZE9wdGlvbmFsLmNyZWF0ZTtcbmNvbnN0IG51bGxhYmxlVHlwZSA9IFpvZE51bGxhYmxlLmNyZWF0ZTtcbmNvbnN0IHByZXByb2Nlc3NUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcztcbmNvbnN0IHBpcGVsaW5lVHlwZSA9IFpvZFBpcGVsaW5lLmNyZWF0ZTtcbmNvbnN0IG9zdHJpbmcgPSAoKSA9PiBzdHJpbmdUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9udW1iZXIgPSAoKSA9PiBudW1iZXJUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9ib29sZWFuID0gKCkgPT4gYm9vbGVhblR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3QgY29lcmNlID0ge1xuICAgIHN0cmluZzogKChhcmcpID0+IFpvZFN0cmluZy5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgbnVtYmVyOiAoKGFyZykgPT4gWm9kTnVtYmVyLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBib29sZWFuOiAoKGFyZykgPT4gWm9kQm9vbGVhbi5jcmVhdGUoe1xuICAgICAgICAuLi5hcmcsXG4gICAgICAgIGNvZXJjZTogdHJ1ZSxcbiAgICB9KSksXG4gICAgYmlnaW50OiAoKGFyZykgPT4gWm9kQmlnSW50LmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBkYXRlOiAoKGFyZykgPT4gWm9kRGF0ZS5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG59O1xuY29uc3QgTkVWRVIgPSBJTlZBTElEO1xuXG52YXIgeiA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgZGVmYXVsdEVycm9yTWFwOiBlcnJvck1hcCxcbiAgICBzZXRFcnJvck1hcDogc2V0RXJyb3JNYXAsXG4gICAgZ2V0RXJyb3JNYXA6IGdldEVycm9yTWFwLFxuICAgIG1ha2VJc3N1ZTogbWFrZUlzc3VlLFxuICAgIEVNUFRZX1BBVEg6IEVNUFRZX1BBVEgsXG4gICAgYWRkSXNzdWVUb0NvbnRleHQ6IGFkZElzc3VlVG9Db250ZXh0LFxuICAgIFBhcnNlU3RhdHVzOiBQYXJzZVN0YXR1cyxcbiAgICBJTlZBTElEOiBJTlZBTElELFxuICAgIERJUlRZOiBESVJUWSxcbiAgICBPSzogT0ssXG4gICAgaXNBYm9ydGVkOiBpc0Fib3J0ZWQsXG4gICAgaXNEaXJ0eTogaXNEaXJ0eSxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgIGlzQXN5bmM6IGlzQXN5bmMsXG4gICAgZ2V0IHV0aWwgKCkgeyByZXR1cm4gdXRpbDsgfSxcbiAgICBnZXQgb2JqZWN0VXRpbCAoKSB7IHJldHVybiBvYmplY3RVdGlsOyB9LFxuICAgIFpvZFBhcnNlZFR5cGU6IFpvZFBhcnNlZFR5cGUsXG4gICAgZ2V0UGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZSxcbiAgICBab2RUeXBlOiBab2RUeXBlLFxuICAgIGRhdGV0aW1lUmVnZXg6IGRhdGV0aW1lUmVnZXgsXG4gICAgWm9kU3RyaW5nOiBab2RTdHJpbmcsXG4gICAgWm9kTnVtYmVyOiBab2ROdW1iZXIsXG4gICAgWm9kQmlnSW50OiBab2RCaWdJbnQsXG4gICAgWm9kQm9vbGVhbjogWm9kQm9vbGVhbixcbiAgICBab2REYXRlOiBab2REYXRlLFxuICAgIFpvZFN5bWJvbDogWm9kU3ltYm9sLFxuICAgIFpvZFVuZGVmaW5lZDogWm9kVW5kZWZpbmVkLFxuICAgIFpvZE51bGw6IFpvZE51bGwsXG4gICAgWm9kQW55OiBab2RBbnksXG4gICAgWm9kVW5rbm93bjogWm9kVW5rbm93bixcbiAgICBab2ROZXZlcjogWm9kTmV2ZXIsXG4gICAgWm9kVm9pZDogWm9kVm9pZCxcbiAgICBab2RBcnJheTogWm9kQXJyYXksXG4gICAgWm9kT2JqZWN0OiBab2RPYmplY3QsXG4gICAgWm9kVW5pb246IFpvZFVuaW9uLFxuICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbjogWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgIFpvZEludGVyc2VjdGlvbjogWm9kSW50ZXJzZWN0aW9uLFxuICAgIFpvZFR1cGxlOiBab2RUdXBsZSxcbiAgICBab2RSZWNvcmQ6IFpvZFJlY29yZCxcbiAgICBab2RNYXA6IFpvZE1hcCxcbiAgICBab2RTZXQ6IFpvZFNldCxcbiAgICBab2RGdW5jdGlvbjogWm9kRnVuY3Rpb24sXG4gICAgWm9kTGF6eTogWm9kTGF6eSxcbiAgICBab2RMaXRlcmFsOiBab2RMaXRlcmFsLFxuICAgIFpvZEVudW06IFpvZEVudW0sXG4gICAgWm9kTmF0aXZlRW51bTogWm9kTmF0aXZlRW51bSxcbiAgICBab2RQcm9taXNlOiBab2RQcm9taXNlLFxuICAgIFpvZEVmZmVjdHM6IFpvZEVmZmVjdHMsXG4gICAgWm9kVHJhbnNmb3JtZXI6IFpvZEVmZmVjdHMsXG4gICAgWm9kT3B0aW9uYWw6IFpvZE9wdGlvbmFsLFxuICAgIFpvZE51bGxhYmxlOiBab2ROdWxsYWJsZSxcbiAgICBab2REZWZhdWx0OiBab2REZWZhdWx0LFxuICAgIFpvZENhdGNoOiBab2RDYXRjaCxcbiAgICBab2ROYU46IFpvZE5hTixcbiAgICBCUkFORDogQlJBTkQsXG4gICAgWm9kQnJhbmRlZDogWm9kQnJhbmRlZCxcbiAgICBab2RQaXBlbGluZTogWm9kUGlwZWxpbmUsXG4gICAgWm9kUmVhZG9ubHk6IFpvZFJlYWRvbmx5LFxuICAgIGN1c3RvbTogY3VzdG9tLFxuICAgIFNjaGVtYTogWm9kVHlwZSxcbiAgICBab2RTY2hlbWE6IFpvZFR5cGUsXG4gICAgbGF0ZTogbGF0ZSxcbiAgICBnZXQgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kICgpIHsgcmV0dXJuIFpvZEZpcnN0UGFydHlUeXBlS2luZDsgfSxcbiAgICBjb2VyY2U6IGNvZXJjZSxcbiAgICBhbnk6IGFueVR5cGUsXG4gICAgYXJyYXk6IGFycmF5VHlwZSxcbiAgICBiaWdpbnQ6IGJpZ0ludFR5cGUsXG4gICAgYm9vbGVhbjogYm9vbGVhblR5cGUsXG4gICAgZGF0ZTogZGF0ZVR5cGUsXG4gICAgZGlzY3JpbWluYXRlZFVuaW9uOiBkaXNjcmltaW5hdGVkVW5pb25UeXBlLFxuICAgIGVmZmVjdDogZWZmZWN0c1R5cGUsXG4gICAgJ2VudW0nOiBlbnVtVHlwZSxcbiAgICAnZnVuY3Rpb24nOiBmdW5jdGlvblR5cGUsXG4gICAgJ2luc3RhbmNlb2YnOiBpbnN0YW5jZU9mVHlwZSxcbiAgICBpbnRlcnNlY3Rpb246IGludGVyc2VjdGlvblR5cGUsXG4gICAgbGF6eTogbGF6eVR5cGUsXG4gICAgbGl0ZXJhbDogbGl0ZXJhbFR5cGUsXG4gICAgbWFwOiBtYXBUeXBlLFxuICAgIG5hbjogbmFuVHlwZSxcbiAgICBuYXRpdmVFbnVtOiBuYXRpdmVFbnVtVHlwZSxcbiAgICBuZXZlcjogbmV2ZXJUeXBlLFxuICAgICdudWxsJzogbnVsbFR5cGUsXG4gICAgbnVsbGFibGU6IG51bGxhYmxlVHlwZSxcbiAgICBudW1iZXI6IG51bWJlclR5cGUsXG4gICAgb2JqZWN0OiBvYmplY3RUeXBlLFxuICAgIG9ib29sZWFuOiBvYm9vbGVhbixcbiAgICBvbnVtYmVyOiBvbnVtYmVyLFxuICAgIG9wdGlvbmFsOiBvcHRpb25hbFR5cGUsXG4gICAgb3N0cmluZzogb3N0cmluZyxcbiAgICBwaXBlbGluZTogcGlwZWxpbmVUeXBlLFxuICAgIHByZXByb2Nlc3M6IHByZXByb2Nlc3NUeXBlLFxuICAgIHByb21pc2U6IHByb21pc2VUeXBlLFxuICAgIHJlY29yZDogcmVjb3JkVHlwZSxcbiAgICBzZXQ6IHNldFR5cGUsXG4gICAgc3RyaWN0T2JqZWN0OiBzdHJpY3RPYmplY3RUeXBlLFxuICAgIHN0cmluZzogc3RyaW5nVHlwZSxcbiAgICBzeW1ib2w6IHN5bWJvbFR5cGUsXG4gICAgdHJhbnNmb3JtZXI6IGVmZmVjdHNUeXBlLFxuICAgIHR1cGxlOiB0dXBsZVR5cGUsXG4gICAgJ3VuZGVmaW5lZCc6IHVuZGVmaW5lZFR5cGUsXG4gICAgdW5pb246IHVuaW9uVHlwZSxcbiAgICB1bmtub3duOiB1bmtub3duVHlwZSxcbiAgICAndm9pZCc6IHZvaWRUeXBlLFxuICAgIE5FVkVSOiBORVZFUixcbiAgICBab2RJc3N1ZUNvZGU6IFpvZElzc3VlQ29kZSxcbiAgICBxdW90ZWxlc3NKc29uOiBxdW90ZWxlc3NKc29uLFxuICAgIFpvZEVycm9yOiBab2RFcnJvclxufSk7XG5cbmV4cG9ydCB7IEJSQU5ELCBESVJUWSwgRU1QVFlfUEFUSCwgSU5WQUxJRCwgTkVWRVIsIE9LLCBQYXJzZVN0YXR1cywgWm9kVHlwZSBhcyBTY2hlbWEsIFpvZEFueSwgWm9kQXJyYXksIFpvZEJpZ0ludCwgWm9kQm9vbGVhbiwgWm9kQnJhbmRlZCwgWm9kQ2F0Y2gsIFpvZERhdGUsIFpvZERlZmF1bHQsIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiwgWm9kRWZmZWN0cywgWm9kRW51bSwgWm9kRXJyb3IsIFpvZEZpcnN0UGFydHlUeXBlS2luZCwgWm9kRnVuY3Rpb24sIFpvZEludGVyc2VjdGlvbiwgWm9kSXNzdWVDb2RlLCBab2RMYXp5LCBab2RMaXRlcmFsLCBab2RNYXAsIFpvZE5hTiwgWm9kTmF0aXZlRW51bSwgWm9kTmV2ZXIsIFpvZE51bGwsIFpvZE51bGxhYmxlLCBab2ROdW1iZXIsIFpvZE9iamVjdCwgWm9kT3B0aW9uYWwsIFpvZFBhcnNlZFR5cGUsIFpvZFBpcGVsaW5lLCBab2RQcm9taXNlLCBab2RSZWFkb25seSwgWm9kUmVjb3JkLCBab2RUeXBlIGFzIFpvZFNjaGVtYSwgWm9kU2V0LCBab2RTdHJpbmcsIFpvZFN5bWJvbCwgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciwgWm9kVHVwbGUsIFpvZFR5cGUsIFpvZFVuZGVmaW5lZCwgWm9kVW5pb24sIFpvZFVua25vd24sIFpvZFZvaWQsIGFkZElzc3VlVG9Db250ZXh0LCBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgY29lcmNlLCBjdXN0b20sIGRhdGVUeXBlIGFzIGRhdGUsIGRhdGV0aW1lUmVnZXgsIHogYXMgZGVmYXVsdCwgZXJyb3JNYXAgYXMgZGVmYXVsdEVycm9yTWFwLCBkaXNjcmltaW5hdGVkVW5pb25UeXBlIGFzIGRpc2NyaW1pbmF0ZWRVbmlvbiwgZWZmZWN0c1R5cGUgYXMgZWZmZWN0LCBlbnVtVHlwZSBhcyBlbnVtLCBmdW5jdGlvblR5cGUgYXMgZnVuY3Rpb24sIGdldEVycm9yTWFwLCBnZXRQYXJzZWRUeXBlLCBpbnN0YW5jZU9mVHlwZSBhcyBpbnN0YW5jZW9mLCBpbnRlcnNlY3Rpb25UeXBlIGFzIGludGVyc2VjdGlvbiwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBsYXRlLCBsYXp5VHlwZSBhcyBsYXp5LCBsaXRlcmFsVHlwZSBhcyBsaXRlcmFsLCBtYWtlSXNzdWUsIG1hcFR5cGUgYXMgbWFwLCBuYW5UeXBlIGFzIG5hbiwgbmF0aXZlRW51bVR5cGUgYXMgbmF0aXZlRW51bSwgbmV2ZXJUeXBlIGFzIG5ldmVyLCBudWxsVHlwZSBhcyBudWxsLCBudWxsYWJsZVR5cGUgYXMgbnVsbGFibGUsIG51bWJlclR5cGUgYXMgbnVtYmVyLCBvYmplY3RUeXBlIGFzIG9iamVjdCwgb2JqZWN0VXRpbCwgb2Jvb2xlYW4sIG9udW1iZXIsIG9wdGlvbmFsVHlwZSBhcyBvcHRpb25hbCwgb3N0cmluZywgcGlwZWxpbmVUeXBlIGFzIHBpcGVsaW5lLCBwcmVwcm9jZXNzVHlwZSBhcyBwcmVwcm9jZXNzLCBwcm9taXNlVHlwZSBhcyBwcm9taXNlLCBxdW90ZWxlc3NKc29uLCByZWNvcmRUeXBlIGFzIHJlY29yZCwgc2V0VHlwZSBhcyBzZXQsIHNldEVycm9yTWFwLCBzdHJpY3RPYmplY3RUeXBlIGFzIHN0cmljdE9iamVjdCwgc3RyaW5nVHlwZSBhcyBzdHJpbmcsIHN5bWJvbFR5cGUgYXMgc3ltYm9sLCBlZmZlY3RzVHlwZSBhcyB0cmFuc2Zvcm1lciwgdHVwbGVUeXBlIGFzIHR1cGxlLCB1bmRlZmluZWRUeXBlIGFzIHVuZGVmaW5lZCwgdW5pb25UeXBlIGFzIHVuaW9uLCB1bmtub3duVHlwZSBhcyB1bmtub3duLCB1dGlsLCB2b2lkVHlwZSBhcyB2b2lkLCB6IH07XG4iLCJleHBvcnQgdHlwZSBDbHVzdGVyTWV0YSA9IHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgZG9tYWluPzogc3RyaW5nO1xyXG4gIHRvcGljPzogc3RyaW5nO1xyXG4gIHN1bW1hcnk/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBTVE9QX1dPUkRTID0gbmV3IFNldChbXHJcbiAgXCJ0aGVcIixcclxuICBcImFuZFwiLFxyXG4gIFwiZm9yXCIsXHJcbiAgXCJ3aXRoXCIsXHJcbiAgXCJmcm9tXCIsXHJcbiAgXCJ0aGlzXCIsXHJcbiAgXCJ0aGF0XCIsXHJcbiAgXCJpbnRvXCIsXHJcbiAgXCJ5b3VyXCIsXHJcbiAgXCJhYm91dFwiLFxyXG4gIFwiZG9jc1wiLFxyXG4gIFwiZ3VpZGVcIixcclxuICBcIm92ZXJ2aWV3XCIsXHJcbiAgXCJ1c2luZ1wiLFxyXG4gIFwiaG93XCIsXHJcbiAgXCJ3aGF0XCIsXHJcbiAgXCJ3aGVuXCIsXHJcbiAgXCJ3aGVyZVwiLFxyXG4gIFwicGFnZVwiLFxyXG4gIFwic2l0ZVwiLFxyXG4gIFwib2ZmaWNpYWxcIixcclxuICBcImJlc3RcIixcclxuICBcIm5ld1wiLFxyXG4gIFwicmV2aWV3XCIsXHJcbiAgXCJzZWFyY2hcIixcclxuICBcInZpZXdcIixcclxuICBcImRvY3NcIixcclxuICBcImxlYXJuXCIsXHJcbiAgXCJndWlkZVwiLFxyXG4gIFwicHJvamVjdFwiLFxyXG4gIFwid29ya1wiLFxyXG4gIFwidGVhbVwiLFxyXG4gIFwicmVzZWFyY2hcIixcclxuICBcInRvcGljXCIsXHJcbiAgXCJpZGVhc1wiLFxyXG4gIFwibm90ZXNcIlxyXG5dKTtcclxuXHJcbmZ1bmN0aW9uIHRvVGl0bGVDYXNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICByZXR1cm4gdmFsdWVcclxuICAgIC5zcGxpdCgvXFxzKy8pXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAubWFwKChwYXJ0KSA9PiBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9rZW5pemUodmFsdWU6IHN0cmluZykge1xyXG4gIHJldHVybiAodmFsdWUudG9Mb3dlckNhc2UoKS5tYXRjaCgvW2EtejAtOV0rL2cpID8/IFtdKVxyXG4gICAgLm1hcCgocGFydCkgPT4gcGFydC5yZXBsYWNlKC9eKHd3d3xkb2NzfGFwcHxkZXZ8aW98Y29tfG9yZ3xuZXQpJC8sIFwiXCIpKVxyXG4gICAgLmZpbHRlcigocGFydCkgPT4gcGFydC5sZW5ndGggPj0gMyAmJiAhU1RPUF9XT1JEUy5oYXMocGFydCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkhvc3QoZG9tYWluPzogc3RyaW5nKSB7XHJcbiAgaWYgKCFkb21haW4pIHJldHVybiBcIlwiO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob3N0ID0gbmV3IFVSTChgaHR0cHM6Ly8ke2RvbWFpbn1gKS5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgXCJcIikucmVwbGFjZSgvXFwuW2Etel17Mix9JC9pLCBcIlwiKTtcclxuICAgIHJldHVybiBob3N0LnJlcGxhY2UoL1stX10vZywgXCIgXCIpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGRvbWFpbi5yZXBsYWNlKC9ed3d3XFwuLywgXCJcIikucmVwbGFjZSgvXFwuW2Etel17Mix9JC9pLCBcIlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwaWNrQmVzdENsdXN0ZXJNYXRjaChcclxuICBleGlzdGluZ0NsdXN0ZXJzOiBBcnJheTx7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZzsgdG9rZW5zPzogc3RyaW5nW107IG1lbWJlcnM/OiBDbHVzdGVyTWV0YVtdOyBzdGF0dXM/OiBzdHJpbmc7IGRpc21pc3NlZFVudGlsPzogc3RyaW5nIH0+LFxyXG4gIG1lbWJlcnM6IENsdXN0ZXJNZXRhW11cclxuKSB7XHJcbiAgY29uc3QgbWVtYmVyVGV4dCA9IG1lbWJlcnMubWFwKChtZW1iZXIpID0+IGAke21lbWJlci50aXRsZSA/PyBcIlwifSAke21lbWJlci51cmwgPz8gXCJcIn0gJHttZW1iZXIuZG9tYWluID8/IFwiXCJ9ICR7bWVtYmVyLnRvcGljID8/IFwiXCJ9YCkuam9pbihcIiBcIik7XHJcbiAgY29uc3QgbWVtYmVyVG9rZW5zID0gbmV3IFNldCh0b2tlbml6ZShtZW1iZXJUZXh0KSk7XHJcblxyXG4gIGNvbnN0IHNjb3JlZCA9IGV4aXN0aW5nQ2x1c3RlcnNcclxuICAgIC5tYXAoKGNsdXN0ZXIpID0+IHtcclxuICAgICAgY29uc3QgY2x1c3RlclRleHQgPSBbY2x1c3Rlci5uYW1lLCBjbHVzdGVyLnN1bW1hcnkgPz8gXCJcIiwgLi4uKGNsdXN0ZXIudG9rZW5zID8/IFtdKV0uam9pbihcIiBcIik7XHJcbiAgICAgIGNvbnN0IGNsdXN0ZXJUb2tlbnMgPSBuZXcgU2V0KHRva2VuaXplKGNsdXN0ZXJUZXh0KSk7XHJcbiAgICAgIGNvbnN0IHNoYXJlZCA9IFsuLi5tZW1iZXJUb2tlbnNdLmZpbHRlcigodG9rZW4pID0+IGNsdXN0ZXJUb2tlbnMuaGFzKHRva2VuKSk7XHJcbiAgICAgIGNvbnN0IG5hbWVTaGFyZWQgPSBbLi4ubmV3IFNldCh0b2tlbml6ZShjbHVzdGVyLm5hbWUpKV0uZmlsdGVyKCh0b2tlbikgPT4gbWVtYmVyVG9rZW5zLmhhcyh0b2tlbikpO1xyXG4gICAgICBjb25zdCBzdW1tYXJ5U2hhcmVkID0gWy4uLm5ldyBTZXQodG9rZW5pemUoY2x1c3Rlci5zdW1tYXJ5ID8/IFwiXCIpKV0uZmlsdGVyKCh0b2tlbikgPT4gbWVtYmVyVG9rZW5zLmhhcyh0b2tlbikpO1xyXG4gICAgICBjb25zdCBzY29yZSA9IHNoYXJlZC5sZW5ndGggKiA2ICsgbmFtZVNoYXJlZC5sZW5ndGggKiA0ICsgc3VtbWFyeVNoYXJlZC5sZW5ndGggKiAzO1xyXG4gICAgICByZXR1cm4geyBjbHVzdGVyLCBzY29yZSB9O1xyXG4gICAgfSlcclxuICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5zY29yZSA+IDApXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpWzBdO1xyXG5cclxuICByZXR1cm4gc2NvcmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU3VyZmFjZUNsdXN0ZXJTdWdnZXN0aW9uKGNsdXN0ZXI6IHsgY29uZmlkZW5jZT86IG51bWJlcjsgdGFiSWRzPzogbnVtYmVyW107IHRva2Vucz86IHN0cmluZ1tdOyBzdGF0dXM/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmcgfSkge1xyXG4gIGlmICghY2x1c3RlciB8fCBjbHVzdGVyLnN0YXR1cyA9PT0gXCJjb25maXJtZWRcIiB8fCBjbHVzdGVyLnN0YXR1cyA9PT0gXCJkaXNtaXNzZWRcIikgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IGNvbmZpZGVuY2UgPSB0eXBlb2YgY2x1c3Rlci5jb25maWRlbmNlID09PSBcIm51bWJlclwiID8gY2x1c3Rlci5jb25maWRlbmNlIDogMDtcclxuICBjb25zdCB0YWJzID0gQXJyYXkuaXNBcnJheShjbHVzdGVyLnRhYklkcykgPyBjbHVzdGVyLnRhYklkcy5sZW5ndGggOiAwO1xyXG4gIGNvbnN0IHRva2VuQ291bnQgPSBBcnJheS5pc0FycmF5KGNsdXN0ZXIudG9rZW5zKSA/IGNsdXN0ZXIudG9rZW5zLmxlbmd0aCA6IDA7XHJcbiAgY29uc3QgbmFtZVRva2VucyA9IHR5cGVvZiBjbHVzdGVyLm5hbWUgPT09IFwic3RyaW5nXCIgPyB0b2tlbml6ZShjbHVzdGVyLm5hbWUpLmxlbmd0aCA6IDA7XHJcbiAgaWYgKHRhYnMgPCAyKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKGNvbmZpZGVuY2UgPCAwLjU4KSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKHRva2VuQ291bnQgPCAyICYmIG5hbWVUb2tlbnMgPCAyKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZlckNsdXN0ZXJOYW1lKGl0ZW1zOiBDbHVzdGVyTWV0YVtdLCBmYWxsYmFjayA9IFwiUmVzZWFyY2hcIikge1xyXG4gIGNvbnN0IHRvcGljTGFiZWwgPSBpdGVtc1xyXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50b3BpYylcclxuICAgIC5maWx0ZXIoKHRvcGljKTogdG9waWMgaXMgc3RyaW5nID0+IHR5cGVvZiB0b3BpYyA9PT0gXCJzdHJpbmdcIiAmJiB0b3BpYy50cmltKCkubGVuZ3RoID4gMClcclxuICAgIC5maW5kKCh0b3BpYykgPT4gdG9rZW5pemUodG9waWMpLmxlbmd0aCA+PSAyKTtcclxuXHJcbiAgaWYgKHRvcGljTGFiZWwpIHJldHVybiB0b1RpdGxlQ2FzZSh0b3BpY0xhYmVsLnRyaW0oKSk7XHJcblxyXG4gIGNvbnN0IHNjb3JlcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcblxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgaWYgKGl0ZW0udG9waWMpIHtcclxuICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbml6ZShpdGVtLnRvcGljKSkge1xyXG4gICAgICAgIHNjb3Jlcy5zZXQodG9rZW4sIChzY29yZXMuZ2V0KHRva2VuKSA/PyAwKSArIDQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gaXRlbS50aXRsZSA/PyBcIlwiO1xyXG4gICAgY29uc3QgdGl0bGVUb2tlbnMgPSB0b2tlbml6ZSh0aXRsZVRleHQpXHJcbiAgICAgIC5maWx0ZXIoKHRva2VuKSA9PiAhL14oYXBpfGd1aWRlfGRvY3N8b3ZlcnZpZXd8bW9kZWx8YW5hbHlzaXN8cmVzZWFyY2h8cHJvamVjdCkkL2kudGVzdCh0b2tlbikpO1xyXG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiB0aXRsZVRva2Vucykgc2NvcmVzLnNldCh0b2tlbiwgKHNjb3Jlcy5nZXQodG9rZW4pID8/IDApICsgMyk7XHJcblxyXG4gICAgY29uc3QgaG9zdFNvdXJjZSA9IGNsZWFuSG9zdChpdGVtLmRvbWFpbiA/PyBcIlwiKSB8fCAoaXRlbS51cmwgPz8gXCJcIik7XHJcbiAgICBjb25zdCBob3N0VG9rZW5zID0gdG9rZW5pemUoaG9zdFNvdXJjZSk7XHJcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIGhvc3RUb2tlbnMpIHNjb3Jlcy5zZXQodG9rZW4sIChzY29yZXMuZ2V0KHRva2VuKSA/PyAwKSArIDIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9wVG9rZW5zID0gWy4uLnNjb3Jlcy5lbnRyaWVzKCldXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXHJcbiAgICAubWFwKChbdG9rZW5dKSA9PiB0b2tlbilcclxuICAgIC5maWx0ZXIoKHRva2VuLCBpbmRleCwgbGlzdCkgPT4gbGlzdC5pbmRleE9mKHRva2VuKSA9PT0gaW5kZXgpXHJcbiAgICAuc2xpY2UoMCwgMyk7XHJcblxyXG4gIGlmICh0b3BUb2tlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgcGhyYXNlID0gdG9wVG9rZW5zXHJcbiAgICAgIC5tYXAoKHRva2VuKSA9PiB0b2tlbi5yZXBsYWNlKC9cXGJbYS16XS9nLCAobWF0Y2gpID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpKVxyXG4gICAgICAuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4gcGhyYXNlLmxlbmd0aCA+IDQwID8gcGhyYXNlLnNsaWNlKDAsIDQwKS50cmltKCkgOiBwaHJhc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsbGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZENsdXN0ZXJTdW1tYXJ5KGl0ZW1zOiBDbHVzdGVyTWV0YVtdLCBuYW1lOiBzdHJpbmcpIHtcclxuICBjb25zdCBsZWFkaW5nVGl0bGVzID0gaXRlbXNcclxuICAgIC5tYXAoKGl0ZW0pID0+IChpdGVtLnRpdGxlID8/IGNsZWFuSG9zdChpdGVtLmRvbWFpbikpIHx8IFwiVGFiXCIpXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAuc2xpY2UoMCwgMylcclxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpKVxyXG4gICAgLmZpbHRlcigocGFydCkgPT4gcGFydC5sZW5ndGggPiAwKTtcclxuXHJcbiAgaWYgKCFsZWFkaW5nVGl0bGVzLmxlbmd0aCkgcmV0dXJuIGAke25hbWV9IGNsdXN0ZXJgOyBcclxuICByZXR1cm4gYCR7bmFtZX06ICR7bGVhZGluZ1RpdGxlcy5qb2luKFwiIOKAoiBcIil9YC5zbGljZSgwLCA1MDApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);