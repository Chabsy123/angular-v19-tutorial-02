import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../user';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {

  // object that stores user input from the form (bound using [(ngModel)])
  userObject: User = {};

  // called when form is submitted
  onSubmit(userForm: NgForm) {
    // prints the full form data in the console
    console.log(userForm.value);
  }

  // lifecycle hook: runs once when the component is initialized
  ngOnInit(): void {
    // example of pre-populating values in the form
    // this.userObject = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john@example.com',
    //   pass: '123456',
    //   isCheck: true
    // };
  }

  // completely replaces all form values with the object
  setValues(userForm: NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      pass: '123456',
      isCheck: true
    }
    userForm.setValue(obj); // requires ALL fields to be present
  }

  // partially updates only some fields in the form
  patchValues(userForm: NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      // pass and isCheck left out → they won’t change
    }
    userForm.control.patchValue(obj);
  }

  // resets the form back to empty (or default values)
  resetValues(userForm: NgForm) {
    userForm.resetForm();
  }
}
