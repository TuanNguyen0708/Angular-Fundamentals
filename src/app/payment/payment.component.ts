import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'payment-component',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  total: string | null = '';
  name: string | null = '';

  ngOnInit() {
    this.total = localStorage.getItem('total');
    this.name = localStorage.getItem('name')
    // localStorage.removeItem('total');
    // localStorage.removeItem('name')
  }
}
