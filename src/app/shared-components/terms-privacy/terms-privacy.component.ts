import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Note } from '../../interfaces/note.js';
import { TermsPrivacySection } from '../../interfaces/terms-privacy-section.js';

@Component({
  selector: 'app-terms-privacy',
  templateUrl: './terms-privacy.component.html',
  styleUrls: ['./terms-privacy.component.css'],
  imports: [RouterLink]
})
export class TermsPrivacyComponent implements OnInit {
  @Input() icon:string = '';
  @Input() notice:Note =  {
      desc: '',
      icon: '',
      imp: ''
  };
  @Input() linkTo:string = '';
  @Input() array: TermsPrivacySection[] = [];
  @Input() items1: string[] = [];
  @Input() items2: string[] = [];
  @Input() items3: string[] = [];
  constructor() {
   }

  ngOnInit() {
  }

}
