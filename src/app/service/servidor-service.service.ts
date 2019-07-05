import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  // Aplicatico Radando em localHost
  url: string = 'http://localhost/Somos/PHP/';

  constructor(
    public http: Http,
    public alert: AlertController
  ) {
    console.log('Banco de dados conectado com a aplicação!');

  }

  getPegar() {
    return this.http.get(this.url + 'dados.php').pipe(map(res => res.json()));
  }

  Urlget() {
    return this.url;
  }

  async alertas(titulo, msg) {
    const alert = await this.alert.create({
      header: titulo,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
