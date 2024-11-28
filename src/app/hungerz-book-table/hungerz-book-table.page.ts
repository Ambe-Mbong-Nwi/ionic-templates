import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-book-table',
  templateUrl: './hungerz-book-table.page.html',
  styleUrls: ['./hungerz-book-table.page.scss'],
})
export class HungerzBookTablePage implements OnInit {

  constructor(private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  table_booked() {
    this.modalController.dismiss();
    this.navCtrl.navigateRoot(['./hungerz-tabs/hungerzMyOrders']);
  }
}
