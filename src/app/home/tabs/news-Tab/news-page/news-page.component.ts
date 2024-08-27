import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../backend/services/news/news.service';
import { News } from '../../../../../backend/services/news/models/news.model';
import GetAllNewsResponse from '../../../../../backend/services/news/models/GetAllNewsResponse';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styles: ``
})
export class NewsPageComponent implements OnInit {
  newsList: News[] = [];
  apiError : boolean = false;
  apiSuccess : boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getAllNews().subscribe({
      next: (response: GetAllNewsResponse) => {
        this.apiSuccess = true;
        this.newsList = response.newsList.$values;
      },
      error: (error) => {
        this.apiError = true;
        console.log("Hubo un problema", error);
      }
    });
  }
}
