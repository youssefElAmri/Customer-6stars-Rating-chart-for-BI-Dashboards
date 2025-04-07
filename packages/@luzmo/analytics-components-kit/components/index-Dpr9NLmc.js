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
import { n as c, aj as xt, a as E, k as L, H as b, h as P, R as n, b as O, c as Q, p as x, o as yt, O as _, I as kt, F as wt, v as K, ak as Ct, e as J, r as Y, ah as $t, al as Z, x as m, am as nt, ae as _t, an as st, ai as St, ad as lt, ag as Et, ao as Tt, m as D, t as Lt, s as qt, ap as It, l as Ot } from "./get-css-variable-Cb4e-hdr.js";
import { l as tt } from "./localize-BX7q0S0M.js";
import { d as At, u as dt, c as Dt, a as W, h as jt, _ as Pt, n as ct, $ as Bt, s as j, r as Ut, f as Rt } from "./state-CYxk12SV-BOqaoLNO.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Mt(o) {
  return c({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = (o, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(o, t, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function F(o, t) {
  return (e, i, l) => {
    const a = (r) => {
      var s;
      return ((s = r.renderRoot) == null ? void 0 : s.querySelector(o)) ?? null;
    };
    return ut(e, i, { get() {
      return a(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ft;
function Nt(o) {
  return (t, e) => ut(t, e, { get() {
    return (this.renderRoot ?? Ft ?? (Ft = document.createDocumentFragment())).querySelectorAll(o);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = Symbol();
let mt = class {
  get taskComplete() {
    return this.t || (this.i === 1 ? this.t = new Promise((t, e) => {
      this.o = t, this.h = e;
    }) : this.i === 3 ? this.t = Promise.reject(this.l) : this.t = Promise.resolve(this.u)), this.t;
  }
  constructor(t, e, i) {
    var a;
    this.p = 0, this.i = 0, (this._ = t).addController(this);
    const l = typeof e == "object" ? e : { task: e, args: i };
    this.v = l.task, this.j = l.args, this.m = l.argsEqual ?? Vt, this.k = l.onComplete, this.A = l.onError, this.autoRun = l.autoRun ?? !0, "initialValue" in l && (this.u = l.initialValue, this.i = 2, this.O = (a = this.T) == null ? void 0 : a.call(this));
  }
  hostUpdate() {
    this.autoRun === !0 && this.S();
  }
  hostUpdated() {
    this.autoRun === "afterUpdate" && this.S();
  }
  T() {
    if (this.j === void 0) return;
    const t = this.j();
    if (!Array.isArray(t)) throw Error("The args function must return an array");
    return t;
  }
  async S() {
    const t = this.T(), e = this.O;
    this.O = t, t === e || t === void 0 || e !== void 0 && this.m(e, t) || await this.run(t);
  }
  async run(t) {
    var r, s, d, u, f;
    let e, i;
    t ?? (t = this.T()), this.O = t, this.i === 1 ? (r = this.q) == null || r.abort() : (this.t = void 0, this.o = void 0, this.h = void 0), this.i = 1, this.autoRun === "afterUpdate" ? queueMicrotask(() => this._.requestUpdate()) : this._.requestUpdate();
    const l = ++this.p;
    this.q = new AbortController();
    let a = !1;
    try {
      e = await this.v(t, { signal: this.q.signal });
    } catch (g) {
      a = !0, i = g;
    }
    if (this.p === l) {
      if (e === Ht) this.i = 0;
      else {
        if (a === !1) {
          try {
            (s = this.k) == null || s.call(this, e);
          } catch {
          }
          this.i = 2, (d = this.o) == null || d.call(this, e);
        } else {
          try {
            (u = this.A) == null || u.call(this, i);
          } catch {
          }
          this.i = 3, (f = this.h) == null || f.call(this, i);
        }
        this.u = e, this.l = i;
      }
      this._.requestUpdate();
    }
  }
  abort(t) {
    var e;
    this.i === 1 && ((e = this.q) == null || e.abort(t));
  }
  get value() {
    return this.u;
  }
  get error() {
    return this.l;
  }
  get status() {
    return this.i;
  }
  render(t) {
    var e, i, l, a;
    switch (this.i) {
      case 0:
        return (e = t.initial) == null ? void 0 : e.call(t);
      case 1:
        return (i = t.pending) == null ? void 0 : i.call(t);
      case 2:
        return (l = t.complete) == null ? void 0 : l.call(t, this.value);
      case 3:
        return (a = t.error) == null ? void 0 : a.call(t, this.error);
      default:
        throw Error("Unexpected status: " + this.i);
    }
  }
};
const Vt = (o, t) => o === t || o.length === t.length && o.every((e, i) => !xt(e, t[i]));
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
const Gt = "@media (forced-colors: active){:host{background-color:CanvasText!important}}:host{block-size:var(--luzmo-divider-thickness, var(--divider-thickness));inline-size:100%;border:none;border-width:var(--luzmo-divider-thickness, var(--divider-thickness));border-radius:var(--luzmo-divider-thickness, var(--divider-thickness));background-color:var(--luzmo-divider-background-color, var(--divider-background-color));overflow:visible}:host([size=s]){--divider-thickness: var( --divider-thickness-small, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-small)}:host{--divider-thickness: var( --divider-thickness-medium, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-medium)}:host([size=l]){--divider-thickness: var( --divider-thickness-large, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-large)}:host([static-color=white][size=s]){--divider-background-color: var( --luzmo-divider-background-color-small-static-white, var(--divider-background-color-small-static-white) )}:host([static-color=white]){--divider-background-color: var( --luzmo-divider-background-color-medium-static-white, var(--divider-background-color-medium-static-white) )}:host([static-color=white][size=l]){--divider-background-color: var( --luzmo-divider-background-color-large-static-white, var(--divider-background-color-large-static-white) )}:host([static-color=black][size=s]){--divider-background-color: var( --luzmo-divider-background-color-small-static-black, var(--divider-background-color-small-static-black) )}:host([static-color=black]){--divider-background-color: var( --luzmo-divider-background-color-medium-static-black, var(--divider-background-color-medium-static-black) )}:host([static-color=black][size=l]){--divider-background-color: var( --luzmo-divider-background-color-large-static-black, var(--divider-background-color-large-static-black) )}:host([vertical]){inline-size:var(--luzmo-divider-thickness, var(--divider-thickness, var(--luzmo-border-width)));margin-block:var(--luzmo-divider-vertical-margin);block-size:100%;block-size:var(--luzmo-divider-vertical-height, 100%);align-self:var(--luzmo-divider-vertical-align)}:host{--divider-background-color-small: rgba(213, 213, 213);--divider-background-color-medium: rgba(213, 213, 213);--divider-background-color-large: rgba(213, 213, 213);--divider-background-color-small-static-white: rgba(255, 255, 255, .25);--divider-background-color-medium-static-white: rgba(255, 255, 255, .25);--divider-background-color-large-static-white: rgba(255, 255, 255, .9);--divider-background-color-small-static-black: rgba(0, 0, 0, .25);--divider-background-color-medium-static-black: rgba(0, 0, 0, .25);--divider-background-color-large-static-black: rgba(0, 0, 0, .9)}:host{display:block}hr{border:none;margin:0}";
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
const Kt = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
Kt();
var Yt = Object.defineProperty, pt = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && Yt(t, e, l), l;
};
const ht = class extends E(L, {
  validSizes: ["s", "m", "l"],
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.vertical = !1;
  }
  render() {
    return b``;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute("role", "separator");
  }
  updated(t) {
    super.updated(t), t.has("vertical") && (this.vertical ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"));
  }
};
ht.styles = [P(Gt)];
let et = ht;
pt([
  n({ type: Boolean, reflect: !0 })
], et.prototype, "vertical");
pt([
  n({ type: String, reflect: !0, attribute: "static-color" })
], et.prototype, "staticColor");
customElements.get("luzmo-divider") || customElements.define("luzmo-divider", et);
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
const Zt = ":host{box-sizing:border-box;min-block-size:var(--luzmo-field-label-min-height, var(--field-label-min-height));padding-block:var(--luzmo-field-label-padding-block, var(--luzmo-field-label-top-to-text, var(--field-label-top-to-text)) var(--luzmo-field-label-bottom-to-text, var(--field-label-bottom-to-text)));padding-inline:0;padding-inline:var(--luzmo-field-label-padding-inline, 0);margin-block:0;margin-block:var(--luzmo-field-label-margin-block, var(--luzmo-field-label-margin-block-start, 0) var(--luzmo-field-label-margin-block-end, 0));margin-inline:0;margin-inline:var(--luzmo-field-label-margin-inline, var(--luzmo-field-label-margin-inline-start, 0) var(--luzmo-field-label-margin-inline-end, 0));font-size:var(--luzmo-field-label-font-size, var(--field-label-font-size));font-weight:var(--luzmo-field-label-font-weight, var(--field-label-font-weight));line-height:var(--luzmo-field-label-line-height, var(--field-label-line-height));-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;color:var(--luzmo-field-label-color, var(--field-label-color));display:block;font-family:var(--luzmo-field-label-font-family, var(--luzmo-font-family))}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--luzmo-field-label-line-height: var( --luzmo-field-label-line-height-cjk, var(--field-label-line-height-cjk) )}:host([disabled]),:host([disabled]) .required-icon{--luzmo-field-label-color: var( --highcontrast-field-label-disabled-content-color, var( --luzmo-disabled-content-color, var(--field-label-disabled-content-color) ) )}.required-icon{display:inline-block;margin-block:0;margin-inline:var(--luzmo-field-label-text-to-asterisk, var(--field-label-text-to-asterisk)) 0;vertical-align:initial;vertical-align:var(--luzmo-field-label-asterisk-vertical-align, baseline)}:host([side-aligned=start]),:host([side-aligned=end]){vertical-align:top;margin-block-start:0;margin-block-end:0;margin-inline-end:var(--luzmo-field-label-side-padding-right, var(--field-label-side-padding-right));display:inline-flex;align-items:center;font-size:var(--luzmo-field-label-side-aligned-font-size, var(--field-label-side-aligned-font-size));block-size:var(--luzmo-field-label-side-aligned-height, var(--field-label-side-aligned-height))}:host([side-aligned=end]){text-align:end}@media (forced-colors: active){:host{--highcontrast-field-label-disabled-content-color: GrayText}}:host{--field-label-color: var(--luzmo-font-color);--field-label-font-weight: var(--luzmo-font-weight);--field-label-line-height: var(--luzmo-line-height);--field-label-line-height-cjk: 1.5;--field-label-disabled-content-color: var(--luzmo-font-color-disabled)}:host{--field-label-min-height: var(--luzmo-component-height-xs);--field-label-side-aligned-height: var(--luzmo-component-height);--field-label-top-to-text: calc(var(--luzmo-spacing-2));--field-label-bottom-to-text: var(--luzmo-spacing-2);--field-label-side-aligned-font-size: var(--luzmo-font-size);--field-label-font-size: var(--luzmo-font-size-s);--field-label-side-padding-right: var(--luzmo-spacing-4);--field-label-text-to-asterisk: 0px}:host([size=s]){--field-label-min-height: var(--luzmo-component-height-xxs);--field-label-side-aligned-height: var(--luzmo-component-height-s);--field-label-top-to-text: calc(var(--luzmo-spacing-1));--field-label-bottom-to-text: var(--luzmo-spacing-1);--field-label-side-aligned-font-size: var(--luzmo-font-size-s);--field-label-font-size: var(--luzmo-font-size-xs);--field-label-side-padding-right: var(--luzmo-spacing-3);--field-label-text-to-asterisk: 0px}:host([size=l]){--field-label-min-height: var(--luzmo-component-height-xs);--field-label-side-aligned-height: var(--luzmo-component-height-l);--field-label-top-to-text: var(--luzmo-spacing-3);--field-label-bottom-to-text: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--field-label-side-aligned-font-size: var(--luzmo-font-size-l);--field-label-font-size: var(--luzmo-font-size);--field-label-side-padding-right: var(--luzmo-spacing-4);--field-label-text-to-asterisk: var(--luzmo-spacing-1)}:host([size=xl]){--field-label-min-height: var(--luzmo-component-height-s);--field-label-side-aligned-height: var(--luzmo-component-height-xl);--field-label-top-to-text: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--field-label-bottom-to-text: var(--luzmo-spacing-3);--field-label-side-aligned-font-size: var(--luzmo-font-size-xl);--field-label-font-size: var(--luzmo-font-size-l);--field-label-side-padding-right: var(--luzmo-spacing-4);--field-label-text-to-asterisk: var(--luzmo-spacing-1)}label{display:inline-block}";
var Xt = Object.defineProperty, B = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && Xt(t, e, l), l;
};
const Wt = () => b`
  <div class="icon-container required-icon">*</div>
`;
class A extends E(L, {
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.disabled = !1, this.id = "", this.for = "", this.required = !1, this.resolvedElement = new At(this);
  }
  static get styles() {
    return [P(Zt)];
  }
  handleClick(t) {
    if (!this.target || this.disabled || t.defaultPrevented)
      return;
    this.target.focus();
    const e = this.getRootNode(), i = this.target, l = i.getRootNode(), a = l.host;
    l === e && i.forceFocusVisible ? i.forceFocusVisible() : a && a.forceFocusVisible && a.forceFocusVisible();
  }
  applyTargetLabel(t) {
    if (this.target = t || this.target, this.target) {
      const e = this.target.applyFocusElementLabel, i = this.target.focusElement || this.target, l = i.getRootNode();
      e !== void 0 ? e(this.labelText, this) : l === this.getRootNode() ? (t ? dt : Dt)(i, "aria-labelledby", [this.id]) : t ? i.setAttribute("aria-label", this.labelText) : i.removeAttribute("aria-label");
    }
  }
  async manageTarget() {
    this.applyTargetLabel();
    const t = this.resolvedElement.element;
    if (!t) {
      this.target = t;
      return;
    }
    t.localName.search("-") > 0 && await customElements.whenDefined(t.localName), t.updateComplete !== void 0 && await t.updateComplete, this.applyTargetLabel(t);
  }
  get labelText() {
    const t = this.slotEl.assignedNodes({ flatten: !0 });
    return t.length === 0 ? "" : t.map(
      (e) => (e.textContent || /* c8 ignore next */
      "").trim()
    ).join(" ");
  }
  render() {
    return b`
      <label>
        <slot></slot>
        ${this.required ? b` ${Wt()} ` : O}
      </label>
    `;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addEventListener("click", this.handleClick);
  }
  willUpdate(t) {
    this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${W()}`), t.has("for") && (this.resolvedElement.selector = this.for ? `#${this.for}` : ""), (t.has("id") || t.has(jt)) && this.manageTarget();
  }
}
B([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "disabled");
B([
  n({ type: String })
], A.prototype, "id");
B([
  n({ type: String })
], A.prototype, "for");
B([
  n({ type: Boolean, reflect: !0 })
], A.prototype, "required");
B([
  Q("slot")
], A.prototype, "slotEl");
B([
  n({ type: String, reflect: !0, attribute: "side-aligned" })
], A.prototype, "sideAligned");
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
const Qt = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
Qt();
customElements.get("luzmo-field-label") || customElements.define("luzmo-field-label", A);
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
let Jt = class {
  constructor(t, { mode: e } = { mode: "internal" }) {
    this.mode = "internal", this.handleSlotchange = ({
      target: i
    }) => {
      this.handleHelpText(i), this.handleNegativeHelpText(i);
    }, this.host = t, this.id = `luzmo-help-text-${W()}`, this.mode = e;
  }
  get isInternal() {
    return this.mode === "internal";
  }
  render(t) {
    return b`
      <div
        id=${x(this.isInternal ? this.id : void 0)}
        aria-live="assertive"
      >
        <slot
          name=${t ? "negative-help-text" : `pass-through-help-text-${W()}`}
          @slotchange=${this.handleSlotchange}
        >
          <slot name="help-text"></slot>
        </slot>
      </div>
    `;
  }
  addId() {
    const t = this.helpTextElement ? this.helpTextElement.id : this.id;
    this.conditionId = dt(
      this.host,
      "aria-describedby",
      t
    ), this.host.hasAttribute("tabindex") && (this.previousTabindex = Number.parseFloat(
      this.host.getAttribute("tabindex")
    )), this.host.tabIndex = 0;
  }
  removeId() {
    this.conditionId && (this.conditionId(), delete this.conditionId), !this.helpTextElement && (this.previousTabindex ? this.host.tabIndex = this.previousTabindex : this.host.removeAttribute("tabindex"));
  }
  handleHelpText(t) {
    if (this.isInternal)
      return;
    this.helpTextElement && this.helpTextElement.id === this.id && this.helpTextElement.removeAttribute("id"), this.removeId();
    const e = t.assignedElements()[0];
    this.helpTextElement = e, e && (e.id || (e.id = this.id), this.addId());
  }
  handleNegativeHelpText(t) {
    t.name === "negative-help-text" && t.assignedElements().forEach(
      (e) => e.variant = "negative"
    );
  }
};
function gt(o, { mode: t } = { mode: "internal" }) {
  class e extends o {
    constructor() {
      super(...arguments), this.helpTextManager = new Jt(this, { mode: t });
    }
    get helpTextId() {
      return this.helpTextManager.id;
    }
    renderHelpText(l) {
      return this.helpTextManager.render(l);
    }
  }
  return e;
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = Pt(class extends Bt {
  constructor(o) {
    if (super(o), o.type !== j.PROPERTY && o.type !== j.ATTRIBUTE && o.type !== j.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Ut(o)) throw Error("`live` bindings can only contain a single expression");
  }
  render(o) {
    return o;
  }
  update(o, [t]) {
    if (t === K || t === O) return t;
    const e = o.element, i = o.name;
    if (o.type === j.PROPERTY) {
      if (t === e[i]) return K;
    } else if (o.type === j.BOOLEAN_ATTRIBUTE) {
      if (!!t === e.hasAttribute(i)) return K;
    } else if (o.type === j.ATTRIBUTE && e.getAttribute(i) === t + "") return K;
    return Rt(o), t;
  }
}), ee = '#text-field{--luzmo-text-field-input-line-height: var( --luzmo-text-field-height, var(--text-field-height) );text-overflow:ellipsis;inline-size:var(--luzmo-text-field-width, 240px);grid-template-rows:auto auto auto;grid-template-columns:auto auto;margin:0;display:inline-grid;position:relative;overflow:visible}:host([quiet]) #text-field:after{content:"";pointer-events:none;inline-size:100%;block-size:var(--luzmo-text-field-focus-indicator-width, 2px);position:absolute;inset-block-end:calc((var(--luzmo-text-field-focus-indicator-gap, 2px) + var(--luzmo-text-field-focus-indicator-width, 2px)) * -1);inset-inline-start:0}:host([quiet][focused]) #text-field:after{background-color:var(--highcontrast-text-field-focus-indicator-color, var(--luzmo-text-field-focus-indicator-color, var(--luzmo-color-informative)))}:host([quiet][invalid]) #text-field .input{padding-inline-end:calc(var(--luzmo-text-field-icon-spacing-inline-start-invalid, var(--text-field-icon-spacing-inline-start-invalid)) + var(--luzmo-text-field-icon-size-invalid, var(--text-field-icon-size-invalid)))}:host([quiet][valid]) #text-field .input{padding-inline-end:calc(var(--luzmo-text-field-icon-spacing-inline-start-valid, var(--text-field-icon-spacing-inline-start-valid)) + var(--luzmo-text-field-icon-size-valid, var(--text-field-icon-size-valid)))}:host([invalid]) #text-field .icon,:host([valid]) #text-field .icon{pointer-events:all;grid-area:2/2;margin-inline-start:auto;position:absolute;inset-block-start:0;display:flex;align-items:center;justify-content:center}#text-field.luzmo-text-field--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([valid]) #text-field .icon{font-size:var(--luzmo-text-field-icon-size-valid, var(--text-field-icon-size-valid));color:var(--highcontrast-text-field-icon-color-valid, var(--luzmo-text-field-icon-color-valid, var(--luzmo-color-positive)));inset-block-start:var(--luzmo-text-field-icon-spacing-block-valid, var(--text-field-icon-spacing-block-valid));inset-block-end:var(--luzmo-text-field-icon-spacing-block-valid, var(--text-field-icon-spacing-block-valid));inset-inline-end:var(--luzmo-text-field-icon-spacing-inline-end-valid, var(--text-field-icon-spacing-inline-end-valid))}:host([invalid]) #text-field .icon{font-size:var(--luzmo-text-field-icon-size-invalid, var(--text-field-icon-size-invalid));color:var(--highcontrast-text-field-icon-color-invalid, var(--luzmo-text-field-icon-color-invalid, var(--luzmo-color-negative)));inset-block-start:var(--luzmo-text-field-icon-spacing-block-invalid, var(--text-field-icon-spacing-block-invalid));inset-block-end:var(--luzmo-text-field-icon-spacing-block-invalid, var(--text-field-icon-spacing-block-invalid));inset-inline-end:var(--luzmo-text-field-icon-spacing-inline-end-invalid, var(--text-field-icon-spacing-inline-end-invalid))}:host([disabled]) #text-field .icon,:host([readonly]) #text-field .icon{color:#0000}:host([quiet]) .icon{padding-inline-end:0}:host([quiet][valid]) .icon{inset-inline-end:var(--luzmo-text-field-icon-spacing-inline-end-quiet-valid, 0px)}:host([quiet][invalid]) .icon{inset-inline-end:var(--luzmo-text-field-icon-spacing-inline-end-quiet-invalid, 0px)}#text-field .luzmo-field-label{grid-area:1/1/auto/span 1;margin-block-end:var(--luzmo-text-field-label-spacing-block, 0px)}:host([quiet]) .luzmo-field-label{margin-block-end:var(--luzmo-text-field-label-spacing-block-quiet, var(--text-field-label-spacing-block-quiet))}:host([disabled]) .luzmo-field-label{color:var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled))}#text-field .luzmo-help-text{grid-area:3/1/auto/span 2;margin-block-start:var(--luzmo-text-field-helptext-spacing-block, 0px)}.luzmo-text-field-characterCount{inline-size:auto;font-size:var(--luzmo-text-field-character-count-font-size, var(--text-field-character-count-font-size));font-family:var(--luzmo-text-field-character-count-font-family, var(--luzmo-font-family));font-weight:var(--luzmo-text-field-character-count-font-weight, var(--luzmo-font-weight));grid-area:1/2/auto/span 1;justify-content:flex-end;align-items:flex-end;margin-block-end:var(--luzmo-text-field-character-count-spacing-block, var(--text-field-character-count-spacing-block));margin-inline-start:var(--luzmo-text-field-character-count-spacing-inline, 12px);margin-inline-end:0;padding-inline-end:calc(var(--luzmo-text-field-corner-radius, var(--luzmo-border-radius)) / 2);display:inline-flex}:host([quiet]) .luzmo-text-field-characterCount{margin-block-end:var(--luzmo-text-field-character-count-spacing-block-quiet, var(--text-field-character-count-spacing-block-quiet))}.input{text-align:var(--luzmo-text-field-text-align, start);line-height:var(--luzmo-text-field-input-line-height);box-sizing:border-box;inline-size:100%;min-inline-size:var(--luzmo-text-field-min-width, 1.5);block-size:var(--luzmo-text-field-height, var(--text-field-height));padding-block-start:calc(var(--luzmo-text-field-spacing-block-start, var(--luzmo-spacing-3)) - var(--luzmo-text-field-border-width, var(--luzmo-border-width)));padding-block-end:calc(var(--luzmo-text-field-spacing-block-end, var(--luzmo-spacing-3)) - var(--luzmo-text-field-border-width, var(--luzmo-border-width)));padding-inline:calc(var(--luzmo-text-field-spacing-inline, var(--text-field-spacing-inline)) - var(--luzmo-text-field-border-width, var(--luzmo-border-width)));vertical-align:top;background-color:var(--luzmo-text-field-background-color, var(--luzmo-background-color));border-color:var(--highcontrast-text-field-border-color, var(--luzmo-text-field-border-color, var(--luzmo-border-color)));border-style:solid;border-width:var(--luzmo-text-field-border-width, var(--luzmo-border-width));border-radius:var(--luzmo-text-field-corner-radius, var(--luzmo-border-radius));transition:border-color var(--luzmo-text-field-animation-duration, var(--luzmo-animation-duration)) ease-in-out;font-size:var(--luzmo-text-field-placeholder-font-size, var(--text-field-placeholder-font-size));font-family:var(--luzmo-text-field-font-family, var(--luzmo-font-family));font-weight:var(--luzmo-text-field-font-weight, var(--luzmo-font-weight));color:var(--highcontrast-text-field-text-color-default, var(--luzmo-text-field-text-color-default, var(--luzmo-font-color)));text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;grid-area:2/1/auto/span 2;margin:0}:host([type=number]) .input{-moz-appearance:text-field}:host([type=number]) .input::-webkit-inner-spin-button,:host([type=number]) .input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}.input::placeholder{opacity:1;font-size:var(--luzmo-text-field-placeholder-font-size, var(--text-field-placeholder-font-size));font-family:var(--luzmo-text-field-font-family, var(--luzmo-font-family));font-weight:var(--luzmo-text-field-font-weight, var(--luzmo-font-weight));color:var(--highcontrast-text-field-text-color-default, var(--luzmo-text-field-placeholder-text-color-default, var(--luzmo-font-color-disabled)));transition:color var(--luzmo-text-field-animation-duration, var(--luzmo-animation-duration)) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}:host([focused]) .input,.input:focus{border-color:var(--highcontrast-text-field-border-color-focus, var(--luzmo-text-field-border-color-focus, var(--luzmo-primary)));color:var(--highcontrast-text-field-text-color-focus, var(--luzmo-text-field-text-color-focus, var(--luzmo-font-color-hard)))}:host([focused]) .input::placeholder,.input:focus::placeholder{color:var(--highcontrast-text-field-text-color-focus, var(--luzmo-text-field-placeholder-text-color-focus, var(--luzmo-color-disabled)))}:host([focused]) .input{border-color:var(--highcontrast-text-field-border-color-keyboard-focus, var(--luzmo-text-field-border-color-keyboard-focus, var(--luzmo-primary)));outline:var(--luzmo-text-field-focus-indicator-width, 0) solid;outline-color:var(--highcontrast-text-field-focus-indicator-color, var(--luzmo-text-field-focus-indicator-color, var(--luzmo-color-informative)));outline-offset:var(--luzmo-text-field-focus-indicator-gap, 2px);color:var(--highcontrast-text-field-text-color-keyboard-focus, var(--luzmo-text-field-text-color-keyboard-focus, var(--luzmo-font-color-hard)))}:host([focused]) .input::placeholder{color:var(--highcontrast-text-field-text-color-keyboard-focus, var(--luzmo-text-field-placeholder-text-color-keyboard-focus, var(--luzmo-color-disabled)))}:host([valid]) .input{color:var(--highcontrast-text-field-text-color-valid, var(--luzmo-text-field-text-color-valid, var(--luzmo-font-color)));padding-inline-end:calc(var(--luzmo-text-field-icon-spacing-inline-start-valid, var(--text-field-icon-spacing-inline-start-valid)) + var(--luzmo-text-field-icon-size-valid, var(--text-field-icon-size-valid)) + var(--luzmo-text-field-icon-spacing-inline-end-valid, var(--text-field-icon-spacing-inline-end-valid)) - var(--luzmo-text-field-border-width, var(--luzmo-border-width)))}:host([invalid]) .input{color:var(--highcontrast-text-field-text-color-invalid, var(--luzmo-text-field-text-color-invalid, var(--luzmo-font-color)));border-color:var(--highcontrast-text-field-border-color-invalid-default, var(--luzmo-text-field-border-color-invalid-default, var(luzmo-danger-color)));padding-inline-end:calc(var(--luzmo-text-field-icon-spacing-inline-start-invalid, var(--text-field-icon-spacing-inline-start-invalid)) + var(--luzmo-text-field-icon-size-invalid, var(--text-field-icon-size-invalid)) + var(--luzmo-text-field-icon-spacing-inline-end-invalid, var(--text-field-icon-spacing-inline-end-invalid)) - var(--luzmo-text-field-border-width, var(--luzmo-border-width)))}:host([invalid]) .input:focus,:host([invalid][focused]) .input,:host([invalid]:focus) .input{border-color:var(--highcontrast-text-field-border-color-invalid-focus, var(--luzmo-text-field-border-color-invalid-focus, var(luzmo-danger-color)))}:host([invalid]) .input:focus-visible,:host([invalid][focused]) .input{border-color:var(--highcontrast-text-field-border-color-invalid-keyboard-focus, var(--luzmo-text-field-border-color-invalid-keyboard-focus, var(luzmo-danger-color)))}.input:disabled,:host([disabled]) #text-field .input{background-color:var(--luzmo-text-field-background-color-disabled, var(--luzmo-background-color-disabled));resize:none;opacity:1;border-color:#0000}.input:disabled,.input:disabled::placeholder,:host([disabled]) #text-field .input,:host([disabled]) #text-field .input::placeholder{color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled)))}:host([border=none]) .input{border-width:0;outline:none}:host([quiet]) .input{padding-block-start:var(--luzmo-text-field-spacing-block-start, var(--luzmo-spacing-2));padding-inline:var(--luzmo-text-field-spacing-inline-quiet, 0px);background-color:initial;resize:none;border-block-start-width:0;border-inline-width:0;border-radius:0;outline:none;margin-block-end:var(--luzmo-text-field-spacing-block-quiet, 0px);overflow-y:hidden}:host([quiet][disabled]) .input,.input:disabled{background-color:initial;border-color:var(--luzmo-text-field-border-color-disabled, var(--luzmo-border-color-disabled))}:host([quiet][disabled]) .input,:host([quiet][disabled]) .input::placeholder,.input:disabled,.input:disabled::placeholder{color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-color-disabled)))}.input:read-only,:host([readonly]) #text-field .input{background-color:initial;color:var(--highcontrast-text-field-text-color-readonly, var(--luzmo-text-field-text-color-readonly, var(--luzmo-font-color)));border-color:#0000;outline:none}.input:read-only::placeholder,:host([readonly]) #text-field .input::placeholder{color:var(--highcontrast-text-field-text-color-readonly, var(--luzmo-text-field-text-color-readonly, var(--luzmo-color-disabled)));background-color:initial}@media (hover: hover){.input:hover,#text-field:hover .input{border-color:var(--highcontrast-text-field-border-color-hover, var(--luzmo-text-field-border-color-hover, rgba(var(--luzmo-primary-rgb), .3)))}.input:hover,#text-field:hover .input{color:var(--highcontrast-text-field-text-color-hover, var(--luzmo-text-field-text-color-hover, var(--luzmo-font-color-hard)))}.input:hover::placeholder,#text-field:hover .input::placeholder{color:var(--highcontrast-text-field-text-color-hover, var(--luzmo-text-field-placeholder-text-color-hover, var(--luzmo-color-disabled)))}:host([focused]) .input:hover,:host([focused]) #text-field:hover .input,.input:focus:hover{border-color:var(--highcontrast-text-field-border-color-focus-hover, var(--luzmo-text-field-border-color-focus-hover, var(--luzmo-primary)))}:host([focused]) .input:hover,.input:focus:hover{color:var(--highcontrast-text-field-text-color-focus-hover, var(--luzmo-text-field-text-color-focus-hover, var(--luzmo-font-color-hard)))}:host([focused]) .input:hover::placeholder,.input:focus:hover::placeholder{color:var(--highcontrast-text-field-text-color-focus-hover, var(--luzmo-text-field-placeholder-text-color-focus-hover, var(--luzmo-color-disabled)))}:host([invalid]) .input:hover:not(.is-disabled),:host([invalid]:hover):not(.is-disabled) .input{border-color:var(--highcontrast-text-field-border-color-invalid-hover, var(--luzmo-text-field-border-color-invalid-hover, var(luzmo-danger-color)))}:host([invalid]) .input:focus:hover,:host([invalid][focused]) .input:hover,:host([invalid]:focus) .input:hover{border-color:var(--highcontrast-text-field-border-color-invalid-focus-hover, var(--luzmo-text-field-border-color-invalid-focus-hover, var(luzmo-danger-color)))}:host([disabled]) #text-field:hover .input{background-color:var(--luzmo-text-field-background-color-disabled, var(--luzmo-background-color-disabled));resize:none;opacity:1;border-color:#0000}:host([quiet][disabled]:hover) .input,:host([disabled]) #text-field:hover .input,:host([disabled]) #text-field:hover .input::placeholder{color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled)))}:host([quiet][disabled]:hover) .input{background-color:initial;border-color:var(--luzmo-text-field-border-color-disabled, var(--luzmo-border-color-disabled))}:host([quiet][disabled]:hover) .input::placeholder{color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled)))}:host([readonly]) #text-field:hover .input{border-color:#0000;outline:none}:host([readonly]) #text-field:hover .input,:host([readonly]) #text-field:hover .input::placeholder{background-color:initial;color:var(--highcontrast-text-field-text-color-readonly, var(--luzmo-text-field-text-color-readonly, var(--luzmo-font-color)))}}.luzmo-text-field--sideLabel{grid-template-rows:auto auto;grid-template-columns:auto auto auto}.luzmo-text-field--sideLabel:after{grid-area:1/2/span 1/span 1}.luzmo-text-field--sideLabel .luzmo-field-label{grid-area:1/1/span 2/span 1;margin-inline-end:var(--luzmo-text-field-label-spacing-inline-side-label, var(--text-field-label-spacing-inline-side-label))}.luzmo-text-field--sideLabel .luzmo-text-field-characterCount{grid-area:1/3/auto/span 1;align-items:flex-start;margin-block-start:var(--luzmo-text-field-character-count-spacing-block-side, var(--text-field-character-count-spacing-block-side));margin-inline-start:var(--luzmo-text-field-character-count-spacing-inline-side, 12px)}.luzmo-text-field--sideLabel .luzmo-help-text{grid-area:2/2/auto/span 1}.luzmo-text-field--sideLabel .input,.luzmo-text-field--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([multiline]){--luzmo-text-field-input-line-height: normal}:host([multiline]) .input{min-inline-size:var(--luzmo-text-area-min-inline-size, 112px);min-block-size:var(--luzmo-text-area-min-block-size, 56px);resize:inherit}:host([multiline][grows]) .input{grid-row:2}:host([multiline][grows]) .luzmo-text-field--sideLabel .input{grid-row:1}:host([multiline][quiet]) .input{min-block-size:var(--luzmo-text-area-min-block-size-quiet, var(--text-area-min-block-size-quiet));resize:none;overflow-y:hidden}@media (forced-colors: active){:host{--highcontrast-text-field-border-color-hover: Highlight;--highcontrast-text-field-border-color-focus: Highlight;--highcontrast-text-field-border-color-keyboard-focus: CanvasText;--highcontrast-text-field-focus-indicator-color: Highlight;--highcontrast-text-field-border-color-invalid-default: Highlight;--highcontrast-text-field-border-color-invalid-hover: Highlight;--highcontrast-text-field-border-color-invalid-focus: Highlight;--highcontrast-text-field-border-color-invalid-keyboard-focus: Highlight;--highcontrast-text-field-text-color-valid: CanvasText;--highcontrast-text-field-text-color-invalid: CanvasText}#text-field .input{--highcontrast-text-field-text-color-default: CanvasText;--highcontrast-text-field-text-color-hover: CanvasText;--highcontrast-text-field-text-color-keyboard-focus: CanvasText;--highcontrast-text-field-text-color-disabled: GrayText;--highcontrast-text-field-text-color-readonly: CanvasText}#text-field .input::placeholder{--highcontrast-text-field-text-color-default: GrayText;--highcontrast-text-field-text-color-hover: GrayText;--highcontrast-text-field-text-color-keyboard-focus: GrayText;--highcontrast-text-field-text-color-disabled: GrayText;--highcontrast-text-field-text-color-readonly: CanvasText}}:host{display:inline-flex;flex-direction:column;inline-size:var(--luzmo-text-field-width, 240px)}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}:host([disabled]:focus-visible){outline:none}#text-field{inline-size:100%}#text-field,textarea{resize:inherit}.input{min-inline-size:var(--luzmo-text-field-min-width, 1.5)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}#sizer{block-size:auto;word-break:break-word;opacity:0;white-space:pre-line}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #text-field{display:inline-grid;--luzmo-text-field-input-line-height: normal}:host([multiline]) textarea{transition:box-shadow var(--luzmo-animation-duration) ease-in-out,border-color var(--luzmo-animation-duration) ease-in-out}:host([multiline]:not([quiet])) #text-field:after{box-shadow:none}:host([multiline][rows]) .input{block-size:auto;resize:none}:host([multiline][rows="1"]) .input{min-block-size:auto}:host([disabled][quiet]) #text-field .input,:host([disabled][quiet]) #text-field:hover .input,:host([quiet]) .input :disabled{background-color:#0000;border-color:var(--luzmo-text-field-border-color-disabled, var(--luzmo-border-color-disabled));color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled)))}:host([disabled]) #text-field .icon.icon-search,:host([readonly]) #text-field .icon.icon-search{color:var(--highcontrast-text-field-text-color-disabled, var(--luzmo-text-field-text-color-disabled, var(--luzmo-font-color-disabled)))}:host([multiline][grows]:not([quiet])) #text-field:after{grid-area:unset;min-block-size:calc(var(--luzmo-text-area-min-block-size, var(--luzmo-text-area-min-block-size)) + var(--luzmo-text-field-focus-indicator-gap, 2px) * 2)}:host([multiline][grows]:not([rows])) .input:not(#sizer){position:absolute;top:0;left:0;height:100%;resize:none;overflow:hidden}:host{--text-field-height: var(--luzmo-component-height);--text-field-label-spacing-block-quiet: -8px;--text-field-label-spacing-inline-side-label: 12px;--text-field-placeholder-font-size: 14px;--text-field-spacing-inline: 12px;--text-field-icon-size-invalid: 18px;--text-field-icon-size-valid: 10px;--text-field-icon-spacing-inline-end-invalid: 12px;--text-field-icon-spacing-inline-end-valid: 15px;--text-field-icon-spacing-block-invalid: 7px;--text-field-icon-spacing-block-valid: 4px;--text-field-icon-spacing-inline-start-invalid: var(--luzmo-spacing-4);--text-field-icon-spacing-inline-start-valid: var(--luzmo-spacing-4);--text-field-character-count-font-size: var(--luzmo-font-size-s);--text-field-character-count-spacing-block: 5px;--text-field-character-count-spacing-block-quiet: -3px;--text-field-character-count-spacing-block-side: 8px;--text-area-min-block-size-quiet: var(--luzmo-component-height)}:host([size=s]){--text-field-height: var(--luzmo-component-height-s);--text-field-label-spacing-block-quiet: -8px;--text-field-label-spacing-inline-side-label: 8px;--text-field-placeholder-font-size: 12px;--text-field-spacing-inline: 9px;--text-field-icon-size-invalid: 16px;--text-field-icon-size-valid: 10px;--text-field-icon-spacing-inline-end-invalid: 9px;--text-field-icon-spacing-inline-end-valid: 11px;--text-field-icon-spacing-block-invalid: 2px;--text-field-icon-spacing-block-valid: -1px;--text-field-icon-spacing-inline-start-invalid: var(--luzmo-spacing-3);--text-field-icon-spacing-inline-start-valid: var(--luzmo-spacing-3);--text-field-character-count-font-size: var(--luzmo-font-size-xs);--text-field-character-count-spacing-block: 5px;--text-field-character-count-spacing-block-quiet: -3px;--text-field-character-count-spacing-block-side: 4px;--text-area-min-block-size-quiet: var(--luzmo-component-height-s)}:host([size=l]){--text-field-height: var(--luzmo-component-height-l);--text-field-label-spacing-block-quiet: -12px;--text-field-label-spacing-inline-side-label: 12px;--text-field-placeholder-font-size: 16px;--text-field-spacing-inline: 15px;--text-field-icon-size-invalid: 20px;--text-field-icon-size-valid: 12px;--text-field-icon-spacing-inline-end-invalid: 15px;--text-field-icon-spacing-inline-end-valid: 17px;--text-field-icon-spacing-block-invalid: 10px;--text-field-icon-spacing-block-valid: 8px;--text-field-icon-spacing-inline-start-invalid: 15px;--text-field-icon-spacing-inline-start-valid: 15px;--text-field-character-count-font-size: var(--luzmo-font-size);--text-field-character-count-spacing-block: 9px;--text-field-character-count-spacing-block-quiet: -3px;--text-field-character-count-spacing-block-side: 11px;--text-area-min-block-size-quiet: var(--luzmo-component-height-l)}:host([size=xl]){--text-field-height: var(--luzmo-component-height-xl);--text-field-label-spacing-block-quiet: -15px;--text-field-label-spacing-inline-side-label: 12px;--text-field-placeholder-font-size: 18px;--text-field-spacing-inline: 15px;--text-field-icon-size-invalid: 22px;--text-field-icon-size-valid: 14px;--text-field-icon-spacing-inline-end-invalid: 18px;--text-field-icon-spacing-inline-end-valid: 20px;--text-field-icon-spacing-block-invalid: 12px;--text-field-icon-spacing-block-valid: 13px;--text-field-icon-spacing-inline-start-invalid: 18px;--text-field-icon-spacing-inline-start-valid: 18px;--text-field-character-count-font-size: var(--luzmo-font-size-l);--text-field-character-count-spacing-block: 11px;--text-field-character-count-spacing-block-quiet: -4px;--text-field-character-count-spacing-block-side: 14px;--text-area-min-block-size-quiet: var(--luzmo-component-height-xl)}';
var oe = Object.defineProperty, le = Object.getOwnPropertyDescriptor, p = (o, t, e, i) => {
  for (var l = i > 1 ? void 0 : i ? le(t, e) : t, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = (i ? r(t, e, l) : r(l)) || l);
  return i && l && oe(t, e, l), l;
};
const ie = ["text", "url", "tel", "email", "password"];
let h = class extends gt(
  E(yt, {
    noDefaultSize: !0
  })
) {
  constructor() {
    super(...arguments), this.allowedKeys = "", this.focused = !1, this.invalid = !1, this.label = "", this.placeholder = "", this._type = "text", this.grows = !1, this.maxlength = -1, this.minlength = -1, this.multiline = !1, this.readonly = !1, this.rows = -1, this.valid = !1, this._value = "", this.quiet = !1, this.required = !1;
  }
  static get styles() {
    return [P(ee)];
  }
  set type(t) {
    const e = this._type;
    this._type = t, this.requestUpdate("type", e);
  }
  get type() {
    return ie.find((t) => t === this._type) ?? "text";
  }
  set value(t) {
    if (t === this.value)
      return;
    const e = this._value;
    this._value = t, this.requestUpdate("value", e);
  }
  get value() {
    return this._value;
  }
  get focusElement() {
    return this.inputElement;
  }
  /**
   * Sets the start and end positions of the current selection.
   *
   * @param selectionStart The 0-based index of the first selected character. An index greater than the length of the
   * element's value is treated as pointing to the end of the value.
   * @param selectionEnd The 0-based index of the character after the last selected character. An index greater than
   * the length of the element's value is treated as pointing to the end of the value.
   * @param [selectionDirection="none"] A string indicating the direction in which the selection is considered to
   * have been performed.
   */
  setSelectionRange(t, e, i = "none") {
    this.inputElement.setSelectionRange(
      t,
      e,
      i
    );
  }
  /**
   * Selects all the text.
   */
  select() {
    this.inputElement.select();
  }
  handleInput(t) {
    if (this.allowedKeys && this.inputElement.value && !new RegExp(`^[${this.allowedKeys}]*$`, "u").test(this.inputElement.value)) {
      const e = this.inputElement.selectionStart - 1;
      this.inputElement.value = this.value.toString(), this.inputElement.setSelectionRange(e, e);
      return;
    }
    this.value = this.inputElement.value;
  }
  handleChange() {
    this.dispatchEvent(
      new Event("change", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  onFocus() {
    this.focused = !this.readonly && !0;
  }
  onBlur(t) {
    this.focused = !this.readonly && !1;
  }
  handleInputElementPointerdown() {
  }
  renderStateIcons() {
    return this.invalid ? b`
        <div id="invalid" class="icon">${_(kt)}</div>
      ` : this.valid ? b`
        <div id="valid" class="icon">${_(wt)}</div>
      ` : O;
  }
  get displayValue() {
    return this.value.toString();
  }
  // prettier-ignore
  get renderMultiline() {
    return b`
      ${this.multiline && this.grows && this.rows === -1 ? b`
          <div id="sizer" class="input" aria-hidden="true">${this.value}&#8203;
          </div>
        ` : O}
      <!-- @ts-ignore -->
      <textarea
        name=${x(this.name || void 0)}
        aria-describedby=${this.helpTextId}
        aria-label=${this.label || this.appliedLabel || this.placeholder}
        aria-invalid=${x(this.invalid || void 0)}
        class="input"
        maxlength=${x(this.maxlength > -1 ? this.maxlength : void 0)}
        minlength=${x(this.minlength > -1 ? this.minlength : void 0)}
        title=${this.invalid ? "" : O}
        pattern=${x(this.pattern)}
        placeholder=${this.placeholder}
        .value=${this.displayValue}
        @change=${this.handleChange}
        @input=${this.handleInput}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        rows=${x(this.rows > -1 ? this.rows : void 0)}
        autocomplete=${x(this.autocomplete)}
      ></textarea>
    `;
  }
  get renderInput() {
    return b`
      <!-- @ts-ignore -->
      <input
        name=${x(this.name || void 0)}
        type=${this.type}
        aria-describedby=${this.helpTextId}
        aria-label=${this.label || this.appliedLabel || this.placeholder}
        aria-invalid=${x(this.invalid || void 0)}
        class="input"
        title=${this.invalid ? "" : O}
        maxlength=${x(this.maxlength > -1 ? this.maxlength : void 0)}
        minlength=${x(this.minlength > -1 ? this.minlength : void 0)}
        pattern=${x(this.pattern)}
        placeholder=${this.placeholder}
        .value=${te(this.displayValue)}
        @change=${this.handleChange}
        @input=${this.handleInput}
        @pointerdown=${this.handleInputElementPointerdown}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        autocomplete=${x(this.autocomplete)}
      />
    `;
  }
  renderField() {
    return b`
      ${this.renderStateIcons()}
      ${this.multiline ? this.renderMultiline : this.renderInput}
    `;
  }
  render() {
    return b`
      <div id="text-field">${this.renderField()}</div>
      ${this.renderHelpText(this.invalid)}
    `;
  }
  update(t) {
    (t.has("value") || t.has("required") && this.required) && this.updateComplete.then(() => {
      this.checkValidity();
    }), super.update(t);
  }
  checkValidity() {
    let t = this.inputElement.checkValidity();
    return (this.required || this.value && this.pattern) && ((this.disabled || this.multiline) && this.pattern && (t = new RegExp(`^${this.pattern}$`, "u").test(this.value.toString())), this.minlength !== void 0 && (t = t && this.value.toString().length >= this.minlength), this.valid = t, this.invalid = !t), t;
  }
};
p([
  ct()
], h.prototype, "appliedLabel", 2);
p([
  n({ attribute: "allowed-keys" })
], h.prototype, "allowedKeys", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "focused", 2);
p([
  Q(".input:not(#sizer)")
], h.prototype, "inputElement", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "invalid", 2);
p([
  n()
], h.prototype, "label", 2);
p([
  n({ type: String, reflect: !0 })
], h.prototype, "name", 2);
p([
  n()
], h.prototype, "placeholder", 2);
p([
  ct()
], h.prototype, "type", 1);
p([
  n({ attribute: "type", reflect: !0 })
], h.prototype, "_type", 2);
p([
  n()
], h.prototype, "pattern", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "grows", 2);
p([
  n({ type: Number })
], h.prototype, "maxlength", 2);
p([
  n({ type: Number })
], h.prototype, "minlength", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "multiline", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "readonly", 2);
p([
  n({ type: Number })
], h.prototype, "rows", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "valid", 2);
p([
  n({ type: String })
], h.prototype, "value", 1);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "quiet", 2);
p([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "required", 2);
p([
  n({ type: String, reflect: !0 })
], h.prototype, "autocomplete", 2);
class ft extends h {
  constructor() {
    super(...arguments), this._value = "";
  }
  set value(t) {
    if (t === this.value)
      return;
    const e = this._value;
    this._value = t, this.requestUpdate("value", e);
  }
  get value() {
    return this._value;
  }
}
p([
  n({ type: String })
], ft.prototype, "value", 1);
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
const re = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
re();
const ae = "@media (forced-colors: active){:host{--highcontrast-helptext-content-color-default: CanvasText;--highcontrast-helptext-icon-color-default: CanvasText}:host,.text,.icon{forced-color-adjust:none}}:host{--helptext-bottom-to-workflow-icon: 3px;color:var(--highcontrast-helptext-content-color-default, var(--luzmo-helptext-content-color-default, var(--helptext-content-color-default)));font-size:var(var(--luzmo-helptext-font-size, var(--helptext-font-size)), 12px);min-block-size:var(var(--luzmo-helptext-min-height, var(--helptext-min-height)), 24px);display:flex}.icon{block-size:var(var(--luzmo-helptext-icon-size, var(--helptext-icon-size)), 18px);inline-size:var(var(--luzmo-helptext-icon-size, var(--helptext-icon-size)), 18px);flex-shrink:0;margin-inline-end:var(var(--luzmo-helptext-text-to-visual, var(--helptext-text-to-visual)), 7px);padding-block-start:var(var(--luzmo-helptext-top-to-workflow-icon, var(--helptext-top-to-workflow-icon)), 3px);padding-block-end:var(var(--luzmo-helptext-bottom-to-workflow-icon, --helptext-bottom-to-workflow-icon), 3px)}.text{line-height:var(var(--luzmo-helptext-line-height, var(--helptext-line-height), 1.3));padding-block-start:var(var(--luzmo-helptext-top-to-text, var(--helptext-top-to-text)), 4px);padding-block-end:var(var(--luzmo-helptext-bottom-to-text, var(--helptext-bottom-to-text)), 5px)}:host(:lang(ja)) .text,:host(:lang(ko)) .text,:host(:lang(zh)) .text{line-height:var(var(--luzmo-helptext-line-height-cjk, var(--helptext-line-height-cjk)), 1.4)}:host([variant=neutral]) .text{color:var(--highcontrast-helptext-content-color-default, var(--luzmo-helptext-content-color-default, var(--helptext-content-color-default)))}:host([variant=neutral]) .icon{color:var(--highcontrast-helptext-icon-color-default, var(--luzmo-helptext-icon-color-default, var(--helptext-icon-color-default)))}:host([variant=negative]) .text{color:var(--highcontrast-helptext-content-color-default, var(--luzmo-helptext-content-color-default, var(--luzmo-font-color)))}:host([variant=negative]) .icon{color:var(--highcontrast-helptext-icon-color-default, var(--luzmo-helptext-icon-color-default, var(--helptext-icon-color-default)))}:host([disabled]) .text{color:var(--highcontrast-helptext-content-color-default, var(--luzmo-helptext-content-color-default, var(--luzmo-font-color)))}:host([disabled]) .icon{color:var(--highcontrast-helptext-icon-color-default, var(--luzmo-helptext-icon-color-default, var(--helptext-icon-color-default)))}:host{--helptext-line-height: 1.3;--helptext-content-color-default: var(--luzmo-font-color);--helptext-icon-color-default: var(--luzmo-font-color);--helptext-disabled-content-color: var(--luzmo-font-color-disabled)}:host([variant=neutral]){--helptext-content-color-default: var(var(--luzmo-font-color));--helptext-icon-color-default: var(var(--luzmo-font-color))}:host([variant=negative]){--helptext-content-color-default: var(var(--luzmo-color-negative));--helptext-icon-color-default: var(var(--luzmo-color-negative))}:host([disabled]){--helptext-content-color-default: var(--luzmo-font-color-disabled);--helptext-icon-color-default: var(--luzmo-font-color-disabled)}:host(:lang(ja)){--helptext-line-height-cjk: 1.4}:host(:lang(zh)){--helptext-line-height-cjk: 1.4}:host(:lang(ko)){--helptext-line-height-cjk: 1.4}:host([size=s]){--helptext-min-height: 24px;--helptext-icon-size: 16px;--helptext-font-size: 12px;--helptext-text-to-visual: 7px;--helptext-top-to-workflow-icon: 4px;--helptext-top-to-text: 4px;--helptext-bottom-to-text: 5px}:host{--helptext-min-height: 24px;--helptext-icon-size: 18px;--helptext-font-size: 12px;--helptext-text-to-visual: 7px;--helptext-top-to-workflow-icon: 3px;--helptext-top-to-text: 4px;--helptext-bottom-to-text: 5px}:host([size=l]){--helptext-min-height: 32px;--helptext-icon-size: 20px;--helptext-font-size: 14px;--helptext-text-to-visual: 8px;--helptext-top-to-workflow-icon: 6px;--helptext-top-to-text: 6px;--helptext-bottom-to-text: 5px}:host([size=xl]){--helptext-min-height: 40px;--helptext-icon-size: 22px;--helptext-font-size: 16px;--helptext-text-to-visual: 9px;--helptext-top-to-workflow-icon: 9px;--helptext-top-to-text: 9px;--helptext-bottom-to-text: 12px}";
var ne = Object.defineProperty, vt = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && ne(t, e, l), l;
};
let ot = class extends E(L, {
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.icon = !1, this.variant = "neutral";
  }
  static get styles() {
    return [P(ae)];
  }
  render() {
    return b`
      ${this.variant === "negative" && this.icon ? b` ${_(Ct)} ` : O}
      <div class="text"><slot></slot></div>
    `;
  }
};
vt([
  n({ type: Boolean, reflect: !0 })
], ot.prototype, "icon");
vt([
  n({ reflect: !0 })
], ot.prototype, "variant");
customElements.get("luzmo-text-field") || customElements.define("luzmo-text-field", ft);
customElements.get("luzmo-help-text") || customElements.define("luzmo-help-text", ot);
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
const se = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
se();
const de = ":host{display:inline-block}:host luzmo-text-field{width:100%}";
var ce = Object.defineProperty, z = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && ce(t, e, l), l;
};
class v extends gt(
  E(L, {
    noDefaultSize: !0
  })
) {
  constructor() {
    super(...arguments), this.allowedKeys = "", this.i18nPlaceholder = {}, this.type = "text", this.grows = !1, this.maxlength = -1, this.minlength = -1, this.multiline = !1, this.rows = -1, this.quiet = !1, this.disabled = !1, this.required = !1, this.readonly = !1, this.language = "en", this.defaultLanguage = "en", this.value = {};
  }
  static get styles() {
    return [P(de)];
  }
  get _localizedValue() {
    const t = { ...this.value };
    return t[this.language] ?? t[this.defaultLanguage] ?? Object.values(t)[0] ?? "";
  }
  get _localizedPlaceholder() {
    const t = { ...this.i18nPlaceholder };
    return t[this.language] ?? t[this.defaultLanguage] ?? Object.values(t)[0] ?? "";
  }
  handleChange(t) {
    t.stopPropagation(), t.preventDefault();
    const e = t.target;
    this.value[this.language] !== e.value && (this.value = { ...this.value, [this.language]: e.value }, this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: { value: this.value }
      })
    ));
  }
  render() {
    return b`
      <luzmo-text-field
        .value=${this._localizedValue}
        .size=${this.size}
        .placeholder=${this._localizedPlaceholder}
        .name=${this.name}
        .allowedKeys=${this.allowedKeys}
        .type=${this.type}
        .pattern=${this.pattern}
        .maxlength=${this.maxlength}
        .minlength=${this.minlength}
        ?multiline=${this.multiline}
        ?grows=${this.grows}
        .rows=${this.rows}
        ?quiet=${this.quiet}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        @input=${this.handleChange}
        @change=${this.handleChange}
      ></luzmo-text-field>
    `;
  }
}
z([
  n({ attribute: "allowed-keys" })
], v.prototype, "allowedKeys");
z([
  n({ type: String, reflect: !0 })
], v.prototype, "name");
z([
  n({ type: Object, attribute: "i18n-placeholder" })
], v.prototype, "i18nPlaceholder");
z([
  n({ attribute: "type", reflect: !0 })
], v.prototype, "type");
z([
  n()
], v.prototype, "pattern");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "grows");
z([
  n({ type: Number })
], v.prototype, "maxlength");
z([
  n({ type: Number })
], v.prototype, "minlength");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "multiline");
z([
  n({ type: Number })
], v.prototype, "rows");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "quiet");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "disabled");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "required");
z([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "readonly");
z([
  n({ type: String, reflect: !0 })
], v.prototype, "autocomplete");
z([
  n({ type: String, reflect: !0 })
], v.prototype, "language");
z([
  n({ type: String, reflect: !0 })
], v.prototype, "defaultLanguage");
z([
  n({ type: Object, reflect: !0 })
], v.prototype, "value");
customElements.get("luzmo-multi-language-field") || customElements.define("luzmo-multi-language-field", v);
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
const ue = (o, t) => {
  if (o)
    return null;
  const e = t.assignedNodes().reduce((i, l) => l.textContent ? i + l.textContent : i, "");
  return e ? e.trim() : null;
}, me = "@media (forced-colors: active){:host{--highcontrast-progress-circle-fill-border-color: Highlight;--highcontrast-progress-circle-fill-border-color-over-background: Highlight}.track{--progress-circle-track-border-style: double}}:host{position:var(--luzmo-progress-circle-position, relative);direction:ltr;display:inline-block;position:relative;transform:translateZ(0)}:host,.track{inline-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));block-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px))}.track{box-sizing:border-box;border-style:var(--highcontrast-progress-circle-track-border-style, var(--luzmo-progress-circle-track-border-style, var(--progress-circle-track-border-style, solid)));border-width:var(--luzmo-progress-circle-thickness, var(--progress-circle-thickness, 3px));border-radius:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-color:var(--luzmo-progress-circle-track-border-color, var(--luzmo-border-color))}.fills{inline-size:100%;block-size:100%;position:absolute;inset-block-start:0;inset-inline-start:0}.fill{box-sizing:border-box;inline-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));block-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-style:solid;border-width:var(--luzmo-progress-circle-thickness, var(--progress-circle-thickness, 3px));border-radius:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-color:var(--highcontrast-progress-circle-fill-border-color, var(--luzmo-progress-circle-fill-border-color, var(--luzmo-primary)))}:host([static-color=black]) .track{border-color:var(--luzmo-progress-circle-track-border-color-over-background, rgba(0, 0, 0, .25))}:host([static-color=black]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background, var(--luzmo-progress-circle-fill-border-color-over-background, rgb(0, 0, 0)))}:host([static-color=white]) .track{border-color:var(--luzmo-progress-circle-track-border-color-over-background, rgba(255, 255, 255, .15))}:host([static-color=white]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background, var(--luzmo-progress-circle-fill-border-color-over-background, rgb(255, 255, 255)))}.fill-mask1,.fill-mask2{inline-size:50%;block-size:100%;transform-origin:100%;position:absolute;overflow:hidden;transform:rotate(180deg)}.fill-sub-mask1,.fill-sub-mask2{inline-size:100%;block-size:100%;transform-origin:100%;overflow:hidden;transform:rotate(-180deg)}.fill-mask2{transform:rotate(0)}:host([indeterminate]) .fills{will-change:transform;transform-origin:center;animation:1s cubic-bezier(.25,.78,.48,.89) infinite luzmo-fills-rotate;transform:translateZ(0)}:host([indeterminate]) .fill-sub-mask1{will-change:transform;animation:1s linear infinite luzmo-fill-mask-1;transform:translateZ(0)}:host([indeterminate]) .fill-sub-mask2{will-change:transform;animation:1s linear infinite luzmo-fill-mask-2;transform:translateZ(0)}.fill-submask-2{animation:1s linear infinite luzmo-fill-mask-2}@keyframes luzmo-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes luzmo-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes luzmo-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host([size=s]){--progress-circle-size: 16px;--progress-circle-thickness: 2px}:host([size=l]){--progress-circle-size: 48px;--progress-circle-thickness: 3px}:host([size=xl]){--progress-circle-size: 64px;--progress-circle-thickness: 4px}:host{block-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));inline-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));--progress-circle-size: inherit;--parent-element-progress-circle-size: inherit;--parent-element-progress-circle-size: var(--progress-circle-size, 32px)}:host([size=s]){--parent-element-progress-circle-size: var(--progress-circle-size, 16px)}:host([size=l]){--parent-element-progress-circle-size: var(--progress-circle-size, 48px)}:host([size=xl]){--parent-element-progress-circle-size: var(--progress-circle-size, 64px)}slot{display:none}.track,.fill{block-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));border-radius:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));inline-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size))}:host([indeterminate]) .fills,:host([indeterminate]) .fill-sub-mask1,:host([indeterminate]) .fill-sub-mask2{animation-duration:var(--luzmo-progress-circle-animation-duration, 1s)}";
var pe = Object.defineProperty, N = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && pe(t, e, l), l;
};
class U extends E(L, {
  validSizes: ["s", "m", "l", "xl"]
}) {
  constructor() {
    super(...arguments), this.indeterminate = !1, this.label = "", this.progress = 0;
  }
  static get styles() {
    return [P(me)];
  }
  makeRotation(t) {
    return this.indeterminate ? void 0 : `transform: rotate(${t}deg);`;
  }
  render() {
    const t = [
      this.makeRotation(-180 + 3.6 * Math.min(this.progress, 50)),
      this.makeRotation(-180 + 3.6 * Math.max(this.progress - 50, 0))
    ], e = ["mask1", "mask2"];
    return b`
      <slot @slotchange=${this.handleSlotchange}></slot>
      <div class="track"></div>
      <div class="fills">
        ${e.map(
      (i, l) => b`
            <div class="fill-${i}">
              <div
                class="fill-sub-${i}"
                style=${x(t[l])}
              >
                <div class="fill"></div>
              </div>
            </div>
          `
    )}
      </div>
    `;
  }
  handleSlotchange() {
    const t = ue(this.label, this.slotEl);
    t && (this.label = t);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.hasAttribute("role") || this.setAttribute("role", "progressbar");
  }
  updated(t) {
    super.updated(t), !this.indeterminate && t.has("progress") ? this.setAttribute("aria-valuenow", "" + this.progress) : this.hasAttribute("aria-valuenow") && this.removeAttribute("aria-valuenow"), t.has("label") && (this.label.length > 0 ? this.setAttribute("aria-label", this.label) : t.get("label") === this.getAttribute("aria-label") && this.removeAttribute("aria-label"));
  }
}
N([
  n({ type: Boolean, reflect: !0 })
], U.prototype, "indeterminate");
N([
  n({ type: String })
], U.prototype, "label");
N([
  n({ reflect: !0, attribute: "static-color" })
], U.prototype, "staticColor");
N([
  n({ type: Number })
], U.prototype, "progress");
N([
  Q("slot")
], U.prototype, "slotEl");
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
const he = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
he();
customElements.get("luzmo-progress-circle") || customElements.define("luzmo-progress-circle", U);
const ge = ":host{font-family:var(--luzmo-display-settings-font-family, var(--luzmo-font-family));font-size:var(--luzmo-display-settings-font-size, var(--display-settings-font-size));color:var(--luzmo-display-settings-font-color, var(--luzmo-font-color))}.settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}.settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-gap, var(--display-settings-gap))}luzmo-divider{margin:var(--luzmo-display-settings-ids-container-vertical-margin, var(--display-settings-ids-container-vertical-margin)) 0}.setting{display:flex;align-items:center}.label-action-container{display:flex;align-items:center;justify-content:space-between;gap:var(--luzmo-display-settings-info-to-remove-icon-gap, var(--display-settings-info-to-remove-icon-gap))}.id-button,.remove-button{outline:none;cursor:pointer;border:none;background:none;font-size:var(--luzmo-display-settings-font-size, var(--display-settings-font-size));color:var(--luzmo-display-settings-font-color, var(--luzmo-font-color))}.remove-button{display:block;width:var(--luzmo-display-settings-remove-button-size, var(--display-settings-remove-button-size));height:var(--luzmo-display-settings-remove-button-size, var(--display-settings-remove-button-size));border-radius:var(--luzmo-display-settings-remove-button-border-radius, 50%)}.remove-button:hover{background-color:var(--luzmo-display-settings-remove-button-background-color-hover, var(--luzmo-background-color-hover))}.remove-button:active,.remove-button:focus{background-color:var(--luzmo-display-settings-remove-button-background-color-down, var(--luzmo-background-color-down))}.remove-button:focus-visible{box-shadow:0 0 0 var(--luzmo-display-settings-remove-button-indicator-thickness, var(--display-settings-remove-button-indicator-thickness)) var(--highcontrast-remove-button-indicator-color, var(--luzmo-display-settings-remove-button-indicator-color, var(--display-settings-remove-button-indicator-color)))}.ids-container{display:flex;flex-direction:column;gap:var(--luzmo-display-settings-gap, var(--display-settings-gap));border-radius:50%}.id-label{text-transform:var(--luzmo-display-settings-id-label-text-transform, var(--display-settings-id-label-text-transform));font-size:var(--luzmo-display-settings-id-label-font-size, var(--display-settings-id-label-font-size));color:var(--luzmo-display-settings-id-label-color, var(--display-settings-id-label-color))}:host{--display-settings-font-family: var(--luzmo-font-family);--display-settings-id-label-text-transform: uppercase;--display-settings-id-label-color: var(--luzmo-secondary);--display-settings-remove-button-indicator-color: var(--luzmo-primary);--display-settings-remove-button-indicator-thickness: var( --luzmo-border-width )}:host{--display-settings-font-size: var(--luzmo-font-size);--display-settings-id-label-font-size: var(--luzmo-font-size-s);--display-settings-gap: var(--luzmo-spacing-3);--display-settings-ids-container-vertical-margin: var(--luzmo-spacing-4);--display-settings-info-to-remove-icon-gap: var(--luzmo-spacing-5);--display-settings-remove-button-size: var(--luzmo-component-height)}:host([size=s]){--display-settings-id-label-font-size: var(--luzmo-font-size-s);--display-settings-font-size: var(--luzmo-font-size-s);--display-settings-gap: var(--luzmo-spacing-3);--display-settings-ids-container-vertical-margin: var(--luzmo-spacing-3);--display-settings-info-to-remove-icon-gap: var(--luzmo-spacing-4);--display-settings-remove-button-size: var(--luzmo-component-height-s)}:host([size=l]){--display-settings-id-label-font-size: var(--luzmo-font-size);--display-settings-font-size: var(--luzmo-font-size-l);--display-settings-gap: var(--luzmo-spacing-4);--display-settings-ids-container-vertical-margin: var(--luzmo-spacing-5);--display-settings-info-to-remove-icon-gap: calc( var(--luzmo-spacing-5) + var(--luzmo-spacing-1) );--display-settings-remove-button-size: var(--luzmo-component-height-l)}:host([size=xl]){--display-settings-id-label-font-size: var(--luzmo-font-size-l);--display-settings-font-size: var(--luzmo-font-size-xl);--display-settings-gap: var(--luzmo-spacing-5);--display-settings-ids-container-vertical-margin: calc( var(--luzmo-spacing-5) + var(--luzmo-spacing-1) );--display-settings-info-to-remove-icon-gap: calc( var(--luzmo-spacing-5) + var(--luzmo-spacing-2) );--display-settings-remove-button-size: var(--luzmo-component-height-xl)}";
var fe = Object.defineProperty, w = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && fe(t, e, l), l;
};
class k extends E(L, {
  validSizes: Object.values(J)
}) {
  constructor() {
    super(...arguments), this._loadDisplaySettings = new mt(this, {
      task: async ([t, e, i]) => {
        const l = [];
        this.grandTotals && l.push("grandTotals"), this.periodOverPeriod && l.push("periodOverPeriod"), (e === "numeric" || e === "mixed" && (t == null ? void 0 : t.type) === "numeric") && l.push("numeric"), e !== "numeric" && (t == null ? void 0 : t.type) === "datetime" && l.push("datetime"), !["numeric", "mixed"].includes(e ?? "") && (t == null ? void 0 : t.type) === "numeric" && !this.binningDisabled && l.push("binning"), l.length > 0 && !i && (l.includes("numeric") && !this._settingsTypeLoaded.numeric ? (await import("./index-BF_FaUoX.js"), this._settingsTypeLoaded.numeric = !0) : l.includes("datetime") && !this._settingsTypeLoaded.datetime ? (await import("./index-fF6SRG8M.js"), this._settingsTypeLoaded.periodOverPeriod = !0) : l.includes("binning") && !this._settingsTypeLoaded.binning ? (await import("./index-CAE90saL.js"), this._settingsTypeLoaded.binning = !0) : l.includes("grandTotals") && !this._settingsTypeLoaded.grandTotals ? (await import("./index-CG-zKufy.js"), this._settingsTypeLoaded.grandTotals = !0) : l.includes("periodOverPeriod") && !this._settingsTypeLoaded.periodOverPeriod && (await import("./index-CUglHxSJ.js"), this._settingsTypeLoaded.periodOverPeriod = !0));
      },
      args: () => [this.slotContent, this.slotType, this.hideDisplaySettings]
    }), this.language = "en", this.contentLanguage = "en", this.slotType = "numeric", this.slotContent = {}, this._showIds = !1, this.measureColumns = [], this._settingsTypeLoaded = {
      binning: !1,
      datetime: !1,
      numeric: !1,
      grandTotals: !1,
      periodOverPeriod: !1,
      hierarchy: !0
    }, this._currentSlotContent = {};
  }
  static get styles() {
    return [Y(ge)];
  }
  willUpdate(t) {
    t.has("slotContent") && (this._currentSlotContent = structuredClone(this.slotContent));
  }
  _onSlotContentChange(t) {
    t.stopPropagation(), t.preventDefault(), this._currentSlotContent = structuredClone(t.detail.slotContent), this._sendEvent();
  }
  _onLabelChange() {
    this._currentSlotContent = structuredClone(this._currentSlotContent), this._currentSlotContent.label = this._multiLanguageFieldElement.value || {}, this._sendEvent();
  }
  _sendEvent() {
    this.dispatchEvent(
      new CustomEvent("slot-content-changed", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContent: { ...this._currentSlotContent }
        }
      })
    );
  }
  _removeEvent() {
    this.dispatchEvent(
      new CustomEvent("remove-slot-content", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContent: this._currentSlotContent
        }
      })
    );
  }
  _toggleIds() {
    this._showIds = !this._showIds;
  }
  _renderDisplaySettings() {
    return m`<div class="settings-container">
        <div class="settings-row">
          <div class="setting">
            <div class="label-container">
              <luzmo-field-label side-aligned="start" .size=${this.size}
                >Label:</luzmo-field-label
              >
              <luzmo-multi-language-field
                .language=${this.language}
                .value=${this._currentSlotContent.label}
                .size=${this.size}
                debounce="200"
                @change=${this._onLabelChange}
              ></luzmo-multi-language-field>
            </div>
            <div class="label-action-container">
              <button class="id-button" @click=${this._toggleIds}>
                ${_($t)}
                <luzmo-tooltip self-managed placement="top" size=${this.size}>
                  Show dataset and column id's
                </luzmo-tooltip>
              </button>
              ${this.showRemoveButton ? m`<button
                    class="remove-button"
                    @click=${this._removeEvent}
                  >
                    ${_(Z)}
                    <luzmo-tooltip
                      self-managed
                      placement="top"
                      size=${this.size}
                    >
                      Remove
                    </luzmo-tooltip>
                  </button>` : ""}
            </div>
          </div>
        </div>
        ${this.grandTotals ? m`<luzmo-display-settings-grand-totals
              .language=${this.language}
              .slotContent=${this._currentSlotContent}
              .size=${this.size}
              @slot-content-changed=${this._onSlotContentChange}
            ></luzmo-display-settings-grand-totals>` : ""}
        ${this.slotType === "numeric" || this.slotType === "mixed" && this.slotContent.type === "numeric" ? m`<luzmo-display-settings-numeric
              .language=${this.language}
              .slotContent=${this._currentSlotContent}
              .size=${this.size}
              .measureColumns=${this.measureColumns}
              @slot-content-changed=${this._onSlotContentChange}
            ></luzmo-display-settings-numeric>` : ""}
        ${this.slotType !== "numeric" && this.slotContent.type === "datetime" ? m`<luzmo-display-settings-datetime
              .language=${this.language}
              .contentLanguage=${this.contentLanguage}
              .slotContent=${this._currentSlotContent}
              .size=${this.size}
              @slot-content-changed=${this._onSlotContentChange}
            ></luzmo-display-settings-datetime>` : ""}
        ${!["numeric", "mixed"].includes(this.slotType ?? "") && this.slotContent.type === "numeric" && !this.binningDisabled ? m`<luzmo-display-settings-binning
              .language=${this.language}
              .slotContent=${this._currentSlotContent}
              .size=${this.size}
              @slot-content-changed=${this._onSlotContentChange}
            ></luzmo-display-settings-binning>` : ""}
        ${this.periodOverPeriod ? m`<luzmo-display-settings-period-over-period
              .language=${this.language}
              .slotContent=${this._currentSlotContent}
              .size=${this.size}
              @slot-content-changed=${this._onSlotContentChange}
            ></luzmo-display-settings-period-over-period>` : ""}
      </div>
      ${this._showIds ? m` <luzmo-divider></luzmo-divider>
            <div class="ids-container">
              <div>
                <span class="id-label">Column: </span>
                ${this._currentSlotContent.columnId ?? this._currentSlotContent.column}
              </div>
              <div>
                <span class="id-label">Dataset: </span>
                ${this._currentSlotContent.datasetId ?? this._currentSlotContent.set}
              </div>
              <div></div>
            </div>` : ""}`;
  }
  render() {
    return this._loadDisplaySettings.render({
      pending: () => m`<luzmo-progress-circle
          indeterminate
          .size=${this.size}
        ></luzmo-progress-circle>`,
      complete: () => this._renderDisplaySettings(),
      error: () => this._renderDisplaySettings()
    });
  }
}
w([
  c({ type: String })
], k.prototype, "language");
w([
  c({ type: String, attribute: "content-language" })
], k.prototype, "contentLanguage");
w([
  c({ type: Boolean, attribute: "hide-display-settings" })
], k.prototype, "hideDisplaySettings");
w([
  c({ type: Boolean, attribute: "binning-disabled" })
], k.prototype, "binningDisabled");
w([
  c({ type: Boolean, attribute: "grand-totals" })
], k.prototype, "grandTotals");
w([
  c({ type: Boolean, attribute: "period-over-period" })
], k.prototype, "periodOverPeriod");
w([
  c({ type: Boolean, attribute: "show-remove-button" })
], k.prototype, "showRemoveButton");
w([
  c({ type: String, attribute: "slot-type" })
], k.prototype, "slotType");
w([
  c()
], k.prototype, "slotContent");
w([
  Mt()
], k.prototype, "_showIds");
w([
  c({ type: Array, reflect: !1 })
], k.prototype, "measureColumns");
w([
  F("luzmo-multi-language-field")
], k.prototype, "_multiLanguageFieldElement");
customElements.get("luzmo-display-settings") || customElements.define("luzmo-display-settings", k);
var ve = {
  large: 700
};
function ze(o) {
  o.animate([{
    backgroundColor: "var(--ds-background-selected, #E9F2FF)"
  }, {}], {
    duration: ve.large,
    /**
     * This is equivalent to the browser default, but we are making it
     * explicit to avoid relying on implicit behavior.
     *
     * This curve is not part of `@atlaskit/motion` but it was an intentional
     * design decision to use this curve.
     */
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
    iterations: 1
  });
}
function it(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    t && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(o, l).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function rt(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? it(Object(e), !0).forEach(function(i) {
      nt(o, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : it(Object(e)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return o;
}
var be = {
  top: function(t, e) {
    return Math.abs(e.y - t.top);
  },
  right: function(t, e) {
    return Math.abs(t.right - e.x);
  },
  bottom: function(t, e) {
    return Math.abs(t.bottom - e.y);
  },
  left: function(t, e) {
    return Math.abs(e.x - t.left);
  }
}, zt = Symbol("closestEdge");
function xe(o, t) {
  var e, i, l = t.element, a = t.input, r = t.allowedEdges, s = {
    x: a.clientX,
    y: a.clientY
  }, d = l.getBoundingClientRect(), u = r.map(function(g) {
    return {
      edge: g,
      value: be[g](d, s)
    };
  }), f = (e = (i = u.sort(function(g, T) {
    return g.value - T.value;
  })[0]) === null || i === void 0 ? void 0 : i.edge) !== null && e !== void 0 ? e : null;
  return rt(rt({}, o), {}, nt({}, zt, f));
}
function X(o) {
  var t;
  return (t = o[zt]) !== null && t !== void 0 ? t : null;
}
const ye = ':host{font-family:var(--luzmo-slot-menu-list-font-family, var(--luzmo-font-family));font-size:var(--luzmo-slot-menu-list-font-size, var(--slot-menu-list-font-size));color:var(--luzmo-slot-menu-listfont-color, var(--luzmo-font-color))}:host{margin:0;padding:0;list-style:none;border-right:var(--luzmo-slot-menu-list-border-right-width, var(--luzmo-border-width)) solid var(--luzmo-slot-menu-list-border-right-color, var(--luzmo-border-color))}:host li{position:relative;cursor:pointer}:host li:hover{background-color:var(--luzmo-slot-menu-list-background-color-hover, var(--slot-menu-list-background-color-hover))}:host .active{background-color:var(--luzmo-slot-menu-list-active-background-color, var(--slot-menu-list-active-background-color));color:var(--luzmo-slot-menu-list-active-color, var(--slot-menu-list-active-color))}:host .active:hover{background-color:var(--luzmo-slot-menu-list-active-background-color-hover, var(--slot-menu-list-active-background-color-hover))}.drop-indicator{position:absolute;left:0;right:0;height:var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height));background-color:var(--luzmo-slot-menu-list-drop-indicator-color, var(--slot-menu-list-drop-indicator-color))}.drop-indicator:before{content:"";display:block;width:100%;border:var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height)) solid var(--luzmo-slot-menu-list-drop-indicator-color, var(--slot-menu-list-drop-indicator-color));border-radius:50%;position:absolute;background:var(--luzmo-slot-menu-list-drop-indicator-background, var(--luzmo-background-color));left:calc(-.5 * (var(--luzmo-slot-menu-list-drop-indicator-circle-size, var(--slot-menu-list-drop-indicator-circle-size)) + var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height))));top:calc(-.5 * (var(--luzmo-slot-menu-list-drop-indicator-circle-size, var(--slot-menu-list-drop-indicator-circle-size)) + var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height))));height:var(--luzmo-slot-menu-list-drop-indicator-circle-size, var(--slot-menu-list-drop-indicator-circle-size));width:var(--luzmo-slot-menu-list-drop-indicator-circle-size, var(--slot-menu-list-drop-indicator-circle-size))}.drop-indicator[data-edge=top]{top:calc(-.5 * var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height)))}.drop-indicator[data-edge=bottom]{bottom:calc(-.5 * var(--luzmo-slot-menu-list-drop-indicator-height, var(--slot-menu-list-drop-indicator-height)))}.draggable-slot-content{display:flex;justify-content:space-between;gap:var(--luzmo-slot-menu-label-to-icon-gap, var(--slot-menu-label-to-icon-gap));align-items:center}.draggable-slot-content .draggable-slot-content-label,.draggable-slot-content .draggable-slot-content-remove{padding-block-start:var(--luzmo-slot-menu-list-item-vertical-padding, var(--slot-menu-list-item-vertical-padding));padding-block-end:var(--luzmo-slot-menu-list-item-vertical-padding, var(--slot-menu-list-item-vertical-padding))}.draggable-slot-content .draggable-slot-content-label{padding-inline-start:var(--luzmo-slot-menu-list-item-horizontal-padding, var(--slot-menu-list-item-horizontal-padding));flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.draggable-slot-content .draggable-slot-content-remove{padding-inline-end:var(--luzmo-slot-menu-list-item-horizontal-padding, var(--slot-menu-list-item-horizontal-padding));flex:0 0 auto}:host{--slot-menu-list-active-background-color: var(--luzmo-primary);--slot-menu-list-active-background-color-hover: var(--luzmo-primary-hover);--slot-menu-list-active-color: var(--luzmo-primary-inverse-color);--slot-menu-list-background-color-hover: var(--luzmo-background-color-hover);--slot-menu-list-drop-indicator-color: var(--luzmo-font-color-down);--slot-menu-list-drop-indicator-height: 2px;--slot-menu-list-drop-indicator-circle-size: 4px}:host{--slot-menu-display-settings-min-width: 19rem;--slot-menu-min-height: calc(var(--luzmo-component-height) * 2);--slot-menu-font-size: var(--luzmo-font-size);--slot-menu-list-item-horizontal-padding: var(--luzmo-spacing-4);--slot-menu-list-item-vertical-padding: var(--luzmo-spacing-3);--slot-menu-label-to-icon-gap: var(--luzmo-spacing-3)}:host([size=s]){--slot-menu-display-settings-min-width: 16rem;--slot-menu-min-height: calc(var(--luzmo-component-height-s) * 2);--slot-menu-font-size: var(--luzmo-font-size-s);--slot-menu-list-item-horizontal-padding: var(--luzmo-spacing-3);--slot-menu-list-item-vertical-padding: var(--luzmo-spacing-3);--slot-menu-label-to-icon-gap: var(--luzmo-spacing-2)}:host([size=l]){--slot-menu-display-settings-min-width: 23rem;--slot-menu-min-height: calc(var(--luzmo-component-height-l) * 2);--slot-menu-font-size: var(--luzmo-font-size-l);--slot-menu-list-item-horizontal-padding: var(--luzmo-spacing-5);--slot-menu-list-item-vertical-padding: var(--luzmo-spacing-3);--slot-menu-label-to-icon-gap: var(--luzmo-spacing-4)}:host([size=xl]){--slot-menu-display-settings-min-width: 26rem;--slot-menu-min-height: calc(var(--luzmo-component-height-xl) * 2);--slot-menu-font-size: var(--luzmo-font-size-xl);--slot-menu-list-item-horizontal-padding: var(--luzmo-spacing-5);--slot-menu-list-item-vertical-padding: var(--luzmo-spacing-4);--slot-menu-label-to-icon-gap: var(--luzmo-spacing-5)}';
var ke = Object.defineProperty, H = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && ke(t, e, l), l;
};
class R extends E(L, {
  validSizes: Object.values(J)
}) {
  constructor() {
    super(...arguments), this.language = "en", this.contentLanguage = "en", this.slotContents = [], this.activeIndex = 0, this._sendChangeEvent = () => {
      this.dispatchEvent(
        new CustomEvent("slot-list-changed", {
          bubbles: !0,
          composed: !0,
          cancelable: !0,
          detail: {
            slotContents: structuredClone(this.slotContents),
            activeIndex: this.activeIndex
          }
        })
      );
    }, this._cleanupFns = [], this._attachAll = () => {
      [...this._draggableSlotContentElements].forEach((t) => {
        const e = this._sendChangeEvent.bind(this), i = this, l = _t({
          element: t,
          onGenerateDragPreview({ nativeSetDragImage: r }) {
            St({
              nativeSetDragImage: r,
              render({ container: s }) {
                var f;
                const d = document.createElement("div");
                d.classList.add("drag-preview");
                const u = {};
                [
                  [
                    "borderColor",
                    "--luzmo-slot-menu-list-border-color",
                    "--luzmo-border-color"
                  ],
                  [
                    "backgroundColor",
                    "--luzmo-slot-menu-list-background-color",
                    "--luzmo-background-color"
                  ],
                  [
                    "color",
                    "--luzmo-slot-menu-list-font-color",
                    "--slot-menu-list-font-color"
                  ],
                  [
                    "fontSize",
                    "--luzmo-slot-menu-list-font-size",
                    "--slot-menu-list-font-size"
                  ],
                  [
                    "horizontalPadding",
                    "--luzmo-slot-menu-list-item-horizontal-padding",
                    "--slot-menu-list-item-horizontal-padding"
                  ],
                  [
                    "verticalPadding",
                    "--luzmo-slot-menu-list-item-vertical-padding",
                    "--slot-menu-list-item-vertical-padding"
                  ],
                  [
                    "borderRadius",
                    "--luzmo-slot-menu-list-border-radius",
                    "--luzmo-border-radius"
                  ],
                  [
                    "fontFamily",
                    "--luzmo-slot-menu-list-font-family",
                    "--luzmo-font-family"
                  ]
                ].forEach(([g, T, V]) => {
                  const q = lt(t, T) || lt(t, V);
                  u[g] = q;
                }), d.textContent = ((f = t.querySelector("[data-task-content]")) == null ? void 0 : f.textContent) ?? // worst case fallback if we set up our data-* up wrong
                t.textContent, Object.assign(d.style, {
                  border: `1px solid ${u.borderColor}`,
                  backgroundColor: u.backgroundColor,
                  borderRadius: u.borderRadius,
                  fontFamily: u.fontFamily,
                  fontSize: u.fontSize,
                  color: u.color,
                  paddingInline: `${u.horizontalPadding}`,
                  paddingBlock: `${u.verticalPadding}`
                }), s.append(d);
              }
            });
          },
          getInitialData() {
            var d;
            const r = t.parentElement;
            let s = 0;
            return r && (s = [...((d = r.parentElement) == null ? void 0 : d.children) ?? []].indexOf(
              r
            )), {
              index: s
            };
          },
          onDragStart() {
            t.style.opacity = "0.5";
          },
          onDrop() {
            t.style.opacity = "1";
          }
        });
        this._cleanupFns.push(l);
        const a = st({
          element: t,
          canDrop({ source: r }) {
            var s;
            return r.element === t ? !1 : (s = r == null ? void 0 : r.element) == null ? void 0 : s.classList.contains("draggable-slot-content");
          },
          getData(r) {
            return xe(
              {},
              {
                element: t,
                input: r.input,
                allowedEdges: ["top", "bottom"]
              }
            );
          },
          getIsSticky() {
            return !0;
          },
          onDragEnter({ self: r }) {
            const s = X(r.data);
            if (!s)
              return;
            const d = document.createElement("div");
            d.classList.add("drop-indicator"), d.dataset.edge = s, t.after(d);
          },
          onDrag({ self: r }) {
            var u, f, g;
            const s = X(r.data);
            if (!s) {
              (u = t.nextElementSibling) == null || u.remove();
              return;
            }
            if (((f = t.nextElementSibling) == null ? void 0 : f.getAttribute("data-edge")) === s)
              return;
            (g = t.nextElementSibling) == null || g.remove();
            const d = document.createElement("div");
            d.classList.add("drop-indicator"), d.dataset.edge = s, t.after(d);
          },
          onDragLeave() {
            var r;
            (r = t.nextElementSibling) == null || r.remove();
          },
          onDrop({ self: r, source: s }) {
            var f, g, T, V;
            (f = t.nextElementSibling) == null || f.remove();
            const d = X(r.data), u = r.element.parentElement;
            if (typeof s.data.index == "number" && u) {
              let q = [...((g = u.parentElement) == null ? void 0 : g.children) ?? []].indexOf(
                u
              );
              d === "bottom" && s.data.index >= q && q < (((V = (T = u == null ? void 0 : u.parentElement) == null ? void 0 : T.children) == null ? void 0 : V.length) ?? 0) - 1 ? q += 1 : d === "top" && q > s.data.index && (q -= 1);
              const I = i.activeIndex, M = s.data.index, G = q, bt = i.slotContents[M];
              i.slotContents.splice(M, 1), i.slotContents.splice(G, 0, bt), M === I ? i.activeIndex = G : M < I && G >= I ? i.activeIndex = I - 1 : M > I && G <= I && (i.activeIndex = I + 1);
            }
            d && (ze(s.element), i.requestUpdate(), e());
          }
        });
        this._cleanupFns.push(a);
      });
    }, this._detachAll = () => {
      this._cleanupFns.forEach((t) => t()), this._cleanupFns = [];
    };
  }
  static get styles() {
    return [Y(ye)];
  }
  willUpdate() {
    this._detachAll();
  }
  updated() {
    this._attachAll();
  }
  setActiveIndex(t) {
    this.activeIndex = t, this._sendChangeEvent();
  }
  removeSlotContent(t) {
    this.slotContents = this.slotContents.filter(
      (e, i) => i !== t
    ), this.activeIndex === t ? this.activeIndex = t : this.slotContents.length > 0 && // go one down if index < activeIndex
    this.activeIndex > t && this.activeIndex--, this._sendChangeEvent();
  }
  render() {
    const t = this.slotContents.map(
      (e, i) => {
        const l = tt(e.label, this.contentLanguage);
        return m`<li class=${i === this.activeIndex ? "active" : ""}>
          <div class="draggable-slot-content">
            <div
              class="draggable-slot-content-label"
              @click=${this.setActiveIndex.bind(this, i)}
            >
              ${l}
            </div>
            <div
              class="draggable-slot-content-remove"
              @click=${this.removeSlotContent.bind(this, i)}
            >
              ${_(Z)}
            </div>
          </div>
        </li>`;
      }
    );
    return m`<div>${t}</div>`;
  }
}
H([
  c({ type: String, reflect: !0 })
], R.prototype, "language");
H([
  c({ type: String, attribute: "content-language", reflect: !0 })
], R.prototype, "contentLanguage");
H([
  Nt(".draggable-slot-content")
], R.prototype, "_draggableSlotContentElements");
H([
  c()
], R.prototype, "slotContents");
H([
  c({ type: Number })
], R.prototype, "activeIndex");
customElements.get("luzmo-slot-menu-list") || customElements.define("luzmo-slot-menu-list", R);
const we = ":host{font-family:var(--luzmo-slot-menu-font-family, var(--luzmo-font-family));font-size:var(--luzmo-slot-menu-font-size, var(--slot-menu-font-size));color:var(--luzmo-slot-menu-font-color, var(--luzmo-font-color));display:block;width:fit-content}luzmo-slot-menu-list{min-width:var(--luzmo-slot-menu-list-min-width, var(--slot-menu-list-min-width));max-width:var(--luzmo-slot-menu-list-max-width, var(--slot-menu-list-max-width))}.slot-contents-container{position:relative;border:var(--luzmo-slot-menu-border-width, var(--luzmo-border-width)) solid var(--luzmo-slot-menu-border-color, var(--luzmo-border-color));border-radius:var(--luzmo-slot-menu-border-radius, var(--luzmo-border-radius));background:var(--luzmo-slot-menu-background-color, var(--luzmo-background-color));border-top-left-radius:0}.slot-contents-container .inner-container{display:flex}.slot-contents-container .inner-container luzmo-display-settings{min-width:var(--luzmo-slot-menu-display-settings-min-width, var(--slot-menu-display-settings-min-width));padding:var(--luzmo-slot-menu-display-settings-vertical-padding, var(--slot-menu-display-settings-vertical-padding)) var(--luzmo-slot-menu-display-settings-horizontal-padding, var(--slot-menu-display-settings-horizontal-padding))}:host([variant=popup]) .slot-contents-container{overflow:hidden;border-top-left-radius:var(--luzmo-slot-menu-border-radius, var(--luzmo-border-radius));--slot-menu-popup-filter: drop-shadow( var( --luzmo-slot-menu-popup-shadow-horizontal, var(--slot-menu-popup-shadow-horizontal) ) var( --luzmo-slot-menu-popup-shadow-vertical, var(--slot-menu-popup-shadow-vertical) ) var( --luzmo-slot-menu-popup-shadow-blur, var(--slot-menu-popup-shadow-blur) ) var( --luzmo-slot-menu-popup-shadow-color, var(--slot-menu-popup-shadow-color) ) );filter:var(--luzmo-slot-menu-popup-filter, var(--slot-menu-popup-filter))}.slot-menu-top-menu{display:flex;align-items:center;border-radius:var(--luzmo-slot-menu-border-radius, var(--luzmo-border-radius));border-bottom-left-radius:0;border-bottom-right-radius:0;overflow:hidden;width:fit-content}.drag-handle{background-color:var(--luzmo-slot-menu-drag-handle-background-color, var(--luzmo-background-color-highlight));cursor:grab;width:fit-content;border:var(--luzmo-slot-menu-border-width, var(--luzmo-border-width)) solid var(--luzmo-slot-menu-border-color, var(--luzmo-background-color-highlight));font-size:var(--luzmo-slot-menu-drag-handle-size, var(--slot-menu-drag-handle-size));padding:var(--luzmo-slot-menu-drag-handle-vertical-padding, var(--slot-menu-drag-handle-vertical-padding)) var(--luzmo-slot-menu-drag-handle-horizontal-padding, var(--slot-menu-drag-handle-horizontal-padding))}.drag-handle:hover{background-color:var(--luzmo-slot-menu-drag-handle-background-color-hover, var(--luzmo-background-color-highlight-hover))}.slot-content-action{display:flex;flex:0 1 auto;max-width:var(--luzmo-slot-menu-top-menu-label-max-width, var(--slot-menu-top-menu-label-max-width));gap:var(--luzmo-slot-menu-label-to-icon-gap, var(--slot-menu-label-to-icon-gap));background-color:var(--luzmo-slot-menu-content-label-background-color, var(--luzmo-primary));color:var(--luzmo-slot-menu-content-label-color, var(--luzmo-primary-inverse-color));border:var(--luzmo-slot-menu-border-width, var(--luzmo-border-width)) solid var(--luzmo-slot-menu-content-label-border-color, var(--luzmo-primary));padding:var(--luzmo-slot-menu-drag-handle-vertical-padding, var(--slot-menu-drag-handle-vertical-padding)) var(--luzmo-slot-menu-drag-handle-horizontal-padding, var(--slot-menu-drag-handle-horizontal-padding))}.slot-content-action:hover{background-color:var(--luzmo-slot-menu-content-label-background-color-hover, var(--luzmo-primary-hover))}.slot-content-action:focus{background-color:var(--luzmo-slot-menu-content-label-background-color-focus, var(--luzmo-primary-focus))}.slot-content-action .slot-content-label{flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.slot-content-action .slot-content-remove{flex:0 0 auto;cursor:pointer}.close{position:absolute;right:1rem;cursor:pointer;top:calc(-2 * var(--luzmo-slot-menu-border-width, var(--luzmo-border-width)));background-color:var(--luzmo-slot-menu-close-button-background-color, var(--luzmo-background-color-highlight));font-size:var(--luzmo-slot-menu-close-button-size, var(--slot-menu-close-button-size));border:var(--luzmo-slot-menu-border-width, var(--luzmo-border-width)) solid var(--luzmo-slot-menu-border-color, var(--luzmo-border-color));border-radius:var(--luzmo-slot-menu-border-radius, var(--luzmo-border-radius));border-top-left-radius:0;border-top-right-radius:0;padding:var(--luzmo-slot-menu-close-button-vertical-padding, var(--slot-menu-close-button-vertical-padding)) var(--luzmo-slot-menu-close-button-horizontal-padding, var(--slot-menu-close-button-horizontal-padding))}.close:hover{background-color:var(--luzmo-slot-menu-close-button-background-color-hover, var(--luzmo-background-color-highlight-hover))}:host{--slot-menu-display-settings-min-width: 19rem;--slot-menu-min-height: calc(var(--luzmo-component-height) * 2);--slot-menu-font-size: var(--luzmo-font-size);--slot-menu-display-settings-horizontal-padding: var(--luzmo-spacing-5);--slot-menu-display-settings-vertical-padding: var(--luzmo-spacing-4);--slot-menu-top-menu-label-max-width: 12rem;--slot-menu-list-min-width: 8rem;--slot-menu-list-max-width: 12rem;--slot-menu-label-to-icon-gap: var(--luzmo-spacing-3);--slot-menu-drag-handle-size: var(--luzmo-font-size);--slot-menu-drag-handle-vertical-padding: var(--luzmo-spacing-2);--slot-menu-drag-handle-horizontal-padding: var(--luzmo-spacing-3);--slot-menu-close-button-size: var(--luzmo-font-size-s);--slot-menu-close-button-vertical-padding: var(--luzmo-spacing-2);--slot-menu-close-button-horizontal-padding: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--slot-menu-popup-shadow-horizontal: 0;--slot-menu-popup-shadow-vertical: 1px;--slot-menu-popup-shadow-blur: 4px;--slot-menu-popup-shadow-color: var(--luzmo-border-color)}:host([size=s]){--slot-menu-display-settings-min-width: 16rem;--slot-menu-min-height: calc(var(--luzmo-component-height-s) * 2);--slot-menu-font-size: var(--luzmo-font-size-s);--slot-menu-display-settings-horizontal-padding: var(--luzmo-spacing-4);--slot-menu-display-settings-vertical-padding: var(--luzmo-spacing-3);--slot-menu-top-menu-label-max-width: 10rem;--slot-menu-list-min-width: 6rem;--slot-menu-list-max-width: 10rem;--slot-menu-label-to-icon-gap: var(--luzmo-spacing-2);--slot-menu-drag-handle-size: var(--luzmo-font-size-s);--slot-menu-drag-handle-vertical-padding: var(--luzmo-spacing-2);--slot-menu-drag-handle-horizontal-padding: var(--luzmo-spacing-3);--slot-menu-close-button-size: var(--luzmo-font-size-xs);--slot-menu-close-button-vertical-padding: var(--luzmo-spacing-2);--slot-menu-close-button-horizontal-padding: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) )}:host([size=l]){--slot-menu-display-settings-min-width: 23rem;--slot-menu-min-height: calc(var(--luzmo-component-height-l) * 2);--slot-menu-font-size: var(--luzmo-font-size-l);--slot-menu-display-settings-horizontal-padding: calc( var(--luzmo-spacing-5) + var(--luzmo-spacing-1) );--slot-menu-display-settings-vertical-padding: var(--luzmo-spacing-5);--slot-menu-top-menu-label-max-width: 14rem;--slot-menu-list-min-width: 9rem;--slot-menu-list-max-width: 14rem;--slot-menu-label-to-icon-gap: var(--luzmo-spacing-4);--slot-menu-drag-handle-size: var(--luzmo-font-size-l);--slot-menu-drag-handle-vertical-padding: var(--luzmo-spacing-3);--slot-menu-drag-handle-horizontal-padding: var(--luzmo-spacing-3);--slot-menu-close-button-size: var(--luzmo-font-size);--slot-menu-close-button-vertical-padding: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--slot-menu-close-button-horizontal-padding: var(--luzmo-spacing-3)}:host([size=xl]){--slot-menu-display-settings-min-width: 26rem;--slot-menu-min-height: calc(var(--luzmo-component-height-xl) * 2);--slot-menu-font-size: var(--luzmo-font-size-xl);--slot-menu-display-settings-horizontal-padding: calc( var(--luzmo-spacing-5) + var(--luzmo-spacing-2) );--slot-menu-display-settings-vertical-padding: var(--luzmo-spacing-5);--slot-menu-top-menu-label-max-width: 16rem;--slot-menu-list-min-width: 10rem;--slot-menu-list-max-width: 16rem;--slot-menu-label-to-icon-gap: var(--luzmo-spacing-5);--slot-menu-drag-handle-size: var(--luzmo-font-size-xl);--slot-menu-drag-handle-vertical-padding: var(--luzmo-spacing-3);--slot-menu-drag-handle-horizontal-padding: var(--luzmo-spacing-4);--slot-menu-close-button-size: var(--luzmo-font-size-l);--slot-menu-close-button-vertical-padding: var(--luzmo-spacing-3);--slot-menu-close-button-horizontal-padding: var(--luzmo-spacing-3)}";
var Ce = Object.defineProperty, S = (o, t, e, i) => {
  for (var l = void 0, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = r(t, e, l) || l);
  return l && Ce(t, e, l), l;
};
class C extends E(L, {
  validSizes: Object.values(J)
}) {
  constructor() {
    super(...arguments), this.language = "en", this.contentLanguage = "en", this.slotType = "numeric", this.variant = "draggable", this.slotContents = [], this._slotListData = [], this._slotContents = [], this._currentSlotContent = {}, this._activeIndex = 0;
  }
  static get styles() {
    return [Y(we)];
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  _sendChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("slot-contents-changed", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContents: [...this._slotContents]
        }
      })
    );
  }
  _sendCloseEvent() {
    this.dispatchEvent(
      new CustomEvent("close", {
        bubbles: !0,
        composed: !0,
        cancelable: !0
      })
    );
  }
  willUpdate(t) {
    var e;
    t.has("slotContents") && (this._slotContents = structuredClone(this.slotContents), this._slotListData = structuredClone(this.slotContents), this._currentSlotContent = ((e = this._slotContents) == null ? void 0 : e[this._activeIndex ?? 0]) ?? {});
  }
  updated() {
    this.updateContentLabel();
  }
  _handleSlotListChange(t) {
    var i;
    this._slotContents = structuredClone(t.detail.slotContents);
    const e = t.detail.activeIndex;
    e !== this._activeIndex && (this._activeIndex = e), this._currentSlotContent = ((i = this._slotContents) == null ? void 0 : i[this._activeIndex ?? 0]) ?? {}, this.displaySettingsElement.slotContent = this._currentSlotContent, this._slotContents.length <= 1 && this.requestUpdate(), this._sendChangeEvent();
  }
  _handleSlotContentChange(t) {
    this._slotContents[this._activeIndex] = structuredClone(
      t.detail.slotContent
    ), this._slotListData = structuredClone(this._slotContents), this.slotMenuListElement && (this.slotMenuListElement.slotContents = this._slotListData), this.updateContentLabel(), this._sendChangeEvent();
  }
  // we set & update the label manually to not lose focus when typing in the display settings bc of rerender
  updateContentLabel() {
    if (this.slotContentLabelElement) {
      const t = tt(
        this._slotContents[this._activeIndex].label,
        this.contentLanguage
      );
      this.slotContentLabelElement.textContent = t;
    }
  }
  removeSlotContent(t) {
    this._slotContents = this._slotContents.filter(
      (e, i) => i !== t
    ), this._currentSlotContent = {}, this._sendChangeEvent(), this._sendCloseEvent(), this.requestUpdate();
  }
  close() {
    this._sendCloseEvent();
  }
  _removeActiveSlotContent() {
    this.removeSlotContent(this._activeIndex);
  }
  render() {
    return m`<div class="slot-menu-top-menu">
        ${this.variant === "draggable" ? m`<div class="drag-handle">${_(Et)}</div>` : ""}
        ${this._slotContents.length === 1 && this.variant !== "popup" ? m` <div class="slot-content-action">
              <div class="slot-content-label"></div>
              <div
                class="slot-content-remove"
                @click=${this.removeSlotContent.bind(this, 0)}
              >
                ${_(Z)}
              </div>
            </div>` : ""}
      </div>
      <div
        class="slot-contents-container ${this._slotContents.length > 1 ? "multiple" : ""}"
      >
        ${this.variant === "popup" ? "" : m`<div class="close" @click=${this.close}>
              ${_(Tt)}
            </div>`}
        <div class="inner-container">
          ${this._slotContents.length > 1 ? m`<luzmo-slot-menu-list
                .slotContents=${this._slotListData}
                .activeIndex=${this._activeIndex}
                @slot-list-changed=${this._handleSlotListChange}
              ></luzmo-slot-menu-list>` : ""}
          <luzmo-display-settings
            .size=${this.size}
            .language=${this.language}
            .contentLanguage=${this.contentLanguage}
            .slotContent=${this._currentSlotContent}
            .slotType=${this.slotType}
            .showRemoveButton=${this.variant === "popup" && this._slotContents.length === 1}
            @slot-content-changed=${this._handleSlotContentChange}
            @remove-slot-content=${this._removeActiveSlotContent}
          ></luzmo-display-settings>
        </div>
      </div>`;
  }
}
S([
  c({ type: String, reflect: !0 })
], C.prototype, "language");
S([
  c({ type: String, attribute: "content-language", reflect: !0 })
], C.prototype, "contentLanguage");
S([
  c({ type: String, attribute: "slot-type", reflect: !0 })
], C.prototype, "slotType");
S([
  c({ type: Boolean, attribute: "no-drag", reflect: !0 })
], C.prototype, "noDrag");
S([
  c({ type: Boolean, attribute: "no-close", reflect: !0 })
], C.prototype, "noClose");
S([
  c({ type: String, reflect: !0 })
], C.prototype, "variant");
S([
  c({ type: Boolean, attribute: "no-top-menu-label", reflect: !0 })
], C.prototype, "noTopMenuLabel");
S([
  c()
], C.prototype, "slotContents");
S([
  F(".slot-content-label")
], C.prototype, "slotContentLabelElement");
S([
  F("luzmo-display-settings")
], C.prototype, "displaySettingsElement");
S([
  F("luzmo-slot-menu-list")
], C.prototype, "slotMenuListElement");
customElements.get("luzmo-slot-menu") || customElements.define("luzmo-slot-menu", C);
const $e = ":host{font-family:var(--luzmo-droppable-slot-font-family, var(--luzmo-font-family))}.droppable-slot[filled]{cursor:pointer;border:var(--luzmo-droppable-slot-filled-border-width, var(--droppable-slot-filled-border-width)) var(--luzmo-droppable-slot-filled-border-style, var(--droppable-slot-filled-border-style)) var(--luzmo-droppable-slot-filled-border-color, var(--droppable-slot-filled-border-color));background-color:var(--luzmo-droppable-slot-filled-background-color, var(--droppable-slot-filled-background-color));color:var(--luzmo-droppable-slot-filled-color, var(--droppable-slot-filled-color))}.droppable-slot{color:var(--luzmo-droppable-slot-font-color, var(--droppable-slot-font-color));border:var(--luzmo-droppable-slot-border-width, var(--droppable-slot-border-width)) var(--luzmo-droppable-slot-border-style, var(--droppable-slot-border-style)) var(--luzmo-droppable-slot-border-color, var(--droppable-slot-border-color));background-color:var(--luzmo-droppable-slot-background-color, var(--droppable-slot-background-color));display:flex;justify-content:space-between;align-items:center;padding-left:var(--luzmo-droppable-slot-edge-to-label, var(--droppable-slot-edge-to-label));gap:var(--luzmo-spacing-5);border-radius:var(--luzmo-border-radius);height:var(--luzmo-droppable-slot-height, var(--droppable-slot-height));cursor:move}:host([disabled]) .droppable-slot{background-color:var(--luzmo-droppable-slot-background-color-disabled, var(--droppable-slot-background-color-disabled));color:var(--luzmo-droppable-slot-color-disabled, var(--droppable-slot-color-disabled));cursor:not-allowed}:host([disabled]) .drag-handle-icon{opacity:.25;font-size:12px}.drag-handle-icon{opacity:.5;font-size:12px}.droppable-slot-label{font-size:var(--luzmo-droppable-slot-label-font-size, var(--droppable-slot-label-font-size));flex-grow:1;margin-right:var(--luzmo-droppable-slot-text-to-controls, var(--droppable-slot-text-to-controls));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.controls{height:100%;display:flex;align-items:center;gap:var(--luzmo-droppable-slot-controls-gap, var(--droppable-slot-controls-gap));background-color:var(--luzmo-droppable-slot-controls-background-color, var(--droppable-slot-controls-background-color));color:var(--luzmo-droppable-slot-controls-color, var(--droppable-slot-controls-color));margin-right:var(--luzmo-droppable-slot-controls-to-edge, var(--droppable-slot-controls-to-edge));padding:0 var(--luzmo-droppable-slot-controls-horizontal-padding, var(--droppable-slot-controls-horizontal-padding))}.controls div{cursor:pointer;height:100%;display:flex;align-items:center;padding:0 var(--luzmo-droppable-slot-controls-control-horizontal-padding, var(--droppable-slot-controls-control-horizontal-padding))}luzmo-slot-menu[placement=bottom],luzmo-slot-menu[placement=top],luzmo-slot-menu[placement=bottom-start],luzmo-slot-menu[placement=top-start],luzmo-slot-menu[placement=bottom-end],luzmo-slot-menu[placement=top-end]{margin:var(--luzmo-droppable-slot-overlay-vertical-gap, var(--droppable-slot-overlay-vertical-gap)) 0}luzmo-slot-menu[placement=left],luzmo-slot-menu[placement=right],luzmo-slot-menu[placement=left-start],luzmo-slot-menu[placement=right-start],luzmo-slot-menu[placement=left-end],luzmo-slot-menu[placement=right-end]{margin:0 var(--luzmo-droppable-slot-overlay-horizontal-gap, var(--droppable-slot-overlay-horizontal-gap))}:host{--droppable-slot-border-width: var(--luzmo-border-width);--droppable-slot-border-style: dashed;--droppable-slot-border-color: var(--luzmo-border-color);--droppable-slot-background-color: transparent;--droppable-slot-font-color: var(--luzmo-font-color);--droppable-slot-controls-background-color: var(--luzmo-primary-down);--droppable-slot-controls-color: var(--luzmo-primary-inverse-color);--droppable-slot-text-to-controls: var(--luzmo-spacing-3);--droppable-slot-controls-to-edge: 0;--droppable-slot-controls-gap: var(--luzmo-spacing-2);--droppable-slot-controls-horizontal-padding: var(--luzmo-spacing-2);--droppable-slot-controls-control-horizontal-padding: var(--luzmo-spacing-3);--droppable-slot-filled-background-color: var(--luzmo-primary);--droppable-slot-filled-color: var(--luzmo-primary-inverse-color);--droppable-slot-filled-border-width: var(--luzmo-border-width);--droppable-slot-filled-border-style: solid;--droppable-slot-filled-border-color: var(--luzmo-primary-down);--droppable-slot-height: var(--luzmo-component-height);--droppable-slot-label-font-size: var(--luzmo-font-size);--droppable-slot-icon-type-font-size: var(--luzmo-font-size);--droppable-slot-edge-to-label: var(--luzmo-spacing-5);--droppable-slot-color-disabled: var(--luzmo-color-disabled);--droppable-slot-background-color-disabled: var( --luzmo-background-color-disabled )}:host([accept-drag]){--droppable-slot-filled-background-color: var(--luzmo-color-positive);--droppable-slot-filled-color: white;--droppable-slot-filled-border-color: var(--luzmo-color-positive-down);--droppable-slot-controls-background-color: var(--luzmo-color-positive-down);--droppable-slot-controls-color: white;--droppable-slot-background-color: var(--luzmo-color-positive);--droppable-slot-font-color: white}:host{--droppable-slot-height: var(--luzmo-component-height);--droppable-slot-label-font-size: var(--luzmo-font-size);--droppable-slot-icon-type-font-size: var(--luzmo-font-size);--droppable-slot-horizontal-padding: var(--luzmo-spacing-4);--droppable-slot-overlay-horizontal-gap: var(--luzmo-spacing-4);--droppable-slot-overlay-vertical-gap: var(--luzmo-spacing-4)}:host([size=s]){--droppable-slot-height: var(--luzmo-component-height-s);--droppable-slot-label-font-size: var(--luzmo-font-size-s);--droppable-slot-icon-type-font-size: var(--luzmo-font-size-s);--droppable-slot-horizontal-padding: var(--luzmo-spacing-4);--droppable-slot-overlay-horizontal-gap: var(--luzmo-spacing-4);--droppable-slot-overlay-vertical-gap: var(--luzmo-spacing-4)}:host([size=l]){--droppable-slot-height: var(--luzmo-component-height-l);--droppable-slot-label-font-size: var(--luzmo-font-size-l);--droppable-slot-icon-type-font-size: var(--luzmo-font-size-l);--droppable-slot-horizontal-padding: var(--luzmo-spacing-5);--droppable-slot-overlay-horizontal-gap: var(--luzmo-spacing-5);--droppable-slot-overlay-vertical-gap: var(--luzmo-spacing-5)}:host([size=xl]){--droppable-slot-height: var(--luzmo-component-height-xl);--droppable-slot-label-font-size: var(--luzmo-font-size-xl);--droppable-slot-icon-type-font-size: var(--luzmo-font-size-xl);--droppable-slot-horizontal-padding: var(--luzmo-spacing-5);--droppable-slot-overlay-horizontal-gap: var(--luzmo-spacing-5);--droppable-slot-overlay-vertical-gap: var(--luzmo-spacing-5)}:host{box-sizing:border-box}", at = {
  Category: () => D("Category", { desc: "Category label" }),
  Measure: () => D("Measure", { desc: "Measure label" }),
  Legend: () => D("Legend", { desc: "Legend label" }),
  "Y-Axis": () => D("Y-Axis", { desc: "Y-Axis label" }),
  "X-Axis": () => D("X-Axis", { desc: "X-Axis label" }),
  "Group by": () => D("Group by", { desc: "Group by label" })
};
var _e = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, $ = (o, t, e, i) => {
  for (var l = i > 1 ? void 0 : i ? Se(t, e) : t, a = o.length - 1, r; a >= 0; a--)
    (r = o[a]) && (l = (i ? r(t, e, l) : r(l)) || l);
  return i && l && _e(t, e, l), l;
};
let y = class extends E(L, {
  validSizes: ["s", "m", "l", "xl"],
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this._loadSlotsConfig = new mt(this, {
      task: async ([o]) => {
        if (o && o !== this._itemTypeLoaded) {
          const t = /* @__PURE__ */ Object.assign({
            "../../item-definitions/area-chart/area-chart-slots.config.ts": () => import("./area-chart-slots.config-C0c2ZzBh.js"),
            "../../item-definitions/bar-chart/bar-chart-slots.config.ts": () => import("./bar-chart-slots.config-GSSL7XVA.js"),
            "../../item-definitions/box-plot/box-plot-slots.config.ts": () => import("./box-plot-slots.config-BRhnF2FE.js"),
            "../../item-definitions/bubble-chart/bubble-chart-slots.config.ts": () => import("./bubble-chart-slots.config-Bbh94VgZ.js"),
            "../../item-definitions/bullet-chart/bullet-chart-slots.config.ts": () => import("./bullet-chart-slots.config-Ccv_dX0s.js"),
            "../../item-definitions/choropleth-map/choropleth-map-slots.config.ts": () => import("./choropleth-map-slots.config-B-uJTj4q.js"),
            "../../item-definitions/circle-pack-chart/circle-pack-chart-slots.config.ts": () => import("./circle-pack-chart-slots.config-xwVdRiwS.js"),
            "../../item-definitions/circular-gauge/circular-gauge-slots.config.ts": () => import("./circular-gauge-slots.config-DA-ZAc5d.js"),
            "../../item-definitions/column-chart/column-chart-slots.config.ts": () => import("./column-chart-slots.config-DAdAk17k.js"),
            "../../item-definitions/combination-chart/combination-chart-slots.config.ts": () => import("./combination-chart-slots.config-CqKLFKCZ.js"),
            "../../item-definitions/conditional-number/conditional-number-slots.config.ts": () => import("./conditional-number-slots.config-L3t5pb1-.js"),
            "../../item-definitions/date-filter/date-filter-slots.config.ts": () => import("./date-filter-slots.config-CxB8IF5B.js"),
            "../../item-definitions/donut-chart/donut-chart-slots.config.ts": () => import("./donut-chart-slots.config-BEwhfq27.js"),
            "../../item-definitions/dropdown-filter/dropdown-filter-slots.config.ts": () => import("./dropdown-filter-slots.config-B8J6ftCh.js"),
            "../../item-definitions/evolution-number/evolution-number-slots.config.ts": () => import("./evolution-number-slots.config-CW21b2ua.js"),
            "../../item-definitions/funnel-chart/funnel-chart-slots.config.ts": () => import("./funnel-chart-slots.config-BBhMS2qi.js"),
            "../../item-definitions/heat-map/heat-map-slots.config.ts": () => import("./heat-map-slots.config-cdD8XTmI.js"),
            "../../item-definitions/heat-table/heat-table-slots.config.ts": () => import("./heat-table-slots.config-DJkP72oT.js"),
            "../../item-definitions/hexbin-map/hexbin-map-slots.config.ts": () => import("./hexbin-map-slots.config-cdD8XTmI.js"),
            "../../item-definitions/image/image-slots.config.ts": () => import("./image-slots.config-IpwUxDyU.js"),
            "../../item-definitions/line-chart/line-chart-slots.config.ts": () => import("./line-chart-slots.config-P7xa-pHi.js"),
            "../../item-definitions/marker-map/marker-map-slots.config.ts": () => import("./marker-map-slots.config-cdD8XTmI.js"),
            "../../item-definitions/ohlc-chart/ohlc-chart-slots.config.ts": () => import("./ohlc-chart-slots.config-Cvy5n1xv.js"),
            "../../item-definitions/parallel-coordinates-plot/parallel-coordinates-plot-slots.config.ts": () => import("./parallel-coordinates-plot-slots.config-CQW2CJW6.js"),
            "../../item-definitions/pivot-table/pivot-table-slots.config.ts": () => import("./pivot-table-slots.config-BH5fOJre.js"),
            "../../item-definitions/pyramid-chart/pyramid-chart-slots.config.ts": () => import("./pyramid-chart-slots.config-Cm9bQsXT.js"),
            "../../item-definitions/radar-chart/radar-chart-slots.config.ts": () => import("./radar-chart-slots.config-Dpmytmc3.js"),
            "../../item-definitions/regular-table/regular-table-slots.config.ts": () => import("./regular-table-slots.config-EUS-V9lL.js"),
            "../../item-definitions/route-map/route-map-slots.config.ts": () => import("./route-map-slots.config-DYCcaQZi.js"),
            "../../item-definitions/sankey-diagram/sankey-diagram-slots.config.ts": () => import("./sankey-diagram-slots.config-BSTBEZDe.js"),
            "../../item-definitions/scatter-plot/scatter-plot-slots.config.ts": () => import("./scatter-plot-slots.config-BuWYqDWK.js"),
            "../../item-definitions/search-filter/search-filter-slots.config.ts": () => import("./search-filter-slots.config-DmiVXOva.js"),
            "../../item-definitions/slicer-filter/slicer-filter-slots.config.ts": () => import("./slicer-filter-slots.config-CHQ0ZXga.js"),
            "../../item-definitions/slider-filter/slider-filter-slots.config.ts": () => import("./slider-filter-slots.config-BN3K1rnl.js"),
            "../../item-definitions/speedometer-chart/speedometer-chart-slots.config.ts": () => import("./speedometer-chart-slots.config-DA-ZAc5d.js"),
            "../../item-definitions/spike-map/spike-map-slots.config.ts": () => import("./spike-map-slots.config-CuqpgkvN.js"),
            "../../item-definitions/strip-plot/strip-plot-slots.config.ts": () => import("./strip-plot-slots.config-Co8ghEv8.js"),
            "../../item-definitions/sunburst-chart/sunburst-chart-slots.config.ts": () => import("./sunburst-chart-slots.config-xwVdRiwS.js"),
            "../../item-definitions/symbol-map/symbol-map-slots.config.ts": () => import("./symbol-map-slots.config-C5CKaVED.js"),
            "../../item-definitions/text/text-slots.config.ts": () => import("./text-slots.config-Hy5yNIAX.js"),
            "../../item-definitions/treemap-chart/treemap-chart-slots.config.ts": () => import("./treemap-chart-slots.config-xLD22K9V.js"),
            "../../item-definitions/venn-diagram/venn-diagram-slots.config.ts": () => import("./venn-diagram-slots.config-DPmj71cR.js"),
            "../../item-definitions/video/video-slots.config.ts": () => import("./video-slots.config-IpwUxDyU.js"),
            "../../item-definitions/wordcloud-chart/wordcloud-chart-slots.config.ts": () => import("./wordcloud-chart-slots.config-BS4sOOHt.js")
          });
          if (t[`../../item-definitions/${o}/${o}-slots.config.ts`]) {
            const e = await t[`../../item-definitions/${o}/${o}-slots.config.ts`]();
            this._slotsConfig = (e == null ? void 0 : e.default) ?? {};
          }
          return this._slotsConfig;
        }
      },
      args: () => [this.itemType, this.language]
    }), this.slotConfiguration = {}, this.slotContents = [], this.language = "en", this.menu = "default", this.placement = "bottom-end", this.changedSlotContents = (o) => {
      this.dispatchEvent(
        new CustomEvent("slot-contents-changed", {
          bubbles: !0,
          composed: !0,
          cancelable: !0,
          detail: {
            slotContents: o
          }
        })
      );
    }, this._currentSlotContents = [];
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._cleanupDroppable();
  }
  emptySlotContents(o) {
    o.preventDefault(), o.stopPropagation(), this.slotContents = [], this.changedSlotContents([]);
  }
  willUpdate(o) {
    o.has("language") && ([...Lt].includes(this.language) || this.language === "en") && (qt(this.language), this.requestUpdate()), o.has("slotContents") && (this._currentSlotContents = structuredClone(this.slotContents));
  }
  firstUpdated(o) {
    this._cleanupDroppable || (this._cleanupDroppable = st({
      element: this,
      onDrop: (t) => {
        var a, r, s, d;
        const e = { ...(a = t.source) == null ? void 0 : a.data }, i = {
          ...(e == null ? void 0 : e.label) ?? { en: "Untitled" }
        }, l = e == null ? void 0 : e.type;
        if (l === "datetime" && !e.level && (e.level = e.lowestLevel ?? (e.subtype === "date" ? 5 : 9)), l === "datetime" && ((s = (r = t == null ? void 0 : t.source) == null ? void 0 : r.element) != null && s.hasAttribute("sublevel"))) {
          const u = [
            "(Yr)",
            "(Qtr)",
            "(Mth)",
            "(Wk)",
            "(Date)",
            "(Hr)",
            "(Min)",
            "(Sec)",
            "(Msec)"
          ], f = (e == null ? void 0 : e.level) ?? 1, g = Object.keys(i);
          for (const T of g)
            i[T] = `${i[T]} ${u[f - 1]}`;
          e.label = i;
        }
        this.slotContents = (d = this.slotConfiguration) != null && d.canAcceptMultipleColumns ? [...this.slotContents ?? [], e] : [e], this.removeAttribute("accept-drag"), this.changedSlotContents(this.slotContents);
      },
      canDrop: ({ source: t }) => {
        var i, l, a, r, s, d, u, f, g;
        if (![
          "LUZMO-DRAGGABLE-DATA-ITEM-LEVEL",
          "LUZMO-DRAGGABLE-DATA-ITEM"
        ].includes((i = t.element) == null ? void 0 : i.tagName))
          return !1;
        const e = ((a = (l = this.slotConfiguration) == null ? void 0 : l.acceptableColumnTypes) == null ? void 0 : a.length) > 0 ? this.slotConfiguration.acceptableColumnTypes : ["numeric", "hierarchy", "datetime"];
        return (r = t == null ? void 0 : t.data) != null && r.type && !e.includes((s = t == null ? void 0 : t.data) == null ? void 0 : s.type) ? !1 : !((d = t == null ? void 0 : t.data) != null && d.subtype && ((f = (u = this.slotConfiguration) == null ? void 0 : u.acceptableColumnSubtypes) == null ? void 0 : f.length) > 0 && !this.slotConfiguration.acceptableColumnSubtypes.includes(
          (g = t == null ? void 0 : t.data) == null ? void 0 : g.subtype
        ));
      },
      getDropEffect: () => "link",
      onDragEnter: () => {
        this.setAttribute("accept-drag", "");
      },
      onDragLeave: () => {
        this.removeAttribute("accept-drag");
      }
    }));
  }
  updated() {
    this.createFullLabel();
  }
  _onSlotMenuChanges(o) {
    var t;
    o.preventDefault(), o.stopPropagation(), this.slotContents.length === ((t = o.detail.slotContents) == null ? void 0 : t.length) ? (this._currentSlotContents = o.detail.slotContents, this.createFullLabel(), this.changedSlotContents(this._currentSlotContents)) : (this.slotContents = o.detail.slotContents, this.changedSlotContents(this.slotContents));
  }
  // we update the label outside the lit render method to not lose focus when typing in the display settings bc of rerender
  // we use a copy of slotContents '_currentSlotContents' to not trigger a rerender when the slotContents change from the slot-menu
  createFullLabel() {
    var i, l, a, r, s, d, u, f, g;
    let o = "";
    const t = at[(i = this.slotConfiguration) == null ? void 0 : i.label] ? at[(l = this.slotConfiguration) == null ? void 0 : l.label]() : (a = this.slotConfiguration) == null ? void 0 : a.label;
    ((r = this._currentSlotContents) == null ? void 0 : r.length) === 1 ? o = tt((d = (s = this._currentSlotContents) == null ? void 0 : s[0]) == null ? void 0 : d.label, this.language) ?? "Untitled" : ((u = this._currentSlotContents) == null ? void 0 : u.length) > 1 && (o = `${this._currentSlotContents.length} items`);
    let e = "";
    this.label ? e = this.label : t && (e = t), e = e || "Untitled", ((f = this._currentSlotContents) == null ? void 0 : f.length) > 0 && (e += ((g = this._currentSlotContents) == null ? void 0 : g.length) > 1 ? `: ${this._currentSlotContents.length} items` : `: ${o}`), this._droppableSlotLabelElement && (this._droppableSlotLabelElement.textContent = e);
  }
  droppableSlotMarkup() {
    var o, t, e, i;
    return m`
      <div
        class="droppable-slot"
        ?filled=${((o = this.slotContents) == null ? void 0 : o.length) > 0}
        id="trigger"
      >
        <div class="droppable-slot-label"></div>
        ${((t = this.slotContents) == null ? void 0 : t.length) > 0 && !(this.hideConfiguration && this.hideDelete) ? m`<div class="controls">
              ${this.hideConfiguration ? "" : m`<div>
                    ${_(It)}
                    <luzmo-tooltip
                      self-managed
                      placement="top"
                      size=${this.size}
                    >
                      edit
                    </luzmo-tooltip>
                  </div> `}
              ${this.hideDelete ? "" : m`<div @click=${this.emptySlotContents}>
                    ${_(Z)}
                    <luzmo-tooltip
                      self-managed
                      placement="top"
                      size=${this.size}
                    >
                      Delete
                    </luzmo-tooltip>
                  </div>`}
            </div>` : ""}
        ${((e = this.slotContents) == null ? void 0 : e.length) > 0 ? m`<luzmo-overlay
              trigger="trigger@click"
              .placement=${this.placement}
            >
              <luzmo-slot-menu
                language=${this.language}
                content-language=${this.language}
                slot-type=${(i = this.slotConfiguration) == null ? void 0 : i.type}
                .slotContents=${this._currentSlotContents}
                variant="popup"
                .size=${this.size}
                @slot-contents-changed=${this._onSlotMenuChanges}
              ></luzmo-slot-menu>
            </luzmo-overlay>` : ""}
      </div>
    `;
  }
  render() {
    return this._loadSlotsConfig.render({
      pending: () => m`<p>Loading...</p>`,
      complete: (o) => {
        if (this.slotName && this.itemType && o) {
          const t = o.find(
            (e) => e.name === this.slotName
          );
          t && (this.slotConfiguration = t);
        }
        return this.droppableSlotMarkup();
      },
      error: (o) => m`
        <div>
          Could not load droppable slot: '${this.slotName}' of chart
          '${this.itemType}': ${o}.
        </div>
      `
    });
  }
};
y.styles = Y($e);
$([
  c({ type: String, reflect: !0, attribute: "item-type" })
], y.prototype, "itemType", 2);
$([
  c({ type: String, reflect: !0, attribute: "slot-name" })
], y.prototype, "slotName", 2);
$([
  c({ type: Object })
], y.prototype, "slotConfiguration", 2);
$([
  c({ type: Object })
], y.prototype, "slotContents", 2);
$([
  c({ type: String, reflect: !0 })
], y.prototype, "label", 2);
$([
  c({ type: String, reflect: !0 })
], y.prototype, "language", 2);
$([
  c({ type: String, reflect: !0 })
], y.prototype, "menu", 2);
$([
  c({ type: String, reflect: !0 })
], y.prototype, "placement", 2);
$([
  c({ type: Boolean, reflect: !0, attribute: "hide-delete" })
], y.prototype, "hideDelete", 2);
$([
  c({ type: Boolean, reflect: !0, attribute: "hide-configuration" })
], y.prototype, "hideConfiguration", 2);
$([
  F(".droppable-slot-label")
], y.prototype, "_droppableSlotLabelElement", 2);
y = $([
  Ot()
], y);
customElements.get("luzmo-droppable-slot") || customElements.define("luzmo-droppable-slot", y);
export {
  y as L,
  Gt as a,
  F as e,
  mt as h,
  h as i,
  Mt as r
};
