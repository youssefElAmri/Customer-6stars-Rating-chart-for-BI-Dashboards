declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    acceptableColumnTypes: string[];
    options?: undefined;
    isRequired?: undefined;
    canAcceptMultipleColumns?: undefined;
} | {
    name: string;
    rotate: boolean;
    type: string;
    label: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
    };
    isRequired: boolean;
    canAcceptMultipleColumns: boolean;
    acceptableColumnTypes?: undefined;
})[];
export default _default;
