import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-handyzone-chat-list',
  templateUrl: './handyzone-chat-list.page.html',
  styleUrls: ['./handyzone-chat-list.page.scss'],
})
export class HandyzoneChatListPage implements OnInit {
  segment = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  conversation() {
    this.route.navigate(['./handyzone-conversation']);
  }
  // buyappalert() {
  //   this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  // }
  // developed_by() {
  //   window.open("https://opuslab.works/", '_system', 'location=no');
  // }
}
