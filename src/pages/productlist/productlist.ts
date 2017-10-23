import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Alert} from 'ionic-angular/index';


/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {


  private productList = [
    {
      name: 'Layered Fruits with Caramelized Biscuits',
      detail: 'Layered Fruits with Caramelized Biscuits'
    },
          {
      name: 'Item2',
      detail: 'bar'
    },
  ];

  

 items: Array<string>;

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  
  }


  displayDetails(item){
    
    console.log('---> Clicked on talk: '+item.talk);
    let endTime = parseInt(item.time);
    endTime++;
    let msg = 'Disertante: '+item.name+'<br>Hora de inicio: '+item.time+':00<br>Hora de Finalizacion: '+endTime+':00<br>'
    
 
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }


  Go(page){
    this.navCtrl.push(page);
  }

}
