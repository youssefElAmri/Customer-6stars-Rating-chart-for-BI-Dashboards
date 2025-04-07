declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    options: {
        isCumulativeSumEnabled: boolean;
        isAggregationDisabled?: undefined;
        isBinningDisabled?: undefined;
        areDatetimeOptionsEnabled?: undefined;
    };
    canAcceptMultipleColumns: boolean;
    canAcceptFormula: boolean;
    isRequired?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
        areDatetimeOptionsEnabled: boolean;
        isCumulativeSumEnabled?: undefined;
    };
    isRequired: boolean;
    canAcceptMultipleColumns?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
