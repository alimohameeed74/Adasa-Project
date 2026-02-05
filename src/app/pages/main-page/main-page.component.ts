import { Component, OnInit } from '@angular/core';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { ChoosedBlogsComponent } from '../../components/choosed-blogs/choosed-blogs.component';
import { DiscoverComponent } from '../../components/discover/discover.component';
import { SubscribeWithUsComponent } from '../../components/subscribe-with-us/subscribe-with-us.component';
import { LatestArticlesComponent } from '../../components/latest-articles/latest-articles.component.js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [
    MainHeaderComponent,
    ChoosedBlogsComponent,
    DiscoverComponent,
    SubscribeWithUsComponent,
    LatestArticlesComponent,
  ],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
