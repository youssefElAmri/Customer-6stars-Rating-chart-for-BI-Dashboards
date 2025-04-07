import '@luzmo/lucero/action-button';
import '@luzmo/lucero/action-group';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/icon';
import '@luzmo/lucero/number-field';
import '@luzmo/lucero/picker';
import '@luzmo/lucero/progress-circle';
import { ElementSize, LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDisplaySettingsDatetime_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings-datetime
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettingsDatetime extends LuzmoDisplaySettingsDatetime_base {
    static get styles(): CSSResultArray;
    private _loadLocaleFormatsConfig;
    /**
     * The language of the settings interface
     */
    language: string;
    /**
     * The language to use for locale-aware formatting
     */
    contentLanguage: string;
    size: ElementSize;
    slotContent: any;
    private _displayAsElement;
    private _weekStartElement;
    private _weekDayAndMonthInYearFormatElement;
    private _monthNameFormatElement;
    private _monthNameElement;
    private _weekFormatElement;
    private _dateFormatElement;
    private _dateSeparatorElement;
    private _weekDayElement;
    private _format24hElement;
    private _contentLanguageLoaded?;
    private _localeFormats?;
    private _format?;
    private _currentSlotContent?;
    private _dateLevel?;
    private _displayAs?;
    private _weekStart?;
    private _weekDayAndMonthInYearFormat?;
    private _monthNameFormat?;
    private _monthName?;
    private _weekFormat?;
    private _dateFormat?;
    private _dateSeparator?;
    private _weekDay?;
    private _24hFormat?;
    private _parseSlotContent;
    private _calculateFormat;
    private _setWeekStartsOn;
    private _setDisplayAs;
    private _setWeekdayAndMonthInYearFormat;
    private _setMonthNameFormat;
    private _setMonthName;
    private _setWeekFormat;
    private _setDateFormat;
    private _setDateSeparator;
    private _set24hFormat;
    private _setWeekday;
    private _calculateSlotContent;
    private _sendEvent;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _renderDisplaySettings;
    private _renderWeekDayAndMonthNameFormatSettings;
    private _renderMonthNameFormatSettings;
    private _renderWeekFormatSettings;
    private _renderWeekStartsOnSettings;
    private _renderMonthNameSettings;
    private _renderDateFormatSettings;
    private _renderSeparatorSettings;
    private _render24hFormatSettings;
    private _renderWeekdaySettings;
    private _renderExampleFormat;
    private _renderAllSettings;
    protected render(): TemplateResult | TemplateResult<1> | undefined;
}
export {};
