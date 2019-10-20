import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroVoluntarioPage } from './cadastro-voluntario.page';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: CadastroVoluntarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroVoluntarioPage]
})
export class CadastroVoluntarioPageModule {}
