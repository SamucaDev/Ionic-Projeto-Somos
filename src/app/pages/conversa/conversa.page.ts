import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController, LoadingController, IonContent} from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import * as $ from 'jquery';
import { post } from 'selenium-webdriver/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';



@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.page.html',
  styleUrls: ['./conversa.page.scss'],
})
export class ConversaPage implements OnInit {

  @ViewChild(IonContent) contentArea: IonContent;

  conversa: any;
  // tslint:disable-next-line: max-line-length
  conversaItem: Array<{
    codigoConversa: any, codigoRemetente: any, codigoDestinatario: any, nomeRemetente: any, nomeDestinatario: any,
    sobrenomeRemetente: any, sobrenomeDestinatario: any, conteudoConversa: any, dataConversa: any
  }>;
  // tslint:disable-next-line: max-line-length
  conversaItemTodos: Array<{
    codigoConversa: any, codigoRemetente: any, codigoDestinatario: any, nomeRemetente: any, nomeDestinatario: any,
    sobrenomeRemetente: any, sobrenomeDestinatario: any, conteudoConversa: any, dataConversa: any
  }>;

  codUsuario: any;
  valor: any;
  cargoUsuario: any;
  nomeUsuario: any;
  sobrenomeUsuario: any;
  contador: any;
  contador2: any;
  codigo: any;
  mensagemEnviada: any;
  DeUsuario: any;
  Place: any;
  ParaUsuario: any;
  mensagem: any;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    private toastCtrl: ToastController,
    public FormBuilder: FormBuilder,
    public loading: LoadingController,
    public http: Http,
    private socket: Socket,
    public dadosUsuario: DadosUsuarioService) {

    // Métodos //
    this.atualizarChat();
    this.scroll();
    this.preencher();

    this.activatedRoute.queryParams.subscribe(parametros => {
      this.mensagemEnviada = parametros[' mensagemEnviada '];
      this.DeUsuario = parametros[' DeUsuario '];
      this.ParaUsuario = parametros[' ParaUsuario '];


      this.mensagem = this.FormBuilder.group({
        mensagemEnviada: ['', Validators.required],
        DeUsuario: [this.dadosUsuario.codUsuario, Validators.required],
        ParaUsuario: [this.codUsuario, Validators.required]
      });
    });
    this.Place = 'Digite uma mensagem...';
  }


  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'listConversa.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }


  listConversa() {

    this.conversaItem = [];
    this.http.get(this.servidor.Urlget() + 'listConversa.php?codigoUsuario1=' + this.dadosUsuario.codUsuario +
      '&codigoUsuario2=' + this.codUsuario).pipe(map(res => res.json())).subscribe(
        listDiarios => {

          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < listDiarios.length; i++) {
            this.contador = listDiarios.length;
            console.log('QtdContador:', this.contador);
            {
              this.conversaItem.push({
                codigoConversa: listDiarios[i]['codigoConversa'],
                codigoRemetente: listDiarios[i]['codigoRemetente'],
                codigoDestinatario: listDiarios[i]['codigoDestinatario'],
                nomeRemetente: listDiarios[i]['nomeRemetente'],
                nomeDestinatario: listDiarios[i]['nomeDestinatario'],
                sobrenomeRemetente: listDiarios[i]['sobrenomeRemetente'],
                sobrenomeDestinatario: listDiarios[i]['sobrenomeDestinatario'],
                conteudoConversa: listDiarios[i]['conteudoConversa'],
                dataConversa: listDiarios[i]['dataConversa']
              });
            }

            this.conversaItemTodos = this.conversaItem;
          }
        }
      );
    console.log(this.contador);
  }

  atualizarChat() {
    setInterval(() => {
      this.contatorMensagem();
      this.verificar();
    }, 1000);
  }

  verificar() {
    console.log('Contador do list:', this.contador2);
    if (this.contador2 > this.contador) {
      this.listConversa();
      this.contentArea.scrollToBottom(1500);
    } else {
      console.log('Não tem novas mensagens');

    }
  }

  preencher() {
    this.activatedRoute.queryParams.subscribe(parametros => {
      this.codUsuario = parametros['codUsuario'];
      this.cargoUsuario = parametros['cargoUsuario'];
      this.nomeUsuario = parametros['nomeUsuario'];
      this.sobrenomeUsuario = parametros['sobrenomeUsuario'];

      console.log(this.codigo);
    });
  }

  // Cadastrar mensagem

  postData2(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post(this.servidor.Urlget() + 'cadastrarMensagem.php', valor, {
        headers: headers,
        method: 'POST'
      })
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );
  }

    inserirMensagem() {
    this.postData2(this.mensagem.value).subscribe(data => {
      console.log('Dados inseridos com sucesso');
    });
    this.listConversa();
    this.scroll();


    this.mensagemEnviada = null;

    if (this.mensagemEnviada === '') {
      this.Place = 'Digite uma mensagem...';
    }

  }

  ngOnInit() {
    this.listConversa();
    this.contatorMensagem();

  }

  contatorMensagem() {
    this.http.get(this.servidor.Urlget() + 'qtdListConversa.php?codigoUsuario1=' + this.dadosUsuario.codUsuario +
      '&codigoUsuario2=' + this.codUsuario)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.contador2 = getQuantidade.dados;
      });
  }

  scroll() {
    setTimeout(() => {
      this.contentArea.scrollToBottom(1500);
    }, 800);
  }



}

