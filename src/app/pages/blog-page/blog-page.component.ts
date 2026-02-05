import { Component, OnInit } from '@angular/core';
import { BlogHeaderComponent } from '../../components/blog-header/blog-header.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  imports: [BlogHeaderComponent, PaginationComponent],
})
export class BlogPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
