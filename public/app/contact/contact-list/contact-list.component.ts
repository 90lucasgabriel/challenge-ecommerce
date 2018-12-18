// IMPORTS ---------------------------
  import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
  import { FormControl, FormGroupDirective, FormBuilder, FormGroup, Validators }  from '@angular/forms';
  import { Router }                 from '@angular/router';

  import { Contact }                from '../contact.model';
  import { ContactService }         from '../contact.service';
  import { MaterialService }        from '../../material/material.service';




/**
 * List Contact
 *
 * @export
 * @class ContactListComponent
 * @implements {OnInit}
 */
@Component({
  selector:           'app-contact-list',
  templateUrl:        './contact-list.component.html',
  styleUrls:          ['./contact-list.component.css'],
  encapsulation:      ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {
// DECLARATIONS --------------------------
  @ViewChild(FormGroupDirective) myForm;
  public loading:               boolean;
  public contactForm:           FormGroup;
  public validationMessages:    any;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.contactForm        = this.createForm();
  }

  /**
   * Save form on Firestore 'contacts' collection
   * @param {FormGroup} contactForm
   */
  public sendForm(contactForm: FormGroup) {
    if (this.contactForm.status === 'VALID') {
      // this.service.send(`contacts`, contactForm.value);
      this.material.openSnackBar(`Sua mensagem foi enviada.`, 'OK', 5000);
      if (this.myForm) {
        this.myForm.resetForm();
      }
    } else {
      this.material.openSnackBar(`Erro ao enviar a mensagem.`, 'OK', 5000);
    }
  }




// OTHERS --------------------------------
  /**
   * Creates an instance of ContactListComponent.
   * @param {Router} router
   * @param {MatSnackBar} snackbar
   * @param {ContactService} service
   * @param {FormBuilder} fb
   * @memberof ContactListComponent
   */
  constructor(
    private router:             Router,
    private service:            ContactService,
    private material:           MaterialService,
    private fb:                 FormBuilder
  ) { }

  /**
   * Create validations and FormControls
   * @returns FormGroup
   */
  private createForm(): FormGroup {
    this.validationMessages = {
      'name': [
        { type: 'required',       message: 'Nome é obrigatório' }
      ],
      'email': [
        { type: 'required',       message: 'Email é obrigatório' },
        { type: 'email',          message: 'Insira um email válido' }
      ],
      'message': [
        { type: 'required',       message: 'Mensagem é obrigatória' }
      ]
    }

    return this.fb.group({
      name:               new FormControl('',   [Validators.required]),
      email:              new FormControl('',   [Validators.required, Validators.email]),
      phone:              new FormControl(''),
      message:            new FormControl('',   [Validators.required])
    });
  }

  /**
   * Execute on init
   */
  public ngOnInit() {
    this.start();
  }
}