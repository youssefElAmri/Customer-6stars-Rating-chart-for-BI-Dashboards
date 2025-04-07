declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            label: string;
            type: string;
            default: boolean;
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: boolean;
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean;
        type?: undefined;
    } | {
        type: string;
        key?: undefined;
        control?: undefined;
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: string;
            enum: string[];
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: string;
            enum: string[];
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: string;
            min: number;
            enum?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf: (options: any, slots: any) => boolean;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: (_options: any, _slots: any, theme: any) => any;
            enum?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
        visibleIf: (_: any, slots: any) => boolean;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: number;
            min: number;
            max: number;
            step: number;
            enum?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    })[];
    visibleIf?: undefined;
} | {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            label: string;
            type: string;
            default: boolean;
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
    visibleIf: (_: any, slots: any) => boolean;
})[];
export default _default;
