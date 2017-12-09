import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService) {
  }
  signup(){
    this.authService.postData(this.userData,'signup').then((result) => {
     this.responseData = result;
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.navCtrl.push(TabsPage);
   }, (err) => {
     // Error log
   });

 }

 login(){
   //Login page link
   this.navCtrl.push(LoginPage);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Go(page){
    this.navCtrl.push(page);
  }

  
}
