// IMPORTS -----------------------------------------
import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { ProductListComponent }       from './product-list/product-list.component';
import { ProductDetailComponent }     from './product-detail/product-detail.component';



// ROUTES -----------------------------------------
const productRoutes: Routes = [
  { path: '',                                 redirectTo: 'product',                pathMatch: 'full' },
  { path: 'product',                          component: ProductListComponent,      pathMatch: 'full' },
  { path: 'product/category/:categoryId',     component: ProductListComponent,      pathMatch: 'full' },
  { path: 'product/category/:categoryId/:id', component: ProductDetailComponent,    pathMatch: 'full' },
];

@NgModule({
imports: [
  RouterModule.forChild(productRoutes)
],
exports: [
  RouterModule
]
})
export class ProductRoutingModule { }
