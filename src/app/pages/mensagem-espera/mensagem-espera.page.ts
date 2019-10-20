import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mensagem-espera',
  templateUrl: './mensagem-espera.page.html',
  styleUrls: ['./mensagem-espera.page.scss'],
})
export class MensagemEsperaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  rotaLogin() {
    this.navCtrl.navigateForward('login');
  }


}
