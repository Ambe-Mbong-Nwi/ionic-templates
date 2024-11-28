import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-doctoworld-cart',
  templateUrl: './doctoworld-cart.page.html',
  styleUrls: ['./doctoworld-cart.page.scss'],
})
export class DoctoworldCartPage implements OnInit {
  fabAction = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }


  toggleFab() {
    this.fabAction = !this.fabAction;
  }
  confirm_order() {
    this.route.navigate(['./doctoworld-confirm-order']);
  }
  // offers() {
  //   this.route.navigate(['./offers']);
  // }
  // prescription() {
  //   this.modalController.create({ component: PrescriptionPage }).then((modalElement) => {
  //     modalElement.present();
  //   }
  //   )
  // }
}
