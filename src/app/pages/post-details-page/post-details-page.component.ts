import { GetDataService } from './../../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailsHeroComponent } from '../../components/post-details-hero/post-details-hero.component';
import { PostDetailsMiddleComponent } from '../../components/post-details-middle/post-details-middle.component';
import { PostDetailsLastComponent } from '../../components/post-details-last/post-details-last.component';
import { Posts } from '../../interfaces/posts.js';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css'],
  imports: [PostDetailsHeroComponent, PostDetailsMiddleComponent, PostDetailsLastComponent],
})
export class PostDetailsPageComponent implements OnInit {
  slug: string;
  slugs: string[];
  data;
  dataByCategory: Posts[];
  dataToMiddle;
  constructor(
    private activateRoute: ActivatedRoute,
    private postsService: GetDataService,
    private router: Router,
    private dataService: GetDataService,
  ) {
    this.slug = '';
    this.slugs = this.postsService.getslugs();
    this.data = {};
    this.dataByCategory = [];
    this.dataToMiddle = {};
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      const slug = param.get('slug');
      if (slug) {
        if (!this.slugs?.includes(slug)) {
          this.router.navigate(['/404']);
        } else {
          this.slug = slug;
          const obj = this.dataService.getBySlug(this.slug);
          this.data = obj;
          this.dataByCategory = this.dataService.getByCategory(obj.category);
          this.dataToMiddle = this.dataService.convertContentIntoArray(obj.content);
        }
      }
    });
  }
}
