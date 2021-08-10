import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable()
export class TechmemeService extends DataService {

  constructor(http:HttpClient) { 
    super(http, 'https://82rrysxymg.execute-api.us-east-1.amazonaws.com/prod/gettechmemefeed'); 
  }

}
