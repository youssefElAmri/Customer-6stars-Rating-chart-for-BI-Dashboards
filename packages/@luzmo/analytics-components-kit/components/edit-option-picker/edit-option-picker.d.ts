import { Placement } from '@luzmo/lucero';
import '@luzmo/lucero/menu';
import '@luzmo/lucero/picker';
import { TemplateResult } from 'lit';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionPicker extends LuzmoEditOptionBase {
    static styles: import("lit").CSSResultArray[];
    values: Record<string, string>;
    disabled: boolean;
    /**
     * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"}
     * @attr
     */
    placement: Placement;
    value?: string;
    fromOptionValue?: (value: string | number | any) => string;
    toOptionValue?: (value: string) => string | number | any;
    default?: string;
    private _handleEvent;
    private generateMenuItems;
    protected renderController(): TemplateResult<1>;
}
