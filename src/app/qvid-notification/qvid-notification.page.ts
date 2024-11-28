import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-qvid-notification',
  templateUrl: './qvid-notification.page.html',
  styleUrls: ['./qvid-notification.page.scss'],
})
export class QvidNotificationPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  chat_screen() {
    this.route.navigate(['./qvid-chat']);
  }
}
