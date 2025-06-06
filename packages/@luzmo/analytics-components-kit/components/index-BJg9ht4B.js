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
import { b as R, a as J, h as M, H as C, R as u, O as _, g as Q, T as ee, c as oe } from "./get-css-variable-Cb4e-hdr.js";
import { C as te, a as D, o as re, w as ie } from "./async-directive-DWRUSKKF-DBmP02pF.js";
import { _ as le } from "./state-CYxk12SV-BOqaoLNO.js";
import { a as se } from "./button-base-B7v4eeRh-Chb432uy.js";
import { i as ne } from "./index-Dpr9NLmc.js";
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
const p = ["", () => {
}];
let ae = class extends te {
  constructor() {
    super(...arguments), this.start = p, this.streamInside = p, this.end = p, this.streamOutside = p, this.state = "off", this.handleStart = (e) => {
      this.clearStream(), this.callHandler(this.start[1], e), !e.defaultPrevented && (this.removeListeners(), this.addListeners("on"));
    }, this.handleInside = (e) => {
      this.handleStream(this.streamInside[1], e);
    }, this.handleEnd = (e) => {
      this.clearStream(), this.callHandler(this.end[1], e), this.removeListeners(), this.addListeners("off");
    }, this.handleOutside = (e) => {
      this.handleStream(this.streamOutside[1], e);
    };
  }
  /* c8 ignore next 4 */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e) {
    return R;
  }
  update(e, [
    {
      start: o,
      end: t,
      streamInside: r = p,
      streamOutside: i = p
    }
  ]) {
    var s;
    this.element !== e.element && (this.element = e.element, this.removeListeners()), this.host = ((s = e.options) == null ? void 0 : s.host) || this.element, this.start = o, this.end = t, this.streamInside = r, this.streamOutside = i, this.addListeners();
  }
  addListeners(e) {
    this.state = e || this.state, this.state === "off" ? (this.addListener(this.streamOutside[0], this.handleOutside), this.addListener(this.start[0], this.handleStart)) : this.state === "on" && (this.addListener(this.streamInside[0], this.handleInside), this.addListener(this.end[0], this.handleEnd));
  }
  callHandler(e, o) {
    typeof e == "function" ? e.call(this.host, o) : e.handleEvent(o);
  }
  handleStream(e, o) {
    this.stream || (this.callHandler(e, o), this.stream = requestAnimationFrame(() => {
      this.stream = void 0;
    }));
  }
  clearStream() {
    this.stream != null && (cancelAnimationFrame(this.stream), this.stream = void 0);
  }
  addListener(e, o) {
    Array.isArray(e) ? e.map((t) => {
      this.element.addEventListener(t, o);
    }) : this.element.addEventListener(e, o);
  }
  removeListener(e, o) {
    Array.isArray(e) ? e.map((t) => {
      this.element.removeEventListener(t, o);
    }) : this.element.removeEventListener(e, o);
  }
  removeListeners() {
    this.removeListener(this.start[0], this.handleStart), this.removeListener(this.streamInside[0], this.handleInside), this.removeListener(this.end[0], this.handleEnd), this.removeListener(this.streamOutside[0], this.handleOutside);
  }
  disconnected() {
    this.removeListeners();
  }
  /* c8 ignore next 3 */
  reconnected() {
    this.addListeners();
  }
};
const de = le(
  ae
);
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
const T = Symbol(
  "language resolver updated"
);
class ue {
  constructor(e) {
    this.language = document.documentElement.lang || navigator.language, this.host = e, this.host.addController(this);
  }
  hostConnected() {
    this.resolveLanguage();
  }
  hostDisconnected() {
    var e;
    (e = this.unsubscribe) == null || e.call(this);
  }
  resolveLanguage() {
    const e = new CustomEvent(
      "luzmo-language-context",
      {
        bubbles: !0,
        composed: !0,
        detail: {
          callback: (o, t) => {
            const r = this.language;
            this.language = o, this.unsubscribe = t, this.host.requestUpdate(T, r);
          }
        },
        cancelable: !0
      }
    );
    this.host.dispatchEvent(e);
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
const ce = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const l = document.createElement("style");
    l.setAttribute("data-luzmo-vars", ""), l.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(l);
  }
};
ce();
const be = "@media (forced-colors: active){:host(:is(:active,[active])):not(:disabled),:host(:focus-visible):not(:disabled){--highcontrast-infield-button-border-color: Highlight}}@media (forced-colors: active) and (hover: hover){:host(:hover):not(:disabled){--highcontrast-infield-button-border-color: Highlight}}:host{background-color:initial;cursor:pointer;block-size:var(--luzmo-infield-button-height, var(--infield-button-height));inline-size:var(--luzmo-infield-button-width, var(--infield-button-width));padding:var(--luzmo-infield-button-edge-to-fill, var(--infield-button-edge-to-fill));color:var(--infield-button-content-color, inherit);border-style:none;justify-content:center;align-items:center;display:flex}.fill{block-size:100%;inline-size:100%;background-color:var(--luzmo-infield-button-background-color, var(--infield-button-background-color));border-width:var(--luzmo-infield-button-border-width, var(--infield-button-border-width));border-style:solid;border-color:var(--highcontrast-infield-button-border-color, var(--luzmo-infield-button-border-color, var(--infield-button-border-color)));padding:var(--luzmo-infield-button-fill-padding, var(--infield-button-fill-padding));border-start-start-radius:var(--luzmo-infield-button-border-radius, var(--infield-button-border-radius));border-start-end-radius:var(--luzmo-infield-button-border-radius, var(--infield-button-border-radius));border-end-end-radius:var(--luzmo-infield-button-border-radius, var(--infield-button-border-radius));border-end-start-radius:var(--luzmo-infield-button-border-radius, var(--infield-button-border-radius))}::slotted(*){color:var(--luzmo-infield-button-icon-color, var(--infield-button-icon-color))}:host([inline=end]) .fill{border-start-start-radius:var(--luzmo-infield-button-border-radius-reset, var(--infield-button-border-radius-reset));border-end-start-radius:var(--luzmo-infield-button-border-radius-reset, var(--infield-button-border-radius-reset))}:host([inline=start]) .fill{border-start-end-radius:var(--luzmo-infield-button-border-radius-reset, var(--infield-button-border-radius-reset));border-end-end-radius:var(--luzmo-infield-button-border-radius-reset, var(--infield-button-border-radius-reset))}:host([block=end]),:host([block=start]){--infield-button-width: var(--luzmo-infield-button-width-stacked, 28px)}:host([block=end][size=s]),:host([block=start][size=s]){--infield-button-width: var(--luzmo-infield-button-width-stacked, 20px)}:host([block=end][size=l]),:host([block=start][size=l]){--infield-button-width: var(--luzmo-infield-button-width-stacked, 36px)}:host([block=end][size=xl]),:host([block=start][size=xl]){--infield-button-width: var(--luzmo-infield-button-width-stacked, 44px)}:host([quiet]){--infield-button-background-color: var( --luzmo-infield-button-background-color-quiet, transparent );--infield-button-background-color-hover: var( --luzmo-infield-button-background-color-hover-quiet, transparent );--infield-button-background-color-down: var( --luzmo-infield-button-background-color-down-quiet, transparent );--infield-button-background-color-key-focus: var( --luzmo-infield-button-background-color-key-focus-quiet, transparent );--infield-border-color: var(--luzmo-infield-border-color-quiet, transparent);--infield-button-border-width: var( --luzmo-infield-button-border-width-quiet, 0 )}:host([quiet][disabled]){--infield-button-background-color: var( --luzmo-infield-button-background-color-quiet-disabled, transparent );--infield-button-border-color: var( --luzmo-infield-button-border-color-quiet-disabled, transparent )}:host([disabled]){--infield-button-background-color: var( --luzmo-infield-button-background-color-disabled, var(--luzmo-background-color-disabled) );--infield-button-background-color-hover: var( --luzmo-infield-button-background-color-hover-disabled, var(--luzmo-background-color-disabled) );--infield-button-background-color-down: var( --luzmo-infield-button-background-color-down-disabled, var(--luzmo-background-color-disabled) );--infield-button-border-color: var( --luzmo-infield-button-border-color-disabled, var(--luzmo-background-color-disabled) );--infield-button-content-color: var( --luzmo-infield-button-content-color-disabled, var(--luzmo-color-disabled) );--infield-button-icon-color: var( --luzmo-infield-button-icon-color-disabled, var(--luzmo-color-disabled) );--infield-button-icon-color-hover: var( --luzmo-infield-button-icon-color-hover-disabled, var(--luzmo-color-disabled) );--infield-button-icon-color-down: var( --luzmo-infield-button-icon-color-down-disabled, var(--luzmo-color-disabled) );--infield-button-icon-color-key-focus: var( --luzmo-infield-button-icon-color-key-focus-disabled, var(--luzmo-color-disabled) );cursor:auto}@media (hover: hover){:host(:hover) .fill{background-color:var(--luzmo-infield-button-background-color-hover, var(--infield-button-background-color-hover))}:host(:hover) ::slotted(*){color:var(--luzmo-infield-button-icon-color-hover, var(--infield-button-icon-color-hover))}}:host(:is(:active,[active])) .fill{background-color:var(--luzmo-infield-button-background-color-down, var(--infield-button-background-color-down))}:host(:is(:active,[active])) ::slotted(*){color:var(--luzmo-infield-button-icon-color-down, var(--infield-button-icon-color-down))}:host(:focus-visible){outline:none}:host(:focus-visible) .fill{background-color:var(--luzmo-infield-button-background-color-key-focus, var(--infield-button-background-color-key-focus))}:host(:focus-visible) ::slotted(*){color:var(--luzmo-infield-button-icon-color-key-focus, var(--infield-button-icon-color-key-focus))}.fill{align-items:center;justify-content:var(--luzmo-infield-button-fill-justify-content, var(--infield-button-fill-justify-content));display:flex}:host([block=end]),:host([block=start]){block-size:calc(var(--luzmo-infield-button-height, var(--infield-button-height)) / 2)}:host([block=end]) .fill,:host([block=start]) .fill{box-sizing:border-box;padding-inline-start:calc(var(--luzmo-infield-button-stacked-fill-padding-inline, var(--infield-button-stacked-fill-padding-inline)) - var(--luzmo-infield-button-edge-to-fill, var(--infield-button-edge-to-fill)) - var(--luzmo-infield-button-border-width, var(--infield-button-border-width)));padding-inline-end:calc(var(--luzmo-infield-button-stacked-fill-padding-inline, var(--infield-button-stacked-fill-padding-inline)) - var(--luzmo-infield-button-edge-to-fill, var(--infield-button-edge-to-fill)) - var(--luzmo-infield-button-border-width, var(--infield-button-border-width)))}:host([block=start]){padding-block-end:var(--luzmo-infield-button-inner-edge-to-fill, var(--infield-button-inner-edge-to-fill))}:host([block=start]) .fill{border-block-end:none;border-start-start-radius:var(--luzmo-infield-button-stacked-top-border-radius-start-start, var(--infield-button-stacked-top-border-radius-start-start));border-end-end-radius:var(--luzmo-infield-button-stacked-border-radius-reset, var(--infield-button-stacked-border-radius-reset));border-end-start-radius:var(--luzmo-infield-button-stacked-border-radius-reset, var(--infield-button-stacked-border-radius-reset));padding-block-start:calc(var(--luzmo-infield-button-stacked-fill-padding-outer, var(--infield-button-stacked-fill-padding-outer)) - var(--luzmo-infield-button-edge-to-fill, var(--infield-button-edge-to-fill)) - var(--luzmo-infield-button-border-width, var(--infield-button-border-width)));padding-block-end:calc(var(--luzmo-infield-button-stacked-fill-padding-inner, var(--infield-button-stacked-fill-padding-inner)) - var(--luzmo-infield-button-inner-edge-to-fill, var(--infield-button-inner-edge-to-fill)))}:host([block=end]){padding-block-start:var(--luzmo-infield-button-inner-edge-to-fill, var(--infield-button-inner-edge-to-fill))}:host([block=end]) .fill{border-block-end-width:var(--luzmo-infield-button-stacked-bottom-border-block-end-width, var(--luzmo-infield-button-border-width, var(--infield-button-border-width)));border-start-start-radius:var(--luzmo-infield-button-stacked-border-radius-reset, var(--infield-button-stacked-border-radius-reset));border-start-end-radius:var(--luzmo-infield-button-stacked-border-radius-reset, var(--infield-button-stacked-border-radius-reset));border-end-end-radius:var(--luzmo-infield-button-stacked-bottom-border-radius-end-end, var(--luzmo-infield-button-border-radius, var(--infield-button-border-radius)));border-end-start-radius:var(--luzmo-infield-button-stacked-bottom-border-radius-end-start, var(--infield-button-stacked-bottom-border-radius-end-start));padding-block-start:calc(var(--luzmo-infield-button-stacked-fill-padding-inner, var(--infield-button-stacked-fill-padding-inner)) - var(--luzmo-infield-button-edge-to-fill, var(--infield-button-edge-to-fill)) - var(--luzmo-infield-button-border-width, var(--infield-button-border-width)));padding-block-end:calc(var(--luzmo-infield-button-stacked-fill-padding-outer, var(--infield-button-stacked-fill-padding-outer)) - var(--luzmo-infield-button-inner-edge-to-fill, var(--infield-button-inner-edge-to-fill)) - var(--luzmo-infield-button-border-width, var(--infield-button-border-width)))}::slotted(*){display:initial;flex-shrink:0;margin:0!important}:host{--infield-button-border-width: var(--luzmo-border-width);--infield-button-border-color: inherit;--infield-button-border-radius: var(--luzmo-border-radius-s);--infield-button-border-radius-reset: 0;--infield-button-stacked-top-border-radius-start-start: 0;--infield-button-stacked-bottom-border-radius-end-start: 0;--infield-button-background-color: var(--luzmo-background-color);--infield-button-background-color-hover: var(--luzmo-background-color-hover);--infield-button-background-color-down: var(--luzmo-background-color-down);--infield-button-background-color-key-focus: var( --luzmo-background-color-focus );--infield-button-height: var(--luzmo-component-height);--infield-button-width: var(--luzmo-component-height);--infield-button-stacked-border-radius-reset: 0px;--infield-button-edge-to-fill: 0px;--infield-button-inner-edge-to-fill: 0px;--infield-button-fill-padding: 0px;--infield-button-stacked-fill-padding-inline: 9px;--infield-button-stacked-fill-padding-outer: 3px;--infield-button-stacked-fill-padding-inner: 3px;--infield-button-animation-duration: var(--luzmo-animation-duration);--infield-button-icon-color: var(--luzmo-font-color);--infield-button-icon-color-hover: var(--luzmo-font-color-hard);--infield-button-icon-color-down: var(--luzmo-font-color-hard);--infield-button-icon-color-key-focus: var(--luzmo-font-color-hard);--infield-button-fill-justify-content: center}:host([disabled]){--infield-button-background-color: var(--luzmo-background-color-disabled);--infield-button-background-color-hover: var( --luzmo-background-color-disabled );--infield-button-background-color-down: var( --luzmo-background-color-disabled );--infield-button-border-color: var(--luzmo-border-color-disabled);--infield-button-content-color: var(--luzmo-color-disabled);--infield-button-icon-color: var(--luzmo-color-disabled);--infield-button-icon-color-hover: var(--luzmo-color-disabled);--infield-button-icon-color-down: var(--luzmo-color-disabled);--infield-button-icon-color-key-focus: var(--luzmo-color-disabled)}:host([size=s]){--infield-button-height: var(--luzmo-component-height-s);--infield-button-width: var(--luzmo-component-height-s);--infield-button-stacked-fill-padding-inline: 7px;--infield-button-stacked-fill-padding-outer: 3px;--infield-button-stacked-fill-padding-inner: 3px}:host([size=l]){--infield-button-height: var(--luzmo-component-height-l);--infield-button-width: var(--luzmo-component-height-l);--infield-button-stacked-fill-padding-inline: 13px;--infield-button-stacked-fill-padding-outer: 4px;--infield-button-stacked-fill-padding-inner: 4px}:host([size=xl]){--infield-button-height: var(--luzmo-component-height-xl);--infield-button-width: var(--luzmo-component-height-xl);--infield-button-stacked-fill-padding-inline: 16px;--infield-button-stacked-fill-padding-outer: 5px;--infield-button-stacked-fill-padding-inner: 5px}:host([block=start]){--infield-button-width: 20px}:host([block=end]){--infield-button-width: 20px}:host([block=start][size=s]){--infield-button-width: 16px}:host([block=end][size=s]){--infield-button-width: 16px}:host([block=start][size=l]){--infield-button-width: 28px}:host([block=end][size=l]){--infield-button-width: 28px}:host([block=start][size=xl]){--infield-button-width: 36px}:host([block=end][size=xl]){--infield-button-width: 36px}:host([quiet]){--infield-button-background-color: transparent;--infield-button-background-color-hover: transparent;--infield-button-background-color-down: transparent;--infield-button-background-color-key-focus: transparent;--infield-border-color: transparent;--infield-button-border-width: 0}:host([quiet][disabled]){--infield-button-background-color: transparent;--infield-button-border-color: transparent}:host{box-sizing:border-box;-webkit-user-select:none;user-select:none}::slotted(*){--parent-element-icon-vertical-align: 1px;--icon-size: inherit}";
var he = Object.defineProperty, N = (l, e, o, t) => {
  for (var r = void 0, i = l.length - 1, s; i >= 0; i--)
    (s = l[i]) && (r = s(e, o, r) || r);
  return r && he(e, o, r), r;
};
class x extends J(se, {
  noDefaultSize: !0,
  validSizes: ["s", "m", "l", "xl"]
}) {
  constructor() {
    super(...arguments), this.quiet = !1;
  }
  static get styles() {
    return [...super.styles, M(be)];
  }
  get buttonContent() {
    return [C`
      <div class="fill">
        <slot></slot>
      </div>
    `];
  }
}
N([
  u()
], x.prototype, "block");
N([
  u()
], x.prototype, "inline");
N([
  u({ type: Boolean, reflect: !0 })
], x.prototype, "quiet");
customElements.get("luzmo-infield-button") || customElements.define("luzmo-infield-button", x);
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
const pe = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const l = document.createElement("style");
    l.setAttribute("data-luzmo-vars", ""), l.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(l);
  }
};
pe();
let k = /* @__PURE__ */ new Map(), S = !1;
try {
  S = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let z = !1;
try {
  z = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const j = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class g {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(e) {
    let o = "";
    if (!S && this.options.signDisplay != null ? o = fe(this.numberFormatter, this.options.signDisplay, e) : o = this.numberFormatter.format(e), this.options.style === "unit" && !z) {
      var t;
      let { unit: r, unitDisplay: i = "short", locale: s } = this.resolvedOptions();
      if (!r) return o;
      let n = (t = j[r]) === null || t === void 0 ? void 0 : t[i];
      o += n[s] || n.default;
    }
    return o;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  /** Formats a number range as a string. */
  formatRange(e, o) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, o);
    if (o < e) throw new RangeError("End date must be >= start date");
    return `${this.format(e)} – ${this.format(o)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(e, o) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, o);
    if (o < e) throw new RangeError("End date must be >= start date");
    let t = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(o);
    return [
      ...t.map((i) => ({
        ...i,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...r.map((i) => ({
        ...i,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    return !S && this.options.signDisplay != null && (e = {
      ...e,
      signDisplay: this.options.signDisplay
    }), !z && this.options.style === "unit" && (e = {
      ...e,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), e;
  }
  constructor(e, o = {}) {
    this.numberFormatter = me(e, o), this.options = o;
  }
}
function me(l, e = {}) {
  let { numberingSystem: o } = e;
  if (o && l.includes("-nu-") && (l.includes("-u-") || (l += "-u-"), l += `-nu-${o}`), e.style === "unit" && !z) {
    var t;
    let { unit: s, unitDisplay: n = "short" } = e;
    if (!s) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((t = j[s]) === null || t === void 0) && t[n])) throw new Error(`Unsupported unit ${s} with unitDisplay = ${n}`);
    e = {
      ...e,
      style: "decimal"
    };
  }
  let r = l + (e ? Object.entries(e).sort((s, n) => s[0] < n[0] ? -1 : 1).join() : "");
  if (k.has(r)) return k.get(r);
  let i = new Intl.NumberFormat(l, e);
  return k.set(r, i), i;
}
function fe(l, e, o) {
  if (e === "auto") return l.format(o);
  if (e === "never") return l.format(Math.abs(o));
  {
    let t = !1;
    if (e === "always" ? t = o > 0 || Object.is(o, 0) : e === "exceptZero" && (Object.is(o, -0) || Object.is(o, 0) ? o = Math.abs(o) : t = o > 0), t) {
      let r = l.format(-o), i = l.format(o), s = r.replace(i, "").replace(/\u200e|\u061C/, "");
      return [
        ...s
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), r.replace(i, "!!!").replace(s, "+").replace("!!!", i);
    } else return l.format(o);
  }
}
const ve = new RegExp("^.*\\(.*\\).*$"), ge = [
  "latn",
  "arab",
  "hanidec",
  "deva",
  "beng"
];
class E {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(e) {
    return F(this.locale, this.options, e).parse(e);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(e, o, t) {
    return F(this.locale, this.options, e).isValidPartialNumber(e, o, t);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(e) {
    return F(this.locale, this.options, e).options.numberingSystem;
  }
  constructor(e, o = {}) {
    this.locale = e, this.options = o;
  }
}
const I = /* @__PURE__ */ new Map();
function F(l, e, o) {
  let t = O(l, e);
  if (!l.includes("-nu-") && !t.isValidPartialNumber(o)) {
    for (let r of ge) if (r !== t.options.numberingSystem) {
      let i = O(l + (l.includes("-u-") ? "-nu-" : "-u-nu-") + r, e);
      if (i.isValidPartialNumber(o)) return i;
    }
  }
  return t;
}
function O(l, e) {
  let o = l + (e ? Object.entries(e).sort((r, i) => r[0] < i[0] ? -1 : 1).join() : ""), t = I.get(o);
  return t || (t = new ze(l, e), I.set(o, t)), t;
}
class ze {
  parse(e) {
    let o = this.sanitize(e);
    if (this.symbols.group && (o = f(o, this.symbols.group, "")), this.symbols.decimal && (o = o.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (o = o.replace(this.symbols.minusSign, "-")), o = o.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let s = o.indexOf("-");
      o = o.replace("-", "");
      let n = o.indexOf(".");
      n === -1 && (n = o.length), o = o.replace(".", ""), n - 2 === 0 ? o = `0.${o}` : n - 2 === -1 ? o = `0.0${o}` : n - 2 === -2 ? o = "0.00" : o = `${o.slice(0, n - 2)}.${o.slice(n - 2)}`, s > -1 && (o = `-${o}`);
    }
    let t = o ? +o : NaN;
    if (isNaN(t)) return NaN;
    if (this.options.style === "percent") {
      var r, i;
      let s = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) + 2, 20),
        maximumFractionDigits: Math.min(((i = this.options.maximumFractionDigits) !== null && i !== void 0 ? i : 0) + 2, 20)
      };
      return new E(this.locale, s).parse(new g(this.locale, s).format(t));
    }
    return this.options.currencySign === "accounting" && ve.test(e) && (t = -1 * t), t;
  }
  sanitize(e) {
    return e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = e.replace(",", this.symbols.decimal), e = e.replace("،", this.symbols.decimal)), this.symbols.group && (e = f(e, ".", this.symbols.group))), this.options.locale === "fr-FR" && (e = f(e, ".", " ")), e;
  }
  isValidPartialNumber(e, o = -1 / 0, t = 1 / 0) {
    return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && o < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && t > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (e = f(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
  }
  constructor(e, o = {}) {
    this.locale = e, this.formatter = new Intl.NumberFormat(e, o), this.options = this.formatter.resolvedOptions(), this.symbols = ye(e, this.formatter, this.options, o);
    var t, r;
    this.options.style === "percent" && (((t = this.options.minimumFractionDigits) !== null && t !== void 0 ? t : 0) > 18 || ((r = this.options.maximumFractionDigits) !== null && r !== void 0 ? r : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const V = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), xe = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function ye(l, e, o, t) {
  var r, i, s, n;
  let a = new Intl.NumberFormat(l, {
    ...o,
    // Resets so we get the full range of symbols
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21,
    roundingIncrement: 1,
    roundingPriority: "auto",
    roundingMode: "halfExpand"
  }), m = a.formatToParts(-10000.111), H = a.formatToParts(10000.111), A = xe.map((d) => a.formatToParts(d));
  var y;
  let U = (y = (r = m.find((d) => d.type === "minusSign")) === null || r === void 0 ? void 0 : r.value) !== null && y !== void 0 ? y : "-", w = (i = H.find((d) => d.type === "plusSign")) === null || i === void 0 ? void 0 : i.value;
  !w && ((t == null ? void 0 : t.signDisplay) === "exceptZero" || (t == null ? void 0 : t.signDisplay) === "always") && (w = "+");
  let B = (s = new Intl.NumberFormat(l, {
    ...o,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((d) => d.type === "decimal")) === null || s === void 0 ? void 0 : s.value, W = (n = m.find((d) => d.type === "group")) === null || n === void 0 ? void 0 : n.value, K = m.filter((d) => !V.has(d.type)).map((d) => $(d.value)), X = A.flatMap((d) => d.filter((h) => !V.has(h.type)).map((h) => $(h.value))), P = [
    .../* @__PURE__ */ new Set([
      ...K,
      ...X
    ])
  ].sort((d, h) => h.length - d.length), Y = P.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${P.join("|")}|[\\p{White_Space}]`, "gu"), q = [
    ...new Intl.NumberFormat(o.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), G = new Map(q.map((d, h) => [
    d,
    h
  ])), Z = new RegExp(`[${q.join("")}]`, "g");
  return {
    minusSign: U,
    plusSign: w,
    decimal: B,
    group: W,
    literals: Y,
    numeral: Z,
    index: (d) => String(G.get(d))
  };
}
function f(l, e, o) {
  return l.replaceAll ? l.replaceAll(e, o) : l.split(e).join(o);
}
function $(l) {
  return l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const we = '#text-field{--stepper-width: calc( var(--luzmo-stepper-height, var(--stepper-height)) * var( --luzmo-stepper-min-width-multiplier, var(--stepper-min-width-multiplier) ) + var(--luzmo-stepper-button-width, var(--stepper-button-width)) + var(--luzmo-stepper-border-width, var(--stepper-border-width)) * 2 );--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color, var( --luzmo-stepper-buttons-border-color, var(--stepper-buttons-border-color) ) );--luzmo-infield-button-border-width: var( --luzmo-stepper-button-border-width, var(--stepper-button-border-width) );--luzmo-infield-button-border-radius-reset: var( --stepper-button-border-radius-reset );--luzmo-text-field-border-width: var( --luzmo-stepper-border-width, var(--stepper-border-width) );inline-size:var(--luzmo-stepper-width, var(--stepper-width));block-size:var(--luzmo-stepper-height, var(--stepper-height));border-radius:var(--luzmo-stepper-border-radius, var(--stepper-border-radius));border-color:var(--highcontrast-stepper-border-color, var(--luzmo-stepper-border-color, var(--stepper-border-color)));flex-flow:row;display:inline-flex;position:relative}#text-field:after{content:"";inline-size:100%;block-size:var(--luzmo-stepper-focus-indicator-width, var(--stepper-focus-indicator-width));position:absolute;inset-block-end:calc((var(--luzmo-stepper-focus-indicator-gap, var(--stepper-focus-indicator-gap)) + var(--luzmo-stepper-focus-indicator-width, var(--stepper-focus-indicator-width))) * -1);inset-inline-start:0}:host([focused]) #text-field,#text-field:focus{--luzmo-stepper-border-color: var( --highcontrast-stepper-border-color-focus, var(--luzmo-stepper-border-color-focus, var(--stepper-border-color-focus)) );--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-focus, var( --luzmo-stepper-buttons-border-color-focus, var(--stepper-buttons-border-color-focus) ) )}:host([focused]:not([disabled])) #text-field .input,:host(:not([disabled])) #text-field:focus .input{outline:none}:host([focused]:not([disabled])) #text-field .buttons,:host([focused]:not([disabled])) #text-field .input,:host(:not([disabled])) #text-field:focus .buttons,:host(:not([disabled])) #text-field:focus .input{border-color:var(--highcontrast-stepper-border-color-focus, var(--luzmo-stepper-border-color-focus, var(--stepper-border-color-focus)))}:host([keyboard-focused]) #text-field,#text-field:focus-visible{--luzmo-stepper-border-color: var( --highcontrast-stepper-border-color-keyboard-focus, var( --luzmo-stepper-buttons-border-color-keyboard-focus, var(--stepper-buttons-border-color-keyboard-focus) ) );--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-keyboard-focus, var( --luzmo-stepper-buttons-border-color-keyboard-focus, var(--stepper-buttons-border-color-keyboard-focus) ) )}:host([keyboard-focused]:not([disabled])) #text-field,:host(:not([disabled])) #text-field:focus-visible{outline:var(--luzmo-stepper-focus-indicator-width, var(--stepper-focus-indicator-width)) solid;outline-color:var(--highcontrast-stepper-focus-indicator-color, var(--luzmo-stepper-focus-indicator-color, var(--stepper-focus-indicator-color)));outline-offset:var(--luzmo-stepper-focus-indicator-gap, var(--stepper-focus-indicator-gap))}:host([keyboard-focused]:not([disabled])) #text-field .input,:host(:not([disabled])) #text-field:focus-visible .input{outline:none}:host([keyboard-focused]:not([disabled])) #text-field .buttons,:host([keyboard-focused]:not([disabled])) #text-field .input,:host(:not([disabled])) #text-field:focus-visible .buttons,:host(:not([disabled])) #text-field:focus-visible .input{border-color:var(--highcontrast-stepper-border-color-keyboard-focus, var(--luzmo-stepper-border-color-keyboard-focus, var(--stepper-border-color-keyboard-focus)))}:host([invalid]:not([disabled])) #text-field{--luzmo-stepper-border-color: var( --luzmo-stepper-border-color-invalid, var(--stepper-border-color-invalid) );--luzmo-stepper-border-color-hover: var( --luzmo-stepper-border-color-hover-invalid, var(--stepper-border-color-hover-invalid) );--luzmo-stepper-border-color-focus: var( --luzmo-stepper-border-color-focus-invalid, var(--stepper-border-color-focus-invalid) );--luzmo-stepper-border-color-focus-hover: var( --luzmo-stepper-border-color-focus-hover-invalid, var(--stepper-border-color-focus-hover-invalid) );--luzmo-stepper-border-color-keyboard-focus: var( --luzmo-stepper-border-color-keyboard-focus-invalid, var(--stepper-border-color-keyboard-focus-invalid) );--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-invalid, var(--stepper-border-color-invalid) );--luzmo-text-field-icon-spacing-inline-start-invalid: 0}:host([invalid][focused]:not([disabled])) #text-field,:host([invalid]:not([disabled])) #text-field:focus{--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-focus-invalid, var(--stepper-border-color-focus-invalid) )}:host([invalid][keyboard-focused]:not([disabled])) #text-field,:host([invalid]:not([disabled])) #text-field:focus-visible{--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-keyboard-focus-invalid, var(--stepper-border-color-keyboard-focus-invalid) )}:host([disabled]) #text-field{--luzmo-stepper-border-color: var(--stepper-button-border-color-disabled);--luzmo-stepper-border-color-hover: var( --stepper-button-border-color-disabled );--luzmo-stepper-border-color-focus: var( --stepper-button-border-color-disabled );--luzmo-stepper-border-color-focus-hover: var( --stepper-button-border-color-disabled );--luzmo-stepper-border-color-keyboard-focus: var( --stepper-button-border-color-disabled );--luzmo-stepper-buttons-background-color: var( --stepper-buttons-background-color-disabled );--luzmo-infield-button-border-width: var( --stepper-button-border-width-disabled );--luzmo-infield-button-border-color: var( --stepper-button-border-color-disabled );--luzmo-text-field-border-color-disabled: var( --stepper-button-border-color-disabled )}#text-field .input{border-color:var(--highcontrast-stepper-border-color, var(--luzmo-stepper-border-color, var(--stepper-border-color)));border-inline-end-width:0;border-start-end-radius:0;border-end-end-radius:0}#text-field.hide-stepper .input{border-inline-end-width:var(--luzmo-stepper-border-width, var(--stepper-border-width));border-start-end-radius:var(--luzmo-stepper-border-radius, var(--stepper-border-radius));border-end-end-radius:var(--luzmo-stepper-border-radius, var(--stepper-border-radius))}#text-field .buttons{box-sizing:border-box;block-size:var(--luzmo-stepper-height, var(--stepper-height));inline-size:var(--luzmo-stepper-button-width, var(--stepper-button-width));border-color:var(--highcontrast-stepper-border-color, var(--luzmo-stepper-border-color, var(--stepper-border-color)));border-style:var(--luzmo-stepper-buttons-border-style, var(--stepper-buttons-border-style));border-width:var(--highcontrast-stepper-buttons-border-width, var(--luzmo-stepper-buttons-border-width, var(--stepper-buttons-border-width)));background-color:var(--highcontrast-stepper-buttons-background-color, var(--luzmo-stepper-buttons-background-color, var(--stepper-buttons-background-color)));transition:border-color var(--luzmo-stepper-animation-duration, var(--stepper-animation-duration)) ease-in-out;border-inline-start-width:0;border-start-end-radius:var(--luzmo-stepper-border-radius, var(--stepper-border-radius));border-end-end-radius:var(--luzmo-stepper-border-radius, var(--stepper-border-radius));flex-direction:column;justify-content:center;display:flex}:host([quiet]) #text-field{border-start-start-radius:0;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0}:host([quiet]) #text-field .input{--luzmo-text-field-focus-indicator-color: transparent}:host([quiet]) #text-field.hide-stepper .input{border-inline-end-width:0;border-end-end-radius:0}:host([quiet]) #text-field .buttons{--luzmo-infield-button-border-color: transparent;border-width:0;border-block-end-width:var(--luzmo-stepper-border-width, var(--stepper-border-width));border-block-end-color:var(--highcontrast-stepper-border-color, var(--luzmo-stepper-border-color, var(--stepper-border-color)));border-block-end-style:solid;border-end-end-radius:0}:host([quiet]) #text-field .button{--luzmo-infield-button-width-stacked: var( --luzmo-stepper-button-width-quiet, var(--stepper-button-width) );--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-quiet, var(--stepper-button-border-color-quiet) );--luzmo-infield-button-stacked-bottom-border-block-end-width: var( --luzmo-stepper-border-width, var(--stepper-border-width) );--luzmo-infield-button-stacked-bottom-border-radius-end-end: 0;--luzmo-infield-button-stacked-bottom-border-radius-end-start: 0;--luzmo-infield-button-fill-justify-content: flex-end;padding:0}:host([quiet]) #text-field .buttons,:host([quiet]) #text-field .input{background-color:initial}:host([quiet][focused]) #text-field,:host([quiet]) #text-field:focus{--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-focus, var(--luzmo-stepper-border-color-focus, var(--stepper-border-color-focus)) )}:host([quiet][keyboard-focused]:not([disabled])) #text-field{--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-keyboard-focus, var( --luzmo-stepper-border-color-keyboard-focus, var(--stepper-border-color-keyboard-focus) ) );outline:none}:host([quiet][keyboard-focused]:not([disabled])) #text-field:after{background-color:var(--highcontrast-stepper-focus-indicator-color, var(--luzmo-stepper-focus-indicator-color, var(--stepper-focus-indicator-color)))}@media (hover: hover){:host(:hover:not([disabled])) #text-field{--luzmo-stepper-border-color: var( --highcontrast-stepper-border-color-hover, var(--luzmo-stepper-border-color-hover, var(--stepper-border-color-hover)) );--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-hover, var( --luzmo-stepper-buttons-border-color-hover, var(--stepper-buttons-border-color-hover) ) )}:host([focused]:hover) #text-field,:host(:hover) #text-field:focus{--luzmo-stepper-border-color: var( --highcontrast-stepper-border-color-focus-hover, var( --luzmo-stepper-buttons-border-color-focus-hover, var(--stepper-buttons-border-color-focus-hover) ) );--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-focus-hover, var( --luzmo-stepper-buttons-border-color-focus-hover, var(--stepper-buttons-border-color-focus-hover) ) )}:host([focused]:hover) #text-field .buttons,:host([focused]:hover) #text-field .input,:host(:hover) #text-field:focus .buttons,:host(:hover) #text-field:focus .input{border-color:var(--highcontrast-stepper-border-color-focus-hover, var(--luzmo-stepper-border-color-focus-hover, var(--stepper-border-color-focus-hover)))}:host([invalid]:not([disabled]):hover) #text-field{--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-hover-invalid, var(--stepper-border-color-hover-invalid) )}:host([invalid][focused]:not([disabled]):hover) #text-field,:host([invalid]:not([disabled]):hover) #text-field:focus{--luzmo-infield-button-border-color: var( --luzmo-stepper-border-color-focus-hover-invalid, var(--stepper-border-color-focus-hover-invalid) )}:host([quiet]:not([disabled]):hover) #text-field{--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-hover, var(--luzmo-stepper-border-color-hover, var(--stepper-border-color-hover)) )}:host([quiet]:not([disabled]):hover) #text-field .buttons{background-color:initial}:host([quiet][focused]:hover) #text-field,:host([quiet]:hover) #text-field:focus{--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-focus-hover, var( --luzmo-stepper-border-color-focus-hover, var(--stepper-border-color-focus-hover) ) )}:host([quiet][keyboard-focused]:not([disabled]):hover) #text-field{--luzmo-infield-button-border-color: var( --highcontrast-stepper-border-color-hover, var(--luzmo-stepper-border-color-hover, var(--stepper-border-color-hover)) )}}@media (forced-colors: active){:host{--highcontrast-stepper-border-color: CanvasText;--highcontrast-stepper-border-color-hover: Highlight;--highcontrast-stepper-border-color-focus: Highlight;--highcontrast-stepper-border-color-focus-hover: Highlight;--highcontrast-stepper-border-color-keyboard-focus: CanvasText;--highcontrast-stepper-button-background-color-default: Canvas;--highcontrast-stepper-button-background-color-hover: Canvas;--highcontrast-stepper-button-background-color-focus: Canvas;--highcontrast-stepper-button-background-color-keyboard-focus: Canvas;--highcontrast-stepper-focus-indicator-color: Highlight}:host([invalid]) #text-field{--highcontrast-stepper-border-color: Highlight;--highcontrast-stepper-border-color-hover: Highlight;--highcontrast-stepper-border-color-focus: Highlight;--highcontrast-stepper-border-color-focus-hover: Highlight;--highcontrast-stepper-border-color-keyboard-focus: Highlight;--highcontrast-infield-button-border-color: Highlight}:host([disabled]) #text-field{--highcontrast-stepper-border-color: GrayText;--highcontrast-infield-button-border-color: GrayText;--highcontrast-stepper-buttons-border-width: var( --luzmo-stepper-border-width, var(--stepper-border-width) )}}:host{--text-field-minimum-width-multiplier: 1.75;--stepper-border-width: var(--luzmo-border-width);--stepper-border-color: var(--luzmo-border-color);--stepper-border-color-hover: var(--luzmo-border-color-full-hover);--stepper-border-color-focus: var(--luzmo-border-color-full-focus);--stepper-border-color-focus-hover: var(--luzmo-border-color-full-focus);--stepper-border-color-keyboard-focus: var(--luzmo-border-color-full-focus);--stepper-border-radius: var(--luzmo-border-radius-s);--stepper-min-width-multiplier: 1.5;--stepper-animation-duration: var(--luzmo-animation-duration);--stepper-buttons-background-color: var(--luzmo-background-color);--stepper-buttons-border-style: none;--stepper-buttons-border-width: 0;--stepper-buttons-border-color: var(--luzmo-border-color);--stepper-buttons-border-color-hover: var(--luzmo-border-color-full-hover);--stepper-buttons-border-color-focus: var(--luzmo-border-color-full-focus);--stepper-buttons-border-color-keyboard-focus: var( --luzmo-border-color-focus );--stepper-button-padding: 0px;--stepper-button-border-radius-reset: 0;--stepper-button-border-width: var(--luzmo-border-width);--stepper-button-background-color-focus: var(--luzmo-background-color-focus);--stepper-button-background-color-keyboard-focus: var( --luzmo-background-color-focus );--stepper-border-color-invalid: var(--luzmo-color-negative);--stepper-border-color-hover-invalid: var(--luzmo-color-negative-hover);--stepper-border-color-focus-invalid: var(--luzmo-color-negative-focus);--stepper-border-color-focus-hover-invalid: var(--luzmo-color-negative-focus);--stepper-border-color-keyboard-focus-invalid: var( --luzmo-color-negative-focus );--stepper-focus-indicator-width: var(--luzmo-indicator-width);--stepper-focus-indicator-gap: calc(-1 * var(--luzmo-border-width));--stepper-focus-indicator-color: var(--luzmo-indicator-color);--stepper-button-border-color-quiet: transparent;--stepper-button-border-color-disabled: var(--luzmo-border-color-disabled);--stepper-button-border-width-disabled: var(--luzmo-border-width);--stepper-buttons-background-color-disabled: var( --luzmo-background-color-disabled );--stepper-button-width: 28px;--stepper-height: var(--luzmo-component-height)}:host([size=s]) #text-field{--stepper-button-width: 16px;--stepper-height: var(--luzmo-component-height-s)}:host([size=m]) #text-field{--stepper-button-width: 20px;--stepper-height: var(--luzmo-component-height)}:host([size=l]) #text-field{--stepper-button-width: 28px;--stepper-height: var(--luzmo-component-height-l)}:host([size=xl]) #text-field{--stepper-button-width: 36px;--stepper-height: var(--luzmo-component-height-xl)}:host{inline-size:var(--luzmo-stepper-width, var(--stepper-width));--swc-number-field-width: calc( var(--luzmo-stepper-height, var(--stepper-height)) * var( --luzmo-stepper-min-width-multiplier, var(--text-field-minimum-width-multiplier) ) + var(--luzmo-stepper-button-width, var(--stepper-button-width)) + var(--luzmo-stepper-border-width, var(--stepper-border-width)) * 2 );--luzmo-infield-button-border-width: var(--unset-value-resets-inheritance);--stepper-width: var(--swc-number-field-width)}:host([size=s]){--stepper-width: calc(var(--swc-number-field-width) / 5 * 4)}:host([size=l]){--stepper-width: calc(var(--swc-number-field-width) * 1.25)}:host([size=xl]){--stepper-width: calc(var(--swc-number-field-width) * 1.25 * 1.25)}#text-field{inline-size:100%}.input{font-variant-numeric:tabular-nums}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([readonly]:not([disabled],[invalid],[focused],[keyboard-focused])) #text-field:hover .input{border-color:transparent}:host([hide-stepper]:not([quiet])) #text-field input{border:var(--luzmo-text-field-border-width, var(--text-field-border-width)) solid var(--luzmo-text-field-border-color, var(--text-field-border-color));border-radius:var(--text-field-corner-radius)}:host([quiet]) #text-field .button{--luzmo-infield-button-border-color: var( --luzmo-infield-border-color-quiet, transparent );--luzmo-infield-button-edge-to-fill: 0;--luzmo-infield-button-border-width: var( --luzmo-infield-button-border-width-quiet, 0 )}';
var ke = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, b = (l, e, o, t) => {
  for (var r = t > 1 ? void 0 : t ? Fe(e, o) : e, i = l.length - 1, s; i >= 0; i--)
    (s = l[i]) && (r = (t ? s(e, o, r) : s(r)) || r);
  return t && r && ke(e, o, r), r;
};
const Ce = 5, Se = 100, v = "-", L = {
  "１": "1",
  "２": "2",
  "３": "3",
  "４": "4",
  "５": "5",
  "６": "6",
  "７": "7",
  "８": "8",
  "９": "9",
  "０": "0",
  "、": ",",
  "，": ",",
  "。": ".",
  "．": ".",
  "％": "%",
  "＋": "+",
  ー: "-",
  一: "1",
  二: "2",
  三: "3",
  四: "4",
  五: "5",
  六: "6",
  七: "7",
  八: "8",
  九: "9",
  零: "0"
};
class c extends ne {
  constructor() {
    super(...arguments), this.focused = !1, this._forcedUnit = "", this.formatOptions = {}, this.hideStepper = !1, this.indeterminate = !1, this.keyboardFocused = !1, this.managedInput = !1, this.stepModifier = 10, this._value = Number.NaN, this._trackingValue = "", this.decimalsChars = /* @__PURE__ */ new Set([".", ","]), this.valueBeforeFocus = "", this.isIntentDecimal = !1, this.changeCount = 0, this.languageResolver = new ue(this), this.wasIndeterminate = !1, this.hasRecentlyReceivedPointerDown = !1, this.applyFocusElementLabel = (e) => {
      this.appliedLabel = e;
    }, this.isComposing = !1;
  }
  static get styles() {
    return [...super.styles, M(we)];
  }
  set value(e) {
    const o = this.validateInput(e);
    if (o === this.value)
      return;
    this.lastCommitedValue = o;
    const t = this._value;
    this._value = o, this.requestUpdate("value", t);
  }
  get value() {
    return this._value;
  }
  get inputValue() {
    return this.indeterminate ? this.formattedValue : this.inputElement.value;
  }
  setValue(e = this.value) {
    const o = this.lastCommitedValue;
    this.value = e, !(o === void 0 || o === this.value) && (this.lastCommitedValue = this.value, this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 })));
  }
  /**
   * Retreive the value of the element parsed to a Number.
   */
  get valueAsString() {
    return this._value.toString();
  }
  set valueAsString(e) {
    this.value = this.numberParser.parse(e);
  }
  get formattedValue() {
    return Number.isNaN(this.value) ? "" : this.numberFormatter.format(this.value) + (this.focused ? "" : this._forcedUnit);
  }
  convertValueToNumber(e) {
    let o = [...e].map((i) => L[i] || i).join("");
    const t = [...this.valueBeforeFocus].filter(
      (i) => this.decimalsChars.has(i)
    ), r = new Set(t);
    if (D() && this.inputElement.inputMode === "decimal" && o !== this.valueBeforeFocus) {
      const i = this.numberFormatter.formatToParts(1000.1).find(
        (a) => a.type === "decimal"
      ).value;
      for (const a of r)
        a !== i && !this.isIntentDecimal && (o = o.replaceAll(
          new RegExp(a, "g"),
          ""
        ));
      let s = !1;
      const n = [...o];
      for (let a = n.length - 1; a >= 0; a--) {
        const m = n[a];
        this.decimalsChars.has(m) && (s ? n[a] = "" : (n[a] = i, s = !0));
      }
      o = n.join("");
    }
    return this.numberParser.parse(o);
  }
  get _step() {
    var e;
    return this.step !== void 0 ? this.step : ((e = this.formatOptions) == null ? void 0 : e.style) === "percent" ? 0.01 : 1;
  }
  handlePointerdown(e) {
    if (e.button !== 0) {
      e.preventDefault();
      return;
    }
    this.managedInput = !0, this.buttons.setPointerCapture(e.pointerId);
    const o = this.buttons.children[0].getBoundingClientRect(), t = this.buttons.children[1].getBoundingClientRect();
    this.findChange = (r) => {
      r.clientX >= o.x && r.clientY >= o.y && r.clientX <= o.x + o.width && r.clientY <= o.y + o.height ? this.change = (i) => this.increment(i.shiftKey ? this.stepModifier : 1) : r.clientX >= t.x && r.clientY >= t.y && r.clientX <= t.x + t.width && r.clientY <= t.y + t.height && (this.change = (i) => this.decrement(i.shiftKey ? this.stepModifier : 1));
    }, this.findChange(e), this.startChange(e);
  }
  startChange(e) {
    this.changeCount = 0, this.doChange(e), this.safty = setTimeout(() => {
      this.doNextChange(e);
    }, 400);
  }
  doChange(e) {
    this.change(e);
  }
  handlePointermove(e) {
    this.findChange(e);
  }
  handlePointerup(e) {
    this.buttons.releasePointerCapture(e.pointerId), cancelAnimationFrame(this.nextChange), clearTimeout(this.safty), this.managedInput = !1, this.setValue();
  }
  doNextChange(e) {
    return this.changeCount += 1, this.changeCount % Ce === 0 && this.doChange(e), requestAnimationFrame(() => {
      this.nextChange = this.doNextChange(e);
    });
  }
  stepBy(e) {
    if (this.disabled || this.readonly)
      return;
    const o = this.min === void 0 ? 0 : this.min;
    let t = this.value;
    t += e * this._step, Number.isNaN(this.value) && (t = o), t = this.valueWithLimits(t), this.requestUpdate(), this._value = this.validateInput(t), this.inputElement.value = this.numberFormatter.format(t), this.inputElement.dispatchEvent(
      new Event("input", { bubbles: !0, composed: !0 })
    ), this.indeterminate = !1, this.focus();
  }
  increment(e = 1) {
    this.stepBy(1 * e);
  }
  decrement(e = 1) {
    this.stepBy(-1 * e);
  }
  handleKeydown(e) {
    if (!this.isComposing)
      switch (e.code) {
        case "ArrowUp": {
          e.preventDefault(), this.increment(e.shiftKey ? this.stepModifier : 1), this.setValue();
          break;
        }
        case "ArrowDown": {
          e.preventDefault(), this.decrement(e.shiftKey ? this.stepModifier : 1), this.setValue();
          break;
        }
      }
  }
  onScroll(e) {
    e.preventDefault(), this.managedInput = !0;
    const o = e.shiftKey ? e.deltaX / Math.abs(e.deltaX) : e.deltaY / Math.abs(e.deltaY);
    o !== 0 && !Number.isNaN(o) && (this.stepBy(o * (e.shiftKey ? this.stepModifier : 1)), clearTimeout(this.queuedChangeEvent), this.queuedChangeEvent = setTimeout(() => {
      this.setValue();
    }, Se)), this.managedInput = !1;
  }
  onFocus() {
    super.onFocus(), this._trackingValue = this.inputValue, this.keyboardFocused = !this.readonly && !0, this.addEventListener("wheel", this.onScroll, { passive: !1 }), this.valueBeforeFocus = this.inputElement.value;
  }
  onBlur(e) {
    super.onBlur(e), this.keyboardFocused = !this.readonly && !1, this.removeEventListener("wheel", this.onScroll), this.isIntentDecimal = !1;
  }
  handleFocusin() {
    this.focused = !this.readonly && !0, this.keyboardFocused = !this.readonly && !0;
  }
  handleFocusout() {
    this.focused = !this.readonly && !1, this.keyboardFocused = !this.readonly && !1;
  }
  handleChange() {
    const e = this.convertValueToNumber(this.inputValue);
    if (this.wasIndeterminate && (this.wasIndeterminate = !1, this.indeterminateValue = void 0, Number.isNaN(e))) {
      this.indeterminate = !0;
      return;
    }
    this.setValue(e), this.inputElement.value = this.formattedValue;
  }
  handleCompositionStart() {
    this.isComposing = !0;
  }
  handleCompositionEnd() {
    this.isComposing = !1, requestAnimationFrame(() => {
      this.inputElement.dispatchEvent(
        new Event("input", {
          composed: !0,
          bubbles: !0
        })
      );
    });
  }
  handleInputElementPointerdown() {
    this.hasRecentlyReceivedPointerDown = !0, this.updateComplete.then(() => {
      requestAnimationFrame(() => {
        this.hasRecentlyReceivedPointerDown = !1;
      });
    });
  }
  handleInput(e) {
    if (this.isComposing) {
      if (e.data) {
        const a = this.convertValueToNumber(e.data);
        Number.isNaN(a) && (this.inputElement.value = this.indeterminate ? v : this._trackingValue, this.isComposing = !1);
      }
      e.stopPropagation();
      return;
    }
    this.indeterminate && (this.wasIndeterminate = !0, this.indeterminateValue = this.value, this.inputElement.value = this.inputElement.value.replace(
      v,
      ""
    )), e.data && this.decimalsChars.has(e.data) && (this.isIntentDecimal = !0);
    const { value: o, selectionStart: t } = this.inputElement, r = [...o].map((a) => L[a] || a).join("");
    if (this.numberParser.isValidPartialNumber(r)) {
      this.lastCommitedValue = this.lastCommitedValue ?? this.value;
      const a = this.convertValueToNumber(r);
      !r && this.indeterminateValue ? (this.indeterminate = !0, this._value = this.indeterminateValue) : (this.indeterminate = !1, this._value = this.validateInput(a)), this._trackingValue = r, this.inputElement.value = r, this.inputElement.setSelectionRange(t, t);
      return;
    }
    this.inputElement.value = this.indeterminate ? v : this._trackingValue, e.stopPropagation();
    const i = r.length, s = this._trackingValue.length, n = (t || i) - (i - s);
    this.inputElement.setSelectionRange(n, n);
  }
  valueWithLimits(e) {
    let o = e;
    return this.min !== void 0 && (o = Math.max(this.min, o)), this.max !== void 0 && (o = Math.min(this.max, o)), o;
  }
  validateInput(e) {
    e = this.valueWithLimits(e);
    const o = e < 0 ? -1 : 1;
    if (e *= o, this.step) {
      const t = this.min === void 0 ? 0 : this.min, r = Number.parseFloat(
        this.valueFormatter.format((e - t) % this.step)
      );
      if (r === 0 || (Math.round(r / this.step) === 1 ? e += this.step - r : e -= r), this.max !== void 0)
        for (; e > this.max; )
          e -= this.step;
      e = Number.parseFloat(this.valueFormatter.format(e));
    }
    return e *= o, e;
  }
  get displayValue() {
    const e = this.focused ? "" : v;
    return this.indeterminate ? e : this.formattedValue;
  }
  clearNumberFormatterCache() {
    this._numberFormatter = void 0, this._numberParser = void 0;
  }
  get numberFormatter() {
    if (!this._numberFormatter || !this._numberFormatterFocused) {
      const {
        style: e,
        unit: o,
        unitDisplay: t,
        ...r
      } = this.formatOptions;
      e !== "unit" && (r.style = e), this._numberFormatterFocused = new g(
        this.languageResolver.language,
        r
      );
      try {
        this._numberFormatter = new g(
          this.languageResolver.language,
          this.formatOptions
        ), this._forcedUnit = "", this._numberFormatter.format(1);
      } catch {
        e === "unit" && (this._forcedUnit = o), this._numberFormatter = this._numberFormatterFocused;
      }
    }
    return this.focused ? this._numberFormatterFocused : this._numberFormatter;
  }
  clearValueFormatterCache() {
    this._valueFormatter = void 0;
  }
  get valueFormatter() {
    if (!this._valueFormatter) {
      const e = this.step ? this.step === Math.floor(this.step) ? 0 : this.step.toString().split(".")[1].length : 0;
      this._valueFormatter = new g("en", {
        useGrouping: !1,
        maximumFractionDigits: e
      });
    }
    return this._valueFormatter;
  }
  get numberParser() {
    if (!this._numberParser || !this._numberParserFocused) {
      const {
        style: e,
        unit: o,
        unitDisplay: t,
        ...r
      } = this.formatOptions;
      e !== "unit" && (r.style = e), this._numberParserFocused = new E(
        this.languageResolver.language,
        r
      );
      try {
        this._numberParser = new E(
          this.languageResolver.language,
          this.formatOptions
        ), this._forcedUnit = "", this._numberParser.parse("0");
      } catch {
        e === "unit" && (this._forcedUnit = o), this._numberParser = this._numberParserFocused;
      }
    }
    return this.focused ? this._numberParserFocused : this._numberParser;
  }
  renderField() {
    return this.autocomplete = "off", C`
      ${super.renderField()}
      ${this.hideStepper ? R : C`
            <span
              class="buttons"
              @focusin=${this.handleFocusin}
              @focusout=${this.handleFocusout}
              ${de({
      start: ["pointerdown", this.handlePointerdown],
      streamInside: [
        [
          "pointermove",
          "pointerenter",
          "pointerleave",
          "pointerover",
          "pointerout"
        ],
        this.handlePointermove
      ],
      end: [
        ["pointerup", "pointercancel", "pointerleave"],
        this.handlePointerup
      ]
    })}
            >
              <luzmo-infield-button
                inline="end"
                block="start"
                class="button step-up"
                aria-hidden="true"
                label=${"Increase " + this.appliedLabel}
                size=${this.size}
                tabindex="-1"
                ?focused=${this.focused}
                ?disabled=${this.disabled || this.readonly || this.max !== void 0 && this.value === this.max}
                ?quiet=${this.quiet}
              >
                ${_(Q)}
              </luzmo-infield-button>
              <luzmo-infield-button
                inline="end"
                block="end"
                class="button step-down"
                aria-hidden="true"
                label=${"Decrease " + this.appliedLabel}
                size=${this.size}
                tabindex="-1"
                ?focused=${this.focused}
                ?disabled=${this.disabled || this.readonly || this.min !== void 0 && this.value === this.min}
                ?quiet=${this.quiet}
              >
                ${_(ee)}
              </luzmo-infield-button>
            </span>
          `}
    `;
  }
  update(e) {
    if ((e.has("formatOptions") || e.has("resolvedLanguage")) && this.clearNumberFormatterCache(), e.has("value") || e.has("max") || e.has("min") || e.has("step")) {
      const o = this.numberParser.parse(
        this.formattedValue.replace(this._forcedUnit, "")
      );
      this.value = o, this.clearValueFormatterCache();
    }
    super.update(e);
  }
  willUpdate(e) {
    this.multiline = !1, e.has(T) && this.clearNumberFormatterCache();
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("compositionstart", this.handleCompositionStart), this.addEventListener("compositionend", this.handleCompositionEnd);
  }
  updated(e) {
    if (!(!this.inputElement || !this.isConnected)) {
      if (e.has("min") || e.has("formatOptions")) {
        const o = this.min !== void 0 && this.min >= 0, { maximumFractionDigits: t } = this.numberFormatter.resolvedOptions(), r = t && t > 0;
        let i = "numeric";
        re() && !o ? i = "text" : (D() && r || ie() && r && o) && (i = "decimal"), this.inputElement.inputMode = i;
      }
      e.has("focused") && this.focused && !this.hasRecentlyReceivedPointerDown && this.formatOptions.unit && this.setSelectionRange(0, this.displayValue.length);
    }
  }
}
b([
  oe(".buttons")
], c.prototype, "buttons", 2);
b([
  u({ type: Boolean, reflect: !0 })
], c.prototype, "focused", 2);
b([
  u({ type: Object, attribute: "format-options" })
], c.prototype, "formatOptions", 2);
b([
  u({ type: Boolean, reflect: !0, attribute: "hide-stepper" })
], c.prototype, "hideStepper", 2);
b([
  u({ type: Boolean, reflect: !0 })
], c.prototype, "indeterminate", 2);
b([
  u({ type: Boolean, reflect: !0, attribute: "keyboard-focused" })
], c.prototype, "keyboardFocused", 2);
b([
  u({ type: Number })
], c.prototype, "max", 2);
b([
  u({ type: Number })
], c.prototype, "min", 2);
b([
  u({ type: Number })
], c.prototype, "step", 2);
b([
  u({ type: Number, reflect: !0, attribute: "step-modifier" })
], c.prototype, "stepModifier", 2);
b([
  u({ type: Number })
], c.prototype, "value", 1);
customElements.get("luzmo-number-field") || customElements.define("luzmo-number-field", c);
