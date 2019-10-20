import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { ServidorService } from '../../service/servidor-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-post-verificacao',
  templateUrl: './post-verificacao.page.html',
  styleUrls: ['./post-verificacao.page.scss'],
})
export class PostVerificacaoPage implements OnInit {

  post: any;

  postItem: Array<{
    codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any, vereditoPost: any, sobrenome:any,
    statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any
  }>;

  postItemTodos: Array<{
    codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any, vereditoPost: any,
    statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any
  }>;

  detalheAprovar: NavigationExtras;
  detalheReprovar: NavigationExtras;
  verificarpostagem: any;

  constructor(
    public Router: Router,
    public camera: Camera,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public loading: LoadingController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) { this.listPost();
  }

  ngOnInit() { }

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

  /* Recarregar página */

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listPost();

    setTimeout(() => {
      console.log('Dados recarregados');
      event.target.complete();
    }, 2000);
  }


  /* Listar Post */

   listPost() {
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
              vereditoPost: listPost[i]['vereditoPost']
            });
          }

          this.postItemTodos = this.postItem;


        }
      });
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'VerificarPost.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }

  aprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'AprovarPost.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }

  async AprovarPostagem(produto) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });


    this.aprovar(produto).subscribe(data => {

      this.servidor.alertas('Postagem aprovada', 'Sua postagem foi aprovada', 'OK');
      console.log('Aprovado');
    });
    this.servidor.presentToast('Você aprovou está postagem!');
    await load.present();


    this.Router.navigateByUrl('confirmar-aprovacao');
    this.listPost();
    load.dismiss();


  }

  Reprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'ReprovarPost.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }

   async ReprovarPostagem(produto) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });
    this.Reprovar(produto).subscribe(data => {

      this.servidor.alertas('Postagem reprovar', 'Sua postagem foi aprovada', 'OK');
      console.log('Reprovar');

    });
    this.servidor.presentToast('Você reprovou está postagem');
    await load.present();

    this.Router.navigateByUrl('confirmar-reprovacao');
    this.listPost();
    load.dismiss();


  }

}
