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
import { b as u, S as b, r as h, x as f, a as z, n as g } from "./sized-mixin-CRExaV2U.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = (o, r, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof r != "object" && Object.defineProperty(o, r, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function v(o, r) {
  return (e, s, t) => {
    const i = (l) => {
      var c;
      return ((c = l.renderRoot) == null ? void 0 : c.querySelector(o)) ?? null;
    };
    if (r) {
      const { get: l, set: c } = typeof s == "object" ? e : t ?? (() => {
        const a = Symbol();
        return { get() {
          return this[a];
        }, set(p) {
          this[a] = p;
        } };
      })();
      return d(e, s, { get() {
        let a = l.call(this);
        return a === void 0 && (a = i(this), (a !== null || this.hasUpdated) && c.call(this, a)), a;
      } });
    }
    return d(e, s, { get() {
      return i(this);
    } });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = (o) => o ?? u, x = (o, r) => {
  if (o)
    return null;
  const e = r.assignedNodes().reduce((s, t) => t.textContent ? s + t.textContent : s, "");
  return e ? e.trim() : null;
}, y = "@media (forced-colors: active){:host{--highcontrast-progress-circle-fill-border-color: Highlight;--highcontrast-progress-circle-fill-border-color-over-background: Highlight}.track{--progress-circle-track-border-style: double}}:host{position:var(--luzmo-progress-circle-position, relative);direction:ltr;display:inline-block;position:relative;transform:translateZ(0)}:host,.track{inline-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));block-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px))}.track{box-sizing:border-box;border-style:var(--highcontrast-progress-circle-track-border-style, var(--luzmo-progress-circle-track-border-style, var(--progress-circle-track-border-style, solid)));border-width:var(--luzmo-progress-circle-thickness, var(--progress-circle-thickness, 3px));border-radius:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-color:var(--luzmo-progress-circle-track-border-color, var(--luzmo-border-color))}.fills{inline-size:100%;block-size:100%;position:absolute;inset-block-start:0;inset-inline-start:0}.fill{box-sizing:border-box;inline-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));block-size:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-style:solid;border-width:var(--luzmo-progress-circle-thickness, var(--progress-circle-thickness, 3px));border-radius:var(--luzmo-progress-circle-size, var(--progress-circle-size, 32px));border-color:var(--highcontrast-progress-circle-fill-border-color, var(--luzmo-progress-circle-fill-border-color, var(--luzmo-primary)))}:host([static-color=black]) .track{border-color:var(--luzmo-progress-circle-track-border-color-over-background, rgba(0, 0, 0, .25))}:host([static-color=black]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background, var(--luzmo-progress-circle-fill-border-color-over-background, rgb(0, 0, 0)))}:host([static-color=white]) .track{border-color:var(--luzmo-progress-circle-track-border-color-over-background, rgba(255, 255, 255, .15))}:host([static-color=white]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background, var(--luzmo-progress-circle-fill-border-color-over-background, rgb(255, 255, 255)))}.fill-mask1,.fill-mask2{inline-size:50%;block-size:100%;transform-origin:100%;position:absolute;overflow:hidden;transform:rotate(180deg)}.fill-sub-mask1,.fill-sub-mask2{inline-size:100%;block-size:100%;transform-origin:100%;overflow:hidden;transform:rotate(-180deg)}.fill-mask2{transform:rotate(0)}:host([indeterminate]) .fills{will-change:transform;transform-origin:center;animation:1s cubic-bezier(.25,.78,.48,.89) infinite luzmo-fills-rotate;transform:translateZ(0)}:host([indeterminate]) .fill-sub-mask1{will-change:transform;animation:1s linear infinite luzmo-fill-mask-1;transform:translateZ(0)}:host([indeterminate]) .fill-sub-mask2{will-change:transform;animation:1s linear infinite luzmo-fill-mask-2;transform:translateZ(0)}.fill-submask-2{animation:1s linear infinite luzmo-fill-mask-2}@keyframes luzmo-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes luzmo-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes luzmo-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host([size=s]){--progress-circle-size: 16px;--progress-circle-thickness: 2px}:host([size=l]){--progress-circle-size: 48px;--progress-circle-thickness: 3px}:host([size=xl]){--progress-circle-size: 64px;--progress-circle-thickness: 4px}:host{block-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));inline-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));--progress-circle-size: inherit;--parent-element-progress-circle-size: inherit;--parent-element-progress-circle-size: var(--progress-circle-size, 32px)}:host([size=s]){--parent-element-progress-circle-size: var(--progress-circle-size, 16px)}:host([size=l]){--parent-element-progress-circle-size: var(--progress-circle-size, 48px)}:host([size=xl]){--parent-element-progress-circle-size: var(--progress-circle-size, 64px)}slot{display:none}.track,.fill{block-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));border-radius:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size));inline-size:var(--luzmo-progress-circle-size, var(--parent-element-progress-circle-size))}:host([indeterminate]) .fills,:host([indeterminate]) .fill-sub-mask1,:host([indeterminate]) .fill-sub-mask2{animation-duration:var(--luzmo-progress-circle-animation-duration, 1s)}";
var w = Object.defineProperty, m = (o, r, e, s) => {
  for (var t = void 0, i = o.length - 1, l; i >= 0; i--)
    (l = o[i]) && (t = l(r, e, t) || t);
  return t && w(r, e, t), t;
};
class n extends b(z, {
  validSizes: ["s", "m", "l", "xl"]
}) {
  constructor() {
    super(...arguments), this.indeterminate = !1, this.label = "", this.progress = 0;
  }
  static get styles() {
    return [h(y)];
  }
  makeRotation(r) {
    return this.indeterminate ? void 0 : `transform: rotate(${r}deg);`;
  }
  render() {
    const r = [
      this.makeRotation(-180 + 3.6 * Math.min(this.progress, 50)),
      this.makeRotation(-180 + 3.6 * Math.max(this.progress - 50, 0))
    ], e = ["mask1", "mask2"];
    return f`
      <slot @slotchange=${this.handleSlotchange}></slot>
      <div class="track"></div>
      <div class="fills">
        ${e.map(
      (s, t) => f`
            <div class="fill-${s}">
              <div
                class="fill-sub-${s}"
                style=${k(r[t])}
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
    const r = x(this.label, this.slotEl);
    r && (this.label = r);
  }
  firstUpdated(r) {
    super.firstUpdated(r), this.hasAttribute("role") || this.setAttribute("role", "progressbar");
  }
  updated(r) {
    super.updated(r), !this.indeterminate && r.has("progress") ? this.setAttribute("aria-valuenow", "" + this.progress) : this.hasAttribute("aria-valuenow") && this.removeAttribute("aria-valuenow"), r.has("label") && (this.label.length > 0 ? this.setAttribute("aria-label", this.label) : r.get("label") === this.getAttribute("aria-label") && this.removeAttribute("aria-label"));
  }
}
m([
  g({ type: Boolean, reflect: !0 })
], n.prototype, "indeterminate");
m([
  g({ type: String })
], n.prototype, "label");
m([
  g({ reflect: !0, attribute: "static-color" })
], n.prototype, "staticColor");
m([
  g({ type: Number })
], n.prototype, "progress");
m([
  v("slot")
], n.prototype, "slotEl");
customElements.get("luzmo-progress-circle") || customElements.define("luzmo-progress-circle", n);
export {
  n as L,
  d as a,
  v as e,
  k as o
};
