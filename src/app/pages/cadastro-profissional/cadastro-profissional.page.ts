import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.page.html',
  styleUrls: ['./cadastro-profissional.page.scss'],
})
export class CadastroProfissionalPage implements OnInit {
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
  tipoUsuario: any;
  email: any;
  nome: any;
  sobrenome: any;



  usuarioItem: Array<{ codigoUsuario: any, nomeUsuario: any, sobrenomeUsuario: any }>;
  usuarioItemTodos: Array<{ codigoUsuario: any, nomeUsuario: any, sobrenomeUsuario: any }>;

  crpProfi: any;
  crmProfi: any;
  cargoProfi: any;
  instituicaoProfi: any;
  cnpjInstituicao: any;
  telefoneInstituicao: any;
  CodigoUsuario: any;
  cadastro: any;
  codigoUsu: any;
  codUsuAlo: any;




  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public FormBuilder: FormBuilder,
    public loading: LoadingController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) {

    this.activatedRoute.queryParams.subscribe(parametros => {
      this.crpProfi = parametros[' crpProfi '];
      this.crmProfi = parametros[' crmProfi '];
      this.cargoProfi = parametros[' cargoProfi '];
      this.instituicaoProfi = parametros[' instituicaoProfi'];
      this.cnpjInstituicao = parametros[' cnpjInstituicao '];
      this.telefoneInstituicao = parametros[' telefoneInstituicao '];
      this.CodigoUsuario = parametros[' CodigoUsuario '];

      this.cadastro = this.FormBuilder.group({
        crpProfi: ['', Validators.required],
        crmProfi: ['', Validators.required],
        cargoProfi: ['', Validators.required],
        instituicaoProfi: ['', Validators.required],
        cnpjInstituicao: ['', Validators.required],
        telefoneInstituicao: ['', Validators.required],
        CodigoUsuario: this.dadosUsuario.getCodUsuario()
      });
    });
    this.preencher();



  }

  ngOnInit() {
  }


  preencher() {
    this.activatedRoute.queryParams.subscribe(parametros => {
      this.email = parametros['email'];
      console.log(this.email);

    });

  }


  async cadastrarUsuario() {

    const load = await this.loading.create({
      message: 'Estamos criando sua conta!'
    });
    await load.present();

    // tslint:disable-next-line: max-line-length
    if (this.cargoProfi === undefined || this.instituicaoProfi === undefined ||
      this.cnpjInstituicao === undefined || this.telefoneInstituicao === undefined) {

    this.servidor.alertas('Atenção', 'Preencha todos os campos!', 'OK');
    load.dismiss();

    } else {

      console.log(this.cadastro.value);

      this.postData(this.cadastro.value).subscribe(data => {
        console.log('Dados inseridos com sucesso');
      });
      load.dismiss();
      this.Router.navigateByUrl('/mensagem-espera');
      this.servidor.presentToast('Solicitação enviado com sucesso!');
    }
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http
      .post(this.servidor.Urlget() + 'cadastroProfissional.php', valor, {
        headers: headers,
        method: 'POST'
      })
      .pipe(
        map((res: Response) => {
          return res.json();
        })
      );

  }



}
