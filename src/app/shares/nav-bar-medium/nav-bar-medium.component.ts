import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-medium',
  templateUrl: './nav-bar-medium.component.html',
  styleUrls: ['./nav-bar-medium.component.scss']
})
export class NavBarMediumComponent implements OnInit {
private bodyDoc: object;

  constructor() {
  }

  ngOnInit(): void {
    this.bodyDoc = document.querySelector('#root');

    if (Object.keys(this.bodyDoc).length > 0) {
      window.addEventListener('click', (e) => this.translateBodyClick(e, this.bodyDoc));
    }
  }

  translateBodyClick(e, rootBody): void {
    const iconClassName = e.target.className;
    const headerNavigation = document.querySelector('.header-medium__navigation');
    const headerBg = document.querySelector('.nav-bar__medium__bg');

    if (
      iconClassName.includes('nav__bar-right__click')
      && headerNavigation
      && headerBg
    ) {
      rootBody.classList.add('root--translate');
      headerNavigation.classList.add('header-medium__navigation--display');
      headerBg.classList.add('nav-bar__medium__bg--display');
    }
    else if (headerNavigation && headerBg) {
      rootBody.classList.remove('root--translate');
      headerNavigation.classList.remove('header-medium__navigation--display');
      headerBg.classList.remove('nav-bar__medium__bg--display');
    }
  }
}
