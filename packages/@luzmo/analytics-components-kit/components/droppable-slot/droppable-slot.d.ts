import { Placement } from '@floating-ui/dom';
import '@luzmo/lucero/tooltip';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { PropertyValues } from 'lit';
import '../slot-menu';
declare const LuzmoDroppableSlot_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-droppable-slot
 * @fires slot-contents-changed - Announces that the slot contents has changed
 */
export declare class LuzmoDroppableSlot extends LuzmoDroppableSlot_base {
    static styles: import("lit").CSSResult;
    private _loadSlotsConfig;
    private _itemTypeLoaded?;
    private _slotsConfig?;
    itemType?: string;
    slotName?: string;
    slotConfiguration: any;
    slotContents: any;
    label?: string;
    language: string;
    /**
     * The type of config interaction
     */
    menu: 'default' | 'popup' | 'draggable' | 'event-only';
    /**
     * Placement of the slot menu. Only relevant for 'popup' and 'draggable' menu type
     */
    placement: Placement;
    hideDelete?: string;
    hideConfiguration?: string;
    private _droppableSlotLabelElement;
    private changedSlotContents;
    private _cleanupDroppable;
    private _currentSlotContents;
    disconnectedCallback(): void;
    private emptySlotContents;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(): void;
    private _onSlotMenuChanges;
    private createFullLabel;
    droppableSlotMarkup(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
export {};
