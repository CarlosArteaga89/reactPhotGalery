import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from "../hooks/usePhotoGallery";


const Tab2: React.FC = () => {
    const { photos, tomarFoto } = usePhotoGallery();
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Galeria</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonGrid>
                  <IonRow>
                      {photos.map((photo, index) => (
                          <IonCol size="6" key={index}>
                              <IonImg class="foto" src={photo.webviewPath} />
                          </IonCol>
                      ))}
                  </IonRow>
              </IonGrid>
              <IonFab vertical="bottom" horizontal="center" slot="fixed">
                  <IonFabButton onClick={() => tomarFoto()}>
                      <IonIcon icon={camera}></IonIcon>
                  </IonFabButton>
              </IonFab>
            <ExploreContainer name="Tab 2 page" />
          </IonContent>
        </IonPage>
      );
};

export default Tab2;
