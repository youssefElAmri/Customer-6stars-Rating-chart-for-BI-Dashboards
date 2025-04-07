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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("./get-css-variable-CGmd_tgb.cjs"),b=require("./index-9FgiJszO.cjs");require("./index-Dj7wuhMW.cjs");require("./index-D9_LYCNr.cjs");require("./index-D2q8c_Pp.cjs");const y=require("./decompose-numeric-format-B3rVVHpO.cjs");/*! * Lucero - The design system for Luzmo.
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
 * */var P=Object.defineProperty,v=(c,e,r,a)=>{for(var t=void 0,i=c.length-1,l;i>=0;i--)(l=c[i])&&(t=l(e,r,t)||t);return t&&P(e,r,t),t};function C(c){class e extends c{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}handleChange(){if(this.readonly){this.inputElement.checked=this.checked;return}this.checked=this.inputElement.checked;const a=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:this.checked});this.dispatchEvent(a)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return o.Ht`
        <input
          id="input"
          name=${o.m$1(this.name||void 0)}
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.readonly}
          @change=${this.handleChange}
        />
      `}}return v([o.Rt({type:Boolean,reflect:!0})],e.prototype,"checked"),v([o.Rt({type:String,reflect:!0})],e.prototype,"name"),v([o.Rt({type:Boolean,reflect:!0})],e.prototype,"readonly"),v([o.d$1("#input")],e.prototype,"inputElement"),e}/*! * Lucero - The design system for Luzmo.
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
 * */const w=()=>{if(typeof document<"u"&&!document.querySelector("style[data-luzmo-vars]")){const c=document.createElement("style");c.setAttribute("data-luzmo-vars",""),c.textContent='html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}',document.head.appendChild(c)}};w();const _=':host{color:var(--highcontrast-checkbox-content-color-default, var(--luzmo-checkbox-content-color-default, var(--luzmo-font-color-hard)));min-block-size:var(--luzmo-checkbox-height, var(--checkbox-height, 32px));max-inline-size:100%;vertical-align:top;align-items:flex-start;display:inline-flex;position:relative;font-family:var(--luzmo-checkbox-font-family, var(--luzmo-font-family))}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down, var(--luzmo-checkbox-control-color-down, var(--luzmo-font-color-hard)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down, var(--luzmo-checkbox-control-selected-color-down, var(--luzmo-font-color-hard)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down, var(--luzmo-checkbox-content-color-down, var(--luzmo-font-color-hard)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-default, var(--luzmo-color-negative)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([readonly]){border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([readonly]:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-selected-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));background-color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-content-color-default, var(--luzmo-font-color-hard)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:flex;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-control-selected-color-focus, var(--luzmo-font-color-hard)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-default, var(--luzmo-color-negative)));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-emphasized-color-default, var(--luzmo-primary)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-emphasized-color-focus, var(--luzmo-primary)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-focus, var(--luzmo-color-negative)))}@media (hover: hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-color-hover, var(--luzmo-font-color)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-selected-color-hover, var(--luzmo-font-color-hard)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover, var(--luzmo-checkbox-content-color-hover, var(--luzmo-font-color-hard)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([readonly]:hover) #box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-control-selected-color-hover, var(--luzmo-font-color-hard)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover, var(--luzmo-checkbox-content-color-hover, var(--luzmo-font-color-hard)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-emphasized-color-hover, var(--luzmo-primary)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover, var(--luzmo-checkbox-invalid-color-hover, var(--luzmo-color-negative)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover, var(--luzmo-checkbox-emphasized-color-hover, var(--luzmo-primary)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-emphasized-color-down, var(--luzmo-primary)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-invalid-color-down, var(--luzmo-color-negative)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus, var(--luzmo-checkbox-control-color-focus, var(--luzmo-font-color)))}#label{text-align:start;font-size:var(--luzmo-checkbox-font-size, var(--checkbox-font-size, 14px));transition:color var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;line-height:var(--luzmo-checkbox-line-height, 1.3);margin-block-start:var(--luzmo-checkbox-top-to-text, var(--checkbox-top-to-text, 6px));margin-inline-start:var(--luzmo-checkbox-text-to-control, var(--checkbox-text-to-control, 10px))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--luzmo-checkbox-line-height-cjk, 1.5)}#input{color:var(--luzmo-checkbox-control-color-default, var(--luzmo-font-color));box-sizing:border-box;inline-size:100%;block-size:100%;opacity:.0001;z-index:1;cursor:pointer;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default, var(--luzmo-checkbox-control-selected-color-default, var(--luzmo-font-color)));background-color:var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color));border-width:var(--luzmo-checkbox-selected-border-width, calc(var(--checkbox-control-size, 14px) / 2))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus, var(--luzmo-checkbox-control-color-focus, var(--luzmo-font-color)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--luzmo-checkbox-focus-indicator-width, var(--luzmo-indicator-width)) var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)));margin:calc(var(--luzmo-checkbox-focus-indicator-gap, 2px) * -1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus, var(--luzmo-checkbox-content-color-focus, var(--luzmo-font-color-hard)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus, var(--luzmo-checkbox-control-selected-color-focus, var(--luzmo-font-color-hard)))}#box{--luzmo-checkbox-spacing: calc( var(--luzmo-checkbox-height, var(--checkbox-height, 32px)) - var( --luzmo-checkbox-control-size, var(--checkbox-control-size, 14px) ) );margin:calc(var(--luzmo-checkbox-spacing) / 2) 0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--luzmo-checkbox-control-size, var(--checkbox-control-size, 14px));block-size:var(--luzmo-checkbox-control-size, var(--checkbox-control-size, 14px))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default, var(--luzmo-checkbox-control-color-default, var(--luzmo-font-color)));z-index:0;content:"";border-radius:var(--luzmo-checkbox-control-corner-radius, 2px);border-width:var(--luzmo-checkbox-border-width, var(--luzmo-border-width));transition:border var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out,box-shadow var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--luzmo-checkbox-control-corner-radius, 2px) + var(--luzmo-checkbox-focus-indicator-gap, 2px));content:"";margin:var(--luzmo-checkbox-focus-indicator-gap, 2px);transition:box-shadow var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-out,margin var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{pointer-events:none;color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)));opacity:0;transition:opacity var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out,transform var(--luzmo-checkbox-animation-duration, var(--luzmo-animation-duration)) ease-in-out;transform:scale(0);width:var(--textbox-control-size, 14px);display:flex;align-items:center;justify-content:center;font-size:var(--checkbox-icon-size)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default, var(--luzmo-checkbox-control-color-disabled, var(--luzmo-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default, var(--luzmo-checkbox-checkmark-color, var(--luzmo-background-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default, var(--luzmo-checkbox-content-color-disabled, var(--luzmo-color-disabled)))}@media (forced-colors: active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)));outline-offset:var(--highcontrast-checkbox-focus-indicator-gap, var(--luzmo-checkbox-focus-indicator-gap, 2px));outline-style:auto;outline-width:var(--luzmo-focus-indicator-width, var(--luzmo-indicator-width))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color, var(--luzmo-checkbox-focus-indicator-color, var(--luzmo-primary)))}:host{--highcontrast-checkbox-content-color-default: CanvasText;--highcontrast-checkbox-content-color-hover: CanvasText;--highcontrast-checkbox-content-color-down: CanvasText;--highcontrast-checkbox-content-color-focus: CanvasText;--highcontrast-checkbox-background-color-default: Canvas;--highcontrast-checkbox-color-default: ButtonText;--highcontrast-checkbox-color-hover: ButtonText;--highcontrast-checkbox-color-focus: Highlight;--highcontrast-checkbox-highlight-color-default: Highlight;--highcontrast-checkbox-highlight-color-hover: Highlight;--highcontrast-checkbox-highlight-color-down: Highlight;--highcontrast-checkbox-highlight-color-focus: Highlight;--highcontrast-checkbox-disabled-color-default: GrayText;--highcontrast-checkbox-focus-indicator-color: CanvasText}}:host([size=s]){--checkbox-font-size: var(--luzmo-checkbox-size-s-font-size, 12px);--checkbox-height: var(--luzmo-checkbox-size-s-height, 24px);--checkbox-control-size: var(--luzmo-checkbox-size-s-control-size, 12px);--checkbox-top-to-text: var(--luzmo-checkbox-size-s-top-to-text, 4px);--checkbox-text-to-control: var(--luzmo-checkbox-size-s-text-to-control, 9px);--checkbox-icon-size: var(--luzmo-checkbox-size-s-icon-size, 9px)}:host{--checkbox-font-size: var(--luzmo-checkbox-size-m-font-size, 14px);--checkbox-height: var(--luzmo-checkbox-size-m-height, 32px);--checkbox-control-size: var(--luzmo-checkbox-size-m-control-size, 14px);--checkbox-top-to-text: var(--luzmo-checkbox-size-m-top-to-text, 6px);--checkbox-text-to-control: var( --luzmo-checkbox-size-m-text-to-control, 10px );--checkbox-icon-size: var(--luzmo-checkbox-size-m-icon-size, 10px)}:host([size=l]){--checkbox-font-size: var(--luzmo-checkbox-size-l-font-size, 16px);--checkbox-height: var(--luzmo-checkbox-size-l-height, 40px);--checkbox-control-size: var(--luzmo-checkbox-size-l-control-size, 16px);--checkbox-top-to-text: var(--luzmo-checkbox-size-l-top-to-text, 9px);--checkbox-text-to-control: var( --luzmo-checkbox-size-l-text-to-control, 11px );--checkbox-icon-size: var(--luzmo-checkbox-size-l-icon-size, 11px)}:host([size=xl]){--checkbox-font-size: var(--luzmo-checkbox-size-xl-font-size, 18px);--checkbox-height: var(--luzmo-checkbox-size-xl-height, 48px);--checkbox-control-size: var(--luzmo-checkbox-size-xl-control-size, 18px);--checkbox-top-to-text: var(--luzmo-checkbox-size-xl-top-to-text, 12px);--checkbox-text-to-control: var( --luzmo-checkbox-size-xl-text-to-control, 13px );--checkbox-icon-size: var(--luzmo-checkbox-size-xl-icon-size, 12px)}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}';var $=Object.defineProperty,h=(c,e,r,a)=>{for(var t=void 0,i=c.length-1,l;i>=0;i--)(l=c[i])&&(t=l(e,r,t)||t);return t&&$(e,r,t),t};const E=()=>o.Ht`<div id="checkmark">${o.O2(o.F)}</div>`,L=()=>o.Ht`<div id="partialCheckmark">${o.O2(o.$)}</div>`,k=class extends o.m(C(o.kt),{noDefaultSize:!0}){constructor(){super(...arguments),this.disabled=!1,this.indeterminate=!1,this.autofocus=!1,this.invalid=!1,this.emphasized=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.hasAttribute("autofocus")&&this.updateComplete.then(()=>{this.focus()})}static get styles(){return[o.ht(_)]}click(){var e;this.disabled||(e=this.inputElement)==null||e.click()}handleChange(){this.indeterminate=!1,super.handleChange()}render(){return o.Ht`
      ${super.render()}
      <span id="box">
        ${this.checked?E():o.Ht``}
        ${this.indeterminate?L():o.Ht``}
      </span>
      <label id="label" for="input"><slot></slot></label>
    `}updated(e){super.updated(e),e.has("disabled")&&(e.get("disabled")!==void 0||this.disabled)&&(this.disabled?(this.inputElement.tabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this.inputElement.tabIndex,this.inputElement.removeAttribute("tabindex")),this.inputElement.disabled=this.disabled),e.has("indeterminate")&&(this.inputElement.indeterminate=this.indeterminate),e.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid"))}};k.shadowRootOptions={...o.kt.shadowRootOptions,delegatesFocus:!0};let n=k;h([o.Rt({type:Boolean,reflect:!0})],n.prototype,"disabled");h([o.Rt({type:Boolean,reflect:!0})],n.prototype,"indeterminate");h([o.Rt({type:Boolean,reflect:!0})],n.prototype,"autofocus");h([o.Rt({type:Boolean,reflect:!0})],n.prototype,"invalid");h([o.Rt({type:Boolean,reflect:!0})],n.prototype,"emphasized");h([o.Rt({reflect:!0,type:Number,attribute:"tabindex"})],n.prototype,"tabIndex");customElements.get("luzmo-checkbox")||customElements.define("luzmo-checkbox",n);const f={none:()=>o.msg("None",{desc:"Period option"}),past:()=>o.msg("Past value",{desc:"Period option"}),absoluteChange:()=>o.msg("Absolute change",{desc:"Period option"}),percentageChange:()=>o.msg("% change",{desc:"Period option"})},O=[{key:"periods",i18n:()=>o.msg("Periods",{desc:"Period option"})},{key:"years",i18n:()=>o.msg("Years",{desc:"Period option"})},{key:"quarters",i18n:()=>o.msg("Quarters",{desc:"Period option"})},{key:"months",i18n:()=>o.msg("Months",{desc:"Period option"})},{key:"weeks",i18n:()=>o.msg("Weeks",{desc:"Period option"})},{key:"days",i18n:()=>o.msg("Days",{desc:"Period option"})},{key:"hours",i18n:()=>o.msg("Hours",{desc:"Period option"})},{key:"minutes",i18n:()=>o.msg("Minutes",{desc:"Period option"})},{key:"seconds",i18n:()=>o.msg("Seconds",{desc:"Period option"})}],S=":host{font-family:var(--luzmo-display-settings-period-over-period-font-family, var(--luzmo-font-family));font-size:var(--luzmo-display-settings-period-over-period-font-size, var(--display-settings-period-over-period-font-size));color:var(--luzmo-display-settings-period-over-period-color, var(--luzmo-font-color))}:host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-period-over-period-gap, var(--display-settings-period-over-period-gap))}:host{--display-settings-period-over-period-gap: var(--luzmo-spacing-3);--display-settings-period-over-period-font-size: var(--luzmo-font-size)}:host([size=s]){--display-settings-period-over-period-gap: var(--luzmo-spacing-3);--display-settings-period-over-period-font-size: var(--luzmo-font-size-s)}:host([size=l]){--display-settings-period-over-period-gap: var(--luzmo-spacing-4);--display-settings-period-over-period-font-size: var(--luzmo-font-size-l)}:host([size=xl]){--display-settings-period-over-period-gap: var(--luzmo-spacing-5);--display-settings-period-over-period-font-size: var(--luzmo-font-size-xl)}";var D=Object.defineProperty,j=Object.getOwnPropertyDescriptor,s=(c,e,r,a)=>{for(var t=a>1?void 0:a?j(e,r):e,i=c.length-1,l;i>=0;i--)(l=c[i])&&(t=(a?l(e,r,t):l(t))||t);return a&&t&&D(e,r,t),t};exports.LuzmoDisplaySettingsPeriodOverPeriod=class extends o.m(o.kt,{validSizes:Object.values(o.d$2)}){constructor(){super(...arguments),this.language="en",this.slotContent={}}static get styles(){return[o.r(S)]}willUpdate(e){var r,a,t,i,l,d,u,m,p,z,x,g;e.has("slotContent")&&(this._periodComparison=(a=(r=this.slotContent)==null?void 0:r.PeriodOverPeriod)==null?void 0:a.type,this._numberPeriods=(i=(t=this.slotContent)==null?void 0:t.PeriodOverPeriod)==null?void 0:i.quantity,this._periodLevel=(d=(l=this.slotContent)==null?void 0:l.PeriodOverPeriod)==null?void 0:d.level,this._incompletePeriods=(m=(u=this.slotContent)==null?void 0:u.PeriodOverPeriod)==null?void 0:m.periodToDate,this._minLevel=((z=(p=this.slotContent)==null?void 0:p.PeriodOverPeriod)==null?void 0:z.minLevel)??((x=this.slotContent)==null?void 0:x.lowestLevel)??(((g=this.slotContent)==null?void 0:g.subtype)==="date"?5:9)),this._periodComparison=this._periodComparison??"none",this._numberPeriods=this._numberPeriods??1,this._periodLevel=this._periodLevel??"periods",this._incompletePeriods=this._incompletePeriods??!1,this._minLevel=this._minLevel??9,e.has("language")&&([...o.targetLocales].includes(this.language)||this.language==="en")&&(o.setLocale(this.language),this.requestUpdate())}setPeriodComparison(){var m;const e={...this.slotContent};this._periodComparison=this._periodComparisonElement.value;const r=y.decomposeNumericFormat((m=this.slotContent)==null?void 0:m.format),a=["%","y","a%","ay"].includes(r.typeFormat),t=r.typeFormat.includes("a"),i=t?"a":"",l=r.comma===","||t?",":"",d=r.precision?Number.parseInt(r.precision.replace(".",""),10):0,u=["z","az","y","ay","w","aw"].includes(r.typeFormat);this._periodComparison==="percentageChange"&&!a?e.format=`${l}.${d}${i}${u?"y":"%"}`:this._periodComparison!=="percentageChange"&&e.subtype==="currency"&&a&&(e.format=`${l}.${d}${i}${u?"z":"f"}`),this.sendEvent(e)}setNumberOfPeriods(){this._numberPeriods=Number.parseInt(this._numberPeriodsElement.value,10);const e={...this.slotContent};this.sendEvent(e)}setPeriodLevel(){this._periodLevel=this._periodLevelElement.value;const e={...this.slotContent};this.sendEvent(e)}setIncompletePeriods(){this._incompletePeriods=this._incompletePeriodsElement.checked;const e={...this.slotContent};this.sendEvent(e)}sendEvent(e){const r={...e};r.PeriodOverPeriod={type:this._periodComparison,level:this._periodLevel,quantity:this._numberPeriods,periodToDate:this._incompletePeriods,minLevel:this._minLevel},this._periodComparison==="none"&&delete r.PeriodOverPeriod,this.dispatchEvent(new CustomEvent("slot-content-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{slotContent:r}}))}renderPeriodSettings(){const e=O.slice(0,(this._minLevel??0)+1).map(r=>o.x`<luzmo-menu-item value=${r.key}>
          ${r.i18n()}
        </luzmo-menu-item>`);return o.x` <div class="settings-row">
        <div class="setting">
          ${["percentageChange","absoluteChange"].includes(this._periodComparison??"")?o.x`<luzmo-field-label for="number-periods" side-aligned="start">
                ${o.msg("From",{desc:"Label for number of periods"})}
              </luzmo-field-label>`:""}
          <luzmo-number-field
            id="number-periods"
            min="1"
            max="9999999999"
            value=${this._numberPeriods??1}
            @change=${this.setNumberOfPeriods}
          ></luzmo-number-field>
        </div>
        <div class="setting">
          <luzmo-picker
            id="period-level"
            size=${this.size}
            variant="highlight"
            value=${this._periodLevel??"period(s)"}
            @change=${this.setPeriodLevel}
          >
            ${e}
          </luzmo-picker>
        </div>
        <div>${o.msg("ago",{desc:"Label for period ago"})}</div>
      </div>
      <div class="settings-row">
        <div class="setting">
          <luzmo-checkbox
            id="incomplete-periods"
            size=${this.size}
            emphasized
            ?checked=${this._incompletePeriods??!1}
            @change=${this.setIncompletePeriods}
          >
            ${o.msg("Use period-to-date for incomplete periods",{desc:"Checkbox label for incomplete periods"})}
          </luzmo-checkbox>
        </div>
      </div>`}render(){const e=Object.keys(f).map(r=>o.x`<luzmo-menu-item value=${r}>
          ${f[r]()}
        </luzmo-menu-item>`);return o.x`<div class="settings-container">
      <div class="settings-row">
        <div class="setting">
          <luzmo-field-label for="period-comparison">
            ${o.msg("Period comparison",{desc:"Label for period comparison"})}
          </luzmo-field-label>
          <luzmo-picker
            id="period-comparison"
            size=${this.size}
            variant="highlight"
            value=${this._periodComparison??"none"}
            @change=${this.setPeriodComparison}
          >
            ${e}
          </luzmo-picker>
        </div>
      </div>
      ${this._periodComparison==="none"?"":this.renderPeriodSettings()}
    </div>`}};s([o.n({type:String,reflect:!0})],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"language",2);s([b.e("#period-comparison")],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"_periodComparisonElement",2);s([b.e("#number-periods")],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"_numberPeriodsElement",2);s([b.e("#period-level")],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"_periodLevelElement",2);s([b.e("#incomplete-periods")],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"_incompletePeriodsElement",2);s([b.r()],exports.LuzmoDisplaySettingsPeriodOverPeriod.prototype,"_periodComparison",2);exports.LuzmoDisplaySettingsPeriodOverPeriod=s([o.localized()],exports.LuzmoDisplaySettingsPeriodOverPeriod);customElements.get("luzmo-display-settings-period-over-period")||customElements.define("luzmo-display-settings-period-over-period",exports.LuzmoDisplaySettingsPeriodOverPeriod);
