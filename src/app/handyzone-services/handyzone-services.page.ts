import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MyEvent } from 'src/services/myevent.services'


@Component({
  selector: 'app-handyzone-services',
  templateUrl: './handyzone-services.page.html',
  styleUrls: ['./handyzone-services.page.scss'],
}) 
export class HandyzoneServicesPage implements OnInit {
  MyEventsService: any;

  constructor(private route: Router, private navCtrl: NavController, private myEvent: MyEvent) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.myEvent.setAnimation(true);
  }

  service_request() {
    this.route.navigate(['./handyzone-service-request']);
  }
  back() {
    this.navCtrl.pop();
  }
}
