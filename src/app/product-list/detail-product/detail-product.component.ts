import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.component.html',
})
export class DetailProductComponent implements OnInit {
  selectedAmount: number = 1;
  options = require('../../../assets/option.json');
  dataProduct = require('../../../assets/data.json');
  dataCart = require('../../../assets/cart.json');
  product: any;

  constructor(private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    const idProduct = Number(this.activatedRouter.snapshot.params['id'])
    this.product = this.dataProduct.find((item: any) => item.id === idProduct);
  }

  changeAmount(data:any) {
      this.selectedAmount = Number(data.value);
  }

  addProduct(data: any) {
    alert('Added to cart!')
    if (this.dataCart.length > 0) {
      const findCart = this.dataCart.find((item:any) => item.id === data.id)
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
