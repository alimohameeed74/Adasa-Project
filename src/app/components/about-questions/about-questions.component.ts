import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-questions',
  templateUrl: './about-questions.component.html',
  styleUrls: ['./about-questions.component.css'],
  imports: [RouterLink],
})
export class AboutQuestionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
