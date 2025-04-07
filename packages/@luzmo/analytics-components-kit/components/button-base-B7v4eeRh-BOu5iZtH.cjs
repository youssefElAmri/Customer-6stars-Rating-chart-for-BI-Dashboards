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
"use strict";const r=require("./get-css-variable-CGmd_tgb.cjs");/*! * Lucero - The design system for Luzmo.
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
 * */var C=Object.defineProperty,d=(i,t,e,a)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(t,e,s)||s);return s&&C(t,e,s),s};function v(i){class t extends i{renderAnchor({id:a,className:s,ariaHidden:o,labelledby:n,tabindex:p,anchorContent:l=r.Ht`<slot></slot>`}){return r.Ht`
            <a
              id=${a}
              class=${r.m$1(s)}
              href=${r.m$1(this.href)}
              download=${r.m$1(this.download)}
              target=${r.m$1(this.target)}
              aria-label=${r.m$1(this.label)}
              aria-labelledby=${r.m$1(n)}
              aria-hidden=${r.m$1(o?"true":void 0)}
              tabindex=${r.m$1(p)}
              referrerpolicy=${r.m$1(this.referrerpolicy)}
              rel=${r.m$1(this.rel)}
          >${l}</a>
        `}}return d([r.Rt()],t.prototype,"download"),d([r.Rt()],t.prototype,"label"),d([r.Rt()],t.prototype,"href"),d([r.Rt()],t.prototype,"target"),d([r.Rt()],t.prototype,"referrerpolicy"),d([r.Rt()],t.prototype,"rel"),t}/*! * Lucero - The design system for Luzmo.
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
 * *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=class{constructor(t,{target:e,config:a,callback:s,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,e!==null&&this.t.add(e??t),this.l=a,this.o=o??this.o,this.callback=s,window.MutationObserver?(this.u=new MutationObserver(n=>{this.handleChanges(n),this.h.requestUpdate()}),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){var e;this.value=(e=this.callback)==null?void 0:e.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}};/*! * Lucero - The design system for Luzmo.
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
 * *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(i){return(t,e)=>{const{slot:a}=i??{},s="slot"+(a?`[name=${a}]`:":not([name])");return r.o(t,e,{get(){var o;const n=(o=this.renderRoot)==null?void 0:o.querySelector(s);return(n==null?void 0:n.assignedNodes(i))??[]}})}}/*! * Lucero - The design system for Luzmo.
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
 * */var z=Object.defineProperty,y=(i,t,e,a)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(t,e,s)||s);return s&&z(t,e,s),s};const f=Symbol("assignedNodes");function x(i,t,e=[]){var a,s;const o=p=>l=>p.matches(l);class n extends(s=i,a=f,s){constructor(...l){super(l),this.slotHasContent=!1,new g(this,{config:{characterData:!0,subtree:!0},callback:u=>{for(const h of u)if(h.type==="characterData"){this.manageTextObservedSlot();return}}})}manageTextObservedSlot(){if(!this[f])return;const l=[...this[f]].filter(u=>{const h=u;return h.tagName?!e.some(o(h)):h.textContent?h.textContent.trim():!1});this.slotHasContent=l.length>0}update(l){if(!this.hasUpdated){const{childNodes:u}=this,h=[...u].filter(k=>{const c=k;return c.tagName?e.some(o(c))?!1:t?c.getAttribute("slot")===t:!c.hasAttribute("slot"):c.textContent?c.textContent.trim():!1});this.slotHasContent=h.length>0}super.update(l)}firstUpdated(l){super.firstUpdated(l),this.updateComplete.then(()=>{this.manageTextObservedSlot()})}}return y([r.Rt({type:Boolean,attribute:!1})],n.prototype,"slotHasContent"),y([$({slot:t,flatten:!0})],n.prototype,a),n}/*! * Lucero - The design system for Luzmo.
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
 * */const A=":host{display:inline-flex;vertical-align:top;--parent-element-progress-circle-size: 18px;--icon-size: 18px}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;top:0;right:0;bottom:0;left:0}::slotted(luzmo-overlay),::slotted(luzmo-tooltip){position:absolute}:host:after{pointer-events:none}::slotted(*){pointer-events:none}::slotted([slot=icon]){--parent-element-icon-vertical-align: 0}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentcolor;stroke:currentcolor;block-size:var(--luzmo-button-icon-size, var(--icon-size));inline-size:var(--luzmo-button-icon-size, var(--icon-size))}[icon-only]+#label{display:contents}:host([size=s]){--parent-element-progress-circle-size: 16px;--icon-size: 16px}:host([size=l]){--parent-element-progress-circle-size: 20px;--icon-size: 20px}:host([size=xl]){--parent-element-progress-circle-size: 22px;--icon-size: 22px}";var w=Object.defineProperty,m=(i,t,e,a)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(t,e,s)||s);return s&&w(t,e,s),s};class b extends x(v(r.r$1),"",["luzmo-overlay,luzmo-tooltip"]){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}static get styles(){return[r.ht(A)]}get focusElement(){return this}get hasLabel(){return this.slotHasContent}get buttonContent(){return[r.Ht` <slot name="icon" ?icon-only=${!this.hasLabel}></slot> `,r.Ht`
        <span id="label">
          <slot @slotchange=${this.manageTextObservedSlot}></slot>
        </span>
      `]}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1;this.shouldProxyClick()}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if(this.type!=="button"){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return r.Ht`
      ${this.buttonContent}
      ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
    `}renderButton(){return r.Ht` ${this.buttonContent} `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;switch(e){case"Space":{t.preventDefault(),this.href===void 0&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break}}}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":{this.click();break}}}handleKeyup(t){const{code:e}=t;switch(e){case"Space":{this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break}}}manageAnchor(){this.href&&this.href.length>0?(!this.hasAttribute("role")||this.getAttribute("role")==="button")&&this.setAttribute("role","link"):(!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button")}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}update(t){super.update(t),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}}m([r.Rt({type:Boolean,reflect:!0})],b.prototype,"active");m([r.Rt({type:String})],b.prototype,"type");m([r.d$1(".anchor")],b.prototype,"anchorElement");exports.a=b;exports.a$1=g;exports.b=v;exports.m=$;exports.y=x;
