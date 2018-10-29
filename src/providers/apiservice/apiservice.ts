import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsApi } from '../../modals/newapi';

@Injectable()
export class ApiserviceProvider {

  url: string = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4cb2d821041c4bd499a62deff27c2bb5";
  urlTechcrunch: string = "https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=4cb2d821041c4bd499a62deff27c2bb5"
  urlTechradar: string = "https://newsapi.org/v2/everything?domains=techradar.com&apiKey=4cb2d821041c4bd499a62deff27c2bb5"
  urlBBC: string = "https://newsapi.org/v2/everything?domains=bbc.com&apiKey=4cb2d821041c4bd499a62deff27c2bb5"
  urlAndroidAuthority: string = "https://newsapi.org/v2/everything?domains=androidauthority.com&apiKey=4cb2d821041c4bd499a62deff27c2bb5"
  urlTime: string = "https://newsapi.org/v2/everything?domains=time.com&apiKey=4cb2d821041c4bd499a62deff27c2bb5"
  urlAryNews: string = "https://newsapi.org/v2/everything?domains=arynews.tv&apiKey=4cb2d821041c4bd499a62deff27c2bb5"

  constructor(public httpClient: HttpClient) {}

  getNews() : Observable<NewsApi>{
    return this.httpClient.get<NewsApi>(this.url);
  }

  getTechcrunch(): Observable<NewsApi>{
    return this.httpClient.get<NewsApi>(this.urlTechcrunch);
  }

}
