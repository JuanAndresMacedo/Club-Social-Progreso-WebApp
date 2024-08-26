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

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getAllNews().subscribe({
      next: (response: GetAllNewsResponse) => {
        this.newsList = response.newsList.$values;
      },
      error: (error) => {
        console.log("Hubo un problema", error);
      }
    });
  }
}
