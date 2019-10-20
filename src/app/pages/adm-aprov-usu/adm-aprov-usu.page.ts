import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';

@Component({
  selector: 'app-adm-aprov-usu',
  templateUrl: './adm-aprov-usu.page.html',
  styleUrls: ['./adm-aprov-usu.page.scss'],
})
export class AdmAprovUsuPage implements OnInit {
  dados: any;
  dadosItem: Array<{
    COD_PROFI: any, CRP_PROFI: any, CRM_PROFI: any, CARGO_PRO: any, INSTITUICAO_PROFI: any, CNPJ_INSTITUICAO: any,
    TELEFONE_INSTITUICAO: any, COD_USU: any, NOME_USU: any, SOBRENOME_USU: any, CPF_USU: any, RG_USU: any,
    ENDERECO_USU: any, BAIRRO_USU: any, NUMERO_USU: any, COMPLEMENTO_USU: any, CEP_USU: any, UF_USU: any,
    PAIS_USU: any, CIDADE_USU: any, DATANASC_USU: any, TELEFONE_USU: any, CELULAR_USU: any, EMAIL_USU: any, TIPO_USU: any,
    FOTO_USU: any, DATA_INICIO: any
  }>;


  dadosItemTodos: Array<{
    COD_PROFI: any, CRP_PROFI: any, CRM_PROFI: any, CARGO_PRO: any, INSTITUICAO_PROFI: any, CNPJ_INSTITUICAO: any,
    TELEFONE_INSTITUICAO: any, COD_USU: any, NOME_USU: any, SOBRENOME_USU: any, CPF_USU: any, RG_USU: any,
    ENDERECO_USU: any, BAIRRO_USU: any, NUMERO_USU: any, COMPLEMENTO_USU: any, CEP_USU: any, UF_USU: any,
    PAIS_USU: any, CIDADE_USU: any, DATANASC_USU: any, TELEFONE_USU: any, CELULAR_USU: any, EMAIL_USU: any, TIPO_USU: any,
    FOTO_USU: any, DATA_INICIO: any
  }>;

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public ativeRouter: ActivatedRoute,
    public servidor: ServidorService,
    public alert: AlertController,
    public loading: LoadingController,
    public http: Http,
    public dadosUsuario: DadosUsuarioService
  ) {
    this.listDados();
  }

  ngOnInit() {
  }

  listDados() {
    this.dadosItem = [];
    this.postData(this.dadosUsuario.codUsuario).subscribe(
      listDados => {

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < listDados.length; i++) {

          {
            this.dadosItem.push({
              COD_PROFI: listDados[i].COD_PROFI,
              CRP_PROFI: listDados[i].CRP_PROFI,
              CRM_PROFI: listDados[i].CRM_PROFI,
              CARGO_PRO: listDados[i].CARGO_PRO,
              INSTITUICAO_PROFI: listDados[i].INSTITUICAO_PROFI,
              CNPJ_INSTITUICAO: listDados[i].CNPJ_INSTITUICAO,
              TELEFONE_INSTITUICAO: listDados[i].TELEFONE_INSTITUICAO,
              COD_USU: listDados[i].COD_USU,
              NOME_USU: listDados[i].NOME_USU,
              SOBRENOME_USU: listDados[i].SOBRENOME_USU,
              CPF_USU: listDados[i].CPF_USU,
              RG_USU: listDados[i].RG_USU,
              ENDERECO_USU: listDados[i].ENDERECO_USU,
              BAIRRO_USU: listDados[i].BAIRRO_USU,
              NUMERO_USU: listDados[i].NUMERO_USU,
              COMPLEMENTO_USU: listDados[i].COMPLEMENTO_USU,
              CEP_USU: listDados[i].CEP_USU,
              UF_USU: listDados[i].UF_USU,
              PAIS_USU: listDados[i].PAIS_USU,
              CIDADE_USU: listDados[i].CIDADE_USU,
              DATANASC_USU: listDados[i].DATANASC_USU,
              TELEFONE_USU: listDados[i].TELEFONE_USU,
              CELULAR_USU: listDados[i].CELULAR_USU,
              EMAIL_USU: listDados[i].EMAIL_USU,
              TIPO_USU: listDados[i].TIPO_USU,
              FOTO_USU: listDados[i].FOTO_USU,
              DATA_INICIO: listDados[i].DATA_INICIO,
            });
          }

          this.dadosItemTodos = this.dadosItem;
        }
      }

    );
  }

  postData(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'listDados.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));

  }

  doRefresh(event) {
    console.log('Recarregando dados');
    this.listDados();

    setTimeout(() => {
      console.log('Dados Recarregados');
      event.target.complete();
    }, 2000);
  }



  aprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'aprovarUsuario.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }
  async  AprovarUsuario(dados) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });
    this.aprovar(dados).subscribe(data => {
      console.log('Aprovado');
    });
    this.servidor.presentToast('Você aprovou este usuário!');
    await load.present();

    this.listDados();
    load.dismiss();
  }




  Reprovar(valor) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.servidor.Urlget() + 'reprovarUsuario.php', valor, {
      headers: headers,
      method: 'POST'
    }).pipe(map(
      (res: Response) => {
        return res.json();
      }
    ));
  }
  async ReprovarUsuario(dados) {
    const load = await this.loading.create({
      message: 'Aprovando Post'
    });
    this.Reprovar(dados).subscribe(data => {
      console.log('Reprovar');

    });
    this.servidor.presentToast('Você reprovou este usuário');
    await load.present();
    this.listDados();
    load.dismiss();


  }

  RotaAdmAprov() {
    this.Router.navigateByUrl('/adm-aprov-usu');
  }

  RotaDenuPost() {
    this.Router.navigateByUrl('/analise-denuncia');
  }

  
  RotaPerfilAdm() {
    this.Router.navigateByUrl('/perfil-administrador');
  }
}
