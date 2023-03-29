import Scene from "src/shape/Scene";
export default class {
    state: 0 | 1;
    private scene;
    private enable;
    private type;
    private activedId;
    private shape;
    private activeShape?;
    private point;
    private mousemove;
    private mouseup;
    constructor(scene: Scene);
    open(): void;
    close(): void;
    handleMousemove(e: MouseEvent): void;
    handleMouseup(): void;
    handleFrameBox(type: string, id: string, e: MouseEvent): void;
}
