declare const _default: ({
    name: string;
    rotate: boolean;
    type: string;
    label: string;
    acceptableColumnTypes: string[];
    isRequired?: undefined;
    options?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    isRequired: boolean;
    acceptableColumnTypes: string[];
    options?: undefined;
} | {
    name: string;
    rotate: boolean;
    type: string;
    options: {
        areDatetimeOptionsEnabled: boolean;
    };
    label: string;
    acceptableColumnTypes?: undefined;
    isRequired?: undefined;
})[];
export default _default;
