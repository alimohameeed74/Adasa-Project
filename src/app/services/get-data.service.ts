import { Category } from './../interfaces/category';
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
  getAll(): Posts[] {
    return posts;
  }
  getAuthors(): Author[] {
    return this.posts.map((post) => post.author);
  }
  getToIndex(start: number, index: number): Posts[] {
    return this.posts.slice(start, index);
  }
  getAllCategories(): string[] {
    return this.posts.map((post) => post.category);
  }
  getslugs(): string[] {
    return this.posts.map((post) => post.slug);
  }
  getBySlug(slug: string): Posts {
    return this.posts.find((post) => post.slug === slug)!;
  }
  getByCategory(category: string): Posts[] {
    return this.posts.filter((post) => post.category === category);
  }

  convertContentIntoArray(content: string) {
    const parts = content.split('\n## ');
    const title = parts[0].trim();
    const sections = parts.slice(1).map((part) => {
      const [rawTitle, ...body] = part.split('\n\n');
      return {
        title: rawTitle.trim(),
        content: body.join('\n\n').trim(),
      };
    });
    return {
      title,
      sections,
    };
  }
}
