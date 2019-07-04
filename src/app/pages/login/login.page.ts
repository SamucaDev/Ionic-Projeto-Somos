import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


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
    public http: Http) {

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
      const alert = await this.alert.create({
        header: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      this.http.get(this.servidor.Urlget() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(map(res => res.json()))
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
          }
        );
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

