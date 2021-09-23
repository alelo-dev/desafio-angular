import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ProductsResponse } from 'src/app/models/products/products-response.model';
import { Product } from 'src/app/models/products/product.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  getProducts(limit = 10): Observable<Product[]> {
    return this.http.get<ProductsResponse[]>(`${this.baseUrl}products?limit=${limit}`)
      .pipe(
        map(response => {
          let products: Product[] = [];

          if (response) {
            const payload: ProductsResponse[] = response;

            products = payload.map(product => ({
              product: product?.title,
              description: product?.description,
              category: product?.category,
              price: product?.price,
            }));
          }

          return products;
        })
      )
  }

  createProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}products`, body);
  }

  updateProduct(id: number, body: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}products/${id}`, body);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`);
  }
}
