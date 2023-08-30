import Arc, { ArcProps } from "src/shape/Arc";
import Arrow, { ArrowProps } from "src/shape/Arrow";
import BoxSelectFrame from "src/shape/BoxSelectFrame";
import Erase from "src/shape/Erase";
import Group, { GroupProps } from "src/shape/Group";
import Pen from "src/shape/pen";
import Pentagram, { PentagramProps } from "src/shape/Pentagram";
import Rect, { RectProps } from "src/shape/Rect";
import Scene, { Option } from "src/shape/Scene";
import Textarea from "src/shape/Textarea";
import Triangle, { TriangleProps } from "src/shape/Triangle";
import { darwModel } from "src/types/drawBoard";
import { Props } from "src/types/shape";
import Stack from "src/utils/Stack";
export default class extends Scene {
    history: Stack<{
        name: string;
        data: Props[];
    }>;
    model: darwModel;
    erase: Erase;
    pen: Pen;
    textarea: Textarea;
    boxSelect: BoxSelectFrame;
    private scale;
    ratio: number;
    private offsetx;
    private offsety;
    private rollerEventfn;
    constructor(canvas: HTMLCanvasElement, option?: Option);
    import(options: any): void;
    export(): string;
    animate(): void;
    setModel(type: darwModel): void;
    setHistory(): void;
    setShapes(): void;
    revokeCanvas(): void;
    recoverCanvas(): void;
    resetCanvas(): void;
    /**
     * 放大
     * @param x transformOrigin坐标偏移X轴
     * @param y transformOrigin坐标偏移Y轴
     * @param left 元素left位置
     * @param top 元素top位置
     * @returns
     */
    amplify(x?: number, y?: number, left?: number, top?: number): void;
    /**
    * 缩小
    * @param x transformOrigin坐标偏移X轴
    * @param y transformOrigin坐标偏移Y轴
    * @param left 元素left位置
    * @param top 元素top位置
    * @returns
    */
    reduce(x?: number, y?: number, left?: number, top?: number): void;
    /**
     * 移动
     * @param meth 移动的方式 top/bottom/left/right
     * @param count 移动的值
     */
    moveCanvas(meth: string, count: number): void;
    /**
     * 初始化滚轮事件
     */
    initRollerEvent(): void;
    /**
     * canvas滚轮事件执行函数
     * @param e :WheelEvent
     */
    rollerEvent(e: WheelEvent): void;
    /**
     * 解绑canvas默认滚轮事件
     */
    closeRollerEvent(): void;
    Rect(option: RectProps): Rect;
    Triangle(option: TriangleProps): Triangle;
    Arrow(option: ArrowProps): Arrow;
    Arc(option: ArcProps): Arc;
    Pentagram(option: PentagramProps): Pentagram;
    Group(option: GroupProps): Group;
    setCanvasCursor(url: string): void;
}
