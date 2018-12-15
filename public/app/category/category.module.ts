// IMPORTS ---------------------------------------
  // ANGULAR ------------------------
  import { NgModule }                     from '@angular/core';
  import { CommonModule }                 from '@angular/common';
  import { HttpClientModule }             from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }               from '../material/material.module';

  // OBJECT -------------------------
  import { CategoryRoutingModule }        from './category-routing.module';
  import { CategoryService }              from './category.service';
//  import { CategoryFeaturedComponent }   from './category-featured/category-featured.component';
//  import { CategoryListComponent }       from './category-list/category-list.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    //CategoryFeaturedComponent, CategoryListComponent
  ],
  providers:    [CategoryService]
})
export class CategoryModule { }
