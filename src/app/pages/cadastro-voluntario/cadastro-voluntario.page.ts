import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-cadastro-voluntario',
  templateUrl: './cadastro-voluntario.page.html',
  styleUrls: ['./cadastro-voluntario.page.scss'],
})
export class CadastroVoluntarioPage implements OnInit {

  detalhe: NavigationExtras;
  contatos: any;
  email: any;
  senha: any;
  tipoUsuario: any;


  cadastro: any;
  nome: any;
  cpf: any;
  rg: any;
  endereco: any;
  bairro: any;
  numero: any;
  complemento: any;
  cep: any;
  uf: any;
  pais: any;
  cidade: any;
  datanasc: any;
  telefone: any;
  celular: any;
  sobrenome: any;
  emailUsuario: any;

  constructor(
    public Router: Router,
    public FormBuilder: FormBuilder,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public keyboard: Keyboard,
    public http: Http,
    public loading: LoadingController
  ) {

    this.servidor.alertas('LEMBRETE!',
      'Por abordarmos um assunto muito delicado, solicitamos estes dados para sua segurança e a segurança dos demais usuários!'
      , 'Estou Ciente');

    this.activatedRoute.queryParams.subscribe(parametros => {
      this.email = parametros[' email '];
      this.senha = parametros[' senha '];
      this.nome = parametros[' nome '];
      this.cpf = parametros[' cpf '];
      this.sobrenome = parametros[' sobrenome '];
      this.rg = parametros[' rg '];
      this.bairro = parametros[' bairro '];
      this.numero = parametros[' numero '];
      this.complemento = parametros[' complemento '];
      this.cep = parametros[' cep '];
      this.uf = parametros[' uf '];
      this.pais = parametros[' pais '];
      this.cidade = parametros[' cidade '];
      this.datanasc = parametros[' datanasc '];
      this.telefone = parametros[' telefone '];
      this.celular = parametros[' celular '];
      this.tipoUsuario = parametros[' tipoUsuario'];

      this.cadastro = this.FormBuilder.group({
        email: ['', Validators.required],
        senha: ['', Validators.required],
        nome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        cpf: ['', Validators.required],
        rg: ['', Validators.required],
        endereco: ['', Validators.required],
        bairro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['', Validators.required],
        cep: ['', Validators.required],
        uf: ['', Validators.required],
        pais: ['', Validators.required],
        cidade: ['', Validators.required],
        datanasc: ['', Validators.required],
        telefone: ['', Validators.required],
        celular: ['', Validators.required],
        tipoUsuario: ['5', Validators.required]
      });
    });
  }

  ngOnInit() {
  }

  async cadastrarUsuario(usuario) {
    const load = await this.loading.create({
      message: 'Estamos criando sua conta!'
    });
    await load.present();

    if (this.nome === undefined || this.sobrenome === undefined || this.email === undefined || this.senha === undefined ||
      this.cpf === undefined || this.rg === undefined || this.datanasc === undefined || this.endereco === undefined ||
      this.bairro === undefined || this.numero === undefined || this.complemento === undefined || this.cep === undefined ||
      this.uf === undefined || this.pais === undefined || this.cidade === undefined || this.celular === undefined) {
      this.servidor.alertas('Atenção', 'Preencha todos os campos!', 'OK');
      load.dismiss();
    } else {
      this.servidor.presentToast('Solicitação enviado com sucesso!');

      console.log(this.cadastro.value);

      this.postData(this.cadastro.value).subscribe(data => {
        console.log('Dados inseridos com sucesso');

      });

      this.detalhe = {
        queryParams: {
          'email': this.email
        }
      };
      setTimeout(() => { this.Router.navigate(['mensagem-profissional']); load.dismiss(); }, 4000); }
  }

  rotaLogin() {
    this.Router.navigateByUrl('login');
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post(this.servidor.Urlget() + 'cadastrarVoluntario.php', valor, {
        headers: headers,
        method: 'POST'
      })
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );
  }

  getRetornar() {
    this.servidor.getPegar()
      .subscribe(
        data => this.contatos = data,
        err => console.log(err)
      );
  }

  pegarEmail() {
    this.http
      .get(
        this.servidor.Urlget() +
        "etapaCadastro.php?email=" + this.email)
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.emailUsuario = getQuantidade.dados;
        console.log(this.emailUsuario);
      });

  }




}
