import { LitElement, ReactiveElement } from 'lit';
type Constructor<T = Record<string, unknown>> = {
    new (...args: any[]): T;
    prototype: T;
};
export interface LuzmoInterface {
    shadowRoot: ShadowRoot;
    isLTR: boolean;
    hasVisibleFocusInTree(): boolean;
    dir: 'ltr' | 'rtl';
}
export declare function LuzmoMixin<T extends Constructor<ReactiveElement>>(constructor: T): T & Constructor<LuzmoInterface>;
declare const LuzmoElement_base: typeof LitElement & Constructor<LuzmoInterface>;
export declare class LuzmoElement extends LuzmoElement_base {
}
export {};
