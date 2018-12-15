// IMPORTS -----------------------------------------------------
  // ANGULAR ---------------------
  import { Component, OnInit }            from '@angular/core';
  import { Router, ActivatedRoute }       from '@angular/router';

  import { ProductService }               from '../product.service';
  import { CategoryService }              from 'public/app/category/category.service';
  import { Category }                     from 'public/app/category/category.model';
  import { Observable }                   from 'rxjs';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:   any;
  public categoryList:  any;
  public filterList:    any;
  public filterKeyList: any =[];
  public category:      Category;
  public pageTitle:     string = '';

  private start(): void {
    this.route.params.subscribe(params => {
      if (params['categoryId'] != null) {
        let categoryId = +params['categoryId'];
        this.queryByCategory(categoryId);

        // Get current category details
        this.categoryService.get(categoryId).subscribe( c => {
          this.category   = c;
          this.pageTitle  = c.name;
        });
      } else {
        this.query();
      }
    });

    this.categoryService.query().subscribe( c => {
      this.categoryList = c.items;
    });
  }

  private query(page?: number): void {
    
  }

  /**
   * Returns a product list by categoryId
   * @param categoryId number
   * @param page number
   */
  private queryByCategory(categoryId: number, page?: number): void {
    this.service.queryByCategory(categoryId, page).subscribe( p => {
      if (page) {
        this.productList  = this.productList.concat(p.items);
      } else {
        this.productList  = p.items;
      }
      this.filterList     = p.filters;

      for (let i = 0; i < this.filterList.length; i++) {
        console.log(Object.keys(this.filterList[i]).sort());
        this.filterKeyList  = this.filterKeyList.concat(Object.keys(this.filterList[i]).sort());
      }
      console.log(this.filterList);
    });
  }





// OTHERS ----------------------------------------
  constructor(
    private router:               Router,
    private route:                ActivatedRoute,
    private service:              ProductService,
    private categoryService:      CategoryService) {
      this.start();
  }

  ngOnInit() {
  }

}
