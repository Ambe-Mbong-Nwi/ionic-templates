import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-my-orders',
  templateUrl: './hungerz-my-orders.page.html',
  styleUrls: ['./hungerz-my-orders.page.scss'],
})
export class HungerzMyOrdersPage implements OnInit {
  segment = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  order_detail() {
    this.route.navigate(['./hungerz-order-detail']);
  }
  add_review() {
    this.route.navigate(['./hungerz-add-review']);
  }
}
