import { Component, Inject } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
   parentProperty : string = "View-user : Kindly read the user details.";

  constructor(@Inject(CrudService) private crud: CrudService, private activeRoute: ActivatedRoute, private router: Router) { }

  userData: any; // holds user fetched
  userId!: { uid: number; };

  ngOnInit(): void {
    // Get user id from route
    this.userId = { uid: this.activeRoute.snapshot.params['id'] }
    console.log(this.userId.uid);

    // Fetch user by id
    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
    })
  }

  onClose(){
    this.router.navigateByUrl('crud');
  }
}
// Handles Read (single user).

// Fetches one user by id and displays.
