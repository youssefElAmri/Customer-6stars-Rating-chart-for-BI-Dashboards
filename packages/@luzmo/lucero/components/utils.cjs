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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("./sized-mixin-BMc51ayV.cjs"),n=require("./platform-CVwR9498.cjs");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),d(r,e);return!0},l=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},c=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),L(e)}};function u(s){this._$AN!==void 0?(l(this),this._$AM=s,c(this)):this._$AM=s}function A(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let h=t;h<i.length;h++)d(i[h],!1),l(i[h]);else i!=null&&(d(i,!1),l(i));else d(this,s)}const L=s=>{s.type==n.t.CHILD&&(s._$AP??(s._$AP=A),s._$AQ??(s._$AQ=u))};class _ extends n.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(d(this,e),l(this))}setValue(e){if(f(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const a=["",()=>{}];class $ extends _{constructor(){super(...arguments),this.start=a,this.streamInside=a,this.end=a,this.streamOutside=a,this.state="off",this.handleStart=e=>{this.clearStream(),this.callHandler(this.start[1],e),!e.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleInside=e=>{this.handleStream(this.streamInside[1],e)},this.handleEnd=e=>{this.clearStream(),this.callHandler(this.end[1],e),this.removeListeners(),this.addListeners("off")},this.handleOutside=e=>{this.handleStream(this.streamOutside[1],e)}}render(e){return o.E}update(e,[{start:t,end:i,streamInside:r=a,streamOutside:h=a}]){var m;this.element!==e.element&&(this.element=e.element,this.removeListeners()),this.host=((m=e.options)==null?void 0:m.host)||this.element,this.start=t,this.end=i,this.streamInside=r,this.streamOutside=h,this.addListeners()}addListeners(e){this.state=e||this.state,this.state==="off"?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):this.state==="on"&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd))}callHandler(e,t){typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}handleStream(e,t){this.stream||(this.callHandler(e,t),this.stream=requestAnimationFrame(()=>{this.stream=void 0}))}clearStream(){this.stream!=null&&(cancelAnimationFrame(this.stream),this.stream=void 0)}addListener(e,t){Array.isArray(e)?e.map(i=>{this.element.addEventListener(i,t)}):this.element.addEventListener(e,t)}removeListener(e,t){Array.isArray(e)?e.map(i=>{this.element.removeEventListener(i,t)}):this.element.removeEventListener(e,t)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}}const v=n.e($);exports.ElementSizes=o.ElementSizes;exports.LuzmoElement=o.LuzmoElement;exports.LuzmoMixin=o.LuzmoMixin;exports.SizedMixin=o.SizedMixin;exports.FocusVisiblePolyfillMixin=n.FocusVisiblePolyfillMixin;exports.Focusable=n.Focusable;exports.isAndroid=n.isAndroid;exports.isAppleDevice=n.isAppleDevice;exports.isChrome=n.isChrome;exports.isFirefox=n.isFirefox;exports.isIOS=n.isIOS;exports.isIPad=n.isIPad;exports.isIPhone=n.isIPhone;exports.isMac=n.isMac;exports.isSeamonkey=n.isSeamonkey;exports.isWebKit=n.isWebKit;exports.streamingListener=v;
