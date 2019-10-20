import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfissionaisOnlinePage } from './profissionais-online.page';

const routes: Routes = [
  {
    path: '',
    component: ProfissionaisOnlinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfissionaisOnlinePage]
})
export class ProfissionaisOnlinePageModule {}
