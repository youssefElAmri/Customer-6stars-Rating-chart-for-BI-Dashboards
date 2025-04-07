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
import { a as y, n as r } from "./sized-mixin-CRExaV2U.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C = { ATTRIBUTE: 1, CHILD: 2 }, P = (i) => (...e) => ({ _$litDirective$: i, values: e });
class M {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, a) {
    this._$Ct = e, this._$AM = t, this._$Ci = a;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
let u = !0;
try {
  document.body.querySelector(":focus-visible");
} catch {
  u = !1, Promise.resolve().then(() => g);
}
const m = (i) => {
  var e, t;
  const a = (n) => {
    if (n.shadowRoot == null || Object.hasOwn(n.dataset, "jsFocusVisible"))
      return () => {
      };
    if (self.applyFocusVisiblePolyfill)
      self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
    else {
      const h = () => {
        self.applyFocusVisiblePolyfill && n.shadowRoot && self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
      };
      return self.addEventListener(
        "focus-visible-polyfill-ready",
        h,
        { once: !0 }
      ), () => {
        self.removeEventListener(
          "focus-visible-polyfill-ready",
          h
        );
      };
    }
    return () => {
    };
  }, s = Symbol("endPolyfillCoordination");
  class o extends (t = i, e = s, t) {
    constructor() {
      super(...arguments), this[e] = null;
    }
    // Attempt to coordinate with the polyfill when connected to the
    // document:
    connectedCallback() {
      super.connectedCallback && super.connectedCallback(), u || requestAnimationFrame(() => {
        this[s] == null && (this[s] = a(this));
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), u || requestAnimationFrame(() => {
        this[s] != null && (this[s](), this[s] = null);
      });
    }
  }
  return o;
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusVisiblePolyfillMixin: m
}, Symbol.toStringTag, { value: "Module" }));
var x = Object.defineProperty, A = Object.getOwnPropertyDescriptor, d = (i, e, t, a) => {
  for (var s = a > 1 ? void 0 : a ? A(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (s = (a ? n(e, t, s) : n(s)) || s);
  return a && s && x(e, t, s), s;
};
function b() {
  return new Promise((i) => requestAnimationFrame(() => i()));
}
class f extends m(y) {
  constructor() {
    super(...arguments), this.disabled = !1, this.autofocus = !1, this._tabIndex = 0, this.manipulatingTabindex = !1, this.autofocusReady = Promise.resolve();
  }
  get tabIndex() {
    if (this.focusElement === this) {
      const t = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : Number.NaN;
      return Number.isNaN(t) ? -1 : t;
    }
    const e = Number.parseFloat(
      this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0"
    );
    return this.disabled || e < 0 ? -1 : this.focusElement ? this._tabIndex : e;
  }
  set tabIndex(e) {
    var t;
    if (this.manipulatingTabindex) {
      this.manipulatingTabindex = !1;
      return;
    }
    if (this.focusElement === this) {
      if (this.disabled)
        this._tabIndex = e;
      else if (e !== this._tabIndex) {
        this._tabIndex = e;
        const a = "" + e;
        this.manipulatingTabindex = !0, this.setAttribute("tabindex", a);
      }
      return;
    }
    if (e === -1 ? this.addEventListener(
      "pointerdown",
      this.onPointerdownManagementOfTabIndex
    ) : (this.manipulatingTabindex = !0, this.removeEventListener(
      "pointerdown",
      this.onPointerdownManagementOfTabIndex
    )), e === -1 || this.disabled) {
      if (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement)
        return;
      e === -1 ? (t = this.focusElement) == null || t.removeAttribute("tabindex") : (this._tabIndex = e, this.manageFocusElementTabindex(e));
      return;
    }
    this.setAttribute("focusable", ""), this.hasAttribute("tabindex") ? this.removeAttribute("tabindex") : this.manipulatingTabindex = !1, this._tabIndex = e, this.manageFocusElementTabindex(e);
  }
  onPointerdownManagementOfTabIndex() {
    this.tabIndex === -1 && setTimeout(() => {
      this.tabIndex = 0, this.focus({ preventScroll: !0 }), this.tabIndex = -1;
    });
  }
  async manageFocusElementTabindex(e) {
    this.focusElement || await this.updateComplete, e === null ? this.focusElement.removeAttribute("tabindex") : this.focusElement !== this && (this.focusElement.tabIndex = e);
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
  focus(e) {
    this.disabled || !this.focusElement || (this.focusElement === this ? Reflect.apply(HTMLElement.prototype.focus, this, [e]) : this.focusElement.focus(e));
  }
  blur() {
    const e = this.focusElement || this;
    e === this ? HTMLElement.prototype.blur.apply(this) : e.blur();
  }
  click() {
    if (this.disabled)
      return;
    const e = this.focusElement || this;
    e === this ? HTMLElement.prototype.click.apply(this) : e.click();
  }
  manageAutoFocus() {
    this.autofocus && (this.dispatchEvent(
      new KeyboardEvent("keydown", {
        code: "Tab"
      })
    ), this.focusElement.focus());
  }
  firstUpdated(e) {
    super.firstUpdated(e), (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") && this.setAttribute("focusable", "");
  }
  update(e) {
    e.has("disabled") && this.handleDisabledChanged(
      this.disabled,
      e.get("disabled")
    ), super.update(e);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.blur();
  }
  async handleDisabledChanged(e, t) {
    const a = () => this.focusElement !== this && this.focusElement.disabled !== void 0;
    e ? (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), await this.updateComplete, a() ? this.focusElement.disabled = !0 : this.setAttribute("aria-disabled", "true")) : t && (this.manipulatingTabindex = !0, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, a() ? this.focusElement.disabled = !1 : this.removeAttribute("aria-disabled"));
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.autofocusReady, e;
  }
  connectedCallback() {
    super.connectedCallback(), this.autofocus && (this.autofocusReady = new Promise(async (e) => {
      await b(), await b(), e();
    }), this.updateComplete.then(() => {
      this.manageAutoFocus();
    }));
  }
}
d([
  r({ type: Boolean, reflect: !0 })
], f.prototype, "disabled", 2);
d([
  r({ type: Boolean })
], f.prototype, "autofocus", 2);
d([
  r({ type: Number })
], f.prototype, "tabIndex", 1);
function l(i) {
  return typeof window < "u" && window.navigator != null ? i.test(window.navigator.userAgent) : !1;
}
function c(i) {
  return typeof window < "u" && window.navigator != null ? (
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    i.test(window.navigator.platform)
  ) : !1;
}
function p() {
  return c(/^Mac/);
}
function E() {
  return c(/^iPhone/);
}
function v() {
  return c(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  p() && navigator.maxTouchPoints > 1;
}
function w() {
  return E() || v();
}
function I() {
  return p() || w();
}
function _() {
  return l(/Chrome/);
}
function O() {
  return l(/AppleWebKit/) && !_();
}
function F() {
  return l(/Seamonkey/);
}
function $() {
  return l(/Firefox/) && !F();
}
function k() {
  return l(/Android/);
}
export {
  m as F,
  f as a,
  E as b,
  v as c,
  w as d,
  I as e,
  _ as f,
  O as g,
  F as h,
  p as i,
  $ as j,
  k,
  P as l,
  M as m,
  C as t
};
