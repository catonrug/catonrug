var $ = function(t) {
        return document.getElementById(t)
    },
    r = "/feeds/posts/default/",
	j = "?alt=json",
	m = "</textarea>";

function d(t) {
    var e, n, r, o, a = "",
        i = "",
        c = "",
        u = 0;
    for (/[^A-Za-z0-9\+\/\=]/g.exec(t) && alert("1"), t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e = keyStr.indexOf(t.charAt(u++)) << 2 | (r = keyStr.indexOf(t.charAt(u++))) >> 4, n = (15 & r) << 4 | (o = keyStr.indexOf(t.charAt(u++))) >> 2, i = (3 & o) << 6 | (c = keyStr.indexOf(t.charAt(u++))), a += String.fromCharCode(e), 64 != o && (a += String.fromCharCode(n)), 64 != c && (a += String.fromCharCode(i)), e = n = i = "", r = o = c = "", u < t.length;);
    return unescape(a)
}

function u(t) {
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
    if (!i(e)) return console.error("2"), !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + j, isIE ? function(t) {
        a("<a href='javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(&quot;data:application/octet-stream;base64," + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + "</a><br /><textarea>" + d(t.entry.content.$t) + m, o)
    } : function(t) {
        a("<a href='data:application/octet-stream;base64," + t.entry.content.$t + "' download='" + t.entry.title.$t + "'>" + t.entry.title.$t + "</a><br /><textarea>" + d(t.entry.content.$t) + m, o)
    })
}

function anchor(t, e) {
    if (!i(e)) return console.error("2"), !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + j, isIE ? function(t) {
        a("<a href='javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(&quot;" + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + "</a>", o)
    } : function(t) {
        a("<a href='" + t.entry.content.$t + "' download='" + t.entry.title.$t + "'>" + t.entry.title.$t + "</a>", o)
    })
}

function mp4id(t, e) {
    if (!i(e)) return console.error("2"), !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + j, function(t) {
        a("<source src='" + t.entry.content.$t + "' type='video/mp4'><a href='" + t.entry.content.$t + "'>" + t.entry.title.$t + "</a>", o)
    })
}

function mp3id(t, e) {
    if (!i(e)) return console.error("2"), !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + j, function(t) {
        a("<source src='" + t.entry.content.$t + "' type='audio/mpeg'>", o)
    })
}

function out(t, e) {
    if (!i(e)) return console.error("2"), !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + j, function(t) {
        a("<textarea>" + d(t.entry.content.$t) + m, o)
    })
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    isIE = !1;
(-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || -1 < window.navigator.userAgent.indexOf("Edge")) && (isIE = !0), "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function(t) {
    if (!t) return [];
    for (var e = [], n = document.getElementsByTagName("*"), r = new RegExp("(^| )" + t + "( |$)"), o = 0; o < n.length; o++) r.test(n[o].className) && e.push(n[o]);
    return e
});