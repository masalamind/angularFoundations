import { Component } from '@angular/core';

@Component({

    selector: "interpolation-comp",
    templateUrl: "./interpolation-comp.component.html",
    styleUrls: ['./interpolation-comp.component.css']
}) 


export class InterpolationComponent{

    name: string = "Interpolation Component";

    cars: string[] = ['Jeep', 'Mercedes', 'Suzuki']

    person: any= {
        name: "Marcus",
        age: "21", 
        other: ["Jabari","Eneza"],
        isTall: true
    }

}