import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

import {
  MzInputModule,
  MzDatepickerModule,
  MzRadioButtonModule,
  MzButtonModule,
  MzSelectModule,
  MzCollapsibleModule,
  MzTextareaModule,
  MzValidationModule,
  MzCollectionModule,
  MzToastModule,


} from 'ngx-materialize';
import { PeopleListComponent } from './people-list/people-list.component'


@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignComponent,
    PeopleListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzInputModule,
    MzDatepickerModule,
    MzRadioButtonModule,
    MzButtonModule,
    MzSelectModule,
    MzCollapsibleModule,
    MzTextareaModule,
    FormsModule,
    MzCollectionModule,
    LocalStorageModule.forRoot({
      storageType: 'localStorage'
    }),
    MzValidationModule,
    ReactiveFormsModule,
    MzToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
