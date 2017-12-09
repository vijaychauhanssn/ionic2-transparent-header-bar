import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {AuthService} from "../../providers/auth-service";
import { FacebookAuth, User, AuthLoginResult } from '@ionic/cloud-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  resposeData : any;
  userData = {"username":"", "password":""};

loginDettials:AuthLoginResult;
  constructor(public navCtrl: NavController,private googleplus:GooglePlus,  private facebook: FacebookAuth, private user: User, public navParams: NavParams,public authService: AuthService, private toastCtrl:ToastController) {
  }

  loginGoogle(){
  this.googleplus.login({
    'webClientId':'1031732184173-f4sngf6hd1d5gjcqkqf30717u3e47oq4.apps.googleusercontent.com',
    'offline':true
  }).then(res=>{
    firebase.auth().signInWithCredential(firebase.auth.GithubAuthProvider.credential(res.idToken))
    .then(suc=>{
      alert("LOGIN SUCCESS")
    }).catch(ns=>{
      alert("NOT SUCCESS")
    })
  })
}

ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login():Promise<void>{
    try{
      const token = await this.facebook.getToken();
      if(token) {
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.loginDettials =await this.facebook.login();
        if(this.loginDettials.token){
          await this.facebook.storeToken(this.loginDettials.token);
          this.navCtrl.setRoot(HomePage);
        }
      }
      // this.loginDettials=await this.facebookAuth.login()
      // console.log(this.loginDettials);
      // console.log(this.user.social.facebook);
      // await this.facebookAuth.storeToken(this.loginDettials.token);
      // const token = await this.facebook.getToken();
      // console.log(token);
    }
    catch(e){
      console.error(e);

    }

  }

  login_page(){
    if(this.userData.username && this.userData.password){
     this.authService.postData(this.userData, "login").then((result) =>{
     this.resposeData = result;
     console.log(this.resposeData);
     if(this.resposeData.userData){
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
     this.navCtrl.push(TabsPage);
   }
   else{
     this.presentToast("Please give valid username and password");
   }
     
     }, (err) => {
       //Connection failed message
     });
    }
    else{
     this.presentToast("Give username and password");
    }
   
   }
 
   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }
 
openHomePage():any {
  this.navCtrl.setRoot(HomePage);
}
Go(page){
  this.navCtrl.push(page);
}


}
