import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { ServidorService } from '../../service/servidor-service.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(
    public Router: Router,
    public navCtrl: NavController,
    public servidor: ServidorService,
    public alert: AlertController,
    public http: Http) {  }

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
}
