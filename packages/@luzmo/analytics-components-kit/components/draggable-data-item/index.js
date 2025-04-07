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
import { y as U, z as oe, D as te, N as A, Q as re, A as ie, W as x, B as R, Z as de, G as ge, J as V, K as se, V as ne, L as F, S as me, M as ue, _ as M, Y as be, X as ce, P as q, U as ve, a0 as he, a1 as H, a2 as ze, a3 as pe, a4 as N, a5 as fe, a6 as ye, a7 as G, a8 as xe, a9 as we, aa as W, ab as ke, ac as $e, ad as Q, a as X, k as Y, r as Z, ae as Se, O as w, af as De, ag as Ce, x as c, ah as Ee, ai as _e, n as i, t as Pe, s as Ie, l as Oe } from "../get-css-variable-Cb4e-hdr.js";
import { D as Le } from "../periods.const-CskvMxlU.js";
import { l as Te } from "../localize-BX7q0S0M.js";
const ae = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const l = document.createElement("style");
    l.setAttribute("data-luzmo-vars", ""), l.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(l);
  }
};
ae();
const je = ":host{font-family:var(--luzmo-draggable-data-item-level-font-family, var(--luzmo-font-family));color:var(--luzmo-draggable-data-item-level-font-color, var(--draggable-data-item-level-font-color))}.draggable-data-item-level{transition:background-color var(--luzmo-animation-duration);background-color:var(--luzmo-draggable-data-item-level-background-color, var(--draggable-data-item-level-background-color));display:flex;justify-content:space-between;align-items:center;padding:0 var(--luzmo-draggable-data-item-level-horizontal-padding, var(--draggable-data-item-level-horizontal-padding));gap:var(--luzmo-draggable-data-item-level-gap, var(--draggable-data-item-level-gap));border-radius:var(--luzmo-draggable-data-item-level-border-radius, var(--draggable-data-item-level-border-radius));border-width:var(--luzmo-draggable-data-item-level-border-width, var(--draggable-data-item-level-border-width));border-style:var(--luzmo-draggable-data-item-level-border-style, var(--draggable-data-item-level-border-style));border-color:var(--luzmo-draggable-data-item-level-border-color, var(--draggable-data-item-level-border-color));height:var(--luzmo-draggable-data-item-level-height, var(--draggable-data-item-level-height));cursor:move}.draggable-data-item-level:hover{background-color:var(--luzmo-draggable-data-item-level-background-color-hover, var(--draggable-data-item-level-background-color-hover))}.draggable-data-item-level .data-label{font-size:var(--luzmo-draggable-data-item-level-label-font-size, var(--draggable-data-item-level-label-font-size));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([sublevel]) .draggable-data-item-level{height:var(--luzmo-draggable-data-item-level-sublevel-height, var(--draggable-data-item-level-sublevel-height));background-color:var(--luzmo-draggable-data-item-level-sublevel-background-color, var(--draggable-data-item-level-sublevel-background-color));border-color:var(--luzmo-draggable-data-item-level-sublevel-border-color, var(--draggable-data-item-level-sublevel-border-color));margin-inline-start:var(--luzmo-draggable-data-item-level-sublevel-margin-inline-start, var(--draggable-data-item-level-sublevel-margin-inline-start))}:host([sublevel]) .draggable-data-item-level:hover{background-color:var(--luzmo-draggable-data-item-level-sublevel-background-color-hover, var(--draggable-data-item-level-sublevel-background-color-hover))}:host([sublevel]) .draggable-data-item-level .drag-handle-icon{width:var(--luzmo-draggable-data-item-level-sublevel-drag-handle-width, var(--draggable-data-item-level-sublevel-drag-handle-width));text-align:center}:host([disabled]) .draggable-data-item-level{background-color:var(--luzmo-draggable-data-item-level-background-color-disabled, var(--draggable-data-item-level-background-color-disabled));color:var(--luzmo-draggable-data-item-level-color-disabled, var(--draggable-data-item-level-color-disabled));cursor:not-allowed}:host([disabled]) .drag-handle-icon{opacity:.25}:host([sublevel][disabled]) .draggable-data-item-level{background-color:var(--luzmo-draggable-data-item-level-sublevel-background-color-disabled, var(--draggable-data-item-level-sublevel-background-color-disabled))}.drag-handle-icon{opacity:.6;font-size:var(--luzmo-draggable-data-item-level-drag-handle-size, var(--luzmo-draggable-data-item-level-drag-handle-size));width:var(--luzmo-draggable-data-item-level-drag-handle-width, var(--luzmo-draggable-data-item-level-drag-handle-width));text-align:center}.data-icon-type{width:var(--luzmo-draggable-data-item-level-data-icon-width, var(--luzmo-draggable-data-item-level-data-icon-width));text-align:center}.data-label{flex-grow:1}.data-description{height:100%;display:flex;align-items:center;background-color:transparent;outline:none;border:none;font-size:var(--luzmo-draggable-data-item-level-label-font-size, var(--draggable-data-item-level-label-font-size))}:host([variant=highlight]){--draggable-data-item-level-background-color: var( --luzmo-background-color-highlight );--draggable-data-item-level-border-color: var( --luzmo-background-color-highlight );--draggable-data-item-level-background-color-hover: var( --luzmo-background-color-highlight-hover )}:host{--draggable-data-item-level-height: var(--luzmo-component-height);--draggable-data-item-level-label-font-size: var(--luzmo-font-size);--draggable-data-item-level-icon-type-size: var(--luzmo-font-size);--draggable-data-item-level-horizontal-padding: var(--luzmo-spacing-5);--draggable-data-item-level-border-width: var(--luzmo-border-width);--draggable-data-item-level-border-style: solid;--draggable-data-item-level-border-color: var(--luzmo-border-color-hover);--draggable-data-item-level-border-radius: var(--luzmo-border-radius);--draggable-data-item-level-gap: var(--luzmo-spacing-4);--draggable-data-item-level-font-color: var(--luzmo-font-color);--draggable-data-item-level-color-disabled: var(--luzmo-color-disabled);--draggable-data-item-level-background-color-disabled: var( --luzmo-background-color-disabled );--luzmo-draggable-data-item-level-drag-handle-size: var(--luzmo-font-size-s);--luzmo-draggable-data-item-level-drag-handle-width: var( --draggable-data-item-level-icon-type-size );--luzmo-draggable-data-item-level-data-icon-width: calc( var(--draggable-data-item-level-icon-type-size) + var(--luzmo-spacing-3) );--draggable-data-item-level-sublevel-height: var(--luzmo-component-height-s);--draggable-data-item-level-sublevel-border-color: transparent;--draggable-data-item-level-sublevel-background-color: transparent;--draggable-data-item-level-sublevel-background-color-disabled: transparent;--draggable-data-item-level-sublevel-margin-inline-start: calc( var(--draggable-data-item-level-gap) + var(--luzmo-draggable-data-item-level-drag-handle-width) );--luzmo-draggable-data-item-level-sublevel-drag-handle-width: var( --luzmo-draggable-data-item-level-data-icon-width );--draggable-data-item-level-sublevel-background-color-hover: rgba( var(--luzmo-border-color-rgb), .05 )}:host([hide-type-icon]){--draggable-data-item-level-sublevel-margin-inline-start: var( --draggable-data-item-level-gap )}:host([size=s]){--draggable-data-item-level-height: var(--luzmo-component-height-s);--draggable-data-item-level-label-font-size: var(--luzmo-font-size-s);--draggable-data-item-level-icon-type-size: var(--luzmo-font-size-s);--draggable-data-item-level-horizontal-padding: var(--luzmo-spacing-4);--draggable-data-item-level-border-radius: var(--luzmo-border-radius);--draggable-data-item-level-gap: var(--luzmo-spacing-3);--draggable-data-item-level-sublevel-height: var(--luzmo-component-height-xs);--luzmo-draggable-data-item-level-drag-handle-size: var(--luzmo-font-size-xs)}:host([size=l]){--draggable-data-item-level-height: var(--luzmo-component-height-l);--draggable-data-item-level-label-font-size: var(--luzmo-font-size-l);--draggable-data-item-level-icon-type-size: var(--luzmo-font-size-l);--draggable-data-item-level-horizontal-padding: var(--luzmo-spacing-5);--draggable-data-item-level-border-radius: var(--luzmo-border-radius-l);--draggable-data-item-level-gap: var(--luzmo-spacing-5);--draggable-data-item-level-sublevel-height: var(--luzmo-component-height);--luzmo-draggable-data-item-level-drag-handle-size: var(--luzmo-font-size)}:host([size=xl]){--draggable-data-item-level-height: var(--luzmo-component-height-xl);--draggable-data-item-level-label-font-size: var(--luzmo-font-size-xl);--draggable-data-item-level-icon-type-size: var(--luzmo-font-size-xl);--draggable-data-item-level-horizontal-padding: var(--luzmo-spacing-5);--draggable-data-item-level-border-radius: var(--luzmo-border-radius-xl);--draggable-data-item-level-gap: var(--luzmo-spacing-5);--draggable-data-item-level-sublevel-height: var(--luzmo-component-height-l);--luzmo-draggable-data-item-level-drag-handle-size: var(--luzmo-font-size-l)}:host{box-sizing:border-box}", s = {
  array: {
    s: te,
    m: oe,
    l: U,
    xl: U
  },
  coordinates: {
    s: ge,
    m: de,
    l: R,
    xl: R
  },
  currency: {
    s: ne,
    m: se,
    l: V,
    xl: V
  },
  date: {
    s: pe,
    m: ze,
    l: H,
    xl: H
  },
  datetime: {
    s: ye,
    m: fe,
    l: N,
    xl: N
  },
  duration: {
    s: ue,
    m: me,
    l: F,
    xl: F
  },
  hierarchy: {
    s: $e,
    m: ke,
    l: W,
    xl: W
  },
  image: {
    s: ie,
    m: re,
    l: A,
    xl: A
  },
  numeric: {
    s: ce,
    m: be,
    l: M,
    xl: M
  },
  time: {
    s: he,
    m: ve,
    l: q,
    xl: q
  },
  topography: {
    s: x,
    m: x,
    l: x,
    xl: x
  },
  ipaddress: {
    s: we,
    m: xe,
    l: G,
    xl: G
  }
}, J = (l, e) => (e == null ? void 0 : e.type) === "array" ? s.array[l] : (e == null ? void 0 : e.type) === "image" ? s.image[l] : (e == null ? void 0 : e.type) === "spatial" ? (e == null ? void 0 : e.subtype) === "topography" ? s.topography[l] : s.coordinates[l] : (e == null ? void 0 : e.type) === "numeric" ? (e == null ? void 0 : e.subtype) === "currency" ? s.currency[l] : (e == null ? void 0 : e.subtype) === "duration" ? s.duration[l] : s.numeric[l] : (e == null ? void 0 : e.type) === "datetime" ? (e == null ? void 0 : e.subtype) === "time" ? s.time[l] : (e == null ? void 0 : e.subtype) === "date" ? s.date[l] : s.datetime[l] : (e == null ? void 0 : e.type) === "hierarchy" && (e == null ? void 0 : e.subtype) === "ipaddress" ? s.ipaddress[l] : s.hierarchy[l], Be = (l) => {
  var b, z, p, f, $, S, D, C, E, _, P, I, O, L, T, j, B;
  const e = l.source.element;
  let a = "";
  (f = (p = (z = (b = l.source) == null ? void 0 : b.element) == null ? void 0 : z.renderRoot) == null ? void 0 : p.querySelector(".data-label")) != null && f.textContent && (a = (D = (S = ($ = l.source) == null ? void 0 : $.element) == null ? void 0 : S.renderRoot) == null ? void 0 : D.querySelector(
    ".data-label"
  ).textContent), a || (a = Te(
    (E = (C = l == null ? void 0 : l.source) == null ? void 0 : C.data) == null ? void 0 : E.label,
    (P = (_ = l == null ? void 0 : l.source) == null ? void 0 : _.element) == null ? void 0 : P.language
  ), a = a || "Untitled");
  const d = (O = (I = l == null ? void 0 : l.source) == null ? void 0 : I.data) == null ? void 0 : O.type, o = (T = (L = l == null ? void 0 : l.source) == null ? void 0 : L.data) == null ? void 0 : T.subtype, r = J(e.size, { type: d, subtype: o }), t = {};
  [
    [
      "borderColor",
      "--luzmo-draggable-data-item-level-border-color",
      "--draggable-data-item-level-border-color"
    ],
    [
      "backgroundColor",
      "--luzmo-draggable-data-item-level-background-color",
      "--draggable-data-item-level-background-color"
    ],
    [
      "color",
      "--luzmo-draggable-data-item-level-font-color",
      "--draggable-data-item-level-font-color"
    ],
    [
      "fontSize",
      "--luzmo-draggable-data-item-level-label-font-size",
      "--draggable-data-item-level-label-font-size"
    ],
    [
      "height",
      "--luzmo-draggable-data-item-level-height",
      "--draggable-data-item-level-height"
    ],
    [
      "borderRadius",
      "--luzmo-draggable-data-item-level-border-radius",
      "--draggable-data-item-level-border-radius"
    ],
    [
      "fontFamily",
      "--luzmo-draggable-data-item-level-font-family",
      "--luzmo-font-family"
    ],
    [
      "horizontalPadding",
      "--luzmo-draggable-data-item-level-horizontal-padding",
      "--draggable-data-item-level-horizontal-padding"
    ],
    [
      "gap",
      "--luzmo-draggable-data-item-level-gap",
      "--draggable-data-item-level-gap"
    ]
  ].forEach(([y, K, ee]) => {
    const le = Q(e, K) || Q(e, ee);
    t[y] = le;
  });
  const g = document.createElement("div"), m = document.createElement("div");
  if (g.innerHTML = a, !((B = (j = l == null ? void 0 : l.source) == null ? void 0 : j.element) != null && B.sublevel)) {
    const y = document.createElement("luzmo-icon");
    y.icon = r, m.append(y);
  }
  return m.append(g), Object.assign(m.style, {
    display: "flex",
    alignItems: "center",
    height: t.height,
    border: `1px solid ${t.borderColor}`,
    backgroundColor: t.backgroundColor,
    borderRadius: t.borderRadius,
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    color: t.color,
    padding: `0 ${t.horizontalPadding}`,
    gap: t.gap
  }), m;
};
var Ue = Object.defineProperty, h = (l, e, a, d) => {
  for (var o = void 0, r = l.length - 1, t; r >= 0; r--)
    (t = l[r]) && (o = t(e, a, o) || o);
  return o && Ue(e, a, o), o;
};
const k = class k extends X(Y, {
  validSizes: ["s", "m", "l", "xl"],
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.language = "en", this.data = {}, this.dataItemLevelDropped = (e) => {
      this.dispatchEvent(
        new CustomEvent("data-item-dropped", {
          bubbles: !0,
          composed: !0,
          cancelable: !0,
          detail: {
            data: e
          }
        })
      );
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._cleanupDraggable();
  }
  firstUpdated(e) {
    this._cleanupDraggable = Se({
      element: this,
      canDrag: () => !this.disabled,
      onDragStart: () => {
        this.style.opacity = "0.5";
      },
      onDrop: () => {
        this.style.opacity = "1", this.dataItemLevelDropped(this.data);
      },
      getInitialData: () => {
        const a = { ...this.data };
        return this.label && this.language && !this.sublevel && (a.label = {}, a.label[this.language] = this.label), this.description && this.language && (a.description = {}, a.description[this.language] = this.description), a;
      },
      onGenerateDragPreview: (a) => {
        const d = a.nativeSetDragImage;
        _e({
          render({ container: o }) {
            const r = Be(a);
            o.append(r);
          },
          nativeSetDragImage: d
        });
      }
    });
  }
  render() {
    var d, o, r, t, g, m, b, z, p, f;
    const e = this.label ?? ((o = (d = this.data) == null ? void 0 : d.label) == null ? void 0 : o[this.language]) ?? ((g = (r = this.data) == null ? void 0 : r.label) == null ? void 0 : g[Object.keys((t = this.data) == null ? void 0 : t.label)[0]]) ?? "Untitled", a = this.description ?? ((b = (m = this.data) == null ? void 0 : m.description) == null ? void 0 : b[this.language]) ?? ((f = (z = this.data) == null ? void 0 : z.description) == null ? void 0 : f[Object.keys((p = this.data) == null ? void 0 : p.description)[0]]);
    return c`
      <div class="draggable-data-item-level">
        <div class="drag-handle-icon">
          ${this.sublevel ? w(De) : w(Ce)}
        </div>
        ${this.sublevel || this.hideTypeIcon ? "" : c`<div class="data-icon-type">
              ${w(J(this.size, this.data))}
            </div>`}
        <div class="data-label">${e}</div>
        ${a ? c`<button class="data-description">
              ${w(Ee)}
              <luzmo-tooltip self-managed placement="top" size=${this.size}>
                ${a}
              </luzmo-tooltip>
            </button>` : ""}
      </div>
    `;
  }
};
k.styles = Z(je);
let u = k;
h([
  i({ type: String, reflect: !0 })
], u.prototype, "variant");
h([
  i({ type: Boolean, reflect: !0, attribute: "hide-type-icon" })
], u.prototype, "hideTypeIcon");
h([
  i({ type: Boolean, reflect: !0 })
], u.prototype, "sublevel");
h([
  i({ type: String, reflect: !0 })
], u.prototype, "language");
h([
  i({ type: Boolean, reflect: !0 })
], u.prototype, "disabled");
h([
  i({ type: String, reflect: !0 })
], u.prototype, "label");
h([
  i({ type: String, reflect: !0 })
], u.prototype, "description");
h([
  i({ type: Object })
], u.prototype, "data");
customElements.get("luzmo-draggable-data-item-level") || customElements.define(
  "luzmo-draggable-data-item-level",
  u
);
const Ae = ":host{--draggable-data-item-sublevels-margin-vertical: var(--luzmo-spacing-1);--draggable-data-item-sublevels-gap: 0}:host([size=s]){--draggable-data-item-sublevels-margin-vertical: var(--luzmo-spacing-1)}:host([size=l]){--draggable-data-item-sublevels-margin-vertical: var(--luzmo-spacing-2)}:host([size=xl]){--draggable-data-item-sublevels-margin-vertical: var(--luzmo-spacing-3)}.draggable-data-item-sublevels{display:flex;flex-direction:column;gap:var(--luzmo-draggable-data-item-sublevels-gap, var(--draggable-data-item-sublevels-gap));margin:var(--luzmo-draggable-data-item-sublevels-margin-vertical, var(--draggable-data-item-sublevels-margin-vertical)) 0}:host{box-sizing:border-box}";
var Re = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, v = (l, e, a, d) => {
  for (var o = d > 1 ? void 0 : d ? Ve(e, a) : e, r = l.length - 1, t; r >= 0; r--)
    (t = l[r]) && (o = (d ? t(e, a, o) : t(o)) || o);
  return d && o && Re(e, a, o), o;
};
let n = class extends X(Y, {
  validSizes: ["s", "m", "l", "xl"],
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.language = "en", this.data = {};
  }
  willUpdate(l) {
    l.has("language") && ([...Pe].includes(this.language) || this.language === "en") && (Ie(this.language), this.requestUpdate());
  }
  renderSublevels() {
    var e, a, d, o, r;
    let l;
    if (((e = this.data) == null ? void 0 : e.type) === "datetime")
      return l = ((a = this.data) == null ? void 0 : a.subtype) === "date" ? this.data.lowestLevel ?? 5 : this.data.lowestLevel ?? 9, c`
        <div class="draggable-data-item-sublevels">
          ${Array.from({ length: l }, (t, g) => {
        const m = Le[g].i18n(), b = { ...this.data, level: g + 1 };
        return c`<luzmo-draggable-data-item-level
              sublevel
              .data=${b}
              .language=${this.language}
              .size=${this.size}
              .variant=${this.variant}
              .disabled=${this.disabled}
              .label=${m}
              ?hide-type-icon=${this.hideTypeIcon}
            ></luzmo-draggable-data-item-level>`;
      })}
        </div>
      `;
    if (((d = this.data) == null ? void 0 : d.type) === "hierarchy" && ((r = (o = this.data) == null ? void 0 : o.hierarchyLevels) == null ? void 0 : r.length) > 2) {
      const t = this.data.hierarchyLevels.filter((g) => (g == null ? void 0 : g.level) >= 1).map((g, m) => {
        const b = { ...this.data, level: m, label: g.label };
        return c`<luzmo-draggable-data-item-level
            sublevel
            .data=${b}
            .language=${this.language}
            .size=${this.size}
            .variant=${this.variant}
            .disabled=${this.disabled}
            ?hide-type-icon=${this.hideTypeIcon}
          ></luzmo-draggable-data-item-level>`;
      });
      return c`
        <div class="draggable-data-item-sublevels">${t}</div>
      `;
    }
    return c``;
  }
  render() {
    return c`
      <luzmo-draggable-data-item-level
        .data=${this.data}
        .language=${this.language}
        .size=${this.size}
        .variant=${this.variant}
        .disabled=${this.disabled}
        .label=${this.label}
        .description=${this.description}
        ?hide-type-icon=${this.hideTypeIcon}
      ></luzmo-draggable-data-item-level>
      ${this.hideSublevels ? "" : this.renderSublevels()}
    `;
  }
};
n.styles = Z(Ae);
v([
  i({ type: String, reflect: !0 })
], n.prototype, "variant", 2);
v([
  i({ type: String, reflect: !0 })
], n.prototype, "language", 2);
v([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 2);
v([
  i({ type: Boolean, reflect: !0, attribute: "hide-sublevels" })
], n.prototype, "hideSublevels", 2);
v([
  i({ type: Boolean, reflect: !0, attribute: "hide-type-icon" })
], n.prototype, "hideTypeIcon", 2);
v([
  i({ type: String, reflect: !0 })
], n.prototype, "label", 2);
v([
  i({ type: String, reflect: !0 })
], n.prototype, "description", 2);
v([
  i({ type: Object })
], n.prototype, "data", 2);
n = v([
  Oe()
], n);
customElements.get("luzmo-draggable-data-item") || customElements.define("luzmo-draggable-data-item", n);
export {
  n as LuzmoDraggableDataItem
};
