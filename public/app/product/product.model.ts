export class Product {
  constructor(
    public id?:	          number,
    public sku?:          string,
    public path?:         string,
    public name?:         string,
    public image?:        string,
    public price?:        number,
    public filter?:       [any],
  ) {	}
}
