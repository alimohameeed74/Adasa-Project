import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavLinks } from '../../interfaces/nav-links.js';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class NavBarComponent implements OnInit, AfterViewInit {
  navLinks: NavLinks[];
  activeClassess:string;
  @ViewChild('navBarContent') navBarContent !: ElementRef;
  @ViewChild('toggler') toggler !: ElementRef;
  constructor() { 
    this.activeClassess = 'btn py-2 px-3 active-link text-white fw-medium gradient-orange'
    this.navLinks=[
      {name: 'الرئيسيه' ,goTo: '/home'},
      {name: 'المدونه' ,goTo: '/blog'},
      {name: 'من نحن' ,goTo: '/about'}
    ]
  }
  toggle(){
    this.navBarContent.nativeElement.classList.remove('show');
    this.toggler.nativeElement.classList.add('collapsed');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.toggle();
  }

}
