declare const _default: {
    name: string;
    groups: {
        general: {
            label: string;
        };
        slices: {
            label: string;
        };
        legend: {
            label: string;
        };
        annotate: {
            label: string;
        };
    };
    options: {
        'display.title': {
            label: string;
        };
        mode: {
            label: string;
            enum: {
                pie: string;
                donut: string;
            };
        };
        'display.legend': {
            label: string;
        };
        'slices.half': {
            label: string;
            enum: {
                full: string;
                half: string;
            };
        };
        'display.categoryLabels': {
            label: string;
            enum: {
                list: string;
                labels: string;
            };
        };
        'sort.by': {
            label: string;
            enum: {
                measure: string;
                category: string;
            };
        };
        'display.values': {
            label: string;
            tooltip: string;
            enum: {
                none: string;
                absolute: string;
                percentage: string;
            };
        };
        'slices.width': {
            label: string;
        };
        'slices.maxNumber': {
            label: string;
        };
        'slices.minPercentage': {
            label: string;
        };
        'slices.roundedCorners': {
            label: string;
        };
        'slices.padding': {
            label: string;
        };
    };
};
export default _default;
