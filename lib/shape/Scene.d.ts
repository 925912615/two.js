import EventSimulator, { ActionType } from '../utils/EventSimulator';
import { Shape } from 'src/types/shape';
import ShapeEvent from 'src/plugin/ShapeEvent';
import Group from './Group';
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
    group: Array<Group>;
    shapesEvent: ShapeEvent;
    emptySpace: boolean;
    activeShape?: Shape | null;
    constructor(canvas: HTMLCanvasElement, option?: Option);
    handleCreator: (type: ActionType) => (evt: MouseEvent) => void;
    hitJudge(x: number, y: number): string;
    add(shape: Shape): void;
    remove(id: string): void;
    render(): void;
    clearCanvas(): void;
    updateCanvasInfo(): void;
    get domElement(): HTMLCanvasElement;
}
