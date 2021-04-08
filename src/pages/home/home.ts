import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' //referencia para qual arquivo está controlando
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() { //quando entrar no login, tira a função de aparecer o menu
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {//quando sair do login, volta a função de aparecer o menu
    this.menu.swipeEnable(true);
  }

  //FAZ A NAVEGAÇÃO DA HOME PAGE PARA A CATEGORIA PAGE
  login() {
    this.auth.authenticate(this.creds)
      .subscribe(resposta => {
        this.auth.successfulLogin(resposta.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

}
