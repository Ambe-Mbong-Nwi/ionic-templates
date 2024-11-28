import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-woochat-voicecall',
  templateUrl: './woochat-voicecall.page.html',
  styleUrls: ['./woochat-voicecall.page.scss'],
})
export class WoochatVoicecallPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }
}
