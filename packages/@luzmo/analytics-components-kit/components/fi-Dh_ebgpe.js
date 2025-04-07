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
const u = {
  decimal: ",",
  thousands: " ",
  grouping: [3],
  currency: ["", " €"],
  dateTime: "%A, %-d. %Bta %Y klo %X",
  date: "%-d.%-m.%Y",
  dateSeparator: ".",
  time: "%H:%M:%S",
  periods: ["a.m.", "p.m."],
  days: [
    "sunnuntai",
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai"
  ],
  shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
  months: [
    "tammikuu",
    "helmikuu",
    "maaliskuu",
    "huhtikuu",
    "toukokuu",
    "kesäkuu",
    "heinäkuu",
    "elokuu",
    "syyskuu",
    "lokakuu",
    "marraskuu",
    "joulukuu"
  ],
  shortMonths: [
    "Tammi",
    "Helmi",
    "Maalis",
    "Huhti",
    "Touko",
    "Kesä",
    "Heinä",
    "Elo",
    "Syys",
    "Loka",
    "Marras",
    "Joulu"
  ],
  levels: [
    "Kaikki",
    "Vuosi",
    "Neljännes",
    "Kuukausi",
    "Viikko",
    "Päivämäärä",
    "Tunti",
    "Minuutti",
    "Sekunti",
    "Millisekunti"
  ],
  durationLongSuffix: [
    "",
    "vuodet",
    "neljännekset",
    "kuukaudet",
    "viikkot",
    "päivät",
    "tunnit",
    "minuutit",
    "sekunnit",
    "millisekuntia"
  ],
  durationShortSuffix: ["", "vu", "n", "ku", "vi", "p", "t", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  u as default
};
