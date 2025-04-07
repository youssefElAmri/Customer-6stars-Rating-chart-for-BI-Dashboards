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
  currency: ["", " €"],
  dateTime: "%A, der %e. %B %Y, %X",
  date: "%d.%m.%Y",
  dateSeparator: ".",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ],
  shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  months: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mrz",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  levels: [
    "Alles",
    "Jahr",
    "Quartal",
    "Monat",
    "Woche",
    "Tag",
    "Stunden",
    "Minute",
    "Sekunde",
    "Millisekunde"
  ],
  shortLevels: [
    "Alles",
    "Jahr",
    "Qtl",
    "Mnt",
    "Woche",
    "Tag",
    "St",
    "Min",
    "Sek",
    "Msek"
  ],
  durationLongSuffix: [
    "",
    "Jahre",
    "Quartalen",
    "Monate",
    "Wochen",
    "Tage",
    "Stunden",
    "Minuten",
    "Sekunden",
    "Millisekunden"
  ],
  durationShortSuffix: ["", "j", "q", "mo", "w", "t", "st", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  e as default
};
