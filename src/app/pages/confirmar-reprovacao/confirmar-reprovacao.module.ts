import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmarReprovacaoPage } from './confirmar-reprovacao.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarReprovacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmarReprovacaoPage]
})
export class ConfirmarReprovacaoPageModule {}
