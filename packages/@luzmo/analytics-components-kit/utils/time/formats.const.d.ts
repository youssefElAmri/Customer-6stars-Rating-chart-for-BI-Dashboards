export type DateFormats = 'auto' | 'mmdd' | 'ddmm';
export declare const DATE_FORMATS: Record<DateFormats, () => string>;
export type DateSeparators = '~' | '.' | '-' | '/';
export declare const DATE_SEPARATORS: Record<DateSeparators, () => string>;
