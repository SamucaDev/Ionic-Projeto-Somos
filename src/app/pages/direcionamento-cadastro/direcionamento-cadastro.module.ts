import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirecionamentoCadastroPage } from './direcionamento-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: DirecionamentoCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirecionamentoCadastroPage]
})
export class DirecionamentoCadastroPageModule {}
