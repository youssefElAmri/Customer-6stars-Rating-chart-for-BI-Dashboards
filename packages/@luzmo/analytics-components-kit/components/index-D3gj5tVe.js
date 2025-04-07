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
import { q as De, v as Fe, k as ge, H as A, p as $t, h as fe, u as mt, R as x, c as gt, b as ve, w as ye } from "./get-css-variable-Cb4e-hdr.js";
import { _ as Bt, $ as Ne, s as qe, u as Nt, a as Mt, d as He, h as _e, n as ft } from "./state-CYxk12SV-BOqaoLNO.js";
import { a as Be, w as Me, C as Ie } from "./async-directive-DWRUSKKF-DBmP02pF.js";
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
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function We(e) {
  return (t, n) => {
    const { slot: o, selector: i } = e ?? {}, s = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return De(t, n, { get() {
      var l;
      const r = (l = this.renderRoot) == null ? void 0 : l.querySelector(s), a = (r == null ? void 0 : r.assignedElements(e)) ?? [];
      return i === void 0 ? a : a.filter((c) => c.matches(i));
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
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const be = "important", Ue = " !" + be, re = Bt(class extends Ne {
  constructor(e) {
    var t;
    if (super(e), e.type !== qe.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, n) => {
      const o = e[n];
      return o == null ? t : t + `${n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`;
    }, "");
  }
  update(e, [t]) {
    const { style: n } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const o of this.ft) t[o] == null && (this.ft.delete(o), o.includes("-") ? n.removeProperty(o) : n[o] = null);
    for (const o in t) {
      const i = t[o];
      if (i != null) {
        this.ft.add(o);
        const s = typeof i == "string" && i.endsWith(Ue);
        o.includes("-") || s ? n.setProperty(o, s ? i.slice(0, -11) : i, s ? be : "") : n[o] = i;
      }
    }
    return Fe;
  }
});
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
class we extends Event {
  constructor(t, n, o) {
    super("slottable-request", {
      bubbles: !1,
      cancelable: !0,
      composed: !1
    }), this.name = t, this.data = n, this.slotName = o === void 0 ? t : `${t}.${o}`;
  }
}
const St = Symbol("remove-slottable-request");
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
function Ve(e, t, n = []) {
  for (const [o, i] of t.entries()) {
    const s = e[o], l = s.parentElement || s.getRootNode();
    n[o] && n[o](i), l && l !== s && s.replaceWith(i), delete e[o];
  }
  return t;
}
const je = (e, t, {
  position: n,
  prepareCallback: o
} = { position: "beforeend" }) => {
  let { length: i } = e;
  if (i === 0)
    return () => e;
  let s = 1, l = 0;
  (n === "afterbegin" || n === "afterend") && (s = -1, l = i - 1);
  const r = new Array(i), a = new Array(i), c = document.createComment(
    "placeholder for reparented element"
  );
  do {
    const h = e[l];
    o && (a[l] = o(h)), r[l] = c.cloneNode();
    const d = h.parentElement || h.getRootNode();
    d && d !== h && d.replaceChild(r[l], h), t.insertAdjacentElement(n, h), l += s;
  } while (--i > 0);
  return function() {
    return Ve(r, e, a);
  };
}, Ke = 1e3, Je = 1e3;
class Xe {
  constructor(t = {}) {
    this.warmUpDelay = Ke, this.coolDownDelay = Je, this.isWarm = !1, this.timeout = 0, Object.assign(this, t);
  }
  openTimer(t) {
    if (this.cancelCooldownTimer(), !this.component || t !== this.component)
      return this.component && (this.close(this.component), this.cancelCooldownTimer()), this.component = t, this.isWarm ? Promise.resolve(!1) : (this.promise = new Promise((n) => {
        this.resolve = n, this.timeout = window.setTimeout(() => {
          this.resolve && (this.resolve(!1), this.isWarm = !0);
        }, this.warmUpDelay);
      }), this.promise);
    if (this.promise)
      return this.promise;
    throw new Error("Inconsistent state");
  }
  close(t) {
    this.component && this.component === t && (this.resetCooldownTimer(), this.timeout > 0 && (clearTimeout(this.timeout), this.timeout = 0), this.resolve && (this.resolve(!0), delete this.resolve), delete this.promise, delete this.component);
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
const lt = new Xe(), j = () => {
}, vt = (e, t, n) => {
  const o = new AbortController(), i = /* @__PURE__ */ new Map(), s = () => {
    o.abort(), n();
  };
  let l, r;
  const a = requestAnimationFrame(() => {
    l = requestAnimationFrame(() => {
      r = requestAnimationFrame(() => {
        s();
      });
    });
  }), c = (d) => {
    d.target === e && (i.set(
      d.propertyName,
      i.get(d.propertyName) - 1
    ), i.get(d.propertyName) || i.delete(d.propertyName), i.size === 0 && s());
  }, h = (d) => {
    d.target === e && (i.has(d.propertyName) || i.set(d.propertyName, 0), i.set(
      d.propertyName,
      i.get(d.propertyName) + 1
    ), cancelAnimationFrame(a), cancelAnimationFrame(l), cancelAnimationFrame(r));
  };
  e.addEventListener("transitionrun", h, {
    signal: o.signal
  }), e.addEventListener("transitionend", c, {
    signal: o.signal
  }), e.addEventListener("transitioncancel", c, {
    signal: o.signal
  }), t();
};
function T() {
  return new Promise((e) => requestAnimationFrame(() => e()));
}
class G extends ge {
  constructor() {
    super(...arguments), this.dispose = j, this.offset = 0, this.willPreventClose = !1;
  }
  applyFocus(t, n) {
  }
  /* c8 ignore next 6 */
  get delayed() {
    return !1;
  }
  set delayed(t) {
  }
  /* c8 ignore next 6 */
  get disabled() {
    return !1;
  }
  set disabled(t) {
  }
  get elementResolver() {
    return this._elementResolver;
  }
  set elementResolver(t) {
    this._elementResolver = t;
  }
  /* c8 ignore next 3 */
  ensureOnDOM(t) {
  }
  /* c8 ignore next 5 */
  makeTransition(t) {
    return null;
  }
  manageDelay(t) {
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
  set open(t) {
  }
  get placementController() {
    return this._placementController;
  }
  set placementController(t) {
    this._placementController = t;
  }
  requestSlottable() {
  }
  returnFocus() {
  }
  /* c8 ignore next 6 */
  get state() {
    return "closed";
  }
  set state(t) {
  }
  /* c8 ignore next 3 */
  manuallyKeepOpen() {
  }
  static update() {
    const t = new CustomEvent("luzmo-update-overlays", {
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    document.dispatchEvent(t);
  }
  static async open(t, n, o, i) {
    await Promise.resolve().then(() => kt);
    const s = arguments.length === 2, l = o || t, r = new this();
    let a = !1;
    const c = je([l], r, {
      position: "beforeend",
      prepareCallback: (d) => {
        const p = d.slot;
        return d.removeAttribute("slot"), () => {
          d.slot = p;
        };
      }
    });
    if (r.dispose = () => {
      r.addEventListener("luzmo-closed", () => {
        a || (c(), a = !0), requestAnimationFrame(() => {
          r.remove();
        });
      }), r.open = !1, r.dispose = j;
    }, !s && l && i) {
      const d = t, p = n, u = i;
      return G.applyOptions(r, {
        ...u,
        delayed: u.delayed || l.hasAttribute("delayed"),
        trigger: u.virtualTrigger || d,
        type: p === "modal" ? "modal" : p === "hover" ? "hint" : "auto"
      }), d.after(r), await r.updateComplete, r.open = !0, r.dispose;
    }
    const h = n;
    return r.append(l), G.applyOptions(r, {
      ...h,
      delayed: h.delayed || l.hasAttribute("delayed")
    }), r.updateComplete.then(() => {
      r.open = !0;
    }), r;
  }
  static applyOptions(t, n) {
    t.delayed = !!n.delayed, t.receivesFocus = n.receivesFocus ?? "auto", t.triggerElement = n.trigger || null, t.type = n.type || "modal", t.offset = n.offset ?? 0, t.placement = n.placement, t.willPreventClose = !!n.notImmediatelyClosable;
  }
}
const It = (e) => e.querySelector(
  mt
), Wt = (e) => e.assignedElements().find((t) => t.matches(mt));
class Ut extends Event {
  constructor() {
    super("beforetoggle", {
      bubbles: !1,
      composed: !1
    }), this.currentState = "open", this.newState = "closed";
  }
}
class Vt extends Event {
  constructor() {
    super("beforetoggle", {
      bubbles: !1,
      composed: !1
    }), this.currentState = "closed", this.newState = "open";
  }
}
class F extends Event {
  constructor(t, n, {
    publish: o,
    interaction: i,
    reason: s
  }) {
    super(t, {
      bubbles: o,
      composed: o
    }), this.overlay = n, this.detail = {
      interaction: i,
      reason: s
    };
  }
}
class ct {
  constructor(t, n) {
    this.x = 0, this.y = 0, this.x = t, this.y = n;
  }
  updateBoundingClientRect(t, n) {
    this.x = t, this.y = n, G.update();
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
function Ye(e) {
  class t extends e {
    async manageDialogOpen() {
      const o = this.open;
      if (await T(), await this.managePosition(), this.open !== o)
        return;
      const i = await this.dialogMakeTransition(o);
      this.open === o && await this.dialogApplyFocus(o, i);
    }
    dialogMakeTransition(o) {
      let i = null;
      const s = (r, a) => () => {
        if (r.open = o, !o) {
          const h = () => {
            r.removeEventListener("close", h);
          };
          r.addEventListener("close", h);
        }
        if (a > 0)
          return;
        const c = o ? Vt : Ut;
        this.dispatchEvent(new c()), o && (r.matches(mt) && (i = r), i = i || It(r), i || r.querySelectorAll("slot").forEach((h) => {
          i || (i = Wt(h));
        }), !(!this.isConnected || this.dialogEl.open) && this.dialogEl.showModal());
      }, l = (r, a) => () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (a > 0) {
          r.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !1
            })
          );
          return;
        }
        if (!this.isConnected || o !== this.open)
          return;
        const h = async () => {
          const d = this.triggerElement instanceof ct;
          this.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: d
            })
          ), r.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !1
            })
          ), this.triggerElement && !d && this.triggerElement.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !0
            })
          ), this.state = o ? "opened" : "closed", this.returnFocus(), await T(), await T(), o === this.open && o === !1 && this.requestSlottable();
        };
        !o && this.dialogEl.open ? (this.dialogEl.addEventListener(
          "close",
          () => {
            h();
          },
          { once: !0 }
        ), this.dialogEl.close()) : h();
      };
      return this.elements.forEach((r, a) => {
        vt(r, s(r, a), l(r, a));
      }), i;
    }
    dialogApplyFocus(o, i) {
      this.applyFocus(o, i);
    }
  }
  return t;
}
function Ge(e) {
  class t extends e {
    async managePopoverOpen() {
      await this.managePosition();
    }
    async manageDelay(o) {
      if (o === !1 || o !== this.open) {
        lt.close(this);
        return;
      }
      this.delayed && await lt.openTimer(this) && (this.open = !o);
    }
    ensureOnDOM(o) {
      document.body.offsetHeight;
    }
    makeTransition(o) {
      if (this.open !== o)
        return null;
      let i = null;
      const s = (r, a) => () => {
        if (o === this.open) {
          if (r.open = o, a === 0) {
            const c = o ? Vt : Ut;
            this.dispatchEvent(new c());
          }
          o !== !0 || (r.matches(mt) && (i = r), i = i || It(r), i) || r.querySelectorAll("slot").forEach((c) => {
            i || (i = Wt(c));
          });
        }
      }, l = (r, a) => async () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (r.dispatchEvent(
          new F(c, this, {
            interaction: this.type
          })
        ), a > 0)
          return;
        const h = this.triggerElement instanceof ct;
        this.dispatchEvent(
          new F(c, this, {
            interaction: this.type,
            publish: h
          })
        ), this.triggerElement && !h && this.triggerElement.dispatchEvent(
          new F(c, this, {
            interaction: this.type,
            publish: !0
          })
        ), this.state = o ? "opened" : "closed", this.returnFocus(), await T(), await T(), o === this.open && o === !1 && this.requestSlottable();
      };
      return this.elements.forEach((r, a) => {
        vt(r, s(r, a), l(r, a));
      }), i;
    }
  }
  return t;
}
const Ze = CSS.supports("(overlay: auto)");
function le(e) {
  let t = !1;
  try {
    t = e.matches(":popover-open");
  } catch {
  }
  let n = !1;
  try {
    n = e.matches(":open");
  } catch {
  }
  return t || n;
}
function Qe(e) {
  class t extends e {
    async manageDelay(o) {
      if (o === !1 || o !== this.open) {
        lt.close(this);
        return;
      }
      this.delayed && await lt.openTimer(this) && (this.open = !o);
    }
    /**
     * A popover should be hidden _after_ it is no longer on top-layer because
     * the position metrics will have changed from when it was originally positioned.
     */
    shouldHidePopover(o) {
      if (o && this.open !== o)
        return;
      const i = async ({
        newState: s
      } = {}) => {
        s !== "open" && await this.placementController.resetOverlayPosition();
      };
      if (!le(this.dialogEl)) {
        i();
        return;
      }
      this.dialogEl.addEventListener("toggle", i, {
        once: !0
      });
    }
    shouldShowPopover(o) {
      let i = !1;
      try {
        i = this.dialogEl.matches(":popover-open");
      } catch {
      }
      let s = !1;
      try {
        s = this.dialogEl.matches(":open");
      } catch {
      }
      o && this.open === o && !i && !s && this.isConnected && (this.dialogEl.showPopover(), this.managePosition());
    }
    async ensureOnDOM(o) {
      await T(), Ze || await this.shouldHidePopover(o), this.shouldShowPopover(o), await T();
    }
    makeTransition(o) {
      if (this.open !== o)
        return null;
      let i = null;
      const s = (r, a) => () => {
        if (r.open = o, a === 0) {
          const c = o ? Vt : Ut;
          this.dispatchEvent(new c());
        }
        !o || (r.matches(mt) && (i = r), i = i || It(r), i) || r.querySelectorAll("slot").forEach((c) => {
          i || (i = Wt(c));
        });
      }, l = (r, a) => () => {
        if (this.open !== o)
          return;
        const c = o ? "luzmo-opened" : "luzmo-closed";
        if (a > 0) {
          r.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !1
            })
          );
          return;
        }
        const h = async () => {
          if (this.open !== o)
            return;
          await T();
          const p = this.triggerElement instanceof ct;
          this.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: p
            })
          ), r.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !1
            })
          ), this.triggerElement && !p && this.triggerElement.dispatchEvent(
            new F(c, this, {
              interaction: this.type,
              publish: !0
            })
          ), this.state = o ? "opened" : "closed", this.returnFocus(), await T(), await T(), o === this.open && o === !1 && this.requestSlottable();
        };
        if (this.open !== o)
          return;
        const d = le(this.dialogEl);
        o !== !0 && d && this.isConnected ? (this.dialogEl.addEventListener(
          "beforetoggle",
          () => {
            h();
          },
          { once: !0 }
        ), this.dialogEl.hidePopover()) : h();
      };
      return this.elements.forEach((r, a) => {
        vt(r, s(r, a), l(r, a));
      }), i;
    }
  }
  return t;
}
const to = "showPopover" in document.createElement("div");
class eo {
  constructor() {
    this.root = document.body, this.stack = [], this.handlePointerdown = (t) => {
      this.pointerdownPath = t.composedPath(), this.lastOverlay = this.stack.at(-1);
    }, this.handlePointerup = () => {
      const t = this.pointerdownPath;
      if (this.pointerdownPath = void 0, this.stack.length === 0 || !(t != null && t.length))
        return;
      const n = this.lastOverlay;
      this.lastOverlay = void 0;
      const o = this.stack.length - 1, i = this.stack.filter((s, l) => !t.find(
        (r) => (
          // The Overlay is in the stack
          r === s || // The Overlay trigger is in the stack and the Overlay is a "hint"
          r === (s == null ? void 0 : s.triggerElement) && (s == null ? void 0 : s.type) === "hint" || // The last Overlay in the stack is not the last Overlay at `pointerdown` time and has a
          // `triggerInteraction` of "longpress", meaning it was opened by this poitner interaction
          l === o && s !== n && s.triggerInteraction === "longpress"
        )
      ) && !s.shouldPreventClose() && s.type !== "manual" && // Don't close if this overlay is modal and not on top of the overlay stack.
      !(s.type === "modal" && n !== s));
      i.reverse(), i.forEach((s) => {
        this.closeOverlay(s);
        let l = s.parentOverlayToForceClose;
        for (; l; )
          this.closeOverlay(l), l = l.parentOverlayToForceClose;
      });
    }, this.handleBeforetoggle = (t) => {
      const { target: n, newState: o } = t;
      o !== "open" && this.closeOverlay(n);
    }, this.handleKeydown = (t) => {
      if (t.code !== "Escape" || this.stack.length === 0)
        return;
      const n = this.stack.at(-1);
      if ((n == null ? void 0 : n.type) === "page") {
        t.preventDefault();
        return;
      }
      to || (n == null ? void 0 : n.type) !== "manual" && n && this.closeOverlay(n);
    }, this.bindEvents();
  }
  get document() {
    return this.root.ownerDocument || document;
  }
  bindEvents() {
    this.document.addEventListener("pointerdown", this.handlePointerdown), this.document.addEventListener("pointerup", this.handlePointerup), this.document.addEventListener("keydown", this.handleKeydown);
  }
  closeOverlay(t) {
    const n = this.stack.indexOf(t);
    n !== -1 && this.stack.splice(n, 1), t.open = !1;
  }
  /**
   * Get an array of Overlays that all share the same trigger element.
   *
   * @param triggerElement {HTMLELement}
   * @returns
   */
  overlaysByTriggerElement(t) {
    return this.stack.filter(
      (n) => n.triggerElement === t
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
  add(t) {
    if (this.stack.includes(t)) {
      const n = this.stack.indexOf(t);
      n !== -1 && (this.stack.splice(n, 1), this.stack.push(t));
      return;
    }
    if (t.type === "auto" || t.type === "modal" || t.type === "page") {
      const n = "luzmo-overlay-query-path", o = new Event(n, {
        composed: !0,
        bubbles: !0
      });
      t.addEventListener(
        n,
        (i) => {
          const s = i.composedPath();
          this.stack.forEach((l) => {
            !s.find((r) => r === l) && l.type !== "manual" && l.type !== "modal" && this.closeOverlay(l);
          });
        },
        { once: !0 }
      ), t.dispatchEvent(o);
    } else if (t.type === "hint") {
      if (this.stack.some(
        (n) => n.type !== "manual" && n.triggerElement && n.triggerElement === t.triggerElement
      )) {
        t.open = !1;
        return;
      }
      this.stack.forEach((n) => {
        n.type === "hint" && this.closeOverlay(n);
      });
    }
    requestAnimationFrame(() => {
      this.stack.push(t), t.addEventListener("beforetoggle", this.handleBeforetoggle, {
        once: !0
      });
    });
  }
  remove(t) {
    this.closeOverlay(t);
  }
}
const ae = new eo(), oo = ':host{display:contents;pointer-events:none;--luzmo-overlay-animation-distance: .5rem}:host(:has(> luzmo-tooltip)){--luzmo-overlay-animation-distance: var( --luzmo-tooltip-animation-distance, 4px )}.dialog{margin:0;border:0;background:none;padding:0;position:fixed;overflow:visible;opacity:1!important;box-sizing:border-box;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);max-width:calc(100vw - 16px);height:auto;inset:auto;top:0;left:0;display:flex;--luzmo-overlay-open: true}.dialog:not([is-visible]){display:none}.dialog:focus{outline:none}dialog:modal{--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}:host(:not([open])) .dialog{--luzmo-overlay-open: false}.dialog::backdrop{display:none}.dialog:before{position:absolute;top:-999em;right:-999em;bottom:-999em;left:-999em;content:"";pointer-events:auto!important}.dialog:not(.not-immediately-closable):before{display:none}.dialog>div{width:100%}::slotted(*){pointer-events:auto;visibility:visible!important}::slotted(luzmo-popover){position:static}.dialog:not([actual-placement])[placement*=top]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:var(--luzmo-overlay-animation-distance)}.dialog:not([actual-placement])[placement*=right]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=bottom]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=left]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:var(--luzmo-overlay-animation-distance)}.dialog[actual-placement*=top]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:var(--luzmo-overlay-animation-distance)}.dialog[actual-placement*=right]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog[actual-placement*=bottom]{padding-block:var(--luzmo-overlay-animation-distance);margin-top:calc(-1 * var(--luzmo-overlay-animation-distance))}.dialog[actual-placement*=left]{padding-inline:var(--luzmo-overlay-animation-distance);margin-left:var(--luzmo-overlay-animation-distance)}slot[name=longpress-describedby-descriptor]{display:none}@supports selector(:open){.dialog{opacity:0}.dialog:open{opacity:1;--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}}@supports selector(:popover-open){.dialog{opacity:0}.dialog:popover-open{opacity:1;--luzmo-popover-filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15))}}@supports (overlay: auto){.dialog{display:none;transition:all var(--luzmo-overlay-animation-duration, .13s),translate 0s,display var(--luzmo-overlay-animation-duration, .13s);transition-behavior:allow-discrete}.dialog:popover-open,.dialog:modal{display:flex}}@supports (not selector(:open)) and (not selector(:popover-open)){:host:not([open]) .dialog{pointer-events:none}.dialog[actual-placement]{z-index:calc(var(--luzmo-overlay-z-index-base, 1000) + var(--luzmo-overlay-open-count))}}', Z = Math.min, R = Math.max, Ot = Math.round, xt = Math.floor, M = (e) => ({
  x: e,
  y: e
}), no = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, io = {
  start: "end",
  end: "start"
};
function qt(e, t, n) {
  return R(e, Z(t, n));
}
function ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Q(e) {
  return e.split("-")[0];
}
function dt(e) {
  return e.split("-")[1];
}
function xe(e) {
  return e === "x" ? "y" : "x";
}
function jt(e) {
  return e === "y" ? "height" : "width";
}
function et(e) {
  return ["top", "bottom"].includes(Q(e)) ? "y" : "x";
}
function Kt(e) {
  return xe(et(e));
}
function so(e, t, n) {
  n === void 0 && (n = !1);
  const o = dt(e), i = Kt(e), s = jt(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Pt(l)), [l, Pt(l)];
}
function ro(e) {
  const t = Pt(e);
  return [Ht(e), t, Ht(t)];
}
function Ht(e) {
  return e.replace(/start|end/g, (t) => io[t]);
}
function lo(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function ao(e, t, n, o) {
  const i = dt(e);
  let s = lo(Q(e), n === "start", o);
  return i && (s = s.map((l) => l + "-" + i), t && (s = s.concat(s.map(Ht)))), s;
}
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => no[t]);
}
function co(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ee(e) {
  return typeof e != "number" ? co(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: i
  } = e;
  return {
    width: o,
    height: i,
    top: n,
    left: t,
    right: t + o,
    bottom: n + i,
    x: t,
    y: n
  };
}
function ce(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const s = et(t), l = Kt(t), r = jt(l), a = Q(t), c = s === "y", h = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, p = o[r] / 2 - i[r] / 2;
  let u;
  switch (a) {
    case "top":
      u = {
        x: h,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: d
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (dt(t)) {
    case "start":
      u[l] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      u[l] += p * (n && c ? -1 : 1);
      break;
  }
  return u;
}
const ho = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: l
  } = n, r = s.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: h,
    y: d
  } = ce(c, o, a), p = o, u = {}, m = 0;
  for (let g = 0; g < r.length; g++) {
    const {
      name: f,
      fn: v
    } = r[g], {
      x: y,
      y: b,
      data: w,
      reset: E
    } = await v({
      x: h,
      y: d,
      initialPlacement: o,
      placement: p,
      strategy: i,
      middlewareData: u,
      rects: c,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = y ?? h, d = b ?? d, u = {
      ...u,
      [f]: {
        ...u[f],
        ...w
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (c = E.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : E.rects), {
      x: h,
      y: d
    } = ce(c, p, a)), g = -1);
  }
  return {
    x: h,
    y: d,
    placement: p,
    strategy: i,
    middlewareData: u
  };
};
async function Jt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: l,
    elements: r,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: u = 0
  } = ht(t, e), m = Ee(u), g = r[p ? d === "floating" ? "reference" : "floating" : d], f = Tt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), v = d === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), b = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Tt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: r,
    rect: v,
    offsetParent: y,
    strategy: a
  }) : v);
  return {
    top: (f.top - w.top + m.top) / b.y,
    bottom: (w.bottom - f.bottom + m.bottom) / b.y,
    left: (f.left - w.left + m.left) / b.x,
    right: (w.right - f.right + m.right) / b.x
  };
}
const uo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: l,
      elements: r,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = ht(e, t) || {};
    if (c == null)
      return {};
    const d = Ee(h), p = {
      x: n,
      y: o
    }, u = Kt(i), m = jt(u), g = await l.getDimensions(c), f = u === "y", v = f ? "top" : "left", y = f ? "bottom" : "right", b = f ? "clientHeight" : "clientWidth", w = s.reference[m] + s.reference[u] - p[u] - s.floating[m], E = p[u] - s.reference[u], S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
    let $ = S ? S[b] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(S))) && ($ = r.floating[b] || s.floating[m]);
    const U = w / 2 - E / 2, H = $ / 2 - g[m] / 2 - 1, D = Z(d[v], H), K = Z(d[y], H), _ = D, J = $ - g[m] - K, O = $ / 2 - g[m] / 2 + U, it = qt(_, O, J), V = !a.arrow && dt(i) != null && O !== it && s.reference[m] / 2 - (O < _ ? D : K) - g[m] / 2 < 0, B = V ? O < _ ? O - _ : O - J : 0;
    return {
      [u]: p[u] + B,
      data: {
        [u]: it,
        centerOffset: O - it - B,
        ...V && {
          alignmentOffset: B
        }
      },
      reset: V
    };
  }
}), po = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: l,
        initialPlacement: r,
        platform: a,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...f
      } = ht(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const v = Q(i), y = et(r), b = Q(r) === r, w = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), E = p || (b || !g ? [Pt(r)] : ro(r)), S = m !== "none";
      !p && S && E.push(...ao(r, g, m, w));
      const $ = [r, ...E], U = await Jt(t, f), H = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (h && H.push(U[v]), d) {
        const O = so(i, l, w);
        H.push(U[O[0]], U[O[1]]);
      }
      if (D = [...D, {
        placement: i,
        overflows: H
      }], !H.every((O) => O <= 0)) {
        var K, _;
        const O = (((K = s.flip) == null ? void 0 : K.index) || 0) + 1, it = $[O];
        if (it)
          return {
            data: {
              index: O,
              overflows: D
            },
            reset: {
              placement: it
            }
          };
        let V = (_ = D.filter((B) => B.overflows[0] <= 0).sort((B, X) => B.overflows[1] - X.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!V)
          switch (u) {
            case "bestFit": {
              var J;
              const B = (J = D.filter((X) => {
                if (S) {
                  const Y = et(X.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((Y) => Y > 0).reduce((Y, $e) => Y + $e, 0)]).sort((X, Y) => X[1] - Y[1])[0]) == null ? void 0 : J[0];
              B && (V = B);
              break;
            }
            case "initialPlacement":
              V = r;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function mo(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Q(n), r = dt(n), a = et(n) === "y", c = ["left", "top"].includes(l) ? -1 : 1, h = s && a ? -1 : 1, d = ht(t, e);
  let {
    mainAxis: p,
    crossAxis: u,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return r && typeof m == "number" && (u = r === "end" ? m * -1 : m), a ? {
    x: u * h,
    y: p * c
  } : {
    x: p * c,
    y: u * h
  };
}
const go = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: i,
        y: s,
        placement: l,
        middlewareData: r
      } = t, a = await mo(t, e);
      return l === ((n = r.offset) == null ? void 0 : n.placement) && (o = r.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, fo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: r = {
          fn: (f) => {
            let {
              x: v,
              y
            } = f;
            return {
              x: v,
              y
            };
          }
        },
        ...a
      } = ht(e, t), c = {
        x: n,
        y: o
      }, h = await Jt(t, a), d = et(Q(i)), p = xe(d);
      let u = c[p], m = c[d];
      if (s) {
        const f = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", y = u + h[f], b = u - h[v];
        u = qt(y, u, b);
      }
      if (l) {
        const f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", y = m + h[f], b = m - h[v];
        m = qt(y, m, b);
      }
      const g = r.fn({
        ...t,
        [p]: u,
        [d]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [p]: s,
            [d]: l
          }
        }
      };
    }
  };
}, vo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        rects: s,
        platform: l,
        elements: r
      } = t, {
        apply: a = () => {
        },
        ...c
      } = ht(e, t), h = await Jt(t, c), d = Q(i), p = dt(i), u = et(i) === "y", {
        width: m,
        height: g
      } = s.floating;
      let f, v;
      d === "top" || d === "bottom" ? (f = d, v = p === (await (l.isRTL == null ? void 0 : l.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (v = d, f = p === "end" ? "top" : "bottom");
      const y = g - h.top - h.bottom, b = m - h.left - h.right, w = Z(g - h[f], y), E = Z(m - h[v], b), S = !t.middlewareData.shift;
      let $ = w, U = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (U = b), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = y), S && !p) {
        const D = R(h.left, 0), K = R(h.right, 0), _ = R(h.top, 0), J = R(h.bottom, 0);
        u ? U = m - 2 * (D !== 0 || K !== 0 ? D + K : R(h.left, h.right)) : $ = g - 2 * (_ !== 0 || J !== 0 ? _ + J : R(h.top, h.bottom));
      }
      await a({
        ...t,
        availableWidth: U,
        availableHeight: $
      });
      const H = await l.getDimensions(r.floating);
      return m !== H.width || g !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Rt() {
  return typeof window < "u";
}
function ut(e) {
  return ze(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function L(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function W(e) {
  var t;
  return (t = (ze(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ze(e) {
  return Rt() ? e instanceof Node || e instanceof L(e).Node : !1;
}
function N(e) {
  return Rt() ? e instanceof Element || e instanceof L(e).Element : !1;
}
function I(e) {
  return Rt() ? e instanceof HTMLElement || e instanceof L(e).HTMLElement : !1;
}
function he(e) {
  return !Rt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof L(e).ShadowRoot;
}
function yt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = q(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function yo(e) {
  return ["table", "td", "th"].includes(ut(e));
}
function Lt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Xt(e) {
  const t = Yt(), n = N(e) ? q(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function bo(e) {
  let t = tt(e);
  for (; I(t) && !at(t); ) {
    if (Xt(t))
      return t;
    if (Lt(t))
      return null;
    t = tt(t);
  }
  return null;
}
function Yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function at(e) {
  return ["html", "body", "#document"].includes(ut(e));
}
function q(e) {
  return L(e).getComputedStyle(e);
}
function At(e) {
  return N(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function tt(e) {
  if (ut(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    he(e) && e.host || // Fallback.
    W(e)
  );
  return he(t) ? t.host : t;
}
function Ce(e) {
  const t = tt(e);
  return at(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : I(t) && yt(t) ? t : Ce(t);
}
function pt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Ce(e), s = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = L(i);
  if (s) {
    const r = _t(l);
    return t.concat(l, l.visualViewport || [], yt(i) ? i : [], r && n ? pt(r) : []);
  }
  return t.concat(i, pt(i, [], n));
}
function _t(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Oe(e) {
  const t = q(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = I(e), s = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, r = Ot(n) !== s || Ot(o) !== l;
  return r && (n = s, o = l), {
    width: n,
    height: o,
    $: r
  };
}
function Gt(e) {
  return N(e) ? e : e.contextElement;
}
function rt(e) {
  const t = Gt(e);
  if (!I(t))
    return M(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = Oe(t);
  let l = (s ? Ot(n.width) : n.width) / o, r = (s ? Ot(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: l,
    y: r
  };
}
const wo = /* @__PURE__ */ M(0);
function Pe(e) {
  const t = L(e);
  return !Yt() || !t.visualViewport ? wo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== L(e) ? !1 : t;
}
function ot(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), s = Gt(e);
  let l = M(1);
  t && (o ? N(o) && (l = rt(o)) : l = rt(e));
  const r = xo(s, n, o) ? Pe(s) : M(0);
  let a = (i.left + r.x) / l.x, c = (i.top + r.y) / l.y, h = i.width / l.x, d = i.height / l.y;
  if (s) {
    const p = L(s), u = o && N(o) ? L(o) : o;
    let m = p, g = _t(m);
    for (; g && o && u !== m; ) {
      const f = rt(g), v = g.getBoundingClientRect(), y = q(g), b = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * f.x, w = v.top + (g.clientTop + parseFloat(y.paddingTop)) * f.y;
      a *= f.x, c *= f.y, h *= f.x, d *= f.y, a += b, c += w, m = L(g), g = _t(m);
    }
  }
  return Tt({
    width: h,
    height: d,
    x: a,
    y: c
  });
}
function Zt(e, t) {
  const n = At(e).scrollLeft;
  return t ? t.left + n : ot(W(e)).left + n;
}
function Te(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Zt(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: i,
    y: s
  };
}
function Eo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const s = i === "fixed", l = W(o), r = t ? Lt(t.floating) : !1;
  if (o === l || r && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = M(1);
  const h = M(0), d = I(o);
  if ((d || !d && !s) && ((ut(o) !== "body" || yt(l)) && (a = At(o)), I(o))) {
    const u = ot(o);
    c = rt(o), h.x = u.x + o.clientLeft, h.y = u.y + o.clientTop;
  }
  const p = l && !d && !s ? Te(l, a, !0) : M(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + h.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + h.y + p.y
  };
}
function zo(e) {
  return Array.from(e.getClientRects());
}
function Co(e) {
  const t = W(e), n = At(e), o = e.ownerDocument.body, i = R(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = R(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Zt(e);
  const r = -n.scrollTop;
  return q(o).direction === "rtl" && (l += R(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: l,
    y: r
  };
}
function Oo(e, t) {
  const n = L(e), o = W(e), i = n.visualViewport;
  let s = o.clientWidth, l = o.clientHeight, r = 0, a = 0;
  if (i) {
    s = i.width, l = i.height;
    const c = Yt();
    (!c || c && t === "fixed") && (r = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: r,
    y: a
  };
}
function Po(e, t) {
  const n = ot(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, s = I(e) ? rt(e) : M(1), l = e.clientWidth * s.x, r = e.clientHeight * s.y, a = i * s.x, c = o * s.y;
  return {
    width: l,
    height: r,
    x: a,
    y: c
  };
}
function de(e, t, n) {
  let o;
  if (t === "viewport")
    o = Oo(e, n);
  else if (t === "document")
    o = Co(W(e));
  else if (N(t))
    o = Po(t, n);
  else {
    const i = Pe(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Tt(o);
}
function ke(e, t) {
  const n = tt(e);
  return n === t || !N(n) || at(n) ? !1 : q(n).position === "fixed" || ke(n, t);
}
function To(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = pt(e, [], !1).filter((r) => N(r) && ut(r) !== "body"), i = null;
  const s = q(e).position === "fixed";
  let l = s ? tt(e) : e;
  for (; N(l) && !at(l); ) {
    const r = q(l), a = Xt(l);
    !a && r.position === "fixed" && (i = null), (s ? !a && !i : !a && r.position === "static" && i && ["absolute", "fixed"].includes(i.position) || yt(l) && !a && ke(e, l)) ? o = o.filter((c) => c !== l) : i = r, l = tt(l);
  }
  return t.set(e, o), o;
}
function ko(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? Lt(t) ? [] : To(t, this._c) : [].concat(n), o], l = s[0], r = s.reduce((a, c) => {
    const h = de(t, c, i);
    return a.top = R(h.top, a.top), a.right = Z(h.right, a.right), a.bottom = Z(h.bottom, a.bottom), a.left = R(h.left, a.left), a;
  }, de(t, l, i));
  return {
    width: r.right - r.left,
    height: r.bottom - r.top,
    x: r.left,
    y: r.top
  };
}
function So(e) {
  const {
    width: t,
    height: n
  } = Oe(e);
  return {
    width: t,
    height: n
  };
}
function Ro(e, t, n) {
  const o = I(t), i = W(t), s = n === "fixed", l = ot(e, !0, s, t);
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = M(0);
  if (o || !o && !s)
    if ((ut(t) !== "body" || yt(i)) && (r = At(t)), o) {
      const p = ot(t, !0, s, t);
      a.x = p.x + t.clientLeft, a.y = p.y + t.clientTop;
    } else i && (a.x = Zt(i));
  const c = i && !o && !s ? Te(i, r) : M(0), h = l.left + r.scrollLeft - a.x - c.x, d = l.top + r.scrollTop - a.y - c.y;
  return {
    x: h,
    y: d,
    width: l.width,
    height: l.height
  };
}
function Dt(e) {
  return q(e).position === "static";
}
function ue(e, t) {
  if (!I(e) || q(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return W(e) === n && (n = n.ownerDocument.body), n;
}
function Se(e, t) {
  const n = L(e);
  if (Lt(e))
    return n;
  if (!I(e)) {
    let i = tt(e);
    for (; i && !at(i); ) {
      if (N(i) && !Dt(i))
        return i;
      i = tt(i);
    }
    return n;
  }
  let o = ue(e, t);
  for (; o && yo(o) && Dt(o); )
    o = ue(o, t);
  return o && at(o) && Dt(o) && !Xt(o) ? n : o || bo(e) || n;
}
const Lo = async function(e) {
  const t = this.getOffsetParent || Se, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Ro(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ao(e) {
  return q(e).direction === "rtl";
}
const $o = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Eo,
  getDocumentElement: W,
  getClippingRect: ko,
  getOffsetParent: Se,
  getElementRects: Lo,
  getClientRects: zo,
  getDimensions: So,
  getScale: rt,
  isElement: N,
  isRTL: Ao
};
function Re(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Do(e, t) {
  let n = null, o;
  const i = W(e);
  function s() {
    var r;
    clearTimeout(o), (r = n) == null || r.disconnect(), n = null;
  }
  function l(r, a) {
    r === void 0 && (r = !1), a === void 0 && (a = 1), s();
    const c = e.getBoundingClientRect(), {
      left: h,
      top: d,
      width: p,
      height: u
    } = c;
    if (r || t(), !p || !u)
      return;
    const m = xt(d), g = xt(i.clientWidth - (h + p)), f = xt(i.clientHeight - (d + u)), v = xt(h), y = {
      rootMargin: -m + "px " + -g + "px " + -f + "px " + -v + "px",
      threshold: R(0, Z(1, a)) || 1
    };
    let b = !0;
    function w(E) {
      const S = E[0].intersectionRatio;
      if (S !== a) {
        if (!b)
          return l();
        S ? l(!1, S) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Re(c, e.getBoundingClientRect()) && l(), b = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, y);
    }
    n.observe(e);
  }
  return l(!0), s;
}
function pe(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: r = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = Gt(e), h = i || s ? [...c ? pt(c) : [], ...pt(t)] : [];
  h.forEach((v) => {
    i && v.addEventListener("scroll", n, {
      passive: !0
    }), s && v.addEventListener("resize", n);
  });
  const d = c && r ? Do(c, n) : null;
  let p = -1, u = null;
  l && (u = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === c && u && (u.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = u) == null || b.observe(t);
    })), n();
  }), c && !a && u.observe(c), u.observe(t));
  let m, g = a ? ot(e) : null;
  a && f();
  function f() {
    const v = ot(e);
    g && !Re(g, v) && n(), g = v, m = requestAnimationFrame(f);
  }
  return n(), () => {
    var v;
    h.forEach((y) => {
      i && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), d == null || d(), (v = u) == null || v.disconnect(), u = null, a && cancelAnimationFrame(m);
  };
}
const Fo = go, No = fo, me = po, qo = vo, Ho = uo, _o = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: $o,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return ho(e, t, {
    ...i,
    platform: s
  });
};
function Et(e) {
  if (e === void 0)
    return 0;
  const t = window.devicePixelRatio || 1;
  return Math.round(e * t) / t;
}
const zt = 8, Bo = 100, Mo = (e) => ({
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
})[e] ?? [e], Le = Symbol("placement updated");
class Qt {
  /**
   * Creates an instance of the PlacementController.
   *
   * @param host - The host element that uses this controller.
   */
  constructor(t) {
    this.originalPlacements = /* @__PURE__ */ new WeakMap(), this.allowPlacementUpdate = !1, this.closeForAncestorUpdate = () => {
      !this.allowPlacementUpdate && this.options.type !== "modal" && this.cleanup && this.target.dispatchEvent(new Event("close", { bubbles: !0 })), this.allowPlacementUpdate = !1;
    }, this.updatePlacement = () => {
      this.computePlacement();
    }, this.resetOverlayPosition = () => {
      !this.target || !this.options || (this.clearOverlayPosition(), this.host.offsetHeight, this.computePlacement());
    }, this.host = t, this.host.addController(this);
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
  placeOverlay(t = this.target, n = this.options) {
    if (this.target = t, this.options = n, !t || !n)
      return;
    const o = pe(
      n.trigger,
      t,
      this.closeForAncestorUpdate,
      {
        ancestorResize: !1,
        elementResize: !1,
        layoutShift: !1
      }
    ), i = pe(
      n.trigger,
      t,
      this.updatePlacement,
      {
        ancestorScroll: !1
      }
    );
    this.cleanup = () => {
      var s;
      (s = this.host.elements) == null || s.forEach((l) => {
        l.addEventListener(
          "luzmo-closed",
          () => {
            const r = this.originalPlacements.get(l);
            r && l.setAttribute("placement", r), this.originalPlacements.delete(l);
          },
          { once: !0 }
        );
      }), o(), i();
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
    var t, n;
    const { options: o, target: i } = this;
    await (document.fonts ? document.fonts.ready : Promise.resolve());
    const s = o.trigger instanceof HTMLElement ? me() : me({
      padding: zt,
      fallbackPlacements: Mo(o.placement)
    }), [l = 0, r = 0] = Array.isArray(o == null ? void 0 : o.offset) ? o.offset : [o.offset, 0], a = (t = this.host.elements.find(
      (m) => m.tipElement
    )) == null ? void 0 : t.tipElement, c = [
      Fo({
        mainAxis: l,
        crossAxis: r
      }),
      No({ padding: zt }),
      s,
      qo({
        padding: zt,
        apply: ({ availableWidth: m, availableHeight: g, rects: { floating: f } }) => {
          const v = Math.max(
            Bo,
            Math.floor(g)
          ), y = f.height;
          this.initialHeight = this.isConstrained && this.initialHeight || y, this.isConstrained = y < this.initialHeight || v <= y;
          const b = this.isConstrained ? `${v}px` : "";
          Object.assign(i.style, {
            maxWidth: `${Math.floor(m)}px`,
            maxHeight: b
          });
        }
      }),
      ...a ? [
        Ho({
          element: a,
          padding: o.tipPadding || zt
        })
      ] : []
    ], { x: h, y: d, placement: p, middlewareData: u } = await _o(
      o.trigger,
      i,
      {
        placement: o.placement,
        middleware: c,
        strategy: "fixed"
      }
    );
    if (Object.assign(i.style, {
      top: "0px",
      left: "0px",
      translate: `${Et(h)}px ${Et(d)}px`
    }), i.setAttribute("actual-placement", p), (n = this.host.elements) == null || n.forEach((m) => {
      this.originalPlacements.has(m) || this.originalPlacements.set(
        m,
        m.getAttribute("placement")
      ), m.setAttribute("placement", p);
    }), a && u.arrow) {
      const { x: m, y: g } = u.arrow;
      Object.assign(a.style, {
        top: p.startsWith("right") || p.startsWith("left") ? "0px" : "",
        left: p.startsWith("bottom") || p.startsWith("top") ? "0px" : "",
        translate: `${Et(m)}px ${Et(g)}px`
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
    var t;
    this.host.open || ((t = this.cleanup) == null || t.call(this), this.cleanup = void 0);
  }
  /**
   * Lifecycle method called when the host element is disconnected from the DOM.
   *
   * This method removes the event listener and cleans up resources.
   */
  hostDisconnected() {
    var t;
    (t = this.cleanup) == null || t.call(this), this.cleanup = void 0, document.removeEventListener(
      "luzmo-update-overlays",
      this.resetOverlayPosition
    );
  }
}
var nt = /* @__PURE__ */ ((e) => (e[e.click = 0] = "click", e[e.hover = 1] = "hover", e[e.longpress = 2] = "longpress", e))(nt || {});
class bt {
  constructor(t, { overlay: n, isPersistent: o, handleOverlayReady: i }) {
    this.target = t, this.isLazilyOpen = !1, this.isPersistent = !1, this.isPersistent = !!o, this.handleOverlayReady = i, this.isPersistent && this.init(), this.overlay = n;
  }
  get activelyOpening() {
    return !1;
  }
  get open() {
    var t;
    return ((t = this.overlay) == null ? void 0 : t.open) ?? this.isLazilyOpen;
  }
  /**
   * Set `open` against the associated Overlay lazily.
   */
  set open(t) {
    if (t !== this.open) {
      if (this.isLazilyOpen = t, this.overlay) {
        this.overlay.open = t;
        return;
      }
      t && (customElements.whenDefined("luzmo-overlay").then(async () => {
        const { LuzmoOverlay: n } = await Promise.resolve().then(() => kt);
        this.overlay = new n(), this.overlay.open = !0;
      }), Promise.resolve().then(() => kt));
    }
  }
  get overlay() {
    return this._overlay;
  }
  set overlay(t) {
    var n;
    t && this.overlay !== t && (this.overlay && this.overlay.removeController(this), this._overlay = t, this.overlay.addController(this), this.initOverlay(), this.prepareDescription(this.target), (n = this.handleOverlayReady) == null || n.call(this, this.overlay));
  }
  prepareDescription(t) {
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
    var t;
    this.releaseDescription(), (t = this.abortController) == null || t.abort();
  }
  hostConnected() {
    this.init();
  }
  hostDisconnected() {
    this.isPersistent || this.abort();
  }
}
class te extends bt {
  constructor() {
    super(...arguments), this.type = nt.click, this.preventNextToggle = !1;
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
    const { signal: n } = this.abortController;
    this.target.addEventListener("click", () => this.handleClick(), {
      signal: n
    }), this.target.addEventListener(
      "pointerdown",
      () => this.handlePointerdown(),
      { signal: n }
    );
  }
}
const Io = 300;
class ee extends bt {
  constructor() {
    super(...arguments), this.type = nt.hover, this.elementIds = [], this.focusedin = !1, this.pointerentered = !1;
  }
  handleTargetFocusin() {
    this.target.matches(":focus-visible") && (this.open = !0, this.focusedin = !0);
  }
  handleTargetFocusout() {
    this.focusedin = !1, !this.pointerentered && (this.open = !1);
  }
  handleTargetPointerenter() {
    var t;
    this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0), !((t = this.overlay) != null && t.disabled) && (this.open = !0, this.pointerentered = !0);
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
    const t = this.target.getRootNode(), n = this.overlay.elements[0].getRootNode(), o = this.overlay.getRootNode();
    t === o ? this.prepareOverlayRelativeDescription() : t === n && this.prepareContentRelativeDescription();
  }
  prepareOverlayRelativeDescription() {
    const t = Nt(
      this.target,
      "aria-describedby",
      [this.overlay.id]
    );
    this.releaseDescription = () => {
      t(), this.releaseDescription = j;
    };
  }
  prepareContentRelativeDescription() {
    const t = [], n = this.overlay.elements.map((i) => (t.push(i.id), i.id || (i.id = `${this.overlay.tagName.toLowerCase()}-helper-${Mt()}`), i.id));
    this.elementIds = t;
    const o = Nt(
      this.target,
      "aria-describedby",
      n
    );
    this.releaseDescription = () => {
      o(), this.overlay.elements.map((i, s) => {
        i.id = this.elementIds[s];
      }), this.releaseDescription = j;
    };
  }
  doPointerleave() {
    this.pointerentered = !1;
    const t = this.target;
    this.focusedin && t.matches(":focus-visible") || (this.hoverTimeout = setTimeout(() => {
      this.open = !1;
    }, Io));
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: n } = this.abortController;
    this.target.addEventListener("focusin", () => this.handleTargetFocusin(), {
      signal: n
    }), this.target.addEventListener(
      "focusout",
      () => this.handleTargetFocusout(),
      { signal: n }
    ), this.target.addEventListener(
      "pointerenter",
      () => this.handleTargetPointerenter(),
      { signal: n }
    ), this.target.addEventListener(
      "pointerleave",
      () => this.handleTargetPointerleave(),
      { signal: n }
    ), this.overlay && this.initOverlay();
  }
  initOverlay() {
    if (!this.abortController)
      return;
    const { signal: t } = this.abortController;
    this.overlay.addEventListener(
      "pointerenter",
      () => this.handleHostPointerenter(),
      { signal: t }
    ), this.overlay.addEventListener(
      "pointerleave",
      () => this.handleHostPointerleave(),
      { signal: t }
    );
  }
}
const Wo = 300, oe = {
  touch: "Double tap and long press for additional options",
  keyboard: "Press Space or Alt+Down Arrow for additional options",
  mouse: "Click and hold for additional options"
};
class ne extends bt {
  constructor() {
    super(...arguments), this.type = nt.longpress, this.longpressState = null, this.releaseDescription = j, this.handlePointerup = () => {
      var t;
      clearTimeout(this.timeout), this.target && (this.longpressState = ((t = this.overlay) == null ? void 0 : t.state) === "opening" ? "pressed" : null, document.removeEventListener("pointerup", this.handlePointerup), document.removeEventListener("pointercancel", this.handlePointerup));
    };
  }
  get activelyOpening() {
    return this.longpressState === "opening" || this.longpressState === "pressed";
  }
  handleLongpress() {
    this.open = !0, this.longpressState = this.longpressState === "potential" ? "opening" : "pressed";
  }
  handlePointerdown(t) {
    !this.target || t.button !== 0 || (this.longpressState = "potential", document.addEventListener("pointerup", this.handlePointerup), document.addEventListener("pointercancel", this.handlePointerup), "holdAffordance" in this.target) || (this.timeout = setTimeout(() => {
      this.target && this.target.dispatchEvent(
        new CustomEvent("longpress", {
          bubbles: !0,
          composed: !0,
          detail: {
            source: "pointer"
          }
        })
      );
    }, Wo));
  }
  handleKeydown(t) {
    const { code: n, altKey: o } = t;
    o && n === "ArrowDown" && (t.stopPropagation(), t.stopImmediatePropagation());
  }
  handleKeyup(t) {
    const { code: n, altKey: o } = t;
    if (n === "Space" || o && n === "ArrowDown") {
      if (!this.target)
        return;
      t.stopPropagation(), this.target.dispatchEvent(
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
  prepareDescription(t) {
    if (
      // do not reapply until target is recycled
      this.releaseDescription !== j || // require "longpress content" to apply relationship
      this.overlay.elements.length === 0
    )
      return;
    const n = document.createElement("div");
    n.id = `longpress-describedby-descriptor-${Mt()}`;
    const o = Be() || Me() ? "touch" : "keyboard";
    n.textContent = oe[o], n.slot = "longpress-describedby-descriptor";
    const i = t.getRootNode(), s = this.overlay.getRootNode();
    i === s ? this.overlay.append(n) : (n.hidden = !("host" in i), t.after(n));
    const l = Nt(
      t,
      "aria-describedby",
      [n.id]
    );
    this.releaseDescription = () => {
      l(), n.remove(), this.releaseDescription = j;
    };
  }
  shouldCompleteOpen() {
    this.longpressState = this.longpressState === "pressed" ? null : this.longpressState;
  }
  init() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
    const { signal: n } = this.abortController;
    this.target.addEventListener("longpress", () => this.handleLongpress(), {
      signal: n
    }), this.target.addEventListener(
      "pointerdown",
      (o) => this.handlePointerdown(o),
      { signal: n }
    ), this.prepareDescription(this.target), !this.target.holdAffordance && (this.target.addEventListener(
      "keydown",
      (o) => this.handleKeydown(o),
      { signal: n }
    ), this.target.addEventListener(
      "keyup",
      (o) => this.handleKeyup(o),
      { signal: n }
    ));
  }
}
const ie = {
  click: te,
  longpress: ne,
  hover: ee
};
var Uo = Object.defineProperty, Vo = Object.getOwnPropertyDescriptor, P = (e, t, n, o) => {
  for (var i = o > 1 ? void 0 : o ? Vo(t, n) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (i = (o ? l(t, n, i) : l(i)) || i);
  return o && i && Uo(t, n, i), i;
};
const jo = "showPopover" in document.createElement("div");
let Ct = Ye(G);
Ct = jo ? Qe(Ct) : Ge(Ct);
var st;
const z = (st = class extends Ct {
  constructor() {
    super(...arguments), this._delayed = !1, this._disabled = !1, this.offset = 0, this._open = !1, this.lastRequestSlottableState = !1, this.receivesFocus = "auto", this._state = "closed", this.triggerElement = null, this.type = "auto", this.wasOpen = !1, this.closeOnFocusOut = (e) => {
      if (!e.relatedTarget)
        return;
      const t = new Event("overlay-relation-query", {
        bubbles: !0,
        composed: !0
      });
      e.relatedTarget.addEventListener(t.type, (n) => {
        n.composedPath().includes(this) || (this.open = !1);
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
    return !!this.triggerElement && !(this.triggerElement instanceof ct);
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
    return this._placementController || (this._placementController = new Qt(this)), this._placementController;
  }
  get open() {
    return this._open;
  }
  set open(e) {
    var t;
    e && this.disabled || e !== this.open && ((t = this.strategy) != null && t.activelyOpening && !e || (this._open = e, this.open && (st.openCount += 1), this.requestUpdate("open", !this.open), this.open && this.requestSlottable()));
  }
  get state() {
    return this._state;
  }
  set state(e) {
    var t;
    if (e === this.state)
      return;
    const n = this.state;
    this._state = e, (this.state === "opened" || this.state === "closed") && ((t = this.strategy) == null || t.shouldCompleteOpen()), this.requestUpdate("state", n);
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
    return this._elementResolver || (this._elementResolver = new He(this)), this._elementResolver;
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
    const e = this.offset || 0, t = this.triggerElement, n = this.placement || "right", o = this.tipPadding;
    this.placementController.placeOverlay(this.dialogEl, {
      offset: e,
      placement: n,
      tipPadding: o,
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
      if (await T(), await T(), e === this.open && !this.open) {
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
    var e;
    if (this.open || this.type === "hint")
      return;
    const t = () => {
      var n, o;
      const i = [];
      let s = document.activeElement;
      for (; (n = s == null ? void 0 : s.shadowRoot) != null && n.activeElement; )
        s = s.shadowRoot.activeElement;
      for (; s; ) {
        const l = s.assignedSlot || s.parentElement || ((o = s.getRootNode()) == null ? void 0 : o.host);
        l && i.push(l), s = l;
      }
      return i;
    };
    this.receivesFocus !== "false" && (e = this.triggerElement) != null && e.focus && (this.contains(this.getRootNode().activeElement) || t().includes(this) || document.activeElement === document.body) && this.triggerElement.focus();
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
    if (!(!this.isConnected && this.open) && (this.hasUpdated || await this.updateComplete, this.open ? (ae.add(this), this.willPreventClose && (document.addEventListener(
      "pointerup",
      () => {
        this.dialogEl.classList.toggle("not-immediately-closable", !1), this.willPreventClose = !1;
      },
      { once: !0 }
    ), this.dialogEl.classList.toggle("not-immediately-closable", !0))) : (e && this.dispose(), ae.remove(this)), this.open && this.state !== "opened" ? this.state = "opening" : !this.open && this.state !== "closed" && (this.state = "closing"), this.usesDialog ? this.manageDialogOpen() : this.managePopoverOpen(), this.type === "auto")) {
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
    (e = this.strategy) == null || e.abort(), this.strategy = void 0, this.hasNonVirtualTrigger && this.triggerInteraction && (this.strategy = new ie[this.triggerInteraction](
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
      new we(
        "overlay-content",
        this.open ? {} : St
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
    var t;
    if (this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${Mt()}`), e.has("open") && (this.hasUpdated || this.open) && this.manageOpen(e.get("open")), e.has("trigger")) {
      const [o, i] = ((t = this.trigger) == null ? void 0 : t.split("@")) || [];
      this.elementResolver.selector = o ? `#${o}` : "", this.triggerInteraction = i;
    }
    let n = !1;
    e.has(_e) && (n = this.triggerElement, this.triggerElement = this.elementResolver.element), e.has("triggerElement") && (n = e.get("triggerElement")), n !== !1 && this.bindEvents();
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
    return A` <slot @slotchange=${this.handleSlotchange}></slot> `;
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
      "--luzmo-overlay-open-count": st.openCount.toString()
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
    return A`
      <dialog
        class="dialog"
        part="dialog"
        placement=${$t(
      this.requiresPositioning ? this.placement || "right" : void 0
    )}
        style=${re(this.dialogStyleMap)}
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
    return A`
      <div
        class="dialog"
        part="dialog"
        placement=${$t(
      this.requiresPositioning ? this.placement || "right" : void 0
    )}
        popover=${$t(this.popoverValue)}
        style=${re(this.dialogStyleMap)}
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
    return A`
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
}, st.styles = [fe(oo)], st.openCount = 1, st);
P([
  x({ type: Boolean })
], z.prototype, "delayed", 1);
P([
  gt(".dialog")
], z.prototype, "dialogEl", 2);
P([
  x({ type: Boolean })
], z.prototype, "disabled", 1);
P([
  We({
    flatten: !0,
    selector: ':not([slot="longpress-describedby-descriptor"], slot)'
  })
], z.prototype, "elements", 2);
P([
  x({ type: Number })
], z.prototype, "offset", 2);
P([
  x({ type: Boolean, reflect: !0 })
], z.prototype, "open", 1);
P([
  x()
], z.prototype, "placement", 2);
P([
  x({ attribute: "receives-focus" })
], z.prototype, "receivesFocus", 2);
P([
  gt("slot")
], z.prototype, "slotEl", 2);
P([
  ft()
], z.prototype, "state", 1);
P([
  x({ type: Number, attribute: "tip-padding" })
], z.prototype, "tipPadding", 2);
P([
  x()
], z.prototype, "trigger", 2);
P([
  x({ attribute: !1 })
], z.prototype, "triggerElement", 2);
P([
  x({ attribute: !1 })
], z.prototype, "triggerInteraction", 2);
P([
  x()
], z.prototype, "type", 2);
let wt = z;
const kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LuzmoOverlay: wt
}, Symbol.toStringTag, { value: "Module" })), Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  C: te,
  H: ee,
  I: nt,
  L: G,
  P: Qt,
  V: ct,
  a: T,
  b: bt,
  c: oe,
  d: ne,
  e: wt,
  f: kt,
  g: vt,
  n: j,
  o: lt,
  p: Le,
  s: ie
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
const Ko = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const e = document.createElement("style");
    e.setAttribute("data-luzmo-vars", ""), e.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(e);
  }
};
Ko();
const Jo = ":host([disabled]) ::slotted([slot=trigger]){pointer-events:none}slot[name=longpress-describedby-descriptor]{display:none}";
var Xo = Object.defineProperty, k = (e, t, n, o) => {
  for (var i = void 0, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (i = l(t, n, i) || i);
  return i && Xo(t, n, i), i;
};
class C extends ge {
  constructor() {
    super(...arguments), this.content = "click hover longpress", this.offset = 6, this.disabled = !1, this.receivesFocus = "auto", this.clickContent = [], this.longpressContent = [], this.hoverContent = [], this.targetContent = [];
  }
  static get styles() {
    return [fe(Jo)];
  }
  getAssignedElementsFromSlot(t) {
    return t.assignedElements({ flatten: !0 });
  }
  handleTriggerContent(t) {
    this.targetContent = this.getAssignedElementsFromSlot(t.target);
  }
  handleSlotContent(t) {
    switch (t.target.name) {
      case "click-content": {
        this.clickContent = this.getAssignedElementsFromSlot(t.target);
        break;
      }
      case "longpress-content": {
        this.longpressContent = this.getAssignedElementsFromSlot(t.target);
        break;
      }
      case "hover-content": {
        this.hoverContent = this.getAssignedElementsFromSlot(t.target);
        break;
      }
    }
  }
  handleBeforetoggle(t) {
    const { target: n } = t;
    let o;
    if (n === this.clickOverlayElement)
      o = "click";
    else if (n === this.longpressOverlayElement)
      o = "longpress";
    else if (n === this.hoverOverlayElement)
      o = "hover";
    else
      return;
    t.newState === "open" ? this.open = o : this.open === o && (this.open = void 0);
  }
  update(t) {
    var n, o, i, s, l, r;
    t.has("clickContent") && (this.clickPlacement = ((n = this.clickContent[0]) == null ? void 0 : n.getAttribute("placement")) || ((o = this.clickContent[0]) == null ? void 0 : o.getAttribute("direction")) || void 0), t.has("hoverContent") && (this.hoverPlacement = ((i = this.hoverContent[0]) == null ? void 0 : i.getAttribute("placement")) || ((s = this.hoverContent[0]) == null ? void 0 : s.getAttribute("direction")) || void 0), t.has("longpressContent") && (this.longpressPlacement = ((l = this.longpressContent[0]) == null ? void 0 : l.getAttribute("placement")) || ((r = this.longpressContent[0]) == null ? void 0 : r.getAttribute("direction")) || void 0), super.update(t);
  }
  renderSlot(t) {
    return A`
      <slot name=${t} @slotchange=${this.handleSlotContent}></slot>
    `;
  }
  renderClickOverlay() {
    Promise.resolve().then(() => Ft).then((n) => n.f);
    const t = this.renderSlot("click-content");
    return this.clickContent.length === 0 ? t : A`
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
        ${t}
      </luzmo-overlay>
    `;
  }
  renderHoverOverlay() {
    Promise.resolve().then(() => Ft).then((n) => n.f);
    const t = this.renderSlot("hover-content");
    return this.hoverContent.length === 0 ? t : A`
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
        ${t}
      </luzmo-overlay>
    `;
  }
  renderLongpressOverlay() {
    Promise.resolve().then(() => Ft).then((n) => n.f);
    const t = this.renderSlot("longpress-content");
    return this.longpressContent.length === 0 ? t : A`
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
        ${t}
      </luzmo-overlay>
      <slot name="longpress-describedby-descriptor"></slot>
    `;
  }
  render() {
    const t = this.content.split(" ");
    return A`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this.handleTriggerContent}
      ></slot>
      ${[
      t.includes("click") ? this.renderClickOverlay() : A``,
      t.includes("hover") ? this.renderHoverOverlay() : A``,
      t.includes("longpress") ? this.renderLongpressOverlay() : A``
    ]}
    `;
  }
  updated(t) {
    if (super.updated(t), this.disabled && t.has("disabled")) {
      this.open = void 0;
      return;
    }
  }
  async getUpdateComplete() {
    return await super.getUpdateComplete();
  }
}
k([
  x()
], C.prototype, "content");
k([
  x({ reflect: !0 })
], C.prototype, "placement");
k([
  x()
], C.prototype, "type");
k([
  x({ type: Number })
], C.prototype, "offset");
k([
  x({ reflect: !0 })
], C.prototype, "open");
k([
  x({ type: Boolean, reflect: !0 })
], C.prototype, "disabled");
k([
  x({ attribute: "receives-focus" })
], C.prototype, "receivesFocus");
k([
  ft()
], C.prototype, "clickContent");
k([
  ft()
], C.prototype, "longpressContent");
k([
  ft()
], C.prototype, "hoverContent");
k([
  ft()
], C.prototype, "targetContent");
k([
  gt("#click-overlay", !0)
], C.prototype, "clickOverlayElement");
k([
  gt("#longpress-overlay", !0)
], C.prototype, "longpressOverlayElement");
k([
  gt("#hover-overlay", !0)
], C.prototype, "hoverOverlayElement");
function Yo(e, t, n, o) {
  return wt.open(
    e,
    t,
    n,
    o
  );
}
class se extends Ie {
  /* c8 ignore next 9 */
  render(t) {
    return ve;
  }
  update(t, [n]) {
    this.template = n, this.target !== t.element && (this.target = t.element, this.renderBefore = this.target.children[0]), this.listenerHost = this.target, this.init();
  }
  handleSlottableRequest(t) {
    if (t.target !== t.currentTarget)
      return;
    const n = t.data === St;
    ye(n ? void 0 : this.template(), this.target, {
      renderBefore: this.renderBefore
    });
  }
  init() {
    var t;
    (t = this.listeners) == null || t.abort(), this.listeners = new AbortController();
    const { signal: n } = this.listeners;
    this.listenerHost.addEventListener(
      "slottable-request",
      (o) => this.handleSlottableRequest(o),
      { signal: n }
    );
  }
  disconnected() {
    var t;
    (t = this.listeners) == null || t.abort();
  }
  /* c8 ignore next 3 */
  reconnected() {
    this.init();
  }
}
const Go = Bt(se);
class Ae extends se {
  constructor() {
    super(...arguments), this.defaultOptions = {
      triggerInteraction: "click",
      overlayOptions: {
        type: "auto",
        offset: 0
      }
    }, this.options = {
      ...this.defaultOptions.overlayOptions
    };
  }
  /* c8 ignore next 9 */
  render(t, n) {
    return ve;
  }
  update(t, [n, o]) {
    var i, s, l;
    this.options = {
      ...this.defaultOptions.overlayOptions,
      ...o == null ? void 0 : o.overlayOptions
    }, this.insertionOptions = o == null ? void 0 : o.insertionOptions, this.template = n, this.host = (i = t.options) == null ? void 0 : i.host;
    let r = !1;
    const a = (o == null ? void 0 : o.triggerInteraction) || this.defaultOptions.triggerInteraction, c = nt[(s = this.strategy) == null ? void 0 : s.type] !== a;
    this.target !== t.element && (this.target = t.element, r = !0), (r || c) && ((l = this.strategy) == null || l.abort(), this.strategy = new ie[a](this.target, {
      isPersistent: !0,
      handleOverlayReady: (h) => {
        this.listenerHost = this.overlay = h, this.init();
      }
    })), this.strategy.open = (o == null ? void 0 : o.open) ?? !1;
  }
  handleSlottableRequest(t) {
    var n, o;
    if (t.target !== t.currentTarget)
      return;
    const i = t.data === St, s = {};
    if (this.host && (s.host = this.host), ye(
      i ? void 0 : this.template(),
      this.overlay,
      s
    ), i)
      this.overlay.remove();
    else {
      G.applyOptions(this.overlay, {
        ...this.options,
        trigger: this.target
      });
      const l = typeof ((n = this.insertionOptions) == null ? void 0 : n.el) == "function" ? this.insertionOptions.el() : ((o = this.insertionOptions) == null ? void 0 : o.el) || this.target, { where: r = "afterend" } = this.insertionOptions || {};
      l.insertAdjacentElement(r, this.overlay);
    }
  }
}
const Zo = Bt(Ae);
customElements.get("luzmo-overlay") || customElements.define("luzmo-overlay", wt);
customElements.get("luzmo-overlay-trigger") || customElements.define("luzmo-overlay-trigger", C);
const on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickController: te,
  HoverController: ee,
  InteractionController: bt,
  InteractionTypes: nt,
  LONGPRESS_INSTRUCTIONS: oe,
  LongpressController: ne,
  LuzmoAbstractOverlay: G,
  LuzmoOverlay: wt,
  LuzmoOverlayTrigger: C,
  OverlayTriggerDirective: Ae,
  PlacementController: Qt,
  SlottableRequestDirective: se,
  SlottableRequestEvent: we,
  VirtualTrigger: ct,
  guaranteedAllTransitionend: vt,
  nextFrame: T,
  noop: j,
  openOverlay: Yo,
  overlayTimer: lt,
  placementUpdatedSymbol: Le,
  removeSlottableRequest: St,
  slottableRequest: Go,
  trigger: Zo
}, Symbol.toStringTag, { value: "Module" }));
export {
  St as a,
  Ft as b,
  on as i,
  we as o,
  re as p
};
