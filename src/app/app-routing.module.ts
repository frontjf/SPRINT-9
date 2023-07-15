import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrimitivaComponent } from './primitiva/primitiva.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'primitiva', component: PrimitivaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
