import '@luzmo/lucero/action-button';
import '@luzmo/lucero/action-group';
import { TemplateResult } from 'lit';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionRadioButtonGroup extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    values: Record<string, string>;
    disabled: boolean;
    value: string;
    default: string;
    fromOptionValue?: (value?: string | number | any) => string;
    toOptionValue?: (value?: string) => string | number | any;
    private actionGroup;
    debounceTimeout: any;
    private generateRadioButtons;
    private _handleEvent;
    protected renderController(): TemplateResult<1>;
}
