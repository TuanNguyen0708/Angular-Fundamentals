import {Component, OnInit} from '@angular/core';
import {optionModal, ProductListModal} from "./product-list.modal";
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedAmount: number = 1
  options: optionModal[] = []
  dataProduct: ProductListModal[] = []

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.getProducts();
    this.getOptions();
  }

  getProducts() {
    this.productService.getListProducts().subscribe((data: ProductListModal[]) => {
      this.dataProduct = data
    })
  }

  getOptions() {
    this.productService.getOptions().subscribe((data: optionModal[]) => {
      this.options = data
    })
  }

  addProduct(data: ProductListModal) {
    this.cartService.addProduct(data, this.selectedAmount);
    alert('Added to cart!')
  }

}
