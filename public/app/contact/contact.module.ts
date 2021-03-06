// IMPORTS ----------------------------------
  import { NgModule }                   from '@angular/core';
  import { CommonModule }               from '@angular/common';
  import { HttpClientModule }           from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }             from '../material/material.module';

  import { ContactRoutingModule }       from './contact-routing.module';
  import { ContactService }             from './contact.service';
  import { ContactListComponent }       from './contact-list/contact-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    ContactRoutingModule
  ],
  declarations: [ContactListComponent],
  providers:    [ContactService]
})
export class ContactModule { }
