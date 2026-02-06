import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details-middle',
  templateUrl: './post-details-middle.component.html',
  styleUrls: ['./post-details-middle.component.css'],
  imports: [RouterLink],
})
export class PostDetailsMiddleComponent implements OnInit {
  @Input() data: any;
  @Input() dataFromMiddle: any;
  constructor() {}

  ngOnInit() {}
  formatArabicDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-EG', {
      day: 'numeric',
      month: 'long',
    }).format(date);
  }
}
