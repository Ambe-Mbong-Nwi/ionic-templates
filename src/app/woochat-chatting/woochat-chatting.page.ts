import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'; 
import { WoochatVideoCallPage } from '../woochat-video-call/woochat-video-call.page';
import { WoochatVoicecallPage } from '../woochat-voicecall/woochat-voicecall.page';

@Component({
  selector: 'app-woochat-chatting',
  templateUrl: './woochat-chatting.page.html',
  styleUrls: ['./woochat-chatting.page.scss'],
})
export class WoochatChattingPage implements OnInit {
  viewType: string;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  setViewType(vt) {
    this.viewType = vt;
  }

  profileinfo() {
    this.route.navigate(['./woochat-profile-info']);
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
}
