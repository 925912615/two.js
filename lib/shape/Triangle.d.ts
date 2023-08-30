import Base from "./Base";
export interface TriangleProps {
    x: number;
    y: number;
    width: number;
    height: number;
    borderWidth?: number;
    borderColor?: string;
    bgcolor?: string;
}
export default class extends Base {
    constructor(option: TriangleProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
