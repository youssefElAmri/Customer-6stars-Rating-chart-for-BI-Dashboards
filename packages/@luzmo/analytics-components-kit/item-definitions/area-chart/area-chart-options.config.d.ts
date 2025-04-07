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
        };
        type?: undefined;
        visibleIf?: undefined;
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
        };
        visibleIf: (_: any, slots: any) => boolean;
        type?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: string;
            enum: string[];
            min?: undefined;
        };
        type?: undefined;
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            label: string;
            type: string;
            default: boolean;
            enum?: undefined;
            min?: undefined;
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
        };
        visibleIf: (_: any, slots: any) => boolean;
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
    visibleIf: (_: any, slots: any) => boolean;
})[];
export default _default;
