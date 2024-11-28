import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-gropot-payment-method',
  templateUrl: './gropot-payment-method.page.html',
  styleUrls: ['./gropot-payment-method.page.scss'],
})
export class GropotPaymentMethodPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  home() {
    this.navCtrl.navigateRoot(['./gropot-home']);
  }
}
