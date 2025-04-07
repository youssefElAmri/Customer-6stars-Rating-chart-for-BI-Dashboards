declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            default: string;
            enum: string[];
            min?: undefined;
            max?: undefined;
            step?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            label?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean | undefined;
        type?: undefined;
    } | {
        type: string;
        visibleIf: (_: any, slots: any) => boolean | undefined;
        key?: undefined;
        control?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: boolean;
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            label?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: boolean;
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            label?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean | undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: string;
            enum: string[];
            min?: undefined;
            max?: undefined;
            step?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            label?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: (_options: any, _slots: any, theme: any) => any;
            min: number;
            max: number;
            step: number;
            extraLabel: (options: any, _slots: any, theme: any) => "auto" | "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, _theme: any) => {
                value: null;
                options: any;
            };
            enum?: undefined;
            label?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: (_options: any, _slots: any, theme: any) => any;
            extraLabel: (options: any, _slots: any, theme: any) => "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, theme: any) => {
                value: any;
                options: any;
            };
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean | undefined;
        type?: undefined;
    })[];
    visibleIf?: undefined;
} | {
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            label: string;
            type: string;
            default: string;
            enum: string[];
        };
    }[];
    visibleIf: (_: any, slots: any) => boolean | undefined;
})[];
export default _default;
