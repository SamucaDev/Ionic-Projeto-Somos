import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalaDeEsperaPage } from './sala-de-espera.page';

const routes: Routes = [
  {
    path: '',
    component: SalaDeEsperaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalaDeEsperaPage]
})
export class SalaDeEsperaPageModule {}
