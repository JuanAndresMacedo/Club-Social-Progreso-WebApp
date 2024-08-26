import { Component, OnInit } from '@angular/core';
import { News } from '../../../backend/services/news/models/news.model';
import { NewsService } from '../../../backend/services/news/news.service';
import GetAllNewsResponse from '../../../backend/services/news/models/GetAllNewsResponse';

@Component({
  selector: 'app-home-news-section',
  standalone: false,
  templateUrl: './home-news-section.component.html'
})
export class HomeNewsSectionComponent implements OnInit {
  mainNewsList: News[] = [];
  secondaryNewsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getLatestNews().subscribe({
      next: (response: GetAllNewsResponse) => {
        this.mainNewsList = response.newsList.$values.slice(0, 2);
        this.secondaryNewsList = response.newsList.$values.slice(2, 6);
      },
      error: (error) => {
        console.log("Hubo un problema", error);
      }
    });
  }
}
