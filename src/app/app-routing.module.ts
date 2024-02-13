import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './products/listarticles/listarticles.component';
import { CreatarticlesComponent } from './products/creatarticles/creatarticles.component';
import { EditarticlesComponent } from './products/editarticles/editarticles.component';
import { CreatcategoriesComponent } from './categories/creatcategories/creatcategories.component';
import { EditcategoriesComponent } from './categories/editcategories/editcategories.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { ScategoriesComponent } from './categories/scategories/scategories.component';

const routes: Routes = [
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
