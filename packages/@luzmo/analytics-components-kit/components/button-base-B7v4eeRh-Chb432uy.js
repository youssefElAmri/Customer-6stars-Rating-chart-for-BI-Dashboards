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
import { R as h, p as l, H as p, q as k, h as C, o as z, c as $ } from "./get-css-variable-Cb4e-hdr.js";
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
var A = Object.defineProperty, u = (n, t, e, i) => {
  for (var s = void 0, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (s = o(t, e, s) || s);
  return s && A(t, e, s), s;
};
function w(n) {
  class t extends n {
    renderAnchor({
      id: i,
      className: s,
      ariaHidden: r,
      labelledby: o,
      tabindex: f,
      // prettier-ignore
      anchorContent: a = p`<slot></slot>`
    }) {
      return p`
            <a
              id=${i}
              class=${l(s)}
              href=${l(this.href)}
              download=${l(this.download)}
              target=${l(this.target)}
              aria-label=${l(this.label)}
              aria-labelledby=${l(o)}
              aria-hidden=${l(r ? "true" : void 0)}
              tabindex=${l(f)}
              referrerpolicy=${l(this.referrerpolicy)}
              rel=${l(this.rel)}
          >${a}</a>
        `;
    }
  }
  return u([
    h()
  ], t.prototype, "download"), u([
    h()
  ], t.prototype, "label"), u([
    h()
  ], t.prototype, "href"), u([
    h()
  ], t.prototype, "target"), u([
    h()
  ], t.prototype, "referrerpolicy"), u([
    h()
  ], t.prototype, "rel"), t;
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
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let E = class {
  constructor(t, { target: e, config: i, callback: s, skipInitial: r }) {
    this.t = /* @__PURE__ */ new Set(), this.o = !1, this.i = !1, this.h = t, e !== null && this.t.add(e ?? t), this.l = i, this.o = r ?? this.o, this.callback = s, window.MutationObserver ? (this.u = new MutationObserver((o) => {
      this.handleChanges(o), this.h.requestUpdate();
    }), t.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
  }
  handleChanges(t) {
    var e;
    this.value = (e = this.callback) == null ? void 0 : e.call(this, t, this.u);
  }
  hostConnected() {
    for (const t of this.t) this.observe(t);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    const t = this.u.takeRecords();
    (t.length || !this.o && this.i) && this.handleChanges(t), this.i = !1;
  }
  observe(t) {
    this.t.add(t), this.u.observe(t, this.l), this.i = !0, this.h.requestUpdate();
  }
  disconnect() {
    this.u.disconnect();
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function O(n) {
  return (t, e) => {
    const { slot: i } = n ?? {}, s = "slot" + (i ? `[name=${i}]` : ":not([name])");
    return k(t, e, { get() {
      var r;
      const o = (r = this.renderRoot) == null ? void 0 : r.querySelector(s);
      return (o == null ? void 0 : o.assignedNodes(n)) ?? [];
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
var S = Object.defineProperty, g = (n, t, e, i) => {
  for (var s = void 0, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (s = o(t, e, s) || s);
  return s && S(t, e, s), s;
};
const m = Symbol("assignedNodes");
function H(n, t, e = []) {
  var i, s;
  const r = (f) => (a) => f.matches(a);
  class o extends (s = n, i = m, s) {
    constructor(...a) {
      super(a), this.slotHasContent = !1, new E(this, {
        config: {
          characterData: !0,
          subtree: !0
        },
        callback: (b) => {
          for (const c of b)
            if (c.type === "characterData") {
              this.manageTextObservedSlot();
              return;
            }
        }
      });
    }
    manageTextObservedSlot() {
      if (!this[m])
        return;
      const a = [...this[m]].filter(
        (b) => {
          const c = b;
          return c.tagName ? !e.some(r(c)) : c.textContent ? c.textContent.trim() : !1;
        }
      );
      this.slotHasContent = a.length > 0;
    }
    update(a) {
      if (!this.hasUpdated) {
        const { childNodes: b } = this, c = [...b].filter((x) => {
          const d = x;
          return d.tagName ? e.some(r(d)) ? !1 : (
            // Confirm it would exist in a targeted slot if there was one supplied.
            t ? d.getAttribute("slot") === t : !d.hasAttribute("slot")
          ) : d.textContent ? d.textContent.trim() : !1;
        });
        this.slotHasContent = c.length > 0;
      }
      super.update(a);
    }
    firstUpdated(a) {
      super.firstUpdated(a), this.updateComplete.then(() => {
        this.manageTextObservedSlot();
      });
    }
  }
  return g([
    h({ type: Boolean, attribute: !1 })
  ], o.prototype, "slotHasContent"), g([
    O({
      slot: t,
      flatten: !0
    })
  ], o.prototype, i), o;
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
const L = ":host{display:inline-flex;vertical-align:top;--parent-element-progress-circle-size: 18px;--icon-size: 18px}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;top:0;right:0;bottom:0;left:0}::slotted(luzmo-overlay),::slotted(luzmo-tooltip){position:absolute}:host:after{pointer-events:none}::slotted(*){pointer-events:none}::slotted([slot=icon]){--parent-element-icon-vertical-align: 0}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentcolor;stroke:currentcolor;block-size:var(--luzmo-button-icon-size, var(--icon-size));inline-size:var(--luzmo-button-icon-size, var(--icon-size))}[icon-only]+#label{display:contents}:host([size=s]){--parent-element-progress-circle-size: 16px;--icon-size: 16px}:host([size=l]){--parent-element-progress-circle-size: 20px;--icon-size: 20px}:host([size=xl]){--parent-element-progress-circle-size: 22px;--icon-size: 22px}";
var N = Object.defineProperty, y = (n, t, e, i) => {
  for (var s = void 0, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (s = o(t, e, s) || s);
  return s && N(t, e, s), s;
};
class v extends H(
  w(z),
  "",
  ["luzmo-overlay,luzmo-tooltip"]
) {
  constructor() {
    super(), this.active = !1, this.type = "button", this.proxyFocus = this.proxyFocus.bind(this), this.addEventListener("click", this.handleClickCapture, {
      capture: !0
    });
  }
  static get styles() {
    return [C(L)];
  }
  get focusElement() {
    return this;
  }
  get hasLabel() {
    return this.slotHasContent;
  }
  get buttonContent() {
    return [
      p` <slot name="icon" ?icon-only=${!this.hasLabel}></slot> `,
      p`
        <span id="label">
          <slot @slotchange=${this.manageTextObservedSlot}></slot>
        </span>
      `
    ];
  }
  handleClickCapture(t) {
    if (this.disabled)
      return t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), !1;
    this.shouldProxyClick();
  }
  proxyFocus() {
    this.focus();
  }
  shouldProxyClick() {
    let t = !1;
    if (this.anchorElement)
      this.anchorElement.click(), t = !0;
    else if (this.type !== "button") {
      const e = document.createElement("button");
      e.type = this.type, this.insertAdjacentElement("afterend", e), e.click(), e.remove(), t = !0;
    }
    return t;
  }
  renderAnchor() {
    return p`
      ${this.buttonContent}
      ${super.renderAnchor({
      id: "button",
      ariaHidden: !0,
      className: "button anchor hidden"
    })}
    `;
  }
  renderButton() {
    return p` ${this.buttonContent} `;
  }
  render() {
    return this.href && this.href.length > 0 ? this.renderAnchor() : this.renderButton();
  }
  handleKeydown(t) {
    const { code: e } = t;
    switch (e) {
      case "Space": {
        t.preventDefault(), this.href === void 0 && (this.addEventListener("keyup", this.handleKeyup), this.active = !0);
        break;
      }
    }
  }
  handleKeypress(t) {
    const { code: e } = t;
    switch (e) {
      case "Enter":
      case "NumpadEnter": {
        this.click();
        break;
      }
    }
  }
  handleKeyup(t) {
    const { code: e } = t;
    switch (e) {
      case "Space": {
        this.removeEventListener("keyup", this.handleKeyup), this.active = !1, this.click();
        break;
      }
    }
  }
  manageAnchor() {
    this.href && this.href.length > 0 ? (!this.hasAttribute("role") || this.getAttribute("role") === "button") && this.setAttribute("role", "link") : (!this.hasAttribute("role") || this.getAttribute("role") === "link") && this.setAttribute("role", "button");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), t.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label")), this.manageAnchor(), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("keypress", this.handleKeypress);
  }
  updated(t) {
    super.updated(t), t.has("href") && this.manageAnchor(), this.anchorElement && (this.anchorElement.addEventListener("focus", this.proxyFocus), this.anchorElement.tabIndex = -1);
  }
  update(t) {
    super.update(t), t.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
  }
}
y([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "active");
y([
  h({ type: String })
], v.prototype, "type");
y([
  $(".anchor")
], v.prototype, "anchorElement");
export {
  v as a,
  E as b,
  w as c,
  O as m,
  H as y
};
