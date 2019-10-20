import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnaliseDenunciaPage } from './analise-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: AnaliseDenunciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnaliseDenunciaPage]
})
export class AnaliseDenunciaPageModule {}
