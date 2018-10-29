import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsApi } from '../../modals/newapi';
import { HelperProvider } from '../../providers/helper/helper';
import { ChanneldataPage } from '../channeldata/channeldata';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private helper: HelperProvider) {
    this.channel = this.navParams.get('channel')
    console.log(this.channel)
  }

  onItemClick(item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    this.helper.presentToast(item.title, 3000, 'bottom')
  }

  readMore(item){
    this.navCtrl.push(ChanneldataPage, { article: item })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }

}
