import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  showElement: boolean = false;

  constructor() { }

  toggleVisibility = ()=>{
    this.showElement = !this.showElement;
  }


  ngOnInit(): void {
  }

}
