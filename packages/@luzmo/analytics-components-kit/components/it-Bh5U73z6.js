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
  currency: ["€", ""],
  dateTime: "%A %e %B %Y, %X",
  date: "%d/%m/%Y",
  dateSeparator: "/",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ],
  shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
  months: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ],
  shortMonths: [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic"
  ],
  levels: [
    "Tutti",
    "Anno",
    "Trimestre",
    "Mese",
    "Settimana",
    "Data",
    "Ora",
    "Minuto",
    "Secondo",
    "Millisecondo"
  ],
  shortLevels: [
    "Tutti",
    "Anno",
    "Trim",
    "Mese",
    "Set",
    "Data",
    "Ora",
    "Min",
    "Sec",
    "Msec"
  ],
  durationLongSuffix: [
    "",
    "anni",
    "trimestri",
    "mesi",
    "settimane",
    "giorni",
    "ore",
    "minuti",
    "secondi",
    "millisecondi"
  ],
  durationShortSuffix: ["", "a", "tr", "me", "set", "g", "o", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"],
  smartDateFormats: [
    {
      key: "%a %e %b %Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%b %Y",
      lev4: "Se %V-%G",
      lev5: "%a %e %b %Y",
      monthType: "name",
      longText: !1,
      weekday: !0
    },
    {
      key: "%e %b %Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%b %Y",
      lev4: "Se %V-%G",
      lev5: "%e %b %Y",
      monthType: "name",
      longText: !1,
      weekday: !1
    },
    {
      key: "%a %e %B %Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%B %Y",
      lev4: "Settimana %V, %G",
      lev5: "%a %e %B %Y",
      monthType: "name",
      longText: !0,
      weekday: !0
    },
    {
      key: "%e %B %Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%B %Y",
      lev4: "Settimana %V, %G",
      lev5: "%e %B %Y",
      monthType: "name",
      longText: !0,
      weekday: !1
    },
    {
      key: "%d/%m/%Y",
      lev1: "%Y",
      lev2: "T%q/%Y",
      lev3: "%m/%Y",
      lev4: "S%V/%G",
      lev5: "%d/%m/%Y",
      monthType: "number",
      mmdd: !1,
      separator: "/"
    },
    {
      key: "%d-%m-%Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%m-%Y",
      lev4: "S%V-%G",
      lev5: "%d-%m-%Y",
      monthType: "number",
      mmdd: !1,
      separator: "-"
    },
    {
      key: "%d.%m.%Y",
      lev1: "%Y",
      lev2: "T%q.%Y",
      lev3: "%m.%Y",
      lev4: "S%V.%G",
      lev5: "%d.%m.%Y",
      monthType: "number",
      mmdd: !1,
      separator: "."
    },
    {
      key: "%d~%m~%Y",
      lev1: "%Y",
      lev2: "T%q~%Y",
      lev3: "%m~%Y",
      lev4: "S%V~%G",
      lev5: "%d~%m~%Y",
      monthType: "number",
      mmdd: !1,
      separator: "~"
    },
    {
      key: "%m/%d/%Y",
      lev1: "%Y",
      lev2: "T%q/%Y",
      lev3: "%m/%Y",
      lev4: "%G/S%V",
      lev5: "%m/%d/%Y",
      monthType: "number",
      mmdd: !0,
      separator: "/"
    },
    {
      key: "%m-%d-%Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%m-%Y",
      lev4: "%G-S%V",
      lev5: "%m-%d-%Y",
      monthType: "number",
      mmdd: !0,
      separator: "-"
    },
    {
      key: "%m.%d.%Y",
      lev1: "%Y",
      lev2: "T%q.%Y",
      lev3: "%m.%Y",
      lev4: "%G.S%V",
      lev5: "%m.%d.%Y",
      monthType: "number",
      mmdd: !0,
      separator: "."
    },
    {
      key: "%m~%d~%Y",
      lev1: "%Y",
      lev2: "T%q~%Y",
      lev3: "%m~%Y",
      lev4: "%G~S%V",
      lev5: "%m~%d~%Y",
      monthType: "number",
      mmdd: !0,
      separator: "~"
    },
    {
      key: "%amd/%Y",
      lev1: "%Y",
      lev2: "T%q/%Y",
      lev3: "%m/%Y",
      lev4: "%G/S%V",
      lev5: "%amd/%Y",
      monthType: "number",
      mmdd: !0,
      separator: "/"
    },
    {
      key: "%amd-%Y",
      lev1: "%Y",
      lev2: "T%q-%Y",
      lev3: "%m-%Y",
      lev4: "%G-S%V",
      lev5: "%amd-%Y",
      monthType: "number",
      mmdd: !0,
      separator: "-"
    },
    {
      key: "%amd.%Y",
      lev1: "%Y",
      lev2: "T%q.%Y",
      lev3: "%m.%Y",
      lev4: "%G.S%V",
      lev5: "%amd.%Y",
      monthType: "number",
      mmdd: !0,
      separator: "."
    },
    {
      key: "%amd~%Y",
      lev1: "%Y",
      lev2: "T%q~%Y",
      lev3: "%m~%Y",
      lev4: "%G~S%V",
      lev5: "%amd~%Y",
      monthType: "number",
      mmdd: !0,
      separator: "~"
    }
  ],
  smartTimeFormats: [
    {
      key: "%H:%M:%S.%L",
      lev6: "%H:00",
      lev7: "%H:%M",
      lev8: "%H:%M:%S",
      lev9: "%H:%M:%S.%L",
      ampm: !1
    },
    {
      key: "%I:%M:%S.%L %p",
      lev6: "%I:00 %p",
      lev7: "%I:%M %p",
      lev8: "%I:%M:%S %p",
      lev9: "%I:%M:%S.%L %p",
      ampm: !0
    }
  ]
};
export {
  e as default
};
