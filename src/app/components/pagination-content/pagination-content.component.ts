import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Posts } from '../../interfaces/posts.js';
import { GetDataService } from '../../services/get-data.service.js';
import { EmptyComponent } from '../empty/empty.component';

@Component({
  selector: 'app-pagination-content',
  templateUrl: './pagination-content.component.html',
  styleUrls: ['./pagination-content.component.css'],
  imports: [RouterLink, EmptyComponent],
})
export class PaginationContentComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  @Input() searchedValue: string = '';
  @Output() clear = new EventEmitter();
  data: Posts[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: GetDataService,
  ) {
    this.data = [];
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
  formatArabicDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }

  clearFilters() {
    this.clear.emit('جميع المقالات');
  }
}
