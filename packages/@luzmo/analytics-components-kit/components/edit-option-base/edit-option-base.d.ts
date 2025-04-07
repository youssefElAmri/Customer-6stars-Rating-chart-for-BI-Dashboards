import '@luzmo/lucero/field-label';
import '@luzmo/lucero/tooltip';
import { LuzmoElement } from '@luzmo/lucero/utils';
import { CSSResultArray, TemplateResult } from 'lit';
declare const LuzmoEditOptionBase_base: typeof LuzmoElement & {
    new (...args: any[]): import("@luzmo/lucero").SizedElementInterface;
    prototype: import("@luzmo/lucero").SizedElementInterface;
};
export declare abstract class LuzmoEditOptionBase extends LuzmoEditOptionBase_base {
    static styles: CSSResultArray;
    disabled: boolean;
    label: string;
    tooltip: string;
    extraLabel: string;
    extraLabelHasClickAction: boolean;
    extraLabelClickAction: any;
    extraLabelTooltip: string;
    protected abstract renderController(): TemplateResult;
    protected handleExtraLabelClick(event: MouseEvent): void;
    render(): TemplateResult<1>;
}
export {};
