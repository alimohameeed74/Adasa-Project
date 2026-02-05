import { Component, OnInit } from '@angular/core';
import { SpecialComponent } from '../../shared-components/special/special.component';
import { AboutHeaderGrid } from '../../interfaces/about-header-grid.js';
import { AboutMainBlogComponent } from '../../shared-components/about-main-blog/about-main-blog.component';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.css'],
  imports: [AboutMainBlogComponent],
})
export class AboutHeaderComponent implements OnInit {
  data: AboutHeaderGrid[];
  constructor() {
    this.data = [
      {
        icon: 'fa-solid fa-users',
        quantity: '+2مليون',
        desc: 'قارئ شهرياً',
      },
      {
        icon: 'fa-solid fa-newspaper',
        quantity: '+500',
        desc: 'مقالة منشورة',
      },
      {
        icon: 'fa-solid fa-pen-nib',
        quantity: '+50',
        desc: 'كاتب خبير',
      },
      {
        icon: 'fa-solid fa-book-open',
        quantity: '+15',
        desc: 'تصنيف',
      },
    ];
  }

  ngOnInit() {}
}
