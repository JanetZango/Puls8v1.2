import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PulsedbProvider } from '../../providers/pulsedb/pulsedb';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  loader: string;
  logsucc: string;
  logerr: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, private pulsedb: PulsedbProvider) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
  }
  
  ngOnInit(){
    this.loader = 'false';
    this.logsucc = 'false';
    this.logerr = 'false';
  }

	login(form: NgForm) {
    this.loader = 'true';

		this.pulsedb.login(form.value.email, form.value.password).then((data) => {
      this.loader =  'false';
      this.logsucc = 'true';
    }).catch((error) => {
      this.loader = 'false';
      this.logerr = 'true';
    });
  }
  closemodal(){
    this.navCtrl.setRoot('PulseListPage');
  }
}
