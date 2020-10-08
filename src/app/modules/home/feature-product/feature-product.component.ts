import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {
  categoryList = [
    'ORGANIC', 'FRUITS', 'SEAFOOD', 'WINE & BEER',
    'BAKERY'
  ];

  @Input() productList: Product[];
  categoryName = 'ORGANIC';
  selectedProductList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedProductList = this.productList.filter(p => p.category === this.categoryName);
  }

  tabSelectedClick(e): void {
    const tagName = e.target.tagName.toLowerCase();
    const selectedTab = document.querySelector('.item-selected');

    if (selectedTab && tagName === 'li') {
      const selectedItem = e.target;

      selectedTab.classList.remove('item-selected');
      selectedItem.classList.add('item-selected');
      this.categoryName = e.target.textContent.trim();
      this.selectedProductList = this.productList.filter(p => p.category === this.categoryName);
    }
  }

}
