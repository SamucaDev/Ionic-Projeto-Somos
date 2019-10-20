import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController  } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-perfi-profissional',
  templateUrl: './perfi-profissional.page.html',
  styleUrls: ['./perfi-profissional.page.scss'],
})
export class PerfiProfissionalPage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) { }

  ngOnInit() { }

  Sair() {
    localStorage.clear();
    location.reload();
    this.navCtrl.navigateRoot('login');
    localStorage.setItem('deslogado', 'sim');
  }

  RotaPostProfissional() {
    this.Router.navigateByUrl('post-profissional');
  }

  RotaProfissionalInicio() {
    this.Router.navigateByUrl('home-profissional');
  }

  RotaChatProfissional() {
    this.Router.navigateByUrl('chat-profissional');
  }

  RotaPerfilProfissional() {
    this.Router.navigateByUrl('perfil-profissional');
  }
}
