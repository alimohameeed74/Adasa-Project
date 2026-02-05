import { Component, OnInit } from '@angular/core';
import { AboutHeaderComponent } from "../../components/about-header/about-header.component";
import { AboutTeamComponent } from "../../components/about-team/about-team.component";
import { AboutValueComponent } from "../../components/about-value/about-value.component";
import { AboutQuestionsComponent } from "../../components/about-questions/about-questions.component";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  imports: [AboutHeaderComponent, AboutTeamComponent, AboutValueComponent, AboutQuestionsComponent]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
