import { ReactiveController, TemplateResult } from 'lit';
import { LuzmoOverlay } from '../overlay';
import { LuzmoAbstractOverlay } from '../overlay/abstract-overlay';
import { LuzmoPickerBase } from './picker';
export declare enum InteractionTypes {
    'desktop' = 0,
    'mobile' = 1
}
export declare class InteractionController implements ReactiveController {
    target: HTMLElement;
    host: LuzmoPickerBase;
    abortController: AbortController;
    preventNextToggle: 'no' | 'maybe' | 'yes';
    pointerdownState: boolean;
    enterKeydownOn: EventTarget | null;
    container: TemplateResult;
    get activelyOpening(): boolean;
    private _open;
    get open(): boolean;
    /**
     * Set `open`
     */
    set open(open: boolean);
    private _overlay;
    get overlay(): LuzmoAbstractOverlay;
    set overlay(overlay: LuzmoAbstractOverlay | undefined);
    type: InteractionTypes;
    constructor(target: HTMLElement, host: LuzmoPickerBase);
    releaseDescription(): void;
    protected handleBeforetoggle(event: Event & {
        target: LuzmoOverlay;
        newState: 'open' | 'closed';
    }): void;
    initOverlay(): void;
    handlePointerdown(_event: PointerEvent): void;
    handleButtonFocus(event: FocusEvent): void;
    handleActivate(_event: Event): void;
    init(): void;
    abort(): void;
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
}
