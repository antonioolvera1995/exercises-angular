import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {

  links:string[] = ['Formulario','Service', 'Events', 'Styles', 'If-Else', 'Class', 'For'];
  constructor() { }

  ngOnInit(): void {
  }

}
