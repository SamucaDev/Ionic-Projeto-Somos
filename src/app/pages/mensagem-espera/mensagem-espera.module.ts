import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensagemEsperaPage } from './mensagem-espera.page';

const routes: Routes = [
  {
    path: '',
    component: MensagemEsperaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MensagemEsperaPage]
})
export class MensagemEsperaPageModule {}
