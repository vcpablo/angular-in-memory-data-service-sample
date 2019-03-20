import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ProductFilterComponent } from '../components/product-filter/product-filter.component';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { RemoveDialogComponent } from '../components/data-table/remove-dialog/remove-dialog.component';
import { AppMaterialModule } from '../modules/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsListComponent,
    PageNotFoundComponent,
    LoadingComponent,
    ProductFilterComponent,
    DataTableComponent,
    ProductFormComponent,
    RemoveDialogComponent
  ],
  entryComponents: [
    RemoveDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
