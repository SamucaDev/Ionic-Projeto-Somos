import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.page.html',
  styleUrls: ['./perfil-administrador.page.scss'],
})
export class PerfilAdministradorPage implements OnInit {

  nomeUsuario: any;
  sobrenomeUsuario: any;
  nascimento: string;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public loading: LoadingController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {
    this.nascimento = localStorage.getItem('nascimento');
    this.nomeUsuario = this.dadosUsuario.getNomeUsuario();
    this.sobrenomeUsuario = localStorage.getItem('SobrenomeUsuario');
    this.email = this.dadosUsuario.getEmailUsuario();
  }
  email = this.dadosUsuario.emailUsuario;

  ngOnInit() {
  }


  Sair() {

    localStorage.clear();
    location.reload();
    this.navCtrl.navigateRoot('login');
    localStorage.setItem('deslogado', 'sim');
  }

  async presentAlert() {
    this.postData(this.email).subscribe(data => {
      console.log('Usuário Deslogado!');
    });
    const alert = await this.alert.create({
      header: 'Deseja sair?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.Sair();
        }
      },
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {
          this.postData1(this.email).subscribe(data => {
            console.log('Usuário Deslogado!');
          });

        }
      }]
    });

    await alert.present();
  }
  teste() {
    console.log(this.nomeUsuario);
    console.log(this.sobrenomeUsuario);
    console.log(this.email);
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post(this.servidor.Urlget() + 'usuarioDeslogar.php', valor, {
        headers: headers,
        method: 'POST'
      })
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );
  }

  postData1(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post(this.servidor.Urlget() + 'usuarioLogado.php', valor, {
        headers: headers,
        method: 'POST'
      })
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );
  }

  RotaAnalise() {
    this.Router.navigateByUrl('analise-humor');
  }

  
  RotaAdmAprov() {
    this.Router.navigateByUrl('/adm-aprov-usu');
  }

  RotaDenuPost() {
    this.Router.navigateByUrl('/analise-denuncia');
  }

  RotaPerfilAdm() {
    this.Router.navigateByUrl('/perfil-administrador');
  }

}
