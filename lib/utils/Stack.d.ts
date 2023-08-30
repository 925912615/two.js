export default class Stack<T> {
    private steps;
    private steps_run;
    private history;
    /**
     * @param type 0=出栈，1=进栈
     * @param option 进栈数据
     */
    private setHistory;
    back(): void;
    go(): void;
    push(option: T): void;
    pop(): void;
    getCurrent(): T | null;
    clear(): void;
    getSteps(): number;
    getCurSteps(): number;
}
