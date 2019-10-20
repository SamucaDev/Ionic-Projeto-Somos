import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-chat-usuario',
  templateUrl: './chat-usuario.page.html',
  styleUrls: ['./chat-usuario.page.scss'],
})
export class ChatUsuarioPage implements OnInit {


  detalhe: NavigationExtras;
  conversaItem: Array<{
    codigoConversa: any, codigoRemetente: any, codigoDestinatario: any, nomeRemetente: any,
    sobrenomeRemetente: any, conteudoConversa: any, dataConversa: any}>;

  conversaItemTodos: Array<{
    codigoConversa: any, codigoRemetente: any, codigoDestinatario: any, nomeRemetente: any,
    sobrenomeRemetente: any, conteudoConversa: any, dataConversa: any
  }>;


  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) {
      this.listConversa();
  }

  ngOnInit() {
  }

  listConversa() {

    this.conversaItem = [];
    this.http.get(this.servidor.Urlget() + 'listContatos.php?codigoUsuario1=' + this.dadosUsuario.codUsuario)
    .pipe(map(res => res.json())).subscribe(
        listDiarios => {

          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < listDiarios.length; i++) {

            {
              this.conversaItem.push({
                codigoConversa: listDiarios[i]['codigoConversa'],
                codigoRemetente: listDiarios[i]['codigoRemetente'],
                codigoDestinatario: listDiarios[i]['codigoDestinatario'],
                nomeRemetente: listDiarios[i]['nomeRemetente'],
                sobrenomeRemetente: listDiarios[i]['sobrenomeRemetente'],
                conteudoConversa: listDiarios[i]['conteudoConversa'],
                dataConversa: listDiarios[i]['dataConversa']
              });
            }

            this.conversaItemTodos = this.conversaItem;
          }
        }
      );

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

  enviarCodigo(conversa) {
    this.detalhe = {
      queryParams: {
        'codUsuario': conversa.codigoRemetente,
        'nomeUsuario': conversa.nomeRemetente,
        'sobrenomeUsuario': conversa.sobrenomeRemetente
      }
    };
    this.Router.navigate(['conversa'], this.detalhe);
  }

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listConversa();

    setTimeout(() => {
      console.log('Dados Recarregados');
      event.target.complete();
    }, 2000);
  }

}
