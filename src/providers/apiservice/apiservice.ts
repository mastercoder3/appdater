import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsApi } from '../../modals/newapi';

/*
  Generated class for the ApiserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiserviceProvider {

  url: string = "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=4cb2d821041c4bd499a62deff27c2bb5";

  constructor(public httpClient: HttpClient) {
    console.log('Hello ApiserviceProvider Provider');
  }

  getNews() : Observable<NewsApi>{
    return this.httpClient.get<NewsApi>(this.url);
  }

}
