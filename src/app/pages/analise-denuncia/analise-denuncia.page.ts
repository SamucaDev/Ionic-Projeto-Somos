import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { ServidorService } from 'src/app/service/servidor-service.service';

@Component({
  selector: 'app-analise-denuncia',
  templateUrl: './analise-denuncia.page.html',
  styleUrls: ['./analise-denuncia.page.scss'],
})
export class AnaliseDenunciaPage implements OnInit {

post: any;

  postItem: Array<{
    codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any, vereditoPost: any, sobrenome:any,
    statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any,
     codigoDenuncia: any, conteudoDenuncia: any
  }>;

  postItemTodos: Array<{
    codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any, vereditoPost: any,
    statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any,
     codigoDenuncia: any, conteudoDenuncia: any
  }>;
  verificarpostagem: any;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public loading: LoadingController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService,
    public servidor: ServidorService
  ) { this.listDados(); }

  ngOnInit() {
  }

    listDados() {
    this.postItem = [];
    this.postData(this.dadosUsuario.codUsuario).subscribe(
      listPost => {

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < listPost.length; i++) {

          {
            this.postItem.push({
              codigoPost: listPost[i]['codigoPost'],
              dataPost: listPost[i]['dataPost'],
              conteudoPost: listPost[i]['conteudoPost'],
              fotoPost: listPost[i]['fotoPost'],
              statusPost: listPost[i]['statusPost'],
              codModAprov: this.dadosUsuario.getCodUsuario(),
              codigoUsuPostou: listPost[i]['codigoUsuPostou'],
              nomeUsu: listPost[i]['nomeUsu'],
              tipoUsu: listPost[i]['tipoUsu'],
              fotoUsu: listPost[i]['fotoUsu'],
              sobrenome: listPost[i]['sobrenome'],
              vereditoPost: listPost[i]['vereditoPost'],
              codigoDenuncia: listPost[i]['codigoDenuncia'],
              conteudoDenuncia: listPost[i]['conteudoDenuncia'],

            });
          }

          this.postItemTodos = this.postItem;


        }
      });
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'listDenuncia.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listDados();

    setTimeout(() => {
      console.log('Dados Recarregados');
      event.target.complete();
    }, 2000);
  }

  aprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'excluirDenuncia.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }
  async  AprovarUsuario(dados) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });
    this.aprovar(dados).subscribe(data => {
      console.log('Aprovado');
    });
    this.servidor.presentToast('Você aprovou este usuário!');
    await load.present();

    this.listDados();
    load.dismiss();
  }




  Reprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'excluirPost.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }
  async ReprovarUsuario(dados) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });
    this.Reprovar(dados).subscribe(data => {
      console.log('Reprovar');

    });
    this.servidor.presentToast('Você reprovou este usuário');
    await load.present();
    this.listDados();
    load.dismiss();


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
