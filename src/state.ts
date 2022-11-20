import { Task } from "./types";

export const initialState = [];

export interface ToggleCompletedAction {
  type: "toggle-completed";
  payload: string;
}

export interface ClearAction {
  type: "clear";
}

export type Action = ToggleCompletedAction | ClearAction;

export function reducer(state: Task[], action: Action) {
  switch (action.type) {
    case "toggle-completed":
      // Find and replace the `completed` field for the matching ID task.
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    case "clear":
      return [];
    default:
      throw new Error();
  }
}
