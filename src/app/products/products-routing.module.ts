import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatarticlesComponent } from './creatarticles/creatarticles.component';
import { EditarticlesComponent } from './editarticles/editarticles.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';

const routes: Routes = [
  {path:"articles/listart",component:ListarticlesComponent},
  {path:"articles/creatart",component:CreatarticlesComponent},
  {path:"articles/listart/:id",component:EditarticlesComponent},
  {path:"articles/artriclecad/",component:ArticlecardComponent}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
