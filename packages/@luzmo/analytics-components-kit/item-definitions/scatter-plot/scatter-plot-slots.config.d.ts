declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
        areDatetimeOptionsEnabled: boolean;
    };
    isRequired: boolean;
    canAcceptMultipleColumns?: undefined;
    canAcceptFormula?: undefined;
} | {
    name: string;
    rotate: boolean;
    type: string;
    label: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
        areDatetimeOptionsEnabled?: undefined;
    };
    canAcceptMultipleColumns: boolean;
    isRequired?: undefined;
    canAcceptFormula?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    canAcceptFormula: boolean;
    options?: undefined;
    isRequired?: undefined;
    canAcceptMultipleColumns?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    options: {
        areDatetimeOptionsEnabled: boolean;
        isAggregationDisabled?: undefined;
        isBinningDisabled?: undefined;
    };
    type: string;
    isRequired?: undefined;
    canAcceptMultipleColumns?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
