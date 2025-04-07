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
import { m as a, a as b, e as A, k as L, r as F, t as $, s as S, x as n, O as D, T as N, n as _, l as C } from "./get-css-variable-Cb4e-hdr.js";
import "./index-CAZq2ENs.js";
import "./index-B5MQhJ2m.js";
import { r as E, e as c } from "./index-Dpr9NLmc.js";
import "./index-FQ64BSi7.js";
import "./index-BJg9ht4B.js";
import "./index-BtGo-jJu.js";
import "./index-Dwe6gWt0.js";
import { d as f } from "./decompose-numeric-format-BuZcjH2k.js";
import { a as w } from "./index-D3gj5tVe.js";
const O = ":host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-numeric-gap, var(--display-settings-numeric-gap))}.duration-angle-down-icon{margin-inline-start:var(--luzmo-numeric-duration-levels-dropdown-icon-margin-inline-start, var(--numeric-duration-levels-dropdown-icon-margin-inline-start))}:host{--display-settings-numeric-gap: var(--luzmo-spacing-3);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-2 )}:host([size=s]){--display-settings-numeric-gap: var(--luzmo-spacing-3);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-1 )}:host([size=l]){--display-settings-numeric-gap: var(--luzmo-spacing-4);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-3 )}:host([size=xl]){--display-settings-numeric-gap: var(--luzmo-spacing-5);--numeric-duration-levels-dropdown-icon-margin-inline-start: var( --luzmo-spacing-4 )}", M = {
  sum: () => a("Sum", { desc: "Numeric Aggregation option" }),
  cumulativesum: () => a("Cumulative sum", { desc: "Numeric Aggregation option" }),
  average: () => a("Average", { desc: "Numeric Aggregation option" }),
  weightedaverage: () => a("Weighted average", { desc: "Numeric Aggregation option" }),
  median: () => a("Median", { desc: "Numeric Aggregation option" }),
  count: () => a("Count", { desc: "Numeric Aggregation option" }),
  distinctcount: () => a("Distinct count", { desc: "Numeric Aggregation option" }),
  min: () => a("Minimum", { desc: "Numeric Aggregation option" }),
  max: () => a("Maximum", { desc: "Numeric Aggregation option" }),
  stddev: () => a("Standard deviation", { desc: "Numeric Aggregation option" }),
  rate: () => a("Rate", { desc: "Numeric Aggregation option" })
}, y = {
  general: "123",
  percentage: "%",
  scientific: "SI"
}, z = {
  time: () => a("Time", { desc: "Time format option" }),
  short: () => a("Short", { desc: "Short format option" }),
  long: () => a("Long", { desc: "Long format option" })
}, p = {
  Auto: {
    auto: !0,
    label: () => a("Auto", { desc: "Automatic setting of the option" })
  },
  "1,000.00": {
    auto: !1,
    label: () => "1,000.00",
    thousandSeparator: ",",
    decimalSeparator: "."
  },
  "1.000,00": {
    auto: !1,
    label: () => "1.000,00",
    thousandSeparator: ".",
    decimalSeparator: ","
  },
  "1000.00": { auto: !1, label: () => "1000.00", decimalSeparator: "." },
  "1000,00": { auto: !1, label: () => "1000,00", decimalSeparator: "," }
}, x = {
  levels: [
    { level: 1, label: "years" },
    { level: 2, label: "quarters" },
    { level: 3, label: "months" },
    { level: 4, label: "weeks" },
    { level: 5, label: "days" },
    { level: 6, label: "hours" },
    { level: 7, label: "minutes" },
    { level: 8, label: "seconds" },
    { level: 9, label: "milliseconds" }
  ]
};
var I = Object.defineProperty, T = Object.getOwnPropertyDescriptor, l = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? T(e, i) : e, u = t.length - 1, m; u >= 0; u--)
    (m = t[u]) && (s = (o ? m(e, i, s) : m(s)) || s);
  return o && s && I(e, i, s), s;
};
let r = class extends b(L, {
  validSizes: Object.values(A)
}) {
  constructor() {
    super(...arguments), this.language = "en", this.slotContent = {}, this.measureColumns = [], this._durationLevels = [], this._renderDurationLevelMenu = !1, this._sendEvent = () => {
      const t = { ...this.slotContent };
      t.format = this._format, t.aggregationFunc = this._aggregationFunc, this._aggregationWeightColumn ? t.aggregationWeight = { ...this._aggregationWeightColumn } : this._aggregationFunc === "rate" && (t.aggregationFunc = "average"), this._displayMode === "duration" ? (t.duration = t.duration ?? {}, t.duration.format = this._durationFormat, t.duration.levels = this._durationLevels) : delete t.duration, this.dispatchEvent(
        new CustomEvent("slot-content-changed", {
          bubbles: !0,
          composed: !0,
          cancelable: !0,
          detail: {
            slotContent: t
          }
        })
      );
    };
  }
  static get styles() {
    return [F(O)];
  }
  _parseSavedNumericFormatSettings() {
    var t, e, i, o, s, u, m, g, h, v;
    if (this._displayMode = ((t = this.slotContent) == null ? void 0 : t.subtype) === "duration" ? ((o = (i = (e = this.slotContent) == null ? void 0 : e.duration) == null ? void 0 : i.levels) == null ? void 0 : o.length) === 1 ? "numeric" : "duration" : "numeric", this._durationFormat = ((u = (s = this.slotContent) == null ? void 0 : s.duration) == null ? void 0 : u.format) ?? "short", this._durationLevels = ((g = (m = this.slotContent) == null ? void 0 : m.duration) == null ? void 0 : g.levels) ?? [1], this._displayMode === "duration")
      this._precision = 2, this._commaDecimals = !1, this._thousandSeparator = !1;
    else {
      this._format = ((h = this.slotContent) == null ? void 0 : h.format) ?? ".0f";
      const d = f(this._format ?? ".0f");
      this._isAuto = ((v = d.typeFormat) == null ? void 0 : v.includes("a")) ?? !1, ["%", "a%", "y", "ay"].includes(d.typeFormat) ? this._displayAs = "percentage" : ["s", "as", "w", "aw"].includes(d.typeFormat) ? this._displayAs = "scientific" : this._displayAs = "general", this._precision = d.precision ? Number.parseInt(d.precision.replace(".", ""), 10) : this._displayAs === "scientific" ? 1 : 0, this._commaDecimals = ["z", "az", "y", "ay", "w", "aw"].includes(
        d.typeFormat
      ), this._thousandSeparator = d.comma === ",", this._isAuto ? this._numericFormatGroup = "Auto" : this._commaDecimals && this._thousandSeparator ? this._numericFormatGroup = "1.000,00" : !this._commaDecimals && this._thousandSeparator ? this._numericFormatGroup = "1,000.00" : this._commaDecimals && !this._thousandSeparator ? this._numericFormatGroup = "1000,00" : !this._commaDecimals && !this._thousandSeparator && (this._numericFormatGroup = "1000.00");
    }
  }
  _setNumericDisplayAs() {
    var t, e;
    this._displayAs = ((e = (t = this._displayAsElement) == null ? void 0 : t.selected) == null ? void 0 : e[0]) ?? "general", this._displayAs === "scientific" && (this._precision = Math.max(this._precision ?? 0, 1), this._thousandSeparator = !1), this._setNumericFormat(), this._sendEvent(), this.requestUpdate();
  }
  _setNumericSeparators(t) {
    const e = p[(t == null ? void 0 : t.detail) ?? "Auto"];
    this._thousandSeparator = [",", "."].includes(
      (e == null ? void 0 : e.thousandSeparator) ?? ""
    ), this._commaDecimals = (e == null ? void 0 : e.decimalSeparator) === ",", this._isAuto = e == null ? void 0 : e.auto, this._setNumericFormat(), this._sendEvent();
  }
  _setPrecision() {
    this._precision = this._precisionElement.value, this._setNumericFormat(), this._sendEvent();
  }
  _setNumericFormat() {
    var i;
    let t = "f";
    const e = this.slotContent.subtype === "duration" ? this._durationLevels && ((i = this._durationLevels) == null ? void 0 : i.length) === 1 ? "numeric" : "duration" : "numeric";
    this._maxDurationLevel = Math.min(...this._durationLevels), e === "duration" ? (!["time", "short", "long"].includes(this._durationFormat ?? "") || this._maxDurationLevel < 6 && this._durationFormat === "time") && (this._durationFormat = "short") : (this._displayAs === "general" && this._commaDecimals ? t = "z" : this._displayAs === "percentage" && this._commaDecimals ? t = "y" : this._displayAs === "scientific" && this._commaDecimals ? t = "w" : this._displayAs === "percentage" ? t = "%" : this._displayAs === "scientific" && (t = "s"), this._format = (this._thousandSeparator || this._isAuto ? "," : "") + "." + this._precision + (this._isAuto ? "a" : "") + t);
  }
  _setAggregationFunc() {
    const t = this._aggregationFunc, e = this.slotContent.format;
    if (this._aggregationElement.value !== t) {
      if (this._aggregationFunc = this._aggregationElement.value, t === "rate") {
        const i = f(e), o = ["%", "y", "a%", "ay"].includes(
          i.typeFormat
        );
        this.slotContent.subtype === "currency" && o && this._setNumericDisplayAs();
      }
      this._sendEvent(), (this._aggregationFunc === "rate" || t === "rate") && this.requestUpdate();
    }
  }
  _setAggregationWeight() {
    const t = this._aggregationWeightElement.value;
    if (t === "none")
      this._aggregationWeightColumn = void 0;
    else {
      const e = this.measureColumns.find(
        (i) => i.columnId === t
      );
      this._aggregationWeightColumn = {
        column: e == null ? void 0 : e.columnId,
        set: e == null ? void 0 : e.datasetId,
        columnSubType: e == null ? void 0 : e.subtype
      };
    }
    this._sendEvent();
  }
  _setDurationLevels() {
    const t = this._durationLevels, e = this._durationLevelsElement.value.split(",").filter((i) => i !== "").map((i) => Number.parseInt(i, 10));
    this._durationLevels = ((e == null ? void 0 : e.length) ?? 0) >= 1 ? e : t, this._maxDurationLevel = Math.min(...this._durationLevels), this._fillTimeDurationLevels(), this._setNumericFormat(), this._sendEvent(), this.requestUpdate();
  }
  _setDurationFormat() {
    var t, e;
    this._durationFormat = (e = (t = this._durationFormatElement) == null ? void 0 : t.selected) == null ? void 0 : e[0], this._fillTimeDurationLevels(), this._setNumericFormat(), this._sendEvent(), this.requestUpdate();
  }
  _fillTimeDurationLevels() {
    if (this._durationFormat === "time") {
      const t = this._durationLevels.sort().at(-1);
      if ([7, 8, 9].includes(t)) {
        const e = {
          lev7: [6],
          lev8: [6, 7],
          lev9: [6, 7, 8]
        };
        for (const i of e["lev" + t])
          this._durationLevels.includes(i) || this._durationLevels.push(i);
        this._durationLevels = [...this._durationLevels].sort();
      }
    }
  }
  // TODO set in upper level the same format for all measures remove this comment once implemented
  /*   private setMeasureNumericFormat(
      slot: any,
      changedContent: any,
      changedFormatGroup: string
    ): void {
      if (
        slot.name === 'measure' &&
        changedContent.type === 'numeric' &&
        changedContent.subtype !== 'duration'
      ) {
        slot.content.forEach((content: any) => {
          if (
            content.format !== changedContent.format &&
            content.datasetId === changedContent.datasetId &&
            ((content.columnId && content.columnId === changedContent.columnId) ||
              (content.formula && content.formula === changedContent.formula))
          ) {
            let contentNumericFormatGroup = 'general';
            const contentDecomp = decomposeNumericFormat(content.format);
  
            if (['%', 'a%', 'y', 'ay'].includes(contentDecomp.typeFormat)) {
              contentNumericFormatGroup = 'percentage';
            } else if (
              ['s', 'as', 'w', 'aw'].includes(contentDecomp.typeFormat)
            ) {
              contentNumericFormatGroup = 'scientific';
            }
  
            if (contentNumericFormatGroup === changedFormatGroup) {
              content.format = changedContent.format;
            }
          }
        });
      }
    } */
  willUpdate(t) {
    var e, i, o;
    t.has("slotContent") && (this._parseSavedNumericFormatSettings(), this._aggregationFunc = ((e = this.slotContent) == null ? void 0 : e.aggregationFunc) ?? ((i = this.slotContent) == null ? void 0 : i.type) === "numeric" ? "sum" : "count", this._aggregationWeightColumn = (o = this.slotContent) == null ? void 0 : o.aggregationWeight), t.has("language") && ([...$].includes(this.language ?? "en") || this.language === "en") && (S(this.language), this.requestUpdate());
  }
  firstUpdated() {
    var t;
    (t = this.slotContent) != null && t.duration && this._durationLevelsOverlay.addEventListener(
      "slottable-request",
      (e) => {
        this._renderDurationLevelMenu = e.data !== w;
      }
    );
  }
  _renderDurationLevelsSettings() {
    const t = x.levels.map((e) => {
      let i = !1;
      return this._durationFormat === "time" && e.level >= 6 && this._durationLevels.includes(e.level) && e.level !== Math.max(...this._durationLevels) && (i = !0), this._durationLevels.length === 1 && this._durationLevels.includes(e.level) && (i = !0), n`<luzmo-menu-item
        value=${e.level}
        ?selected=${this._durationLevels.includes(e.level)}
        ?disabled=${i}
      >
        ${e.label}
      </luzmo-menu-item>`;
    });
    return n` <div class="setting">
      <luzmo-field-label for="duration-levels">
        ${a("Duration levels", { desc: "Label for duration levels setting" })}
      </luzmo-field-label>
      <luzmo-action-button id="trigger" size=${this.size}>
        ${this._durationLevels.length}
        ${this._durationLevels.length === 1 ? "level" : "levels"} active
        <span class="duration-angle-down-icon">
          ${D(N)}
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
          ${this._renderDurationLevelMenu ? n` <luzmo-menu
                id="duration-levels"
                size=${this.size}
                selects="multiple"
                .value=${this._durationLevels.join(",")}
                @change=${this._setDurationLevels}
              >
                ${t}
              </luzmo-menu>` : ""}
        </luzmo-popover>
      </luzmo-overlay>
    </div>`;
  }
  _renderDurationFormatSettings() {
    const t = Object.keys(z).map((e) => e === "time" && (this._maxDurationLevel ?? 1) < 6 ? "" : n`<luzmo-action-button value=${e}>
        ${z[e]()}
      </luzmo-action-button>`);
    return n` <div class="setting">
      <luzmo-field-label for="duration-format">
        ${a("Format", { desc: "Label for format setting" })}
      </luzmo-field-label>
      <luzmo-action-group
        emphasized
        id="duration-format"
        size=${this.size}
        compact=""
        .selected=${[this._durationFormat ?? "short"]}
        selects="single"
        @change=${this._setDurationFormat}
      >
        ${t}
      </luzmo-action-group>
    </div>`;
  }
  _renderNumericDisplayAsSettings() {
    const t = Object.keys(y).map(
      (e) => n`<luzmo-action-button value=${e}
          >${y[e]}</luzmo-action-button
        >`
    );
    return n`<div class="setting">
      <luzmo-field-label for="display-as">
        ${a("Display as", {
      desc: "Label for display as setting for the datetime field"
    })}
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
    </div>`;
  }
  _renderNumericFormatSettings() {
    const t = Object.keys(p).map(
      (e) => n`<luzmo-menu-item value=${e}>
          ${p[e].label()}
        </luzmo-menu-item>`
    );
    return n` <div class="setting">
        <luzmo-field-label for="format">
          ${a("Format", { desc: "Label for format setting" })}
        </luzmo-field-label>
        <luzmo-picker
          id="format"
          size=${this.size}
          variant="highlight"
          value=${this._numericFormatGroup ?? "Auto"}
          @change=${this._setNumericSeparators}
        >
          ${t}
        </luzmo-picker>
      </div>
      <div class="setting">
        <luzmo-field-label for="precision" id="precision-label">
          ${this._displayAs === "scientific" ? a("Precision", {
      desc: "Label for precision setting"
    }) : a("Decimals", {
      desc: "Label for decimals setting"
    })}
        </luzmo-field-label>
        <luzmo-number-field
          id="precision"
          min=${this._displayAs === "scientific" ? 1 : 0}
          max="22"
          size=${this.size}
          value=${this._precision ?? (this._displayAs === "scientific" ? 1 : 0)}
          @change=${this._setPrecision}
        ></luzmo-number-field>
      </div>`;
  }
  _renderAggregationSettings() {
    var i, o;
    const t = Object.entries(M).map(
      ([s, u]) => n`<luzmo-menu-item value=${s}>${u()}</luzmo-menu-item>`
    ), e = [
      n`<luzmo-menu-item value="none">No weight</luzmo-menu-item>`,
      ...this.measureColumns.map((s) => {
        var m, g, h;
        const u = ((m = s == null ? void 0 : s.label) == null ? void 0 : m[this.language ?? "en"]) ?? ((h = s == null ? void 0 : s.label) == null ? void 0 : h[(g = Object.keys(s == null ? void 0 : s.label)) == null ? void 0 : g[0]]) ?? "Untitled";
        return n`<luzmo-menu-item value=${s.id}>
          ${u}
        </luzmo-menu-item>`;
      })
    ];
    return n`<div class="settings-row">
      <div class="setting">
        <luzmo-field-label for="aggregation">
          ${a("Aggregation", { desc: "Label for aggregation setting" })}
        </luzmo-field-label>
        <luzmo-picker
          id="aggregation"
          size=${this.size}
          variant="highlight"
          value=${this._aggregationFunc ?? (((i = this.slotContent) == null ? void 0 : i.type) === "numeric" ? "sum" : "count")}
          @change=${this._setAggregationFunc}
        >
          ${t}
        </luzmo-picker>
      </div>
      ${this._aggregationFunc === "rate" ? n`<div class="setting">
            <luzmo-field-label for="weighting-column">
              Denominator
            </luzmo-field-label>
            <luzmo-picker
              id="weighting-column"
              size=${this.size}
              variant="highlight"
              value=${((o = this._aggregationWeightColumn) == null ? void 0 : o.column) ?? "none"}
              @change=${this._setAggregationWeight}
            >
              ${e}
            </luzmo-picker>
          </div>` : ""}
    </div>`;
  }
  render() {
    var t;
    return n`<div class="settings-container">
      <div class="settings-row">
      ${this._displayMode === "duration" ? this._renderDurationLevelsSettings() : this._renderNumericDisplayAsSettings()}
      ${((t = this._durationLevels) == null ? void 0 : t.length) > 1 ? this._renderDurationFormatSettings() : this._renderNumericFormatSettings()}
      </div>
      ${this._renderAggregationSettings()}
      </div>
    </div>`;
  }
};
l([
  _({ type: String, reflect: !0 })
], r.prototype, "language", 2);
l([
  _({ type: Object, reflect: !0 })
], r.prototype, "slotContent", 2);
l([
  _({ type: Array, reflect: !1 })
], r.prototype, "measureColumns", 2);
l([
  c("#display-as")
], r.prototype, "_displayAsElement", 2);
l([
  c("#precision")
], r.prototype, "_precisionElement", 2);
l([
  c("#aggregation")
], r.prototype, "_aggregationElement", 2);
l([
  c("#weighting-column")
], r.prototype, "_aggregationWeightElement", 2);
l([
  c("#duration-levels")
], r.prototype, "_durationLevelsElement", 2);
l([
  c("#duration-format")
], r.prototype, "_durationFormatElement", 2);
l([
  c("#duration-levels-overlay")
], r.prototype, "_durationLevelsOverlay", 2);
l([
  E()
], r.prototype, "_renderDurationLevelMenu", 2);
r = l([
  C()
], r);
customElements.get("luzmo-display-settings-numeric") || customElements.define(
  "luzmo-display-settings-numeric",
  r
);
export {
  r as LuzmoDisplaySettingsNumeric
};
