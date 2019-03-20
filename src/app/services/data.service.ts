import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb () {
    let products: Array<Product> = [
      { id: '1', code: '1', name: 'Product 1', price: 1, quantity: 1 },
      { id: '2', code: '2', name: 'Product 2', price: 2, quantity: 2 },
      { id: '3', code: '3', name: 'Product 3', price: 3, quantity: 3 }
    ];

    return { products };
  }
}
