import { Props } from "src/types/shape";
import Base from "./Base";
import Scene from "./Scene";
interface TableData {
}
export default class extends Base {
    scene: Scene;
    data: TableData[];
    linesL: Line[];
    linesV: Line[];
    moveLine: Line;
    move: boolean;
    row: number;
    column: number;
    rowLen: number;
    columnLen: number;
    constructor(option: Props, scene: Scene);
    init(): void;
    handleEvent(): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
declare class Line extends Base {
    lineType: 'level' | 'vertical';
    child: any[];
    isShow: boolean;
    left: Line;
    right: Line;
    index: number;
    constructor(type: 'level' | 'vertical');
    init(shape: Line): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    drawMirror(osCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
}
export {};
