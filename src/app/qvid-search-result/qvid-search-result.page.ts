import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { QvidVideoviewPage } from '../qvid-videoview/qvid-videoview.page';

@Component({
  selector: 'app-qvid-search-result',
  templateUrl: './qvid-search-result.page.html',
  styleUrls: ['./qvid-search-result.page.scss'],
})
export class QvidSearchResultPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  user_profile() {
    this.route.navigate(['./qvid-user-profile']);
  }
  video_view() {
    this.modalController.create({ component: QvidVideoviewPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
