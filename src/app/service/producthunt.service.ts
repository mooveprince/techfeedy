import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProducthuntService extends DataService {

  constructor(http:HttpClient) { 
    super(http, 'https://7jlmauvwl4.execute-api.us-east-1.amazonaws.com/prod/getproducthunttrend'); 
  }

}
