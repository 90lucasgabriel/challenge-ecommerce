// IMPORTS -----------------------------------------------------
  // ANGULAR -------------------------
  import { Injectable }                 from '@angular/core';
  import { HttpClient }                 from '@angular/common/http';
  import { Observable, merge, forkJoin }                 from 'rxjs';

  // CONFIG --------------------------
  import { AppConfig }                  from '../app.config';
import { map, mergeMap, combineAll, mapTo} from 'rxjs/operators';
import { combineLatest, concat } from 'rxjs';
import { ApiResponse } from '../common/model/api-response.model';
import { Product } from './product.model';




@Injectable()
export class ProductService {
// DECLARATIONS --------------------------------------------------
  private url:                          string = `${AppConfig.API_PATH}`;




// METHODS -------------------------------------------------------
  /**
   * GET product list
  */
  public query(page: number, categoryId?: number) {
    let result = [];

    if (!categoryId) {
      for (let i = 1; i < 4; i++) {
        result = result.concat(
          this.http.get(`${this.url}categories/${i}`).pipe(
            mergeMap( (p: ApiResponse) => {
              return p.items;
            })
          ));
      }
    } else {
      result = result.concat(
        this.http.get(`${this.url}categories/${categoryId}`).pipe(
          mergeMap( (p: ApiResponse) => {
            return p.items;
          })
        ));
    }

    return merge(result);
  }

  /**
   * Get product list by category
   * @param categoryId 
   * @param page 
   */
  public queryByCategory(categoryId: number, page?: number): Observable<any> {
    return this.http.get(`${this.url}categories/${categoryId}`);
  }

  /**
   * Get product item by Id's
   * @param categoryId
   * @param id 
   */
  public get(categoryId: number, id: number): Observable<Product> {
    return this.queryByCategory(categoryId, id).pipe(
      map( (c: ApiResponse) => {
      return  c.items.find(item => item.id === id);
    })
    );
  }



// OTHERS ---------------------------------------------------------
  constructor(private http: HttpClient) { }

}
