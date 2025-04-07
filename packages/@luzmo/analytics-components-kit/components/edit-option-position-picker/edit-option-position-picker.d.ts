import '@luzmo/lucero/text-field';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionPositionPicker extends LuzmoEditOptionBase {
    static styles: (import("lit").CSSResult | import("lit").CSSResultArray)[];
    value?: string;
    defaultPosition: string;
    positions?: string[];
    readonly: boolean;
    private _handleEvent;
    private _handleClick;
    protected willUpdate(): void;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
