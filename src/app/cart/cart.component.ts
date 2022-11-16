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
    console.log(this.dataCart)
    for (let i = 0; i < this.dataCart.length; i++) {
      this.arrTotal.push(this.dataCart[i].amount * this.dataCart[i].price);
    }
    this.total = this.arrTotal.length > 0 ? this.arrTotal.reduce((a: number, b: number) => a + b) : 0;
  }

  submit() {
    localStorage.setItem("total", this.total.toString());
    localStorage.setItem("name", this.submitForm.get('fullName')?.value);
    this.router.navigate(['/payment']).then()
  }

}
