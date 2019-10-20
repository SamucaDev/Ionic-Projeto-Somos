import { Component, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ServidorService } from 'src/app/service/servidor-service.service';
import { DadosUsuarioService } from 'src/app/service/dados-usuario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analise-humor',
  templateUrl: './analise-humor.page.html',
  styleUrls: ['./analise-humor.page.scss'],
})
export class AnaliseHumorPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  humor: string;
  mes: string;
  ano: string;
  data: any;
  humortipoExcelente: any;
  humortipoFeliz: any;
  humortipoTedio: any;
  humortipoTriste: any;
  humortipoNervoso: any;
  humortipo1: any = 1;
  humortipo2: any = 2;
  humortipo3: any = 3;
  humortipo4: any = 4;
  humortipo5: any = 5;

  constructor(

    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http,
    public formBuilder: FormBuilder,
    public loading: LoadingController,
    public dadosUsuario: DadosUsuarioService
  ) {

    this.data = this.formBuilder.group({
      mes: ['', Validators.required],
      ano: ['', Validators.required]
    });


  }

  ngOnInit() {
    this.barChartMethod();

  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Excelente', 'Feliz', 'Tédio', 'Triste', 'Nervoso'],
        datasets: [{
          label: 'Gráfico do seu humor mensal',
          data: [this.humortipoExcelente, this.humorFeliz, this.humorTedio, this.humorTriste, this.humorNervoso],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  humorExcelente() {
    this.http
      .get(
        this.servidor.Urlget() +
        "qtdHumor.php?emoji=" +
        this.humortipo1 +
        "&codigoUsuario=" +
        this.dadosUsuario.codUsuario +
        "&mes_selecionado=" + this.mes +
        "&ano_selecionado=" + this.ano
      )
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.humortipoExcelente = getQuantidade.dados;
        console.log(this.humortipoExcelente);
      });

  }

  humorFeliz() {
    this.http
      .get(
        this.servidor.Urlget() +
        "qtdHumor.php?emoji=" +
        this.humortipo2 +
        "&codigoUsuario=" +
        this.dadosUsuario.codUsuario +
        "&mes_selecionado=" + this.mes +
        "&ano_selecionado=" + this.ano
      )
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.humortipoFeliz = getQuantidade.dados;
        console.log(this.humortipoFeliz);
      });

  }

  humorTedio() {

    this.http
      .get(
        this.servidor.Urlget() +
        "qtdHumor.php?emoji=" +
        this.humortipo3 +
        "&codigoUsuario=" +
        this.dadosUsuario.codUsuario +
        "&mes_selecionado=" + this.mes +
        "&ano_selecionado=" + this.ano
      )
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.humortipoTedio = getQuantidade.dados;
        console.log(this.humortipoTedio);
      });

  }

  humorTriste() {
    console.log(this.data);

    this.http
      .get(
        this.servidor.Urlget() +
        "qtdHumor.php?emoji=" +
        this.humortipo4 +
        "&codigoUsuario=" +
        this.dadosUsuario.codUsuario +
        "&mes_selecionado=" + this.mes +
        "&ano_selecionado=" + this.ano
      )
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.humortipoTriste = getQuantidade.dados;
        console.log(this.humortipoTriste);
      });

  }

  humorNervoso() {

    this.http
      .get(
        this.servidor.Urlget() +
        "qtdHumor.php?emoji=" +
        this.humortipo5 +
        "&codigoUsuario=" +
        this.dadosUsuario.codUsuario +
        "&mes_selecionado=" + this.mes +
        "&ano_selecionado=" + this.ano
      )
      .pipe(map(res => res.json()))
      .subscribe(getQuantidade => {
        console.log(getQuantidade.dados);
        this.humortipoNervoso = getQuantidade.dados;
        console.log(this.humortipoNervoso);
      });

  }

  aparecerGrafico() {
    this.humorExcelente();
    this.humorFeliz();
    this.humorTedio();
    this.humorTriste();
    this.humorNervoso();

    this.barChart.data.datasets[0].data[0] = this.humortipoExcelente;
    this.barChart.data.datasets[0].data[1] = this.humortipoFeliz;
    this.barChart.data.datasets[0].data[2] = this.humortipoTedio;
    this.barChart.data.datasets[0].data[3] = this.humortipoTriste;
    this.barChart.data.datasets[0].data[4] = this.humortipoNervoso;

    this.barChart.update();

  }


}
