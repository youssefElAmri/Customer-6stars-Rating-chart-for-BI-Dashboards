import '@luzmo/lucero/action-button';
import '@luzmo/lucero/field-label';
import '@luzmo/lucero/icon';
import '@luzmo/lucero/number-field';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDisplaySettingsBinning_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-display-settings-binning
 * @fires slot-content-changed - Event that is fired when the slot content is changed
 */
export declare class LuzmoDisplaySettingsBinning extends LuzmoDisplaySettingsBinning_base {
    static get styles(): CSSResultArray;
    /**
     * The language used in the settings
     */
    language: string;
    slotContent: any;
    private _enabled;
    private _binWidth;
    private binWidthElement;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private toggleBinning;
    private setBinning;
    private sendEvent;
    private renderBinWidth;
    protected render(): TemplateResult;
}
export {};
