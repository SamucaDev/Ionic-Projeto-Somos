import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response  } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  post: any;
  postItem: Array<{codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any,
                   statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any}>;

postItemTodos: Array<{codigoPost: any, dataPost: any, conteudoPost: any, fotoPost: any,
                      statusPost: any, codModAprov: any, codigoUsuPostou: any, nomeUsu: any, tipoUsu: any, fotoUsu: any}>;
  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {
      this.listPost();
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
      this.Router.navigateByUrl('cadastrar-post');
    }

    doRefresh(event) {
      console.log('Begin async operation');
      this.listPost();

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

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
                codModAprov: listPost[i]['codModAprov'],
                codigoUsuPostou: listPost[i]['codigoUsuPostou'],
                nomeUsu: listPost[i]['nomeUsu'],
                tipoUsu: listPost[i]['tipoUsu'],
                fotoUsu: listPost[i]['fotoUsu']
              });
            }

            this.postItemTodos = this.postItem;
          }
        });
    }

    postData(valor) {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      return this.http.post(this.servidor.Urlget() + 'listPost.php', valor, {
        headers: headers,
        method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json();
        }
      ));

    }
}
