import '@luzmo/lucero/icon';
import '@luzmo/lucero/tooltip';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { PropertyValues, TemplateResult } from 'lit';
declare const LuzmoDraggableDataItemLevel_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
/**
 * @element luzmo-draggable-data-item-level
 * @fires data-item-dropped - Announces that the draggable data item has been dropped
 */
export declare class LuzmoDraggableDataItemLevel extends LuzmoDraggableDataItemLevel_base {
    static styles: import("lit").CSSResult;
    variant?: 'highlight' | 'normal';
    hideTypeIcon?: boolean;
    sublevel?: boolean;
    language: string;
    disabled: boolean;
    label: string;
    description: string;
    data: any;
    private _cleanupDraggable;
    disconnectedCallback(): void;
    private dataItemLevelDropped;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}
export {};
