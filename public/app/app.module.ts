// IMPORTS -------------------------------------
  // ANGULAR ------------------------
  import { BrowserModule }              from '@angular/platform-browser';
  import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
  import { NgModule }                   from '@angular/core';
  import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';

  // CONFIG -------------------------
  import { AppRoutingModule }           from './app-routing.module';
  import { MaterialModule }             from './material/material.module';

  // SERVICES -----------------------
  import { LoaderService }              from './common/services/loader.service';
  import { LoaderInterceptor }          from './common/interceptors/loader.interceptor';

  // PROJECT ------------------------
  import { AppComponent }               from './app.component';
  import { CategoryModule }             from './category/category.module';
  import { ProductModule }              from './product/product.module';




@NgModule({
declarations: [ AppComponent ],
imports: [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,

  AppRoutingModule,
  MaterialModule,

  CategoryModule,
  ProductModule
],
providers: [
  LoaderService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    useFactory: (service: LoaderService) => new LoaderInterceptor(service),
    multi: true,
    deps: [LoaderService]
  }
],
bootstrap: [AppComponent]
})
export class AppModule { }
