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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("./index-rYO-mkTp.cjs");const d=require("./index-9FgiJszO.cjs"),i=require("./get-css-variable-CGmd_tgb.cjs");require("./index-D9_LYCNr.cjs");const r=":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-binning-gap, var(--display-settings-binning-gap))}:host{--display-settings-binning-gap: var(--luzmo-spacing-3)}:host([size=s]){--display-settings-binning-gap: var(--luzmo-spacing-3)}:host([size=l]){--display-settings-binning-gap: var(--luzmo-spacing-4)}:host([size=xl]){--display-settings-binning-gap: var(--luzmo-spacing-5)}";var u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,a=(o,n,s,e)=>{for(var t=e>1?void 0:e?h(n,s):n,l=o.length-1,g;l>=0;l--)(g=o[l])&&(t=(e?g(n,s,t):g(t))||t);return e&&t&&u(n,s,t),t};exports.LuzmoDisplaySettingsBinning=class extends i.m(i.kt,{validSizes:Object.values(i.d$2)}){constructor(){super(...arguments),this.language="en",this.slotContent={},this._enabled=!1,this._binWidth=10}static get styles(){return[i.r(r)]}willUpdate(n){var s,e,t,l;n.has("slotContent")&&(this._enabled=((e=(s=this.slotContent)==null?void 0:s.bins)==null?void 0:e.enabled)??!1,this._binWidth=((l=(t=this.slotContent)==null?void 0:t.bins)==null?void 0:l.number)??10)}updated(n){n.has("language")&&([...i.targetLocales].includes(this.language??"en")||this.language==="en")&&i.setLocale(this.language)}toggleBinning(){this._enabled=!this._enabled,this.sendEvent()}setBinning(){this._binWidth=this.binWidthElement.value,this.sendEvent()}sendEvent(){const n={enabled:!!this._enabled,number:this._binWidth??10};this.dispatchEvent(new CustomEvent("slot-content-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{slotContent:{...this.slotContent,bins:n}}}))}renderBinWidth(){return i.x`<div class="setting">
      <luzmo-field-label for="bin-width"
        >${i.msg("Bin width",{desc:"The width of each bin in the histogram"})}</luzmo-field-label
      >
      <luzmo-number-field
        id="bin-width"
        min="0"
        .value=${this._binWidth}
        .size=${this.size}
        @change=${this.setBinning}
      ></luzmo-number-field>
    </div>`}render(){return i.x`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="binning"
            >${i.msg("Binning",{desc:'Grouping numeric data into intervals or "bins" for analysis and visualization'})}</luzmo-field-label
          >
          <luzmo-action-button
            id="binning"
            toggles
            emphasized
            .size=${this.size}
            ?selected=${this._enabled}
            class=${this._enabled?"active":"inactive"}
            @click=${this.toggleBinning}
          >
            <luzmo-icon
              slot="icon"
              .icon=${this._enabled?i.C0:i.h0}
            ></luzmo-icon>
            ${this._enabled?i.msg("Enabled",{desc:"Option set to enabled"}):i.msg("Disabled",{desc:"Option set to disabled"})}
          </luzmo-action-button>
        </div>
        ${this._enabled?this.renderBinWidth():""}
      </div>
    </div>`}};a([i.n({type:String,reflect:!0})],exports.LuzmoDisplaySettingsBinning.prototype,"language",2);a([i.n()],exports.LuzmoDisplaySettingsBinning.prototype,"slotContent",2);a([d.r()],exports.LuzmoDisplaySettingsBinning.prototype,"_enabled",2);a([d.e("#bin-width")],exports.LuzmoDisplaySettingsBinning.prototype,"binWidthElement",2);exports.LuzmoDisplaySettingsBinning=a([i.localized()],exports.LuzmoDisplaySettingsBinning);customElements.get("luzmo-display-settings-binning")||customElements.define("luzmo-display-settings-binning",exports.LuzmoDisplaySettingsBinning);
