import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(),
      isChecked: new FormControl(true),
      address: new FormGroup({
        street: new FormControl(""),
        city: new FormControl(""),
        pincode: new FormControl()
      })
    })

    this.reactiveForm.controls['isChecked'].disable();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  setAllValues() {
    this.reactiveForm.setValue({
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      password: 123456,
      isChecked: true,
      address: {
        city: "New York",
        street: "123 Main Street",
        pincode: 123456
      }
    })
  }



  setPartialValues() {
    // this.reactiveForm.patchValue({
    //   address: {
    //     city: "New York",
    //     street: "123 Main Street",
    //     pincode: 123456
    //   }
    // })
    this.reactiveForm.controls['firstName'].patchValue("John");

  }

  resetForm() {
    // this.reactiveForm.reset();
    this.reactiveForm.controls['firstName'].reset("John");
  }

}
