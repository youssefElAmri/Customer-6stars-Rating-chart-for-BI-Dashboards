import { ElementSize, LuzmoElement } from '@luzmo/lucero/utils';
/**
 * @element luzmo-edit-option
 */
export declare class LuzmoEditOption extends LuzmoElement {
    static styles: import("lit").CSSResult;
    private _loadItemConfig;
    language: string;
    itemType: string;
    optionKey: string;
    options?: any;
    slots?: any;
    theme?: any;
    size: ElementSize;
    _controlTypeLoaded: string;
    _itemTypeLoaded: string;
    _languageLoaded: string;
    _optionsConfig: any;
    _translations: any;
    changedOptions: (options: any) => void;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
