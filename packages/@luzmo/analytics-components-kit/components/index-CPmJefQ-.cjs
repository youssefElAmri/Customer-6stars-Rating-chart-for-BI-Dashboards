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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("./index-rYO-mkTp.cjs");const r=require("./index-9FgiJszO.cjs"),t=require("./get-css-variable-CGmd_tgb.cjs");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=l=>l??t.E,c=":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-grand-totals-gap, var(--display-settings-grand-totals-gap))}:host{--display-settings-grand-totals-gap: var(--luzmo-spacing-3)}:host([size=s]){--display-settings-grand-totals-gap: var(--luzmo-spacing-3)}:host([size=l]){--display-settings-grand-totals-gap: var(--luzmo-spacing-4)}:host([size=xl]){--display-settings-grand-totals-gap: var(--luzmo-spacing-5)}";var u=Object.defineProperty,p=Object.getOwnPropertyDescriptor,o=(l,s,n,e)=>{for(var a=e>1?void 0:e?p(s,n):s,i=l.length-1,d;i>=0;i--)(d=l[i])&&(a=(e?d(s,n,a):d(a))||a);return e&&a&&u(s,n,a),a};exports.LuzmoDisplaySettingsGrandTotals=class extends t.m(t.kt,{validSizes:Object.values(t.d$2)}){constructor(){super(...arguments),this.language="en",this.slotContent={}}static get styles(){return[t.r(c)]}willUpdate(s){var n,e;s.has("slotContent")&&(this._enabled=((e=(n=this.slotContent)==null?void 0:n.grandTotals)==null?void 0:e.enabled)??!1)}updated(s){s.has("language")&&([...t.targetLocales].includes(this.language??"en")||this.language==="en")&&t.setLocale(this.language)}toggleGrandTotals(){this._enabled=!this._enabled,this.sendEvent()}sendEvent(){const s={enabled:!!this._enabled};this.dispatchEvent(new CustomEvent("slot-content-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{slotContent:{...this.slotContent,grandTotals:s}}}))}render(){return t.x`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="grand-totals"
            >${t.msg("Grand totals",{desc:"Label for grand totals setting in a table"})}</luzmo-field-label
          >
          <luzmo-action-button
            id="grand-totals"
            toggles
            emphasized
            .size=${this.size}
            ?selected=${this._enabled}
            class=${g(this._enabled?"active":"inactive")}
            @click=${this.toggleGrandTotals}
          >
            <luzmo-icon
              slot="icon"
              .icon=${this._enabled?t.C0:t.h0}
            ></luzmo-icon>
            ${this._enabled?t.msg("Enabled",{desc:"Option set to enabled"}):t.msg("Disabled",{desc:"Option set to disabled"})}
          </luzmo-action-button>
        </div>
      </div>
    </div>`}};o([t.n({type:String,reflect:!0})],exports.LuzmoDisplaySettingsGrandTotals.prototype,"language",2);o([t.n()],exports.LuzmoDisplaySettingsGrandTotals.prototype,"slotContent",2);o([r.r()],exports.LuzmoDisplaySettingsGrandTotals.prototype,"_enabled",2);exports.LuzmoDisplaySettingsGrandTotals=o([t.localized()],exports.LuzmoDisplaySettingsGrandTotals);customElements.get("luzmo-display-settings-grand-totals")||customElements.define("luzmo-display-settings-grand-totals",exports.LuzmoDisplaySettingsGrandTotals);
