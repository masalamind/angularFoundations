import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { coolComponent } from './IntroToAngular/my-component/my-component.component';
import { InterpolationComponent } from './Basics/DataBinding/interpolation-component/interpolation-comp.component';
import { PropertyBindingComponent } from './Basics/DataBinding/property-binding-component/property-binding-component.component'

@NgModule({
  declarations: [
    AppComponent, coolComponent, InterpolationComponent, PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
