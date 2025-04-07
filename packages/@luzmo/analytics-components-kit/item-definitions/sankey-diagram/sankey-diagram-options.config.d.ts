declare const _default: {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: string;
            enum: string[];
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            enum?: undefined;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
        visibleIf?: undefined;
    } | {
        key: string;
        control: {
            type: string;
            default: (_options: any, _slots: any, theme: any) => any;
            extraLabel: (options: any, _slots: any, theme: any) => "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, theme: any) => {
                value: any;
                options: any;
            };
            label?: undefined;
            enum?: undefined;
        };
        visibleIf: (options: any, _slots: any) => boolean;
    })[];
}[];
export default _default;
