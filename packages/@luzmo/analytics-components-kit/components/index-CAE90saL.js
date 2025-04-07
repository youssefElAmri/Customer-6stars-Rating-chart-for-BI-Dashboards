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
import { r as b, e as u } from "./index-Dpr9NLmc.js";
import { a as c, e as p, k as m, r as v, t as f, s as z, m as o, x as r, C as _, f as y, n as h, l as $ } from "./get-css-variable-Cb4e-hdr.js";
import "./index-BJg9ht4B.js";
const C = ":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-binning-gap, var(--display-settings-binning-gap))}:host{--display-settings-binning-gap: var(--luzmo-spacing-3)}:host([size=s]){--display-settings-binning-gap: var(--luzmo-spacing-3)}:host([size=l]){--display-settings-binning-gap: var(--luzmo-spacing-4)}:host([size=xl]){--display-settings-binning-gap: var(--luzmo-spacing-5)}";
var w = Object.defineProperty, B = Object.getOwnPropertyDescriptor, a = (i, e, l, n) => {
  for (var t = n > 1 ? void 0 : n ? B(e, l) : e, d = i.length - 1, g; d >= 0; d--)
    (g = i[d]) && (t = (n ? g(e, l, t) : g(t)) || t);
  return n && t && w(e, l, t), t;
};
let s = class extends c(m, {
  validSizes: Object.values(p)
}) {
  constructor() {
    super(...arguments), this.language = "en", this.slotContent = {}, this._enabled = !1, this._binWidth = 10;
  }
  static get styles() {
    return [v(C)];
  }
  willUpdate(i) {
    var e, l, n, t;
    i.has("slotContent") && (this._enabled = ((l = (e = this.slotContent) == null ? void 0 : e.bins) == null ? void 0 : l.enabled) ?? !1, this._binWidth = ((t = (n = this.slotContent) == null ? void 0 : n.bins) == null ? void 0 : t.number) ?? 10);
  }
  updated(i) {
    i.has("language") && ([...f].includes(this.language ?? "en") || this.language === "en") && z(this.language);
  }
  toggleBinning() {
    this._enabled = !this._enabled, this.sendEvent();
  }
  setBinning() {
    this._binWidth = this.binWidthElement.value, this.sendEvent();
  }
  sendEvent() {
    const i = {
      enabled: !!this._enabled,
      number: this._binWidth ?? 10
    };
    this.dispatchEvent(
      new CustomEvent("slot-content-changed", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContent: {
            ...this.slotContent,
            bins: i
          }
        }
      })
    );
  }
  renderBinWidth() {
    return r`<div class="setting">
      <luzmo-field-label for="bin-width"
        >${o("Bin width", {
      desc: "The width of each bin in the histogram"
    })}</luzmo-field-label
      >
      <luzmo-number-field
        id="bin-width"
        min="0"
        .value=${this._binWidth}
        .size=${this.size}
        @change=${this.setBinning}
      ></luzmo-number-field>
    </div>`;
  }
  render() {
    return r`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="binning"
            >${o("Binning", {
      desc: 'Grouping numeric data into intervals or "bins" for analysis and visualization'
    })}</luzmo-field-label
          >
          <luzmo-action-button
            id="binning"
            toggles
            emphasized
            .size=${this.size}
            ?selected=${this._enabled}
            class=${this._enabled ? "active" : "inactive"}
            @click=${this.toggleBinning}
          >
            <luzmo-icon
              slot="icon"
              .icon=${this._enabled ? _ : y}
            ></luzmo-icon>
            ${this._enabled ? o("Enabled", { desc: "Option set to enabled" }) : o("Disabled", { desc: "Option set to disabled" })}
          </luzmo-action-button>
        </div>
        ${this._enabled ? this.renderBinWidth() : ""}
      </div>
    </div>`;
  }
};
a([
  h({ type: String, reflect: !0 })
], s.prototype, "language", 2);
a([
  h()
], s.prototype, "slotContent", 2);
a([
  b()
], s.prototype, "_enabled", 2);
a([
  u("#bin-width")
], s.prototype, "binWidthElement", 2);
s = a([
  $()
], s);
customElements.get("luzmo-display-settings-binning") || customElements.define(
  "luzmo-display-settings-binning",
  s
);
export {
  s as LuzmoDisplaySettingsBinning
};
