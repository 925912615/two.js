type historyData = {
    name: string;
    data: any;
};
export default class Stack {
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
    push(option: historyData): void;
    pop(): void;
    getCurrent(): historyData | null;
    clear(): void;
    getSteps(): number;
    getCurSteps(): number;
}
export {};
