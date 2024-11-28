import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-chat',
  templateUrl: './hungerz-chat.page.html',
  styleUrls: ['./hungerz-chat.page.scss'],
})
export class HungerzChatPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
