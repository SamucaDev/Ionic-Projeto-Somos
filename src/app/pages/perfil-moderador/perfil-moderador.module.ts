import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilModeradorPage } from './perfil-moderador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilModeradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilModeradorPage]
})
export class PerfilModeradorPageModule {}
