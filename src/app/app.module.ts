import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import firebase from 'firebase';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { HeadertransparentbarPage } from '../pages/headertransparentbar/headertransparentbar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AuthService } from '../providers/auth-service';
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
    WelcomePage,
    HomePage,
    RegisterPage,
    LoginPage,
    HeadertransparentbarPage
  ],
  imports: [
    BrowserModule, HttpModule,
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
    RegisterPage,
    WelcomePage,
    TabsPage,
    LoginPage,
    HeadertransparentbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,GooglePlus,AuthService, SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
