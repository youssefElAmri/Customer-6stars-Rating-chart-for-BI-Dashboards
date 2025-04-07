import { ControlMarkupArgs } from '../control-markup';
export interface MultiLanguageFieldArguments {
    label?: string;
    value?: Record<string, string>;
    language?: string;
    placeholder?: string;
}
export declare const multiLanguageFieldMarkup: (args: ControlMarkupArgs) => import("lit-html").TemplateResult<1>;
