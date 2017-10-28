import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HeadertransparentbarPage } from '../pages/headertransparentbar/headertransparentbar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
export const firebaseConfing={
  apiKey: "AIzaSyC7foNzzsNDbJGRPg-Xqm0siVCKEpqbOO8",
  authDomain: "auth-9c7d2.firebaseapp.com",
  databaseURL: "https://auth-9c7d2.firebaseio.com",
  projectId: "auth-9c7d2",
  storageBucket: "auth-9c7d2.appspot.com",
  messagingSenderId: "1031732184173"
}
firebase.initializeApp(firebaseConfing)
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e460234c'
  },
  'auth':{
    'facebook':{
      'scope':[]
    }
  }
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    LoginPage,
    HeadertransparentbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfing)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HeadertransparentbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
