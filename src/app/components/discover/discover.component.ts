import { Component, OnInit } from '@angular/core';
import { SpecialComponent } from '../../shared-components/special/special.component.js';
import { AboutHeaderGrid } from '../../interfaces/about-header-grid.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  imports: [SpecialComponent, RouterLink],
})
export class DiscoverComponent implements OnInit {
  aboutHeaderGridData: AboutHeaderGrid[];
  constructor() {
    this.aboutHeaderGridData = [
      {
        icon: 'fa-solid fa-sun',
        quantity: '3 مقالة',
        desc: 'إضاءة',
      },
      {
        icon: 'fa-solid fa-user',
        quantity: '3 مقالة',
        desc: 'بورتريه',
      },
      {
        icon: 'fa-solid fa-mountain-sun',
        quantity: '2 مقالة',
        desc: 'مناظر طبيعية',
      },
      {
        icon: 'fa-solid fa-sliders',
        quantity: '5 مقالة',
        desc: 'تقنيات',
      },
      {
        icon: 'fa-solid fa-sun',
        quantity: '3 مقالة',
        desc: 'معدات',
      },
    ];
  }

  ngOnInit() {}
}
