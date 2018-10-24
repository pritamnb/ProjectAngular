import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestAPIService {

  constructor(private http: HttpClient) { }

  createDb() {
    const abc = 'hey';
    this.http.get('http://localhost:3000/addpost1');
  }

}
