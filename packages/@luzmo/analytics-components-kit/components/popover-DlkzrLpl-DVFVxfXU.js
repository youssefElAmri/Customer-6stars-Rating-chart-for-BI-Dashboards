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
import { a as v, k as m, h, H as s, b as d, R as i, c as u } from "./get-css-variable-Cb4e-hdr.js";
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
const c = ":host{pointer-events:none;visibility:hidden;opacity:0;transition:transform .13s ease-in-out,opacity .13s ease-in-out,visibility 0s linear .13s;transition:transform var(--luzmo-overlay-animation-duration, var(--animation-duration-100, .13s)) ease-in-out,opacity var(--luzmo-overlay-animation-duration, var(--animation-duration-100, .13s)) ease-in-out,visibility 0s linear var(--luzmo-overlay-animation-duration, var(--animation-duration-100, .13s))}:host([open]){pointer-events:auto;visibility:visible;opacity:1;transition-delay:0s;transition-delay:var(--luzmo-overlay-animation-duration-opened, var(--animation-duration-0, 0s))}@media (forced-colors: active){:host{--highcontrast-popover-border-color: CanvasText}}:host{--popover-filter: drop-shadow( var(--luzmo-popover-shadow-horizontal, var(--popover-shadow-horizontal)) var(--luzmo-popover-shadow-vertical, var(--popover-shadow-vertical)) var(--luzmo-popover-shadow-blur, var(--popover-shadow-blur)) var(--luzmo-popover-shadow-color, var(--popover-shadow-color)) );box-sizing:border-box;padding:var(--luzmo-popover-content-area-spacing-vertical, var(--popover-content-area-spacing-vertical)) 0;border-radius:var(--luzmo-popover-corner-radius, var(--popover-corner-radius));border-style:solid;border-color:var(--highcontrast-popover-border-color, var(--luzmo-popover-border-color, var(--popover-border-color)));border-width:var(--luzmo-popover-border-width, var(--popover-border-width));background-color:var(--luzmo-popover-background-color, var(--popover-background-color));filter:var(--luzmo-popover-filter, var(--popover-filter));outline:none;flex-direction:column;display:inline-flex;position:absolute}:host([tip]) #tip .triangle{stroke-linecap:square;stroke-linejoin:miter;fill:var(--highcontrast-popover-background-color, var(--luzmo-popover-background-color, var(--popover-background-color)));stroke:var(--highcontrast-popover-border-color, var(--luzmo-popover-border-color, var(--popover-border-color)));stroke-width:var(--luzmo-popover-border-width, var(--popover-border-width))}*{--luzmo-popover-filter: none}:host([tip]) .luzmo-Popover--top-end,:host([tip]) .luzmo-Popover--top-left,:host([tip]) .luzmo-Popover--top-right,:host([tip]) .luzmo-Popover--top-start,:host([placement*=top][tip]){margin-block-end:calc(var(--luzmo-popover-pointer-height, var(--popover-pointer-height)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--top-end,:host([open]) .luzmo-Popover--top-left,:host([open]) .luzmo-Popover--top-right,:host([open]) .luzmo-Popover--top-start,:host([placement*=top][open]){transform:translateY(calc(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)) * -1))}:host([tip]) .luzmo-Popover--bottom-end,:host([tip]) .luzmo-Popover--bottom-left,:host([tip]) .luzmo-Popover--bottom-right,:host([tip]) .luzmo-Popover--bottom-start,:host([placement*=bottom][tip]){margin-block-start:calc(var(--luzmo-popover-pointer-height, var(--popover-pointer-height)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--bottom-end,:host([open]) .luzmo-Popover--bottom-left,:host([open]) .luzmo-Popover--bottom-right,:host([open]) .luzmo-Popover--bottom-start,:host([placement*=bottom][open]){transform:translateY(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)))}:host([tip]) .luzmo-Popover--right-bottom,:host([tip]) .luzmo-Popover--right-top,:host([placement*=right][tip]){margin-left:calc(var(--luzmo-popover-pointer-width, var(--popover-pointer-width)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--right-bottom,:host([open]) .luzmo-Popover--right-top,:host([placement*=right][open]){transform:translate(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)))}:host([tip]) .luzmo-Popover--left-bottom,:host([tip]) .luzmo-Popover--left-top,:host([placement*=left][tip]){margin-right:calc(var(--luzmo-popover-pointer-width, var(--popover-pointer-width)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--left-bottom,:host([open]) .luzmo-Popover--left-top,:host([placement*=left][open]){transform:translate(calc(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)) * -1))}:host([tip]) .luzmo-Popover--start-bottom,:host([tip]) .luzmo-Popover--start-top,:host([tip]) .luzmo-Popover--start{margin-inline-end:calc(var(--luzmo-popover-pointer-width, var(--popover-pointer-width)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--start-bottom,:host([open]) .luzmo-Popover--start-top,:host([open]) .luzmo-Popover--start{transform:translate(calc(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)) * -1))}:host([open]) .luzmo-Popover--start-bottom:dir(rtl),:host([open]) .luzmo-Popover--start-top:dir(rtl),:host([open]) .luzmo-Popover--start:dir(rtl),:host([dir=rtl][open]) .luzmo-Popover--start-bottom,:host([dir=rtl][open]) .luzmo-Popover--start-top,:host([dir=rtl][open]) .luzmo-Popover--start{transform:translate(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)))}:host([tip]) .luzmo-Popover--end-bottom,:host([tip]) .luzmo-Popover--end-top,:host([tip]) .luzmo-Popover--end{margin-inline-start:calc(var(--luzmo-popover-pointer-width, var(--popover-pointer-width)) - var(--luzmo-popover-border-width, var(--popover-border-width)))}:host([open]) .luzmo-Popover--end-bottom,:host([open]) .luzmo-Popover--end-top,:host([open]) .luzmo-Popover--end{transform:translate(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)))}:host([open]) .luzmo-Popover--end-bottom:dir(rtl),:host([open]) .luzmo-Popover--end-top:dir(rtl),:host([open]) .luzmo-Popover--end:dir(rtl),:host([dir=rtl][open]) .luzmo-Popover--end-bottom,:host([dir=rtl][open]) .luzmo-Popover--end-top,:host([dir=rtl][open]) .luzmo-Popover--end{transform:translate(calc(var(--luzmo-popover-animation-distance, var(--popover-animation-distance)) * -1))}:host([tip]) #tip,:host([tip][placement*=bottom]) #tip,:host([tip]) .luzmo-Popover--bottom-end #tip,:host([tip]) .luzmo-Popover--bottom-left #tip,:host([tip]) .luzmo-Popover--bottom-right #tip,:host([tip]) .luzmo-Popover--bottom-start #tip,:host([tip][placement*=top]) #tip,:host([tip]) .luzmo-Popover--top-end #tip,:host([tip]) .luzmo-Popover--top-left #tip,:host([tip]) .luzmo-Popover--top-right #tip,:host([tip]) .luzmo-Popover--top-start #tip{inline-size:var(--luzmo-popover-pointer-width, var(--popover-pointer-width));block-size:var(--luzmo-popover-pointer-height, var(--popover-pointer-height));margin:auto;position:absolute;inset-block-start:100%;inset-inline:0;transform:translate(0)}:host([tip]) .luzmo-Popover--top-left #tip{inset-inline:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing)) auto}:host([tip]) .luzmo-Popover--top-right #tip{inset-inline:auto var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--top-start #tip{margin-inline-start:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--top-end #tip{margin-inline-end:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip][placement*=bottom]) #tip,:host([tip]) .luzmo-Popover--bottom-end #tip,:host([tip]) .luzmo-Popover--bottom-left #tip,:host([tip]) .luzmo-Popover--bottom-right #tip,:host([tip]) .luzmo-Popover--bottom-start #tip{inset-block:auto 100%;transform:scaleY(-1)}:host([tip]) .luzmo-Popover--bottom-left #tip{inset-inline:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing)) auto}:host([tip]) .luzmo-Popover--bottom-right #tip{inset-inline:auto var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--bottom-start #tip{margin-inline-start:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--bottom-end #tip{margin-inline-end:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--end #tip,:host([tip]) .luzmo-Popover--end-bottom #tip,:host([tip]) .luzmo-Popover--end-top #tip,:host([tip][placement*=left]) #tip,:host([tip]) .luzmo-Popover--left-bottom #tip,:host([tip]) .luzmo-Popover--left-top #tip,:host([tip][placement*=right]) #tip,:host([tip]) .luzmo-Popover--right-bottom #tip,:host([tip]) .luzmo-Popover--right-top #tip,:host([tip]) .luzmo-Popover--start #tip,:host([tip]) .luzmo-Popover--start-bottom #tip,:host([tip]) .luzmo-Popover--start-top #tip{inline-size:var(--luzmo-popover-pointer-height, var(--popover-pointer-height));block-size:var(--luzmo-popover-pointer-width, var(--popover-pointer-width));inset-block:0}:host([tip][placement*=left]) #tip,:host([tip]) .luzmo-Popover--left-bottom #tip,:host([tip]) .luzmo-Popover--left-top #tip{left:100%;right:auto}:host([tip][placement*=right]) #tip,:host([tip]) .luzmo-Popover--right-bottom #tip,:host([tip]) .luzmo-Popover--right-top #tip{left:auto;right:100%;transform:scaleX(-1)}:host([tip]) .luzmo-Popover--end-top #tip,:host([tip]) .luzmo-Popover--left-top #tip,:host([tip]) .luzmo-Popover--right-top #tip,:host([tip]) .luzmo-Popover--start-top #tip{inset-block:var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing)) auto}:host([tip]) .luzmo-Popover--end-bottom #tip,:host([tip]) .luzmo-Popover--left-bottom #tip,:host([tip]) .luzmo-Popover--right-bottom #tip,:host([tip]) .luzmo-Popover--start-bottom #tip{inset-block:auto var(--luzmo-popover-pointer-edge-spacing, var(--popover-pointer-edge-spacing))}:host([tip]) .luzmo-Popover--start #tip,:host([tip]) .luzmo-Popover--start-bottom #tip,:host([tip]) .luzmo-Popover--start-top #tip{margin-inline-start:100%}:host([tip]) .luzmo-Popover--start #tip:dir(rtl),:host([tip]) .luzmo-Popover--start-bottom #tip:dir(rtl),:host([tip]) .luzmo-Popover--start-top #tip:dir(rtl),:host([dir=rtl][tip]) .luzmo-Popover--start #tip,:host([dir=rtl][tip]) .luzmo-Popover--start-bottom #tip,:host([dir=rtl][tip]) .luzmo-Popover--start-top #tip{transform:none}:host([tip]) .luzmo-Popover--end #tip,:host([tip]) .luzmo-Popover--end-bottom #tip,:host([tip]) .luzmo-Popover--end-top #tip{margin-inline-end:100%;transform:scaleX(-1)}:host([tip]) .luzmo-Popover--end #tip:dir(rtl),:host([tip]) .luzmo-Popover--end-bottom #tip:dir(rtl),:host([tip]) .luzmo-Popover--end-top #tip:dir(rtl),:host([dir=rtl][tip]) .luzmo-Popover--end #tip,:host([dir=rtl][tip]) .luzmo-Popover--end-bottom #tip,:host([dir=rtl][tip]) .luzmo-Popover--end-top #tip{transform:scaleX(1)}:host{--popover-border-width: var(--luzmo-border-width);--popover-animation-distance: calc( var(--luzmo-spacing-2) + var(--luzmo-spacing-1) );--popover-background-color: var(--luzmo-background-color);--popover-border-color: var(--luzmo-border-color);--popover-content-area-spacing-vertical: var(--luzmo-spacing-2);--popover-shadow-horizontal: 0;--popover-shadow-vertical: 1px;--popover-shadow-blur: 4px;--popover-shadow-color: var(--luzmo-border-color);--popover-corner-radius: var(--luzmo-border-radius);--popover-pointer-width: var(--luzmo-spacing-5);--popover-pointer-height: var(--luzmo-spacing-3);--popover-pointer-edge-offset: 16px;--popover-pointer-edge-spacing: 24px}:host([size=s]){--popover-animation-distance: var(--luzmo-spacing-2)}:host([size=l]){--popover-animation-distance: var(--luzmo-spacing-3)}:host([size=xl]){--popover-animation-distance: calc( var(--luzmo-spacing-3) + var(--luzmo-spacing-1) )}:host{min-width:min-content;max-height:100%;max-width:100%;clip-path:none}::slotted(*){overscroll-behavior:contain}:host([placement*=left]) #tip[style],:host([placement*=right]) #tip[style]{inset-block-end:auto}:host([placement*=top]) #tip[style],:host([placement*=bottom]) #tip[style]{inset-inline-end:auto}.block,.inline{width:100%;height:100%;display:block}:host([placement*=left]) .block,:host([placement*=right]) .block{display:none}:host([placement*=top]) .inline,:host([placement*=bottom]) .inline{display:none}::slotted(.visually-hidden){border:0;clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}::slotted(luzmo-menu){margin:0}:host([dialog]){min-width:var(--luzmo-popover-dialog-min-width, 270px);padding:var(--luzmo-popover-dialog-padding, 30px 29px)}:host([tip][placement]) #tip{height:auto}";
var z = Object.defineProperty, t = (p, a, n, g) => {
  for (var o = void 0, e = p.length - 1, l; e >= 0; e--)
    (l = p[e]) && (o = l(a, n, o) || o);
  return o && z(a, n, o), o;
};
class r extends v(m) {
  constructor() {
    super(...arguments), this.open = !1, this.tip = !1;
  }
  static get styles() {
    return [h(c)];
  }
  renderTip() {
    return s`
      <div id="tip" aria-hidden="true">
        <svg class="tip block" viewBox="0 -0.5 16 9">
          <path class="triangle" d="M-1,-1 8,8 17,-1"></path>
        </svg>
        <svg class="tip inline" viewBox="0 -0.5 9 16">
          <path class="triangle" d="M-1,-1 8,8 -1,17"></path>
        </svg>
      </div>
    `;
  }
  render() {
    return s`
      <slot></slot>
      ${this.tip ? this.renderTip() : d}
    `;
  }
}
t([
  i({ type: Boolean, reflect: !0 })
], r.prototype, "open");
t([
  i({ reflect: !0 })
], r.prototype, "placement");
t([
  i({ type: Boolean, reflect: !0 })
], r.prototype, "tip");
t([
  u("#tip")
], r.prototype, "tipElement");
export {
  r as LuzmoPopover
};
