import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  addUserForm : FormGroup; // reactive form object

  constructor(private router: Router, private fb : FormBuilder, private CRUD : CrudService) {
    // Build the form with empty fields
    this.addUserForm = this.fb.group({
       name :[''],
       username :[''],
       email :[''],
    });
  }

  onSubmit() {
    // Print form values in console (debug)
    console.log(this.addUserForm.value);

    // Call service to POST data to db.json
    this.CRUD.postData(this.addUserForm.value).subscribe(res => {
      // After saving, navigate back to main CRUD page
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    // Cancel just returns to CRUD page
    this.router.navigateByUrl('crud');
  }
}
// This component handles Create part of CRUD.

// Uses CrudService.postData() to save new user.

// Navigation handled by Angular Router.
