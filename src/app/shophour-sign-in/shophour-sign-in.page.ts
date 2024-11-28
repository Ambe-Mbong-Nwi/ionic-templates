import { Component, OnInit } from '@angular/core';
// import { MyEvent } from 'src/services/myevent.services';
import { MyEventsService } from '../services/events/my-events.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-shophour-sign-in',
  templateUrl: './shophour-sign-in.page.html',
  styleUrls: ['./shophour-sign-in.page.scss'],
})
export class ShophourSignInPage implements OnInit {
  countries = new Array<any>();
  constructor(private myEvent: MyEventsService, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }

  ngOnInit() {
  }

  home() {
    this.navCtrl.navigateRoot(['./shophour-home']);
  }
  sign_up() {
    this.navCtrl.navigateRoot(['./shophour-home']);
  }
}
