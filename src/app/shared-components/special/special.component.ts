import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  @Input() input: string = '';
  constructor() {
   }

  ngOnInit() {
  }

}
