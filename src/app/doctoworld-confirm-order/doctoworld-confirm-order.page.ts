import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctoworld-confirm-order',
  templateUrl: './doctoworld-confirm-order.page.html',
  styleUrls: ['./doctoworld-confirm-order.page.scss'],
})
export class DoctoworldConfirmOrderPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  select_paymet_method() {
    this.navCtrl.navigateRoot(['./doctoworld-tabs/DoctoworldHome']);
  }
}
