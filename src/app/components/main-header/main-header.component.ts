import { Component, OnInit } from '@angular/core';
import { AboutMainBlogComponent } from '../../shared-components/about-main-blog/about-main-blog.component.js';
import { AboutHeaderGrid } from '../../interfaces/about-header-grid.js';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
  imports: [AboutMainBlogComponent],
})
export class MainHeaderComponent implements OnInit {
  data: AboutHeaderGrid[];
  constructor() {
    this.data = [
      {
        icon: 'fa-solid fa-newspaper',
        quantity: '+50',
        desc: 'مقالة',
      },
      {
        icon: 'fa-solid fa-users',
        quantity: '+10ألف',
        desc: 'قارئ',
      },
      {
        icon: 'fa-solid fa-folder-open',
        quantity: '4',
        desc: 'تصنيفات',
      },
      {
        icon: 'fa-solid fa-pen-nib',
        quantity: '6',
        desc: 'كاتب',
      },
    ];
  }

  ngOnInit() {}
}
