// IMPORTS -----------------------------------------
  import { NgModule }                   from '@angular/core';
  import { RouterModule, Routes }       from '@angular/router';

  //import { CategoryFeaturedComponent }     from './category-featured/category-featured.component';
  //import { CategoryListComponent }         from './category-list/category-list.component';



// ROUTES -----------------------------------------
  const categoryRoutes: Routes = [
    //{ path: '',                 redirectTo: 'category',                pathMatch: 'full' },
    //{ path: 'category',            component: CategoryFeaturedComponent,  pathMatch: 'full' },
    //{ path: 'category/list',       component: CategoryListComponent,      pathMatch: 'full' },
    //{ path: 'category/list/:q',    component: CategoryListComponent,      pathMatch: 'full' },
    //{ path: 'category/:id',        component: CategoryFeaturedComponent,  pathMatch: 'full' },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }
