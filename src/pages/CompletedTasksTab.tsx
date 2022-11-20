import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import TaskList from "../components/TaskList";
import { TasksContext } from "../components/TasksContext";

const CompletedTasksTab: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Completed Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Completed Tasks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TaskList tasks={tasks.filter((task) => task.completed)} />
      </IonContent>
    </IonPage>
  );
};

export default CompletedTasksTab;
