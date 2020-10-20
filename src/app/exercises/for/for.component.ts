import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  names:string[] = ['Antonio', 'Gonzalo', 'Victor', '......']
  constructor() { }

  ngOnInit(): void {
  }

}
