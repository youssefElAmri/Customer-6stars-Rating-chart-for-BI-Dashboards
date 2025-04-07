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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./index-9FgiJszO.cjs");require("./index-rYO-mkTp.cjs");require("./index-mvE2W1AM.cjs");const e=require("./get-css-variable-CGmd_tgb.cjs");require("./index-D9_LYCNr.cjs");require("./index-D2q8c_Pp.cjs");const l=require("./formatter-DiJYkB6b.cjs"),m=require("./periods.const-DkUSjl1v.cjs"),u={"~":()=>e.msg("Auto",{desc:"Automatic setting of the option"}),"/":()=>"/","-":()=>"-",".":()=>"."},_=":host{font-family:var(--luzmo-display-settings-datetime-font-family, var(--luzmo-font-family))}:host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-datetime-gap, var(--display-settings-datetime-gap))}:host .example-container{line-height:var(--luzmo-display-settings-datetime-example-height, var(--display-settings-datetime-example-height));font-size:var(--luzmo-display-settings-datetime-example-font-size, var(--display-settings-datetime-example-font-size));color:var(--luzmo-display-settings-datetime-example-color, var(--display-settings-datetime-example-color))}:host .example-container .example-label{font-weight:var(--luzmo-display-settings-datetime-example-label-font-weight, var(--display-settings-datetime-example-label-font-weight));color:var(--luzmo-display-settings-datetime-example-label-color, var(--display-settings-datetime-example-label-color))}:host .example-container .example-language{text-transform:uppercase;color:var(--luzmo-display-settings-datetime-example-language-color, var(--display-settings-datetime-example-language-color))}:host{--display-settings-datetime-example-font-size: var(--luzmo-font-size);--display-settings-datetime-example-color: var(--luzmo-font-color);--display-settings-datetime-example-label-font-weight: bold;--display-settings-datetime-example-label-color: var(--luzmo-primary);--display-settings-datetime-example-language-color: var(--luzmo-primary)}:host{--display-settings-datetime-gap: var(--luzmo-spacing-3);--display-settings-datetime-example-height: var(--luzmo-component-height);--display-settings-datetime-example-font-size: var(--luzmo-font-size-s)}:host([size=s]){--display-settings-datetime-gap: var(--luzmo-spacing-3);--display-settings-datetime-example-height: var(--luzmo-component-height-s);--display-settings-datetime-example-font-size: var(--luzmo-font-size-s)}:host([size=l]){--display-settings-datetime-gap: var(--luzmo-spacing-4);--display-settings-datetime-example-height: var(--luzmo-component-height-l);--display-settings-datetime-example-font-size: var(--luzmo-font-size)}:host([size=xl]){--display-settings-datetime-gap: var(--luzmo-spacing-5);--display-settings-datetime-example-height: var(--luzmo-component-height-xl);--display-settings-datetime-example-font-size: var(--luzmo-font-size-l)}";var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,o=(d,t,s,i)=>{for(var a=i>1?void 0:i?c(t,s):t,r=d.length-1,h;r>=0;r--)(h=d[r])&&(a=(i?h(t,s,a):h(a))||a);return i&&a&&p(t,s,a),a};exports.LuzmoDisplaySettingsDatetime=class extends e.m(e.kt,{validSizes:Object.values(e.d$2)}){constructor(){super(...arguments),this._loadLocaleFormatsConfig=new n.h(this,{task:async([t])=>{if(t&&t!==this._contentLanguageLoaded){const s=Object.assign({"../../utils/formatter/formats/cs.ts":()=>Promise.resolve().then(()=>require("./cs-I9E81keK.cjs")),"../../utils/formatter/formats/da.ts":()=>Promise.resolve().then(()=>require("./da-QkdvupDg.cjs")),"../../utils/formatter/formats/de.ts":()=>Promise.resolve().then(()=>require("./de-Dn5mUzha.cjs")),"../../utils/formatter/formats/en-GB.ts":()=>Promise.resolve().then(()=>require("./en-GB-Dd11ROdW.cjs")),"../../utils/formatter/formats/en-US.ts":()=>Promise.resolve().then(()=>g),"../../utils/formatter/formats/en.ts":()=>Promise.resolve().then(()=>f),"../../utils/formatter/formats/es.ts":()=>Promise.resolve().then(()=>require("./es-CwyPlN5d.cjs")),"../../utils/formatter/formats/fi.ts":()=>Promise.resolve().then(()=>require("./fi-rijeZE5V.cjs")),"../../utils/formatter/formats/fr.ts":()=>Promise.resolve().then(()=>require("./fr-BcgE-6S_.cjs")),"../../utils/formatter/formats/he.ts":()=>Promise.resolve().then(()=>require("./he-O6Ih8Bqh.cjs")),"../../utils/formatter/formats/hu.ts":()=>Promise.resolve().then(()=>require("./hu-BnZ8y3xQ.cjs")),"../../utils/formatter/formats/it.ts":()=>Promise.resolve().then(()=>require("./it-PshtLMkq.cjs")),"../../utils/formatter/formats/ja.ts":()=>Promise.resolve().then(()=>require("./ja-KIS2HdaG.cjs")),"../../utils/formatter/formats/ko.ts":()=>Promise.resolve().then(()=>require("./ko--l4qmjLV.cjs")),"../../utils/formatter/formats/mk.ts":()=>Promise.resolve().then(()=>require("./mk-DZlj-edb.cjs")),"../../utils/formatter/formats/nl.ts":()=>Promise.resolve().then(()=>require("./nl-BKlDqOXb.cjs")),"../../utils/formatter/formats/no.ts":()=>Promise.resolve().then(()=>require("./no-D_SzxhTu.cjs")),"../../utils/formatter/formats/pl.ts":()=>Promise.resolve().then(()=>require("./pl-PIK23rK_.cjs")),"../../utils/formatter/formats/pt.ts":()=>Promise.resolve().then(()=>require("./pt-Dqlu4MS5.cjs")),"../../utils/formatter/formats/ru.ts":()=>Promise.resolve().then(()=>require("./ru-zyNDTB04.cjs")),"../../utils/formatter/formats/sv.ts":()=>Promise.resolve().then(()=>require("./sv-1DPTltNQ.cjs")),"../../utils/formatter/formats/tr.ts":()=>Promise.resolve().then(()=>require("./tr-BkmWvOG2.cjs")),"../../utils/formatter/formats/zh-CN.ts":()=>Promise.resolve().then(()=>require("./zh-CN-DTZ4OmdP.cjs")),"../../utils/formatter/formats/zh-TW.ts":()=>Promise.resolve().then(()=>require("./zh-TW-DTZ4OmdP.cjs"))});if(s[`../../utils/formatter/formats/${t}.ts`]){const i=await s[`../../utils/formatter/formats/${t}.ts`]();this._localeFormats=(i==null?void 0:i.default)??{}}return this._contentLanguageLoaded=t,this._localeFormats}},args:()=>[this.contentLanguage]}),this.language="en",this.contentLanguage="en",this.size="m",this.slotContent={},this._dateLevel=5,this._displayAs="default",this._weekStart="monday",this._weekDayAndMonthInYearFormat="long",this._dateFormat="auto",this._dateSeparator="~",this._sendEvent=()=>{this._calculateSlotContent(),this.dispatchEvent(new CustomEvent("slot-content-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{slotContent:this._currentSlotContent}}))}}static get styles(){return[e.r(_)]}_parseSlotContent(){var t,s;this._dateLevel=this.slotContent.level??((t=this.slotContent)==null?void 0:t.lowestLevel)??5,this._displayAs=((s=this.slotContent)==null?void 0:s.datetimeDisplayMode)??"default",this._displayAs==="weekday_number"&&(this._displayAs="day_in_week",this._weekDayAndMonthInYearFormat="number"),this._displayAs==="weekday_name"&&(this._displayAs="day_in_week"),this._displayAs==="month_number"&&(this._displayAs="month_in_year",this._weekDayAndMonthInYearFormat="number"),this._displayAs==="month_name"&&(this._displayAs="month_in_year")}_calculateFormat(){var i;let t;const s=((i=this._localeFormats)==null?void 0:i.smartDateFormats)??l.SMART_DATE_FORMATS;this._monthName?(t=s.filter(a=>a.monthType==="name"&&a.longText===(this._monthNameFormat==="long")&&a.weekday===this._weekDay),t.length>0?this._format=t[0].key:(this._weekDayAndMonthInYearFormat="short",this._weekDay=!0,this._format="%a %e %B %Y")):(t=this._dateLevel&&this._dateLevel===4?s.filter(a=>a.monthType==="number"&&a.mmdd===(this._weekFormat==="mmdd"?!0:this._weekFormat==="ddmm"?!1:null)&&a.separator===this._dateSeparator):s.filter(a=>a.monthType==="number"&&a.mmdd===(this._dateFormat==="mmdd"?!0:this._dateFormat==="ddmm"?!1:null)&&a.separator===this._dateSeparator),this._dateFormat==="auto"&&this._dateLevel&&this._dateLevel!==4?this._format="%amd"+this._dateSeparator+"%Y":t.length>0?this._format=t[0].key:(this._dateFormat="ddmm",this._dateSeparator="/",this._format="%d/%m/%Y")),this._dateLevel&&this._dateLevel>5&&(this._format+=this._24hFormat?" %H:%M:%S.%L":" %I:%M:%S.%L %p")}_setWeekStartsOn(){this._weekStart=this._weekStartElement.value,this._sendEvent(),this.requestUpdate()}_setDisplayAs(){this._displayAs=this._displayAsElement.value,this._sendEvent(),this.requestUpdate()}_setWeekdayAndMonthInYearFormat(){var t;this._weekDayAndMonthInYearFormat=((t=this._weekDayAndMonthInYearFormatElement.selected)==null?void 0:t[0])??"long",this._sendEvent(),this.requestUpdate()}_setMonthNameFormat(){var t;this._monthNameFormat=(t=this._monthNameFormatElement.selected)==null?void 0:t[0],this._sendEvent(),this.requestUpdate()}_setMonthName(){this._monthName=this._monthNameElement.selected,this._sendEvent(),this.requestUpdate()}_setWeekFormat(){var t;this._weekFormat=(t=this._weekFormatElement.selected)==null?void 0:t[0],this._sendEvent(),this.requestUpdate()}_setDateFormat(){this._dateFormat=this._dateFormatElement.value,this._sendEvent(),this.requestUpdate()}_setDateSeparator(){this._dateSeparator=this._dateSeparatorElement.value,this._sendEvent(),this.requestUpdate()}_set24hFormat(){this._24hFormat=this._format24hElement.selected,this._sendEvent(),this.requestUpdate()}_setWeekday(){this._weekDay=this._weekDayElement.selected,this._sendEvent(),this.requestUpdate()}_calculateSlotContent(){this._currentSlotContent={...this.slotContent},this._calculateFormat(),this._currentSlotContent.format=this._format,this._displayAs==="default"?delete this._currentSlotContent.datetimeDisplayMode:(this._currentSlotContent.datetimeDisplayMode=this._displayAs,this._displayAs==="week_in_year"?this._currentSlotContent.datetimeDisplayMode=this._weekDayAndMonthInYearFormat==="number"?"week_number":"week_name":this._displayAs==="month_in_year"?this._currentSlotContent.datetimeDisplayMode=this._weekDayAndMonthInYearFormat==="number"?"month_number":"month_name":this._displayAs==="day_in_week"&&(this._currentSlotContent.datetimeDisplayMode=this._weekDayAndMonthInYearFormat==="number"?"weekday_number":"weekday_name",this._currentSlotContent.weekStart=this._weekStart),this._weekDayAndMonthInYearFormat&&(this._dateLevel===3?this._currentSlotContent.monthNameFormat=this._weekDayAndMonthInYearFormat:this._dateLevel===5&&(this._currentSlotContent.weekDayNameFormat=this._weekDayAndMonthInYearFormat)))}willUpdate(t){t.has("slotContent")&&(this._parseSlotContent(),this._calculateSlotContent()),t.has("language")&&([...e.targetLocales].includes(this.language)||this.language==="en")&&(e.setLocale(this.language),this.requestUpdate())}_renderDisplaySettings(){var s,i;const t=(i=(s=m.DATETIME_AS_STRING_FORMATS_PER_LEVEL)==null?void 0:s[`level${this._dateLevel??0}`])==null?void 0:i.map(a=>e.x`<luzmo-menu-item value=${a.key}>
          ${a.i18n()}
        </luzmo-menu-item>`);return e.x`<div class="setting">
      <luzmo-field-label for="display-as"
        >${e.msg("Display",{desc:"Label for display setting"})}</luzmo-field-label
      >
      <luzmo-picker
        id="display-as"
        size=${this.size}
        variant="highlight"
        value=${this._displayAs??"default"}
        @change=${this._setDisplayAs}
      >
        ${t}
      </luzmo-picker>
    </div>`}_renderWeekDayAndMonthNameFormatSettings(){const t=Object.keys(m.DATETIME_WEEKDAY_AND_MONTH_STRING_FORMATS).map(s=>e.x`<luzmo-action-button value=${s}>
        ${m.DATETIME_WEEKDAY_AND_MONTH_STRING_FORMATS[s]()}
      </luzmo-action-button>`);return e.x` <div class="setting">
      <luzmo-field-label for="weekday-and-month-in-year-format"
        >${e.msg("Format",{desc:"Label for format setting"})}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="weekday-and-month-in-year-format"
        size=${this.size}
        compact
        .selected=${[this._weekDayAndMonthInYearFormat??"short"]}
        selects="single"
        @change=${this._setWeekdayAndMonthInYearFormat}
      >
        ${t}
      </luzmo-action-group>
    </div>`}_renderMonthNameFormatSettings(){return e.x` <div class="setting">
      <luzmo-field-label for="month-name-format"
        >${e.msg("Format",{desc:"Label for format setting"})}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="month-name-format"
        size=${this.size}
        compact
        .selected=${[this._monthNameFormat??"long"]}
        selects="single"
        @change=${this._setMonthNameFormat}
      >
        <luzmo-action-button value="short">
          ${e.msg("Short",{desc:"Short format option"})}
        </luzmo-action-button>
        <luzmo-action-button value="long">
          ${e.msg("Long",{desc:"Long format option"})}
        </luzmo-action-button>
      </luzmo-action-group>
    </div>`}_renderWeekFormatSettings(){var a;const t=((a=this._localeFormats)==null?void 0:a.smartDateFormats)??l.SMART_DATE_FORMATS,s=t.find(r=>r.mmdd===!0&&r.separator===this._dateSeparator&&r.monthType==="number"),i=t.find(r=>r.mmdd===!1&&r.separator===this._dateSeparator&&r.monthType==="number");return e.x` <div class="setting">
      <luzmo-field-label for="week-format"
        >${e.msg("Format",{desc:"Label for format setting"})}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="week-format"
        size=${this.size}
        compact
        .selected=${[this._weekFormat??"ddmm"]}
        selects="single"
        @change=${this._setWeekFormat}
      >
        <luzmo-action-button value="ddmm">
          ${l.formatter({...this._currentSlotContent,type:"datetime",format:i==null?void 0:i.key},{localFormats:this._localeFormats,level:this._dateLevel})(new Date)}
        </luzmo-action-button>
        <luzmo-action-button value="mmdd"
          >${l.formatter({...this._currentSlotContent,type:"datetime",format:s==null?void 0:s.key},{localFormats:this._localeFormats,level:this._dateLevel})(new Date)}</luzmo-action-button
        >
      </luzmo-action-group>
    </div>`}_renderWeekStartsOnSettings(){const t=Object.keys(m.WEEK_STARTS_ON).map(s=>e.x`<luzmo-menu-item value=${s}>
          ${m.WEEK_STARTS_ON[s]()}
        </luzmo-menu-item>`);return e.x`<div class="setting">
      <luzmo-field-label for="week-start"
        >${e.msg("Week starts on",{desc:"Label for week start setting"})}</luzmo-field-label
      >
      <luzmo-picker
        id="week-start"
        size=${this.size}
        variant="highlight"
        value=${this._weekStart??"Auto"}
        @change=${this._setWeekStartsOn}
      >
        ${t}
      </luzmo-picker>
    </div>`}_renderMonthNameSettings(){return e.x`<div class="settings-">
      <luzmo-field-label for="month-name"
        >${e.msg("Month",{desc:"Month format setting"})}</luzmo-field-label
      >
      <luzmo-action-button
        id="month-name"
        emphasized
        toggles
        .size=${this.size}
        ?selected=${this._monthName}
        @change=${this._setMonthName}
      >
        <luzmo-icon
          slot="icon"
          .size=${this.size}
          .icon=${this._monthName?e.C0:e.h0}
        ></luzmo-icon>
        ${e.msg("Name")}
      </luzmo-action-button>
    </div>`}_renderDateFormatSettings(){const t=this._dateSeparator==="~"?"/":this._dateSeparator;return e.x`<div class="setting">
      <luzmo-field-label for="date-format"
        >${e.msg("Format",{desc:"Label for format setting"})}</luzmo-field-label
      >
      <luzmo-picker
        id="date-format"
        size=${this.size}
        variant="highlight"
        value=${this._dateFormat??"Auto"}
        @change=${this._setDateFormat}
      >
        <luzmo-menu-item value="auto">
          ${e.msg("Auto",{desc:"Automatic setting of the option"})}
        </luzmo-menu-item>
        <luzmo-menu-item value="mmdd">12${t}31</luzmo-menu-item>
        <luzmo-menu-item value="ddmm">31${t}12</luzmo-menu-item>
      </luzmo-picker>
    </div>`}_renderSeparatorSettings(){const t=Object.keys(u).map(s=>e.x`<luzmo-menu-item value=${s}>
          ${u[s]()}
        </luzmo-menu-item>`);return e.x`<div class="setting">
      <luzmo-field-label for="date-separator"
        >${e.msg("Separator",{desc:"Label for date separator setting"})}</luzmo-field-label
      >
      <luzmo-picker
        id="date-separator"
        size=${this.size}
        variant="highlight"
        value=${this._dateSeparator??"~"}
        @change=${this._setDateSeparator}
      >
        ${t}
      </luzmo-picker>
    </div>`}_render24hFormatSettings(){return e.x`<div class="settings-">
      <luzmo-field-label for="format-24h"
        >${e.msg("24h",{desc:"Label for 24h format setting"})}</luzmo-field-label
      >
      <luzmo-action-button
        id="format-24h"
        emphasized
        toggles
        .size=${this.size}
        ?selected=${this._24hFormat}
        @change=${this._set24hFormat}
      >
        <luzmo-icon
          slot="icon"
          .size=${this.size}
          .icon=${this._24hFormat?e.C0:e.h0}
        ></luzmo-icon>
      </luzmo-action-button>
    </div>`}_renderWeekdaySettings(){return e.x`<div class="settings-">
      <luzmo-field-label for="weekday"
        >${e.msg("Weekday",{desc:"Label for weekday setting"})}</luzmo-field-label
      >
      <luzmo-action-button
        id="weekday"
        emphasized
        toggles
        .size=${this.size}
        ?selected=${this._weekDay}
        @change=${this._setWeekday}
      >
        <luzmo-icon
          slot="icon"
          .size=${this.size}
          .icon=${this._weekDay?e.C0:e.h0}
        ></luzmo-icon>
        ${e.msg("Show")}
      </luzmo-action-button>
    </div>`}_renderExampleFormat(){return e.x`<span class="example">
        ${l.formatter({...this._currentSlotContent,type:"datetime"},{localFormats:this._localeFormats,level:this._dateLevel})(!this._displayAs||this._displayAs==="default"?new Date:1)}
      </span>
      ${(this._dateSeparator==="~"||this._dateFormat==="auto")&&!this._monthName?e.x`<span class="example-language">
            (${this.contentLanguage})
          </span>`:""}`}_renderAllSettings(){return e.x`<div class="settings-container">
      ${this._dateLevel&&![1,9].includes(this._dateLevel)?e.x` <div class="settings-row">
            ${this._renderDisplaySettings()}
            ${this._dateLevel&&this._dateLevel>=5&&this._displayAs==="day_in_week"?this._renderWeekStartsOnSettings():""}
          </div>`:""}
      ${["month_in_year","day_in_week"].includes(this._displayAs??"")?e.x` <div class="settings-row">
            ${this._renderWeekDayAndMonthNameFormatSettings()}
          </div>`:""}
      ${this._dateLevel&&this._dateLevel>1&&this._displayAs==="default"?e.x` <div class="settings-row">
            ${this._dateLevel&&this._dateLevel!==4&&this._dateLevel!==2?this._renderMonthNameSettings():""}
            ${this._dateLevel&&this._dateLevel!==4&&this._dateLevel>2&&this._monthName?this._renderMonthNameFormatSettings():""}
            ${this._dateLevel&&this._dateLevel===4&&!this._monthName?this._renderWeekFormatSettings():""}
            ${this._dateLevel&&this._dateLevel>=5&&!this._monthName?this._renderDateFormatSettings():""}
            ${this._dateLevel&&this._dateLevel>1&&!this._monthName?this._renderSeparatorSettings():""}
            ${this._dateLevel&&this._dateLevel>=5&&this._monthName?this._renderWeekdaySettings():""}
            ${this._dateLevel&&this._dateLevel>5?this._render24hFormatSettings():""}
          </div>`:""}
      <div class="settings-row">
        <div class="example-container">
          <span class="example-label"
            >${e.msg("Example:",{desc:"Label for example format"})}</span
          >
          ${this._renderExampleFormat()}
        </div>
      </div>
    </div>`}render(){return this._loadLocaleFormatsConfig.render({pending:()=>e.x`<luzmo-progress-circle
          indeterminate
          .size=${this.size}
        ></luzmo-progress-circle>`,complete:()=>this._renderAllSettings(),error:()=>this._renderAllSettings()})}};o([e.n({type:String})],exports.LuzmoDisplaySettingsDatetime.prototype,"language",2);o([e.n({type:String})],exports.LuzmoDisplaySettingsDatetime.prototype,"contentLanguage",2);o([e.n({type:String})],exports.LuzmoDisplaySettingsDatetime.prototype,"size",2);o([e.n({type:Object,reflect:!1})],exports.LuzmoDisplaySettingsDatetime.prototype,"slotContent",2);o([n.e("#display-as")],exports.LuzmoDisplaySettingsDatetime.prototype,"_displayAsElement",2);o([n.e("#week-start")],exports.LuzmoDisplaySettingsDatetime.prototype,"_weekStartElement",2);o([n.e("#weekday-and-month-in-year-format")],exports.LuzmoDisplaySettingsDatetime.prototype,"_weekDayAndMonthInYearFormatElement",2);o([n.e("#month-name-format")],exports.LuzmoDisplaySettingsDatetime.prototype,"_monthNameFormatElement",2);o([n.e("#month-name")],exports.LuzmoDisplaySettingsDatetime.prototype,"_monthNameElement",2);o([n.e("#week-format")],exports.LuzmoDisplaySettingsDatetime.prototype,"_weekFormatElement",2);o([n.e("#date-format")],exports.LuzmoDisplaySettingsDatetime.prototype,"_dateFormatElement",2);o([n.e("#date-separator")],exports.LuzmoDisplaySettingsDatetime.prototype,"_dateSeparatorElement",2);o([n.e("#weekday")],exports.LuzmoDisplaySettingsDatetime.prototype,"_weekDayElement",2);o([n.e("#format-24h")],exports.LuzmoDisplaySettingsDatetime.prototype,"_format24hElement",2);exports.LuzmoDisplaySettingsDatetime=o([e.localized()],exports.LuzmoDisplaySettingsDatetime);customElements.get("luzmo-display-settings-datetime")||customElements.define("luzmo-display-settings-datetime",exports.LuzmoDisplaySettingsDatetime);const g=Object.freeze(Object.defineProperty({__proto__:null,default:l.DEFAULT_LOCAL_FORMATS},Symbol.toStringTag,{value:"Module"})),f=Object.freeze(Object.defineProperty({__proto__:null,default:l.DEFAULT_LOCAL_FORMATS},Symbol.toStringTag,{value:"Module"}));
