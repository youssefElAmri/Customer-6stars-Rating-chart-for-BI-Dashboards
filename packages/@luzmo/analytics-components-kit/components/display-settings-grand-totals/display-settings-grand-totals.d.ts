import '@luzmo/lucero/action-button';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/icon';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDisplaySettingsGrandTotals_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings-grand-totals
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettingsGrandTotals extends LuzmoDisplaySettingsGrandTotals_base {
    static get styles(): CSSResultArray;
    /**
     * The language used in the settings
     */
    language: string;
    /**
     * The slotContent that is passed to the settings
     */
    slotContent: any;
    private _enabled?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private toggleGrandTotals;
    private sendEvent;
    protected render(): TemplateResult;
}
export {};
