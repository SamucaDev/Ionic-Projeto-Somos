import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { ServidorService } from '../../service/servidor-service.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-diario',
  templateUrl: './cadastrar-diario.page.html',
  styleUrls: ['./cadastrar-diario.page.scss'],
})
export class CadastrarDiarioPage implements OnInit {

  postagem: any;
  tituloDiario: any;
  subtituloDiario: any;
  conteudodiario: any;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService

  ) {
    this.postagem = this.formBuilder.group({
      tituloDiario: ['', Validators.required],
      subtituloDiario: ['', Validators.required],
      conteudodiario: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postarProduto() {

    if (this.subtituloDiario === undefined || this.tituloDiario === undefined || this.conteudodiario === undefined) {
      this.servidor.alertas('Atenção', 'Preencha todos os Campos');
    } else {
      this.postData(this.postagem.values)
        .subscribe(
          data => {
            console.log('Dados inseridos com sucesso');
          },
          err => {
            console.log('Erro ao tentar inserir');
          }
        );

    }
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget + '', valor, {
      headers: headers,
      method: ' POST '
    }).pipe(map(
      (res: Response) => {
        return res.json();
      })
    );
  }
}
