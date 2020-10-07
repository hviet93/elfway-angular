import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinkData = [
    {
      title: 'Company Info',
      linkArr: [
        'About Us', 'Careers', 'Social Responsibility', 'Affiliate Program',
        'Business With Us', 'Find a Store', 'Press & Talent'
      ]
    },
    {
      title: 'Quick Links',
      linkArr: [
        'Special Offers', 'Gift Cards', 'F21 Red', 'Privacy Policy',
        'California Privacy Rights', 'CA Transparency in Store', 'Teams of Use'
      ]
    },
    {
      title: 'Hot Categories',
      linkArr: [
        'Privacy Policy', 'F21 Red', 'Smartphone', 'Gift Cards',
        'Battereries', 'Handbag', 'Shoes'
      ]
    }
  ];

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
