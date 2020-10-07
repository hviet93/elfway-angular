import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  widgetData = [
    {
      icon: '<i class="fas fa-carrot"></i>',
      color: 'forestgreen',
      textArr: ['Fruits', '& Veges']
    },
    {
      icon: '<i class="fas fa-coffee"></i>',
      color: 'orange',
      textArr: ['Breakfast', '& Cereal']
    },
    {
      icon: '<i class="fas fa-bread-slice"></i>',
      color: 'saddlebrown',
      textArr: ['Bread', '& Pastries']
    },
    {
      icon: '<i class="fas fa-wine-bottle"></i>',
      color: 'hotpink',
      textArr: ['Beer, Wine', '& Spirits']
    },
    {
      icon: '<i class="fas fa-seedling"></i>',
      color: 'lawngreen',
      textArr: ['Seeds', '& Nuts']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
