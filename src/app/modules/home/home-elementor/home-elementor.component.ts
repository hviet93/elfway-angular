import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-elementor',
  templateUrl: './home-elementor.component.html',
  styleUrls: ['./home-elementor.component.scss']
})
export class HomeElementorComponent implements OnInit {
  elementorData = [
    {
      icon: '<i class="far fa-snowflake"></i>',
      title: ['100%', 'Satisfaction'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: '<i class="far fa-hand-point-left"></i>',
      title: ['Save 20%', 'when you'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: '<i class="fas fa-shipping-fast"></i>',
      title: ['Fast Free', 'Shipment'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: '<i class="far fa-money-bill-alt"></i>',
      title: ['14-Day', 'Money back'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
