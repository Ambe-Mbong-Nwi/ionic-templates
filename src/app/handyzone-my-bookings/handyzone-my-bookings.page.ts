import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-handyzone-my-bookings',
  templateUrl: './handyzone-my-bookings.page.html',
  styleUrls: ['./handyzone-my-bookings.page.scss'],
})
export class HandyzoneMyBookingsPage implements OnInit {
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

  booking_info() {
    this.route.navigate(['./handyzone-booking-info']);
  }
  job_accepted() {
    this.route.navigate(['./handyzone-booking-info']);
  }
  job_started() {
    this.route.navigate(['./handyzone-booking-info']);
  }
  job_completed() {
    this.route.navigate(['./handyzone-booking-info']);
  }
  work_ratings() {
    this.route.navigate(['./handyzone-work-ratings']);
  }
  job_cancelled() {
    this.route.navigate(['./handyzone-booking-info']);
  }

  //  buyappalert() {
  //      this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  //    }    

}
