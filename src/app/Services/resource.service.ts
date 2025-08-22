import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http : HttpClient) { }

  base_url : string = "https://fake-store-api.mock.beeceptor.com"

  // getAllData(){
  //     return this.http.get('${this.base_url}/api/users');
  // }

  rxResourceData = rxResource({
    loader : () => this.http.get(`${this.base_url}/api/users`)
  })

  resourceData = resource({
    loader : () => fetch(`${this.base_url}/api/users`).then(res => res.json() as Promise<any>)
  })
  // fetch method sends an HTTP response to the specified URL and the .then method is called after the response is received and the response .json method passes the response data into json format. Promise of type any is a type assertion tells us the past adjacent data is returned as a promise of any type as the result.
}
