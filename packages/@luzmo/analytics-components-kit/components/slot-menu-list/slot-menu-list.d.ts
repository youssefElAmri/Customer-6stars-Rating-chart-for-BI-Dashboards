import { CSSResultArray, TemplateResult } from 'lit';
import { LuzmoElement } from '@luzmo/lucero/utils';
declare const LuzmoSlotMenuList_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-slot-menu-list
 */
export declare class LuzmoSlotMenuList extends LuzmoSlotMenuList_base {
    static get styles(): CSSResultArray;
    /**
     * The language of the settings interface
     */
    language: string;
    /**
     * The language to use for locale-aware formatting and labels
     */
    contentLanguage: string;
    _draggableSlotContentElements: HTMLElement[];
    slotContents: any;
    activeIndex: number;
    private _sendChangeEvent;
    private _cleanupFns;
    private _attachAll;
    private _detachAll;
    protected willUpdate(): void;
    protected updated(): void;
    setActiveIndex(index: number): void;
    removeSlotContent(index: number): void;
    protected render(): TemplateResult;
}
export {};
