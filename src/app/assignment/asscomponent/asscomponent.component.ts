import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asscomponent',
  templateUrl: './asscomponent.component.html',
  styleUrls: ['./asscomponent.component.css']
})
export class AsscomponentComponent implements OnInit {
  ShowSecret=false;
   logarray = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplay(){
    this.ShowSecret=!this.ShowSecret;
    this.logarray.push(this.logarray.length + 1);
  }

}
