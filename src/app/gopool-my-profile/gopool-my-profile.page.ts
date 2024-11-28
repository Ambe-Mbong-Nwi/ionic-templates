import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-gopool-my-profile',
  templateUrl: './gopool-my-profile.page.html',
  styleUrls: ['./gopool-my-profile.page.scss'],
})
export class GopoolMyProfilePage implements OnInit {

  segment = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  logout() {
    this.navCtrl.navigateRoot(['./gopool-sign-in']);
  }
}
