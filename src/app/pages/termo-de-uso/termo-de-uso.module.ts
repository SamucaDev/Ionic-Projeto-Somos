import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermoDeUsoPage } from './termo-de-uso.page';

const routes: Routes = [
  {
    path: '',
    component: TermoDeUsoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermoDeUsoPage]
})
export class TermoDeUsoPageModule {}
