import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProduct(): Observable<ProductModel> {
    console.log("inside services")
    return this.http.get<ProductModel>('https://dummyjson.com/products');
  }
}


