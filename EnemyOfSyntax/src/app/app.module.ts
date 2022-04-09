import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { coolComponent } from './IntroToAngular/my-component/my-component.component';
import { InterpolationComponent } from './Basics/DataBinding/interpolation-component/interpolation-comp.component';
import { PropertyBindingComponent } from './Basics/DataBinding/property-binding-component/property-binding-component.component';
import { EventBindingComponent } from './Basics/DataBinding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Basics/DataBinding/two-way-data-binding/two-way-data-binding.component';
import { StructuralDirectivesComponent } from './Basics/Directives/structural-directives/structural-directives.component';


@NgModule({
  declarations: [
    AppComponent, coolComponent, InterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayDataBindingComponent, StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
