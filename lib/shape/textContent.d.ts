import Base from "./Base";
import { Props } from "src/types/shape";
export default class extends Base {
    constructor(option: Props);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
