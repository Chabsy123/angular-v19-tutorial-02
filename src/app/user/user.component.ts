import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
loginData() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {
    console.log("constructor called.");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // use for component input property
    console.log("1. ngOnChanges called.");
  }

  ngOnInit(): void {
    // use this for API calls
    console.log("2. ngOnInit called.");
  }

  ngDoCheck(): void {
    // use for every change detection
    console.log("3. ngDoCheck called");
  }
  ngAfterContentInit(): void {
    // use for ng-content
    console.log("4. ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    // use for viewChild
    console.log("6. ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("8. ngOnDestroy called");
  }
}

// loginData(){
  // user verificarion logic
  // this.router.navigateByUrl("structural-directive");
//   this.router.navigate(['structural-directive']);
// }

