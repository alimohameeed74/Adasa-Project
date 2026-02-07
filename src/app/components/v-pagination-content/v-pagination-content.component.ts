import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../interfaces/posts.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-v-pagination-content',
  templateUrl: './v-pagination-content.component.html',
  styleUrls: ['./v-pagination-content.component.css'],
  imports: [RouterLink],
})
export class VPaginationContentComponent implements OnInit {
  @Input() item: Posts | null = null;
  constructor() {}

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
