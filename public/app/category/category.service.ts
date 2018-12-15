// IMPORTS -----------------------------------------------------
  // ANGULAR -------------------------
  import { Injectable }                 from '@angular/core';
  import { HttpClient }                 from '@angular/common/http';
  import { Observable }                 from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category.model';
import { ApiResponse } from '../common/model/api-response.model';




@Injectable()
export class CategoryService {
// DECLARATIONS --------------------------------------------------
  private url:                          string = `mock-api/V1/categories/list`;




// METHODS -------------------------------------------------------
  /**
   * GET Search List
   */
  public query(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public get(id: number): Observable<Category> {
    return this.http.get(`${this.url}`).pipe(
      map( (c: ApiResponse) => {
      return  c.items.find(category => category.id === id);
    })
    );
  }

  public getFilter(): any {
    
  }




// OTHERS ---------------------------------------------------------
  constructor(private http: HttpClient) { }

}
