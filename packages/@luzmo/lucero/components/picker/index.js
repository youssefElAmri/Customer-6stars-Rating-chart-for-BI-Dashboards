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
import { n as p, T as Lt, x as b, S as Ne, a as Te, r as oe, b as Xe, B as co } from "../sized-mixin-CRExaV2U.js";
import { a as Mt, e as O, o as I } from "../index-BcGqerQE.js";
import { l as Dt, m as Rt, t as _t, a as Ft, d as uo, k as ho, g as kt } from "../platform-Df45Wj_x.js";
import { luzmoIcon as qe, luzmoAngleRight as mo, luzmoCheck as po, luzmoAngleDown as fo, luzmoAlert as vo } from "@luzmo/icons";
const ao = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const i = document.createElement("style");
    i.setAttribute("data-luzmo-vars", ""), i.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(i);
  }
};
ao();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ie(i) {
  return p({ ...i, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function go(i) {
  return (e, t) => {
    const { slot: o, selector: n } = i ?? {}, r = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return Mt(e, t, { get() {
      var a;
      const s = (a = this.renderRoot) == null ? void 0 : a.querySelector(r), l = (s == null ? void 0 : s.assignedElements(i)) ?? [];
      return n === void 0 ? l : l.filter((c) => c.matches(n));
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Bt(i) {
  return (e, t) => {
    const { slot: o } = i ?? {}, n = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return Mt(e, t, { get() {
      var s;
      const r = (s = this.renderRoot) == null ? void 0 : s.querySelector(n);
      return (r == null ? void 0 : r.assignedNodes(i)) ?? [];
    } });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bo = Dt(class extends Rt {
  constructor(i) {
    var e;
    if (super(i), i.type !== _t.ATTRIBUTE || i.name !== "class" || ((e = i.strings) == null ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter((e) => i[e]).join(" ") + " ";
  }
  update(i, [e]) {
    var o, n;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in e) e[r] && !((o = this.nt) != null && o.has(r)) && this.st.add(r);
      return this.render(e);
    }
    const t = i.element.classList;
    for (const r of this.st) r in e || (t.remove(r), this.st.delete(r));
    for (const r in e) {
      const s = !!e[r];
      s === this.st.has(r) || (n = this.nt) != null && n.has(r) || (s ? (t.add(r), this.st.add(r)) : (t.remove(r), this.st.delete(r)));
    }
    return Lt;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = "important", zo = " !" + Nt, Je = Dt(class extends Rt {
  constructor(i) {
    var e;
    if (super(i), i.type !== _t.ATTRIBUTE || i.name !== "style" || ((e = i.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((e, t) => {
      const o = i[t];
      return o == null ? e : e + `${t = t.includes("-") ? t : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`;
    }, "");
  }
  update(i, [e]) {
    const { style: t } = i.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const o of this.ft) e[o] == null && (this.ft.delete(o), o.includes("-") ? t.removeProperty(o) : t[o] = null);
    for (const o in e) {
      const n = e[o];
      if (n != null) {
        this.ft.add(o);
        const r = typeof n == "string" && n.endsWith(zo);
        o.includes("-") || r ? t.setProperty(o, r ? n.slice(0, -11) : n, r ? Nt : "") : t[o] = n;
      }
    }
    return Lt;
  }
}), ko = Symbol(
  "dependency manager loaded"
);
class it {
  constructor(e) {
    this.dependencies = {}, this._loaded = !1, this.host = e;
  }
  /**
   * Whether all of the provided dependencies have been registered.
   * This will be `false` when no dependencies have been listed for management.
   * Changes to this value will trigger `requestUpdate()` on the host.
   */
  get loaded() {
    return this._loaded;
  }
  set loaded(e) {
    e !== this.loaded && (this._loaded = e, this.host.requestUpdate(ko, !this.loaded));
  }
  /**
   * Submit a custom element tag name to be managed as a dependency.
   *
   * @param dependency {string} - the custom element tag to manage
   * @param alreadyLoaded {boolean} - force the managemented custom element to be listed as loaded
   */
  add(e, t) {
    const o = !!t || !!customElements.get(e) || this.dependencies[e];
    o || customElements.whenDefined(e).then(() => {
      this.add(e, !0);
    }), this.dependencies = {
      ...this.dependencies,
      [e]: o
    }, this.loaded = Object.values(this.dependencies).every(Boolean);
  }
}
const yo = "(max-width: 743px) and (hover: none) and (pointer: coarse)";
class wo {
  constructor(e, t) {
    this.key = Symbol("match-media-key"), this.matches = !1, this.host = e, this.host.addController(this), this.media = window.matchMedia(t), this.matches = this.media.matches, this.onChange = this.onChange.bind(this), e.addController(this);
  }
  hostConnected() {
    var e;
    (e = this.media) == null || e.addEventListener("change", this.onChange);
  }
  hostDisconnected() {
    var e;
    (e = this.media) == null || e.removeEventListener("change", this.onChange);
  }
  onChange(e) {
    this.matches !== e.matches && (this.matches = e.matches, this.host.requestUpdate(this.key, !this.matches));
  }
}
class xo {
  /**
   * Creates an instance of PendingStateController.
   * @param host - The host element that this controller is attached to.
   */
  constructor(e) {
    this.cachedAriaLabel = null, this.host = e, this.host.addController(this);
  }
  /**
   * Renders the pending state UI.
   * @returns A TemplateResult representing the pending state UI.
   */
  renderPendingState() {
    const e = this.host.pendingLabel || "Pending";
    return this.host.pending ? b`
          <luzmo-progress-circle
            id="loader"
            size="s"
            indeterminate
            aria-valuetext=${e}
            class="progress-circle"
          ></luzmo-progress-circle>
        ` : b``;
  }
  /**
   * Updates the ARIA label of the host element based on the pending state.
   * Manages Cached Aria Label
   */
  updateAriaLabel() {
    const { pending: e, disabled: t, pendingLabel: o } = this.host, n = this.host.getAttribute("aria-label");
    e && !t && n !== o ? (this.cachedAriaLabel = n, this.host.setAttribute("aria-label", o || "Pending")) : (!e || t) && (this.cachedAriaLabel ? this.host.setAttribute("aria-label", this.cachedAriaLabel) : e || this.host.removeAttribute("aria-label"));
  }
  hostConnected() {
    this.cachedAriaLabel || (this.cachedAriaLabel = this.host.getAttribute("aria-label")), this.updateAriaLabel();
  }
  hostUpdated() {
    this.updateAriaLabel();
  }
}
const Eo = ":host{--menu-item-top-to-action: var(--luzmo-spacing-1);--menu-item-top-to-checkbox: var(--luzmo-spacing-1);--menu-item-label-line-height: var(--luzmo-line-height);--menu-item-label-line-height-cjk: 1.5;--menu-item-label-to-description-spacing: 1px;--menu-item-focus-indicator-width: var(--luzmo-indicator-width);--menu-item-focus-indicator-color: var(--luzmo-indicator-color);--menu-item-label-to-value-area-min-spacing: var(--luzmo-spacing-3);--menu-item-label-content-color-default: var(--luzmo-font-color);--menu-item-label-content-color-hover: var(--luzmo-font-color-hover);--menu-item-label-content-color-down: var(--luzmo-font-color-down);--menu-item-label-content-color-focus: var(--luzmo-font-color-focus);--menu-item-highlight-label-background-color: var(--luzmo-primary);--menu-item-highlight-label-content-color: var(--luzmo-font-color);--menu-item-highlight-label-content-color-hover: var( --luzmo-font-color-hover );--menu-item-highlight-label-content-color-down: var(--luzmo-font-color-down);--menu-item-highlight-label-content-color-focus: var( --luzmo-font-color-focus );--menu-item-label-icon-color-default: var(--luzmo-font-color);--menu-item-label-icon-color-hover: var(--luzmo-font-color-hover);--menu-item-label-icon-color-down: var(--luzmo-font-color-down);--menu-item-label-icon-color-focus: var(--luzmo-font-color-focus);--menu-item-label-content-color-disabled: var(--luzmo-font-color-disabled);--menu-item-label-icon-color-disabled: var(--luzmo-font-color-disabled);--menu-item-description-line-height: var(--luzmo-line-height);--menu-item-description-line-height-cjk: 1.5;--menu-item-description-color-default: var(--luzmo-font-color);--menu-item-description-color-hover: var(--luzmo-font-color-hover);--menu-item-description-color-down: var(--luzmo-font-color-down);--menu-item-description-color-focus: var(--luzmo-font-color-focus);--menu-item-description-color-disabled: var(--luzmo-color-disabled);--menu-section-header-line-height: var(--luzmo-line-height);--menu-section-header-line-height-cjk: 1.5;--menu-section-header-font-weight: bold;--menu-section-header-color: var(--luzmo-font-color-hard);--menu-collapsible-icon-color: var(--luzmo-font-color-hard);--menu-checkmark-icon-color-default: var(--luzmo-primary);--menu-checkmark-icon-color-hover: var(--luzmo-primary-hover);--menu-checkmark-icon-color-down: var(--luzmo-primary-down);--menu-checkmark-icon-color-focus: var(--luzmo-primary-focus);--menu-drillin-icon-color-default: var(--luzmo-font-color);--menu-drillin-icon-color-hover: var(--luzmo-font-color-hover);--menu-drillin-icon-color-down: var(--luzmo-font-color-down);--menu-drillin-icon-color-focus: var(--luzmo-font-color-focus);--menu-item-value-color-default: var(--luzmo-font-color);--menu-item-value-color-hover: var(--luzmo-font-color-hover);--menu-item-value-color-down: var(--luzmo-font-color-down);--menu-item-value-color-focus: var(--luzmo-font-color-focus);--menu-checkmark-display-hidden: none;--menu-checkmark-display-shown: block;--menu-checkmark-display: block;--menu-item-collapsible-no-icon-submenu-item-padding-x-start: 28px;--menu-item-background-color-selected: var(--luzmo-background-color);--menu-item-background-color-default: var(--luzmo-background-color);--menu-item-background-color-hover: var(--luzmo-background-color-hover);--menu-item-background-color-down: var(--luzmo-background-color-down);--menu-item-background-color-key-focus: var(--luzmo-background-color-focus)}:host{--menu-item-min-height: var(--luzmo-component-height);--menu-item-icon-height: var(--luzmo-font-size);--menu-item-icon-width: var(--luzmo-font-size);--menu-item-label-font-size: var(--luzmo-font-size);--menu-item-label-text-to-visual: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-label-inline-edge-to-content: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-top-edge-to-text: var(--luzmo-spacing-1);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-1);--menu-item-text-to-control: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-description-font-size: var(--luzmo-font-size-xs);--menu-section-header-font-size: var(--luzmo-font-size);--menu-section-header-min-width: var(--luzmo-component-height);--menu-item-selectable-edge-to-text-not-selected: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-checkmark-size: var(--luzmo-font-size-xs);--menu-item-angle-size: var(--luzmo-font-size);--menu-item-top-to-checkmark: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-back-icon-margin: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) )}:host([size=s]){--menu-item-min-height: var(--luzmo-component-height-s);--menu-item-icon-height: var(--luzmo-font-size-s);--menu-item-icon-width: var(--luzmo-font-size-s);--menu-item-label-font-size: var(--luzmo-font-size-s);--menu-item-label-text-to-visual: var(--luzmo-spacing-3);--menu-item-label-inline-edge-to-content: var(--luzmo-spacing-3);--menu-item-top-edge-to-text: var(--luzmo-spacing-1);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-1);--menu-item-text-to-control: var(--luzmo-spacing-2);--menu-item-description-font-size: var(--luzmo-font-size-xs);--menu-section-header-font-size: var(--luzmo-font-size-s);--menu-section-header-min-width: var(--luzmo-component-height-s);--menu-item-selectable-edge-to-text-not-selected: var(--luzmo-spacing-3);--menu-item-checkmark-size: var(--luzmo-font-size-xs);--menu-item-angle-size: var(--luzmo-font-size-s);--menu-item-top-to-checkmark: var(--luzmo-spacing-3);--menu-back-icon-margin: var(--luzmo-spacing-3)}:host([size=l]){--menu-item-min-height: var(--luzmo-component-height-l);--menu-item-icon-height: var(--luzmo-font-size-l);--menu-item-icon-width: var(--luzmo-font-size-l);--menu-item-label-font-size: var(--luzmo-font-size-l);--menu-item-label-text-to-visual: var(--luzmo-spacing-4);--menu-item-label-inline-edge-to-content: var(--luzmo-spacing-4);--menu-item-top-edge-to-text: var(--luzmo-spacing-2);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-2);--menu-item-text-to-control: var(--luzmo-spacing-3);--menu-item-description-font-size: var(--luzmo-font-size-s);--menu-section-header-font-size: var(--luzmo-font-size-l);--menu-section-header-min-width: var(--luzmo-component-height-l);--menu-item-selectable-edge-to-text-not-selected: var(--luzmo-spacing-4);--menu-item-checkmark-size: var(--luzmo-font-size-s);--menu-item-angle-size: var(--luzmo-font-size-l);--menu-item-top-to-checkmark: var(--luzmo-spacing-4);--menu-back-icon-margin: var(--luzmo-spacing-4)}:host([size=xl]){--menu-item-min-height: var(--luzmo-component-height-xl);--menu-item-icon-height: var(--font-size-xl);--menu-item-icon-width: var(--font-size-xl);--menu-item-label-font-size: var(--font-size-xl);--menu-item-label-text-to-visual: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-label-inline-edge-to-content: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-top-edge-to-text: var(--luzmo-spacing-2);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-2);--menu-item-text-to-control: var(--luzmo-spacing-4);--menu-item-description-font-size: var(--luzmo-font-size);--menu-section-header-font-size: var(--font-size-xl);--menu-section-header-min-width: var(--luzmo-component-height-xl);--menu-item-selectable-edge-to-text-not-selected: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-checkmark-size: var(--font-size);--menu-item-angle-size: var(--luzmo-font-size-xl);--menu-item-top-to-checkmark: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-back-icon-margin: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) )}:host([variant=highlight]){--menu-item-highlight-label-content-color: var(--luzmo-primary-inverse-color);--menu-item-highlight-label-content-color-hover: var( --luzmo-primary-inverse-color );--menu-item-highlight-label-content-color-down: var( --luzmo-primary-inverse-color );--menu-item-highlight-label-content-color-focus: var( --luzmo-primary-inverse-color )}@media (forced-colors: active){:host{--highcontrast-menu-item-background-color-default: ButtonFace;--highcontrast-menu-item-color-default: ButtonText;--highcontrast-menu-item-background-color-focus: Highlight;--highcontrast-menu-item-color-focus: HighlightText;--highcontrast-menu-checkmark-icon-color-default: Highlight;--highcontrast-menu-item-color-disabled: GrayText;--highcontrast-menu-item-focus-indicator-color: Highlight;--highcontrast-menu-item-selected-background-color: Highlight;--highcontrast-menu-item-selected-color: HighlightText}@supports (color: SelectedItem){:host{--highcontrast-menu-item-selected-background-color: SelectedItem;--highcontrast-menu-item-selected-color: SelectedItemText}}}:host{inline-size:auto;inline-size:var(--luzmo-menu-inline-size, auto);box-sizing:border-box;margin:0;padding:0;list-style-type:none;display:inline-block;overflow:auto}:host:lang(ja),:host:lang(ko),:host:lang(zh){--menu-item-label-line-height: var( --luzmo-menu-item-label-line-height-cjk, var(--menu-item-label-line-height-cjk) );--menu-item-description-line-height: var( --luzmo-menu-item-description-line-height-cjk, var(--menu-item-description-line-height-cjk) );--menu-section-header-line-height: var( --luzmo-menu-section-header-line-height-cjk, var(--menu-section-header-line-height-cjk) )}:host([selects]) ::slotted(luzmo-menu-item){--menu-checkmark-display: var(--menu-checkmark-display-hidden);padding-inline-start:var(--luzmo-menu-item-selectable-edge-to-text-not-selected, var(--menu-item-selectable-edge-to-text-not-selected))}:host([selects]) ::slotted(luzmo-menu-item[selected]){--menu-checkmark-display: var(--menu-checkmark-display-shown);padding-inline-start:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content))}.luzmo-Menu-backIcon{margin-block:var(--luzmo-menu-back-icon-margin-block, var(--menu-back-icon-margin));margin-inline:var(--luzmo-menu-back-icon-margin-inline, var(--menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-icon-color-default, var(--menu-section-header-color)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-icon-color-default, var(--menu-section-header-color)))}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-sectionHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-section-header-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));min-inline-size:var(--luzmo-menu-section-header-min-width, var(--menu-section-header-min-width));padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-back .luzmo-Menu-sectionHeading{padding:0}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--luzmo-indicator-width) solid var(--luzmo-indicator-color);outline-offset:calc((var(--luzmo-indicator-width) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{display:inline-flex;flex-direction:column;width:100%}:host(:focus){outline:none}::slotted(*){flex-shrink:0}";
var Co = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, he = (i, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Io(e, t) : e, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
  return o && n && Co(e, t, n), n;
};
function To(i, e) {
  return !!e && (i === e || i.contains(e));
}
class X extends Ne(Te, {
  noDefaultSize: !0
}) {
  constructor() {
    super(), this.label = "", this.ignore = !1, this.value = "", this.valueSeparator = ",", this.selectedItems = [], this.focusedItemIndex = 0, this.focusInItemIndex = 0, this._selected = [], this.cacheUpdated = Promise.resolve(), this.childItemSet = /* @__PURE__ */ new Set(), this.selectedItemsMap = /* @__PURE__ */ new Map(), this._hasUpdatedSelectedItemIndex = !1, this._willUpdateItems = !1, this.pointerUpTarget = null, this.descendentOverlays = /* @__PURE__ */ new Map(), this.handleSubmenuClosed = (e) => {
      e.stopPropagation(), e.composedPath()[0].dispatchEvent(
        new Event("luzmo-menu-submenu-closed", {
          bubbles: !0,
          composed: !0
        })
      );
    }, this.handleSubmenuOpened = (e) => {
      e.stopPropagation(), e.composedPath()[0].dispatchEvent(
        new Event("luzmo-menu-submenu-opened", {
          bubbles: !0,
          composed: !0
        })
      );
      const o = this.childItems[this.focusedItemIndex];
      o && (o.focused = !1);
      const n = e.composedPath().find((s) => this.childItemSet.has(s));
      if (!n)
        return;
      const r = this.childItems.indexOf(
        n
      );
      this.focusedItemIndex = r, this.focusInItemIndex = r;
    }, this.resolveCacheUpdated = () => {
    }, this.addEventListener(
      "luzmo-menu-item-added-or-updated",
      this.onSelectableItemAddedOrUpdated
    ), this.addEventListener(
      "luzmo-menu-item-added-or-updated",
      this.onFocusableItemAddedOrUpdated,
      {
        capture: !0
      }
    ), this.addEventListener("click", this.handleClick), this.addEventListener("pointerup", this.handlePointerup), this.addEventListener("focusin", this.handleFocusin), this.addEventListener("blur", this.handleBlur), this.addEventListener("luzmo-opened", this.handleSubmenuOpened), this.addEventListener("luzmo-closed", this.handleSubmenuClosed);
  }
  static get styles() {
    return [oe(Eo)];
  }
  get isSubmenu() {
    return this.slot === "submenu";
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    if (e === this.selected)
      return;
    const t = this.selected;
    this._selected = e, this.selectedItems = [], this.selectedItemsMap.clear(), this.childItems.forEach((o) => {
      this === o.menuData.selectionRoot && (o.selected = this.selected.includes(o.value), o.selected && (this.selectedItems.push(o), this.selectedItemsMap.set(o, !0)));
    }), this.requestUpdate("selected", t);
  }
  get childItems() {
    return this.cachedChildItems || (this.cachedChildItems = this.updateCachedMenuItems()), this.cachedChildItems;
  }
  /**
   * Hide this getter from web-component-analyzer until
   * https://github.com/runem/web-component-analyzer/issues/131
   * has been addressed.
   *
   * @private
   */
  get childRole() {
    if (this.resolvedRole === "listbox")
      return "option";
    switch (this.resolvedSelects) {
      case "single":
        return "menuitemradio";
      case "multiple":
        return "menuitemcheckbox";
      default:
        return "menuitem";
    }
  }
  get ownRole() {
    return "menu";
  }
  focus({ preventScroll: e } = {}) {
    if (this.childItems.every((o) => o.disabled))
      return;
    if (this.childItems.some((o) => o.menuData.focusRoot !== this)) {
      super.focus({ preventScroll: e });
      return;
    }
    this.focusMenuItemByOffset(0), super.focus({ preventScroll: e });
    const t = this.selectedItems[0];
    t && !e && t.scrollIntoView({ block: "nearest" });
  }
  handleFocusin(e) {
    var n;
    if (this.childItems.some((r) => r.menuData.focusRoot !== this))
      return;
    const t = this.getRootNode().activeElement, o = ((n = this.childItems[this.focusedItemIndex]) == null ? void 0 : n.menuData.selectionRoot) || this;
    if ((t !== o || e.target !== this) && (o.focus({ preventScroll: !0 }), t && this.focusedItemIndex === 0)) {
      const r = this.childItems.indexOf(t);
      this.focusMenuItemByOffset(Math.max(r, 0));
    }
    this.startListeningToKeyboard();
  }
  startListeningToKeyboard() {
    this.addEventListener("keydown", this.handleKeydown);
  }
  handleBlur(e) {
    To(this, e.relatedTarget) || (this.stopListeningToKeyboard(), this.childItems.forEach((t) => t.focused = !1), this.removeAttribute("aria-activedescendant"));
  }
  stopListeningToKeyboard() {
    this.removeEventListener("keydown", this.handleKeydown);
  }
  selectOrToggleItem(e) {
    const t = this.resolvedSelects, o = new Map(this.selectedItemsMap), n = [...this.selected], r = [...this.selectedItems], s = this.value, l = this.childItems[this.focusedItemIndex];
    if (l && (l.focused = !1, l.active = !1), this.focusedItemIndex = this.childItems.indexOf(e), this.forwardFocusVisibleToItem(e), t === "multiple") {
      this.selectedItemsMap.has(e) ? this.selectedItemsMap.delete(e) : this.selectedItemsMap.set(e, !0);
      const c = [], u = [];
      this.childItemSet.forEach((d) => {
        d.menuData.selectionRoot === this && this.selectedItemsMap.has(d) && (c.push(d.value), u.push(d));
      }), this._selected = c, this.selectedItems = u, this.value = this.selected.join(this.valueSeparator);
    } else
      this.selectedItemsMap.clear(), this.selectedItemsMap.set(e, !0), this.value = e.value, this._selected = [e.value], this.selectedItems = [e];
    if (!this.dispatchEvent(
      new Event("change", {
        cancelable: !0,
        bubbles: !0,
        composed: !0
      })
    )) {
      this._selected = n, this.selectedItems = r, this.selectedItemsMap = o, this.value = s;
      return;
    }
    if (t === "single") {
      for (const c of o.keys())
        c !== e && (c.selected = !1);
      e.selected = !0;
    } else t === "multiple" && (e.selected = !e.selected);
  }
  handleKeydown(e) {
    if (e.defaultPrevented)
      return;
    const t = this.childItems[this.focusedItemIndex];
    t && (t.focused = !0);
    const { key: o } = e;
    if (e.shiftKey && e.target !== this && this.hasAttribute("tabindex")) {
      this.removeAttribute("tabindex");
      const n = (r) => {
        !r.shiftKey && !this.hasAttribute("tabindex") && (this.tabIndex = 0, document.removeEventListener("keyup", n), this.removeEventListener("focusout", n));
      };
      document.addEventListener("keyup", n), this.addEventListener("focusout", n);
    }
    if (o === "Tab") {
      this.prepareToCleanUp();
      return;
    }
    if (o === " " && (t != null && t.hasSubmenu)) {
      t.openOverlay();
      return;
    }
    if (o === " " || o === "Enter") {
      const n = this.childItems[this.focusedItemIndex];
      n && n.menuData.selectionRoot === e.target && (e.preventDefault(), n.click());
      return;
    }
    if (o === "ArrowDown" || o === "ArrowUp") {
      const n = this.childItems[this.focusedItemIndex];
      n && n.menuData.selectionRoot === e.target && this.navigateWithinMenu(e);
      return;
    }
    this.navigateBetweenRelatedMenus(e);
  }
  focusMenuItemByOffset(e) {
    const t = e || 1, o = this.childItems[this.focusedItemIndex];
    o && (o.focused = !1, o.active = o.open), this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + e) % this.childItems.length;
    let n = this.childItems[this.focusedItemIndex], r = this.childItems.length;
    for (; n != null && n.disabled && r; )
      r -= 1, this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + t) % this.childItems.length, n = this.childItems[this.focusedItemIndex];
    return n != null && n.disabled || this.forwardFocusVisibleToItem(n), n;
  }
  updateSelectedItemIndex() {
    let e = 0;
    const t = /* @__PURE__ */ new Map(), o = [], n = [];
    let r = this.childItems.length;
    for (; r; ) {
      r -= 1;
      const s = this.childItems[r];
      s.menuData.selectionRoot === this && ((s.selected || !this._hasUpdatedSelectedItemIndex && this.selected.includes(s.value)) && (e = r, t.set(s, !0), o.unshift(s.value), n.unshift(s)), r !== e && (s.focused = !1));
    }
    n.map((s, l) => {
      l > 0 && (s.focused = !1);
    }), this.selectedItemsMap = t, this._selected = o, this.selectedItems = n, this.value = this.selected.join(this.valueSeparator), this.focusedItemIndex = e, this.focusInItemIndex = e;
  }
  closeDescendentOverlays() {
    this.descendentOverlays.forEach((e) => {
      e.open = !1;
    }), this.descendentOverlays = /* @__PURE__ */ new Map();
  }
  render() {
    return this.renderMenuItemSlot();
  }
  connectedCallback() {
    super.connectedCallback(), !this.hasAttribute("role") && !this.ignore && this.setAttribute("role", this.ownRole), this.updateComplete.then(() => this.updateItemFocus());
  }
  disconnectedCallback() {
    this.cachedChildItems = void 0, this.selectedItems = [], this.selectedItemsMap.clear(), this.childItemSet.clear(), this.descendentOverlays = /* @__PURE__ */ new Map(), super.disconnectedCallback();
  }
  handleDescendentOverlayOpened(e) {
    const t = e.composedPath()[0];
    t.overlayElement && this.descendentOverlays.set(t.overlayElement, t.overlayElement);
  }
  handleDescendentOverlayClosed(e) {
    const t = e.composedPath()[0];
    t.overlayElement && this.descendentOverlays.delete(t.overlayElement);
  }
  navigateWithinMenu(e) {
    const { key: t } = e, o = this.childItems[this.focusedItemIndex], n = t === "ArrowDown" ? 1 : -1, r = this.focusMenuItemByOffset(n);
    r !== o && (e.preventDefault(), e.stopPropagation(), r.scrollIntoView({ block: "nearest" }));
  }
  navigateBetweenRelatedMenus(e) {
    const { key: t } = e;
    e.stopPropagation();
    const o = this.isLTR && t === "ArrowRight" || !this.isLTR && t === "ArrowLeft", n = this.isLTR && t === "ArrowLeft" || !this.isLTR && t === "ArrowRight";
    if (o) {
      const r = this.childItems[this.focusedItemIndex];
      r != null && r.hasSubmenu && r.openOverlay();
    } else n && this.isSubmenu && (this.dispatchEvent(new Event("close", { bubbles: !0 })), this.updateSelectedItemIndex());
  }
  renderMenuItemSlot() {
    return b`
      <slot
        @luzmo-menu-submenu-opened=${this.handleDescendentOverlayOpened}
        @luzmo-menu-submenu-closed=${this.handleDescendentOverlayClosed}
        @slotchange=${this.handleSlotchange}
      ></slot>
    `;
  }
  firstUpdated(e) {
    if (super.firstUpdated(e), !this.hasAttribute("tabindex") && !this.ignore) {
      const o = this.getAttribute("role");
      this.tabIndex = o === "group" ? -1 : 0;
    }
    const t = [
      new Promise((o) => requestAnimationFrame(() => o(!0)))
    ];
    [...this.children].forEach((o) => {
      o.localName === "luzmo-menu-item" && t.push(o.updateComplete);
    }), this.childItemsUpdated = Promise.all(t);
  }
  updated(e) {
    super.updated(e), e.has("selects") && this.hasUpdated && this.selectsChanged(), e.has("label") && (this.label || e.get("label") !== void 0) && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
  }
  selectsChanged() {
    const e = [
      new Promise((t) => requestAnimationFrame(() => t(!0)))
    ];
    this.childItemSet.forEach((t) => {
      e.push(t.triggerUpdate());
    }), this.childItemsUpdated = Promise.all(e);
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.childItemsUpdated, await this.cacheUpdated, e;
  }
  updateCachedMenuItems() {
    if (this.cachedChildItems = [], !this.menuSlot)
      return [];
    const e = this.menuSlot.assignedElements({
      flatten: !0
    });
    for (const [t, o] of e.entries()) {
      if (this.childItemSet.has(o)) {
        this.cachedChildItems.push(o);
        continue;
      }
      const r = o.localName === "slot" ? o.assignedElements({
        flatten: !0
      }) : [...o.querySelectorAll(":scope > *")];
      e.splice(
        t,
        1,
        o,
        ...r
      );
    }
    return this.cachedChildItems;
  }
  /**
   * When a descendant `<luzmo-menu-item>` element is added or updated it will dispatch
   * this event to announce its presence in the DOM. During the CAPTURE phase the first
   * Menu based element that the event encounters will manage the focus state of the
   * dispatching `<luzmo-menu-item>` element.
   * @param event
   */
  onFocusableItemAddedOrUpdated(e) {
    e.menuCascade.set(this, {
      hadFocusRoot: !!e.item.menuData.focusRoot,
      ancestorWithSelects: e.currentAncestorWithSelects
    }), this.selects && (e.currentAncestorWithSelects = this), e.item.menuData.focusRoot = e.item.menuData.focusRoot || this;
  }
  /**
   * When a descendant `<luzmo-menu-item>` element is added or updated it will dispatch
   * this event to announce its presence in the DOM. During the BUBBLE phase the first
   * Menu based element that the event encounters that does not inherit selection will
   * manage the selection state of the dispatching `<luzmo-menu-item>` element.
   * @param event
   */
  onSelectableItemAddedOrUpdated(e) {
    var n, r;
    const t = e.menuCascade.get(this);
    if (!t)
      return;
    if (e.item.menuData.parentMenu = e.item.menuData.parentMenu || this, t.hadFocusRoot && !this.ignore && (this.tabIndex = -1), this.addChildItem(e.item), this.selects === "inherit") {
      this.resolvedSelects = "inherit";
      const s = (n = e.currentAncestorWithSelects) == null ? void 0 : n.ignore;
      this.resolvedRole = s ? "none" : ((r = e.currentAncestorWithSelects) == null ? void 0 : r.getAttribute("role")) || this.getAttribute("role") || void 0;
    } else this.selects ? (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.selects) : (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.resolvedRole === "none" ? "ignore" : "none");
    const o = this.resolvedSelects === "single" || this.resolvedSelects === "multiple";
    e.item.menuData.cleanupSteps.push(
      (s) => this.removeChildItem(s)
    ), (o || !this.selects && this.resolvedSelects !== "ignore") && !e.item.menuData.selectionRoot && (e.item.setRole(this.childRole), e.item.menuData.selectionRoot = e.item.menuData.selectionRoot || this, e.item.selected && (this.selectedItemsMap.set(e.item, !0), this.selectedItems = [...this.selectedItems, e.item], this._selected = [...this.selected, e.item.value], this.value = this.selected.join(this.valueSeparator)));
  }
  addChildItem(e) {
    this.childItemSet.add(e), this.handleItemsChanged();
  }
  async removeChildItem(e) {
    this.childItemSet.delete(e), this.cachedChildItems = void 0, e.focused && (this.handleItemsChanged(), await this.updateComplete, this.focus());
  }
  handleClick(e) {
    if (this.pointerUpTarget === e.target) {
      this.pointerUpTarget = null;
      return;
    }
    this.handlePointerBasedSelection(e);
  }
  handlePointerup(e) {
    this.pointerUpTarget = e.target, this.handlePointerBasedSelection(e);
  }
  handlePointerBasedSelection(e) {
    var n, r;
    if (e instanceof MouseEvent && e.button !== 0)
      return;
    const o = e.composedPath().find((s) => s instanceof Element ? s.getAttribute("role") === this.childRole : !1);
    if (e.defaultPrevented) {
      const s = this.childItems.indexOf(o);
      ((n = o == null ? void 0 : o.menuData) == null ? void 0 : n.focusRoot) === this && s !== -1 && (this.focusedItemIndex = s);
      return;
    }
    if (o != null && o.href && o.href.length > 0) {
      this.dispatchEvent(
        new Event("change", {
          bubbles: !0,
          composed: !0
        })
      );
      return;
    } else if (((r = o == null ? void 0 : o.menuData) == null ? void 0 : r.selectionRoot) === this && this.childItems.length > 0) {
      if (e.preventDefault(), o.hasSubmenu || o.open)
        return;
      this.selectOrToggleItem(o);
    } else
      return;
    this.prepareToCleanUp();
  }
  prepareToCleanUp() {
    document.addEventListener(
      "focusout",
      () => {
        requestAnimationFrame(() => {
          const e = this.childItems[this.focusedItemIndex];
          e && (e.focused = !1, this.updateSelectedItemIndex());
        });
      },
      { once: !0 }
    );
  }
  handleItemsChanged() {
    this.cachedChildItems = void 0, this._willUpdateItems || (this._willUpdateItems = !0, this.cacheUpdated = this.updateCache());
  }
  async updateCache() {
    await (this.hasUpdated ? new Promise((e) => requestAnimationFrame(() => e(!0))) : Promise.all([
      new Promise((e) => requestAnimationFrame(() => e(!0))),
      this.updateComplete
    ])), this.cachedChildItems === void 0 && (this.updateSelectedItemIndex(), this.updateItemFocus()), this._willUpdateItems = !1;
  }
  updateItemFocus() {
    if (this.childItems.length === 0)
      return;
    const e = this.childItems[this.focusInItemIndex];
    this.getRootNode().activeElement === e.menuData.focusRoot && this.forwardFocusVisibleToItem(e);
  }
  forwardFocusVisibleToItem(e) {
    if (!e || e.menuData.focusRoot !== this)
      return;
    this.closeDescendentOverlays();
    const t = this.hasVisibleFocusInTree() || !!this.childItems.some((o) => o.hasVisibleFocusInTree());
    e.focused = t, this.setAttribute("aria-activedescendant", e.id), e.menuData.selectionRoot && e.menuData.selectionRoot !== this && e.menuData.selectionRoot.focus();
  }
  handleSlotchange({
    target: e
  }) {
    const t = e.assignedElements({
      flatten: !0
    });
    this.childItems.length !== t.length && t.forEach((o) => {
      o.triggerUpdate !== void 0 ? o.triggerUpdate() : o.childItems !== void 0 && o.childItems.forEach((n) => {
        n.triggerUpdate();
      });
    });
  }
}
he([
  p({ type: String, reflect: !0 })
], X.prototype, "label", 2);
he([
  p({ type: Boolean, reflect: !0 })
], X.prototype, "ignore", 2);
he([
  p({ type: String, reflect: !0 })
], X.prototype, "selects", 2);
he([
  p({ type: String })
], X.prototype, "value", 2);
he([
  p({ type: String, attribute: "value-separator" })
], X.prototype, "valueSeparator", 2);
he([
  p({ attribute: !1 })
], X.prototype, "selected", 1);
he([
  p({ attribute: !1 })
], X.prototype, "selectedItems", 2);
he([
  O("slot:not([name])")
], X.prototype, "menuSlot", 2);
const So = "@media (forced-colors: active){:host{background-color:CanvasText!important}}:host{block-size:var(--luzmo-divider-thickness, var(--divider-thickness));inline-size:100%;border:none;border-width:var(--luzmo-divider-thickness, var(--divider-thickness));border-radius:var(--luzmo-divider-thickness, var(--divider-thickness));background-color:var(--luzmo-divider-background-color, var(--divider-background-color));overflow:visible}:host([size=s]){--divider-thickness: var( --divider-thickness-small, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-small)}:host{--divider-thickness: var( --divider-thickness-medium, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-medium)}:host([size=l]){--divider-thickness: var( --divider-thickness-large, var(--luzmo-border-width) );--divider-background-color: var(--divider-background-color-large)}:host([static-color=white][size=s]){--divider-background-color: var( --luzmo-divider-background-color-small-static-white, var(--divider-background-color-small-static-white) )}:host([static-color=white]){--divider-background-color: var( --luzmo-divider-background-color-medium-static-white, var(--divider-background-color-medium-static-white) )}:host([static-color=white][size=l]){--divider-background-color: var( --luzmo-divider-background-color-large-static-white, var(--divider-background-color-large-static-white) )}:host([static-color=black][size=s]){--divider-background-color: var( --luzmo-divider-background-color-small-static-black, var(--divider-background-color-small-static-black) )}:host([static-color=black]){--divider-background-color: var( --luzmo-divider-background-color-medium-static-black, var(--divider-background-color-medium-static-black) )}:host([static-color=black][size=l]){--divider-background-color: var( --luzmo-divider-background-color-large-static-black, var(--divider-background-color-large-static-black) )}:host([vertical]){inline-size:var(--luzmo-divider-thickness, var(--divider-thickness, var(--luzmo-border-width)));margin-block:var(--luzmo-divider-vertical-margin);block-size:100%;block-size:var(--luzmo-divider-vertical-height, 100%);align-self:var(--luzmo-divider-vertical-align)}:host{--divider-background-color-small: rgba(213, 213, 213);--divider-background-color-medium: rgba(213, 213, 213);--divider-background-color-large: rgba(213, 213, 213);--divider-background-color-small-static-white: rgba(255, 255, 255, .25);--divider-background-color-medium-static-white: rgba(255, 255, 255, .25);--divider-background-color-large-static-white: rgba(255, 255, 255, .9);--divider-background-color-small-static-black: rgba(0, 0, 0, .25);--divider-background-color-medium-static-black: rgba(0, 0, 0, .25);--divider-background-color-large-static-black: rgba(0, 0, 0, .9)}:host{display:block}hr{border:none;margin:0}", Ao = ":host{--menu-divider-thickness: var( --divider-thickness-medium, var(--luzmo-border-width) );inline-size:auto;margin-block:var(--luzmo-menu-section-divider-margin-block, max(0px, (var(--menu-item-section-divider-height) - var(--menu-divider-thickness)) / 2));margin-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));overflow:visible}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{display:block;flex-shrink:0}";
class Po extends Ne(Te, {
  validSizes: ["s", "m", "l"]
}) {
  static get styles() {
    return [oe(So), oe(Ao)];
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute("role", "separator");
  }
}
function Se() {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(4)),
    (i) => `0${(i & 255).toString(16)}`.slice(-2)
  ).join("");
}
const Oo = ".luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.header{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-section-header-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));min-inline-size:var(--luzmo-menu-section-header-min-width, var(--menu-section-header-min-width));padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-back .header{padding:0}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{margin:0;display:inline-flex;overflow:visible;flex-direction:column}[hidden]{display:none!important}";
var $o = Object.defineProperty, qt = (i, e, t, o) => {
  for (var n = void 0, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = s(e, t, n) || n);
  return n && $o(e, t, n), n;
};
class nt extends X {
  constructor() {
    super(...arguments), this.headerId = "";
  }
  static get styles() {
    return [...super.styles, oe(Oo)];
  }
  render() {
    return b`
      <span class="header" ?hidden=${!this.headerElement}>
        <slot name="header" @slotchange=${this.updateLabel}></slot>
      </span>
      <luzmo-menu ignore>${this.renderMenuItemSlot()}</luzmo-menu>
    `;
  }
  get ownRole() {
    switch (this.selects) {
      case "multiple":
      case "single":
      case "inherit":
        return "group";
      default:
        return "menu";
    }
  }
  updateLabel() {
    const e = this.headerElements.length > 0 ? this.headerElements[0] : void 0;
    if (e !== this.headerElement)
      if (this.headerElement && this.headerElement.id === this.headerId && this.headerElement.removeAttribute("id"), e) {
        this.headerId = this.headerId || `luzmo-menu-group-label-${Se()}`;
        const t = e.id || this.headerId;
        e.id || (e.id = t), this.setAttribute("aria-labelledby", t);
      } else
        this.removeAttribute("aria-labelledby");
    this.headerElement = e;
  }
}
qt([
  Bt({
    slot: "header",
    flatten: !0
  })
], nt.prototype, "headerElements");
qt([
  ie()
], nt.prototype, "headerElement");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt {
  constructor(e, { target: t, config: o, callback: n, skipInitial: r }) {
    this.t = /* @__PURE__ */ new Set(), this.o = !1, this.i = !1, this.h = e, t !== null && this.t.add(t ?? e), this.l = o, this.o = r ?? this.o, this.callback = n, window.MutationObserver ? (this.u = new MutationObserver((s) => {
      this.handleChanges(s), this.h.requestUpdate();
    }), e.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
  }
  handleChanges(e) {
    var t;
    this.value = (t = this.callback) == null ? void 0 : t.call(this, e, this.u);
  }
  hostConnected() {
    for (const e of this.t) this.observe(e);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    const e = this.u.takeRecords();
    (e.length || !this.o && this.i) && this.handleChanges(e), this.i = !1;
  }
  observe(e) {
    this.t.add(e), this.u.observe(e, this.l), this.i = !0, this.h.requestUpdate();
  }
  disconnect() {
    this.u.disconnect();
  }
}
var Lo = Object.defineProperty, ge = (i, e, t, o) => {
  for (var n = void 0, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = s(e, t, n) || n);
  return n && Lo(e, t, n), n;
};
function Mo(i) {
  class e extends i {
    renderAnchor({
      id: o,
      className: n,
      ariaHidden: r,
      labelledby: s,
      tabindex: l,
      // prettier-ignore
      anchorContent: a = b`<slot></slot>`
    }) {
      return b`
            <a
              id=${o}
              class=${I(n)}
              href=${I(this.href)}
              download=${I(this.download)}
              target=${I(this.target)}
              aria-label=${I(this.label)}
              aria-labelledby=${I(s)}
              aria-hidden=${I(r ? "true" : void 0)}
              tabindex=${I(l)}
              referrerpolicy=${I(this.referrerpolicy)}
              rel=${I(this.rel)}
          >${a}</a>
        `;
    }
  }
  return ge([
    p()
  ], e.prototype, "download"), ge([
    p()
  ], e.prototype, "label"), ge([
    p()
  ], e.prototype, "href"), ge([
    p()
  ], e.prototype, "target"), ge([
    p()
  ], e.prototype, "referrerpolicy"), ge([
    p()
  ], e.prototype, "rel"), e;
}
const be = Symbol("slotContentIsPresent");
function Do(i, e) {
  var t, o;
  const n = Array.isArray(e) ? e : [e];
  class r extends (o = i, t = be, o) {
    constructor(...l) {
      super(l), this[t] = /* @__PURE__ */ new Map(), this.managePresenceObservedSlot = () => {
        let a = !1;
        n.forEach((c) => {
          const u = !!this.querySelector(`:scope > ${c}`), d = this[be].get(c) || !1;
          a = a || d !== u, this[be].set(
            c,
            !!this.querySelector(`:scope > ${c}`)
          );
        }), a && this.updateComplete.then(() => {
          this.requestUpdate();
        });
      }, new rt(this, {
        config: {
          childList: !0,
          subtree: !0
        },
        callback: () => {
          this.managePresenceObservedSlot();
        }
      }), this.managePresenceObservedSlot();
    }
    /**
     * @private
     */
    get slotContentIsPresent() {
      if (n.length === 1)
        return this[be].get(n[0]) || !1;
      throw new Error(
        "Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead."
      );
    }
    getSlotContentPresence(l) {
      if (this[be].has(l))
        return this[be].get(l) || !1;
      throw new Error(
        `The provided selector \`${l}\` is not being observed.`
      );
    }
  }
  return r;
}
var Ro = Object.defineProperty, yt = (i, e, t, o) => {
  for (var n = void 0, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = s(e, t, n) || n);
  return n && Ro(e, t, n), n;
};
const Ke = Symbol("assignedNodes");
function _o(i, e, t = []) {
  var o, n;
  const r = (l) => (a) => l.matches(a);
  class s extends (n = i, o = Ke, n) {
    constructor(...a) {
      super(a), this.slotHasContent = !1, new rt(this, {
        config: {
          characterData: !0,
          subtree: !0
        },
        callback: (c) => {
          for (const u of c)
            if (u.type === "characterData") {
              this.manageTextObservedSlot();
              return;
            }
        }
      });
    }
    manageTextObservedSlot() {
      if (!this[Ke])
        return;
      const a = [...this[Ke]].filter(
        (c) => {
          const u = c;
          return u.tagName ? !t.some(r(u)) : u.textContent ? u.textContent.trim() : !1;
        }
      );
      this.slotHasContent = a.length > 0;
    }
    update(a) {
      if (!this.hasUpdated) {
        const { childNodes: c } = this, u = [...c].filter((d) => {
          const m = d;
          return m.tagName ? t.some(r(m)) ? !1 : (
            // Confirm it would exist in a targeted slot if there was one supplied.
            !m.hasAttribute("slot")
          ) : m.textContent ? m.textContent.trim() : !1;
        });
        this.slotHasContent = u.length > 0;
      }
      super.update(a);
    }
    firstUpdated(a) {
      super.firstUpdated(a), this.updateComplete.then(() => {
        this.manageTextObservedSlot();
      });
    }
  }
  return yt([
    p({ type: Boolean, attribute: !1 })
  ], s.prototype, "slotHasContent"), yt([
    Bt({
      slot: e,
      flatten: !0
    })
  ], s.prototype, o), s;
}
class st extends Event {
  constructor(e, t, o) {
    super("slottable-request", {
      bubbles: !1,
      cancelable: !0,
      composed: !1
    }), this.name = e, this.data = t, this.slotName = o === void 0 ? e : `${e}.${o}`;
  }
}
const Ut = Symbol("remove-slottable-request"), Fo = '.checkmark{display:var(--luzmo-menu-checkmark-display, var(--menu-checkmark-display));font-size:var(--luzmo-menu-item-checkmark-size, var(--menu-item-checkmark-size));fill:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-default, var(--menu-checkmark-icon-color-default)));color:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-default, var(--menu-checkmark-icon-color-default)));opacity:1;grid-area:checkmarkArea;align-self:start;margin-block-start:calc(var(--luzmo-menu-item-top-to-checkmark, var(--menu-item-top-to-checkmark)) - var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.angle{font-size:var(--menu-item-angle-size);grid-area:angleArea;align-self:center;margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-icon-color-default, var(--menu-item-label-icon-color-default)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-icon-color-default, var(--menu-item-label-icon-color-default)));grid-area:iconArea;align-self:start}::slotted([slot=icon]){margin-inline-end:var(--luzmo-menu-item-label-text-to-visual, var(--menu-item-label-text-to-visual))}:host{cursor:pointer;box-sizing:border-box;background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)));line-height:var(--luzmo-menu-item-label-line-height, var(--menu-item-label-line-height));min-block-size:var(--luzmo-menu-item-min-height, var(--menu-item-min-height));padding-block-start:var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text));padding-block-end:var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-template:". angleAreaCollapsible . headingIconArea sectionHeadingArea . . ." "selectedArea angleAreaCollapsible checkmarkArea iconArea labelArea valueArea actionsArea angleAreaDrillIn" 1fr ". . . . descriptionArea . . ." ". . . . submenuArea . . ." ". . . . . . . ."/auto auto auto auto 1fr auto auto auto;justify-content:start;margin:0;-webkit-text-decoration:none;text-decoration:none;display:grid;align-items:center;position:relative}.luzmo-Menu-itemCheckbox{--luzmo-checkbox-top-to-text: 0;--luzmo-checkbox-text-to-control: 0;min-block-size:0}.luzmo-Menu-itemCheckbox .luzmo-Checkbox-box{margin-block-start:var(--luzmo-menu-item-top-to-checkbox, var(--menu-item-top-to-checkbox));margin-block-end:0;margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.luzmo-Menu-itemSwitch{min-block-size:0}.luzmo-Menu-itemSwitch .luzmo-Switch-switch{margin-block-start:var(--luzmo-menu-item-top-to-action, var(--menu-item-top-to-action));margin-block-end:0}#label{grid-area:submenuItemLabelArea}::slotted([slot=value]){grid-area:submenuItemValueArea}:host([focused]),:host(:focus){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-key-focus, var(--menu-item-background-color-key-focus)));outline:none}:host([focused])>#label,:host(:focus)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-focus, var(--menu-item-label-content-color-focus)))}:host([focused])>[name=description]::slotted(*),:host(:focus)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-focus, var(--menu-item-description-color-focus)))}:host([focused])>::slotted([slot=value]),:host(:focus)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-focus, var(--menu-item-value-color-focus)))}:host([focused])>.icon:not(.angle,.checkmark),:host(:focus)>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-focus, var(--menu-item-label-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-focus, var(--menu-item-label-icon-color-focus)))}:host([focused])>.angle,:host(:focus)>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host([focused])>.checkmark,:host(:focus)>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-focus, var(--menu-checkmark-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-focus, var(--menu-checkmark-icon-color-focus)))}:host:dir(rtl),:host([dir=rtl]){--menu-item-focus-indicator-direction-scalar: -1}:host(:is(:active,[active])){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-down, var(--menu-item-background-color-down)))}:host(:is(:active,[active]))>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-down, var(--menu-item-label-content-color-down)))}:host(:is(:active,[active]))>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-down, var(--menu-item-description-color-down)))}:host(:is(:active,[active]))>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-down, var(--menu-item-value-color-down)))}:host(:is(:active,[active]))>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-down, var(--menu-item-label-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-down, var(--menu-item-label-icon-color-down)))}:host(:is(:active,[active]))>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host(:is(:active,[active]))>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-down, var(--menu-checkmark-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-down, var(--menu-checkmark-icon-color-down)))}:host([disabled]),:host([aria-disabled=true]){background-color:initial}:host([disabled]) #label,:host([disabled]) ::slotted([slot=value]),:host([aria-disabled=true]) #label,:host([aria-disabled=true]) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-content-color-disabled, var(--menu-item-label-content-color-disabled)))}:host([disabled]) [name=description]::slotted(*),:host([aria-disabled=true]) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-description-color-disabled, var(--menu-item-description-color-disabled)))}:host([disabled]) ::slotted([slot=icon]),:host([aria-disabled=true]) ::slotted([slot=icon]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)));fill:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)))}:host([focused]) .luzmo-Menu-back,:host([focused]){box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}:host .is-selectableMultiple{align-items:start}.is-selectableMultiple .luzmo-Menu-itemCheckbox{grid-area:checkmarkArea}.luzmo-Menu-itemSelection{grid-area:selectedArea}#label{--luzmo-switch-control-label-spacing: 0;--luzmo-switch-spacing-top-to-label: 0;font-size:var(--luzmo-menu-item-label-font-size, var(--menu-item-label-font-size));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-content-color-default, var(--menu-item-label-content-color-default)));-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;grid-area:labelArea}:host([selected]) #label{color:var(--menu-item-highlight-label-content-color)}::slotted([slot=value]){color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-value-color-default, var(--menu-item-value-color-default)));font-size:var(--luzmo-menu-item-label-font-size, var(--menu-item-label-font-size));grid-area:valueArea;justify-self:end}.luzmo-Menu-itemActions,::slotted([slot=value]){align-self:start;margin-inline-start:var(--luzmo-menu-item-label-to-value-area-min-spacing, var(--menu-item-label-to-value-area-min-spacing))}.luzmo-Menu-itemActions{grid-area:actionsArea}[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-description-color-default, var(--menu-item-description-color-default)));font-size:var(--luzmo-menu-item-description-font-size, var(--menu-item-description-font-size));-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;line-height:var(--luzmo-menu-item-description-line-height, var(--menu-item-description-line-height));grid-area:descriptionArea;margin-block-start:var(--luzmo-menu-item-label-to-description-spacing, var(--menu-item-label-to-description-spacing))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.luzmo-Menu-item--collapsible.is-open{padding-block-end:0}.luzmo-Menu-item--collapsible.is-open .angle{transform:rotate(90deg)}:host([focused]) .luzmo-Menu-item--collapsible.is-open,:host(:is(:active,[active])) .luzmo-Menu-item--collapsible.is-open,.luzmo-Menu-item--collapsible.is-open:focus{background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)))}.luzmo-Menu-item--collapsible ::slotted([slot=icon]){grid-area:headingIconArea}.luzmo-Menu-item--collapsible>::slotted([slot=icon]){padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)))}.luzmo-Menu-item--collapsible .angle{grid-area:angleAreaCollapsible}:host([has-submenu]) .angle{fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-drillin-icon-color-default, var(--menu-drillin-icon-color-default)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-drillin-icon-color-default, var(--menu-drillin-icon-color-default)));grid-area:angleAreaDrillIn;margin-inline-start:var(--luzmo-menu-item-label-to-value-area-min-spacing, var(--menu-item-label-to-value-area-min-spacing));margin-inline-end:0}:host([has-submenu]) .is-open{--menu-item-background-color-default: var( --highcontrast-menu-item-selected-background-color, var( --luzmo-menu-item-background-color-hover, var(--menu-item-background-color-hover) ) )}:host([has-submenu]) .is-open .icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)))}:host([has-submenu]) .is-open .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)))}:host([has-submenu]) .is-open .checkmark{fill:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)))}@media (hover: hover){:host(:hover){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-hover, var(--menu-item-background-color-hover)))}:host(:hover)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-hover, var(--menu-item-label-content-color-hover)))}:host([selected]:hover)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-highlight-label-content-color, var(--menu-item-highlight-label-content-color)))}:host(:hover)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-hover, var(--menu-item-description-color-hover)))}:host(:hover)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-hover, var(--menu-item-value-color-hover)))}:host(:hover)>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)))}:host(:hover)>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host(:hover)>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)))}:host([disabled]:hover),:host([aria-disabled=true]:hover){cursor:default;background-color:initial}:host([disabled]:hover) #label,:host([disabled]:hover) ::slotted([slot=value]),:host([aria-disabled=true]:hover) #label,:host([aria-disabled=true]:hover) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-content-color-disabled, var(--menu-item-label-content-color-disabled)))}:host([disabled]:hover) [name=description]::slotted(*),:host([aria-disabled=true]:hover) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-description-color-disabled, var(--menu-item-description-color-disabled)))}:host([disabled]:hover) ::slotted([slot=icon]),:host([aria-disabled=true]:hover) ::slotted([slot=icon]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)));fill:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)))}.luzmo-Menu-item--collapsible.is-open:hover{background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)))}:host([has-submenu]:hover) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)))}}:host([has-submenu][focused]) .angle,:host([has-submenu]:focus) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-focus, var(--menu-drillin-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-focus, var(--menu-drillin-icon-color-focus)))}:host([has-submenu]:is(:active,[active])) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-down, var(--menu-drillin-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-down, var(--menu-drillin-icon-color-down)))}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}:host([focused]) .luzmo-Menu-backButton{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{text-align:initial;font-family:var(--luzmo-menu-item-font-family, var(--luzmo-font-family))}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([disabled]) [name=value]::slotted(*){color:var(--luzmo-menu-item-label-icon-color-disabled, var(--luzmo-disabled-color))}:host([has-submenu][disabled]) .angle{color:var(--luzmo-menu-item-label-icon-color-disabled, var(--luzmo-disabled-color))}#button{position:absolute;top:0;right:0;bottom:0;left:0}.icon-container>svg{vertical-align:top}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}@media (forced-colors: active){:host{forced-color-adjust:none}}::slotted([slot=submenu]){width:max-content;max-width:100%}:host([no-wrap]) #label{display:block}';
var Bo = Object.defineProperty, No = Object.getOwnPropertyDescriptor, H = (i, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? No(e, t) : e, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
  return o && n && Bo(e, t, n), n;
};
const qo = 100, Uo = (i) => b`
  <span class="icon-container icon checkmark ${i.join(" ")}">
    ${qe(po)}
  </span>
`, Ho = (i) => b`
  <span class="icon-container icon angle ${i.join(" ")}">
    ${qe(mo, { className: "indicator" })}
  </span>
`;
class jo extends Event {
  constructor(e) {
    super("luzmo-menu-item-added-or-updated", {
      bubbles: !0,
      composed: !0
    }), this.menuCascade = /* @__PURE__ */ new WeakMap(), this.clear(e);
  }
  get item() {
    return this._item;
  }
  clear(e) {
    this._item = e, this.currentAncestorWithSelects = void 0, e.menuData = {
      cleanupSteps: [],
      focusRoot: void 0,
      selectionRoot: void 0,
      parentMenu: void 0
    }, this.menuCascade = /* @__PURE__ */ new WeakMap();
  }
}
class _ extends Mo(
  _o(Do(Ft, '[slot="icon"]'))
) {
  constructor() {
    super(), this.active = !1, this.dependencyManager = new it(this), this.focused = !1, this.selected = !1, this._value = "", this.hasSubmenu = !1, this.noWrap = !1, this.renderAngleIcon = (e = []) => Ho(e), this.renderCheckIcon = (e = []) => Uo(e), this.open = !1, this.handleSlottableRequest = (e) => {
      var t;
      (t = this.submenuElement) == null || t.dispatchEvent(
        new st(e.name, e.data)
      );
    }, this.proxyFocus = () => {
      this.focus();
    }, this.handleBeforetoggle = (e) => {
      e.newState === "closed" && (this.open = !0, this.overlayElement.manuallyKeepOpen(), this.overlayElement.removeEventListener(
        "beforetoggle",
        this.handleBeforetoggle
      ));
    }, this.recentlyLeftChild = !1, this.willDispatchUpdate = !1, this.menuData = {
      focusRoot: void 0,
      parentMenu: void 0,
      selectionRoot: void 0,
      cleanupSteps: []
    }, this.addEventListener("click", this.handleClickCapture, {
      capture: !0
    }), new rt(this, {
      config: {
        characterData: !0,
        childList: !0,
        subtree: !0
      },
      callback: (e) => {
        e.every(
          (o) => o.target.slot === "submenu"
        ) || this.breakItemChildrenCache();
      }
    });
  }
  static get styles() {
    return [oe(Fo)];
  }
  get value() {
    return this._value || this.itemText;
  }
  set value(e) {
    e !== this._value && (this._value = e || "", this._value ? this.setAttribute("value", this._value) : this.removeAttribute("value"));
  }
  /**
   * @private
   */
  get itemText() {
    return this.itemChildren.content.reduce(
      (e, t) => e + (t.textContent || "").trim(),
      ""
    );
  }
  get focusElement() {
    return this;
  }
  get hasIcon() {
    return this.slotContentIsPresent;
  }
  get itemChildren() {
    if (!this.iconSlot || !this.contentSlot)
      return {
        icon: [],
        content: []
      };
    if (this._itemChildren)
      return this._itemChildren;
    const e = this.iconSlot.assignedElements().map((o) => {
      const n = o.cloneNode(!0);
      return n.removeAttribute("slot"), n.classList.toggle("icon"), n;
    }), t = this.contentSlot.assignedNodes().map((o) => o.cloneNode(!0));
    return this._itemChildren = { icon: e, content: t }, this._itemChildren;
  }
  click() {
    this.disabled || this.shouldProxyClick() || super.click();
  }
  handleClickCapture(e) {
    if (this.disabled)
      return e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), !1;
  }
  shouldProxyClick() {
    let e = !1;
    return this.anchorElement && (this.anchorElement.click(), e = !0), e;
  }
  breakItemChildrenCache() {
    this._itemChildren = void 0, this.triggerUpdate();
  }
  renderSubmenu() {
    const e = b`
      <slot
        name="submenu"
        @slotchange=${this.manageSubmenu}
        @luzmo-menu-item-added-or-updated=${{
      handleEvent: (t) => {
        t.clear(t.item);
      },
      capture: !0
    }}
        @focusin=${(t) => t.stopPropagation()}
      ></slot>
    `;
    return this.hasSubmenu ? (this.dependencyManager.add("luzmo-overlay"), this.dependencyManager.add("luzmo-popover"), Promise.resolve().then(() => me), import("../popover-BBQM9Rvs.js"), b`
      <luzmo-overlay
        .triggerElement=${this}
        ?disabled=${!this.hasSubmenu}
        ?open=${this.hasSubmenu && this.open && this.dependencyManager.loaded}
        .placement=${this.isLTR ? "right-start" : "left-start"}
        .offset=${[-10, -5]}
        .type=${"auto"}
        @close=${(t) => t.stopPropagation()}
        @slottable-request=${this.handleSlottableRequest}
      >
        <luzmo-popover
          @change=${(t) => {
      this.handleSubmenuChange(t), this.open = !1;
    }}
          @pointerenter=${this.handleSubmenuPointerenter}
          @pointerleave=${this.handleSubmenuPointerleave}
          @luzmo-menu-item-added-or-updated=${(t) => t.stopPropagation()}
        >
          ${e}
        </luzmo-popover>
      </luzmo-overlay>
      ${this.renderAngleIcon()}
    `) : e;
  }
  render() {
    return b`
      ${this.selected ? b`
            ${this.renderCheckIcon(
      this.hasIcon ? ["checkmark--withAdjacentIcon"] : []
    )}
          ` : Xe}
      <slot name="icon"></slot>
      <div id="label">
        <slot id="slot"></slot>
      </div>
      <slot name="description"></slot>
      <slot name="value"></slot>
      ${this.href && this.href.length > 0 ? super.renderAnchor({
      id: "button",
      ariaHidden: !0,
      className: "button anchor hidden"
    }) : Xe}
      ${this.renderSubmenu()}
    `;
  }
  manageSubmenu(e) {
    this.submenuElement = e.target.assignedElements({
      flatten: !0
    })[0], this.hasSubmenu = !!this.submenuElement, this.hasSubmenu && this.setAttribute("aria-haspopup", "true");
  }
  handlePointerdown(e) {
    e.target === this && this.hasSubmenu && this.open && (this.addEventListener("focus", this.handleSubmenuFocus, {
      once: !0
    }), this.overlayElement.addEventListener(
      "beforetoggle",
      this.handleBeforetoggle
    ));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute("tabindex", "-1"), this.addEventListener("pointerdown", this.handlePointerdown), this.addEventListener("pointerenter", this.closeOverlaysForRoot), this.hasAttribute("id") || (this.id = `luzmo-menu-item-${Se()}`);
  }
  closeOverlaysForRoot() {
    var e;
    this.open || (e = this.menuData.parentMenu) == null || e.closeDescendentOverlays();
  }
  handleSubmenuClick(e) {
    e.composedPath().includes(this.overlayElement) || this.openOverlay();
  }
  handleSubmenuFocus() {
    requestAnimationFrame(() => {
      this.overlayElement.open = this.open;
    });
  }
  handlePointerenter() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout), delete this.leaveTimeout;
      return;
    }
    this.openOverlay();
  }
  handlePointerleave() {
    this.open && !this.recentlyLeftChild && (this.leaveTimeout = setTimeout(() => {
      delete this.leaveTimeout, this.open = !1;
    }, qo));
  }
  /**
   * When there is a `change` event in the submenu for this item
   * then we "click" this item to cascade the selection up the
   * menu tree allowing all submenus between the initial selection
   * and the root of the tree to have their selection changes and
   * be closed.
   */
  handleSubmenuChange(e) {
    var t;
    e.stopPropagation(), (t = this.menuData.selectionRoot) == null || t.selectOrToggleItem(this);
  }
  handleSubmenuPointerenter() {
    this.recentlyLeftChild = !0;
  }
  handleSubmenuPointerleave() {
    requestAnimationFrame(() => {
      this.recentlyLeftChild = !1;
    });
  }
  handleSubmenuOpen(e) {
    this.focused = !1;
    const t = e.composedPath().find(
      (o) => o !== this.overlayElement && o.localName === "luzmo-overlay"
    );
    this.overlayElement.parentOverlayToForceClose = t;
  }
  cleanup() {
    this.open = !1, this.active = !1;
  }
  openOverlay() {
    !this.hasSubmenu || this.open || this.disabled || (this.open = !0, this.active = !0, this.setAttribute("aria-expanded", "true"), this.addEventListener("luzmo-closed", this.cleanup, {
      once: !0
    }));
  }
  updateAriaSelected() {
    const e = this.getAttribute("role");
    e === "option" ? this.setAttribute("aria-selected", this.selected ? "true" : "false") : (e === "menuitemcheckbox" || e === "menuitemradio") && this.setAttribute("aria-checked", this.selected ? "true" : "false");
  }
  setRole(e) {
    this.setAttribute("role", e), this.updateAriaSelected();
  }
  updated(e) {
    var t, o;
    if (super.updated(e), e.has("label") && (this.label || e.get("label") !== void 0) && this.setAttribute("aria-label", this.label || ""), e.has("active") && (this.active || e.get("active") !== void 0) && this.active && ((t = this.menuData.selectionRoot) == null || t.closeDescendentOverlays()), this.anchorElement && (this.anchorElement.addEventListener("focus", this.proxyFocus), this.anchorElement.tabIndex = -1), e.has("selected") && this.updateAriaSelected(), e.has("hasSubmenu") && (this.hasSubmenu || e.get("hasSubmenu") !== void 0))
      if (this.hasSubmenu) {
        this.abortControllerSubmenu = new AbortController();
        const n = { signal: this.abortControllerSubmenu.signal };
        this.addEventListener("click", this.handleSubmenuClick, n), this.addEventListener("pointerenter", this.handlePointerenter, n), this.addEventListener("pointerleave", this.handlePointerleave, n), this.addEventListener("luzmo-opened", this.handleSubmenuOpen, n);
      } else
        (o = this.abortControllerSubmenu) == null || o.abort();
  }
  connectedCallback() {
    super.connectedCallback(), this.triggerUpdate();
  }
  disconnectedCallback() {
    this.menuData.cleanupSteps.forEach((e) => e(this)), this.menuData = {
      focusRoot: void 0,
      parentMenu: void 0,
      selectionRoot: void 0,
      cleanupSteps: []
    }, super.disconnectedCallback();
  }
  async triggerUpdate() {
    this.willDispatchUpdate || (this.willDispatchUpdate = !0, await new Promise((e) => requestAnimationFrame(e)), this.dispatchUpdate());
  }
  dispatchUpdate() {
    this.isConnected && (this.dispatchEvent(new jo(this)), this.willDispatchUpdate = !1);
  }
}
H([
  p({ type: Boolean, reflect: !0 })
], _.prototype, "active", 2);
H([
  p({ type: Boolean, reflect: !0 })
], _.prototype, "focused", 2);
H([
  p({ type: Boolean, reflect: !0 })
], _.prototype, "selected", 2);
H([
  p({ type: String })
], _.prototype, "value", 1);
H([
  p({ type: Boolean, reflect: !0, attribute: "has-submenu" })
], _.prototype, "hasSubmenu", 2);
H([
  O("slot:not([name])")
], _.prototype, "contentSlot", 2);
H([
  O('slot[name="icon"]')
], _.prototype, "iconSlot", 2);
H([
  p({
    type: Boolean,
    reflect: !0,
    attribute: "no-wrap",
    hasChanged() {
      return !1;
    }
  })
], _.prototype, "noWrap", 2);
H([
  O(".anchor")
], _.prototype, "anchorElement", 2);
H([
  O("luzmo-overlay")
], _.prototype, "overlayElement", 2);
H([
  p({ type: Boolean, reflect: !0 })
], _.prototype, "open", 2);
customElements.get("luzmo-menu") || customElements.define("luzmo-menu", X);
customElements.get("luzmo-menu-divider") || customElements.define("luzmo-menu-divider", Po);
customElements.get("luzmo-menu-group") || customElements.define("luzmo-menu-group", nt);
customElements.get("luzmo-menu-item") || customElements.define("luzmo-menu-item", _);
const Ht = Symbol("element resolver updated");
class Wo {
  constructor(e, { selector: t } = { selector: "" }) {
    this._element = null, this._selector = "", this.mutationCallback = (o) => {
      let n = !1;
      o.forEach((r) => {
        if (!n) {
          if (r.type === "childList") {
            const s = this.element && [...r.removedNodes].includes(this.element), l = !!this.selector && [...r.addedNodes].some(
              (a) => this.elementIsSelected(a)
            );
            n = n || s || l;
          }
          if (r.type === "attributes") {
            const s = r.target === this.element, l = !!this.selector && this.elementIsSelected(r.target);
            n = n || s || l;
          }
        }
      }), n && this.resolveElement();
    }, this.elementIsSelected = (o) => {
      var n;
      return this.selectorIsId ? (o == null ? void 0 : o.id) === this.selectorAsId : (n = o == null ? void 0 : o.matches) == null ? void 0 : n.call(o, this.selector);
    }, this.host = e, this.selector = t, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
  }
  get element() {
    return this._element;
  }
  set element(e) {
    if (e === this.element)
      return;
    const t = this.element;
    this._element = e, this.host.requestUpdate(Ht, t);
  }
  get selector() {
    return this._selector;
  }
  set selector(e) {
    e !== this.selector && (this.releaseElement(), this._selector = e, this.resolveElement());
  }
  get selectorAsId() {
    return this.selector.slice(1);
  }
  get selectorIsId() {
    return !!this.selector && this.selector.startsWith("#");
  }
  hostConnected() {
    this.resolveElement(), this.observer.observe(this.host.getRootNode(), {
      subtree: !0,
      childList: !0,
      attributes: !0
    });
  }
  hostDisconnected() {
    this.releaseElement(), this.observer.disconnect();
  }
  resolveElement() {
    if (!this.selector) {
      this.releaseElement();
      return;
    }
    const e = this.host.getRootNode();
    this.element = this.selectorIsId ? (
      // eslint-disable-next-line unicorn/prefer-query-selector
      e.getElementById(this.selectorAsId)
    ) : e.querySelector(this.selector);
  }
  releaseElement() {
    this.element = null;
  }
}
function Vo(i, e, t = []) {
  for (const [o, n] of e.entries()) {
    const r = i[o], s = r.parentElement || r.getRootNode();
    t[o] && t[o](n), s && s !== r && r.replaceWith(n), delete i[o];
  }
  return e;
}
const Ko = (i, e, {
  position: t,
  prepareCallback: o
} = { position: "beforeend" }) => {
  let { length: n } = i;
  if (n === 0)
    return () => i;
  let r = 1, s = 0;
  (t === "afterbegin" || t === "afterend") && (r = -1, s = n - 1);
  const l = new Array(n), a = new Array(n), c = document.createComment(
    "placeholder for reparented element"
  );
  do {
    const u = i[s];
    o && (a[s] = o(u)), l[s] = c.cloneNode();
    const d = u.parentElement || u.getRootNode();
    d && d !== u && d.replaceChild(l[s], u), e.insertAdjacentElement(t, u), s += r;
  } while (--n > 0);
  return function() {
    return Vo(l, i, a);
  };
}, Yo = 1e3, Go = 1e3;
class Xo {
  constructor(e = {}) {
    this.warmUpDelay = Yo, this.coolDownDelay = Go, this.isWarm = !1, this.timeout = 0, Object.assign(this, e);
  }
  openTimer(e) {
    if (this.cancelCooldownTimer(), !this.component || e !== this.component)
      return this.component && (this.close(this.component), this.cancelCooldownTimer()), this.component = e, this.isWarm ? Promise.resolve(!1) : (this.promise = new Promise((t) => {
        this.resolve = t, this.timeout = window.setTimeout(() => {
          this.resolve && (this.resolve(!1), this.isWarm = !0);
        }, this.warmUpDelay);
      }), this.promise);
    if (this.promise)
      return this.promise;
    throw new Error("Inconsistent state");
  }
  close(e) {
    this.component && this.component === e && (this.resetCooldownTimer(), this.timeout > 0 && (clearTimeout(this.timeout), this.timeout = 0), this.resolve && (this.resolve(!0), delete this.resolve), delete this.promise, delete this.component);
  }
  resetCooldownTimer() {
    this.isWarm && (this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), this.cooldownTimeout = window.setTimeout(() => {
      this.isWarm = !1, delete this.cooldownTimeout;
    }, this.coolDownDelay));
  }
  cancelCooldownTimer() {
    this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), delete this.cooldownTimeout;
  }
}
const Ce = new Xo(), ae = () => {
}, Ue = (i, e, t) => {
  const o = new AbortController(), n = /* @__PURE__ */ new Map(), r = () => {
    o.abort(), t();
  };
  let s, l;
  const a = requestAnimationFrame(() => {
    s = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        r();
      });
    });
  }), c = (d) => {
    d.target === i && (n.set(
      d.propertyName,
      n.get(d.propertyName) - 1
    ), n.get(d.propertyName) || n.delete(d.propertyName), n.size === 0 && r());
  }, u = (d) => {
    d.target === i && (n.has(d.propertyName) || n.set(d.propertyName, 0), n.set(
      d.propertyName,
      n.get(d.propertyName) + 1
    ), cancelAnimationFrame(a), cancelAnimationFrame(s), cancelAnimationFrame(l));
  };
  i.addEventListener("transitionrun", u, {
    signal: o.signal
  }), i.addEventListener("transitionend", c, {
    signal: o.signal
  }), i.addEventListener("transitioncancel", c, {
    signal: o.signal
  }), e();
};
function D() {
  return new Promise((i) => requestAnimationFrame(() => i()));
}
class ke extends Te {
  constructor() {
    super(...arguments), this.dispose = ae, this.offset = 0, this.willPreventClose = !1;
  }
  applyFocus(e, t) {
  }
  /* c8 ignore next 6 */
  get delayed() {
    return !1;
  }
  set delayed(e) {
  }
  /* c8 ignore next 6 */
  get disabled() {
    return !1;
  }
  set disabled(e) {
  }
  get elementResolver() {
    return this._elementResolver;
  }
  set elementResolver(e) {
    this._elementResolver = e;
  }
  /* c8 ignore next 3 */
  ensureOnDOM(e) {
  }
  /* c8 ignore next 5 */
  makeTransition(e) {
    return null;
  }
  manageDelay(e) {
  }
  /* c8 ignore next 3 */
  manageDialogOpen() {
  }
  /* c8 ignore next 3 */
  managePopoverOpen() {
  }
  /* c8 ignore next 3 */
  managePosition() {
  }
  /* c8 ignore next 6 */
  get open() {
    return !1;
  }
  set open(e) {
  }
  get placementController() {
    return this._placementController;
  }
  set placementController(e) {
    this._placementController = e;
  }
  requestSlottable() {
  }
  returnFocus() {
  }
  /* c8 ignore next 6 */
  get state() {
    return "closed";
  }
  set state(e) {
  }
  /* c8 ignore next 3 */
  manuallyKeepOpen() {
  }
  static update() {
    const e = new CustomEvent("luzmo-update-overlays", {
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    document.dispatchEvent(e);
  }
  static async open(e, t, o, n) {
    await Promise.resolve().then(() => me);
    const r = arguments.length === 2, s = o || e, l = new this();
    let a = !1;
    const c = Ko([s], l, {
      position: "beforeend",
      prepareCallback: (m) => {
        const h = m.slot;
        return m.removeAttribute("slot"), () => {
          m.slot = h;
        };
      }
    });
    if (l.dispose = () => {
      l.addEventListener("luzmo-closed", () => {
        a || (c(), a = !0), requestAnimationFrame(() => {
          l.remove();
        });
      }), l.open = !1, l.dispose = ae;
    }, !r && s && n) {
      const m = e, h = t, f = n;
      return ke.applyOptions(l, {
        ...f,
        delayed: f.delayed || s.hasAttribute("delayed"),
        trigger: f.virtualTrigger || m,
        type: h === "modal" ? "modal" : h === "hover" ? "hint" : "auto"
      }), m.after(l), await l.updateComplete, l.open = !0, l.dispose;
    }
    const d = t;
    return l.append(s), ke.applyOptions(l, {
      ...d,
      delayed: d.delayed || s.hasAttribute("delayed")
    }), l.updateComplete.then(() => {
      l.open = !0;
    }), l;
  }
  static applyOptions(e, t) {
    e.delayed = !!t.delayed, e.receivesFocus = t.receivesFocus ?? "auto", e.triggerElement = t.trigger || null, e.type = t.type || "modal", e.offset = t.offset ?? 0, e.placement = t.placement, e.willPreventClose = !!t.notImmediatelyClosable;
  }
}
const jt = [
  "button",
  "[focusable]",
  "[href]",
  "input",
  "label",
  "select",
  "textarea",
  "[tabindex]"
], wt = ':not([tabindex="-1"])', Ae = jt.join(`${wt}, `) + wt, Jo = jt.join(", "), lt = (i) => i.querySelector(
  Ae
), at = (i) => i.assignedElements().find((t) => t.matches(Ae));
class ct extends Event {
  constructor() {
    super("beforetoggle", {
      bubbles: !1,
      composed: !1
    }), this.currentState = "open", this.newState = "closed";
  }
}
class ut extends Event {
  constructor() {
    super("beforetoggle", {
      bubbles: !1,
      composed: !1
    }), this.currentState = "closed", this.newState = "open";
  }
}
class N extends Event {
  constructor(e, t, {
    publish: o,
    interaction: n,
    reason: r
  }) {
    super(e, {
      bubbles: o,
      composed: o
    }), this.overlay = t, this.detail = {
      interaction: n,
      reason: r
    };
  }
}
class Pe {
  constructor(e, t) {
    this.x = 0, this.y = 0, this.x = e, this.y = t;
  }
  updateBoundingClientRect(e, t) {
    this.x = e, this.y = t, ke.update();
  }
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      top: this.y,
      right: this.x,
      y: this.y,
      x: this.x,
      bottom: this.y,
      left: this.x,
      /* c8 ignore next 3 */
      toJSON() {
      }
    };
  }
}
function Qo(i) {
  class e extends i {
    async manageDialogOpen() {
      const o = this.open;
      if (await D(), await this.managePosition(), this.open !== o)
        return;
      const n = await this.dialogMakeTransition(o);
      this.open === o && await this.dialogApplyFocus(o, n);
    }
    dialogMakeTransition(o) {
      let n = null;
      const r = (l, a) => () => {
        if (l.open = o, !o) {
          const u = () => {
            l.removeEventListener("close", u);
          };
          l.addEventListener("close", u);
        }
        if (a > 0)
          return;
        const c = o ? ut : ct;
        this.dispatchEvent(new c()), o && (l.matches(Ae) && (n = l), n = n || lt(l), n || l.querySelectorAll("slot").forEach((d) => {
          n || (n = at(d));
        }), !(!this.isConnected || this.dialogEl.open) && this.dialogEl.showModal());
      }, s = (l, a) => () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (a > 0) {
          l.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !1
            })
          );
          return;
        }
        if (!this.isConnected || o !== this.open)
          return;
        const u = async () => {
          const d = this.triggerElement instanceof Pe;
          this.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: d
            })
          ), l.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !1
            })
          ), this.triggerElement && !d && this.triggerElement.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !0
            })
          ), this.state = o ? "opened" : "closed", this.returnFocus(), await D(), await D(), o === this.open && o === !1 && this.requestSlottable();
        };
        !o && this.dialogEl.open ? (this.dialogEl.addEventListener(
          "close",
          () => {
            u();
          },
          { once: !0 }
        ), this.dialogEl.close()) : u();
      };
      return this.elements.forEach((l, a) => {
        Ue(l, r(l, a), s(l, a));
      }), n;
    }
    dialogApplyFocus(o, n) {
      this.applyFocus(o, n);
    }
  }
  return e;
}
function Zo(i) {
  class e extends i {
    async managePopoverOpen() {
      await this.managePosition();
    }
    async manageDelay(o) {
      if (o === !1 || o !== this.open) {
        Ce.close(this);
        return;
      }
      this.delayed && await Ce.openTimer(this) && (this.open = !o);
    }
    ensureOnDOM(o) {
      document.body.offsetHeight;
    }
    makeTransition(o) {
      if (this.open !== o)
        return null;
      let n = null;
      const r = (l, a) => () => {
        if (o !== this.open)
          return;
        if (l.open = o, a === 0) {
          const u = o ? ut : ct;
          this.dispatchEvent(new u());
        }
        if (o !== !0 || (l.matches(Ae) && (n = l), n = n || lt(l), n))
          return;
        l.querySelectorAll("slot").forEach((u) => {
          n || (n = at(u));
        });
      }, s = (l, a) => async () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (l.dispatchEvent(
          new N(c, this, {
            interaction: this.type
          })
        ), a > 0)
          return;
        const u = this.triggerElement instanceof Pe;
        this.dispatchEvent(
          new N(c, this, {
            interaction: this.type,
            publish: u
          })
        ), this.triggerElement && !u && this.triggerElement.dispatchEvent(
          new N(c, this, {
            interaction: this.type,
            publish: !0
          })
        ), this.state = o ? "opened" : "closed", this.returnFocus(), await D(), await D(), o === this.open && o === !1 && this.requestSlottable();
      };
      return this.elements.forEach((l, a) => {
        Ue(l, r(l, a), s(l, a));
      }), n;
    }
  }
  return e;
}
const ei = CSS.supports("(overlay: auto)");
function xt(i) {
  let e = !1;
  try {
    e = i.matches(":popover-open");
  } catch {
  }
  let t = !1;
  try {
    t = i.matches(":open");
  } catch {
  }
  return e || t;
}
function ti(i) {
  class e extends i {
    async manageDelay(o) {
      if (o === !1 || o !== this.open) {
        Ce.close(this);
        return;
      }
      this.delayed && await Ce.openTimer(this) && (this.open = !o);
    }
    /**
     * A popover should be hidden _after_ it is no longer on top-layer because
     * the position metrics will have changed from when it was originally positioned.
     */
    shouldHidePopover(o) {
      if (o && this.open !== o)
        return;
      const n = async ({
        newState: r
      } = {}) => {
        r !== "open" && await this.placementController.resetOverlayPosition();
      };
      if (!xt(this.dialogEl)) {
        n();
        return;
      }
      this.dialogEl.addEventListener("toggle", n, {
        once: !0
      });
    }
    shouldShowPopover(o) {
      let n = !1;
      try {
        n = this.dialogEl.matches(":popover-open");
      } catch {
      }
      let r = !1;
      try {
        r = this.dialogEl.matches(":open");
      } catch {
      }
      o && this.open === o && !n && !r && this.isConnected && (this.dialogEl.showPopover(), this.managePosition());
    }
    async ensureOnDOM(o) {
      await D(), ei || await this.shouldHidePopover(o), this.shouldShowPopover(o), await D();
    }
    makeTransition(o) {
      if (this.open !== o)
        return null;
      let n = null;
      const r = (l, a) => () => {
        if (l.open = o, a === 0) {
          const u = o ? ut : ct;
          this.dispatchEvent(new u());
        }
        if (!o || (l.matches(Ae) && (n = l), n = n || lt(l), n))
          return;
        l.querySelectorAll("slot").forEach((u) => {
          n || (n = at(u));
        });
      }, s = (l, a) => () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (a > 0) {
          l.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !1
            })
          );
          return;
        }
        const u = async () => {
          if (this.open !== o)
            return;
          await D();
          const m = this.triggerElement instanceof Pe;
          this.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: m
            })
          ), l.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !1
            })
          ), this.triggerElement && !m && this.triggerElement.dispatchEvent(
            new N(c, this, {
              interaction: this.type,
              publish: !0
            })
          ), this.state = o ? "opened" : "closed", this.returnFocus(), await D(), await D(), o === this.open && o === !1 && this.requestSlottable();
        };
        if (this.open !== o)
          return;
        const d = xt(this.dialogEl);
        o !== !0 && d && this.isConnected ? (this.dialogEl.addEventListener(
          "beforetoggle",
          () => {
            u();
          },
          { once: !0 }
        ), this.dialogEl.hidePopover()) : u();
      };
      return this.elements.forEach((l, a) => {
        Ue(l, r(l, a), s(l, a));
      }), n;
    }
  }
  return e;
}
const oi = "showPopover" in document.createElement("div");
class ii {
  constructor() {
    this.root = document.body, this.stack = [], this.handlePointerdown = (e) => {
      this.pointerdownPath = e.composedPath(), this.lastOverlay = this.stack.at(-1);
    }, this.handlePointerup = () => {
      const e = this.pointerdownPath;
      if (this.pointerdownPath = void 0, this.stack.length === 0 || !(e != null && e.length))
        return;
      const t = this.lastOverlay;
      this.lastOverlay = void 0;
      const o = this.stack.length - 1, n = this.stack.filter((r, s) => !e.find(
        (a) => (
          // The Overlay is in the stack
          a === r || // The Overlay trigger is in the stack and the Overlay is a "hint"
          a === (r == null ? void 0 : r.triggerElement) && (r == null ? void 0 : r.type) === "hint" || // The last Overlay in the stack is not the last Overlay at `pointerdown` time and has a
          // `triggerInteraction` of "longpress", meaning it was opened by this poitner interaction
          s === o && r !== t && r.triggerInteraction === "longpress"
        )
      ) && !r.shouldPreventClose() && r.type !== "manual" && // Don't close if this overlay is modal and not on top of the overlay stack.
      !(r.type === "modal" && t !== r));
      n.reverse(), n.forEach((r) => {
        this.closeOverlay(r);
        let s = r.parentOverlayToForceClose;
        for (; s; )
          this.closeOverlay(s), s = s.parentOverlayToForceClose;
      });
    }, this.handleBeforetoggle = (e) => {
      const { target: t, newState: o } = e;
      o !== "open" && this.closeOverlay(t);
    }, this.handleKeydown = (e) => {
      if (e.code !== "Escape" || this.stack.length === 0)
        return;
      const t = this.stack.at(-1);
      if ((t == null ? void 0 : t.type) === "page") {
        e.preventDefault();
        return;
      }
      oi || (t == null ? void 0 : t.type) !== "manual" && t && this.closeOverlay(t);
    }, this.bindEvents();
  }
  get document() {
    return this.root.ownerDocument || document;
  }
  bindEvents() {
    this.document.addEventListener("pointerdown", this.handlePointerdown), this.document.addEventListener("pointerup", this.handlePointerup), this.document.addEventListener("keydown", this.handleKeydown);
  }
  closeOverlay(e) {
    const t = this.stack.indexOf(e);
    t !== -1 && this.stack.splice(t, 1), e.open = !1;
  }
  /**
   * Get an array of Overlays that all share the same trigger element.
   *
   * @param triggerElement {HTMLELement}
   * @returns
   */
  overlaysByTriggerElement(e) {
    return this.stack.filter(
      (t) => t.triggerElement === e
    );
  }
  /**
   * When overlays are added manage the open state of exisiting overlays appropriately:
   * - 'modal': should close other non-'modal' and non-'manual' overlays
   * - 'page': should close other non-'modal' and non-'manual' overlays
   * - 'auto': should close other 'auto' overlays and other 'hint' overlays, but not 'manual' overlays
   * - 'manual': shouldn't close other overlays
   * - 'hint': shouldn't close other overlays and give way to all other overlays on a trigger
   */
  add(e) {
    if (this.stack.includes(e)) {
      const t = this.stack.indexOf(e);
      t !== -1 && (this.stack.splice(t, 1), this.stack.push(e));
      return;
    }
    if (e.type === "auto" || e.type === "modal" || e.type === "page") {
      const t = "luzmo-overlay-query-path", o = new Event(t, {
        composed: !0,
        bubbles: !0
      });
      e.addEventListener(
        t,
        (n) => {
          const r = n.composedPath();
          this.stack.forEach((s) => {
            !r.find((a) => a === s) && s.type !== "manual" && s.type !== "modal" && this.closeOverlay(s);
          });
        },
        { once: !0 }
      ), e.dispatchEvent(o);
    } else if (e.type === "hint") {
      if (this.stack.some(
        (o) => o.type !== "manual" && o.triggerElement && o.triggerElement === e.triggerElement
      )) {
        e.open = !1;
        return;
      }
      this.stack.forEach((o) => {
        o.type === "hint" && this.closeOverlay(o);
      });
    }
    requestAnimationFrame(() => {
      this.stack.push(e), e.addEventListener("beforetoggle", this.handleBeforetoggle, {
        once: !0
      });
    });
  }
  remove(e) {
    this.closeOverlay(e);
  }
}
const Et = new ii(), ni = ':host{display:contents;pointer-events:none;--luzmo-overlay-animation-distance: .5rem}:host(:has(> luzmo-tooltip)){--luzmo-overlay-animation-distance: var( --luzmo-tooltip-animation-distance, 4px )}.dialog{margin:0;border:0;background:none;padding:0;position:fixed;overflow:visible;opacity:1!important;box-sizing:border-box;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);max-width:calc(100vw - 16px);height:auto;inset:auto;top:0;left:0;display:flex;--luzmo-overlay-open: true}.dialog:not([is-visible]){display:none}.dialog:focus{outline:none}dialog:modal{--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}:host(:not([open])) .dialog{--luzmo-overlay-open: false}.dialog::backdrop{display:none}.dialog:before{position:absolute;top:-999em;right:-999em;bottom:-999em;left:-999em;content:"";pointer-events:auto!important}.dialog:not(.not-immediately-closable):before{display:none}.dialog>div{width:100%}::slotted(*){pointer-events:auto;visibility:visible!important}::slotted(luzmo-popover){position:static}.dialog:not([actual-placement])[placement*=top]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:var(--luzmo-overlay-animation-distance)}.dialog:not([actual-placement])[placement*=right]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=bottom]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=left]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:var(--luzmo-overlay-animation-distance)}.dialog[actual-placement*=top]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:var(--luzmo-overlay-animation-distance)}.dialog[actual-placement*=right]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog[actual-placement*=bottom]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog[actual-placement*=left]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:var(--luzmo-overlay-animation-distance)}slot[name=longpress-describedby-descriptor]{display:none}@supports selector(:open){.dialog{opacity:0}.dialog:open{opacity:1;--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}}@supports selector(:popover-open){.dialog{opacity:0}.dialog:popover-open{opacity:1;--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}}@supports (overlay: auto){.dialog{display:none;transition:all var(--luzmo-overlay-animation-duration, .13s),translate 0s,display var(--luzmo-overlay-animation-duration, .13s);transition-behavior:allow-discrete}.dialog:popover-open,.dialog:modal{display:flex}}@supports (not selector(:open)) and (not selector(:popover-open)){:host:not([open]) .dialog{pointer-events:none}.dialog[actual-placement]{z-index:calc(var(--luzmo-overlay-z-index-base, 1000) + var(--luzmo-overlay-open-count))}}', ce = Math.min, M = Math.max, _e = Math.round, Le = Math.floor, Y = (i) => ({
  x: i,
  y: i
}), ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, si = {
  start: "end",
  end: "start"
};
function Qe(i, e, t) {
  return M(i, ce(e, t));
}
function we(i, e) {
  return typeof i == "function" ? i(e) : i;
}
function ue(i) {
  return i.split("-")[0];
}
function xe(i) {
  return i.split("-")[1];
}
function Wt(i) {
  return i === "x" ? "y" : "x";
}
function dt(i) {
  return i === "y" ? "height" : "width";
}
function pe(i) {
  return ["top", "bottom"].includes(ue(i)) ? "y" : "x";
}
function ht(i) {
  return Wt(pe(i));
}
function li(i, e, t) {
  t === void 0 && (t = !1);
  const o = xe(i), n = ht(i), r = dt(n);
  let s = n === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = Fe(s)), [s, Fe(s)];
}
function ai(i) {
  const e = Fe(i);
  return [Ze(i), e, Ze(e)];
}
function Ze(i) {
  return i.replace(/start|end/g, (e) => si[e]);
}
function ci(i, e, t) {
  const o = ["left", "right"], n = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (i) {
    case "top":
    case "bottom":
      return t ? e ? n : o : e ? o : n;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function ui(i, e, t, o) {
  const n = xe(i);
  let r = ci(ue(i), t === "start", o);
  return n && (r = r.map((s) => s + "-" + n), e && (r = r.concat(r.map(Ze)))), r;
}
function Fe(i) {
  return i.replace(/left|right|bottom|top/g, (e) => ri[e]);
}
function di(i) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...i
  };
}
function Vt(i) {
  return typeof i != "number" ? di(i) : {
    top: i,
    right: i,
    bottom: i,
    left: i
  };
}
function Be(i) {
  const {
    x: e,
    y: t,
    width: o,
    height: n
  } = i;
  return {
    width: o,
    height: n,
    top: t,
    left: e,
    right: e + o,
    bottom: t + n,
    x: e,
    y: t
  };
}
function Ct(i, e, t) {
  let {
    reference: o,
    floating: n
  } = i;
  const r = pe(e), s = ht(e), l = dt(s), a = ue(e), c = r === "y", u = o.x + o.width / 2 - n.width / 2, d = o.y + o.height / 2 - n.height / 2, m = o[l] / 2 - n[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = {
        x: u,
        y: o.y - n.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: o.x - n.width,
        y: d
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  switch (xe(e)) {
    case "start":
      h[s] -= m * (t && c ? -1 : 1);
      break;
    case "end":
      h[s] += m * (t && c ? -1 : 1);
      break;
  }
  return h;
}
const hi = async (i, e, t) => {
  const {
    placement: o = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = t, l = r.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: i,
    floating: e,
    strategy: n
  }), {
    x: u,
    y: d
  } = Ct(c, o, a), m = o, h = {}, f = 0;
  for (let v = 0; v < l.length; v++) {
    const {
      name: z,
      fn: g
    } = l[v], {
      x: k,
      y,
      data: C,
      reset: w
    } = await g({
      x: u,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: n,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: i,
        floating: e
      }
    });
    u = k ?? u, d = y ?? d, h = {
      ...h,
      [z]: {
        ...h[z],
        ...C
      }
    }, w && f <= 50 && (f++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await s.getElementRects({
      reference: i,
      floating: e,
      strategy: n
    }) : w.rects), {
      x: u,
      y: d
    } = Ct(c, m, a)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: m,
    strategy: n,
    middlewareData: h
  };
};
async function mt(i, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: o,
    y: n,
    platform: r,
    rects: s,
    elements: l,
    strategy: a
  } = i, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = we(e, i), f = Vt(h), z = l[m ? d === "floating" ? "reference" : "floating" : d], g = Be(await r.getClippingRect({
    element: (t = await (r.isElement == null ? void 0 : r.isElement(z))) == null || t ? z : z.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), k = d === "floating" ? {
    x: o,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), C = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Be(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: k,
    offsetParent: y,
    strategy: a
  }) : k);
  return {
    top: (g.top - w.top + f.top) / C.y,
    bottom: (w.bottom - g.bottom + f.bottom) / C.y,
    left: (g.left - w.left + f.left) / C.x,
    right: (w.right - g.right + f.right) / C.x
  };
}
const mi = (i) => ({
  name: "arrow",
  options: i,
  async fn(e) {
    const {
      x: t,
      y: o,
      placement: n,
      rects: r,
      platform: s,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: u = 0
    } = we(i, e) || {};
    if (c == null)
      return {};
    const d = Vt(u), m = {
      x: t,
      y: o
    }, h = ht(n), f = dt(h), v = await s.getDimensions(c), z = h === "y", g = z ? "top" : "left", k = z ? "bottom" : "right", y = z ? "clientHeight" : "clientWidth", C = r.reference[f] + r.reference[h] - m[h] - r.floating[f], w = m[h] - r.reference[h], F = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = F ? F[y] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(F))) && (T = l.floating[y] || r.floating[f]);
    const Z = C / 2 - w / 2, W = T / 2 - v[f] / 2 - 1, B = ce(d[g], W), ne = ce(d[k], W), V = B, re = T - v[f] - ne, P = T / 2 - v[f] / 2 + Z, ve = Qe(V, P, re), ee = !a.arrow && xe(n) != null && P !== ve && r.reference[f] / 2 - (P < V ? B : ne) - v[f] / 2 < 0, K = ee ? P < V ? P - V : P - re : 0;
    return {
      [h]: m[h] + K,
      data: {
        [h]: ve,
        centerOffset: P - ve - K,
        ...ee && {
          alignmentOffset: K
        }
      },
      reset: ee
    };
  }
}), pi = function(i) {
  return i === void 0 && (i = {}), {
    name: "flip",
    options: i,
    async fn(e) {
      var t, o;
      const {
        placement: n,
        middlewareData: r,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: v = !0,
        ...z
      } = we(i, e);
      if ((t = r.arrow) != null && t.alignmentOffset)
        return {};
      const g = ue(n), k = pe(l), y = ue(l) === l, C = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), w = m || (y || !v ? [Fe(l)] : ai(l)), F = f !== "none";
      !m && F && w.push(...ui(l, v, f, C));
      const T = [l, ...w], Z = await mt(e, z), W = [];
      let B = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (u && W.push(Z[g]), d) {
        const P = li(n, s, C);
        W.push(Z[P[0]], Z[P[1]]);
      }
      if (B = [...B, {
        placement: n,
        overflows: W
      }], !W.every((P) => P <= 0)) {
        var ne, V;
        const P = (((ne = r.flip) == null ? void 0 : ne.index) || 0) + 1, ve = T[P];
        if (ve)
          return {
            data: {
              index: P,
              overflows: B
            },
            reset: {
              placement: ve
            }
          };
        let ee = (V = B.filter((K) => K.overflows[0] <= 0).sort((K, se) => K.overflows[1] - se.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!ee)
          switch (h) {
            case "bestFit": {
              var re;
              const K = (re = B.filter((se) => {
                if (F) {
                  const le = pe(se.placement);
                  return le === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((se) => [se.placement, se.overflows.filter((le) => le > 0).reduce((le, lo) => le + lo, 0)]).sort((se, le) => se[1] - le[1])[0]) == null ? void 0 : re[0];
              K && (ee = K);
              break;
            }
            case "initialPlacement":
              ee = l;
              break;
          }
        if (n !== ee)
          return {
            reset: {
              placement: ee
            }
          };
      }
      return {};
    }
  };
};
async function fi(i, e) {
  const {
    placement: t,
    platform: o,
    elements: n
  } = i, r = await (o.isRTL == null ? void 0 : o.isRTL(n.floating)), s = ue(t), l = xe(t), a = pe(t) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = r && a ? -1 : 1, d = we(e, i);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: f
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof f == "number" && (h = l === "end" ? f * -1 : f), a ? {
    x: h * u,
    y: m * c
  } : {
    x: m * c,
    y: h * u
  };
}
const vi = function(i) {
  return i === void 0 && (i = 0), {
    name: "offset",
    options: i,
    async fn(e) {
      var t, o;
      const {
        x: n,
        y: r,
        placement: s,
        middlewareData: l
      } = e, a = await fi(e, i);
      return s === ((t = l.offset) == null ? void 0 : t.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: n + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, gi = function(i) {
  return i === void 0 && (i = {}), {
    name: "shift",
    options: i,
    async fn(e) {
      const {
        x: t,
        y: o,
        placement: n
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (z) => {
            let {
              x: g,
              y: k
            } = z;
            return {
              x: g,
              y: k
            };
          }
        },
        ...a
      } = we(i, e), c = {
        x: t,
        y: o
      }, u = await mt(e, a), d = pe(ue(n)), m = Wt(d);
      let h = c[m], f = c[d];
      if (r) {
        const z = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", k = h + u[z], y = h - u[g];
        h = Qe(k, h, y);
      }
      if (s) {
        const z = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", k = f + u[z], y = f - u[g];
        f = Qe(k, f, y);
      }
      const v = l.fn({
        ...e,
        [m]: h,
        [d]: f
      });
      return {
        ...v,
        data: {
          x: v.x - t,
          y: v.y - o,
          enabled: {
            [m]: r,
            [d]: s
          }
        }
      };
    }
  };
}, bi = function(i) {
  return i === void 0 && (i = {}), {
    name: "size",
    options: i,
    async fn(e) {
      var t, o;
      const {
        placement: n,
        rects: r,
        platform: s,
        elements: l
      } = e, {
        apply: a = () => {
        },
        ...c
      } = we(i, e), u = await mt(e, c), d = ue(n), m = xe(n), h = pe(n) === "y", {
        width: f,
        height: v
      } = r.floating;
      let z, g;
      d === "top" || d === "bottom" ? (z = d, g = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (g = d, z = m === "end" ? "top" : "bottom");
      const k = v - u.top - u.bottom, y = f - u.left - u.right, C = ce(v - u[z], k), w = ce(f - u[g], y), F = !e.middlewareData.shift;
      let T = C, Z = w;
      if ((t = e.middlewareData.shift) != null && t.enabled.x && (Z = y), (o = e.middlewareData.shift) != null && o.enabled.y && (T = k), F && !m) {
        const B = M(u.left, 0), ne = M(u.right, 0), V = M(u.top, 0), re = M(u.bottom, 0);
        h ? Z = f - 2 * (B !== 0 || ne !== 0 ? B + ne : M(u.left, u.right)) : T = v - 2 * (V !== 0 || re !== 0 ? V + re : M(u.top, u.bottom));
      }
      await a({
        ...e,
        availableWidth: Z,
        availableHeight: T
      });
      const W = await s.getDimensions(l.floating);
      return f !== W.width || v !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function He() {
  return typeof window < "u";
}
function Ee(i) {
  return Kt(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function R(i) {
  var e;
  return (i == null || (e = i.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function J(i) {
  var e;
  return (e = (Kt(i) ? i.ownerDocument : i.document) || window.document) == null ? void 0 : e.documentElement;
}
function Kt(i) {
  return He() ? i instanceof Node || i instanceof R(i).Node : !1;
}
function q(i) {
  return He() ? i instanceof Element || i instanceof R(i).Element : !1;
}
function G(i) {
  return He() ? i instanceof HTMLElement || i instanceof R(i).HTMLElement : !1;
}
function It(i) {
  return !He() || typeof ShadowRoot > "u" ? !1 : i instanceof ShadowRoot || i instanceof R(i).ShadowRoot;
}
function Oe(i) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: o,
    display: n
  } = U(i);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + t) && !["inline", "contents"].includes(n);
}
function zi(i) {
  return ["table", "td", "th"].includes(Ee(i));
}
function je(i) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return i.matches(e);
    } catch {
      return !1;
    }
  });
}
function pt(i) {
  const e = ft(), t = q(i) ? U(i) : i;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function ki(i) {
  let e = de(i);
  for (; G(e) && !ye(e); ) {
    if (pt(e))
      return e;
    if (je(e))
      return null;
    e = de(e);
  }
  return null;
}
function ft() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ye(i) {
  return ["html", "body", "#document"].includes(Ee(i));
}
function U(i) {
  return R(i).getComputedStyle(i);
}
function We(i) {
  return q(i) ? {
    scrollLeft: i.scrollLeft,
    scrollTop: i.scrollTop
  } : {
    scrollLeft: i.scrollX,
    scrollTop: i.scrollY
  };
}
function de(i) {
  if (Ee(i) === "html")
    return i;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    i.assignedSlot || // DOM Element detected.
    i.parentNode || // ShadowRoot detected.
    It(i) && i.host || // Fallback.
    J(i)
  );
  return It(e) ? e.host : e;
}
function Yt(i) {
  const e = de(i);
  return ye(e) ? i.ownerDocument ? i.ownerDocument.body : i.body : G(e) && Oe(e) ? e : Yt(e);
}
function Ie(i, e, t) {
  var o;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const n = Yt(i), r = n === ((o = i.ownerDocument) == null ? void 0 : o.body), s = R(n);
  if (r) {
    const l = et(s);
    return e.concat(s, s.visualViewport || [], Oe(n) ? n : [], l && t ? Ie(l) : []);
  }
  return e.concat(n, Ie(n, [], t));
}
function et(i) {
  return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function Gt(i) {
  const e = U(i);
  let t = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const n = G(i), r = n ? i.offsetWidth : t, s = n ? i.offsetHeight : o, l = _e(t) !== r || _e(o) !== s;
  return l && (t = r, o = s), {
    width: t,
    height: o,
    $: l
  };
}
function vt(i) {
  return q(i) ? i : i.contextElement;
}
function ze(i) {
  const e = vt(i);
  if (!G(e))
    return Y(1);
  const t = e.getBoundingClientRect(), {
    width: o,
    height: n,
    $: r
  } = Gt(e);
  let s = (r ? _e(t.width) : t.width) / o, l = (r ? _e(t.height) : t.height) / n;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const yi = /* @__PURE__ */ Y(0);
function Xt(i) {
  const e = R(i);
  return !ft() || !e.visualViewport ? yi : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function wi(i, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== R(i) ? !1 : e;
}
function fe(i, e, t, o) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const n = i.getBoundingClientRect(), r = vt(i);
  let s = Y(1);
  e && (o ? q(o) && (s = ze(o)) : s = ze(i));
  const l = wi(r, t, o) ? Xt(r) : Y(0);
  let a = (n.left + l.x) / s.x, c = (n.top + l.y) / s.y, u = n.width / s.x, d = n.height / s.y;
  if (r) {
    const m = R(r), h = o && q(o) ? R(o) : o;
    let f = m, v = et(f);
    for (; v && o && h !== f; ) {
      const z = ze(v), g = v.getBoundingClientRect(), k = U(v), y = g.left + (v.clientLeft + parseFloat(k.paddingLeft)) * z.x, C = g.top + (v.clientTop + parseFloat(k.paddingTop)) * z.y;
      a *= z.x, c *= z.y, u *= z.x, d *= z.y, a += y, c += C, f = R(v), v = et(f);
    }
  }
  return Be({
    width: u,
    height: d,
    x: a,
    y: c
  });
}
function gt(i, e) {
  const t = We(i).scrollLeft;
  return e ? e.left + t : fe(J(i)).left + t;
}
function Jt(i, e, t) {
  t === void 0 && (t = !1);
  const o = i.getBoundingClientRect(), n = o.left + e.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    gt(i, o)
  )), r = o.top + e.scrollTop;
  return {
    x: n,
    y: r
  };
}
function xi(i) {
  let {
    elements: e,
    rect: t,
    offsetParent: o,
    strategy: n
  } = i;
  const r = n === "fixed", s = J(o), l = e ? je(e.floating) : !1;
  if (o === s || l && r)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Y(1);
  const u = Y(0), d = G(o);
  if ((d || !d && !r) && ((Ee(o) !== "body" || Oe(s)) && (a = We(o)), G(o))) {
    const h = fe(o);
    c = ze(o), u.x = h.x + o.clientLeft, u.y = h.y + o.clientTop;
  }
  const m = s && !d && !r ? Jt(s, a, !0) : Y(0);
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - a.scrollLeft * c.x + u.x + m.x,
    y: t.y * c.y - a.scrollTop * c.y + u.y + m.y
  };
}
function Ei(i) {
  return Array.from(i.getClientRects());
}
function Ci(i) {
  const e = J(i), t = We(i), o = i.ownerDocument.body, n = M(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = M(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -t.scrollLeft + gt(i);
  const l = -t.scrollTop;
  return U(o).direction === "rtl" && (s += M(e.clientWidth, o.clientWidth) - n), {
    width: n,
    height: r,
    x: s,
    y: l
  };
}
function Ii(i, e) {
  const t = R(i), o = J(i), n = t.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
  if (n) {
    r = n.width, s = n.height;
    const c = ft();
    (!c || c && e === "fixed") && (l = n.offsetLeft, a = n.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: l,
    y: a
  };
}
function Ti(i, e) {
  const t = fe(i, !0, e === "fixed"), o = t.top + i.clientTop, n = t.left + i.clientLeft, r = G(i) ? ze(i) : Y(1), s = i.clientWidth * r.x, l = i.clientHeight * r.y, a = n * r.x, c = o * r.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Tt(i, e, t) {
  let o;
  if (e === "viewport")
    o = Ii(i, t);
  else if (e === "document")
    o = Ci(J(i));
  else if (q(e))
    o = Ti(e, t);
  else {
    const n = Xt(i);
    o = {
      x: e.x - n.x,
      y: e.y - n.y,
      width: e.width,
      height: e.height
    };
  }
  return Be(o);
}
function Qt(i, e) {
  const t = de(i);
  return t === e || !q(t) || ye(t) ? !1 : U(t).position === "fixed" || Qt(t, e);
}
function Si(i, e) {
  const t = e.get(i);
  if (t)
    return t;
  let o = Ie(i, [], !1).filter((l) => q(l) && Ee(l) !== "body"), n = null;
  const r = U(i).position === "fixed";
  let s = r ? de(i) : i;
  for (; q(s) && !ye(s); ) {
    const l = U(s), a = pt(s);
    !a && l.position === "fixed" && (n = null), (r ? !a && !n : !a && l.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || Oe(s) && !a && Qt(i, s)) ? o = o.filter((u) => u !== s) : n = l, s = de(s);
  }
  return e.set(i, o), o;
}
function Ai(i) {
  let {
    element: e,
    boundary: t,
    rootBoundary: o,
    strategy: n
  } = i;
  const s = [...t === "clippingAncestors" ? je(e) ? [] : Si(e, this._c) : [].concat(t), o], l = s[0], a = s.reduce((c, u) => {
    const d = Tt(e, u, n);
    return c.top = M(d.top, c.top), c.right = ce(d.right, c.right), c.bottom = ce(d.bottom, c.bottom), c.left = M(d.left, c.left), c;
  }, Tt(e, l, n));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Pi(i) {
  const {
    width: e,
    height: t
  } = Gt(i);
  return {
    width: e,
    height: t
  };
}
function Oi(i, e, t) {
  const o = G(e), n = J(e), r = t === "fixed", s = fe(i, !0, r, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Y(0);
  if (o || !o && !r)
    if ((Ee(e) !== "body" || Oe(n)) && (l = We(e)), o) {
      const m = fe(e, !0, r, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else n && (a.x = gt(n));
  const c = n && !o && !r ? Jt(n, l) : Y(0), u = s.left + l.scrollLeft - a.x - c.x, d = s.top + l.scrollTop - a.y - c.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ye(i) {
  return U(i).position === "static";
}
function St(i, e) {
  if (!G(i) || U(i).position === "fixed")
    return null;
  if (e)
    return e(i);
  let t = i.offsetParent;
  return J(i) === t && (t = t.ownerDocument.body), t;
}
function Zt(i, e) {
  const t = R(i);
  if (je(i))
    return t;
  if (!G(i)) {
    let n = de(i);
    for (; n && !ye(n); ) {
      if (q(n) && !Ye(n))
        return n;
      n = de(n);
    }
    return t;
  }
  let o = St(i, e);
  for (; o && zi(o) && Ye(o); )
    o = St(o, e);
  return o && ye(o) && Ye(o) && !pt(o) ? t : o || ki(i) || t;
}
const $i = async function(i) {
  const e = this.getOffsetParent || Zt, t = this.getDimensions, o = await t(i.floating);
  return {
    reference: Oi(i.reference, await e(i.floating), i.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Li(i) {
  return U(i).direction === "rtl";
}
const Mi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xi,
  getDocumentElement: J,
  getClippingRect: Ai,
  getOffsetParent: Zt,
  getElementRects: $i,
  getClientRects: Ei,
  getDimensions: Pi,
  getScale: ze,
  isElement: q,
  isRTL: Li
};
function eo(i, e) {
  return i.x === e.x && i.y === e.y && i.width === e.width && i.height === e.height;
}
function Di(i, e) {
  let t = null, o;
  const n = J(i);
  function r() {
    var l;
    clearTimeout(o), (l = t) == null || l.disconnect(), t = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), r();
    const c = i.getBoundingClientRect(), {
      left: u,
      top: d,
      width: m,
      height: h
    } = c;
    if (l || e(), !m || !h)
      return;
    const f = Le(d), v = Le(n.clientWidth - (u + m)), z = Le(n.clientHeight - (d + h)), g = Le(u), y = {
      rootMargin: -f + "px " + -v + "px " + -z + "px " + -g + "px",
      threshold: M(0, ce(1, a)) || 1
    };
    let C = !0;
    function w(F) {
      const T = F[0].intersectionRatio;
      if (T !== a) {
        if (!C)
          return s();
        T ? s(!1, T) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !eo(c, i.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, y);
    }
    t.observe(i);
  }
  return s(!0), r;
}
function At(i, e, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = vt(i), u = n || r ? [...c ? Ie(c) : [], ...Ie(e)] : [];
  u.forEach((g) => {
    n && g.addEventListener("scroll", t, {
      passive: !0
    }), r && g.addEventListener("resize", t);
  });
  const d = c && l ? Di(c, t) : null;
  let m = -1, h = null;
  s && (h = new ResizeObserver((g) => {
    let [k] = g;
    k && k.target === c && h && (h.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(e);
    })), t();
  }), c && !a && h.observe(c), h.observe(e));
  let f, v = a ? fe(i) : null;
  a && z();
  function z() {
    const g = fe(i);
    v && !eo(v, g) && t(), v = g, f = requestAnimationFrame(z);
  }
  return t(), () => {
    var g;
    u.forEach((k) => {
      n && k.removeEventListener("scroll", t), r && k.removeEventListener("resize", t);
    }), d == null || d(), (g = h) == null || g.disconnect(), h = null, a && cancelAnimationFrame(f);
  };
}
const Ri = vi, _i = gi, Pt = pi, Fi = bi, Bi = mi, Ni = (i, e, t) => {
  const o = /* @__PURE__ */ new Map(), n = {
    platform: Mi,
    ...t
  }, r = {
    ...n.platform,
    _c: o
  };
  return hi(i, e, {
    ...n,
    platform: r
  });
};
function Me(i) {
  if (i === void 0)
    return 0;
  const e = window.devicePixelRatio || 1;
  return Math.round(i * e) / e;
}
const De = 8, qi = 100, Ui = (i) => ({
  left: ["right", "bottom", "top"],
  "left-start": ["right-start", "bottom", "top"],
  "left-end": ["right-end", "bottom", "top"],
  right: ["left", "bottom", "top"],
  "right-start": ["left-start", "bottom", "top"],
  "right-end": ["left-end", "bottom", "top"],
  top: ["bottom", "left", "right"],
  "top-start": ["bottom-start", "left", "right"],
  "top-end": ["bottom-end", "left", "right"],
  bottom: ["top", "left", "right"],
  "bottom-start": ["top-start", "left", "right"],
  "bottom-end": ["top-end", "left", "right"]
})[i] ?? [i];
class to {
  /**
   * Creates an instance of the PlacementController.
   *
   * @param host - The host element that uses this controller.
   */
  constructor(e) {
    this.originalPlacements = /* @__PURE__ */ new WeakMap(), this.allowPlacementUpdate = !1, this.closeForAncestorUpdate = () => {
      !this.allowPlacementUpdate && this.options.type !== "modal" && this.cleanup && this.target.dispatchEvent(new Event("close", { bubbles: !0 })), this.allowPlacementUpdate = !1;
    }, this.updatePlacement = () => {
      this.computePlacement();
    }, this.resetOverlayPosition = () => {
      !this.target || !this.options || (this.clearOverlayPosition(), this.host.offsetHeight, this.computePlacement());
    }, this.host = e, this.host.addController(this);
  }
  /**
   * Places the overlay relative to the target element.
   *
   * This method sets up the necessary configurations and event listeners to manage the
   * positioning and constraints of the overlay element.
   *
   * @param [target=this.target] - The target element for the overlay.
   * @param [options=this.options] - The options for configuring the overlay placement.
   * @returns A promise that resolves when the overlay has been placed.
   */
  placeOverlay(e = this.target, t = this.options) {
    if (this.target = e, this.options = t, !e || !t)
      return;
    const o = At(
      t.trigger,
      e,
      this.closeForAncestorUpdate,
      {
        ancestorResize: !1,
        elementResize: !1,
        layoutShift: !1
      }
    ), n = At(
      t.trigger,
      e,
      this.updatePlacement,
      {
        ancestorScroll: !1
      }
    );
    this.cleanup = () => {
      var r;
      (r = this.host.elements) == null || r.forEach((s) => {
        s.addEventListener(
          "luzmo-closed",
          () => {
            const l = this.originalPlacements.get(s);
            l && s.setAttribute("placement", l), this.originalPlacements.delete(s);
          },
          { once: !0 }
        );
      }), o(), n();
    };
  }
  /**
   * Computes the placement of the overlay relative to the target element.
   *
   * This method calculates the necessary positioning and constraints for the overlay element
   * using various middleware functions. It updates the overlay's style and attributes based
   * on the computed position.
   *
   * @returns A promise that resolves when the placement has been computed.
   */
  async computePlacement() {
    var m, h;
    const { options: e, target: t } = this;
    await (document.fonts ? document.fonts.ready : Promise.resolve());
    const o = e.trigger instanceof HTMLElement ? Pt() : Pt({
      padding: De,
      fallbackPlacements: Ui(e.placement)
    }), [n = 0, r = 0] = Array.isArray(e == null ? void 0 : e.offset) ? e.offset : [e.offset, 0], s = (m = this.host.elements.find(
      (f) => f.tipElement
    )) == null ? void 0 : m.tipElement, l = [
      Ri({
        mainAxis: n,
        crossAxis: r
      }),
      _i({ padding: De }),
      o,
      Fi({
        padding: De,
        apply: ({ availableWidth: f, availableHeight: v, rects: { floating: z } }) => {
          const g = Math.max(
            qi,
            Math.floor(v)
          ), k = z.height;
          this.initialHeight = this.isConstrained && this.initialHeight || k, this.isConstrained = k < this.initialHeight || g <= k;
          const y = this.isConstrained ? `${g}px` : "";
          Object.assign(t.style, {
            maxWidth: `${Math.floor(f)}px`,
            maxHeight: y
          });
        }
      }),
      ...s ? [
        Bi({
          element: s,
          padding: e.tipPadding || De
        })
      ] : []
    ], { x: a, y: c, placement: u, middlewareData: d } = await Ni(
      e.trigger,
      t,
      {
        placement: e.placement,
        middleware: l,
        strategy: "fixed"
      }
    );
    if (Object.assign(t.style, {
      top: "0px",
      left: "0px",
      translate: `${Me(a)}px ${Me(c)}px`
    }), t.setAttribute("actual-placement", u), (h = this.host.elements) == null || h.forEach((f) => {
      this.originalPlacements.has(f) || this.originalPlacements.set(
        f,
        f.getAttribute("placement")
      ), f.setAttribute("placement", u);
    }), s && d.arrow) {
      const { x: f, y: v } = d.arrow;
      Object.assign(s.style, {
        top: u.startsWith("right") || u.startsWith("left") ? "0px" : "",
        left: u.startsWith("bottom") || u.startsWith("top") ? "0px" : "",
        translate: `${Me(f)}px ${Me(v)}px`
      });
    }
  }
  /**
   * Clears the overlay's position styles.
   *
   * This method removes the max-height and max-width styles from the target element,
   * and resets the initial height and constrained state of the overlay.
   */
  clearOverlayPosition() {
    this.target && (this.target.style.removeProperty("max-height"), this.target.style.removeProperty("max-width"), this.initialHeight = void 0, this.isConstrained = !1);
  }
  /**
   * Lifecycle method called when the host element is connected to the DOM.
   *
   * This method sets up an event listener to reset the overlay's position when the 'luzmo-update-overlays' event is dispatched.
   */
  hostConnected() {
    document.addEventListener(
      "luzmo-update-overlays",
      this.resetOverlayPosition
    );
  }
  /**
   * Lifecycle method called when the host element is updated.
   *
   * This method cleans up resources if the overlay is not open.
   */
  hostUpdated() {
    var e;
    this.host.open || ((e = this.cleanup) == null || e.call(this), this.cleanup = void 0);
  }
  /**
   * Lifecycle method called when the host element is disconnected from the DOM.
   *
   * This method removes the event listener and cleans up resources.
   */
  hostDisconnected() {
    var e;
    (e = this.cleanup) == null || e.call(this), this.cleanup = void 0, document.removeEventListener(
      "luzmo-update-overlays",
      this.resetOverlayPosition
    );
  }
}
var $e = /* @__PURE__ */ ((i) => (i[i.click = 0] = "click", i[i.hover = 1] = "hover", i[i.longpress = 2] = "longpress", i))($e || {});
let Ve = class {
  constructor(e, { overlay: t, isPersistent: o, handleOverlayReady: n }) {
    this.target = e, this.isLazilyOpen = !1, this.isPersistent = !1, this.isPersistent = !!o, this.handleOverlayReady = n, this.isPersistent && this.init(), this.overlay = t;
  }
  get activelyOpening() {
    return !1;
  }
  get open() {
    var e;
    return ((e = this.overlay) == null ? void 0 : e.open) ?? this.isLazilyOpen;
  }
  /**
   * Set `open` against the associated Overlay lazily.
   */
  set open(e) {
    if (e !== this.open) {
      if (this.isLazilyOpen = e, this.overlay) {
        this.overlay.open = e;
        return;
      }
      e && (customElements.whenDefined("luzmo-overlay").then(async () => {
        const { LuzmoOverlay: t } = await Promise.resolve().then(() => me);
        this.overlay = new t(), this.overlay.open = !0;
      }), Promise.resolve().then(() => me));
    }
  }
  get overlay() {
    return this._overlay;
  }
  set overlay(e) {
    var t;
    e && this.overlay !== e && (this.overlay && this.overlay.removeController(this), this._overlay = e, this.overlay.addController(this), this.initOverlay(), this.prepareDescription(this.target), (t = this.handleOverlayReady) == null || t.call(this, this.overlay));
  }
  prepareDescription(e) {
  }
  releaseDescription() {
  }
  shouldCompleteOpen() {
  }
  /* c8 ignore next 3 */
  init() {
  }
  /* c8 ignore next 3 */
  initOverlay() {
  }
  abort() {
    var e;
    this.releaseDescription(), (e = this.abortController) == null || e.abort();
  }
  hostConnected() {
    this.init();
  }
  hostDisconnected() {
    this.isPersistent || this.abort();
  }
};
class oo extends Ve {
  constructor() {
    super(...arguments), this.type = $e.click, this.preventNextToggle = !1;
  }
  handleClick() {
    this.preventNextToggle || (this.open = !this.open), this.preventNextToggle = !1;
  }
  handlePointerdown() {
    this.preventNextToggle = this.open;
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener("click", () => this.handleClick(), {
      signal: e
    }), this.target.addEventListener(
      "pointerdown",
      () => this.handlePointerdown(),
      { signal: e }
    );
  }
}
function Hi(i, e, t) {
  const o = i.getAttribute(e);
  let n = o ? o.split(/\s+/) : [];
  n = n.filter((r) => !t.includes(r)), n.length > 0 ? i.setAttribute(e, n.join(" ")) : i.removeAttribute(e);
}
function tt(i, e, t) {
  const o = Array.isArray(t) ? t : [t], n = i.getAttribute(e), r = n ? n.split(/\s+/) : [];
  return o.every((l) => r.includes(l)) ? () => {
  } : (r.push(...o), i.setAttribute(e, r.join(" ")), () => Hi(i, e, o));
}
const ji = 300;
class io extends Ve {
  constructor() {
    super(...arguments), this.type = $e.hover, this.elementIds = [], this.focusedin = !1, this.pointerentered = !1;
  }
  handleTargetFocusin() {
    this.target.matches(":focus-visible") && (this.open = !0, this.focusedin = !0);
  }
  handleTargetFocusout() {
    this.focusedin = !1, !this.pointerentered && (this.open = !1);
  }
  handleTargetPointerenter() {
    var e;
    this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0), !((e = this.overlay) != null && e.disabled) && (this.open = !0, this.pointerentered = !0);
  }
  handleTargetPointerleave() {
    this.doPointerleave();
  }
  // set a timeout once the pointer enters and the overlay is shown
  // give the user time to enter the overlay
  handleHostPointerenter() {
    this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0);
  }
  handleHostPointerleave() {
    this.doPointerleave();
  }
  prepareDescription() {
    if (this.overlay.elements.length === 0)
      return;
    const e = this.target.getRootNode(), t = this.overlay.elements[0].getRootNode(), o = this.overlay.getRootNode();
    e === o ? this.prepareOverlayRelativeDescription() : e === t && this.prepareContentRelativeDescription();
  }
  prepareOverlayRelativeDescription() {
    const e = tt(
      this.target,
      "aria-describedby",
      [this.overlay.id]
    );
    this.releaseDescription = () => {
      e(), this.releaseDescription = ae;
    };
  }
  prepareContentRelativeDescription() {
    const e = [], t = this.overlay.elements.map((n) => (e.push(n.id), n.id || (n.id = `${this.overlay.tagName.toLowerCase()}-helper-${Se()}`), n.id));
    this.elementIds = e;
    const o = tt(
      this.target,
      "aria-describedby",
      t
    );
    this.releaseDescription = () => {
      o(), this.overlay.elements.map((n, r) => {
        n.id = this.elementIds[r];
      }), this.releaseDescription = ae;
    };
  }
  doPointerleave() {
    this.pointerentered = !1;
    const e = this.target;
    this.focusedin && e.matches(":focus-visible") || (this.hoverTimeout = setTimeout(() => {
      this.open = !1;
    }, ji));
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener("focusin", () => this.handleTargetFocusin(), {
      signal: e
    }), this.target.addEventListener(
      "focusout",
      () => this.handleTargetFocusout(),
      { signal: e }
    ), this.target.addEventListener(
      "pointerenter",
      () => this.handleTargetPointerenter(),
      { signal: e }
    ), this.target.addEventListener(
      "pointerleave",
      () => this.handleTargetPointerleave(),
      { signal: e }
    ), this.overlay && this.initOverlay();
  }
  initOverlay() {
    if (!this.abortController)
      return;
    const { signal: e } = this.abortController;
    this.overlay.addEventListener(
      "pointerenter",
      () => this.handleHostPointerenter(),
      { signal: e }
    ), this.overlay.addEventListener(
      "pointerleave",
      () => this.handleHostPointerleave(),
      { signal: e }
    );
  }
}
const Wi = 300, no = {
  touch: "Double tap and long press for additional options",
  keyboard: "Press Space or Alt+Down Arrow for additional options",
  mouse: "Click and hold for additional options"
};
class ro extends Ve {
  constructor() {
    super(...arguments), this.type = $e.longpress, this.longpressState = null, this.releaseDescription = ae, this.handlePointerup = () => {
      var e;
      clearTimeout(this.timeout), this.target && (this.longpressState = ((e = this.overlay) == null ? void 0 : e.state) === "opening" ? "pressed" : null, document.removeEventListener("pointerup", this.handlePointerup), document.removeEventListener("pointercancel", this.handlePointerup));
    };
  }
  get activelyOpening() {
    return this.longpressState === "opening" || this.longpressState === "pressed";
  }
  handleLongpress() {
    this.open = !0, this.longpressState = this.longpressState === "potential" ? "opening" : "pressed";
  }
  handlePointerdown(e) {
    !this.target || e.button !== 0 || (this.longpressState = "potential", document.addEventListener("pointerup", this.handlePointerup), document.addEventListener("pointercancel", this.handlePointerup), "holdAffordance" in this.target) || (this.timeout = setTimeout(() => {
      this.target && this.target.dispatchEvent(
        new CustomEvent("longpress", {
          bubbles: !0,
          composed: !0,
          detail: {
            source: "pointer"
          }
        })
      );
    }, Wi));
  }
  handleKeydown(e) {
    const { code: t, altKey: o } = e;
    o && t === "ArrowDown" && (e.stopPropagation(), e.stopImmediatePropagation());
  }
  handleKeyup(e) {
    const { code: t, altKey: o } = e;
    if (t === "Space" || o && t === "ArrowDown") {
      if (!this.target)
        return;
      e.stopPropagation(), this.target.dispatchEvent(
        new CustomEvent("longpress", {
          bubbles: !0,
          composed: !0,
          detail: {
            source: "keyboard"
          }
        })
      ), setTimeout(() => {
        this.longpressState = null;
      });
    }
  }
  prepareDescription(e) {
    if (
      // do not reapply until target is recycled
      this.releaseDescription !== ae || // require "longpress content" to apply relationship
      this.overlay.elements.length === 0
    )
      return;
    const t = document.createElement("div");
    t.id = `longpress-describedby-descriptor-${Se()}`;
    const o = uo() || ho() ? "touch" : "keyboard";
    t.textContent = no[o], t.slot = "longpress-describedby-descriptor";
    const n = e.getRootNode(), r = this.overlay.getRootNode();
    n === r ? this.overlay.append(t) : (t.hidden = !("host" in n), e.after(t));
    const s = tt(
      e,
      "aria-describedby",
      [t.id]
    );
    this.releaseDescription = () => {
      s(), t.remove(), this.releaseDescription = ae;
    };
  }
  shouldCompleteOpen() {
    this.longpressState = this.longpressState === "pressed" ? null : this.longpressState;
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener("longpress", () => this.handleLongpress(), {
      signal: e
    }), this.target.addEventListener(
      "pointerdown",
      (o) => this.handlePointerdown(o),
      { signal: e }
    ), this.prepareDescription(this.target), !this.target.holdAffordance && (this.target.addEventListener(
      "keydown",
      (o) => this.handleKeydown(o),
      { signal: e }
    ), this.target.addEventListener(
      "keyup",
      (o) => this.handleKeyup(o),
      { signal: e }
    ));
  }
}
const Vi = {
  click: oo,
  longpress: ro,
  hover: io
};
var Ki = Object.defineProperty, Yi = Object.getOwnPropertyDescriptor, $ = (i, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Yi(e, t) : e, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
  return o && n && Ki(e, t, n), n;
};
const Gi = "showPopover" in document.createElement("div");
let Re = Qo(ke);
Re = Gi ? ti(Re) : Zo(Re);
var te;
const S = (te = class extends Re {
  constructor() {
    super(...arguments), this._delayed = !1, this._disabled = !1, this.offset = 0, this._open = !1, this.lastRequestSlottableState = !1, this.receivesFocus = "auto", this._state = "closed", this.triggerElement = null, this.type = "auto", this.wasOpen = !1, this.closeOnFocusOut = (e) => {
      if (!e.relatedTarget)
        return;
      const t = new Event("overlay-relation-query", {
        bubbles: !0,
        composed: !0
      });
      e.relatedTarget.addEventListener(t.type, (o) => {
        o.composedPath().includes(this) || (this.open = !1);
      }), e.relatedTarget.dispatchEvent(t);
    };
  }
  get delayed() {
    var e;
    return ((e = this.elements.at(-1)) == null ? void 0 : e.hasAttribute("delayed")) || this._delayed;
  }
  set delayed(e) {
    this._delayed = e;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    var t;
    this._disabled = e, e ? ((t = this.strategy) == null || t.abort(), this.wasOpen = this.open, this.open = !1) : (this.bindEvents(), this.open = this.open || this.wasOpen, this.wasOpen = !1);
  }
  /**
   * Determines if the overlay has a non-virtual trigger element.
   *
   * @returns `true` if the trigger element is not a virtual trigger, otherwise `false`.
   */
  get hasNonVirtualTrigger() {
    return !!this.triggerElement && !(this.triggerElement instanceof Pe);
  }
  /**
   * Provides an instance of the `PlacementController` for managing the positioning
   * of the overlay relative to its trigger element.
   *
   * If the `PlacementController` instance does not already exist, it is created and
   * assigned to the `_placementController` property.
   *
   * @protected
   * @returns The `PlacementController` instance.
   */
  get placementController() {
    return this._placementController || (this._placementController = new to(this)), this._placementController;
  }
  get open() {
    return this._open;
  }
  set open(e) {
    var t;
    e && this.disabled || e !== this.open && ((t = this.strategy) != null && t.activelyOpening && !e || (this._open = e, this.open && (te.openCount += 1), this.requestUpdate("open", !this.open), this.open && this.requestSlottable()));
  }
  get state() {
    return this._state;
  }
  set state(e) {
    var o;
    if (e === this.state)
      return;
    const t = this.state;
    this._state = e, (this.state === "opened" || this.state === "closed") && ((o = this.strategy) == null || o.shouldCompleteOpen()), this.requestUpdate("state", t);
  }
  /**
   * Provides an instance of the `ElementResolutionController` for managing the element
   * that the overlay should be associated with. If the instance does not already exist,
   * it is created and assigned to the `_elementResolver` property.
   *
   * @protected
   * @returns The `ElementResolutionController` instance.
   */
  get elementResolver() {
    return this._elementResolver || (this._elementResolver = new Wo(this)), this._elementResolver;
  }
  /**
   * Determines if the overlay uses a dialog.
   * Returns `true` if the overlay type is "modal" or "page".
   *
   * @private
   * @returns `true` if the overlay uses a dialog, otherwise `false`.
   */
  get usesDialog() {
    return this.type === "modal" || this.type === "page";
  }
  /**
   * Determines the value for the popover attribute based on the overlay type.
   *
   * @private
   * @returns The popover value or undefined if not applicable.
   */
  get popoverValue() {
    if ("popover" in this)
      switch (this.type) {
        case "modal":
        case "page":
          return;
        case "hint":
          return "manual";
        default:
          return this.type;
      }
  }
  /**
   * Determines if the overlay requires positioning based on its type and state.
   *
   * @protected
   * @returns True if the overlay requires positioning, otherwise false.
   */
  get requiresPositioning() {
    return !(this.type === "page" || !this.open || !this.triggerElement || !this.placement && this.type !== "hint");
  }
  /**
   * Manages the positioning of the overlay relative to its trigger element.
   *
   * This method calculates the necessary parameters for positioning the overlay,
   * such as offset, placement, and tip padding, and then delegates the actual
   * positioning to the `PlacementController`.
   *
   * @protected
   * @override
   */
  managePosition() {
    if (!this.requiresPositioning || !this.open)
      return;
    const e = this.offset || 0, t = this.triggerElement, o = this.placement || "right", n = this.tipPadding;
    this.placementController.placeOverlay(this.dialogEl, {
      offset: e,
      placement: o,
      tipPadding: n,
      trigger: t,
      type: this.type
    });
  }
  /**
   * Manages the process of opening the popover.
   *
   * This method handles the necessary steps to open the popover, including managing delays,
   * ensuring the popover is in the DOM, making transitions, and applying focus.
   *
   * @protected
   * @override
   * @returns A promise that resolves when the popover has been fully opened.
   */
  async managePopoverOpen() {
    super.managePopoverOpen();
    const e = this.open;
    if (this.open !== e || (await this.manageDelay(e), this.open !== e) || (await this.ensureOnDOM(e), this.open !== e))
      return;
    const t = await this.makeTransition(e);
    this.open === e && await this.applyFocus(e, t);
  }
  /**
   * Applies focus to the appropriate element after the popover has been opened.
   *
   * This method handles the focus management for the overlay, ensuring that the correct
   * element receives focus based on the overlay's type and state.
   *
   * @protected
   * @override
   * @param targetOpenState - The target open state of the overlay.
   * @param focusEl - The element to focus after opening the popover.
   * @returns A promise that resolves when the focus has been applied.
   */
  async applyFocus(e, t) {
    if (!(this.receivesFocus === "false" || this.type === "hint")) {
      if (await D(), await D(), e === this.open && !this.open) {
        this.hasNonVirtualTrigger && this.contains(this.getRootNode().activeElement) && this.triggerElement.focus();
        return;
      }
      t == null || t.focus();
    }
  }
  /**
   * Returns focus to the trigger element if the overlay is closed.
   *
   * This method ensures that focus is returned to the trigger element when the overlay is closed,
   * unless the overlay is of type "hint" or the focus is already outside the overlay.
   *
   * @protected
   * @override
   */
  returnFocus() {
    var t;
    if (this.open || this.type === "hint")
      return;
    const e = () => {
      var r, s;
      const o = [];
      let n = document.activeElement;
      for (; (r = n == null ? void 0 : n.shadowRoot) != null && r.activeElement; )
        n = n.shadowRoot.activeElement;
      for (; n; ) {
        const l = n.assignedSlot || n.parentElement || ((s = n.getRootNode()) == null ? void 0 : s.host);
        l && o.push(l), n = l;
      }
      return o;
    };
    this.receivesFocus !== "false" && ((t = this.triggerElement) != null && t.focus) && (this.contains(this.getRootNode().activeElement) || e().includes(this) || document.activeElement === document.body) && this.triggerElement.focus();
  }
  /**
   * Manages the process of opening or closing the overlay.
   *
   * This method handles the necessary steps to open or close the overlay, including updating the state,
   * managing the overlay stack, and handling focus events.
   *
   * @protected
   * @param oldOpen - The previous open state of the overlay.
   * @returns A promise that resolves when the overlay has been fully managed.
   */
  async manageOpen(e) {
    if (!(!this.isConnected && this.open) && (this.hasUpdated || await this.updateComplete, this.open ? (Et.add(this), this.willPreventClose && (document.addEventListener(
      "pointerup",
      () => {
        this.dialogEl.classList.toggle("not-immediately-closable", !1), this.willPreventClose = !1;
      },
      { once: !0 }
    ), this.dialogEl.classList.toggle("not-immediately-closable", !0))) : (e && this.dispose(), Et.remove(this)), this.open && this.state !== "opened" ? this.state = "opening" : !this.open && this.state !== "closed" && (this.state = "closing"), this.usesDialog ? this.manageDialogOpen() : this.managePopoverOpen(), this.type === "auto")) {
      const t = this.getRootNode();
      this.open ? t.addEventListener("focusout", this.closeOnFocusOut, {
        capture: !0
      }) : t.removeEventListener("focusout", this.closeOnFocusOut, {
        capture: !0
      });
    }
  }
  /**
   * Binds event handling strategies to the overlay based on the specified trigger interaction.
   *
   * This method sets up the appropriate event handling strategy for the overlay, ensuring that
   * it responds correctly to user interactions such as clicks, hovers, or long presses.
   *
   * @protected
   */
  bindEvents() {
    var e;
    (e = this.strategy) == null || e.abort(), this.strategy = void 0, this.hasNonVirtualTrigger && this.triggerInteraction && (this.strategy = new Vi[this.triggerInteraction](
      this.triggerElement,
      {
        overlay: this
      }
    ));
  }
  /**
   * Handles the `beforetoggle` event to manage the overlay's state.
   *
   * This method checks the new state of the event and calls `handleBrowserClose`
   * if the new state is not 'open'.
   *
   * @protected
   * @param event - The `beforetoggle` event with the new state.
   */
  handleBeforetoggle(e) {
    e.newState !== "open" && this.handleBrowserClose(e);
  }
  /**
   * Handles the browser's close event to manage the overlay's state.
   *
   * This method stops the propagation of the event and closes the overlay if it is not
   * actively opening. If the overlay is actively opening, it calls `manuallyKeepOpen`.
   *
   * @protected
   * @param event - The browser's close event.
   */
  handleBrowserClose(e) {
    var t;
    if (e.stopPropagation(), !((t = this.strategy) != null && t.activelyOpening)) {
      this.open = !1;
      return;
    }
    this.manuallyKeepOpen();
  }
  /**
   * Manually keeps the overlay open.
   *
   * This method sets the overlay to open, allows placement updates, and manages the open state.
   *
   * @public
   * @override
   */
  manuallyKeepOpen() {
    this.open = !0, this.placementController.allowPlacementUpdate = !0, this.manageOpen(!1);
  }
  /**
   * Handles the `slotchange` event to manage the overlay's state.
   *
   * This method checks if there are any elements in the slot. If there are no elements,
   * it releases the description from the strategy. If there are elements and the trigger
   * is non-virtual, it prepares the description for the trigger element.
   *
   * @protected
   */
  handleSlotchange() {
    var e, t;
    this.elements.length === 0 ? (e = this.strategy) == null || e.releaseDescription() : this.hasNonVirtualTrigger && ((t = this.strategy) == null || t.prepareDescription(this.triggerElement));
  }
  /**
   * Determines whether the overlay should prevent closing.
   *
   * This method checks the `willPreventClose` flag and resets it to `false`.
   * It returns the value of the `willPreventClose` flag.
   *
   * @public
   * @returns `true` if the overlay should prevent closing, otherwise `false`.
   */
  shouldPreventClose() {
    const e = this.willPreventClose;
    return this.willPreventClose = !1, e;
  }
  /**
   * Requests slottable content for the overlay.
   *
   * This method dispatches a `SlottableRequestEvent` to request or remove slottable content
   * based on the current open state of the overlay. It ensures that the same state is not
   * dispatched twice in a row.
   *
   * @protected
   * @override
   */
  requestSlottable() {
    this.lastRequestSlottableState !== this.open && (this.open || document.body.offsetHeight, this.dispatchEvent(
      new st(
        "overlay-content",
        this.open ? {} : Ut
      )
    ), this.lastRequestSlottableState = this.open);
  }
  /**
   * Lifecycle method called before the component updates.
   *
   * This method handles various tasks before the component updates, such as setting an ID,
   * managing the open state, resolving the trigger element, and binding events.
   *
   * @override
   * @param changes - The properties that have changed.
   */
  willUpdate(e) {
    var o;
    if (this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${Se()}`), e.has("open") && (this.hasUpdated || this.open) && this.manageOpen(e.get("open")), e.has("trigger")) {
      const [n, r] = ((o = this.trigger) == null ? void 0 : o.split("@")) || [];
      this.elementResolver.selector = n ? `#${n}` : "", this.triggerInteraction = r;
    }
    let t = !1;
    e.has(Ht) && (t = this.triggerElement, this.triggerElement = this.elementResolver.element), e.has("triggerElement") && (t = e.get("triggerElement")), t !== !1 && this.bindEvents();
  }
  /**
   * Lifecycle method called after the component updates.
   *
   * This method handles various tasks after the component updates, such as updating the placement
   * attribute, resetting the overlay position, and clearing the overlay position based on the state.
   *
   * @override
   * @param changes - The properties that have changed.
   */
  updated(e) {
    super.updated(e), e.has("placement") && (this.placement ? this.dialogEl.setAttribute("actual-placement", this.placement) : this.dialogEl.removeAttribute("actual-placement"), this.open && e.get("placement") !== void 0 && this.placementController.resetOverlayPosition()), e.has("state") && this.state === "closed" && e.get("state") !== void 0 && this.placementController.clearOverlayPosition();
  }
  /**
   * Renders the content of the overlay.
   *
   * This method returns a template result containing a slot element. The slot element
   * listens for the `slotchange` event to manage the overlay's state.
   *
   * @protected
   * @returns The template result containing the slot element.
   */
  renderContent() {
    return b` <slot @slotchange=${this.handleSlotchange}></slot> `;
  }
  /**
   * Generates a style map for the dialog element.
   *
   * This method returns an object containing CSS custom properties for the dialog element.
   * The `--luzmo-overlay-open-count` custom property is set to the current open count of overlays.
   *
   * @private
   * @returns The style map for the dialog element.
   */
  get dialogStyleMap() {
    return {
      "--luzmo-overlay-open-count": te.openCount.toString()
    };
  }
  /**
   * Renders the dialog element for the overlay.
   *
   * This method returns a template result containing a dialog element. The dialog element
   * includes various attributes and event listeners to manage the overlay's state and behavior.
   *
   * @protected
   * @returns The template result containing the dialog element.
   */
  renderDialog() {
    return b`
      <dialog
        class="dialog"
        part="dialog"
        placement=${I(
      this.requiresPositioning ? this.placement || "right" : void 0
    )}
        style=${Je(this.dialogStyleMap)}
        @close=${this.handleBrowserClose}
        @cancel=${this.handleBrowserClose}
        @beforetoggle=${this.handleBeforetoggle}
        ?is-visible=${this.state !== "closed"}
      >
        ${this.renderContent()}
      </dialog>
    `;
  }
  /**
   * Renders the popover element for the overlay.
   *
   * This method returns a template result containing a div element styled as a popover.
   * The popover element includes various attributes and event listeners to manage the overlay's state and behavior.
   *
   * @protected
   * @returns The template result containing the popover element.
   */
  renderPopover() {
    return b`
      <div
        class="dialog"
        part="dialog"
        placement=${I(
      this.requiresPositioning ? this.placement || "right" : void 0
    )}
        popover=${I(this.popoverValue)}
        style=${Je(this.dialogStyleMap)}
        @beforetoggle=${this.handleBeforetoggle}
        @close=${this.handleBrowserClose}
        ?is-visible=${this.state !== "closed"}
      >
        ${this.renderContent()}
      </div>
    `;
  }
  /**
   * Renders the overlay component.
   *
   * This method returns a template result containing either a dialog or popover element
   * based on the overlay type. It also includes a slot for longpress descriptors.
   *
   * @override
   * @returns The template result containing the overlay content.
   */
  render() {
    const e = this.type === "modal" || this.type === "page";
    return b`
      ${e ? this.renderDialog() : this.renderPopover()}
      <slot name="longpress-describedby-descriptor"></slot>
    `;
  }
  /**
   * Lifecycle method called when the component is added to the DOM.
   *
   * This method sets up event listeners and binds events if the component has already updated.
   *
   * @override
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("close", () => {
      this.open = !1;
    }), this.hasUpdated && this.bindEvents();
  }
  /**
   * Lifecycle method called when the component is removed from the DOM.
   *
   * This method releases the description from the strategy and updates the 'open' property.
   *
   * @override
   */
  disconnectedCallback() {
    var e;
    (e = this.strategy) == null || e.releaseDescription(), this.open = !1, super.disconnectedCallback();
  }
}, te.styles = [oe(ni)], te.openCount = 1, te);
$([
  p({ type: Boolean })
], S.prototype, "delayed", 1);
$([
  O(".dialog")
], S.prototype, "dialogEl", 2);
$([
  p({ type: Boolean })
], S.prototype, "disabled", 1);
$([
  go({
    flatten: !0,
    selector: ':not([slot="longpress-describedby-descriptor"], slot)'
  })
], S.prototype, "elements", 2);
$([
  p({ type: Number })
], S.prototype, "offset", 2);
$([
  p({ type: Boolean, reflect: !0 })
], S.prototype, "open", 1);
$([
  p()
], S.prototype, "placement", 2);
$([
  p({ attribute: "receives-focus" })
], S.prototype, "receivesFocus", 2);
$([
  O("slot")
], S.prototype, "slotEl", 2);
$([
  ie()
], S.prototype, "state", 1);
$([
  p({ type: Number, attribute: "tip-padding" })
], S.prototype, "tipPadding", 2);
$([
  p()
], S.prototype, "trigger", 2);
$([
  p({ attribute: !1 })
], S.prototype, "triggerElement", 2);
$([
  p({ attribute: !1 })
], S.prototype, "triggerInteraction", 2);
$([
  p()
], S.prototype, "type", 2);
let bt = S;
const me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LuzmoOverlay: bt
}, Symbol.toStringTag, { value: "Module" })), Xi = ":host([disabled]) ::slotted([slot=trigger]){pointer-events:none}slot[name=longpress-describedby-descriptor]{display:none}";
var Ji = Object.defineProperty, L = (i, e, t, o) => {
  for (var n = void 0, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = s(e, t, n) || n);
  return n && Ji(e, t, n), n;
};
class A extends Te {
  constructor() {
    super(...arguments), this.content = "click hover longpress", this.offset = 6, this.disabled = !1, this.receivesFocus = "auto", this.clickContent = [], this.longpressContent = [], this.hoverContent = [], this.targetContent = [];
  }
  static get styles() {
    return [oe(Xi)];
  }
  getAssignedElementsFromSlot(e) {
    return e.assignedElements({ flatten: !0 });
  }
  handleTriggerContent(e) {
    this.targetContent = this.getAssignedElementsFromSlot(e.target);
  }
  handleSlotContent(e) {
    switch (e.target.name) {
      case "click-content": {
        this.clickContent = this.getAssignedElementsFromSlot(e.target);
        break;
      }
      case "longpress-content": {
        this.longpressContent = this.getAssignedElementsFromSlot(e.target);
        break;
      }
      case "hover-content": {
        this.hoverContent = this.getAssignedElementsFromSlot(e.target);
        break;
      }
    }
  }
  handleBeforetoggle(e) {
    const { target: t } = e;
    let o;
    if (t === this.clickOverlayElement)
      o = "click";
    else if (t === this.longpressOverlayElement)
      o = "longpress";
    else if (t === this.hoverOverlayElement)
      o = "hover";
    else
      return;
    e.newState === "open" ? this.open = o : this.open === o && (this.open = void 0);
  }
  update(e) {
    var t, o, n, r, s, l;
    e.has("clickContent") && (this.clickPlacement = ((t = this.clickContent[0]) == null ? void 0 : t.getAttribute("placement")) || ((o = this.clickContent[0]) == null ? void 0 : o.getAttribute("direction")) || void 0), e.has("hoverContent") && (this.hoverPlacement = ((n = this.hoverContent[0]) == null ? void 0 : n.getAttribute("placement")) || ((r = this.hoverContent[0]) == null ? void 0 : r.getAttribute("direction")) || void 0), e.has("longpressContent") && (this.longpressPlacement = ((s = this.longpressContent[0]) == null ? void 0 : s.getAttribute("placement")) || ((l = this.longpressContent[0]) == null ? void 0 : l.getAttribute("direction")) || void 0), super.update(e);
  }
  renderSlot(e) {
    return b`
      <slot name=${e} @slotchange=${this.handleSlotContent}></slot>
    `;
  }
  renderClickOverlay() {
    Promise.resolve().then(() => me);
    const e = this.renderSlot("click-content");
    return this.clickContent.length === 0 ? e : b`
      <luzmo-overlay
        id="click-overlay"
        ?disabled=${this.disabled || this.clickContent.length === 0}
        ?open=${this.open === "click" && this.clickContent.length > 0}
        .offset=${this.offset}
        .placement=${this.clickPlacement || this.placement}
        .triggerElement=${this.targetContent[0]}
        .triggerInteraction=${"click"}
        .type=${this.type === "modal" ? "modal" : "auto"}
        @beforetoggle=${this.handleBeforetoggle}
        .receivesFocus=${this.receivesFocus}
      >
        ${e}
      </luzmo-overlay>
    `;
  }
  renderHoverOverlay() {
    Promise.resolve().then(() => me);
    const e = this.renderSlot("hover-content");
    return this.hoverContent.length === 0 ? e : b`
      <luzmo-overlay
        id="hover-overlay"
        ?open=${this.open === "hover" && this.hoverContent.length > 0}
        ?disabled=${this.disabled || this.hoverContent.length === 0 || !!this.open && this.open !== "hover"}
        .offset=${this.offset}
        .placement=${this.hoverPlacement || this.placement}
        .triggerElement=${this.targetContent[0]}
        .triggerInteraction=${"hover"}
        .type=${"hint"}
        @beforetoggle=${this.handleBeforetoggle}
        .receivesFocus=${this.receivesFocus}
      >
        ${e}
      </luzmo-overlay>
    `;
  }
  renderLongpressOverlay() {
    Promise.resolve().then(() => me);
    const e = this.renderSlot("longpress-content");
    return this.longpressContent.length === 0 ? e : b`
      <luzmo-overlay
        id="longpress-overlay"
        ?disabled=${this.disabled || this.longpressContent.length === 0}
        ?open=${this.open === "longpress" && this.longpressContent.length > 0}
        .offset=${this.offset}
        .placement=${this.longpressPlacement || this.placement}
        .triggerElement=${this.targetContent[0]}
        .triggerInteraction=${"longpress"}
        .type=${"auto"}
        @beforetoggle=${this.handleBeforetoggle}
        .receivesFocus=${this.receivesFocus}
      >
        ${e}
      </luzmo-overlay>
      <slot name="longpress-describedby-descriptor"></slot>
    `;
  }
  render() {
    const e = this.content.split(" ");
    return b`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this.handleTriggerContent}
      ></slot>
      ${[
      e.includes("click") ? this.renderClickOverlay() : b``,
      e.includes("hover") ? this.renderHoverOverlay() : b``,
      e.includes("longpress") ? this.renderLongpressOverlay() : b``
    ]}
    `;
  }
  updated(e) {
    if (super.updated(e), this.disabled && e.has("disabled")) {
      this.open = void 0;
      return;
    }
  }
  async getUpdateComplete() {
    return await super.getUpdateComplete();
  }
}
L([
  p()
], A.prototype, "content");
L([
  p({ reflect: !0 })
], A.prototype, "placement");
L([
  p()
], A.prototype, "type");
L([
  p({ type: Number })
], A.prototype, "offset");
L([
  p({ reflect: !0 })
], A.prototype, "open");
L([
  p({ type: Boolean, reflect: !0 })
], A.prototype, "disabled");
L([
  p({ attribute: "receives-focus" })
], A.prototype, "receivesFocus");
L([
  ie()
], A.prototype, "clickContent");
L([
  ie()
], A.prototype, "longpressContent");
L([
  ie()
], A.prototype, "hoverContent");
L([
  ie()
], A.prototype, "targetContent");
L([
  O("#click-overlay", !0)
], A.prototype, "clickOverlayElement");
L([
  O("#longpress-overlay", !0)
], A.prototype, "longpressOverlayElement");
L([
  O("#hover-overlay", !0)
], A.prototype, "hoverOverlayElement");
customElements.get("luzmo-overlay") || customElements.define("luzmo-overlay", bt);
customElements.get("luzmo-overlay-trigger") || customElements.define("luzmo-overlay-trigger", A);
const ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickController: oo,
  HoverController: io,
  InteractionController: Ve,
  InteractionTypes: $e,
  LONGPRESS_INSTRUCTIONS: no,
  LongpressController: ro,
  LuzmoAbstractOverlay: ke,
  LuzmoOverlay: bt,
  LuzmoOverlayTrigger: A,
  PlacementController: to,
  SlottableRequestEvent: st,
  VirtualTrigger: Pe,
  guaranteedAllTransitionend: Ue,
  nextFrame: D,
  noop: ae,
  overlayTimer: Ce,
  removeSlottableRequest: Ut
}, Symbol.toStringTag, { value: "Module" })), Qi = "#tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform .13s ease-in-out,opacity .13s ease-in-out,visibility 0s linear .13s;transition:transform var(--luzmo-overlay-animation-duration, .13s) ease-in-out,opacity var(--luzmo-overlay-animation-duration, .13s) ease-in-out,visibility 0s linear var(--luzmo-overlay-animation-duration, .13s)}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:0s;transition-delay:var(--luzmo-overlay-animation-duration-opened, 0s)}@media (forced-colors: active){#tooltip{border:1px solid rgba(0,0,0,0)}#tip{--highcontrast-tooltip-background-color-default: CanvasText;--highcontrast-tooltip-background-color-informative: CanvasText;--highcontrast-tooltip-background-color-positive: CanvasText;--highcontrast-tooltip-background-color-negative: CanvasText;forced-color-adjust:none}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--luzmo-tooltip-spacing-inline, .688rem);border-radius:var(--luzmo-tooltip-border-radius, .313rem);block-size:auto;min-block-size:var(--luzmo-tooltip-height, 1.875rem);max-inline-size:var(--luzmo-tooltip-max-inline-size, 12.5rem);background-color:var(--highcontrast-tooltip-background-color-default, var(--luzmo-tooltip-background-color-default, rgb(109, 109, 109)));color:var(--luzmo-tooltip-content-color, white);font-size:var(--luzmo-tooltip-font-size, var(--tooltip-font-size, .938rem));font-weight:var(--luzmo-tooltip-font-weight, 400);line-height:var(--luzmo-tooltip-line-height, 1.3);word-break:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--luzmo-tooltip-cjk-line-height, 1.5)}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative, var(--luzmo-tooltip-background-color-informative, rgb(2, 101, 220)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive, var(--luzmo-tooltip-background-color-positive, rgb(0, 122, 77)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative, var(--luzmo-tooltip-background-color-negative, rgb(211, 21, 16)))}#tip{block-size:var(--luzmo-tooltip-tip-square-size, .625rem);inline-size:var(--luzmo-tooltip-tip-square-size, .625rem);inset-block-start:100%;background-color:var(--highcontrast-tooltip-background-color-default, var(--luzmo-tooltip-background-color-default, rgb(109, 109, 109)));clip-path:polygon(0 calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)),50% var(--luzmo-tooltip-tip-height-percentage, 50%),100% calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)));position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative, var(--luzmo-tooltip-background-color-informative, rgb(2, 101, 220)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive, var(--luzmo-tooltip-background-color-positive, rgb(0, 122, 77)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative, var(--luzmo-tooltip-background-color-negative, rgb(211, 21, 16)))}:host([placement*=top]) #tooltip #tip,.luzmo-Tooltip--top-end #tip,.luzmo-Tooltip--top-left #tip,.luzmo-Tooltip--top-right #tip,.luzmo-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--luzmo-tooltip-tip-height-percentage, 50%)),0 calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)),100% calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)));inset-block:auto 100%}.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--bottom-start #tip,.luzmo-Tooltip--top-end #tip,.luzmo-Tooltip--top-left #tip,.luzmo-Tooltip--top-right #tip,.luzmo-Tooltip--top-start #tip{transform:none}.luzmo-Tooltip--bottom-left #tip,.luzmo-Tooltip--top-left #tip{inset-inline-start:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-right #tip,.luzmo-Tooltip--top-right #tip{inset-inline:auto var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-start #tip,.luzmo-Tooltip--top-start #tip{inset-inline:var(--luzmo-tooltip-pointer-corner-spacing, .313rem) auto}.luzmo-Tooltip--bottom-start #tip:dir(rtl),.luzmo-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--bottom-start #tip,:host([dir=rtl]) .luzmo-Tooltip--top-start #tip{right:var(--luzmo-tooltip-pointer-corner-spacing, .313rem);left:auto}.luzmo-Tooltip--bottom-end #tip,.luzmo-Tooltip--top-end #tip{inset-inline:auto var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--bottom-end #tip:dir(rtl),.luzmo-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--bottom-end #tip,:host([dir=rtl]) .luzmo-Tooltip--top-end #tip{left:var(--luzmo-tooltip-pointer-corner-spacing, .313rem);right:auto}.luzmo-Tooltip--end #tip,.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.luzmo-Tooltip--end #tip,.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--luzmo-tooltip-tip-height-percentage, 50%)) 50%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--start #tip,.luzmo-Tooltip--start-bottom #tip,.luzmo-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0,calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,var(--luzmo-tooltip-tip-height-percentage, 50%) 50%);inset-inline-start:100%}.luzmo-Tooltip--end-top #tip,.luzmo-Tooltip--left-top #tip,.luzmo-Tooltip--right-top #tip,.luzmo-Tooltip--start-top #tip{inset-block-start:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--end-bottom #tip,.luzmo-Tooltip--left-bottom #tip,.luzmo-Tooltip--right-bottom #tip,.luzmo-Tooltip--start-bottom #tip{inset-block-end:var(--luzmo-tooltip-pointer-corner-spacing, .313rem)}.luzmo-Tooltip--end #tip:dir(rtl),.luzmo-Tooltip--end-bottom #tip:dir(rtl),.luzmo-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.luzmo-Tooltip--left-bottom #tip:dir(rtl),.luzmo-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .luzmo-Tooltip--end #tip,:host([dir=rtl]) .luzmo-Tooltip--end-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .luzmo-Tooltip--left-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0,calc(0% - var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,var(--luzmo-tooltip-tip-height-percentage, 50%) 50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.luzmo-Tooltip--right-bottom #tip:dir(rtl),.luzmo-Tooltip--right-top #tip:dir(rtl),.luzmo-Tooltip--start #tip:dir(rtl),.luzmo-Tooltip--start-bottom #tip:dir(rtl),.luzmo-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .luzmo-Tooltip--right-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--right-top #tip,:host([dir=rtl]) .luzmo-Tooltip--start #tip,:host([dir=rtl]) .luzmo-Tooltip--start-bottom #tip,:host([dir=rtl]) .luzmo-Tooltip--start-top #tip{clip-path:polygon(var(--luzmo-tooltip-tip-height-percentage, 50%) 50%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 100%,calc(100% + var(--luzmo-tooltip-tip-antialiasing-inset, .5px)) 0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--luzmo-tooltip-icon-width, 1.125rem);block-size:var(--luzmo-tooltip-icon-height, 1.125rem);flex-shrink:0;align-self:flex-start;margin-block-start:var(--luzmo-tooltip-icon-spacing-block-start, .313rem);margin-inline-start:calc(var(--luzmo-tooltip-icon-spacing-inline-start, .563rem) - var(--luzmo-tooltip-spacing-inline, .688rem));margin-inline-end:var(--luzmo-tooltip-icon-spacing-inline-end, .563rem)}#label{line-height:var(--luzmo-tooltip-line-height, 1.3);margin-block-start:var(--luzmo-tooltip-spacing-block-start, .313rem);margin-block-end:var(--luzmo-tooltip-spacing-block-end, .375rem)}#tooltip,:host([placement*=top]) #tooltip,.luzmo-Tooltip--top-end,.luzmo-Tooltip--top-left,.luzmo-Tooltip--top-right,.luzmo-Tooltip--top-start{margin-block-end:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--top-end,:host([open]) .luzmo-Tooltip--top-left,:host([open]) .luzmo-Tooltip--top-right,:host([open]) .luzmo-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host([placement*=bottom]) #tooltip,.luzmo-Tooltip--bottom-end,.luzmo-Tooltip--bottom-left,.luzmo-Tooltip--bottom-right,.luzmo-Tooltip--bottom-start{margin-block-start:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--bottom-end,:host([open]) .luzmo-Tooltip--bottom-left,:host([open]) .luzmo-Tooltip--bottom-right,:host([open]) .luzmo-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--luzmo-tooltip-animation-distance, .313rem))}:host([placement*=right]) #tooltip,.luzmo-Tooltip--right-bottom,.luzmo-Tooltip--right-top{margin-left:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--right-bottom,:host([open]) .luzmo-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}:host([placement*=left]) #tooltip,.luzmo-Tooltip--left-bottom,.luzmo-Tooltip--left-top{margin-right:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--left-bottom,:host([open]) .luzmo-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}.luzmo-Tooltip--start,.luzmo-Tooltip--start-bottom,.luzmo-Tooltip--start-top{margin-inline-end:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--start-bottom,:host([open]) .luzmo-Tooltip--start-top,:host([open]) .luzmo-Tooltip--start{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host([open]) .luzmo-Tooltip--start-bottom:dir(rtl),:host([open]) .luzmo-Tooltip--start-top:dir(rtl),:host([open]) .luzmo-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .luzmo-Tooltip--start-bottom,:host([dir=rtl][open]) .luzmo-Tooltip--start-top,:host([dir=rtl][open]) .luzmo-Tooltip--start{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}.luzmo-Tooltip--end,.luzmo-Tooltip--end-bottom,.luzmo-Tooltip--end-top{margin-inline-start:calc(var(--luzmo-tooltip-tip-block-size, .313rem) + var(--luzmo-tooltip-margin, 0rem))}:host([open]) .luzmo-Tooltip--end-bottom,:host([open]) .luzmo-Tooltip--end-top,:host([open]) .luzmo-Tooltip--end{transform:translate(var(--luzmo-tooltip-animation-distance, .313rem))}:host([open]) .luzmo-Tooltip--end-bottom:dir(rtl),:host([open]) .luzmo-Tooltip--end-top:dir(rtl),:host([open]) .luzmo-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .luzmo-Tooltip--end-bottom,:host([dir=rtl][open]) .luzmo-Tooltip--end-top,:host([dir=rtl][open]) .luzmo-Tooltip--end{transform:translate(calc(var(--luzmo-tooltip-animation-distance, .313rem) * -1))}:host{--luzmo-tooltip-background-color-default: rgb(0, 0, 0);--tooltip-font-size: var(--luzmo-font-size)}:host([size=s]){--tooltip-font-size: var(--luzmo-font-size-s)}:host([size=m]){--tooltip-font-size: var(--luzmo-font-size-m)}:host([size=l]){--tooltip-font-size: var(--luzmo-font-size-l)}:host([size=xl]){--tooltip-font-size: var(--luzmo-font-size-xl)}:host{display:contents;white-space:initial}#tooltip{inline-size:max-content}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:.625rem!important;height:.625rem!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{inset-block-end:100%;clip-path:polygon(50% 50%,0 105%,100% 105%);top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--luzmo-tooltip-tip-block-size, .313rem) * -2) 100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}luzmo-overlay:not(:defined){display:none}";
var Zi = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Q = (i, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? en(e, t) : e, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
  return o && n && Zi(e, t, n), n;
};
class tn extends HTMLElement {
  constructor() {
    super(), this._open = !1, this._placement = "top", this.addEventListener("luzmo-opened", this.redispatchEvent), this.addEventListener("luzmo-closed", this.redispatchEvent);
  }
  redispatchEvent(e) {
    e.stopPropagation(), this.tooltip.dispatchEvent(
      new CustomEvent(e.type, {
        bubbles: e.bubbles,
        composed: e.composed,
        detail: e.detail
      })
    );
  }
  get tooltip() {
    return this.getRootNode().host;
  }
  static get observedAttributes() {
    return ["open", "placement"];
  }
  attributeChangedCallback(e, t, o) {
    switch (e) {
      // API generally sets `open` as a property
      /* c8 ignore next 3 */
      case "open": {
        this.open = o !== null;
        break;
      }
      case "placement": {
        this.placement = o;
        break;
      }
    }
  }
  set open(e) {
    this._open = e;
    const { tooltip: t } = this;
    t && (t.open = e);
  }
  /* c8 ignore next 3 */
  get open() {
    return this._open;
  }
  /**
   * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"}
   * @attr
   */
  set placement(e) {
    this._placement = e;
    const { tooltip: t } = this;
    t && (t.placement = e);
  }
  /* c8 ignore next 3 */
  get placement() {
    return this._placement;
  }
  get tipElement() {
    return this.tooltip.tipElement;
  }
}
customElements.get("luzmo-tooltip-openable") || customElements.define("luzmo-tooltip-openable", tn);
class j extends Ne(Te, {
  defaultSize: "s"
}) {
  constructor() {
    super(...arguments), this.delayed = !1, this.dependencyManager = new it(this), this.disabled = !1, this.selfManaged = !1, this.offset = 0, this.open = !1, this._variant = "", this.handleOpenOverlay = () => {
      this.open = !0;
    }, this.handleCloseOverlay = () => {
      this.open = !1;
    };
  }
  static get styles() {
    return [oe(Qi)];
  }
  get variant() {
    return this._variant;
  }
  set variant(e) {
    if (e !== this.variant) {
      if (["info", "positive", "negative"].includes(e)) {
        this.setAttribute("variant", e), this._variant = e;
        return;
      }
      this.removeAttribute("variant"), this._variant = "";
    }
  }
  forwardTransitionEvent(e) {
    this.dispatchEvent(
      new TransitionEvent(e.type, {
        bubbles: !0,
        composed: !0,
        propertyName: e.propertyName
      })
    );
  }
  get triggerElement() {
    var n;
    let e = this.assignedSlot || this, t = e.getRootNode();
    if (t === document)
      return null;
    let o = e.parentElement || t.host || /* c8 ignore next 1 */
    t;
    for (; !((n = o == null ? void 0 : o.matches) != null && n.call(o, Jo)); ) {
      if (e = o.assignedSlot || o, t = e.getRootNode(), t === document)
        return null;
      o = e.parentElement || t.host || /* c8 ignore next 1 */
      t;
    }
    return o;
  }
  render() {
    const e = b`
      <luzmo-tooltip-openable
        id="tooltip"
        placement=${I(this.placement)}
        @transitionrun=${this.forwardTransitionEvent}
        @transitionend=${this.forwardTransitionEvent}
        @transitioncancel=${this.forwardTransitionEvent}
      >
        <slot name="icon"></slot>
        <span id="label"><slot></slot></span>
        <span id="tip" aria-hidden="true"></span>
      </luzmo-tooltip-openable>
    `;
    return this.selfManaged ? (this.dependencyManager.add("luzmo-overlay"), Promise.resolve().then(() => ot), b`
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
          ${e}
        </luzmo-overlay>
      `) : e;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      if (!this.selfManaged)
        return;
      const e = this.overlayElement;
      if (e) {
        const t = this.triggerElement;
        e.triggerElement = t;
      }
    });
  }
}
Q([
  p({ type: Boolean })
], j.prototype, "delayed", 2);
Q([
  p({ type: Boolean })
], j.prototype, "disabled", 2);
Q([
  p({ type: Boolean, attribute: "self-managed" })
], j.prototype, "selfManaged", 2);
Q([
  p({ type: Number })
], j.prototype, "offset", 2);
Q([
  p({ type: Boolean, reflect: !0 })
], j.prototype, "open", 2);
Q([
  O("luzmo-overlay")
], j.prototype, "overlayElement", 2);
Q([
  p({ reflect: !0 })
], j.prototype, "placement", 2);
Q([
  O("#tip")
], j.prototype, "tipElement", 2);
Q([
  p({ type: Number })
], j.prototype, "tipPadding", 2);
Q([
  p({ type: String })
], j.prototype, "variant", 1);
customElements.get("luzmo-tooltip") || customElements.define("luzmo-tooltip", j);
const on = '#button{cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--luzmo-button-font-family, var(--luzmo-font-family));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--luzmo-button-line-height, var(--luzmo-line-height, 1.3));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,border-color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,box-shadow var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;position:relative;overflow:visible}#button::-moz-focus-inner{border-style:none;padding:0}#button:focus{outline:none}@media (forced-colors: active){:host{--highcontrast-picker-focus-indicator-color: Highlight;--highcontrast-picker-border-color-default: ButtonBorder;--highcontrast-picker-border-color-hover: Highlight;--highcontrast-picker-border-color-disabled: GrayText;--highcontrast-picker-content-color-default: ButtonText;--highcontrast-picker-content-color-disabled: GrayText;--highcontrast-picker-background-color: ButtonFace}#button.is-keyboardFocused,#button:focus-visible{--highcontrast-picker-border-color-hover: ButtonText}#button .label,#button:after{forced-color-adjust:none}}#button{box-sizing:border-box;max-inline-size:100%;min-inline-size:calc(var(--picker-minimum-width-multiplier) * var(--luzmo-picker-block-size, var(--picker-block-size)));block-size:var(--luzmo-picker-block-size, var(--picker-block-size));border-width:var(--luzmo-picker-border-width, var(--picker-border-width));border-radius:var(--luzmo-picker-border-radius, var(--picker-border-radius));box-shadow:var(--luzmo-picker-box-shadow, var(--picker-box-shadow));transition:background-color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)),box-shadow var(--luzmo-picker-animation-duration, var(--picker-animation-duration)),border-color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-in-out;color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-style:solid;border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));margin-block-start:var(--luzmo-picker-spacing-label-to-picker, var(--picker-spacing-label-to-picker));padding-block:0;padding-inline-start:var(--luzmo-picker-spacing-edge-to-text, var(--picker-spacing-edge-to-text));padding-inline-end:var(--luzmo-picker-spacing-edge-to-disclosure-icon, var(--picker-spacing-edge-to-disclosure-icon));display:flex}#button:after{pointer-events:none;content:"";block-size:calc(100% + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) * 2 + var(--luzmo-picker-border-width, var(--picker-border-width)) * 2);inline-size:calc(100% + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) * 2 + var(--luzmo-picker-border-width, var(--picker-border-width)) * 2);border-style:solid;border-width:var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness));border-radius:calc(var(--luzmo-picker-border-radius, var(--picker-border-radius)) + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-border-width, var(--picker-border-width)));border-color:#0000;margin-block-start:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1);margin-inline-start:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1);position:absolute;inset-block:0;inset-inline:0}#button:active{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-active, var(--picker-background-color-active)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-active, var(--picker-border-color-active)))}#button:active:after{border-color:#0000}#button.placeholder:active .label{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-active, var(--picker-font-color-active)))}#button.is-keyboardFocused,#button:focus-visible{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-key-focus, var(--picker-background-color-key-focus)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-key-focus, var(--picker-border-color-key-focus)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-key-focus, var(--picker-font-color-key-focus)));outline:none}#button.is-keyboardFocused:after,#button:focus-visible:after{border-color:var(--highcontrast-picker-focus-indicator-color, var(--luzmo-picker-focus-indicator-color, var(--picker-focus-indicator-color)))}#button.is-keyboardFocused.placeholder,#button.placeholder:focus-visible{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-key-focus, var(--picker-font-color-key-focus)))}#button.is-keyboardFocused .disclosure-icon,#button:focus-visible .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-key-focus, var(--picker-icon-color-key-focus)))}:host([open]) #button:not(:disabled,.is-disabled){color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default-open, var(--picker-font-color-default-open)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default-open, var(--picker-background-color-default-open)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-default-open, var(--picker-border-color-default-open)))}:host([open]) #button:not(:disabled,.is-disabled) .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-default-open, var(--picker-icon-color-default-open)))}:host([invalid]) #button:not(:disabled,.is-disabled){border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-default, var(--picker-border-color-error-default)))}:host([invalid]) #button:not(:disabled,.is-disabled) .validation-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-error, var(--picker-icon-color-error)))}:host([invalid]) #button:not(:disabled,.is-disabled):active{border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-active, var(--picker-border-color-error-active)))}:host([invalid][open]) #button:not(:disabled,.is-disabled){border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-default-open, var(--picker-border-color-error-default-open)))}:host([invalid]) #button.is-keyboardFocused:not(:disabled,.is-disabled),:host([invalid]) #button:not(:disabled,.is-disabled):focus-visible{border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-key-focus, var(--picker-border-color-error-key-focus)))}:host([pending]) #button .disclosure-icon{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-icon-color-disabled, var(--picker-icon-color-disabled)))}.icon{flex-shrink:0}.label{white-space:nowrap;font-size:var(--luzmo-picker-font-size, var(--picker-font-size));line-height:var(--luzmo-picker-line-height, var(--picker-line-height));font-weight:var(--luzmo-picker-font-weight, var(--picker-font-weight));text-overflow:ellipsis;text-align:start;flex:auto;overflow:hidden}.label.placeholder{font-weight:var(--luzmo-picker-placeholder-font-weight, var(--picker-font-weight));font-style:var(--luzmo-picker-placeholder-font-style, var(--picker-placeholder-font-style));transition:color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-in-out;color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}.label.placeholder:active{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-active, var(--picker-font-color-active)))}.disclosure-icon{vertical-align:top;transition:color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-out;margin-inline-start:var(--luzmo-picker-spacing-icon-to-disclosure-icon, var(--picker-spacing-icon-to-disclosure-icon));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-default, var(--picker-icon-color-default)));flex-shrink:0;display:inline-block;position:relative}.disclosure-icon:active{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-active, var(--picker-icon-color-active)))}luzmo-progress-circle,.validation-icon{margin-inline-start:var(--luzmo-picker-spacing-text-to-icon, var(--picker-spacing-text-to-icon))}.icon-container{display:flex;position:relative;height:100%;align-items:center;font-size:var(--luzmo-picker-disclosure-icon-size, var(--picker-disclosure-icon-size))}.icon-container.disclosure-icon{margin-inline-end:0}.label~.disclosure-icon{margin-inline-start:var(--luzmo-picker-spacing-text-to-icon, var(--picker-spacing-text-to-icon))}:host([quiet]) #button{inline-size:auto;min-inline-size:0;padding-inline:var(--luzmo-picker-spacing-edge-to-text-quiet, var(--picker-spacing-edge-to-text-quiet));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)));background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent);border:none;border-radius:0;box-shadow:none;margin-block-start:calc(var(--luzmo-picker-spacing-label-to-picker-quiet, var(--picker-spacing-label-to-picker-quiet)) + 1px)}:host([quiet]) #button.label-inline{margin-block-start:0}:host([quiet]) #button .disclosure-icon{margin-inline-end:var(--luzmo-picker-spacing-edge-to-disclosure-icon-quiet, var(--picker-spacing-edge-to-disclosure-icon-quiet))}:host([quiet]) #button:after{block-size:auto;inline-size:auto;border:none}@media (hover: hover){#button:hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover, var(--picker-font-color-hover)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-hover, var(--picker-background-color-hover)));border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-hover, var(--picker-border-color-hover)))}#button:hover .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-hover, var(--picker-icon-color-hover)))}:host([open]):not([quiet]) #button:not(:disabled,.is-disabled):hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover-open, var(--picker-font-color-hover-open)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-hover-open, var(--picker-background-color-hover-open)));border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-hover-open, var(--picker-border-color-hover-open)))}:host([open]) #button:not(:disabled,.is-disabled):hover .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-hover-open, var(--picker-icon-color-hover-open)))}:host([invalid]) #button:not(:disabled,.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-error-hover, var(--picker-border-color-error-hover)))}:host([invalid][open]) #button:not(:disabled,.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-error-hover-open, var(--picker-border-color-error-hover-open)))}.label.placeholder:hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover, var(--picker-font-color-hover)))}:host([quiet]) #button:hover{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)!important}}:host([quiet]) #button.is-keyboardFocused,:host([quiet]) #button:focus-visible{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)}:host([quiet]) #button.is-keyboardFocused:after,:host([quiet]) #button:focus-visible:after{box-shadow:0 var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) 0 0 var(--highcontrast-picker-focus-indicator-color, var(--luzmo-picker-focus-indicator-color, var(--picker-focus-indicator-color)));margin:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1) 0;border:none;border-radius:0}:host([quiet][open]) #button,:host([quiet][disabled]) #button#button,:host([quiet]) #button#button:disabled,:host([quiet]) #button:active{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)}.label-inline{vertical-align:top;display:inline-flex}:host([disabled]) #button,#button:disabled{cursor:default;background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-disabled, var(--picker-background-color-disabled)));border-color:#0000;border-color:var(--highcontrast-picker-border-color-disabled, transparent);color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-font-color-disabled, var(--picker-font-color-disabled)))}:host([disabled]) #button .icon,:host([disabled]) #button .disclosure-icon,:host([disabled]) #button .validation-icon,#button:disabled .icon,#button:disabled .disclosure-icon,#button:disabled .validation-icon{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-icon-color-disabled, var(--picker-icon-color-disabled)))}:host([disabled]) #button .label.placeholder,#button:disabled .label.placeholder{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-font-color-disabled, var(--picker-font-color-disabled)))}:host{--picker-box-shadow: 0px 1px 3px 0px rgba(var(--luzmo-border-color-rgb), .06);--picker-background-color-default: var(--luzmo-background-color);--picker-background-color-default-open: var(--luzmo-background-color-hover);--picker-background-color-active: var(--luzmo-background-color-down);--picker-background-color-hover: var(--luzmo-background-color-hover);--picker-background-color-hover-open: var(--luzmo-background-color-down);--picker-background-color-key-focus: var(--luzmo-background-color-down);--picker-border-color-default: var(--luzmo-border-color);--picker-border-color-default-open: var(--luzmo-border-color-hover);--picker-border-color-hover: var(--luzmo-border-color);--picker-border-color-hover-open: var(--luzmo-border-color-hover);--picker-border-color-active: var(--luzmo-border-color);--picker-border-color-key-focus: var(--luzmo-border-color);--picker-border-width: var(--luzmo-border-width);--picker-font-size: var(--luzmo-font-size);--picker-font-weight: var(--luzmo-font-weight);--picker-placeholder-font-style: var(--luzmo-font-style);--picker-line-height: var(--luzmo-line-height);--picker-block-size: 32px;--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon-inline-end: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-icon-to-disclosure-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-text-quiet: 0px;--picker-spacing-label-to-picker: 0px;--picker-spacing-label-to-picker-quiet: calc( -1 * var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon-quiet: 0px;--picker-animation-duration: var(--luzmo-animation-duration);--picker-font-color-default: var(--luzmo-font-color);--picker-font-color-default-open: var(--luzmo-font-color-hover);--picker-font-color-hover: var(--luzmo-font-color-hover);--picker-font-color-hover-open: var(--luzmo-font-color-down);--picker-font-color-active: var(--luzmo-font-color-focus);--picker-font-color-key-focus: var(--luzmo-font-color-focus);--picker-icon-color-default: var(--luzmo-font-color);--picker-icon-color-default-open: var(--luzmo-font-color-hover);--picker-icon-color-hover: var(--luzmo-font-color-hover);--picker-icon-color-hover-open: var(--luzmo-font-color-hover);--picker-icon-color-active: var(--luzmo-font-color-focus);--picker-icon-color-key-focus: var(--luzmo-font-color-focus);--picker-border-color-error-default: var(--luzmo-color-negative);--picker-border-color-error-default-open: var(--luzmo-color-negative-down);--picker-border-color-error-hover: var(--luzmo-color-negative-hover);--picker-border-color-error-hover-open: var(--luzmo-color-negative-down);--picker-border-color-error-active: var(--luzmo-color-negative-down);--picker-border-color-error-key-focus: var(--luzmo-color-negative-focus);--picker-icon-color-error: var(--luzmo-color-negative);--picker-background-color-disabled: var(--luzmo-background-color-disabled);--picker-font-color-disabled: var(--luzmo-color-disabled);--picker-icon-color-disabled: var(--luzmo-color-disabled);--picker-focus-indicator-gap: var(--luzmo-indicator-gap);--picker-focus-indicator-thickness: var(--luzmo-indicator-width);--picker-focus-indicator-color: var(--luzmo-indicator-color);--picker-disclosure-icon-size: var(--luzmo-font-size-s)}:host([size=s]){--picker-block-size: 28px;--picker-font-size: var(--luzmo-font-size-s);--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: var(--luzmo-spacing-3);--picker-spacing-text-to-icon: var(--luzmo-spacing-3);--picker-spacing-text-to-icon-inline-end: var(--luzmo-spacing-3);--picker-spacing-icon-to-disclosure-icon: var(--luzmo-spacing-3);--picker-spacing-label-to-picker-quiet: calc(-1 * var(--luzmo-spacing-3));--picker-spacing-edge-to-disclosure-icon: var(--luzmo-spacing-3);--picker-disclosure-icon-size: var(--luzmo-font-size-s)}:host([size=l]){--picker-block-size: 40px;--picker-font-size: var(--luzmo-font-size-l);--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: var(--luzmo-spacing-4);--picker-spacing-text-to-icon: var(--luzmo-spacing-4);--picker-spacing-text-to-icon-inline-end: var(--luzmo-spacing-4);--picker-spacing-icon-to-disclosure-icon: var(--luzmo-spacing-4);--picker-spacing-label-to-picker-quiet: calc(-1 * var(--luzmo-spacing-4));--picker-spacing-edge-to-disclosure-icon: var(--luzmo-spacing-4);--picker-disclosure-icon-size: var(--luzmo-font-size)}:host([size=xl]){--picker-block-size: 48px;--picker-font-size: var(--luzmo-font-size-xl);--picker-border-radius: var(--luzmo-border-radius-l);--picker-spacing-edge-to-text: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon-inline-end: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-icon-to-disclosure-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-label-to-picker-quiet: calc( -1 * var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-disclosure-icon-size: var(--luzmo-font-size-l)}:host([variant=highlight]) ::slotted(luzmo-menu-item[selected]){--menu-item-highlight-label-content-color: var(--luzmo-primary-inverse-color);--menu-checkmark-display: var(--menu-checkmark-display-hidden);padding-inline-start:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));background-color:var(--luzmo-menu-item-highlight-label-background-color, var(--menu-item-highlight-label-background-color, var(--luzmo-border-color)))}:host{display:inline-flex;vertical-align:top;max-inline-size:100%;inline-size:var(--luzmo-picker-inline-size, var(--picker-inline-size));min-inline-size:calc(var(--picker-minimum-width-multiplier) * var(--luzmo-picker-block-size, var(--picker-block-size)))}:host([quiet]){width:auto;min-width:0}:host([disabled]){pointer-events:none}#button{width:100%;min-width:100%;max-width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}.picker,.validation-icon{flex-shrink:0}luzmo-overlay{pointer-events:none}luzmo-menu{pointer-events:initial}:host>luzmo-menu{display:none}:host([focused]:not([quiet])) #button #label.placeholder{color:var(--picker-placeholder-text-color-key-focus, var(--alias-placeholder-text-color-hover))}#label.visually-hidden~.picker{margin-inline-start:auto}:host([focused]:not([quiet],[pending])) #button .picker{color:var(--picker-icon-color-key-focus, var(--alias-icon-color-focus))}.visually-hidden{border:0;clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}luzmo-overlay:not(:defined){display:none}#button.remove-focus-ring-safari-hack:focus-visible{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}#button.remove-focus-ring-safari-hack:after{border:none}#button.remove-focus-ring-safari-hack:focus-visible:after{box-shadow:none}#button.remove-focus-ring-safari-hack:active{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}';
var zt = /* @__PURE__ */ ((i) => (i[i.desktop = 0] = "desktop", i[i.mobile = 1] = "mobile", i))(zt || {});
class so {
  constructor(e, t) {
    this.target = e, this.host = t, this.preventNextToggle = "no", this.pointerdownState = !1, this.enterKeydownOn = null, this._open = !1, this.target = e, this.host = t, this.host.addController(this), this.init();
  }
  get activelyOpening() {
    return !1;
  }
  get open() {
    return this._open;
  }
  /**
   * Set `open`
   */
  set open(e) {
    if (this._open !== e) {
      if (this._open = e, this.overlay) {
        this.host.open = e;
        return;
      }
      customElements.whenDefined("luzmo-overlay").then(async () => {
        const { LuzmoOverlay: t } = await Promise.resolve().then(() => ot);
        this.overlay = new t(), this.host.open = !0, this.host.requestUpdate();
      }), Promise.resolve().then(() => ot);
    }
  }
  get overlay() {
    return this._overlay;
  }
  set overlay(e) {
    e && this.overlay !== e && (this._overlay = e, this.initOverlay());
  }
  releaseDescription() {
  }
  handleBeforetoggle(e) {
    var t;
    e.composedPath()[0] === e.target && (e.newState === "closed" && (this.preventNextToggle === "no" ? this.open = !1 : this.pointerdownState || (t = this.overlay) == null || t.manuallyKeepOpen()), this.open || (this.host.optionsMenu.updateSelectedItemIndex(), this.host.optionsMenu.closeDescendentOverlays()));
  }
  initOverlay() {
    this.overlay && (this.overlay.addEventListener("beforetoggle", (e) => {
      this.handleBeforetoggle(
        e
      );
    }), this.overlay.type = this.host.isMobile.matches ? "modal" : "auto", this.overlay.triggerElement = this.host, this.overlay.placement = this.host.isMobile.matches ? void 0 : this.host.placement, this.overlay.receivesFocus = "true", this.overlay.willPreventClose = this.preventNextToggle !== "no" && this.open, this.overlay.addEventListener(
      "slottable-request",
      this.host.handleSlottableRequest
    ));
  }
  handlePointerdown(e) {
  }
  handleButtonFocus(e) {
    this.preventNextToggle === "maybe" && e.relatedTarget === this.host.optionsMenu && (this.preventNextToggle = "yes");
  }
  handleActivate(e) {
  }
  /* c8 ignore next 3 */
  init() {
  }
  abort() {
    var e;
    this.releaseDescription(), (e = this.abortController) == null || e.abort();
  }
  hostConnected() {
    this.init();
  }
  hostDisconnected() {
    var e;
    (e = this.abortController) == null || e.abort();
  }
  hostUpdated() {
    this.overlay && this.host.dependencyManager.loaded && this.host.open !== this.overlay.open && (this.overlay.willPreventClose = this.preventNextToggle !== "no", this.overlay.open = this.host.open);
  }
}
class nn extends so {
  constructor() {
    super(...arguments), this.type = zt.desktop;
  }
  handlePointerdown(e) {
    if (e.button !== 0 || e.pointerType === "touch")
      return;
    this.pointerdownState = this.open, this.preventNextToggle = "maybe";
    let t = 0;
    const o = () => {
      cancelAnimationFrame(t), t = requestAnimationFrame(() => {
        document.removeEventListener("pointerup", o), document.removeEventListener("pointercancel", o), this.target.removeEventListener("click", o), requestAnimationFrame(() => {
          this.preventNextToggle = "no";
        });
      });
    };
    document.addEventListener("pointerup", o), document.addEventListener("pointercancel", o), this.target.addEventListener("click", o), this.handleActivate();
  }
  handleActivate(e) {
    this.enterKeydownOn && this.enterKeydownOn !== this.target || this.preventNextToggle !== "yes" && ((e == null ? void 0 : e.type) === "click" && this.open !== this.pointerdownState || this.host.toggle());
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener(
      "click",
      (o) => this.handleActivate(o),
      {
        signal: e
      }
    ), this.target.addEventListener(
      "pointerdown",
      (o) => this.handlePointerdown(o),
      { signal: e }
    ), this.target.addEventListener(
      "focus",
      (o) => this.handleButtonFocus(o),
      {
        signal: e
      }
    );
  }
}
const Ge = "remove-focus-ring-safari-hack";
class rn extends so {
  constructor() {
    super(...arguments), this.type = zt.mobile;
  }
  handleClick() {
    this.preventNextToggle === "no" && (this.open = !this.open), this.preventNextToggle = "no";
  }
  handlePointerdown() {
    this.preventNextToggle = this.open ? "yes" : "no", kt() && this.target.classList.add(Ge);
  }
  handleFocusOut() {
    this.host.open || kt() && this.target.classList.contains(Ge) && this.target.classList.remove(Ge);
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener("click", () => this.handleClick(), {
      signal: e
    }), this.target.addEventListener(
      "pointerdown",
      () => this.handlePointerdown(),
      { signal: e }
    ), this.target.addEventListener("focusout", () => this.handleFocusOut(), {
      signal: e
    });
  }
}
const Ot = {
  desktop: nn,
  mobile: rn
};
var sn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, E = (i, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? ln(e, t) : e, r = i.length - 1, s; r >= 0; r--)
    (s = i[r]) && (n = (o ? s(e, t, n) : s(n)) || n);
  return o && n && sn(e, t, n), n;
};
const an = () => b`
  <div class="disclosure-icon icon">
    ${qe(fo, { className: "indicator" })}
  </div>
`, cn = () => b`
  <div class="icon-container validation-icon icon">
    ${qe(vo)}
  </div>
`, $t = "option-picker";
class x extends Ne(Ft, {
  noDefaultSize: !0
}) {
  /**
   * Initializes the `PendingStateController` for the Picker component.
   * The `PendingStateController` manages the pending state of the Picker.
   */
  constructor() {
    super(), this.disabled = !1, this.focused = !1, this.invalid = !1, this.pending = !1, this.pendingLabel = "Pending", this.open = !1, this.readonly = !1, this.placement = "bottom-start", this.quiet = !1, this.value = "", this.selects = "single", this.dependencyManager = new it(this), this.isMobile = new wo(this, yo), this.listRole = "listbox", this.itemRole = "option", this.hasRenderedOverlay = !1, this._selfManageFocusElement = !1, this.deprecatedMenu = null, this.selectionPromise = Promise.resolve(), this.willManageSelection = !1, this.recentlyConnected = !1, this.enterKeydownOn = null, this.handleSlottableRequest = (e) => {
    }, this.applyFocusElementLabel = (e, t) => {
      this.appliedLabel = e, this.labelAlignment = t.sideAligned ? "inline" : void 0;
    }, this.handleKeydown = (e) => {
      this.focused = !0, !(e.code !== "ArrowDown" && e.code !== "ArrowUp") && (e.stopPropagation(), e.preventDefault(), this.toggle(!0));
    }, this.renderAngleIcon = () => an(), this.renderAlertIcon = () => cn(), this.handleEnterKeydown = (e) => {
      if (e.code === "Enter") {
        if (this.enterKeydownOn) {
          e.preventDefault();
          return;
        }
        this.enterKeydownOn = e.target, this.addEventListener(
          "keyup",
          (t) => {
            t.code === "Enter" && (this.enterKeydownOn = null);
          },
          { once: !0 }
        );
      }
    }, this.pendingStateController = new xo(this);
  }
  get selectedItem() {
    return this._selectedItem;
  }
  get selectedItemContent() {
    return this._selectedItemContent || { icon: [], content: [] };
  }
  get selfManageFocusElement() {
    return this._selfManageFocusElement;
  }
  get menuItems() {
    return this.optionsMenu.childItems;
  }
  set selectedItem(e) {
    if (this.selectedItemContent = e ? e.itemChildren : void 0, e === this.selectedItem)
      return;
    const t = this.selectedItem;
    this._selectedItem = e, this.requestUpdate("selectedItem", t);
  }
  get focusElement() {
    return this.open ? this.optionsMenu : this.button;
  }
  forceFocusVisible() {
    this.disabled || (this.focused = !0);
  }
  click() {
    this.disabled || this.toggle();
  }
  handleButtonBlur() {
    this.focused = !1;
  }
  focus(e) {
    super.focus(e), !this.disabled && this.focusElement && (this.focused = this.hasVisibleFocusInTree());
  }
  handleHelperFocus() {
    this.focused = !0, this.button.focus();
  }
  handleChange(e) {
    this.strategy && (this.strategy.preventNextToggle = "no");
    const t = e.target, [o] = t.selectedItems;
    e.stopPropagation(), e.cancelable ? this.setValueFromItem(o, e) : (this.open = !1, this.strategy && (this.strategy.open = !1));
  }
  handleButtonFocus(e) {
    var t;
    (t = this.strategy) == null || t.handleButtonFocus(e);
  }
  toggle(e) {
    this.readonly || this.pending || (this.open = e === void 0 ? !this.open : e, this.strategy && (this.strategy.open = this.open), this._selfManageFocusElement = this.open);
  }
  close() {
    this.readonly || this.strategy && (this.open = !1, this.strategy.open = !1);
  }
  bindEvents() {
    var e;
    (e = this.strategy) == null || e.abort(), this.strategy = this.isMobile.matches ? new Ot.mobile(this.button, this) : new Ot.desktop(this.button, this);
  }
  connectedCallback() {
    super.connectedCallback(), this.recentlyConnected = this.hasUpdated;
  }
  disconnectedCallback() {
    var e;
    this.close(), (e = this.strategy) == null || e.releaseDescription(), super.disconnectedCallback();
  }
  async setValueFromItem(e, t) {
    this.open = !1, this.strategy && (this.strategy.open = !1);
    const o = this.selectedItem, n = this.value;
    if (this.selectedItem = e, this.value = (e == null ? void 0 : e.value) ?? "", await this.updateComplete, !this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: !0,
        // Allow it to be prevented.
        cancelable: !0,
        composed: !0,
        detail: this.value
      })
    ) && this.selects) {
      t && t.preventDefault(), this.setMenuItemSelected(this.selectedItem, !1), o && this.setMenuItemSelected(o, !0), this.selectedItem = o, this.value = n, this.open = !0, this.strategy && (this.strategy.open = !0);
      return;
    } else if (!this.selects) {
      this.selectedItem = o, this.value = n;
      return;
    }
    o && this.setMenuItemSelected(o, !1), this.setMenuItemSelected(e, !!this.selects);
  }
  setMenuItemSelected(e, t) {
    this.selects != null && (e.selected = t);
  }
  get containerStyles() {
    return this.isMobile.matches ? {
      "--swc-menu-width": "100%"
    } : {};
  }
  set selectedItemContent(e) {
    if (e === this.selectedItemContent)
      return;
    const t = this.selectedItemContent;
    this._selectedItemContent = e, this.requestUpdate("selectedItemContent", t);
  }
  handleTooltipSlotchange(e) {
    this.tooltipEl = e.target.assignedElements()[0];
  }
  renderLabelContent(e) {
    return this.value && this.selectedItem ? e : b`
      <slot name="label" id="label">
        <span aria-hidden=${I(this.appliedLabel ? void 0 : "true")}>
          ${this.label}
        </span>
      </slot>
    `;
  }
  get buttonContent() {
    const e = {
      "visually-hidden": this.icons === "only" && !!this.value,
      placeholder: !this.value,
      label: !0
    }, t = this.appliedLabel || this.label;
    return [
      b`
        <div id="icon" ?hidden=${this.icons === "none"}>
          ${this.selectedItemContent.icon}
        </div>
        <div
          id=${I(this.value && this.selectedItem ? "label" : void 0)}
          class=${bo(e)}
        >
          ${this.renderLabelContent(this.selectedItemContent.content)}
        </div>
        ${this.value && this.selectedItem ? b`
              <div
                aria-hidden="true"
                class="visually-hidden"
                id="applied-label"
              >
                ${t}
                <slot name="label"></slot>
              </div>
            ` : b` <span hidden id="applied-label">${t}</span> `}
        ${this.invalid && !this.pending ? b` ${this.renderAlertIcon()} ` : Xe}
        ${this.pendingStateController.renderPendingState()}
        ${this.renderAngleIcon()}
        <slot
          aria-hidden="true"
          name="tooltip"
          id="tooltip"
          @slotchange=${this.handleTooltipSlotchange}
        ></slot>
      `
    ];
  }
  renderOverlay(e) {
    var o, n, r;
    if (((o = this.strategy) == null ? void 0 : o.overlay) === void 0)
      return e;
    const t = this.renderContainer(e);
    return co(t, (n = this.strategy) == null ? void 0 : n.overlay, {
      host: this
    }), (r = this.strategy) == null ? void 0 : r.overlay;
  }
  get renderDescriptionSlot() {
    return b`
      <div id=${$t}>
        <slot name="description"></slot>
      </div>
    `;
  }
  // a helper to throw focus to the button is needed because Safari
  // won't include buttons in the tab order even with tabindex="0"
  render() {
    return this.tooltipEl && (this.tooltipEl.disabled = this.open), b`
      <span
        id="focus-helper"
        tabindex=${this.focused || this.open ? "-1" : "0"}
        @focus=${this.handleHelperFocus}
        aria-describedby=${$t}
      ></span>
      <button
        aria-controls=${I(this.open ? "menu" : void 0)}
        aria-describedby="tooltip"
        aria-expanded=${this.open ? "true" : "false"}
        aria-haspopup="true"
        aria-labelledby="loader icon label applied-label"
        id="button"
        class=${I(
      this.labelAlignment ? `label-${this.labelAlignment}` : void 0
    )}
        @blur=${this.handleButtonBlur}
        @keydown=${{
      handleEvent: this.handleEnterKeydown,
      capture: !0
    }}
        ?disabled=${this.disabled}
        tabindex="-1"
      >
        ${this.buttonContent}
      </button>
      ${this.renderMenu} ${this.renderDescriptionSlot}
    `;
  }
  update(e) {
    var t, o;
    this.selects && (this.selects = "single"), e.has("disabled") && this.disabled && this.strategy && (this.open = !1, this.strategy.open = !1), e.has("pending") && this.pending && this.strategy && (this.open = !1, this.strategy.open = !1), e.has("value") && this.shouldScheduleManageSelection(), this.hasUpdated || (this.deprecatedMenu = this.querySelector(":scope > luzmo-menu"), (t = this.deprecatedMenu) == null || t.toggleAttribute("ignore", !0), (o = this.deprecatedMenu) == null || o.setAttribute("selects", "inherit")), super.update(e);
  }
  bindButtonKeydownListener() {
    this.button.addEventListener("keydown", this.handleKeydown);
  }
  updated(e) {
    super.updated(e), e.has("open") && (this.strategy.open = this.open);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.bindButtonKeydownListener(), this.bindEvents();
  }
  get dismissHelper() {
    return b`
      <div class="visually-hidden">
        <button
          tabindex="-1"
          aria-label="Dismiss"
          @click=${this.close}
        ></button>
      </div>
    `;
  }
  renderContainer(e) {
    const t = b`
      ${this.dismissHelper} ${e} ${this.dismissHelper}
    `;
    return this.dependencyManager.add("luzmo-popover"), import("../index-7JZnA3xb.js"), b`
      <luzmo-popover
        id="popover"
        size=${this.size}
        role="presentation"
        style=${Je(this.containerStyles)}
        placement=${this.placement}
      >
        ${t}
      </luzmo-popover>
    `;
  }
  get renderMenu() {
    const e = b`
      <luzmo-menu
        aria-labelledby="applied-label"
        @change=${this.handleChange}
        id="menu"
        @keydown=${{
      handleEvent: this.handleEnterKeydown,
      capture: !0
    }}
        @scroll=${this.onScroll}
        role=${this.listRole}
        .selects=${this.selects}
        .selected=${this.value ? [this.value] : []}
        size=${this.size}
        @luzmo-menu-item-added-or-updated=${this.shouldManageSelection}
      >
        <slot @slotchange=${this.shouldScheduleManageSelection}></slot>
      </luzmo-menu>
    `;
    return this.hasRenderedOverlay = this.hasRenderedOverlay || this.focused || this.open || !!this.deprecatedMenu, this.hasRenderedOverlay ? (this.dependencyManager.loaded && this.dependencyManager.add("luzmo-overlay"), this.renderOverlay(e)) : e;
  }
  shouldScheduleManageSelection(e) {
    !this.willManageSelection && (!e || e.target.getRootNode().host === this) && (this.willManageSelection = !0, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.manageSelection();
      });
    }));
  }
  shouldManageSelection() {
    this.willManageSelection || (this.willManageSelection = !0, this.manageSelection());
  }
  async manageSelection() {
    if (this.selects == null)
      return;
    this.selectionPromise = new Promise(
      (t) => this.selectionResolver = t
    );
    let e;
    await this.optionsMenu.updateComplete, this.recentlyConnected && (await new Promise((t) => requestAnimationFrame(() => t(!0))), this.recentlyConnected = !1), this.menuItems.forEach((t) => {
      this.value === t.value && !t.disabled ? e = t : t.selected = !1;
    }), e ? (e.selected = !!this.selects, this.selectedItem = e) : (this.value = "", this.selectedItem = void 0), this.open && (await this.optionsMenu.updateComplete, this.optionsMenu.updateSelectedItemIndex()), this.selectionResolver(), this.willManageSelection = !1;
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.selectionPromise, e;
  }
  onScroll() {
    this.dispatchEvent(
      new Event("scroll", {
        cancelable: !0,
        composed: !0
      })
    );
  }
}
E([
  ie()
], x.prototype, "appliedLabel", 2);
E([
  O("#button")
], x.prototype, "button", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "disabled", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "focused", 2);
E([
  p({ type: String, reflect: !0 })
], x.prototype, "icons", 2);
E([
  p({ type: String, reflect: !0 })
], x.prototype, "variant", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "invalid", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "pending", 2);
E([
  p({ type: String, attribute: "pending-label" })
], x.prototype, "pendingLabel", 2);
E([
  p()
], x.prototype, "label", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "open", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "readonly", 2);
E([
  ie()
], x.prototype, "labelAlignment", 2);
E([
  O("luzmo-menu")
], x.prototype, "optionsMenu", 2);
E([
  O("luzmo-overlay")
], x.prototype, "overlayElement", 2);
E([
  p()
], x.prototype, "placement", 2);
E([
  p({ type: Boolean, reflect: !0 })
], x.prototype, "quiet", 2);
E([
  p({ type: String })
], x.prototype, "value", 2);
E([
  p({ attribute: !1 })
], x.prototype, "selectedItem", 1);
E([
  ie()
], x.prototype, "selectedItemContent", 1);
class un extends x {
  constructor() {
    super(...arguments), this.handleKeydown = (e) => {
      const { code: t } = e;
      if (this.focused = !0, !t.startsWith("Arrow") || this.readonly || this.pending)
        return;
      if (t === "ArrowUp" || t === "ArrowDown") {
        this.toggle(!0), e.preventDefault();
        return;
      }
      e.preventDefault();
      const o = this.selectedItem ? this.menuItems.indexOf(this.selectedItem) : -1, n = o < 0 || t === "ArrowRight" ? 1 : -1;
      let r = o + n;
      for (; this.menuItems[r] && this.menuItems[r].disabled; )
        r += n;
      !this.menuItems[r] || this.menuItems[r].disabled || (!this.value || r !== o) && this.setValueFromItem(this.menuItems[r]);
    };
  }
  static get styles() {
    return [oe(on)];
  }
  get containerStyles() {
    const e = super.containerStyles;
    return this.quiet || (e["min-width"] = `${this.offsetWidth}px`), e;
  }
}
customElements.get("luzmo-picker") || customElements.define("luzmo-picker", un);
export {
  $t as DESCRIPTION_ID,
  un as LuzmoPicker,
  x as LuzmoPickerBase
};
