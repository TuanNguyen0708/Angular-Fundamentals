import {Component, OnInit} from '@angular/core';
import {ProductListModal} from "./product-list.modal";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedAmount: number = 1
  options = require('../../assets/option.json');
  dataProduct = require('../../assets/data.json');
  dataCart = require('../../assets/cart.json');

  constructor() {}

  ngOnInit() {}

  addProduct(data: ProductListModal) {
    alert('Added to cart!')
    if (this.dataCart.length > 0) {
      const findCart = this.dataCart.find((item:ProductListModal) => item.id === data.id)
      if (findCart) {
         findCart.amount = findCart.amount + this.selectedAmount
          return this.dataCart
      } else {
        return this.dataCart.push({...data, amount: this.selectedAmount})
      }
    } else {
      return this.dataCart.push({...data, amount: this.selectedAmount})
    }
  }

}
