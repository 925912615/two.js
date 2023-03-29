export default class {
    private scene;
    private isMove;
    private addcanvasMousedown;
    private addcanvasMousemove;
    private addcanvasMouseup;
    private wayList;
    size: number;
    color: string;
    shape: any;
    constructor(scene: any);
    /**
     * 打开画笔
     */
    open(): void;
    /**
     * 鼠标按下
     * @param ctx 画布
     * @param e 事件回调参数
     */
    canvasMousedown(ctx: CanvasRenderingContext2D, e: MouseEvent): void;
    /**
     * 鼠标移动
     *  @param ctx 画布
     *  @param e 事件回调参数
     */
    canvasMousemove(ctx: CanvasRenderingContext2D, e: MouseEvent): void;
    /**
     * 鼠标抬起事件
     * @param e 事件回调参数
     */
    canvasMouseup(e: MouseEvent): void;
    /**
     * 画笔关闭
     */
    close(): void;
}
