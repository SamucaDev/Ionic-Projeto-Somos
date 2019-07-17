import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { ServidorService } from '../../service/servidor-service.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastrar-post',
  templateUrl: './cadastrar-post.page.html',
  styleUrls: ['./cadastrar-post.page.scss'],
})
export class CadastrarPostPage implements OnInit {

  postagemPost: any;
  conteudoPost: any;
  fotoPost: any;
  codigoUsuario: any;


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

      this.postagemPost = this.formBuilder.group({
        conteudoPost: ['', Validators.required],
        fotoPost: ['', Validators.required],
        codigoUsuario: this.dadosUsuario.getCodUsuario()
      });
    });
  }

  ngOnInit() { }

  postarPost() {
    console.log(this.postagemPost.value);
    this.postData(this.postagemPost.value).subscribe(data => {
    console.log('Dados inseridos com sucesso');
    });
    }

    postData(valor) {
      let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded'});
      return this.http.post( this.servidor.Urlget() + 'cadastrarPost.php', valor, {
      headers: headers,
      method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json(); }
      ));

    }

}

