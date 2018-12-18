// IMPORTS -----------------------------------------------------
  // ANGULAR --------------------------
  import { Component, OnInit, ViewChild }  from '@angular/core';
  import { Router }                   from '@angular/router';
  import { MatSidenav }               from '@angular/material';
  import { Menu }                     from './common/model/menu.model';
  import { map }                      from 'rxjs/operators';

  // SERVICE --------------------------
  import { LoaderService }            from './common/services/loader.service';
  import { CategoryService }          from './category/category.service';
  import { AppConfig }                from './app.config';




  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
  })
  export class AppComponent implements OnInit   {
// DECLARATIONS -------------------------------------------------
  public progressBarVisible:  boolean = false;
  public hideSearch:          boolean = false;
  public name:                string  = 'Angular';
  public background:          string  = '';
  public themeList:           any     = AppConfig.THEME_LIST;
  public apiPath:             string  = AppConfig.API_PATH;
  public menus:               Array<Menu>;
  private categoryList:       any;
  @ViewChild('sidenav') sidenav: MatSidenav;




  // METHODS ------------------------------------------------------
    private start(): void { }





  // OTHERS ------------------------------------------------------
  constructor(
    private router:             Router,
    private loader:             LoaderService,
    private categoryService:    CategoryService) {
    // change isLoading status whenever notified
    loader
      .onLoadingChanged
      .subscribe(isLoading => {
        this.progressBarVisible = isLoading;
      });
  }

  /**
   * Execute after load
   */
  public ngOnInit() {
    this.startProperties();
    this.start();
   }

  /**
   * Initialize properties
   */
  private startProperties(): void {
    // Convert categories into menu object format
    this.categoryList = this.categoryService.query().pipe(
      map( c => {
        return c.items.map( i => {
          return {
            name: i.name,
            icon: 'label',
            link: `product/category/${i.id}`
          };
        });

      })
    );

    this.menus       = [{
      name: 'Página Inicial',
      icon: 'home',
      link: ``
    }];

    // Add all categories to main menu
    this.categoryList.subscribe( c => {
      this.menus = this.menus.concat(c);
      this.menus.push({
        name: 'Contato',
        icon: 'mail',
        link: `contact`
      });
    });
  }

  // LAYOUT ---------------
  public toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  public selectTheme(theme) {
    document.body.className = '';
    document.body.classList.add(theme, 'mat-app-background');
  }

  public toggleSearch(): boolean {
    this.hideSearch = !this.hideSearch;
    return this.hideSearch;
  }

  public submitSearch(q: string) {
    this.router.navigate(['/product/q', q]);
  }

  public closeSideNav() {
    this.sidenav.close();
  }

  public openSideNav() {
    this.sidenav.open();
  }
}
