import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  // it('should return an Array<Product>', () => {
  //   const service: ProductService = TestBed.get(ProductService);
  //   service.getAll().subscribe((products: Array<Product>) => {
  //     expect(products.length).toBe(3);
  //   });
  // });
});
