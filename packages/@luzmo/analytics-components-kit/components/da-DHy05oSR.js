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
const e = {
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["", " kr"],
  dateTime: "%A den %d %B %Y %X",
  date: "%d-%m-%Y",
  dateSeparator: "-",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ],
  shortDays: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  months: [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december"
  ],
  shortMonths: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  levels: [
    "Alle",
    "År",
    "Kvartal",
    "Måned",
    "Uge",
    "Dato",
    "Time",
    "Minut",
    "Sekund",
    "Millisekund"
  ],
  durationLongSuffix: [
    "",
    "år",
    "kvartaler",
    "måneder",
    "uger",
    "dage",
    "timer",
    "minutter",
    "sekunder",
    "millisekunder"
  ],
  durationShortSuffix: ["", "å", "kv", "må", "u", "d", "t", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  e as default
};
