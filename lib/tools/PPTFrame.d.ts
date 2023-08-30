import { animateType } from "src/types/drawBoard";
import DrawiBoardBagua from "./drawiBoard-bagua";
import { Option } from "src/shape/Scene";
import { Props, Shape } from "src/types/shape";
import { Tween } from "@tweenjs/tween.js";
export default class PPTFrame extends DrawiBoardBagua {
    animateType: animateType;
    count: number;
    animateClip: AnimateClip[];
    constructor(canvas: HTMLCanvasElement, option?: Option);
    taskQueue(): void;
    addAnimateGroup(): void;
    onMounted(scene: this): void;
    onBeforeUnMounted(scene: this): void;
    onUnMounted(scene: this): void;
    snapshot(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): HTMLImageElement;
}
declare class AnimateOption {
    shape: Shape;
    property: keyof Props;
    duration?: number;
    timingFunction?: string;
    delay?: number;
    start?: string | number | null;
    to: string | number;
}
declare class AnimateClip {
    readonly id: number;
    name: string;
    action: Tween<Props>[];
    isInitialize: boolean;
    private state;
    constructor(name?: string);
    addAnimate(option: AnimateOption): void;
    removeAnimate(id: number): void;
    start(): void;
    setName(name: string): void;
}
export {};
