import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeadertransparentbarPage } from '../headertransparentbar/headertransparentbar';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  openTransparentBar():any {
    this.navCtrl.push(HeadertransparentbarPage)
  }

  Go(page){
    this.navCtrl.push(page);
  }
 
}
