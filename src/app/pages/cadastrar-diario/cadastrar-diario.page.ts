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
  selector: 'app-cadastrar-diario',
  templateUrl: './cadastrar-diario.page.html',
  styleUrls: ['./cadastrar-diario.page.scss'],
})
export class CadastrarDiarioPage implements OnInit {

  postagem: any;
  tituloDiario: any;
  conteudodiario: any;
  imageSrcDiario: any;
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
    public dadosUsuario: DadosUsuarioService



  ) {
    this.activatedRoute.queryParams.subscribe(parametros => {
      this.tituloDiario = parametros[' tituloDiario '];
      this.conteudodiario = parametros[' conteudodiario '];
      this.imageSrcDiario = parametros[' imageSrcDiario '];
      this.codigoUsuario = parametros[' codigoUsuario '];

      this.postagem = this.formBuilder.group({
      tituloDiario: ['', Validators.required],
      conteudodiario: ['', Validators.required],
      imageSrcDiario: ['', Validators.required],
      codigoUsuario: this.dadosUsuario.getCodUsuario()
    });
  });
  }

  ngOnInit() { }

  postarDiario() {
    console.log(this.postagem.value);
    this.postData(this.postagem.value).subscribe(data => {
    console.log('Dados inseridos com sucesso');
    });
    }

    postData(valor) {
      let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded'});
      return this.http.post( this.servidor.Urlget() + 'cadastrarDiario.php', valor, {
      headers: headers,
      method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json(); }
      ));

    }

}
