import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-woochat-more',
  templateUrl: './woochat-more.page.html',
  styleUrls: ['./woochat-more.page.scss'],
})
export class WoochatMorePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot(['./woochat-sign-in']);
  }
}
