import { Injectable }               from '@angular/core';

@Injectable()
export class UtilService {
  /**
   * Convert an object into querystring
   * @param object any
   */
  public ObjectToQuerystring(object: any): string {
    return Object.keys(object).map(key => key + '=' + object[key]).join('&');
  }
}
