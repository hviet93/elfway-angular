import { Component, OnInit, Input, HostListener } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  isMediumSize: boolean;
  productSample: Product = {
    id: 0,
    name: 'Snapple Diet Mango Tea, All Natural',
    price: 199.16,
    image: 'assets/products/bakery_1.jpg',
    description: '',
    category: 'Breakfast'
  };

  constructor() { }

  ngOnInit(): void {
    this.isMediumSize = window.innerWidth <= 1200;
  }

  @HostListener('window:resize', ['event'])
  onResize(): void {
    this.isMediumSize = window.innerWidth <= 1200;
  }

}
