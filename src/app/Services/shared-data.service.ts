import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  API_URL = "https://jsonplaceholder.typicode.com/users";

  // Injecting HttpClient so this service can talk to APIs.
  constructor(private _http : HttpClient) { }

  // Example 3: Interacting with API
  getUserData() {
    return this._http.get(this.API_URL);
  }

  // Example 1: Shared static data
  userData = {
    id: 1,
    name: 'John',
    username: 'john',
    email: 'john@gmail.com',
    Subscription: 'basic'
  }

  // Example 2: Business logic
  // Instead of repeating this check in multiple components,
  // it’s placed here once and reused anywhere.
  isEligibleForSubscription() {
    if(this.userData.Subscription == 'basic' && this.userData.email.endsWith('@gmail.com')) {
      return true;
    }else{
      return false;
    }
  }
}

