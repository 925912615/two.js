import Base from "./Base";
interface RectProps {
    size: number;
    textList: Array<string>;
    lineHeight: number;
}
export default class extends Base {
    constructor(option: RectProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
export {};
