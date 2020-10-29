import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipers',
  templateUrl: './pipers.component.html',
  styleUrls: ['./pipers.component.css']
})
export class PipersComponent implements OnInit {

  nombre: string = 'Horse Luis';
  lista: string[] = ['cola', 'cerveza', 'café'];
  nombreLargo: string = 'esternocleidomastoideo'
PI:number = Math.PI;
pasajeros:number = 74.2451;
iva:number = 0.21;
salario:number = 21000.50;

personje:object = {
  nombre:'tenacitas',
  serie:'simpson',
  hermano:'nemo'
}

fecha:Date = new Date();

dataLoader = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('Aqui tienes tus datos')
  }, 3000);
});

  constructor() {

  }



  ngOnInit(): void {
  }

}
