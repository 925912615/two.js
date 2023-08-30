import Base from "./Base";
import { Props } from "src/types/shape";
import videoFrame from "./VideoFrame";
export default class extends Base {
    progress: number;
    arc: Base;
    parent: videoFrame;
    video: HTMLVideoElement;
    enable: boolean;
    isActive: boolean;
    arcActive: boolean;
    readonly bgColor: string;
    readonly bgColor1: string;
    constructor(option: Props, parent: videoFrame, video: HTMLVideoElement);
    handleEvent(canvas: HTMLCanvasElement): void;
    checkActive(): void;
    updateProgress(): void;
    getFrame(): Base[];
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    drawMirror(osCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
}
