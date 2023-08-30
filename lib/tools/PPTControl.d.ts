import Base from "src/shape/Base";
import PPTFrame from "./PPTFrame";
import { Option } from "src/shape/Scene";
import { Tween } from "@tweenjs/tween.js";
import { animateType } from "src/types/drawBoard";
import { Props } from "src/types/shape";
export default class {
    tabs: PPTFrame[];
    shapes: Miao[];
    tabIndex: number;
    curIndex: number;
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D | null;
    canvasPre: HTMLCanvasElement;
    constructor(canvas: HTMLCanvasElement, option?: Option);
    addTab(): void;
    removeTabByIndex(index: number): void;
    init(): void;
    preview(): void;
    qieke(shape: Miao, move: Tween<Props>, time: number): void;
    qiekeq1(shape: Miao, move: Tween<Props>, time: number): void;
    render(): void;
    animate(): void;
    get domElement(): HTMLCanvasElement;
}
declare class Miao extends Base {
    animateType: animateType;
    imageDate: HTMLImageElement;
    show: boolean;
    constructor(imageDate: HTMLImageElement, type: animateType);
    customDraw(ctx: CanvasRenderingContext2D): boolean;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
export {};
