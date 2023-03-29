import Base from "./Base";
type darwModel = 'fill' | 'stroke' | 'all';
interface RectProps {
    x: number;
    y: number;
    width: number;
    height: number;
    borderWidth?: number;
    borderColor?: string;
    bgcolor?: string;
    model?: darwModel;
    hollow?: boolean;
}
export default class extends Base {
    model: darwModel;
    hollow: boolean;
    constructor(option: RectProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
export {};
