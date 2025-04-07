declare const _default: {
    name: string;
    rotate: boolean;
    type: string;
    options: {
        isAggregationDisabled: boolean;
        isBinningDisabled: boolean;
        areDatetimeOptionsEnabled: boolean;
        showOnlyFirstSlotContentOptions: boolean;
    };
    label: string;
    /**
     * TODO: Add support for translations based on currentLanguage of charts (in all charts)
     * label: translate(
     * 'vizObjects.slotNames.dimension',
     * null,
     * this.properties.currentLanguage
     * ),
     */
    isRequired: boolean;
    canAcceptMultipleColumns: boolean;
    acceptableColumnTypes: string[];
}[];
export default _default;
