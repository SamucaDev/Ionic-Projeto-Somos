import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mensagem-profissional',
  templateUrl: './mensagem-profissional.page.html',
  styleUrls: ['./mensagem-profissional.page.scss'],
})
export class MensagemProfissionalPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  rotaLogin() {
    this.navCtrl.navigateForward('login');
  }

}
