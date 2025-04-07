export declare const itemGroups: {
    key: string;
    label: string;
}[];
export declare const itemTypes: {
    type: string;
    label: string;
}[];
export declare const itemList: ({
    item: string;
    type: string;
    label: string;
    group: string;
    options?: undefined;
} | {
    item: string;
    type: string;
    label: string;
    group: string;
    options: {
        layout: {
            alignment: string;
        };
        mode?: undefined;
    };
} | {
    item: string;
    type: string;
    label: string;
    group: string;
    options: {
        mode: string;
        layout?: undefined;
    };
})[];
