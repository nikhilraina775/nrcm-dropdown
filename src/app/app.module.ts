import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleModule } from '../lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
