import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonLoading } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AuthContext, useAuthInit } from "./auth";
import AppTabs from "./pages/AppTabs";
import LoginPage from "./pages/admin/loginPage";

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen={loading} />;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={auth!}>
        <IonReactRouter>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register"></Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Route></Route>
          </Switch>
          <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact={true}
          />
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};
export default App;
