import { Component, OnInit } from '@angular/core';
import { RutasService } from "src/app/shared/services/rutas.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  title:string = 'Header';
  links:string[];
  constructor(rutas:RutasService) { 
    this.links = rutas.getRutas();
  }

  ngOnInit(): void {
    
  }

}
