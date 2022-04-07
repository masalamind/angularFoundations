import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TawiComponent } from './tawi/tawi.component';
import { KokoComponent } from './koko/koko.component';
import { WarningAlert } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TawiComponent,
    KokoComponent,
    WarningAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
