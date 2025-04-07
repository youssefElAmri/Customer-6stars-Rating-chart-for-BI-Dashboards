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
            tooltip?: undefined;
            enum?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            tooltip?: undefined;
            enum?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            tooltip: string;
            default: boolean;
            enum?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            tooltip: string;
            default: string;
            enum: string[];
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
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
            tooltip?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any, slots: any) => boolean;
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
    visibleIf: (_: any, slots: any) => boolean;
})[];
export default _default;
