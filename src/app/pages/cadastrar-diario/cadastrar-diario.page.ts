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
  codigoDiario: any;
  tituloDiario: any;
  conteudodiario: any;
  imageSrcDiario: any;
  codigoUsuario: any;
  codigo: any;
  dataDiario: any;

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

      this.preencher();
      this.postagem = this.formBuilder.group({

      codigo: [this.codigo, Validators.required],
      tituloDiario: ['', Validators.required],
      conteudodiario: ['', Validators.required],
      imageSrcDiario: ['', Validators.required],
      codigoUsuario: this.dadosUsuario.getCodUsuario()
    });
  });

  }




  ngOnInit() { }

 preencher() {
   this.activatedRoute.queryParams.subscribe(parametros => {
    this.codigo = parametros['codigoDiario'];
    this.tituloDiario = parametros['tituloDiario'];
    this.conteudodiario = parametros['conteudoDiario'];
    this.dataDiario = parametros['dataDiario'];
    this.imageSrcDiario = parametros['imageSrcDiario'];
    console.log(this.codigo);
   });
 }

  postarDiario() {
    this.Router.navigateByUrl('diario');
    this.servidor.presentToast('Item cadastrado em seus diário!');
    console.log(this.postagem.value);
    this.postData(this.postagem.value).subscribe(data => {
    console.log('Dados inseridos com sucesso');
    });
    }

    postData(valor) {

      if (this.codigo != null) {
        console.log('Atualizar');
        let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post( this.servidor.Urlget() + 'editarDiario.php', valor, {
      headers: headers,
      method: 'POST'
      }).pipe(map(
        (res: Response) => {
          return res.json(); }
      ));
      } else {


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

}
