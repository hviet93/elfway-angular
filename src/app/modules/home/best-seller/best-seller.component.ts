import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  @Input() productList: Product[];
  bestSellerProductList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bestSellerProductList =
      this.productList.filter(p => p.category === 'ORGANIC' || p.category === 'FRUITS');
  }

}
