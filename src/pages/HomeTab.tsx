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

/*
Some demo React components you can use.

function Greeting({ name }: { name: string }) {
  return <div>Hello, {name}!</div>;
}

function NameForm() {
  // Initialize component state to empty string.
  const [inputValue, setInputValue] = useState("");
  return (
    <form>
      <input
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <Greeting name={inputValue} />
    </form>
  );
}
 */

const AllTasksTab: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TaskList tasks={tasks} />
      </IonContent>
    </IonPage>
  );
};

export default AllTasksTab;
