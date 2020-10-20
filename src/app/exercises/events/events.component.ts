import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

text:string;

  constructor() {}


  aler(dat:Event){
    let element:HTMLInputElement = dat.target as HTMLInputElement; 
    this.text = element.value;
  }

  ngOnInit(): void {
  }

}
