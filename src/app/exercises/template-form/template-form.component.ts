import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  name: string = 'Antonio';
  secondName: string;
  emaill:string;

  constructor() { }
  ngOnInit(): void {
  }

  saveForm(form: NgForm) {

    if (form.form.status === 'INVALID') {
      return
    }
      console.log(form);
      console.log('Nombre: ', form.value.nombre);
      console.log('Nombre: ', form.form.value);
      console.log(form.form.touched);
      console.log(form.form.pristine);
  }

}
