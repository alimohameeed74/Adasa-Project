import { SocialLinks } from './../../interfaces/social-links';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLinks } from '../../interfaces/footer-links.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [RouterLink],
})
export class FooterComponent implements OnInit {
  socialLinks: SocialLinks[];
  pagesLinks: FooterLinks[];

  catergoriesLinks: FooterLinks[];
  constructor() {
    this.socialLinks = [
      { ref: 'https://twitter.com/adasah', icon: 'fa-x-twitter' },
      { ref: 'https://github.com/adasah', icon: 'fa-github' },
      { ref: 'https://linkedin.com/adasah', icon: 'fa-linkedin' },
      { ref: 'https://youtube.com/adasah', icon: 'fa-youtube' },
    ];
    this.pagesLinks = [
      { ref: '', name: 'الرئيسيه' },
      { ref: '/blog', name: 'المدونه' },
      { ref: '/about', name: 'من نحن' },
    ];
    this.catergoriesLinks = [
      { ref: '', name: 'إضاءة' },
      { ref: '/blog', name: 'بورتريه' },
      { ref: '/blog', name: 'مناظر طبيعية' },
      { ref: '/blog', name: 'تقنيات' },
    ];
  }

  ngOnInit() {}
}
