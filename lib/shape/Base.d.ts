import { Listener, Shape, Props } from '../types/shape';
import { shapeType_ } from 'src/types/drawBoard';
export default class implements Shape {
    private id;
    private listeners;
    type: shapeType_;
    selectable: boolean;
    props: Props;
    actived: boolean;
    transformOrigin: 'top_left' | 'center';
    constructor(type?: shapeType_);
    on(eventName: string, listener: Listener): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    transform(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    /**
     *
     * @param ctx 画布上下文
     * @param type 画布类型 1-画布实例，2-画布镜像
     */
    initOptions(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, type: 1 | 2): void;
    drawMirror(osCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
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
