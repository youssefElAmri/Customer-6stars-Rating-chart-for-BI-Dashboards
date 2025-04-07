import '@luzmo/lucero/multi-language-field';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionMultiLangField extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    value: Record<string, string>;
    invalid: boolean;
    readonly: boolean;
    language?: string;
    placeholder?: Record<string, string>;
    fromOptionValue?: (value: any, language: string) => any;
    toOptionValue?: (value: any, language: string) => any;
    debounce: number;
    private multiLangFieldElement;
    debounceTimeout: any;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
