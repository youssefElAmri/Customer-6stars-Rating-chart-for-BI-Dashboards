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
import { R as c } from "./get-css-variable-Cb4e-hdr.js";
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
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = (t) => t.strings === void 0, u = {}, v = (t, e = u) => t._$AH = e;
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, b = (t) => (...e) => ({ _$litDirective$: t, values: e });
class f {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, i, r) {
    this._$Ct = e, this._$AM = i, this._$Ci = r;
  }
  _$AS(e, i) {
    return this.update(e, i);
  }
  update(e, i) {
    return this.render(...i);
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
function a(t, e, i) {
  const r = t.getAttribute(e);
  let s = r ? r.split(/\s+/) : [];
  s = s.filter((l) => !i.includes(l)), s.length > 0 ? t.setAttribute(e, s.join(" ")) : t.removeAttribute(e);
}
function g(t, e, i) {
  const r = Array.isArray(i) ? i : [i], s = t.getAttribute(e), l = s ? s.split(/\s+/) : [];
  return r.every((o) => l.includes(o)) ? () => {
  } : (l.push(...r), t.setAttribute(e, l.join(" ")), () => a(t, e, r));
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
function I() {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(4)),
    (t) => `0${(t & 255).toString(16)}`.slice(-2)
  ).join("");
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
const d = Symbol("element resolver updated");
class E {
  constructor(e, { selector: i } = { selector: "" }) {
    this._element = null, this._selector = "", this.mutationCallback = (r) => {
      let s = !1;
      r.forEach((l) => {
        if (!s) {
          if (l.type === "childList") {
            const o = this.element && [...l.removedNodes].includes(this.element), n = !!this.selector && [...l.addedNodes].some(
              (h) => this.elementIsSelected(h)
            );
            s = s || o || n;
          }
          if (l.type === "attributes") {
            const o = l.target === this.element, n = !!this.selector && this.elementIsSelected(l.target);
            s = s || o || n;
          }
        }
      }), s && this.resolveElement();
    }, this.elementIsSelected = (r) => {
      var s;
      return this.selectorIsId ? (r == null ? void 0 : r.id) === this.selectorAsId : (s = r == null ? void 0 : r.matches) == null ? void 0 : s.call(r, this.selector);
    }, this.host = e, this.selector = i, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
  }
  get element() {
    return this._element;
  }
  set element(e) {
    if (e === this.element)
      return;
    const i = this.element;
    this._element = e, this.host.requestUpdate(d, i);
  }
  get selector() {
    return this._selector;
  }
  set selector(e) {
    e !== this.selector && (this.releaseElement(), this._selector = e, this.resolveElement());
  }
  get selectorAsId() {
    return this.selector.slice(1);
  }
  get selectorIsId() {
    return !!this.selector && this.selector.startsWith("#");
  }
  hostConnected() {
    this.resolveElement(), this.observer.observe(this.host.getRootNode(), {
      subtree: !0,
      childList: !0,
      attributes: !0
    });
  }
  hostDisconnected() {
    this.releaseElement(), this.observer.disconnect();
  }
  resolveElement() {
    if (!this.selector) {
      this.releaseElement();
      return;
    }
    const e = this.host.getRootNode();
    this.element = this.selectorIsId ? (
      // eslint-disable-next-line unicorn/prefer-query-selector
      e.getElementById(this.selectorAsId)
    ) : e.querySelector(this.selector);
  }
  releaseElement() {
    this.element = null;
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $(t) {
  return c({ ...t, state: !0, attribute: !1 });
}
export {
  f as $,
  b as _,
  I as a,
  a as c,
  E as d,
  v as f,
  d as h,
  $ as n,
  A as r,
  _ as s,
  g as u
};
