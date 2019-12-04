import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSelectComponent} from './app-select/app-select.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    AppSelectComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
