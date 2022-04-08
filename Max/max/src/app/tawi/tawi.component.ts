import { Component } from "@angular/core";

@Component({
        selector: 'app-tawi',
        templateUrl: './tawi.component.html', 
        styleUrls: ['./tawi.component.css'], 
        
    }
)

export class TawiComponent{
    // title: 'Tawi';
    desc: string = "Tawi is an amazing product";  // use string interpolation to display it in template 
}