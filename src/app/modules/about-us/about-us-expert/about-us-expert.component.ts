import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-expert',
  templateUrl: './about-us-expert.component.html',
  styleUrls: ['./about-us-expert.component.scss']
})
export class AboutUsExpertComponent implements OnInit {
  expertData = [
    {
      name: 'Marianne Loreno',
      job: 'Designer',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
      avatar: 'assets/about-us/client-avatar_1.jpg'
    },
    {
      name: 'Giovani Bacardo',
      job: 'Head Chef',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
      avatar: 'assets/about-us/client-avatar_2.jpg'
    },
    {
      name: 'Riga Pelore',
      job: 'Photographer',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
      avatar: 'assets/about-us/client-avatar_4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
