import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController  } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';



@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  detalhe: NavigationExtras;
  diario: any;
  diarioItem: Array<{ codigoDiario: any, tituloDiario: any, conteudoDiario: any, dataDiario: any, imageSrcDiario: any, CodigoUsuario: any}>;
  diarioItemTodos: Array<{
    codigoDiario: any, tituloDiario: any,
    conteudoDiario: any, dataDiario: any, imageSrcDiario: any, CodigoUsuario: any
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
    this.Router.navigateByUrl('chat-usuario');
  }

  RotaDiario() {
    this.Router.navigateByUrl('diario');
  }

  RotaPost() {
    this.Router.navigateByUrl('post');
  }

  RotaHome() {
    this.Router.navigateByUrl('home');
  }

  RotaPerfil() {
    this.Router.navigateByUrl('perfil-usuario');
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
              imageSrcDiario: listDiarios[i]['imageSrcDiario'],
              CodigoUsuario: listDiarios[i]['CodigoUsuario']
            });
          }

          this.diarioItemTodos = this.diarioItem;
        }
      }

    );



  }

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listDiarios();

    setTimeout(() => {
      console.log('Dados Recarregados');
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

  delete(codigo) {
    let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post( this.servidor.Urlget() + 'deleteDiario.php', codigo, {
    headers: headers,
    method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res; }
    ));
  }

  deleteDiario(diario) {
    this.delete(diario.codigoDiario)
    .subscribe(
      data => {
        console.log('produto deletado com sucesso');
        this.listDiarios();
        this.servidor.presentToast('Um item do seu diario foi excluido com sucesso!');
      }, error => {
        console.log('erro ao tentar excluir' + error);
        this.servidor.presentToast('Erro ao tentar excluir um item do seu diário!');
      }
    );
  }

  editDiario(diario) {
    this.detalhe = {
      queryParams: {
        'codigoDiario': diario.codigoDiario,
        'tituloDiario': diario.tituloDiario,
        'conteudoDiario': diario.conteudoDiario,
        'dataDiario': diario.dataDiario,
        'imageSrcDiario': diario.imageSrcDiario
      }
    };
    this.Router.navigate(['cadastrar-diario'], this.detalhe);
  }

}
