import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FilteredBtns } from '../../interfaces/filtered-btns.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-filters',
  templateUrl: './pagination-filters.component.html',
  styleUrls: ['./pagination-filters.component.css'],
  imports: [FormsModule],
})
export class PaginationFiltersComponent implements OnInit, OnChanges {
  @Input() choosedBtn: string | null = '';
  buttons: FilteredBtns[];
  @Output() sentBtn = new EventEmitter();
  @Output() searchedValueEvent = new EventEmitter();
  searchedValue: string;
  constructor() {
    this.buttons = [
      { label: 'جميع المقالات', isActive: true },
      { label: 'إضاءة', isActive: false },
      { label: 'بورتريه', isActive: false },
      { label: 'مناظر طبيعية', isActive: false },
      { label: 'تقنيات', isActive: false },
      { label: 'معدات', isActive: false },
    ];
    this.searchedValue = '';
  }

  ngOnInit() {}
  ngOnChanges(): void {
    if (this.choosedBtn) {
      this.buttons.forEach((btn) => {
        btn.isActive = false;
        if (btn.label === this.choosedBtn) {
          btn.isActive = true;
        }
      });
    } else {
      this.buttons.forEach((btn) => {
        btn.isActive = false;
        if (btn.label === 'جميع المقالات') {
          btn.isActive = true;
        }
      });
    }
    this.searchedValue = '';
  }
  toggleBtnStatus(label: string) {
    this.buttons.forEach((btn) => {
      btn.isActive = false;
      if (btn.label === label) {
        btn.isActive = true;
      }
    });
    this.sentBtn.emit(label);
    this.searchedValue = '';
  }
  sendoToContent() {
    this.searchedValueEvent.emit(this.searchedValue);
  }
}
