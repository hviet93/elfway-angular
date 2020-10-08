import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-history',
  templateUrl: './about-us-history.component.html',
  styleUrls: ['./about-us-history.component.scss']
})
export class AboutUsHistoryComponent implements OnInit {
  historyData = [
    {
      image: 'assets/about-us/about-story-1.jpg',
      title: 'What Do We Do?',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
    },
    {
      image: 'assets/about-us/about-story-2.jpg',
      title: 'Our Mission',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
    },
    {
      image: 'assets/about-us/about-story-3.jpg',
      title: 'History Of Us',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
