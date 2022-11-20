import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import { TasksContext } from "../components/TasksContext";

const ViewStateTab: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View State</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">View State</IonTitle>
          </IonToolbar>
        </IonHeader>
        <pre>{JSON.stringify(tasks, null, 4)}</pre>
      </IonContent>
    </IonPage>
  );
};

export default ViewStateTab;
