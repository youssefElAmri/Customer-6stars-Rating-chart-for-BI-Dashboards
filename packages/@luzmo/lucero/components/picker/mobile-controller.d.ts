import { InteractionController, InteractionTypes } from './interaction-controller';
export declare const SAFARI_FOCUS_RING_CLASS = "remove-focus-ring-safari-hack";
export declare class MobileController extends InteractionController {
    type: InteractionTypes;
    handleClick(): void;
    handlePointerdown(): void;
    private handleFocusOut;
    init(): void;
}
