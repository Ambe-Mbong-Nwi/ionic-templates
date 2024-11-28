import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QvidAddvideoPage } from '../qvid-addvideo/qvid-addvideo.page';

@Component({
  selector: 'app-qvid-tabs',
  templateUrl: './qvid-tabs.page.html',
  styleUrls: ['./qvid-tabs.page.scss'],
})
export class QvidTabsPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  add_video() {
    this.modalController.create({ component: QvidAddvideoPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
