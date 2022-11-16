import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'cart-product',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  dataCart = require('../../assets/cart.json');
  arrTotal: number[] = [];
  total: number = 0;
  submitForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    creditCard: ['', [Validators.required, Validators.minLength(10)]],
  })

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.getTotal()
  }

  getTotal() {
    this.arrTotal = [];
    for (let i = 0; i < this.dataCart.length; i++) {
      this.arrTotal.push(this.dataCart[i].amount * this.dataCart[i].price);
    }
    return this.total = this.arrTotal.length > 0 ? this.arrTotal.reduce((a: number, b: number) => a + b) : 0;
  }

  changeAmount(data: any, product: any) {
    const findCart = this.dataCart.find((item:any) => item.id === product.id)
    if (findCart) {
      findCart.amount = Number(data.value)
      this.getTotal()
    }
    console.log(this.dataCart)
  }

  submit() {
    localStorage.setItem("total", this.total.toString());
    localStorage.setItem("name", this.submitForm.get('fullName')?.value);
    this.router.navigate(['/payment']).then()
  }

}
