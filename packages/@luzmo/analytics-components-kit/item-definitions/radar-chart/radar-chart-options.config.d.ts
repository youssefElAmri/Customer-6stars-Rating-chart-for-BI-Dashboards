declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
        };
        visibleIf: (_: any, slots: any) => boolean;
    })[];
    visibleIf?: undefined;
} | {
    key: string;
    type: string;
    open: boolean;
    children: ({
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
            min?: undefined;
            max?: undefined;
            step?: undefined;
            enum?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: number;
            min: number;
            max: number;
            step: number;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            enum?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            enum: string[];
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
            enum?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: number;
            min: number;
            max: number;
            step: number;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any) => any;
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
    visibleIf: (options: any, slots: any) => boolean;
})[];
export default _default;
