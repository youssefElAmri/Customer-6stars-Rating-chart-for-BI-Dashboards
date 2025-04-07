import { LuzmoElement } from '@luzmo/lucero/utils';
import { PropertyValues, TemplateResult } from 'lit';
import '../draggable-data-item-level';
declare const LuzmoDraggableDataItem_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-draggable-data-item
 * @fires data-item-dropped - Announces that the draggable data item has been dropped
 */
export declare class LuzmoDraggableDataItem extends LuzmoDraggableDataItem_base {
    static styles: import("lit").CSSResult;
    variant?: 'highlight' | 'normal';
    language: string;
    disabled: boolean;
    hideSublevels: boolean;
    hideTypeIcon: boolean;
    label: string;
    description: string;
    data: any;
    protected willUpdate(changedProperties: PropertyValues): void;
    private renderSublevels;
    protected render(): TemplateResult;
}
export {};
