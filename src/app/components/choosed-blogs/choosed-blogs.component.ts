import { Component, OnInit } from '@angular/core';
import { SpecialComponent } from '../../shared-components/special/special.component';
import { RouterLink } from '@angular/router';
import { GetDataService } from '../../services/get-data.service.js';
import { Posts } from '../../interfaces/posts.js';

@Component({
  selector: 'app-choosed-blogs',
  templateUrl: './choosed-blogs.component.html',
  styleUrls: ['./choosed-blogs.component.css'],
  imports: [SpecialComponent, RouterLink],
})
export class ChoosedBlogsComponent implements OnInit {
  articles: Posts[];
  constructor(private choosedService: GetDataService) {
    this.articles = this.choosedService.getToIndex(0, 3);
  }
  formatArabicDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }

  ngOnInit() {}
}
