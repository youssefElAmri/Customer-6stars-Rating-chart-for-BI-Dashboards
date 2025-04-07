declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: boolean;
            extraLabel?: undefined;
            extraLabelHasClickAction?: undefined;
            extraLabelClickAction?: undefined;
        };
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: (_options: any, _slots: any, theme: any) => any;
            extraLabel: (options: any, _slots: any, theme: any) => "reset" | undefined;
            extraLabelHasClickAction: (options: any, _slots: any, theme: any) => boolean;
            extraLabelClickAction: (options: any, _slots: any, theme: any) => {
                value: any;
                options: any;
            };
        };
    })[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            label: string;
            type: string;
            default: number;
            min: number;
            max: number;
            step: number;
        };
    }[];
})[];
export default _default;
