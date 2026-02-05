import { Component, OnInit } from '@angular/core';
import { AboutHeaderGrid } from '../../interfaces/about-header-grid.js';
import { AboutValueCard } from '../../interfaces/about-value-card.js';

@Component({
  selector: 'app-about-value',
  templateUrl: './about-value.component.html',
  styleUrls: ['./about-value.component.css'],
})
export class AboutValueComponent implements OnInit {
  aboutValueData: AboutValueCard[];
  constructor() {
    this.aboutValueData = [
      {
        icon: 'fa-solid fa-bullseye',
        title: 'الجودة أولاً',
        desc: 'محتوى مدروس ومكتوب بخبرة',
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'تركيز عملي',
        desc: 'أمثلة واقعية يمكنك تطبيقها اليوم',
      },
      {
        icon: 'fa-solid fa-handshake',
        title: 'المجتمع',
        desc: 'تعلم مع آلاف المصورين',
      },
      {
        icon: 'fa-solid fa-arrows-rotate',
        title: 'دائماً محدث',
        desc: 'أحدث الاتجاهات وأفضل الممارسات',
      },
    ];
  }

  ngOnInit() {}
}
