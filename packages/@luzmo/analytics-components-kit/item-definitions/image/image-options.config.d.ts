declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            placeholder: string;
            default?: undefined;
            values?: undefined;
            selects?: undefined;
        };
    } | {
        key: string;
        control: {
            type: string;
            default: string[];
            values: {
                noResize: {
                    iconName: string;
                    label: string;
                };
                compress: {
                    iconName: string;
                    label: string;
                };
                fitHorizontal: {
                    iconName: string;
                    label: string;
                };
                fitVertical: {
                    iconName: string;
                    label: string;
                };
                fill: {
                    iconName: string;
                    label: string;
                };
                stretch: {
                    iconName: string;
                    label: string;
                };
            };
            selects: string;
            placeholder?: undefined;
        };
    })[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            label: string;
            default: string[];
            values: {
                top: {
                    iconName: string;
                    label: string;
                };
                middle: {
                    iconName: string;
                    label: string;
                };
                bottom: {
                    iconName: string;
                    label: string;
                };
                left?: undefined;
                center?: undefined;
                right?: undefined;
            };
            selects: string;
        };
    } | {
        key: string;
        control: {
            type: string;
            label: string;
            default: string[];
            values: {
                left: {
                    iconName: string;
                    label: string;
                };
                center: {
                    iconName: string;
                    label: string;
                };
                right: {
                    iconName: string;
                    label: string;
                };
                top?: undefined;
                middle?: undefined;
                bottom?: undefined;
            };
            selects: string;
        };
    })[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: ({
        key: string;
        control: {
            type: string;
            placeholder: string;
            default?: undefined;
            enum?: undefined;
        };
    } | {
        key: string;
        control: {
            type: string;
            default: string;
            enum: string[];
            placeholder?: undefined;
        };
    })[];
})[];
export default _default;
