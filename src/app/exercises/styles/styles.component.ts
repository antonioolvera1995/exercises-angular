import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {
color:string = 'blue'
size:string = '3em';
  constructor() { }

  ngOnInit(): void {
  }

}
