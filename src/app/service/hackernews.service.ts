import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trends } from '../model/trends';
import { map } from 'rxjs/operators';

@Injectable()
export class HackernewsService extends DataService {

  constructor(http:HttpClient) { 
    super(http, 'https://ozlnvyhz2f.execute-api.us-east-1.amazonaws.com/prod/gethackerfeed'); 
  }

}

