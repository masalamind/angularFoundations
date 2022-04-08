import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // goals: string[];
  goals: Goal[] = [
    {id:1, name: 'Watch finding nemo'},
    {id:2, name: 'Buy cookies'},
    {id:3, name: 'Get new phone case'},
    {id:4, name: 'Get Dog food'},
  ];

  // constructor(){
  //   this.goals = ['Watch Finding Nemo', 'Buy cookies', 'Get new phone case']
  // }
   
}
