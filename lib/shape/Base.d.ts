import { Listener, Shape, Props } from '../types/shape';
export default class implements Shape {
    private id;
    private listeners;
    props: Props;
    actived: boolean;
    constructor();
    on(eventName: string, listener: Listener): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    transform(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    getListeners(): {
        [name: string]: Listener[];
    };
    getRgbaId(): string;
    setProps(option: Props): void;
    get Listeners(): {
        [name: string]: Listener[];
    };
    get Id(): string;
}
