export * from './picker';
import { LuzmoPicker } from './picker';
declare global {
    interface HTMLElementTagNameMap {
        'luzmo-picker': LuzmoPicker;
    }
}
