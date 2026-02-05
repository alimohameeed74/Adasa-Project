import { posts } from './../consts/posts';
import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts.js';
import { Author } from '../interfaces/author.js';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  posts: Posts[];
  constructor() {
    this.posts = posts;
  }
  getAuthors(): Author[] {
    return this.posts.map((post) => post.author);
  }
  getToIndex(start: number, index: number): Posts[] {
    return this.posts.slice(start, index);
  }
  getslugs(): string[] {
    return this.posts.map((post) => post.slug);
  }
  getBySlug(slug: string): Posts {
    return this.posts.find((post) => post.slug === slug)!;
  }
}
