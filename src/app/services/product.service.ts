import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL: string = 'api/products';
  constructor(private httpClient: HttpClient) { }

  public getAll() { 
    return this.httpClient.get(`${this.SERVER_URL}`);
  }

  public get(productCode: Number){
    return this.httpClient.get(`${this.SERVER_URL}/${productCode}`); 
  }

  public create(product: Product){
    return this.httpClient.post(`${this.SERVER_URL}`, product);
  }

  public delete(productCode: String){
    return this.httpClient.delete(`${this.SERVER_URL}/${productCode}`);
  }

  public update(product: Product){
    return this.httpClient.put(`${this.SERVER_URL}/${product.code}`, product);
  }

}