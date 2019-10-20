import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-home-profissional',
  templateUrl: './home-profissional.page.html',
  styleUrls: ['./home-profissional.page.scss'],
})
export class HomeProfissionalPage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) { }

  ngOnInit() {
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
