export declare const DATETIME_LEVELS: {
    level: number;
    key: string;
    i18n: () => string;
}[];
export declare const DATETIME_AS_STRING_FORMATS_PER_LEVEL: Record<string, {
    key: string;
    label: string;
    i18n: () => string;
}[]>;
export declare const DATETIME_WEEKDAY_AND_MONTH_STRING_FORMATS: Record<string, () => string>;
export declare const WEEK_STARTS_ON: {
    sunday: () => string;
    monday: () => string;
};
