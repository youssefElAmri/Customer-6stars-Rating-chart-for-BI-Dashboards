import { FormatLocaleDefinition } from 'd3-format';
import { TimeLocaleDefinition } from 'd3-time-format';
export type DateFormat = {
    key: string;
    lev1: string;
    lev2: string;
    lev3: string;
    lev4: string;
    lev5: string;
    monthType?: string;
    longText?: boolean;
    weekday?: boolean;
    mmdd?: boolean | null;
    separator?: '/' | '-' | '.' | '~';
};
export type TimeFormat = {
    key: string;
    ampm: boolean;
    lev6: string;
    lev7: string;
    lev8: string;
    lev9: string;
};
export declare const DEFAULT_DATETIME_FORMAT = "%d-%m-%Y";
export interface LocaleFormat extends TimeLocaleDefinition, FormatLocaleDefinition {
    dateSeparator?: string;
    durationLongSuffix?: string[];
    durationShortSuffix?: string[];
    levels?: string[];
    multi?: string[];
    shortLevels?: string[];
    smartDateFormats?: DateFormat[];
    smartTimeFormats?: TimeFormat[];
}
export declare const SMART_DATE_FORMATS: DateFormat[];
export declare const SMART_TIME_FORMATS: TimeFormat[];
