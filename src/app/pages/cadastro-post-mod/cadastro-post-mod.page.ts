import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { ServidorService } from '../../service/servidor-service.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-cadastro-post-mod',
  templateUrl: './cadastro-post-mod.page.html',
  styleUrls: ['./cadastro-post-mod.page.scss'],
})
export class CadastroPostModPage implements OnInit {

  postagemPost: any;
  conteudoPost: any;
  fotoPost: any;
  codigoUsuario: any;
  codigo: any;
  dataPost: any;
  statusPost: any;
  codModAprov: any;
  nomeUsu: any;
  tipoUsu: any;
  fotoUsu: any;
  codigoUsuPostou: any;


  constructor(
    public Router: Router,
    public camera: Camera,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {

    this.activatedRoute.queryParams.subscribe(parametros => {
      this.conteudoPost = parametros[' conteudoPost '];
      this.fotoPost = parametros[' fotoPost '];
      this.codigoUsuario = parametros[' codigoUsuario '];
      this.preencher();

      this.postagemPost = this.formBuilder.group({
        codigo: [this.codigo, Validators.required],
        conteudoPost: ['', Validators.required],
        fotoPost: ['', Validators.required],
        statusPost: [this.statusPost, Validators.required],
        codigoUsuario: this.dadosUsuario.getCodUsuario(),
        codModAprov: [this.codModAprov, Validators.required]

      });
    });
    console.log(this.codigo);
  }

  ngOnInit() { }

  preencher() {
    this.activatedRoute.queryParams.subscribe(parametros => {
      this.codigo = parametros['codigoPost'];
      this.dataPost = parametros['dataPost'];
      this.conteudoPost = parametros['conteudoPost'];
      this.fotoPost = parametros['fotoPost'];
      this.statusPost = parametros['statusPost'];
      this.codModAprov = parametros['codModAprov'];
      this.nomeUsu = parametros['nomeUsu'];
      this.tipoUsu = parametros['tipoUsu'];
      this.fotoUsu = parametros['fotoUsu'];
      this.codigoUsuPostou = parametros['codigoUsuPostou'];
      console.log(this.conteudoPost);
    });
  }


  postarPost() {
    this.Router.navigateByUrl('cadastro-post-usu');
    console.log(this.postagemPost.value);
    this.postData(this.postagemPost.value).subscribe(data => {
      console.log('Dados inseridos com sucesso');
    });
  }

  postData(valor) {
    if (this.codigo != null) {
      console.log('Atualizar');
      this.servidor.presentToast('Seu Post foi atualizado com sucesso!');
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      return this.http.post(this.servidor.Urlget() + 'editarPost.php', valor, {
        headers: headers,
        method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json();
        }
      ));
    } else {
      console.log('Criar');
      this.servidor.presentToast('Seu Post foi criado com sucesso!');
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      return this.http.post(this.servidor.Urlget() + 'cadastrarPost.php', valor, {
        headers: headers,
        method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json();
        }
      ));
    }
  }

}