import {
   IonButtons,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonToolbar,
   IonButton,
   IonIcon,
   IonImg,
   IonGrid,
   IonRow,
   IonSearchbar,
   IonCol,
   useIonAlert,
   IonFab,
   IonFabButton,
   IonLabel,
   IonCard,
   IonCardContent,
   IonList,
   IonItem,
   IonThumbnail
} from '@ionic/react';
import {addOutline, addSharp, cameraOutline} from 'ionicons/icons';
import {useParams} from 'react-router';
import React, {useState, useEffect} from 'react';

import {Device} from '@capacitor/device';
import {Filesystem, Directory, /*Encoding*/} from '@capacitor/filesystem';
import {Geolocation} from '@capacitor/geolocation';
import {Haptics} from '@capacitor/haptics';
import {LocalNotifications} from '@capacitor/local-notifications';
import {Share} from '@capacitor/share';
import {StatusBar, Style} from '@capacitor/status-bar';
import {Toast} from '@capacitor/toast';
import {AppLauncher} from '@capacitor/app-launcher';
import {Camera, CameraResultType, Photo} from '@capacitor/camera';
import {BleClient} from '@capacitor-community/bluetooth-le';
import {Contacts} from '@capacitor-community/contacts'
import {Browser} from '@capacitor/browser';


// import ExploreContainer from '../components/ExploreContainer';
import readAsBase64 from './../utils';
import './Page.css';

