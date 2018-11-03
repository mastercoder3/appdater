import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsApi } from '../../modals/newapi';
import { HelperProvider } from '../../providers/helper/helper';
import { ChanneldataPage } from '../channeldata/channeldata';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  channel: NewsApi;
  toggeld: boolean;
  channels: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider, private firestore: FirestoreProvider) {
    this.channel = this.navParams.get('channel');
    this.toggeld = false;
  }

  onItemClick(item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    this.helper.presentToast(item.title, 3000, 'bottom')
  }

  toggle() {
    this.toggeld = !this.toggeld;
  }

  cancelSearch($event) {
    this.toggeld = false;
  }

  readMore(item){
    this.navCtrl.push(ChanneldataPage, { article: item })
  }

  ionViewDidLoad() {
    
  }

}
