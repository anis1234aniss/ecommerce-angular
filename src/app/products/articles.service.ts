import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiURL="http://localhost:3001/api/articles/";

  constructor(private httpClient: HttpClient) { }

  
  getAllproduits(): Observable<any>{
    return this.httpClient.get(this.apiURL )

  }
  postarticle(art:Produit){
    return this.httpClient.post(this.apiURL,art)
  }
  deletearticle(id:any){
    return this.httpClient.delete(this.apiURL + "/" + id)
    }
    putarticle(id:any,art:Produit){
      return this.httpClient.put(this.apiURL + "/" + id,art)
      }
      getarticleByID(id:any){
        return this.httpClient.get(this.apiURL + "/"  +id)
        }
      
}
