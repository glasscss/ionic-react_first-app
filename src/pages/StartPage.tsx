import {
   IonPage,
   IonContent,
   IonButton,
   IonGrid,
   IonRow,
   IonCol
} from '@ionic/react';

const StartPage: React.FC = () => (
   <IonPage>

      <IonContent>
         <IonGrid>
            <IonRow className="ion-align-items-center">
               <IonCol >
                  <IonButton
                     expand="block"
                     routerLink="/" >
                     Get Started
                  </IonButton>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
   </IonPage>
);
export default StartPage;
