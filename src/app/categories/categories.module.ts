import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CreatcategoriesComponent } from './creatcategories/creatcategories.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { ListecategoriesComponent } from './listecategories/listecategories.component';
import { ScategoriesComponent } from './scategories/scategories.component';


@NgModule({
  declarations: [
    CreatcategoriesComponent,
    EditcategoriesComponent,
    ListecategoriesComponent,
    ScategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
