export declare function formatter(content: any, options?: {
    level?: number;
    locale?: string;
    localFormats?: Record<string, any>;
    multi?: boolean;
    hideDuration?: boolean;
    hideCurrency?: boolean;
    trimZero?: boolean;
}): (value: number | string | Date) => string;
