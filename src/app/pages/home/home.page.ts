import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  humortipo1 = 1;
  humortipo2 = 2;
  humortipo3 = 3;
  humortipo4 = 4;
  humortipo5 = 5;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) { }

  ngOnInit() {
  }

  RotaChat() {
    this.Router.navigateByUrl('chat-usuario');
  }

  RotaDiario() {
    this.Router.navigateByUrl('diario');
  }

  RotaPost() {
    this.Router.navigateByUrl('post');
  }

  RotaHome() {
    this.Router.navigateByUrl('home');
  }

  RotaPerfil() {
    this.Router.navigateByUrl('perfil-usuario');
  }

  humorExcelente() {
    this.http
      .get(this.servidor.Urlget() + "declararHumor.php?emoji=" + this.humortipo1 +
        "&codigoUsuario=" + this.dadosUsuario.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
      });
    console.log('humor adicionado com sucesso');
    this.servidor.alertas(
    'Que bom que está contente!',
    'Este dado sera encaminhado para seu grafico de humor mensal, para que você possa acompanhar seu crecismento junto conosco!'
    , 'OK');
  }

  humorFeliz() {
    this.http
      .get(this.servidor.Urlget() + "declararHumor.php?emoji=" + this.humortipo2 +
        "&codigoUsuario=" + this.dadosUsuario.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
      });
    console.log('humor adicionado com sucesso');
    this.servidor.alertas(
      'Que bom que está feliz!',
      'Este dado sera encaminhado para seu grafico de humor mensal, para que você possa acompanhar seu crecismento junto conosco!'
      , 'OK');
  }

  humorTedio() {
    this.http
      .get(this.servidor.Urlget() + "declararHumor.php?emoji=" + this.humortipo3 +
        "&codigoUsuario=" + this.dadosUsuario.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
      });
    console.log('humor adicionado com sucesso');
    this.servidor.alertas(
      'Estamos contigo!',
      'Este dado sera encaminhado para seu grafico de humor mensal, para que você possa acompanhar seu crecismento junto conosco!'
      , 'OK');
  }

  humorTriste() {
    this.http
      .get(this.servidor.Urlget() + "declararHumor.php?emoji=" + this.humortipo4 +
        "&codigoUsuario=" + this.dadosUsuario.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
      });
    console.log('humor adicionado com sucesso');
    this.servidor.alertas(
      'Você não esta sozinho!',
      'Este dado sera encaminhado para seu grafico de humor mensal, para que você possa acompanhar seu crecismento junto conosco!'
      , 'OK');
  }

  humorNervoso() {
    this.http
      .get(this.servidor.Urlget() + "declararHumor.php?emoji=" + this.humortipo5 +
        "&codigoUsuario=" + this.dadosUsuario.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
      });
    console.log('humor adicionado com sucesso');
    this.servidor.alertas(
      'Calma, respira!',
      'Este dado sera encaminhado para seu grafico de humor mensal, para que você possa acompanhar seu crecismento junto conosco!'
      , 'OK');
  }





}
