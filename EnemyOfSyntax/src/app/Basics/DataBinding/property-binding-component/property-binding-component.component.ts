import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-component',
  templateUrl: './property-binding-component.component.html',
  styleUrls: ['./property-binding-component.component.css']
})
export class PropertyBindingComponent implements OnInit {

  btnClassMethod = "btn btn-primary";

  constructor() { }

  ngOnInit(): void {
  }

}
