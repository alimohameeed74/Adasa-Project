import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../interfaces/posts.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-h-pagination-content',
  templateUrl: './h-pagination-content.component.html',
  styleUrls: ['./h-pagination-content.component.css'],
  imports: [RouterLink],
})
export class HPaginationContentComponent implements OnInit {
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
