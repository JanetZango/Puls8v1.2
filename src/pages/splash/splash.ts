import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PulselistPage } from '../pulselist/pulselist';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let timer = setInterval(()=>{
      clearInterval(timer);
      this.navCtrl.setRoot(PulselistPage);
    }, 5000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
