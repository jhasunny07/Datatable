// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule, FormsModule
, ScrollingModule  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }