import { ElementSize } from '@luzmo/lucero/utils';
export interface ControlMarkupArgs {
    controlType: string;
    optionKey: string;
    controlInfo: any;
    options: any;
    slots: any;
    theme: any;
    language: string;
    translations: any;
    size: ElementSize;
    changeCallback: any;
}
export declare const controlMarkup: (args: ControlMarkupArgs) => import("lit-html").TemplateResult<1> | undefined;
