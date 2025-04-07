import '@luzmo/lucero/checkbox';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/menu';
import '@luzmo/lucero/number-field';
import '@luzmo/lucero/picker';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDisplaySettingsPeriodOverPeriod_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings-period-over-period
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettingsPeriodOverPeriod extends LuzmoDisplaySettingsPeriodOverPeriod_base {
    static get styles(): CSSResultArray;
    /**
     * The language used in the settings
     */
    language: string;
    /**
     * The slotContent that is passed to the settings
     */
    slotContent: any;
    private _periodComparisonElement;
    private _numberPeriodsElement;
    private _periodLevelElement;
    private _incompletePeriodsElement;
    private _periodComparison?;
    private _numberPeriods?;
    private _periodLevel?;
    private _incompletePeriods?;
    private _minLevel?;
    protected willUpdate(changedProperties: PropertyValues): void;
    private setPeriodComparison;
    private setNumberOfPeriods;
    private setPeriodLevel;
    private setIncompletePeriods;
    private sendEvent;
    private renderPeriodSettings;
    protected render(): TemplateResult;
}
export {};
