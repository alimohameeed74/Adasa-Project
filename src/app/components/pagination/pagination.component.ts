import { Component, OnInit } from '@angular/core';
import { PaginationFiltersComponent } from '../pagination-filters/pagination-filters.component';
import { PaginationContentComponent } from '../pagination-content/pagination-content.component';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/get-data.service.js';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  imports: [PaginationFiltersComponent, PaginationContentComponent],
})
export class PaginationComponent implements OnInit {
  allCategories: string[];
  choosedCategory: string;
  sentCategory: string;
  searchedValue: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: GetDataService,
  ) {
    this.allCategories = Array.from(new Set(this.dataService.getAllCategories()));
    this.choosedCategory = '';
    this.sentCategory = '';
    this.searchedValue = '';
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      const category = param.get('category');
      this.choosedCategory = category!;
    });
  }
  assign(label: string) {
    this.sentCategory = label;
    this.searchedValue = '';
  }
  getSearchedValue(value: string) {
    this.searchedValue = value;
  }
}
