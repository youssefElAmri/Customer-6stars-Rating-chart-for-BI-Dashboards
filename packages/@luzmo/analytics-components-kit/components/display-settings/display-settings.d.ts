import '@luzmo/lucero/divider';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/icon';
import '@luzmo/lucero/multi-language-field';
import '@luzmo/lucero/progress-circle';
import '@luzmo/lucero/text-field';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDisplaySettings_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettings extends LuzmoDisplaySettings_base {
    static get styles(): CSSResultArray;
    private _loadDisplaySettings;
    /**
     * The language of the settings interface
     */
    language: string;
    /**
     * The language to use for locale-aware formatting and labels
     */
    contentLanguage: string;
    /**
     * Whether or not to show the displaySettings. Is used to hide display Settings in cases where there are multiple columns
     */
    hideDisplaySettings?: boolean;
    /**
     * Whether or not to show the binning in numeric
     */
    binningDisabled?: boolean;
    /**
     * Whether or not to show the grand totals
     */
    grandTotals?: boolean;
    /**
     * Whether or not to show the period-over-period in numeric
     */
    periodOverPeriod?: boolean;
    /**
     * Whether or not to show the trash button next to the label
     */
    showRemoveButton?: boolean;
    /**
     * The slot type
     */
    slotType?: string;
    slotContent: any;
    private _showIds;
    /**
     * The list of columns that can be used for the rate aggregation
     */
    measureColumns: any[];
    private _multiLanguageFieldElement;
    private _settingsTypeLoaded;
    private _currentSlotContent;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _onSlotContentChange;
    private _onLabelChange;
    private _sendEvent;
    private _removeEvent;
    private _toggleIds;
    private _renderDisplaySettings;
    protected render(): TemplateResult | TemplateResult<1> | undefined;
}
export {};
