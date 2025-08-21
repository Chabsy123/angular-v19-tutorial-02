import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,   // FormBuilder = a helper service to build FormGroup/FormControl/FormArray concisely
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  // Using Standalone Component style: declare needed imports here
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  // NOTE: must be plural 'styleUrls' (Angular expects an array)
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  // The top-level form model that the template binds to via [formGroup]
  reactiveForm: FormGroup;

  // ------------------------------
  // What FormBuilder does:
  // - It's an Angular service that helps you create form structures with short syntax:
  //     fb.group({...})  -> FormGroup
  //     fb.control(val)  -> FormControl
  //     fb.array([...])  -> FormArray
  //
  // How constructor(private fb: FormBuilder) works:
  // - Angular's Dependency Injection (DI) gives us a FormBuilder instance.
  // - 'private fb' creates a private class property so you can call this.fb.group(...) anywhere.
  // ------------------------------
  constructor(private fb: FormBuilder) {

    // ------------------------------
    // Building the form structure (shape) with FormBuilder:
    // fb.group(controlsConfig) where controlsConfig is an object:
    //   key: [ initialValue, [syncValidators], [asyncValidators] ]
    //   key: fb.group({...}) for nested groups
    //   key: fb.array([])     for arrays
    // ------------------------------
    this.reactiveForm = this.fb.group({
      // 'firstname' control; initial value '', two validators:
      // - required: must not be empty
      // - pattern: only letters (a-z or A-Z)
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],

      // 'lastname' control with required + min length 10
      lastname: ['', [Validators.required, Validators.minLength(10)]],

      // 'email' control with required + maxLength 15 + valid email format
      email: ['', [Validators.required, Validators.maxLength(15), Validators.email]],

      // 'password' control with required
      password: ['', [Validators.required]],

      // 'isChecked' control; will be disabled below
      isChecked: [''],

      // Nested FormGroup for address, created with fb.group
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),

      // FormArray for dynamic skills list (rows are FormGroups created by newSkill())
      skills: this.fb.array([])
    });

    // Disable the checkbox programmatically.
    // NOTE: Disabled controls are excluded from reactiveForm.value.
    this.reactiveForm.controls['isChecked'].disable();
  }

  // Typed getter for convenience in template and code:
  // - reactiveForm.get('skills') returns AbstractControl; we cast to FormArray.
  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  // Factory for a new skill row (FormGroup with a single 'skill' control).
  // This matches the template's [formGroupName]="i" and formControlName="skill".
  newSkill(): FormGroup {
    return this.fb.group({
      skill: [''] // can add validators e.g., Validators.required if needed
    });
  }

  // Adds one new skill row to the FormArray.
  addSkill(): void {
    this.skills.push(this.newSkill());
  }

  // Removes the skill row at index i.
  deleteSkill(i: number): void {
    this.skills.removeAt(i);
  }

  // Submit handler: logs the form value.
  // NOTE: Disabled controls (like isChecked) are omitted by default.
  onSubmit(): void {
    console.log(this.reactiveForm.value);
  }

  // setValue() requires values for EVERY control in the form (strict).
  // If you miss any control, Angular throws an error.
  setAllValues(): void {
    this.reactiveForm.setValue({
      firstname: 'Poonam',
      lastname: 'PoonamPatel',
      email: 'patel@gmail.com',
      password: '123', // use string for consistency with text inputs
      isChecked: true, //  Because 'isChecked' is disabled, this value will be ignored in .value
      address: {
        city: 'Mumbai',
        street: 'Charni Road',
        pincode: '1234' // strings are generally safer for text inputs
      },
      skills: [] // FormArray must still be present even if empty
    });
  }

  // patchValue() updates ONLY the provided subset (non-strict).
  // Use this when you don't want to provide the entire structure.
  setPartialValues(): void {
    this.reactiveForm.patchValue({
      address: {
        city: 'Mumbai',
        street: 'Charni Road',
        pincode: '123456'
      }
    });

    // Example of patching a single control:
    // this.reactiveForm.controls['firstname'].patchValue('Poonam');
  }

  // Resets all controls to initial values (null/empty), marks them pristine & untouched.
  resetForm(): void {
    this.reactiveForm.reset();
    // Example: Reset just one control:
    // this.reactiveForm.controls['firstname'].reset();
  }
}
