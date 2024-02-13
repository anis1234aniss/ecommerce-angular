import { Component } from '@angular/core';
import { Produit } from '../produit';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-creatarticles',
  templateUrl: './creatarticles.component.html',
  styleUrls: ['./creatarticles.component.css']
})
export class CreatarticlesComponent {
  produit:Produit=new Produit()
  constructor(private prodserv:ArticlesService){}
  sauvegarder(){
    
    this.prodserv.postarticle(this.produit).subscribe((data)=>
    console.log("insertion effectué avec sucéés")
    )
  }
  

}
