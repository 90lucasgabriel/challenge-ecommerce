// IMPORTS ---------------------------------------
  // ANGULAR ------------------------
  import { NgModule }                     from '@angular/core';
  import { CommonModule }                 from '@angular/common';
  import { HttpClientModule }             from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }               from '../material/material.module';

  // OBJECT -------------------------
  import { ProductRoutingModule }         from './product-routing.module';
  import { ProductService }               from './product.service';
  import { ProductListComponent }         from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//  import { ProductFeaturedComponent }   from './product-featured/product-featured.component';
//  import { ProductListComponent }       from './product-list/product-list.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers:    [ProductService]
})
export class ProductModule { }
