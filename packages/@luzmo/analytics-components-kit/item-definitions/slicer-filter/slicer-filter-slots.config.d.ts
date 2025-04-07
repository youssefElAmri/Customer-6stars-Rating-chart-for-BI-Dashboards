declare const _default: ({
    name: string;
    rotate: boolean;
    type: string;
    label: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
        areDatetimeOptionsEnabled: boolean;
        showOnlyFirstSlotContentOptions: boolean;
    };
    canAcceptMultipleColumns: boolean;
    canAcceptFormula?: undefined;
} | {
    name: string;
    rotate: boolean;
    type: string;
    label: string;
    canAcceptMultipleColumns: boolean;
    canAcceptFormula: boolean;
    options?: undefined;
})[];
export default _default;
