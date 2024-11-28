import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shophour-payment-mode',
  templateUrl: './shophour-payment-mode.page.html',
  styleUrls: ['./shophour-payment-mode.page.scss'],
})
export class ShophourPaymentModePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    pay() {
      this.navCtrl.navigateRoot(['./shophour-order-confirm']);
    } 
}
