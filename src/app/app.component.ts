import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DadosUsuarioService } from './service/dados-usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public Router: Router,
    public dadosUsuario: DadosUsuarioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.validarUsuario();

    });
  }
  RotaChat() {
    this.Router.navigateByUrl('chat');
  }

  RotaDiario() {
    this.Router.navigateByUrl('diario');
  }

  RotaPost() {
    this.Router.navigateByUrl('post');
  }

  validarUsuario() {
    if (localStorage.getItem('user_logado') !== null) {
      console.log('Usuário logado');

      this.dadosUsuario.setCodUsuario(localStorage.getItem('CodUsuario'));
      this.dadosUsuario.setNomeUsuario(localStorage.getItem('NomeUsuario'));
      this.dadosUsuario.setEmailUsuario(localStorage.getItem('EmailUsuario'));
      this.dadosUsuario.setFotoUsuario(localStorage.getItem('FotoUsuario'));
      this.dadosUsuario.setTipoUsuario(localStorage.getItem('TipoUsuario'));
      this.dadosUsuario.setStatusUsuario(localStorage.getItem('StatusUsuario'));

    } else {
      this.navCtrl.navigateBack('login');
      console.log('Usuario Não conectado');

    }
  }

}
