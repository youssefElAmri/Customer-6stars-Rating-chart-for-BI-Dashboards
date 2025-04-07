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
import { LuzmoPopover as l } from "./popover-DlkzrLpl-DVFVxfXU.js";
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
const r = () => {
  if (typeof document < "u" && !document.querySelector("style[data-luzmo-vars]")) {
    const o = document.createElement("style");
    o.setAttribute("data-luzmo-vars", ""), o.textContent = 'html{--luzmo-animation-duration: 0.15s;--luzmo-border-color: rgba(var(--luzmo-border-color-rgb), 0.1);--luzmo-border-color-hover: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-down: rgba(var(--luzmo-border-color-rgb), 0.3);--luzmo-border-color-focus: rgba(var(--luzmo-border-color-rgb), 0.15);--luzmo-border-color-rgb: 0, 0, 0;--luzmo-border-color-full: rgb(180, 180, 180);--luzmo-border-color-full-hover: rgb(140, 140, 140);--luzmo-border-color-full-down: rgb(110, 110, 110);--luzmo-border-color-full-focus: rgb(140, 140, 140);--luzmo-border-color-disabled: #dddddd;--luzmo-border-radius: 6px;--luzmo-border-radius-s: 4px;--luzmo-border-radius-l: 8px;--luzmo-border-radius-xl: 12px;--luzmo-border-radius-full: 999rem;--luzmo-background-color: #ffffff;--luzmo-background-color-rgb: 255, 255, 255;--luzmo-background-color-disabled: #eeeeee;--luzmo-background-color-hover: #f0f0fc;--luzmo-background-color-down: #f1f1ff;--luzmo-background-color-focus: #f0f0fc;--luzmo-background-color-highlight: rgb(240, 240, 240);--luzmo-background-color-highlight-disabled: rgb(245, 245, 245);--luzmo-background-color-highlight-hover: rgb(225, 225, 225);--luzmo-background-color-highlight-down: rgb(215, 215, 215);--luzmo-background-color-highlight-focus: rgb(225, 225, 225);--luzmo-border-width: 1px;--luzmo-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--luzmo-font-size-xs: 10px;--luzmo-font-size-s: 12px;--luzmo-font-size-m: 14px;--luzmo-font-size: 14px;--luzmo-font-size-l: 16px;--luzmo-font-size-xl: 18px;--luzmo-font-size-xxl: 20px;--luzmo-font-style: normal;--luzmo-line-height: normal;--luzmo-font-weight: 400;--luzmo-font-weight-semibold: 500;--luzmo-font-weight-bold: 600;--luzmo-font-color: #333;--luzmo-font-color-hard: #000;--luzmo-font-color-disabled: var(--luzmo-color-disabled);--luzmo-font-color-extra-dimmed: #888;--luzmo-font-color-hover: #333;--luzmo-font-color-down: #111;--luzmo-font-color-focus: #333;--luzmo-primary: #4434ff;--luzmo-primary-hover: #4234e4;--luzmo-primary-down: #392cc7;--luzmo-primary-focus: #4234e4;--luzmo-primary-inverse-color: #ffffff;--luzmo-primary-rgb: 68, 52, 255;--luzmo-secondary: #ff00ff;--luzmo-secondary-hover: #e309e3;--luzmo-secondary-down: #c711c7;--luzmo-secondary-focus: #e309e3;--luzmo-secondary-inverse-color: #ffffff;--luzmo-secondary-rgb: 255, 0, 255;--luzmo-color-negative: #ca221c;--luzmo-color-negative-hover: #b3241f;--luzmo-color-negative-down: #9f231f;--luzmo-color-negative-focus: #b3241f;--luzmo-color-negative-rgb: 202, 34, 28;--luzmo-color-positive: rgb(20, 150, 101);--luzmo-color-positive-hover: rgb(17, 128, 86);--luzmo-color-positive-down: rgb(16, 105, 71);--luzmo-color-positive-focus: rgb(17, 128, 86);--luzmo-color-positive-rgb: 20, 150, 101;--luzmo-color-selected: rgb(110, 110, 110);--luzmo-color-selected-hover: rgb(70, 70, 70);--luzmo-color-selected-down: rgb(40, 40, 40);--luzmo-color-selected-focus: rgb(70, 70, 70);--luzmo-color-selected-hard: #1e1e1e;--luzmo-color-selected-hard-hover: rgb(0, 0, 0);--luzmo-color-selected-hard-down: rgb(0, 0, 0);--luzmo-color-selected-hard-focus: rgb(0, 0, 0);--luzmo-color-informative: #1a77e9;--luzmo-color-informative-rgb: 26, 119, 233;--luzmo-color-disabled: #aaaaaa;--luzmo-spacing-1: 2px;--luzmo-spacing-2: 4px;--luzmo-spacing-3: 8px;--luzmo-spacing-4: 12px;--luzmo-spacing-5: 16px;--luzmo-indicator-gap: 2px;--luzmo-indicator-width: 1px;--luzmo-indicator-color: var(--luzmo-primary);--luzmo-component-height-xxs: 20px;--luzmo-component-height-xs: 24px;--luzmo-component-height-s: 28px;--luzmo-component-height: 32px;--luzmo-component-height-l: 40px;--luzmo-component-height-xl: 48px;--luzmo-component-height-xxl: 64px;--luzmo-icon-size-xxs: 12px;--luzmo-icon-size-xs: 14px;--luzmo-icon-size-s: 16px;--luzmo-icon-size-m: 18px;--luzmo-icon-size-l: 20px;--luzmo-icon-size-xl: 22px;--luzmo-icon-size-xxl: 32px}', document.head.appendChild(o);
  }
};
r();
customElements.get("luzmo-popover") || customElements.define("luzmo-popover", l);
export {
  l as LuzmoPopover
};
