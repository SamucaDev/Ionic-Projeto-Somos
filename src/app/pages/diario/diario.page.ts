import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';



@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  diario: any;
  diarioItem: Array<{ codigoDiario: any, tituloDiario: any, conteudoDiario: any, dataDiario: any, imagemDiario: any }>;
  diarioItemTodos: Array<{
    codigoDiario: any, tituloDiario: any,
    conteudoDiario: any, dataDiario: any, imagemDiario: any
  }>;


  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService) {
    this.listDiarios();

  }

  ngOnInit() {
  }

  RotaChat() {
    this.Router.navigateByUrl('chat');
  }

  RotaDiario() {
    this.Router.navigateByUrl('diario');
  }

  RotaPost() {
    this.Router.navigateByUrl('post');
  }

  RotaCadastrarDiario() {
    this.Router.navigateByUrl('cadastrar-diario');
  }

  listDiarios() {
    this.diarioItem = [];
    this.postData(this.dadosUsuario.codUsuario).subscribe(
      listDiarios => {

  // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < listDiarios.length; i++) {

          {
            this.diarioItem.push({
              codigoDiario: listDiarios[i]['codigoDiario'],
              tituloDiario: listDiarios[i]['tituloDiario'],
              conteudoDiario: listDiarios[i]['conteudoDiario'],
              dataDiario: listDiarios[i]['dataDiario'],
              imagemDiario: listDiarios[i]['imagemDiario']
            });
          }

          this.diarioItemTodos = this.diarioItem;
        }
      }

    );



  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.listDiarios();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getItems(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.diarioItem = this.diarioItemTodos.filter((diario) => {
        return (diario.tituloDiario.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                diario.conteudoDiario.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                diario.dataDiario.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.diarioItem = this.diarioItemTodos;
    }
    console.log(this.diarioItem);
  }


  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'listDiario.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }


}
