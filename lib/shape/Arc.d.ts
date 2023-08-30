import Base from "./Base";
import { Props } from "src/types/shape";
export interface ArcProps {
    x: number;
    y: number;
    radius: number;
    borderWidth?: number;
    borderColor?: string;
    bgcolor?: string;
}
export default class extends Base {
    constructor(option: ArcProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
