import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../../theme/components.css";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import { Redirect } from "react-router";
import { useAuth } from "../../auth";
import { auth } from "../../firebase";
const LoginPage: React.FC = () => {
  const { loggedIn } = useAuth();
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorMessage, setErr] = useState("");
  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(
        userDetail.email,
        userDetail.password
      );
    } catch (error) {
      setErr(error.message!);
      setStatus({ loading: false, error: true });
      console.log(error);
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }

  return (
    <IonPage>
      {status.loading && (
        <div>
          <IonAlert isOpen={status.loading} message={`Loading ...`} />
        </div>
      )}
      {status.error && (
        <IonAlert
          isOpen={status.error}
          onDidDismiss={() => setStatus({ error: false, loading: false })}
          header={"Login failed"}
          message={`${errorMessage}`}
          buttons={["OK"]}
        />
      )}
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Agent Login Page </div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard color="light">
          <div className="ion-text-center">
            <img
              src="/assets/logo.svg"
              alt="login illustration"
              height="200 px"
            />
          </div>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonInput
                value={userDetail.email}
                onIonChange={(e) =>
                  setUserDetail({
                    email: e.detail.value!,
                    password: userDetail.password,
                  })
                }
                type="text"
                placeholder="forcess97@gmail.com"
              />
            </IonItem>
            <IonItem>
              <IonInput
                value={userDetail.password}
                onIonChange={(e) =>
                  setUserDetail({
                    email: userDetail.email,
                    password: e.detail.value!,
                  })
                }
                type="password"
                placeholder="*******"
              />
            </IonItem>
            <div className="ion-text-end ion-margin-top">Forgot password?</div>
          </IonCardContent>
        </IonCard>

        <IonButton
          color="dark"
          onClick={handleLogin}
          className="ion-margin-start ion-margin-end"
          expand="block"
        >
          LOGIN
        </IonButton>
        <div className="ion-text-center">
          <IonText>Or</IonText>
        </div>
        <IonRow>
          <IonCol>
            <IonButton expand="block">
              <IonIcon icon={logoFacebook} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="danger" expand="block">
              <IonIcon icon={logoGoogle} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="light" expand="block">
              <IonIcon icon={logoApple} />
            </IonButton>
          </IonCol>
        </IonRow>
        <IonButton
          routerLink="/register"
          className="ion-margin-start ion-margin-end"
          fill="clear"
          expand="full"
          color="dark"
        >
          DON'T HAVE ACCOUNT YET?
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
