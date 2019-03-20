import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { DataTableComponent } from '../data-table/data-table.component';
import { LoadingComponent } from '../loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/services/product.service';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [
        ProductsListComponent,
        DataTableComponent,
        LoadingComponent
      ],
      imports: [
        AppMaterialModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ ProductService ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProducts()',() => {
    spyOn(component, 'loadProducts');
    component.ngOnInit();
    expect(component.loadProducts).toHaveBeenCalled();
  });
});
