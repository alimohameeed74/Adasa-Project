import { Component, OnInit } from '@angular/core';
import { AboutMainBlogComponent } from '../../shared-components/about-main-blog/about-main-blog.component.js';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],
  imports: [AboutMainBlogComponent],
})
export class BlogHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
