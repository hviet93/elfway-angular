import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isMediumSize: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isMediumSize = window.innerWidth <= 992;
  }

  @HostListener('window:resize', ['event'])
  onResize(): void {
    this.isMediumSize = window.innerWidth <= 992;
  }
}
