import { HSL, HSLA, HSV, HSVA, RGB, RGBA, TinyColor } from '@ctrl/tinycolor';
import type { ReactiveElement } from 'lit';
export type ColorValue = string | number | TinyColor | HSVA | HSV | RGB | RGBA | HSL | HSLA;
export declare const extractHueAndSaturationRegExp: RegExp;
export declare const replaceHueAndSaturationRegExp: RegExp;
export declare const replaceHueRegExp: RegExp;
export declare class ColorController {
    protected host: ReactiveElement;
    protected applyColorToState: ({ h, s, v }: {
        h: number;
        s: number;
        v: number;
        a: number;
    }) => void;
    protected extractColorFromState: (controller: ColorController) => ColorValue;
    protected setColorProcess(currentColor: TinyColor, nextColor: ColorValue, format: string, isString: boolean): void;
    protected setColorMaintainHue(currentColor: TinyColor, nextColor: ColorValue, format: string, isString: boolean): void;
    protected setColorMaintainSaturation(currentColor: TinyColor, nextColor: ColorValue, format: string, isString: boolean): void;
    protected maintains: 'hue' | 'saturation';
    private saturation;
    constructor(host: ReactiveElement, { applyColorToState, extractColorFromState, maintains }: {
        applyColorToState({ h, s, v, a }: {
            h: number;
            s: number;
            v: number;
            a: number;
        }): void;
        extractColorFromState(controller: ColorController): ColorValue;
        maintains?: 'hue' | 'saturation';
    });
    applyColorFromState(): void;
    get hue(): number;
    set hue(value: number);
    get opacity(): number;
    set opacity(value: number);
    private _hue;
    private _opacity;
    protected getColorProcesses: Record<string, (color: TinyColor, isString: boolean) => ColorValue>;
    get value(): ColorValue;
    get color(): ColorValue;
    set color(color: ColorValue);
    private _color;
    getColor(format: string): ColorValue;
    setColor(color: TinyColor): void;
    getHslString(): string;
    private _previousColor;
    savePreviousColor(): void;
    restorePreviousColor(): void;
    _format: {
        format: string;
        isString: boolean;
    };
}
export { type HSL, type HSLA, type HSV, type HSVA, type RGB, type RGBA, type TinyColor } from '@ctrl/tinycolor';
