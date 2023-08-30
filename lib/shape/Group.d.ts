import Base from "./Base";
import { Props, Shape } from "src/types/shape";
export interface GroupProps {
    x: number;
    y: number;
    width: number;
    height: number;
    overflow?: 'hide' | 'show';
    borderWidth?: number;
    borderColor?: string;
    bgcolor?: string;
    shapes?: Shape[];
}
export default class extends Base {
    overflow: 'hide' | 'show';
    constructor(option?: GroupProps);
    add(shape: Shape): void;
    remove(shapeId: string): void;
    removeAll(): void;
    draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D): void;
    setProps(option: Props): void;
}
