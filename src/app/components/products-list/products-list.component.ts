import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Array<Product>;

  options: any = {
    enableEdit: true,
    enableRemove: true,
    showFilter: true,
    route: '/product',
    columns: [
      {
        title: 'Code',
        field: 'code'
      },
      {
        title: 'Name',
        field: 'name'
      },
      {
        title: 'Price',
        field: 'price',
        format: 'currency'
      },
      {
        title: 'Quantity',
        field: 'quantity'
      }
    ]
  };

  constructor(public productService: ProductService,
              private router: Router) { 
                this.options.service = this.productService;
              }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getAll().subscribe((products: Array<Product>) => {
      this.products = products;
    })
  }

  addProduct() {
    this.router.navigate(['/product/']);
  }
}
