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
import { a as v, k as z, h as f, H as x, R as h, c as I } from "./get-css-variable-Cb4e-hdr.js";
import { b as E } from "./button-base-B7v4eeRh-Chb432uy.js";
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
function m(u, e, t) {
  return typeof u === e ? () => u : typeof u == "function" ? u : t;
}
let y = class {
  constructor(e, {
    direction: t,
    elementEnterAction: r,
    elements: o,
    focusInIndex: s,
    isFocusableElement: i,
    listenerScope: g
  } = { elements: () => [] }) {
    this._currentIndex = -1, this.prevIndex = -1, this._direction = () => "both", this.directionLength = 5, this.elementEnterAction = (a) => {
    }, this._focused = !1, this._focusInIndex = (a) => 0, this.isFocusableElement = (a) => !0, this._listenerScope = () => this.host, this.offset = 0, this.recentlyConnected = !1, this.handleFocusin = (a) => {
      if (!this.isEventWithinListenerScope(a))
        return;
      const n = a.composedPath();
      let c = -1;
      n.find((b) => (c = this.elements.indexOf(b), c !== -1)), this.prevIndex = this.currentIndex, this.currentIndex = c > -1 ? c : this.currentIndex, this.isRelatedTargetOrContainAnElement(a) && this.hostContainsFocus();
    }, this.handleClick = () => {
      var a;
      const n = this.elements;
      if (n.length === 0)
        return;
      let c = n[this.currentIndex];
      this.currentIndex < 0 || ((!c || !this.isFocusableElement(c)) && (this.setCurrentIndexCircularly(1), c = n[this.currentIndex]), c && this.isFocusableElement(c) && ((a = n[this.prevIndex]) == null || a.setAttribute("tabindex", "-1"), c.setAttribute("tabindex", "0")));
    }, this.handleFocusout = (a) => {
      this.isRelatedTargetOrContainAnElement(a) && this.hostNoLongerContainsFocus();
    }, this.handleKeydown = (a) => {
      if (!this.acceptsEventCode(a.code) || a.defaultPrevented)
        return;
      let n = 0;
      switch (this.prevIndex = this.currentIndex, a.code) {
        case "ArrowRight": {
          n += 1;
          break;
        }
        case "ArrowDown": {
          n += this.direction === "grid" ? this.directionLength : 1;
          break;
        }
        case "ArrowLeft": {
          n -= 1;
          break;
        }
        case "ArrowUp": {
          n -= this.direction === "grid" ? this.directionLength : 1;
          break;
        }
        case "End": {
          this.currentIndex = 0, n -= 1;
          break;
        }
        case "Home": {
          this.currentIndex = this.elements.length - 1, n += 1;
          break;
        }
      }
      a.preventDefault(), this.direction === "grid" && this.currentIndex + n < 0 ? this.currentIndex = 0 : this.direction === "grid" && this.currentIndex + n > this.elements.length - 1 ? this.currentIndex = this.elements.length - 1 : this.setCurrentIndexCircularly(n), this.elementEnterAction(this.elements[this.currentIndex]), this.focus();
    }, this.mutationObserver = new MutationObserver(() => {
      this.handleItemMutation();
    }), this.host = e, this.host.addController(this), this._elements = o, this.isFocusableElement = i || this.isFocusableElement, this._direction = m(
      t,
      "string",
      this._direction
    ), this.elementEnterAction = r || this.elementEnterAction, this._focusInIndex = m(
      s,
      "number",
      this._focusInIndex
    ), this._listenerScope = m(
      g,
      "object",
      this._listenerScope
    );
  }
  get currentIndex() {
    return this._currentIndex === -1 && (this._currentIndex = this.focusInIndex), this._currentIndex - this.offset;
  }
  set currentIndex(e) {
    this._currentIndex = e + this.offset;
  }
  get direction() {
    return this._direction();
  }
  get elements() {
    return this.cachedElements || (this.cachedElements = this._elements()), this.cachedElements;
  }
  set focused(e) {
    e !== this.focused && (this._focused = e);
  }
  get focused() {
    return this._focused;
  }
  get focusInElement() {
    return this.elements[this.focusInIndex];
  }
  get focusInIndex() {
    return this._focusInIndex(this.elements);
  }
  isEventWithinListenerScope(e) {
    return this._listenerScope() === this.host ? !0 : e.composedPath().includes(this._listenerScope());
  }
  /*  In  handleItemMutation() method the first if condition is checking if the element is not focused or if the element's children's length is not decreasing then it means no element has been deleted and we must return.
        Then we are checking if the deleted element was the focused one before the deletion if so then we need to proceed else we casn return;
    */
  handleItemMutation() {
    if (this._currentIndex === -1 || this.elements.length <= this._elements().length)
      return;
    const e = this.elements[this.currentIndex];
    if (this.clearElementCache(), this.elements.includes(e))
      return;
    const t = this.currentIndex !== this.elements.length, r = t ? 1 : -1;
    t && this.setCurrentIndexCircularly(-1), this.setCurrentIndexCircularly(r), this.focus();
  }
  update({ elements: e } = { elements: () => [] }) {
    this.unmanage(), this._elements = e, this.clearElementCache(), this.manage();
  }
  focus(e) {
    var t;
    const r = this.elements;
    if (r.length === 0)
      return;
    let o = r[this.currentIndex];
    (!o || !this.isFocusableElement(o)) && (this.setCurrentIndexCircularly(1), o = r[this.currentIndex]), o && this.isFocusableElement(o) && ((t = r[this.prevIndex]) == null || t.setAttribute("tabindex", "-1"), o.tabIndex = 0, o.focus(e));
  }
  clearElementCache(e = 0) {
    this.mutationObserver.disconnect(), delete this.cachedElements, this.offset = e, requestAnimationFrame(() => {
      this.elements.forEach((t) => {
        this.mutationObserver.observe(t, {
          attributes: !0
        });
      });
    });
  }
  setCurrentIndexCircularly(e) {
    const { length: t } = this.elements;
    let r = t;
    this.prevIndex = this.currentIndex;
    let o = (t + this.currentIndex + e) % t;
    for (
      ;
      // don't cycle the elements more than once
      r && this.elements[o] && !this.isFocusableElement(this.elements[o]);
    )
      o = (t + o + e) % t, r -= 1;
    this.currentIndex = o;
  }
  hostContainsFocus() {
    this.host.addEventListener("focusout", this.handleFocusout), this.host.addEventListener("keydown", this.handleKeydown), this.focused = !0;
  }
  hostNoLongerContainsFocus() {
    this.host.addEventListener("focusin", this.handleFocusin), this.host.removeEventListener("focusout", this.handleFocusout), this.host.removeEventListener("keydown", this.handleKeydown), this.focused = !1;
  }
  isRelatedTargetOrContainAnElement(e) {
    const t = e.relatedTarget, r = this.elements.includes(t), o = this.elements.some(
      (s) => s.contains(t)
    );
    return !(r || o);
  }
  acceptsEventCode(e) {
    if (e === "End" || e === "Home")
      return !0;
    switch (this.direction) {
      case "horizontal":
        return e === "ArrowLeft" || e === "ArrowRight";
      case "vertical":
        return e === "ArrowUp" || e === "ArrowDown";
      case "both":
      case "grid":
        return e.startsWith("Arrow");
    }
  }
  manage() {
    this.addEventListeners();
  }
  unmanage() {
    this.removeEventListeners();
  }
  addEventListeners() {
    this.host.addEventListener("focusin", this.handleFocusin), this.host.addEventListener("click", this.handleClick);
  }
  removeEventListeners() {
    this.host.removeEventListener("focusin", this.handleFocusin), this.host.removeEventListener("focusout", this.handleFocusout), this.host.removeEventListener("keydown", this.handleKeydown), this.host.removeEventListener("click", this.handleClick);
  }
  hostConnected() {
    this.recentlyConnected = !0, this.addEventListeners();
  }
  hostDisconnected() {
    this.mutationObserver.disconnect(), this.removeEventListeners();
  }
  hostUpdated() {
    this.recentlyConnected && (this.recentlyConnected = !1, this.elements.forEach((e) => {
      this.mutationObserver.observe(e, {
        attributes: !0
      });
    }));
  }
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
class C extends y {
  constructor() {
    super(...arguments), this.managed = !0, this.manageIndexesAnimationFrame = 0;
  }
  set focused(e) {
    e !== this.focused && (super.focused = e, this.manageTabindexes());
  }
  get focused() {
    return super.focused;
  }
  clearElementCache(e = 0) {
    cancelAnimationFrame(this.manageIndexesAnimationFrame), super.clearElementCache(e), this.managed && (this.manageIndexesAnimationFrame = requestAnimationFrame(
      () => this.manageTabindexes()
    ));
  }
  manageTabindexes() {
    this.focused ? this.updateTabindexes(() => ({ tabIndex: -1 })) : this.updateTabindexes(
      (e) => ({
        removeTabIndex: e.contains(this.focusInElement) && e !== this.focusInElement,
        tabIndex: e === this.focusInElement ? 0 : -1
      })
    );
  }
  updateTabindexes(e) {
    this.elements.forEach((t) => {
      const { tabIndex: r, removeTabIndex: o } = e(t);
      if (!o) {
        this.focused ? t !== this.elements[this.currentIndex] && (t.tabIndex = r) : t.tabIndex = r;
        return;
      }
      t.removeAttribute("tabindex");
      const s = t;
      s.requestUpdate && s.requestUpdate();
    });
  }
  manage() {
    this.managed = !0, this.manageTabindexes(), super.manage();
  }
  unmanage() {
    this.managed = !1, this.updateTabindexes(() => ({ tabIndex: 0 })), super.unmanage();
  }
  hostUpdated() {
    super.hostUpdated(), this.host.hasUpdated || this.manageTabindexes();
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
const k = ":host{gap:var(--luzmo-action-group-horizontal-spacing-regular, var(--action-group-horizontal-spacing-regular));flex-wrap:wrap;display:flex}::slotted(*){flex-shrink:0}::slotted(:focus-visible){z-index:3}:host(:not([vertical]):not([compact])) ::slotted(*){flex-shrink:0}:host([vertical]){gap:var(--luzmo-action-group-vertical-spacing-regular, var(--action-group-vertical-spacing-regular));flex-direction:column;display:inline-flex}:host([compact]){gap:var(--luzmo-action-group-gap-size-compact, var(--action-group-gap-size-compact))}:host([compact]:not([quiet])){flex-wrap:nowrap}:host([compact]:not([quiet])) ::slotted(*){border-radius:var(--luzmo-action-group-border-radius-reset, var(--action-group-border-radius-reset));z-index:0;position:relative}:host([compact]:not([quiet])) ::slotted(:first-child){--luzmo-actionbutton-focus-indicator-border-radius: var( --luzmo-action-group-border-radius, var(--action-group-border-radius) ) 0px 0px var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-start-start-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-end-start-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));margin-inline-start:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset))}:host([compact]:not([quiet])) ::slotted(:not(:first-child)){--luzmo-actionbutton-focus-indicator-border-radius: 0px;margin-inline-start:var(--luzmo-action-group-horizontal-spacing-compact, var(--action-group-horizontal-spacing-compact));margin-inline-end:var(--luzmo-action-group-horizontal-spacing-compact, var(--action-group-horizontal-spacing-compact))}:host([compact]:not([quiet])) ::slotted(:last-child){--luzmo-actionbutton-focus-indicator-border-radius: 0px var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0px;border-start-end-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-end-end-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));margin-inline-start:var(--luzmo-action-group-horizontal-spacing-compact, var(--action-group-horizontal-spacing-compact));margin-inline-end:var(--luzmo-action-group-border-radius-reset, var(--action-group-border-radius-reset))}:host([compact]:not([quiet])) ::slotted([selected]){z-index:1}@media (hover: hover){:host([compact]:not([quiet])) ::slotted(:hover){z-index:2}}:host([compact]:not([quiet])) ::slotted(:focus-visible){z-index:3}:host([compact]:not([quiet])[vertical]){gap:var(--luzmo-action-group-gap-size-compact, var(--action-group-gap-size-compact))}:host([compact][vertical]:not([quiet])) ::slotted(*){border-radius:var(--luzmo-action-group-border-radius-reset, var(--action-group-border-radius-reset))}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){--luzmo-actionbutton-focus-indicator-border-radius: var( --luzmo-action-group-border-radius, var(--action-group-border-radius) ) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0px 0px;border-start-start-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-start-end-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));margin-block-start:var(--luzmo-action-group-vertical-spacing-compact, var(--action-group-vertical-spacing-compact));margin-block-end:var(--luzmo-action-group-vertical-spacing-compact, var(--action-group-vertical-spacing-compact));margin-inline-end:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset))}:host([compact][vertical]:not([quiet])) ::slotted(:not(:first-child)){margin-block-start:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset));margin-block-end:var(--luzmo-action-group-vertical-spacing-compact, var(--action-group-vertical-spacing-compact));margin-inline-start:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset));margin-inline-end:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset))}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){--luzmo-actionbutton-focus-indicator-border-radius: 0px 0px var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-end-end-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));border-end-start-radius:var(--luzmo-action-group-border-radius, var(--action-group-border-radius));margin-block-start:var(--luzmo-action-group-vertical-spacing-compact, var(--action-group-vertical-spacing-compact));margin-block-end:var(--luzmo-action-group-button-spacing-reset, var(--action-group-button-spacing-reset))}:host([justified]) ::slotted(*){flex:1}:host{--action-group-gap-size-compact: 0px;--action-group-horizontal-spacing-compact: -1px;--action-group-vertical-spacing-compact: -1px;--action-group-button-spacing-reset: 0px;--action-group-border-radius-reset: 0px;--action-group-border-radius: var(--luzmo-border-radius);--action-group-horizontal-spacing-regular: var(--luzmo-spacing-3);--action-group-vertical-spacing-regular: var(--luzmo-spacing-3)}:host([size=xs]),:host([size=s]){--action-group-horizontal-spacing-regular: var(--luzmo-spacing-2);--action-group-vertical-spacing-regular: var(--luzmo-spacing-2)}:host,:host([size=l]),:host([size=xl]){--action-group-horizontal-spacing-regular: var(--luzmo-spacing-3);--action-group-vertical-spacing-regular: var(--luzmo-spacing-3)}:host([dir][compact][vertical]) ::slotted(:nth-child(n)){margin-right:0;margin-left:0}:host([justified]) ::slotted(:not([role])),:host([vertical]) ::slotted(:not([role])){display:flex;flex-direction:column;align-items:stretch}:host([compact]:not([quiet])) ::slotted(:not([role])){--overriden-border-radius: 0;--luzmo-action-button-border-radius: var(--overriden-border-radius)}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):first-child){--overriden-border-radius: var( --luzmo-action-group-border-radius, var(--action-group-border-radius) ) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0 0}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):last-child){--overriden-border-radius: 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}:host([dir=ltr][compact]:not([quiet],[vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius: var( --luzmo-action-group-border-radius, var(--action-group-border-radius) ) 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}:host([dir=rtl][compact]:not([quiet],[vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius: 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0}:host([dir=ltr][compact]:not([quiet],[vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius: 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0}:host([dir=rtl][compact]:not([quiet],[vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius: var( --luzmo-action-group-border-radius, var(--action-group-border-radius) ) 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}:host([compact]:not([quiet])) ::slotted(*){--luzmo-action-button-focus-ring-border-radius: 0}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){--luzmo-action-button-focus-ring-border-radius: var(--luzmo-border-radius) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0 0}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){--luzmo-action-button-focus-ring-border-radius: 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}:host([dir=ltr][compact]:not([quiet],[vertical])) ::slotted(:first-child){--luzmo-action-button-focus-ring-border-radius: var(--luzmo-border-radius) 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}:host([dir=rtl][compact]:not([quiet],[vertical])) ::slotted(:first-child){--luzmo-action-button-focus-ring-border-radius: 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0}:host([dir=ltr][compact]:not([quiet],[vertical])) ::slotted(:last-child){--luzmo-action-button-focus-ring-border-radius: 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) var(--luzmo-action-group-border-radius, var(--action-group-border-radius)) 0}:host([dir=rtl][compact]:not([quiet],[vertical])) ::slotted(:last-child){--luzmo-action-button-focus-ring-border-radius: var(--luzmo-border-radius) 0 0 var(--luzmo-action-group-border-radius, var(--action-group-border-radius))}";
var w = Object.defineProperty, A = Object.getOwnPropertyDescriptor, d = (u, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? A(e, t) : e, s = u.length - 1, i; s >= 0; s--)
    (i = u[s]) && (o = (r ? i(e, t, o) : i(o)) || o);
  return r && o && w(e, t, o), o;
};
const p = [];
class l extends v(z, {
  validSizes: ["xs", "s", "m", "l", "xl"],
  noDefaultSize: !0
}) {
  constructor() {
    super(), this._buttons = [], this._buttonSelector = "luzmo-action-button, luzmo-action-menu", this.rovingTabindexController = new C(
      this,
      {
        focusInIndex: (e) => {
          let t = -1;
          const r = e.findIndex((o, s) => (!e[t] && !o.disabled && (t = s), o.selected && !o.disabled));
          return e[r] ? r : t;
        },
        elements: () => this.buttons,
        isFocusableElement: (e) => !e.disabled
      }
    ), this.compact = !1, this.emphasized = !1, this.justified = !1, this.label = "", this.quiet = !1, this.vertical = !1, this._selected = p, this.hasManaged = !1, this.manageButtons = () => {
      if (!this.slotElement)
        return;
      const e = this.slotElement.assignedElements({
        flatten: !0
      }).reduce((t, r) => {
        if (r.matches(this._buttonSelector))
          t.push(r);
        else {
          const o = [
            ...r.querySelectorAll(`:scope > ${this._buttonSelector}`)
          ];
          t.push(...o);
        }
        return t;
      }, []);
      if (this.buttons = e, this.selects || !this.hasManaged) {
        const t = [];
        this.buttons.forEach((r) => {
          r.selected && t.push(r.value);
        }), this.setSelected([...this.selected, ...t]);
      }
      this.manageChildren(), this.manageSelects(), this.hasManaged = !0;
    }, new E(this, {
      config: {
        childList: !0,
        subtree: !0
      },
      callback: () => {
        this.manageButtons();
      },
      skipInitial: !0
    });
  }
  static get styles() {
    return [f(k)];
  }
  set buttons(e) {
    e !== this.buttons && (this._buttons = e, this.rovingTabindexController.clearElementCache());
  }
  get buttons() {
    return this._buttons;
  }
  set selected(e) {
    this.requestUpdate("selected", this._selected), this._selected = e, this.updateComplete.then(() => {
      this.applySelects(), this.manageChildren();
    });
  }
  get selected() {
    return this._selected;
  }
  dispatchChange(e) {
    this.dispatchEvent(
      new Event("change", {
        bubbles: !0,
        composed: !0,
        cancelable: !0
      })
    ) || (this.setSelected(e), this.buttons.map((t) => {
      t.selected = this.selected.includes(t.value);
    }));
  }
  setSelected(e, t) {
    if (e === this.selected)
      return;
    const r = this.selected;
    this.requestUpdate("selected", r), this._selected = e, t && this.dispatchChange(r);
  }
  focus(e) {
    this.rovingTabindexController.focus(e);
  }
  deselectSelectedButtons() {
    this.buttons.forEach((e) => {
      e.selected && (e.selected = !1, e.tabIndex = -1, e.setAttribute(
        this.selects ? "aria-checked" : (
          /* c8 ignore */
          "aria-pressed"
        ),
        "false"
      ));
    });
  }
  handleActionButtonChange(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleClick(e) {
    const t = e.target;
    if (t.value !== void 0)
      switch (this.selects) {
        case "single": {
          this.deselectSelectedButtons(), t.selected = !0, t.tabIndex = 0, t.setAttribute("aria-checked", "true"), this.setSelected([t.value], !0);
          break;
        }
        case "multiple": {
          const r = [...this.selected];
          t.selected = !t.selected, t.setAttribute("aria-checked", t.selected ? "true" : "false"), t.selected ? r.push(t.value) : r.splice(this.selected.indexOf(t.value), 1), this.setSelected(r, !0), this.buttons.forEach((o) => {
            o.tabIndex = -1;
          }), t.tabIndex = 0;
          break;
        }
      }
  }
  async applySelects() {
    await this.manageSelects(!0);
  }
  async manageSelects(e) {
    if (this.buttons.length === 0)
      return;
    const t = this.buttons;
    switch (this.selects) {
      case "single": {
        this.setAttribute("role", "radiogroup");
        const r = [], o = t.map(async (i) => {
          await i.updateComplete, i.setAttribute("role", "radio"), i.setAttribute(
            "aria-checked",
            i.selected ? "true" : "false"
          ), i.selected && r.push(i);
        });
        if (e)
          break;
        await Promise.all(o);
        const s = r.map((i) => i.value);
        this.setSelected(s || p);
        break;
      }
      case "multiple": {
        this.getAttribute("role") === "radiogroup" && this.removeAttribute("role");
        const r = [], o = t.map(async (i) => {
          await i.updateComplete, i.setAttribute("role", "checkbox"), i.setAttribute(
            "aria-checked",
            i.selected ? "true" : "false"
          ), i.selected && r.push(i.value);
        });
        if (e)
          break;
        await Promise.all(o);
        const s = r.length > 0 ? r : p;
        this.setSelected(s);
        break;
      }
      default:
        if (this.selected.length > 0) {
          const r = [], o = t.map(async (s) => {
            await s.updateComplete, s.setAttribute("role", "button"), s.selected ? (s.setAttribute("aria-pressed", "true"), r.push(s)) : s.removeAttribute("aria-pressed");
          });
          if (e)
            break;
          await Promise.all(o), this.setSelected(r.map((s) => s.value));
        } else {
          this.buttons.forEach((r) => {
            r.setAttribute("role", "button");
          });
          break;
        }
    }
    this.hasAttribute("role") || this.setAttribute("role", "toolbar");
  }
  render() {
    return x`
      <slot role="presentation" @slotchange=${this.manageButtons}></slot>
    `;
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.addEventListener("click", this.handleClick);
  }
  updated(e) {
    super.updated(e), e.has("selects") && (this.manageSelects(), this.manageChildren(), this.selects ? this.renderRoot.addEventListener(
      "change",
      this.handleActionButtonChange
    ) : this.renderRoot.removeEventListener(
      "change",
      this.handleActionButtonChange
    )), (e.has("quiet") || e.has("emphasized") || e.has("size") || e.has("staticColor")) && this.manageChildren(e), e.has("label") && (this.label || e.get("label") !== void 0) && (this.label.length > 0 ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
  }
  manageChildren(e) {
    this.buttons.forEach((t) => {
      (this.quiet || e != null && e.get("quiet")) && (t.quiet = this.quiet), (this.emphasized || e != null && e.get("emphasized")) && (t.emphasized = this.emphasized), (this.staticColor || e != null && e.get("staticColor")) && (t.staticColor = this.staticColor), (this.selects || !this.hasManaged) && (t.selected = this.selected.includes(t.value)), this.size && (this.size !== "m" || (e == null ? void 0 : e.get("size")) !== void 0) && (t.size = this.size);
    });
  }
}
d([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "compact", 2);
d([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "emphasized", 2);
d([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "justified", 2);
d([
  h({ type: String })
], l.prototype, "label", 2);
d([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "quiet", 2);
d([
  h({ type: String })
], l.prototype, "selects", 2);
d([
  h({ reflect: !0, attribute: "static-color" })
], l.prototype, "staticColor", 2);
d([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "vertical", 2);
d([
  h({ type: Array })
], l.prototype, "selected", 1);
d([
  I("slot")
], l.prototype, "slotElement", 2);
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
const q = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const u = document.createElement("style");
    u.setAttribute("data-luzmo-vars", ""), u.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(u);
  }
};
q();
customElements.get("luzmo-action-group") || customElements.define("luzmo-action-group", l);
