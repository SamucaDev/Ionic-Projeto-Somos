import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sala-de-espera',
  templateUrl: './sala-de-espera.page.html',
  styleUrls: ['./sala-de-espera.page.scss'],
})
export class SalaDeEsperaPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  rotaLogin() {
    this.navCtrl.navigateForward('login');
  }

}
