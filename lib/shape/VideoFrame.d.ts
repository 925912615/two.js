import Base from "./Base";
import Progress from "./Progress";
import Scene from "./Scene";
import VideoControll from "./VideoControll";
export default class extends Base {
    video: HTMLVideoElement;
    progress: Progress;
    controll: VideoControll;
    isActive: boolean;
    timer: any;
    scene: Scene;
    readonly toolsHeight: number;
    constructor(scene: Scene);
    getResources(): void;
    init(): void;
    handleEvent(): void;
    checkActive(): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
}
