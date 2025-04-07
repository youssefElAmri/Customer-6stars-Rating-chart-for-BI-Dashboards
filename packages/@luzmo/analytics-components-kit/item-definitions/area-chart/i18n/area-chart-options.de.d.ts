declare const _default: {
    name: string;
    groups: {
        general: {
            label: string;
        };
        legend: {
            label: string;
        };
    };
    options: {
        'display.title': {
            label: string;
        };
        mode: {
            label: string;
            description: string;
            enum: {
                unstacked: string;
                stacked: string;
                100: string;
                stream: string;
            };
        };
        interpolation: {
            label: string;
            enum: {
                linear: string;
                'step-before': string;
                'step-after': string;
                monotone: string;
            };
        };
        'display.legend': {
            label: string;
        };
        'display.modeOption': {
            label: string;
        };
        'missingValue.type': {
            label: string;
            enum: {
                no: string;
                break: string;
                manual: string;
            };
        };
        'missingValue.value': {
            label: string;
        };
        color: {
            label: string;
        };
        'legend.position': {
            label: string;
        };
    };
};
export default _default;
