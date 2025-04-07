import '@luzmo/lucero/number-field';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionNumberField extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    disabled: boolean;
    min?: number;
    max?: number;
    default?: number;
    value?: number;
    step: number;
    unit: boolean;
    debounce: number;
    fromOptionValue?: (value?: string | number) => number;
    toOptionValue?: (value?: number) => string | number | any;
    private numberField;
    debounceTimeout: any;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
