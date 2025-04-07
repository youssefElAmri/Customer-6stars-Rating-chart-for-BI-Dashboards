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
const a = {
  decimal: ",",
  thousands: " ",
  grouping: [3],
  currency: ["", "SEK"],
  dateTime: "%A den %d %B %Y %X",
  date: "%Y-%m-%d",
  dateSeparator: "-",
  time: "%H:%M:%S",
  periods: ["fm", "em"],
  days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
  shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
  months: [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  levels: [
    "Alla",
    "År",
    "Kvartal",
    "Månad",
    "Vecka",
    "Datum",
    "Timme",
    "Minut",
    "Іekund",
    "Millisekund"
  ],
  durationLongSuffix: [
    "",
    "år",
    "kvartal",
    "månader",
    "veckor",
    "dagar",
    "timmar",
    "minuter",
    "sekunder",
    "millisekunder"
  ],
  durationShortSuffix: ["", "å", "kv", "må", "v", "d", "t", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  a as default
};
