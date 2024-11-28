import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular'
import { MyEventsService } from '../services/events/my-events.service';

@Component({
  selector: 'app-shophour-offers',
  templateUrl: './shophour-offers.page.html',
  styleUrls: ['./shophour-offers.page.scss'],
})
export class ShophourOffersPage implements OnInit {

  constructor(public toastController: ToastController, private navCtrl: NavController, private myEvent: MyEventsService) { }

  ngOnInit() {
  }
  save() {
    this.navCtrl.pop();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Coupon Code Copied',
      duration: 1000,
      position: 'bottom',
      mode: 'ios',
    });
    toast.present();
  }

  viewMenu(menuNum) {
    this.myEvent.setMenuIdData(menuNum);
  }
}

