export default class {
    size: number;
    scene: any;
    private enable;
    private mousedownFn;
    private mousemoveFn;
    private mouseupFn;
    private points;
    constructor(scene: any);
    open(): void;
    close(): void;
    draw(x: number, y: number, ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    mousedown: (ctx: any, event: MouseEvent) => void;
    mousemove: (ctx: any, osCtx: any, event: MouseEvent) => void;
    mouseup: (ctx: any, event: MouseEvent) => void;
}
