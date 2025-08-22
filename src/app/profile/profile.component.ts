import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../Services/shared-data.service';
import { get } from 'http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  dummyData : any;     // holds static/shared data from service
  isEligible : boolean; // stores business logic result
  apiData : any;       // stores API data from service

  // Dependency Injection:
  // We inject SharedDataService here so this component
  // can "use" whatever data or logic the service provides.
  constructor(private _sharedData: SharedDataService) {

    // Example 1: Getting static/shared data
    this.dummyData = this._sharedData.userData;

    // Example 2: Running business logic from service
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  // Runs when the component loads
  ngOnInit(): void {
    this.getData();
  }

  // Example 3: Getting API data through the service
  getData() {
    // Services return observables for HTTP requests,
    // so we subscribe here to receive the result.
    this._sharedData.getUserData().subscribe(res => {
     this.apiData = res;
    });
  }


  //   userData = {
  //   id : 1,
  //   name : 'John',
  //   username : 'john',
  //   email : 'john@gmail.com'
  // }
}
