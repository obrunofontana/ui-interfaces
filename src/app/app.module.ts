import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { FormsModule } from '@angular/forms';

import {
  MzInputModule,
  MzDatepickerModule,
  MzRadioButtonModule,
  MzButtonModule,
  MzSelectModule,
  MzCollapsibleModule,
  MzTextareaModule,
  
} from 'ngx-materialize'


@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignComponent,

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
