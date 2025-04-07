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
const t = {
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["", " ден."],
  dateTime: "%A, %e %B %Y г. %X",
  date: "%d.%m.%Y",
  dateSeparator: ".",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "недела",
    "понеделник",
    "вторник",
    "среда",
    "четврток",
    "петок",
    "сабота"
  ],
  shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
  months: [
    "јануари",
    "февруари",
    "март",
    "април",
    "мај",
    "јуни",
    "јули",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември"
  ],
  shortMonths: [
    "јан",
    "фев",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "сеп",
    "окт",
    "ное",
    "дек"
  ],
  levels: [
    "Сите",
    "Година",
    "Четврт",
    "Месец",
    "Недела",
    "Датум",
    "Час",
    "Минута",
    "Секунда",
    "Милисекунда"
  ],
  durationLongSuffix: [
    "",
    "години",
    "четвртини",
    "месеци",
    "недели",
    "денови",
    "часови",
    "минути",
    "секунди",
    "милисекунди"
  ],
  durationShortSuffix: ["", "г", "чe", "ме", "н", "д", "ч", "м", "с", "мc"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  t as default
};
