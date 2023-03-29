import { Props } from "src/types/shape";
import Base from "./Base";
export declare enum BoxChild {
    line = "line",
    base = "base",
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left",
    scale = "scale",
    topL = "topL",
    topR = "topR",
    bottomL = "bottomL",
    bottomR = "bottomR"
}
export declare const BoxChildList: Array<string>;
export default class extends Base {
    shapeMap: Map<string, string>;
    private readonly WIDTH;
    private readonly HEIGHT;
    private readonly borderColor;
    constructor(option: any);
    handlePoints(): {
        x: number;
        y: number;
    }[];
    handleProps(type: string): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
