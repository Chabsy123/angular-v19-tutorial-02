import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
      constructor(private router : Router) {

      }

      loginData(){
        // user verificarion logic
    // this.router.navigateByUrl("structural-directive");
        this.router.navigate(['structural-directive']);
      }
}
