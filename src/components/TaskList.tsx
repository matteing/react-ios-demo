import { Task } from "../types";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks) return null;
  // Sort the tasks predictably.
  // Remaining first, completed last.
  const sortedTasks = [...tasks].sort(
    (task1, task2) => Number(task1.completed) - Number(task2.completed)
  );
  return (
    <>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}
