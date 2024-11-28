import { Component, OnInit } from '@angular/core';
// import { MyEvent } from 'src/services/myevent.services';
import { MyEventsService } from '../services/events/my-events.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-gropot-sign-in',
  templateUrl: './gropot-sign-in.page.html',
  styleUrls: ['./gropot-sign-in.page.scss'],
})
export class GropotSignInPage implements OnInit {
  countries = new Array<any>();
  constructor(private myEvent: MyEventsService, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }

  ngOnInit() {
  }

  continue() {
    this.navCtrl.navigateRoot(['./gropot-home']);
  }

  home() {
    this.navCtrl.navigateRoot(['./gropot-home']);
  }
}
