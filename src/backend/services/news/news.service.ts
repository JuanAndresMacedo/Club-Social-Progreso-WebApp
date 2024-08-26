import { Injectable } from '@angular/core';
import { News } from './models/news.model';
import GetAllNewsResponse from './models/GetAllNewsResponse';
import { map, Observable } from 'rxjs';
import { NewsApiRepositoryService } from '../../repositories/news-api-repository.service';
import GetNewsByIdResponse from './models/GetNewsByIdResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private readonly _repository: NewsApiRepositoryService) { }

  public getAllNews(): Observable<GetAllNewsResponse> {
    return this._repository.getAllNews();
  }

  public getLatestNews(): Observable<GetAllNewsResponse> {
    return this._repository.getLatestNews();
  }

  public getNewsById(newsId: string): Observable<GetNewsByIdResponse> {
    return this._repository.getNewsById(newsId);
  }
}
