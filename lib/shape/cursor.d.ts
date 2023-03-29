import Base from "./Base";
interface RectProps {
    x: number;
    y: number;
    size: number;
    lineHeight: number;
}
export default class extends Base {
    private count;
    textRow: number;
    constructor(option: RectProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
export {};
