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
import { $, r as f, s as h } from "./state-CYxk12SV-BOqaoLNO.js";
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
function u(t) {
  return typeof window < "u" && window.navigator != null ? t.test(window.navigator.userAgent) : !1;
}
function a(t) {
  return typeof window < "u" && window.navigator != null ? (
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    t.test(window.navigator.platform)
  ) : !1;
}
function d() {
  return a(/^Mac/);
}
function A() {
  return a(/^iPhone/);
}
function _() {
  return a(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  d() && navigator.maxTouchPoints > 1;
}
function N() {
  return A() || _();
}
function w() {
  return u(/Chrome/);
}
function m() {
  return u(/AppleWebKit/) && !w();
}
function y() {
  return u(/Android/);
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
const o = (t, i) => {
  var n;
  const s = t._$AN;
  if (s === void 0) return !1;
  for (const e of s) (n = e._$AO) == null || n.call(e, i, !1), o(e, i);
  return !0;
}, l = (t) => {
  let i, n;
  do {
    if ((i = t._$AM) === void 0) break;
    n = i._$AN, n.delete(t), t = i;
  } while ((n == null ? void 0 : n.size) === 0);
}, c = (t) => {
  for (let i; i = t._$AM; t = i) {
    let n = i._$AN;
    if (n === void 0) i._$AN = n = /* @__PURE__ */ new Set();
    else if (n.has(t)) break;
    n.add(t), p(i);
  }
};
function v(t) {
  this._$AN !== void 0 ? (l(this), this._$AM = t, c(this)) : this._$AM = t;
}
function C(t, i = !1, n = 0) {
  const s = this._$AH, e = this._$AN;
  if (e !== void 0 && e.size !== 0) if (i) if (Array.isArray(s)) for (let r = n; r < s.length; r++) o(s[r], !1), l(s[r]);
  else s != null && (o(s, !1), l(s));
  else o(this, t);
}
const p = (t) => {
  t.type == h.CHILD && (t._$AP ?? (t._$AP = C), t._$AQ ?? (t._$AQ = v));
};
class M extends $ {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i, n, s) {
    super._$AT(i, n, s), c(this), this.isConnected = i._$AU;
  }
  _$AO(i, n = !0) {
    var s, e;
    i !== this.isConnected && (this.isConnected = i, i ? (s = this.reconnected) == null || s.call(this) : (e = this.disconnected) == null || e.call(this)), n && (o(this, i), l(this));
  }
  setValue(i) {
    if (f(this._$Ct)) this._$Ct._$AI(i, this);
    else {
      const n = [...this._$Ct._$AH];
      n[this._$Ci] = i, this._$Ct._$AI(n, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
export {
  M as C,
  N as a,
  m as c,
  A as o,
  y as w
};
