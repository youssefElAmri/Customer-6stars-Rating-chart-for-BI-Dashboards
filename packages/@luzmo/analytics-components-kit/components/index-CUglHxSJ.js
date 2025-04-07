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
import { R as n, c as E, p as L, H as u, a as w, h as O, k as f, O as _, F as I, $ as j, m as i, e as S, r as T, t as B, s as D, x as p, n as F, l as H } from "./get-css-variable-Cb4e-hdr.js";
import { r as A, e as x } from "./index-Dpr9NLmc.js";
import "./index-FQ64BSi7.js";
import "./index-BJg9ht4B.js";
import "./index-BtGo-jJu.js";
import { d as N } from "./decompose-numeric-format-BuZcjH2k.js";
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
var R = Object.defineProperty, z = (e, o, c, a) => {
  for (var r = void 0, t = e.length - 1, l; t >= 0; t--)
    (l = e[t]) && (r = l(o, c, r) || r);
  return r && R(o, c, r), r;
};
function U(e) {
  class o extends e {
    constructor() {
      super(...arguments), this.checked = !1, this.readonly = !1;
    }
    handleChange() {
      if (this.readonly) {
        this.inputElement.checked = this.checked;
        return;
      }
      this.checked = this.inputElement.checked;
      const a = new CustomEvent("change", {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: this.checked
      });
      this.dispatchEvent(a) || (this.checked = !this.inputElement.checked, this.inputElement.checked = this.checked);
    }
    render() {
      return u`
        <input
          id="input"
          name=${L(this.name || void 0)}
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.readonly}
          @change=${this.handleChange}
        />
      `;
    }
  }
  return z([
    n({ type: Boolean, reflect: !0 })
  ], o.prototype, "checked"), z([
    n({ type: String, reflect: !0 })
  ], o.prototype, "name"), z([
    n({ type: Boolean, reflect: !0 })
  ], o.prototype, "readonly"), z([
    E("#input")
  ], o.prototype, "inputElement"), o;
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
const q = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const e = document.createElement("style");
    e.setAttribute("data-luzmo-vars", ""), e.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(e);
  }
};
q();
const M = ':host{color:var(--highcontrast-checkbox-content-color-default, var(--luzmo-checkbox-content-color-default, var(--luzmo-font-color-hard)));min-block-size:var(--luzmo-checkbox-height, var(--checkbox-height, 32px));max-inline-size:100%;vertical-align:top;align-items:flex-start;display:inline-flex;position:relative;font-family:var(--luzmo-checkbox-font-family, var(--luzmo-font-family))}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down, var(--luzmo-checkbox-control-color-down, var(--luzmo-font-color-hard)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down, var(--luzmo-checkbox-control-selected-color-down, var(--luzmo-font-color-hard)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down, var(--luzmo-checkbox-content-color-down, var(--luzmo-font-color-hard)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-default, var(--luzmo-color-negative)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([readonly]){border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([readonly]:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-selected-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));background-color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-content-color-default, var(--luzmo-font-color-hard)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:flex;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-control-selected-color-focus, var(--luzmo-font-color-hard)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-default, var(--luzmo-color-negative)));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-emphasized-color-default, var(--luzmo-primary)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-emphasized-color-focus, var(--luzmo-primary)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-focus, var(--luzmo-color-negative)))}@media (hover: hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-color-hover, var(--luzmo-font-color)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-selected-color-hover, var(--luzmo-font-color-hard)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover, var(--luzmo-checkbox-content-color-hover, var(--luzmo-font-color-hard)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([readonly]:hover) #box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-selected-color-hover, var(--luzmo-font-color-hard)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover, var(--luzmo-checkbox-content-color-hover, var(--luzmo-font-color-hard)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-emphasized-color-hover, var(--luzmo-primary)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-emphasized-color-hover, var(--luzmo-primary)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-emphasized-color-down, var(--luzmo-primary)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-invalid-color-down, var(--luzmo-color-negative)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus, var(--luzmo-checkbox-control-color-focus, var(--luzmo-font-color)))}#label{text-align:start;font-size:var(--luzmo-checkbox-font-size, var(--checkbox-font-size, 14px));transition:color var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;line-height:var(--luzmo-checkbox-line-height, 1.3);margin-block-start:var(--luzmo-checkbox-top-to-text, var(--checkbox-top-to-text, 6px));margin-inline-start:var(--luzmo-checkbox-text-to-control, var(--checkbox-text-to-control, 10px))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--luzmo-checkbox-line-height-cjk, 1.5)}#input{color:var(--luzmo-checkbox-control-color-default, var(--luzmo-font-color));box-sizing:border-box;inline-size:100%;block-size:100%;opacity:.0001;z-index:1;cursor:pointer;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));background-color:var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus, var(--luzmo-checkbox-control-color-focus, var(--luzmo-font-color)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--luzmo-checkbox-focus-indicator-width, var(--luzmo-indicator-width)) var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)));margin:calc(var(--luzmo-checkbox-focus-indicator-gap, 2px) * -1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus, var(--luzmo-checkbox-content-color-focus, var(--luzmo-font-color-hard)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-control-selected-color-focus, var(--luzmo-font-color-hard)))}#box{--luzmo-checkbox-spacing: calc( var(--luzmo-checkbox-height, var(--checkbox-height, 32px)) - var( --luzmo-checkbox-control-size, var(--checkbox-control-size, 14px) ) );margin:calc(var(--luzmo-checkbox-spacing) / 2) 0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--luzmo-checkbox-control-size, var(--checkbox-control-size, 14px));block-size:var(--luzmo-checkbox-control-size, var(--checkbox-control-size, 14px))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-color-default, var(--luzmo-font-color)));z-index:0;content:"";border-radius:var(--luzmo-checkbox-control-corner-radius, 2px);border-width:var(--luzmo-checkbox-border-width, var(--luzmo-border-width));transition:border var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out,box-shadow var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--luzmo-checkbox-control-corner-radius, 2px) + var(--luzmo-checkbox-focus-indicator-gap, 2px));content:"";margin:var(--luzmo-checkbox-focus-indicator-gap, 2px);transition:box-shadow var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-out,margin var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{pointer-events:none;color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)));opacity:0;transition:opacity var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out,transform var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;transform:scale(0);width:var(--textbox-control-size, 14px);display:flex;align-items:center;justify-content:center;font-size:var(--checkbox-icon-size)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default, var(--luzmo-checkbox-control-color-disabled, var(--luzmo-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default, var(--luzmo-checkbox-content-color-disabled, var(--luzmo-color-disabled)))}@media (forced-colors: active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)));outline-offset:var(--highcontrast-checkbox-focus-indicator-gap, var(--luzmo-checkbox-focus-indicator-gap, 2px));outline-style:auto;outline-width:var(--luzmo-focus-indicator-width, var(--luzmo-indicator-width))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)))}:host{--highcontrast-checkbox-content-color-default: CanvasText;--highcontrast-checkbox-content-color-hover: CanvasText;--highcontrast-checkbox-content-color-down: CanvasText;--highcontrast-checkbox-content-color-focus: CanvasText;--highcontrast-checkbox-background-color-default: Canvas;--highcontrast-checkbox-color-default: ButtonText;--highcontrast-checkbox-color-hover: ButtonText;--highcontrast-checkbox-color-focus: Highlight;--highcontrast-checkbox-highlight-color-default: Highlight;--highcontrast-checkbox-highlight-color-hover: Highlight;--highcontrast-checkbox-highlight-color-down: Highlight;--highcontrast-checkbox-highlight-color-focus: Highlight;--highcontrast-checkbox-disabled-color-default: GrayText;--highcontrast-checkbox-focus-indicator-color: CanvasText}}:host([size=s]){--checkbox-font-size: var(--luzmo-checkbox-size-s-font-size, 12px);--checkbox-height: var(--luzmo-checkbox-size-s-height, 24px);--checkbox-control-size: var(--luzmo-checkbox-size-s-control-size, 12px);--checkbox-top-to-text: var(--luzmo-checkbox-size-s-top-to-text, 4px);--checkbox-text-to-control: var(--luzmo-checkbox-size-s-text-to-control, 9px);--checkbox-icon-size: var(--luzmo-checkbox-size-s-icon-size, 9px)}:host{--checkbox-font-size: var(--luzmo-checkbox-size-m-font-size, 14px);--checkbox-height: var(--luzmo-checkbox-size-m-height, 32px);--checkbox-control-size: var(--luzmo-checkbox-size-m-control-size, 14px);--checkbox-top-to-text: var(--luzmo-checkbox-size-m-top-to-text, 6px);--checkbox-text-to-control: var( --luzmo-checkbox-size-m-text-to-control, 10px );--checkbox-icon-size: var(--luzmo-checkbox-size-m-icon-size, 10px)}:host([size=l]){--checkbox-font-size: var(--luzmo-checkbox-size-l-font-size, 16px);--checkbox-height: var(--luzmo-checkbox-size-l-height, 40px);--checkbox-control-size: var(--luzmo-checkbox-size-l-control-size, 16px);--checkbox-top-to-text: var(--luzmo-checkbox-size-l-top-to-text, 9px);--checkbox-text-to-control: var( --luzmo-checkbox-size-l-text-to-control, 11px );--checkbox-icon-size: var(--luzmo-checkbox-size-l-icon-size, 11px)}:host([size=xl]){--checkbox-font-size: var(--luzmo-checkbox-size-xl-font-size, 18px);--checkbox-height: var(--luzmo-checkbox-size-xl-height, 48px);--checkbox-control-size: var(--luzmo-checkbox-size-xl-control-size, 18px);--checkbox-top-to-text: var(--luzmo-checkbox-size-xl-top-to-text, 12px);--checkbox-text-to-control: var( --luzmo-checkbox-size-xl-text-to-control, 13px );--checkbox-icon-size: var(--luzmo-checkbox-size-xl-icon-size, 12px)}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}';
var V = Object.defineProperty, m = (e, o, c, a) => {
  for (var r = void 0, t = e.length - 1, l; t >= 0; t--)
    (l = e[t]) && (r = l(o, c, r) || r);
  return r && V(o, c, r), r;
};
const G = () => u`<div id="checkmark">${_(I)}</div>`, Q = () => u`<div id="partialCheckmark">${_(j)}</div>`, $ = class extends w(U(f), {
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.disabled = !1, this.indeterminate = !1, this.autofocus = !1, this.invalid = !1, this.emphasized = !1, this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("autofocus") && this.updateComplete.then(() => {
      this.focus();
    });
  }
  static get styles() {
    return [O(M)];
  }
  click() {
    var o;
    this.disabled || (o = this.inputElement) == null || o.click();
  }
  handleChange() {
    this.indeterminate = !1, super.handleChange();
  }
  render() {
    return u`
      ${super.render()}
      <span id="box">
        ${this.checked ? G() : u``}
        ${this.indeterminate ? Q() : u``}
      </span>
      <label id="label" for="input"><slot></slot></label>
    `;
  }
  updated(o) {
    super.updated(o), o.has("disabled") && (o.get("disabled") !== void 0 || this.disabled) && (this.disabled ? (this.inputElement.tabIndex = this.tabIndex, this.tabIndex = -1) : (this.tabIndex = this.inputElement.tabIndex, this.inputElement.removeAttribute("tabindex")), this.inputElement.disabled = this.disabled), o.has("indeterminate") && (this.inputElement.indeterminate = this.indeterminate), o.has("invalid") && (this.invalid ? this.inputElement.setAttribute("aria-invalid", "true") : this.inputElement.removeAttribute("aria-invalid"));
  }
};
$.shadowRootOptions = {
  ...f.shadowRootOptions,
  delegatesFocus: !0
};
let h = $;
m([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "disabled");
m([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "indeterminate");
m([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "autofocus");
m([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "invalid");
m([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "emphasized");
m([
  n({ reflect: !0, type: Number, attribute: "tabindex" })
], h.prototype, "tabIndex");
customElements.get("luzmo-checkbox") || customElements.define("luzmo-checkbox", h);
const P = {
  none: () => i("None", { desc: "Period option" }),
  past: () => i("Past value", { desc: "Period option" }),
  absoluteChange: () => i("Absolute change", { desc: "Period option" }),
  percentageChange: () => i("% change", { desc: "Period option" })
}, W = [
  { key: "periods", i18n: () => i("Periods", { desc: "Period option" }) },
  { key: "years", i18n: () => i("Years", { desc: "Period option" }) },
  { key: "quarters", i18n: () => i("Quarters", { desc: "Period option" }) },
  { key: "months", i18n: () => i("Months", { desc: "Period option" }) },
  { key: "weeks", i18n: () => i("Weeks", { desc: "Period option" }) },
  { key: "days", i18n: () => i("Days", { desc: "Period option" }) },
  { key: "hours", i18n: () => i("Hours", { desc: "Period option" }) },
  { key: "minutes", i18n: () => i("Minutes", { desc: "Period option" }) },
  { key: "seconds", i18n: () => i("Seconds", { desc: "Period option" }) }
], Y = ":host{font-family:var(--luzmo-display-settings-period-over-period-font-family, var(--luzmo-font-family));font-size:var(--luzmo-display-settings-period-over-period-font-size, var(--display-settings-period-over-period-font-size));color:var(--luzmo-display-settings-period-over-period-color, var(--luzmo-font-color))}:host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-period-over-period-gap, var(--display-settings-period-over-period-gap))}:host{--display-settings-period-over-period-gap: var(--luzmo-spacing-3);--display-settings-period-over-period-font-size: var(--luzmo-font-size)}:host([size=s]){--display-settings-period-over-period-gap: var(--luzmo-spacing-3);--display-settings-period-over-period-font-size: var(--luzmo-font-size-s)}:host([size=l]){--display-settings-period-over-period-gap: var(--luzmo-spacing-4);--display-settings-period-over-period-font-size: var(--luzmo-font-size-l)}:host([size=xl]){--display-settings-period-over-period-gap: var(--luzmo-spacing-5);--display-settings-period-over-period-font-size: var(--luzmo-font-size-xl)}";
var J = Object.defineProperty, K = Object.getOwnPropertyDescriptor, d = (e, o, c, a) => {
  for (var r = a > 1 ? void 0 : a ? K(o, c) : o, t = e.length - 1, l; t >= 0; t--)
    (l = e[t]) && (r = (a ? l(o, c, r) : l(r)) || r);
  return a && r && J(o, c, r), r;
};
let s = class extends w(
  f,
  {
    validSizes: Object.values(S)
  }
) {
  constructor() {
    super(...arguments), this.language = "en", this.slotContent = {};
  }
  static get styles() {
    return [T(Y)];
  }
  willUpdate(e) {
    var o, c, a, r, t, l, b, v, g, k, y, C;
    e.has("slotContent") && (this._periodComparison = (c = (o = this.slotContent) == null ? void 0 : o.PeriodOverPeriod) == null ? void 0 : c.type, this._numberPeriods = (r = (a = this.slotContent) == null ? void 0 : a.PeriodOverPeriod) == null ? void 0 : r.quantity, this._periodLevel = (l = (t = this.slotContent) == null ? void 0 : t.PeriodOverPeriod) == null ? void 0 : l.level, this._incompletePeriods = (v = (b = this.slotContent) == null ? void 0 : b.PeriodOverPeriod) == null ? void 0 : v.periodToDate, this._minLevel = ((k = (g = this.slotContent) == null ? void 0 : g.PeriodOverPeriod) == null ? void 0 : k.minLevel) ?? ((y = this.slotContent) == null ? void 0 : y.lowestLevel) ?? (((C = this.slotContent) == null ? void 0 : C.subtype) === "date" ? 5 : 9)), this._periodComparison = this._periodComparison ?? "none", this._numberPeriods = this._numberPeriods ?? 1, this._periodLevel = this._periodLevel ?? "periods", this._incompletePeriods = this._incompletePeriods ?? !1, this._minLevel = this._minLevel ?? 9, e.has("language") && ([...B].includes(this.language) || this.language === "en") && (D(this.language), this.requestUpdate());
  }
  setPeriodComparison() {
    var v;
    const e = { ...this.slotContent };
    this._periodComparison = this._periodComparisonElement.value;
    const o = N((v = this.slotContent) == null ? void 0 : v.format), c = ["%", "y", "a%", "ay"].includes(
      o.typeFormat
    ), a = o.typeFormat.includes("a"), r = a ? "a" : "", t = o.comma === "," || a ? "," : "", l = o.precision ? Number.parseInt(o.precision.replace(".", ""), 10) : 0, b = ["z", "az", "y", "ay", "w", "aw"].includes(
      o.typeFormat
    );
    this._periodComparison === "percentageChange" && !c ? e.format = `${t}.${l}${r}${b ? "y" : "%"}` : this._periodComparison !== "percentageChange" && e.subtype === "currency" && c && (e.format = `${t}.${l}${r}${b ? "z" : "f"}`), this.sendEvent(e);
  }
  setNumberOfPeriods() {
    this._numberPeriods = Number.parseInt(this._numberPeriodsElement.value, 10);
    const e = { ...this.slotContent };
    this.sendEvent(e);
  }
  setPeriodLevel() {
    this._periodLevel = this._periodLevelElement.value;
    const e = { ...this.slotContent };
    this.sendEvent(e);
  }
  setIncompletePeriods() {
    this._incompletePeriods = this._incompletePeriodsElement.checked;
    const e = { ...this.slotContent };
    this.sendEvent(e);
  }
  sendEvent(e) {
    const o = { ...e };
    o.PeriodOverPeriod = {
      type: this._periodComparison,
      level: this._periodLevel,
      quantity: this._numberPeriods,
      periodToDate: this._incompletePeriods,
      minLevel: this._minLevel
    }, this._periodComparison === "none" && delete o.PeriodOverPeriod, this.dispatchEvent(
      new CustomEvent("slot-content-changed", {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          slotContent: o
        }
      })
    );
  }
  renderPeriodSettings() {
    const e = W.slice(0, (this._minLevel ?? 0) + 1).map(
      (o) => p`<luzmo-menu-item value=${o.key}>
          ${o.i18n()}
        </luzmo-menu-item>`
    );
    return p` <div class="settings-row">
        <div class="setting">
          ${["percentageChange", "absoluteChange"].includes(
      this._periodComparison ?? ""
    ) ? p`<luzmo-field-label for="number-periods" side-aligned="start">
                ${i("From", { desc: "Label for number of periods" })}
              </luzmo-field-label>` : ""}
          <luzmo-number-field
            id="number-periods"
            min="1"
            max="9999999999"
            value=${this._numberPeriods ?? 1}
            @change=${this.setNumberOfPeriods}
          ></luzmo-number-field>
        </div>
        <div class="setting">
          <luzmo-picker
            id="period-level"
            size=${this.size}
            variant="highlight"
            value=${this._periodLevel ?? "period(s)"}
            @change=${this.setPeriodLevel}
          >
            ${e}
          </luzmo-picker>
        </div>
        <div>${i("ago", { desc: "Label for period ago" })}</div>
      </div>
      <div class="settings-row">
        <div class="setting">
          <luzmo-checkbox
            id="incomplete-periods"
            size=${this.size}
            emphasized
            ?checked=${this._incompletePeriods ?? !1}
            @change=${this.setIncompletePeriods}
          >
            ${i("Use period-to-date for incomplete periods", {
      desc: "Checkbox label for incomplete periods"
    })}
          </luzmo-checkbox>
        </div>
      </div>`;
  }
  render() {
    const e = Object.keys(P).map(
      (o) => p`<luzmo-menu-item value=${o}>
          ${P[o]()}
        </luzmo-menu-item>`
    );
    return p`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="period-comparison">
            ${i("Period comparison", { desc: "Label for period comparison" })}
          </luzmo-field-label>
          <luzmo-picker
            id="period-comparison"
            size=${this.size}
            variant="highlight"
            value=${this._periodComparison ?? "none"}
            @change=${this.setPeriodComparison}
          >
            ${e}
          </luzmo-picker>
        </div>
      </div>
      ${this._periodComparison === "none" ? "" : this.renderPeriodSettings()}
    </div>`;
  }
};
d([
  F({ type: String, reflect: !0 })
], s.prototype, "language", 2);
d([
  x("#period-comparison")
], s.prototype, "_periodComparisonElement", 2);
d([
  x("#number-periods")
], s.prototype, "_numberPeriodsElement", 2);
d([
  x("#period-level")
], s.prototype, "_periodLevelElement", 2);
d([
  x("#incomplete-periods")
], s.prototype, "_incompletePeriodsElement", 2);
d([
  A()
], s.prototype, "_periodComparison", 2);
s = d([
  H()
], s);
customElements.get("luzmo-display-settings-period-over-period") || customElements.define(
  "luzmo-display-settings-period-over-period",
  s
);
export {
  s as LuzmoDisplaySettingsPeriodOverPeriod
};
