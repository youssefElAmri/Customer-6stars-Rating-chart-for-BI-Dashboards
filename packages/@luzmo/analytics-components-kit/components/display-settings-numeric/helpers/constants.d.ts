export type NumericSeparatorFormatKeys = 'Auto' | '1,000.00' | '1.000,00' | '1000.00' | '1000,00';
export type DurationFormat = 'time' | 'short' | 'long';
export type DisplayAsFormatLabel = 'general' | 'scientific' | 'percentage';
export declare const AGGREGATIONS: Record<string, () => string>;
export declare const DISPLAY_AS_LABELS: Record<DisplayAsFormatLabel, string>;
export declare const DURATION_FORMATS: Record<DurationFormat, () => string>;
export declare const NUMERIC_SEPARATOR_FORMATS: Record<NumericSeparatorFormatKeys, {
    auto: boolean;
    label: () => string;
    thousandSeparator?: ',' | '.';
    decimalSeparator?: ',' | '.';
}>;
export declare const DURATION: {
    levels: {
        level: number;
        label: string;
    }[];
};
