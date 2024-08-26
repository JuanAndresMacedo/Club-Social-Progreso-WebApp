import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import ApiRepository from './api-repository';
import GetAllNewsResponse from '../services/news/models/GetAllNewsResponse';
import { catchError, Observable } from 'rxjs';
import GetNewsByIdResponse from '../services/news/models/GetNewsByIdResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsApiRepositoryService extends ApiRepository{
  constructor(http: HttpClient) {
    super(environment.CSPApi, 'news', http);
  }

  public getNewsById(newsId: string): Observable<GetNewsByIdResponse>{
    return this.get<GetNewsByIdResponse>(`getById/${newsId}`).pipe(catchError(this.handleError));
  }

  public getLatestNews(): Observable<GetAllNewsResponse>{
    return this.get<GetAllNewsResponse>("getLatestNews").pipe(catchError(this.handleError));
  }

  public getAllNews() : Observable<GetAllNewsResponse>{
    return this.get<GetAllNewsResponse>('getAll').pipe(catchError(this.handleError));
  }
}
