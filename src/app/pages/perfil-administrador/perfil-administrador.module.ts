import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilAdministradorPage } from './perfil-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAdministradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilAdministradorPage]
})
export class PerfilAdministradorPageModule {}
