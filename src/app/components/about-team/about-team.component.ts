import { siteInfo } from './../../consts/site-info';
import { Component, OnInit } from '@angular/core';
import { SpecialComponent } from '../../shared-components/special/special.component';
import { SiteInfo } from '../../interfaces/site-info.js';
import { Author } from '../../interfaces/author.js';
import { GetDataService } from '../../services/get-data.service.js';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css'],
  imports: [SpecialComponent],
})
export class AboutTeamComponent implements OnInit {
  posts: Author[];
  siteInfo: SiteInfo;
  constructor(private getDataService: GetDataService) {
    this.posts = getDataService.getAuthors();
    this.siteInfo = siteInfo;
  }

  ngOnInit() {}
}
