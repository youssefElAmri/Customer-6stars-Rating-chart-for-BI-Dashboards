import { ControlMarkupArgs } from '../control-markup';
export interface TextFieldArguments {
    label?: string;
    value?: string;
    placeholder?: string;
}
export declare const textFieldMarkup: (args: ControlMarkupArgs) => import("lit-html").TemplateResult<1>;
