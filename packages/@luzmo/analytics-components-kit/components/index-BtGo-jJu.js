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
import { a as E, k as P, h as y, H as s, i as R, b as C, O as x, j as _, F as j, R as a, c as g, o as D, p as w, w as H, T as K, I as N, v as V } from "./get-css-variable-Cb4e-hdr.js";
import { n as I, a as T, _ as W, $ as G, s as J } from "./state-CYxk12SV-BOqaoLNO.js";
import { o as Q, p as X } from "./index-D3gj5tVe.js";
import { a as Y } from "./index-Dpr9NLmc.js";
import { c as Z, y as ee, b as F, m as oe } from "./button-base-B7v4eeRh-Chb432uy.js";
import { c as $ } from "./async-directive-DWRUSKKF-DBmP02pF.js";
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
const z = Symbol("slotContentIsPresent");
function te(n, e) {
  var o, t;
  const i = Array.isArray(e) ? e : [e];
  class r extends (t = n, o = z, t) {
    constructor(...m) {
      super(m), this[o] = /* @__PURE__ */ new Map(), this.managePresenceObservedSlot = () => {
        let p = !1;
        i.forEach((f) => {
          const k = !!this.querySelector(`:scope > ${f}`), B = this[z].get(f) || !1;
          p = p || B !== k, this[z].set(
            f,
            !!this.querySelector(`:scope > ${f}`)
          );
        }), p && this.updateComplete.then(() => {
          this.requestUpdate();
        });
      }, new F(this, {
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
      if (i.length === 1)
        return this[z].get(i[0]) || !1;
      throw new Error(
        "Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead."
      );
    }
    getSlotContentPresence(m) {
      if (this[z].has(m))
        return this[z].get(m) || !1;
      throw new Error(
        `The provided selector \`${m}\` is not being observed.`
      );
    }
  }
  return r;
}
const ie = ":host{--menu-item-top-to-action: var(--luzmo-spacing-1);--menu-item-top-to-checkbox: var(--luzmo-spacing-1);--menu-item-label-line-height: var(--luzmo-line-height);--menu-item-label-line-height-cjk: 1.5;--menu-item-label-to-description-spacing: 1px;--menu-item-focus-indicator-width: var(--luzmo-indicator-width);--menu-item-focus-indicator-color: var(--luzmo-indicator-color);--menu-item-label-to-value-area-min-spacing: var(--luzmo-spacing-3);--menu-item-label-content-color-default: var(--luzmo-font-color);--menu-item-label-content-color-hover: var(--luzmo-font-color-hover);--menu-item-label-content-color-down: var(--luzmo-font-color-down);--menu-item-label-content-color-focus: var(--luzmo-font-color-focus);--menu-item-highlight-label-background-color: var(--luzmo-primary);--menu-item-highlight-label-content-color: var(--luzmo-font-color);--menu-item-highlight-label-content-color-hover: var( --luzmo-font-color-hover );--menu-item-highlight-label-content-color-down: var(--luzmo-font-color-down);--menu-item-highlight-label-content-color-focus: var( --luzmo-font-color-focus );--menu-item-label-icon-color-default: var(--luzmo-font-color);--menu-item-label-icon-color-hover: var(--luzmo-font-color-hover);--menu-item-label-icon-color-down: var(--luzmo-font-color-down);--menu-item-label-icon-color-focus: var(--luzmo-font-color-focus);--menu-item-label-content-color-disabled: var(--luzmo-font-color-disabled);--menu-item-label-icon-color-disabled: var(--luzmo-font-color-disabled);--menu-item-description-line-height: var(--luzmo-line-height);--menu-item-description-line-height-cjk: 1.5;--menu-item-description-color-default: var(--luzmo-font-color);--menu-item-description-color-hover: var(--luzmo-font-color-hover);--menu-item-description-color-down: var(--luzmo-font-color-down);--menu-item-description-color-focus: var(--luzmo-font-color-focus);--menu-item-description-color-disabled: var(--luzmo-color-disabled);--menu-section-header-line-height: var(--luzmo-line-height);--menu-section-header-line-height-cjk: 1.5;--menu-section-header-font-weight: bold;--menu-section-header-color: var(--luzmo-font-color-hard);--menu-collapsible-icon-color: var(--luzmo-font-color-hard);--menu-checkmark-icon-color-default: var(--luzmo-primary);--menu-checkmark-icon-color-hover: var(--luzmo-primary-hover);--menu-checkmark-icon-color-down: var(--luzmo-primary-down);--menu-checkmark-icon-color-focus: var(--luzmo-primary-focus);--menu-drillin-icon-color-default: var(--luzmo-font-color);--menu-drillin-icon-color-hover: var(--luzmo-font-color-hover);--menu-drillin-icon-color-down: var(--luzmo-font-color-down);--menu-drillin-icon-color-focus: var(--luzmo-font-color-focus);--menu-item-value-color-default: var(--luzmo-font-color);--menu-item-value-color-hover: var(--luzmo-font-color-hover);--menu-item-value-color-down: var(--luzmo-font-color-down);--menu-item-value-color-focus: var(--luzmo-font-color-focus);--menu-checkmark-display-hidden: none;--menu-checkmark-display-shown: block;--menu-checkmark-display: block;--menu-item-collapsible-no-icon-submenu-item-padding-x-start: 28px;--menu-item-background-color-selected: var(--luzmo-background-color);--menu-item-background-color-default: var(--luzmo-background-color);--menu-item-background-color-hover: var(--luzmo-background-color-hover);--menu-item-background-color-down: var(--luzmo-background-color-down);--menu-item-background-color-key-focus: var(--luzmo-background-color-focus)}:host{--menu-item-min-height: var(--luzmo-component-height);--menu-item-icon-height: var(--luzmo-font-size);--menu-item-icon-width: var(--luzmo-font-size);--menu-item-label-font-size: var(--luzmo-font-size);--menu-item-label-text-to-visual: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-label-inline-edge-to-content: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-top-edge-to-text: var(--luzmo-spacing-1);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-1);--menu-item-text-to-control: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-description-font-size: var(--luzmo-font-size-xs);--menu-section-header-font-size: var(--luzmo-font-size);--menu-section-header-min-width: var(--luzmo-component-height);--menu-item-selectable-edge-to-text-not-selected: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-item-checkmark-size: var(--luzmo-font-size-xs);--menu-item-angle-size: var(--luzmo-font-size);--menu-item-top-to-checkmark: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--menu-back-icon-margin: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) )}:host([size=s]){--menu-item-min-height: var(--luzmo-component-height-s);--menu-item-icon-height: var(--luzmo-font-size-s);--menu-item-icon-width: var(--luzmo-font-size-s);--menu-item-label-font-size: var(--luzmo-font-size-s);--menu-item-label-text-to-visual: var(--luzmo-spacing-3);--menu-item-label-inline-edge-to-content: var(--luzmo-spacing-3);--menu-item-top-edge-to-text: var(--luzmo-spacing-1);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-1);--menu-item-text-to-control: var(--luzmo-spacing-2);--menu-item-description-font-size: var(--luzmo-font-size-xs);--menu-section-header-font-size: var(--luzmo-font-size-s);--menu-section-header-min-width: var(--luzmo-component-height-s);--menu-item-selectable-edge-to-text-not-selected: var(--luzmo-spacing-3);--menu-item-checkmark-size: var(--luzmo-font-size-xs);--menu-item-angle-size: var(--luzmo-font-size-s);--menu-item-top-to-checkmark: var(--luzmo-spacing-3);--menu-back-icon-margin: var(--luzmo-spacing-3)}:host([size=l]){--menu-item-min-height: var(--luzmo-component-height-l);--menu-item-icon-height: var(--luzmo-font-size-l);--menu-item-icon-width: var(--luzmo-font-size-l);--menu-item-label-font-size: var(--luzmo-font-size-l);--menu-item-label-text-to-visual: var(--luzmo-spacing-4);--menu-item-label-inline-edge-to-content: var(--luzmo-spacing-4);--menu-item-top-edge-to-text: var(--luzmo-spacing-2);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-2);--menu-item-text-to-control: var(--luzmo-spacing-3);--menu-item-description-font-size: var(--luzmo-font-size-s);--menu-section-header-font-size: var(--luzmo-font-size-l);--menu-section-header-min-width: var(--luzmo-component-height-l);--menu-item-selectable-edge-to-text-not-selected: var(--luzmo-spacing-4);--menu-item-checkmark-size: var(--luzmo-font-size-s);--menu-item-angle-size: var(--luzmo-font-size-l);--menu-item-top-to-checkmark: var(--luzmo-spacing-4);--menu-back-icon-margin: var(--luzmo-spacing-4)}:host([size=xl]){--menu-item-min-height: var(--luzmo-component-height-xl);--menu-item-icon-height: var(--font-size-xl);--menu-item-icon-width: var(--font-size-xl);--menu-item-label-font-size: var(--font-size-xl);--menu-item-label-text-to-visual: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-label-inline-edge-to-content: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-top-edge-to-text: var(--luzmo-spacing-2);--menu-item-bottom-edge-to-text: var(--luzmo-spacing-2);--menu-item-text-to-control: var(--luzmo-spacing-4);--menu-item-description-font-size: var(--luzmo-font-size);--menu-section-header-font-size: var(--font-size-xl);--menu-section-header-min-width: var(--luzmo-component-height-xl);--menu-item-selectable-edge-to-text-not-selected: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-item-checkmark-size: var(--font-size);--menu-item-angle-size: var(--luzmo-font-size-xl);--menu-item-top-to-checkmark: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--menu-back-icon-margin: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) )}:host([variant=highlight]){--menu-item-highlight-label-content-color: var(--luzmo-primary-inverse-color);--menu-item-highlight-label-content-color-hover: var( --luzmo-primary-inverse-color );--menu-item-highlight-label-content-color-down: var( --luzmo-primary-inverse-color );--menu-item-highlight-label-content-color-focus: var( --luzmo-primary-inverse-color )}@media (forced-colors: active){:host{--highcontrast-menu-item-background-color-default: ButtonFace;--highcontrast-menu-item-color-default: ButtonText;--highcontrast-menu-item-background-color-focus: Highlight;--highcontrast-menu-item-color-focus: HighlightText;--highcontrast-menu-checkmark-icon-color-default: Highlight;--highcontrast-menu-item-color-disabled: GrayText;--highcontrast-menu-item-focus-indicator-color: Highlight;--highcontrast-menu-item-selected-background-color: Highlight;--highcontrast-menu-item-selected-color: HighlightText}@supports (color: SelectedItem){:host{--highcontrast-menu-item-selected-background-color: SelectedItem;--highcontrast-menu-item-selected-color: SelectedItemText}}}:host{inline-size:auto;inline-size:var(--luzmo-menu-inline-size, auto);box-sizing:border-box;margin:0;padding:0;list-style-type:none;display:inline-block;overflow:auto}:host:lang(ja),:host:lang(ko),:host:lang(zh){--menu-item-label-line-height: var( --luzmo-menu-item-label-line-height-cjk, var(--menu-item-label-line-height-cjk) );--menu-item-description-line-height: var( --luzmo-menu-item-description-line-height-cjk, var(--menu-item-description-line-height-cjk) );--menu-section-header-line-height: var( --luzmo-menu-section-header-line-height-cjk, var(--menu-section-header-line-height-cjk) )}:host([selects]) ::slotted(luzmo-menu-item){--menu-checkmark-display: var(--menu-checkmark-display-hidden);padding-inline-start:var(--luzmo-menu-item-selectable-edge-to-text-not-selected, var(--menu-item-selectable-edge-to-text-not-selected))}:host([selects]) ::slotted(luzmo-menu-item[selected]){--menu-checkmark-display: var(--menu-checkmark-display-shown);padding-inline-start:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content))}.luzmo-Menu-backIcon{margin-block:var(--luzmo-menu-back-icon-margin-block, var(--menu-back-icon-margin));margin-inline:var(--luzmo-menu-back-icon-margin-inline, var(--menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-icon-color-default, var(--menu-section-header-color)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-icon-color-default, var(--menu-section-header-color)))}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-sectionHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-section-header-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));min-inline-size:var(--luzmo-menu-section-header-min-width, var(--menu-section-header-min-width));padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-back .luzmo-Menu-sectionHeading{padding:0}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--luzmo-indicator-width) solid var(--luzmo-indicator-color);outline-offset:calc((var(--luzmo-indicator-width) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{display:inline-flex;flex-direction:column;width:100%}:host(:focus){outline:none}::slotted(*){flex-shrink:0}";
var re = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, b = (n, e, o, t) => {
  for (var i = t > 1 ? void 0 : t ? ne(e, o) : e, r = n.length - 1, l; r >= 0; r--)
    (l = n[r]) && (i = (t ? l(e, o, i) : l(i)) || i);
  return t && i && re(e, o, i), i;
};
function le(n, e) {
  return !!e && (n === e || n.contains(e));
}
class v extends E(P, {
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
      const t = e.composedPath().find((r) => this.childItemSet.has(r));
      if (!t)
        return;
      const i = this.childItems.indexOf(
        t
      );
      this.focusedItemIndex = i, this.focusInItemIndex = i;
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
    return [y(ie)];
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
    const o = this.selected;
    this._selected = e, this.selectedItems = [], this.selectedItemsMap.clear(), this.childItems.forEach((t) => {
      this === t.menuData.selectionRoot && (t.selected = this.selected.includes(t.value), t.selected && (this.selectedItems.push(t), this.selectedItemsMap.set(t, !0)));
    }), this.requestUpdate("selected", o);
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
    if (this.childItems.every((t) => t.disabled))
      return;
    if (this.childItems.some((t) => t.menuData.focusRoot !== this)) {
      super.focus({ preventScroll: e });
      return;
    }
    this.focusMenuItemByOffset(0), super.focus({ preventScroll: e });
    const o = this.selectedItems[0];
    o && !e && o.scrollIntoView({ block: "nearest" });
  }
  handleFocusin(e) {
    var o;
    if (this.childItems.some((r) => r.menuData.focusRoot !== this))
      return;
    const t = this.getRootNode().activeElement, i = ((o = this.childItems[this.focusedItemIndex]) == null ? void 0 : o.menuData.selectionRoot) || this;
    if ((t !== i || e.target !== this) && (i.focus({ preventScroll: !0 }), t && this.focusedItemIndex === 0)) {
      const r = this.childItems.indexOf(t);
      this.focusMenuItemByOffset(Math.max(r, 0));
    }
    this.startListeningToKeyboard();
  }
  startListeningToKeyboard() {
    this.addEventListener("keydown", this.handleKeydown);
  }
  handleBlur(e) {
    le(this, e.relatedTarget) || (this.stopListeningToKeyboard(), this.childItems.forEach((o) => o.focused = !1), this.removeAttribute("aria-activedescendant"));
  }
  stopListeningToKeyboard() {
    this.removeEventListener("keydown", this.handleKeydown);
  }
  selectOrToggleItem(e) {
    const o = this.resolvedSelects, t = new Map(this.selectedItemsMap), i = [...this.selected], r = [...this.selectedItems], l = this.value, m = this.childItems[this.focusedItemIndex];
    if (m && (m.focused = !1, m.active = !1), this.focusedItemIndex = this.childItems.indexOf(e), this.forwardFocusVisibleToItem(e), o === "multiple") {
      this.selectedItemsMap.has(e) ? this.selectedItemsMap.delete(e) : this.selectedItemsMap.set(e, !0);
      const p = [], f = [];
      this.childItemSet.forEach((k) => {
        k.menuData.selectionRoot === this && this.selectedItemsMap.has(k) && (p.push(k.value), f.push(k));
      }), this._selected = p, this.selectedItems = f, this.value = this.selected.join(this.valueSeparator);
    } else
      this.selectedItemsMap.clear(), this.selectedItemsMap.set(e, !0), this.value = e.value, this._selected = [e.value], this.selectedItems = [e];
    if (!this.dispatchEvent(
      new Event("change", {
        cancelable: !0,
        bubbles: !0,
        composed: !0
      })
    )) {
      this._selected = i, this.selectedItems = r, this.selectedItemsMap = t, this.value = l;
      return;
    }
    if (o === "single") {
      for (const p of t.keys())
        p !== e && (p.selected = !1);
      e.selected = !0;
    } else o === "multiple" && (e.selected = !e.selected);
  }
  handleKeydown(e) {
    if (e.defaultPrevented)
      return;
    const o = this.childItems[this.focusedItemIndex];
    o && (o.focused = !0);
    const { key: t } = e;
    if (e.shiftKey && e.target !== this && this.hasAttribute("tabindex")) {
      this.removeAttribute("tabindex");
      const i = (r) => {
        !r.shiftKey && !this.hasAttribute("tabindex") && (this.tabIndex = 0, document.removeEventListener("keyup", i), this.removeEventListener("focusout", i));
      };
      document.addEventListener("keyup", i), this.addEventListener("focusout", i);
    }
    if (t === "Tab") {
      this.prepareToCleanUp();
      return;
    }
    if (t === " " && o != null && o.hasSubmenu) {
      o.openOverlay();
      return;
    }
    if (t === " " || t === "Enter") {
      const i = this.childItems[this.focusedItemIndex];
      i && i.menuData.selectionRoot === e.target && (e.preventDefault(), i.click());
      return;
    }
    if (t === "ArrowDown" || t === "ArrowUp") {
      const i = this.childItems[this.focusedItemIndex];
      i && i.menuData.selectionRoot === e.target && this.navigateWithinMenu(e);
      return;
    }
    this.navigateBetweenRelatedMenus(e);
  }
  focusMenuItemByOffset(e) {
    const o = e || 1, t = this.childItems[this.focusedItemIndex];
    t && (t.focused = !1, t.active = t.open), this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + e) % this.childItems.length;
    let i = this.childItems[this.focusedItemIndex], r = this.childItems.length;
    for (; i != null && i.disabled && r; )
      r -= 1, this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + o) % this.childItems.length, i = this.childItems[this.focusedItemIndex];
    return i != null && i.disabled || this.forwardFocusVisibleToItem(i), i;
  }
  updateSelectedItemIndex() {
    let e = 0;
    const o = /* @__PURE__ */ new Map(), t = [], i = [];
    let r = this.childItems.length;
    for (; r; ) {
      r -= 1;
      const l = this.childItems[r];
      l.menuData.selectionRoot === this && ((l.selected || !this._hasUpdatedSelectedItemIndex && this.selected.includes(l.value)) && (e = r, o.set(l, !0), t.unshift(l.value), i.unshift(l)), r !== e && (l.focused = !1));
    }
    i.map((l, m) => {
      m > 0 && (l.focused = !1);
    }), this.selectedItemsMap = o, this._selected = t, this.selectedItems = i, this.value = this.selected.join(this.valueSeparator), this.focusedItemIndex = e, this.focusInItemIndex = e;
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
    const o = e.composedPath()[0];
    o.overlayElement && this.descendentOverlays.set(o.overlayElement, o.overlayElement);
  }
  handleDescendentOverlayClosed(e) {
    const o = e.composedPath()[0];
    o.overlayElement && this.descendentOverlays.delete(o.overlayElement);
  }
  navigateWithinMenu(e) {
    const { key: o } = e, t = this.childItems[this.focusedItemIndex], i = o === "ArrowDown" ? 1 : -1, r = this.focusMenuItemByOffset(i);
    r !== t && (e.preventDefault(), e.stopPropagation(), r.scrollIntoView({ block: "nearest" }));
  }
  navigateBetweenRelatedMenus(e) {
    const { key: o } = e;
    e.stopPropagation();
    const t = this.isLTR && o === "ArrowRight" || !this.isLTR && o === "ArrowLeft", i = this.isLTR && o === "ArrowLeft" || !this.isLTR && o === "ArrowRight";
    if (t) {
      const r = this.childItems[this.focusedItemIndex];
      r != null && r.hasSubmenu && r.openOverlay();
    } else i && this.isSubmenu && (this.dispatchEvent(new Event("close", { bubbles: !0 })), this.updateSelectedItemIndex());
  }
  renderMenuItemSlot() {
    return s`
      <slot
        @luzmo-menu-submenu-opened=${this.handleDescendentOverlayOpened}
        @luzmo-menu-submenu-closed=${this.handleDescendentOverlayClosed}
        @slotchange=${this.handleSlotchange}
      ></slot>
    `;
  }
  firstUpdated(e) {
    if (super.firstUpdated(e), !this.hasAttribute("tabindex") && !this.ignore) {
      const t = this.getAttribute("role");
      this.tabIndex = t === "group" ? -1 : 0;
    }
    const o = [
      new Promise((t) => requestAnimationFrame(() => t(!0)))
    ];
    [...this.children].forEach((t) => {
      t.localName === "luzmo-menu-item" && o.push(t.updateComplete);
    }), this.childItemsUpdated = Promise.all(o);
  }
  updated(e) {
    super.updated(e), e.has("selects") && this.hasUpdated && this.selectsChanged(), e.has("label") && (this.label || e.get("label") !== void 0) && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
  }
  selectsChanged() {
    const e = [
      new Promise((o) => requestAnimationFrame(() => o(!0)))
    ];
    this.childItemSet.forEach((o) => {
      e.push(o.triggerUpdate());
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
    for (const [o, t] of e.entries()) {
      if (this.childItemSet.has(t)) {
        this.cachedChildItems.push(t);
        continue;
      }
      const i = t.localName === "slot" ? t.assignedElements({
        flatten: !0
      }) : [...t.querySelectorAll(":scope > *")];
      e.splice(
        o,
        1,
        t,
        ...i
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
    var o, t;
    const i = e.menuCascade.get(this);
    if (!i)
      return;
    if (e.item.menuData.parentMenu = e.item.menuData.parentMenu || this, i.hadFocusRoot && !this.ignore && (this.tabIndex = -1), this.addChildItem(e.item), this.selects === "inherit") {
      this.resolvedSelects = "inherit";
      const l = (o = e.currentAncestorWithSelects) == null ? void 0 : o.ignore;
      this.resolvedRole = l ? "none" : ((t = e.currentAncestorWithSelects) == null ? void 0 : t.getAttribute("role")) || this.getAttribute("role") || void 0;
    } else this.selects ? (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.selects) : (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.resolvedRole === "none" ? "ignore" : "none");
    const r = this.resolvedSelects === "single" || this.resolvedSelects === "multiple";
    e.item.menuData.cleanupSteps.push(
      (l) => this.removeChildItem(l)
    ), (r || !this.selects && this.resolvedSelects !== "ignore") && !e.item.menuData.selectionRoot && (e.item.setRole(this.childRole), e.item.menuData.selectionRoot = e.item.menuData.selectionRoot || this, e.item.selected && (this.selectedItemsMap.set(e.item, !0), this.selectedItems = [...this.selectedItems, e.item], this._selected = [...this.selected, e.item.value], this.value = this.selected.join(this.valueSeparator)));
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
    var o, t;
    if (e instanceof MouseEvent && e.button !== 0)
      return;
    const i = e.composedPath().find((r) => r instanceof Element ? r.getAttribute("role") === this.childRole : !1);
    if (e.defaultPrevented) {
      const r = this.childItems.indexOf(i);
      ((o = i == null ? void 0 : i.menuData) == null ? void 0 : o.focusRoot) === this && r !== -1 && (this.focusedItemIndex = r);
      return;
    }
    if (i != null && i.href && i.href.length > 0) {
      this.dispatchEvent(
        new Event("change", {
          bubbles: !0,
          composed: !0
        })
      );
      return;
    } else if (((t = i == null ? void 0 : i.menuData) == null ? void 0 : t.selectionRoot) === this && this.childItems.length > 0) {
      if (e.preventDefault(), i.hasSubmenu || i.open)
        return;
      this.selectOrToggleItem(i);
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
    const o = this.hasVisibleFocusInTree() || !!this.childItems.some((t) => t.hasVisibleFocusInTree());
    e.focused = o, this.setAttribute("aria-activedescendant", e.id), e.menuData.selectionRoot && e.menuData.selectionRoot !== this && e.menuData.selectionRoot.focus();
  }
  handleSlotchange({
    target: e
  }) {
    const o = e.assignedElements({
      flatten: !0
    });
    this.childItems.length !== o.length && o.forEach((t) => {
      t.triggerUpdate !== void 0 ? t.triggerUpdate() : t.childItems !== void 0 && t.childItems.forEach((i) => {
        i.triggerUpdate();
      });
    });
  }
}
b([
  a({ type: String, reflect: !0 })
], v.prototype, "label", 2);
b([
  a({ type: Boolean, reflect: !0 })
], v.prototype, "ignore", 2);
b([
  a({ type: String, reflect: !0 })
], v.prototype, "selects", 2);
b([
  a({ type: String })
], v.prototype, "value", 2);
b([
  a({ type: String, attribute: "value-separator" })
], v.prototype, "valueSeparator", 2);
b([
  a({ attribute: !1 })
], v.prototype, "selected", 1);
b([
  a({ attribute: !1 })
], v.prototype, "selectedItems", 2);
b([
  g("slot:not([name])")
], v.prototype, "menuSlot", 2);
const ae = ":host{--menu-divider-thickness: var( --divider-thickness-medium, var(--luzmo-border-width) );inline-size:auto;margin-block:var(--luzmo-menu-section-divider-margin-block, max(0px, (var(--menu-item-section-divider-height) - var(--menu-divider-thickness)) / 2));margin-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));overflow:visible}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{display:block;flex-shrink:0}";
class se extends E(P, {
  validSizes: ["s", "m", "l"]
}) {
  static get styles() {
    return [y(Y), y(ae)];
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute("role", "separator");
  }
}
const ce = ".luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.header{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-section-header-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));min-inline-size:var(--luzmo-menu-section-header-min-width, var(--menu-section-header-min-width));padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-back .header{padding:0}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{margin:0;display:inline-flex;overflow:visible;flex-direction:column}[hidden]{display:none!important}";
var ue = Object.defineProperty, U = (n, e, o, t) => {
  for (var i = void 0, r = n.length - 1, l; r >= 0; r--)
    (l = n[r]) && (i = l(e, o, i) || i);
  return i && ue(e, o, i), i;
};
class A extends v {
  constructor() {
    super(...arguments), this.headerId = "";
  }
  static get styles() {
    return [...super.styles, y(ce)];
  }
  render() {
    return s`
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
        this.headerId = this.headerId || `luzmo-menu-group-label-${T()}`;
        const o = e.id || this.headerId;
        e.id || (e.id = o), this.setAttribute("aria-labelledby", o);
      } else
        this.removeAttribute("aria-labelledby");
    this.headerElement = e;
  }
}
U([
  oe({
    slot: "header",
    flatten: !0
  })
], A.prototype, "headerElements");
U([
  I()
], A.prototype, "headerElement");
const de = '.checkmark{display:var(--luzmo-menu-checkmark-display, var(--menu-checkmark-display));font-size:var(--luzmo-menu-item-checkmark-size, var(--menu-item-checkmark-size));fill:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-default, var(--menu-checkmark-icon-color-default)));color:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-default, var(--menu-checkmark-icon-color-default)));opacity:1;grid-area:checkmarkArea;align-self:start;margin-block-start:calc(var(--luzmo-menu-item-top-to-checkmark, var(--menu-item-top-to-checkmark)) - var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.angle{font-size:var(--menu-item-angle-size);grid-area:angleArea;align-self:center;margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.luzmo-Menu-back:focus-visible{box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}.luzmo-Menu-backButton:focus-visible{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-icon-color-default, var(--menu-item-label-icon-color-default)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-icon-color-default, var(--menu-item-label-icon-color-default)));grid-area:iconArea;align-self:start}::slotted([slot=icon]){margin-inline-end:var(--luzmo-menu-item-label-text-to-visual, var(--menu-item-label-text-to-visual))}:host{cursor:pointer;box-sizing:border-box;background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)));line-height:var(--luzmo-menu-item-label-line-height, var(--menu-item-label-line-height));min-block-size:var(--luzmo-menu-item-min-height, var(--menu-item-min-height));padding-block-start:var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text));padding-block-end:var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text));padding-inline:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));grid-template:". angleAreaCollapsible . headingIconArea sectionHeadingArea . . ." "selectedArea angleAreaCollapsible checkmarkArea iconArea labelArea valueArea actionsArea angleAreaDrillIn" 1fr ". . . . descriptionArea . . ." ". . . . submenuArea . . ." ". . . . . . . ."/auto auto auto auto 1fr auto auto auto;justify-content:start;margin:0;-webkit-text-decoration:none;text-decoration:none;display:grid;align-items:center;position:relative}.luzmo-Menu-itemCheckbox{--luzmo-checkbox-top-to-text: 0;--luzmo-checkbox-text-to-control: 0;min-block-size:0}.luzmo-Menu-itemCheckbox .luzmo-Checkbox-box{margin-block-start:var(--luzmo-menu-item-top-to-checkbox, var(--menu-item-top-to-checkbox));margin-block-end:0;margin-inline-end:var(--luzmo-menu-item-text-to-control, var(--menu-item-text-to-control))}.luzmo-Menu-itemSwitch{min-block-size:0}.luzmo-Menu-itemSwitch .luzmo-Switch-switch{margin-block-start:var(--luzmo-menu-item-top-to-action, var(--menu-item-top-to-action));margin-block-end:0}#label{grid-area:submenuItemLabelArea}::slotted([slot=value]){grid-area:submenuItemValueArea}:host([focused]),:host(:focus){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-key-focus, var(--menu-item-background-color-key-focus)));outline:none}:host([focused])>#label,:host(:focus)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-focus, var(--menu-item-label-content-color-focus)))}:host([focused])>[name=description]::slotted(*),:host(:focus)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-focus, var(--menu-item-description-color-focus)))}:host([focused])>::slotted([slot=value]),:host(:focus)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-focus, var(--menu-item-value-color-focus)))}:host([focused])>.icon:not(.angle,.checkmark),:host(:focus)>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-focus, var(--menu-item-label-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-focus, var(--menu-item-label-icon-color-focus)))}:host([focused])>.angle,:host(:focus)>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host([focused])>.checkmark,:host(:focus)>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-focus, var(--menu-checkmark-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-focus, var(--menu-checkmark-icon-color-focus)))}:host:dir(rtl),:host([dir=rtl]){--menu-item-focus-indicator-direction-scalar: -1}:host(:is(:active,[active])){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-down, var(--menu-item-background-color-down)))}:host(:is(:active,[active]))>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-down, var(--menu-item-label-content-color-down)))}:host(:is(:active,[active]))>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-down, var(--menu-item-description-color-down)))}:host(:is(:active,[active]))>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-down, var(--menu-item-value-color-down)))}:host(:is(:active,[active]))>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-down, var(--menu-item-label-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-down, var(--menu-item-label-icon-color-down)))}:host(:is(:active,[active]))>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host(:is(:active,[active]))>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-down, var(--menu-checkmark-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-down, var(--menu-checkmark-icon-color-down)))}:host([disabled]),:host([aria-disabled=true]){background-color:initial}:host([disabled]) #label,:host([disabled]) ::slotted([slot=value]),:host([aria-disabled=true]) #label,:host([aria-disabled=true]) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-content-color-disabled, var(--menu-item-label-content-color-disabled)))}:host([disabled]) [name=description]::slotted(*),:host([aria-disabled=true]) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-description-color-disabled, var(--menu-item-description-color-disabled)))}:host([disabled]) ::slotted([slot=icon]),:host([aria-disabled=true]) ::slotted([slot=icon]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)));fill:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)))}:host([focused]) .luzmo-Menu-back,:host([focused]){box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * 1) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)));box-shadow:inset calc(var(--luzmo-menu-item-focus-indicator-width, var(--menu-item-focus-indicator-width)) * var(--menu-item-focus-indicator-direction-scalar, 1)) 0 0 0 var(--highcontrast-menu-item-focus-indicator-color, var(--luzmo-menu-item-focus-indicator-color, var(--menu-item-focus-indicator-color)))}:host .is-selectableMultiple{align-items:start}.is-selectableMultiple .luzmo-Menu-itemCheckbox{grid-area:checkmarkArea}.luzmo-Menu-itemSelection{grid-area:selectedArea}#label{--luzmo-switch-control-label-spacing: 0;--luzmo-switch-spacing-top-to-label: 0;font-size:var(--luzmo-menu-item-label-font-size, var(--menu-item-label-font-size));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-label-content-color-default, var(--menu-item-label-content-color-default)));-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;grid-area:labelArea}:host([selected]) #label{color:var(--menu-item-highlight-label-content-color)}::slotted([slot=value]){color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-value-color-default, var(--menu-item-value-color-default)));font-size:var(--luzmo-menu-item-label-font-size, var(--menu-item-label-font-size));grid-area:valueArea;justify-self:end}.luzmo-Menu-itemActions,::slotted([slot=value]){align-self:start;margin-inline-start:var(--luzmo-menu-item-label-to-value-area-min-spacing, var(--menu-item-label-to-value-area-min-spacing))}.luzmo-Menu-itemActions{grid-area:actionsArea}[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-item-description-color-default, var(--menu-item-description-color-default)));font-size:var(--luzmo-menu-item-description-font-size, var(--menu-item-description-font-size));-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;line-height:var(--luzmo-menu-item-description-line-height, var(--menu-item-description-line-height));grid-area:descriptionArea;margin-block-start:var(--luzmo-menu-item-label-to-description-spacing, var(--menu-item-label-to-description-spacing))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.luzmo-Menu-item--collapsible.is-open{padding-block-end:0}.luzmo-Menu-item--collapsible.is-open .angle{transform:rotate(90deg)}:host([focused]) .luzmo-Menu-item--collapsible.is-open,:host(:is(:active,[active])) .luzmo-Menu-item--collapsible.is-open,.luzmo-Menu-item--collapsible.is-open:focus{background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)))}.luzmo-Menu-item--collapsible ::slotted([slot=icon]){grid-area:headingIconArea}.luzmo-Menu-item--collapsible>::slotted([slot=icon]){padding-block-start:var(--luzmo-menu-section-header-top-edge-to-text, var(--luzmo-menu-item-top-edge-to-text, var(--menu-item-top-edge-to-text)));padding-block-end:var(--luzmo-menu-section-header-bottom-edge-to-text, var(--luzmo-menu-item-bottom-edge-to-text, var(--menu-item-bottom-edge-to-text)))}.luzmo-Menu-item--collapsible .angle{grid-area:angleAreaCollapsible}:host([has-submenu]) .angle{fill:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-drillin-icon-color-default, var(--menu-drillin-icon-color-default)));color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-drillin-icon-color-default, var(--menu-drillin-icon-color-default)));grid-area:angleAreaDrillIn;margin-inline-start:var(--luzmo-menu-item-label-to-value-area-min-spacing, var(--menu-item-label-to-value-area-min-spacing));margin-inline-end:0}:host([has-submenu]) .is-open{--menu-item-background-color-default: var( --highcontrast-menu-item-selected-background-color, var( --luzmo-menu-item-background-color-hover, var(--menu-item-background-color-hover) ) )}:host([has-submenu]) .is-open .icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)))}:host([has-submenu]) .is-open .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)))}:host([has-submenu]) .is-open .checkmark{fill:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-checkmark-icon-color-default, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)))}@media (hover: hover){:host(:hover){background-color:var(--highcontrast-menu-item-background-color-focus, var(--luzmo-menu-item-background-color-hover, var(--menu-item-background-color-hover)))}:host(:hover)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-content-color-hover, var(--menu-item-label-content-color-hover)))}:host([selected]:hover)>#label{color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-highlight-label-content-color, var(--menu-item-highlight-label-content-color)))}:host(:hover)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-description-color-hover, var(--menu-item-description-color-hover)))}:host(:hover)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-value-color-hover, var(--menu-item-value-color-hover)))}:host(:hover)>.icon:not(.angle,.checkmark){fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-item-label-icon-color-hover, var(--menu-item-label-icon-color-hover)))}:host(:hover)>.angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-collapsible-icon-color, var(--menu-collapsible-icon-color)))}:host(:hover)>.checkmark{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-checkmark-icon-color-hover, var(--menu-checkmark-icon-color-hover)))}:host([disabled]:hover),:host([aria-disabled=true]:hover){cursor:default;background-color:initial}:host([disabled]:hover) #label,:host([disabled]:hover) ::slotted([slot=value]),:host([aria-disabled=true]:hover) #label,:host([aria-disabled=true]:hover) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-content-color-disabled, var(--menu-item-label-content-color-disabled)))}:host([disabled]:hover) [name=description]::slotted(*),:host([aria-disabled=true]:hover) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-description-color-disabled, var(--menu-item-description-color-disabled)))}:host([disabled]:hover) ::slotted([slot=icon]),:host([aria-disabled=true]:hover) ::slotted([slot=icon]){color:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)));fill:var(--highcontrast-menu-item-color-disabled, var(--luzmo-menu-item-label-icon-color-disabled, var(--menu-item-label-icon-color-disabled)))}.luzmo-Menu-item--collapsible.is-open:hover{background-color:var(--highcontrast-menu-item-background-color-default, var(--luzmo-menu-item-background-color-default, var(--menu-item-background-color-default)))}:host([has-submenu]:hover) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-hover, var(--menu-drillin-icon-color-hover)))}}:host([has-submenu][focused]) .angle,:host([has-submenu]:focus) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-focus, var(--menu-drillin-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-focus, var(--menu-drillin-icon-color-focus)))}:host([has-submenu]:is(:active,[active])) .angle{fill:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-down, var(--menu-drillin-icon-color-down)));color:var(--highcontrast-menu-item-color-focus, var(--luzmo-menu-drillin-icon-color-down, var(--menu-drillin-icon-color-down)))}.luzmo-Menu-back{padding-inline:0 var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-inline:var(--luzmo-menu-back-padding-inline-start, 0) var(--luzmo-menu-back-padding-inline-end, var(--menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--luzmo-menu-back-padding-block-start, 0) var(--luzmo-menu-back-padding-block-end, 0);flex-flow:wrap;align-items:center;display:flex}.luzmo-Menu-backButton{cursor:pointer;background:none;border:0;margin:0;padding:0;display:inline-flex}:host([focused]) .luzmo-Menu-backButton{outline:var(--focus-indicator-thickness) solid var(--focus-indicator-color);outline-offset:calc((var(--focus-indicator-thickness) + 1px) * -1)}.luzmo-Menu-backHeading{color:var(--highcontrast-menu-item-color-default, var(--luzmo-menu-back-heading-color, var(--menu-section-header-color)));font-size:var(--luzmo-menu-section-header-font-size, var(--menu-section-header-font-size));font-weight:var(--luzmo-menu-section-header-font-weight, var(--menu-section-header-font-weight));line-height:var(--luzmo-menu-section-header-line-height, var(--menu-section-header-line-height));display:block}:host{text-align:initial;font-family:var(--luzmo-menu-item-font-family, var(--luzmo-font-family))}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([disabled]) [name=value]::slotted(*){color:var(--luzmo-menu-item-label-icon-color-disabled, var(--luzmo-disabled-color))}:host([has-submenu][disabled]) .angle{color:var(--luzmo-menu-item-label-icon-color-disabled, var(--luzmo-disabled-color))}#button{position:absolute;top:0;right:0;bottom:0;left:0}.icon-container>svg{vertical-align:top}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}@media (forced-colors: active){:host{forced-color-adjust:none}}::slotted([slot=submenu]){width:max-content;max-width:100%}:host([no-wrap]) #label{display:block}';
var me = Object.defineProperty, he = Object.getOwnPropertyDescriptor, h = (n, e, o, t) => {
  for (var i = t > 1 ? void 0 : t ? he(e, o) : e, r = n.length - 1, l; r >= 0; r--)
    (l = n[r]) && (i = (t ? l(e, o, i) : l(i)) || i);
  return t && i && me(e, o, i), i;
};
const ve = 100, pe = (n) => s`
  <span class="icon-container icon checkmark ${n.join(" ")}">
    ${x(j)}
  </span>
`, ge = (n) => s`
  <span class="icon-container icon angle ${n.join(" ")}">
    ${x(_, { className: "indicator" })}
  </span>
`;
class be extends Event {
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
class d extends Z(
  ee(te(D, '[slot="icon"]'))
) {
  constructor() {
    super(), this.active = !1, this.dependencyManager = new R(this), this.focused = !1, this.selected = !1, this._value = "", this.hasSubmenu = !1, this.noWrap = !1, this.renderAngleIcon = (e = []) => ge(e), this.renderCheckIcon = (e = []) => pe(e), this.open = !1, this.handleSlottableRequest = (e) => {
      var o;
      (o = this.submenuElement) == null || o.dispatchEvent(
        new Q(e.name, e.data)
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
    }), new F(this, {
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
    return [y(de)];
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
      (e, o) => e + (o.textContent || "").trim(),
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
    const e = this.iconSlot.assignedElements().map((t) => {
      const i = t.cloneNode(!0);
      return i.removeAttribute("slot"), i.classList.toggle("icon"), i;
    }), o = this.contentSlot.assignedNodes().map((t) => t.cloneNode(!0));
    return this._itemChildren = { icon: e, content: o }, this._itemChildren;
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
    const e = s`
      <slot
        name="submenu"
        @slotchange=${this.manageSubmenu}
        @luzmo-menu-item-added-or-updated=${{
      handleEvent: (o) => {
        o.clear(o.item);
      },
      capture: !0
    }}
        @focusin=${(o) => o.stopPropagation()}
      ></slot>
    `;
    return this.hasSubmenu ? (this.dependencyManager.add("luzmo-overlay"), this.dependencyManager.add("luzmo-popover"), import("./index-D3gj5tVe.js").then((o) => o.b).then((o) => o.f), import("./popover-DlkzrLpl-DVFVxfXU.js"), s`
      <luzmo-overlay
        .triggerElement=${this}
        ?disabled=${!this.hasSubmenu}
        ?open=${this.hasSubmenu && this.open && this.dependencyManager.loaded}
        .placement=${this.isLTR ? "right-start" : "left-start"}
        .offset=${[-10, -5]}
        .type=${"auto"}
        @close=${(o) => o.stopPropagation()}
        @slottable-request=${this.handleSlottableRequest}
      >
        <luzmo-popover
          @change=${(o) => {
      this.handleSubmenuChange(o), this.open = !1;
    }}
          @pointerenter=${this.handleSubmenuPointerenter}
          @pointerleave=${this.handleSubmenuPointerleave}
          @luzmo-menu-item-added-or-updated=${(o) => o.stopPropagation()}
        >
          ${e}
        </luzmo-popover>
      </luzmo-overlay>
      ${this.renderAngleIcon()}
    `) : e;
  }
  render() {
    return s`
      ${this.selected ? s`
            ${this.renderCheckIcon(
      this.hasIcon ? ["checkmark--withAdjacentIcon"] : []
    )}
          ` : C}
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
    }) : C}
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
    super.firstUpdated(e), this.setAttribute("tabindex", "-1"), this.addEventListener("pointerdown", this.handlePointerdown), this.addEventListener("pointerenter", this.closeOverlaysForRoot), this.hasAttribute("id") || (this.id = `luzmo-menu-item-${T()}`);
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
    }, ve));
  }
  /**
   * When there is a `change` event in the submenu for this item
   * then we "click" this item to cascade the selection up the
   * menu tree allowing all submenus between the initial selection
   * and the root of the tree to have their selection changes and
   * be closed.
   */
  handleSubmenuChange(e) {
    var o;
    e.stopPropagation(), (o = this.menuData.selectionRoot) == null || o.selectOrToggleItem(this);
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
    const o = e.composedPath().find(
      (t) => t !== this.overlayElement && t.localName === "luzmo-overlay"
    );
    this.overlayElement.parentOverlayToForceClose = o;
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
    var o, t;
    if (super.updated(e), e.has("label") && (this.label || e.get("label") !== void 0) && this.setAttribute("aria-label", this.label || ""), e.has("active") && (this.active || e.get("active") !== void 0) && this.active && ((o = this.menuData.selectionRoot) == null || o.closeDescendentOverlays()), this.anchorElement && (this.anchorElement.addEventListener("focus", this.proxyFocus), this.anchorElement.tabIndex = -1), e.has("selected") && this.updateAriaSelected(), e.has("hasSubmenu") && (this.hasSubmenu || e.get("hasSubmenu") !== void 0))
      if (this.hasSubmenu) {
        this.abortControllerSubmenu = new AbortController();
        const i = { signal: this.abortControllerSubmenu.signal };
        this.addEventListener("click", this.handleSubmenuClick, i), this.addEventListener("pointerenter", this.handlePointerenter, i), this.addEventListener("pointerleave", this.handlePointerleave, i), this.addEventListener("luzmo-opened", this.handleSubmenuOpen, i);
      } else
        (t = this.abortControllerSubmenu) == null || t.abort();
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
    this.isConnected && (this.dispatchEvent(new be(this)), this.willDispatchUpdate = !1);
  }
}
h([
  a({ type: Boolean, reflect: !0 })
], d.prototype, "active", 2);
h([
  a({ type: Boolean, reflect: !0 })
], d.prototype, "focused", 2);
h([
  a({ type: Boolean, reflect: !0 })
], d.prototype, "selected", 2);
h([
  a({ type: String })
], d.prototype, "value", 1);
h([
  a({ type: Boolean, reflect: !0, attribute: "has-submenu" })
], d.prototype, "hasSubmenu", 2);
h([
  g("slot:not([name])")
], d.prototype, "contentSlot", 2);
h([
  g('slot[name="icon"]')
], d.prototype, "iconSlot", 2);
h([
  a({
    type: Boolean,
    reflect: !0,
    attribute: "no-wrap",
    hasChanged() {
      return !1;
    }
  })
], d.prototype, "noWrap", 2);
h([
  g(".anchor")
], d.prototype, "anchorElement", 2);
h([
  g("luzmo-overlay")
], d.prototype, "overlayElement", 2);
h([
  a({ type: Boolean, reflect: !0 })
], d.prototype, "open", 2);
customElements.get("luzmo-menu") || customElements.define("luzmo-menu", v);
customElements.get("luzmo-menu-divider") || customElements.define("luzmo-menu-divider", se);
customElements.get("luzmo-menu-group") || customElements.define("luzmo-menu-group", A);
customElements.get("luzmo-menu-item") || customElements.define("luzmo-menu-item", d);
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
class fe {
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
    return this.host.pending ? s`
          <luzmo-progress-circle
            id="loader"
            size="s"
            indeterminate
            aria-valuetext=${e}
            class="progress-circle"
          ></luzmo-progress-circle>
        ` : s``;
  }
  /**
   * Updates the ARIA label of the host element based on the pending state.
   * Manages Cached Aria Label
   */
  updateAriaLabel() {
    const { pending: e, disabled: o, pendingLabel: t } = this.host, i = this.host.getAttribute("aria-label");
    e && !o && i !== t ? (this.cachedAriaLabel = i, this.host.setAttribute("aria-label", t || "Pending")) : (!e || o) && (this.cachedAriaLabel ? this.host.setAttribute("aria-label", this.cachedAriaLabel) : e || this.host.removeAttribute("aria-label"));
  }
  hostConnected() {
    this.cachedAriaLabel || (this.cachedAriaLabel = this.host.getAttribute("aria-label")), this.updateAriaLabel();
  }
  hostUpdated() {
    this.updateAriaLabel();
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
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = W(class extends G {
  constructor(n) {
    var e;
    if (super(n), n.type !== J.ATTRIBUTE || n.name !== "class" || ((e = n.strings) == null ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return " " + Object.keys(n).filter((e) => n[e]).join(" ") + " ";
  }
  update(n, [e]) {
    var o, t;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), n.strings !== void 0 && (this.nt = new Set(n.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in e) e[r] && !((o = this.nt) != null && o.has(r)) && this.st.add(r);
      return this.render(e);
    }
    const i = n.element.classList;
    for (const r of this.st) r in e || (i.remove(r), this.st.delete(r));
    for (const r in e) {
      const l = !!e[r];
      l === this.st.has(r) || (t = this.nt) != null && t.has(r) || (l ? (i.add(r), this.st.add(r)) : (i.remove(r), this.st.delete(r)));
    }
    return V;
  }
}), ze = "(max-width: 743px) and (hover: none) and (pointer: coarse)";
class ye {
  constructor(e, o) {
    this.key = Symbol("match-media-key"), this.matches = !1, this.host = e, this.host.addController(this), this.media = window.matchMedia(o), this.matches = this.media.matches, this.onChange = this.onChange.bind(this), e.addController(this);
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
const we = '#button{cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--luzmo-button-font-family, var(--luzmo-font-family));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--luzmo-button-line-height, var(--luzmo-line-height, 1.3));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,border-color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out,box-shadow var(--luzmo-button-animation-duration, var(--luzmo-animation-duration)) ease-out;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;position:relative;overflow:visible}#button::-moz-focus-inner{border-style:none;padding:0}#button:focus{outline:none}@media (forced-colors: active){:host{--highcontrast-picker-focus-indicator-color: Highlight;--highcontrast-picker-border-color-default: ButtonBorder;--highcontrast-picker-border-color-hover: Highlight;--highcontrast-picker-border-color-disabled: GrayText;--highcontrast-picker-content-color-default: ButtonText;--highcontrast-picker-content-color-disabled: GrayText;--highcontrast-picker-background-color: ButtonFace}#button.is-keyboardFocused,#button:focus-visible{--highcontrast-picker-border-color-hover: ButtonText}#button .label,#button:after{forced-color-adjust:none}}#button{box-sizing:border-box;max-inline-size:100%;min-inline-size:calc(var(--picker-minimum-width-multiplier) * var(--luzmo-picker-block-size, var(--picker-block-size)));block-size:var(--luzmo-picker-block-size, var(--picker-block-size));border-width:var(--luzmo-picker-border-width, var(--picker-border-width));border-radius:var(--luzmo-picker-border-radius, var(--picker-border-radius));box-shadow:var(--luzmo-picker-box-shadow, var(--picker-box-shadow));transition:background-color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)),box-shadow var(--luzmo-picker-animation-duration, var(--picker-animation-duration)),border-color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-in-out;color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-style:solid;border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));margin-block-start:var(--luzmo-picker-spacing-label-to-picker, var(--picker-spacing-label-to-picker));padding-block:0;padding-inline-start:var(--luzmo-picker-spacing-edge-to-text, var(--picker-spacing-edge-to-text));padding-inline-end:var(--luzmo-picker-spacing-edge-to-disclosure-icon, var(--picker-spacing-edge-to-disclosure-icon));display:flex}#button:after{pointer-events:none;content:"";block-size:calc(100% + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) * 2 + var(--luzmo-picker-border-width, var(--picker-border-width)) * 2);inline-size:calc(100% + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) * 2 + var(--luzmo-picker-border-width, var(--picker-border-width)) * 2);border-style:solid;border-width:var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness));border-radius:calc(var(--luzmo-picker-border-radius, var(--picker-border-radius)) + var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-border-width, var(--picker-border-width)));border-color:#0000;margin-block-start:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1);margin-inline-start:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1);position:absolute;inset-block:0;inset-inline:0}#button:active{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-active, var(--picker-background-color-active)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-active, var(--picker-border-color-active)))}#button:active:after{border-color:#0000}#button.placeholder:active .label{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-active, var(--picker-font-color-active)))}#button.is-keyboardFocused,#button:focus-visible{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-key-focus, var(--picker-background-color-key-focus)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-key-focus, var(--picker-border-color-key-focus)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-key-focus, var(--picker-font-color-key-focus)));outline:none}#button.is-keyboardFocused:after,#button:focus-visible:after{border-color:var(--highcontrast-picker-focus-indicator-color, var(--luzmo-picker-focus-indicator-color, var(--picker-focus-indicator-color)))}#button.is-keyboardFocused.placeholder,#button.placeholder:focus-visible{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-key-focus, var(--picker-font-color-key-focus)))}#button.is-keyboardFocused .disclosure-icon,#button:focus-visible .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-key-focus, var(--picker-icon-color-key-focus)))}:host([open]) #button:not(:disabled,.is-disabled){color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default-open, var(--picker-font-color-default-open)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default-open, var(--picker-background-color-default-open)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-default-open, var(--picker-border-color-default-open)))}:host([open]) #button:not(:disabled,.is-disabled) .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-default-open, var(--picker-icon-color-default-open)))}:host([invalid]) #button:not(:disabled,.is-disabled){border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-default, var(--picker-border-color-error-default)))}:host([invalid]) #button:not(:disabled,.is-disabled) .validation-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-error, var(--picker-icon-color-error)))}:host([invalid]) #button:not(:disabled,.is-disabled):active{border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-active, var(--picker-border-color-error-active)))}:host([invalid][open]) #button:not(:disabled,.is-disabled){border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-default-open, var(--picker-border-color-error-default-open)))}:host([invalid]) #button.is-keyboardFocused:not(:disabled,.is-disabled),:host([invalid]) #button:not(:disabled,.is-disabled):focus-visible{border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-error-key-focus, var(--picker-border-color-error-key-focus)))}:host([pending]) #button .disclosure-icon{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-icon-color-disabled, var(--picker-icon-color-disabled)))}.icon{flex-shrink:0}.label{white-space:nowrap;font-size:var(--luzmo-picker-font-size, var(--picker-font-size));line-height:var(--luzmo-picker-line-height, var(--picker-line-height));font-weight:var(--luzmo-picker-font-weight, var(--picker-font-weight));text-overflow:ellipsis;text-align:start;flex:auto;overflow:hidden}.label.placeholder{font-weight:var(--luzmo-picker-placeholder-font-weight, var(--picker-font-weight));font-style:var(--luzmo-picker-placeholder-font-style, var(--picker-placeholder-font-style));transition:color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-in-out;color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}.label.placeholder:active{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-active, var(--picker-font-color-active)))}.disclosure-icon{vertical-align:top;transition:color var(--luzmo-picker-animation-duration, var(--picker-animation-duration)) ease-out;margin-inline-start:var(--luzmo-picker-spacing-icon-to-disclosure-icon, var(--picker-spacing-icon-to-disclosure-icon));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-default, var(--picker-icon-color-default)));flex-shrink:0;display:inline-block;position:relative}.disclosure-icon:active{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-active, var(--picker-icon-color-active)))}luzmo-progress-circle,.validation-icon{margin-inline-start:var(--luzmo-picker-spacing-text-to-icon, var(--picker-spacing-text-to-icon))}.icon-container{display:flex;position:relative;height:100%;align-items:center;font-size:var(--luzmo-picker-disclosure-icon-size, var(--picker-disclosure-icon-size))}.icon-container.disclosure-icon{margin-inline-end:0}.label~.disclosure-icon{margin-inline-start:var(--luzmo-picker-spacing-text-to-icon, var(--picker-spacing-text-to-icon))}:host([quiet]) #button{inline-size:auto;min-inline-size:0;padding-inline:var(--luzmo-picker-spacing-edge-to-text-quiet, var(--picker-spacing-edge-to-text-quiet));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)));background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent);border:none;border-radius:0;box-shadow:none;margin-block-start:calc(var(--luzmo-picker-spacing-label-to-picker-quiet, var(--picker-spacing-label-to-picker-quiet)) + 1px)}:host([quiet]) #button.label-inline{margin-block-start:0}:host([quiet]) #button .disclosure-icon{margin-inline-end:var(--luzmo-picker-spacing-edge-to-disclosure-icon-quiet, var(--picker-spacing-edge-to-disclosure-icon-quiet))}:host([quiet]) #button:after{block-size:auto;inline-size:auto;border:none}@media (hover: hover){#button:hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover, var(--picker-font-color-hover)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-hover, var(--picker-background-color-hover)));border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-hover, var(--picker-border-color-hover)))}#button:hover .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-hover, var(--picker-icon-color-hover)))}:host([open]):not([quiet]) #button:not(:disabled,.is-disabled):hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover-open, var(--picker-font-color-hover-open)));background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-hover-open, var(--picker-background-color-hover-open)));border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-hover-open, var(--picker-border-color-hover-open)))}:host([open]) #button:not(:disabled,.is-disabled):hover .disclosure-icon{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-icon-color-hover-open, var(--picker-icon-color-hover-open)))}:host([invalid]) #button:not(:disabled,.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-error-hover, var(--picker-border-color-error-hover)))}:host([invalid][open]) #button:not(:disabled,.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover, var(--luzmo-picker-border-color-error-hover-open, var(--picker-border-color-error-hover-open)))}.label.placeholder:hover{color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-hover, var(--picker-font-color-hover)))}:host([quiet]) #button:hover{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)!important}}:host([quiet]) #button.is-keyboardFocused,:host([quiet]) #button:focus-visible{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)}:host([quiet]) #button.is-keyboardFocused:after,:host([quiet]) #button:focus-visible:after{box-shadow:0 var(--luzmo-picker-focus-indicator-thickness, var(--picker-focus-indicator-thickness)) 0 0 var(--highcontrast-picker-focus-indicator-color, var(--luzmo-picker-focus-indicator-color, var(--picker-focus-indicator-color)));margin:calc((var(--luzmo-picker-focus-indicator-gap, var(--picker-focus-indicator-gap)) + var(--luzmo-picker-border-width, var(--picker-border-width))) * -1) 0;border:none;border-radius:0}:host([quiet][open]) #button,:host([quiet][disabled]) #button#button,:host([quiet]) #button#button:disabled,:host([quiet]) #button:active{background-color:initial;background-color:var(--highcontrast-picker-background-color, transparent)}.label-inline{vertical-align:top;display:inline-flex}:host([disabled]) #button,#button:disabled{cursor:default;background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-disabled, var(--picker-background-color-disabled)));border-color:#0000;border-color:var(--highcontrast-picker-border-color-disabled, transparent);color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-font-color-disabled, var(--picker-font-color-disabled)))}:host([disabled]) #button .icon,:host([disabled]) #button .disclosure-icon,:host([disabled]) #button .validation-icon,#button:disabled .icon,#button:disabled .disclosure-icon,#button:disabled .validation-icon{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-icon-color-disabled, var(--picker-icon-color-disabled)))}:host([disabled]) #button .label.placeholder,#button:disabled .label.placeholder{color:var(--highcontrast-picker-content-color-disabled, var(--luzmo-picker-font-color-disabled, var(--picker-font-color-disabled)))}:host{--picker-box-shadow: 0px 1px 3px 0px rgba(var(--luzmo-border-color-rgb), .06);--picker-background-color-default: var(--luzmo-background-color);--picker-background-color-default-open: var(--luzmo-background-color-hover);--picker-background-color-active: var(--luzmo-background-color-down);--picker-background-color-hover: var(--luzmo-background-color-hover);--picker-background-color-hover-open: var(--luzmo-background-color-down);--picker-background-color-key-focus: var(--luzmo-background-color-down);--picker-border-color-default: var(--luzmo-border-color);--picker-border-color-default-open: var(--luzmo-border-color-hover);--picker-border-color-hover: var(--luzmo-border-color);--picker-border-color-hover-open: var(--luzmo-border-color-hover);--picker-border-color-active: var(--luzmo-border-color);--picker-border-color-key-focus: var(--luzmo-border-color);--picker-border-width: var(--luzmo-border-width);--picker-font-size: var(--luzmo-font-size);--picker-font-weight: var(--luzmo-font-weight);--picker-placeholder-font-style: var(--luzmo-font-style);--picker-line-height: var(--luzmo-line-height);--picker-block-size: 32px;--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon-inline-end: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-icon-to-disclosure-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-text-quiet: 0px;--picker-spacing-label-to-picker: 0px;--picker-spacing-label-to-picker-quiet: calc( -1 * var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon-quiet: 0px;--picker-animation-duration: var(--luzmo-animation-duration);--picker-font-color-default: var(--luzmo-font-color);--picker-font-color-default-open: var(--luzmo-font-color-hover);--picker-font-color-hover: var(--luzmo-font-color-hover);--picker-font-color-hover-open: var(--luzmo-font-color-down);--picker-font-color-active: var(--luzmo-font-color-focus);--picker-font-color-key-focus: var(--luzmo-font-color-focus);--picker-icon-color-default: var(--luzmo-font-color);--picker-icon-color-default-open: var(--luzmo-font-color-hover);--picker-icon-color-hover: var(--luzmo-font-color-hover);--picker-icon-color-hover-open: var(--luzmo-font-color-hover);--picker-icon-color-active: var(--luzmo-font-color-focus);--picker-icon-color-key-focus: var(--luzmo-font-color-focus);--picker-border-color-error-default: var(--luzmo-color-negative);--picker-border-color-error-default-open: var(--luzmo-color-negative-down);--picker-border-color-error-hover: var(--luzmo-color-negative-hover);--picker-border-color-error-hover-open: var(--luzmo-color-negative-down);--picker-border-color-error-active: var(--luzmo-color-negative-down);--picker-border-color-error-key-focus: var(--luzmo-color-negative-focus);--picker-icon-color-error: var(--luzmo-color-negative);--picker-background-color-disabled: var(--luzmo-background-color-disabled);--picker-font-color-disabled: var(--luzmo-color-disabled);--picker-icon-color-disabled: var(--luzmo-color-disabled);--picker-focus-indicator-gap: var(--luzmo-indicator-gap);--picker-focus-indicator-thickness: var(--luzmo-indicator-width);--picker-focus-indicator-color: var(--luzmo-indicator-color);--picker-disclosure-icon-size: var(--luzmo-font-size-s)}:host([size=s]){--picker-block-size: 28px;--picker-font-size: var(--luzmo-font-size-s);--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: var(--luzmo-spacing-3);--picker-spacing-text-to-icon: var(--luzmo-spacing-3);--picker-spacing-text-to-icon-inline-end: var(--luzmo-spacing-3);--picker-spacing-icon-to-disclosure-icon: var(--luzmo-spacing-3);--picker-spacing-label-to-picker-quiet: calc(-1 * var(--luzmo-spacing-3));--picker-spacing-edge-to-disclosure-icon: var(--luzmo-spacing-3);--picker-disclosure-icon-size: var(--luzmo-font-size-s)}:host([size=l]){--picker-block-size: 40px;--picker-font-size: var(--luzmo-font-size-l);--picker-border-radius: var(--luzmo-border-radius);--picker-spacing-edge-to-text: var(--luzmo-spacing-4);--picker-spacing-text-to-icon: var(--luzmo-spacing-4);--picker-spacing-text-to-icon-inline-end: var(--luzmo-spacing-4);--picker-spacing-icon-to-disclosure-icon: var(--luzmo-spacing-4);--picker-spacing-label-to-picker-quiet: calc(-1 * var(--luzmo-spacing-4));--picker-spacing-edge-to-disclosure-icon: var(--luzmo-spacing-4);--picker-disclosure-icon-size: var(--luzmo-font-size)}:host([size=xl]){--picker-block-size: 48px;--picker-font-size: var(--luzmo-font-size-xl);--picker-border-radius: var(--luzmo-border-radius-l);--picker-spacing-edge-to-text: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-text-to-icon-inline-end: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-icon-to-disclosure-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-label-to-picker-quiet: calc( -1 * var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-spacing-edge-to-disclosure-icon: calc( var(--luzmo-spacing-4) + var(--luzmo-spacing-1) );--picker-disclosure-icon-size: var(--luzmo-font-size-l)}:host([variant=highlight]) ::slotted(luzmo-menu-item[selected]){--menu-item-highlight-label-content-color: var(--luzmo-primary-inverse-color);--menu-checkmark-display: var(--menu-checkmark-display-hidden);padding-inline-start:var(--luzmo-menu-item-label-inline-edge-to-content, var(--menu-item-label-inline-edge-to-content));background-color:var(--luzmo-menu-item-highlight-label-background-color, var(--menu-item-highlight-label-background-color, var(--luzmo-border-color)))}:host{display:inline-flex;vertical-align:top;max-inline-size:100%;inline-size:var(--luzmo-picker-inline-size, var(--picker-inline-size));min-inline-size:calc(var(--picker-minimum-width-multiplier) * var(--luzmo-picker-block-size, var(--picker-block-size)))}:host([quiet]){width:auto;min-width:0}:host([disabled]){pointer-events:none}#button{width:100%;min-width:100%;max-width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}.picker,.validation-icon{flex-shrink:0}luzmo-overlay{pointer-events:none}luzmo-menu{pointer-events:initial}:host>luzmo-menu{display:none}:host([focused]:not([quiet])) #button #label.placeholder{color:var(--picker-placeholder-text-color-key-focus, var(--alias-placeholder-text-color-hover))}#label.visually-hidden~.picker{margin-inline-start:auto}:host([focused]:not([quiet],[pending])) #button .picker{color:var(--picker-icon-color-key-focus, var(--alias-icon-color-focus))}.visually-hidden{border:0;clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}luzmo-overlay:not(:defined){display:none}#button.remove-focus-ring-safari-hack:focus-visible{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}#button.remove-focus-ring-safari-hack:after{border:none}#button.remove-focus-ring-safari-hack:focus-visible:after{box-shadow:none}#button.remove-focus-ring-safari-hack:active{background-color:var(--highcontrast-picker-background-color, var(--luzmo-picker-background-color-default, var(--picker-background-color-default)));border-color:var(--highcontrast-picker-border-color-default, var(--luzmo-picker-border-color-default, var(--picker-border-color-default)));color:var(--highcontrast-picker-content-color-default, var(--luzmo-picker-font-color-default, var(--picker-font-color-default)))}';
var M = /* @__PURE__ */ ((n) => (n[n.desktop = 0] = "desktop", n[n.mobile = 1] = "mobile", n))(M || {});
class q {
  constructor(e, o) {
    this.target = e, this.host = o, this.preventNextToggle = "no", this.pointerdownState = !1, this.enterKeydownOn = null, this._open = !1, this.target = e, this.host = o, this.host.addController(this), this.init();
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
        const { LuzmoOverlay: o } = await import("./index-D3gj5tVe.js").then((t) => t.i);
        this.overlay = new o(), this.host.open = !0, this.host.requestUpdate();
      }), import("./index-D3gj5tVe.js").then((o) => o.i);
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
    var o;
    e.composedPath()[0] === e.target && (e.newState === "closed" && (this.preventNextToggle === "no" ? this.open = !1 : this.pointerdownState || (o = this.overlay) == null || o.manuallyKeepOpen()), this.open || (this.host.optionsMenu.updateSelectedItemIndex(), this.host.optionsMenu.closeDescendentOverlays()));
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
class xe extends q {
  constructor() {
    super(...arguments), this.type = M.desktop;
  }
  handlePointerdown(e) {
    if (e.button !== 0 || e.pointerType === "touch")
      return;
    this.pointerdownState = this.open, this.preventNextToggle = "maybe";
    let o = 0;
    const t = () => {
      cancelAnimationFrame(o), o = requestAnimationFrame(() => {
        document.removeEventListener("pointerup", t), document.removeEventListener("pointercancel", t), this.target.removeEventListener("click", t), requestAnimationFrame(() => {
          this.preventNextToggle = "no";
        });
      });
    };
    document.addEventListener("pointerup", t), document.addEventListener("pointercancel", t), this.target.addEventListener("click", t), this.handleActivate();
  }
  handleActivate(e) {
    this.enterKeydownOn && this.enterKeydownOn !== this.target || this.preventNextToggle !== "yes" && ((e == null ? void 0 : e.type) === "click" && this.open !== this.pointerdownState || this.host.toggle());
  }
  init() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = new AbortController();
    const { signal: o } = this.abortController;
    this.target.addEventListener(
      "click",
      (t) => this.handleActivate(t),
      {
        signal: o
      }
    ), this.target.addEventListener(
      "pointerdown",
      (t) => this.handlePointerdown(t),
      { signal: o }
    ), this.target.addEventListener(
      "focus",
      (t) => this.handleButtonFocus(t),
      {
        signal: o
      }
    );
  }
}
const S = "remove-focus-ring-safari-hack";
class Ie extends q {
  constructor() {
    super(...arguments), this.type = M.mobile;
  }
  handleClick() {
    this.preventNextToggle === "no" && (this.open = !this.open), this.preventNextToggle = "no";
  }
  handlePointerdown() {
    this.preventNextToggle = this.open ? "yes" : "no", $() && this.target.classList.add(S);
  }
  handleFocusOut() {
    this.host.open || $() && this.target.classList.contains(S) && this.target.classList.remove(S);
  }
  init() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = new AbortController();
    const { signal: o } = this.abortController;
    this.target.addEventListener("click", () => this.handleClick(), {
      signal: o
    }), this.target.addEventListener(
      "pointerdown",
      () => this.handlePointerdown(),
      { signal: o }
    ), this.target.addEventListener("focusout", () => this.handleFocusOut(), {
      signal: o
    });
  }
}
const L = {
  desktop: xe,
  mobile: Ie
};
var Se = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, u = (n, e, o, t) => {
  for (var i = t > 1 ? void 0 : t ? Ce(e, o) : e, r = n.length - 1, l; r >= 0; r--)
    (l = n[r]) && (i = (t ? l(e, o, i) : l(i)) || i);
  return t && i && Se(e, o, i), i;
};
const Ee = () => s`
  <div class="disclosure-icon icon">
    ${x(K, { className: "indicator" })}
  </div>
`, Ae = () => s`
  <div class="icon-container validation-icon icon">
    ${x(N)}
  </div>
`, O = "option-picker";
class c extends E(D, {
  noDefaultSize: !0
}) {
  /**
   * Initializes the `PendingStateController` for the Picker component.
   * The `PendingStateController` manages the pending state of the Picker.
   */
  constructor() {
    super(), this.disabled = !1, this.focused = !1, this.invalid = !1, this.pending = !1, this.pendingLabel = "Pending", this.open = !1, this.readonly = !1, this.placement = "bottom-start", this.quiet = !1, this.value = "", this.selects = "single", this.dependencyManager = new R(this), this.isMobile = new ye(this, ze), this.listRole = "listbox", this.itemRole = "option", this.hasRenderedOverlay = !1, this._selfManageFocusElement = !1, this.deprecatedMenu = null, this.selectionPromise = Promise.resolve(), this.willManageSelection = !1, this.recentlyConnected = !1, this.enterKeydownOn = null, this.handleSlottableRequest = (e) => {
    }, this.applyFocusElementLabel = (e, o) => {
      this.appliedLabel = e, this.labelAlignment = o.sideAligned ? "inline" : void 0;
    }, this.handleKeydown = (e) => {
      this.focused = !0, !(e.code !== "ArrowDown" && e.code !== "ArrowUp") && (e.stopPropagation(), e.preventDefault(), this.toggle(!0));
    }, this.renderAngleIcon = () => Ee(), this.renderAlertIcon = () => Ae(), this.handleEnterKeydown = (e) => {
      if (e.code === "Enter") {
        if (this.enterKeydownOn) {
          e.preventDefault();
          return;
        }
        this.enterKeydownOn = e.target, this.addEventListener(
          "keyup",
          (o) => {
            o.code === "Enter" && (this.enterKeydownOn = null);
          },
          { once: !0 }
        );
      }
    }, this.pendingStateController = new fe(this);
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
    const o = this.selectedItem;
    this._selectedItem = e, this.requestUpdate("selectedItem", o);
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
    const o = e.target, [t] = o.selectedItems;
    e.stopPropagation(), e.cancelable ? this.setValueFromItem(t, e) : (this.open = !1, this.strategy && (this.strategy.open = !1));
  }
  handleButtonFocus(e) {
    var o;
    (o = this.strategy) == null || o.handleButtonFocus(e);
  }
  toggle(e) {
    this.readonly || this.pending || (this.open = e === void 0 ? !this.open : e, this.strategy && (this.strategy.open = this.open), this._selfManageFocusElement = this.open);
  }
  close() {
    this.readonly || this.strategy && (this.open = !1, this.strategy.open = !1);
  }
  bindEvents() {
    var e;
    (e = this.strategy) == null || e.abort(), this.strategy = this.isMobile.matches ? new L.mobile(this.button, this) : new L.desktop(this.button, this);
  }
  connectedCallback() {
    super.connectedCallback(), this.recentlyConnected = this.hasUpdated;
  }
  disconnectedCallback() {
    var e;
    this.close(), (e = this.strategy) == null || e.releaseDescription(), super.disconnectedCallback();
  }
  async setValueFromItem(e, o) {
    this.open = !1, this.strategy && (this.strategy.open = !1);
    const t = this.selectedItem, i = this.value;
    if (this.selectedItem = e, this.value = (e == null ? void 0 : e.value) ?? "", await this.updateComplete, !this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: !0,
        // Allow it to be prevented.
        cancelable: !0,
        composed: !0,
        detail: this.value
      })
    ) && this.selects) {
      o && o.preventDefault(), this.setMenuItemSelected(this.selectedItem, !1), t && this.setMenuItemSelected(t, !0), this.selectedItem = t, this.value = i, this.open = !0, this.strategy && (this.strategy.open = !0);
      return;
    } else if (!this.selects) {
      this.selectedItem = t, this.value = i;
      return;
    }
    t && this.setMenuItemSelected(t, !1), this.setMenuItemSelected(e, !!this.selects);
  }
  setMenuItemSelected(e, o) {
    this.selects != null && (e.selected = o);
  }
  get containerStyles() {
    return this.isMobile.matches ? {
      "--swc-menu-width": "100%"
    } : {};
  }
  set selectedItemContent(e) {
    if (e === this.selectedItemContent)
      return;
    const o = this.selectedItemContent;
    this._selectedItemContent = e, this.requestUpdate("selectedItemContent", o);
  }
  handleTooltipSlotchange(e) {
    this.tooltipEl = e.target.assignedElements()[0];
  }
  renderLabelContent(e) {
    return this.value && this.selectedItem ? e : s`
      <slot name="label" id="label">
        <span aria-hidden=${w(this.appliedLabel ? void 0 : "true")}>
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
    }, o = this.appliedLabel || this.label;
    return [
      s`
        <div id="icon" ?hidden=${this.icons === "none"}>
          ${this.selectedItemContent.icon}
        </div>
        <div
          id=${w(this.value && this.selectedItem ? "label" : void 0)}
          class=${ke(e)}
        >
          ${this.renderLabelContent(this.selectedItemContent.content)}
        </div>
        ${this.value && this.selectedItem ? s`
              <div
                aria-hidden="true"
                class="visually-hidden"
                id="applied-label"
              >
                ${o}
                <slot name="label"></slot>
              </div>
            ` : s` <span hidden id="applied-label">${o}</span> `}
        ${this.invalid && !this.pending ? s` ${this.renderAlertIcon()} ` : C}
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
    var o, t, i;
    if (((o = this.strategy) == null ? void 0 : o.overlay) === void 0)
      return e;
    const r = this.renderContainer(e);
    return H(r, (t = this.strategy) == null ? void 0 : t.overlay, {
      host: this
    }), (i = this.strategy) == null ? void 0 : i.overlay;
  }
  get renderDescriptionSlot() {
    return s`
      <div id=${O}>
        <slot name="description"></slot>
      </div>
    `;
  }
  // a helper to throw focus to the button is needed because Safari
  // won't include buttons in the tab order even with tabindex="0"
  render() {
    return this.tooltipEl && (this.tooltipEl.disabled = this.open), s`
      <span
        id="focus-helper"
        tabindex=${this.focused || this.open ? "-1" : "0"}
        @focus=${this.handleHelperFocus}
        aria-describedby=${O}
      ></span>
      <button
        aria-controls=${w(this.open ? "menu" : void 0)}
        aria-describedby="tooltip"
        aria-expanded=${this.open ? "true" : "false"}
        aria-haspopup="true"
        aria-labelledby="loader icon label applied-label"
        id="button"
        class=${w(
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
    var o, t;
    this.selects && (this.selects = "single"), e.has("disabled") && this.disabled && this.strategy && (this.open = !1, this.strategy.open = !1), e.has("pending") && this.pending && this.strategy && (this.open = !1, this.strategy.open = !1), e.has("value") && this.shouldScheduleManageSelection(), this.hasUpdated || (this.deprecatedMenu = this.querySelector(":scope > luzmo-menu"), (o = this.deprecatedMenu) == null || o.toggleAttribute("ignore", !0), (t = this.deprecatedMenu) == null || t.setAttribute("selects", "inherit")), super.update(e);
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
    return s`
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
    const o = s`
      ${this.dismissHelper} ${e} ${this.dismissHelper}
    `;
    return this.dependencyManager.add("luzmo-popover"), import("./index-Dwe6gWt0.js"), s`
      <luzmo-popover
        id="popover"
        size=${this.size}
        role="presentation"
        style=${X(this.containerStyles)}
        placement=${this.placement}
      >
        ${o}
      </luzmo-popover>
    `;
  }
  get renderMenu() {
    const e = s`
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
      (o) => this.selectionResolver = o
    );
    let e;
    await this.optionsMenu.updateComplete, this.recentlyConnected && (await new Promise((o) => requestAnimationFrame(() => o(!0))), this.recentlyConnected = !1), this.menuItems.forEach((o) => {
      this.value === o.value && !o.disabled ? e = o : o.selected = !1;
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
u([
  I()
], c.prototype, "appliedLabel", 2);
u([
  g("#button")
], c.prototype, "button", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "disabled", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "focused", 2);
u([
  a({ type: String, reflect: !0 })
], c.prototype, "icons", 2);
u([
  a({ type: String, reflect: !0 })
], c.prototype, "variant", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "invalid", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "pending", 2);
u([
  a({ type: String, attribute: "pending-label" })
], c.prototype, "pendingLabel", 2);
u([
  a()
], c.prototype, "label", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "open", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "readonly", 2);
u([
  I()
], c.prototype, "labelAlignment", 2);
u([
  g("luzmo-menu")
], c.prototype, "optionsMenu", 2);
u([
  g("luzmo-overlay")
], c.prototype, "overlayElement", 2);
u([
  a()
], c.prototype, "placement", 2);
u([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "quiet", 2);
u([
  a({ type: String })
], c.prototype, "value", 2);
u([
  a({ attribute: !1 })
], c.prototype, "selectedItem", 1);
u([
  I()
], c.prototype, "selectedItemContent", 1);
class Me extends c {
  constructor() {
    super(...arguments), this.handleKeydown = (e) => {
      const { code: o } = e;
      if (this.focused = !0, !o.startsWith("Arrow") || this.readonly || this.pending)
        return;
      if (o === "ArrowUp" || o === "ArrowDown") {
        this.toggle(!0), e.preventDefault();
        return;
      }
      e.preventDefault();
      const t = this.selectedItem ? this.menuItems.indexOf(this.selectedItem) : -1, i = t < 0 || o === "ArrowRight" ? 1 : -1;
      let r = t + i;
      for (; this.menuItems[r] && this.menuItems[r].disabled; )
        r += i;
      !this.menuItems[r] || this.menuItems[r].disabled || (!this.value || r !== t) && this.setValueFromItem(this.menuItems[r]);
    };
  }
  static get styles() {
    return [y(we)];
  }
  get containerStyles() {
    const e = super.containerStyles;
    return this.quiet || (e["min-width"] = `${this.offsetWidth}px`), e;
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
const $e = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const n = document.createElement("style");
    n.setAttribute("data-luzmo-vars", ""), n.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(n);
  }
};
$e();
customElements.get("luzmo-picker") || customElements.define("luzmo-picker", Me);
