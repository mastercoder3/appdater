import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsApi } from '../../modals/newapi';

@Injectable()
export class ApiserviceProvider {

  url: string = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4cb2d821041c4bd499a62deff27c2bb5";  
  searchQuery: string = "https://newsapi.org/v2/everything?q=";  
  domainUrl: string = "https://newsapi.org/v2/everything?domains="

  constructor(public httpClient: HttpClient) {}

  getNews() : Observable<NewsApi>{
    return this.httpClient.get<NewsApi>(this.url);
  }

  getSearchQuery(query): Observable<NewsApi> {
    return this.httpClient.get<NewsApi>(this.searchQuery+query+"&from="+Date.now+"&sortBy=publishedAt&apiKey=4cb2d821041c4bd499a62deff27c2bb5");
  }

  getByDomain(domain): Observable<NewsApi> {
    return this.httpClient.get<NewsApi>(this.domainUrl+domain+"&apiKey=4cb2d821041c4bd499a62deff27c2bb5");
  }

}
