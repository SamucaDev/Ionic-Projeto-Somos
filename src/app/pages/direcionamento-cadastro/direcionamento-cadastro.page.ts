import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { load } from '@angular/core/src/render3';
import { DadosUsuarioService } from '../../service/dados-usuario.service';

@Component({
  selector: 'app-direcionamento-cadastro',
  templateUrl: './direcionamento-cadastro.page.html',
  styleUrls: ['./direcionamento-cadastro.page.scss'],
})
export class DirecionamentoCadastroPage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public loading: LoadingController,
    public dadosUsuario: DadosUsuarioService) { }

  ngOnInit() {
  }

  rotaLogin() {
this.Router.navigateByUrl('login');
  }

  RotaCadastro() {
    this.Router.navigateByUrl('cadastro');
  }

  RotaCadastroVoluntario() {
    this.Router.navigateByUrl('cadastro-voluntario');
  }
}
