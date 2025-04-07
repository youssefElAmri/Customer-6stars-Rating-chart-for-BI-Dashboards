import '@luzmo/lucero/accordion';
import '@luzmo/lucero/divider';
import { ElementSize, LuzmoElement } from '@luzmo/lucero/utils';
import '../edit-option';
/**
 * @element luzmo-edit-item
 */
export declare class LuzmoEditItem extends LuzmoElement {
    static styles: import("lit").CSSResult;
    private _loadItemConfig;
    /**
     * The language in which to display the option configuration controls.
     */
    language: string;
    /**
     * The item type to load the configuration for. Leave empty if using a custom options configuration.
     */
    itemType: string;
    /**
     * The options of the item.
     */
    options?: any;
    /**
     * The slots of the item.
     */
    slots?: any;
    /**
     * The theme of the item.
     */
    theme?: any;
    /**
     * The size of the edit item component.
     */
    size: ElementSize;
    /**
     * The configuration of the options. Fill in manually if you want to use a custom configuration. Leave empty if using a default configuration and use 'item-type'.
     */
    optionsConfiguration: any;
    /**
     * The translations of the item options configuration.
     */
    translations: any;
    private _itemTypeLoaded;
    private _languageLoaded;
    private renderAllGroups;
    private renderGroup;
    private renderOptionControl;
    private renderDivider;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
