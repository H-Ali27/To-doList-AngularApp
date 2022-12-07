import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggletoDisplay(){
    // return this.log.push(this.log.length + 1);
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  }

}
