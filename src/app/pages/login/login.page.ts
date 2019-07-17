import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
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


  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public loading: LoadingController,
    public dadosUsuario: DadosUsuarioService) {

      this.email = 'gabriel@gmail.com';
      this.senha = '123';

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
    this.Router.navigateByUrl('cadastro');

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

      this.servidor.alertas('Atenção', 'Preencha todos os campos');

    } else {
      const load = await this.loading.create({
        message: 'Verificando Login...'
      });
      await load.present();

      this.http.get(this.servidor.Urlget() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(map(res => res.json()))
        .subscribe(
           dados => {
            if (dados.msg.logado === 'sim') {
              this.dadosUsuario.setCodUsuario(dados.dados.codigo);
              this.dadosUsuario.setNomeUsuario(dados.dados.nome);
              this.dadosUsuario.setEmailUsuario(dados.dados.email);
              this.dadosUsuario.setFotoUsuario(dados.dados.foto);
              this.dadosUsuario.setTipoUsuario(dados.dados.tipo);
              this.dadosUsuario.setStatusUsuario(dados.dados.status);
              localStorage.setItem('CodUsuario', dados.dados.codigo);
              localStorage.setItem('NomeUsuario', dados.dados.nome);
              localStorage.setItem('EmailUsuario', dados.dados.email);
              localStorage.setItem('FotoUsuario', dados.dados.foto);
              localStorage.setItem('TipoUsuario', dados.dados.tipo);
              localStorage.setItem('StatusUsuario', dados.dados.status);

              load.dismiss();
              localStorage.setItem('user_logado', dados);

              this.Router.navigateByUrl('/home');

            } else {
              load.dismiss();
              this.servidor.alertas('Atenção', 'Usuário inválido');
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
  }
}

