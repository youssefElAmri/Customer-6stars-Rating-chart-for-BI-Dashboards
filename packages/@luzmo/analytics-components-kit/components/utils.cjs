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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const $=require("./decompose-numeric-format-B3rVVHpO.cjs"),B=require("./formatter-DiJYkB6b.cjs"),G=require("./localize-r7ALOUy_.cjs"),N=require("./index-DXyAeBh6.cjs");function H(s){var y,C,M,g,x,w,D,A,T,b,O,q,I,z;const f=[];Object.keys(N.slotsConfigs).forEach(t=>{t.replace("SlotsConfig","");const o=t.replace("SlotsConfig","").replaceAll(/([A-Z])/g,"-$1").toLowerCase();f.push({type:o,slotsConfig:N.slotsConfigs[t]})});const m=[],a=[],c=f.find(t=>t.type===(s==null?void 0:s.oldItemType)),l=f.find(t=>t.type===(s==null?void 0:s.newItemType)),i=structuredClone((l==null?void 0:l.slotsConfig)??[]);if(!l)return{type:(c==null?void 0:c.type)??"bar-chart",slots:s.slots??[],unassignedMeasureSlots:[],unassignedDimensionSlots:[]};const r=structuredClone(s.slots??[]);for(const t of r){const o=c==null?void 0:c.slotsConfig.find(Z=>Z.name===t.name);t.type=(o==null?void 0:o.type)??(t==null?void 0:t.type)}const S=r.filter(t=>t.type==="mixed").sort((t,o)=>t.order-o.order),h=i.filter(t=>t.type==="mixed").sort((t,o)=>t.order-o.order),j=r.filter(t=>t.type==="numeric").sort((t,o)=>t.order-o.order),E=i.filter(t=>t.type==="numeric").sort((t,o)=>t.order-o.order),d=[];for(const t of j)for(const o of t.content)d.push(o);for(const t of S)for(const o of t.content)o.type==="numeric"&&d.push(o);let e=0;for(const t of d)for(const o of[E,h])o[e]&&(o[e].content=((y=o[e])==null?void 0:y.content)??[],((M=(C=o[e])==null?void 0:C.content)==null?void 0:M.length)===0||((x=(g=o[e])==null?void 0:g.content)==null?void 0:x.length)>0&&((w=o[e])==null?void 0:w.canAcceptMultipleColumns)===!0?o[e].content.push(t):e<o.length-1?(e++,o[e].content=((D=o[e])==null?void 0:D.content)??[],o[e].content.push(t)):m.push(t));const L=r.filter(t=>t.type==="categorical").sort((t,o)=>t.order-o.order),P=i.filter(t=>t.type==="categorical").sort((t,o)=>t.order-o.order),p=[];for(const t of L)for(const o of t.content)p.push(o);for(const t of S)for(const o of t.content)o.type!=="numeric"&&p.push(o);let n=0;for(const t of p)for(const o of[P,h])o[n]&&(o[n].content=((A=o[n])==null?void 0:A.content)??[],((b=(T=o[n])==null?void 0:T.content)==null?void 0:b.length)===0||((q=(O=o[n])==null?void 0:O.content)==null?void 0:q.length)>0&&((I=o[n])==null?void 0:I.canAcceptMultipleColumns)===!0?o[n].content.push(t):n<o.length-1?(n++,o[n].content=((z=o[n])==null?void 0:z.content)??[],o[n].content.push(t)):a.push(t));let u={...s.options};return l.setInitialOptions&&(u=l==null?void 0:l.setInitialOptions({...u})),{type:l.type??"bar-chart",slots:i.map(t=>({name:t.name,content:t.content??[]}))??[],options:u??{...s.options},unassignedMeasureSlots:m??[],unassignedDimensionSlots:a??[]}}exports.decomposeNumericFormat=$.decomposeNumericFormat;exports.formatter=B.formatter;exports.localize=G.localize;exports.switchItem=H;
