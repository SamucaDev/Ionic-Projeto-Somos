import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosUsuarioService } from '../../service/dados-usuario.service';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from 'src/app/service/servidor-service.service';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.page.html',
  styleUrls: ['./rota.page.scss'],
})
export class RotaPage implements OnInit {


  constructor(
    public Router: Router,
    public servidor: ServidorService,
    public dadosUsuario: DadosUsuarioService,
    public loading: LoadingController
  ) {
   
    if (this.dadosUsuario.tipoUsuario === '1') {
      this.Router.navigateByUrl('/home');
    
    }
    if (this.dadosUsuario.tipoUsuario === '2') {
      this.Router.navigateByUrl('/home-profissional');
      
    }
    if (this.dadosUsuario.tipoUsuario === '3') {
      this.Router.navigateByUrl('/home-moderador');
      
    }

    if (this.dadosUsuario.tipoUsuario === '4') {
      this.Router.navigateByUrl('/adm-aprov-usu');
      
    }
    if (this.dadosUsuario.tipoUsuario === '5') {
      this.Router.navigateByUrl('/cadastro-profissional');
    
    }
    if (this.dadosUsuario.tipoUsuario === '6') {
      this.Router.navigateByUrl('/sala-de-espera');
    }

  }

  ngOnInit() {
  }

  async Rota() {
    const load = await this.loading.create({
      message: 'Aguarde...'
    });
    await load.present();

    if (this.dadosUsuario.tipoUsuario === '1') {
      this.Router.navigateByUrl('/home');
      load.dismiss();
    }
    if (this.dadosUsuario.tipoUsuario === '2') {
      this.Router.navigateByUrl('/home-profissional');
      load.dismiss();
    }
    if (this.dadosUsuario.tipoUsuario === '3') {
      this.Router.navigateByUrl('/home-moderador');
      load.dismiss();
    }

    if (this.dadosUsuario.tipoUsuario === '4') {
      this.Router.navigateByUrl('/adm-aprov-usu');
      load.dismiss();
    }
    if (this.dadosUsuario.tipoUsuario === '5') {
      this.Router.navigateByUrl('/cadastro-profissional');
      load.dismiss();
    }
  }

  Verificar() {
    if (this.dadosUsuario.tipoUsuario === '1') {
      this.Router.navigateByUrl('/home');
    }
    if (this.dadosUsuario.tipoUsuario === '2') {
      this.Router.navigateByUrl('/home-profissional');
    }
    if (this.dadosUsuario.tipoUsuario === '3') {
      this.Router.navigateByUrl('/home-moderador');

    }

    if (this.dadosUsuario.tipoUsuario === '4') {
      this.Router.navigateByUrl('/adm-aprov-usu');

    }
    if (this.dadosUsuario.tipoUsuario === '5') {
      this.Router.navigateByUrl('/cadastro-profissional');
    }
    if (this.dadosUsuario.tipoUsuario === '6') {
      this.Router.navigateByUrl('/sala-de-espera');
    }

  }


}
