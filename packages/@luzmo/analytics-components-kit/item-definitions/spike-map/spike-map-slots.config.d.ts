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
    type: string;
    options: {
        areDatetimeOptionsEnabled: boolean;
    };
    label: string;
    isRequired?: undefined;
    acceptableColumnTypes?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
