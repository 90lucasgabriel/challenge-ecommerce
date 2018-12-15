// IMPORTS -----------------------------------------------------
  import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild }                from '@angular/core';
  import { Router }                   from '@angular/router';
  import { AppConfig }                from './app.config';

  import { LoaderService }            from './common/services/loader.service';
  import { MediaMatcher } from '@angular/cdk/layout';
  import { MatSidenav } from '@angular/material';
  import { CategoryService } from './category/category.service';




  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
  })
  export class AppComponent implements OnInit, AfterViewInit   {
// DECLARATIONS -------------------------------------------------
  public progressBarVisible:  boolean = false;
  public showSearch:          boolean = false;
  public name:                string  = 'Angular';
  public background:          string  = '';
  public themeList:           any     = AppConfig.THEME_LIST;
  public apiPath:             string  = AppConfig.API_PATH;
  public menus:               any;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('sidenav') sidenav: MatSidenav;




  // METHODS ------------------------------------------------------
    private start(): void {
      this.categoryService.query().subscribe(c => {
        
      });
    }





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

    this.startProperties();
    this.start();
  }

  /**
   * Initialize properties
   */
  private startProperties(): void {
    this.menus       = [{
      name: 'Página Inicial',
      icon: '',
      link: ``
    }, {
      name: 'Camisetas',
      icon: '',
      link: `product/category/1`
    }, {
      name: 'Calças',
      icon: '',
      link: `product/category/2`
    }, {
      name: 'Sapatos',
      icon: '',
      link: `product/category/3`
    }, {
      name: 'Contato',
      icon: '',
      link: `contact`
    }];
  }

  public onActivate(event) {
    // document.getElementById('main-content').scrollTo(0, 0);
  }

  public toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  public selectTheme(theme) {
    document.body.className = '';
    document.body.classList.add(theme, 'mat-app-background');
  }

  public toggleSearch(): boolean {
    this.showSearch = !this.showSearch;
    return this.showSearch;
  }

  public submitSearch(q: string) {
    this.router.navigate(['/video', 'list', q]);
  }

  /**
   * Execute after load
   */
  public ngOnInit() { }

  /**
   * Execute after load all components
   */
  public ngAfterViewInit() {
    // this.location.go('company/1/branch');
  }

  public closeSideNav() {
    this.sidenav.close();
  }

  public openSideNav() {
    this.sidenav.open();
  }
}
