import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../interfaces/posts.js';

@Component({
  selector: 'app-post-details-last',
  templateUrl: './post-details-last.component.html',
  styleUrls: ['./post-details-last.component.css'],
  imports: [RouterLink],
})
export class PostDetailsLastComponent implements OnInit, OnChanges {
  @Input() data: Posts[] = [];
  @Input() showedData: any;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(): void {
    this.data = this.data.filter((post) => post.id !== this.showedData.id);
  }
}
