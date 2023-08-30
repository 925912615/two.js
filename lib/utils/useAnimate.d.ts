import { Tween } from '@tweenjs/tween.js';
import { ITweenOption } from 'src/types/animateType';
type Actions = {
    action: Tween<any>;
    resolve: (arg0: boolean) => void;
    complete: () => Promise<void>;
};
export default class {
    props: Record<string, any> | null;
    actions: Actions[];
    constructor(props: Record<string, any>);
    to(duration: number, props: Record<string, number>, opts?: ITweenOption): this;
    start(): void;
}
export {};
