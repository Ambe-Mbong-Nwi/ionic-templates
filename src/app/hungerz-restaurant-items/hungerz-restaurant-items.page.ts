import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { HungerzBookTablePage } from '../hungerz-book-table/hungerz-book-table.page';
@Component({
  selector: 'app-hungerz-restaurant-items',
  templateUrl: './hungerz-restaurant-items.page.html',
  styleUrls: ['./hungerz-restaurant-items.page.scss'],
})
export class HungerzRestaurantItemsPage implements OnInit {
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

  toggleFavoriteIcon() {
    this.FavoriteIcon = !this.FavoriteIcon;
  }

  // reviews() {
  //   this.route.navigate(['./reviews']);
  // }

  table_booking() {
    this.modalController.create({ component: HungerzBookTablePage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
