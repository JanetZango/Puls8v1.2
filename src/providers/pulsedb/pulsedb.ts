import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
/*
  Generated class for the PulsedbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PulsedbProvider {

  constructor() {
    console.log('Hello PulsedbProvider Provider');
  }

  register(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
