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
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
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
            default: boolean;
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any) => boolean;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            fromOptionValue: (value: any) => boolean;
            toOptionValue: (value: any) => "default" | "button";
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
            default: (_options: any, _slots: any, theme: any) => any;
            extraLabel: (options: any, _slots: any, theme: any) => "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, theme: any) => {
                value: any;
                options: any;
            };
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any) => boolean;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            enum: string[];
            fromOptionValue?: undefined;
            toOptionValue?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
    })[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            enum: string[];
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
            default: number;
            min: number;
            max: number;
            step: number;
            enum?: undefined;
        };
        visibleIf: (options: any) => boolean;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: number;
            min: number;
            max: number;
            enum?: undefined;
            step?: undefined;
        };
        visibleIf: (options: any) => boolean;
    })[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            label: string;
            type: string;
            default: number;
            min: number;
            max: number;
            step: number;
        };
    }[];
})[];
export default _default;
