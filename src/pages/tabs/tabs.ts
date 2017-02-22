import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = LoginPage;
  tab2Root: any = RegistroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
