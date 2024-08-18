import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-full-img-secondary-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './full-img-secondary-news.component.html',
  styleUrl: './full-img-secondary-news.component.css'
})
export class FullImgSecondaryNewsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) topic!: string;
  @Input() newsId!: number;
  @Input() class: string = '';
}
