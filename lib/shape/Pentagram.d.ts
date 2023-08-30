import Base from "./Base";
import { Props } from "src/types/shape";
export interface PentagramProps {
    x: number;
    y: number;
    radius: number;
    borderWidth?: number;
    borderColor?: string;
    bgcolor?: string;
}
export default class extends Base {
    constructor(option: PentagramProps);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
