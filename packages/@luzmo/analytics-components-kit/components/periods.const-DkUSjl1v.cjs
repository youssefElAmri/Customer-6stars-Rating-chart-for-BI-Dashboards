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
"use strict";const e=require("./get-css-variable-CGmd_tgb.cjs"),t=[{level:1,key:"year",i18n:()=>e.msg("Year",{desc:"Date format option"})},{level:2,key:"quarter",i18n:()=>e.msg("Quarter",{desc:"Date format option"})},{level:3,key:"month",i18n:()=>e.msg("Month",{desc:"Month format setting"})},{level:4,key:"week",i18n:()=>e.msg("Week",{desc:"Date format option"})},{level:5,key:"day",i18n:()=>e.msg("Day",{desc:"Date format option"})},{level:6,key:"hour",i18n:()=>e.msg("Hour",{desc:"Date format option"})},{level:7,key:"minute",i18n:()=>e.msg("Minute",{desc:"Date format option"})},{level:8,key:"second",i18n:()=>e.msg("Second",{desc:"Date format option"})},{level:9,key:"millisecond",i18n:()=>e.msg("Millisecond",{desc:"Date format option"})}],o={level2:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"quarter_number",label:"Quarter numbers",i18n:()=>e.msg("Quarter numbers",{desc:"Date format option"})}],level3:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"month_in_year",label:"Month number",i18n:()=>e.msg("Month number",{desc:"Date format option"})}],level4:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"week_number",label:"Week number",i18n:()=>e.msg("Week number",{desc:"Date format option"})}],level5:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"day_in_week",label:"Day in week",i18n:()=>e.msg("Day in week",{desc:"Date format option"})},{key:"day_in_month",label:"Day in month",i18n:()=>e.msg("Day in month",{desc:"Date format option"})},{key:"day_in_year",label:"Day in year",i18n:()=>e.msg("Day in year",{desc:"Date format option"})}],level6:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"hour_in_day",label:"Hour in day",i18n:()=>e.msg("Hour in day",{desc:"Date format option"})}],level7:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"minute_in_hour",label:"Minute in hour",i18n:()=>e.msg("Minute in hour",{desc:"Date format option"})}],level8:[{key:"default",label:"Default",i18n:()=>e.msg("Default",{desc:"Date format option"})},{key:"second_in_minute",label:"Second in minute",i18n:()=>e.msg("Second in minute",{desc:"Date format option"})}]},a={number:()=>e.msg("Number",{desc:"Number format option"}),letter:()=>e.msg("Letter",{desc:"Letter format option. Letter of the alphabeth."}),short:()=>e.msg("Short",{desc:"Short format option"}),long:()=>e.msg("Long",{desc:"Long format option"})},n={sunday:()=>e.msg("Sunday",{desc:"Date format option"}),monday:()=>e.msg("Monday",{desc:"Date format option"})};exports.DATETIME_AS_STRING_FORMATS_PER_LEVEL=o;exports.DATETIME_LEVELS=t;exports.DATETIME_WEEKDAY_AND_MONTH_STRING_FORMATS=a;exports.WEEK_STARTS_ON=n;
