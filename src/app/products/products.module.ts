import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatarticlesComponent } from './creatarticles/creatarticles.component';
import { EditarticlesComponent } from './editarticles/editarticles.component';
import { ListarticltableComponent } from './listarticltable/listarticltable.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ArticlecardComponent } from './articlecard/articlecard.component';


@NgModule({
  declarations: [
    ListarticlesComponent,
    CreatarticlesComponent,
    EditarticlesComponent,
    ListarticltableComponent,
    ArticlecardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class ProductsModule { }
