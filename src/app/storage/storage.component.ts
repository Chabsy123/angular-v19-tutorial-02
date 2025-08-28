import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 
// CookieService is a 3rd-party library to easily work with cookies

@Component({
  selector: 'app-storage', // This component is called <app-storage> in HTML
  imports: [],
  templateUrl: './storage.component.html', // HTML file linked above
  styleUrl: './storage.component.scss' // Optional styling file
})
export class StorageComponent {

  // Inject CookieService so we can use it inside methods
  constructor(private cookie: CookieService) { }

  // Variables to store values retrieved from storages
  sessionValue: any = "";   // Holds sessionStorage "name"
  localValue: any = "";     // Holds localStorage "username"
  cookieValue: string = ""; // Holds cookie "token1"

  // ---------------------- SESSION STORAGE METHODS ----------------------

  setSession() {
    // Stores key/value pairs in sessionStorage (lasts until browser tab closes)
    sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session123');
  }

  getSession() {
    // Retrieves value of "name" and stores it in sessionValue
    this.sessionValue = sessionStorage.getItem('name');
  }

  removeSession() {
    // Removes only the "pass" key from sessionStorage
    sessionStorage.removeItem('pass');
  }

  clearSession() {
    // Clears ALL sessionStorage data
    sessionStorage.clear();
    this.sessionValue = "";
  }

  // ---------------------- LOCAL STORAGE METHODS ----------------------

  setLocal() {
    // Stores values in localStorage (persists even after browser is closed)
    localStorage.setItem('username', 'local');
    localStorage.setItem('password', 'local123');
  }

  getLocal() {
    // Retrieves "username" and stores it in localValue
    this.localValue = localStorage.getItem('username');
  }

  removeLocal() {
    // Removes only "password" from localStorage
    localStorage.removeItem('password');
  }

  clearLocal() {
    // Clears ALL localStorage data
    localStorage.clear();
    this.localValue = "";
  }

  // ---------------------- COOKIE METHODS ----------------------

  setCookie() {
    // Sets cookies with a name/value pair
    // First cookie expires in 1 day
    this.cookie.set('token1', '12345', 1);
    // Second cookie has no expiry date (session cookie)
    this.cookie.set('token2', 'xyz');
  }

  getCookie() {
    // Retrieves value of "token1" and stores in cookieValue
    this.cookieValue = this.cookie.get('token1');
  }

  deleteCookie() {
    // Deletes all cookies (can also delete specific ones)
    this.cookie.deleteAll();
    this.cookieValue = "";
  }
}
