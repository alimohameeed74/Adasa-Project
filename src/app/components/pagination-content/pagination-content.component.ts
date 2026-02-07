import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Posts } from '../../interfaces/posts.js';
import { GetDataService } from '../../services/get-data.service.js';
import { EmptyComponent } from '../empty/empty.component';
import { VPaginationContentComponent } from '../v-pagination-content/v-pagination-content.component';
import { HPaginationContentComponent } from '../h-pagination-content/h-pagination-content.component';

@Component({
  selector: 'app-pagination-content',
  templateUrl: './pagination-content.component.html',
  styleUrls: ['./pagination-content.component.css'],
  imports: [EmptyComponent, VPaginationContentComponent, HPaginationContentComponent],
})
export class PaginationContentComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  @Input() searchedValue: string = '';
  @Output() clear = new EventEmitter();
  view: boolean;
  data: Posts[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: GetDataService,
  ) {
    this.data = [];
    this.view = true;
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      const category = param.get('category');
      this.category = category!;
      if (category) {
        this.data = this.dataService.getByCategory(category);
      } else {
        this.data = this.dataService.getAll();
      }
    });
  }
  ngOnChanges(): void {
    if (this.category === 'جميع المقالات' || this.category === null) {
      this.data = this.dataService.getAll();
      if (this.searchedValue !== '') {
        this.data = this.data.filter((post) => post.title.includes(this.searchedValue));
      }
    } else {
      this.data = this.dataService.getByCategory(this.category);
      if (this.searchedValue !== '') {
        this.data = this.data.filter((post) => post.title.includes(this.searchedValue));
      }
    }
  }

  clearFilters() {
    this.clear.emit('جميع المقالات');
  }
  hView() {
    this.view = true;
  }
  vView() {
    this.view = false;
  }
}
