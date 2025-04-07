import '@luzmo/lucero/text-field';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionTextField extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    value?: string;
    invalid: boolean;
    readonly: boolean;
    placeholder?: string;
    debounce: number;
    private textFieldElement;
    debounceTimeout: any;
    _previousValue: string;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
