export interface Shape {
    props: Props;
    actived: boolean;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    on(name: string, listener: Listener): void;
    getListeners(): {
        [name: string]: Listener[];
    };
    getRgbaId(): string;
    setProps(option: Props): void;
}
export interface Listener {
    (evt: MouseEvent, id: string): void;
}
export declare enum EventNames {
    click = "click",
    mousedown = "mousedown",
    mousemove = "mousemove",
    mouseup = "mouseup",
    mouseenter = "mouseenter",
    mouseleave = "mouseleave"
}
export declare class Props {
    id: string;
    width: number;
    height: number;
    x: number;
    y: number;
    bgcolor: string;
    borderWidth: number;
    borderColor: string;
    fontSize: string;
    textColor: string;
    text: string;
    scaleX: number;
    scaleY: number;
    rotation: number;
    size: number;
    textList: Array<string>;
    lineHeight: number;
    lineWidth: number;
    lateX: number;
    lateY: number;
}
