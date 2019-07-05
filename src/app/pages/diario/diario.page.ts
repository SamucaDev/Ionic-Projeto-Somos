import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';


@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {


  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {

    }

  ngOnInit() {
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

    RotaCadastrarDiario() {
      this.Router.navigateByUrl('cadastrar-diario');
    }
}
