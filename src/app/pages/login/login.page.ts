import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { load } from '@angular/core/src/render3';
import { DadosUsuarioService } from '../../service/dados-usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPositions = 0;
  public wavesDifference = 90;

  contatos: any;
  email: any;
  senha: any;
  sobrenome: any;


  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public loading: LoadingController,
    public dadosUsuario: DadosUsuarioService) {

      if (localStorage.getItem('deslogado') === 'sim') {
        localStorage.setItem('deslogado', 'não');
        location.reload();
      }

      if (localStorage.getItem('user_logado') != null) {
        this.autenticar();
        console.log('Autenticação');
        this.navCtrl.navigateForward('home');
      }
  }

  ngOnInit() { }



  RotaCadastrar() {
    this.Router.navigateByUrl('direcionamento-cadastro');

  }

  getRetornar() {
    this.servidor.getPegar()
      .subscribe(
        data => this.contatos = data,
        err => console.log(err)
      );

  }

  async logar() {

    if (this.email === undefined || this.senha === undefined) {

      this.servidor.alertas('Atenção', 'Preencha todos os campos', 'OK');

    } else {
      const load = await this.loading.create({
        message: 'Verificando Login...'
      });
      await load.present();

      this.http.get(this.servidor.Urlget() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(map(res => res.json()))
        .subscribe(
           dados => {
            if (dados.msg.logado === 'sim') {
              this.sobrenome = dados.dados.sobrenome;
              console.log(this.sobrenome);
              this.dadosUsuario.setCodUsuario(dados.dados.codigo);
              this.dadosUsuario.setNomeUsuario(dados.dados.nome);
              this.dadosUsuario.setEmailUsuario(dados.dados.email);
              this.dadosUsuario.setFotoUsuario(dados.dados.foto);
              this.dadosUsuario.setTipoUsuario(dados.dados.tipo);
              this.dadosUsuario.setStatusUsuario(dados.dados.status);
              this.dadosUsuario.setSobrenomeUsuario(dados.dados.sobrenome);
              this.dadosUsuario.setInicioUsuario(dados.dados.datainicio);
              this.dadosUsuario.setNascimento(dados.dados.nascimento);

              localStorage.setItem('CodUsuario', dados.dados.codigo);
              localStorage.setItem('datainicio', dados.dados.codigo);
              localStorage.setItem('NomeUsuario', dados.dados.nome);
              localStorage.setItem('EmailUsuario', dados.dados.email);
              localStorage.setItem('FotoUsuario', dados.dados.foto);
              localStorage.setItem('TipoUsuario', dados.dados.tipo);
              localStorage.setItem('StatusUsuario', dados.dados.status);
              localStorage.setItem('SobrenomeUsuario', dados.dados.sobrenome);
              localStorage.setItem('nascimento', dados.dados.nascimento);

              this.postData(this.email).subscribe(data => {
                console.log('Usuário logado!');
          });


              load.dismiss();
              localStorage.setItem('user_logado', dados);

              if (this.dadosUsuario.tipoUsuario === '1') {
              this.Router.navigateByUrl('/home');
              }
              if (this.dadosUsuario.tipoUsuario === '2') {
                this.Router.navigateByUrl('/home-profissional');
              }
              if (this.dadosUsuario.tipoUsuario === '3') {
                this.Router.navigateByUrl('/home-moderador');
              }

              if (this.dadosUsuario.tipoUsuario === '4') {
                this.Router.navigateByUrl('/adm-aprov-usu');
              }
              if (this.dadosUsuario.tipoUsuario === '5') {
                this.Router.navigateByUrl('/cadastro-profissional');
              }
              if (this.dadosUsuario.tipoUsuario === '6') {
                this.Router.navigateByUrl('/sala-de-espera');
              }



            } else {
              load.dismiss();
              this.servidor.alertas('Atenção', 'Usuário inválido', 'OK');
            }
          }
        );
    }
  }

  autenticar() {
    this.dadosUsuario.setCodUsuario(localStorage.getItem('CodUsuario'));
    this.dadosUsuario.setNomeUsuario(localStorage.getItem('NomeUsuario'));
    this.dadosUsuario.setEmailUsuario(localStorage.getItem('EmailUsuario'));
    this.dadosUsuario.setFotoUsuario(localStorage.getItem('FotoUsuario'));
    this.dadosUsuario.setTipoUsuario(localStorage.getItem('TipoUsuario'));
    this.dadosUsuario.setStatusUsuario(localStorage.getItem('StatusUsuario'));
    this.dadosUsuario.setSobrenomeUsuario(localStorage.getItem('SobrenomeUsuario'));
    this.dadosUsuario.setNascimento(localStorage.getItem('nascimento'));
  }

  postData(valor) {
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

}

