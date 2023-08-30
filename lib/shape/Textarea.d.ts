/// <reference types="node" />
import TextContent from "./textContent";
import { Props } from "src/types/shape";
export default class {
    props: Props;
    scene: any;
    cursor: HTMLElement | undefined;
    textarea: HTMLTextAreaElement | undefined;
    addcanvasMouseUp: Function;
    addKeyUp: any;
    addKeyDown: any;
    textContent: TextContent;
    textContentList: Array<TextContent>;
    timeout: NodeJS.Timeout;
    private moveKey;
    constructor(scene: any);
    /**
     * 打开
     */
    open(): void;
    /**
     * 画布按下
     * @param e MouseEvent
     */
    canvasMousedown(e: MouseEvent): void;
    /**
     * 关闭
     */
    close(): void;
    /**
     * 创建辅助工具
     */
    createAuxiliary(): void;
    /**
     * 创建光标
     * @param props 文字配置类
     * @returns HTMLElement
     */
    createCursor(props: Props): HTMLElement;
    /**
     * 创建输入框
     * @param props 文字配置类
     * @returns HTMLTextAreaElement
     */
    createTextarea(props: Props): HTMLTextAreaElement;
    /**
     * 过滤文本框内容
     */
    fillterText(text: string | undefined): never[] | undefined;
    /**
     * 更新光标位置
     */
    updateCursorPosition(): void;
    /**
     * 更新文本框位置
     * @param textarea 文本框
     * @param props 文字配置类
     */
    updateTextareaPosition(textarea: HTMLTextAreaElement, props: Props): void;
    /**
     * 键盘按下
     * @param e any
     */
    keyDown(e: any): void;
    /**
     * 键盘抬起
     * @param e any
     */
    keyUp(e: any): void;
    /**
     * 删除光标
     * @param cursor 光标
     */
    removeCursor(cursor: HTMLElement | undefined): void;
    /**
     * 删除文本框
     * @param textarea 文本框
     */
    removeTextarea(textarea: HTMLElement | undefined): void;
    /**
     * 获取光标在文本中的位置
     * @param textarea 文本框
     * @returns x:当前文本宽度 y:当前行高度
     */
    getCaretPosition(textarea?: HTMLTextAreaElement): any;
    /**
     * 更新画布上的文本
     * @param value 输入框文本
     */
    updateText(value: string): void;
    /**
     * 测量文本宽度
     * @param text 需要测量的文本
     * @returns 文本宽度
     */
    getTextWidth(text: string): number;
    /**
     * 设置行高
     * @param text 随便 根据当前size用canvas测量
     */
    setLineHeight(text: string): void;
    /**
     * 设置光标闪烁样式
     */
    createCss(): void;
    /**
     * 更新影子高宽
     * @param textList 用换行截取后的文本数组
     */
    updateWidthAndHeight(textList: Array<string>): void;
    /**
     * 初始化文本配置
     * @param e MouseEvent
     * @returns 文本配置
     */
    initProps(e: MouseEvent): Props;
}
