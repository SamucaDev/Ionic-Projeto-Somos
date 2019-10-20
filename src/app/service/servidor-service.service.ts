import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  // Aplicatico Radando em localHost
  //url: string = 'http://localhost/Somos/PHP/';
  url: string = 'https://projetosomos.com/php/';

  constructor(
    public http: Http,
    public alert: AlertController,
    public ToastController: ToastController
  ) {
    console.log('Banco de dados conectado com a aplicação!');

  }

  getPegar() {
    return this.http.get(this.url + 'dados.php').pipe(map(res => res.json()));
  }

  Urlget() {
    return this.url;
  }

  async alertas(titulo, msg, botao) {
    const alert = await this.alert.create({
      header: titulo,
      message: msg,
      buttons: [botao]
    });
    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
