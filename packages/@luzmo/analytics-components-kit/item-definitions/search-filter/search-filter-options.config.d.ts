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
