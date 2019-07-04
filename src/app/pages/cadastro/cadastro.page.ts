import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http , Headers, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPositions = 0;
  public wavesDifference = 90;

  contatos: any;
  email: any;
  senha: any;

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


  constructor(
    public Router: Router,
    public FormBuilder: FormBuilder,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,

  ) {

    this.activatedRoute.queryParams.subscribe(parametros => {
      this.email = parametros[' email '];
      this.senha = parametros[' senha '];
      this.nome = parametros[' nome '];
      this.cpf = parametros[' cpf '];
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

      this.cadastro = this.FormBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
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
      celular: ['', Validators.required]
    });
  });
  }

  ngOnInit() { }



cadastrarUsuario() {
console.log(this.cadastro.value);
this.postData(this.cadastro.value).subscribe(data => {
console.log('Dados inseridos com sucesso');
});
}

postData(valor) {
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  return this.http
  .post(this.servidor.Urlget() + 'cadastrarUsuario.php', valor, {
    headers: headers,
    method: 'POST'
  })
  .pipe(
    map((res:Response) => {
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

  async logar() {
    if (this.email === undefined || this.senha === undefined) {
      const alert = await this.alert.create({
        header: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      this.http.get(this.servidor.Urlget() + 'login.php?email=' + this.email + '&senha=' + this.senha)
        .pipe(map(res => res.json()))
        .subscribe(
          async dados => {
            if (dados.msg.logado === 'sim') {
              this.Router.navigateByUrl('/home');
            } else {
              const alert = await this.alert.create({
                header: 'Atenção',
                message: 'Usuário inválido',
                buttons: ['OK']
              });
              await alert.present();
            }
          });
    }
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPositions += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPositions -= this.wavesDifference;
    }
  }
}
