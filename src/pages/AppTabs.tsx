import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { home, listCircle, settings } from "ionicons/icons";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { useAuth } from "../auth";

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Switch>
          <Route path="/my/home" component={Tab1} exact={true} />
          <Route path="/my/view" component={Tab2} exact={true} />
          <Route path="/my/settings" component={Tab3} />

          <Route path="/my/view/entries/:id">
            <Tab3 />
          </Route>
        </Switch>
        <Route
          path="/"
          render={() => <Redirect to="/my/home" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="view" href="/my/view">
          <IonIcon icon={listCircle} />
          <IonLabel>View list</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settings} />
          <IonLabel>Setting</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
