import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: any[] = [];
  constructor(private htttp: HttpClient) {

  }



  getUser(): any {

   
    this.htttp.get('https://randomuser.me/api/?results=1').subscribe((data: any) => {
      this.user = data.results
      console.log(this.user);
    }, (error)=>{console.log('-----------------',error);
    }) ;
    ;

    return this.user;
  }

}
