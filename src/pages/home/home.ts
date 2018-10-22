import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsApi } from '../../modals/newapi';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  requests: string;
  newsData: Observable<NewsApi>;

  constructor(public navCtrl: NavController, public apiNews: ApiserviceProvider) { 
    this.requests = "channels";
   }

   ngOnInit(){
    this.newsData =  this.apiNews.getNews();
    this.newsData.subscribe(resp => {
      console.log(resp)
    })
   }

}
