import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if(localStorage.getItem('userData')){
      this.navCtrl.setRoot(TabsPage);
    }
 
   }
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad Welcome');
   }
 
   login_page(){
    this.navCtrl.push(LoginPage);
   }
 
   signup(){
    this.navCtrl.push(RegisterPage, {}, {animate:false});
   }

}
