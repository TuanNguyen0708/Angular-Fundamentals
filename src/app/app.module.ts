import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaymentComponent} from "./payment/payment.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    DetailProductComponent,
    PaymentComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
