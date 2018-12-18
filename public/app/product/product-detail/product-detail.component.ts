// IMPORTS -----------------------------------------------------
  // ANGULAR ---------------------
  import { Component, OnInit }            from '@angular/core';
  import { Router, ActivatedRoute }       from '@angular/router';

  // SERVICES --------------------
  import { MaterialService }              from 'public/app/material/material.service';
  import { ProductService }               from '../product.service';
  import { CategoryService }              from 'public/app/category/category.service';

  // PROJECT ---------------------
  import { Category }                     from 'public/app/category/category.model';
  import { Product }                      from '../product.model';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public item:            any;
  public categoryList:    any;
  public filterDetail:    any;
  public productList:     any = [];
  public filterKeyDetail: any = [];
  public category:        Category;

  private start(): void {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        const id = +params['id'];
        this.get(id);
      } else {
        this.material.openSnackBar('Parâmetros incompletos', 'OK', 5000);
      }
    });

    this.categoryService.query().subscribe( c => {
      this.categoryList   = c.items;
    });
  }

  /**
   * Get product list and filter result by id
   * @param id 
   */
  private get(id: number): void {
    this.service.query(0).subscribe( t => {
      this.productList = [];

      t.subscribe( a => {
        this.productList.push(a);
        this.item = this.productList.find(i => i.id === id);
      },
      error => {
        this.material.openSnackBar(`Erro: ${error}`, 'OK', 5000);
      });
    });

  }

  /**
   * Add items to cart
   * @param item 
   */
  public addToCart(item: Product) {
    // TO DO: cart
    this.material.openSnackBar(`Produto adicionado ao carrinho`, 'OK', 5000);
  }





// OTHERS ----------------------------------------
  constructor(
    private router:               Router,
    private route:                ActivatedRoute,
    private service:              ProductService,
    private categoryService:      CategoryService,
    private material:             MaterialService) { }

  ngOnInit() {
    this.start();
  }

}
