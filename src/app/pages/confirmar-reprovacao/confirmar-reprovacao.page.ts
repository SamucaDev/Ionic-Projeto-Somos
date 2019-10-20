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
  selector: 'app-confirmar-reprovacao',
  templateUrl: './confirmar-reprovacao.page.html',
  styleUrls: ['./confirmar-reprovacao.page.scss'],
})
export class ConfirmarReprovacaoPage implements OnInit {

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
    ) { }

  ngOnInit() {
  }

   /* Rotas */
   RotaPostVerificacao() {
    this.Router.navigateByUrl('post-verificacao');
     }

}
