import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsApi } from '../../modals/newapi';

@Injectable()
export class ApiserviceProvider {

  url: string = "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=4cb2d821041c4bd499a62deff27c2bb5";

  constructor(public httpClient: HttpClient) {}

  getNews() : Observable<NewsApi>{
    return this.httpClient.get<NewsApi>(this.url);
  }

}
