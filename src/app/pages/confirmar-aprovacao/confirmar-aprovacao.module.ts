import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmarAprovacaoPage } from './confirmar-aprovacao.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarAprovacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmarAprovacaoPage]
})
export class ConfirmarAprovacaoPageModule {}
