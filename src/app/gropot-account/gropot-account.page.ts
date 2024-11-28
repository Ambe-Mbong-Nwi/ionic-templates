import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gropot-account',
  templateUrl: './gropot-account.page.html',
  styleUrls: ['./gropot-account.page.scss'],
})
export class GropotAccountPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  change_language: string = "en";
  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot(['./gropot-sign-in']);
  }
}
