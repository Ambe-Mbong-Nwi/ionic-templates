import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WoochatVideoCallPage } from '../woochat-video-call/woochat-video-call.page';
import { WoochatVoicecallPage } from '../woochat-voicecall/woochat-voicecall.page';

@Component({
  selector: 'app-woochat-profile-info',
  templateUrl: './woochat-profile-info.page.html',
  styleUrls: ['./woochat-profile-info.page.scss'],
})
export class WoochatProfileInfoPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  videocall() {
    this.modalController.create({ component: WoochatVideoCallPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
  voicecall() {
    this.modalController.create({ component: WoochatVoicecallPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
  // profilepicture() {
  //   this.modalController.create({ component: PicturePage }).then((modalElement) => {
  //     modalElement.present();
  //   }
  //   )
  // }
}
