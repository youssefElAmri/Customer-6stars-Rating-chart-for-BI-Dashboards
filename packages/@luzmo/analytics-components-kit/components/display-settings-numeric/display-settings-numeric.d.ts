import '@luzmo/lucero/action-button';
import '@luzmo/lucero/action-group';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/menu';
import '@luzmo/lucero/number-field';
import '@luzmo/lucero/picker';
import '@luzmo/lucero/popover';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, TemplateResult } from 'lit';
declare const LuzmoDisplaySettingsNumeric_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings-numeric
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettingsNumeric extends LuzmoDisplaySettingsNumeric_base {
    static get styles(): CSSResultArray;
    /**
     * The language used in the settings
     */
    language: string;
    /**
     * The slotContent that is passed to the settings
     */
    slotContent: any;
    /**
     * The list of columns that can be used for the rate aggregation
     */
    measureColumns: any[];
    private _displayAs?;
    private _displayMode?;
    private _numericFormatGroup?;
    private _precision?;
    private _thousandSeparator?;
    private _commaDecimals?;
    private _isAuto?;
    private _format?;
    private _durationFormat?;
    private _durationLevels;
    private _maxDurationLevel?;
    private _aggregationFunc?;
    private _aggregationWeightColumn?;
    private _displayAsElement;
    private _precisionElement;
    private _aggregationElement;
    private _aggregationWeightElement;
    private _durationLevelsElement;
    private _durationFormatElement;
    private _durationLevelsOverlay;
    private _renderDurationLevelMenu;
    private _sendEvent;
    private _parseSavedNumericFormatSettings;
    private _setNumericDisplayAs;
    private _setNumericSeparators;
    private _setPrecision;
    private _setNumericFormat;
    private _setAggregationFunc;
    private _setAggregationWeight;
    private _setDurationLevels;
    private _setDurationFormat;
    private _fillTimeDurationLevels;
    protected willUpdate(changedProperties: Map<string, any>): void;
    protected firstUpdated(): void;
    private _renderDurationLevelsSettings;
    private _renderDurationFormatSettings;
    private _renderNumericDisplayAsSettings;
    private _renderNumericFormatSettings;
    private _renderAggregationSettings;
    protected render(): TemplateResult;
}
export {};
