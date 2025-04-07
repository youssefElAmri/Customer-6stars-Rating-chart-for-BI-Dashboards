declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    isRequired: boolean;
    acceptableColumnTypes: string[];
    canAcceptFormula?: undefined;
    options?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    canAcceptFormula: boolean;
    isRequired?: undefined;
    acceptableColumnTypes?: undefined;
    options?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    options: {
        areDatetimeOptionsEnabled: boolean;
    };
    type: string;
    acceptableColumnTypes: string[];
    isRequired?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
