import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  constructor(public http: HttpClient, private firestore: AngularFirestore) {
    console.log('Hello FirestoreProvider Provider');
  }

  getChannel(uid) {
    return this.firestore.collection('channels').doc(uid).valueChanges();
  }

  getChannels(){
    return this.firestore.collection('channels').snapshotChanges();
  }

}
