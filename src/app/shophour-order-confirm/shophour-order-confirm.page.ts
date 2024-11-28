import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shophour-order-confirm',
  templateUrl: './shophour-order-confirm.page.html',
  styleUrls: ['./shophour-order-confirm.page.scss'],
})
export class ShophourOrderConfirmPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  home() {
    this.navCtrl.navigateRoot(['./shophour-home']);
  }
  my_orders() {
    this.navCtrl.navigateRoot(['./shophour-my-orders']);
  }
}
