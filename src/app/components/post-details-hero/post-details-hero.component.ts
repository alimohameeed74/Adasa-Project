import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details-hero',
  templateUrl: './post-details-hero.component.html',
  styleUrls: ['./post-details-hero.component.css'],
  imports: [RouterLink],
})
export class PostDetailsHeroComponent implements OnInit {
  @Input() data: any;
  constructor() {
    this.data = {};
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
