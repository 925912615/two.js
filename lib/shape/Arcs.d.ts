import Base from "./Base";
type Point = [number, number];
export default class extends Base {
    points: Point[];
    size: number;
    fillStyle: string;
    constructor(points: Point[], size: number, fillStyle?: string);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
export {};
