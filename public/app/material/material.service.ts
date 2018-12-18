// IMPORTS -----------------------------------------------------
  // ANGULAR -------------------------
  import { Injectable }                 from '@angular/core';

  // CONFIG --------------------------
  import { AppConfig }                  from '../app.config';
import { MatSnackBar } from '@angular/material';




@Injectable()
export class MaterialService {
// DECLARATIONS --------------------------------------------------
  private url:                          string = `${AppConfig.API_PATH}`;




// METHODS -------------------------------------------------------
  public openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }



// OTHERS ---------------------------------------------------------
  constructor(private snackBar: MatSnackBar) { }

}
