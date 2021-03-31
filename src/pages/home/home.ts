import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' //referencia para qual arquivo está controlando
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter(){ //quando entrar no login, tira a função de aparecer o menu
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){//quando sair do login, volta a função de aparecer o menu
    this.menu.swipeEnable(true);
  }

  //FAZ A NAVEGAÇÃO DA HOME PAGE PARA A CATEGORIA PAGE
  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
