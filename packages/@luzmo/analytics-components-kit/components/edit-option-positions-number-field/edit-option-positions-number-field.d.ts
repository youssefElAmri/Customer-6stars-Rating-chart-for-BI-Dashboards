import '@luzmo/lucero/number-field';
import { CSSResultArray } from 'lit';
import { LuzmoEditOptionBase } from '../edit-option-base/edit-option-base';
export type Position = 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export declare class LuzmoEditOptionPositionsNumberField extends LuzmoEditOptionBase {
    static get styles(): CSSResultArray;
    positions?: Position[];
    values?: Record<Position, number | undefined>;
    canSync?: boolean;
    positionConfiguration?: Record<Position, {
        min?: number;
        max?: number;
        step?: number;
        default?: number;
    }>;
    invalid: boolean;
    readonly: boolean;
    debounce: number;
    sync?: boolean;
    syncedValue?: number;
    debounceTimeout: any;
    _positions: Position[][];
    private _calculateSyncedValue;
    toggleSync(): void;
    private _handleEvent;
    private _renderNumberField;
    protected firstUpdated(): void;
    protected willUpdate(): void;
    protected renderController(): import("lit-html").TemplateResult<1>;
}
