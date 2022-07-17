import {
   IonContent,
   IonIcon,
   IonItem,
   IonItemDivider,
   IonLabel,
   IonList,
   IonListHeader,
   IonMenu,
   IonMenuToggle,
   IonNote,
   IonToggle
} from '@ionic/react';

import {useLocation} from 'react-router-dom';
import {moonOutline, moonSharp, archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, cogOutline, cogSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
   url: string;
   iosIcon: string;
   mdIcon: string;
   title: string;
}

const appPages: AppPage[] = [
   {
      title: 'Inbox',
      url: '/page/Inbox',
      iosIcon: mailOutline,
      mdIcon: mailSharp
   },
   {
      title: 'Outbox',
      url: '/page/Outbox',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
   },
   {
      title: 'Favorites',
      url: '/page/Favorites',
      iosIcon: heartOutline,
      mdIcon: heartSharp
   },
   {
      title: 'Archived',
      url: '/page/Archived',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
   },
   {
      title: 'Trash',
      url: '/page/Trash',
      iosIcon: trashOutline,
      mdIcon: trashSharp
   },
   {
      title: 'Spam',
      url: '/page/Spam',
      iosIcon: warningOutline,
      mdIcon: warningSharp
   }
];


const Menu: React.FC = () => {
   const location = useLocation();

   const handleToggleDarkMode = async () => {
      document.body.classList.toggle("dark");
   };

   return (
      <IonMenu contentId="main" type="overlay">
         <IonContent>
            <IonList>
               <IonListHeader>Inbox</IonListHeader>
               <IonNote>hi@ionicframework.com</IonNote>
               {appPages.map((appPage, index) => {
                  return (
                     <IonMenuToggle key={index} autoHide={false}>
                        <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                           <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                           <IonLabel>{appPage.title}</IonLabel>
                        </IonItem>
                     </IonMenuToggle>
                  );
               })}
            </IonList>
            <IonItemDivider></IonItemDivider>
            <IonList>
               <IonListHeader>Theme</IonListHeader>
               <IonItem lines="none">
                  <IonIcon slot="start" ios={moonOutline} md={moonSharp}></IonIcon>
                  <IonLabel>Dark Mode</IonLabel>
                  <IonToggle onIonChange={() => handleToggleDarkMode()}></IonToggle>
               </IonItem>
            </IonList>
            <IonItemDivider></IonItemDivider>
            <IonList>
               <IonMenuToggle autoHide={false}>
                  <IonItem lines='none' className={location.pathname === '/page/Settings' ? 'selected' : ''} routerLink={'/page/Settings'} routerDirection="none" detail={false}>
                     <IonIcon slot='start' ios={cogOutline} md={cogSharp} ></IonIcon>
                     <IonLabel>Settings</IonLabel>
                  </IonItem>
               </IonMenuToggle>
            </IonList>
         </IonContent>
      </IonMenu>
   );
};

export default Menu;
