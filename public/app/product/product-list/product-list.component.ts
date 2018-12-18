// IMPORTS -----------------------------------------------------
  // ANGULAR ---------------------
  import { Component, OnInit }            from '@angular/core';
  import { Router, ActivatedRoute }       from '@angular/router';

  // SERVICE ---------------------
  import { ProductService }               from '../product.service';
  import { CategoryService }              from 'public/app/category/category.service';

  // PROJECT ---------------------
  import { Category }                     from 'public/app/category/category.model';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:   any | Array<any> = [];
  public categoryList:  any;
  public filterList:    any;
  public filterKeyList: any       = [];
  public category:      Category;
  public categoryId:    number;
  public pageTitle:     string    = 'Produtos';
  public gridView:      boolean   = true;
  public q: string;

  private start(): void {
    this.route.params.subscribe(params => {
      // If search by category
      if (params['categoryId'] != null) {
        this.categoryId   = +params['categoryId'];

        // Get current category details
        this.categoryService.get(this.categoryId).subscribe( c => {
          this.category   = c;
          this.pageTitle  = c.name;
        });

        this.query(0);
      }

      // If search by keyword
      else if (params['q'] != null) {
        this.q = params['q'];
        this.search();
      }

      // Show all products
      else {
        this.query(0);
      }
    });

    this.categoryService.query().subscribe( c => {
      this.categoryList = c.items;
    });
  }

  /**
   * Get all products
   * @param page 
   */
  private query(page: number): void {
    this.service.query(page, this.categoryId).subscribe( t => {
      if (page === 0) {
        this.productList = [];
      }

      t.subscribe( a => {
        this.productList.push(a);
      });
    });
  }

  /**
   * Search by value (Incompleto)
   */
  public search(): void {
    this.service.query(0).subscribe( t => {
      this.productList = [];
      t.subscribe( a => {
        this.productList.push(a);
        this.productList.find(item => item.name === this.q);
      });
    });
  }




// OTHERS ----------------------------------------
  constructor(
    private router:               Router,
    private route:                ActivatedRoute,
    private service:              ProductService,
    private categoryService:      CategoryService) { }

  ngOnInit() {
    this.start();
  }

  /**
   * Order product list by properties
   */
  public orderBy(event) {
    if (event.value === 'nameAz') {
      this.productList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (event.value === 'nameZa') {
      this.productList.sort((b, a) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (event.value === 'price01') {
      this.productList.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (event.value === 'price10') {
      this.productList.sort((b, a) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    }
  }

  /**
   * Toggle grid and list view
   * @param value boolean
   */
  public isGridView(value: boolean): void {
    this.gridView = value;
  }

}
