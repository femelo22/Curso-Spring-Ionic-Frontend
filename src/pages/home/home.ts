import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' //referencia para qual arquivo está controlando
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //FAZ A NAVEGAÇÃO DA HOME PAGE PARA A CATEGORIA PAGE
  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
