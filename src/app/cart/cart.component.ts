import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cart-product',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  dataCart = require('../../assets/cart.json');
  arrTotal: number[] = []
  total: number = 0
  constructor() {}

  ngOnInit() {
    console.log(this.dataCart)
    for (let i = 0; i < this.dataCart.length; i ++) {
      this.arrTotal.push(this.dataCart[i].amount * this.dataCart[i].price)
    }
    this.total = this.arrTotal.reduce((a:number, b: number) => a + b)
    console.log(this.total)
  }

}
