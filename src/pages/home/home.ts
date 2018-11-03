import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsApi } from '../../modals/newapi';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { HelperProvider } from '../../providers/helper/helper';
import { ArticlePage } from '../article/article';
import { ChannelPage } from '../channel/channel';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirestoreProvider } from '../../providers/firestore/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  requests: string;
  newsData: NewsApi;
  dataByDomain: NewsApi; 
  toggled: boolean;
  myInput;
  channels: Observable<any>;
  channelName: any;

  constructor(public navCtrl: NavController, private apiNews: ApiserviceProvider, private helper: HelperProvider, private firestore: FirestoreProvider) {
    this.requests = "channels";
    this.toggled = false;
   }

  toggle(){
    this.toggled = !this.toggled;
  }

  cancelSearch($event){
    this.toggled = false;
  }

  onItemClick(item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    this.helper.presentToast(item.title, 3000, 'bottom')
  }

  readMore(item){
    this.navCtrl.push(ArticlePage, {article: item})
  }

  getByDomain(domain){
    this.apiNews.getByDomain(domain).subscribe(resp => {
      this.dataByDomain = resp;
      this.navCtrl.push(ChannelPage, { channel: this.dataByDomain })
    })
  }

  searchByKeyword(value) {
    this.apiNews.getSearchQuery(value).subscribe(resp => {
      this.newsData = resp;
    })
  }

   ngOnInit(){
     this.apiNews.getNews().subscribe(resp => {
       this.newsData =resp;
       console.log(this.newsData);
     })

     this.channels = this.firestore.getChannels().pipe(map(
       list => {
         return list.map(
           items => {
             const data = items.payload.doc.data();
             const id = items.payload.doc.id;
             return { id, ...data }
           }
         )
       }
     ));
   }

}
