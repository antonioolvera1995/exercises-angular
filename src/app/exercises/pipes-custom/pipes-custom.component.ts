import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-custom',
  templateUrl: './pipes-custom.component.html',
  styleUrls: ['./pipes-custom.component.css']
})
export class PipesCustomComponent implements OnInit {

name = 'antonio olvera cucu';
url:string = 'https://www.youtube.com/embed/vNTLbCTUgL4';
  constructor() { }


  ngOnInit(): void {
  }


}
