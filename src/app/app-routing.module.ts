import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: ProductListComponent
  },
  {
    title: 'Cart',
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
