declare const _default: ({
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            type: string;
            default: boolean;
        };
    }[];
} | {
    key: string;
    type: string;
    open: boolean;
    children: {
        key: string;
        control: {
            type: string;
            positionConfiguration: {
                top: {
                    min: number;
                    step: number;
                    default: number;
                };
                right: {
                    min: number;
                    step: number;
                    default: number;
                };
                bottom: {
                    min: number;
                    step: number;
                    default: number;
                };
                left: {
                    min: number;
                    step: number;
                    default: number;
                };
            };
        };
    }[];
})[];
export default _default;
