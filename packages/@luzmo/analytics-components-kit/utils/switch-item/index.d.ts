export declare function switchItem(args: {
    oldItemType: string;
    newItemType: string;
    slots?: any[];
    options?: any;
    unassignedSlots?: any;
    inapplicableOptions?: any;
    customItemSlotsConfigs?: {
        type: string;
        slotsConfig: any;
    }[];
}): {
    type: string;
    slots: any[];
    options?: any;
    unassignedMeasureSlots: any[];
    unassignedDimensionSlots: any[];
};
