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
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
            label?: undefined;
            sideEffect?: undefined;
        };
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: string;
            enum: string[];
            fromOptionValue: (value: any) => "full" | "half";
            toOptionValue: (value: any) => boolean;
            label?: undefined;
            sideEffect?: undefined;
        };
        type?: undefined;
    } | {
        type: string;
        key?: undefined;
        control?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            enum?: undefined;
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
            sideEffect?: undefined;
        };
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            enum: string[];
            fromOptionValue: (value: string) => "list" | "labels";
            toOptionValue: (value: string) => value is "labels";
            sideEffect: (value: string, options: any) => any;
            default?: undefined;
            label?: undefined;
        };
        type?: undefined;
    })[];
} | {
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
        };
    } | {
        key: string;
        control: {
            type: string;
            default: number;
            min: number;
            max: number;
            step: number;
            enum?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
    } | {
        key: string;
        control: {
            type: string;
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
            enum?: undefined;
        };
    })[];
})[];
export default _default;
