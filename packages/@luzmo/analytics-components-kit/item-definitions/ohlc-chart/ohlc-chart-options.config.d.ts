declare const _default: {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
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
    })[];
}[];
export default _default;
