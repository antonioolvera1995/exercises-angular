import { Component, OnInit } from '@angular/core';
import { PersonasService } from "src/app/shared/services/personas.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
personas:Object;
  constructor(personasService:PersonasService) {
    this.personas = personasService.getPersonas();
   }
  ngOnInit(): void {
    

  }

}
