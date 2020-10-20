import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  name:string;
  lastName:string;
  userName:string;
  email:string;
  adress:string;
  adress2:string;
  country:string;
  province:string;
  postal:string;
  card:string;
  numcard:string;
  expiration:string;
  cvv:string;
  promo:string;

  constructor() { }

  ngOnInit(): void {
  }

 autocomplet() {

this.name = 'Antonio';
this.lastName = 'Olvera';
this.userName = 'Toni';
this.email = 'ejemplo@gmail.com';
this.adress = 'Calle jota nº3';
this.adress2 = 'Calle jota nº1';
this.country = 'España';
this.province = 'Almeria';
this.postal = '04740';
this.card = 'Mi card';
this.numcard = '778216414';
this.expiration = '2018-07-22';
this.cvv = '405';
this.promo = 'WefKn';

  
}

print(){

console.log(this.name);

console.log(this.lastName);

console.log(this.userName);

console.log(this.email);

console.log(this.adress);

console.log(this.adress2 );

console.log(this.country);

console.log(this.province);

console.log(this.postal);

console.log(this.card);

console.log(this.numcard);

console.log(this.expiration);

console.log(this.cvv);

console.log(this.promo);


}


}
