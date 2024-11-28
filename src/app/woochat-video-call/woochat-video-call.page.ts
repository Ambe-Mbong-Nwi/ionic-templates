import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-woochat-video-call',
  templateUrl: './woochat-video-call.page.html',
  styleUrls: ['./woochat-video-call.page.scss'],
})
export class WoochatVideoCallPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
