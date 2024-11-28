import { Component, OnInit, Inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
// import { BuyappalertPage } from '../buyappalert/buyappalert.page';

@Component({
  selector: 'app-qvid-addvideo',
  templateUrl: './qvid-addvideo.page.html',
  styleUrls: ['./qvid-addvideo.page.scss'],
})
export class QvidAddvideoPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }

  add_video_filter() {
    this.modalController.dismiss();
    this.route.navigate(['./qvid-filter']);
  }


  // buyappalert() {
  //   this.modalController
  //     .create({ component: BuyappalertPage })
  //     .then(modalElement => {
  //       modalElement.present()
  //     })
  // }
}
