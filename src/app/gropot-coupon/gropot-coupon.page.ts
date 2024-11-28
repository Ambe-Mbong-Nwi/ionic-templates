import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-gropot-coupon',
  templateUrl: './gropot-coupon.page.html',
  styleUrls: ['./gropot-coupon.page.scss'],
})
export class GropotCouponPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  apply() {
    this.navCtrl.pop();
  }
}
