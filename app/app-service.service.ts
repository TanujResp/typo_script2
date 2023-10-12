import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private url='http://localhost:3000/list'
  constructor(private http:HttpClient) { }

  getpost(){
    return this.http.get(this.url);
  }
}
