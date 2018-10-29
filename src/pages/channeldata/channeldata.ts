import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChanneldataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channeldata',
  templateUrl: 'channeldata.html',
})
export class ChanneldataPage {

  article;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = this.navParams.get('article')
  }

  ionViewDidLoad() {
    console.log(this.article);
  }

}
