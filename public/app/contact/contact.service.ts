// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { Observable }                 from 'rxjs';
  import { Contact }                    from './contact.model';



@Injectable()
export class ContactService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'contacts/';
  private entity:                       string = 'contacts';
  private contactList:                  Observable<Contact[]>;




// METHODS -------------------------------------------------------
  public send(ref: string, data: Contact) {
    // TO DO: Send mail
  }




// OTHERS ---------------------------------------------------------
  constructor() { }

}