const Page: React.FC = () => {

   const logCurrentPosition = async () => {
      let coords = await Geolocation.getCurrentPosition();
      alert(JSON.stringify(coords));
   };

   const logDeviceInfo = async () => {
      let info = await Device.getInfo();
      alert(JSON.stringify(info));
   };

   const doVibrate = async () => {await Haptics.vibrate();};

   const doShare = async () => {
      let canShare = await Share.canShare();
      !canShare ? alert('Not suport share functionality') : await Share.share({
         title: 'Just a secret',
         text: 'A secret you must know but it is a secret',
         url: 'http://ionicframework.com/',
         dialogTitle: 'Share with buddies',
      });
   };

   const sendLocalNotification = async () => {
      await LocalNotifications.schedule({
         notifications: [{
            title: 'Just a simple local notification',
            body: 'A body',
            summaryText: 'Lorem ipsum dolor sit atmet',
            id: 1
         }]
      });
   };

   const showToast = async (text: string) => {
      try {
         // require PWA element loader
         await Toast.show({
            text: text,
            duration: 'short',
            position: 'bottom'
         });
      } catch (e) {
         alert(e);
         return;
      }
   };

   const checkCanOpenUrl = async () => {
      const {value} = await AppLauncher.canOpenUrl({
         url:
            'com.duongvanphi.myapp'
      }); alert('Can open url: ' + value);
   };

   const openPortfolioPage = async () => {
      await AppLauncher.openUrl({
         url: 'com.duongvanphi.myapp'
      });
   };

   const PHOTO_DIRECTORY = Directory.External;

   const [imgSource, setImgSource] = useState('');
   const [photos, setPhotos] = useState<any>([]);

   const takePicture = async () => {
      const image = await Camera.getPhoto({
         quality: 100,
         allowEditing: true,
         resultType: CameraResultType.Uri
      });
      // alert(JSON.stringify(image));
      let uri = image.webPath || '';
      setImgSource(uri);
      let result = await savePicture(image);
      showToast(result.uri);
      loadLocalImages();

   };

   const savePicture = async (image: Photo) => {
      let savePath = new Date().getTime() + '.' + image.format;

      let base64Data = await readAsBase64(image);
      return await Filesystem.writeFile({
         path: savePath,
         directory: PHOTO_DIRECTORY,
         data: base64Data
      });

   };


   const getContacts = async () => {
      try {
         let contacts = await Contacts.getContacts();
         alert(JSON.stringify(contacts));
      } catch (e) {
         alert(e);
         return;
      }
   }


   const bluetoothStuff = async () => {
      try {
         await BleClient.initialize();
         let isEnabled = await BleClient.isEnabled();
         let results = isEnabled && await BleClient.requestDevice({
            services: ['0000180d-0000-1000-8000-00805f9b34fb'],
            allowDuplicates: true
         });
         alert(JSON.stringify(results));
      } catch (e) {
         alert(e);
      }
   };

   const openBrowser = async (url:string) => {
      try {
         await Browser.open({
            url: url
         });
      } catch (e) {
         alert(e);
      }
   };

   const loadLocalImages = async () => {
         try {
            let readResult = await Filesystem.readdir({
               path: '',
               directory: Directory.External
            });
            // alert(readResult.files);
            let dataList = [];
            for (let item of readResult.files.reverse()) {
               dataList.push(await readPhoto(item));
            }
            setPhotos(dataList);
         } catch (e) {
            alert(e);
            return;
         }
      };

   const readPhoto = async (path: string) => {
      let readResult = await Filesystem.readFile({
         path: path,
         directory: PHOTO_DIRECTORY
      });
      return 'data:image/jpeg;base64,' + readResult.data as string;
   };

   useEffect(() => {
      null && (async () => {
         try {
            await StatusBar.setStyle({style: Style.Light});
            alert('set');
         } catch (e) {
            alert(e);
            return;
         }
      })();

      loadLocalImages();

      null && (async () => {
         try {
            let status = await LocalNotifications.requestPermissions();
            alert(JSON.stringify(status));
         } catch (e) {
            alert(e);
            return;
         }
      })();

      null && (async () => {
         try {
            let f = await Filesystem.readFile({
               path: '1657934389741.jpeg',
               directory: PHOTO_DIRECTORY
            });
            alert(JSON.stringify(f));
         }
         catch (e) {
            alert(e + photos[0]);
         }
      })();
   }, []);



   const {name} = useParams<{name: string;}>();
   const [presentAlert] = useIonAlert();

   return (
      <IonPage>
         <IonHeader translucent={true}>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonMenuButton />
               </ IonButtons>
               <IonTitle>{name}</ IonTitle>
            </ IonToolbar>
         </ IonHeader>
         <IonContent fullscreen={true}>
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">{name}</ IonTitle>
               </ IonToolbar>
            </ IonHeader>
            <IonSearchbar />
            <IonGrid>
               <IonRow>
                  <IonCol>
                     <IonButton onClick={() => logDeviceInfo()}>
                        Device Info
                     </ IonButton>
                     <IonButton onClick={() => logCurrentPosition()}>
                        Current Position
                     </ IonButton>
                     <IonButton onClick={() => doVibrate()}>
                        Vibrate
                     </ IonButton>
                     <IonButton onClick={() => doShare()}>
                        Share
                     </ IonButton>
                     <IonButton onClick={() => showToast('Hello UwU!')}>
                        Show A Toast
                     </ IonButton>
                     <IonButton onClick={() => bluetoothStuff()}>
                        Bluetooth
                     </ IonButton>
                     <IonButton fill='clear' onClick={() => openBrowser('http://capacitorjs.com/')}>
                        Open 'http://capacitorjs.com/'
in Browser
                     </ IonButton>
                     <IonButton onClick={() => presentAlert({
                        header: 'Alert',
                        subHeader: 'Important message',
                        message: 'This is an alert!',
                        buttons: [{
                           text: 'OK',
                           role: 'confirm'
                        },
                        {
                           text: 'Cancle',
                           role: 'cancle'
                        }],
                     })}>
                        Alert
                     </IonButton>
                  </ IonCol>
               </ IonRow>
               <IonRow>
                  <IonCol className="ion-text-center ">
                     <IonButton fill="outline" onClick={() => takePicture()}>
                        Take A Picture
                        <IonIcon slot="start" icon={cameraOutline} />
                     </ IonButton>
                  </ IonCol>
               </ IonRow>
               <IonRow>

                  {/*imgSource && <IonImg src={imgSource} />*/}
                  <IonCol>
                     <IonList>
                        {
                           photos !== [] && photos.map((item: string, index: number) => {
                              return (
                                 <IonItem key={index}>
                                    <IonLabel>Image {index}</IonLabel>
                                 
                                 </IonItem>
                              )
                           })
                     }
                     </IonList>
                  </IonCol>
               </ IonRow>
            </ IonGrid>
            <IonFab vertical='bottom' horizontal='end' slot='fixed'>
               <IonFabButton>
                  <IonIcon
                     ios={addOutline}
                     md={addSharp}
                  ></IonIcon>
               </IonFabButton>
            </IonFab>
         </ IonContent>
      </ IonPage >
   );
};

export default Page;
