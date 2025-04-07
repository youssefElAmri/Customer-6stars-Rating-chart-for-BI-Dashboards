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
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt = "lit-localize-status";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xo = (o) => typeof o != "string" && "strTag" in o, bo = (o, t, e) => {
  let r = o[0];
  for (let i = 1; i < o.length; i++)
    r += t[e ? e[i - 1] : i - 1], r += o[i];
  return r;
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zo = (o) => Xo(o) ? bo(o.strings, o.values) : o;
let Go = zo, _e = !1;
function Jo(o) {
  if (_e)
    throw new Error("lit-localize can only be configured once");
  Go = o, _e = !0;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Qo {
  constructor(t) {
    this.__litLocalizeEventHandler = (e) => {
      e.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = t;
  }
  hostConnected() {
    window.addEventListener(Qt, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(Qt, this.__litLocalizeEventHandler);
  }
}
const tr = (o) => o.addController(new Qo(o)), er = tr;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const An = () => (o, t) => (o.addInitializer(er), o);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yo {
  constructor() {
    this.settled = !1, this.promise = new Promise((t, e) => {
      this._resolve = t, this._reject = e;
    });
  }
  resolve(t) {
    this.settled = !0, this._resolve(t);
  }
  reject(t) {
    this.settled = !0, this._reject(t);
  }
}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */
const H = [];
for (let o = 0; o < 256; o++)
  H[o] = (o >> 4 & 15).toString(16) + (o & 15).toString(16);
function or(o) {
  let t = 0, e = 8997, r = 0, i = 33826, a = 0, n = 40164, s = 0, l = 52210;
  for (let c = 0; c < o.length; c++)
    e ^= o.charCodeAt(c), t = e * 435, r = i * 435, a = n * 435, s = l * 435, a += e << 8, s += i << 8, r += t >>> 16, e = t & 65535, a += r >>> 16, i = r & 65535, l = s + (a >>> 16) & 65535, n = a & 65535;
  return H[l >> 8] + H[l & 255] + H[n >> 8] + H[n & 255] + H[i >> 8] + H[i & 255] + H[e >> 8] + H[e & 255];
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rr = "", ir = "h", nr = "s";
function ar(o, t) {
  return (t ? ir : nr) + or(typeof o == "string" ? o : o.join(rr));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new Map();
function lr(o, t, e) {
  if (o) {
    const r = (e == null ? void 0 : e.id) ?? sr(t), i = o[r];
    if (i) {
      if (typeof i == "string")
        return i;
      if ("strTag" in i)
        return bo(
          i.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          t.values,
          i.values
        );
      {
        let a = Te.get(i);
        return a === void 0 && (a = i.values, Te.set(i, a)), {
          ...i,
          values: a.map((n) => t.values[n])
        };
      }
    }
  }
  return zo(t);
}
function sr(o) {
  const t = typeof o == "string" ? o : o.strings;
  let e = Ee.get(t);
  return e === void 0 && (e = ar(t, typeof o != "string" && !("strTag" in o)), Ee.set(t, e)), e;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function It(o) {
  window.dispatchEvent(new CustomEvent(Qt, { detail: o }));
}
let St = "", Vt, $o, Mt, te, Ao, B = new yo();
B.resolve();
let _t = 0;
const cr = (o) => (Jo((t, e) => lr(Ao, t, e)), St = $o = o.sourceLocale, Mt = new Set(o.targetLocales), Mt.add(o.sourceLocale), te = o.loadLocale, { getLocale: ur, setLocale: pr }), ur = () => St, pr = (o) => {
  if (o === (Vt ?? St))
    return B.promise;
  if (!Mt || !te)
    throw new Error("Internal error");
  if (!Mt.has(o))
    throw new Error("Invalid locale code");
  _t++;
  const t = _t;
  return Vt = o, B.settled && (B = new yo()), It({ status: "loading", loadingLocale: o }), (o === $o ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : te(o)).then((r) => {
    _t === t && (St = o, Vt = void 0, Ao = r.templates, It({ status: "ready", readyLocale: o }), B.resolve());
  }, (r) => {
    _t === t && (It({
      status: "error",
      errorLocale: o,
      errorMessage: r.toString()
    }), B.reject(r));
  }), B.promise;
};
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Et = globalThis, se = Et.ShadowRoot && (Et.ShadyCSS === void 0 || Et.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xo = Symbol(), we = /* @__PURE__ */ new WeakMap();
let dr = class {
  constructor(o, t, e) {
    if (this._$cssResult$ = !0, e !== xo) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = t;
  }
  get styleSheet() {
    let o = this.o;
    const t = this.t;
    if (se && o === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (o = we.get(t)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), e && we.set(t, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const ce = (o) => new dr(typeof o == "string" ? o : o + "", void 0, xo), hr = (o, t) => {
  if (se) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), i = Et.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = e.cssText, o.appendChild(r);
  }
}, Ce = se ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return ce(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mr, defineProperty: fr, getOwnPropertyDescriptor: vr, getOwnPropertyNames: gr, getOwnPropertySymbols: br, getPrototypeOf: zr } = Object, J = globalThis, Se = J.trustedTypes, yr = Se ? Se.emptyScript : "", Me = J.reactiveElementPolyfillSupport, ct = (o, t) => o, Pt = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? yr : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, ue = (o, t) => !mr(o, t), Pe = { attribute: !0, type: String, converter: Pt, reflect: !1, hasChanged: ue };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), J.litPropertyMetadata ?? (J.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Pe) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && fr(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: a } = vr(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const s = i == null ? void 0 : i.call(this);
      a.call(this, n), this.requestUpdate(t, s, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Pe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ct("elementProperties"))) return;
    const t = zr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ct("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ct("properties"))) {
      const e = this.properties, r = [...gr(e), ...br(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(Ce(i));
    } else t !== void 0 && e.push(Ce(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return hr(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var r;
    const i = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, i);
    if (a !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : Pt).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(a) : this.setAttribute(a, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r;
    const i = this.constructor, a = i._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const n = i.getPropertyOptions(a), s = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : Pt;
      this._$Em = a, this[a] = s.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? ue)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, n] of this._$Ep) this[a] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, n] of i) n.wrapped !== !0 || this._$AL.has(a) || this[a] === void 0 || this.P(a, this[a], n);
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (t = this._$EO) == null || t.forEach((i) => {
        var a;
        return (a = i.hostUpdate) == null ? void 0 : a.call(i);
      }), this.update(r)) : this._$EU();
    } catch (i) {
      throw e = !1, this._$EU(), i;
    }
    e && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ct("elementProperties")] = /* @__PURE__ */ new Map(), X[ct("finalized")] = /* @__PURE__ */ new Map(), Me == null || Me({ ReactiveElement: X }), (J.reactiveElementVersions ?? (J.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = globalThis, Lt = Ot.trustedTypes, Oe = Lt ? Lt.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, _o = "$lit$", R = `lit$${Math.random().toFixed(9).slice(2)}$`, To = "?" + R, $r = `<${To}>`, K = document, ft = () => K.createComment(""), vt = (o) => o === null || typeof o != "object" && typeof o != "function", pe = Array.isArray, Ar = (o) => pe(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", Zt = `[ 	
\f\r]`, at = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Le = /-->/g, ke = />/g, V = RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), He = /'/g, De = /"/g, Eo = /^(?:script|style|textarea|title)$/i, xr = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), kt = xr(1), Q = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), Ue = /* @__PURE__ */ new WeakMap(), W = K.createTreeWalker(K, 129);
function wo(o, t) {
  if (!pe(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Oe !== void 0 ? Oe.createHTML(t) : t;
}
const _r = (o, t) => {
  const e = o.length - 1, r = [];
  let i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = at;
  for (let s = 0; s < e; s++) {
    const l = o[s];
    let c, p, u = -1, h = 0;
    for (; h < l.length && (n.lastIndex = h, p = n.exec(l), p !== null); ) h = n.lastIndex, n === at ? p[1] === "!--" ? n = Le : p[1] !== void 0 ? n = ke : p[2] !== void 0 ? (Eo.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = V) : p[3] !== void 0 && (n = V) : n === V ? p[0] === ">" ? (n = i ?? at, u = -1) : p[1] === void 0 ? u = -2 : (u = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? V : p[3] === '"' ? De : He) : n === De || n === He ? n = V : n === Le || n === ke ? n = at : (n = V, i = void 0);
    const d = n === V && o[s + 1].startsWith("/>") ? " " : "";
    a += n === at ? l + $r : u >= 0 ? (r.push(c), l.slice(0, u) + _o + l.slice(u) + R + d) : l + R + (u === -2 ? s : d);
  }
  return [wo(o, a + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
let ee = class Co {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let a = 0, n = 0;
    const s = t.length - 1, l = this.parts, [c, p] = _r(t, e);
    if (this.el = Co.createElement(c, r), W.currentNode = this.el.content, e === 2 || e === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = W.nextNode()) !== null && l.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(_o)) {
          const h = p[n++], d = i.getAttribute(u).split(R), m = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: a, name: m[2], strings: d, ctor: m[1] === "." ? Er : m[1] === "?" ? wr : m[1] === "@" ? Cr : Ut }), i.removeAttribute(u);
        } else u.startsWith(R) && (l.push({ type: 6, index: a }), i.removeAttribute(u));
        if (Eo.test(i.tagName)) {
          const u = i.textContent.split(R), h = u.length - 1;
          if (h > 0) {
            i.textContent = Lt ? Lt.emptyScript : "";
            for (let d = 0; d < h; d++) i.append(u[d], ft()), W.nextNode(), l.push({ type: 2, index: ++a });
            i.append(u[h], ft());
          }
        }
      } else if (i.nodeType === 8) if (i.data === To) l.push({ type: 2, index: a });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(R, u + 1)) !== -1; ) l.push({ type: 7, index: a }), u += R.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const r = K.createElement("template");
    return r.innerHTML = t, r;
  }
};
function tt(o, t, e = o, r) {
  var i, a;
  if (t === Q) return t;
  let n = r !== void 0 ? (i = e._$Co) == null ? void 0 : i[r] : e._$Cl;
  const s = vt(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== s && ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1), s === void 0 ? n = void 0 : (n = new s(o), n._$AT(o, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = n : e._$Cl = n), n !== void 0 && (t = tt(o, n._$AS(o, t.values), n, r)), t;
}
class Tr {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? K).importNode(e, !0);
    W.currentNode = i;
    let a = W.nextNode(), n = 0, s = 0, l = r[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new de(a, a.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(a, l.name, l.strings, this, t) : l.type === 6 && (c = new Sr(a, this, t)), this._$AV.push(c), l = r[++s];
      }
      n !== (l == null ? void 0 : l.index) && (a = W.nextNode(), n++);
    }
    return W.currentNode = K, i;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
let de = class So {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = tt(this, t, e), vt(t) ? t === x || t == null || t === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ar(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== x && vt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(K.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: r, _$litType$: i } = t, a = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = ee.createElement(wo(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) == null ? void 0 : e._$AD) === a) this._$AH.p(r);
    else {
      const n = new Tr(a, this), s = n.u(this.options);
      n.p(r), this.T(s), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Ue.get(t.strings);
    return e === void 0 && Ue.set(t.strings, e = new ee(t)), e;
  }
  k(t) {
    pe(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, i = 0;
    for (const a of t) i === e.length ? e.push(r = new So(this.O(ft()), this.O(ft()), this, this.options)) : r = e[i], r._$AI(a), i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}, Ut = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, a) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = a, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = x;
  }
  _$AI(t, e = this, r, i) {
    const a = this.strings;
    let n = !1;
    if (a === void 0) t = tt(this, t, e, 0), n = !vt(t) || t !== this._$AH && t !== Q, n && (this._$AH = t);
    else {
      const s = t;
      let l, c;
      for (t = a[0], l = 0; l < a.length - 1; l++) c = tt(this, s[r + l], e, l), c === Q && (c = this._$AH[l]), n || (n = !vt(c) || c !== this._$AH[l]), c === x ? t = x : t !== x && (t += (c ?? "") + a[l + 1]), this._$AH[l] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
};
class Er extends Ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === x ? void 0 : t;
  }
}
class wr extends Ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== x);
  }
}
class Cr extends Ut {
  constructor(t, e, r, i, a) {
    super(t, e, r, i, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = tt(this, t, e, 0) ?? x) === Q) return;
    const r = this._$AH, i = t === x && r !== x || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, a = t !== x && (r === x || i);
    i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Sr {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    tt(this, t);
  }
}
const je = Ot.litHtmlPolyfillSupport;
je == null || je(ee, de), (Ot.litHtmlVersions ?? (Ot.litHtmlVersions = [])).push("3.2.1");
const Mr = (o, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const a = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = i = new de(t.insertBefore(ft(), a), a, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ut = class extends X {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Mr(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Q;
  }
};
var Re;
ut._$litElement$ = !0, ut.finalized = !0, (Re = globalThis.litElementHydrateSupport) == null || Re.call(globalThis, { LitElement: ut });
const Ne = globalThis.litElementPolyfillSupport;
Ne == null || Ne({ LitElement: ut });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pr = { attribute: !0, type: String, converter: Pt, reflect: !1, hasChanged: ue }, Or = (o = Pr, t, e) => {
  const { kind: r, metadata: i } = e;
  let a = globalThis.litPropertyMetadata.get(i);
  if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), a.set(e.name, o), r === "accessor") {
    const { name: n } = e;
    return { set(s) {
      const l = t.get.call(this);
      t.set.call(this, s), this.requestUpdate(n, l, o);
    }, init(s) {
      return s !== void 0 && this.P(n, void 0, o), s;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(s) {
      const l = this[n];
      t.call(this, s), this.requestUpdate(n, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function T(o) {
  return (t, e) => typeof e == "object" ? Or(o, t, e) : ((r, i, a) => {
    const n = i.hasOwnProperty(a);
    return i.constructor.createProperty(a, n ? { ...r, wrapped: !0 } : r), n ? Object.getOwnPropertyDescriptor(i, a) : void 0;
  })(o, t, e);
}
const oe = /* @__PURE__ */ new Set(), Lr = () => {
  const o = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
  oe.forEach((t) => {
    t.setAttribute("dir", o);
  });
}, kr = new MutationObserver(Lr);
kr.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir"]
});
const Hr = (o) => o.startManagingContentDirection !== void 0 || o.tagName === "LUZMO-THEME";
function Dr(o) {
  class t extends o {
    /**
     * @private
     */
    get isLTR() {
      return this.dir === "ltr";
    }
    hasVisibleFocusInTree() {
      const r = ((i = document) => {
        var a;
        let n = i.activeElement;
        for (; n != null && n.shadowRoot && n.shadowRoot.activeElement; )
          n = n.shadowRoot.activeElement;
        const s = n ? [n] : [];
        for (; n; ) {
          const l = n.assignedSlot || n.parentElement || ((a = n.getRootNode()) == null ? void 0 : a.host);
          l && s.push(l), n = l;
        }
        return s;
      })(this.getRootNode())[0];
      if (!r)
        return !1;
      try {
        return r.matches(":focus-visible") || r.matches(".focus-visible");
      } catch {
        return r.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let r = this.assignedSlot || this.parentNode;
        for (; r !== document.documentElement && !Hr(r); )
          r = r.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          r.parentNode || // DOM Element detected
          r.host;
        if (this.dir = r.dir === "rtl" ? r.dir : this.dir || "ltr", r === document.documentElement)
          oe.add(this);
        else {
          const { localName: i } = r;
          i.search("-") > -1 && !customElements.get(i) ? customElements.whenDefined(i).then(() => {
            r.startManagingContentDirection(this);
          }) : r.startManagingContentDirection(this);
        }
        this._dirParent = r;
      }
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._dirParent && (this._dirParent === document.documentElement ? oe.delete(this) : this._dirParent.stopManagingContentDirection(this), this.removeAttribute("dir"));
    }
  }
  return t;
}
class he extends Dr(ut) {
}
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
let re = !0;
try {
  document.body.querySelector(":focus-visible");
} catch {
  re = !1, Promise.resolve().then(() => Ur);
}
const Mo = (o) => {
  var t, e;
  const r = (n) => {
    if (n.shadowRoot == null || Object.hasOwn(n.dataset, "jsFocusVisible"))
      return () => {
      };
    if (self.applyFocusVisiblePolyfill)
      self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
    else {
      const s = () => {
        self.applyFocusVisiblePolyfill && n.shadowRoot && self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
      };
      return self.addEventListener(
        "focus-visible-polyfill-ready",
        s,
        { once: !0 }
      ), () => {
        self.removeEventListener(
          "focus-visible-polyfill-ready",
          s
        );
      };
    }
    return () => {
    };
  }, i = Symbol("endPolyfillCoordination");
  class a extends (e = o, t = i, e) {
    constructor() {
      super(...arguments), this[t] = null;
    }
    // Attempt to coordinate with the polyfill when connected to the
    // document:
    connectedCallback() {
      super.connectedCallback && super.connectedCallback(), re || requestAnimationFrame(() => {
        this[i] == null && (this[i] = r(this));
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), re || requestAnimationFrame(() => {
        this[i] != null && (this[i](), this[i] = null);
      });
    }
  }
  return a;
}, Ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusVisiblePolyfillMixin: Mo
}, Symbol.toStringTag, { value: "Module" }));
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
var jr = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, me = (o, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? Rr(t, e) : t, a = o.length - 1, n; a >= 0; a--)
    (n = o[a]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && jr(t, e, i), i;
};
function Ie() {
  return new Promise((o) => requestAnimationFrame(() => o()));
}
let fe = class extends Mo(he) {
  constructor() {
    super(...arguments), this.disabled = !1, this.autofocus = !1, this._tabIndex = 0, this.manipulatingTabindex = !1, this.autofocusReady = Promise.resolve();
  }
  get tabIndex() {
    if (this.focusElement === this) {
      const e = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : Number.NaN;
      return Number.isNaN(e) ? -1 : e;
    }
    const t = Number.parseFloat(
      this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0"
    );
    return this.disabled || t < 0 ? -1 : this.focusElement ? this._tabIndex : t;
  }
  set tabIndex(t) {
    var e;
    if (this.manipulatingTabindex) {
      this.manipulatingTabindex = !1;
      return;
    }
    if (this.focusElement === this) {
      if (this.disabled)
        this._tabIndex = t;
      else if (t !== this._tabIndex) {
        this._tabIndex = t;
        const r = "" + t;
        this.manipulatingTabindex = !0, this.setAttribute("tabindex", r);
      }
      return;
    }
    if (t === -1 ? this.addEventListener(
      "pointerdown",
      this.onPointerdownManagementOfTabIndex
    ) : (this.manipulatingTabindex = !0, this.removeEventListener(
      "pointerdown",
      this.onPointerdownManagementOfTabIndex
    )), t === -1 || this.disabled) {
      if (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement)
        return;
      t === -1 ? (e = this.focusElement) == null || e.removeAttribute("tabindex") : (this._tabIndex = t, this.manageFocusElementTabindex(t));
      return;
    }
    this.setAttribute("focusable", ""), this.hasAttribute("tabindex") ? this.removeAttribute("tabindex") : this.manipulatingTabindex = !1, this._tabIndex = t, this.manageFocusElementTabindex(t);
  }
  onPointerdownManagementOfTabIndex() {
    this.tabIndex === -1 && setTimeout(() => {
      this.tabIndex = 0, this.focus({ preventScroll: !0 }), this.tabIndex = -1;
    });
  }
  async manageFocusElementTabindex(t) {
    this.focusElement || await this.updateComplete, t === null ? this.focusElement.removeAttribute("tabindex") : this.focusElement !== this && (this.focusElement.tabIndex = t);
  }
  /**
   * @private
   */
  get focusElement() {
    throw new Error("Must implement focusElement getter!");
  }
  /**
   * @public
   * @returns whether the component should manage its focusElement tab-index or not
   * Needed for action-menu to be supported in action-group in an accessible way
   */
  get selfManageFocusElement() {
    return !1;
  }
  focus(t) {
    this.disabled || !this.focusElement || (this.focusElement === this ? Reflect.apply(HTMLElement.prototype.focus, this, [t]) : this.focusElement.focus(t));
  }
  blur() {
    const t = this.focusElement || this;
    t === this ? HTMLElement.prototype.blur.apply(this) : t.blur();
  }
  click() {
    if (this.disabled)
      return;
    const t = this.focusElement || this;
    t === this ? HTMLElement.prototype.click.apply(this) : t.click();
  }
  manageAutoFocus() {
    this.autofocus && (this.dispatchEvent(
      new KeyboardEvent("keydown", {
        code: "Tab"
      })
    ), this.focusElement.focus());
  }
  firstUpdated(t) {
    super.firstUpdated(t), (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") && this.setAttribute("focusable", "");
  }
  update(t) {
    t.has("disabled") && this.handleDisabledChanged(
      this.disabled,
      t.get("disabled")
    ), super.update(t);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.blur();
  }
  async handleDisabledChanged(t, e) {
    const r = () => this.focusElement !== this && this.focusElement.disabled !== void 0;
    t ? (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), await this.updateComplete, r() ? this.focusElement.disabled = !0 : this.setAttribute("aria-disabled", "true")) : e && (this.manipulatingTabindex = !0, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, r() ? this.focusElement.disabled = !1 : this.removeAttribute("aria-disabled"));
  }
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.autofocusReady, t;
  }
  connectedCallback() {
    super.connectedCallback(), this.autofocus && (this.autofocusReady = new Promise(async (t) => {
      await Ie(), await Ie(), t();
    }), this.updateComplete.then(() => {
      this.manageAutoFocus();
    }));
  }
};
me([
  T({ type: Boolean, reflect: !0 })
], fe.prototype, "disabled", 2);
me([
  T({ type: Boolean })
], fe.prototype, "autofocus", 2);
me([
  T({ type: Number })
], fe.prototype, "tabIndex", 1);
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
var Nr = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, Vr = (o, t, e, r) => {
  for (var i = Ir(t, e), a = o.length - 1, n; a >= 0; a--)
    (n = o[a]) && (i = n(t, e, i) || i);
  return i && Nr(t, e, i), i;
};
const wn = {
  xxs: "xxs",
  xs: "xs",
  s: "s",
  m: "m",
  l: "l",
  xl: "xl",
  xxl: "xxl"
};
function Zr(o, {
  validSizes: t = ["s", "m", "l", "xl"],
  noDefaultSize: e,
  defaultSize: r = "m"
} = {}) {
  class i extends o {
    constructor() {
      super(...arguments), this._size = r;
    }
    get size() {
      return this._size || r;
    }
    set size(n) {
      const s = e ? null : r, l = n && n.toLocaleLowerCase(), c = t.includes(l) ? l : s;
      if (c && this.setAttribute("size", c), this._size === c)
        return;
      const p = this._size;
      this._size = c, this.requestUpdate("size", p);
    }
    update(n) {
      !this.hasAttribute("size") && !e && this.setAttribute("size", this.size), super.update(n);
    }
  }
  return Vr([
    T({ type: String })
  ], i.prototype, "size"), i;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt = globalThis, ve = wt.ShadowRoot && (wt.ShadyCSS === void 0 || wt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Po = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let Fr = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== Po) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ve && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Ve.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Ve.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Br = (o) => new Fr(typeof o == "string" ? o : o + "", void 0, Po), Wr = (o, t) => {
  if (ve) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), i = wt.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = e.cssText, o.appendChild(r);
  }
}, Ze = ve ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Br(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qr, defineProperty: Kr, getOwnPropertyDescriptor: Yr, getOwnPropertyNames: Xr, getOwnPropertySymbols: Gr, getPrototypeOf: Jr } = Object, I = globalThis, Fe = I.trustedTypes, Qr = Fe ? Fe.emptyScript : "", Ft = I.reactiveElementPolyfillSupport, pt = (o, t) => o, Ht = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? Qr : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, ge = (o, t) => !qr(o, t), Be = { attribute: !0, type: String, converter: Ht, reflect: !1, hasChanged: ge };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let G = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Be) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && Kr(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: a } = Yr(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const s = i == null ? void 0 : i.call(this);
      a.call(this, n), this.requestUpdate(t, s, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Be;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pt("elementProperties"))) return;
    const t = Jr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(pt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
      const e = this.properties, r = [...Xr(e), ...Gr(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(Ze(i));
    } else t !== void 0 && e.push(Ze(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wr(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var a;
    const r = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const n = (((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0 ? r.converter : Ht).toAttribute(e, r.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var a;
    const r = this.constructor, i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const n = r.getPropertyOptions(i), s = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((a = n.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? n.converter : Ht;
      this._$Em = i, this[i] = s.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? ge)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, n] of this._$Ep) this[a] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, n] of i) n.wrapped !== !0 || this._$AL.has(a) || this[a] === void 0 || this.P(a, this[a], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((i) => {
        var a;
        return (a = i.hostUpdate) == null ? void 0 : a.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[pt("elementProperties")] = /* @__PURE__ */ new Map(), G[pt("finalized")] = /* @__PURE__ */ new Map(), Ft == null || Ft({ ReactiveElement: G }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, Dt = dt.trustedTypes, We = Dt ? Dt.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Oo = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, Lo = "?" + N, ti = `<${Lo}>`, Y = document, gt = () => Y.createComment(""), bt = (o) => o === null || typeof o != "object" && typeof o != "function", be = Array.isArray, ei = (o) => be(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", Bt = `[ 	
\f\r]`, lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qe = /-->/g, Ke = />/g, Z = RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ye = /'/g, Xe = /"/g, ko = /^(?:script|style|textarea|title)$/i, Ho = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), Mn = Ho(1), Ge = Ho(2), et = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), Je = /* @__PURE__ */ new WeakMap(), q = Y.createTreeWalker(Y, 129);
function Do(o, t) {
  if (!be(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return We !== void 0 ? We.createHTML(t) : t;
}
const oi = (o, t) => {
  const e = o.length - 1, r = [];
  let i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = lt;
  for (let s = 0; s < e; s++) {
    const l = o[s];
    let c, p, u = -1, h = 0;
    for (; h < l.length && (n.lastIndex = h, p = n.exec(l), p !== null); ) h = n.lastIndex, n === lt ? p[1] === "!--" ? n = qe : p[1] !== void 0 ? n = Ke : p[2] !== void 0 ? (ko.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = Z) : p[3] !== void 0 && (n = Z) : n === Z ? p[0] === ">" ? (n = i ?? lt, u = -1) : p[1] === void 0 ? u = -2 : (u = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? Z : p[3] === '"' ? Xe : Ye) : n === Xe || n === Ye ? n = Z : n === qe || n === Ke ? n = lt : (n = Z, i = void 0);
    const d = n === Z && o[s + 1].startsWith("/>") ? " " : "";
    a += n === lt ? l + ti : u >= 0 ? (r.push(c), l.slice(0, u) + Oo + l.slice(u) + N + d) : l + N + (u === -2 ? s : d);
  }
  return [Do(o, a + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class zt {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let a = 0, n = 0;
    const s = t.length - 1, l = this.parts, [c, p] = oi(t, e);
    if (this.el = zt.createElement(c, r), q.currentNode = this.el.content, e === 2 || e === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = q.nextNode()) !== null && l.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(Oo)) {
          const h = p[n++], d = i.getAttribute(u).split(N), m = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: a, name: m[2], strings: d, ctor: m[1] === "." ? ii : m[1] === "?" ? ni : m[1] === "@" ? ai : jt }), i.removeAttribute(u);
        } else u.startsWith(N) && (l.push({ type: 6, index: a }), i.removeAttribute(u));
        if (ko.test(i.tagName)) {
          const u = i.textContent.split(N), h = u.length - 1;
          if (h > 0) {
            i.textContent = Dt ? Dt.emptyScript : "";
            for (let d = 0; d < h; d++) i.append(u[d], gt()), q.nextNode(), l.push({ type: 2, index: ++a });
            i.append(u[h], gt());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Lo) l.push({ type: 2, index: a });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(N, u + 1)) !== -1; ) l.push({ type: 7, index: a }), u += N.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const r = Y.createElement("template");
    return r.innerHTML = t, r;
  }
}
function ot(o, t, e = o, r) {
  var n, s;
  if (t === et) return t;
  let i = r !== void 0 ? (n = e._$Co) == null ? void 0 : n[r] : e._$Cl;
  const a = bt(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== a && ((s = i == null ? void 0 : i._$AO) == null || s.call(i, !1), a === void 0 ? i = void 0 : (i = new a(o), i._$AT(o, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = i : e._$Cl = i), i !== void 0 && (t = ot(o, i._$AS(o, t.values), i, r)), t;
}
class ri {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? Y).importNode(e, !0);
    q.currentNode = i;
    let a = q.nextNode(), n = 0, s = 0, l = r[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new At(a, a.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(a, l.name, l.strings, this, t) : l.type === 6 && (c = new li(a, this, t)), this._$AV.push(c), l = r[++s];
      }
      n !== (l == null ? void 0 : l.index) && (a = q.nextNode(), n++);
    }
    return q.currentNode = Y, i;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class At {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = ot(this, t, e), bt(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== et && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ei(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== _ && bt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var a;
    const { values: e, _$litType$: r } = t, i = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = zt.createElement(Do(r.h, r.h[0]), this.options)), r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === i) this._$AH.p(e);
    else {
      const n = new ri(i, this), s = n.u(this.options);
      n.p(e), this.T(s), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Je.get(t.strings);
    return e === void 0 && Je.set(t.strings, e = new zt(t)), e;
  }
  k(t) {
    be(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, i = 0;
    for (const a of t) i === e.length ? e.push(r = new At(this.O(gt()), this.O(gt()), this, this.options)) : r = e[i], r._$AI(a), i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
let jt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, a) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = a, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = _;
  }
  _$AI(t, e = this, r, i) {
    const a = this.strings;
    let n = !1;
    if (a === void 0) t = ot(this, t, e, 0), n = !bt(t) || t !== this._$AH && t !== et, n && (this._$AH = t);
    else {
      const s = t;
      let l, c;
      for (t = a[0], l = 0; l < a.length - 1; l++) c = ot(this, s[r + l], e, l), c === et && (c = this._$AH[l]), n || (n = !bt(c) || c !== this._$AH[l]), c === _ ? t = _ : t !== _ && (t += (c ?? "") + a[l + 1]), this._$AH[l] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
};
class ii extends jt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
let ni = class extends jt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
};
class ai extends jt {
  constructor(t, e, r, i, a) {
    super(t, e, r, i, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = ot(this, t, e, 0) ?? _) === et) return;
    const r = this._$AH, i = t === _ && r !== _ || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, a = t !== _ && (r === _ || i);
    i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class li {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    ot(this, t);
  }
}
const Wt = dt.litHtmlPolyfillSupport;
Wt == null || Wt(zt, At), (dt.litHtmlVersions ?? (dt.litHtmlVersions = [])).push("3.2.1");
const si = (o, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const a = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = i = new At(t.insertBefore(gt(), a), a, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ct = class extends G {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = si(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return et;
  }
};
var go;
Ct._$litElement$ = !0, Ct.finalized = !0, (go = globalThis.litElementHydrateSupport) == null || go.call(globalThis, { LitElement: Ct });
const qt = globalThis.litElementPolyfillSupport;
qt == null || qt({ LitElement: Ct });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ci = { attribute: !0, type: String, converter: Ht, reflect: !1, hasChanged: ge }, ui = (o = ci, t, e) => {
  const { kind: r, metadata: i } = e;
  let a = globalThis.litPropertyMetadata.get(i);
  if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), a.set(e.name, o), r === "accessor") {
    const { name: n } = e;
    return { set(s) {
      const l = t.get.call(this);
      t.set.call(this, s), this.requestUpdate(n, l, o);
    }, init(s) {
      return s !== void 0 && this.P(n, void 0, o), s;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(s) {
      const l = this[n];
      t.call(this, s), this.requestUpdate(n, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function kn(o) {
  return (t, e) => typeof e == "object" ? ui(o, t, e) : ((r, i, a) => {
    const n = i.hasOwnProperty(a);
    return i.constructor.createProperty(a, n ? { ...r, wrapped: !0 } : r), n ? Object.getOwnPropertyDescriptor(i, a) : void 0;
  })(o, t, e);
}
const pi = (o, t, e) => {
  const r = o[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((i, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      a.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + t + (t.split("/").length !== e ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, di = "en", hi = [
  "de",
  "es",
  "fr",
  "nl"
], { setLocale: Hn } = cr({
  sourceLocale: di,
  targetLocales: hi,
  loadLocale: (o) => pi(/* @__PURE__ */ Object.assign({ "../../generated/locales/de.ts": () => import("./de-BaTUIQk1.js"), "../../generated/locales/es.ts": () => import("./es-D37mTCZB.js"), "../../generated/locales/fr.ts": () => import("./fr-BWJHvkss.js"), "../../generated/locales/nl.ts": () => import("./nl-CWxJcTNT.js") }), `../../generated/locales/${o}.ts`, 5)
});
function mi(o) {
  if (Array.isArray(o)) return o;
}
function fi(o, t) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var r, i, a, n, s = [], l = !0, c = !1;
    try {
      if (a = (e = e.call(o)).next, t !== 0) for (; !(l = (r = a.call(e)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (p) {
      c = !0, i = p;
    } finally {
      try {
        if (!l && e.return != null && (n = e.return(), Object(n) !== n)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function ie(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, r = Array(t); e < t; e++) r[e] = o[e];
  return r;
}
function Uo(o, t) {
  if (o) {
    if (typeof o == "string") return ie(o, t);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ie(o, t) : void 0;
  }
}
function vi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(o, t) {
  return mi(o) || fi(o, t) || Uo(o, t) || vi();
}
var Kt = {}, st = {}, Qe;
function Ro() {
  if (Qe) return st;
  Qe = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.bind = void 0;
  function o(t, e) {
    var r = e.type, i = e.listener, a = e.options;
    return t.addEventListener(r, i, a), function() {
      t.removeEventListener(r, i, a);
    };
  }
  return st.bind = o, st;
}
var F = {}, to;
function gi() {
  if (to) return F;
  to = 1;
  var o = F && F.__assign || function() {
    return o = Object.assign || function(a) {
      for (var n, s = 1, l = arguments.length; s < l; s++) {
        n = arguments[s];
        for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (a[c] = n[c]);
      }
      return a;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(F, "__esModule", { value: !0 }), F.bindAll = void 0;
  var t = /* @__PURE__ */ Ro();
  function e(a) {
    if (!(typeof a > "u"))
      return typeof a == "boolean" ? {
        capture: a
      } : a;
  }
  function r(a, n) {
    if (n == null)
      return a;
    var s = o(o({}, a), { options: o(o({}, e(n)), e(a.options)) });
    return s;
  }
  function i(a, n, s) {
    var l = n.map(function(c) {
      var p = r(c, s);
      return (0, t.bind)(a, p);
    });
    return function() {
      l.forEach(function(p) {
        return p();
      });
    };
  }
  return F.bindAll = i, F;
}
var eo;
function bi() {
  return eo || (eo = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.bindAll = o.bind = void 0;
    var t = /* @__PURE__ */ Ro();
    Object.defineProperty(o, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var e = /* @__PURE__ */ gi();
    Object.defineProperty(o, "bindAll", { enumerable: !0, get: function() {
      return e.bindAll;
    } });
  }(Kt)), Kt;
}
var rt = /* @__PURE__ */ bi();
function yt(o) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yt(o);
}
function zi(o, t) {
  if (yt(o) != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(o, t);
    if (yt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(o);
}
function yi(o) {
  var t = zi(o, "string");
  return yt(t) == "symbol" ? t : t + "";
}
function ze(o, t, e) {
  return (t = yi(t)) in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
var No = 2147483647, Io = "data-pdnd-honey-pot";
function oo(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function ro(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oo(Object(e), !0).forEach(function(r) {
      ze(o, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : oo(Object(e)).forEach(function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return o;
}
var $t = 2, io = $t / 2;
function $i(o) {
  return {
    x: Math.floor(o.x),
    y: Math.floor(o.y)
  };
}
function Ai(o) {
  return {
    x: o.x - io,
    y: o.y - io
  };
}
function xi(o) {
  return {
    x: Math.max(o.x, 0),
    y: Math.max(o.y, 0)
  };
}
function _i(o) {
  return {
    x: Math.min(o.x, window.innerWidth - $t),
    y: Math.min(o.y, window.innerHeight - $t)
  };
}
function no(o) {
  var t = o.client, e = _i(xi(Ai($i(t))));
  return DOMRect.fromRect({
    x: e.x,
    y: e.y,
    width: $t,
    height: $t
  });
}
function ao(o) {
  var t = o.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function Ti(o) {
  var t = o.client, e = o.clientRect;
  return (
    // is within horizontal bounds
    t.x >= e.x && t.x <= e.x + e.width && // is within vertical bounds
    t.y >= e.y && t.y <= e.y + e.height
  );
}
function Ei(o) {
  var t = o.initial, e = document.createElement("div");
  e.setAttribute(Io, "true");
  var r = no({
    client: t
  });
  Object.assign(e.style, ro(ro({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, ao({
    clientRect: r
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: No
  })), document.body.appendChild(e);
  var i = rt.bind(window, {
    type: "pointermove",
    listener: function(n) {
      var s = {
        x: n.clientX,
        y: n.clientY
      };
      r = no({
        client: s
      }), Object.assign(e.style, ao({
        clientRect: r
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(n) {
    var s = n.current;
    if (i(), Ti({
      client: s,
      clientRect: r
    })) {
      e.remove();
      return;
    }
    function l() {
      c(), e.remove();
    }
    var c = rt.bindAll(window, [
      {
        type: "pointerdown",
        listener: l
      },
      {
        type: "pointermove",
        listener: l
      },
      {
        type: "focusin",
        listener: l
      },
      {
        type: "focusout",
        listener: l
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: l
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: l
      },
      {
        type: "dragover",
        listener: l
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function wi() {
  var o = null;
  function t() {
    return o = null, rt.bind(window, {
      type: "pointermove",
      listener: function(i) {
        o = {
          x: i.clientX,
          y: i.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function e() {
    var r = null;
    return function(a) {
      var n = a.eventName, s = a.payload;
      if (n === "onDragStart") {
        var l, c = s.location.initial.input, p = (l = o) !== null && l !== void 0 ? l : {
          x: c.clientX,
          y: c.clientY
        };
        r = Ei({
          initial: p
        });
      }
      if (n === "onDrop") {
        var u, h = s.location.current.input;
        (u = r) === null || u === void 0 || u({
          current: {
            x: h.clientX,
            y: h.clientY
          }
        }), r = null, o = null;
      }
    };
  }
  return {
    bindEvents: t,
    getOnPostDispatch: e
  };
}
function Ci(o) {
  if (Array.isArray(o)) return ie(o);
}
function Si(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Mi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vo(o) {
  return Ci(o) || Si(o) || Uo(o) || Mi();
}
function Zo(o) {
  return o instanceof Element && o.hasAttribute(Io);
}
function Pi(o) {
  var t = document.elementsFromPoint(o.x, o.y), e = jo(t, 2), r = e[0], i = e[1];
  return r ? Zo(r) ? i ?? null : r : null;
}
function ye(o) {
  var t = null;
  return function() {
    if (!t) {
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      var n = o.apply(this, i);
      t = {
        result: n
      };
    }
    return t.result;
  };
}
var Oi = ye(function() {
  return navigator.userAgent.includes("Firefox");
}), Rt = ye(function() {
  var t = navigator, e = t.userAgent;
  return e.includes("AppleWebKit") && !e.includes("Chrome");
}), ne = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function Li(o) {
  var t = o.dragLeave;
  return Rt() ? t.hasOwnProperty(ne.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || !Rt())
    return;
  function t() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var e = t();
  function r() {
    e = t();
  }
  rt.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        e.enterCount = 0, e.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: r
    }, {
      type: "dragend",
      listener: r
    }, {
      type: "dragenter",
      listener: function(a) {
        !e.isOverWindow && e.enterCount === 0 && (a[ne.isEnteringWindow] = !0), e.isOverWindow = !0, e.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(a) {
        e.enterCount--, e.isOverWindow && e.enterCount === 0 && (a[ne.isLeavingWindow] = !0, e.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function ki(o) {
  return "nodeName" in o;
}
function Hi(o) {
  return ki(o) && o.ownerDocument !== document;
}
function Di(o) {
  var t = o.dragLeave, e = t.type, r = t.relatedTarget;
  return e !== "dragleave" ? !1 : Rt() ? Li({
    dragLeave: t
  }) : r == null ? !0 : Oi() ? Hi(r) : r instanceof HTMLIFrameElement;
}
function Ui(o) {
  var t = o.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ function() {
        var e = 0;
        return function() {
          if (e < 20) {
            e++;
            return;
          }
          t();
        };
      }()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: t
    }
  ];
}
function ht(o) {
  return {
    altKey: o.altKey,
    button: o.button,
    buttons: o.buttons,
    ctrlKey: o.ctrlKey,
    metaKey: o.metaKey,
    shiftKey: o.shiftKey,
    clientX: o.clientX,
    clientY: o.clientY,
    pageX: o.pageX,
    pageY: o.pageY
  };
}
var ji = function(t) {
  var e = [], r = null, i = function() {
    for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++)
      s[l] = arguments[l];
    e = s, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, e);
    }));
  };
  return i.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, i;
}, Yt = ji(function(o) {
  return o();
}), Tt = /* @__PURE__ */ function() {
  var o = null;
  function t(r) {
    var i = requestAnimationFrame(function() {
      o = null, r();
    });
    o = {
      frameId: i,
      fn: r
    };
  }
  function e() {
    o && (cancelAnimationFrame(o.frameId), o.fn(), o = null);
  }
  return {
    schedule: t,
    flush: e
  };
}();
function Ri(o) {
  var t = o.source, e = o.initial, r = o.dispatchEvent, i = {
    dropTargets: []
  };
  function a(s) {
    r(s), i = {
      dropTargets: s.payload.location.current.dropTargets
    };
  }
  var n = {
    start: function(l) {
      var c = l.nativeSetDragImage, p = {
        current: e,
        previous: i,
        initial: e
      };
      a({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: p,
          nativeSetDragImage: c
        }
      }), Tt.schedule(function() {
        a({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: p
          }
        });
      });
    },
    dragUpdate: function(l) {
      var c = l.current;
      Tt.flush(), Yt.cancel(), a({
        eventName: "onDropTargetChange",
        payload: {
          source: t,
          location: {
            initial: e,
            previous: i,
            current: c
          }
        }
      });
    },
    drag: function(l) {
      var c = l.current;
      Yt(function() {
        Tt.flush();
        var p = {
          initial: e,
          previous: i,
          current: c
        };
        a({
          eventName: "onDrag",
          payload: {
            source: t,
            location: p
          }
        });
      });
    },
    drop: function(l) {
      var c = l.current, p = l.updatedSourcePayload;
      Tt.flush(), Yt.cancel(), a({
        eventName: "onDrop",
        payload: {
          source: p ?? t,
          location: {
            current: c,
            previous: i,
            initial: e
          }
        }
      });
    }
  };
  return n;
}
var ae = {
  isActive: !1
};
function Fo() {
  return !ae.isActive;
}
function Ni(o) {
  return o.dataTransfer ? o.dataTransfer.setDragImage.bind(o.dataTransfer) : null;
}
function Ii(o) {
  var t = o.current, e = o.next;
  if (t.length !== e.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r].element !== e[r].element)
      return !0;
  return !1;
}
function Vi(o) {
  var t = o.event, e = o.dragType, r = o.getDropTargetsOver, i = o.dispatchEvent;
  if (!Fo())
    return;
  var a = Zi({
    event: t,
    dragType: e,
    getDropTargetsOver: r
  });
  ae.isActive = !0;
  var n = {
    current: a
  };
  Xt({
    event: t,
    current: a.dropTargets
  });
  var s = Ri({
    source: e.payload,
    dispatchEvent: i,
    initial: a
  });
  function l(d) {
    var m = Ii({
      current: n.current.dropTargets,
      next: d.dropTargets
    });
    n.current = d, m && s.dragUpdate({
      current: n.current
    });
  }
  function c(d) {
    var m = ht(d), f = Zo(d.target) ? Pi({
      x: m.clientX,
      y: m.clientY
    }) : d.target, v = r({
      target: f,
      event: d,
      input: m,
      source: e.payload,
      current: n.current.dropTargets
    });
    v.length && (d.preventDefault(), Xt({
      event: d,
      current: v
    })), l({
      dropTargets: v,
      input: m
    });
  }
  function p() {
    n.current.dropTargets.length && l({
      dropTargets: [],
      input: n.current.input
    }), s.drop({
      current: n.current,
      updatedSourcePayload: null
    }), u();
  }
  function u() {
    ae.isActive = !1, h();
  }
  var h = rt.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(m) {
        c(m), s.drag({
          current: n.current
        });
      }
    }, {
      type: "dragenter",
      listener: c
    }, {
      type: "dragleave",
      listener: function(m) {
        Di({
          dragLeave: m
        }) && (l({
          input: n.current.input,
          dropTargets: []
        }), e.startedFrom === "external" && p());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(m) {
        if (n.current = {
          dropTargets: n.current.dropTargets,
          input: ht(m)
        }, !n.current.dropTargets.length) {
          p();
          return;
        }
        m.preventDefault(), Xt({
          event: m,
          current: n.current.dropTargets
        }), s.drop({
          current: n.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: e.type === "external" ? e.getDropPayload(m) : null
        }), u();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(m) {
        n.current = {
          dropTargets: n.current.dropTargets,
          input: ht(m)
        }, p();
      }
    }].concat(Vo(Ui({
      onDragEnd: p
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  s.start({
    nativeSetDragImage: Ni(t)
  });
}
function Xt(o) {
  var t, e = o.event, r = o.current, i = (t = r[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  i != null && e.dataTransfer && (e.dataTransfer.dropEffect = i);
}
function Zi(o) {
  var t = o.event, e = o.dragType, r = o.getDropTargetsOver, i = ht(t);
  if (e.startedFrom === "external")
    return {
      input: i,
      dropTargets: []
    };
  var a = r({
    input: i,
    source: e.payload,
    target: t.target,
    event: t,
    current: []
  });
  return {
    input: i,
    dropTargets: a
  };
}
var lo = {
  canStart: Fo,
  start: Vi
}, le = /* @__PURE__ */ new Map();
function Fi(o) {
  var t = o.typeKey, e = o.mount, r = le.get(t);
  if (r)
    return r.usageCount++, r;
  var i = {
    typeKey: t,
    unmount: e(),
    usageCount: 1
  };
  return le.set(t, i), i;
}
function Bi(o) {
  var t = Fi(o);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), le.delete(o.typeKey));
  };
}
function $e() {
  for (var o = arguments.length, t = new Array(o), e = 0; e < o; e++)
    t[e] = arguments[e];
  return function() {
    t.forEach(function(i) {
      return i();
    });
  };
}
function Bo(o, t) {
  var e = t.attribute, r = t.value;
  return o.setAttribute(e, r), function() {
    return o.removeAttribute(e);
  };
}
function so(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function j(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? so(Object(e), !0).forEach(function(r) {
      ze(o, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : so(Object(e)).forEach(function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return o;
}
function Gt(o, t) {
  var e = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!e) {
    if (Array.isArray(o) || (e = Wi(o)) || t) {
      e && (o = e);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= o.length ? { done: !0 } : { done: !1, value: o[r++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, n = !0, s = !1;
  return { s: function() {
    e = e.call(o);
  }, n: function() {
    var c = e.next();
    return n = c.done, c;
  }, e: function(c) {
    s = !0, a = c;
  }, f: function() {
    try {
      n || e.return == null || e.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Wi(o, t) {
  if (o) {
    if (typeof o == "string") return co(o, t);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? co(o, t) : void 0;
  }
}
function co(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, r = Array(t); e < t; e++) r[e] = o[e];
  return r;
}
function Jt(o) {
  return o.slice(0).reverse();
}
function qi(o) {
  var t = o.typeKey, e = o.defaultDropEffect, r = /* @__PURE__ */ new WeakMap(), i = "data-drop-target-for-".concat(t), a = "[".concat(i, "]");
  function n(d) {
    return r.set(d.element, d), function() {
      return r.delete(d.element);
    };
  }
  function s(d) {
    return $e(Bo(d.element, {
      attribute: i,
      value: "true"
    }), n(d));
  }
  function l(d) {
    var m, f, v, E, y = d.source, $ = d.target, g = d.input, w = d.event, b = d.result, z = b === void 0 ? [] : b;
    if (w === void 0)
      return z;
    const S = w.composedPath();
    if ($ = S.find((it) => it instanceof Element ? it.hasAttribute("data-drop-target-for-element") : !1), $ = $ ?? S[0], !($ instanceof Element))
      return $ instanceof Node ? l({
        source: y,
        target: $.parentElement,
        input: g,
        result: z
      }) : z;
    var L = $.closest(a);
    if (L == null)
      return z;
    var A = r.get(L);
    if (A == null)
      return z;
    var P = {
      input: g,
      source: y,
      element: A.element
    };
    if (A.canDrop && !A.canDrop(P))
      return l({
        source: y,
        target: A.element.parentElement,
        input: g,
        result: z
      });
    var k = (m = (f = A.getData) === null || f === void 0 ? void 0 : f.call(A, P)) !== null && m !== void 0 ? m : {}, C = (v = (E = A.getDropEffect) === null || E === void 0 ? void 0 : E.call(A, P)) !== null && v !== void 0 ? v : e, D = {
      data: k,
      element: A.element,
      dropEffect: C,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return l({
      source: y,
      target: A.element.parentElement,
      input: g,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(Vo(z), [D])
    });
  }
  function c(d) {
    var m = d.eventName, f = d.payload, v = Gt(f.location.current.dropTargets), E;
    try {
      for (v.s(); !(E = v.n()).done; ) {
        var y, $ = E.value, g = r.get($.element), w = j(j({}, f), {}, {
          self: $
        });
        g == null || (y = g[m]) === null || y === void 0 || y.call(
          g,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          w
        );
      }
    } catch (b) {
      v.e(b);
    } finally {
      v.f();
    }
  }
  var p = {
    onGenerateDragPreview: c,
    onDrag: c,
    onDragStart: c,
    onDrop: c,
    onDropTargetChange: function(m) {
      var f = m.payload, v = new Set(f.location.current.dropTargets.map(function(nt) {
        return nt.element;
      })), E = /* @__PURE__ */ new Set(), y = Gt(f.location.previous.dropTargets), $;
      try {
        for (y.s(); !($ = y.n()).done; ) {
          var g, w = $.value;
          E.add(w.element);
          var b = r.get(w.element), z = v.has(w.element), S = j(j({}, f), {}, {
            self: w
          });
          if (b == null || (g = b.onDropTargetChange) === null || g === void 0 || g.call(b, S), !z) {
            var L;
            b == null || (L = b.onDragLeave) === null || L === void 0 || L.call(b, S);
          }
        }
      } catch (nt) {
        y.e(nt);
      } finally {
        y.f();
      }
      var A = Gt(f.location.current.dropTargets), P;
      try {
        for (A.s(); !(P = A.n()).done; ) {
          var k, C, D = P.value;
          if (!E.has(D.element)) {
            var it = j(j({}, f), {}, {
              self: D
            }), U = r.get(D.element);
            U == null || (k = U.onDropTargetChange) === null || k === void 0 || k.call(U, it), U == null || (C = U.onDragEnter) === null || C === void 0 || C.call(U, it);
          }
        }
      } catch (nt) {
        A.e(nt);
      } finally {
        A.f();
      }
    }
  };
  function u(d) {
    p[d.eventName](d);
  }
  function h(d) {
    var m = d.source, f = d.target, v = d.input, E = d.event, y = d.current, $ = l({
      source: m,
      target: f,
      event: E,
      input: v
    });
    if ($.length >= y.length)
      return $;
    for (var g = Jt(y), w = Jt($), b = [], z = 0; z < g.length; z++) {
      var S, L = g[z], A = w[z];
      if (A != null) {
        b.push(A);
        continue;
      }
      var P = b[z - 1], k = g[z - 1];
      if ((P == null ? void 0 : P.element) !== (k == null ? void 0 : k.element))
        break;
      var C = r.get(L.element);
      if (!C)
        break;
      var D = {
        input: v,
        source: m,
        element: C.element
      };
      if (C.canDrop && !C.canDrop(D) || !((S = C.getIsSticky) !== null && S !== void 0 && S.call(C, D)))
        break;
      b.push(j(j({}, L), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Jt(b);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: h,
    dispatchEvent: u
  };
}
function Ki(o, t) {
  var e = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!e) {
    if (Array.isArray(o) || (e = Yi(o)) || t) {
      e && (o = e);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= o.length ? { done: !0 } : { done: !1, value: o[r++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, n = !0, s = !1;
  return { s: function() {
    e = e.call(o);
  }, n: function() {
    var c = e.next();
    return n = c.done, c;
  }, e: function(c) {
    s = !0, a = c;
  }, f: function() {
    try {
      n || e.return == null || e.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Yi(o, t) {
  if (o) {
    if (typeof o == "string") return uo(o, t);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? uo(o, t) : void 0;
  }
}
function uo(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, r = Array(t); e < t; e++) r[e] = o[e];
  return r;
}
function po(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Xi(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? po(Object(e), !0).forEach(function(r) {
      ze(o, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : po(Object(e)).forEach(function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return o;
}
function Gi() {
  var o = /* @__PURE__ */ new Set(), t = null;
  function e(a) {
    t && (!a.canMonitor || a.canMonitor(t.canMonitorArgs)) && t.active.add(a);
  }
  function r(a) {
    var n = Xi({}, a);
    return o.add(n), e(n), function() {
      o.delete(n), t && t.active.delete(n);
    };
  }
  function i(a) {
    var n = a.eventName, s = a.payload;
    if (n === "onGenerateDragPreview") {
      t = {
        canMonitorArgs: {
          initial: s.location.initial,
          source: s.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var l = Ki(o), c;
      try {
        for (l.s(); !(c = l.n()).done; ) {
          var p = c.value;
          e(p);
        }
      } catch (v) {
        l.e(v);
      } finally {
        l.f();
      }
    }
    if (t) {
      for (var u = Array.from(t.active), h = 0, d = u; h < d.length; h++) {
        var m = d[h];
        if (t.active.has(m)) {
          var f;
          (f = m[n]) === null || f === void 0 || f.call(m, s);
        }
      }
      n === "onDrop" && (t.active.clear(), t = null);
    }
  }
  return {
    dispatchEvent: i,
    monitorForConsumers: r
  };
}
function Ji(o) {
  var t = o.typeKey, e = o.mount, r = o.dispatchEventToSource, i = o.onPostDispatch, a = o.defaultDropEffect, n = Gi(), s = qi({
    typeKey: t,
    defaultDropEffect: a
  });
  function l(u) {
    r == null || r(u), s.dispatchEvent(u), n.dispatchEvent(u), i == null || i(u);
  }
  function c(u) {
    var h = u.event, d = u.dragType;
    lo.start({
      event: h,
      dragType: d,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: l
    });
  }
  function p() {
    function u() {
      var h = {
        canStart: lo.canStart,
        start: c
      };
      return e(h);
    }
    return Bi({
      typeKey: t,
      mount: u
    });
  }
  return {
    registerUsage: p,
    dropTarget: s.dropTargetForConsumers,
    monitor: n.monitorForConsumers
  };
}
var Qi = ye(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), tn = "pdnd:android-fallback", ho = "text/plain", en = "text/uri-list", on = "application/vnd.pdnd", mt = /* @__PURE__ */ new WeakMap();
function rn(o) {
  return mt.set(o.element, o), function() {
    mt.delete(o.element);
  };
}
var mo = wi(), Ae = Ji({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return $e(mo.bindEvents(), rt.bind(document, {
      type: "dragstart",
      listener: function(r) {
        var i, a, n, s, l, c;
        if (!t.canStart(r) || r.defaultPrevented || !r.dataTransfer)
          return;
        const u = r.composedPath().find((z) => z instanceof HTMLElement && mt.has(z));
        if (!u)
          return null;
        const h = mt.get(u);
        if (!h)
          return null;
        var d = ht(r), m = {
          element: h.element,
          dragHandle: (i = h.dragHandle) !== null && i !== void 0 ? i : null,
          input: d
        };
        if (h.canDrag && !h.canDrag(m))
          return r.preventDefault(), null;
        if (h.dragHandle) {
          const S = (u.shadowRoot || document).elementFromPoint(d.clientX, d.clientY);
          if (!h.dragHandle.contains(S))
            return r.preventDefault(), null;
        }
        var f = (a = (n = h.getInitialDataForExternal) === null || n === void 0 ? void 0 : n.call(h, m)) !== null && a !== void 0 ? a : null;
        if (f)
          for (var v = 0, E = Object.entries(f); v < E.length; v++) {
            var y = jo(E[v], 2), $ = y[0], g = y[1];
            r.dataTransfer.setData($, g ?? "");
          }
        Qi() && !r.dataTransfer.types.includes(ho) && !r.dataTransfer.types.includes(en) && r.dataTransfer.setData(ho, tn), r.dataTransfer.setData(on, "");
        var w = {
          element: h.element,
          dragHandle: (s = h.dragHandle) !== null && s !== void 0 ? s : null,
          data: (l = (c = h.getInitialData) === null || c === void 0 ? void 0 : c.call(h, m)) !== null && l !== void 0 ? l : {}
        }, b = {
          type: "element",
          payload: w,
          startedFrom: "internal"
        };
        t.start({
          event: r,
          dragType: b
        });
      }
    }));
  },
  dispatchEventToSource: function(t) {
    var e, r, i = t.eventName, a = t.payload;
    (e = mt.get(a.source.element)) === null || e === void 0 || (r = e[i]) === null || r === void 0 || r.call(
      e,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      a
    );
  },
  onPostDispatch: mo.getOnPostDispatch()
}), Dn = Ae.dropTarget, nn = Ae.monitor;
function Un(o) {
  return $e(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Ae.registerUsage(),
    rn(o),
    Bo(o.element, {
      attribute: "draggable",
      value: "true"
    })
  );
}
function an() {
  return {
    x: 0,
    y: 0
  };
}
function jn(o) {
  var t = o.render, e = o.nativeSetDragImage, r = o.getOffset, i = r === void 0 ? an : r, a = document.createElement("div");
  Object.assign(a.style, {
    // Ensuring we don't cause reflow when adding the element to the page
    // Using `position:fixed` rather than `position:absolute` so we are
    // positioned on the current viewport.
    // `position:fixed` also creates a new stacking context, so we don't need to do that here
    position: "fixed",
    // According to `mdn`, the element can be offscreen:
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage#imgelement
    //
    // However, that  information does not appear in the specs:
    // https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-setdragimage-dev
    //
    // If the element is _completely_ offscreen, Safari@17.1 will cancel the drag
    top: 0,
    left: 0,
    // Using maximum possible z-index so that this element will always be on top
    // https://stackoverflow.com/questions/491052/minimum-and-maximum-value-of-z-index
    // Did not use `layers` in `@atlaskit/theme` because:
    // 1. This element is not a 'layer' in the conventional sense, as this element
    //    is only created for a single frame for the browser to take a photo of it,
    //    and then it is destroyed
    // 2. Did not want to add a dependency onto `@atlaskit/theme`
    // 3. Want to always be on top of product UI which might have higher z-index's
    zIndex: No,
    // Avoiding any additional events caused by the new element (being super safe)
    pointerEvents: "none"
  }), document.body.append(a);
  var n = t({
    container: a
  });
  queueMicrotask(function() {
    var c = i({
      container: a
    });
    if (Rt()) {
      var p = a.getBoundingClientRect();
      if (p.width === 0)
        return;
      a.style.left = "-".concat(p.width - 1e-4, "px");
    }
    e == null || e(a, c.x, c.y);
  });
  function s() {
    l(), n == null || n(), document.body.removeChild(a);
  }
  var l = nn({
    // Remove portal in the dragstart event so that the user will never see it
    onDragStart: s,
    // Backup: remove portal when the drop finishes (this would be an error case)
    onDrop: s
  });
}
const Rn = {
  icon: [
    256,
    512,
    "M120 327L4 209c-5-5-5-12 0-17l7-7c4-5 12-5 17 0l100 102 100-102c5-5 13-5 17 0l8 7c4 5 4 13 0 17L137 327c-5 5-13 5-17 0z"
  ],
  name: "angle-down"
}, Nn = {
  icon: [
    256,
    512,
    "M137 185l116 118c4 5 4 12 0 17l-8 7c-4 5-12 5-17 0L128 225 28 327c-5 5-13 5-17 0l-8-7c-4-5-4-13 0-17l117-118c4-5 12-5 17 0z"
  ],
  name: "angle-up"
}, In = {
  icon: [
    196,
    512,
    "M167 265L49 381c-5 4-12 4-17 0l-7-8c-5-4-5-12 0-17l102-100L25 156c-5-5-5-13 0-17l7-8c5-4 12-4 17 1l118 116c5 4 5 12 0 17z"
  ],
  name: "angle-right"
}, Vn = {
  icon: [
    28,
    28,
    "m6 6 16 16M5.3 6.7l7.3 7.3-7.3 7.3c-1 1 .5 2.3 1.4 1.4l7.3-7.3 7.3 7.3c1 1 2.3-.5 1.4-1.4L15.4 14l7.3-7.3c1-1-.5-2.3-1.4-1.4L14 12.6 6.7 5.3c-.9-1-2.3.5-1.4 1.4Z"
  ],
  name: "close-14"
}, Zn = {
  icon: [
    32,
    32,
    "m6 6 16 16M5.3 6.7l9.3 9.3-9.3 9.3c-1 1 .5 2.3 1.4 1.4l9.3-9.3 9.3 9.3c1 1 2.3-.5 1.4-1.4L17.4 16l9.3-9.3c1-1-.5-2.3-1.4-1.4L16 14.6 6.7 5.3c-.9-1-2.3.5-1.4 1.4Z"
  ],
  name: "close-16"
}, Fn = {
  icon: [
    32,
    32,
    "M30 4a3 3 0 0 0-4 0L12 21l-6-6a3 3 0 0 0-4 0 3 3 0 0 0 0 4l8 9a3 3 0 0 0 4 0L30 8a3 3 0 0 0 0-4z"
  ],
  name: "check"
}, Bn = {
  icon: [32, 32, "M7 13a3 3 0 1 0 0 6h18a3 3 0 1 0 0-6H7z"],
  name: "dash"
}, Wn = {
  icon: [
    32,
    32,
    "M16 2a1 1 0 0 0-.9.5l-14 26A1 1 0 0 0 2 30h28a1 1 0 0 0 1-1.5l-14.1-26A1 1 0 0 0 16 2zm-1 7h2c.6 0 1 .4 1 1v10.5c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1V10c0-.6.4-1 1-1zm0 14h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
  ],
  name: "alert"
}, qn = {
  icon: [
    32,
    32,
    "m2 15c0 0.3 0.1 0.5 0.3 0.7l4 4c0.4 0.4 1 0.4 1.4 0 0.4-0.4 0.4-1 0-1.4l-3.3-3.3 3.3-3.3c0.4-0.4 0.4-1 0-1.4-0.4-0.4-1-0.4-1.4 0l-4 4c-0.2 0.2-0.3 0.4-0.3 0.7zm24 4c0 0.3 0.1 0.5 0.3 0.7 0.4 0.4 1 0.4 1.4 0l4-4c0.4-0.4 0.4-1 0-1.4l-4-4c-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4l3.3 3.3-3.3 3.3C26.1 18.5 26 18.7 26 19ZM2 15c0 0.6 0.4 1 1 1H31c0.6 0 1-0.4 1-1 0-0.6-0.4-1-1-1H3c-0.6 0-1 0.4-1 1zM17 0c-0.3 0-0.5 0.1-0.7 0.3l-4 4c-0.4 0.4-0.4 1 0 1.4 0.4 0.4 1 0.4 1.4 0l3.3-3.3 3.3 3.3c0.4 0.4 1 0.4 1.4 0 0.4-0.4 0.4-1 0-1.4l-4-4C17.5 0.1 17.3 0 17 0ZM13 24c-0.3 0-0.5 0.1-0.7 0.3-0.4 0.4-0.4 1 0 1.4l4 4c0.4 0.4 1 0.4 1.4 0l4-4c0.4-0.4 0.4-1 0-1.4-0.4-0.4-1-0.4-1.4 0L17 27.6 13.7 24.3C13.5 24.1 13.3 24 13 24ZM17 0c-0.6 0-1 0.4-1 1V29c0 0.6 0.4 1 1 1 0.6 0 1-0.4 1-1V1c0-0.6-0.4-1-1-1z"
  ],
  name: "arrows"
}, Kn = {
  icon: [
    32,
    32,
    "m15 0c-0.6 0-1 0.4-1 1 0 0.6 0.4 1 1 1h3C18.6 2 19 1.6 19 1 19 0.4 18.6 0 18 0ZM1 4C0.4 4 0 4.4 0 5 0 5.6 0.4 6 1 6H31C31.6 6 32 5.6 32 5 32 4.4 31.6 4 31 4Zm3 4c0 0-0.1 0-0.1 0C3.3 8.1 2.9 8.6 3 9.2L6.7 29.2C7 30.8 8.4 32 10 32H22c1.6 0 3-1.2 3.3-2.8L29 9.2C29.1 8.6 28.7 8.1 28.2 8 27.6 7.9 27.1 8.3 27 8.8L23.4 28.9C23.2 29.5 22.7 30 22 30H10C9.3 30 8.8 29.5 8.6 28.9L5 8.8C4.9 8.3 4.5 8 4 8Z"
  ],
  name: "trash"
}, Yn = {
  icon: [
    32,
    32,
    "m16 8c-4.41 0-8 3.59-8 8 0 4.41 3.59 8 8 8 4.41 0 8-3.59 8-8 0-4.41-3.59-8-8-8zm0 2c3.33 0 6 2.67 6 6 0 3.33-2.67 6-6 6-3.33 0-6-2.67-6-6 0-3.33 2.67-6 6-6zm4.72-9.96c-0.39-0.11-0.82 0.02-1.07 0.35 0 0 0 0 0 0-0.15 0.21-0.28 0.36-0.41 0.48 0 0 0 0 0 0-0.86 0.87-2 1.34-3.23 1.34-1.22 0-2.36-0.47-3.23-1.34 0 0 0 0 0 0C12.64 0.75 12.51 0.6 12.36 0.4c0 0 0 0 0 0-0.25-0.33-0.67-0.47-1.07-0.35 0 0 0 0 0 0C10.16 0.38 9.07 0.83 8.06 1.38 7.69 1.58 7.49 1.98 7.54 2.39c0 0 0 0 0 0.01 0.04 0.25 0.05 0.45 0.05 0.64 0 2.52-2.04 4.57-4.57 4.57-0.18 0-0.39-0.01-0.63-0.05 0 0-0.01 0-0.01 0C1.98 7.49 1.57 7.69 1.38 8.06 0.83 9.07 0.38 10.16 0.04 11.28c0 0 0 0 0 0-0.11 0.39 0.03 0.82 0.35 1.07 0 0 0 0 0 0 0.21 0.15 0.35 0.28 0.48 0.41 0 0 0 0 0 0 1.79 1.78 1.79 4.68 0 6.46 0 0 0 0 0 0-0.13 0.13-0.28 0.26-0.48 0.42-0.33 0.25-0.47 0.67-0.35 1.07 0 0 0 0 0 0 0.34 1.12 0.78 2.21 1.34 3.22 0.19 0.37 0.6 0.57 1.01 0.51 0 0 0 0 0 0 0.25-0.04 0.45-0.05 0.63-0.05 2.52 0 4.57 2.04 4.57 4.57 0 0.18-0.01 0.38-0.05 0.63 0 0 0 0 0 0.01-0.05 0.41 0.15 0.81 0.51 1.01 1.01 0.55 2.1 1 3.23 1.33 0.4 0.12 0.82-0.02 1.07-0.35 0.15-0.2 0.28-0.36 0.42-0.49 0 0 0 0 0 0 0.87-0.86 2-1.34 3.23-1.34 1.23 0 2.37 0.47 3.23 1.34 0 0 0 0 0 0 0.13 0.13 0.26 0.28 0.42 0.49 0.19 0.25 0.49 0.39 0.79 0.39 0.09 0 0.18-0.01 0.28-0.04l0.01 0c1.13-0.33 2.21-0.78 3.22-1.33 0.36-0.2 0.57-0.6 0.51-1.01 0 0 0 0 0-0.01-0.04-0.25-0.05-0.45-0.05-0.63 0-2.53 2.04-4.57 4.57-4.57 0.18 0 0.39 0.01 0.64 0.05 0 0 0 0 0 0 0.41 0.05 0.81-0.15 1-0.51 0.55-1.01 1-2.1 1.34-3.23 0 0 0 0 0 0 0.11-0.39-0.02-0.82-0.35-1.07l0 0c-0.21-0.15-0.36-0.28-0.48-0.41 0 0 0 0 0-0.01-0.86-0.86-1.34-2.01-1.34-3.23 0-1.22 0.48-2.36 1.34-3.23 0 0 0 0 0 0 0.13-0.13 0.28-0.26 0.49-0.42 0 0 0 0 0 0 0.33-0.25 0.46-0.68 0.35-1.07 0 0 0 0 0 0C31.63 10.15 31.18 9.07 30.62 8.06 30.43 7.69 30.03 7.49 29.62 7.54c0 0 0 0-0.01 0-0.25 0.04-0.45 0.05-0.64 0.05-2.52 0-4.57-2.04-4.57-4.56 0-0.19 0.01-0.39 0.05-0.64 0 0 0 0 0 0 0.05-0.41-0.15-0.81-0.51-1.01-1.02-0.55-2.1-1.01-3.23-1.34 0 0 0 0 0 0zM11.24 2.15c0.04 0.05 0.09 0.1 0.13 0.14 1.24 1.24 2.89 1.92 4.63 1.92 1.75 0 3.4-0.68 4.63-1.92 0 0 0 0 0 0 0.04-0.04 0.08-0.09 0.13-0.14 0.57 0.2 1.13 0.43 1.66 0.69 0 0.06 0 0.13 0 0.19 0 3.61 2.94 6.55 6.55 6.55 0.06 0 0.13 0 0.19 0 0.26 0.53 0.49 1.09 0.69 1.66-0.05 0.05-0.1 0.09-0.14 0.13-1.24 1.24-1.92 2.88-1.92 4.63 0 1.75 0.68 3.4 1.92 4.64 0 0 0 0 0 0 0.04 0.04 0.09 0.09 0.14 0.13-0.2 0.57-0.43 1.13-0.69 1.66-0.06 0-0.13 0-0.19 0-3.61 0-6.55 2.94-6.55 6.55 0 0.06 0 0.12 0 0.18-0.54 0.26-1.09 0.5-1.66 0.69-0.04-0.05-0.08-0.1-0.13-0.14-1.24-1.24-2.89-1.92-4.63-1.92-1.75 0-3.39 0.68-4.63 1.92-0.05 0.05-0.09 0.1-0.13 0.14-0.57-0.19-1.13-0.43-1.66-0.69 0-0.06 0-0.12 0-0.18 0-3.61-2.94-6.55-6.55-6.55-0.06 0-0.13 0-0.19 0C2.58 21.9 2.35 21.34 2.15 20.77c0.05-0.04 0.1-0.09 0.14-0.13 0 0 0 0 0 0 2.55-2.55 2.55-6.71 0-9.27-0.04-0.04-0.09-0.09-0.14-0.13 0.2-0.57 0.43-1.13 0.69-1.66 0.06 0 0.13 0 0.19 0 3.61 0 6.55-2.94 6.55-6.55 0-0.06 0-0.13 0-0.19 0.53-0.26 1.09-0.49 1.66-0.69z"
  ],
  name: "cog"
}, ln = {
  icon: [
    32,
    32,
    "M16 0C7.2 0 0 7.2 0 16 0 24.8 7.2 32 16 32 24.8 32 32 24.8 32 16 32 7.2 24.8 0 16 0zM16 2C20.9 2 25.2 4.5 27.7 8.4 27.1 8.9 26.5 9.7 26 10 25.1 10.6 25.3 12 25 13 24.7 14 25.7 15 26 16 26.5 17.4 28.5 17.3 29.9 17.9 29 24.1 24.2 28.9 18 29.8 18.7 27.9 18.5 25.5 20 24 20.7 23.3 22 22.9 22 22 22 21.3 22.4 20.4 21.9 19.9L20 18 15 18C14.3 17.3 13.7 16.4 12.9 15.9 12.2 15.6 10.5 15.5 11 15 11.7 14.3 12.1 13.2 13 13 13.4 12.9 14 13.3 14 12.6 14 12.1 13.6 11.3 14.1 10.9 14.4 10.7 14.6 10 15.1 10 15.5 10 16 10.1 16.3 9.7 16.6 9.3 17 9.1 17 8.6 17 7.4 17.7 6 17 5L14.8 2.1C15.2 2 15.6 2 16 2zM2.6 12C3.5 13.9 4.2 16.1 6 17 8 18 12 17.8 12 20 12 21.4 11.4 22.9 12 24.1 12.4 24.7 12.7 25.5 13.2 26.2 13.4 26.5 14 26.7 14 27.1 14 27.8 13.7 28.9 13.5 29.8 7 28.6 2 22.9 2 16 2 14.6 2.2 13.3 2.6 12z"
  ]
}, Xn = {
  icon: [
    32,
    32,
    "M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32Zm0 2a14 14 0 0 1 14 14 14 14 0 0 1-14 14A14 14 0 0 1 2 16 14 14 0 0 1 16 2Zm0 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15 15v9c0 1.3 2 1.3 2 0v-9c0-1.3-2-1.3-2 0z"
  ],
  name: "info-circle-outline"
}, Gn = {
  icon: [
    32,
    32,
    "M31.4 2a1 1 0 0 0-1.1.3l-28 28A1 1 0 0 0 3 32h28c.6 0 1-.4 1-1V3a1 1 0 0 0-.6-1Z"
  ],
  name: "corner-triangle"
}, Jn = {
  icon: ln.icon,
  name: "topography"
}, Qn = {
  icon: [
    21,
    24,
    "M5 0a1 1 0 0 0-1 1v1a4 4 0 0 0-4 4v14c0 2.2 1.8 4 4 4h13c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H6V1a1 1 0 0 0-1-1ZM4 4v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h9v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4c1.13 0 2 .87 2 2v1H2V6c0-1.13.88-2 2-2zM2 9h4v3H2Zm6 0h5v3H8Zm7 0h4v3h-4ZM2 14h4v3H2Zm6 0h5v3H8Zm7 0h4v3h-4ZM2 19h4v3H4c-1.12 0-2-.87-2-2zm6 0h5v3H8Zm7 0h4v1c0 1.13-.87 2-2 2h-2z"
  ],
  name: "date-12"
}, ta = {
  icon: [
    26,
    28,
    "M8 0a1 1 0 0 0-1 1v1H5C2.25 2 0 4.24 0 7v16c0 2.75 2.25 5 5 5h16a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5h-2V1a1 1 0 1 0-2 0v1H9V1a1 1 0 0 0-1-1ZM5 4h2v1a1 1 0 1 0 2 0V4h8v1a1 1 0 1 0 2 0V4h2c2 0 3 1.32 3 3v1H2V7c0-1.68 1-3 3-3zm-3 6h6v4H2Zm8 0h6v4h-6zm8 0h6v4h-6ZM2 16h6v4H2Zm8 0h6v4h-6zm8 0h6v4h-6ZM2 22h6v4H5c-1.67 0-3-1.32-3-3zm8 0h6v4h-6zm8 0h6v1c0 1.68-1 3-3 3h-3z"
  ],
  name: "date-14"
}, sn = {
  icon: [
    30,
    32,
    "M8 1a1 1 0 0 0-1 1v2H5C2.26 4 0 6.26 0 9v17c0 2.75 2.25 5 5 5h20a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5h-2V2a1 1 0 1 0-2 0v2H9V2a1 1 0 0 0-1-1ZM5 6h2v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6h12v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6h2c1.68 0 3 1.32 3 3v2H2V9c0-1.68 1.33-3 3-3zm-3 7h7v4H2Zm9 0h8v4h-8zm10 0h7v4h-7ZM2 19h7v4H2Zm9 0h8v4h-8zm10 0h7v4h-7ZM2 25h7v4H5c-1.67 0-3-1.32-3-3zm9 0h8v4h-8zm10 0h7v1c0 1.68-1.32 3-3 3h-4z"
  ],
  name: "date"
};
sn.icon;
const ea = {
  icon: [
    30,
    32,
    "M8 1a1 1 0 0 0-1 1v2H5C2.26 4 0 6.26 0 9v17c0 2.75 2.25 5 5 5h9.91a10 10 0 0 1-1.57-2H11v-4h1.09a10 10 0 0 1-.09-1 10 10 0 0 1 .09-1H11v-4h2.34a10 10 0 0 1 1.57-2H11v-4h8v1.49a10 10 0 0 1 2-.4V13h7v3a10 10 0 0 1 2 2V9a5 5 0 0 0-5-5h-2V2a1 1 0 0 0-2 0v2H9V2a1 1 0 0 0-1-1zM5 6h2v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6h12v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6h2c1.68 0 3 1.32 3 3v2H2V9c0-1.68 1.33-3 3-3zm-3 7h7v4H2v-4zm20 3c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c3.33 0 6 2.67 6 6s-2.67 6-6 6-6-2.67-6-6 2.67-6 6-6zM2 19h7v4H2v-4zm19 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1zM2 25h7v4H5c-1.67 0-3-1.32-3-3v-1z"
  ],
  name: "datetime"
}, oa = {
  icon: [
    21,
    24,
    "M 5 0 C 4.4477153 0 4 0.44771525 4 1 L 4 2 C 1.790861 2 0 3.790861 0 6 L 0 20 C 0 22.2 1.8 24 4 24 L 10.757812 24 C 9.4618931 23.15264 8.3188977 22.04833 8 21.242188 C 7.3447412 20.103874 6.999907 18.81344 7 17.5 C 7.0084015 15.407448 7.8906416 13.413557 9.4335938 12 L 8 12 L 8 9 L 13 9 L 13 10.166016 C 13.493146 10.060385 13.99569 10.004765 14.5 10 C 14.667099 10.0087 14.833859 10.023069 15 10.042969 L 15 9 L 19 9 L 19 11.529297 C 19.809686 12.130147 20.489907 12.888089 21 13.757812 L 21 6 C 21 3.8 19.2 2 17 2 L 17 1 C 17 0.44771525 16.552285 0 16 0 C 15.447715 0 15 0.44771525 15 1 L 15 2 L 6 2 L 6 1 C 6 0.44771525 5.5522847 0 5 0 z M 4 4 L 4 5 C 4 5.5522847 4.4477153 6 5 6 C 5.5522847 6 6 5.5522847 6 5 L 6 4 L 15 4 L 15 5 C 15 5.5522847 15.447715 6 16 6 C 16.552285 6 17 5.5522847 17 5 L 17 4 C 18.13 4 19 4.87 19 6 L 19 7 L 2 7 L 2 6 C 2 4.87 2.88 4 4 4 z M 2 9 L 6 9 L 6 12 L 2 12 L 2 9 z M 14.560547 10.988281 C 10.982544 10.988281 8.0605469 13.910279 8.0605469 17.488281 C 8.0605469 21.066284 10.982544 23.988281 14.560547 23.988281 C 18.138549 23.988281 21.060547 21.066284 21.060547 17.488281 C 21.060547 13.910279 18.138549 10.988281 14.560547 10.988281 z M 14.560547 12.988281 C 17.05767 12.988281 19.060547 14.991158 19.060547 17.488281 C 19.060547 19.985405 17.05767 21.988281 14.560547 21.988281 C 12.063424 21.988281 10.060547 19.985405 10.060547 17.488281 C 10.060547 14.991158 12.063424 12.988281 14.560547 12.988281 z M 2 14 L 6 14 L 6 17 L 2 17 L 2 14 z M 13.857422 14.857422 A 1 1 0 0 0 12.857422 15.857422 L 12.857422 19 A 1.0001 1.0001 0 0 0 13.857422 20 L 16 20 A 1 1 0 0 0 17 19 A 1 1 0 0 0 16 18 L 14.857422 18 L 14.857422 15.857422 A 1 1 0 0 0 13.857422 14.857422 z M 2 19 L 6 19 L 6 22 L 4 22 C 2.88 22 2 21.13 2 20 L 2 19 z"
  ],
  name: "datetime-12"
}, ra = {
  icon: [
    26,
    28,
    "M 8 0 A 1 1 0 0 0 7 1 L 7 2 L 5 2 C 2.25 2 0 4.24 0 7 L 0 23 C 0 25.75 2.25 28 5 28 L 14.025391 28 A 8.499999 8.499999 0 0 1 12.314453 26 L 10 26 L 10 22 L 11.042969 22 A 8.499999 8.499999 0 0 1 11 21.5 A 8.499999 8.499999 0 0 1 11.134766 20 L 10 20 L 10 16 L 13.025391 16 A 8.499999 8.499999 0 0 1 15.546875 14 L 10 14 L 10 10 L 16 10 L 16 13.789062 A 8.499999 8.499999 0 0 1 18 13.134766 L 18 10 L 24 10 L 24 14 L 23.496094 14 A 8.499999 8.499999 0 0 1 26 16.027344 L 26 7 A 5 5 0 0 0 21 2 L 19 2 L 19 1 A 1 1 0 0 0 17 1 L 17 2 L 9 2 L 9 1 A 1 1 0 0 0 8 0 z M 5 4 L 7 4 L 7 5 A 1 1 0 0 0 9 5 L 9 4 L 17 4 L 17 5 A 1 1 0 0 0 19 5 L 19 4 L 21 4 C 23 4 24 5.32 24 7 L 24 8 L 2 8 L 2 7 C 2 5.32 3 4 5 4 z M 2 10 L 8 10 L 8 14 L 2 14 L 2 10 z M 19.560547 14.988281 C 15.982544 14.988281 13.060547 17.910279 13.060547 21.488281 C 13.060547 25.066284 15.982544 27.988281 19.560547 27.988281 C 23.138549 27.988281 26.060547 25.066284 26.060547 21.488281 C 26.060547 17.910279 23.138549 14.988281 19.560547 14.988281 z M 2 16 L 8 16 L 8 20 L 2 20 L 2 16 z M 19.560547 16.988281 C 22.05767 16.988281 24.060547 18.991158 24.060547 21.488281 C 24.060547 23.985405 22.05767 25.988281 19.560547 25.988281 C 17.063424 25.988281 15.060547 23.985405 15.060547 21.488281 C 15.060547 18.991158 17.063424 16.988281 19.560547 16.988281 z M 18.857422 18.857422 A 1 1 0 0 0 17.857422 19.857422 L 17.857422 23 A 1.0001 1.0001 0 0 0 18.857422 24 L 21 24 A 1 1 0 0 0 22 23 A 1 1 0 0 0 21 22 L 19.857422 22 L 19.857422 19.857422 A 1 1 0 0 0 18.857422 18.857422 z M 2 22 L 8 22 L 8 26 L 5 26 C 3.33 26 2 24.68 2 23 L 2 22 z"
  ],
  name: "datetime-14"
}, ia = {
  icon: [
    32,
    32,
    "M7 0C3.14 0 0 3.14 0 7v18c0 3.86 3.14 7 7 7h18a7 7 0 0 0 7-7V7c0-3.86-3.14-7-7-7zm18 8a2 2 0 0 1 1.41.59 2 2 0 0 1 0 2.82l-12 12a2 2 0 0 1-2.83 0l-5.99-6a2 2 0 0 1 0-2.82 2 2 0 0 1 2.83 0L13 19.17 23.6 8.6A2 2 0 0 1 25 8Z"
  ],
  name: "checkbox-checked"
}, na = {
  icon: [
    32,
    32,
    "M7 0a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm0 2h18c2.79 0 5 2.22 5 5v18c0 2.79-2.21 5-5 5H7c-2.78 0-5-2.21-5-5V7c0-2.78 2.22-5 5-5z"
  ],
  name: "checkbox"
}, aa = {
  icon: [
    19,
    24,
    "M9.73 0H9.5C7.04 0 4.56.8 2.72 2.44.9 4.08-.23 6.64.04 9.8c.23 2.6 2.24 5.84 4.25 8.7 1 1.43 2.02 2.71 2.85 3.67.4.47.78.87 1.1 1.16.16.15.3.28.47.39.16.11.27.28.79.28s.63-.17.8-.28a16.3 16.3 0 0 0 1.56-1.55 44.3 44.3 0 0 0 2.85-3.67c2-2.86 4.02-6.1 4.25-8.7.28-3.17-.85-5.72-2.69-7.36A10.13 10.13 0 0 0 9.73 0Zm-.42 2h.19c2.03 0 4.04.66 5.44 1.92 1.4 1.26 2.26 3.07 2.02 5.7-.14 1.6-1.96 4.98-3.9 7.73a44.52 44.52 0 0 1-2.7 3.5c-.35.4-.63.68-.86.9a14 14 0 0 1-.86-.9 44.43 44.43 0 0 1-2.72-3.5C3.99 14.6 2.18 11.2 2.04 9.63c-.23-2.64.62-4.45 2.02-5.7A8.22 8.22 0 0 1 9.31 2Zm.19 3A2.5 2.5 0 0 0 7 7.5 2.5 2.5 0 0 0 9.5 10 2.5 2.5 0 0 0 12 7.5 2.5 2.5 0 0 0 9.5 5Z"
  ],
  name: "coordinates-12"
}, la = {
  icon: [
    22,
    28,
    "M11.01 0c-2.83 0-5.68.91-7.8 2.81S-.23 7.62.03 11.31c.1 1.51.8 3.19 1.76 4.96a55.08 55.08 0 0 0 6.96 9.64c.52.56.96 1.02 1.35 1.37.2.17.36.3.54.43.2.12.3.29.83.29s.66-.18.84-.31c.18-.13.35-.27.53-.44.36-.35.77-.81 1.24-1.38a52.72 52.72 0 0 0 3.2-4.34c2.24-3.37 4.47-7.24 4.69-10.22.26-3.68-1.06-6.6-3.17-8.5a11.63 11.63 0 0 0-7.79-2.8Zm0 2c2.4 0 4.77.8 6.45 2.3 1.7 1.51 2.74 3.72 2.51 6.86-.14 2-2.18 6-4.36 9.27a51.02 51.02 0 0 1-3.07 4.17c-.43.52-.8.93-1.08 1.2 0-.02-.02-.01-.03-.02-.3-.27-.72-.7-1.2-1.22a53.4 53.4 0 0 1-6.68-9.24 12.02 12.02 0 0 1-1.52-4.15c-.22-3.15.83-5.35 2.52-6.87A9.75 9.75 0 0 1 11 2Zm-.13 3a4.51 4.51 0 0 0 .12 9c2.47 0 4.5-2.03 4.5-4.5S13.47 5 11 5zM11 7c1.4 0 2.5 1.1 2.5 2.5A2.5 2.5 0 0 1 11 12c-1.4 0-2.5-1.1-2.5-2.5S9.6 7 11 7z"
  ],
  name: "coordinates-14"
}, sa = {
  icon: [
    26,
    32,
    "M13 6a5 5 0 0 0-5 5 5 5 0 0 0 5 4.98A5 5 0 0 0 17.98 11 5 5 0 0 0 13 6.01zm0 2a3 3 0 0 1 3.02 3.03A3 3 0 0 1 13 13.98a2.98 2.98 0 0 1-3.03-2.99A3.03 3.03 0 0 1 13 7.97zm0-8A12.96 12.96 0 0 0 0 13c0 5.4 7.4 14.2 11.1 18.1 1.1 1.2 2.8 1.2 3.9 0 3.59-3.9 10.96-12.7 10.96-18.1A12.9 12.9 0 0 0 13.03 0Zm0 2a10.96 10.96 0 0 1 11 11c0 4.5-6.1 11.97-9.3 15.79-1.02 1.2-2.27 1.2-3.29 0-3.1-3.78-9.45-11.3-9.45-15.8A10.96 10.96 0 0 1 13.03 2Z"
  ],
  name: "coordinates"
}, ca = {
  icon: [
    13,
    24,
    "M6.92 0a1 1 0 0 0-1 1v2.09c-1.07.1-2.1.41-3 .94A4.03 4.03 0 0 0 .85 7.45c0 1.8.87 3.15 2.01 3.95 1.15.8 2.5 1.18 3.78 1.56 1.27.37 2.44.75 3.2 1.28.76.53 1.16 1.07 1.16 2.31 0 .98-.4 1.47-1.19 1.89-.8.42-2 .62-3.24.53a8.22 8.22 0 0 1-3.35-.94C2.36 17.54 2 17.02 2 16.55a1 1 0 0 0-1-1 1 1 0 0 0-1 1c0 1.43 1.02 2.53 2.22 3.22 1.07.61 2.37 1 3.7 1.15V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2.04c1-.07 1.98-.3 2.83-.75A4.13 4.13 0 0 0 13 16.55a4.7 4.7 0 0 0-2.02-3.95c-1.14-.8-2.5-1.18-3.77-1.56a12.07 12.07 0 0 1-3.2-1.28c-.76-.53-1.16-1.07-1.16-2.31 0-.77.36-1.26 1.1-1.7a5.98 5.98 0 0 1 2.97-.71c1.12 0 2.24.26 2.98.7.74.45 1.1.94 1.1 1.7a1 1 0 0 0 1 1 1 1 0 0 0 1-1 4 4 0 0 0-2.07-3.4 7.35 7.35 0 0 0-3.01-.95V.99a1 1 0 0 0-1-.99Z"
  ],
  name: "currency-12"
}, ua = {
  icon: [
    15,
    28,
    "M7.96 0a1.5 1.5 0 0 0-1.5 1.5v2.05a7.9 7.9 0 0 0-3.1 1.1A5 5 0 0 0 .92 8.82c0 2.12 1.02 3.8 2.35 4.77 1.33.97 2.86 1.4 4.25 1.85 1.38.43 2.62.85 3.37 1.39.74.54 1.11 1.02 1.11 2.34 0 1-.34 1.42-1.1 1.84-.76.42-2 .64-3.29.54a8.32 8.32 0 0 1-3.46-1c-.86-.52-1.15-1-1.15-1.38a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0-1.5 1.5c0 1.77 1.22 3.13 2.6 3.96 1.14.68 2.47 1.1 3.86 1.3v2.07a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5v-2c1.02-.1 2-.37 2.9-.86A5.12 5.12 0 0 0 15 19.18c0-2.13-1.03-3.8-2.36-4.77-1.33-.97-2.86-1.4-4.24-1.84a12.7 12.7 0 0 1-3.37-1.4c-.75-.54-1.12-1.02-1.12-2.34 0-.76.3-1.2 1.03-1.64a6.05 6.05 0 0 1 3.01-.74c1.16 0 2.3.3 3.02.74.72.45 1.02.88 1.02 1.64a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 5 5 0 0 0-2.44-4.19c-.93-.58-2-.93-3.1-1.09V1.5A1.5 1.5 0 0 0 7.96 0Z"
  ],
  name: "currency-14"
}, pa = {
  icon: [
    16,
    32,
    "M8.5 0A1.51 1.51 0 0 0 7 1.51v3.02A1.51 1.51 0 0 0 8.5 6.01a1.51 1.51 0 0 0 1.51-1.51V1.5A1.51 1.51 0 0 0 8.51.04Zm0 26A1.51 1.51 0 0 0 7 27.5v2.99A1.51 1.51 0 0 0 8.5 32a1.51 1.51 0 0 0 1.51-1.51v-3.02a1.51 1.51 0 0 0-1.5-1.51Zm0-22C4.72 4 .98 6 .98 10.01a6.69 6.69 0 0 0 2.46 5.3c1.43 1.12 3.1 1.62 4.57 2.1 1.51.5 2.87.99 3.7 1.63.83.64 1.29 1.32 1.29 2.95 0 1.28-.46 1.89-1.29 2.38-.87.49-2.19.75-3.59.64a8.58 8.58 0 0 1-3.78-1.2c-.94-.61-1.36-1.22-1.36-1.82a1.51 1.51 0 0 0-1.5-1.51A1.51 1.51 0 0 0 0 21.98c0 1.9 1.25 3.4 2.72 4.35 1.51.95 3.32 1.51 5.18 1.67a9.23 9.23 0 0 0 5.32-1.06 5.69 5.69 0 0 0 2.76-4.95c0-2.38-1.02-4.2-2.45-5.3-1.4-1.12-3.03-1.62-4.54-2.1-1.5-.5-2.87-.99-3.7-1.67-.83-.64-1.29-1.28-1.29-2.9 0-4.01 9-4.01 9 0a1.51 1.51 0 0 0 1.5 1.5 1.51 1.51 0 0 0 1.52-1.5c0-4.01-3.78-6.05-7.56-6.05z"
  ],
  name: "currency"
}, da = {
  icon: [
    32,
    32,
    "M5 15a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2zm0 8a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2zM5 7a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z"
  ],
  name: "drag-lines"
}, ha = {
  icon: [
    21,
    24,
    "M7 0a1 1 0 0 0 0 2h2v2a1 1 0 0 0 0 .05A10.01 10.01 0 0 0 10 24a10 10 0 0 0 7.74-16.32l2.97-2.97a1 1 0 0 0 0-1.42A1 1 0 0 0 20 3a1 1 0 0 0-.7.3l-2.98 2.97A9.95 9.95 0 0 0 11 4.06 1 1 0 0 0 11 4V2h2a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-3zm3 6c4.43 0 8 3.57 8 8 0 4.44-3.57 8-8 8s-8-3.56-8-8c0-4.43 3.57-8 8-8zm0 2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z"
  ],
  name: "duration-12"
}, ma = {
  icon: [
    25,
    28,
    "M9 0a1 1 0 0 0 0 2h2v2.04C4.85 4.56 0 9.72 0 16c0 6.61 5.39 12 12 12a12.01 12.01 0 0 0 9.16-19.74l3.55-3.55a1 1 0 0 0 0-1.42A1 1 0 0 0 24 3a1 1 0 0 0-.71.3l-3.54 3.55A11.95 11.95 0 0 0 13 4.04V2h2a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-3zm3 6c5.54 0 10 4.46 10 10 0 5.53-4.46 10-10 10a9.99 9.99 0 1 1 0-20Zm0 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"
  ],
  name: "duration-14"
}, fa = {
  icon: [
    28,
    32,
    "M11 0a1 1 0 0 0 0 2h2v2.04C5.75 4.55 0 10.6 0 18c0 7.72 6.28 14 14 14A14.02 14.02 0 0 0 24.58 8.83l3.13-3.12a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-3.12 3.12A13.94 13.94 0 0 0 15 4.04V2h2a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-3zm3 6c6.64 0 12 5.36 12 12s-5.36 12-12 12a12 12 0 1 1 0-24Zm0 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z"
  ],
  name: "duration"
}, va = {
  icon: [
    24,
    24,
    "M6 0C4.27 0 2.74.6 1.66 1.68A6.04 6.04 0 0 0 0 6v18h9v-2H2V6c0-1.27.4-2.24 1.08-2.91A3.96 3.96 0 0 1 6 2h3V0Zm9 0v2h7v16c0 1.27-.41 2.25-1.08 2.93A3.95 3.95 0 0 1 18 22h-3v2h3c1.73 0 3.26-.58 4.34-1.66A6.08 6.08 0 0 0 24 18V0Z"
  ],
  name: "array-12"
}, ga = {
  icon: [
    28,
    28,
    "M6 0C4.27 0 2.74.6 1.66 1.68A6.04 6.04 0 0 0 0 6v22h10v-2H2V6c0-1.27.4-2.24 1.08-2.91A3.96 3.96 0 0 1 6 2h4V0H6zm12 0v2h8v20c0 1.27-.41 2.25-1.08 2.93A3.95 3.95 0 0 1 22 26h-4v2h4c1.73 0 3.26-.58 4.34-1.66A6.08 6.08 0 0 0 28 22V0H18z"
  ],
  name: "array-12"
}, ba = {
  icon: [
    32,
    32,
    "M6 0C4.27 0 2.74.6 1.66 1.68A6.04 6.04 0 0 0 0 6v26h11v-2H2V6c0-1.27.4-2.24 1.08-2.91A3.96 3.96 0 0 1 6 2h5V0ZM26 32c1.73 0 3.26-.58 4.34-1.66A6.08 6.08 0 0 0 32 26V0H21v2h9v24c0 1.27-.4 2.26-1.08 2.93A3.97 3.97 0 0 1 26 30h-5v2z"
  ],
  name: "array-12"
}, za = {
  icon: [
    32,
    24,
    "M14.03 1a2.57 2.57 0 0 0-2.55 2.55v2.56c0 1.4 1.15 2.54 2.55 2.54h.32v1.92H4.78c-.27 0-.49 0-.74.05s-.58.18-.82.45c-.24.28-.3.6-.33.8-.03.23-.02.42-.02.6v.96a.96.96 0 1 0 1.91 0v-.95h9.57v.95c.03 1.25 1.88 1.25 1.91 0v-.95h9.57v.95a.96.96 0 1 0 1.9 0v-.95c0-.2 0-.38-.02-.6a1.41 1.41 0 0 0-.32-.8c-.23-.28-.57-.41-.82-.46a3.86 3.86 0 0 0-.74-.05h-9.57V8.65h.32c1.4 0 2.55-1.15 2.55-2.54V3.55c0-1.4-1.15-2.55-2.55-2.55Zm0 1.91h2.55c.37 0 .64.27.64.64v2.56c0 .36-.27.63-.64.63h-2.55a.61.61 0 0 1-.64-.63V3.55c0-.37.27-.64.64-.64zM2.53 15.35A2.62 2.62 0 0 0 0 17.95v2.46A2.61 2.61 0 0 0 2.6 23h2.46a2.61 2.61 0 0 0 2.6-2.58v-2.46a2.61 2.61 0 0 0-2.59-2.61Zm11.48 0a2.61 2.61 0 0 0-2.53 2.6v2.46A2.61 2.61 0 0 0 14.07 23h2.47a2.6 2.6 0 0 0 2.58-2.6v-2.45a2.61 2.61 0 0 0-2.57-2.6zm11.48 0a2.62 2.62 0 0 0-2.53 2.6v2.46A2.61 2.61 0 0 0 25.54 23H28a2.61 2.61 0 0 0 2.6-2.58v-2.46a2.61 2.61 0 0 0-2.6-2.61ZM2.6 17.26h2.46c.38 0 .68.29.68.69v2.46a.67.67 0 0 1-.68.68H2.6a.67.67 0 0 1-.69-.67v-2.46c0-.4.29-.69.7-.69zm11.48 0h2.46c.39 0 .67.29.67.69v2.46c0 .38-.28.68-.67.68h-2.48a.65.65 0 0 1-.67-.68v-2.46c0-.4.28-.69.67-.69zm11.48 0H28c.4 0 .69.29.69.69v2.46a.67.67 0 0 1-.7.68h-2.45a.67.67 0 0 1-.68-.68v-2.46c0-.4.29-.69.68-.69z"
  ],
  name: "hierarchy-12"
}, ya = {
  icon: [
    34,
    28,
    "M15 1a3.02 3.02 0 0 0-3.02 3.02v3.03A3.02 3.02 0 0 0 15 10.03H16V12H6.05l-.68.03a1.47 1.47 0 0 0-.91.38 1.44 1.44 0 0 0-.38.91l-.04.68v2a.98.98 0 0 0 .99 1.02A.98.98 0 0 0 6.05 16v-2h9.97v2a1 1 0 0 0 2 0v-2h10.02v2a.98.98 0 0 0 .98 1.02.98.98 0 0 0 1.02-1.02v-2.68a1.44 1.44 0 0 0-.41-.87 1.44 1.44 0 0 0-.9-.38c-.24-.07-.46-.07-.69-.07H18v-1.97H19a3.02 3.02 0 0 0 2.98-3.02V3.99A3.02 3.02 0 0 0 18.97 1Zm0 2h4c.58 0 1 .46 1 1.02v3.03c0 .53-.42.98-1 .98h-4A.98.98 0 0 1 13.98 7V3.99A1 1 0 0 1 15 3zM3 18A3.02 3.02 0 0 0 0 21.04v3.02A3 3 0 0 0 3.02 27H7a3.02 3.02 0 0 0 3.02-2.99V21A3.02 3.02 0 0 0 7 18.01ZM15 18a3.02 3.02 0 0 0-3.02 3.03v3.02A3 3 0 0 0 15 27h4a3.02 3.02 0 0 0 3-2.99V21a3.02 3.02 0 0 0-3.03-2.98Zm11.98 0a3.02 3.02 0 0 0-3.02 3.03v3.02c0 1.63 1.4 2.95 3.02 2.95h4a3.02 3.02 0 0 0 3.03-2.99V21A3.02 3.02 0 0 0 31 18.01ZM2.95 20.06h4.04a1 1 0 0 1 1.02 1.02v3.02c0 .53-.45.94-1.02.94H3.02a.98.98 0 0 1-.98-.98v-3.02c0-.53.38-.95.95-.98zm11.98 0H19c.57 0 .98.41.98 1.02v3.02c0 .53-.41.94-.98.94h-4a.98.98 0 0 1-1.03-.98v-3.02a1 1 0 0 1 .95-.98zm12.01 0H31A1 1 0 0 1 32 21.07v3.02c0 .53-.45.94-1.02.94h-4a.98.98 0 0 1-.99-.98v-3.02c0-.53.38-.95.94-.98Z"
  ],
  name: "hierarchy-14"
}, $a = {
  icon: [
    40,
    32,
    "M17 1c-1.64 0-3 1.36-3 3v4a3 3 0 0 0 3 3h2v3H8c-.83 0-1.55.39-2.08.92A2.95 2.95 0 0 0 5 17v2a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2c0-.17.11-.45.33-.67.22-.22.5-.33.67-.33h11v3a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-3h11c.17 0 .45.11.66.33.22.22.34.5.34.67v2a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2c0-.83-.39-1.55-.92-2.08A2.95 2.95 0 0 0 32 14H21v-3h2a3 3 0 0 0 3-3V4c0-1.64-1.35-3-3-3Zm0 2h6c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1h-6c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1ZM3 21a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6c1.64 0 3-1.36 3-3v-4c0-1.65-1.36-3-3-3zm14 0a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zm14 0a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6c1.64 0 3-1.36 3-3v-4c0-1.65-1.36-3-3-3zM3 23h6c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1H3c-.58 0-1-.43-1-1v-4c0-.57.42-1 1-1zm14 0h6c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1h-6c-.57 0-1-.43-1-1v-4c0-.57.43-1 1-1zm14 0h6c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1h-6c-.58 0-1-.43-1-1v-4c0-.57.42-1 1-1z"
  ],
  name: "hierarchy"
}, Aa = {
  icon: [
    28,
    24,
    "M3.9 1A3.9 3.9 0 0 0 0 4.86v14.28A3.9 3.9 0 0 0 3.9 23h20.2a3.9 3.9 0 0 0 3.9-3.86V4.86A3.9 3.9 0 0 0 24.1 1Zm0 2h20.2c1.08 0 1.9.82 1.9 1.86v10.43h-3.78l-3.37-2.01a1 1 0 0 0-.51-.14h-2.37L13.38 9.3a1 1 0 0 0-1.42-.24l-1.93 1.43-2.36-4.66a1 1 0 0 0-1.72-.1L2 11.58V4.86C2 3.82 2.82 3 3.9 3ZM22 5a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2ZM6.65 8.26l2.13 4.2a1 1 0 0 0 1.48.34l2.05-1.52 2.3 3.43a1 1 0 0 0 .83.43h2.62l3.38 2a1 1 0 0 0 .5.15H26v1.85c0 1.04-.82 1.86-1.9 1.86H3.9C2.81 21 2 20.18 2 19.14v-3.98z"
  ],
  name: "image-12"
}, xa = {
  icon: [
    33,
    28,
    "M4.44 1A4.45 4.45 0 0 0 0 5.43v17.14C0 25.01 2 27 4.44 27h24.12A4.45 4.45 0 0 0 33 22.57V5.43C33 2.99 31 1 28.56 1Zm0 2h24.12A2.41 2.41 0 0 1 31 5.43v12.72h-4.75l-4.07-2.43a1 1 0 0 0-.51-.14h-2.91l-3.15-4.7a1 1 0 0 0-1.43-.25L11.7 12.5l-2.9-5.8a1 1 0 0 0-1.73-.1L2 14.14V5.43A2.41 2.41 0 0 1 4.44 3zm20.68 2.29a3.6 3.6 0 0 0-3.6 3.57 3.6 3.6 0 0 0 7.18 0 3.6 3.6 0 0 0-3.58-3.57zm0 2c.88 0 1.58.69 1.58 1.57 0 .88-.7 1.58-1.58 1.58-.9 0-1.6-.7-1.6-1.58 0-.88.7-1.58 1.6-1.58zM7.77 9.11l2.67 5.33a1 1 0 0 0 1.49.35l2.6-1.94 2.86 4.26a1 1 0 0 0 .84.45h3.16L25.46 20a1 1 0 0 0 .51.14H31v2.43A2.41 2.41 0 0 1 28.56 25H4.44A2.41 2.41 0 0 1 2 22.57v-4.84z"
  ],
  name: "image-14"
}, _a = {
  icon: [
    38,
    32,
    "M5 1C2.25 1 0 3.25 0 6v20a5 5 0 0 0 5 5h28c2.75 0 5-2.25 5-5V6c0-2.75-2.25-5-5-5Zm0 2h28c1.68 0 3 1.33 3 3v15h-5.72l-4.77-2.85a1 1 0 0 0-.5-.15h-3.48l-3.7-5.55a1 1 0 0 0-1.43-.24l-3.05 2.28L9.9 7.55a1 1 0 0 0-1.73-.1L2 16.7V6c0-1.67 1.32-3 3-3Zm23.9 3a4.02 4.02 0 0 0-3.9 4c0 2.2 1.8 4 4 4a4.01 4.01 0 0 0 0-8h-.1zm.1 2c1.12 0 2 .89 2 2 0 1.12-.88 2-2 2-1.11 0-2-.88-2-2 0-1.11.89-2 2-2zM8.88 10l3.23 6.45a1 1 0 0 0 1.49.35l3.15-2.36 3.42 5.12A1 1 0 0 0 21 20h3.72l4.76 2.86A1 1 0 0 0 30 23h6v3c0 1.67-1.32 3-3 3H5c-1.68 0-3-1.33-3-3v-5.7z"
  ],
  name: "image"
}, Ta = {
  icon: [
    24,
    24,
    "M12 0C5.4 0 0 5.39 0 12A12 12 0 1 0 12 0Zm0 2c5.54 0 10 4.47 10 10 0 5.54-4.46 10-10 10a10 10 0 1 1 0-20zm0 7a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  ],
  name: "numeric-12"
}, Ea = {
  icon: [
    28,
    28,
    "M14 0C6.28 0 0 6.28 0 14s6.28 14 14 14a14 14 0 0 0 0-28Zm0 2c6.64 0 12 5.36 12 12s-5.36 12-12 12S2 20.64 2 14A12 12 0 0 1 14 2Zm0 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  ],
  name: "numeric-14"
}, wa = {
  icon: [
    32,
    32,
    "M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zM16 0a16 16 0 0 0 0 32c8.82 0 16-7.18 16-16 0-8.83-7.18-16-16-16Zm0 2A14 14 0 1 1 2 16C2 8.25 8.25 2 16 2z"
  ],
  name: "numeric"
}, Ca = {
  icon: [
    24,
    24,
    "M12 0C5.4 0 0 5.39 0 12A12 12 0 1 0 12 0Zm0 2c5.54 0 10 4.47 10 10 0 5.54-4.46 10-10 10a10 10 0 1 1 0-20zm0 2a1 1 0 0 0-1 1v7.84a1 1 0 0 0 .38.8l4 3.15a1 1 0 0 0 1.4-.17 1 1 0 0 0-.16-1.4L13 12.37V5a1 1 0 0 0-1-1Z"
  ],
  name: "time-12"
}, Sa = {
  icon: [
    28,
    28,
    "M14 0C6.28 0 0 6.28 0 14s6.28 14 14 14a14 14 0 0 0 0-28Zm0 2c6.64 0 12 5.36 12 12s-5.36 12-12 12S2 20.64 2 14A12 12 0 0 1 14 2Zm0 3a1 1 0 0 0-1 1v9a1 1 0 0 0 .38.78l5 4a1 1 0 0 0 1.4-.16 1 1 0 0 0-.16-1.4L15 14.52V6a1 1 0 0 0-1-1Z"
  ],
  name: "time-14"
}, Ma = {
  icon: [
    32,
    32,
    "M16 0a16 16 0 0 0 0 32c8.82 0 16-7.18 16-16 0-8.83-7.18-16-16-16Zm0 2A14 14 0 1 1 2 16C2 8.25 8.25 2 16 2Zm0 4a1 1 0 0 0-1 1v10.16a1 1 0 0 0 .37.77l6 4.85a1 1 0 0 0 1.41-.16 1 1 0 0 0-.16-1.4L17 16.68V7a1 1 0 0 0-1-1Z"
  ],
  name: "time"
}, Pa = {
  icon: [
    26,
    24,
    "M18 .85c-2.7 0-5.4.82-7.6 2.47a1 1 0 0 0-.2 1.4 1 1 0 0 0 1.4.2 11.04 11.04 0 0 1 12.8 0 1 1 0 0 0 1.4-.2 1 1 0 0 0-.2-1.4A12.78 12.78 0 0 0 18 .85zm0 3.79c-1.71 0-3.46.56-4.7 1.76a1 1 0 0 0-.02 1.42 1 1 0 0 0 1.42.02A4.9 4.9 0 0 1 18 6.64c1.28 0 2.52.43 3.28 1.19a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42A6.56 6.56 0 0 0 18 4.64zm0 3.48a1 1 0 0 0-1 1v5a1 1 0 0 0 0 .03H3.19A3.2 3.2 0 0 0 0 17.33v3.61a3.2 3.2 0 0 0 3.18 3.18h19.64A3.2 3.2 0 0 0 26 20.94v-3.61a3.2 3.2 0 0 0-3.18-3.18h-3.83a1 1 0 0 0 .01-.03v-5a1 1 0 0 0-1-1zM3.18 16.15h19.64c.67 0 1.18.5 1.18 1.18v3.61c0 .67-.5 1.18-1.18 1.18H3.18c-.67 0-1.18-.5-1.18-1.18v-3.61c0-.67.5-1.18 1.18-1.18zM5 18.12a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zM18 14.12v-5"
  ],
  name: "router-12"
}, Oa = {
  icon: [
    30,
    28,
    "M21-.2c-3 0-6 1-8.6 3.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 1.4.2c4.7-3.8 10-3.8 14.8 0a1 1 0 0 0 1.4-.2 1 1 0 0 0-.2-1.4A13.9 13.9 0 0 0 21-.2zm0 4.8c-2 0-4 .8-5.7 2.5a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0c1.4-1.3 2.8-2 4.3-2a6 6 0 0 1 4.3 2 1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4A8 8 0 0 0 21 4.6zm0 5.2a1 1 0 0 0-1 1v6H3.8c-2 0-3.8 1.7-3.8 3.8V24c0 2 1.7 3.8 3.8 3.8h22.4c2 0 3.8-1.7 3.8-3.8v-3.4c0-2.1-1.7-3.8-3.8-3.8H22v-6a1 1 0 0 0-1-1zM3.8 18.7h22.4c1 0 1.9.8 1.9 1.9V24c0 1-.8 1.9-1.9 1.9H3.8c-1 0-1.9-.9-1.9-2v-3.3c0-1 .8-2 1.9-2zm1.7 2A1.5 1.5 0 0 0 4 22.4a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 7 22.3a1.5 1.5 0 0 0-1.5-1.5zm6 0a1.5 1.5 0 0 0-1.5 1.6 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"
  ],
  name: "router-14"
}, La = {
  icon: [
    35,
    32,
    "M24-.2c-4 0-7.9 1-10.6 3.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 1.4.2C17 2.8 20.4 1.8 24 1.8c3.6 0 7.1 1 9.4 2.8a1 1 0 0 0 1.4-.2 1 1 0 0 0-.2-1.4A17.3 17.3 0 0 0 24-.2zm.4 5.7c-2.4 0-4.8.9-7 2.5a1 1 0 0 0-.2 1.4 1 1 0 0 0 1.4.2c3.7-2.8 8-2.7 10.7-.1a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4 8.8 8.8 0 0 0-6.3-2.6zm-.4 5.3a1 1 0 0 0-1 1v7H4.4c-2.4 0-4.4 2-4.4 4.4v4.2c0 2.4 2 4.4 4.4 4.4h26.2c2.4 0 4.4-2 4.4-4.4v-4.2c0-2.4-2-4.4-4.4-4.4H25v-7a1 1 0 0 0-1-1zm-19.6 10h26.2c1.3 0 2.4 1 2.4 2.4v4.2c0 1.3-1 2.4-2.4 2.4H4.4c-1.3 0-2.4-1-2.4-2.4v-4.2c0-1.4 1-2.4 2.4-2.4zm2.1 3A1.5 1.5 0 0 0 5 25.3a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 8 25.3a1.5 1.5 0 0 0-1.5-1.5zm5 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm5 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"
  ],
  name: "router-16"
};
function cn(o, { prefix: t, className: e, color: r } = {}) {
  return Ge`<svg
    aria-hidden="true"
    focusable="false"
    data-icon="${o.name}"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${o.icon[0]} ${o.icon[1]}"
    class="${e ? e + " " : ""}${t || "luzmo-icon"} ${t || "luzmo-icon"}-${o.name}"
    style="overflow: visible; box-sizing: content-box;height: 1em; vertical-align: var(--luzmo-icon-vertical-align, var(--icon-vertical-align, -.125em));"
    fill="${r || "currentColor"}">
    ${(Array.isArray(o.icon[2]) ? o.icon[2] : [o.icon[2]]).map((i, a) => {
    var n;
    return Ge`<path d="${i}" style="fill:${o.icon[3] && (n = o.icon[3]) != null && n[a] ? o.icon[3][a] : "currentColor"}"></path>`;
  })}
  </svg>`;
}
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wo = (o) => o ?? x;
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
const un = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
un();
const pn = ":host{pointer-events:none;transform:none;transform:var(--luzmo-icon-transform, none);inline-size:var(--luzmo-icon-inline-size, var(--luzmo-icon-size, var(--icon-size)));block-size:var(--luzmo-icon-block-size, var(--luzmo-icon-size, var(--icon-size)));font-size:var(--luzmo-icon-block-size, var(--luzmo-icon-size, var(--icon-size)));color:inherit;color:var(--luzmo-icon-color, inherit);fill:currentColor;display:inline-block}::slotted(svg),:host svg,:host img{--icon-vertical-align: var(--parent-element-icon-vertical-align, -.125em);vertical-align:var(--icon-vertical-align)!important}:host([block]){display:block;vertical-align:0}:host([block]) svg,:host([block]) img{--icon-vertical-align: var(--parent-element-icon-vertical-align, 0)}:host([size=xxs]){--icon-size: var(--luzmo-icon-size-xxs)}:host([size=xs]){--icon-size: var(--luzmo-icon-size-xs)}:host([size=s]){--icon-size: var(--luzmo-icon-size-s)}:host,:host([size=m]){--icon-size: var(--luzmo-icon-size-m)}:host([size=l]){--icon-size: var(--luzmo-icon-size-l)}:host([size=xl]){--icon-size: var(--luzmo-icon-size-xl)}:host([size=xxl]){--icon-size: var(--luzmo-icon-size-xxl)}:host(:not(:root)){overflow:visible}@media (forced-colors: active){:host{forced-color-adjust:auto}}img,svg,::slotted(*){height:100%;width:100%;vertical-align:top;color:inherit}@media (forced-colors: active){img,svg,::slotted(*){forced-color-adjust:auto}}";
var dn = Object.defineProperty, qo = (o, t, e, r) => {
  for (var i = void 0, a = o.length - 1, n; a >= 0; a--)
    (n = o[a]) && (i = n(t, e, i) || i);
  return i && dn(t, e, i), i;
};
class xe extends he {
  constructor() {
    super(...arguments), this.label = "";
  }
  static get styles() {
    return [ce(pn)];
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  update(t) {
    t.has("label") && (this.label ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true")), super.update(t);
  }
  render() {
    return kt` <slot></slot> `;
  }
}
qo([
  T({ reflect: !0 })
], xe.prototype, "label");
qo([
  T({ reflect: !0 })
], xe.prototype, "size");
var hn = Object.defineProperty, Nt = (o, t, e, r) => {
  for (var i = void 0, a = o.length - 1, n; a >= 0; a--)
    (n = o[a]) && (i = n(t, e, i) || i);
  return i && hn(t, e, i), i;
};
class xt extends xe {
  constructor() {
    super(...arguments), this.block = !1;
  }
  render() {
    return this.icon ? cn(this.icon, this.options) : this.src ? kt` <img src=${this.src} alt=${Wo(this.label)} /> ` : super.render();
  }
}
Nt([
  T()
], xt.prototype, "src");
Nt([
  T()
], xt.prototype, "options");
Nt([
  T()
], xt.prototype, "icon");
Nt([
  T({ type: Boolean })
], xt.prototype, "block");
customElements.get("luzmo-icon") || customElements.define("luzmo-icon", xt);
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fo = (o, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(o, t, e), e);
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ko(o, t) {
  return (e, r, i) => {
    const a = (n) => {
      var s;
      return ((s = n.renderRoot) == null ? void 0 : s.querySelector(o)) ?? null;
    };
    if (t) {
      const { get: n, set: s } = typeof r == "object" ? e : i ?? (() => {
        const l = Symbol();
        return { get() {
          return this[l];
        }, set(c) {
          this[l] = c;
        } };
      })();
      return fo(e, r, { get() {
        let l = n.call(this);
        return l === void 0 && (l = a(this), (l !== null || this.hasUpdated) && s.call(this, l)), l;
      } });
    }
    return fo(e, r, { get() {
      return a(this);
    } });
  };
}
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
const Yo = [
  "button",
  "[focusable]",
  "[href]",
  "input",
  "label",
  "select",
  "textarea",
  "[tabindex]"
], vo = ':not([tabindex="-1"])', ka = Yo.join(`${vo}, `) + vo, mn = Yo.join(", ");
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
const fn = Symbol(
  "dependency manager loaded"
);
class vn {
  constructor(t) {
    this.dependencies = {}, this._loaded = !1, this.host = t;
  }
  /**
   * Whether all of the provided dependencies have been registered.
   * This will be `false` when no dependencies have been listed for management.
   * Changes to this value will trigger `requestUpdate()` on the host.
   */
  get loaded() {
    return this._loaded;
  }
  set loaded(t) {
    t !== this.loaded && (this._loaded = t, this.host.requestUpdate(fn, !this.loaded));
  }
  /**
   * Submit a custom element tag name to be managed as a dependency.
   *
   * @param dependency {string} - the custom element tag to manage
   * @param alreadyLoaded {boolean} - force the managemented custom element to be listed as loaded
   */
  add(t, e) {
    const r = !!e || !!customElements.get(t) || this.dependencies[t];
    r || customElements.whenDefined(t).then(() => {
      this.add(t, !0);
    }), this.dependencies = {
      ...this.dependencies,
      [t]: r
    }, this.loaded = Object.values(this.dependencies).every(Boolean);
  }
}
/*! * Lucero - The design system for Luzmo.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Lucero (“Luzmo Design System”) must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account to use Lucero.
 * This license terminates automatically if a user no longer has an active Luzmo account.
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
const gn = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
gn();
const bn = "#tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform .13s ease-in-out,opacity .13s ease-in-out,visibility 0s linear .13s;transition:transform var(--luzmo-overlay-animation-duration, .13s) ease-in-out,opacity var(--luzmo-overlay-animation-duration, .13s) ease-in-out,visibility 0s linear var(--luzmo-overlay-animation-duration, .13s)}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:0s;transition-delay:var(--luzmo-overlay-animation-duration-opened, 0s)}@media (forced-colors: active){#tooltip{border:1px solid rgba(0,0,0,0)}#tip{--highcontrast-tooltip-background-color-default: CanvasText;--highcontrast-tooltip-background-color-informative: CanvasText;--highcontrast-tooltip-background-color-positive: CanvasText;--highcontrast-tooltip-background-color-negative: CanvasText;forced-color-adjust:none}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--luzmo-tooltip-spacing-inline, .688rem);border-radius:var(--luzmo-tooltip-border-radius, .313rem);block-size:auto;min-block-size:var(--luzmo-tooltip-height, 1.875rem);max-inline-size:var(--luzmo-tooltip-max-inline-size, 12.5rem);background-color:var(--highcontrast-tooltip-background-color-default, var(--luzmo-tooltip-background-color-default, rgb(109, 109, 109)));color:var(--luzmo-tooltip-content-color, white);font-size:var(--luzmo-tooltip-font-size, var(--tooltip-font-size, .938rem));font-weight:var(--luzmo-tooltip-font-weight, 400);line-height:var(--luzmo-tooltip-line-height, 1.3);word-break:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--luzmo-tooltip-cjk-line-height, 1.5)}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative, var(--luzmo-tooltip-background-color-informative, rgb(2, 101, 220)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive, var(--luzmo-tooltip-background-color-positive, rgb(0, 122, 77)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative, var(--luzmo-tooltip-background-color-negative, rgb(211, 21, 16)))}#tip{block-size:var(--luzmo-tooltip-tip-square-size, .625rem);inline-size:var(--luzmo-tooltip-tip-square-size, .625rem);inset-block-start:100%;background-color:var(--highcontrast-tooltip-background-color-default, var(--luzmo-tooltip-background-color-default, rgb(109, 109, 109)));clip-path:polygon(0 calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)),50% var(--luzmo-tooltip-tip-height-percentage, 50%),100% calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)));position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative, var(--luzmo-tooltip-background-color-informative, rgb(2, 101, 220)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive, var(--luzmo-tooltip-background-color-positive, rgb(0, 122, 77)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative, var(--luzmo-tooltip-background-color-negative, rgb(211, 21, 16)))}:host([placement*=top]) #tooltip #tip,.luzmo-Tooltip--top-end #tip,.luzmo-Tooltip--top-left #tip,.luzmo-Tooltip--top-right #tip,.luzmo-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--luzmo-tooltip-tip-height-percentage, 50%)),0 calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)),100% calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)));inset-block:auto 100%}.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--bottom-start #tip,.luzmo-Tooltip--top-end #tip,.luzmo-Tooltip--top-left #tip,.luzmo-Tooltip--top-right #tip,.luzmo-Tooltip--top-start #tip{transform:none}.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--top-left #tip{inset-inline-start:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--top-right #tip{inset-inline:auto var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-start #tip,.luzmo-Tooltip--top-start #tip{inset-inline:var(--luzmo-tooltip-pointer-corner-spacing, .313rem) auto}.luzmo-Tooltip--bottom-start #tip:dir(rtl),.luzmo-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--bottom-start #tip,:host([dir=rtl]) .luzmo-Tooltip--top-start #tip{right:var(--luzmo-tooltip-pointer-corner-spacing, .313rem);left:auto}.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--top-end #tip{inset-inline:auto var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-end #tip:dir(rtl),.luzmo-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--bottom-end #tip,:host([dir=rtl]) .luzmo-Tooltip--top-end #tip{left:var(--luzmo-tooltip-pointer-corner-spacing, .313rem);right:auto}.luzmo-Tooltip--end #tip,.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.luzmo-Tooltip--end #tip,.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--luzmo-tooltip-tip-height-percentage, 50%)) 50%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--start #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0,calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,var(--luzmo-tooltip-tip-height-percentage, 50%) 50%);inset-inline-start:100%}.luzmo-Tooltip--end-top #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--start-bottom #tip{inset-block-end:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--end #tip:dir(rtl),.luzmo-Tooltip--end-bottom #tip:dir(rtl),.luzmo-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.luzmo-Tooltip--left-bottom #tip:dir(rtl),.luzmo-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--end #tip,:host([dir=rtl]) .luzmo-Tooltip--end-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .luzmo-Tooltip--left-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0,calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,var(--luzmo-tooltip-tip-height-percentage, 50%) 50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.luzmo-Tooltip--right-bottom #tip:dir(rtl),.luzmo-Tooltip--right-top #tip:dir(rtl),.luzmo-Tooltip--start #tip:dir(rtl),.luzmo-Tooltip--start-bottom #tip:dir(rtl),.luzmo-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .luzmo-Tooltip--right-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--right-top #tip,:host([dir=rtl]) .luzmo-Tooltip--start #tip,:host([dir=rtl]) .luzmo-Tooltip--start-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--start-top #tip{clip-path:polygon(var(--luzmo-tooltip-tip-height-percentage, 50%) 50%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--luzmo-tooltip-icon-width, 1.125rem);block-size:var(--luzmo-tooltip-icon-height, 1.125rem);flex-shrink:0;align-self:flex-start;margin-block-start:var(--luzmo-tooltip-icon-spacing-block-start, .313rem);margin-inline-start:calc(var(--luzmo-tooltip-icon-spacing-inline-start, .563rem) - var(--luzmo-tooltip-spacing-inline, .688rem));margin-inline-end:var(--luzmo-tooltip-icon-spacing-inline-end, .563rem)}#label{line-height:var(--luzmo-tooltip-line-height, 1.3);margin-block-start:var(--luzmo-tooltip-spacing-block-start, .313rem);margin-block-end:var(--luzmo-tooltip-spacing-block-end, .375rem)}#tooltip,:host([placement*=top]) #tooltip,.luzmo-Tooltip--top-end,.luzmo-Tooltip--top-left,.luzmo-Tooltip--top-right,.luzmo-Tooltip--top-start{margin-block-end:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--top-end,:host([open]) .luzmo-Tooltip--top-left,:host([open]) .luzmo-Tooltip--top-right,:host([open]) .luzmo-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host([placement*=bottom]) #tooltip,.luzmo-Tooltip--bottom-end,.luzmo-Tooltip--bottom-left,.luzmo-Tooltip--bottom-right,.luzmo-Tooltip--bottom-start{margin-block-start:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--bottom-end,:host([open]) .luzmo-Tooltip--bottom-left,:host([open]) .luzmo-Tooltip--bottom-right,:host([open]) .luzmo-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--luzmo-tooltip-animation-distance, .313rem))}:host([placement*=right]) #tooltip,.luzmo-Tooltip--right-bottom,.luzmo-Tooltip--right-top{margin-left:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--right-bottom,:host([open]) .luzmo-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}:host([placement*=left]) #tooltip,.luzmo-Tooltip--left-bottom,.luzmo-Tooltip--left-top{margin-right:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--left-bottom,:host([open]) .luzmo-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}.luzmo-Tooltip--start,.luzmo-Tooltip--start-bottom,.luzmo-Tooltip--start-top{margin-inline-end:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--start-bottom,:host([open]) .luzmo-Tooltip--start-top,:host([open]) .luzmo-Tooltip--start{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host([open]) .luzmo-Tooltip--start-bottom:dir(rtl),:host([open]) .luzmo-Tooltip--start-top:dir(rtl),:host([open]) .luzmo-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .luzmo-Tooltip--start-bottom,:host([dir=rtl][open]) .luzmo-Tooltip--start-top,:host([dir=rtl][open]) .luzmo-Tooltip--start{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}.luzmo-Tooltip--end,.luzmo-Tooltip--end-bottom,.luzmo-Tooltip--end-top{margin-inline-start:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--end-bottom,:host([open]) .luzmo-Tooltip--end-top,:host([open]) .luzmo-Tooltip--end{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}:host([open]) .luzmo-Tooltip--end-bottom:dir(rtl),:host([open]) .luzmo-Tooltip--end-top:dir(rtl),:host([open]) .luzmo-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .luzmo-Tooltip--end-bottom,:host([dir=rtl][open]) .luzmo-Tooltip--end-top,:host([dir=rtl][open]) .luzmo-Tooltip--end{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host{--luzmo-tooltip-background-color-default: rgb(0, 0, 0);--tooltip-font-size: var(--luzmo-font-size)}:host([size=s]){--tooltip-font-size: var(--luzmo-font-size-s)}:host([size=m]){--tooltip-font-size: var(--luzmo-font-size-m)}:host([size=l]){--tooltip-font-size: var(--luzmo-font-size-l)}:host([size=xl]){--tooltip-font-size: var(--luzmo-font-size-xl)}:host{display:contents;white-space:initial}#tooltip{inline-size:max-content}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:.625rem!important;height:.625rem!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{inset-block-end:100%;clip-path:polygon(50% 50%,0 105%,100% 105%);top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--luzmo-tooltip-tip-block-size, .313rem) * -2) 100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}luzmo-overlay:not(:defined){display:none}";
var zn = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, O = (o, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? yn(t, e) : t, a = o.length - 1, n; a >= 0; a--)
    (n = o[a]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && zn(t, e, i), i;
};
class $n extends HTMLElement {
  constructor() {
    super(), this._open = !1, this._placement = "top", this.addEventListener("luzmo-opened", this.redispatchEvent), this.addEventListener("luzmo-closed", this.redispatchEvent);
  }
  redispatchEvent(t) {
    t.stopPropagation(), this.tooltip.dispatchEvent(
      new CustomEvent(t.type, {
        bubbles: t.bubbles,
        composed: t.composed,
        detail: t.detail
      })
    );
  }
  get tooltip() {
    return this.getRootNode().host;
  }
  static get observedAttributes() {
    return ["open", "placement"];
  }
  attributeChangedCallback(t, e, r) {
    switch (t) {
      // API generally sets `open` as a property
      /* c8 ignore next 3 */
      case "open": {
        this.open = r !== null;
        break;
      }
      case "placement": {
        this.placement = r;
        break;
      }
    }
  }
  set open(t) {
    this._open = t;
    const { tooltip: e } = this;
    e && (e.open = t);
  }
  /* c8 ignore next 3 */
  get open() {
    return this._open;
  }
  /**
   * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"}
   * @attr
   */
  set placement(t) {
    this._placement = t;
    const { tooltip: e } = this;
    e && (e.placement = t);
  }
  /* c8 ignore next 3 */
  get placement() {
    return this._placement;
  }
  get tipElement() {
    return this.tooltip.tipElement;
  }
}
customElements.get("luzmo-tooltip-openable") || customElements.define("luzmo-tooltip-openable", $n);
class M extends Zr(he, {
  defaultSize: "s"
}) {
  constructor() {
    super(...arguments), this.delayed = !1, this.dependencyManager = new vn(this), this.disabled = !1, this.selfManaged = !1, this.offset = 0, this.open = !1, this._variant = "", this.handleOpenOverlay = () => {
      this.open = !0;
    }, this.handleCloseOverlay = () => {
      this.open = !1;
    };
  }
  static get styles() {
    return [ce(bn)];
  }
  get variant() {
    return this._variant;
  }
  set variant(t) {
    if (t !== this.variant) {
      if (["info", "positive", "negative"].includes(t)) {
        this.setAttribute("variant", t), this._variant = t;
        return;
      }
      this.removeAttribute("variant"), this._variant = "";
    }
  }
  forwardTransitionEvent(t) {
    this.dispatchEvent(
      new TransitionEvent(t.type, {
        bubbles: !0,
        composed: !0,
        propertyName: t.propertyName
      })
    );
  }
  get triggerElement() {
    var t;
    let e = this.assignedSlot || this, r = e.getRootNode();
    if (r === document)
      return null;
    let i = e.parentElement || r.host || /* c8 ignore next 1 */
    r;
    for (; !((t = i == null ? void 0 : i.matches) != null && t.call(i, mn)); ) {
      if (e = i.assignedSlot || i, r = e.getRootNode(), r === document)
        return null;
      i = e.parentElement || r.host || /* c8 ignore next 1 */
      r;
    }
    return i;
  }
  render() {
    const t = kt`
      <luzmo-tooltip-openable
        id="tooltip"
        placement=${Wo(this.placement)}
        @transitionrun=${this.forwardTransitionEvent}
        @transitionend=${this.forwardTransitionEvent}
        @transitioncancel=${this.forwardTransitionEvent}
      >
        <slot name="icon"></slot>
        <span id="label"><slot></slot></span>
        <span id="tip" aria-hidden="true"></span>
      </luzmo-tooltip-openable>
    `;
    return this.selfManaged ? (this.dependencyManager.add("luzmo-overlay"), import("./index-D3gj5tVe.js").then((e) => e.i), kt`
        <luzmo-overlay
          ?open=${this.open && !this.disabled && this.dependencyManager.loaded}
          ?delayed=${this.delayed}
          ?disabled=${this.disabled}
          offset=${this.offset}
          .placement=${this.placement}
          type="hint"
          .tipPadding=${this.tipPadding}
          .triggerInteraction=${"hover"}
          @luzmo-opened=${this.handleOpenOverlay}
          @luzmo-closed=${this.handleCloseOverlay}
        >
          ${t}
        </luzmo-overlay>
      `) : t;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      if (!this.selfManaged)
        return;
      const t = this.overlayElement;
      if (t) {
        const e = this.triggerElement;
        t.triggerElement = e;
      }
    });
  }
}
O([
  T({ type: Boolean })
], M.prototype, "delayed", 2);
O([
  T({ type: Boolean })
], M.prototype, "disabled", 2);
O([
  T({ type: Boolean, attribute: "self-managed" })
], M.prototype, "selfManaged", 2);
O([
  T({ type: Number })
], M.prototype, "offset", 2);
O([
  T({ type: Boolean, reflect: !0 })
], M.prototype, "open", 2);
O([
  Ko("luzmo-overlay")
], M.prototype, "overlayElement", 2);
O([
  T({ reflect: !0 })
], M.prototype, "placement", 2);
O([
  Ko("#tip")
], M.prototype, "tipElement", 2);
O([
  T({ type: Number })
], M.prototype, "tipPadding", 2);
O([
  T({ type: String })
], M.prototype, "variant", 1);
customElements.get("luzmo-tooltip") || customElements.define("luzmo-tooltip", M);
const Ha = (o, t) => {
  let e = getComputedStyle(o).getPropertyValue(t);
  for (; !e && o.parentElement; )
    o = o.parentElement, e = getComputedStyle(o).getPropertyValue(t);
  return e.trim();
};
export {
  Bn as $,
  Aa as A,
  sa as B,
  ia as C,
  va as D,
  _ as E,
  Fn as F,
  aa as G,
  kt as H,
  Wn as I,
  pa as J,
  ua as K,
  fa as L,
  ha as M,
  _a as N,
  cn as O,
  Ma as P,
  xa as Q,
  T as R,
  ma as S,
  Rn as T,
  Sa as U,
  ca as V,
  Jn as W,
  Ta as X,
  Ea as Y,
  la as Z,
  wa as _,
  Zr as a,
  Ca as a0,
  sn as a1,
  ta as a2,
  Qn as a3,
  ea as a4,
  ra as a5,
  oa as a6,
  La as a7,
  Oa as a8,
  Pa as a9,
  $a as aa,
  ya as ab,
  za as ac,
  Ha as ad,
  Un as ae,
  da as af,
  qn as ag,
  Xn as ah,
  jn as ai,
  ge as aj,
  Vn as ak,
  Kn as al,
  ze as am,
  Dn as an,
  Zn as ao,
  Yn as ap,
  x as b,
  Ko as c,
  Gn as d,
  wn as e,
  na as f,
  Nn as g,
  ce as h,
  vn as i,
  In as j,
  he as k,
  An as l,
  Go as m,
  kn as n,
  fe as o,
  Wo as p,
  fo as q,
  Br as r,
  Hn as s,
  hi as t,
  ka as u,
  Q as v,
  Mr as w,
  Mn as x,
  ba as y,
  ga as z
};
