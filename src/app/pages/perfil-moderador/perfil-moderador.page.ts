import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController  } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';


@Component({
  selector: 'app-perfil-moderador',
  templateUrl: './perfil-moderador.page.html',
  styleUrls: ['./perfil-moderador.page.scss'],
})
export class PerfilModeradorPage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) { }

  ngOnInit() {
  }

  Sair() {
    localStorage.clear();
    location.reload();
    this.navCtrl.navigateRoot('login');
    localStorage.setItem('deslogado', 'sim');
  }

  /* Rotas de navegação */
  RotaModeradorInicio() {
    this.Router.navigateByUrl('home-moderador');
  }
  RotaPostModerador() {
    this.Router.navigateByUrl('post-moderador');
  }
  RotaPostVerificacao() {
    this.Router.navigateByUrl('post-verificacao');
  }
  RotaChatModerador() {
    this.Router.navigateByUrl('chat-moderador');
  }
  RotaPerfilModerador() {
    this.Router.navigateByUrl('perfil-moderador');
  }
  RotaCadastrarDiario() {
    this.Router.navigateByUrl('cadastrar-post');
  }
}
