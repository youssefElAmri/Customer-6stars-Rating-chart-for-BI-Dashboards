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
import { h as S, e as m } from "./index-Dpr9NLmc.js";
import "./index-CAZq2ENs.js";
import "./index-B5MQhJ2m.js";
import { m as o, a as k, e as F, k as $, r as b, t as w, s as A, x as s, C as p, f as _, n as d, l as L } from "./get-css-variable-Cb4e-hdr.js";
import "./index-BJg9ht4B.js";
import "./index-BtGo-jJu.js";
import { S as f, f as c, D as v } from "./formatter-CQDms6fU.js";
import { a as D, b as g, W as y } from "./periods.const-CskvMxlU.js";
const z = {
  "~": () => o("Auto", { desc: "Automatic setting of the option" }),
  "/": () => "/",
  "-": () => "-",
  ".": () => "."
}, E = ":host{font-family:var(--luzmo-display-settings-datetime-font-family, var(--luzmo-font-family))}:host .settings-container{display:flex;flex-direction:column;gap:var(--luzmo-spacing-2)}:host .settings-row{display:flex;justify-content:flex-start;align-items:center;gap:var(--luzmo-display-settings-datetime-gap, var(--display-settings-datetime-gap))}:host .example-container{line-height:var(--luzmo-display-settings-datetime-example-height, var(--display-settings-datetime-example-height));font-size:var(--luzmo-display-settings-datetime-example-font-size, var(--display-settings-datetime-example-font-size));color:var(--luzmo-display-settings-datetime-example-color, var(--display-settings-datetime-example-color))}:host .example-container .example-label{font-weight:var(--luzmo-display-settings-datetime-example-label-font-weight, var(--display-settings-datetime-example-label-font-weight));color:var(--luzmo-display-settings-datetime-example-label-color, var(--display-settings-datetime-example-label-color))}:host .example-container .example-language{text-transform:uppercase;color:var(--luzmo-display-settings-datetime-example-language-color, var(--display-settings-datetime-example-language-color))}:host{--display-settings-datetime-example-font-size: var(--luzmo-font-size);--display-settings-datetime-example-color: var(--luzmo-font-color);--display-settings-datetime-example-label-font-weight: bold;--display-settings-datetime-example-label-color: var(--luzmo-primary);--display-settings-datetime-example-language-color: var(--luzmo-primary)}:host{--display-settings-datetime-gap: var(--luzmo-spacing-3);--display-settings-datetime-example-height: var(--luzmo-component-height);--display-settings-datetime-example-font-size: var(--luzmo-font-size-s)}:host([size=s]){--display-settings-datetime-gap: var(--luzmo-spacing-3);--display-settings-datetime-example-height: var(--luzmo-component-height-s);--display-settings-datetime-example-font-size: var(--luzmo-font-size-s)}:host([size=l]){--display-settings-datetime-gap: var(--luzmo-spacing-4);--display-settings-datetime-example-height: var(--luzmo-component-height-l);--display-settings-datetime-example-font-size: var(--luzmo-font-size)}:host([size=xl]){--display-settings-datetime-gap: var(--luzmo-spacing-5);--display-settings-datetime-example-height: var(--luzmo-component-height-xl);--display-settings-datetime-example-font-size: var(--luzmo-font-size-l)}";
var x = Object.defineProperty, M = Object.getOwnPropertyDescriptor, n = (t, e, i, a) => {
  for (var l = a > 1 ? void 0 : a ? M(e, i) : e, h = t.length - 1, u; h >= 0; h--)
    (u = t[h]) && (l = (a ? u(e, i, l) : u(l)) || l);
  return a && l && x(e, i, l), l;
};
let r = class extends k($, {
  validSizes: Object.values(F)
}) {
  constructor() {
    super(...arguments), this._loadLocaleFormatsConfig = new S(this, {
      task: async ([t]) => {
        if (t && t !== this._contentLanguageLoaded) {
          const e = /* @__PURE__ */ Object.assign({
            "../../utils/formatter/formats/cs.ts": () => import("./cs-DVZ0Tapy.js"),
            "../../utils/formatter/formats/da.ts": () => import("./da-DHy05oSR.js"),
            "../../utils/formatter/formats/de.ts": () => import("./de-iM39JlAt.js"),
            "../../utils/formatter/formats/en-GB.ts": () => import("./en-GB-BtLbN8o_.js"),
            "../../utils/formatter/formats/en-US.ts": () => Promise.resolve().then(() => N),
            "../../utils/formatter/formats/en.ts": () => Promise.resolve().then(() => C),
            "../../utils/formatter/formats/es.ts": () => import("./es-KhTq4jX8.js"),
            "../../utils/formatter/formats/fi.ts": () => import("./fi-Dh_ebgpe.js"),
            "../../utils/formatter/formats/fr.ts": () => import("./fr-CU727YF1.js"),
            "../../utils/formatter/formats/he.ts": () => import("./he-Au3xg6lR.js"),
            "../../utils/formatter/formats/hu.ts": () => import("./hu-DNJ-P_MW.js"),
            "../../utils/formatter/formats/it.ts": () => import("./it-Bh5U73z6.js"),
            "../../utils/formatter/formats/ja.ts": () => import("./ja-CCcHUL61.js"),
            "../../utils/formatter/formats/ko.ts": () => import("./ko-DhapsZMM.js"),
            "../../utils/formatter/formats/mk.ts": () => import("./mk-B9HPSuKa.js"),
            "../../utils/formatter/formats/nl.ts": () => import("./nl-BwSt5Bf4.js"),
            "../../utils/formatter/formats/no.ts": () => import("./no-D-DofYnx.js"),
            "../../utils/formatter/formats/pl.ts": () => import("./pl-D_L_0Boq.js"),
            "../../utils/formatter/formats/pt.ts": () => import("./pt-B0BBS5VB.js"),
            "../../utils/formatter/formats/ru.ts": () => import("./ru-Vo-m3O_2.js"),
            "../../utils/formatter/formats/sv.ts": () => import("./sv-CiozMaev.js"),
            "../../utils/formatter/formats/tr.ts": () => import("./tr-D_D4i5iv.js"),
            "../../utils/formatter/formats/zh-CN.ts": () => import("./zh-CN-wsl7eFSd.js"),
            "../../utils/formatter/formats/zh-TW.ts": () => import("./zh-TW-wsl7eFSd.js")
          });
          if (e[`../../utils/formatter/formats/${t}.ts`]) {
            const i = await e[`../../utils/formatter/formats/${t}.ts`]();
            this._localeFormats = (i == null ? void 0 : i.default) ?? {};
          }
          return this._contentLanguageLoaded = t, this._localeFormats;
        }
      },
      args: () => [this.contentLanguage]
    }), this.language = "en", this.contentLanguage = "en", this.size = "m", this.slotContent = {}, this._dateLevel = 5, this._displayAs = "default", this._weekStart = "monday", this._weekDayAndMonthInYearFormat = "long", this._dateFormat = "auto", this._dateSeparator = "~", this._sendEvent = () => {
      this._calculateSlotContent(), this.dispatchEvent(
        new CustomEvent("slot-content-changed", {
          bubbles: !0,
          composed: !0,
          cancelable: !0,
          detail: {
            slotContent: this._currentSlotContent
          }
        })
      );
    };
  }
  static get styles() {
    return [b(E)];
  }
  _parseSlotContent() {
    var t, e;
    this._dateLevel = this.slotContent.level ?? ((t = this.slotContent) == null ? void 0 : t.lowestLevel) ?? 5, this._displayAs = ((e = this.slotContent) == null ? void 0 : e.datetimeDisplayMode) ?? "default", this._displayAs === "weekday_number" && (this._displayAs = "day_in_week", this._weekDayAndMonthInYearFormat = "number"), this._displayAs === "weekday_name" && (this._displayAs = "day_in_week"), this._displayAs === "month_number" && (this._displayAs = "month_in_year", this._weekDayAndMonthInYearFormat = "number"), this._displayAs === "month_name" && (this._displayAs = "month_in_year");
  }
  _calculateFormat() {
    var i;
    let t;
    const e = ((i = this._localeFormats) == null ? void 0 : i.smartDateFormats) ?? f;
    this._monthName ? (t = e.filter(
      (a) => a.monthType === "name" && a.longText === (this._monthNameFormat === "long") && a.weekday === this._weekDay
    ), t.length > 0 ? this._format = t[0].key : (this._weekDayAndMonthInYearFormat = "short", this._weekDay = !0, this._format = "%a %e %B %Y")) : (t = this._dateLevel && this._dateLevel === 4 ? e.filter(
      (a) => a.monthType === "number" && a.mmdd === (this._weekFormat === "mmdd" ? !0 : this._weekFormat === "ddmm" ? !1 : null) && a.separator === this._dateSeparator
    ) : e.filter(
      (a) => a.monthType === "number" && a.mmdd === (this._dateFormat === "mmdd" ? !0 : this._dateFormat === "ddmm" ? !1 : null) && a.separator === this._dateSeparator
    ), this._dateFormat === "auto" && this._dateLevel && this._dateLevel !== 4 ? this._format = "%amd" + this._dateSeparator + "%Y" : t.length > 0 ? this._format = t[0].key : (this._dateFormat = "ddmm", this._dateSeparator = "/", this._format = "%d/%m/%Y")), this._dateLevel && this._dateLevel > 5 && (this._format += this._24hFormat ? " %H:%M:%S.%L" : " %I:%M:%S.%L %p");
  }
  _setWeekStartsOn() {
    this._weekStart = this._weekStartElement.value, this._sendEvent(), this.requestUpdate();
  }
  _setDisplayAs() {
    this._displayAs = this._displayAsElement.value, this._sendEvent(), this.requestUpdate();
  }
  _setWeekdayAndMonthInYearFormat() {
    var t;
    this._weekDayAndMonthInYearFormat = ((t = this._weekDayAndMonthInYearFormatElement.selected) == null ? void 0 : t[0]) ?? "long", this._sendEvent(), this.requestUpdate();
  }
  _setMonthNameFormat() {
    var t;
    this._monthNameFormat = (t = this._monthNameFormatElement.selected) == null ? void 0 : t[0], this._sendEvent(), this.requestUpdate();
  }
  _setMonthName() {
    this._monthName = this._monthNameElement.selected, this._sendEvent(), this.requestUpdate();
  }
  _setWeekFormat() {
    var t;
    this._weekFormat = (t = this._weekFormatElement.selected) == null ? void 0 : t[0], this._sendEvent(), this.requestUpdate();
  }
  _setDateFormat() {
    this._dateFormat = this._dateFormatElement.value, this._sendEvent(), this.requestUpdate();
  }
  _setDateSeparator() {
    this._dateSeparator = this._dateSeparatorElement.value, this._sendEvent(), this.requestUpdate();
  }
  _set24hFormat() {
    this._24hFormat = this._format24hElement.selected, this._sendEvent(), this.requestUpdate();
  }
  _setWeekday() {
    this._weekDay = this._weekDayElement.selected, this._sendEvent(), this.requestUpdate();
  }
  _calculateSlotContent() {
    this._currentSlotContent = { ...this.slotContent }, this._calculateFormat(), this._currentSlotContent.format = this._format, this._displayAs === "default" ? delete this._currentSlotContent.datetimeDisplayMode : (this._currentSlotContent.datetimeDisplayMode = this._displayAs, this._displayAs === "week_in_year" ? this._currentSlotContent.datetimeDisplayMode = this._weekDayAndMonthInYearFormat === "number" ? "week_number" : "week_name" : this._displayAs === "month_in_year" ? this._currentSlotContent.datetimeDisplayMode = this._weekDayAndMonthInYearFormat === "number" ? "month_number" : "month_name" : this._displayAs === "day_in_week" && (this._currentSlotContent.datetimeDisplayMode = this._weekDayAndMonthInYearFormat === "number" ? "weekday_number" : "weekday_name", this._currentSlotContent.weekStart = this._weekStart), this._weekDayAndMonthInYearFormat && (this._dateLevel === 3 ? this._currentSlotContent.monthNameFormat = this._weekDayAndMonthInYearFormat : this._dateLevel === 5 && (this._currentSlotContent.weekDayNameFormat = this._weekDayAndMonthInYearFormat)));
  }
  willUpdate(t) {
    t.has("slotContent") && (this._parseSlotContent(), this._calculateSlotContent()), t.has("language") && ([...w].includes(this.language) || this.language === "en") && (A(this.language), this.requestUpdate());
  }
  _renderDisplaySettings() {
    var e, i;
    const t = (i = (e = D) == null ? void 0 : e[`level${this._dateLevel ?? 0}`]) == null ? void 0 : i.map(
      (a) => s`<luzmo-menu-item value=${a.key}>
          ${a.i18n()}
        </luzmo-menu-item>`
    );
    return s`<div class="setting">
      <luzmo-field-label for="display-as"
        >${o("Display", {
      desc: "Label for display setting"
    })}</luzmo-field-label
      >
      <luzmo-picker
        id="display-as"
        size=${this.size}
        variant="highlight"
        value=${this._displayAs ?? "default"}
        @change=${this._setDisplayAs}
      >
        ${t}
      </luzmo-picker>
    </div>`;
  }
  _renderWeekDayAndMonthNameFormatSettings() {
    const t = Object.keys(
      g
    ).map((e) => s`<luzmo-action-button value=${e}>
        ${g[e]()}
      </luzmo-action-button>`);
    return s` <div class="setting">
      <luzmo-field-label for="weekday-and-month-in-year-format"
        >${o("Format", {
      desc: "Label for format setting"
    })}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="weekday-and-month-in-year-format"
        size=${this.size}
        compact
        .selected=${[this._weekDayAndMonthInYearFormat ?? "short"]}
        selects="single"
        @change=${this._setWeekdayAndMonthInYearFormat}
      >
        ${t}
      </luzmo-action-group>
    </div>`;
  }
  _renderMonthNameFormatSettings() {
    return s` <div class="setting">
      <luzmo-field-label for="month-name-format"
        >${o("Format", {
      desc: "Label for format setting"
    })}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="month-name-format"
        size=${this.size}
        compact
        .selected=${[this._monthNameFormat ?? "long"]}
        selects="single"
        @change=${this._setMonthNameFormat}
      >
        <luzmo-action-button value="short">
          ${o("Short", { desc: "Short format option" })}
        </luzmo-action-button>
        <luzmo-action-button value="long">
          ${o("Long", { desc: "Long format option" })}
        </luzmo-action-button>
      </luzmo-action-group>
    </div>`;
  }
  _renderWeekFormatSettings() {
    var a;
    const t = ((a = this._localeFormats) == null ? void 0 : a.smartDateFormats) ?? f, e = t.find(
      (l) => l.mmdd === !0 && l.separator === this._dateSeparator && l.monthType === "number"
    ), i = t.find(
      (l) => l.mmdd === !1 && l.separator === this._dateSeparator && l.monthType === "number"
    );
    return s` <div class="setting">
      <luzmo-field-label for="week-format"
        >${o("Format", {
      desc: "Label for format setting"
    })}</luzmo-field-label
      >
      <luzmo-action-group
        emphasized
        id="week-format"
        size=${this.size}
        compact
        .selected=${[this._weekFormat ?? "ddmm"]}
        selects="single"
        @change=${this._setWeekFormat}
      >
        <luzmo-action-button value="ddmm">
          ${c(
      {
        ...this._currentSlotContent,
        type: "datetime",
        format: i == null ? void 0 : i.key
      },
      {
        localFormats: this._localeFormats,
        level: this._dateLevel
      }
    )(/* @__PURE__ */ new Date())}
        </luzmo-action-button>
        <luzmo-action-button value="mmdd"
          >${c(
      {
        ...this._currentSlotContent,
        type: "datetime",
        format: e == null ? void 0 : e.key
      },
      {
        localFormats: this._localeFormats,
        level: this._dateLevel
      }
    )(/* @__PURE__ */ new Date())}</luzmo-action-button
        >
      </luzmo-action-group>
    </div>`;
  }
  _renderWeekStartsOnSettings() {
    const t = Object.keys(y).map(
      (e) => s`<luzmo-menu-item value=${e}>
          ${y[e]()}
        </luzmo-menu-item>`
    );
    return s`<div class="setting">
      <luzmo-field-label for="week-start"
        >${o("Week starts on", {
      desc: "Label for week start setting"
    })}</luzmo-field-label
      >
      <luzmo-picker
        id="week-start"
        size=${this.size}
        variant="highlight"
        value=${this._weekStart ?? "Auto"}
        @change=${this._setWeekStartsOn}
      >
        ${t}
      </luzmo-picker>
    </div>`;
  }
  _renderMonthNameSettings() {
    return s`<div class="settings-">
      <luzmo-field-label for="month-name"
        >${o("Month", { desc: "Month format setting" })}</luzmo-field-label
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
          .icon=${this._monthName ? p : _}
        ></luzmo-icon>
        ${o("Name")}
      </luzmo-action-button>
    </div>`;
  }
  _renderDateFormatSettings() {
    const t = this._dateSeparator === "~" ? "/" : this._dateSeparator;
    return s`<div class="setting">
      <luzmo-field-label for="date-format"
        >${o("Format", {
      desc: "Label for format setting"
    })}</luzmo-field-label
      >
      <luzmo-picker
        id="date-format"
        size=${this.size}
        variant="highlight"
        value=${this._dateFormat ?? "Auto"}
        @change=${this._setDateFormat}
      >
        <luzmo-menu-item value="auto">
          ${o("Auto", { desc: "Automatic setting of the option" })}
        </luzmo-menu-item>
        <luzmo-menu-item value="mmdd">12${t}31</luzmo-menu-item>
        <luzmo-menu-item value="ddmm">31${t}12</luzmo-menu-item>
      </luzmo-picker>
    </div>`;
  }
  _renderSeparatorSettings() {
    const t = Object.keys(z).map(
      (e) => s`<luzmo-menu-item value=${e}>
          ${z[e]()}
        </luzmo-menu-item>`
    );
    return s`<div class="setting">
      <luzmo-field-label for="date-separator"
        >${o("Separator", {
      desc: "Label for date separator setting"
    })}</luzmo-field-label
      >
      <luzmo-picker
        id="date-separator"
        size=${this.size}
        variant="highlight"
        value=${this._dateSeparator ?? "~"}
        @change=${this._setDateSeparator}
      >
        ${t}
      </luzmo-picker>
    </div>`;
  }
  _render24hFormatSettings() {
    return s`<div class="settings-">
      <luzmo-field-label for="format-24h"
        >${o("24h", {
      desc: "Label for 24h format setting"
    })}</luzmo-field-label
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
          .icon=${this._24hFormat ? p : _}
        ></luzmo-icon>
      </luzmo-action-button>
    </div>`;
  }
  _renderWeekdaySettings() {
    return s`<div class="settings-">
      <luzmo-field-label for="weekday"
        >${o("Weekday", {
      desc: "Label for weekday setting"
    })}</luzmo-field-label
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
          .icon=${this._weekDay ? p : _}
        ></luzmo-icon>
        ${o("Show")}
      </luzmo-action-button>
    </div>`;
  }
  _renderExampleFormat() {
    return s`<span class="example">
        ${c(
      {
        ...this._currentSlotContent,
        type: "datetime"
      },
      {
        localFormats: this._localeFormats,
        level: this._dateLevel
      }
    )(!this._displayAs || this._displayAs === "default" ? /* @__PURE__ */ new Date() : 1)}
      </span>
      ${(this._dateSeparator === "~" || this._dateFormat === "auto") && !this._monthName ? s`<span class="example-language">
            (${this.contentLanguage})
          </span>` : ""}`;
  }
  _renderAllSettings() {
    return s`<div class="settings-container">
      ${this._dateLevel && ![1, 9].includes(this._dateLevel) ? s` <div class="settings-row">
            ${this._renderDisplaySettings()}
            ${this._dateLevel && this._dateLevel >= 5 && this._displayAs === "day_in_week" ? this._renderWeekStartsOnSettings() : ""}
          </div>` : ""}
      ${["month_in_year", "day_in_week"].includes(this._displayAs ?? "") ? s` <div class="settings-row">
            ${this._renderWeekDayAndMonthNameFormatSettings()}
          </div>` : ""}
      ${this._dateLevel && this._dateLevel > 1 && this._displayAs === "default" ? s` <div class="settings-row">
            ${this._dateLevel && this._dateLevel !== 4 && this._dateLevel !== 2 ? this._renderMonthNameSettings() : ""}
            ${this._dateLevel && this._dateLevel !== 4 && this._dateLevel > 2 && this._monthName ? this._renderMonthNameFormatSettings() : ""}
            ${this._dateLevel && this._dateLevel === 4 && !this._monthName ? this._renderWeekFormatSettings() : ""}
            ${this._dateLevel && this._dateLevel >= 5 && !this._monthName ? this._renderDateFormatSettings() : ""}
            ${this._dateLevel && this._dateLevel > 1 && !this._monthName ? this._renderSeparatorSettings() : ""}
            ${this._dateLevel && this._dateLevel >= 5 && this._monthName ? this._renderWeekdaySettings() : ""}
            ${this._dateLevel && this._dateLevel > 5 ? this._render24hFormatSettings() : ""}
          </div>` : ""}
      <div class="settings-row">
        <div class="example-container">
          <span class="example-label"
            >${o("Example:", { desc: "Label for example format" })}</span
          >
          ${this._renderExampleFormat()}
        </div>
      </div>
    </div>`;
  }
  render() {
    return this._loadLocaleFormatsConfig.render({
      pending: () => s`<luzmo-progress-circle
          indeterminate
          .size=${this.size}
        ></luzmo-progress-circle>`,
      complete: () => this._renderAllSettings(),
      error: () => this._renderAllSettings()
    });
  }
};
n([
  d({ type: String })
], r.prototype, "language", 2);
n([
  d({ type: String })
], r.prototype, "contentLanguage", 2);
n([
  d({ type: String })
], r.prototype, "size", 2);
n([
  d({ type: Object, reflect: !1 })
], r.prototype, "slotContent", 2);
n([
  m("#display-as")
], r.prototype, "_displayAsElement", 2);
n([
  m("#week-start")
], r.prototype, "_weekStartElement", 2);
n([
  m("#weekday-and-month-in-year-format")
], r.prototype, "_weekDayAndMonthInYearFormatElement", 2);
n([
  m("#month-name-format")
], r.prototype, "_monthNameFormatElement", 2);
n([
  m("#month-name")
], r.prototype, "_monthNameElement", 2);
n([
  m("#week-format")
], r.prototype, "_weekFormatElement", 2);
n([
  m("#date-format")
], r.prototype, "_dateFormatElement", 2);
n([
  m("#date-separator")
], r.prototype, "_dateSeparatorElement", 2);
n([
  m("#weekday")
], r.prototype, "_weekDayElement", 2);
n([
  m("#format-24h")
], r.prototype, "_format24hElement", 2);
r = n([
  L()
], r);
customElements.get("luzmo-display-settings-datetime") || customElements.define(
  "luzmo-display-settings-datetime",
  r
);
const N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v
}, Symbol.toStringTag, { value: "Module" })), C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v
}, Symbol.toStringTag, { value: "Module" }));
export {
  r as LuzmoDisplaySettingsDatetime
};
