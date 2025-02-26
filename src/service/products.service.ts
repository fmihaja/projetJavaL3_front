import { Injectable } from '@angular/core';
import { urlBack } from '../urlBack';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../dto/apiResponse';
import { Observable } from 'rxjs';
import { Product } from '../dto/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string=`${urlBack}/products/`

  constructor(private http: HttpClient) { }

  selectAll(): Observable<apiResponse>{
    return this.http.get<apiResponse>(`${this.apiUrl}`);
  }

  find(product: Product): Observable<apiResponse>{
    return this.http.get<apiResponse>(`${this.apiUrl}${product.id}`);
  }

  updateClient(product: Product): Observable<apiResponse> {
    return this.http.put<apiResponse>(`${this.apiUrl}`, product);
  }

  insert(product: Product): Observable<apiResponse> {
    return this.http.post<apiResponse>(`${this.apiUrl}`, product);
  }

  delete(product: Product): Observable<apiResponse> {
    return this.http.delete<apiResponse>(`${this.apiUrl+product.id}`)
  }
}
