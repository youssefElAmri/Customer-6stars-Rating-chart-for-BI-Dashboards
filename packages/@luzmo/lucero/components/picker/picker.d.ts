import { CSSResultArray, PropertyValues, TemplateResult } from 'lit';
import { StyleInfo } from 'lit/directives/style-map.js';
import { Focusable } from '../../utils/focusable';
import { DependencyManagerController } from '../../utils/reactive-controllers/dependency-manger';
import { MatchMediaController } from '../../utils/reactive-controllers/match-media';
import { PendingStateController } from '../../utils/reactive-controllers/pending-state';
import '../menu';
import { LuzmoMenu } from '../menu/menu';
import { LuzmoMenuItem, MenuItemChildren } from '../menu/menu-item';
import '../overlay';
import { LuzmoOverlay } from '../overlay/overlay';
import { Placement } from '../overlay/overlay-types';
import { SlottableRequestEvent } from '../overlay/slottable-request-event';
import '../progress-circle';
import '../tooltip';
import { LuzmoTooltip } from '../tooltip/tooltip';
import { DesktopController } from './desktop-controller';
import { MobileController } from './mobile-controller';
export declare const DESCRIPTION_ID = "option-picker";
declare const LuzmoPickerBase_base: typeof Focusable & {
    new (...args: any[]): import("../..").SizedElementInterface;
    prototype: import("../..").SizedElementInterface;
};
export declare class LuzmoPickerBase extends LuzmoPickerBase_base {
    appliedLabel?: string;
    button: HTMLButtonElement;
    /**
     * Whether the Picker is disabled.
     */
    disabled: boolean;
    focused: boolean;
    icons?: 'only' | 'none';
    /**
     * Type of dropdown
     */
    variant: undefined | 'checkmarks' | 'highlight';
    /**
     * Whether the value is invalid.
     */
    invalid: boolean;
    /**
     * Whether the items are currently loading.
     */
    pending: boolean;
    /** Defines a string value that labels the Picker while it is in pending state. */
    pendingLabel: string;
    label?: string;
    open: boolean;
    /**
     * Readonly value
     */
    readonly: boolean;
    labelAlignment?: 'inline';
    optionsMenu: LuzmoMenu;
    overlayElement: LuzmoOverlay;
    /**
     * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"}
     * @attr
     */
    placement: Placement;
    /**
     * Display as a quiet picker
     */
    quiet: boolean;
    value: string;
    get selectedItem(): LuzmoMenuItem | undefined;
    protected get selectedItemContent(): MenuItemChildren;
    get selfManageFocusElement(): boolean;
    protected get menuItems(): LuzmoMenuItem[];
    selects: undefined | 'single';
    dependencyManager: DependencyManagerController;
    isMobile: MatchMediaController;
    strategy: DesktopController | MobileController;
    pendingStateController: PendingStateController<this>;
    private _selectedItem?;
    protected listRole: 'listbox' | 'menu';
    protected itemRole: string;
    protected tooltipEl?: LuzmoTooltip;
    protected hasRenderedOverlay: boolean;
    private _selfManageFocusElement;
    private deprecatedMenu;
    private selectionPromise;
    private selectionResolver;
    private willManageSelection;
    private recentlyConnected;
    private enterKeydownOn;
    /**
     * Initializes the `PendingStateController` for the Picker component.
     * The `PendingStateController` manages the pending state of the Picker.
     */
    constructor();
    set selectedItem(selectedItem: LuzmoMenuItem | undefined);
    get focusElement(): HTMLElement;
    forceFocusVisible(): void;
    click(): void;
    handleButtonBlur(): void;
    focus(options?: FocusOptions): void;
    handleHelperFocus(): void;
    handleChange(event: Event): void;
    handleButtonFocus(event: FocusEvent): void;
    toggle(target?: boolean): void;
    close(): void;
    private _selectedItemContent?;
    handleSlottableRequest: (_event: SlottableRequestEvent) => void;
    bindEvents(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    applyFocusElementLabel: (value: string, labelElement: any) => void;
    protected handleKeydown: (event: KeyboardEvent) => void;
    protected setValueFromItem(item: LuzmoMenuItem, menuChangeEvent?: Event): Promise<void>;
    protected setMenuItemSelected(item: LuzmoMenuItem, value: boolean): void;
    protected get containerStyles(): StyleInfo;
    protected set selectedItemContent(selectedItemContent: MenuItemChildren | undefined);
    protected handleTooltipSlotchange(event: Event & {
        target: HTMLSlotElement;
    }): void;
    protected renderLabelContent(content: Node[]): TemplateResult | Node[];
    protected renderAngleIcon: () => TemplateResult;
    protected renderAlertIcon: () => TemplateResult;
    protected get buttonContent(): TemplateResult[];
    protected renderOverlay(menu: TemplateResult): TemplateResult;
    protected get renderDescriptionSlot(): TemplateResult;
    protected render(): TemplateResult;
    protected update(changes: PropertyValues<this>): void;
    protected bindButtonKeydownListener(): void;
    protected updated(changes: PropertyValues<this>): void;
    protected firstUpdated(changes: PropertyValues<this>): void;
    protected get dismissHelper(): TemplateResult;
    protected renderContainer(menu: TemplateResult): TemplateResult;
    protected get renderMenu(): TemplateResult;
    protected shouldScheduleManageSelection(event?: Event): void;
    protected shouldManageSelection(): void;
    protected manageSelection(): Promise<void>;
    protected getUpdateComplete(): Promise<boolean>;
    protected handleEnterKeydown: (event: KeyboardEvent) => void;
    private onScroll;
}
/**
 * @element luzmo-picker
 *
 * @slot label - The placeholder content for the Picker
 * @slot description - The description content for the Picker
 * @slot tooltip - Tooltip to to be applied to the the Picker Button
 * @slot - menu items to be listed in the Picker
 * @fires change - Announces that the `value` of the element has changed
 * @fires luzmo-opened - Announces that the overlay has been opened
 * @fires luzmo-closed - Announces that the overlay has been closed
 */
export declare class LuzmoPicker extends LuzmoPickerBase {
    static get styles(): CSSResultArray;
    protected get containerStyles(): StyleInfo;
    protected handleKeydown: (event: KeyboardEvent) => void;
}
export {};
