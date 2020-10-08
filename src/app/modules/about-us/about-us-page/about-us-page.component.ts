import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
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
