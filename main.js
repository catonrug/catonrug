var $ = function(t) {
        return document.getElementById(t)
    },
    r = "/feeds/posts/default/",
	b = "data:application/octet-stream;base64,",
	j = "<a href='javascript:void(0);' onClick='javascript:window.navigator.msSaveBlob(u(",
    keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	m = "</a><br /><textarea>",
    isIE = !1;

function d(t) {
    var e, n, r, a, o, i, c = "",
        u = 0;
    for (/[^A-Za-z0-9+/=]/g.exec(t) && alert("1"), t = t.replace(/[^A-Za-z0-9+/=]/g, ""); e = keyStr.indexOf(t.charAt(u++)) << 2 | (r = keyStr.indexOf(t.charAt(u++))) >> 4, n = (15 & r) << 4 | (a = keyStr.indexOf(t.charAt(u++))) >> 2, i = (3 & a) << 6 | (c = keyStr.indexOf(t.charAt(u++))), o += String.fromCharCode(e), 64 != a && (o += String.fromCharCode(n)), 64 != c && (o += String.fromCharCode(i)), e = n = i = "", r = a = c = "", u < t.length;);
    return unescape(o)
}

function u(t) {
    for (var e = atob(t.split(",")[1]), n = t.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(e.length), a = new Uint8Array(r), o = 0; o < e.length; o++) a[o] = e.charCodeAt(o);
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
    g(r + t + "?alt=json", isIE ? function(t) {
        a(j+"&quot;"+b + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + m + d(t.entry.content.$t) + "</textarea>", o)
    } : function(t) {
        a("<a href='"+b + t.entry.content.$t + "' download='" + t.entry.title.$t + "'>" + t.entry.title.$t + m + d(t.entry.content.$t) + "</textarea>", o)
    })
}

function anchor(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + "?alt=json", isIE ? function(t) {
        a(j+"&quot;" + t.entry.content.$t + "&quot;), &quot;" + t.entry.title.$t + "&quot;);'>" + t.entry.title.$t + "</a>", o)
    } : function(t) {
        a("<a href='" + t.entry.content.$t + "' download='" + t.entry.title.$t + "'>" + t.entry.title.$t + "</a>", o)
    })
}

function mp4id(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + "?alt=json", function(t) {
        a("<source src='" + t.entry.content.$t + "' type='video/mp4'><a href='" + t.entry.content.$t + "'>" + t.entry.title.$t + "</a>", o)
    })
}

function mp3id(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + "?alt=json", function(t) {
        a("<source src='" + t.entry.content.$t + "' type='audio/mpeg'>", o)
    })
}

function out(t, e) {
    if (!i(e)) return !1;
    var n = e.replace("#", ""),
        o = $(n);
    g(r + t + "?alt=json", function(t) {
        a("<textarea>" + d(t.entry.content.$t) + "</textarea>", o)
    })
}(-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || -1 < window.navigator.userAgent.indexOf("Edge")) && (isIE = !0), "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function(t) {
    if (!t) return [];
    for (var e = [], n = document.getElementsByTagName("*"), r = new RegExp("(^| )" + t + "( |$)"), a = 0; a < n.length; a++) r.test(n[a].className) && e.push(n[a]);
    return e
});