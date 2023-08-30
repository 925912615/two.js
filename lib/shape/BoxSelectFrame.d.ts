import { Shape } from "src/types/shape";
import Scene from "./Scene";
export default class {
    scene: Scene;
    select: boolean;
    selectShape: Shape[];
    private enable;
    private shape;
    private mousedown;
    private mousemove;
    private mouseup;
    private point;
    constructor(scene: Scene);
    open(): void;
    close(): void;
    private handleMousedown;
    private handleMousemove;
    private handleMouseup;
    is_rect_cross(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
    judgeIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
}
