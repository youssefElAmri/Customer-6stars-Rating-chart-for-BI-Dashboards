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
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["₺", ""],
  dateTime: "%a %e %b %X %Y",
  date: "%d/%m/%Y",
  dateSeparator: "/",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ],
  shortDays: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  months: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  shortMonths: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara"
  ],
  levels: [
    "Hepsi",
    "Yıl",
    "Çeyrek",
    "Ay",
    "Hafta",
    "Tarih",
    "Saat",
    "Dakika",
    "Saniye",
    "Milisaniye"
  ],
  shortLevels: [
    "Hepsi",
    "Yıl",
    "Çyr",
    "Ay",
    "Hft",
    "tar",
    "sa",
    "dk",
    "sn",
    "ms"
  ],
  durationLongSuffix: [
    "",
    "yıl",
    "çeyrek",
    "ay",
    "hafta",
    "gün",
    "saat",
    "dakika",
    "saniye",
    "milisaniye"
  ],
  durationShortSuffix: ["", "y", "çe", "ay", "h", "g", "sa", "d", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  a as default
};
