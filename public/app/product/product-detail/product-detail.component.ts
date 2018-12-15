// IMPORTS -----------------------------------------------------
  // ANGULAR ---------------------
  import { Component, OnInit }            from '@angular/core';
  import { Router, ActivatedRoute }       from '@angular/router';

  import { ProductService }               from '../product.service';
  import { CategoryService }              from 'public/app/category/category.service';
  import { Category }                     from 'public/app/category/category.model';
  import { Observable }                   from 'rxjs';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public item:            any;
  public categoryList:    any;
  public filterDetail:    any;
  public filterKeyDetail: any = [];
  public category:        Category;
  public pageTitle:       string = '';

  private start(): void {
    this.route.params.subscribe(params => {
      if (params['categoryId'] != null && params['id'] != null) {
        let categoryId    = +params['categoryId'];
        let id            = +params['id'];
        this.get(categoryId, id);

        // Get current category details
        this.categoryService.get(categoryId).subscribe( c => {
          this.category   = c;
        });
      } else {
        this.query();
      }
    });

    this.categoryService.query().subscribe( c => {
      this.categoryList = c.items;
    });
  }

  private get(categoryId: number, id: number): void {
    this.service.get(categoryId, id).subscribe( p => {
      this.item         = p;
      this.pageTitle    = p.name;
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
