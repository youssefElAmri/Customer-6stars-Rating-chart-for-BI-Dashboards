import '@luzmo/lucero/switch';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export declare class LuzmoEditOptionSwitch extends LuzmoEditOptionBase {
    static styles: (import("lit").CSSResultOrNative | import("lit").CSSResultArray)[];
    value?: boolean;
    default?: boolean;
    fromOptionValue?: (value?: string | number | any) => boolean;
    toOptionValue?: (value?: boolean) => string | number | any;
    private _handleEvent;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
