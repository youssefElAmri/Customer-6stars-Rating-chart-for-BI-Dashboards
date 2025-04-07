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
import { a as b, h as s, O as g, d as h, H as m, R as a } from "./get-css-variable-Cb4e-hdr.js";
import { a as v } from "./button-base-B7v4eeRh-Chb432uy.js";
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
const z = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const c = document.createElement("style");
    c.setAttribute("data-luzmo-vars", ""), c.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(c);
  }
};
z();
const f = ':host{cursor:pointer;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-family:var(--luzmo-button-font-family, var(--luzmo-sans-font-family-stack, var(--luzmo-font-family)));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--luzmo-button-line-height, var(--luzmo-line-height-100, var(--line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--luzmo-button-animation-duration, var(--luzmo-animation-duration-100, var(--animation-duration-100))) ease-out,border-color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration-100, var(--animation-duration-100))) ease-out,color var(--luzmo-button-animation-duration, var(--luzmo-animation-duration-100, var(--animation-duration-100))) ease-out,box-shadow var(--luzmo-button-animation-duration, var(--luzmo-animation-duration-100, var(--animation-duration-100))) ease-out;border-style:solid;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;overflow:visible}:host(:focus){outline:none}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%;flex-shrink:0}#label{text-align:center;place-self:center}#label:empty{display:none}@media (forced-colors: active){:host{--highcontrast-action-button-focus-indicator-color: ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-action-button-background-color-default: Highlight;--highcontrast-action-button-background-color-hover: Highlight;--highcontrast-action-button-background-color-focus: Highlight;--highcontrast-action-button-background-color-down: Highlight;--highcontrast-action-button-background-color-disabled: ButtonFace;--highcontrast-action-button-border-color-default: HighlightText;--highcontrast-action-button-border-color-hover: HighlightText;--highcontrast-action-button-border-color-focus: HighlightText;--highcontrast-action-button-border-color-down: HighlightText;--highcontrast-action-button-border-color-disabled: GrayText;--highcontrast-action-button-content-color-default: HighlightText;--highcontrast-action-button-content-color-hover: HighlightText;--highcontrast-action-button-content-color-focus: HighlightText;--highcontrast-action-button-content-color-down: HighlightText;--highcontrast-action-button-content-color-disabled: GrayText}:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]),:host([selected]) #label{forced-color-adjust:none}}:host{--action-button-focus-indicator-border-radius: calc( var(--action-button-border-radius) + var(--action-button-focus-indicator-gap) );--action-button-edge-to-visual: calc( var(--action-button-edge-to-visual-size) - var(--action-button-border-width) );--action-button-edge-to-text: calc( var(--action-button-edge-to-text-size) - var(--action-button-border-width) );--action-button-edge-to-visual-only: calc( var(--action-button-edge-to-visual-only-size) - var( --action-button-border-width ) );min-inline-size:var(--luzmo-action-button-min-width, var(--action-button-min-width));block-size:var(--luzmo-action-button-height, var(--action-button-height));border-radius:var(--luzmo-action-button-border-radius, var(--action-button-border-radius));border-width:var(--luzmo-action-button-border-width, var(--action-button-border-width));gap:calc(var(--luzmo-action-button-text-to-visual, var(--action-button-text-to-visual)) + var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)) - var(--luzmo-action-button-edge-to-visual-only, var(--action-button-edge-to-visual-only)));padding-inline:var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text));background-color:var(--highcontrast-action-button-background-color-default, var(--luzmo-action-button-background-color-default, var(--action-button-background-color-default)));border-color:var(--highcontrast-action-button-border-color-default, var(--luzmo-action-button-border-color-default, var(--action-button-border-color-default)));color:var(--highcontrast-action-button-content-color-default, var(--luzmo-action-button-content-color-default, var(--action-button-content-color-default)));position:relative}:host:dir(rtl),:host([dir=rtl]){--logical-rotation: matrix(-1, 0, 0, 1, 0, 0)}@media (hover: hover){:host(:hover){background-color:var(--highcontrast-action-button-background-color-hover, var(--luzmo-action-button-background-color-hover, var(--action-button-background-color-hover)));border-color:var(--highcontrast-action-button-border-color-hover, var(--luzmo-action-button-border-color-hover, var(--action-button-border-color-hover)));color:var(--highcontrast-action-button-content-color-hover, var(--luzmo-action-button-content-color-hover, var(--action-button-content-color-hover)))}}:host(:focus-visible){background-color:var(--highcontrast-action-button-background-color-focus, var(--luzmo-action-button-background-color-focus, var(--action-button-background-color-focus)));border-color:var(--highcontrast-action-button-border-color-focus, var(--luzmo-action-button-border-color-focus, var(--action-button-border-color-focus)));color:var(--highcontrast-action-button-content-color-focus, var(--luzmo-action-button-content-color-focus, var(--action-button-content-color-focus)))}:host(:is(:active,[active])){background-color:var(--highcontrast-action-button-background-color-down, var(--luzmo-action-button-background-color-down, var(--action-button-background-color-down)));border-color:var(--highcontrast-action-button-border-color-down, var(--luzmo-action-button-border-color-down, var(--action-button-border-color-down)));color:var(--highcontrast-action-button-content-color-down, var(--luzmo-action-button-content-color-down, var(--action-button-content-color-down)))}:host([disabled]){background-color:var(--highcontrast-action-button-background-color-disabled, var(--luzmo-action-button-background-color-disabled, var(--action-button-background-color-disabled)));border-color:var(--highcontrast-action-button-border-color-disabled, var(--luzmo-action-button-border-color-disabled, var(--action-button-border-color-disabled)));color:var(--highcontrast-action-button-content-color-disabled, var(--luzmo-action-button-content-color-disabled, var(--action-button-content-color-disabled)))}:host([selected]){--luzmo-action-button-background-color-default: var( --luzmo-action-button-background-color-default-selected );--luzmo-action-button-background-color-hover: var( --luzmo-action-button-background-color-hover-selected );--luzmo-action-button-background-color-down: var( --luzmo-action-button-background-color-down-selected );--luzmo-action-button-background-color-focus: var( --luzmo-action-button-background-color-focus-selected );--luzmo-action-button-content-color-default: var( --luzmo-action-button-content-color-default-selected );--luzmo-action-button-content-color-hover: var( --luzmo-action-button-content-color-hover-selected );--luzmo-action-button-content-color-down: var( --luzmo-action-button-content-color-down-selected );--luzmo-action-button-content-color-focus: var( --luzmo-action-button-content-color-focus-selected )}:host([selected][emphasized]){--luzmo-action-button-background-color-default: var( --luzmo-action-button-background-color-default-selected-emphasized );--luzmo-action-button-background-color-hover: var( --luzmo-action-button-background-color-hover-selected-emphasized );--luzmo-action-button-background-color-down: var( --luzmo-action-button-background-color-down-selected-emphasized );--luzmo-action-button-background-color-focus: var( --luzmo-action-button-background-color-focus-selected-emphasized );--luzmo-action-button-content-color-default: var( --luzmo-action-button-content-color-default-selected-emphasized );--luzmo-action-button-content-color-hover: var( --luzmo-action-button-content-color-hover-selected-emphasized );--luzmo-action-button-content-color-down: var( --luzmo-action-button-content-color-down-selected-emphasized );--luzmo-action-button-content-color-focus: var( --luzmo-action-button-content-color-focus-selected-emphasized )}:host([selected][static-color=black]),:host([selected][static-color=white]){--luzmo-action-button-content-color-default: var( --luzmo-action-button-static-content-color );--luzmo-action-button-content-color-hover: var( --luzmo-action-button-static-content-color );--luzmo-action-button-content-color-down: var( --luzmo-action-button-static-content-color );--luzmo-action-button-content-color-focus: var( --luzmo-action-button-static-content-color )}::slotted([slot=icon]){inline-size:var(--luzmo-action-button-icon-size, var(--action-button-icon-size));color:inherit;margin-inline-start:calc(var(--luzmo-action-button-edge-to-visual, var(--action-button-edge-to-visual)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)));margin-inline-end:calc(var(--luzmo-action-button-edge-to-visual, var(--action-button-edge-to-visual)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)))}.hold-affordance+::slotted([slot=icon]){margin-inline-start:calc(var(--luzmo-action-button-edge-to-visual, var(--action-button-edge-to-visual)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)));margin-inline-end:calc(var(--luzmo-action-button-edge-to-visual-only, var(--action-button-edge-to-visual-only)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)))}.hold-affordance+[icon-only]::slotted([slot=icon]),[icon-only]::slotted([slot=icon]){margin-inline-start:calc(var(--luzmo-action-button-edge-to-visual-only, var(--action-button-edge-to-visual-only)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)));margin-inline-end:calc(var(--luzmo-action-button-edge-to-visual-only, var(--action-button-edge-to-visual-only)) - var(--luzmo-action-button-edge-to-text, var(--action-button-edge-to-text)))}#label{pointer-events:none;font-size:var(--luzmo-action-button-font-size, var(--action-button-font-size));white-space:nowrap;color:inherit;color:var(--luzmo-action-button-label-color, inherit);text-overflow:ellipsis;overflow:hidden}.hold-affordance{color:inherit;transform:var(--logical-rotation);position:absolute;font-size:var(--action-button-corner-triangle-size);inset-block-end:calc(var(--luzmo-action-button-edge-to-hold-icon, var(--action-button-edge-to-hold-icon)) - var(--luzmo-action-button-border-width, var(--action-button-border-width)));inset-inline-end:calc(var(--luzmo-action-button-edge-to-hold-icon, var(--action-button-edge-to-hold-icon)) - var(--luzmo-action-button-border-width, var(--action-button-border-width)))}:host{transition:border-color var(--luzmo-action-button-animation-duration, var(--action-button-animation-duration)) ease-in-out}:host:after{margin:calc((var(--luzmo-action-button-focus-indicator-gap, var(--action-button-focus-indicator-gap)) + var(--luzmo-action-button-border-width, var(--action-button-border-width))) * -1);border-radius:var(--luzmo-action-button-focus-indicator-border-radius, var(--action-button-focus-indicator-border-radius));transition:box-shadow var(--luzmo-action-button-animation-duration, var(--action-button-animation-duration)) ease-in-out;pointer-events:none;content:"";position:absolute;top:0;right:0;bottom:0;left:0}:host(:focus-visible){box-shadow:none;outline:none}:host(:focus-visible):after{box-shadow:0 0 0 var(--luzmo-action-button-focus-indicator-thickness, var(--action-button-focus-indicator-thickness)) var(--highcontrast-action-button-focus-indicator-color, var(--luzmo-action-button-focus-indicator-color, var(--action-button-focus-indicator-color)))}:host{--action-button-animation-duration: var(--luzmo-animation-duration);--action-button-border-radius: var(--luzmo-border-radius);--action-button-border-width: var(--luzmo-border-width);--action-button-content-color-default: var(--luzmo-font-color);--action-button-content-color-hover: var(--luzmo-font-color-hover);--action-button-content-color-down: var(--luzmo-font-color-down);--action-button-content-color-focus: var(--luzmo-font-color-focus);--action-button-focus-indicator-gap: var(--luzmo-indicator-gap);--action-button-focus-indicator-thickness: var(--luzmo-indicator-width);--action-button-focus-indicator-color: var(--luzmo-indicator-color);--action-button-background-color-default: var(--luzmo-background-color);--action-button-background-color-hover: var(--luzmo-background-color-hover);--action-button-background-color-down: var(--luzmo-background-color-down);--action-button-background-color-focus: var(--luzmo-background-color-focus);--action-button-border-color-default: var(--luzmo-border-color);--action-button-border-color-hover: var(--luzmo-border-color-hover);--action-button-border-color-down: var(--luzmo-border-color-down);--action-button-border-color-focus: var(--luzmo-border-color-focus);--action-button-background-color-disabled: var(--luzmo-background-color);--action-button-border-color-disabled: var(--luzmo-border-color-disabled);--action-button-content-color-disabled: var(--luzmo-font-color-disabled)}:host([quiet]){--action-button-background-color-default: transparent;--action-button-background-color-hover: var(--luzmo-background-color-hover);--action-button-background-color-down: var(--luzmo-background-color-down);--action-button-background-color-focus: var(--luzmo-background-color-focus);--action-button-background-color-disabled: transparent;--action-button-border-color-default: transparent;--action-button-border-color-hover: transparent;--action-button-border-color-down: transparent;--action-button-border-color-focus: transparent;--action-button-border-color-disabled: transparent}:host([selected]){--action-button-background-color-default: var(--luzmo-font-color);--action-button-background-color-hover: var(--luzmo-font-color-hover);--action-button-background-color-down: var(--luzmo-font-color-down);--action-button-background-color-focus: var(--luzmo-font-color-focus);--action-button-content-color-default: var(--luzmo-background-color);--action-button-content-color-hover: var(--luzmo-background-color);--action-button-content-color-down: var(--luzmo-background-color);--action-button-content-color-focus: var(--luzmo-background-color);--action-button-border-color-default: transparent;--action-button-border-color-hover: transparent;--action-button-border-color-down: transparent;--action-button-border-color-focus: transparent;--action-button-border-color-disabled: transparent;--action-button-background-color-disabled: var( --luzmo-background-color-disabled )}:host([selected][emphasized]){--action-button-background-color-default: var(--luzmo-primary);--action-button-background-color-hover: var(--luzmo-primary-hover);--action-button-background-color-down: var(--luzmo-primary-down);--action-button-background-color-focus: var(--luzmo-primary-focus);--action-button-content-color-default: var(--luzmo-primary-inverse-color);--action-button-content-color-hover: var(--luzmo-primary-inverse-color);--action-button-content-color-down: var(--luzmo-primary-inverse-color);--action-button-content-color-focus: var(--luzmo-primary-inverse-color)}:host([static-color=black][quiet]),:host([static-color=white][quiet]){--action-button-border-color-default: transparent;--action-button-border-color-hover: transparent;--action-button-border-color-down: transparent;--action-button-border-color-focus: transparent;--action-button-border-color-disabled: transparent}:host([static-color=black]){--action-button-background-color-default: transparent;--action-button-background-color-hover: rgba(0, 0, 0, .25);--action-button-background-color-down: rgba(0, 0, 0, .4);--action-button-background-color-focus: rgba(0, 0, 0, .25);--action-button-background-color-disabled: transparent;--action-button-border-color-default: rgba(0, 0, 0, .4);--action-button-border-color-hover: rgba(0, 0, 0, .55);--action-button-border-color-down: rgba(0, 0, 0, .7);--action-button-border-color-focus: rgba(0, 0, 0, .25);--action-button-border-color-disabled: transparent;--action-button-content-color-default: rgb(0, 0, 0);--action-button-content-color-hover: rgb(0, 0, 0);--action-button-content-color-down: rgb(0, 0, 0);--action-button-content-color-focus: rgb(0, 0, 0);--action-button-content-color-disabled: rgba(0, 0, 0, .55);--action-button-focus-indicator-color: rgb(0, 0, 0)}:host([static-color=black][selected]){--action-button-background-color-default: rgba(0, 0, 0, .9);--action-button-background-color-hover: rgb(0, 0, 0);--action-button-background-color-down: rgb(0, 0, 0);--action-button-background-color-focus: rgb(0, 0, 0);--action-button-background-color-disabled: rgba(0, 0, 0, .1);--action-button-border-color-disabled: transparent;--action-button-content-color-default: rgb(255, 255, 255);--action-button-content-color-hover: rgb(255, 255, 255);--action-button-content-color-down: rgb(255, 255, 255);--action-button-content-color-focus: rgb(255, 255, 255)}:host([static-color=black][selected][emphasized]){--action-button-background-color-default: rgba(0, 0, 0, .9);--action-button-background-color-hover: rgb(0, 0, 0);--action-button-background-color-down: rgb(0, 0, 0);--action-button-background-color-focus: rgb(0, 0, 0);--action-button-content-color-default: rgb(255, 255, 255);--action-button-content-color-hover: rgb(255, 255, 255);--action-button-content-color-down: rgb(255, 255, 255);--action-button-content-color-focus: rgb(255, 255, 255)}:host([static-color=white]){--action-button-background-color-default: transparent;--action-button-background-color-hover: rgba(255, 255, 255, .25);--action-button-background-color-down: rgba(255, 255, 255, .4);--action-button-background-color-focus: rgba(255, 255, 255, .25);--action-button-background-color-disabled: transparent;--action-button-border-color-default: rgba(255, 255, 255, .4);--action-button-border-color-hover: rgba(255, 255, 255, .55);--action-button-border-color-down: rgba(255, 255, 255, .7);--action-button-border-color-focus: rgba(255, 255, 255, .55);--action-button-border-color-disabled: rgba(255, 255, 255, .25);--action-button-content-color-default: rgb(255, 255, 255);--action-button-content-color-hover: rgb(255, 255, 255);--action-button-content-color-down: rgb(255, 255, 255);--action-button-content-color-focus: rgb(255, 255, 255);--action-button-content-color-disabled: rgba(255, 255, 255, .55);--action-button-focus-indicator-color: rgb(255, 255, 255)}:host([static-color=white][selected]){--action-button-background-color-default: rgba(255, 255, 255, .9);--action-button-background-color-hover: rgb(255, 255, 255);--action-button-background-color-down: rgb(255, 255, 255);--action-button-background-color-focus: rgb(255, 255, 255);--action-button-background-color-disabled: rgba(255, 255, 255, .1);--action-button-border-color-disabled: transparent;--action-button-content-color-default: rgb(0, 0, 0);--action-button-content-color-hover: rgb(0, 0, 0);--action-button-content-color-down: rgb(0, 0, 0);--action-button-content-color-focus: rgb(0, 0, 0)}:host([static-color=white][selected][emphasized]){--action-button-background-color-default: rgba(255, 255, 255, .9);--action-button-background-color-hover: rgb(255, 255, 255);--action-button-background-color-down: rgb(255, 255, 255);--action-button-background-color-focus: rgb(255, 255, 255);--action-button-content-color-default: rgb(0, 0, 0)}:host{--action-button-min-width: var(--luzmo-component-height);--action-button-height: var(--luzmo-component-height);--action-button-icon-size: var(--luzmo-font-size-l);--action-button-font-size: var(--luzmo-font-size);--action-button-text-to-visual: var(--luzmo-spacing-2);--action-button-edge-to-hold-icon: var(--luzmo-spacing-2);--action-button-edge-to-visual-size: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--action-button-edge-to-visual-only-size: var(--luzmo-spacing-3);--action-button-edge-to-text-size: 12px;--action-button-corner-triangle-size: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) )}:host([size=xs]){--action-button-min-width: var(--luzmo-component-height-xs);--action-button-height: var(--luzmo-component-height-xs);--action-button-icon-size: var(--luzmo-font-size-s);--action-button-font-size: var(--luzmo-font-size-xs);--action-button-text-to-visual: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--action-button-edge-to-hold-icon: var(--luzmo-spacing-2);--action-button-edge-to-visual-size: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--action-button-edge-to-visual-only-size: var(--luzmo-spacing-2);--action-button-edge-to-text-size: var(--luzmo-spacing-2);--action-button-corner-triangle-size: var(--luzmo-spacing-2)}:host([size=s]){--action-button-min-width: var(--luzmo-component-height-s);--action-button-height: var(--luzmo-component-height-s);--action-button-icon-size: var(--luzmo-font-size);--action-button-font-size: var(--luzmo-font-size-s);--action-button-text-to-visual: var(--luzmo-spacing-3);--action-button-edge-to-hold-icon: var(--luzmo-spacing-2);--action-button-edge-to-visual-size: var(--luzmo-spacing-3);--action-button-edge-to-visual-only-size: var(--luzmo-spacing-2);--action-button-edge-to-text-size: var(--luzmo-spacing-3);--action-button-corner-triangle-size: var(--luzmo-spacing-2)}:host([size=l]){--action-button-min-width: var(--luzmo-component-height-l);--action-button-height: var(--luzmo-component-height-l);--action-button-icon-size: var(--luzmo-font-size-xl);--action-button-font-size: var(--luzmo-font-size-l);--action-button-text-to-visual: var(--luzmo-spacing-3);--action-button-edge-to-hold-icon: var(--luzmo-spacing-2);--action-button-edge-to-visual-size: var(--luzmo-spacing-4);--action-button-edge-to-visual-only-size: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--action-button-edge-to-text-size: var(--luzmo-spacing-5);--action-button-corner-triangle-size: var(--luzmo-spacing-3)}:host([size=xl]){--action-button-min-width: var(--luzmo-component-height-xl);--action-button-height: var(--luzmo-component-height-xl);--action-button-icon-size: var(--luzmo-font-size-xxl);--action-button-font-size: var(--luzmo-font-size-xl);--action-button-text-to-visual: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) );--action-button-edge-to-hold-icon: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--action-button-edge-to-visual-size: var(--luzmo-spacing-5);--action-button-edge-to-visual-only-size: var(--luzmo-spacing-4);--action-button-edge-to-text-size: var(--luzmo-spacing-5);--action-button-corner-triangle-size: var(--luzmo-spacing-3)}::slotted([slot=icon]){flex-shrink:0}#label{flex-grow:var(--action-button-label-flex-grow);text-align:var(--action-button-label-text-align);pointer-events:none!important}:host([size=xs]){min-width:var(--action-button-height, 0);--action-button-edge-to-visual-only: calc( var(--luzmo-spacing-2) - var(--action-button-border-width) )}:host([size=s]){--action-button-edge-to-visual-only: calc( var(--luzmo-spacing-2) - var(--action-button-border-width) )}:host([size=m]){--action-button-edge-to-visual-only: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) - var(--action-button-border-width) )}:host([size=l]){--action-button-edge-to-visual-only: calc( var(--luzmo-spacing-3) - var(--action-button-border-width) )}:host([size=xl]){--action-button-edge-to-visual-only: calc( var(--luzmo-spacing-4) - var(--action-button-border-width) )}@media (forced-colors: active){:host{--highcontrast-action-button-border-color-disabled: GrayText;--highcontrast-action-button-content-color-disabled: GrayText}}';
var p = Object.defineProperty, x = Object.getOwnPropertyDescriptor, e = (c, o, t, n) => {
  for (var i = n > 1 ? void 0 : n ? x(o, t) : o, l = c.length - 1, u; l >= 0; l--)
    (u = c[l]) && (i = (n ? u(o, t, i) : u(i)) || i);
  return n && i && p(o, t, i), i;
};
const k = 300;
let d;
class r extends b(v, {
  validSizes: ["xs", "s", "m", "l", "xl"],
  noDefaultSize: !0
}) {
  constructor() {
    super(), this.emphasized = !1, this.holdAffordance = !1, this.quiet = !1, this.role = "button", this.selected = !1, this.toggles = !1, this._value = "", this.onClick = () => {
      this.toggles && (this.selected = !this.selected, this.dispatchEvent(
        new Event("change", {
          cancelable: !0,
          bubbles: !0,
          composed: !0
        })
      ) || (this.selected = !this.selected));
    }, this.addEventListener("click", this.onClick);
  }
  static get styles() {
    return [...super.styles, s(f)];
  }
  get value() {
    return this._value || this.itemText;
  }
  set value(o) {
    o !== this._value && (this._value = o || "", this._value ? this.setAttribute("value", this._value) : this.removeAttribute("value"));
  }
  /**
   * @private
   */
  get itemText() {
    return (this.textContent || /* c8 ignore next */
    "").trim();
  }
  handlePointerdownHoldAffordance(o) {
    o.button === 0 && (this.addEventListener("pointerup", this.handlePointerupHoldAffordance), this.addEventListener("pointercancel", this.handlePointerupHoldAffordance), d = setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("longpress", {
          bubbles: !0,
          composed: !0,
          detail: {
            source: "pointer"
          }
        })
      );
    }, k));
  }
  handlePointerupHoldAffordance() {
    clearTimeout(d), this.removeEventListener("pointerup", this.handlePointerupHoldAffordance), this.removeEventListener(
      "pointercancel",
      this.handlePointerupHoldAffordance
    );
  }
  /**
   * @private
   */
  handleKeydown(o) {
    if (!this.holdAffordance)
      return super.handleKeydown(o);
    const { code: t, altKey: n } = o;
    (t === "Space" || n && t === "ArrowDown") && (o.preventDefault(), t === "ArrowDown" && (o.stopPropagation(), o.stopImmediatePropagation()), this.addEventListener("keyup", this.handleKeyup), this.active = !0);
  }
  handleKeyup(o) {
    if (!this.holdAffordance)
      return super.handleKeyup(o);
    const { code: t, altKey: n } = o;
    (t === "Space" || n && t === "ArrowDown") && (o.stopPropagation(), this.dispatchEvent(
      new CustomEvent("longpress", {
        bubbles: !0,
        composed: !0,
        detail: {
          source: "keyboard"
        }
      })
    ), this.active = !1);
  }
  get buttonContent() {
    const o = super.buttonContent;
    return this.holdAffordance && o.unshift(m`
        <div
          class="hold-affordance corner-triangle-${this.size}"
        >
          ${g(h)}
        </div>
      `), o;
  }
  updated(o) {
    super.updated(o);
    const t = this.role === "button", n = t && (this.selected || this.toggles) && !(this.hasAttribute("aria-haspopup") && this.hasAttribute("aria-expanded"));
    (o.has("selected") || o.has("role")) && (n ? this.setAttribute("aria-pressed", this.selected ? "true" : "false") : (this.removeAttribute("aria-pressed"), t && this.toggles && this.hasAttribute("aria-expanded") && this.setAttribute("aria-expanded", this.selected ? "true" : "false"))), o.has("holdAffordance") && (this.holdAffordance ? this.addEventListener(
      "pointerdown",
      this.handlePointerdownHoldAffordance
    ) : (this.removeEventListener(
      "pointerdown",
      this.handlePointerdownHoldAffordance
    ), this.handlePointerupHoldAffordance()));
  }
}
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "emphasized", 2);
e([
  a({ type: Boolean, reflect: !0, attribute: "hold-affordance" })
], r.prototype, "holdAffordance", 2);
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "quiet", 2);
e([
  a({ reflect: !0 })
], r.prototype, "role", 2);
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "selected", 2);
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "toggles", 2);
e([
  a({ reflect: !0, attribute: "static-color" })
], r.prototype, "staticColor", 2);
e([
  a({ type: String })
], r.prototype, "value", 1);
customElements.get("luzmo-action-button") || customElements.define("luzmo-action-button", r);
