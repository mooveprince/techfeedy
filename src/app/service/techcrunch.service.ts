import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TechcrunchService extends DataService {

  constructor(http:HttpClient) { 
    super(http, 'https://zu89rny3jk.execute-api.us-east-1.amazonaws.com/prod/gettechcrunchfeed'); 
  }

}
