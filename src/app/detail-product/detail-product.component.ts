import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {optionModal, ProductListModal} from "../product-list/product-list.modal";
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.component.html',
})
export class DetailProductComponent implements OnInit {
  selectedAmount: number = 1
  options: optionModal[] = [];
  product?: ProductListModal | undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.getProducts();
    this.getOptions();
  }

  getProducts() {
    this.productService.getListProducts().subscribe((data: ProductListModal[]) => {
      const idProduct = Number(this.activatedRouter.snapshot.params['id'])
      this.product = data.find((item: any) => item.id === idProduct);
    })
  }

  getOptions() {
    this.productService.getOptions().subscribe((data: optionModal[]) => {
      this.options = data
    })
  }

  changeAmount(data:any) {
      this.selectedAmount = Number(data.value);
  }

  addProduct(data: ProductListModal) {
    this.cartService.addProduct(data, this.selectedAmount)
    alert('Added to cart!')
  }

}
