declare const _default: {
    name: string;
    groups: {
        general: {
            label: string;
        };
        order: {
            label: string;
        };
        axes: {
            label: string;
        };
        guidelines: {
            label: string;
        };
        annotate: {
            label: string;
        };
    };
    options: {
        mode: {
            label: string;
            description: string;
            enum: {
                grouped: string;
                stacked: string;
                100: string;
            };
        };
        'display.title': {
            label: string;
        };
        'display.legend': {
            label: string;
        };
        'display.modeOption': {
            label: string;
        };
        'bars.label': {
            label: string;
            tooltip: string;
            enum: {
                none: string;
                percentage: string;
                percentageLegend: string;
                percentageCategory: string;
                percentageMax: string;
            };
        };
        'categories.colored': {
            label: string;
        };
        'bars.roundedCorners': {
            label: string;
            extraLabel: string;
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
