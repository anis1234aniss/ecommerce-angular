import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Categories } from './categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiURL="http://localhost:3001/api";

  constructor(private httpClient: HttpClient) {}
  getallcategories(): Observable<any>{
    return this.httpClient.get(this.apiURL + '/categories/')
  { }
}
}
