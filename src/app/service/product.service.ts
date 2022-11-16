import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {optionModal, ProductListModal} from "../product-list/product-list.modal";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getListProducts(): Observable<ProductListModal[]> {
    return this.http.get<ProductListModal[]>('../../assets/data.json');
  }

  getOptions(): Observable<optionModal[]> {
    return this.http.get<optionModal[]>('../../assets/option.json');
  }

}
