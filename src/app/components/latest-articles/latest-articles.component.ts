import { Component, OnInit } from '@angular/core';
import { SpecialComponent } from '../../shared-components/special/special.component.js';
import { RouterLink } from '@angular/router';
import { GetDataService } from '../../services/get-data.service.js';
import { Posts } from '../../interfaces/posts.js';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css'],
  imports: [SpecialComponent, RouterLink],
})
export class LatestArticlesComponent implements OnInit {
  articles: Posts[];
  constructor(private choosedService: GetDataService) {
    this.articles = this.choosedService.getToIndex(3, 6);
  }

  ngOnInit() {}
  formatArabicDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
}
