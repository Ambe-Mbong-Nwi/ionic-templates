import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QvidVideoviewPage } from '../qvid-videoview/qvid-videoview.page';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-qvid-user-profile',
  templateUrl: './qvid-user-profile.page.html',
  styleUrls: ['./qvid-user-profile.page.scss'],
})
export class QvidUserProfilePage implements OnInit {
  showToolbar = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 250;
    }
  }

  chat_screen() {
    this.route.navigate(['./qvid-chat']);
  }
  followers() {
    this.route.navigate(['./qvid-followers']);
  }
  video_view() {
    this.modalController.create({ component: QvidVideoviewPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
