declare const _default: ({
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    isRequired: boolean;
    acceptableColumnTypes: string[];
    acceptableColumnSubtypes: string[];
    canAcceptFormula?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    canAcceptFormula: boolean;
    isRequired?: undefined;
    acceptableColumnTypes?: undefined;
    acceptableColumnSubtypes?: undefined;
} | {
    name: string;
    rotate: boolean;
    label: string;
    type: string;
    acceptableColumnTypes: string[];
    isRequired?: undefined;
    acceptableColumnSubtypes?: undefined;
    canAcceptFormula?: undefined;
})[];
export default _default;
