import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
   api = 'https://5e7c7093a917d70016683464.mockapi.io/product';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  updateProduct(product){
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
  }

}