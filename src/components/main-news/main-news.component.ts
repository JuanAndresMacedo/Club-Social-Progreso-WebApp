import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-news.component.html',
  styleUrl: './main-news.component.css'
})
export class MainNewsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) topic!: string;
  @Input() newsId!: number;
}
