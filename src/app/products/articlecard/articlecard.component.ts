import { Component } from '@angular/core';
import {  ArticlesService } from '../articles.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent {
  tabproduit: Produit[]=[] ;
  constructor(private artserv:ArticlesService){}
  ngOnInit(): void {
    this.artserv.getAllproduits().subscribe((data: Produit[])=>{
    this.tabproduit = data;
    })
  }

}
