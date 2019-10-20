import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPostUsuPage } from './cadastro-post-usu.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPostUsuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPostUsuPage]
})
export class CadastroPostUsuPageModule {}
