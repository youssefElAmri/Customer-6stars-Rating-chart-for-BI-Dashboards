import { Placement } from '@luzmo/lucero';
import '@luzmo/lucero/color-picker';
import '@luzmo/lucero/menu';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionColorPicker extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    value: string;
    disabled: boolean;
    noAlphaChannel: boolean;
    swatches: string[];
    rounding: 'full' | 'light' | 'none';
    shape: 'circle' | 'rectangle';
    /**
     * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"}
     * @attr
     */
    placement: Placement;
    debounce: number;
    private colorPicker;
    debounceTimeout: any;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
