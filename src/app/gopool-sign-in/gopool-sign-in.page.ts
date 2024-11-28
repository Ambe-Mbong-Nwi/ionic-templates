import { Component, OnInit } from '@angular/core';
// import { MyEvent } from 'src/services/myevent.services';
import { MyEventsService } from '../services/events/my-events.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-gopool-sign-in',
  templateUrl: './gopool-sign-in.page.html',
  styleUrls: ['./gopool-sign-in.page.scss'],
})
export class GopoolSignInPage implements OnInit {
  countries = new Array<any>();
  constructor(private myEvent: MyEventsService, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }
  ngOnInit() {
  }

  continue() {
    this.navCtrl.navigateRoot(['./gopool-tabs/GopoolHome']);
  }
  // verification() {
  //   this.route.navigate(['./verification']);
  // }
  // tabs() {
  //   this.navCtrl.navigateRoot(['./tabs']);
  // }
}
