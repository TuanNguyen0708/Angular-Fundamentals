import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductListModal} from "../product-list/product-list.modal";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'cart-product',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  dataCart: ProductListModal[] = [];
  arrTotal: number[] = [];
  total: number = 0;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  // submitForm: FormGroup = this.fb.group({
  //   fullName: ['', [Validators.required, Validators.minLength(5)]],
  //   address: ['', [Validators.required, Validators.minLength(5)]],
  //   creditCard: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]]
  // })

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.getCarts();
  }

  getCarts() {
    this.dataCart = this.cartService.listCart;
    this.getTotal();
  }

  getTotal() {
    this.arrTotal = [];
    if (this.dataCart.length > 0) {
      for (let i = 0; i < this.dataCart.length; i++) {
        this.arrTotal.push(this.dataCart[i].amount! * this.dataCart[i].price);
      }
    }
    return this.total = this.arrTotal.length > 0 ? this.arrTotal.reduce((a: number, b: number) => a + b) : 0;
  }

  changeAmount(data: any, product: ProductListModal) {
    const amount = Number(data.value)
    const findCart = this.dataCart.find((item:ProductListModal) => item.id === product.id);
    if (findCart && amount >= 1) {
      findCart.amount = amount
      this.getTotal()
    } if (!amount && findCart) {
      findCart.amount = 1
      this.getTotal()
    }
  }

  changeName(data: string) {
    console.log(data)
    this.fullName = data
  }

  submit(data: NgForm) {
    localStorage.setItem("total", this.total.toString());
    localStorage.setItem("name", this.fullName);
    this.router.navigate(['/payment']).then()
  }

  delete(id: number) {
    const product = this.dataCart.find((item: ProductListModal) => item.id === id)
    if (product) {
      const index = this.dataCart.indexOf(product)
      this.dataCart.splice(index,1)
    }
    this.getTotal()
    alert('Delete product success')
  }


}
