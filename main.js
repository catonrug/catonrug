var $ = function(t) {
        return document.getElementById(t)
    },
    r = "/feeds/posts/default/",
    b = "data:application/octet-stream;base64,",
    v = "<a href='",
    j = v + "javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(s(",
    x = "' download='",
    z = "?alt=json",
    l = "<source src='",
    k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    m = "</a>",
    h = "</textarea>",
    hs = "<small class='r'>curl -s \"https://catonrug.blogspot.com" + r,
    hm = z + '" | jq -r \'.entry|.content|."$t"\' | base64 --decode > ',
    he = "</small><br /><textarea>",
    isIE = !1;

function d(t) {
    var e, n, r, o, a = "",
        i = "",
        c = "",
        u = 0;
    for (/[^A-Za-z0-9+/=]/g.exec(t) && alert("1"), t = t.replace(/[^A-Za-z0-9+/=]/g, ""); e = k.indexOf(t.charAt(u++)) << 2 | (r = k.indexOf(t.charAt(u++))) >> 4, n = (15 & r) << 4 | (o = k.indexOf(t.charAt(u++))) >> 2, i = (3 & o) << 6 | (c = k.indexOf(t.charAt(u++))), a += String.fromCharCode(e), 64 != o && (a += String.fromCharCode(n)), 64 != c && (a += String.fromCharCode(i)), e = n = i = "", r = o = c = "", u < t.length;);
    return unescape(a)
}

function s(t) {
    for (var e = atob(t.split(",")[1]), n = t.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(e.length), o = new Uint8Array(r), a = 0; a < e.length; a++) o[a] = e.charCodeAt(a);
    return new Blob([r], {
        type: n
    })
}

function g(t, e, n) {
    var r = new XMLHttpRequest;
    r.onreadystatechange = function() {
        r.readyState === XMLHttpRequest.DONE && (200 === r.status ? "function" == typeof e && e(JSON.parse(r.responseText)) : "function" == typeof n && n(r))
    }, r.open("GET", t, !0), r.send()
}

function o(t) {
    return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
}

function a(t, e) {
    if (o(t)) return e.appendChild(t);
    e.innerHTML += t
}

function i(t) {
    return 0 === (t = t.trim()).indexOf("#") && -1 === t.indexOf(".") && -1 === t.indexOf(">") && -1 === t.indexOf(" ")
}

function ac(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + z, isIE ? function(t) {
        a(j + "&quot;" + b + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + m + hs + n + hm + t.entry.title.$t + he + d(t.entry.content.$t) + h, o)
    } : function(t) {
        a(v + b + t.entry.content.$t + x + t.entry.title.$t + "'>" + t.entry.title.$t + m + hs + n + hm + t.entry.title.$t + he + d(t.entry.content.$t) + h, o)
    })
}

function dl(t, e, n) {
    if (n = n || "application/octet-stream", !i(e)) return !1;
    var o = e.replace("#", ""),
        c = $(o);
    g(r + t + z, isIE ? function(t) {
        a(j + "&quot;data:" + n + ";base64," + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + m, c)
    } : function(t) {
        a(v + "data:" + n + ";base64," + t.entry.content.$t + x + t.entry.title.$t + "'>" + t.entry.title.$t + m, c)
    })
}

function mp4id(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + z, function(t) {
        a(l + t.entry.content.$t + "' type='video/mp4'>" + v + t.entry.content.$t + "'>" + t.entry.title.$t + m, o)
    })
}

function mp3id(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + z, function(t) {
        a(l + t.entry.content.$t + "' type='audio/mpeg'>", o)
    })
}

function out(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + z, function(t) {
        a("<textarea>" + d(t.entry.content.$t) + h, o)
    })
}(-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || -1 < window.navigator.userAgent.indexOf("Edge")) && (isIE = !0), "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function(t) {
    if (!t) return [];
    for (var e = [], n = document.getElementsByTagName("*"), r = new RegExp("(^| )" + t + "( |$)"), o = 0; o < n.length; o++) r.test(n[o].className) && e.push(n[o]);
    return e
});
