import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit {

  parentProperty : string = "Update-User : This is the Update User page.";
  updateUserForm : FormGroup; // form object

  constructor(private crud : CrudService, private activeRoute : ActivatedRoute, private router : Router, private fb : FormBuilder) {
    // build form
    this.updateUserForm = this.fb.group({
      id :[''],
      username :[''],
      email :[''],
    });
  }

  userData : any; // holds fetched user
  userId!: { uid: number; }; // holds user id from route

  ngOnInit(): void {
    // Extract id from URL
    this.userId = {
      uid : this.activeRoute.snapshot.params['id']
    }
    console.log(this.userId.uid)

    // Fetch data by id and fill form
    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
       this.updateUserForm.setValue({
         id: this.userData.id,
         name: this.userData.name,
         username: this.userData.username,
         email: this.userData.email
       });
    })
  }

  onSubmit(){
    // Send updated data to server
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }
}
// Handles Update part of CRUD.

// Grabs id from route, fetches that user, pre-fills form, and sends updated values back.
