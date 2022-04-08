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

    song: any = {
        title: "Where I'll Always Be",
        genre: "Indie Folk",
        album: "Where I'll always be",
        songNumber: 3
    };
}