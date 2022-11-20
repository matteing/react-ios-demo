import { createContext } from "react";
import { Action } from "../state";
import { Task } from "../types";

export const TasksContext = createContext<{
  tasks: Task[];
  dispatch: (action: Action) => void;
}>({
  tasks: [],
  dispatch: () => undefined,
});
