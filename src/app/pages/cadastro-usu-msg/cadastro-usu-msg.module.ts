import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroUsuMsgPage } from './cadastro-usu-msg.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroUsuMsgPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroUsuMsgPage]
})
export class CadastroUsuMsgPageModule {}
