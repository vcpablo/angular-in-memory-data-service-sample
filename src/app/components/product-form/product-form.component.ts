import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar } from '@angular/material';
import * as uuid from 'uuid';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  action: string;
  model: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private snackBar: MatSnackBar,
              private router: Router) {
                
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
    if(id) {
      this.action = 'update';
      this.productService.get(parseInt(id)).subscribe((product: Product) => {
        const { id, code, name, price, quantity } = product;
        this.model.setValue({
          id,
          code,
          name,
          price,
          quantity
        });
      })
    } else {
      this.action = 'create';
    }
    
  }

  ngOnInit() {
  }

  getErrorMessage(field) {
    return this.model.controls[field].hasError('required') ? 'This field is required' : '';
  }

  back() {
    this.router.navigate(['/products']);
  }

  validate() {
    Object.keys(this.model.controls).forEach(field => {
      const control = this.model.get(field);
      control.markAsTouched({ onlySelf: true })
    });

    return this.model.valid;
  }

  save() {
    if(this.validate()) {
      let product = this.model.value;
      if(this.action === 'create') {
        product.id = uuid()
      }
      this.productService[this.action](product).subscribe(() => {
        this.snackBar.open('Product successfully saved', 'Ok', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
  
        this.back();
      });
    }
  }

}
