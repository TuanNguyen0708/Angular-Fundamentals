import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {optionModal, ProductListModal} from "../product-list/product-list.modal";
import {Router} from "@angular/router";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit{
  @Input() dataProduct!: ProductListModal[];
  @Input() options!: optionModal[];
  @Output() selectedAmount: EventEmitter<number> = new EventEmitter();
  @Output() selectProduct: EventEmitter<ProductListModal> = new EventEmitter();
  amount: number = 1

  constructor(private router: Router) {}
  ngOnInit() {}

  viewDetail(item: ProductListModal) {
    this.router.navigate(['/detail-product', item.id]).then()
  }

  changeAmount(data: any) {
    this.amount = Number(data.value)
    this.selectedAmount.emit(this.amount)
  }

  addProduct(data: ProductListModal) {
    this.selectProduct.emit(data)
  }
}
