import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagemProfissionalPage } from './mensagem-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: MensagemProfissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagemProfissionalPage]
})
export class MensagemProfissionalPageModule {}
