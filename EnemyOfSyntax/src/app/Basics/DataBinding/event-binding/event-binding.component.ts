import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  clicks = 0; 
  userInput = "";

  buttonClick = ()=>{
    return this.clicks++;
  }

  // indicate the type of the argument 

  takeInput = (evt:any)=>{
    // console.log(evt);  # the event you'll log out 
    // console.log(evt.target.value);

    this.userInput = evt.target.value; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
