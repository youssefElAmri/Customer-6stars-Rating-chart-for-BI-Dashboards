import '@luzmo/lucero/action-button';
import '@luzmo/lucero/action-group';
import '@luzmo/lucero/icon';
import { TemplateResult } from 'lit';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export type ButtonContent = {
    icon?: {
        icon: [number, number, string | string[]];
        name: string;
    };
    iconName?: string;
    label?: string;
    buttonText?: string;
};
export declare class LuzmoEditOptionActionButtonGroup extends LuzmoEditOptionBase {
    static styles: (import("lit").CSSResultOrNative | import("lit").CSSResultArray)[];
    values: Record<string, ButtonContent>;
    disabled: boolean;
    selects: 'single' | 'multiple' | undefined;
    value: [string] | undefined;
    default: [string] | undefined;
    private actionGroup;
    private _handleEvent;
    private _generateButtonContents;
    private _generateActionButtons;
    protected renderController(): TemplateResult<1>;
}
