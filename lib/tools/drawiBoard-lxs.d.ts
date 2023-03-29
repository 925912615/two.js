import Scene from "src/shape/Scene";
export default class {
    private scene;
    private scale;
    ratio: number;
    private offsetx;
    private offsety;
    constructor(opstion: Scene);
    /**
     * 放大
     * @param x 放大开始的x轴
     * @param y 放大开始的y轴
     * @returns
     */
    amplify(x?: number, y?: number): void;
    /**
     * 缩小
     * @param x 缩小开始的x轴
     * @param y 缩小开始的y轴
     * @returns
     */
    reduce(x?: number, y?: number): void;
    /**
     * 移动
     * @param meth 移动的方式 top/bottom/left/right
     * @param count 移动的值
     */
    moveCanvas(meth: string, count: number): void;
}
