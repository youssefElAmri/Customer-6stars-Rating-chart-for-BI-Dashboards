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
import "./index-CAZq2ENs.js";
import { r as c } from "./index-Dpr9NLmc.js";
import { E as p, a as u, e as m, k as h, r as b, t as v, s as f, m as r, C as z, f as y, x as _, n as g, l as C } from "./get-css-variable-Cb4e-hdr.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = (t) => t ?? p, E = ":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-grand-totals-gap, var(--display-settings-grand-totals-gap))}:host{--display-settings-grand-totals-gap: var(--luzmo-spacing-3)}:host([size=s]){--display-settings-grand-totals-gap: var(--luzmo-spacing-3)}:host([size=l]){--display-settings-grand-totals-gap: var(--luzmo-spacing-4)}:host([size=xl]){--display-settings-grand-totals-gap: var(--luzmo-spacing-5)}";
var $ = Object.defineProperty, O = Object.getOwnPropertyDescriptor, o = (t, s, a, l) => {
  for (var e = l > 1 ? void 0 : l ? O(s, a) : s, i = t.length - 1, d; i >= 0; i--)
    (d = t[i]) && (e = (l ? d(s, a, e) : d(e)) || e);
  return l && e && $(s, a, e), e;
};
let n = class extends u(h, {
  validSizes: Object.values(m)
}) {
  constructor() {
    super(...arguments), this.language = "en", this.slotContent = {};
  }
  static get styles() {
    return [b(E)];
  }
  willUpdate(t) {
    var s, a;
    t.has("slotContent") && (this._enabled = ((a = (s = this.slotContent) == null ? void 0 : s.grandTotals) == null ? void 0 : a.enabled) ?? !1);
  }
  updated(t) {
    t.has("language") && ([...v].includes(this.language ?? "en") || this.language === "en") && f(this.language);
  }
  toggleGrandTotals() {
    this._enabled = !this._enabled, this.sendEvent();
  }
  sendEvent() {
    const t = {
      enabled: !!this._enabled
    };
    this.dispatchEvent(
      new CustomEvent("slot-content-changed", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContent: {
            ...this.slotContent,
            grandTotals: t
          }
        }
      })
    );
  }
  render() {
    return _`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="grand-totals"
            >${r("Grand totals", {
      desc: "Label for grand totals setting in a table"
    })}</luzmo-field-label
          >
          <luzmo-action-button
            id="grand-totals"
            toggles
            emphasized
            .size=${this.size}
            ?selected=${this._enabled}
            class=${x(this._enabled ? "active" : "inactive")}
            @click=${this.toggleGrandTotals}
          >
            <luzmo-icon
              slot="icon"
              .icon=${this._enabled ? z : y}
            ></luzmo-icon>
            ${this._enabled ? r("Enabled", { desc: "Option set to enabled" }) : r("Disabled", { desc: "Option set to disabled" })}
          </luzmo-action-button>
        </div>
      </div>
    </div>`;
  }
};
o([
  g({ type: String, reflect: !0 })
], n.prototype, "language", 2);
o([
  g()
], n.prototype, "slotContent", 2);
o([
  c()
], n.prototype, "_enabled", 2);
n = o([
  C()
], n);
customElements.get("luzmo-display-settings-grand-totals") || customElements.define(
  "luzmo-display-settings-grand-totals",
  n
);
export {
  n as LuzmoDisplaySettingsGrandTotals
};
