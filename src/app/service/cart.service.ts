import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductListModal} from "../product-list/product-list.modal";

@Injectable({
  providedIn: 'root',
})
export class CartService {

  listCart: ProductListModal[] = [
    {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "amount": 1
    }
  ];

  constructor() {}

  addProduct(data: ProductListModal, selectedAmount: number) {
    if (this.listCart.length > 0) {
      const findCart = this.listCart.find((item:ProductListModal) => item.id === data.id)
      if (findCart) {
        findCart.amount = findCart.amount! + selectedAmount
        return this.listCart
      } else {
        return this.listCart.push({...data, amount: selectedAmount})
      }
    } else {
      return this.listCart.push({...data, amount: selectedAmount})
    }
  }

}
