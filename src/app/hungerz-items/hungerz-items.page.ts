import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HungerzVariationSelectionPage } from '../hungerz-variation-selection/hungerz-variation-selection.page';
import { HungerzTableBookingPage } from '../hungerz-table-booking/hungerz-table-booking.page';
import { HungerzOrderingMethodPage } from '../hungerz-ordering-method/hungerz-ordering-method.page';

import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-hungerz-items',
  templateUrl: './hungerz-items.page.html',
  styleUrls: ['./hungerz-items.page.scss'],
})
export class HungerzItemsPage implements OnInit {
  segment = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  FavoriteIcon = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  cart() {
    this.route.navigate(['./cart']);
  }

  toggleFavoriteIcon() {
    this.FavoriteIcon = !this.FavoriteIcon;
  }

  reviews() {
    this.route.navigate(['./reviews']);
  }
  variation_selection() {
    this.modalController.create({ component: HungerzVariationSelectionPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

  table_booking() {
    this.modalController.create({ component: HungerzTableBookingPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
  continue() {
    this.modalController.create({ component: HungerzOrderingMethodPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
