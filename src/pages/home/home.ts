import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsApi } from '../../modals/newapi';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { HelperProvider } from '../../providers/helper/helper';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  requests: string;
  newsData: NewsApi;
  techcrunchData: NewsApi;

  constructor(public navCtrl: NavController, private apiNews: ApiserviceProvider, private helper: HelperProvider) {
    this.requests = "channels";
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

  getTechcrunch(){
    this.apiNews.getTechcrunch().subscribe(resp => {
      this.techcrunchData = resp;
    })
  }

   ngOnInit(){
     this.apiNews.getNews().subscribe(resp => {
       this.newsData =resp;
     })
   }

}
