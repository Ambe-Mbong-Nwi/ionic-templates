import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hungerz-ordering-method',
  templateUrl: './hungerz-ordering-method.page.html',
  styleUrls: ['./hungerz-ordering-method.page.scss'],
})
export class HungerzOrderingMethodPage implements OnInit {

  constructor(private navCtrl: NavController, private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }

  continue() {
    this.modalController.dismiss();
    this.route.navigate(['./hungerz-confirm-order']);
  }
}
