import Base from "./Base";
import { Props } from "src/types/shape";
export default class extends Base {
    private pointList;
    constructor(option: any);
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
