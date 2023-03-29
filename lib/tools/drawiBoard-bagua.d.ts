import Erase from "src/shape/Erase";
import Pen from "src/shape/Pen";
import Scene, { Option } from "src/shape/Scene";
import Textarea from "src/shape/Textarea";
import { darwModel } from "src/types/drawBoard";
import { Props } from "src/types/shape";
import Stack from "src/utils/Stack";
export default class extends Scene {
    history: Stack;
    model: darwModel;
    erase: Erase;
    pen: Pen;
    textarea: Textarea;
    private scale;
    ratio: number;
    private offsetx;
    private offsety;
    private rollerEventfn;
    constructor(option?: Option);
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
    Rect(option: Props): void;
}
