import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: ProductListComponent,
  },
  {
    title: 'Cart',
    path: 'cart',
    component: CartComponent
  },
  {
    title: 'Detail Product',
    path: 'detail-product/:id',
    component: DetailProductComponent
  },
  {
    title: 'Payment',
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
