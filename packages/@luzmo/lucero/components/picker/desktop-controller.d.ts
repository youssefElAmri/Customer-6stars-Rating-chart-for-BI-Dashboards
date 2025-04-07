import { InteractionController, InteractionTypes } from './interaction-controller';
export declare class DesktopController extends InteractionController {
    type: InteractionTypes;
    handlePointerdown(event: PointerEvent): void;
    handleActivate(event?: Event): void;
    init(): void;
}
