declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
        };
    }[];
    visibleIf?: undefined;
} | {
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            type: string;
            label: string;
            default: number;
            min: number;
            max: number;
            step: number;
            extraLabel: (options: any, _slots: any, theme: any) => "auto" | "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, _theme: any) => {
                value: null;
                options: any;
            };
        };
    }[];
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
    visibleIf: (options: any) => any;
})[];
export default _default;
