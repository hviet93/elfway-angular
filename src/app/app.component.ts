import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'elfway-demo';
  headerMedium: boolean;

  ngOnInit(): void {
    this.headerMedium = window.innerWidth <= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.headerMedium = window.innerWidth <= 992;
  }
}
