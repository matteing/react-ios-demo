import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  checkboxOutline,
  home,
  terminalOutline,
  timeOutline,
} from "ionicons/icons";
import HomeTab from "./pages/HomeTab";
import { useReducer } from "react";
import { TasksContext } from "./components/TasksContext";
import { Task } from "./types";
import ViewStateTab from "./pages/ViewStateTab";
import { reducer } from "./state";
import RemainingTasksTab from "./pages/RemainingTasksTab";
import CompletedTasksTab from "./pages/CompletedTasksTab";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const DEFAULT_STATE: Task[] = [
  { id: "task-1", completed: false, content: "Wake up early" },
  { id: "task-2", completed: false, content: "Get groceries" },
  { id: "task-3", completed: false, content: "Watch Mr. Cash on TV" },
  { id: "task-4", completed: false, content: "Appear on Puerto Rico Gana" },
  { id: "task-5", completed: true, content: "Catch Mewtwo" },
];

const App: React.FC = () => {
  const [tasks, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <HomeTab />
              </Route>
              <Route exact path="/remaining">
                <RemainingTasksTab />
              </Route>
              <Route path="/completed">
                <CompletedTasksTab />
              </Route>
              <Route path="/view-state">
                <ViewStateTab />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/remaining">
                <IonIcon icon={timeOutline} />
                <IonLabel>Remaining</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/completed">
                <IonIcon icon={checkboxOutline} />
                <IonLabel>Completed</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/view-state">
                <IonIcon icon={terminalOutline} />
                <IonLabel>View State</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </TasksContext.Provider>
  );
};

export default App;
