import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root' // service is available everywhere
})
export class CrudService {

  base_url = "http://localhost:3000/Users" // db.json endpoint

  constructor(private http: HttpClient) { }

  // GET all users
  getData() {
    return this.http.get<Iuser[]>(this.base_url);
  }

  // POST new user
  postData(data : Iuser) {
    return this.http.post(this.base_url, data);
  }

  // GET single user by id
  getDataById(id : number) {
    return this.http.get<Iuser>(`${this.base_url}/${id}`);
  }

  // PUT update user
  putDataById(id : number, data : Iuser) {
    return this.http.put(`${this.base_url}/${id}`,data);
  }

  // DELETE user
  deleteData(id : number) {
    return this.http.delete(`${this.base_url}/${id}`);
  }
}
// This is the bridge between Angular and JSON server.

// All components rely on this to fetch, post, update, and delete.

// Centralizes API calls so code is clean.
