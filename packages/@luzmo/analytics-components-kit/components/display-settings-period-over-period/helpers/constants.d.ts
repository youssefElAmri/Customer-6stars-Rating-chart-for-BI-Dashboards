export declare const PERIOD_OVER_PERIOD_VALUES: Record<PeriodOverPeriodType, () => string>;
export declare const LEVEL_LIST: {
    key: string;
    i18n: () => string;
}[];
/**
 * Period over period comparison type:
 * 'none' - turned off,
 * 'past' - absolute value comparison to the past,
 * 'absoluteChange' - absolute change comparison to the past,
 * 'percentageChange' - percentage change comparison to the past
 */
export type PeriodOverPeriodType = 'none' | 'past' | 'absoluteChange' | 'percentageChange';
export interface PeriodOverPeriod {
    /**
     * Period over period comparison type
     */
    type: PeriodOverPeriodType;
    /**
     * Period of time level
     * 0 - period, 1 - year, 2 - quarter, 3 - month, 4 - week, 5 - day... 9 - millisecond
     */
    level: number;
    /**
     * Number of periods
     */
    quantity: number;
    /**
     * Turn ON/OFF period to date comparison
     */
    periodToDate: boolean;
    /**
     * Category date level to disallow smaller Period-Over-Period levels. For internal use only
     */
    minLevel: number;
}
