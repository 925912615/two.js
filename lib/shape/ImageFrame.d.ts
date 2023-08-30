import Base from "./Base";
import { Props } from "src/types/shape";
export default class extends Base {
    image: HTMLImageElement;
    dx: number;
    dy: number;
    dWidth: number;
    dHeight: number;
    constructor(image: HTMLImageElement, option: Props);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    drawMirror(osCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
}
