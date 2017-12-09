import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeadertransparentbarPage } from '../headertransparentbar/headertransparentbar';
import { FacebookAuth, User,Auth } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  fullName:string;
  profilePicture:string;
  constructor(private user:User, private facebook:FacebookAuth,public auth: Auth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillLoad() {
    this.fullName=this.user.social.facebook.data.full_name;
    this.profilePicture=this.user.social.facebook.data.profile_picture;
  }

  openTransparentBar():any {
    this.navCtrl.push(HeadertransparentbarPage)
  }

  

logout(){
  this.auth.logout();
  this.navCtrl.setRoot(LoginPage);
}

}
