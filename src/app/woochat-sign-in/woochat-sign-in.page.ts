import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-woochat-sign-in',
  templateUrl: './woochat-sign-in.page.html',
  styleUrls: ['./woochat-sign-in.page.scss'],
})
export class WoochatSignInPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  tabs() {
    this.navCtrl.navigateRoot(['./woochat-tabs']);
  }
}
