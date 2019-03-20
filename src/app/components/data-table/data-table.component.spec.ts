import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { HttpClientModule } from '@angular/common/http';

fdescribe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let service: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      imports: [ 
        AppMaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.options = {
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
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items list', () => {
    service = TestBed.get(ProductService);
    service.getAll().subscribe((products: Array<Product>) => {
      component.data = products;
      component.ngOnInit();
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table').textContent).toContain('Code');
    })
    
  });
});
