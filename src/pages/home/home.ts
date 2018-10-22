import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  requests: string;

  constructor(public navCtrl: NavController) { 
    this.requests = "channels";
   }

}
