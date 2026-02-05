import { Component, Input, OnInit } from '@angular/core';
import { SpecialComponent } from '../special/special.component.js';
import { AboutHeaderGrid } from '../../interfaces/about-header-grid.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-main-blog',
  templateUrl: './about-main-blog.component.html',
  styleUrls: ['./about-main-blog.component.css'],
  imports: [SpecialComponent, RouterLink],
})
export class AboutMainBlogComponent implements OnInit {
  @Input() input = '';
  @Input() data: AboutHeaderGrid[] = [];
  @Input() buttonsViewed: boolean = false;
  @Input() specialTitle: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  constructor() {}

  ngOnInit() {}
}
