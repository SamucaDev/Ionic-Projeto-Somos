import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmAprovUsuPage } from './adm-aprov-usu.page';

const routes: Routes = [
  {
    path: '',
    component: AdmAprovUsuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmAprovUsuPage]
})
export class AdmAprovUsuPageModule {}
