import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HungerzChatPage } from '../hungerz-chat/hungerz-chat.page';

@Component({
  selector: 'app-hungerz-order-detail',
  templateUrl: './hungerz-order-detail.page.html',
  styleUrls: ['./hungerz-order-detail.page.scss'],
})
export class HungerzOrderDetailPage implements OnInit {
  fabAction = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  toggleFab() {
    this.fabAction = !this.fabAction;
  }
  chat() {
    this.modalController.create({ component: HungerzChatPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
