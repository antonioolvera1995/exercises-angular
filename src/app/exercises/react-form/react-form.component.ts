import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  forma: FormGroup;
  constructor(private fb: FormBuilder, private validator: ValidatorsService) { }

  ngOnInit(): void {

    this.createForm();
  }

  get nameValid(): boolean {
    return this.forma.get('name').valid && this.forma.get('name').touched;
  }

  createForm(): void {
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), this.validator.isAdmin]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)], this.validator.emailExist],
      hobbies: this.fb.array([])
    });
  }


  get getHobbies(): FormArray {

    return this.forma.get('hobbies') as FormArray;
  }

  addHobbie() {
    this.getHobbies.push(this.fb.control('', Validators.required));
  }


  delHobbie(i: number) {
    this.getHobbies.removeAt(i);
  }



  loadData() {
    this.forma.setValue({
      name: 'Antonio',
      lastname: 'Olvera',
      email: 'fgk@gmail.com',
    });


  }

  saveForm() {
    console.log(this.forma.value.name);
  }


}
