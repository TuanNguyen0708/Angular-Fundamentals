import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductListModal} from "../product-list.modal";

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.component.html',
})
export class DetailProductComponent implements OnInit {
  selectedAmount: number = 1;
  options = require('../../../assets/option.json');
  dataProduct = require('../../../assets/data.json');
  dataCart = require('../../../assets/cart.json');
  product!: ProductListModal;

  constructor(private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    const idProduct = Number(this.activatedRouter.snapshot.params['id'])
    this.product = this.dataProduct.find((item: any) => item.id === idProduct);
  }

  changeAmount(data:any) {
      this.selectedAmount = Number(data.value);
  }

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
