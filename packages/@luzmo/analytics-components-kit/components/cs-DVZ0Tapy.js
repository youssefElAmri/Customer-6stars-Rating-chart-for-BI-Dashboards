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
  thousands: " ",
  grouping: [3],
  currency: ["", " Kč"],
  dateTime: "%A,%e.%B %Y, %X",
  date: "%-d.%-m.%Y",
  dateSeparator: ".",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: ["neděle", "pondělí", "úterý", "středa", "čvrtek", "pátek", "sobota"],
  shortDays: ["ne.", "po.", "út.", "st.", "čt.", "pá.", "so."],
  months: [
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec"
  ],
  shortMonths: [
    "led",
    "úno",
    "břez",
    "dub",
    "kvě",
    "čer",
    "červ",
    "srp",
    "zář",
    "říj",
    "list",
    "pros"
  ],
  levels: [
    "Všechno",
    "Rok",
    "Čtvrťák",
    "Měsíc",
    "Týden",
    "Datum",
    "Hodina",
    "Minuta",
    "Sekunda",
    "Milisekunda"
  ],
  durationLongSuffix: [
    "",
    "roky",
    "čtvrtletí",
    "měsíce",
    "týdny",
    "dny",
    "hodiny",
    "minuty",
    "sekundy",
    "milisekundy"
  ],
  durationShortSuffix: ["", "r", "čt", "mě", "t", "d", "h", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  e as default
};
