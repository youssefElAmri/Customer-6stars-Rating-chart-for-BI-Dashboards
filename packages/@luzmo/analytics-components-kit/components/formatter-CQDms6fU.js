/*! * A kit of modern Luzmo Web Components for analytics in your web application.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Luzmo web components (“Luzmo Web Components”)
 * must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account
 * to use the Luzmo Web Components. This license terminates
 * automatically if a user no longer has an active Luzmo account.
 * Please view the Luzmo Terms of Service at: https://www.luzmo.com/information-pages/terms-of-use.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * */
import { i as R, l as ir, a as lr, b as ge } from "./localize-BX7q0S0M.js";
import { d as mr } from "./decompose-numeric-format-BuZcjH2k.js";
function sr(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function me(e, r) {
  if ((t = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var t, n = e.slice(0, t);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(t + 1)
  ];
}
function cr(e) {
  return e = me(Math.abs(e)), e ? e[1] : NaN;
}
function fr(e, r) {
  return function(t, n) {
    for (var i = t.length, u = [], m = 0, T = e[0], C = 0; i > 0 && T > 0 && (C + T + 1 > n && (T = Math.max(1, n - C)), u.push(t.substring(i -= T, i + T)), !((C += T + 1) > n)); )
      T = e[m = (m + 1) % e.length];
    return u.reverse().join(r);
  };
}
function hr(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(t) {
      return e[+t];
    });
  };
}
var gr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ve(e) {
  if (!(r = gr.exec(e))) throw new Error("invalid format: " + e);
  var r;
  return new Se({
    fill: r[1],
    align: r[2],
    sign: r[3],
    symbol: r[4],
    zero: r[5],
    width: r[6],
    comma: r[7],
    precision: r[8] && r[8].slice(1),
    trim: r[9],
    type: r[10]
  });
}
ve.prototype = Se.prototype;
function Se(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Se.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function yr(e) {
  e: for (var r = e.length, t = 1, n = -1, i; t < r; ++t)
    switch (e[t]) {
      case ".":
        n = i = t;
        break;
      case "0":
        n === 0 && (n = t), i = t;
        break;
      default:
        if (!+e[t]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Qe;
function dr(e, r) {
  var t = me(e, r);
  if (!t) return e + "";
  var n = t[0], i = t[1], u = i - (Qe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, m = n.length;
  return u === m ? n : u > m ? n + new Array(u - m + 1).join("0") : u > 0 ? n.slice(0, u) + "." + n.slice(u) : "0." + new Array(1 - u).join("0") + me(e, Math.max(0, r + u - 1))[0];
}
function we(e, r) {
  var t = me(e, r);
  if (!t) return e + "";
  var n = t[0], i = t[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const be = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sr,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => we(e * 100, r),
  r: we,
  s: dr,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Fe(e) {
  return e;
}
var ke = Array.prototype.map, xe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Mr(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Fe : fr(ke.call(e.grouping, Number), e.thousands + ""), t = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", u = e.numerals === void 0 ? Fe : hr(ke.call(e.numerals, String)), m = e.percent === void 0 ? "%" : e.percent + "", T = e.minus === void 0 ? "−" : e.minus + "", C = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(y) {
    y = ve(y);
    var H = y.fill, l = y.align, h = y.sign, f = y.symbol, p = y.zero, c = y.width, F = y.comma, S = y.precision, b = y.trim, d = y.type;
    d === "n" ? (F = !0, d = "g") : be[d] || (S === void 0 && (S = 12), b = !0, d = "g"), (p || H === "0" && l === "=") && (p = !0, H = "0", l = "=");
    var w = f === "$" ? t : f === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", oe = f === "$" ? n : /[%p]/.test(d) ? m : "", $ = be[d], he = /[defgprs%]/.test(d);
    S = S === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function ie(M) {
      var O = w, W = oe, q, le, E;
      if (d === "c")
        W = $(M) + W, M = "";
      else {
        M = +M;
        var B = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? C : $(Math.abs(M), S), b && (M = yr(M)), B && +M == 0 && h !== "+" && (B = !1), O = (B ? h === "(" ? h : T : h === "-" || h === "(" ? "" : h) + O, W = (d === "s" ? xe[8 + Qe / 3] : "") + W + (B && h === "(" ? ")" : ""), he) {
          for (q = -1, le = M.length; ++q < le; )
            if (E = M.charCodeAt(q), 48 > E || E > 57) {
              W = (E === 46 ? i + M.slice(q + 1) : M.slice(q)) + W, M = M.slice(0, q);
              break;
            }
        }
      }
      F && !p && (M = r(M, 1 / 0));
      var J = O.length + M.length + W.length, _ = J < c ? new Array(c - J + 1).join(H) : "";
      switch (F && p && (M = r(_ + M, _.length ? c - W.length : 1 / 0), _ = ""), l) {
        case "<":
          M = O + M + W + _;
          break;
        case "=":
          M = O + _ + M + W;
          break;
        case "^":
          M = _.slice(0, J = _.length >> 1) + O + M + W + _.slice(J);
          break;
        default:
          M = _ + O + M + W;
          break;
      }
      return u(M);
    }
    return ie.toString = function() {
      return y + "";
    }, ie;
  }
  function D(y, H) {
    var l = s((y = ve(y), y.type = "f", y)), h = Math.max(-8, Math.min(8, Math.floor(cr(H) / 3))) * 3, f = Math.pow(10, -h), p = xe[8 + h / 3];
    return function(c) {
      return l(f * c) + p;
    };
  }
  return {
    format: s,
    formatPrefix: D
  };
}
const ye = /* @__PURE__ */ new Date(), de = /* @__PURE__ */ new Date();
function x(e, r, t, n) {
  function i(u) {
    return e(u = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+u)), u;
  }
  return i.floor = (u) => (e(u = /* @__PURE__ */ new Date(+u)), u), i.ceil = (u) => (e(u = new Date(u - 1)), r(u, 1), e(u), u), i.round = (u) => {
    const m = i(u), T = i.ceil(u);
    return u - m < T - u ? m : T;
  }, i.offset = (u, m) => (r(u = /* @__PURE__ */ new Date(+u), m == null ? 1 : Math.floor(m)), u), i.range = (u, m, T) => {
    const C = [];
    if (u = i.ceil(u), T = T == null ? 1 : Math.floor(T), !(u < m) || !(T > 0)) return C;
    let s;
    do
      C.push(s = /* @__PURE__ */ new Date(+u)), r(u, T), e(u);
    while (s < u && u < m);
    return C;
  }, i.filter = (u) => x((m) => {
    if (m >= m) for (; e(m), !u(m); ) m.setTime(m - 1);
  }, (m, T) => {
    if (m >= m)
      if (T < 0) for (; ++T <= 0; )
        for (; r(m, -1), !u(m); )
          ;
      else for (; --T >= 0; )
        for (; r(m, 1), !u(m); )
          ;
  }), t && (i.count = (u, m) => (ye.setTime(+u), de.setTime(+m), e(ye), e(de), Math.floor(t(ye, de))), i.every = (u) => (u = Math.floor(u), !isFinite(u) || !(u > 0) ? null : u > 1 ? i.filter(n ? (m) => n(m) % u === 0 : (m) => i.count(0, m) % u === 0) : i)), i;
}
const ne = 1e3, I = ne * 60, ae = I * 60, ue = ae * 24, $e = ue * 7, Ge = x((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, r) => {
  e.setTime(+e + r * ne);
}, (e, r) => (r - e) / ne, (e) => e.getUTCSeconds());
Ge.range;
const Re = x((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ne);
}, (e, r) => {
  e.setTime(+e + r * I);
}, (e, r) => (r - e) / I, (e) => e.getMinutes());
Re.range;
const Tr = x((e) => {
  e.setUTCSeconds(0, 0);
}, (e, r) => {
  e.setTime(+e + r * I);
}, (e, r) => (r - e) / I, (e) => e.getUTCMinutes());
Tr.range;
const ze = x((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ne - e.getMinutes() * I);
}, (e, r) => {
  e.setTime(+e + r * ae);
}, (e, r) => (r - e) / ae, (e) => e.getHours());
ze.range;
const vr = x((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, r) => {
  e.setTime(+e + r * ae);
}, (e, r) => (r - e) / ae, (e) => e.getUTCHours());
vr.range;
const fe = x(
  (e) => e.setHours(0, 0, 0, 0),
  (e, r) => e.setDate(e.getDate() + r),
  (e, r) => (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * I) / ue,
  (e) => e.getDate() - 1
);
fe.range;
const Ce = x((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
  e.setUTCDate(e.getUTCDate() + r);
}, (e, r) => (r - e) / ue, (e) => e.getUTCDate() - 1);
Ce.range;
const Yr = x((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
  e.setUTCDate(e.getUTCDate() + r);
}, (e, r) => (r - e) / ue, (e) => Math.floor(e / ue));
Yr.range;
function Z(e) {
  return x((r) => {
    r.setDate(r.getDate() - (r.getDay() + 7 - e) % 7), r.setHours(0, 0, 0, 0);
  }, (r, t) => {
    r.setDate(r.getDate() + t * 7);
  }, (r, t) => (t - r - (t.getTimezoneOffset() - r.getTimezoneOffset()) * I) / $e);
}
const De = Z(0), se = Z(1), pr = Z(2), Sr = Z(3), X = Z(4), Cr = Z(5), Dr = Z(6);
De.range;
se.range;
pr.range;
Sr.range;
X.range;
Cr.range;
Dr.range;
function P(e) {
  return x((r) => {
    r.setUTCDate(r.getUTCDate() - (r.getUTCDay() + 7 - e) % 7), r.setUTCHours(0, 0, 0, 0);
  }, (r, t) => {
    r.setUTCDate(r.getUTCDate() + t * 7);
  }, (r, t) => (t - r) / $e);
}
const Ze = P(0), ce = P(1), Ur = P(2), wr = P(3), K = P(4), br = P(5), Fr = P(6);
Ze.range;
ce.range;
Ur.range;
wr.range;
K.range;
br.range;
Fr.range;
const Pe = x((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, r) => {
  e.setMonth(e.getMonth() + r);
}, (e, r) => r.getMonth() - e.getMonth() + (r.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Pe.range;
const kr = x((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
  e.setUTCMonth(e.getUTCMonth() + r);
}, (e, r) => r.getUTCMonth() - e.getUTCMonth() + (r.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
kr.range;
const Q = x((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, r) => {
  e.setFullYear(e.getFullYear() + r);
}, (e, r) => r.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Q.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : x((r) => {
  r.setFullYear(Math.floor(r.getFullYear() / e) * e), r.setMonth(0, 1), r.setHours(0, 0, 0, 0);
}, (r, t) => {
  r.setFullYear(r.getFullYear() + t * e);
});
Q.range;
const z = x((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
  e.setUTCFullYear(e.getUTCFullYear() + r);
}, (e, r) => r.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
z.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : x((r) => {
  r.setUTCFullYear(Math.floor(r.getUTCFullYear() / e) * e), r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
}, (r, t) => {
  r.setUTCFullYear(r.getUTCFullYear() + t * e);
});
z.range;
function Me(e) {
  if (0 <= e.y && e.y < 100) {
    var r = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return r.setFullYear(e.y), r;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Te(e) {
  if (0 <= e.y && e.y < 100) {
    var r = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return r.setUTCFullYear(e.y), r;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ee(e, r, t) {
  return { y: e, m: r, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function Ye(e) {
  var r = e.dateTime, t = e.date, n = e.time, i = e.periods, u = e.days, m = e.shortDays, T = e.months, C = e.shortMonths, s = re(i), D = te(i), y = re(u), H = te(u), l = re(m), h = te(m), f = re(T), p = te(T), c = re(C), F = te(C), S = {
    a: B,
    A: J,
    b: _,
    B: Xe,
    c: null,
    d: He,
    e: He,
    f: Xr,
    g: lt,
    G: st,
    H: Br,
    I: Jr,
    j: jr,
    L: Ee,
    m: Kr,
    M: et,
    p: Ke,
    q: er,
    Q: qe,
    s: Ie,
    S: rt,
    u: tt,
    U: nt,
    V: at,
    w: ut,
    W: ot,
    x: null,
    X: null,
    y: it,
    Y: mt,
    Z: ct,
    "%": Ve
  }, b = {
    a: rr,
    A: tr,
    b: nr,
    B: ar,
    c: null,
    d: Oe,
    e: Oe,
    f: yt,
    g: Ut,
    G: bt,
    H: ft,
    I: ht,
    j: gt,
    L: Je,
    m: dt,
    M: Mt,
    p: ur,
    q: or,
    Q: qe,
    s: Ie,
    S: Tt,
    u: vt,
    U: Yt,
    V: pt,
    w: St,
    W: Ct,
    x: null,
    X: null,
    y: Dt,
    Y: wt,
    Z: Ft,
    "%": Ve
  }, d = {
    a: ie,
    A: M,
    b: O,
    B: W,
    c: q,
    d: Le,
    e: Le,
    f: zr,
    g: Ne,
    G: Ae,
    H: _e,
    I: _e,
    j: Qr,
    L: Rr,
    m: Ir,
    M: $r,
    p: he,
    q: qr,
    Q: Pr,
    s: Er,
    S: Gr,
    u: Lr,
    U: _r,
    V: Hr,
    w: Nr,
    W: Or,
    x: le,
    X: E,
    y: Ne,
    Y: Ae,
    Z: Vr,
    "%": Zr
  };
  S.x = w(t, S), S.X = w(n, S), S.c = w(r, S), b.x = w(t, b), b.X = w(n, b), b.c = w(r, b);
  function w(o, g) {
    return function(v) {
      var a = [], A = -1, U = 0, N = o.length, L, G, Ue;
      for (v instanceof Date || (v = /* @__PURE__ */ new Date(+v)); ++A < N; )
        o.charCodeAt(A) === 37 && (a.push(o.slice(U, A)), (G = We[L = o.charAt(++A)]) != null ? L = o.charAt(++A) : G = L === "e" ? " " : "0", (Ue = g[L]) && (L = Ue(v, G)), a.push(L), U = A + 1);
      return a.push(o.slice(U, A)), a.join("");
    };
  }
  function oe(o, g) {
    return function(v) {
      var a = ee(1900, void 0, 1), A = $(a, o, v += "", 0), U, N;
      if (A != v.length) return null;
      if ("Q" in a) return new Date(a.Q);
      if ("s" in a) return new Date(a.s * 1e3 + ("L" in a ? a.L : 0));
      if (g && !("Z" in a) && (a.Z = 0), "p" in a && (a.H = a.H % 12 + a.p * 12), a.m === void 0 && (a.m = "q" in a ? a.q : 0), "V" in a) {
        if (a.V < 1 || a.V > 53) return null;
        "w" in a || (a.w = 1), "Z" in a ? (U = Te(ee(a.y, 0, 1)), N = U.getUTCDay(), U = N > 4 || N === 0 ? ce.ceil(U) : ce(U), U = Ce.offset(U, (a.V - 1) * 7), a.y = U.getUTCFullYear(), a.m = U.getUTCMonth(), a.d = U.getUTCDate() + (a.w + 6) % 7) : (U = Me(ee(a.y, 0, 1)), N = U.getDay(), U = N > 4 || N === 0 ? se.ceil(U) : se(U), U = fe.offset(U, (a.V - 1) * 7), a.y = U.getFullYear(), a.m = U.getMonth(), a.d = U.getDate() + (a.w + 6) % 7);
      } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), N = "Z" in a ? Te(ee(a.y, 0, 1)).getUTCDay() : Me(ee(a.y, 0, 1)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + a.W * 7 - (N + 5) % 7 : a.w + a.U * 7 - (N + 6) % 7);
      return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, Te(a)) : Me(a);
    };
  }
  function $(o, g, v, a) {
    for (var A = 0, U = g.length, N = v.length, L, G; A < U; ) {
      if (a >= N) return -1;
      if (L = g.charCodeAt(A++), L === 37) {
        if (L = g.charAt(A++), G = d[L in We ? g.charAt(A++) : L], !G || (a = G(o, v, a)) < 0) return -1;
      } else if (L != v.charCodeAt(a++))
        return -1;
    }
    return a;
  }
  function he(o, g, v) {
    var a = s.exec(g.slice(v));
    return a ? (o.p = D.get(a[0].toLowerCase()), v + a[0].length) : -1;
  }
  function ie(o, g, v) {
    var a = l.exec(g.slice(v));
    return a ? (o.w = h.get(a[0].toLowerCase()), v + a[0].length) : -1;
  }
  function M(o, g, v) {
    var a = y.exec(g.slice(v));
    return a ? (o.w = H.get(a[0].toLowerCase()), v + a[0].length) : -1;
  }
  function O(o, g, v) {
    var a = c.exec(g.slice(v));
    return a ? (o.m = F.get(a[0].toLowerCase()), v + a[0].length) : -1;
  }
  function W(o, g, v) {
    var a = f.exec(g.slice(v));
    return a ? (o.m = p.get(a[0].toLowerCase()), v + a[0].length) : -1;
  }
  function q(o, g, v) {
    return $(o, r, g, v);
  }
  function le(o, g, v) {
    return $(o, t, g, v);
  }
  function E(o, g, v) {
    return $(o, n, g, v);
  }
  function B(o) {
    return m[o.getDay()];
  }
  function J(o) {
    return u[o.getDay()];
  }
  function _(o) {
    return C[o.getMonth()];
  }
  function Xe(o) {
    return T[o.getMonth()];
  }
  function Ke(o) {
    return i[+(o.getHours() >= 12)];
  }
  function er(o) {
    return 1 + ~~(o.getMonth() / 3);
  }
  function rr(o) {
    return m[o.getUTCDay()];
  }
  function tr(o) {
    return u[o.getUTCDay()];
  }
  function nr(o) {
    return C[o.getUTCMonth()];
  }
  function ar(o) {
    return T[o.getUTCMonth()];
  }
  function ur(o) {
    return i[+(o.getUTCHours() >= 12)];
  }
  function or(o) {
    return 1 + ~~(o.getUTCMonth() / 3);
  }
  return {
    format: function(o) {
      var g = w(o += "", S);
      return g.toString = function() {
        return o;
      }, g;
    },
    parse: function(o) {
      var g = oe(o += "", !1);
      return g.toString = function() {
        return o;
      }, g;
    },
    utcFormat: function(o) {
      var g = w(o += "", b);
      return g.toString = function() {
        return o;
      }, g;
    },
    utcParse: function(o) {
      var g = oe(o += "", !0);
      return g.toString = function() {
        return o;
      }, g;
    }
  };
}
var We = { "-": "", _: " ", 0: "0" }, k = /^\s*\d+/, xr = /^%/, Wr = /[\\^$*+?|[\]().{}]/g;
function Y(e, r, t) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", u = i.length;
  return n + (u < t ? new Array(t - u + 1).join(r) + i : i);
}
function Ar(e) {
  return e.replace(Wr, "\\$&");
}
function re(e) {
  return new RegExp("^(?:" + e.map(Ar).join("|") + ")", "i");
}
function te(e) {
  return new Map(e.map((r, t) => [r.toLowerCase(), t]));
}
function Nr(e, r, t) {
  var n = k.exec(r.slice(t, t + 1));
  return n ? (e.w = +n[0], t + n[0].length) : -1;
}
function Lr(e, r, t) {
  var n = k.exec(r.slice(t, t + 1));
  return n ? (e.u = +n[0], t + n[0].length) : -1;
}
function _r(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.U = +n[0], t + n[0].length) : -1;
}
function Hr(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.V = +n[0], t + n[0].length) : -1;
}
function Or(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.W = +n[0], t + n[0].length) : -1;
}
function Ae(e, r, t) {
  var n = k.exec(r.slice(t, t + 4));
  return n ? (e.y = +n[0], t + n[0].length) : -1;
}
function Ne(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), t + n[0].length) : -1;
}
function Vr(e, r, t) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(r.slice(t, t + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), t + n[0].length) : -1;
}
function qr(e, r, t) {
  var n = k.exec(r.slice(t, t + 1));
  return n ? (e.q = n[0] * 3 - 3, t + n[0].length) : -1;
}
function Ir(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.m = n[0] - 1, t + n[0].length) : -1;
}
function Le(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.d = +n[0], t + n[0].length) : -1;
}
function Qr(e, r, t) {
  var n = k.exec(r.slice(t, t + 3));
  return n ? (e.m = 0, e.d = +n[0], t + n[0].length) : -1;
}
function _e(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.H = +n[0], t + n[0].length) : -1;
}
function $r(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.M = +n[0], t + n[0].length) : -1;
}
function Gr(e, r, t) {
  var n = k.exec(r.slice(t, t + 2));
  return n ? (e.S = +n[0], t + n[0].length) : -1;
}
function Rr(e, r, t) {
  var n = k.exec(r.slice(t, t + 3));
  return n ? (e.L = +n[0], t + n[0].length) : -1;
}
function zr(e, r, t) {
  var n = k.exec(r.slice(t, t + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), t + n[0].length) : -1;
}
function Zr(e, r, t) {
  var n = xr.exec(r.slice(t, t + 1));
  return n ? t + n[0].length : -1;
}
function Pr(e, r, t) {
  var n = k.exec(r.slice(t));
  return n ? (e.Q = +n[0], t + n[0].length) : -1;
}
function Er(e, r, t) {
  var n = k.exec(r.slice(t));
  return n ? (e.s = +n[0], t + n[0].length) : -1;
}
function He(e, r) {
  return Y(e.getDate(), r, 2);
}
function Br(e, r) {
  return Y(e.getHours(), r, 2);
}
function Jr(e, r) {
  return Y(e.getHours() % 12 || 12, r, 2);
}
function jr(e, r) {
  return Y(1 + fe.count(Q(e), e), r, 3);
}
function Ee(e, r) {
  return Y(e.getMilliseconds(), r, 3);
}
function Xr(e, r) {
  return Ee(e, r) + "000";
}
function Kr(e, r) {
  return Y(e.getMonth() + 1, r, 2);
}
function et(e, r) {
  return Y(e.getMinutes(), r, 2);
}
function rt(e, r) {
  return Y(e.getSeconds(), r, 2);
}
function tt(e) {
  var r = e.getDay();
  return r === 0 ? 7 : r;
}
function nt(e, r) {
  return Y(De.count(Q(e) - 1, e), r, 2);
}
function Be(e) {
  var r = e.getDay();
  return r >= 4 || r === 0 ? X(e) : X.ceil(e);
}
function at(e, r) {
  return e = Be(e), Y(X.count(Q(e), e) + (Q(e).getDay() === 4), r, 2);
}
function ut(e) {
  return e.getDay();
}
function ot(e, r) {
  return Y(se.count(Q(e) - 1, e), r, 2);
}
function it(e, r) {
  return Y(e.getFullYear() % 100, r, 2);
}
function lt(e, r) {
  return e = Be(e), Y(e.getFullYear() % 100, r, 2);
}
function mt(e, r) {
  return Y(e.getFullYear() % 1e4, r, 4);
}
function st(e, r) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? X(e) : X.ceil(e), Y(e.getFullYear() % 1e4, r, 4);
}
function ct(e) {
  var r = e.getTimezoneOffset();
  return (r > 0 ? "-" : (r *= -1, "+")) + Y(r / 60 | 0, "0", 2) + Y(r % 60, "0", 2);
}
function Oe(e, r) {
  return Y(e.getUTCDate(), r, 2);
}
function ft(e, r) {
  return Y(e.getUTCHours(), r, 2);
}
function ht(e, r) {
  return Y(e.getUTCHours() % 12 || 12, r, 2);
}
function gt(e, r) {
  return Y(1 + Ce.count(z(e), e), r, 3);
}
function Je(e, r) {
  return Y(e.getUTCMilliseconds(), r, 3);
}
function yt(e, r) {
  return Je(e, r) + "000";
}
function dt(e, r) {
  return Y(e.getUTCMonth() + 1, r, 2);
}
function Mt(e, r) {
  return Y(e.getUTCMinutes(), r, 2);
}
function Tt(e, r) {
  return Y(e.getUTCSeconds(), r, 2);
}
function vt(e) {
  var r = e.getUTCDay();
  return r === 0 ? 7 : r;
}
function Yt(e, r) {
  return Y(Ze.count(z(e) - 1, e), r, 2);
}
function je(e) {
  var r = e.getUTCDay();
  return r >= 4 || r === 0 ? K(e) : K.ceil(e);
}
function pt(e, r) {
  return e = je(e), Y(K.count(z(e), e) + (z(e).getUTCDay() === 4), r, 2);
}
function St(e) {
  return e.getUTCDay();
}
function Ct(e, r) {
  return Y(ce.count(z(e) - 1, e), r, 2);
}
function Dt(e, r) {
  return Y(e.getUTCFullYear() % 100, r, 2);
}
function Ut(e, r) {
  return e = je(e), Y(e.getUTCFullYear() % 100, r, 2);
}
function wt(e, r) {
  return Y(e.getUTCFullYear() % 1e4, r, 4);
}
function bt(e, r) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? K(e) : K.ceil(e), Y(e.getUTCFullYear() % 1e4, r, 4);
}
function Ft() {
  return "+0000";
}
function Ve() {
  return "%";
}
function qe(e) {
  return +e;
}
function Ie(e) {
  return Math.floor(+e / 1e3);
}
var j, V;
kt({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function kt(e) {
  return j = Ye(e), V = j.format, j.parse, j.utcFormat, j.utcParse, j;
}
const pe = [
  // YEAR
  [
    1,
    // years
    4,
    // quarters
    12,
    // months
    52,
    // weeks
    365,
    // days
    365 * 24,
    // hours
    365 * 24 * 60,
    // minutes
    365 * 24 * 60 * 60,
    // seconds
    365 * 24 * 60 * 60 * 1e3
    // milliseconds
  ],
  // QUARTERS
  [
    1 / 4,
    // year
    1,
    // quarters
    3,
    // months
    13,
    // weeks
    91,
    // days
    91 * 24,
    // hours
    91 * 24 * 60,
    // minutes
    91 * 24 * 60 * 60,
    // seconds
    91 * 24 * 60 * 60 * 1e3
    // milliseconds
  ],
  // MONTHS
  [
    1 / 12,
    // year
    1 / 3,
    // quarters
    1,
    // months
    4,
    // weeks
    30,
    // days
    30 * 24,
    // hours
    30 * 24 * 60,
    // minutes
    30 * 24 * 60 * 60,
    // seconds
    30 * 24 * 60 * 60 * 1e3
    // milliseconds
  ],
  // WEEKS
  [
    1 / 52,
    // year
    1 / 13,
    // quarters
    1 / 4,
    // months
    1,
    // weeks
    7,
    // days
    7 * 24,
    // hours
    7 * 24 * 60,
    // minutes
    7 * 24 * 60 * 60,
    // seconds
    7 * 24 * 60 * 60 * 1e3
    // milliseconds
  ],
  // DAYS
  [
    1 / 365,
    // year
    1 / 91,
    // quarters
    1 / 30,
    // months
    1 / 7,
    // weeks
    1,
    // days
    24,
    // hours
    24 * 60,
    // minutes
    24 * 60 * 60,
    // seconds
    24 * 60 * 60 * 1e3
    // milliseconds
  ],
  // HOURS
  [
    1 / (365 * 24),
    // year
    1 / (91 * 24),
    // quarters
    1 / (30 * 24),
    // months
    1 / (7 * 24),
    // weeks
    1 / 24,
    // days
    1,
    // hours
    60,
    // minutes
    60 * 60,
    // seconds
    60 * 60 * 1e3
    // milliseconds
  ],
  // MINUTES
  [
    1 / (365 * 24 * 60),
    // year
    1 / (91 * 24 * 60),
    // quarters
    1 / (30 * 24 * 60),
    // months
    1 / (7 * 24 * 60),
    // weeks
    1 / (24 * 60),
    // days
    1 / 60,
    // hours
    1,
    // minutes
    60,
    // seconds
    60 * 1e3
    // milliseconds
  ],
  // SECONDS
  [
    1 / (365 * 24 * 60 * 60),
    // year
    1 / (91 * 24 * 60 * 60),
    // quarters
    1 / (30 * 24 * 60 * 60),
    // months
    1 / (7 * 24 * 60 * 60),
    // weeks
    1 / (24 * 60 * 60),
    // days
    1 / (60 * 60),
    // hours
    1 / 60,
    // minutes
    1,
    // seconds
    1e3
    // milliseconds
  ],
  // MILLISECONDS
  [
    1 / (365 * 24 * 60 * 60 * 1e3),
    // year
    1 / (91 * 24 * 60 * 60 * 1e3),
    // quarters
    1 / (30 * 24 * 60 * 60 * 1e3),
    // months
    1 / (7 * 24 * 60 * 60 * 1e3),
    // weeks
    1 / (24 * 60 * 60 * 1e3),
    // days
    1 / (60 * 60 * 1e3),
    // hours
    1 / (60 * 1e3),
    // minutes
    1 / 1e3,
    // seconds
    1
    // milliseconds
  ]
];
function xt(e, r, t) {
  if (R(e))
    return;
  if (!r || !t || r === t)
    return e;
  const n = pe[r - 1][t - 1];
  if (n)
    return e * n;
}
function Wt(e, r, t, n) {
  if (R(e) || !r.lowestLevel || t.length === 0)
    return "";
  const i = [];
  let u = 0, m = Math.round(
    e * pe[r.lowestLevel - 1][8]
  );
  const T = 9;
  for (const [, s] of t.entries())
    if (e) {
      m = m - u;
      const D = pe[s - 1][T - 1], y = Math.floor(m / D);
      u = y * D, i.push({ level: s, value: y });
    } else
      i.push({ level: s, value: 0 });
  let C = "";
  for (const [s, D] of i.entries())
    if (r.duration.format === "time") {
      let y = D.value;
      [6, 7, 8].includes(D.level) && D.value < 10 ? y = "0" + D.value.toString() : D.level === 9 && D.value < 10 ? y = "00" + D.value.toString() : D.level === 9 && D.value < 100 && (y = "0" + D.value.toString()), C += (s === 0 ? "" : D.level === 9 ? "." : ":") + y;
    } else if (r.duration.format === "long") {
      const y = n.durationLongSuffix;
      C += D.value + " " + y[D.level] + (s === i.length - 1 ? "" : " ");
    } else {
      const y = n.durationShortSuffix;
      C += D.value + "" + y[D.level] + (s === i.length - 1 ? "" : " ");
    }
  return C;
}
const At = {
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  dateTime: "%a %b %e %X %Y",
  date: "%m/%d/%Y",
  dateSeparator: "/",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  levels: [
    "All",
    "Year",
    "Quarter",
    "Month",
    "Week",
    "Date",
    "Hour",
    "Minute",
    "Second",
    "Millisecond"
  ],
  shortLevels: [
    "All",
    "Yr",
    "Qtr",
    "Mth",
    "Wk",
    "Date",
    "Hr",
    "Min",
    "Sec",
    "Msec"
  ],
  durationLongSuffix: [
    "",
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  durationShortSuffix: ["", "y", "q", "mo", "w", "d", "h", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
}, Nt = "%d-%m-%Y", Lt = [
  {
    key: "%a %e %b %Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%b %Y",
    lev4: "Wk %V-%G",
    lev5: "%a %e %b %Y",
    monthType: "name",
    longText: !1,
    weekday: !0
  },
  {
    key: "%e %b %Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%b %Y",
    lev4: "Wk %V-%G",
    lev5: "%e %b %Y",
    monthType: "name",
    longText: !1,
    weekday: !1
  },
  {
    key: "%a %e %B %Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%B %Y",
    lev4: "Week %V, %G",
    lev5: "%a %e %B %Y",
    monthType: "name",
    longText: !0,
    weekday: !0
  },
  {
    key: "%e %B %Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%B %Y",
    lev4: "Week %V, %G",
    lev5: "%e %B %Y",
    monthType: "name",
    longText: !0,
    weekday: !1
  },
  {
    key: "%d/%m/%Y",
    lev1: "%Y",
    lev2: "Q%q/%Y",
    lev3: "%m/%Y",
    lev4: "W%V/%G",
    lev5: "%d/%m/%Y",
    monthType: "number",
    mmdd: !1,
    separator: "/"
  },
  {
    key: "%d-%m-%Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%m-%Y",
    lev4: "W%V-%G",
    lev5: "%d-%m-%Y",
    monthType: "number",
    mmdd: !1,
    separator: "-"
  },
  {
    key: "%d.%m.%Y",
    lev1: "%Y",
    lev2: "Q%q.%Y",
    lev3: "%m.%Y",
    lev4: "W%V.%G",
    lev5: "%d.%m.%Y",
    monthType: "number",
    mmdd: !1,
    separator: "."
  },
  {
    key: "%d~%m~%Y",
    lev1: "%Y",
    lev2: "Q%q~%Y",
    lev3: "%m~%Y",
    lev4: "W%V~%G",
    lev5: "%d~%m~%Y",
    monthType: "number",
    mmdd: !1,
    separator: "~"
  },
  {
    key: "%m/%d/%Y",
    lev1: "%Y",
    lev2: "Q%q/%Y",
    lev3: "%m/%Y",
    lev4: "%G/W%V",
    lev5: "%m/%d/%Y",
    monthType: "number",
    mmdd: !0,
    separator: "/"
  },
  {
    key: "%m-%d-%Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%m-%Y",
    lev4: "%G-W%V",
    lev5: "%m-%d-%Y",
    monthType: "number",
    mmdd: !0,
    separator: "-"
  },
  {
    key: "%m.%d.%Y",
    lev1: "%Y",
    lev2: "Q%q.%Y",
    lev3: "%m.%Y",
    lev4: "%G.W%V",
    lev5: "%m.%d.%Y",
    monthType: "number",
    mmdd: !0,
    separator: "."
  },
  {
    key: "%m~%d~%Y",
    lev1: "%Y",
    lev2: "Q%q~%Y",
    lev3: "%m~%Y",
    lev4: "%G~W%V",
    lev5: "%m~%d~%Y",
    monthType: "number",
    mmdd: !0,
    separator: "~"
  },
  {
    key: "%amd/%Y",
    lev1: "%Y",
    lev2: "Q%q/%Y",
    lev3: "%m/%Y",
    lev4: "%G/W%V",
    lev5: "%amd/%Y",
    monthType: "number",
    mmdd: null,
    separator: "/"
  },
  {
    key: "%amd-%Y",
    lev1: "%Y",
    lev2: "Q%q-%Y",
    lev3: "%m-%Y",
    lev4: "%G-W%V",
    lev5: "%amd-%Y",
    monthType: "number",
    mmdd: null,
    separator: "-"
  },
  {
    key: "%amd.%Y",
    lev1: "%Y",
    lev2: "Q%q.%Y",
    lev3: "%m.%Y",
    lev4: "%G.W%V",
    lev5: "%amd.%Y",
    monthType: "number",
    mmdd: null,
    separator: "."
  },
  {
    key: "%amd~%Y",
    lev1: "%Y",
    lev2: "Q%q~%Y",
    lev3: "%m~%Y",
    lev4: "%G~W%V",
    lev5: "%amd~%Y",
    monthType: "number",
    mmdd: null,
    separator: "~"
  }
], _t = [
  {
    key: "%H:%M:%S.%L",
    lev6: "%H:00",
    lev7: "%H:%M",
    lev8: "%H:%M:%S",
    lev9: "%H:%M:%S.%L",
    ampm: !1
  },
  {
    key: "%I:%M:%S.%L %p",
    lev6: "%I:00 %p",
    lev7: "%I:%M %p",
    lev8: "%I:%M:%S %p",
    lev9: "%I:%M:%S.%L %p",
    ampm: !0
  }
];
function Vt(e, r) {
  var y, H;
  r = r || {};
  const t = r.localFormats || At;
  let n, i, u, m = [], T = [], C = "datetime", s;
  r && r.multi && (C = "datetime"), (!e || !e.format) && (C = "hierarchy"), e && e.type && (C = e.type), e && e.format ? s = e.format : C === "numeric" ? s = ",.0f" : C === "datetime" ? s = Nt : s = "";
  const D = mr(s);
  switch (D.precision && D.typeFormat && (C = "numeric"), C) {
    case "numeric": {
      if (e.subtype === "duration" && e.duration && e.duration.levels && e.duration.levels.length > 1 && !r.hideDuration)
        n = (l) => R(l) ? "" : Wt(
          l,
          e,
          e.duration.levels,
          t
        );
      else {
        const l = { ...t };
        let h = D.typeFormat, f = !1;
        switch (h.length === 2 && h.startsWith("a") && (f = !0, h = h.slice(1, 2), s = s.replace(/a/, "")), f ? (l.decimal = t.decimal, l.thousands = t.thousands) : ["z", "y", "w"].includes(h) ? (l.decimal = ",", l.thousands = ".") : (l.decimal = ".", l.thousands = ","), h) {
          case "z": {
            s = s.replace("z", "f");
            break;
          }
          case "y": {
            s = s.replace("y", "%");
            break;
          }
          case "w": {
            s = s.replace("w", "s");
            break;
          }
        }
        if ((e == null ? void 0 : e.subtype) === "currency" && e.currency) {
          const c = " ", F = l.currency.findIndex(
            (w) => w.length > 0
          ), S = l.currency[F].startsWith(c), b = l.currency[F].endsWith(c), d = `${S ? c : ""}${e.currency}${b ? c : ""}`;
          l.currency[F] = d;
        }
        const p = Mr(l);
        h !== "%" && (e == null ? void 0 : e.subtype) === "currency" && e.currency && l.currency && !(r != null && r.hideCurrency) && !["count", "distinctcount"].includes(e.aggregationFunc) && !(e.aggregationFunc === "rate" && ((y = e.aggregationWeight) == null ? void 0 : y.columnSubType) === "currency") && ((H = e.periodOverPeriod) == null ? void 0 : H.type) !== "percentageChange" && (s = "$" + s), r != null && r.trimZero && ["y", "%"].includes(h) && l.decimal === "," ? i = (c) => p.format(s)(c).replace(/(,\d*?)0+%$/, "$1%").replace(/,%$/, "%") : r != null && r.trimZero && ["y", "%"].includes(h) && l.decimal === "." ? i = (c) => p.format(s)(c).replace(/(\.\d*?)0+%$/, "$1%").replace(/\.%$/, "%") : r != null && r.trimZero && ["z", "f"].includes(h) && l.decimal === "," ? i = (c) => p.format(s)(c).replace(/(,\d*?)0+$/, "$1").replace(/,$/, "") : r != null && r.trimZero && ["z", "f"].includes(h) && l.decimal === "." ? i = (c) => p.format(s)(c).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "") : (e == null ? void 0 : e.subtype) === "currency" && e.currency && l.currency && h === "s" ? i = (c) => p.format(s)(c).replace(/G/, "B") : i = R(D.precision) ? p.format(",.0f") : p.format(s), n = (c) => {
          var F;
          if (R(c))
            return "";
          if (e.subtype === "duration" && e.duration && !r.hideDuration) {
            const S = e.duration.levels ? e.duration.levels[0] : e.lowestLevel;
            return S !== e.lowestLevel && (c = xt(c, e.lowestLevel, S)), i(c) + ((F = t == null ? void 0 : t.durationShortSuffix) == null ? void 0 : F[S]);
          }
          return i(c);
        };
      }
      break;
    }
    case "datetime": {
      if (m = (t == null ? void 0 : t.smartDateFormats) ?? Lt, T = (t == null ? void 0 : t.smartTimeFormats) ?? _t, R(e.datetimeDisplayMode)) {
        if (r != null && r.level) {
          const l = r.level, h = m.find(
            (b) => s.includes(b.key)
          ), f = T.find(
            (b) => s.includes(b.key)
          ), p = h ? h["lev" + Math.min(l, 5)] : m[0]["lev" + Math.min(l, 5)], c = l > 5 ? f ? f["lev" + l] : T[0]["lev" + l] : "";
          s = l > 5 ? p + ", " + c : p;
          const F = s.includes("%amd") && r.level >= 5, S = h ? r.level >= 2 && h.separator === "~" : !1;
          F ? s = S ? (
            // Fully use the date format defined in the locale JSON, including its separators.
            s.replaceAll(
              new RegExp(/%amd[.~\/-]%Y/g),
              t.date.slice(0, 8)
            )
          ) : (
            // Use the date format defined in the locale JSON, but replace the seperators to the hardcoded separator configured in the slot menu.
            s.replaceAll(
              new RegExp(/%amd[.~\/-]%Y/g),
              t.date.slice(0, 8).replaceAll(
                new RegExp(/[.~\/-]/g),
                h.separator
              )
            )
          ) : s = S ? (
            // No locale aware date format but locale aware separator: replace locale aware '~' separator by correct separator from locale JSON.
            s.replaceAll(
              new RegExp(/[~]/g),
              t.dateSeparator
            )
          ) : (
            // No locale aware format and no locale aware separator: no action required.
            s
          );
        }
        if (r != null && r.multi) {
          const l = V(t.multi[0]), h = V(t.multi[1]), f = V(t.multi[2]), p = V(t.multi[3]), c = V(t.multi[4]), F = V(t.multi[6]), S = V(t.multi[7]), b = V(t.multi[8]);
          u = (d) => {
            let w;
            return Ge(d) < d ? w = l : Re(d) < d ? w = h : ze(d) < d ? w = f : fe(d) < d ? w = p : Pe(d) < d ? w = De(d) < d ? c : F : Q(d) < d ? w = S : w = b, w(d);
          };
        } else
          u = Ye(t).format(s);
      } else {
        const l = {
          quarter_number: { min: 1, max: 4 },
          month_name: { min: 1, max: 12 },
          month_number: { min: 1, max: 12 },
          week_number: { min: 1, max: 53 },
          day_in_month: { min: 1, max: 31 },
          day_in_year: { min: 1, max: 366 },
          weekday_name: { min: 0, max: 7 },
          weekday_number: { min: 0, max: 7 },
          hour_in_day: { min: 0, max: 23 },
          minute_in_hour: { min: 0, max: 59 },
          second_in_minute: { min: 0, max: 59 }
        }, h = (f, p, c) => {
          var F, S, b, d, w;
          return p === "letter" ? ((F = f.shortNames) == null ? void 0 : F.length) > 0 && ((S = f.shortNames[c]) == null ? void 0 : S.length) > 0 ? (b = f.shortNames[c]) == null ? void 0 : b.charAt(0) : "N/A" : p === "short" ? ((d = f.shortNames) == null ? void 0 : d.length) > 0 && f.shortNames[c] ? f.shortNames[c] : "N/A" : ((w = f.longNames) == null ? void 0 : w.length) > 0 && f.longNames[c] ? f.longNames[c] : "N/A";
        };
        [
          "quarter_number",
          "month_number",
          "week_number",
          "day_in_month",
          "day_in_year",
          "weekday_number",
          "hour_in_day",
          "minute_in_hour",
          "second_in_minute"
        ].includes(e.datetimeDisplayMode) ? u = (f) => ge(f) && f >= l[e.datetimeDisplayMode].min && f <= l[e.datetimeDisplayMode].max ? f : "N/A" : e.datetimeDisplayMode === "month_name" ? u = (f) => {
          const p = [...t.shortMonths], c = [...t.months];
          return ge(f) && f >= l[e.datetimeDisplayMode].min && f <= l[e.datetimeDisplayMode].max ? h(
            { shortNames: p, longNames: c },
            e.monthNameFormat,
            f - 1
          ) : "N/A";
        } : e.datetimeDisplayMode === "weekday_name" ? u = (f) => {
          const p = [...t.shortDays], c = [...t.days];
          return e.weekStart === "monday" && (p.push(p.shift() ?? ""), c.push(c.shift() ?? "")), ge(f) && f >= l[e.datetimeDisplayMode].min && f <= l[e.datetimeDisplayMode].max ? h(
            { shortNames: p, longNames: c },
            e.weekDayNameFormat,
            f - 1
          ) : "N/A";
        } : u = Ye(t).format(s);
      }
      n = (l) => {
        if (R(l))
          return "";
        const h = u(l);
        return lr(h) ? h.trim() : h;
      };
      break;
    }
    case "hierarchy": {
      n = (l) => ir(l, r ? r.locale : void 0);
      break;
    }
    default: {
      n = (l) => l;
      break;
    }
  }
  return n;
}
export {
  At as D,
  Lt as S,
  Vt as f
};
