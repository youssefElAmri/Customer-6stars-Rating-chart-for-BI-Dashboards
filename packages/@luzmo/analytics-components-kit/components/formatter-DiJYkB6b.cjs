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
"use strict";const _=require("./localize-r7ALOUy_.cjs"),lr=require("./decompose-numeric-format-B3rVVHpO.cjs");function mr(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function me(e,r){if((t=(e=r?e.toExponential(r-1):e.toExponential()).indexOf("e"))<0)return null;var t,n=e.slice(0,t);return[n.length>1?n[0]+n.slice(2):n,+e.slice(t+1)]}function sr(e){return e=me(Math.abs(e)),e?e[1]:NaN}function cr(e,r){return function(t,n){for(var i=t.length,u=[],m=0,T=e[0],C=0;i>0&&T>0&&(C+T+1>n&&(T=Math.max(1,n-C)),u.push(t.substring(i-=T,i+T)),!((C+=T+1)>n));)T=e[m=(m+1)%e.length];return u.reverse().join(r)}}function fr(e){return function(r){return r.replace(/[0-9]/g,function(t){return e[+t]})}}var hr=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Te(e){if(!(r=hr.exec(e)))throw new Error("invalid format: "+e);var r;return new pe({fill:r[1],align:r[2],sign:r[3],symbol:r[4],zero:r[5],width:r[6],comma:r[7],precision:r[8]&&r[8].slice(1),trim:r[9],type:r[10]})}Te.prototype=pe.prototype;function pe(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}pe.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function yr(e){e:for(var r=e.length,t=1,n=-1,i;t<r;++t)switch(e[t]){case".":n=i=t;break;case"0":n===0&&(n=t),i=t;break;default:if(!+e[t])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var Ie;function gr(e,r){var t=me(e,r);if(!t)return e+"";var n=t[0],i=t[1],u=i-(Ie=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,m=n.length;return u===m?n:u>m?n+new Array(u-m+1).join("0"):u>0?n.slice(0,u)+"."+n.slice(u):"0."+new Array(1-u).join("0")+me(e,Math.max(0,r+u-1))[0]}function Ue(e,r){var t=me(e,r);if(!t)return e+"";var n=t[0],i=t[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const we={"%":(e,r)=>(e*100).toFixed(r),b:e=>Math.round(e).toString(2),c:e=>e+"",d:mr,e:(e,r)=>e.toExponential(r),f:(e,r)=>e.toFixed(r),g:(e,r)=>e.toPrecision(r),o:e=>Math.round(e).toString(8),p:(e,r)=>Ue(e*100,r),r:Ue,s:gr,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function be(e){return e}var Fe=Array.prototype.map,ke=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function dr(e){var r=e.grouping===void 0||e.thousands===void 0?be:cr(Fe.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",u=e.numerals===void 0?be:fr(Fe.call(e.numerals,String)),m=e.percent===void 0?"%":e.percent+"",T=e.minus===void 0?"−":e.minus+"",C=e.nan===void 0?"NaN":e.nan+"";function s(g){g=Te(g);var O=g.fill,l=g.align,h=g.sign,f=g.symbol,p=g.zero,c=g.width,F=g.comma,S=g.precision,b=g.trim,d=g.type;d==="n"?(F=!0,d="g"):we[d]||(S===void 0&&(S=12),b=!0,d="g"),(p||O==="0"&&l==="=")&&(p=!0,O="0",l="=");var w=f==="$"?t:f==="#"&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",oe=f==="$"?n:/[%p]/.test(d)?m:"",R=we[d],he=/[defgprs%]/.test(d);S=S===void 0?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function ie(M){var q=w,W=oe,I,le,P;if(d==="c")W=R(M)+W,M="";else{M=+M;var B=M<0||1/M<0;if(M=isNaN(M)?C:R(Math.abs(M),S),b&&(M=yr(M)),B&&+M==0&&h!=="+"&&(B=!1),q=(B?h==="("?h:T:h==="-"||h==="("?"":h)+q,W=(d==="s"?ke[8+Ie/3]:"")+W+(B&&h==="("?")":""),he){for(I=-1,le=M.length;++I<le;)if(P=M.charCodeAt(I),48>P||P>57){W=(P===46?i+M.slice(I+1):M.slice(I))+W,M=M.slice(0,I);break}}}F&&!p&&(M=r(M,1/0));var J=q.length+M.length+W.length,H=J<c?new Array(c-J+1).join(O):"";switch(F&&p&&(M=r(H+M,H.length?c-W.length:1/0),H=""),l){case"<":M=q+M+W+H;break;case"=":M=q+H+M+W;break;case"^":M=H.slice(0,J=H.length>>1)+q+M+W+H.slice(J);break;default:M=H+q+M+W;break}return u(M)}return ie.toString=function(){return g+""},ie}function D(g,O){var l=s((g=Te(g),g.type="f",g)),h=Math.max(-8,Math.min(8,Math.floor(sr(O)/3)))*3,f=Math.pow(10,-h),p=ke[8+h/3];return function(c){return l(f*c)+p}}return{format:s,formatPrefix:D}}const ye=new Date,ge=new Date;function x(e,r,t,n){function i(u){return e(u=arguments.length===0?new Date:new Date(+u)),u}return i.floor=u=>(e(u=new Date(+u)),u),i.ceil=u=>(e(u=new Date(u-1)),r(u,1),e(u),u),i.round=u=>{const m=i(u),T=i.ceil(u);return u-m<T-u?m:T},i.offset=(u,m)=>(r(u=new Date(+u),m==null?1:Math.floor(m)),u),i.range=(u,m,T)=>{const C=[];if(u=i.ceil(u),T=T==null?1:Math.floor(T),!(u<m)||!(T>0))return C;let s;do C.push(s=new Date(+u)),r(u,T),e(u);while(s<u&&u<m);return C},i.filter=u=>x(m=>{if(m>=m)for(;e(m),!u(m);)m.setTime(m-1)},(m,T)=>{if(m>=m)if(T<0)for(;++T<=0;)for(;r(m,-1),!u(m););else for(;--T>=0;)for(;r(m,1),!u(m););}),t&&(i.count=(u,m)=>(ye.setTime(+u),ge.setTime(+m),e(ye),e(ge),Math.floor(t(ye,ge))),i.every=u=>(u=Math.floor(u),!isFinite(u)||!(u>0)?null:u>1?i.filter(n?m=>n(m)%u===0:m=>i.count(0,m)%u===0):i)),i}const ne=1e3,Q=ne*60,ae=Q*60,ue=ae*24,Qe=ue*7,Ee=x(e=>{e.setTime(e-e.getMilliseconds())},(e,r)=>{e.setTime(+e+r*ne)},(e,r)=>(r-e)/ne,e=>e.getUTCSeconds());Ee.range;const Re=x(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*ne)},(e,r)=>{e.setTime(+e+r*Q)},(e,r)=>(r-e)/Q,e=>e.getMinutes());Re.range;const Mr=x(e=>{e.setUTCSeconds(0,0)},(e,r)=>{e.setTime(+e+r*Q)},(e,r)=>(r-e)/Q,e=>e.getUTCMinutes());Mr.range;const $e=x(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*ne-e.getMinutes()*Q)},(e,r)=>{e.setTime(+e+r*ae)},(e,r)=>(r-e)/ae,e=>e.getHours());$e.range;const Tr=x(e=>{e.setUTCMinutes(0,0,0)},(e,r)=>{e.setTime(+e+r*ae)},(e,r)=>(r-e)/ae,e=>e.getUTCHours());Tr.range;const fe=x(e=>e.setHours(0,0,0,0),(e,r)=>e.setDate(e.getDate()+r),(e,r)=>(r-e-(r.getTimezoneOffset()-e.getTimezoneOffset())*Q)/ue,e=>e.getDate()-1);fe.range;const Se=x(e=>{e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCDate(e.getUTCDate()+r)},(e,r)=>(r-e)/ue,e=>e.getUTCDate()-1);Se.range;const vr=x(e=>{e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCDate(e.getUTCDate()+r)},(e,r)=>(r-e)/ue,e=>Math.floor(e/ue));vr.range;function z(e){return x(r=>{r.setDate(r.getDate()-(r.getDay()+7-e)%7),r.setHours(0,0,0,0)},(r,t)=>{r.setDate(r.getDate()+t*7)},(r,t)=>(t-r-(t.getTimezoneOffset()-r.getTimezoneOffset())*Q)/Qe)}const Ce=z(0),se=z(1),Yr=z(2),pr=z(3),X=z(4),Sr=z(5),Cr=z(6);Ce.range;se.range;Yr.range;pr.range;X.range;Sr.range;Cr.range;function Z(e){return x(r=>{r.setUTCDate(r.getUTCDate()-(r.getUTCDay()+7-e)%7),r.setUTCHours(0,0,0,0)},(r,t)=>{r.setUTCDate(r.getUTCDate()+t*7)},(r,t)=>(t-r)/Qe)}const Ge=Z(0),ce=Z(1),Dr=Z(2),Ur=Z(3),K=Z(4),wr=Z(5),br=Z(6);Ge.range;ce.range;Dr.range;Ur.range;K.range;wr.range;br.range;const ze=x(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,r)=>{e.setMonth(e.getMonth()+r)},(e,r)=>r.getMonth()-e.getMonth()+(r.getFullYear()-e.getFullYear())*12,e=>e.getMonth());ze.range;const Fr=x(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCMonth(e.getUTCMonth()+r)},(e,r)=>r.getUTCMonth()-e.getUTCMonth()+(r.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());Fr.range;const E=x(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,r)=>{e.setFullYear(e.getFullYear()+r)},(e,r)=>r.getFullYear()-e.getFullYear(),e=>e.getFullYear());E.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:x(r=>{r.setFullYear(Math.floor(r.getFullYear()/e)*e),r.setMonth(0,1),r.setHours(0,0,0,0)},(r,t)=>{r.setFullYear(r.getFullYear()+t*e)});E.range;const G=x(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCFullYear(e.getUTCFullYear()+r)},(e,r)=>r.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());G.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:x(r=>{r.setUTCFullYear(Math.floor(r.getUTCFullYear()/e)*e),r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0)},(r,t)=>{r.setUTCFullYear(r.getUTCFullYear()+t*e)});G.range;function de(e){if(0<=e.y&&e.y<100){var r=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return r.setFullYear(e.y),r}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Me(e){if(0<=e.y&&e.y<100){var r=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return r.setUTCFullYear(e.y),r}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function ee(e,r,t){return{y:e,m:r,d:t,H:0,M:0,S:0,L:0}}function ve(e){var r=e.dateTime,t=e.date,n=e.time,i=e.periods,u=e.days,m=e.shortDays,T=e.months,C=e.shortMonths,s=re(i),D=te(i),g=re(u),O=te(u),l=re(m),h=te(m),f=re(T),p=te(T),c=re(C),F=te(C),S={a:B,A:J,b:H,B:Ke,c:null,d:_e,e:_e,f:jr,g:it,G:mt,H:Pr,I:Br,j:Jr,L:Ze,m:Xr,M:Kr,p:er,q:rr,Q:qe,s:Ve,S:et,u:rt,U:tt,V:nt,w:at,W:ut,x:null,X:null,y:ot,Y:lt,Z:st,"%":Oe},b={a:tr,A:nr,b:ar,B:ur,c:null,d:He,e:He,f:yt,g:Dt,G:wt,H:ct,I:ft,j:ht,L:Be,m:gt,M:dt,p:or,q:ir,Q:qe,s:Ve,S:Mt,u:Tt,U:vt,V:Yt,w:pt,W:St,x:null,X:null,y:Ct,Y:Ut,Z:bt,"%":Oe},d={a:ie,A:M,b:q,B:W,c:I,d:Ne,e:Ne,f:$r,g:Ae,G:We,H:Le,I:Le,j:Ir,L:Rr,m:Vr,M:Qr,p:he,q:qr,Q:zr,s:Zr,S:Er,u:Nr,U:Lr,V:_r,w:Ar,W:Hr,x:le,X:P,y:Ae,Y:We,Z:Or,"%":Gr};S.x=w(t,S),S.X=w(n,S),S.c=w(r,S),b.x=w(t,b),b.X=w(n,b),b.c=w(r,b);function w(o,y){return function(v){var a=[],A=-1,U=0,N=o.length,L,$,De;for(v instanceof Date||(v=new Date(+v));++A<N;)o.charCodeAt(A)===37&&(a.push(o.slice(U,A)),($=xe[L=o.charAt(++A)])!=null?L=o.charAt(++A):$=L==="e"?" ":"0",(De=y[L])&&(L=De(v,$)),a.push(L),U=A+1);return a.push(o.slice(U,A)),a.join("")}}function oe(o,y){return function(v){var a=ee(1900,void 0,1),A=R(a,o,v+="",0),U,N;if(A!=v.length)return null;if("Q"in a)return new Date(a.Q);if("s"in a)return new Date(a.s*1e3+("L"in a?a.L:0));if(y&&!("Z"in a)&&(a.Z=0),"p"in a&&(a.H=a.H%12+a.p*12),a.m===void 0&&(a.m="q"in a?a.q:0),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(U=Me(ee(a.y,0,1)),N=U.getUTCDay(),U=N>4||N===0?ce.ceil(U):ce(U),U=Se.offset(U,(a.V-1)*7),a.y=U.getUTCFullYear(),a.m=U.getUTCMonth(),a.d=U.getUTCDate()+(a.w+6)%7):(U=de(ee(a.y,0,1)),N=U.getDay(),U=N>4||N===0?se.ceil(U):se(U),U=fe.offset(U,(a.V-1)*7),a.y=U.getFullYear(),a.m=U.getMonth(),a.d=U.getDate()+(a.w+6)%7)}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),N="Z"in a?Me(ee(a.y,0,1)).getUTCDay():de(ee(a.y,0,1)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+a.W*7-(N+5)%7:a.w+a.U*7-(N+6)%7);return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,Me(a)):de(a)}}function R(o,y,v,a){for(var A=0,U=y.length,N=v.length,L,$;A<U;){if(a>=N)return-1;if(L=y.charCodeAt(A++),L===37){if(L=y.charAt(A++),$=d[L in xe?y.charAt(A++):L],!$||(a=$(o,v,a))<0)return-1}else if(L!=v.charCodeAt(a++))return-1}return a}function he(o,y,v){var a=s.exec(y.slice(v));return a?(o.p=D.get(a[0].toLowerCase()),v+a[0].length):-1}function ie(o,y,v){var a=l.exec(y.slice(v));return a?(o.w=h.get(a[0].toLowerCase()),v+a[0].length):-1}function M(o,y,v){var a=g.exec(y.slice(v));return a?(o.w=O.get(a[0].toLowerCase()),v+a[0].length):-1}function q(o,y,v){var a=c.exec(y.slice(v));return a?(o.m=F.get(a[0].toLowerCase()),v+a[0].length):-1}function W(o,y,v){var a=f.exec(y.slice(v));return a?(o.m=p.get(a[0].toLowerCase()),v+a[0].length):-1}function I(o,y,v){return R(o,r,y,v)}function le(o,y,v){return R(o,t,y,v)}function P(o,y,v){return R(o,n,y,v)}function B(o){return m[o.getDay()]}function J(o){return u[o.getDay()]}function H(o){return C[o.getMonth()]}function Ke(o){return T[o.getMonth()]}function er(o){return i[+(o.getHours()>=12)]}function rr(o){return 1+~~(o.getMonth()/3)}function tr(o){return m[o.getUTCDay()]}function nr(o){return u[o.getUTCDay()]}function ar(o){return C[o.getUTCMonth()]}function ur(o){return T[o.getUTCMonth()]}function or(o){return i[+(o.getUTCHours()>=12)]}function ir(o){return 1+~~(o.getUTCMonth()/3)}return{format:function(o){var y=w(o+="",S);return y.toString=function(){return o},y},parse:function(o){var y=oe(o+="",!1);return y.toString=function(){return o},y},utcFormat:function(o){var y=w(o+="",b);return y.toString=function(){return o},y},utcParse:function(o){var y=oe(o+="",!0);return y.toString=function(){return o},y}}}var xe={"-":"",_:" ",0:"0"},k=/^\s*\d+/,kr=/^%/,xr=/[\\^$*+?|[\]().{}]/g;function Y(e,r,t){var n=e<0?"-":"",i=(n?-e:e)+"",u=i.length;return n+(u<t?new Array(t-u+1).join(r)+i:i)}function Wr(e){return e.replace(xr,"\\$&")}function re(e){return new RegExp("^(?:"+e.map(Wr).join("|")+")","i")}function te(e){return new Map(e.map((r,t)=>[r.toLowerCase(),t]))}function Ar(e,r,t){var n=k.exec(r.slice(t,t+1));return n?(e.w=+n[0],t+n[0].length):-1}function Nr(e,r,t){var n=k.exec(r.slice(t,t+1));return n?(e.u=+n[0],t+n[0].length):-1}function Lr(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.U=+n[0],t+n[0].length):-1}function _r(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.V=+n[0],t+n[0].length):-1}function Hr(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.W=+n[0],t+n[0].length):-1}function We(e,r,t){var n=k.exec(r.slice(t,t+4));return n?(e.y=+n[0],t+n[0].length):-1}function Ae(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),t+n[0].length):-1}function Or(e,r,t){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(r.slice(t,t+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),t+n[0].length):-1}function qr(e,r,t){var n=k.exec(r.slice(t,t+1));return n?(e.q=n[0]*3-3,t+n[0].length):-1}function Vr(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.m=n[0]-1,t+n[0].length):-1}function Ne(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.d=+n[0],t+n[0].length):-1}function Ir(e,r,t){var n=k.exec(r.slice(t,t+3));return n?(e.m=0,e.d=+n[0],t+n[0].length):-1}function Le(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.H=+n[0],t+n[0].length):-1}function Qr(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.M=+n[0],t+n[0].length):-1}function Er(e,r,t){var n=k.exec(r.slice(t,t+2));return n?(e.S=+n[0],t+n[0].length):-1}function Rr(e,r,t){var n=k.exec(r.slice(t,t+3));return n?(e.L=+n[0],t+n[0].length):-1}function $r(e,r,t){var n=k.exec(r.slice(t,t+6));return n?(e.L=Math.floor(n[0]/1e3),t+n[0].length):-1}function Gr(e,r,t){var n=kr.exec(r.slice(t,t+1));return n?t+n[0].length:-1}function zr(e,r,t){var n=k.exec(r.slice(t));return n?(e.Q=+n[0],t+n[0].length):-1}function Zr(e,r,t){var n=k.exec(r.slice(t));return n?(e.s=+n[0],t+n[0].length):-1}function _e(e,r){return Y(e.getDate(),r,2)}function Pr(e,r){return Y(e.getHours(),r,2)}function Br(e,r){return Y(e.getHours()%12||12,r,2)}function Jr(e,r){return Y(1+fe.count(E(e),e),r,3)}function Ze(e,r){return Y(e.getMilliseconds(),r,3)}function jr(e,r){return Ze(e,r)+"000"}function Xr(e,r){return Y(e.getMonth()+1,r,2)}function Kr(e,r){return Y(e.getMinutes(),r,2)}function et(e,r){return Y(e.getSeconds(),r,2)}function rt(e){var r=e.getDay();return r===0?7:r}function tt(e,r){return Y(Ce.count(E(e)-1,e),r,2)}function Pe(e){var r=e.getDay();return r>=4||r===0?X(e):X.ceil(e)}function nt(e,r){return e=Pe(e),Y(X.count(E(e),e)+(E(e).getDay()===4),r,2)}function at(e){return e.getDay()}function ut(e,r){return Y(se.count(E(e)-1,e),r,2)}function ot(e,r){return Y(e.getFullYear()%100,r,2)}function it(e,r){return e=Pe(e),Y(e.getFullYear()%100,r,2)}function lt(e,r){return Y(e.getFullYear()%1e4,r,4)}function mt(e,r){var t=e.getDay();return e=t>=4||t===0?X(e):X.ceil(e),Y(e.getFullYear()%1e4,r,4)}function st(e){var r=e.getTimezoneOffset();return(r>0?"-":(r*=-1,"+"))+Y(r/60|0,"0",2)+Y(r%60,"0",2)}function He(e,r){return Y(e.getUTCDate(),r,2)}function ct(e,r){return Y(e.getUTCHours(),r,2)}function ft(e,r){return Y(e.getUTCHours()%12||12,r,2)}function ht(e,r){return Y(1+Se.count(G(e),e),r,3)}function Be(e,r){return Y(e.getUTCMilliseconds(),r,3)}function yt(e,r){return Be(e,r)+"000"}function gt(e,r){return Y(e.getUTCMonth()+1,r,2)}function dt(e,r){return Y(e.getUTCMinutes(),r,2)}function Mt(e,r){return Y(e.getUTCSeconds(),r,2)}function Tt(e){var r=e.getUTCDay();return r===0?7:r}function vt(e,r){return Y(Ge.count(G(e)-1,e),r,2)}function Je(e){var r=e.getUTCDay();return r>=4||r===0?K(e):K.ceil(e)}function Yt(e,r){return e=Je(e),Y(K.count(G(e),e)+(G(e).getUTCDay()===4),r,2)}function pt(e){return e.getUTCDay()}function St(e,r){return Y(ce.count(G(e)-1,e),r,2)}function Ct(e,r){return Y(e.getUTCFullYear()%100,r,2)}function Dt(e,r){return e=Je(e),Y(e.getUTCFullYear()%100,r,2)}function Ut(e,r){return Y(e.getUTCFullYear()%1e4,r,4)}function wt(e,r){var t=e.getUTCDay();return e=t>=4||t===0?K(e):K.ceil(e),Y(e.getUTCFullYear()%1e4,r,4)}function bt(){return"+0000"}function Oe(){return"%"}function qe(e){return+e}function Ve(e){return Math.floor(+e/1e3)}var j,V;Ft({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Ft(e){return j=ve(e),V=j.format,j.parse,j.utcFormat,j.utcParse,j}const Ye=[[1,4,12,52,365,365*24,365*24*60,365*24*60*60,365*24*60*60*1e3],[1/4,1,3,13,91,91*24,91*24*60,91*24*60*60,91*24*60*60*1e3],[1/12,1/3,1,4,30,30*24,30*24*60,30*24*60*60,30*24*60*60*1e3],[1/52,1/13,1/4,1,7,7*24,7*24*60,7*24*60*60,7*24*60*60*1e3],[1/365,1/91,1/30,1/7,1,24,24*60,24*60*60,24*60*60*1e3],[1/(365*24),1/(91*24),1/(30*24),1/(7*24),1/24,1,60,60*60,60*60*1e3],[1/(365*24*60),1/(91*24*60),1/(30*24*60),1/(7*24*60),1/(24*60),1/60,1,60,60*1e3],[1/(365*24*60*60),1/(91*24*60*60),1/(30*24*60*60),1/(7*24*60*60),1/(24*60*60),1/(60*60),1/60,1,1e3],[1/(365*24*60*60*1e3),1/(91*24*60*60*1e3),1/(30*24*60*60*1e3),1/(7*24*60*60*1e3),1/(24*60*60*1e3),1/(60*60*1e3),1/(60*1e3),1/1e3,1]];function kt(e,r,t){if(_.isEmpty(e))return;if(!r||!t||r===t)return e;const n=Ye[r-1][t-1];if(n)return e*n}function xt(e,r,t,n){if(_.isEmpty(e)||!r.lowestLevel||t.length===0)return"";const i=[];let u=0,m=Math.round(e*Ye[r.lowestLevel-1][8]);const T=9;for(const[,s]of t.entries())if(e){m=m-u;const D=Ye[s-1][T-1],g=Math.floor(m/D);u=g*D,i.push({level:s,value:g})}else i.push({level:s,value:0});let C="";for(const[s,D]of i.entries())if(r.duration.format==="time"){let g=D.value;[6,7,8].includes(D.level)&&D.value<10?g="0"+D.value.toString():D.level===9&&D.value<10?g="00"+D.value.toString():D.level===9&&D.value<100&&(g="0"+D.value.toString()),C+=(s===0?"":D.level===9?".":":")+g}else if(r.duration.format==="long"){const g=n.durationLongSuffix;C+=D.value+" "+g[D.level]+(s===i.length-1?"":" ")}else{const g=n.durationShortSuffix;C+=D.value+""+g[D.level]+(s===i.length-1?"":" ")}return C}const je={decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",dateSeparator:"/",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],levels:["All","Year","Quarter","Month","Week","Date","Hour","Minute","Second","Millisecond"],shortLevels:["All","Yr","Qtr","Mth","Wk","Date","Hr","Min","Sec","Msec"],durationLongSuffix:["","years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],durationShortSuffix:["","y","q","mo","w","d","h","m","s","ms"],multi:[".%L",":%S","%I:%M","%I %p","%a %d","W%G","%b %d","%B","%Y"]},Wt="%d-%m-%Y",Xe=[{key:"%a %e %b %Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%b %Y",lev4:"Wk %V-%G",lev5:"%a %e %b %Y",monthType:"name",longText:!1,weekday:!0},{key:"%e %b %Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%b %Y",lev4:"Wk %V-%G",lev5:"%e %b %Y",monthType:"name",longText:!1,weekday:!1},{key:"%a %e %B %Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%B %Y",lev4:"Week %V, %G",lev5:"%a %e %B %Y",monthType:"name",longText:!0,weekday:!0},{key:"%e %B %Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%B %Y",lev4:"Week %V, %G",lev5:"%e %B %Y",monthType:"name",longText:!0,weekday:!1},{key:"%d/%m/%Y",lev1:"%Y",lev2:"Q%q/%Y",lev3:"%m/%Y",lev4:"W%V/%G",lev5:"%d/%m/%Y",monthType:"number",mmdd:!1,separator:"/"},{key:"%d-%m-%Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%m-%Y",lev4:"W%V-%G",lev5:"%d-%m-%Y",monthType:"number",mmdd:!1,separator:"-"},{key:"%d.%m.%Y",lev1:"%Y",lev2:"Q%q.%Y",lev3:"%m.%Y",lev4:"W%V.%G",lev5:"%d.%m.%Y",monthType:"number",mmdd:!1,separator:"."},{key:"%d~%m~%Y",lev1:"%Y",lev2:"Q%q~%Y",lev3:"%m~%Y",lev4:"W%V~%G",lev5:"%d~%m~%Y",monthType:"number",mmdd:!1,separator:"~"},{key:"%m/%d/%Y",lev1:"%Y",lev2:"Q%q/%Y",lev3:"%m/%Y",lev4:"%G/W%V",lev5:"%m/%d/%Y",monthType:"number",mmdd:!0,separator:"/"},{key:"%m-%d-%Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%m-%Y",lev4:"%G-W%V",lev5:"%m-%d-%Y",monthType:"number",mmdd:!0,separator:"-"},{key:"%m.%d.%Y",lev1:"%Y",lev2:"Q%q.%Y",lev3:"%m.%Y",lev4:"%G.W%V",lev5:"%m.%d.%Y",monthType:"number",mmdd:!0,separator:"."},{key:"%m~%d~%Y",lev1:"%Y",lev2:"Q%q~%Y",lev3:"%m~%Y",lev4:"%G~W%V",lev5:"%m~%d~%Y",monthType:"number",mmdd:!0,separator:"~"},{key:"%amd/%Y",lev1:"%Y",lev2:"Q%q/%Y",lev3:"%m/%Y",lev4:"%G/W%V",lev5:"%amd/%Y",monthType:"number",mmdd:null,separator:"/"},{key:"%amd-%Y",lev1:"%Y",lev2:"Q%q-%Y",lev3:"%m-%Y",lev4:"%G-W%V",lev5:"%amd-%Y",monthType:"number",mmdd:null,separator:"-"},{key:"%amd.%Y",lev1:"%Y",lev2:"Q%q.%Y",lev3:"%m.%Y",lev4:"%G.W%V",lev5:"%amd.%Y",monthType:"number",mmdd:null,separator:"."},{key:"%amd~%Y",lev1:"%Y",lev2:"Q%q~%Y",lev3:"%m~%Y",lev4:"%G~W%V",lev5:"%amd~%Y",monthType:"number",mmdd:null,separator:"~"}],At=[{key:"%H:%M:%S.%L",lev6:"%H:00",lev7:"%H:%M",lev8:"%H:%M:%S",lev9:"%H:%M:%S.%L",ampm:!1},{key:"%I:%M:%S.%L %p",lev6:"%I:00 %p",lev7:"%I:%M %p",lev8:"%I:%M:%S %p",lev9:"%I:%M:%S.%L %p",ampm:!0}];function Nt(e,r){var g,O;r=r||{};const t=r.localFormats||je;let n,i,u,m=[],T=[],C="datetime",s;r&&r.multi&&(C="datetime"),(!e||!e.format)&&(C="hierarchy"),e&&e.type&&(C=e.type),e&&e.format?s=e.format:C==="numeric"?s=",.0f":C==="datetime"?s=Wt:s="";const D=lr.decomposeNumericFormat(s);switch(D.precision&&D.typeFormat&&(C="numeric"),C){case"numeric":{if(e.subtype==="duration"&&e.duration&&e.duration.levels&&e.duration.levels.length>1&&!r.hideDuration)n=l=>_.isEmpty(l)?"":xt(l,e,e.duration.levels,t);else{const l={...t};let h=D.typeFormat,f=!1;switch(h.length===2&&h.startsWith("a")&&(f=!0,h=h.slice(1,2),s=s.replace(/a/,"")),f?(l.decimal=t.decimal,l.thousands=t.thousands):["z","y","w"].includes(h)?(l.decimal=",",l.thousands="."):(l.decimal=".",l.thousands=","),h){case"z":{s=s.replace("z","f");break}case"y":{s=s.replace("y","%");break}case"w":{s=s.replace("w","s");break}}if((e==null?void 0:e.subtype)==="currency"&&e.currency){const c=" ",F=l.currency.findIndex(w=>w.length>0),S=l.currency[F].startsWith(c),b=l.currency[F].endsWith(c),d=`${S?c:""}${e.currency}${b?c:""}`;l.currency[F]=d}const p=dr(l);h!=="%"&&(e==null?void 0:e.subtype)==="currency"&&e.currency&&l.currency&&!(r!=null&&r.hideCurrency)&&!["count","distinctcount"].includes(e.aggregationFunc)&&!(e.aggregationFunc==="rate"&&((g=e.aggregationWeight)==null?void 0:g.columnSubType)==="currency")&&((O=e.periodOverPeriod)==null?void 0:O.type)!=="percentageChange"&&(s="$"+s),r!=null&&r.trimZero&&["y","%"].includes(h)&&l.decimal===","?i=c=>p.format(s)(c).replace(/(,\d*?)0+%$/,"$1%").replace(/,%$/,"%"):r!=null&&r.trimZero&&["y","%"].includes(h)&&l.decimal==="."?i=c=>p.format(s)(c).replace(/(\.\d*?)0+%$/,"$1%").replace(/\.%$/,"%"):r!=null&&r.trimZero&&["z","f"].includes(h)&&l.decimal===","?i=c=>p.format(s)(c).replace(/(,\d*?)0+$/,"$1").replace(/,$/,""):r!=null&&r.trimZero&&["z","f"].includes(h)&&l.decimal==="."?i=c=>p.format(s)(c).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):(e==null?void 0:e.subtype)==="currency"&&e.currency&&l.currency&&h==="s"?i=c=>p.format(s)(c).replace(/G/,"B"):i=_.isEmpty(D.precision)?p.format(",.0f"):p.format(s),n=c=>{var F;if(_.isEmpty(c))return"";if(e.subtype==="duration"&&e.duration&&!r.hideDuration){const S=e.duration.levels?e.duration.levels[0]:e.lowestLevel;return S!==e.lowestLevel&&(c=kt(c,e.lowestLevel,S)),i(c)+((F=t==null?void 0:t.durationShortSuffix)==null?void 0:F[S])}return i(c)}}break}case"datetime":{if(m=(t==null?void 0:t.smartDateFormats)??Xe,T=(t==null?void 0:t.smartTimeFormats)??At,_.isEmpty(e.datetimeDisplayMode)){if(r!=null&&r.level){const l=r.level,h=m.find(b=>s.includes(b.key)),f=T.find(b=>s.includes(b.key)),p=h?h["lev"+Math.min(l,5)]:m[0]["lev"+Math.min(l,5)],c=l>5?f?f["lev"+l]:T[0]["lev"+l]:"";s=l>5?p+", "+c:p;const F=s.includes("%amd")&&r.level>=5,S=h?r.level>=2&&h.separator==="~":!1;F?s=S?s.replaceAll(new RegExp(/%amd[.~\/-]%Y/g),t.date.slice(0,8)):s.replaceAll(new RegExp(/%amd[.~\/-]%Y/g),t.date.slice(0,8).replaceAll(new RegExp(/[.~\/-]/g),h.separator)):s=S?s.replaceAll(new RegExp(/[~]/g),t.dateSeparator):s}if(r!=null&&r.multi){const l=V(t.multi[0]),h=V(t.multi[1]),f=V(t.multi[2]),p=V(t.multi[3]),c=V(t.multi[4]),F=V(t.multi[6]),S=V(t.multi[7]),b=V(t.multi[8]);u=d=>{let w;return Ee(d)<d?w=l:Re(d)<d?w=h:$e(d)<d?w=f:fe(d)<d?w=p:ze(d)<d?w=Ce(d)<d?c:F:E(d)<d?w=S:w=b,w(d)}}else u=ve(t).format(s)}else{const l={quarter_number:{min:1,max:4},month_name:{min:1,max:12},month_number:{min:1,max:12},week_number:{min:1,max:53},day_in_month:{min:1,max:31},day_in_year:{min:1,max:366},weekday_name:{min:0,max:7},weekday_number:{min:0,max:7},hour_in_day:{min:0,max:23},minute_in_hour:{min:0,max:59},second_in_minute:{min:0,max:59}},h=(f,p,c)=>{var F,S,b,d,w;return p==="letter"?((F=f.shortNames)==null?void 0:F.length)>0&&((S=f.shortNames[c])==null?void 0:S.length)>0?(b=f.shortNames[c])==null?void 0:b.charAt(0):"N/A":p==="short"?((d=f.shortNames)==null?void 0:d.length)>0&&f.shortNames[c]?f.shortNames[c]:"N/A":((w=f.longNames)==null?void 0:w.length)>0&&f.longNames[c]?f.longNames[c]:"N/A"};["quarter_number","month_number","week_number","day_in_month","day_in_year","weekday_number","hour_in_day","minute_in_hour","second_in_minute"].includes(e.datetimeDisplayMode)?u=f=>_.isNumeric(f)&&f>=l[e.datetimeDisplayMode].min&&f<=l[e.datetimeDisplayMode].max?f:"N/A":e.datetimeDisplayMode==="month_name"?u=f=>{const p=[...t.shortMonths],c=[...t.months];return _.isNumeric(f)&&f>=l[e.datetimeDisplayMode].min&&f<=l[e.datetimeDisplayMode].max?h({shortNames:p,longNames:c},e.monthNameFormat,f-1):"N/A"}:e.datetimeDisplayMode==="weekday_name"?u=f=>{const p=[...t.shortDays],c=[...t.days];return e.weekStart==="monday"&&(p.push(p.shift()??""),c.push(c.shift()??"")),_.isNumeric(f)&&f>=l[e.datetimeDisplayMode].min&&f<=l[e.datetimeDisplayMode].max?h({shortNames:p,longNames:c},e.weekDayNameFormat,f-1):"N/A"}:u=ve(t).format(s)}n=l=>{if(_.isEmpty(l))return"";const h=u(l);return _.isString(h)?h.trim():h};break}case"hierarchy":{n=l=>_.localize(l,r?r.locale:void 0);break}default:{n=l=>l;break}}return n}exports.DEFAULT_LOCAL_FORMATS=je;exports.SMART_DATE_FORMATS=Xe;exports.formatter=Nt;
