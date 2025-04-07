import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
import { LuzmoElement } from '../../utils/base';
declare const LuzmoProgressCircle_base: typeof LuzmoElement & {
    new (...args: any[]): import("../..").SizedElementInterface;
    prototype: import("../..").SizedElementInterface;
};
/**
 * @element luzmo-progress-circle
 */
export declare class LuzmoProgressCircle extends LuzmoProgressCircle_base {
    static get styles(): CSSResultArray;
    /**
     * The `indeterminate` attribute is used to indicate that the progress circle is in an indeterminate state
     */
    indeterminate: boolean;
    /**
     * The aria-label of the progress circle
     */
    label: string;
    /**
     * The `static-color` attribute is used to set the color of the progress circle to black or white. This is used when the progress circle is on a colored background.
     */
    staticColor?: 'white' | 'black';
    /**
     * The progress in degrees of the progress circle
     */
    progress: number;
    private slotEl;
    private makeRotation;
    protected render(): TemplateResult;
    protected handleSlotchange(): void;
    protected firstUpdated(changes: PropertyValues): void;
    protected updated(changes: PropertyValues): void;
}
export {};
