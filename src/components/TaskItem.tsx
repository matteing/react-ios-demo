import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";
import { useContext } from "react";
import { Task } from "../types";
import { TasksContext } from "./TasksContext";
import "./TaskItem.css";

export default function TaskItem({ task }: { task: Task }) {
  // This should be allowed to dispatch actions.
  const { dispatch } = useContext(TasksContext);
  return (
    <IonItem
      key={task.id}
      className={task.completed ? "completed" : ""}
      onClick={() => dispatch({ type: "toggle-completed", payload: task.id })}
    >
      <IonCheckbox checked={task.completed} slot="start"></IonCheckbox>
      <IonLabel>{task.content}</IonLabel>
    </IonItem>
  );
}
