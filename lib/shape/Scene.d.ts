import EventSimulator, { ActionType } from '../utils/EventSimulator';
import { Shape } from 'src/types/shape';
import ShapeEvent from 'src/plugin/ShapeEvent';
export type Option = {
    width: number;
    height: number;
};
export default class {
    private canvas;
    private osCanvas;
    ctx: CanvasRenderingContext2D | null;
    osCtx: OffscreenCanvasRenderingContext2D | null;
    dpr: number;
    width: number;
    height: number;
    eventSimulator: EventSimulator;
    IDS: Set<string>;
    historyID: string[];
    shapes: Array<Shape>;
    shapesEvent: ShapeEvent;
    constructor(option?: Option);
    handleCreator: (type: ActionType) => (evt: MouseEvent) => void;
    hitJudge(x: number, y: number): string;
    add(shape: Shape): void;
    render(): void;
    clearCanvas(): void;
    get domElement(): HTMLCanvasElement;
}
