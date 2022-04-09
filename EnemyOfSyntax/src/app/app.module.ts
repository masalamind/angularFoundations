import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { coolComponent } from './IntroToAngular/my-component/my-component.component';
import { InterpolationComponent } from './Basics/DataBinding/interpolation-component/interpolation-comp.component'

@NgModule({
  declarations: [
    AppComponent, coolComponent, InterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
