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
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("./get-css-variable-CGmd_tgb.cjs");require("./index-rYO-mkTp.cjs");require("./index-mvE2W1AM.cjs");const l=require("./index-9FgiJszO.cjs");require("./index-Dj7wuhMW.cjs");require("./index-D9_LYCNr.cjs");require("./index-D2q8c_Pp.cjs");require("./index-DyW7LoMc.cjs");const _=require("./decompose-numeric-format-B3rVVHpO.cjs"),y=require("./index-C6OfNLfU.cjs"),z=":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-numeric-gap, var(--display-settings-numeric-gap))}.duration-angle-down-icon{margin-inline-start:var(--luzmo-numeric-duration-levels-dropdown-icon-margin-inline-start, var(--numeric-duration-levels-dropdown-icon-margin-inline-start))}:host{--display-settings-numeric-gap: var(--luzmo-spacing-3);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-2 )}:host([size=s]){--display-settings-numeric-gap: var(--luzmo-spacing-3);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-1 )}:host([size=l]){--display-settings-numeric-gap: var(--luzmo-spacing-4);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-3 )}:host([size=xl]){--display-settings-numeric-gap: var(--luzmo-spacing-5);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-4 )}",b={sum:()=>i.msg("Sum",{desc:"Numeric Aggregation option"}),cumulativesum:()=>i.msg("Cumulative sum",{desc:"Numeric Aggregation option"}),average:()=>i.msg("Average",{desc:"Numeric Aggregation option"}),weightedaverage:()=>i.msg("Weighted average",{desc:"Numeric Aggregation option"}),median:()=>i.msg("Median",{desc:"Numeric Aggregation option"}),count:()=>i.msg("Count",{desc:"Numeric Aggregation option"}),distinctcount:()=>i.msg("Distinct count",{desc:"Numeric Aggregation option"}),min:()=>i.msg("Minimum",{desc:"Numeric Aggregation option"}),max:()=>i.msg("Maximum",{desc:"Numeric Aggregation option"}),stddev:()=>i.msg("Standard deviation",{desc:"Numeric Aggregation option"}),rate:()=>i.msg("Rate",{desc:"Numeric Aggregation option"})},v={general:"123",percentage:"%",scientific:"SI"},f={time:()=>i.msg("Time",{desc:"Time format option"}),short:()=>i.msg("Short",{desc:"Short format option"}),long:()=>i.msg("Long",{desc:"Long format option"})},h={Auto:{auto:!0,label:()=>i.msg("Auto",{desc:"Automatic setting of the option"})},"1,000.00":{auto:!1,label:()=>"1,000.00",thousandSeparator:",",decimalSeparator:"."},"1.000,00":{auto:!1,label:()=>"1.000,00",thousandSeparator:".",decimalSeparator:","},"1000.00":{auto:!1,label:()=>"1000.00",decimalSeparator:"."},"1000,00":{auto:!1,label:()=>"1000,00",decimalSeparator:","}},L={levels:[{level:1,label:"years"},{level:2,label:"quarters"},{level:3,label:"months"},{level:4,label:"weeks"},{level:5,label:"days"},{level:6,label:"hours"},{level:7,label:"minutes"},{level:8,label:"seconds"},{level:9,label:"milliseconds"}]};var S=Object.defineProperty,A=Object.getOwnPropertyDescriptor,n=(d,t,e,s)=>{for(var o=s>1?void 0:s?A(t,e):t,a=d.length-1,r;a>=0;a--)(r=d[a])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&S(t,e,o),o};exports.LuzmoDisplaySettingsNumeric=class extends i.m(i.kt,{validSizes:Object.values(i.d$2)}){constructor(){super(...arguments),this.language="en",this.slotContent={},this.measureColumns=[],this._durationLevels=[],this._renderDurationLevelMenu=!1,this._sendEvent=()=>{const t={...this.slotContent};t.format=this._format,t.aggregationFunc=this._aggregationFunc,this._aggregationWeightColumn?t.aggregationWeight={...this._aggregationWeightColumn}:this._aggregationFunc==="rate"&&(t.aggregationFunc="average"),this._displayMode==="duration"?(t.duration=t.duration??{},t.duration.format=this._durationFormat,t.duration.levels=this._durationLevels):delete t.duration,this.dispatchEvent(new CustomEvent("slot-content-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{slotContent:t}}))}}static get styles(){return[i.r(z)]}_parseSavedNumericFormatSettings(){var t,e,s,o,a,r,m,g,c,p;if(this._displayMode=((t=this.slotContent)==null?void 0:t.subtype)==="duration"?((o=(s=(e=this.slotContent)==null?void 0:e.duration)==null?void 0:s.levels)==null?void 0:o.length)===1?"numeric":"duration":"numeric",this._durationFormat=((r=(a=this.slotContent)==null?void 0:a.duration)==null?void 0:r.format)??"short",this._durationLevels=((g=(m=this.slotContent)==null?void 0:m.duration)==null?void 0:g.levels)??[1],this._displayMode==="duration")this._precision=2,this._commaDecimals=!1,this._thousandSeparator=!1;else{this._format=((c=this.slotContent)==null?void 0:c.format)??".0f";const u=_.decomposeNumericFormat(this._format??".0f");this._isAuto=((p=u.typeFormat)==null?void 0:p.includes("a"))??!1,["%","a%","y","ay"].includes(u.typeFormat)?this._displayAs="percentage":["s","as","w","aw"].includes(u.typeFormat)?this._displayAs="scientific":this._displayAs="general",this._precision=u.precision?Number.parseInt(u.precision.replace(".",""),10):this._displayAs==="scientific"?1:0,this._commaDecimals=["z","az","y","ay","w","aw"].includes(u.typeFormat),this._thousandSeparator=u.comma===",",this._isAuto?this._numericFormatGroup="Auto":this._commaDecimals&&this._thousandSeparator?this._numericFormatGroup="1.000,00":!this._commaDecimals&&this._thousandSeparator?this._numericFormatGroup="1,000.00":this._commaDecimals&&!this._thousandSeparator?this._numericFormatGroup="1000,00":!this._commaDecimals&&!this._thousandSeparator&&(this._numericFormatGroup="1000.00")}}_setNumericDisplayAs(){var t,e;this._displayAs=((e=(t=this._displayAsElement)==null?void 0:t.selected)==null?void 0:e[0])??"general",this._displayAs==="scientific"&&(this._precision=Math.max(this._precision??0,1),this._thousandSeparator=!1),this._setNumericFormat(),this._sendEvent(),this.requestUpdate()}_setNumericSeparators(t){const e=h[(t==null?void 0:t.detail)??"Auto"];this._thousandSeparator=[",","."].includes((e==null?void 0:e.thousandSeparator)??""),this._commaDecimals=(e==null?void 0:e.decimalSeparator)===",",this._isAuto=e==null?void 0:e.auto,this._setNumericFormat(),this._sendEvent()}_setPrecision(){this._precision=this._precisionElement.value,this._setNumericFormat(),this._sendEvent()}_setNumericFormat(){var s;let t="f";const e=this.slotContent.subtype==="duration"?this._durationLevels&&((s=this._durationLevels)==null?void 0:s.length)===1?"numeric":"duration":"numeric";this._maxDurationLevel=Math.min(...this._durationLevels),e==="duration"?(!["time","short","long"].includes(this._durationFormat??"")||this._maxDurationLevel<6&&this._durationFormat==="time")&&(this._durationFormat="short"):(this._displayAs==="general"&&this._commaDecimals?t="z":this._displayAs==="percentage"&&this._commaDecimals?t="y":this._displayAs==="scientific"&&this._commaDecimals?t="w":this._displayAs==="percentage"?t="%":this._displayAs==="scientific"&&(t="s"),this._format=(this._thousandSeparator||this._isAuto?",":"")+"."+this._precision+(this._isAuto?"a":"")+t)}_setAggregationFunc(){const t=this._aggregationFunc,e=this.slotContent.format;if(this._aggregationElement.value!==t){if(this._aggregationFunc=this._aggregationElement.value,t==="rate"){const s=_.decomposeNumericFormat(e),o=["%","y","a%","ay"].includes(s.typeFormat);this.slotContent.subtype==="currency"&&o&&this._setNumericDisplayAs()}this._sendEvent(),(this._aggregationFunc==="rate"||t==="rate")&&this.requestUpdate()}}_setAggregationWeight(){const t=this._aggregationWeightElement.value;if(t==="none")this._aggregationWeightColumn=void 0;else{const e=this.measureColumns.find(s=>s.columnId===t);this._aggregationWeightColumn={column:e==null?void 0:e.columnId,set:e==null?void 0:e.datasetId,columnSubType:e==null?void 0:e.subtype}}this._sendEvent()}_setDurationLevels(){const t=this._durationLevels,e=this._durationLevelsElement.value.split(",").filter(s=>s!=="").map(s=>Number.parseInt(s,10));this._durationLevels=((e==null?void 0:e.length)??0)>=1?e:t,this._maxDurationLevel=Math.min(...this._durationLevels),this._fillTimeDurationLevels(),this._setNumericFormat(),this._sendEvent(),this.requestUpdate()}_setDurationFormat(){var t,e;this._durationFormat=(e=(t=this._durationFormatElement)==null?void 0:t.selected)==null?void 0:e[0],this._fillTimeDurationLevels(),this._setNumericFormat(),this._sendEvent(),this.requestUpdate()}_fillTimeDurationLevels(){if(this._durationFormat==="time"){const t=this._durationLevels.sort().at(-1);if([7,8,9].includes(t)){const e={lev7:[6],lev8:[6,7],lev9:[6,7,8]};for(const s of e["lev"+t])this._durationLevels.includes(s)||this._durationLevels.push(s);this._durationLevels=[...this._durationLevels].sort()}}}willUpdate(t){var e,s,o;t.has("slotContent")&&(this._parseSavedNumericFormatSettings(),this._aggregationFunc=((e=this.slotContent)==null?void 0:e.aggregationFunc)??((s=this.slotContent)==null?void 0:s.type)==="numeric"?"sum":"count",this._aggregationWeightColumn=(o=this.slotContent)==null?void 0:o.aggregationWeight),t.has("language")&&([...i.targetLocales].includes(this.language??"en")||this.language==="en")&&(i.setLocale(this.language),this.requestUpdate())}firstUpdated(){var t;(t=this.slotContent)!=null&&t.duration&&this._durationLevelsOverlay.addEventListener("slottable-request",e=>{this._renderDurationLevelMenu=e.data!==y.a})}_renderDurationLevelsSettings(){const t=L.levels.map(e=>{let s=!1;return this._durationFormat==="time"&&e.level>=6&&this._durationLevels.includes(e.level)&&e.level!==Math.max(...this._durationLevels)&&(s=!0),this._durationLevels.length===1&&this._durationLevels.includes(e.level)&&(s=!0),i.x`<luzmo-menu-item
        value=${e.level}
        ?selected=${this._durationLevels.includes(e.level)}
        ?disabled=${s}
      >
        ${e.label}
      </luzmo-menu-item>`});return i.x` <div class="setting">
      <luzmo-field-label for="duration-levels">
        ${i.msg("Duration levels",{desc:"Label for duration levels setting"})}
      </luzmo-field-label>
      <luzmo-action-button id="trigger" size=${this.size}>
        ${this._durationLevels.length}
        ${this._durationLevels.length===1?"level":"levels"} active
        <span class="duration-angle-down-icon">
          ${i.O2(i.T)}
        </span>
      </luzmo-action-button>
      <luzmo-overlay
        id="duration-levels-overlay"
        trigger="trigger@click"
        type="auto"
        placement="bottom-start"
        type="page"
      >
        <luzmo-popover style="position: relative">
          ${this._renderDurationLevelMenu?i.x` <luzmo-menu
                id="duration-levels"
                size=${this.size}
                selects="multiple"
                .value=${this._durationLevels.join(",")}
                @change=${this._setDurationLevels}
              >
                ${t}
              </luzmo-menu>`:""}
        </luzmo-popover>
      </luzmo-overlay>
    </div>`}_renderDurationFormatSettings(){const t=Object.keys(f).map(e=>e==="time"&&(this._maxDurationLevel??1)<6?"":i.x`<luzmo-action-button value=${e}>
        ${f[e]()}
      </luzmo-action-button>`);return i.x` <div class="setting">
      <luzmo-field-label for="duration-format">
        ${i.msg("Format",{desc:"Label for format setting"})}
      </luzmo-field-label>
      <luzmo-action-group
        emphasized
        id="duration-format"
        size=${this.size}
        compact=""
        .selected=${[this._durationFormat??"short"]}
        selects="single"
        @change=${this._setDurationFormat}
      >
        ${t}
      </luzmo-action-group>
    </div>`}_renderNumericDisplayAsSettings(){const t=Object.keys(v).map(e=>i.x`<luzmo-action-button value=${e}
          >${v[e]}</luzmo-action-button
        >`);return i.x`<div class="setting">
      <luzmo-field-label for="display-as">
        ${i.msg("Display as",{desc:"Label for display as setting for the datetime field"})}
      </luzmo-field-label>
      <luzmo-action-group
        emphasized
        id="display-as"
        size=${this.size}
        compact=""
        .selected=${[this._displayAs]}
        selects="single"
        @change=${this._setNumericDisplayAs}
      >
        ${t}
      </luzmo-action-group>
    </div>`}_renderNumericFormatSettings(){const t=Object.keys(h).map(e=>i.x`<luzmo-menu-item value=${e}>
          ${h[e].label()}
        </luzmo-menu-item>`);return i.x` <div class="setting">
        <luzmo-field-label for="format">
          ${i.msg("Format",{desc:"Label for format setting"})}
        </luzmo-field-label>
        <luzmo-picker
          id="format"
          size=${this.size}
          variant="highlight"
          value=${this._numericFormatGroup??"Auto"}
          @change=${this._setNumericSeparators}
        >
          ${t}
        </luzmo-picker>
      </div>
      <div class="setting">
        <luzmo-field-label for="precision" id="precision-label">
          ${this._displayAs==="scientific"?i.msg("Precision",{desc:"Label for precision setting"}):i.msg("Decimals",{desc:"Label for decimals setting"})}
        </luzmo-field-label>
        <luzmo-number-field
          id="precision"
          min=${this._displayAs==="scientific"?1:0}
          max="22"
          size=${this.size}
          value=${this._precision??(this._displayAs==="scientific"?1:0)}
          @change=${this._setPrecision}
        ></luzmo-number-field>
      </div>`}_renderAggregationSettings(){var s,o;const t=Object.entries(b).map(([a,r])=>i.x`<luzmo-menu-item value=${a}>${r()}</luzmo-menu-item>`),e=[i.x`<luzmo-menu-item value="none">No weight</luzmo-menu-item>`,...this.measureColumns.map(a=>{var m,g,c;const r=((m=a==null?void 0:a.label)==null?void 0:m[this.language??"en"])??((c=a==null?void 0:a.label)==null?void 0:c[(g=Object.keys(a==null?void 0:a.label))==null?void 0:g[0]])??"Untitled";return i.x`<luzmo-menu-item value=${a.id}>
          ${r}
        </luzmo-menu-item>`})];return i.x`<div class="settings-row">
      <div class="setting">
        <luzmo-field-label for="aggregation">
          ${i.msg("Aggregation",{desc:"Label for aggregation setting"})}
        </luzmo-field-label>
        <luzmo-picker
          id="aggregation"
          size=${this.size}
          variant="highlight"
          value=${this._aggregationFunc??(((s=this.slotContent)==null?void 0:s.type)==="numeric"?"sum":"count")}
          @change=${this._setAggregationFunc}
        >
          ${t}
        </luzmo-picker>
      </div>
      ${this._aggregationFunc==="rate"?i.x`<div class="setting">
            <luzmo-field-label for="weighting-column">
              Denominator
            </luzmo-field-label>
            <luzmo-picker
              id="weighting-column"
              size=${this.size}
              variant="highlight"
              value=${((o=this._aggregationWeightColumn)==null?void 0:o.column)??"none"}
              @change=${this._setAggregationWeight}
            >
              ${e}
            </luzmo-picker>
          </div>`:""}
    </div>`}render(){var t;return i.x`<div class="settings-container">
      <div class="settings-row">
      ${this._displayMode==="duration"?this._renderDurationLevelsSettings():this._renderNumericDisplayAsSettings()}
      ${((t=this._durationLevels)==null?void 0:t.length)>1?this._renderDurationFormatSettings():this._renderNumericFormatSettings()}
      </div>
      ${this._renderAggregationSettings()}
      </div>
    </div>`}};n([i.n({type:String,reflect:!0})],exports.LuzmoDisplaySettingsNumeric.prototype,"language",2);n([i.n({type:Object,reflect:!0})],exports.LuzmoDisplaySettingsNumeric.prototype,"slotContent",2);n([i.n({type:Array,reflect:!1})],exports.LuzmoDisplaySettingsNumeric.prototype,"measureColumns",2);n([l.e("#display-as")],exports.LuzmoDisplaySettingsNumeric.prototype,"_displayAsElement",2);n([l.e("#precision")],exports.LuzmoDisplaySettingsNumeric.prototype,"_precisionElement",2);n([l.e("#aggregation")],exports.LuzmoDisplaySettingsNumeric.prototype,"_aggregationElement",2);n([l.e("#weighting-column")],exports.LuzmoDisplaySettingsNumeric.prototype,"_aggregationWeightElement",2);n([l.e("#duration-levels")],exports.LuzmoDisplaySettingsNumeric.prototype,"_durationLevelsElement",2);n([l.e("#duration-format")],exports.LuzmoDisplaySettingsNumeric.prototype,"_durationFormatElement",2);n([l.e("#duration-levels-overlay")],exports.LuzmoDisplaySettingsNumeric.prototype,"_durationLevelsOverlay",2);n([l.r()],exports.LuzmoDisplaySettingsNumeric.prototype,"_renderDurationLevelMenu",2);exports.LuzmoDisplaySettingsNumeric=n([i.localized()],exports.LuzmoDisplaySettingsNumeric);customElements.get("luzmo-display-settings-numeric")||customElements.define("luzmo-display-settings-numeric",exports.LuzmoDisplaySettingsNumeric);
