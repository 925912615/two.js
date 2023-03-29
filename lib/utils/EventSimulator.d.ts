import { Listener, EventNames } from "../types/shape";
export interface Action {
    type: ActionType;
    id: string;
}
export declare enum ActionType {
    Down = "DOWN",
    Up = "UP",
    Move = "MOVE"
}
export default class EventSimulator {
    private listenersMap;
    private lastDownId;
    private lastMoveId;
    addAction(action: Action, evt: MouseEvent): void;
    addListeners(id: string, listeners: {
        [eventName: string]: Listener[];
    }): void;
    fire(id: string, eventName: EventNames, event: MouseEvent): void;
}
