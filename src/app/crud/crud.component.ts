import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {

  apiData: Iuser[] = []; // holds all users from db.json

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    // Load data when component starts
    this.getAllData();
  }

  getAllData() {
    // Call service to fetch users
    this.crud.getData().subscribe(res => {
      this.apiData = res; // assign response to table
    })
  }

   addNewUser() {
    // Navigate to add-user page
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id : number) {
    // Navigate to update-user page with id
    this.router.navigate(['updateuser',id]);
  }

  onView(id : number) {
   // Navigate to view-user page with id
   this.router.navigate(['viewuser',id]);
  }

  onDelete(id: number) {
    // Delete user by id
    this.crud.deleteData(id).subscribe(res => {
      alert("Record deleted successfully!");
      this.getAllData(); // refresh table
    })
  }
}
// This is the main hub for CRUD.

// Handles reading, deleting, and routing to add/update/view.
