import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {

  links:string[] = ['Events','Formulario'];
  constructor() { }

  ngOnInit(): void {
  }

}
