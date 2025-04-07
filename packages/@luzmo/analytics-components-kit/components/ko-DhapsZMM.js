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
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["₩", ""],
  dateTime: "%Y/%m/%d %a %X",
  date: "%Y/%m/%d",
  dateSeparator: "/",
  time: "%H:%M:%S",
  periods: ["오전", "오후"],
  days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  shortDays: ["일", "월", "화", "수", "목", "금", "토"],
  months: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  shortMonths: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  levels: [
    "All",
    "Year",
    "Quarter",
    "Month",
    "Week",
    "Date",
    "Hour",
    "Minute",
    "Second",
    "Millisecond"
  ],
  durationLongSuffix: [
    "",
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  durationShortSuffix: ["", "y", "q", "mo", "w", "d", "h", "m", "s", "ms"],
  multi: [".%L", ":%S", "%I:%M", "%I %p", "%a %d", "W%G", "%b %d", "%B", "%Y"]
};
export {
  e as default
};
