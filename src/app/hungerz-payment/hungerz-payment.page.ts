import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-payment',
  templateUrl: './hungerz-payment.page.html',
  styleUrls: ['./hungerz-payment.page.scss'],
})
export class HungerzPaymentPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  pay() {
    this.navCtrl.navigateRoot(['./hungerz-tabs/hungerzMyOrders']);
  }
}
