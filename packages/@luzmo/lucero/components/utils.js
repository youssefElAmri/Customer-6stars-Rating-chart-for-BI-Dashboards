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
import { b as m } from "./sized-mixin-CRExaV2U.js";
import { E as x, a as g, L as M, S as b } from "./sized-mixin-CRExaV2U.js";
import { m as c, t as f, l as u } from "./platform-Df45Wj_x.js";
import { F as N, a as y, k as z, e as F, f as P, j as k, d as D, c as w, b as T, i as V, h as j, g as q } from "./platform-Df45Wj_x.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = (t) => t.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const h = (t, e) => {
  var i;
  const s = t._$AN;
  if (s === void 0) return !1;
  for (const n of s) (i = n._$AO) == null || i.call(n, e, !1), h(n, e);
  return !0;
}, d = (t) => {
  let e, s;
  do {
    if ((e = t._$AM) === void 0) break;
    s = e._$AN, s.delete(t), t = e;
  } while ((s == null ? void 0 : s.size) === 0);
}, l = (t) => {
  for (let e; e = t._$AM; t = e) {
    let s = e._$AN;
    if (s === void 0) e._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(t)) break;
    s.add(t), $(e);
  }
};
function L(t) {
  this._$AN !== void 0 ? (d(this), this._$AM = t, l(this)) : this._$AM = t;
}
function _(t, e = !1, s = 0) {
  const i = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (e) if (Array.isArray(i)) for (let r = s; r < i.length; r++) h(i[r], !1), d(i[r]);
  else i != null && (h(i, !1), d(i));
  else h(this, t);
}
const $ = (t) => {
  t.type == f.CHILD && (t._$AP ?? (t._$AP = _), t._$AQ ?? (t._$AQ = L));
};
class v extends c {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, s, i) {
    super._$AT(e, s, i), l(this), this.isConnected = e._$AU;
  }
  _$AO(e, s = !0) {
    var i, n;
    e !== this.isConnected && (this.isConnected = e, e ? (i = this.reconnected) == null || i.call(this) : (n = this.disconnected) == null || n.call(this)), s && (h(this, e), d(this));
  }
  setValue(e) {
    if (A(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const s = [...this._$Ct._$AH];
      s[this._$Ci] = e, this._$Ct._$AI(s, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const a = ["", () => {
}];
class S extends v {
  constructor() {
    super(...arguments), this.start = a, this.streamInside = a, this.end = a, this.streamOutside = a, this.state = "off", this.handleStart = (e) => {
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
    return m;
  }
  update(e, [
    {
      start: s,
      end: i,
      streamInside: n = a,
      streamOutside: r = a
    }
  ]) {
    var o;
    this.element !== e.element && (this.element = e.element, this.removeListeners()), this.host = ((o = e.options) == null ? void 0 : o.host) || this.element, this.start = s, this.end = i, this.streamInside = n, this.streamOutside = r, this.addListeners();
  }
  addListeners(e) {
    this.state = e || this.state, this.state === "off" ? (this.addListener(this.streamOutside[0], this.handleOutside), this.addListener(this.start[0], this.handleStart)) : this.state === "on" && (this.addListener(this.streamInside[0], this.handleInside), this.addListener(this.end[0], this.handleEnd));
  }
  callHandler(e, s) {
    typeof e == "function" ? e.call(this.host, s) : e.handleEvent(s);
  }
  handleStream(e, s) {
    this.stream || (this.callHandler(e, s), this.stream = requestAnimationFrame(() => {
      this.stream = void 0;
    }));
  }
  clearStream() {
    this.stream != null && (cancelAnimationFrame(this.stream), this.stream = void 0);
  }
  addListener(e, s) {
    Array.isArray(e) ? e.map((i) => {
      this.element.addEventListener(i, s);
    }) : this.element.addEventListener(e, s);
  }
  removeListener(e, s) {
    Array.isArray(e) ? e.map((i) => {
      this.element.removeEventListener(i, s);
    }) : this.element.removeEventListener(e, s);
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
}
const p = u(
  S
);
export {
  x as ElementSizes,
  N as FocusVisiblePolyfillMixin,
  y as Focusable,
  g as LuzmoElement,
  M as LuzmoMixin,
  b as SizedMixin,
  z as isAndroid,
  F as isAppleDevice,
  P as isChrome,
  k as isFirefox,
  D as isIOS,
  w as isIPad,
  T as isIPhone,
  V as isMac,
  j as isSeamonkey,
  q as isWebKit,
  p as streamingListener
};
