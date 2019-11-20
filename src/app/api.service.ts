import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 
  getArts() {
    // return this.http.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mEFtmwXR1fltqq8rPx8PKwTLKmktbqhO');
    return fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mEFtmwXR1fltqq8rPx8PKwTLKmktbqhO');
  }
}
