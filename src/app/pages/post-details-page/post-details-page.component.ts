import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service.js';
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
  constructor(
    private activateRoute: ActivatedRoute,
    private postsService: GetDataService,
    private router: Router,
    private dataService: GetDataService,
  ) {
    this.slug = '';
    this.slugs = this.postsService.getslugs();
    this.data = {};
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      const slug = param.get('slug');
      if (slug) {
        if (!this.slugs?.includes(slug)) {
          this.router.navigate(['/404']);
          console.log('not include');
        } else {
          this.slug = slug;
          this.data = this.dataService.getBySlug(this.slug);
          console.log('include');
        }
      }
    });
  }
}
