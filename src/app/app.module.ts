import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {DetailProductComponent} from "./product-list/detail-product/detail-product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaymentComponent} from "./payment/payment.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    DetailProductComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
