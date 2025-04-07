declare const _default: ({
    name: string;
    label: string;
    type: string;
    rotate: boolean;
    options: {
        areDatetimeOptionsEnabled: boolean;
        isCumulativeSumEnabled?: undefined;
    };
    canAcceptMultipleColumns?: undefined;
    canAcceptFormula?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    rotate: boolean;
    options: {
        isCumulativeSumEnabled: boolean;
        areDatetimeOptionsEnabled?: undefined;
    };
    canAcceptMultipleColumns: boolean;
    canAcceptFormula: boolean;
})[];
export default _default;
