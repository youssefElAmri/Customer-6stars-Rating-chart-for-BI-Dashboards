import '@luzmo/lucero/divider';
import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
import '../display-settings';
import '../slot-menu-list';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { LuzmoDisplaySettings } from '../display-settings/display-settings';
import { LuzmoSlotMenuList } from '../slot-menu-list/slot-menu-list';
declare const LuzmoSlotMenu_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-slot-menu
 */
export declare class LuzmoSlotMenu extends LuzmoSlotMenu_base {
    static get styles(): CSSResultArray;
    /**
     * The language of the settings interface
     */
    language: string;
    /**
     * The language to use for locale-aware formatting and labels
     */
    contentLanguage: string;
    /**
     * The slot type
     */
    slotType?: string;
    /**
     * Whether to show the drag handle and allow dragging
     */
    noDrag?: boolean;
    /**
     * Whether to show the close button
     */
    noClose?: boolean;
    /**
     * The variant to show
     */
    variant?: 'popup' | 'draggable' | 'default';
    /**
     * Whether to show the top menu label & delete button
     */
    noTopMenuLabel?: boolean;
    slotContents: any;
    slotContentLabelElement: HTMLElement;
    displaySettingsElement: LuzmoDisplaySettings;
    slotMenuListElement: LuzmoSlotMenuList;
    _slotListData: any[];
    _slotContents: any[];
    _currentSlotContent: any;
    _activeIndex: number;
    disconnectedCallback(): void;
    private _sendChangeEvent;
    private _sendCloseEvent;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(): void;
    private _handleSlotListChange;
    private _handleSlotContentChange;
    updateContentLabel(): void;
    removeSlotContent(index: number): void;
    close(): void;
    _removeActiveSlotContent(): void;
    protected render(): TemplateResult;
}
export {};
