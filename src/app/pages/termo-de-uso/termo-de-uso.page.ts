import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-termo-de-uso',
  templateUrl: './termo-de-uso.page.html',
  styleUrls: ['./termo-de-uso.page.scss'],
})
export class TermoDeUsoPage implements OnInit {

  constructor(
    public navCtlr: NavController
  ) { }

  ngOnInit() {
  }

  rotaLogin() {
    this.navCtlr.navigateForward('/login');
  }

}
