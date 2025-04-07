declare const _default: {
    name: string;
    groups: {
        general: {
            label: string;
        };
        nodes: {
            label: string;
        };
        links: {
            label: string;
        };
    };
    options: {
        'display.title': {
            label: string;
        };
        alignment: {
            label: string;
            enum: {
                justify: string;
                left: string;
                right: string;
                center: string;
            };
        };
        nodeSorting: {
            label: string;
            enum: {
                default: string;
                asc: string;
                desc: string;
            };
        };
        'labels.display': {
            label: string;
        };
        'labels.value': {
            label: string;
        };
        'colors.byCategory': {
            label: string;
        };
        'colors.nodeColor': {
            label: string;
        };
        'colors.linkColor': {
            label: string;
            enum: {
                gradient: string;
                source: string;
                target: string;
                none: string;
            };
        };
    };
};
export default _default;
