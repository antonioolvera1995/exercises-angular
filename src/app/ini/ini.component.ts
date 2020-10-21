import { Component, OnInit } from '@angular/core';
import { RutasService } from "src/app/shared/services/rutas.service";

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {

  links:string[];
  constructor(rutas:RutasService) { 
    this.links = rutas.getRutas();
  }

  ngOnInit(): void {
  }

}
