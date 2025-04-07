declare const _default: {
    name: string;
    groups: {
        general: {
            label: string;
        };
        alignment: {
            label: string;
        };
        link: {
            label: string;
        };
    };
    options: {
        url: {
            label: string;
            placeholder: string;
            description: string;
        };
        mode: {
            label: string;
            description: string;
            enum: {
                noResize: string;
                compress: string;
                fitHorizontal: string;
                fitVertical: string;
                fill: string;
                stretch: string;
            };
        };
        'alignment.vertical': {
            label: string;
            description: string;
            enum: {
                top: string;
                middle: string;
                bottom: string;
            };
        };
        'alignment.horizontal': {
            label: string;
            description: string;
            enum: {
                left: string;
                center: string;
                right: string;
            };
        };
        'link.url': {
            label: string;
            placeholder: string;
            description: string;
        };
        'link.tooltip': {
            label: string;
            placeholder: string;
            description: string;
        };
        'link.target': {
            label: string;
            description: string;
            enum: {
                _parent: string;
                _blank: string;
                _self: string;
            };
        };
    };
};
export default _default;
