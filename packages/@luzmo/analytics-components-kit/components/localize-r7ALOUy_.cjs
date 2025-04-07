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
"use strict";function c(n){return n==null}function e(n){return typeof n=="string"||n instanceof String}function s(n){return!Number.isNaN(n)&&Number.isFinite(n)}function u(n){return typeof n=="boolean"}function o(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function y(n){return n!==null&&typeof n=="object"&&Object.keys(n).length===0}function b(n,t,f){if(e(n)||s(n)||u(n))return n.toString();if(c(n)||!o(n)||y(n))return"";let r="";const i=Object.keys(n);return f!=null&&f.allowEmpty?(t&&n[t]!==void 0&&(r=n[t]),r===void 0&&(r="")):(t&&n[t]&&(r=n[t]),(c(r)||r==="")&&(i!=null&&i.length)&&(r=n[i[0]])),r}exports.isEmpty=c;exports.isNumeric=s;exports.isString=e;exports.localize=b;
