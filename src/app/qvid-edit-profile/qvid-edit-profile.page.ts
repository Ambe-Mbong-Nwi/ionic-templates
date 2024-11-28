import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-qvid-edit-profile',
  templateUrl: './qvid-edit-profile.page.html',
  styleUrls: ['./qvid-edit-profile.page.scss'],
})
export class QvidEditProfilePage implements OnInit {
  gender: string = "female";
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  tabs() {
    this.navCtrl.navigateRoot(['./qvid-tabs']);
  }
}
