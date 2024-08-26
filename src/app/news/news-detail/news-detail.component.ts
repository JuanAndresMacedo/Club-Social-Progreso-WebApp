import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../backend/services/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../../backend/services/news/models/news.model';
import GetNewsByIdResponse from '../../../backend/services/news/models/GetNewsByIdResponse';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css',
})
export class NewsDetailComponent implements OnInit{
  news?: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newsService.getNewsById(id).subscribe({
        next: (response: GetNewsByIdResponse) => {
          this.news = response.news;
          
          if (this.news?.content && (this.news.content as any).$values) {
            this.news.content = (this.news.content as any).$values;
          }
        },
        error: (error) => {
          console.log(this.news)
          console.log("Hubo un problema", error);
        }
      });
    }
  }
}
