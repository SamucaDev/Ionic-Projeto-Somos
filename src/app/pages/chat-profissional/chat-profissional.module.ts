import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatProfissionalPage } from './chat-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: ChatProfissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatProfissionalPage]
})
export class ChatProfissionalPageModule {}
