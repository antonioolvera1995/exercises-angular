
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
  selector: 'app-peticiones-http',
  templateUrl: './peticiones-http.component.html',
  styleUrls: ['./peticiones-http.component.css']
})
export class PeticionesHttpComponent implements OnInit {


  users:any[]=[];
  constructor(usersService:UsersService) {

    this.users = usersService.getUser();
  }

  ngOnInit(): void {
  }

}
