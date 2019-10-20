import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-home-moderador',
  templateUrl: './home-moderador.page.html',
  styleUrls: ['./home-moderador.page.scss'],
})
export class HomeModeradorPage implements OnInit {


  emojiContent: any;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public ativeRouter: ActivatedRoute,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) { }

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

  selecionarEmojiContente() {
    
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

}
