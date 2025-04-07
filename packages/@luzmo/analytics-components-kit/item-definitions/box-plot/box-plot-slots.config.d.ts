declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    options: {
        isAggregationDisabled: boolean;
        areDatetimeOptionsEnabled?: undefined;
    };
    acceptableColumnTypes: string[];
    type: string;
    isRequired: boolean;
    canAcceptFormula: boolean;
} | {
    name: string;
    rotate: boolean;
    label: string;
    options: {
        areDatetimeOptionsEnabled: boolean;
        isAggregationDisabled?: undefined;
    };
    type: string;
    isRequired: boolean;
    acceptableColumnTypes?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
