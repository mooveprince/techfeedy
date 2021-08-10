import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

//@Injectable()
export class DataService {

  constructor(private http:HttpClient, private url:string) { }

  getAll () {
    return this.http.get(this.url);
      
  }

}
