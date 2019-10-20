import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usu-msg',
  templateUrl: './cadastro-usu-msg.page.html',
  styleUrls: ['./cadastro-usu-msg.page.scss'],
})
export class CadastroUsuMsgPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  RotaLogin() {
    this.router.navigateByUrl('termo-de-uso');
  }
}
