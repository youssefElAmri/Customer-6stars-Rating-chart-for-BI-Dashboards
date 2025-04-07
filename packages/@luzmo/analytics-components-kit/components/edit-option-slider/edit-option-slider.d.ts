import '@luzmo/lucero/slider';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionSlider extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    value: number;
    default: number;
    min: number;
    max: number;
    step: number;
    debounce: number;
    fromOptionValue?: (value?: string | number | any) => number;
    toOptionValue?: (value?: number) => string | number | any;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
