import { Component, OnInit, HostListener } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isMediumSize: boolean;
  productList: Product[] = [
    // Tab 1
    {
      id: 1,
      name: 'Snapple Diet Mango Tea, All Natural',
      price: 199.16,
      image: 'assets/products/bakery_1.jpg',
      description: '',
      category: 'ORGANIC'
    },
    {
      id: 2,
      name: 'Organic Cacao Nibs Shaker',
      price: 169.18,
      image: 'assets/products/bakery_2.jpg',
      description: '',
      category: 'ORGANIC'
    },
    {
      id: 3,
      name: 'Meat, fish & poultry',
      price: 124.90,
      image: 'assets/products/product-2.jpg',
      description: '',
      category: 'ORGANIC'
    },
    {
      id: 4,
      name: 'Lundberg Organic Rice, White Basmati',
      price: 127.51,
      image: 'assets/products/organic-4.jpg',
      description: '',
      category: 'ORGANIC'
    },
    // Tab 2
    {
      id: 5,
      name: 'Tipco 100% Fruit Juice Tangerine Orange Juice',
      price: 150.52,
      image: 'assets/products/fruit_4.jpg',
      description: '',
      category: 'FRUITS'
    },
    {
      id: 6,
      name: 'Spinach & Ricotta Tortelloni',
      price: 134.59,
      image: 'assets/products/bakery_3.jpg',
      description: '',
      category: 'FRUITS'
    },
    {
      id: 7,
      name: 'Red & White Seedless Grapes 500g',
      price: 179.98,
      image: 'assets/products/wine-beer_3.jpg',
      description: '',
      category: 'FRUITS'
    },
    {
      id: 8,
      name: 'Flour Soy Protein Food Gluten',
      price: 178.10,
      image: 'assets/products/product-1.jpg',
      description: '',
      category: 'FRUITS'
    },
    // Tab 3
    {
      id: 9,
      name: 'The food you eat when you eat hotpot',
      price: 187.14,
      image: 'assets/products/product-4.jpg',
      description: '',
      category: 'SEAFOOD'
    },
    {
      id: 10,
      name: 'Morrisons Seedless Red Grapes',
      price: 143.26,
      image: 'assets/products/product-7.jpg',
      description: '',
      category: 'SEAFOOD'
    },
    {
      id: 11,
      name: 'Healthy Food Products For Cooking & Drinking',
      price: 179.03,
      image: 'assets/products/product-3.jpg',
      description: '',
      category: 'SEAFOOD'
    },
    {
      id: 12,
      name: 'Appleton Estate 12 Year Old Rare Blend',
      price: 34.99,
      image: 'assets/products/seafood-2.jpg',
      description: '',
      category: 'SEAFOOD'
    },
    // Tab 4
    {
      id: 13,
      name: 'Zespri New Zealand Kiwifruit – Green',
      price: 169.19,
      image: 'assets/products/wine-beer_1.jpg',
      description: '',
      category: 'WINE & BEER'
    },
    {
      id: 14,
      name: 'White Seedless Grapes 500g',
      price: 171.19,
      image: 'assets/products/wine-beer_2.jpg',
      description: '',
      category: 'WINE & BEER'
    },
    {
      id: 15,
      name: 'Waitrose Candy Crunch Seedless Grapes400g',
      price: 171.16,
      image: 'assets/products/fruit_3.jpg',
      description: '',
      category: 'WINE & BEER'
    },
    {
      id: 16,
      name: 'Tipco 100% Fruit Juice Tangerine Orange Juice',
      price: 150.52,
      image: 'assets/products/fruit_4.jpg',
      description: '',
      category: 'WINE & BEER'
    },
    // Tab 5
    {
      id: 17,
      name: 'Snapple Diet Mango Tea, All Natural',
      price: 169.99,
      image: 'assets/products/bakery_1.jpg',
      description: '',
      category: 'BAKERY'
    },
    {
      id: 18,
      name: 'Spinach & Ricotta Tortelloni',
      price: 134.19,
      image: 'assets/products/bakery_3.jpg',
      description: '',
      category: 'BAKERY'
    },
    {
      id: 19,
      name: 'Healthy Food Products For Cooking & Drinking',
      price: 179.16,
      image: 'assets/products/product-3.jpg',
      description: '',
      category: 'BAKERY'
    },
    {
      id: 20,
      name: 'Waitrose Candy Crunch Seedless Grapes400g',
      price: 171.52,
      image: 'assets/products/fruit_1.jpg',
      description: '',
      category: 'BAKERY'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.isMediumSize = window.innerWidth <= 992;
  }

  @HostListener('window:resize', ['event'])
  onResize(): void {
    this.isMediumSize = window.innerWidth <= 992;
  }
}
