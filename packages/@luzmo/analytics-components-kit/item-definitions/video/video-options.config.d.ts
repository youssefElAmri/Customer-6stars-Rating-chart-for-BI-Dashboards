declare const _default: ({
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
            placeholder?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            placeholder: string;
            label?: undefined;
            default?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any) => boolean;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            placeholder: string;
            default?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any) => boolean;
        type?: undefined;
    } | {
        type: string;
        key?: undefined;
        control?: undefined;
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            enum?: undefined;
            placeholder?: undefined;
        };
        visibleIf?: undefined;
        type?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            enum?: undefined;
            placeholder?: undefined;
        };
        visibleIf?: undefined;
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
            label: string;
            default: boolean;
            placeholder?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            placeholder: string;
            default?: undefined;
        };
        visibleIf: (options: any) => any;
    })[];
})[];
export default _default;
