import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-profissionais-online',
  templateUrl: './profissionais-online.page.html',
  styleUrls: ['./profissionais-online.page.scss'],
})
export class ProfissionaisOnlinePage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {
      this.listConversa();
    }

  detalhe: NavigationExtras;
  online: any;

  onlineItem: Array<{  codUsuario: any, nomeUsuario: any, sobrenomeUsuario: any, cargoUsuario: any}>;
  onlineItemTodos: Array<{codUsuario: any, nomeUsuario: any, sobrenomeUsuario: any, cargoUsuario: any}>;


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

  RotaCadastrarDiario() {
    this.Router.navigateByUrl('cadastrar-post');
  }

  rotaChar() {
    this.Router.navigateByUrl('profissionais-online');
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'profOnline.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }

  listConversa() {
    this.onlineItem = [];
    this.postData(this.dadosUsuario.codUsuario).subscribe(
      listDiarios => {

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < listDiarios.length; i++) {

          {
            this.onlineItem.push({
              codUsuario: listDiarios[i]['codUsuario'],
              nomeUsuario: listDiarios[i]['nomeUsuario'],
              sobrenomeUsuario: listDiarios[i]['sobrenomeUsuario'],
              cargoUsuario: listDiarios[i]['cargoUsuario']
            });
          }

          this.onlineItemTodos = this.onlineItem;
        }
      }

    );



  }

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listConversa();

    setTimeout(() => {
      console.log('Dados Recarregados');
      event.target.complete();
    }, 2000);
  }

  enviarCodigo(online) {
    this.detalhe = {
      queryParams: {
        'codUsuario': online.codUsuario,
        'cargoUsuario': online.cargoUsuario,
        'nomeUsuario': online.nomeUsuario,
        'sobrenomeUsuario': online.sobrenomeUsuario
      }
    };
    this.Router.navigate(['conversa'], this.detalhe);
  }
}
